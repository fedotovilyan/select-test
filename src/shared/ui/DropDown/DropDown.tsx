import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useEffect,
} from "react";
import cls from "./DropDown.module.scss";
import classNames from "classnames";
import { useMemo } from 'react';

export interface DropdownItem {
  item: ReactNode;
  key: string | number;
}

interface DropDownProps extends PropsWithChildren {
  items: DropdownItem[];
  showItems: boolean;
  setShowItems: (value: boolean) => void;
  dropdownRender?: (menu: ReactNode) => ReactNode;
}

export const DropDown: FC<DropDownProps> = (props) => {
  const { children, items, setShowItems, showItems, dropdownRender } = props;

  useEffect(() => {
    const onBodyClick = () => {
      setShowItems(false);
    };

    document.body.addEventListener("click", onBodyClick);
    return () => document.body.removeEventListener("click", onBodyClick);
  }, [setShowItems]);

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowItems(true);
  };

  const itemsNode = useMemo(() => items.map(({ item, key }) => (
    <div key={key} className={cls.item}>
      {item}
    </div>
  )), [items]);

  return (
    <div className={cls.dropdown_container} onClick={onClick}>
      <div className={cls.children}>{children}</div>
      <div
        className={classNames(cls.items, {
          [cls.opened]: showItems,
        })}
      >
        {dropdownRender ? dropdownRender(itemsNode) : itemsNode}
      </div>
    </div>
  );
};
