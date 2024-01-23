import APP_ROUTES from "../Constant/Routes";

export const generatePath = <T>(_url: APP_ROUTES | undefined, obj: T): string => {
    let generatedPath = _url || "";
    for (const i in obj) {
        const originalURL = `:${i}`;
        const updatedURL = obj[i];
        generatedPath = generatedPath.replace(originalURL, `${updatedURL}`);
    }
    return generatedPath;
};
