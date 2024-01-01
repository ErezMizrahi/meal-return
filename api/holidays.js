import { CONSTANTS } from "../utils/constants.js";

export const getHolidays = async () => {
    const url = `https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=off&mod=off&nx=off&year=${CONSTANTS.YEAR}&month=x&ss=off&mf=off&c=off&geo=none&M=off&s=off&i=on`;
    const request = await fetch(url);
    const json = await request.json();
    const dates = json.items.map(item => item.date);
    return dates;
}