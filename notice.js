const ora = require('ora');
const chalk = require('chalk');


module.exports = {
    getLoading(text, color) {
        const loading = ora(text).start();
        if (color) loading.color;
        return loading;
    },
    
    loadingSuccess(loading, text) {
        if (loading.succeed !== undefined) {
            loading.succeed(`${chalk.green(text)}`);
        }
    },
    
    loadingFailure(loading, text) {
        if (loading.succeed !== undefined) {
            loading.fail(`${chalk.red(text)}`);
        }
    },
    
    succeed(text, color = 'green') {
        if (chalk[color]) {
            ora(`${chalk[color](text)}`).succeed();
        } else {
            ora(text).succeed();
        }
    },
    
    fail(text, color = 'red') {
        if (chalk[color]) {
            ora(`${chalk[color](text)}`).fail();
        } else {
            ora(text).fail();
        }
    },
    
    info(text, color = 'blue') {
        if (chalk[color]) {
            ora(`${chalk[color](text)}`).info();
        } else {
            ora(text).info();
        }
    }
    
};



