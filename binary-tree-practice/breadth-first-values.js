//https://structy.net/problems/breadth-first-values
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=2160s

//breadth first is listing nodes of tree in height order from root

//node constructor
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

//new nodes with val data assigned

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")

//set tree heiarchy
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//make function that will output the root from tree above (using a) in breadth formate

function breadthFormate(root){
    //check root if null, then return empty array
    if(root === null) return []

    //will use q since we want to go layer by layer down in terms of height in the final return of node values

    let result = []//will return this
    let q = [root] //will append to this if more nodes exist

    while(q.length > 0){
        let current = q.shift()//use shift since we take from beginning of array(first added thing, like line at shopping mart), would not use .pop() since that would let "end of line" go before what was added before. When syphoning through the nodes we'll see them top to bottom and add in q. So to return in that right order will have to .shift to get the correct front of line

        result.push(current.val)//don't forget to set current.val to get actually value in return(what is stored in node) if just to current will get the node class, which is not what we want to display in our final array or node values
        //.push is pushing what was just shifted off the front of the q line before

        //check if current chosen from .shift of q, has more nodes on .left or .right to add to the q to be looked at later. If not, the q would eventually end due to the loop finishing and everything being shifted() off
        if(current.left !== null){
            q.push(current.left)
        }
        if(current.right !== null){
            q.push(current.right)
        }
    }
    //final return
    console.log(result)
    return result
}
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//breadth test
breadthFormate(a)
//    -> ['a', 'b', 'c', 'd', 'e', 'f']