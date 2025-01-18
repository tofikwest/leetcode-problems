const containsDublicate = nums => {
    const set = new Set();

    for (const num of nums) {
        if(set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

const nums = [1,2,3,1];

containsDublicate(nums);