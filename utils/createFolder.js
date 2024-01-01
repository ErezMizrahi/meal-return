import fs from 'fs';

export const folder = 'files';

export const createFolder = () => {
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    
}
