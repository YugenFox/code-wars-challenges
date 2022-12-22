//https://leetcode.com/problems/fibonacci-number/

// my solution
var fib = function(n) {
    let fibSeq = [0,1]

    for(let i = 2; i <= n; i++){
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]
    }

    return fibSeq[n]
};

//[0,1,1,2,3,5,8]
//test cases
/* n is essentially an index with in the array above, fibSeq[n]
Input
n =
2
Output
1
Expected
1

Input
n =
3
Output
2
Expected
2

Input
n =
4
Output
3
Expected
3
*/