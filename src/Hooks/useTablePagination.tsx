import { MouseEvent } from 'react';
import { useState } from 'react';
import { Item } from "../Interfaces/ItemInterface";

export interface PaginationHookProps {
    data: Item[];
    page: number;
    handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    setCurrentPage: (newPage: number) => void;
}

const usePagination = (): PaginationHookProps => {
    const [page, setPage] = useState<number>(0);
    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        if (event) {
            setPage(newPage);
        }
    };
    const setCurrentPage = (newPage: number): void => {
            setPage(newPage);    
    };
    return {
        data: [],
        page,
        handleChangePage,
        setCurrentPage,
    };
};

export default usePagination;



