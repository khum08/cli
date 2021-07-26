#!/usr/bin/env node

const { program } = require('commander');
require('./collectInfo');

// set version
const packageJson = require('./package.json');
program.version(packageJson.version);


// set init command
program.command('init')
    .description('create new project')
    .action(() => {
        createProject();
        // console.log('your project name is: ' + name);
    });


program.parse(process.argv);
const options = program.opts();


// interactive with user
async function createProject() {
    // inquirer.prompt([
    //     'Please enter your project name:'
    // ])
    // .then((answers) => {
    //     console.log(answers);
    // })
    // .catch(error => {
    //     console.log('error');
    // });
    // const answer = await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'name',
    //         message: '请输入项目名称',
    //     },
    // ]);
    // console.log(answer);
}



