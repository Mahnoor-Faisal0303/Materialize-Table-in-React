import APP_ROUTES from "../Constant/Routes";

 export const generatePath = (_url: APP_ROUTES | undefined ,id: number | undefined) => {
        return `${'details/'}${id}`;
 } 

