class RandomizedSet {
    private nums: number[];      // 값을 저장할 배열
    private valToIndex: Map<number, number>;  // 값과 인덱스를 매핑할 Map

    constructor() {
        this.nums = [];
        this.valToIndex = new Map();
    }

    insert(val: number): boolean {
        // 이미 존재하면 false 반환
        if (this.valToIndex.has(val)) {
            return false;
        }
        
        // 배열 끝에 값을 추가하고
        // Map에 값과 인덱스를 저장
        this.valToIndex.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val: number): boolean {
        // 값이 없으면 false 반환
        if (!this.valToIndex.has(val)) {
            return false;
        }
        
        // 삭제할 값의 인덱스를 가져옴
        const index = this.valToIndex.get(val)!;
        const lastVal = this.nums[this.nums.length - 1];
        
        // 마지막 값을 삭제할 위치로 이동
        this.nums[index] = lastVal;
        this.valToIndex.set(lastVal, index);
        
        // 마지막 값 제거
        this.nums.pop();
        this.valToIndex.delete(val);
        
        return true;
    }

    getRandom(): number {
        // 배열의 랜덤한 인덱스에서 값을 반환
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}