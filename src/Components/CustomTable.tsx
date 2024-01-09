import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomTableProps from './TableInterface';

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  return (
    <TableContainer id="custom-table-container">
      <Table id="custom-table">
        <TableHead>
          <TableRow>
            <TableCell id='fontStyle'>Dessert (100g serving)</TableCell>
            <TableCell id='fontStyle'>Calories</TableCell>
            <TableCell id='fontStyle'>Fat (g)</TableCell>
            <TableCell id='fontStyle'>Carbs</TableCell>
            <TableCell id='fontStyle'>Protein</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} id="custom-table-row">
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell >{item.calories}</TableCell>
              <TableCell>{item.fat}</TableCell>
              <TableCell>{item.carbs}</TableCell>
              <TableCell>{item.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
