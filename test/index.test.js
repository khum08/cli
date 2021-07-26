const notices = require('../notice');
const fs = require('fs');
const list = fs.readdirSync('test');
 
list.forEach(item => {
    if (!item.startsWith('index.test') && item.indexOf('test') >= 0) {
        const loading = notices.getLoading('start test ' + item, 'yellow');
        require('./' + item);
        notices.loadingSuccess(loading, item + ' end');
        // notices.succeed('test ' + item + ' successfully', 'green');
    }
});