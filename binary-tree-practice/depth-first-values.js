//https://structy.net/problems/depth-first-values
//https://www.youtube.com/watch?v=fAAZixBzIAI&t=859s

/**
 Return an array in depth first value. (values layed out based on how low they are?)
 */

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



function depthFirstValuesProcedural(root){
    // todo
    //check if root null first, -> [] if case
    if(root === null) return []
    let result = []
    let stack = [root]

    while(stack.length > 0){
        let current = stack.pop()
        result.push(current.val)

        
        if(current.right !== null){
            stack.push(current.right)
        }
        if(current.left !== null){
            stack.push(current.left)
        }
    }
    console.log(result)
    return result
  };

  //    a
//    /   \
//   b     c
//  / \   /  \
// d   e z    f
  function depthFirstValuesRecurrsive(root){
    if(root === null) return []
    let leftValues = depthFirstValuesRecurrsive(root.left); //[b, d, e]
    let rightValues = depthFirstValuesRecurrsive(root.right); //[c, z, f]
    return [ root.val, ...leftValues, ...rightValues ]
  }
  

  //function call and intended output
  depthFirstValuesProcedural(a); 
  console.log(depthFirstValuesRecurrsive(a)) 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
  



//   module.exports = {
//     depthFirstValues,
//   };