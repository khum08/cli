const fs = require('fs');

const fsUtils = {
    mkdir(path) {
        const exist = fs.existsSync(path);
        if (!exist) {
            fs.mkdirSync(path);
        }
    },
    
    rmdir(path) {
        const exist = fs.existsSync(path);
        if (exist) {
            fs.rmdirSync(path);
        }
    },
    
    rmfile(path) {
        const exist = fs.existsSync(path);
        if (exist) {
            fs.unlinkSync(path);
        }
    },

    writeFile(path, string) {
        fs.writeFileSync(path, string);
        return Promise.resolve();
    }
}

module.exports = fsUtils;




