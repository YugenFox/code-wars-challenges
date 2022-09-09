//https://structy.net/problems/tree-min-value
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=4793s


//make constructor Node
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

//function findMin()
    //iterative
function findMinIterative(root){
    if(root === null){
        console.log("first null check")
        return Infinity
    }

    //q
    let minVal = Infinity//what we want to find, set to other extreme is typical practice
    let q = [root]

    while(q.length > 0){
        let current = q.shift()
        // console.log(current.val)
        //test to change minVal
        if(current.val < minVal){
            minVal = current.val
        }

        //.left .right check
        if(current.left !== null){
            q.push(current.left)
        }
        if(current.right !== null){
            q.push(current.right)
        }
    }
    return minVal

}
    //recursive
function findMinRecursive(root){
    //check null
    if(root === null){
        return Infinity
    }

    //compare root.val to its children
    let minLeft = findMinRecursive(root.left)
    let minRight = findMinRecursive(root.right)

    return Math.min(root.val, minLeft, minRight)

}

//test
    //iterative
console.log(findMinIterative(a))
    //recursive
console.log(findMinRecursive(a))
 // -> -2