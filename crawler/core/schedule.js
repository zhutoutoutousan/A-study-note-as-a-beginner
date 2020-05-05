const schedule = require('node-schedule');

const clearFirstArrayElement = (arr) => [0, ...arr.splice(1)]
const executionInterval = (interval, maxTime) => {
    return clearFirstArrayElement(
                new Array(parseInt(maxTime / interval))
                .fill(1)
                .map((el,index) => el + interval * index - 1 ))
}


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
// rule.second = executionInterval(10, 60);

/**
 * The 0th second every minute: rule.second = 0
 * The 30th minute every hour: rule.minute = 30; rule.second = 0;
 * The 0th hour every day: rule.hour = 0; rule.minute = 0; rule.second = 0;
 * ...
 * The 10th hour on the first day of every month: rule.date = 1; rule.hour = 10; rule.minute = 0; rule.second = 0;
 * The 0th or 12th hour every Monday, Wednesday and Friday: rule.dayOfWeek = [1,3,5]; rule.hour = [0,12]; rule.minute = 0; rule.second = 0;
 */


 