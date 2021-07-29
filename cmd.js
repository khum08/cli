const child_process = require('child_process');
const notices = require('./notice');

module.exports = {

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
