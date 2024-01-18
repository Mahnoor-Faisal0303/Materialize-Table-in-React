import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableProps } from "../Interfaces/ItemInterface";
import usePagination from "../Hooks/useTablePagination";
import PaginationComponents from "./Pagination";
import useTableFilter from "../Hooks/useTableFilter";
import {
    TextFieldStyle,
    TypographyStyle,
    TableContainerStyle,
    TableRowStyle,
    TableCellStyle
} from "./Style";

const CustomTable: React.FC<TableProps> = ({ headers }) => {
    const { page, handleChangePage, setCurrentPage } = usePagination();
    const { filterData, searchStr, setSearchStr } = useTableFilter();

    return (
        <React.Fragment>
            <TextFieldStyle
                id="standard-basic"
                label="Search By Name"
                variant="standard"
                value={searchStr}
                onChange={(e) => {
                    setSearchStr(e.target.value);
                    setCurrentPage(0);
                }}
            ></TextFieldStyle>
            <PaginationComponents
                data={filterData}
                page={page}
                handleChangePage={handleChangePage}
            />
            <TypographyStyle variant="h2">Materialize Table</TypographyStyle>
            <TableContainerStyle>
                <Table>
                    <TableHead>
                        <TableRowStyle>
                            {headers.map((header) => (
                                <TableCellStyle key={header}>{header}</TableCellStyle>
                            ))}
                        </TableRowStyle>
                    </TableHead>
                    <TableBody>
                        {filterData.slice(page * 5, page * 5 + 5).map((Data) => (
                            <TableRow key={Data.id}>
                                {Object.keys(Data).map((key) => (
                                    <TableCell key={key}>{Data[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainerStyle>
        </React.Fragment>
    );
};
export default CustomTable;
