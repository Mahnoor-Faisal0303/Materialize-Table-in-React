import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { MouseEvent } from 'react';
import { Item } from "../Interfaces/ItemInterface";

interface PaginationProps {
  data: Item[];
  page: number;
  handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const PaginationComponents: React.FC<PaginationProps> = ({ data, page, handleChangePage}) => {
  return (
    <React.Fragment>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={5}
        rowsPerPageOptions={[10]}
      />
    </React.Fragment>
  );
};

export default PaginationComponents;



