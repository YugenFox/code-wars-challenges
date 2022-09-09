//https://structy.net/problems/max-root-to-leaf-path-sum
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=5656s

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(55);//55 or 4
const d = new Node(4);
const e = new Node(-2);
const f = new Node(11);//10 or 1

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     55//4
//  / \      \
// 4   -2     10//1

//func find the max sum possible by following a single path to the end of a leaf node(leaf's have no children)
function maxPathSum(root){
    if(root === null){
        return -Infinity
    }
    //if true, means at leaf (has no children)
    if(root.left === null & root.right === null){
        console.log(`${root.val} in return root.val`)
        return root.val
    }

    //find maxPathSum. Get root.val then add either .left or .right depending on what child path was greater than the other
    let maxChildPathSum = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )
    return root.val + maxChildPathSum
}


//test
    //iterative xx not this time

    //recursive
console.log(maxPathSum(a)) // -> 18
 
