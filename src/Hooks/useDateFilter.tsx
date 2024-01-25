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
            selectedDate.getFullYear() === selectedDateFormatted.getFullYear()
          );
        }
         else {
          return true;
        }
      })
      .slice(page * 5, page * 5 + 5);
  };
