const findWordsContaining = (words, x) => {
  let array = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      array.push(i);
    }
  }

  return array;
};
