const longestConsecutive = (nums) => {
    if(nums.length === 0) return 0;

    let maxStreak = 0;
    const set = new Set(nums);

    for(const num of set) {
        if(!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }

    return maxStreak;
};

const nums = [100,4,200,1,3,2];

longestConsecutive(nums);