///https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/
//https://youtu.be/gMClmniiiP8?t=1665

//print from bottom left leaf up wards in heiarchy to root, then bottom left of right side of root, to its right 

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //test data
  const a = new Node("a")
  const b = new Node("b")
  const c = new Node("c")
  const d = new Node("d")
  const e = new Node("e")
  const f = new Node("f")
  const z = new Node("z")
  
  //how tree set up
  a.left = b
  a.right = c
  b.left = d
  b.right = e
  c.right = f
  c.left = z
  //      a
  //    /   \
  //   b     c
  //  / \   /  \
  // d   e z    f
  function inorderRecursive(root){
    if(root === null || root.val === -1){
        return;
    }
    //left call, print root.val, right call
    inorderRecursive(root.left)
    console.log(root.val)
    inorderRecursive(root.right)
  }

  function inorderIterative(root){
    if (root === null){
        return []
    }

    let result = [] //so I have some full array as an answer
    let stack = []
    let current = root

    while(stack.length > 0 || current !== null){
        //// if the current node exists, push it into the stack (defer it)
            // and move to its left child
        if(current !== null){
            stack.push(current)
            current = current.left
        }
        else{
           // otherwise, if the current node is null, pop an element from
                // the stack, print it, and finally set the current node to its
                // right child
            current = stack.pop()
            console.log(current.val + " ")
            result.push(current.val)

            current = current.right

        }

    }
    return result
  }
 
//   inorderRecursive(a)//undefined last line if clg this
  inorderIterative(a)
  console.log(inorderIterative(a))//can return in array form
  //expected output
  //[d, b, e, a, z, c, f]