const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Jakarta");

const dateFormat = () => {
    const date = dayjs().tz().toISOString(); 
    return date;
}

module.exports = dateFormat;