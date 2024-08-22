const MINUTES_IN_HOUR = 60;


const isLengthCorrect = (strToCheck, maxLength) => strToCheck.length <= maxLength;

const isPalindrome = (strToCheck) => {
  const currStr = strToCheck.replaceAll(' ', '').toLowerCase();
  return currStr === currStr.split('').reverse().join('');
};

const extractNumbers = (str) => {
  const result = str.toString()
    .split('')
    .map((chr) => isNaN(Number(chr)) ? '' : chr)
    .join('')
    .replaceAll(' ', '');
  return result === '' ? NaN : Number(result);
};


const convertTimeToMinutes = (time) => {
  const arrTime = time.split(':').map((numb) => Number(numb));
  return arrTime[0] * MINUTES_IN_HOUR + arrTime[1];
};

const convertMinutesToTime = (minutes) => {
  const resultHours = Math.floor(minutes / MINUTES_IN_HOUR);
  const resultMinites = (minutes % MINUTES_IN_HOUR).toString().padStart(2, '0');

  return `${resultHours}:${resultMinites}`;
};

const getTimeUntilDuration = (time, duration) => {
  const timeInMinutes = convertTimeToMinutes(time) + duration;
  const minutesToTime = convertMinutesToTime(timeInMinutes);

  return minutesToTime;
};

const compareTime = (firstTime, secondTime, compareFunc) => {
  const firstTimeInMinutes = convertTimeToMinutes(firstTime);
  const secondTimeInMinutes = convertTimeToMinutes(secondTime);

  return compareFunc(firstTimeInMinutes, secondTimeInMinutes);
};

const isMeetingTimeFeasible = (startWorkTime, finishWorkTime, startMeetingTime, durationMeeting) => {
  const finshMeetingTime = getTimeUntilDuration(startMeetingTime, durationMeeting);

  return compareTime(startWorkTime, startMeetingTime, (a, b) => a <= b)
    && compareTime(finshMeetingTime, finishWorkTime, (a, b) => a <= b);
};

console.log(isMeetingTimeFeasible('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingTimeFeasible('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingTimeFeasible('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingTimeFeasible('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingTimeFeasible('8:00', '17:30', '08:00', 900)); // false
