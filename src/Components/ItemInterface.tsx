export interface Item {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface TableProps {
  data: Item[];
  headers: string[];
}
export interface PaginationProps {
  data: Item[];
}
