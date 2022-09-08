//https://structy.net/problems/tree-sum
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=3935s

//make constructor Node
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

//make data
    //letter data   
let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")
//make heirarchy tree
    //e.g scetch
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

    //num data
const one = new Node(null)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

one.left = two
one.right = three
three.right = four
four.right = five
five.right = six

    //     1
    //    / \
    //   2    3
    //          \
    //           4
    //            \
    //             5
    //              \
    //                6

//function to find sum of tree node(s) use param (root)
    //iterative
function treeSumIterative(root){
    //if null then return 0
    if(root === null || isNaN(root.val)) {//did isNaN for fun, returns true if what is inside is not a number
        return 0
    }

    //add to a sumTotal in q form
    let sumTotal = 0 //just to start will add to it by going through all current.val's after something is out of the q with .shift()
    let q = [root]

    while(q.length > 0){
        let current = q.shift()
        sumTotal += current.val

        //check if .left and .right exist to keep the q going
        if(current.left !== null){
            q.push(current.left)
        }
        if(current.right !== null){
            q.push(current.right)
        }
    }
    return sumTotal

}
    //recursive
function treeSumRecursive (root){
    //check null
    if(root === null){
        return 0
    }

    //return total sum of root.val and the total vals of its .left & .right branches

    return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

//test func
    //iterative
console.log(treeSumIterative(a))
console.log(treeSumIterative(one))
    //recursive
console.log(treeSumRecursive(a))//I like the output of this. Shows all (null children for ending leaves of tree as 0). So d being by itself would have two null .left & .right, which is shown in output. c only having one null child
console.log(treeSumRecursive(one))