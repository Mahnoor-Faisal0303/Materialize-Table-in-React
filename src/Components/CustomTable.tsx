import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { TableProps } from './ItemInterface';

const CustomTable: React.FC<TableProps> = ({ data, headers }) => {

  const [page, setPage] = React.useState(0);
  
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <React.Fragment>
      <TablePagination
      component="div"
      count={50}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={10}
      rowsPerPageOptions={[10]}
    />
      <Typography variant="h2"
        sx={{ textAlign: 'center', marginTop: '30px', fontFamily: 'poppins' }}>
        Materialize Table
      </Typography>
      <TableContainer component={Paper}
        sx={{ display: 'flex', justifyContent: 'center', width: '850px', margin: 'auto', padding: "30px" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {headers.map((header) => (
                <TableCell key={header} sx={{ fontWeight: 'bold' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
            .slice(page * 10, page * 10 + 10)
            .map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell key={'name' + item.id}>{item.name}</TableCell>
                  <TableCell key={'calories' + item.id}>{item.calories}</TableCell>
                  <TableCell key={'fat' + item.id}>{item.fat}</TableCell>
                  <TableCell key={'carbs' + item.id}>{item.carbs}</TableCell>
                  <TableCell key={'protein' + item.id}>{item.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CustomTable;
