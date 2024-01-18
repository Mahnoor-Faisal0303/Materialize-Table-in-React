import React from "react";
import TablePagination from "@mui/material/TablePagination";
import { MouseEvent } from "react";
import { Item } from "../Interfaces/ItemInterface";
import { PageNumberStyle } from "./Style";

interface PaginationProps {
    data: Item[];
    page: number;
    handleChangePage: (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const PaginationComponents: React.FC<PaginationProps> = ({ data, page, handleChangePage }) => {
    const rowsPerPage = 5;
    return (
        <React.Fragment>
            <PageNumberStyle>Page {page + 1}</PageNumberStyle>

            <TablePagination
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                labelRowsPerPage=""
                labelDisplayedRows={() => ""}
            />
        </React.Fragment>
    );
};

export default PaginationComponents;
