//https://structy.net/problems/tree-includes
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=2863s

//make constructor Node
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

//make data
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

//func to search through tree from (root, target) target being what we're looking for if it is included

    //iterative with breadth, not depth
function searchTreeIterative(root, target){
    //null check
    if(root === null){
        return false //can't find something in non-existant tree
    }

    //now look for trues in tree, using q stuff
        //for q, need result(helps clg to check we have it .vals right for bug testing) current inside while to check node and current.val, false outside since found nothing
    let result = []
    let q = [root]

    while(q.length > 0){
        current = q.shift()
        result.push(current.val) //think only helps for bug testing in this case to see tree shows up how we expect
        if(current.val === target){
            return true
        }

        //check its nodes and add to q
        if(current.left !== null){
            q.push(current.left)
        }
        if(current.right !== null){
            q.push(current.right)
        }

    }
    return false //since found nothing in while loop, if found in while then have a check to return true in there for (current.val === target)
}

    //recursive
function searchTreeRecurssive(root, target){
    //do null check before .val check or will break
    if(root === null){
        return false //false for nothing in there for target to even see
    }
    if(root.val === target){
        return true //do this in case this root is the answer and not the children below that would come with true || false, etc etc 
    }

    //check if any path on left or right would have a true

    return searchTreeRecurssive(root.left) || searchTreeRecurssive(root.right)
}

//test with func call
    //iterative
console.log(searchTreeIterative(a, "a")) 
console.log(searchTreeIterative(a, "b")) 
console.log(searchTreeIterative(a, "z")) 
    //recurssive
console.log(searchTreeIterative(a, "a"))
console.log(searchTreeIterative(a, "b"))
console.log(searchTreeIterative(a, "z"))
