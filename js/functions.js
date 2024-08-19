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

export { isLengthCorrect, isPalindrome, extractNumbers };
