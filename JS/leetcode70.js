// https://leetcode-cn.com/problems/climbing-stairs/

{
  // 逆序递推，逻辑正确，复杂度太高O(2^n)，存在太多的重复计算
  var climbStairs = function(n) {
    // f(n) = f(n - 1) + f(n - 2)
    // f(1) = 1, f(2) = 2
    if (n === 1) return 1
    if (n === 2) return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
  };
}

{
  // 改进，增加存储，复杂度变为O(n)，但是增加的空间复杂度
  var climbStairs = function(n) {
    const map = {}
    function count(n) {
      if (n === 1) return 1
      if (n === 2) return 2
      if (!map[n]) map[n] = count(n - 1) + count(n - 2)
      return map[n]
    }

    return count(n)
  };
}

{
  // 正序递推，只需要记录前两个值，时间复杂度O(n)，空间复杂度O(1)
  var climbStairs = function(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    let pre = 2, pre_pre = 1, count = 0
    for (let i = 3; i <= n; i++) {
      count = pre + pre_pre
      pre_pre = pre
      pre = count
    }

    return count
  }
}