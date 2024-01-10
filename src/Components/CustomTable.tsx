import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableHeaderProps } from './ItemInterface';


const CustomTable: React.FC<TableHeaderProps> = ({ data, headers }) => {
  return (
    <TableContainer id="custom-table-container">
      <Table id="custom-table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} id='fontStyle'>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            console.log('Item ID:', item.id);
            return (
              <TableRow key={item.id} id="custom-table-row">
                <TableCell>
                  {item.name}
                </TableCell>
                <TableCell>{item.calories}</TableCell>
                <TableCell>{item.fat}</TableCell>
                <TableCell>{item.carbs}</TableCell>
                <TableCell>{item.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
