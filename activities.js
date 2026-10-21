//CactusIO-interactive (Smart phone usage app) optional
/**
 * After a long day you come home to relax. The first thing you do is find your phone and start watching some youtube. 
 * Then check facebook, and then reading some news. Suddenly a hour has passed. What happened to all that time you think to yourself. 
 * Maybe we can create some program to help with this problem! What if we could help users manage their smart phone usage? 
  It's going to work like this: A user can add smartphone activities. Then they can see a status on how their smartphone usage is going.

  Adding an activity
  Let's create the first part of the functionality that is adding activities.
  Create a variable called activities that stores all activities of the day. 
  What type of variable would you think would make sense? Create a function called addActivity. 
  It should have three parameters: date, activity and duration. The date should be a string, the activity a string and the duration a number. 
  To save the activity push an object that contains the date, the activity and the duration to the activities variable.
  Now a user can add an activity by writing:
 */

const activities = [];

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

addActivity("23/7-18", "Youtube", 30);

console.log(activities);

let usageLimit = 500;

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  const count = activities.length;

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }

  return `You have added ${count} activities. They amount to ${totalDuration} min. of usage`;
}

showStatus(activities);

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 20);
addActivity("23/7-18", "Twitter", 28);

console.log(showStatus(activities));

//Choose getAppBreakdown to instantly see a clear, organized summary of your total time spent on each specific app.

function getAppBreakdown() {
  if (activities.length === 0) {
    console.log("No activities recorded yet.");
    return;
  }

  const breakdown = {};

  for (let i = 0; i < activities.length; i++) {
    const appName = activities[i].activity;
    const duration = activities[i].duration;

    if (breakdown[appName]) {
      breakdown[appName] += duration;
    } else {
      breakdown[appName] = duration;
    }
  }

  console.log("=== App Usage Breakdown ===");
  for (const app in breakdown) {
    console.log(`${app}: ${breakdown[app]} min.`);
  }
}

addActivity("Youtube", 30);
addActivity("Instagram", 45);
addActivity("Youtube", 20);
addActivity("Facebook", 60);

getAppBreakdown();
// Output:
