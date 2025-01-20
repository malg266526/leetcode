/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);

    const isLengthEven =  merged.length % 2 === 0
    const halfArrayLength = merged.length / 2

    if (isLengthEven) {
        const middleNumbers = merged.slice(halfArrayLength - 1, halfArrayLength + 1)
        return (middleNumbers[0] + middleNumbers[1]) /2
    } else {
       return merged.slice(halfArrayLength, halfArrayLength + 1)[0]
    }
};



const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17]

console.log('result', findMedianSortedArrays(nums1, nums2))

// const nums1 = [1,2]
// const nums2 = [3,4]