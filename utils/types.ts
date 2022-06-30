export type DataType = {
  id: string;
  todo: string;
};

export type TodoListTypes = {
  id: string;
  todo: string;
  index: number;
  delete: (index: number) => void;
  edit: () => void;
  data: DataType[];
  editVal: string | undefined;
};

export type SearchBarProps = {
  data: DataType[];
  show: boolean;
  showHandler: () => void;
  editVal: string | undefined;
  edit: (id: string) => void;
};
