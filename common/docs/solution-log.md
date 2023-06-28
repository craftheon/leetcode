Programs log
---

two-pointers
双指针要领：
- 大部分双指针题目要排序，是否排序取决于双指针区间内元素的**加和**是否会影响指针的移动。例如Leetcode[11]，指针移动的关键条件是比较左右指针元素值的大小，这种情况就无需排序。


23.6.15
https://leetcode.com/tag/two-pointers/

## 11. Container With Most Water

**最初思路：**
``` javascript
var maxArea = function(height) {
    var left = 0, right = left + 1
    var result = 0
    while(height.length > right) {
        if (height[left] < height[right]) {
            left = right
            right = right + 1
        } else {
            r = height[right] * (right - left)
            result = Math.max(r, result)
            right ++
        }
    }
    return result
};
```
思路：
相向双指针，左边始终大于右边，计算右边到左边的长度x高度，保留面积最大的。

结果：
只能AC example，如果input是[1,2,1]，则不能AC。

**看完题解后思路：**
``` javascript
var maxArea = function(height) {
    var l = 0, r = height.length - 1
    var res = 0
    while (l < r) {
        var h = 0, w = r - l
        if (height[l] < height[r]) {
            h = height[l]
            l ++
        } else {
            h = height[r]
            r --
        }
        t = h * w
        res = Math.max(t, res)
    }
    return res
};
```
思路：
对向双指针，一次循环中：左边小 左指针右移，右边小 右指针左移，同时高度为最短的，宽度为右指针 - 左指针。 所有结果中保留最大的

结果：
AC, O(log n)


2023.6.16

## 15. 3Sum
题目重点：三数之和等于0，且不能重复

**最初思路**
无

**看完题解后思路**
```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for(let i = 0; i < nums.length; i ++) {
        let l = i + 1, r = nums.length - 1
        if (nums[i] > 0) {
            return res;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r --
            } else if (sum < 0) {
                l ++
            } else {
                res.push([nums[i], nums[l], nums[r]])
                while (r > l && nums[r] == nums[r - 1]) r--;
                while (r > l && nums[l] == nums[l + 1]) l++;
                r --;
                l ++;
            }
        }
    }
    return res
};
```

思路：
- 核心用对向双指针解题，要做排序，因为指针移动的条件依赖元素的加和：加和大于0 右指针左移动，小于0左指针右移。
- 几个关键点：
    - 因为已经排过序了，所以如果nums[i] 已经大于0了，后面就不可能有符合条件的结果了，直接返回；
    - 去重：题目中要求不能有重复的三元组，所以三个元素都要进行去重判断：
        - nums[i] 去重条件：`i > 0 && nums[i] == nums[i - 1]`，如果当前元素和之前一个一样，肯定重复了，因为之前一个已经被遍历过了。不能判断`nums[i] == nums[i + 1]` 要判断前一个，不能判断后一个，因为**不能有重复的三元组，但三元组内的元素是可以重复的**
        - l和r的去重，应该在符合条件的时候进行；
        - nums[r] 去重条件：`r > l && nums[r] == nums[r - 1]` ，如果后一个和前一个一样，三元组肯定有重复，所以要跳过。
        - nums[l] 去重条件：`r > l && nums[l] == nums[l + 1]`，和上面的同理

结果：
AC O(n^2)


## 16. 3Sum Closest
题目要点：找到和target最相近的三数之和，意味着所有的三数之和中，保留和target差值的绝对值最小的即为答案。

**最初思路**
``` javascript
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = 0, abs = 0
    for(let i = 0; i < nums.length; i ++) {
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            const a = Math.abs(sum - target)
            if (a < abs || abs == 0) {
                abs = a
                res = sum
            }
            if (sum > target) {
                r --
            } else {
                l ++
            }
        }
    }
    return res
};
```
思路：
- 和三数之和类似，但更简单些，无需去重。
- 依次计算差值绝对值，保留绝对值最小的结果。
- 指针移动条件：三数之和大于target 左指针移动、小于target右指针移动

结果：
passed 78/99

**看完题解后思路**
```javascript
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = 0, abs = Number.MAX_VALUE
    for(let i = 0; i < nums.length; i ++) {
        let l = i + 1, r = nums.length - 1
        if (i > 0 && nums[i] == nums[i - 1]) {
		    continue
		}
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            const a = Math.abs(sum - target)
            if (a < abs) {
                abs = a
                res = sum
            }
            if (sum > target) {
                r --
            } else {
                l ++
            }
        }
    }
    return res
};
```

思路：
初次的解法中，整体思路是对的，但有两个点需要注意：
- 绝对值的初始值：开始我设置的abs初始值是0，这会导致第一次判断`Math.abs(sum - target) < abs` 时被跳过，因为这里成立的条件永远是当前sun-target的绝对值要小于那个最小的，但最小的绝对值也不会小于0。
- 去重：这道题中去不去重其实都可以，去重可以增加一些计算速度，但不去重也不会影响计算结果，最多是相同的结果被重复计算了一遍。（leetcode中计算不去重反而还要快一点）

结果：
AC O(n^2)

## 19. Remove Nth Node From End of List
题目要点：从链表的末尾移除第n个元素

**最初思路**
```javascript
var reverse = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
} 

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0)
    dummy.next = reverse(head)
    var p = dummy, i = 0
    while(p) {
        i ++
        if (i === n) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return reverse(dummy.next)
};
```
思路：
- 链表从末尾直接移除比较麻烦，可以先把链表反转，再直接移除从头部开始的第n个。

结果：
AC

这种方式的问题：
- 需要反转链表

**思路2**
``` javascript
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0)
    dummy.next = head
    var p = dummy, len = 0
    while(p) { len ++; p = p.next }
    var t = len - n, c = dummy, i = 0
    while(c) {
        i ++
        if (i == t) {
            c.next = c.next.next
        } else {
            c = c.next
        }
    }
    return dummy.next
};
```
思路：
- 先遍历链表获得长度，在用长度减n得到需要移除的位置，时间复杂度O(n)

但如上两种思路都没用到双指针的解法，

**看完题解的思路**
- 双指针，快慢指针解法，设置两个相向的指针，第一个指针距第二个n的距离，第二个指针到达终点后，第一个指针的位置则就是需要移除的那个元素
- 但从实现的角度，这种方式代码量更多一些

## 27. Remove Element
**最初的思路**
```javascript
var removeElement = function(nums, val) {
    return nums.filter(n => n !== val).length
};
```


**看完题解后的思路**
```javascript
var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k ++
        }
    }
    return k
};
```

### 61. Rotate List ❌
题目大意：第k个节点后的所有节点移动到链表的最头部
**最初思路**
- 快慢指针，左指针和右指针中间间隔k个节点，右指针移动到链表末尾结束，左右指针中间的节点移到链表的最头部。

结果：不知道怎么实现。

**题解思路**
``` javascript
var rotateRight = function(head, k) {
  if (!head) return head;
	let len = 0,
		ptr = head;

	while (ptr) {
		len++;
		ptr = ptr.next;
	}
    k = k % len;
	let prev = head;
	ptr = head;

    while (k--) {
		ptr = ptr.next;
	}

	while (ptr.next) {
		prev = prev.next;
		ptr = ptr.next;
	}

    ptr.next = head;
	head = prev.next;
	prev.next = null;
	return head;
};
```

思路：

### 165.Compare Version Numbers
题目大意：比较两个版本号大小，version1大于version2输出1，小于输出-1，其他情况输出0

**最初的思路**
``` javascript
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.'), 
        v2 = version2.split('.'), 
        len = Math.max(v1.length, v2.length)
    for(let i = 0; i < len; i ++) {
        if ((+v1[i] || 0) > (+v2[i] || 0)) return 1
        if ((+v1[i] || 0) < (+v2[i] || 0)) return -1
    }
    return 0;
};
```
思路：
这道题比较简单，但有几个点需要注意：
- 字符串split后是字符串数组，要比较里面元素大小时要进行类型转换。
- 版本号长度不一定相等，例如1.1.1 和 1，这样也是可以比较的，但需要补0


### 42.Trapping Rain Water ❌
题目大意：经典的接雨水，求容器能接的雨水最大值
题解：https://zhuanlan.zhihu.com/p/79811305 回头看

**没做出来，抄题解的代码：**
```javascript
var trap = function(height) {
    let res = 0, left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0;

    while(left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > maxLeft) {
                maxLeft = height[left]
            } else {
                res += maxLeft - height[left]
            }
            left += 1
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right]
            } else {
                res += maxRight - height[right]
            }
            right -= 1
        }
    }

    return res
};
```
思路：
本题目还是使用双指针，和11题有点相似，使用对向的双指针遍历整个数组，但和11题的区别以及具体的理解需要再整理


### 80. Remove Duplicates from Sorted Array II ❌
题目大意：给一个有序数组，数组中相同的元素最多不能超过2个，超出的删除，返回按此逻辑处理后的数组长度

**没做出来，抄题解的代码：**
```javascript
var removeDuplicates = function(nums) {
    let slow = 0

    for(let fast = 0; fast < nums.length; fast ++) {
        if (fast < 2 || nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow ++
        }
    }

    return slow
};
```

思路：
- 看到有序数组，就考虑快慢指针
- 此题目可以定义一个快慢指针，其中快指针从头到尾遍历数组，当慢指针指向倒数第二个数与快指针指向的数不相等时，移动慢指针，同时赋值慢指针
- 原地删除数组元素的题目可以使用快慢指针

### 86. Partition List
题目大意：给一个链表和一个k，要求比k小的元素排在左边，大于等于k的排在右边，但排列时尽量保证原有的顺序。
**思路**
``` javascript
var partition = function(head, x) {
    let s = new ListNode(null), l = new ListNode(null), ps = s, pl = l
    while(head) {
        if (head.val >= x) {
            pl.next = new ListNode(head.val)
            pl = pl.next
        } else {
            ps.next = new ListNode(head.val)
            ps = ps.next
        }
        head = head.next
    }
    ps.next = l.next
    return s.next
};
```
思路：
- 开始没思路，看到题解的提示后顺利AC
- 因为题目要求链表中保留原有顺序，并且不要求在原有链表上改动，所以可以直接构建两个链表
- 链表1保存比k小的元素，链表2保存比k大的元素
- 最后返回链表1+链表2

---

---