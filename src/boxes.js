/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const singleBoxes = Array.from(boxes);

    const operations = singleBoxes.map((digit, index) => {

        return singleBoxes.reduce((accumulator, currentValue, boxIndex) => {
            if (index !== boxIndex && Number(singleBoxes[boxIndex])) {
                const distance =  Math.abs(boxIndex - index);

                return accumulator += distance
            } else {
                return accumulator
            }
        }, 0)
    })

    return operations.join().toString();
};

const result = minOperations('1100' )
console.log('result', result)
