import React from 'react';
import CustomTable from './Components/CustomTable';
import './App.css';
import CustomTableProps from './Components/TableInterface';
const BasicTable: React.FC<CustomTableProps> = ({ data }) => {
  return (
    <CustomTable data={data} />
  );
};
export default BasicTable;
