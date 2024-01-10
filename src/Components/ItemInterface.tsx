export interface Item {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface CustomTableProps {
  data: Item[];
}

export interface TableHeaderProps extends CustomTableProps {
  headers: string[];
}
