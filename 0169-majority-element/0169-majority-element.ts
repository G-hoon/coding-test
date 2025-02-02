function majorityElement(nums: number[]): number {
    const numMap = {}
    const maxValueMap = {
        key: undefined,
        value: 0
    };
    for (const item of nums) {
        if (!numMap[item]) {
            numMap[item] = 1
        }
        else {
            numMap[item] += 1
        }

        if (maxValueMap.value < numMap[item]) {
            maxValueMap.key = item
            maxValueMap.value = numMap[item]
        }
    }

    return maxValueMap.key;
};