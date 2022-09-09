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

function breadthFirst(root){
    if(root === null){
        return []
    }

    result = []
    stack = [root]

    while(stack.length > 0){
        current = stack.pop()
        result.push(current.val)

        if(current.right !== null){
            stack.push(current.right)
        }
        if(current.left !== null){
            stack.push(current.left)
        }
    }
    return result
}

//see if there even is a recursive

console.log(breadthFirst(a))
//[a, b, d, e, c, f]