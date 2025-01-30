function removeElement(nums: number[], val: number): number {
   let k: number = 0;  // val이 아닌 요소들의 새로운 위치를 추적
    
    // 배열을 순회하면서
    for (let i = 0; i < nums.length; i++) {
        // 현재 요소가 val이 아니면
        if (nums[i] !== val) {
            // k 위치에 해당 요소를 저장
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};