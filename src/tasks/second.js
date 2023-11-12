export const isEmpty = (obj) => {
  const isEmpty = Object.keys(obj).length;
  if (isEmpty) return false;
  return true;
};
