interface IRes {
  char: string;
  length: number;
}
/**
 * 嵌套循环 但时间复杂度是O(n)
 * @param str
 * @returns
 */
function findContinuousChar(str: string): IRes {
  const res: IRes = {
    char: "",
    length: 0,
  };

  let length = str.length;
  if (length == 0) return res;

  let temLength = 0;
  for (let i = 0; i < length; i++) {
    temLength = 0;
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        temLength++;
      }
      // 不相等，或者已经到了最后一个元素。要去判断最大值
      if (str[i] !== str[j] || j >= length) {
        if (temLength > res.length) {
          res.char = str[j];
          res.length = j;
        }
        if (j < length - 1) {
          i = j - 1; // 跳步
        }
        break;
      }
    }
  }

  return res;
}

/**
 * 双指针 时间复杂度O(n)
 * @param str
 * @returns
 */
function findContinuousChar2(str: string): IRes {
  const res: IRes = {
    char: "",
    length: 0,
  };

  const length = str.length;
  if (length === 0) return res;

  let tempLength = 0; // 临时记录当前连续字符的长度
  let i = 0;
  let j = 0;

  // O(n)
  for (; i < length; i++) {
    if (str[i] === str[j]) {
      tempLength++;
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 不相等，或者 i 到了字符串的末尾
      if (tempLength > res.length) {
        res.char = str[j];
        res.length = tempLength;
      }
      tempLength = 0; // reset

      if (i < length - 1) {
        j = i; // 让 j “追上” i
        i--; // 细节
      }
    }
  }

  return res;
}

const str = "aabbbbcccccd234";
console.log(findContinuousChar2(str));
