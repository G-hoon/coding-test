function maxProfit(prices: number[]): number {
    // loop 를 순회하면서,
    // 현재 값과 다음값을 비교하여
    // 현재 값보다 다음값이 더 클 경우, 각각 minValue, maxValue 로 세팅
    // 다음값이 작을 경우, 해당 maxValue 와 minValue 값의 차이를 저장
    let maxProfit = 0;
    
    // 연속된 두 날짜를 비교하면서 가격이 오르는 구간의 차익을 모두 더함
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            maxProfit += prices[i] - prices[i-1];
        }
    }
    
    return maxProfit;

};