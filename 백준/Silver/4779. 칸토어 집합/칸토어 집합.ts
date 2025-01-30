function cantor(n) {
  if (n === 0) return "-";

  const prev = cantor(n - 1);
  const blank = " ".repeat(3 ** (n - 1));
  return prev + blank + prev;
}

// 입력 처리
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
for (const item of inputs) {
  console.log(cantor(parseInt(item)));
}
