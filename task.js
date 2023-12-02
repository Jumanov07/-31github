//21
const finalValueAfterOperations = (operations) => {
  let count = 0;

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "--X":
        count--;
        break;

      case "X--":
        count--;
        break;

      case "++X":
        count++;
        break;

      case "X++":
        count++;
        break;

      default:
        count = 0;
        break;
    }
  }

  return count;
};
