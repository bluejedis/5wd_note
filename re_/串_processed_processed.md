以下是按照您的要求对提供的数据结构 Markdown 文档进行挖空处理后的结果，包含 Markdown 和 HTML 折叠块格式。挖空部分包括定义中的关键词、公式定理和算法的关键步骤，答案在下方使用 `<details>` 折叠块以 `<ul>` 和 `<li>` 标签呈现，同时保留原始目录结构和内容完整性。

---

```markdown
#   串 above

<ul>

## 【考纲内容】  

<ul>

字符串**____**  

</ul>

## 【知识框架】  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f061b239de2b34348120ddfb7d51e6b0d959096c06bc59915915483d48c09ca4.jpg)`  

</ul>

## 【复习提示】  

<ul>

~~统考大纲第6章内容，采纳读者建议单独作为一章~~
- only要求掌握：
  - <u>字符串</u>**____**
- 重点掌握：
  - <u>____</u>**匹配**算法的原理 & next数组的推理过程
  - 手工求**____**
    - can先计算出部分匹配值表然后变形，or根据公式来求解

- 了解：
  - ____数组的求解方法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

模式匹配</li>
    <li>

模式匹配</li>
    <li>

KMP</li>
    <li>

next数组</li>
    <li>

nextva1</li>
  </ul>
</details>
</div>

## keywords:

<ul>

____的存储结构 & 相应的操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

字符串</li>
  </ul>
</details>
</div>

</ul>

# \* 定义和实现  

<ul>

>字符串is abbreviated to____;

非数值处理的对象基本都是字符串数据

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

串</li>
  </ul>
</details>
</div>

## 基本概念

<ul>

### 串的定义

<ul>

- 串（string）是由 <u>____</u>or<u>____</u> **____**组成的**____**序列
- 记为：$S={}^{'}\boxed{\phantom{a_{1}a_{2}\cdots a_{n}}}{}^{'}\quad(n\geqslant0)$
  - $S$ 是____，单引号括起来的字符序列是串的____
  - $a_{i}$ can是字母、数字or其他字符
  - 串中字符的个数 $n$ 称为串的____
    - $n\!=\!0$ 时的串称为____（用 $\emptyset$ 表示）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

零个</li>
    <li>

多个</li>
    <li>

字符</li>
    <li>

有限</li>
    <li>

$a_{1}a_{2}\cdots a_{n}$</li>
    <li>

串名</li>
    <li>

值</li>
    <li>

长度</li>
    <li>

空串</li>
  </ul>
</details>
</div>

### 主串与子串关系

<ul>

- 主串
  - include子串的串称为**____**
  - string中<u>____</u>多个连续的字符组成的子序列称为该串的**____**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

主串</li>
    <li>

任意</li>
    <li>

子串</li>
  </ul>
</details>
</div>

#### 位置概念

<ul>

- 字符位置
  - 某个字符在串中的**____**称为该字符在串中的<u>____</u>
- 子串位置
  - 子串在主string中的位置以子串的第1个字符在主串中的____来表示

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

序号</li>
    <li>

位置</li>
    <li>

位置</li>
  </ul>
</details>
</div>

#### 串相等条件

<ul>

- 两个<u>____</u>**____**需满足：
  - 两个string的<u>____</u>
  - 每个<u>____</u>的字符both相等

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

串</li>
    <li>

相等</li>
    <li>

长度相等</li>
    <li>

对应位置</li>
  </ul>
</details>
</div>

### 示例说明

<ul>

eg，有串 $\mathtt{A}\!=$ 'China Beijing'， $\mathtt{B}\!=$ 'Beijing'， $\mathtt{C}{=}$ 'China'，则它们的长度分别为____、____和____。B和C是A的子串，B在A中的位置是____，C在A中的位置是____。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

13</li>
    <li>

7</li>
    <li>

5</li>
    <li>

7</li>
    <li>

1</li>
  </ul>
</details>
</div>

### 特殊说明

<ul>

notice：由一个or多个空格（空格是特殊字符）组成的串称为**____**（注意，空格串不是空串），其长度为串中空格字符的个数。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空格串</li>
  </ul>
</details>
</div>

### 串&线性表

<ul>

- 逻辑结构：
  - 串的Logical structure和____极为相似
  - 区别only在于串的数据对象限定为____

- 基本操作(much different):
- 线性表的Basic operation主要：以<u>____</u>作为操作对象
  - 如查找、插入or删除某个元素等
- 串的Basic operation usually以<u>____</u>作为操作对象
  - 如查找、插入or删除一个子串等 

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性表</li>
    <li>

字符集</li>
    <li>

单个元素</li>
    <li>

子串</li>
  </ul>
</details>
</div>

</ul>

## 存储结构  

<ul>

### 定长顺序存储表示  

<ul>

- 特点：
  - 类似于线性表的____结构
  - 用一组地址连续的存储单元存储____字符序列
  - 为每个串变量分配固定长度存储区(____)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序存储</li>
    <li>

串值</li>
    <li>

定长数组</li>
  </ul>
</details>
</div>

#### 代码实现

<ul>

#define ____ 255/预定义最大串长为255
typedef struct{ 
    char ch[____];//每个分量存储一个字符
    int ____;/串的实际长度
)____;  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

MAXLEN</li>
    <li>

MAXLEN</li>
    <li>

length</li>
    <li>

sString</li>
  </ul>
</details>
</div>

#### 长度限制

<ul>

- 串长度要求：
  - 实际长度必须 ≤ ____
  - 超过预定义长度的串值会被____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

MAXLEN</li>
    <li>

截断</li>
  </ul>
</details>
</div>

#### 串长表示方法

<ul>

- 方法一：额外变量存储
  - 用变量____存放串的长度
- 方法二：结束标记
  - 在串值后加"____"标记
  - 串长为隐含值

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

len</li>
    <li>

\0</li>
  </ul>
</details>
</div>

#### 局限性

<ul>

- 操作限制：
  - 插入、联接等操作可能超过____
  - 采用"____"法处理
- 解决方案：
  - 不限定串长最大长度
  - 采用____方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

MAXLEN</li>
    <li>

截断</li>
    <li>

动态分配</li>
  </ul>
</details>
</div>

</ul>

### 堆分配存储表示  

<ul>

- 基本特征：
  - 使用____存储单元
  - 存储空间____分配
  - 在程序执行过程中分配

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f872b2bd2b132f3ab95a92fe5e40c026db9b3e63ed13be51fbf161f5c6c88850.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连续</li>
    <li>

动态</li>
  </ul>
</details>
</div>

#### 实现方式

<ul>

- C语言实现：
  - 使用"____"自由存储区
  - 通过____()和____()函数管理
- 内存管理：
  - ____()分配所需存储空间
  - 返回指向起始地址的指针
  - 分配失败返回____
  - ____()释放已分配空间

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

堆</li>
    <li>

malloc</li>
    <li>

free</li>
    <li>

malloc</li>
    <li>

NULL</li>
    <li>

free</li>
  </ul>
</details>
</div>

</ul>

### 块链存储表示  

<ul>

- 基本概念：
  - 类似线性表的____结构
  - 采用____方式存储串值

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链式存储</li>
    <li>

链表</li>
  </ul>
</details>
</div>

#### 结点特点

<ul>

- 存储方式：
  - 可存放____字符
  - 可存放____字符
- 结构组成：
  - 结点称为____
  - 整个链表称为____结构

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/56cc1c53a1bb3c19c28d76a784be4cbd4669057a969be98f64ffd7f9effa73a8.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

单个</li>
    <li>

多个</li>
    <li>

块</li>
    <li>

块链</li>
  </ul>
</details>
</div>

#### 实现示例

<ul>

- 结点大小为4的链表：
  - 最后结点不满时用"____"补充
- 结点大小为1的链表

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

#</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 基本操作  

<ul>

### 操作列表

<ul>

- StrAssign(&T，chars)：
  - ____操作
  - T ← chars
- StrCopy(&T，S)：
  - ____操作
  - 由串S复制得到串T
- StrEmpty(S)：
  - ____操作
  - 空串返回TRUE，否则FALSE
- StrCompare(S，T)：
  - ____操作
  - S>T返回值>0
  - S=T返回值=0
  - S<T返回值<0
- StrLength(S)：
  - ____
  - 返回串S的元素个数
- SubString(&Sub，S，pos，len)：
  - ____
  - Sub为S从pos开始长len的子串
- Concat(&T，S1，S2)：
  - ____
  - T返回S1和S2联接的新串
- Index(S，T)：
  - ____操作
  - 返回T在S中首次出现位置
  - 不存在返回0
- ClearString(&S)：
  - ____操作
  - 将S清为空串
- DestroyString(&S)：
  - ____
  - 将串S销毁

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

赋值</li>
    <li>

复制</li>
    <li>

判空</li>
    <li>

比较</li>
    <li>

求串长</li>
    <li>

求子串</li>
    <li>

串联接</li>
    <li>

定位</li>
    <li>

清空</li>
    <li>

销毁串</li>
  </ul>
</details>
</div>

### 最小操作子集

<ul>

- 包含五种基本操作：
  - 串____(StrAssign)
  - 串____(StrCompare)
  - 求____(StrLength)
  - 串____(Concat)
  - 求____(SubString)
- 特点：
  - 不可用其他操作实现
  - 其他操作可基于此实现
  - 除清除和销毁外均可实现

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

赋值</li>
    <li>

比较</li>
    <li>

串长</li>
    <li>

联接</li>
    <li>

子串</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 串的模式匹配  

<ul>

## 简单的模式匹配算法

<ul>

### 基本概念

<ul>

- 子串的定位操作通常称为串的____
- 目的是求子串（____）在主串中的位置
- 采用____顺序存储结构
- 使用暴力匹配算法，不依赖其他串操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

模式匹配</li>
    <li>

模式串</li>
    <li>

定长</li>
  </ul>
</details>
</div>

### 算法实现

<ul>

int Index(SString S,SString T)(
    int i=____, j=____
    while(i<=S.length && j<=T.length)(
        if(S.ch[i]==T.ch[j]）{
            ++i ++j  //继续比较____字符
        else{
            i=____
            j=____      //指针后退重新开始匹配
        }
    if(j>T.length)return ____;
    else return ____;

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

1</li>
    <li>

1</li>
    <li>

后继</li>
    <li>

i-j+2</li>
    <li>

1</li>
    <li>

i-T.length</li>
    <li>

0</li>
  </ul>
</details>
</div>

### 算法思想

<ul>

- 比较过程：
  - 从主串S的____字符开始
  - 与模式串T的____字符比较
  - 若相等：
    - 继续逐个比较____字符
  - 若不相等：
    - 从主串的____字符重新开始
    - 与模式串比较

- 匹配结果：
  - 成功：
    - 当模式串T中每个字符都与主串S中____字符序列相等
    - 返回模式串首字符在主串中的____
  - 失败：
    - 返回值为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54e4ba107cb0eeb37086c69a0ca3069646b67af9d59c2e4b38b72e9d968ba3a6.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

第一个</li>
    <li>

第一个</li>
    <li>

后续</li>
    <li>

下一个</li>
    <li>

连续</li>
    <li>

序号</li>
    <li>

零</li>
  </ul>
</details>
</div>

#### 时间复杂度分析

<ul>

- 最坏时间复杂度：____
  - n：主串长度
  - m：模式串长度
- 示例分析：
  - 模式串：0000001
  - 主串：0000000000000000000000000000000000000000000001
  - 匹配过程：
    - 前6个字符均为0的比较
    - 指针i需回溯____次
    - 总比较次数：____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(nm)</li>
    <li>

39</li>
    <li>

40×7=280次</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 串的模式匹配算法KMP算法  

<ul>

### KMP算法的基本思想

<ul>

- 从暴力匹配算法的低效分析出发:
  - 每趟匹配失败都需模式串____一位重新比较
  - 已匹配相等的字符序列____比较造成低效
- 改进方向:
  - 分析模式串本身____
  - 利用已匹配____信息优化滑动
  - 避免主串指针____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

后移</li>
    <li>

重复</li>
    <li>

结构</li>
    <li>

前缀</li>
    <li>

回溯</li>
  </ul>
</details>
</div>

</ul>

### 关键概念定义

<ul>

#### 字符串的前缀、后缀和部分匹配值

<ul>

- 基本概念:
  - 前缀: 除最后一个字符外的所有____子串
  - 后缀: 除第一个字符外的所有____子串
  - 部分匹配值: 字符串前缀和后缀的____前后缀长度

- 示例分析('ababa'):
  - 'a': 前缀后缀为____, PMV=____
  - 'ab': 前缀____, 后缀____, PMV=____ 
  - 'aba': 前缀____∩后缀____={a}, PMV=____
  - 'abab': 前缀____∩后缀____={ab}, PMV=____
  - 'ababa': 前缀____∩后缀____={a,aba}, PMV=____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头部</li>
    <li>

尾部</li>
    <li>

最长相等</li>
    <li>

空集</li>
    <li>

0</li>
    <li>

{a}</li>
    <li>

{b}</li>
    <li>

0</li>
    <li>

{a,ab}</li>
    <li>

{a,ba}</li>
    <li>

1</li>
    <li>

{a,ab,aba}</li>
    <li>

{b,ab,bab}</li>
    <li>

2</li>
    <li>

{a,ab,aba,abab}</li>
    <li>

{a,ba,aba,baba}</li>
    <li>

3</li>
  </ul>
</details>
</div>

#### 部分匹配值的应用

<ul>

- 实例分析:
  - 主串: ababcabcacbab
  - 子串: abcac
  - 子串部分匹配值: ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/377aad20736ed34d8161d83be96787936c200fb1acb2b79e434aac502c5bebb4.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

00010</li>
  </ul>
</details>
</div>

#### 匹配过程分析

<ul>

- 第一趟匹配:
  - 发现不匹配位置
  - 计算移动位数 = 已匹配字符数(____) - 对应PMV(____) = ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2d937d17d0e58b6a37d99b239f990479ce6b593e3a4c44886709745a86ba0658.jpg)`  

- 第二趟匹配:
  - 发现不匹配位置
  - 计算移动位数 = 已匹配字符数(____) - 对应PMV(____) = ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9c878b55e5555f3562affbaf3c7438a4ab69ae4a9606ed12fc034b57fdf254a7.jpg)`  

- 第三趟匹配:
  - ____匹配成功

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
    <li>

0</li>
    <li>

2</li>
    <li>

4</li>
    <li>

1</li>
    <li>

3</li>
    <li>

完全</li>
  </ul>
</details>
</div>

#### KMP算法效率分析

<ul>

- 主要优势:
  - 主串指针无需____
  - 时间复杂度____
- 移动规则:
  - PMV为0: 子串直接后移到主串____位置
  - PMV不为0: 子串滑动对齐____前后缀

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

回退</li>
    <li>

O(n+m)</li>
    <li>

当前</li>
    <li>

相等</li>
  </ul>
</details>
</div>

</ul>

</ul>

### KMP算法的原理是什么

<ul>

#### 部分匹配值的意义

<ul>

- "移动位数 = 已匹配的字符数-对应的部分匹配值"的含义:
  - 当字符不匹配时,已匹配部分的前缀和后缀有____公共元素
  - 可直接跳过无需比较的部分,提高____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/aad83da896298bac9915ea9c4489fa67e12556a127bd80d1503ca19c153b2b4f.jpg)`

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最长</li>
    <li>

效率</li>
  </ul>
</details>
</div>

#### next数组的引入

<ul>

- 对算法的改进:
  - Move = (____)-PM[____]
  - PM表右移一位得到____数组
  - next数组的特点:
    - 首位用____填充
    - 最后一位____
    - 可整体+1简化计算

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ad045d891fd388f999f29e3a5d57bd91ca2d1f0c91de842b0ae7fd127508ce30.jpg)`
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7ac119d782f92328295099076ea25ef796b9b4ad845f5b5ae4fafe2968fd1116.jpg)`

> pro：KMP匹配过程中指针变化的分析（2015）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

j-1</li>
    <li>

j-1</li>
    <li>

next</li>
    <li>

-1</li>
    <li>

舍去</li>
  </ul>
</details>
</div>

#### next数组的推导

<ul>

- 基本概念:
  - j = ____为子串指针变化公式
  - ____表示失配时跳转的位置

- 推导过程:
  - 主串和模式串的____条件
  - 失配时的____规则
  - ____值的确定方法

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2dbfa2d11030630a5c13a0b2b3423e37db24b5080dda10d4eee8e48614d8ca4d.jpg)`

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

next[j]</li>
    <li>

next[i]</li>
    <li>

匹配</li>
    <li>

滑动</li>
    <li>

k</li>
  </ul>
</details>
</div>

##### next函数的具体计算

<ul>

- 两种情况分析:
  - ____ = ____时的处理
  - ____ ≠ ____时的处理
- 实例说明:
  - 6字符模式串的____值计算过程

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fd6fc648f51ead06104f3b6607b7412dd6e3e3d3020eac6f6751cbd3eaaf9d00.jpg)`

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

pk</li>
    <li>

pj</li>
    <li>

pk</li>
    <li>

pj</li>
    <li>

next</li>
  </ul>
</details>
</div>

##### 代码实现

<ul>

- next值计算程序:

void get next(SString T,int next[]){
    int i=____, j=____;
    next[____]=____;
    while(i<T.length){
        if(j==____ || T.ch[i]==T.ch[j]){
            ++i;
            ++j;
            next[i]=____;
        }
        else j=____;
    }
}

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

1</li>
    <li>

0</li>
    <li>

1</li>
    <li>

0</li>
    <li>

0</li>
    <li>

j</li>
    <li>

next[j]</li>
  </ul>
</details>
</div>

</ul>

#### KMP匹配算法

<ul>

- 算法特点:
  - 形式类似简单模式匹配
  - 失配时____不变,j回退
- 代码实现:

int Index_KMP(SString S,SString T,int next[]){
    int i=____, j=____;
    while(i<=S.length && j<=T.length){
        if(j==____ || S.ch[i]==T.ch[j]){
            ++i;
            ++j;
        }
        else j=____;
    }
    if(j>T.length) return ____;
    else return ____;
}

> KMP匹配过程中比较次数的分析（2019）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

i</li>
    <li>

1</li>
    <li>

1</li>
    <li>

0</li>
    <li>

next[j]</li>
    <li>

i-T.length</li>
    <li>

0</li>
  </ul>
</details>
</div>

#### 算法效率分析

<ul>

- 时间复杂度比较:
  - 普通模式匹配: ____
  - KMP算法: ____
- 实际应用:
  - 普通算法仍被广泛使用
  - KMP在部分匹配较多时____明显
  - KMP主要优点是主串不____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(mn)</li>
    <li>

O(m+n)</li>
    <li>

优势</li>
    <li>

回溯</li>
  </ul>
</details>
</div>

</ul>

</ul>

### KMP算法的进一步优化  

<ul>

#### 优化背景

<ul>

- ____数组在某些情况下存在缺陷需要进一步优化
- 以模式串"aaaab"和主串"aaa baa aab"为例：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/89c15cad9b3226daad524eb2c8f2a36edfa137b898562d900f05e8bab1751ffd.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

next</li>
  </ul>
</details>
</div>

#### 问题分析

<ul>

- 当i=____、j=____时出现失配情况
  - S4与p4(____)失配
  - 使用原next数组需要进行____无意义比较
    - S4与p3
    - S4与p2
    - S4与p1

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

4</li>
    <li>

4</li>
    <li>

b≠a</li>
    <li>

3次</li>
  </ul>
</details>
</div>

#### 问题根源

<ul>

- 问题在于出现____=____的情况
  - 当pj≠sj时，下次匹配必然是____跟sj比较
  - 若pj=____，则等于用相同字符重复比较
  - 这种比较毫无意义且必然____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

pj</li>
    <li>

pnext[j]</li>
    <li>

pnext[j]</li>
    <li>

pnext[j]</li>
    <li>

失配</li>
  </ul>
</details>
</div>

#### 优化方案

<ul>

- 当出现pj=____时：
  - 需要____处理
  - 将____修正为____
  - 直至两者不相等为止
  - 更新后的数组命名为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

pnext[j]</li>
    <li>

递归</li>
    <li>

next[j]</li>
    <li>

next[next[j]]</li>
    <li>

nextval</li>
  </ul>
</details>
</div>

##### 优化算法实现

<ul>

void get nextval(SString T,int nextval[]){
    int i=____, j=____;
    nextval[____]=____;
    while(i<T.length){
        if(j==____ || T.ch[i]==T.ch[j]){
            ++i;
            ++j;
            if(T.ch[i]!=T.ch[j])
                nextval[i]=____;
            else
                nextval[i]=____;
        }
        else
            j=____;
    }
}

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

1</li>
    <li>

0</li>
    <li>

1</li>
    <li>

0</li>
    <li>

0</li>
    <li>

j</li>
    <li>

nextval[j]</li>
    <li>

nextval[j]</li>
  </ul>
</details>
</div>

</ul>

#### 学习建议

<ul>

- KMP算法对初学者来说理解难度较大
- 建议：
  - 多次阅读本章内容
  - 参考其他教材相关内容
  - 通过多方面学习来巩固这个知识点

</ul>

</ul>

</ul>

# 归纳总结  

<ul>

学习KMP算法时，应从分析____的端入手，思考如何去优化它。

实际上，已匹配相等的序列就是模式串的某个____，因此每次回溯就相当于模式串与模式串的某个前缀比较，这种频繁的____比较是效率低的原因。

这时，可从分析模式串本身的____入手，以便得知当匹配到某个字符不等时，应该向后滑动到什么位置，即已匹配相等的前缀和模式串若首尾重合，则对齐它们，对齐部分显然无须再比较，下一步则是直接从主串的____位置继续进行比较。  

~统考不会考KMP算法题~

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

暴力法</li>
    <li>

前缀</li>
    <li>

重复</li>
    <li>

结构</li>
    <li>

当前</li>
  </ul>
</details>
</div>

</ul>
```

---

### 处理说明：
1. **挖空原则**：
   - 定义中的关键词（如“串”、“模式匹配”）、公式中的关键部分（如 $a_{1}a_{2}\cdots a_{n}$）、算法的关键步骤（如 `i=1`、`j=next[j]) 被挖空。
   - 挖空后用 `____` 表示，确保简洁明了，便于记忆和自我测试。
2. **折叠块**：
   - 挖空答案在 `<details>` 中以 `<ul>` 和 `<li>` 标签列出，每项独立一行，支持 Markdown 内公式渲染。
   - 折叠块紧跟相关内容后，保持逻辑清晰。
3. **格式保持**：
   - 保留原始目录结构，未改变或省略任何内容。
   - 图片链接（如 `![](url)）保持不变。
   - `<ul></ul>` 标签按要求添加，确保标题和段落间空行分隔。
4. **细节处理**：
   - 对于代码块，挖空关键变量或步骤，并在折叠块中给出完整答案。
   - 示例中的具体数值（如长度 13、7、5）也被挖空以增强记忆效果。

请检查此输出是否符合您的要求！如果需要调整挖空位置或格式，请随时告知。

