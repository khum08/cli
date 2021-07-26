// import {getLoading, info, fail, succeed, loadingSuccess} from '../notice';
const {getLoading, info, fail, succeed, loadingSuccess} = require('../notice');
const loading = getLoading('npm install'); 
setTimeout(() => {
    loadingSuccess(loading, 'npm install successfully');
    info('npm installed');
    fail('install error');
    succeed('end');
}, 2000);