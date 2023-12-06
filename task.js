//25
const restoreString = (s, indices) => {
  let array = [];

  for (let i = 0; i < indices.length; i++) {
    array[indices[i]] = s[i];
  }

  return array.join("");
};
