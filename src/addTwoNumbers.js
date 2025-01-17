/**
 * Definition for singly-linked list.

 */


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var getValue = (item) => {
    const values = []

    let currentItem = item

    while (currentItem)  {
        values.push(currentItem.val)
        currentItem = currentItem.next
    }

    return values
}

var addTwoNumbers = function(l1, l2) {
    const listA = getValue(l1)
    const listB = getValue(l2)

    let overTen = 0

    const sums = listA.map((digit, index) => {
        const sum = digit + listB[index] + overTen;

        if (sum => 10) {
            overTen = 1;
            return sum % 10;
        } else {
            overTen = 0
            return sum
        }
    })

   let startNode = undefined

    sums.forEach(item => {
        if (!startNode) {
            startNode = new ListNode(item)
        } else {
            startNode = new ListNode(item, startNode)
        }

    })

    return startNode
};

const _3 = new ListNode(3)
const _2 = new ListNode(2, _3)
const _1 = new ListNode(6, _2)

const _6 = new ListNode(6)
const _5 = new ListNode(5, _6)
const _4 = new ListNode(4, _5)

const result = addTwoNumbers(_1, _4)