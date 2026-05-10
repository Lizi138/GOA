import {readfile} from './Readfile.js';

const ReadFile = async db => {
    try {
        const data = await readfile(db, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}

export default ReadFile;