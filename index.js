
import { getHolidays } from './api/holidays.js';
import { createFolder } from './utils/createFolder.js';
import { generateExcel } from './excelGenerator.js';
import { CONSTANTS } from './utils/constants.js';


createFolder();
const holidays = await getHolidays();

for (let month = 1; month <= 12; month++) {
    await generateExcel(month, CONSTANTS.YEAR, holidays);
}