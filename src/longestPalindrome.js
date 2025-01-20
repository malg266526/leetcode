/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (sequence) => {
    const stringAsArray = Array.from(sequence)
    const halfArrayLength = stringAsArray.length / 2;

    for (let i = 0; i < halfArrayLength; i++) {
        const first = stringAsArray[i];
        const last = stringAsArray[stringAsArray.length - 1 - i];

        if (first !== last)  return false;
    }

    return true
}

var longestPalindrome = function(word) {
    const length = word.length;
    let palindrome = '';

    if (word.length <= 1) return word;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j <= length; j++) {
            const text = word.slice(i, j)

            if (isPalindrome(text) && (!palindrome || palindrome.length < text.length)) {
                palindrome = text
            }
        }
    }

    return palindrome
};

const s = "rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip";

console.log("result ",  longestPalindrome(s))
