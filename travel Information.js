/**
 * Write a function where you specify your speed in km/h and how far you have to go in km.
 * The function has to return the time it will take to arrive at your destination.
 * The time should be formatted like this: 3 hours and 34 minutes.
 * Hint: For formatting your best friend is Google!
 */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const getTimeToDestination = (travelInformation) => {
  const number =
    travelInformation.destinationDistance / travelInformation.speed;

  const hour = Math.floor(number);

  let decimalPart = number - hour;
  const min = 1 / 60;
  decimalPart = min * Math.round(decimalPart / min);

  const minute = Math.floor(decimalPart * 60);

  const time = `${hour} hours and ${minute} minutes`;

  return time;
};

const travelTime = getTimeToDestination(travelInformation);
console.log(travelTime);
