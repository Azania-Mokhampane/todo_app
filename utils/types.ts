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
