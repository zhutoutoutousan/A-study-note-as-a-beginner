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
const clearFirstArrayElement = (arr) => [0, ...arr.splice(1)]
const executionInterval = (interval, maxTime) => {
    return clearFirstArrayElement(
                new Array(parseInt(maxTime / interval))
                .fill(1)
                .map((el,index) => el + interval * index - 1 ))
}
rule.second = executionInterval(10, 60);



 