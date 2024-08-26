import { useState } from "react";
import "./App.css";
import { Flex, Select } from "./shared/ui";
import { Input } from "./shared/ui/Input/Input";
import { nanoid } from "nanoid";
import { defaultOptions, optionsWithCustomLabels } from "./constants";

function App() {
  const [searchOptions, setSearchOptions] = useState(defaultOptions);
  const [customDropdownOptions, setCustomDropdownOptions] =
    useState(defaultOptions);
  const [newItemInputValue, setNewItemInputValue] = useState("");

  return (
    <div className="app">
      <Flex direction="column" gap={5}>
        <h4>Дефолтный Select</h4>
        <Select options={defaultOptions} placeholder="Placeholder" />
      </Flex>
      <Flex direction="column">
        <h4>Множественный выбор</h4>
        <Select options={defaultOptions} placeholder="Placeholder" multiple />
      </Flex>
      <Flex direction="column">
        <h4>Поиск</h4>
        <Select
          options={searchOptions}
          placeholder="Placeholder"
          withSearch
          onSearch={(val) =>
            setSearchOptions((prev) => {
              if (!val) return defaultOptions;
              return prev.filter(({ label }) =>
                label.toLowerCase().includes(val.toLowerCase())
              );
            })
          }
        />
      </Flex>
      <Flex direction="column">
        <h4>Кастомный лейбл</h4>
        <Select options={optionsWithCustomLabels} placeholder="Placeholder" />
      </Flex>
      <Flex direction="column">
        <h4>Кастомный дропдаун с добавлением новых элементов</h4>
        <Select
          dropdownRender={(menu) => (
            <>
              {menu}
              <Flex direction="column" gap={5}>
                <Input
                  value={newItemInputValue}
                  onChange={(e) => setNewItemInputValue(e.target.value)}
                  placeholder="Введите имя сотрудника"
                />
                <button
                  onClick={() => {
                    setCustomDropdownOptions((prev) =>
                      prev.concat({
                        label: newItemInputValue,
                        value: nanoid(),
                        key: nanoid(),
                      })
                    );
                    setNewItemInputValue("");
                  }}
                >
                  Добавить
                </button>
              </Flex>
            </>
          )}
          options={customDropdownOptions}
          placeholder="Placeholder"
        />
      </Flex>
    </div>
  );
}

export default App;
