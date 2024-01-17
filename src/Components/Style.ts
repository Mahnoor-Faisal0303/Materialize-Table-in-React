import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

export const TextFieldStyle = styled(TextField)({
    margin: 20, 
  });
export const TypographyStyle = styled(Typography)({
    textAlign: 'center',
    marginTop: '30px',
    fontFamily: 'poppins'
});
export const TableContainerStyle = styled(TableContainer)({
    display: 'flex', 
    justifyContent: 'center', 
    width: '850px', 
    margin: 'auto', 
    padding: "30px"
});
export const TableRowStyle= styled(TableRow)({
    '&:last-child td, &:last-child th': {
        border: 0,
      },
});
export const TableCellStyle = styled(TableCell)({
    fontWeight: 'bold'
})