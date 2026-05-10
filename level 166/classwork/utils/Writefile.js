import {writeFile} from 'fs/promises';

const WriteFile = async (db, data) => {
    try {
        await writeFile(db, JSON.stringify(data));
        return {data: "message saved successfully"};
    }
    catch (err) {
        console.error(err);
    }
}

export default WriteFile;