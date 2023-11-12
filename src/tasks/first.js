export const createCounter = (init) => {
  let counter = init;

  return {
    increment: () => {
      counter += 1;
      return counter;
    },
    decrement: () => {
      if (counter !== 0) {
        counter -= 1;
      }
      return counter;
    },
    reset: () => {
      counter = init;
      return counter;
    },
  };
};
