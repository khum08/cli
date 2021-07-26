const fs = require('fs');
const { exit } = require('process');


function mkdir(path) {
    const exist = fs.existsSync(path);
    if (!exist) {
        fs.mkdirSync(path);
    }
}

function rmdir(path) {
    const exist = fs.existsSync(path);
    if (exist) {
        fs.rmdirSync(path);
    }
}

function rmfile(path) {
    const exist = fs.existsSync(path);
    if (exist) {
        fs.unlinkSync(path);
    }
}


// ============== test =================
mkdir('a');

rmdir('a');

rmfile('a.js')

