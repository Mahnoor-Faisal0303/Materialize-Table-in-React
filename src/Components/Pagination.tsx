import { useState, MouseEvent } from 'react';

interface PaginationProps {
  page: number;
  handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const usePagination = (): PaginationProps => {
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    if (event) {
      setPage(newPage);
    }
  };

  return {
    page,
    handleChangePage,
  };
};

export default usePagination;
