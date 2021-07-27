const child_process = require('child_process');
const notices = require('./notice');

module.exports = {
    CMD: {
        npmInit: "npm init",
        gitInit: "git init",
        iWepack: "npm install webpack webpack-cli --save-dev",
        iTypescript: "npm install --save-dev typescript ts-loader && tsc --init"
    },

    cp(name, dist) {
        return `cp ./template/template.${name} ${dist}${name}`;
    },

    exec(cmd) {
        // console.log('cmd exec');
        const loading = notices.getLoading('script run: ' + cmd);
        return new Promise((resolve, reject) => {
            child_process.exec(cmd, (error, out, err) =>{
                // console.log('end', error, out, err);
                // notices.info('cmd success');
                if (error) {
                    notices.loadingFailure(loading, 'script error: ' + cmd);
                    reject(error);
                } else {
                    notices.loadingSuccess(loading, 'script passed: ' + cmd);
                    resolve();
                }
            });
        });
    }
}
