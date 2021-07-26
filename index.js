#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const ora = require('ora');
const child_process = require('child_process');

// set version
const packageJson = require('./package.json');
program.version(packageJson.version);

// execute shell code
child_process.exec('echo \'hello shell\'', (error, out, err) =>{
    console.log('end', error, out, err);
});

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
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: '请输入项目名称',
        },
    ]);
    console.log(answer);
}

