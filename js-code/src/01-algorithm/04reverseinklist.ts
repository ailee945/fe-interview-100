export interface ILinkListNode {
    value: number;
    next?: ILinkListNode;
}

export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    // 定义三个引用(指针)
    let preNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = listNode;
    // 以nextNode为准进行循环
    while (nextNode) {
        // 防止循环引用
        if (curNode && !preNode) delete curNode.next;
        if (curNode && preNode) curNode.next = preNode;
        // 整体后移
        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }
    curNode!.next = preNode;
    return curNode!;
}

/**
 * 根据数组创建单向列表
 * @param arr number[]
 * @returns
 */

export function createLinkList(arr: number[]): ILinkListNode {
    let length = arr.length;
    if (length === 0) throw new Error("arr is empty");
    let curNode: ILinkListNode = {
        value: arr[length - 1],
    };
    if (length === 1) return curNode;
    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }
    return curNode;
}

// 功能测试
const arr = [1, 2, 3, 4, 5, 6];
const linkList = createLinkList(arr);
console.log(linkList);

console.log(reverseLinkList(linkList));
