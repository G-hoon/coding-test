/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length; // k를 배열 길이로 정규화
    
    // 전체 배열을 뒤집는 헬퍼 함수
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    // 1. 전체 배열을 뒤집음
    reverse(nums, 0, nums.length - 1);
    // 2. 처음부터 k-1까지 뒤집음
    reverse(nums, 0, k - 1);
    // 3. k부터 끝까지 뒤집음
    reverse(nums, k, nums.length - 1);
};