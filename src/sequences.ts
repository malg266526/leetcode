

const sequenceA = [2,3,9,2,5,1,3,7,10];
const sequenceB = [2,1,3,4,3,10,6,6,1,7,10,10,10];

type Sequence = number[]

const isPrimeNumber = (digit: number) => {
    if (digit <= 1) return false;

    for (let i = 2; i < digit; ++i) {
        if (digit % i === 0) return false;
    }

    return true;
}

const getSequenceWithNoPTimesOccurences = (sequenceA: Sequence, sequenceB: Sequence  ) => {
    const sequenceBOccurences = sequenceB.reduce((acc, currentValue) => {
        const currentOccurences = acc[currentValue] || 0;
        acc[currentValue] = currentOccurences > 0 ? currentOccurences + 1 : 1;
        return acc;
    }, {})

    return sequenceA.filter((digitA) => !isPrimeNumber(sequenceBOccurences[digitA] || 0));
}

// getSequenceWithNoPTimesOccurences(sequenceA, sequenceB)
console.log('1', getSequenceWithNoPTimesOccurences(sequenceA, sequenceB));

// O(n)