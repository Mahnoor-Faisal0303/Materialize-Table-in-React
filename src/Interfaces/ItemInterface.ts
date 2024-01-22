export interface Item {
    [key: string]: number | string;
    id:number;
    name:string;
}
export interface TableProps {
    data: Item[];
    headers: string[];
}
export interface DetailItem {
   details:string[];
}