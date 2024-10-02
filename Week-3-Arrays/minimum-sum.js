// https://www.geeksforgeeks.org/problems/minimum-sum4058/1

// The solution is stuck at one of the cases of the gfg

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {string}
 */

class Solution {
  solve(arr, n) {
    //code here
    let numb1 = 0;
    let numb2 = 0;
    arr.sort();
    for (let i = 0; i <= n - 1; i++) {
      if (i % 2 == 0) {
        numb1 = numb1 * 10 + arr[i];
      } else {
        numb2 = numb2 * 10 + arr[i];
      }
    }

    return (numb1 + numb2).toString();
  }
}
