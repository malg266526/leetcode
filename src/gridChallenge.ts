/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

const sortAlpabetically = (a: string, b: string) => a.toLowerCase() < b.toLowerCase() ? -1 : 1

const isAlphabeticallyCorrect = (word: string) => {
    // @ts-ignore
    const sortedWord = Array.from(word).sort(sortAlpabetically).join("");
    return sortedWord === word
}

function gridChallenge(grid: string[]): string {
    const rearranged = grid.map(sequence => {
        // @ts-ignore
        return Array.from(sequence).sort(sortAlpabetically);
    }).map(sequence => sequence.join(""))

    const sequenceLength = rearranged[0]?.length || 0;
    const columnsSequences = []

    for (let letterIndex = 0; letterIndex < sequenceLength; letterIndex++) {
        columnsSequences.push(rearranged.reduce((acc, currentWord) => `${acc}${currentWord[letterIndex]}`, ''))
    }

    const result = columnsSequences.filter(isAlphabeticallyCorrect).length === columnsSequences.length

    return result ? 'YES' : 'NO'
}


const testCase = ['abc', 'hjk', 'mpq', 'rtv']

console.log('result ',  gridChallenge(testCase))