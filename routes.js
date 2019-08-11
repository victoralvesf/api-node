import hello from './hello/index';
import bills from './bills/index';

export default (app) => {
    app.use('/', hello);
    app.use('/bills', bills);
}