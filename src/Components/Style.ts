import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import Button from '@mui/material/Button';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const TextFieldStyle = styled(TextField)({
    margin: 20
});
export const TypographyStyle = styled(Typography)({
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "poppins"
});
export const TypographyStyle2 = styled(Typography)({
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "poppins",
    fontSize: "30px",
    border: "2px solid gray",
    marginLeft:"290px",
    marginRight:"290px"
});
export const TableContainerStyle = styled(TableContainer)({
    display: "flex",
    justifyContent: "center",
    width: "850px",
    margin: "auto",
    padding: "30px"
});
export const TableRowStyle = styled(TableRow)({
    "&:last-child td, &:last-child th": {
        border: 0
    }
});
export const TableCellStyle = styled(TableCell)({
    fontWeight: "bold"
});
export const PageNumberStyle = styled("div")({
    fontWeight: "bold",
    marginLeft: "1284px"
});
export const ButtonStyle = styled(Button)({
    color :"black",
    backgroundColor:"gray",
})
export const LocalizationProviderStyle = styled (LocalizationProvider)({
    margin: "20px",
})