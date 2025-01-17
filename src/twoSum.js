/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];

    nums.forEach((num, index) => {
        nums.forEach((second, indexSecond) => {
            if (num + second === target && index !== indexSecond && !result.includes(index)) {
                result.push(index, indexSecond);
            }
        })
    })

    return result;
};

const result = twoSum([2,7,11,15], 9)
console.log(result)