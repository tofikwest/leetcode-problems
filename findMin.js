
const findMin = (nums) => {
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            return nums[i+1];
        }
    }
    return nums[0];
}

const testCase = [4,5,6,7,0,1,2];

findMin(testCase);