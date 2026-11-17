//Series duration of my life
const seriesDurations = [
  {
    title: "Family Man",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Kobra kai",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "Royal Wedding",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const totalLifespanMinutes = 80 * 365 * 24 * 60;
  let totalSeriesMinutes = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalSeriesMinutes += seriesMinutes;

    const percentage = (seriesMinutes / totalLifespanMinutes) * 100;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }

  const totalPercentage = (totalSeriesMinutes / totalLifespanMinutes) * 100;
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
