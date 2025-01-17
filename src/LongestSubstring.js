/**
 * @param {string} s
 * @return {number}
 */

// without any repeating charakters

var lengthOfLongestSubstring = function(word) {
    const letters = Array.from(word);
    let longestLength = 0;

     letters.forEach((startLetter, index) => {
        let substringFromLetter = [startLetter];

        for (let i = index + 1; i < letters.length; i++) {
            if (!substringFromLetter.includes(letters[i])) {
                substringFromLetter.push(letters[i]);
            } else {
                if (substringFromLetter.length > longestLength) {
                    longestLength = substringFromLetter.length;
                }

                break;
            }
        }

        if (substringFromLetter.length > longestLength) {
            longestLength = substringFromLetter.length;
        }
    })

    return longestLength
};

const test1 = "abcabcbb"
const test2 = "pwwkew"

console.log(lengthOfLongestSubstring(test2))