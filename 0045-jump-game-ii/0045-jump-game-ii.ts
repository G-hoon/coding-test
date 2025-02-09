function jump(nums: number[]): number {
    if (nums.length === 1) return 0;
   
   let jumps = 0;          // 필요한 점프 횟수
   let currentMax = 0;     // 현재 점프로 도달 가능한 최대 위치
   let nextMax = 0;        // 다음 점프로 도달 가능한 최대 위치
   
   for (let i = 0; i < nums.length - 1; i++) {
       // 다음 점프로 도달할 수 있는 최대 위치 갱신
       nextMax = Math.max(nextMax, i + nums[i]);
       
       // 현재 위치가 이전 점프의 최대 도달 범위에 도달했다면
       if (i === currentMax) {
           jumps++;            // 점프 횟수 증가
           currentMax = nextMax;  // 다음 점프의 최대 도달 범위로 갱신
           
           // 이미 마지막 인덱스에 도달 가능하다면 종료
           if (currentMax >= nums.length - 1) {
               break;
           }
       }
   }
   
   return jumps;
};