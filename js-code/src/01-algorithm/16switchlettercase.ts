// 切换字符串中的大小写

/**
 * 正则表达式进行匹配，不推荐，使用正则时间复杂度大
 * @param str
 * @returns
 */
function switchLetterCase(str: string): string {
  let res: string = "";
  let reg1 = /[a-z]/;
  let reg2 = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (reg1.test(str[i])) {
      res = res + str[i].toUpperCase();
    } else if (reg2.test(str[i])) {
      res = res + str[i].toLowerCase();
    } else {
      res = res + str[i];
    }
  }
  return res;
}

/**
 * 利用ASCII码，进行匹配
 * @param str
 */
function switchLetterCase2(s: string): string {
  let res = "";

  const length = s.length;
  if (length === 0) return res;

  for (let i = 0; i < length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      res += c.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      res += c.toUpperCase();
    } else {
      res += c;
    }
  }

  return res;
}

// 功能测试
const str = "12wweertGJKJHVJ";
console.log(switchLetterCase2(str));

export {};
