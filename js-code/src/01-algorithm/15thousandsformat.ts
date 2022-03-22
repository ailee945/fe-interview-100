/**
 * 千分位格式化
 */

/**
 * 操作数组 时间复杂度弱于直接操作数组
 * @param n
 * @returns
 */
function format1(n: number): string {
  n = Math.floor(n); // 只考虑整数

  const s = n.toString();
  const arr = s.split("").reverse();
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + "," + prev;
      } else {
        return val;
      }
    } else {
      return val + prev;
    }
  }, "");
}

/**
 * 直接操作字符串
 * @param n
 * @returns
 */
function thousandsFormat(n: number): string {
  let res = "";
  let num = Math.floor(n); // 只考虑整数
  let str = num.toString();
  let length = str.length;
  for (let i = length - 1; i >= 0; i--) {
    let j = length - i;
    if (j % 3 === 0) {
      if (i > 0) {
        res = "," + str[i] + res;
      } else {
        res = str[i] + res;
      }
    } else {
      res = str[i] + res;
    }
  }

  return res;
}

// 功能测试
const n = 1000000000;
console.log(thousandsFormat(n));
