/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  let j = nums[0],
    i = 1;

  while (j > 0) {
    j--;

    if (j < nums[i]) j = nums[i];
    if (i >= nums.length - 1) return true;

    i++;
  }

  return false;
};
