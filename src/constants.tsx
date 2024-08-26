import { Flex } from "./shared/ui";

export const defaultOptions = [
  { label: "Иван Иванов", value: "test1", key: "test1" },
  { label: "Семен Лебедев", value: "test2", key: "test2" },
  { label: "Олег Смирнов", value: "test3", key: "test3" },
  { label: "Иван Кузнецов", value: "test4", key: "test4" },
  { label: "Андрей Радостин", value: "test5", key: "test5" },
  { label: "Алексей Воюшин", value: "test6", key: "test6" },
  { label: "Сергей Ряхин", value: "test7", key: "test7" },
  { label: "Даниил Полтанов", value: "test8", key: "test8" },
];

export const optionsWithCustomLabels = [
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "red" }}></div>
        <span>Иван Иванов</span>
      </Flex>
    ),
    value: "test1",
    key: "test1",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "blue" }}></div>
        <span>Семен Лебедев</span>
      </Flex>
    ),
    value: "test2",
    key: "test2",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "green" }}></div>
        <span>Олег Смирнов</span>
      </Flex>
    ),
    value: "test3",
    key: "test3",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "pink" }}></div>
        <span>Иван Кузнецов</span>
      </Flex>
    ),
    value: "test4",
    key: "test4",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "brown" }}></div>
        <span>Андрей Радостин</span>
      </Flex>
    ),
    value: "test5",
    key: "test5",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "aqua" }}></div>
        <span>Алексей Воюшин</span>
      </Flex>
    ),
    value: "test6",
    key: "test6",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "chartreuse" }}></div>
        <span>Сергей Ряхин</span>
      </Flex>
    ),
    value: "test7",
    key: "test7",
  },
  {
    label: (
      <Flex align="center" gap={5}>
        <div className="avatar" style={{ backgroundColor: "cyan" }}></div>
        <span>Даниил Полтанов</span>
      </Flex>
    ),
    value: "test8",
    key: "test8",
  },
];
