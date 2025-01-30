function removeDuplicates(nums: number[]): number {
    let k = 2
    for (let index = 2; index < nums.length; ++index) {
        if (nums[index] !== nums[k-2]) {
            nums[k] = nums[index]
            k = k + 1;
        }
    }
    return k
};