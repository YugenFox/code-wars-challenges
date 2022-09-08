//https://youtu.be/fAAZixBzIAI?t=858

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

one.left = two
one.right = three
three.right = 4
four.right = 5
five.right = 6

        //     1
        //    / \
        //   2    3
        //          \
        //           4
        //            \
        //             5
        //              \
        //                6