const addLength = (str) => {
  const words = str.split(" ");

  const mappingWords = words.map((word) => {
    return `${word} ${word.length}`;
  });

  return mappingWords;
};
