import { APP_SECRET } from "../constant/varName";

export const checkInit = () => {
    if (localStorage.getItem(APP_SECRET)) {
        return false;
    }
    return true;
}