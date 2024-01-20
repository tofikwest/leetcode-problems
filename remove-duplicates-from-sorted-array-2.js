/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 2;

  while (i < nums.length) {
    let curr = nums[i],
      prev = nums[i - 1],
      more_prev = nums[i - 2];
    if (more_prev === prev && prev === curr) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};
