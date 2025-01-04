function isPalindrome(s: string): boolean {
    const convertedString = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
    for (let index = 0; index < Math.floor(convertedString.length / 2); ++index) {
        if (convertedString[index] !== convertedString[convertedString.length -1 - index]) {
            return false
        }
    }
    return true
};