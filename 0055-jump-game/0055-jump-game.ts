function canJump(nums: number[]): boolean {

     let maxReach = 0;
    
    // 배열을 순회하면서 각 위치에서 도달할 수 있는 최대 거리를 갱신
    for (let i = 0; i <= maxReach; i++) {
        // 현재 위치가 배열의 길이보다 크거나 같으면 마지막 인덱스에 도달한 것
        if (i >= nums.length) return true;
        
        // 현재 위치에서 도달할 수 있는 최대 거리 계산
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 현재 위치가 maxReach와 같고, 마지막 인덱스가 아니라면
        // 더 이상 앞으로 진행할 수 없음
        if (maxReach === i && i !== nums.length - 1) return false;
    }
    
    return true;
};