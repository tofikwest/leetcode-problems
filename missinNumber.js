const missingNumber = nums => {
    const N = nums.length;

    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);

    return expectedSum - actualSum;
}

const nums = [9,6,4,2,3,5,7,0,1];

missingNumber(nums);

const missingNumber2 = function(nums) {
    const set = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

    return -1;
};

missingNumber2(nums);