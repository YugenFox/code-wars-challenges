//make func that does breadth first. Data from going down left branches then to right. 

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
//sketch
/*
            a
           / \
          b   c
         / \   \
        d   e   f
*/
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

function depthFirst(root){
    if(root === null){
        return []
    }

    result = []
    q = [root]

    while(q.length > 0){
        current = q.shift()
        result.push(current.val)

        if(current.left !== null){
            q.push(current.left)
        }
        if(current.right !== null){
            q.push(current.right)
        }

    }
    return result
}

function depthFirstRecursive(root){
    if(root === null){
        return []
    }

    let leftValues = depthFirstRecursive(root.left)
    let rightValues = depthFirstRecursive(root.right)

    return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirst(a))
console.log(depthFirstRecursive(a))
//[a, b, c, d, e, f]