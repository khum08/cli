const child_process = require('child_process');
const notices = require('./notice');

module.exports = {
    CMD: {
        npmInit: "npm init",
        gitInit: "git init",
        iWepack: "npm install webpack webpack-cli --save-dev",
        iTypescript: "npm install --save-dev typescript ts-loader && tsc --init"
    },
    exec(cmd) {
        // console.log('cmd exec');
        const loading = notices.getLoading('script run: ' + cmd);
        child_process.exec(cmd, (error, out, err) =>{
            // console.log('end', error, out, err);
            // notices.info('cmd success');
            if (error) {
                notices.loadingFailure(loading, 'script error: ' + cmd);
            } else {
                notices.loadingSuccess(loading, 'script passed: ' + cmd);
            }
        });
    }
}
