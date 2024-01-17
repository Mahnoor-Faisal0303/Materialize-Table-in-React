import { Dispatch, SetStateAction, useState } from 'react';
import { data } from '../Data/Data';
import { Item } from '../Interfaces/ItemInterface';

interface PaginationHookProps {
    filterData:Item[];
    searchStr:string;
    setSearchStr:Dispatch<SetStateAction<string>>;
}

const useTableFilter = ():PaginationHookProps => {
    const [searchStr, setSearchStr] = useState<string>('');
    const filterData = data.filter((row) => row.name.includes(searchStr));
    return {
        filterData,
        searchStr,
        setSearchStr,
    };
};

export default useTableFilter;
