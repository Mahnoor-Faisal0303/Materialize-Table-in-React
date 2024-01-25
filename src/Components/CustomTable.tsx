import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Item } from "../Interfaces/ItemInterface";
import {
    TableContainerStyle,
    TableRowStyle,
    TableCellStyle,
    ButtonStyle
} from "./Style";
import { useNavigate } from "react-router-dom";
import { generatePath } from "./GeneratePath";
import APP_ROUTES from "../Constant/Routes";

interface CustomTableProps {
    headers: string[]
    bodyData: Item[]
}

export const CustomTableComponent: React.FC<CustomTableProps> = ({ headers, bodyData }) => {
    const navigate = useNavigate();
    return (
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
                    {bodyData
                        .map((item) => (
                            <TableRow key={item.id}>
                                {Object.keys(item).map((key) => (
                                     <TableCell key={key}>{item[key]}
                                     </TableCell>
                                ))}
                                <ButtonStyle
                                    onClick={() =>
                                        navigate(generatePath(APP_ROUTES.DETAILS_PAGE, { id: item.id }))
                                    }
                                >
                                    Description
                                </ButtonStyle>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainerStyle>)
}