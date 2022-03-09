
{
  // 时间复杂度为O(2^n)， 提交超时
  var minimumTotal = function(triangle) {
    var min = Infinity, len = triangle.length
    // sum是i，j点之前的路径和
    function travese(i, j, sum) {
      if (i === len - 1) {
        // 如果i为len-1，表明走到最后的页节点上了，可以拿到这条路径的和了
        min = Math.min(min, sum + triangle[i][j])
        return
      }
      sum += triangle[i][j]
      travese(i + 1, j, sum)
      travese(i + 1, j + 1, sum)
    }
    travese(0, 0, 0)
    return min
  };
}

{
  // 动态规划
  // 递归的思维是从上而下，将大问题分解为类似的子问题
  // 动态规划则是自下而上，从小问题一步步递推到最后
  // 难点在于定义状态，并且找到状态转移的方程，也就是递推公式

  // dp[i, j]表示最底端到triangle[i][j]节点的路径最小值，则
  // dp[i, j] = min(dp[i + 1, j], dp[i + 1, j + 1]) + triangle[i][j]
  // dp[len - 1, j] = triangle[len - 1][j], len为triangle数组的长度

  var minimumTotal = function(triangle) {
    let len = triangle.length, dp = []
    dp[len - 1] = [...triangle[len - 1]]
    for (let i = len - 2; i >= 0; i--) {
      var jLen = triangle[i].length
      dp[i] = []
      for (j = 0; j < jLen; j++) {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
      }
    }
    return dp[0][0]
  }
}

{
  // 优化动态规划方法
  // 没有必要保存所有的dp，计算出上面一层dp后，下面一层就可以丢掉了，所以复用一个一维数组就可以了
  var minimumTotal = function(triangle) {
    let len = triangle.length, dp = [...triangle[len - 1]]
    for (let i = len - 2; i >= 0; i--) {
      for (j = 0; j < triangle[i].length; j++) {
        dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
      }
    }
    return dp[0]
  }
}