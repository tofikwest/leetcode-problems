/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let insertIdx = 1,
    i = 1;
  while (i < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIdx] = nums[i];
      insertIdx++;
    }
    i++;
  }

  return insertIdx;
};
