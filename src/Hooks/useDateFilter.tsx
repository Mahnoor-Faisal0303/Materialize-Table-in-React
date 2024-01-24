import { Item } from "../Interfaces/ItemInterface";

export const filterAndSliceData = (
    data: Item[],
    searchDate: Date | null,
    page: number,
    
  ) => {
    return data
      .filter((item) => {
        if (searchDate) {
          const selectedDateFormatted = new Date(Number(item.date) * 1000);
          const selectedDate = new Date(searchDate);
          return (
            selectedDate.getDate() === selectedDateFormatted.getDate() &&
            selectedDate.getMonth() === selectedDateFormatted.getMonth() &&
            selectedDate.getFullYear() === selectedDateFormatted.getFullYear() &&
            searchDate
          );
        } else {
          return true;
        }
      })
      .slice(page * 5, page * 5 + 5);
  };
//   import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//   import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//   import { LocalizationProviderStyle } from "../Components/Style";
//   import  { useState } from "react";
// import usePagination from "./useTablePagination";
// export const dateComponent=()=>{
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [searchDate, setSearchDate] = useState<Date | null>(null);
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const {setCurrentPage } = usePagination();
//     return (
//         <div>
//                 <LocalizationProviderStyle dateAdapter={AdapterDayjs}>
//                     <DatePicker
//                         value={searchDate}
//                         onChange={(date) => {
//                         setSearchDate(date);
//                         setCurrentPage(0);
//                         }}
//                     />
//                 </LocalizationProviderStyle>
//             </div>
//             )
// }