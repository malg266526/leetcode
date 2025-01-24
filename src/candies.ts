
function candies(n: number, arr: number[]): number {

    const candiesArr = [1]

    for (let i = 1; i < n; i++) {
        const prevRank = arr[i - 1]
        const prevCandies = candiesArr[i - 1]
        candiesArr[i] = 1

        if (arr[i] > prevRank) {
            candiesArr[i] = prevCandies + 1

        } else if (arr[i] < prevRank && candiesArr[i] >= prevCandies) {
            candiesArr[i - 1] = candiesArr[i] + 1
        }
    }

    return candiesArr.reduce((acc, curr) => acc + curr, 0);
}


const testCase = [2, 4, 3, 5, 2, 6, 4, 5]
const result = candies(testCase.length, testCase)
console.log('result', result)