/**
 * 获取回文数
 */

/**
 * 数字-字符串-数组-反转-字符串
 * @param max
 * @returns
 */
function findPalidroms1(max: number): number[] {
  const arr: number[] = [];
  if (max <= 0) return [];
  for (let i = 1; i <= max; i++) {
    if (i.toString() == i.toString().split("").reverse().join("")) {
      arr.push(i);
    }
  }
  return arr;
}

/**
 * 直接比较字符串前后 用栈的思想
 * @param max
 * @returns
 */
function findPalidroms2(max: number): number[] {
  let res: number[] = [];
  if (max <= 0) return res;
  for (let i = 0; i <= max; i++) {
    const str = i.toString();
    const length = str.length;
    let start = 0;
    let end = length - 1;
    let flag = true;
    while (start < end) {
      if (str[start] !== str[end]) {
        flag = false;
        break;
      } else {
        start++;
        end--;
      }
    }
    if (flag == true) res.push(i);
  }
  return res;
}

/**
 * 生成翻转数
 * @param max
 * @returns
 */
function findPalindromes3(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0; // 存储翻转数
    // 生成翻转数
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    if (i === rev) res.push(i);
  }
  return res;
}

// 功能测试
console.log(findPalidroms2(200));
