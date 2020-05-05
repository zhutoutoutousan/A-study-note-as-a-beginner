const schedule = require('node-schedule');

/**
 *  How to execute at a designated timestamp
 * 
 *  Headsups
 *  -- Month i corresponds to i - 1 in the code 
 * 
 */
// let date = new Date(2020, 4, 6, 11, 40, 0 );
// let scheduledTask = schedule.scheduleJob(date, () => {
//     console.log(`Scheduled task executed during ${new Date()}`);
// })
// scheduledTask.cancel();

/**
 *  How to execute at different set intervals
 *  
 *  If you want to set your time Interval to be n seconds, then set:
 */
const executionInterval = (interval) => {
return new Array(parseInt(60 / interval)
            .fill(1)
            .map()
}


 