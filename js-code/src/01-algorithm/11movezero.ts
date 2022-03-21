/**
 * 嵌套循环 时间复杂度O(n^2)
 * @param arr
 * @returns
 */
function moveZero1(arr: number[]) {
  let length = arr.length;
  if (length == 0) return;
  let zeroLength = 0; // 优化 非零数组长度
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] == 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--; // 遇到0，索引值-1
      zeroLength++;
    }
  }
}

/**
 * 双指针 时间复杂度O(n)
 * @param arr
 */
function moveZero2(arr: number[]) {
  let length = arr.length;
  if (length == 0) return;
  let j = -1;
  for (let i = 0; i < length; i++) {
    if (arr[i] == 0) {
      if (j < 0) {
        j = i;
      }
    }
    if (arr[i] !== 0 && j >= 0) {
      const n = arr[j];
      arr[j] = arr[i];
      arr[i] = n;
      j++;
    }
  }
}

const arr = [1, 2, 0, 3, 0, 0, 4, 5, 6];
moveZero2(arr);
console.log(arr);
