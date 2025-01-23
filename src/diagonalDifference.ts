/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here

    const onlyMatrix = arr
    const length = onlyMatrix.length

    const leftDiagonal = []
    const rightDiagonal = []

    for (let i = 0; i < length; i++) {
        leftDiagonal.push(onlyMatrix[i][i])
    }

    for (let i = 0; i < length; i++) {
        rightDiagonal.push(onlyMatrix[i][length - 1 - i])
    }

    const leftSum = leftDiagonal.reduce((acc, current) => acc + current, 0)
    const rightSum = rightDiagonal.reduce((acc, current) => acc + current, 0)

    return Math.abs(leftSum - rightSum)
}

const testCase =
    [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ]

  console.log('dss', diagonalDifference(testCase))