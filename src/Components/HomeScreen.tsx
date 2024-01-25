import React, { useState } from "react";
import { TableProps } from "../Interfaces/ItemInterface";
import usePagination from "../Hooks/useTablePagination";
import PaginationComponents from "./Pagination";
import useTableFilter from "../Hooks/useTableFilter";
import { TextFieldStyle , TypographyStyle } from "./Style";
import { filterAndSliceData } from "../Hooks/useDateFilter";
import DateComponent from "./DateComponent"
import { CustomTableComponent } from "./CustomTable";

const HomeScreenComponent: React.FC<TableProps> = ({ headers }) => {
    const { page, handleChangePage, setCurrentPage } = usePagination();
    const { filterData, searchStr, setSearchStr } = useTableFilter();
    const [searchDate, setSearchDate] = useState<Date | null>(null);
    const filteredAndSlicedData = filterAndSliceData(filterData, searchDate, page);

    return (
        <React.Fragment>
            <TextFieldStyle
                id="standard-basic"
                label="Search By Name"
                variant="standard"
                value={searchStr}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
                    setSearchStr(e.target.value);
                    setCurrentPage(0);
                }}
            ></TextFieldStyle>

            <DateComponent
                searchDate={searchDate}
                setSearchDate={setSearchDate}
                setCurrentPage={setCurrentPage}
            />

            <PaginationComponents
                data={filteredAndSlicedData}
                page={page}
                handleChangePage={handleChangePage}
            />

            <TypographyStyle variant="h2">Table</TypographyStyle>

            <CustomTableComponent
                headers={headers}
                bodyData={filteredAndSlicedData}
            />
        </React.Fragment>
    );
};

export default HomeScreenComponent;



