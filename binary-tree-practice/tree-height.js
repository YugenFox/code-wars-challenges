//https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

a = new Node("a")
b = new Node("b")
c = new Node("c")
d = new Node("d")
e = new Node("e")
f = new Node("f")
z = new Node("z")
//sketch
/*
            a
           / \
          b   c
         / \   \
        d   e   f
                 \
                  z
*/
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
f.right = z

//find tree height
function treeHeight(root){
    if(root === null || root.left === null && root.right === null){
        return 0
    }
    return Math.max(treeHeight(root.left), treeHeight(root.right) + 1)
}

//test
console.log(treeHeight(a))
    //expect 3
