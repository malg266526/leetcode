// Validate a Binary Search Tree



interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const isValid = (node?: TreeNode, min?: number, max?: number) => {
    if (!node) {
        return true
    }

    const incorrectLeft = min !== null && min >= node.value
    const incorrectRight = max !== null && max <= node.value

    if (incorrectLeft || incorrectRight) return false

    return isValid(node.left, min, node.value) && isValid(node.right, node.value, max)

}


function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true

    return isValid(root)
}

const root = {
    value: 10,
    left: {
        value: 5,
        left: { value: 3, left: null, right: null },
        right: { value: 12, left: null, right: null }
    },
    right: {
        value: 15,
        left: { value: 12, left: null, right: null },
        right: { value: 18, left: null, right: null }
    }
};
console.log(isValidBST(root));