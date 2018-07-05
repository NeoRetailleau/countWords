const parseString = string => string.toLowerCase().split(' ');

const countItem = (array, minChar = 2) => {
  const count = {};
  array.forEach((i) => {
    if (i.length > minChar) {
      count[i] = (count[i] || 0) + 1;
    }
  });
  return count;
};

const removeChar = string => string.replace(/[^\w\s]/gi, '').replace(/\n|\r/g, ' ');

const countWord = (string, minChar = 2) => countItem(parseString(removeChar(string)), minChar);

export default countWord;
