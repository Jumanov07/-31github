const searchInsert = (nums, target) => {
  const index = nums.indexOf(target);
  if (index !== -1) return index;

  const array = [...nums, target];
  
  const sortedArray = array.sort((a, b) => a - b);

  return sortedArray.indexOf(target);
};

