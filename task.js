const sortSentence = (s) => {
  const words = s.split(" ");

  const newArray = words.map((word) => ({
    word: word.slice(0, -1),
    order: +word[word.length - 1],
  }));

  newArray.sort((a, b) => a.order - b.order);

  return newArray.map((obj) => obj.word).join(" ");
};
