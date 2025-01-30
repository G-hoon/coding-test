const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim(); // trim() 추가
const N = parseInt(input); // 변수명을 N으로 통일

// 별을 저장할 2차원 배열 생성
const stars = Array.from({ length: N }, () => Array(N).fill("*"));

function makeStars(x, y, size) {
    if (size === 1) return;
    
    const nextSize = size / 3;
    
    for (let i = x + nextSize; i < x + 2 * nextSize; i++) {
        for (let j = y + nextSize; j < y + 2 * nextSize; j++) {
            stars[i][j] = " ";
        }
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) continue;
            makeStars(x + i * nextSize, y + j * nextSize, nextSize);
        }
    }
}

makeStars(0, 0, N);
console.log(stars.map((row) => row.join("")).join("\n"));