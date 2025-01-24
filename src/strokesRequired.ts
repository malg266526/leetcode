

function strokesRequired(picture: string[]): number {
    const coordinates: {[key: string]: number[]} = {}

    const width = picture[0]?.length || 0
    const height = picture.length

    // @ts-ignore
    const visited: number[][] = Array(width).fill(0).map(() => Array(height).fill(0))
    console.log('visited', visited)

    let colourCounter = 0

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (i === 0 && j === 0) {
                visited[i][j] = colourCounter;
            }

            const leftNodeValue = picture[j][i - 1]
            const leftNodeColour = i > 0 ? visited[ i- 1][j] : null

            const upperNodeValue = j > 0 ? picture[j - 1][i] : null
            const upperNodeColour = j > 0 ? visited[i][j - 1] : null

            if (leftNodeValue === picture[j][i]) {
                visited[i][j] = leftNodeColour
            } else if (upperNodeValue === picture[j][i]) {
                visited[i][j] = upperNodeColour
            } else {
                colourCounter = colourCounter + 1
                visited[i][j] = colourCounter
            }
        }
    }

    console.log('visited', visited)
    return colourCounter
}


const testCase = [ "bbba" , "abba" , "acaa", "aaac" ]

// const testCase = [ "aa" , "ab" ]

const result = strokesRequired(testCase)
console.log('result', result)