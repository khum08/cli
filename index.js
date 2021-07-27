#!/usr/bin/env node

const { program } = require('commander');
const Query = require('./query');
const Notices = require('./notice');
const CMD = require('./cmd');
const fsUtils = require('./fsUtils');
const path = require('path');

// set version
const packageJson = require('./package.json');
program.version(packageJson.version);


// set init command
program.command('init')
    .description('create new project')
    .action(() => {
        Query.query(startProject);
    });

program.parse(process.argv);

// interactive with user
function startProject(config) {
    console.log(config);
    let jsonTemplate;
    // if (config.typescript) {
        jsonTemplate = require('./template/template.package.json');
    // }
    const result = applyConfig(config, jsonTemplate);
    console.log('result:', result);
    console.log(__dirname);

    fsUtils.writeFile(path.join(__dirname, 'package.json'), JSON.stringify(result))
    .then(() => {
        return CMD.exec(CMD.cp('.gitignore', './'));
    })
    .then(v => {
        return CMD.exec(CMD.cp('tsconfig.json', './'));
    })
    .then(v => {
        Notices.succeed('successfully');
    })
    .catch(err => {
        Notices.fail('error:' + err);
    });

}

const filterKey = ['name', 'version', 'description', 'author', 'liscense'];

function replace(oriStr, replaceKey, value) {
    let str = new RegExp('--' + replaceKey + '--', 'ig');
    return oriStr.replace(str, value);
}

function applyConfig(config, templateJson) {
    let jsonStr = JSON.stringify(templateJson);
    for(let key in config) {
        if (filterKey.includes(key)) {
            jsonStr = replace(jsonStr, key, config[key]);
        }
    }
    return JSON.parse(jsonStr);
}







