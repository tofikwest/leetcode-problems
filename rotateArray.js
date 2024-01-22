/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++, end--;
  }
}

var rotate = function (nums, k) {
  k %= nums.length;

  reverse(nums, 0, nums.length - 1); // полностью перевернули массив
  reverse(nums, 0, k - 1); // сделали поворот на k
  reverse(nums, k, nums.length - 1); // дописали остальное
};
