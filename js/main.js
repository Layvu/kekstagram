const messagesText = `Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;
const messages = messagesText.split('\n');

const names = [
  'Вася',
  'Алексей',
  'Артём',
  'Сергей',
  'Владимир',
  'Антон',
  'Александр',
  'Анна',
  'Алексей',
  'Евгений',
  'Антон'
];


const PHOTOS_COUNT = 25;
const LikesCount = {
  MIN: 15,
  MAX: 200
};
const CommentsCount = {
  MIN: 0,
  MAX: 30
};
const AvatarID = {
  MIN: 1,
  MAX: 6
};


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

const getPhotoId = createUniqueNumberGenerator(1, PHOTOS_COUNT);
const getCommentId = createUniqueNumberGenerator();

const getRandomComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(AvatarID.MIN, AvatarID.MAX)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});


const getPhotoData = () => {
  const currentId = getPhotoId();
  return {
    id: currentId,
    url: `photos/${currentId}.jpg`,
    description: `Картинка номер ${currentId}`,
    likes: getRandomNumber(LikesCount.MIN, LikesCount.MAX),
    comments: Array.from({length: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX)}, getRandomComment),
  };
};

const getPhotoMocks = () => Array.from({length: PHOTOS_COUNT}, getPhotoData);

console.log(getPhotoMocks());
