//“Write a function to check if a binary tree is a binary search tree.”
//https://leetcode.com/problems/validate-binary-search-tree/discuss/918283/validate-binary-search-tree-javascript

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  //test data
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

      //num data
const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

// one.left = two
// one.right = three
// three.left = four
// three.right = four
// four.right = five
// five.right = six
two.left = one
two.right = three
three.right = four

// two.left = one
// two.right = three
/*
          2
        1   3
              4

*/

    //     1
    //    / \
    //   2    3
    //          \
    //           4
    //            \
    //             5
    //              \
    //                6

  function findIfValid(root,min=null,max=null){
       
    if(!root) return true;
    
  
    // If Max is not null that means we are in left subtree
    // check if its value is less than all its parents value or not
    // if it is greater return false
  
    if(max!==null && root.val>=max) return false;
    
     // If Min is not null that means we are in right subtree
    // check if its value is greater than all its parents value or not
    // if it is less return false
    if(min!==null && root.val<=min) return false;
  
  // if both left and right subtree is valid true will be returned otherwise false will be returned to its parent 
  return findIfValid(root.left,min,root.val) && findIfValid(root.right,root.val,max);
  
  
}
var isValidBST = function(root) {  
return findIfValid(root);
}; //store in var if want that way, I did not use below

//test
console.log(findIfValid(two))
