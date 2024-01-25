import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProviderStyle, BoxStyle } from "./Style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DateComponentProps {
  searchDate: Date | null;
  setSearchDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setCurrentPage: (newPage: number) => void;
}

const DateComponent: React.FC<DateComponentProps> = ({ searchDate, setSearchDate, setCurrentPage }) => {
  return (
    <BoxStyle>
      <LocalizationProviderStyle dateAdapter={AdapterDayjs}>
        <DatePicker
          value={searchDate}
          onChange={(date) => {
            setSearchDate(date);
            setCurrentPage(0);
          }}
        />
      </LocalizationProviderStyle>
    </BoxStyle>
  );
};

export default DateComponent;


