function hIndex(citations: number[]): number {

    const sortedCitations = citations.sort((a,b) => b-a)

    for (let index = 0; index < citations.length; ++index) {
        console.log(sortedCitations[index], ' / ', index + 1)
        if (sortedCitations[index] < index + 1) {
            return index 
        }
    }

    return citations.length
};