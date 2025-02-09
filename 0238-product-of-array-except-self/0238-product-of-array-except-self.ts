function productExceptSelf(nums: number[]): number[] {
    // 출력 값을 담을 신규 배열을 생성
    // 기존 배열을 순회하면서, 자기 자신을 1로 만들고, 배열의 모든 요소 곱셈
    // 그 값을 신규 배열의 index에 저장
    const arr = []
    const copiedNums = nums.slice()
    for (let index = 0; index < nums.length; ++index) {
        copiedNums[index] = 1
        const productValue = copiedNums.reduce((acc, curr) => acc * curr)
        copiedNums[index] = nums[index]
        arr.push(productValue)
    }
    return arr
};