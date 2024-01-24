// import { Dispatch, useState } from 'react';
// import { data } from '../Data/Data';
// import { Item } from '../Interfaces/ItemInterface';

// interface PaginationHooksProps {
//     filterData: Item[];
//     searchDate: Date|null;
//     setSearchDate: Dispatch<React.SetStateAction<Date | null>>;
// }

// const useDateFilter = ():PaginationHooksProps => {
//     const [searchDate, setSearchDate] = useState<Date | null>(null);
//     const filterData = data.filter((item) => {if (searchDate) {
//         const selectedDateFormatted = new Date(item.date);
//         const selectedDate = new Date(searchDate);
//         return (
//             selectedDateFormatted.getDate() === selectedDate.getDate() &&
//             selectedDate.getMonth() === selectedDateFormatted.getMonth() &&
//             selectedDate.getFullYear() === selectedDateFormatted.getFullYear()
//         );
//     }
//     else {
//         return true;
//     }
// })
//     return {
//        filterData,
//         searchDate,
//         setSearchDate,
//     };
// };

// export default useDateFilter;
