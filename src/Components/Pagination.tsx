import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {PaginationHookProps} from '../Hooks/useTablePagination';

const PaginationComponents: React.FC<PaginationHookProps> = ({ data,page, handleChangePage}) => {
  return (
    
    <React.Fragment>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
      </React.Fragment>
    
  );
};

export default PaginationComponents;



