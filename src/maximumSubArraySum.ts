
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const getSum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

function maxSubarraySum(arr: number[]): number {
    // Your code here
    let biggestSum = arr[0] || 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            for (let j = i + 1; j <= arr.length; j++) {
                const newSubArray = arr.slice(i, j)
                const sum = getSum(newSubArray)

                if (sum > biggestSum) {
                    biggestSum = sum
                }
            }
        }
    }

    return biggestSum;
}

console.log(maxSubarraySum(arr)); // Output: 6
