const { CronJob } = require("cron");
// ----------------------
// // 1 second schedular
// ----------------------

new CronJob(
  "* * * * * *",
  function () {
    console.log("You will see this message every second");
  }, // onTick
  null, // onComplete
  true, // start
  "America/Los_Angeles" // timeZone
);
// ----------------------
// 5 second schedular
// ----------------------
new CronJob(
  "*/5 * * * * *",
  function () {
    console.log("You will see this message every 5 seconds");
  }, // onTick
  null, // onComplete
  true, // start
  "America/Los_Angeles" // timeZone
);
