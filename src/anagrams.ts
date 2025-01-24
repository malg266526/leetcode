const sortLetter = (a: string, b: string) => a > b ? 1 : -1;

const isAnagram = (wordA: string, wordB: string) => {
    if (wordA.length !== wordB.length) return false

    // @ts-ignore
    const sortedA = Array.from(wordA).sort(sortLetter).join('')
    // @ts-ignore
    const sortedB = Array.from(wordB).sort(sortLetter).join('')

    return sortedA === sortedB
}

function funWithAnagrams(text: string[]): string[] {
    const origins = text.slice(0, 1);
    const toCheck = text.slice(1, text.length);

    toCheck.forEach((item) => {
        const foundAnagram = origins.filter((origin) => isAnagram(origin, item))

        if (foundAnagram.length === 0) {
            origins.push(item)
        }
    })

    console.log('origins', origins)
    console.log('sor', origins.sort(sortLetter))

    return origins.sort(sortLetter);
}


const testCase = ["code","aaagmnrs","anagrams","doce"]
const result = funWithAnagrams(testCase)
console.log('result', result)