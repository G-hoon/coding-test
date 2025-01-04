function twoSum(nums: number[], target: number): number[] {
    for (let index = 0; index < nums.length; ++index) {
        for (let j = index + 1; j <nums.length; ++j) {
            if (nums[index] + nums[j] === target) {
                return [index, j]
            }
        }
    }
};