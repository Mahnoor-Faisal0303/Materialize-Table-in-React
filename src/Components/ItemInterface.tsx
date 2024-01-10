export interface Item {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}
interface CustomTableProps {
  data: Item[];
}
export default CustomTableProps;
