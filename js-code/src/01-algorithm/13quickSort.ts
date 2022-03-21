/**
 * 快速排序 splice实现
 * @param arr
 * @returns
 */
function quickSort1(arr: number[]): number[] {
  const length = arr.length;
  if (length == 0) return [];
  const midIndex = Math.floor(length / 2);
  // const midValue = arr[midIndex];
  const midValue = arr.slice(midIndex, midIndex + 1)[0];
  let left: number[] = [];
  let right: number[] = [];
  // splice改变原数组
  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      if (arr[i] < midValue) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort1(left).concat([midValue], quickSort1(right));
}

/**
 * 快速排序 slice实现
 * @param arr
 * @returns
 */
function quickSort2(arr: number[]): number[] {
  const length = arr.length;
  if (length == 0) return [];
  const midIndex = Math.floor(length / 2);
  // const midValue = arr[midIndex];
  const midValue = arr.slice(midIndex, midIndex + 1)[0];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < length; i++) {
    if (midIndex !== i) {
      if (arr[i] < midValue) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort2(left).concat([midValue], quickSort2(right));
}

const arr = [1, 3, 2, 4, 6, 5, 7, 9, 8];
console.log(quickSort1(arr));

export {};
