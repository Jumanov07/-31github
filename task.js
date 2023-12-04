//23
const mostWordsFound = (sentences) => {
  let lengths = [];

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");

    lengths.push(words.length);
  }

  return Math.max(...lengths);
};
