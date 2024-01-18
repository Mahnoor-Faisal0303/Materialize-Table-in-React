export interface Item {
    [key: string]: number | string;
    name:string;
}
export interface TableProps {
    data: Item[];
    headers: string[];
}
