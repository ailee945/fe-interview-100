/**
 * @description 链表实现队列
 * @author 张
 */

interface IlistNode {
  value: number;
  next: IlistNode | null;
}

class MyQueue {
  private head: IlistNode | null = null;
  private tail: IlistNode | null = null;
  private len = 0;
  /**
   * 入队 tail 处
   * @param n number
   */
  add(n: number) {
    // 单向队列
    let newNode: IlistNode = {
      value: n,
      next: null,
    };
    // 处理head
    if (this.head == null) this.head = newNode;
    // 处理tail
    const tailNode = this.tail;
    if (tailNode) tailNode.next = newNode;
    this.tail = newNode;
    // 记录长度
    this.len++;
  }

  /**
   * 出队 head 处
   */
  delete(): number | null {
    const headNode = this.head;
    if (headNode == null) return null;
    if (this.len <= 0) return null;
    // 取值
    const value = headNode.value;
    // 处理 head
    this.head = headNode.next;
    // 记录长度
    this.len--;
    return value;
  }

  get length() {
    // length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)）
    return this.len;
  }
}

// 功能测试
const q = new MyQueue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.length);
console.log(q.delete());
console.log(q.delete());
console.log(q.delete());
console.log(q.delete());
console.log(q.length);

// 性能测试
console.time("queue");
const q1 = new MyQueue();
for (let i = 0; i < 100000; i++) q1.add(i);
for (let i = 0; i < 100000; i++) q1.delete();
console.timeEnd("queue");

console.time("array");
const q2 = [];
for (let i = 0; i < 100000; i++) q2.push(i);
for (let i = 0; i < 100000; i++) q2.shift();
console.timeEnd("array");
