

const isFarAway = (coordA: number, coordB: number) => Math.abs(coordA - coordB) > 1

function entryTime(s: string, keypad: string): number {
    const coordinates: {[key: string]: number[]} = {}

    // @ts-ignore
    Array.from(keypad).forEach((key: string, index: number) => {
        const x = Math.floor(index / 3)
        const y = index % 3

        coordinates[key] = [x, y]
    })

    // @ts-ignore
    const seconds = Array.from(s).map((digit: string, index: number) => {
        if (index === 0 || s[index - 1] === digit) {
            return 0
        }

        const prevCoordinates = coordinates[s[index - 1]]
        const currentCoordinates = coordinates[digit]

        const shouldAdd2Seconds = isFarAway(prevCoordinates[0], currentCoordinates[0]) || isFarAway(prevCoordinates[1], currentCoordinates[1])
        return shouldAdd2Seconds ? 2 : 1
    })

    return seconds.reduce((acc, currentValue) => acc + currentValue, 0)
}

const testCase = "51"
const keyboard = "752961348"
const result = entryTime(testCase, keyboard)
console.log('result', result)