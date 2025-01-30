const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [L, C] = input[0].split(' ').map(Number);
const chars = input[1].split(' ');

// 모음인지 확인하는 함수
const isVowel = (c) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(c);
};

// 생성된 암호가 조건을 만족하는지 확인하는 함수
const checkValid = (password) => {
    const vowels = password.split('').filter(c => isVowel(c)).length;
    const consonants = password.length - vowels;
    return vowels >= 1 && consonants >= 2;
};

// 가능한 모든 암호를 생성하는 함수
const generatePasswords = (
    L,
    chars,
    current = "",
    startIdx = 0,
    result = []
) => {
    if (current.length === L) {
        if (checkValid(current)) {
            result.push(current);
        }
        return result;
    }
    
    for (let i = startIdx; i < chars.length; i++) {
        if (current.length === 0 || chars[i] > current[current.length - 1]) {
            generatePasswords(L, chars, current + chars[i], i + 1, result);
        }
    }
    
    return result;
};

// 메인 함수
const solve = (L, chars) => {
    chars.sort();
    return generatePasswords(L, chars);
};

// 결과 출력
const passwords = solve(L, chars);
console.log(passwords.join('\n'));