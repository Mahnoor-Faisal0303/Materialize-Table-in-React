import { MouseEvent } from 'react';
import { useState } from 'react';
import { Item } from "../Components/ItemInterface";

export interface PaginationHookProps {
    data: Item[];
    page: number;
    handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const usePagination = (): PaginationHookProps => {
    const [page, setPage] = useState<number>(0);

    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        if (event) {
            setPage(newPage);
        }
    };

    return {
        data: [],
        page,
        handleChangePage,
    };
};

export default usePagination;
