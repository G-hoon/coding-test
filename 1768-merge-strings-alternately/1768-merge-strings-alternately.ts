function mergeAlternately(word1: string, word2: string): string {

    const length = Math.max(word1.length, word2.length)
    let answer = ''
    for (let index = 0; index < length; ++index) {

        if(word1[index]) {
            answer += word1[index]
        }

        if (word2[index]) {
            answer += word2[index]
        }
    }
    return answer
};