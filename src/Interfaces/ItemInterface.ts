export interface Item {
  [key: string]: number | string;
}
 export interface TableProps {
    data:Item[];
    headers: string[];
  }
