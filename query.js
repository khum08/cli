const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "请输入项目名?",
        validate(value) {
          if (value) {
            return true;
          }
          return '项目名必填哦~';
        },
    },
    {
        type: 'input',
        name: 'version',
        message: "请输入项目版本号?",
        validate(value) {
          if (value) {
            return true;
          }
          return '请输入正确的项目版本号~';
        },
        default: '1.0.0'
    },
    {
        type: 'input',
        name: 'description',
        message: '请输入您的项目描述?',
    },
    {
        type: 'input',
        name: 'author',
        message: '请输入项目作者?',
    },
    {
        type: 'input',
        name: 'license',
        message: '请输入项目License?',
        // choices: [
        //     {
        //       key: 'a',
        //       name: 'MIT',
        //       value: 'MIT',
        //     },
        //     {
        //       key: 'b',
        //       name: 'ISC',
        //       value: 'ISC',
        //     }
        // ],
        default: 'MIT'
    },
    {
        type: 'confirm',
        name: 'git',
        message: '请问需要初始化git吗',
        default: true
    },
    {
        type: 'list',
        name: 'language',
        message: '请问使用的主要编程语言是?',
        choices: ['Typescript', 'Javascript'],
        filter(val) {
          return val.toLowerCase();
        },
    },
    {
        type: 'list',
        name: 'language',
        message: '请问使用的构建工具是?',
        choices: ['Webpack', 'Rollup'],
        filter(val) {
          return val.toLowerCase();
        }
    }
];

module.exports = {
  query(callback) {
    inquirer.prompt(questions).then((answers) => {
      callback(answers);
    });
  }  
}

