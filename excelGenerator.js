import XLSX from 'xlsx';
import { generateRandomNumber } from './utils/generateRandomNumber.js';
import { CONSTANTS } from './utils/constants.js';
import { folder } from './utils/createFolder.js';

export const generateExcel = async (month, year, holidays) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet([{
        [CONSTANTS.DATE]: '',
        [CONSTANTS.AMMOUNT]: '' 
    }]);

    for (let day = 1; day <= 31; day++) {
        const dateString = `${year}-${month}-${day < 10 ? '0'+day : day}`;
        let randomNumber = generateRandomNumber(50, 55);

        //not friday or saturday
        const dayOfWeek = new Date(dateString).getDay();
        if(!(dayOfWeek < 5))  randomNumber = '';

        if(holidays.includes(dateString)) randomNumber = CONSTANTS.HOLIDAY;

        XLSX.utils.sheet_add_json(worksheet, [{
             [CONSTANTS.DATE]: dateString,
             [CONSTANTS.AMMOUNT]: randomNumber 
            }], {
          skipHeader: true,
          origin: -1,
        });
      }
    
      XLSX.utils.book_append_sheet(workbook, worksheet, `${month}_${year}`);
    
      const excelFileName = `${month}_${year}_data.xlsx`;
      const filePath = `${folder}/${excelFileName}`;

      XLSX.writeFile(workbook, filePath);

}