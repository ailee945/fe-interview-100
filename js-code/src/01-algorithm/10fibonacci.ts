/**
 * 斐波那契数列
 * 算法三大思维：贪心 二分 动态规划
 * 青蛙跳台阶问题
 */

/**
 * 递归 时间复杂度 o(2^n)
 * @param n n
 * @returns finbobacci n
 */
function fibonacci1(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

/**
 *  循环 时间复杂度 O(n)
 * @param n n
 * @returns  fibonacci n
 */
function fibonacci2(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let n1 = 0;
  let n2 = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}

// 功能测试 + 性能测试
console.time("fibonacci1");
console.log(fibonacci1(42));
console.timeEnd("fibonacci1");

console.time("fibonacci2");
console.log(fibonacci2(42));
console.timeEnd("fibonacci2");
