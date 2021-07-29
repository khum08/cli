#!/usr/bin/env node

const { program } = require('commander');
const Query = require('./query');
const Notices = require('./notice');
const CMD = require('./cmd');
const fsUtils = require('./fsUtils');
const path = require('path');
const download = require('download-git-repo');
const shell = require('shelljs');
const replace = require('replace-in-file');

// set version
const packageJson = require('./package.json');
const { replaceInFile } = require('replace-in-file');
program.version(packageJson.version);


// set init command
program.command('init')
    .description('create new project')
    .action(() => {
        Query.query(startProject);
    });

program.parse(process.argv);

const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray']
let colorIndex = 0;

// interactive with user
function startProject(config) {
    console.log(config);
    let jsonTemplateSrc;
    if (config.language === 'typescript') {
        jsonTemplateSrc = 'khum08/cli-template#ts-library'   
    }
    const loading = Notices.getLoading('开始初始化项目，请耐心等待哦~');
    let timer = setInterval(() => {
        loading.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 2000);
    download(jsonTemplateSrc, `./${config.name}`, function (err) {
        clearInterval(timer);

        if (err) {
            loading.fail('项目初始化失败');
        } else {
            loading.succeed('项目初始成功');
            shell.cd(config.name);
            replaceFiles(config);

            shell.exec('npm install');
            Notices.succeed('项目初始化好了😁');
            Notices.succeed('使用npm run start, 开始愉快的coding~');

            // CMD.exec(`cd ${config.name} && npm install`).then(() => {
            //     Notices.succeed('项目初始化好了😁');
            // });
        }
    });

}


function replaceFiles(config) {
    const from = Object.keys(config).map(key => '--o_' + key + '--');
    const to = Object.values(config);
    replace.sync({
        files: path.resolve('tools', 'init.ts'),
        from,
        to
    });
}







