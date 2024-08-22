const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createUniqueNumberGenerator = (min = 0, max = 100) => {
  const usedNumbers = [];

  return function () {
    let newNumber = getRandomNumber(min, max);

    if (usedNumbers.length === (max - min + 1)) {
      return null;
    }

    while (usedNumbers.includes(newNumber)) {
      newNumber = getRandomNumber(min, max);
    }
    usedNumbers.push(newNumber);

    return newNumber;
  };
};

export { getRandomNumber, getRandomArrayElement, createUniqueNumberGenerator };
