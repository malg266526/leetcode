

const numbers = [10, 5, 9, 203, 1, 0, 5, 6, -1, 73, 72, 85]

const bubbleSort = (array) => {

    let mutableArray = array
    const length = mutableArray.length

    for (let i = 0; i < length  ; i++) {
        for (let j = 0; j < length; j++) {
            const valueI = mutableArray[i]
            const valueJ = mutableArray[j]

            if (valueI < valueJ) {
                mutableArray[i] = valueJ
                mutableArray[j] = valueI
            }
        }
    }

    return mutableArray;
}

bubbleSort(numbers)