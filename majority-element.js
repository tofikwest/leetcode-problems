/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash_table = {};

  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (hash_table[nums[i]]) {
      hash_table[nums[i]] += 1;
    } else {
      hash_table[nums[i]] = 1;
    }
  }

  const hashToArr = Object.entries(hash_table);

  let biggestValue = hashToArr[0][1],
    big_key = hashToArr[0][0];

  for (let j = 1; j < hashToArr.length; j++) {
    const [key, val] = hashToArr[j];
    if (val > biggestValue) (biggestValue = val), (big_key = key);
  }

  return big_key;
};
