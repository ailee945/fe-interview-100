# 手写 instanceof

## 题目

instanceof 的原理是什么，请用代码来表示

## 原型链

![](https://cdn.jsdelivr.net/gh/ailee945/picGo/img/202203270932294.png)

## instanceof 原理

例如 `a instanceof b` 就是：顺着 `a` 的 `__proto__` 链向上找，能否找到 `b.prototype`

代码参考 instanceof.ts

## 总结

- 原型链
- 循环判断
