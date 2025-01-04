function isAnagram(s: string, t: string): boolean {
    const sortedSLetter = s.split('').sort().join('')
    const sortedTLetter = t.split('').sort().join('')
    
    return sortedSLetter === sortedTLetter
};