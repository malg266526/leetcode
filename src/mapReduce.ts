

type MapCallback<T> = (item: T) => any
type FilterCallback<T> = (item: T) => boolean

// with Reduce

const map = <T>(array: T[], callback: MapCallback<T>) => array.reduce((acc, currentValue) => [...acc, callback(currentValue)], [])

const filter = <T>(array: T[], callback: FilterCallback<T>) => array.reduce((acc, currentValue) => {
    const conditionResult = callback(currentValue);

    return conditionResult ? [...acc, currentValue] : acc
}, [])

const testArray = [5, 4,2, -1, 0, 8]

const test = filter(testArray, (item: number) => item > 2)
const test2 = map(testArray, (item: number) => item * 2)

console.log('test result', test);
console.log('test2 result', test2);