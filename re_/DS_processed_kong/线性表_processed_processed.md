# 线性表  

<ul>

## 【考纲内容】  

<ul>

（一）____的基本概念（二）____的实现顺序存储：链式存储（三）____的应用  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性表</li>
    <li>

线性表</li>
    <li>

线性表</li>
  </ul>
</details>
</div>

## 【知识框架】  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/39e0fc4306d05da66599c40a8696450de4db5bc03ce672a27229fac3a4d869e4.jpg)`  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <!-- 无挖空内容，仅保留图片 -->
  </ul>
</details>
</div>

## 【复习提示】  

<ul>

____是算法题命题的重点。这类算法题的实现比较容易且代码量较少，但是要求具有最优的性能（____复杂度），才能获得满分。因此，应牢固掌握____的各种基本操作（基于两种存储结构），在平时的学习中多注重培养动手能力。另需提醒的是，算法最重要的是____！考场上的时间紧迫，在试卷上不一定要求代码具有实际的可执行性，因此应尽力表达出算法的____和步骤，而不必过于拘泥所有细节。此外，采用时间/空间复杂度较差的方法也能拿到大部分分数，因此在时间紧迫的情况下，建议直接采用____法。注意，算法题只能用 $\mathrm{C}/\mathrm{C}++$ 语言实现。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性表</li>
    <li>

时间/空间</li>
    <li>

线性表</li>
    <li>

思想</li>
    <li>

思想</li>
    <li>

暴力</li>
  </ul>
</details>
</div>

</ul>

# 线性表的定义和基本操作  

<ul>

## 线性表的定义  

<ul>

### 基本概念

<ul>

- ____是具有相同数据类型的 $n$ （ $n\geqslant0$ ）个数据元素的有限序列
  - $n$ 为____
  - 当 $n\,=\,0$ 时____是一个空表
- 若用 $L$ 命名____，则其一般表示为：
  $L=(a_{1},a_{2},\cdots,a_{i},a_{i+1},\cdots,a_{n})$
  - $a_{1}$ 是唯一的"第一个"数据元素，又称____元素
  - $a_{n}$ 是唯一的"最后一个"数据元素，又称____元素
  - 除第一个元素外，每个元素有且仅有一个____
  - 除最后一个元素外，每个元素有且仅有一个____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性表</li>
    <li>

表长</li>
    <li>

线性表</li>
    <li>

线性表</li>
    <li>

表头</li>
    <li>

表尾</li>
    <li>

直接前驱</li>
    <li>

直接后继</li>
  </ul>
</details>
</div>

### 线性表特点

<ul>

- 元素个数____
- 元素具有逻辑上的____性，有先后次序
- 元素都是____元素，每个元素都是单个元素
- 元素的数据类型都____，占相同大小存储空间
- 元素具有____性，只讨论逻辑关系

> attention: 

____是一种逻辑结构，表示元素之间一对一的相邻关系。顺序表和链表是指存储结构，两者属于不同层面的概念，因此不要将其混淆。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有限</li>
    <li>

顺序</li>
    <li>

数据</li>
    <li>

相同</li>
    <li>

抽象</li>
    <li>

线性表</li>
  </ul>
</details>
</div>

</ul>

## 线性表的基本操作  

<ul>

### 核心操作列表

<ul>

- InitList（&L）：____表
  - 构造一个空的____
- Length（L）：求____
  - 返回____的长度，即L中数据元素的个数
- LocateElem $(\mathbb{L},\mathsf{e})$：____查找操作
  - 在表L中查找具有给定____值的元素
- GetElem $(\mathbb{L},\dot{\Sigma})$：____查找操作
  - 获取表L中第____个位置的元素的值
- ListInsert（&L，i，e）：____操作
  - 在表L中的第i个位置上插入____元素e
- ListDelete（&L，i，&e）：____操作
  - 删除表L中第i个位置的元素，并用e返回____元素的值
- PrintList（L）：____操作
  - 按前后顺序输出____的所有元素值
- Empty（L）：____操作
  - 若L为____表，则返回true，否则返回false
- DestroyList（&L）：____操作
  - ____线性表，并释放线性表L所占用的内存空间

> attention: 

- 基本操作的实现取决于采用哪种____结构，存储结构不同，算法的实现也不同。 
- 符号"&"表示 $\mathrm{C++}$ 语言中的____调用，在C语言中采用指针也可达到同样的效果。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

初始化</li>
    <li>

线性表</li>
    <li>

表长</li>
    <li>

线性表L</li>
    <li>

按值</li>
    <li>

关键字</li>
    <li>

按位</li>
    <li>

1</li>
    <li>

插入</li>
    <li>

指定</li>
    <li>

删除</li>
    <li>

删除</li>
    <li>

输出</li>
    <li>

线性表L</li>
    <li>

判空</li>
    <li>

空</li>
    <li>

销毁</li>
    <li>

销毁</li>
    <li>

存储</li>
    <li>

引用</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 线性表的顺序表示  

<ul>

## 顺序表的定义  

<ul>

### 基本概念

<ul>

- （算法题）____的应用（2010、2011、2018、2020）
- ____的顺序存储又称____
  - 用____存储单元依次存储数据元素
  - 逻辑相邻元素在____位置上也相邻
  - 第1个元素存储在____位置
  - 第i个元素后紧接____元素
  - i为元素ai的____
- 特点：表中元素的逻辑顺序与____顺序相同

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序表</li>
    <li>

线性表</li>
    <li>

顺序表</li>
    <li>

连续</li>
    <li>

物理</li>
    <li>

起始</li>
    <li>

第i+1个</li>
    <li>

位序</li>
    <li>

物理</li>
  </ul>
</details>
</div>

### 存储结构

<ul>

- 假设起始位置为____
- ____为每个元素存储空间大小
- 存储结构如图所示：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/be429ac9c6545cfdfb42d2e69bd07d28e3670d31c3050a3298f9ba85cd4fd2f5.jpg)`  

#### 随机存取特性

<ul>

- 每个元素位置与起始位置相差____常数
- 可以____存取任意元素
- 通常用____描述顺序存储结构

> attention: 
____中元素的位序是从1开始的，而数组中元素的下标是从0开始的。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

固定</li>
    <li>

随机</li>
    <li>

数组</li>
    <li>

线性表</li>
  </ul>
</details>
</div>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

Loc(A)</li>
    <li>

sizeof(ElemType)</li>
  </ul>
</details>
</div>

### 存储方式

<ul>

#### 静态分配

<ul>

- 特点：
  - 数组大小____
  - 空间事先____
  - 可能产生____
- 代码实现：

```
#define MaxSize 50 //定义线性表的最大长度
typedef struct {
    ElemType data[MaxSize]; //____的元素
    int length; //____的当前长度
} SqList; //____的类型定义
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

固定</li>
    <li>

固定</li>
    <li>

溢出</li>
    <li>

顺序表</li>
    <li>

顺序表</li>
    <li>

顺序表</li>
  </ul>
</details>
</div>

#### 动态分配

<ul>

- 特点：
  - ____分配空间
  - 空间不足时可____
  - 无需一次性划分____空间
- 代码实现：

```
#define InitSize 100 //表长度的初始定义
typedef struct {
    ElemType *data; //指示____数组的指针
    int MaxSize, length; //数组的最大容量和当前个数
} SeqList; //____数组顺序表的类型定义
```

- 初始动态分配语句：
  - C语言：`L.data = (ElemType*)malloc(sizeof(ElemType)*InitSize);`
  - C++：`L.data = new ElemType[InitSize];`

> attention: 
____并不是链式存储，它同样属于____存储结构，物理结构没有变化，依然是____存取方式，只是分配的空间大小可以在运行时动态决定。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

运行时</li>
    <li>

扩充</li>
    <li>

所有</li>
    <li>

动态分配</li>
    <li>

动态分配</li>
    <li>

动态分配</li>
    <li>

顺序</li>
    <li>

随机</li>
  </ul>
</details>
</div>

</ul>

### 优缺点分析

<ul>

#### 优点

<ul>

- 可进行____访问，____时间找到指定元素
- ____密度高，每个结点只存储数据元素

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

随机</li>
    <li>

O(1)</li>
    <li>

存储</li>
  </ul>
</details>
</div>

#### 缺点

<ul>

- ____需要移动大量元素
  - 插入平均移动____个元素
  - 删除平均移动____个元素
- 需要____存储空间，不够灵活

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入删除</li>
    <li>

n/2</li>
    <li>

(n-1)/2</li>
    <li>

连续</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 顺序表上基本操作的实现  

<ul>

>pro：____上操作的时间复杂度分析（2023）这里仅讨论____的初始化、插入、删除和按值查找，其他基本操作的算法都很简单。  

> attention: 在各种操作的实现中（包括严蔚敏老师撰写的教材），往往可以忽略____条件判断、变量定义、内存分配不足等细节，即不要求代码具有可执行性，而重点在于算法的____。  

### 基本操作实现

<ul>

#### 顺序表的初始化

<ul>

##### 静态分配初始化

<ul>

- 声明时已分配____空间
- 只需设置____为0

```
/SqListL; //声明一个顺序表
void InitList(SqList &L) { 
    L.length = ____ //____初始长度为0
}
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数组</li>
    <li>

长度</li>
    <li>

0</li>
    <li>

顺序表</li>
  </ul>
</details>
</div>

##### 动态分配初始化

<ul>

- 分配____大小的数组空间
- 设置____为0
- ____指示当前存储空间大小

```
void InitList(SeqList &L) {
    L.data = (ElemType*)malloc(____*sizeof(ElemType));
    L.length = ____ //____初始长度为0 
    L.MaxSize = ____; //初始存储容量
}
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

预定义</li>
    <li>

长度</li>
    <li>

MaxSize</li>
    <li>

MaxSize</li>
    <li>

0</li>
    <li>

顺序表</li>
    <li>

InitSize</li>
  </ul>
</details>
</div>

</ul>

#### 插入操作

<ul>

##### 基本实现

<ul>

- 插入位置：第____个位置（1<=i<=L.length+1）
- 实现步骤：
  - 判断____的合法性
  - 判断____空间
  - ____元素
  - 插入____元素
  - ____加1

```
bool ListInsert(SqList &L, int i, ElemType e) {
    if (i < 1 || i > L.length + 1) //判断____的范围是否有效 
        return false;
    if (L.length >= MaxSize) //当前____空间已满，不能插入
        return false;
    for (int j = L.length; j >= i; j--) //将第____个元素及之后的元素后移 
        L.data[j] = L.data[____];
    L.data[____] = e //在位置i处放入e
    L.length++; //____长度加1 
    return true;
}
```

> attention: 区别____的位序和数组下标。为何判断插入位置是否合法时if语句中用length+1，而移动元素的for语句中只用length？  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

i</li>
    <li>

i</li>
    <li>

存储</li>
    <li>

移动</li>
    <li>

新</li>
    <li>

长度</li>
    <li>

i</li>
    <li>

存储</li>
    <li>

i</li>
    <li>

j-1</li>
    <li>

i-1</li>
    <li>

线性表</li>
    <li>

顺序表</li>
  </ul>
</details>
</div>

##### 时间复杂度分析

<ul>

###### 最好情况

<ul>

- ____插入（i=n+1）
- 不需____元素
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表尾</li>
    <li>

移动</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

###### 最坏情况

<ul>

- ____插入（i=1）
- 移动____次元素
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表头</li>
    <li>

n</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

###### 平均情况

<ul>

- 计算方式：$\sum_{i=1}^{n+1}p_{i}(n-i+1)=\sum_{i=1}^{n+1}{\cfrac{1}{n+1}}(n-i+1)={\cfrac{1}{n+1}}\sum_{i=1}^{n+1}(n-i+1)={\cfrac{1}{n+1}}{\cfrac{\boxed{\phantom{n(n+1)}}\hspace{1cm}}{2}}={\cfrac{n}{2}}$
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n(n+1)$</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 删除操作

<ul>

##### 基本实现

<ul>

- 删除位置：第____个位置（1<=i<=L.length）
- 实现步骤：
  - 判断____的合法性
  - 保存____元素
  - ____元素
  - ____减1

```
bool ListDelete(SqList &L, int i, ElemType &e) {
    if (i < 1 || i > L.length) //判断____的范围是否有效
        return false;
    e = L.data[____]; //将被删除的元素赋值给e
    for (int j = i; j < L.length; j++) //将第____个位置后的元素前移
        L.data[____] = L.data[j];
    L.length--; //____长度减1 
    return true;
}
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

i</li>
    <li>

i</li>
    <li>

被删</li>
    <li>

移动</li>
    <li>

长度</li>
    <li>

i</li>
    <li>

i-1</li>
    <li>

i</li>
    <li>

j-1</li>
    <li>

线性表</li>
  </ul>
</details>
</div>

##### 时间复杂度分析

<ul>

###### 最好情况

<ul>

- 删除____元素（i=n）
- 无需____元素
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表尾</li>
    <li>

移动</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

###### 最坏情况

<ul>

- 删除____元素（i=1）
- 移动____个元素
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表头</li>
    <li>

n-1</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

###### 平均情况

<ul>

- 计算方式：$\sum_{i=1}^{n}p_{i}(n-i)=\sum_{i=1}^{n}{\frac{1}{n}}(n-i)={\frac{1}{n}}\sum_{i=1}^{n}(n-i)={\frac{1}{n}}{\frac{\boxed{\phantom{n(n-1)}}\hspace{1cm}}{2}}={\frac{n-1}{2}}$
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n(n-1)$</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fcdde81ce9ac45ac3a7dc87f6c157d7c94ff8c769f9bc96a5a2bee3573ec43ca.jpg)`  

#### 按值查找（顺序查找）

<ul>

##### 基本实现

<ul>

- 查找第一个值等于____的元素
- 返回____

```
int LocateElem(SqList L, ElemType e) { 
    int i;
    for (i = 0; i < L.length; i++)
        if (L.data[i] == ____)
            return ____; //下标为i的元素值等于e，返回其位序i+1
    return ____; //退出循环，说明查找失败
}
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

e</li>
    <li>

位序</li>
    <li>

e</li>
    <li>

i+1</li>
    <li>

0</li>
  </ul>
</details>
</div>

##### 时间复杂度分析

<ul>

###### 最好情况

<ul>

- 元素在____
- 比较____次
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表头</li>
    <li>

1</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

###### 最坏情况

<ul>

- 元素在____或不存在
- 比较____次
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表尾</li>
    <li>

n</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

###### 平均情况

<ul>

- 计算方式：$\sum_{i=1}^{n}p_{i}\cdot i=\sum_{i=1}^{n}{\frac{1}{n}}\cdot i={\frac{1}{n}}{\frac{\boxed{\phantom{n(n+1)}}\hspace{1cm}}{2}}={\frac{n+1}{2}}$
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n(n+1)$</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

</ul>

</ul>

##### 按序号查找

<ul>

- 直接通过____访问
- ____时间复杂度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数组下标</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序表</li>
    <li>

顺序表</li>
    <li>

边界</li>
    <li>

思想</li>
  </ul>
</details>
</div>

</ul>

# 线性表的链式表示

<ul>

- ____的存储位置可以用简单直观的公式表示
  - 可以____存取表中任一元素
  - 但____操作需要移动大量元素
- ____存储线性表的特点
  - 不需要使用____的存储单元
  - 不要求逻辑上相邻的元素在____位置上也相邻
  - 通过____建立元素之间的逻辑关系
  - ____操作只需修改指针
  - 失去____可随机存取的优点

## 单链表的定义

<ul>

>pro：____的应用（2009、2012、2013、2015、2016、2019）

### 基本结构

<ul>

- ____的链式存储又称____
- 通过____存储单元存储数据元素
- 结点结构包含:
  - ____域：存放数据元素
  - ____域：存放后继指针

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e6fa3673aad165e0ee89896f2a7bb07ea19710710e0020c80d5ad6ca1178ca94.jpg)`

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性表</li>
    <li>

单链表</li>
    <li>

任意</li>
    <li>

data</li>
    <li>

next</li>
  </ul>
</details>
</div>

### 结点类型定义

<ul>

```
typedef struct LNode { //定义____结点类型
    ElemType data; //____域
    struct LNode *next; //____域 
} LNode, *LinkList;
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

单链表</li>
    <li>

数据</li>
    <li>

指针</li>
  </ul>
</details>
</div>

### 特点分析

<ul>

- 优点：
  - 解决____需要大量连续存储单元的缺点
- 缺点：
  - 附加____域浪费存储空间
  - 非____存取的存储结构
  - 查找需要从____遍历

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序表</li>
    <li>

指针</li>
    <li>

随机</li>
    <li>

表头</li>
  </ul>
</details>
</div>

### 头指针与头结点

<ul>

- ____L标识单链表
  - 指出链表的____地址
  - ____表示空表
- ____特征：
  - 位于第一个数据结点之前
  - 数据域可以为空或记录____等信息

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/398b067cdafa61f8538dbc41329cc712b80fb0acc641764020ead99ba201cc41.jpg)`

#### 头结点和头指针的关系

<ul>

- ____特点：
  - 始终指向链表第一个结点
- ____特点：
  - 是带头结点链表中的第一个结点
  - 通常不存储信息

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头指针</li>
    <li>

头结点</li>
  </ul>
</details>
</div>

#### 头结点的优点

<ul>

- 操作____性：
  - 第一个位置的操作与其他位置一致
  - 无需特殊处理
- ____处理统一：
  - 头指针始终非空
  - 统一了空表和非空表的处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

统一</li>
    <li>

空表</li>
  </ul>
</details>
</div>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头指针</li>
    <li>

起始</li>
    <li>

NULL</li>
    <li>

头结点</li>
    <li>

表长</li>
  </ul>
</details>
</div>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

单链表</li>
  </ul>
</details>
</div>

## 单链表上基本操作的实现  

<ul>

____单链表的操作代码书写较为方便，如无特殊说明，本节均默认链表____。  

### 单链表的初始化  

<ul>

- ____和____单链表初始化操作不同：
  - ____：
    - 需要创建____
    - 让____指向头结点
    - 头结点的next域初始化为____

![](https://github.com/bluejedis/picx-images-hosting/raw/master/test/image.5fkltncs93.webp)`

  - ____：
    - 只需将____初始化为NULL
    - 代码示例：

```
bool InitList(LinkList &L) { //____单链表的初始化 
    $\scriptstyle\mathbb{L}=$ ____; 
    return true;
}
```

> attention: 

设p为指向链表结点的结构体指针，则 $\star_{\mathtt{P}}$ 表示____本身，因此可用 $\mathtt{p}^{->}$ data或 $({}^{\star}\mathtt{p})$ .data访问 ${}^{\star}\mathtt{p}$ 这个结点的数据域，二者完全等价。成员运算符（，）左边是一个普通的结构体变量，而指向运算符（ $->$ ）左边是一个____。通过 $({}^{\star}\mathtt{p})$ .next可以得到指向下一个结点的指针，因此 $({}^{\star}{\mathsf{p}})$ .next）.data就是下一个结点中存放的数据，或者直接用p->next->data。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

带头结点</li>
    <li>

不带头结点</li>
    <li>

带头结点</li>
    <li>

头结点</li>
    <li>

头指针</li>
    <li>

NULL</li>
    <li>

不带头结点</li>
    <li>

头指针L</li>
    <li>

不带头结点的</li>
    <li>

NULL</li>
    <li>

结点</li>
    <li>

结构体指针</li>
  </ul>
</details>
</div>

### 求表长操作

<ul>

- 计算____中数据结点个数：
  - 从____开始依次访问
  - 设置____变量，每访问一个结点加1
  - 直到访问到____为止
  - 代码示例：

```
int Length(LinkList L) { 
    int len = ____ //____变量，初始为0 
    LNode $\star_{\mathbb{P}}=\mathbb{____}$ 
    while (p->next != ____) {
        p = p->next;  
        len++; //每访问一个结点，计数加1
    } 
    return len;
}
```

- 特点：
  - 时间复杂度为____
  - ____和____单链表在求表长操作上略有不同

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

单链表</li>
    <li>

第一个结点</li>
    <li>

计数</li>
    <li>

空结点</li>
    <li>

0</li>
    <li>

计数</li>
    <li>

L</li>
    <li>

NULL</li>
    <li>

O(n)</li>
    <li>

不带头结点</li>
    <li>

带头结点</li>
  </ul>
</details>
</div>

### 按序号查找结点

<ul>

- 查找过程：
  - 从____开始
  - 沿着____域从前往后依次搜索
  - 直到找到第____个结点
- 返回结果：
  - 找到则返回该结点的____
  - i小于单链表的表长则返回____
- 代码示例：

```
LNode *GetElem(LinkList L, int i) {
    LNode $\scriptstyle{^{\star}\!\mathrm{p}}=\mathrm{____}$ //指针p指向当前扫描到的结点 
    int $\scriptstyle{\mathrm{j}}=____$ //记录当前结点的位序，头结点是第0个结点
    while (p != ____ && j < i) { //循环找到第i个结点
        p = p->next; 
        j++; 
    }
    return ____; //返回第i个结点的指针或NULL
}
```

- 时间复杂度为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

第一个结点</li>
    <li>

next</li>
    <li>

i</li>
    <li>

指针</li>
    <li>

NULL</li>
    <li>

L</li>
    <li>

0</li>
    <li>

NULL</li>
    <li>

p</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

### 按值查找表结点

<ul>

- 查找过程：
  - 从____开始
  - 从前往后依次比较表中各结点的____域
  - 若某结点的____域等于给定值e，则返回该结点的指针
  - 若整个单链表中没有这样的结点，则返回____
- 代码示例：

```
LNode *LocateElem(LinkList L, ElemType e) {
    LNode $\star_{\mathbb{P}}=\mathbb{____}$->next; 
    while (${\mathfrak{p}} != ____ && p->data $!\!=\!\!____$) //从第一个结点开始查找数据域为e的结点
        p = p->next; 
    return ____; //找到后返回该结点指针，否则返回NULL
}
```

- 时间复杂度为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

第一个结点</li>
    <li>

data</li>
    <li>

data</li>
    <li>

NULL</li>
    <li>

L</li>
    <li>

NULL</li>
    <li>

e</li>
    <li>

p</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

### 插入结点操作

<ul>

#### 基本插入操作

<ul>

- 插入过程：
  - 将值为____的新结点插入到单链表的第____个位置
  - 检查____的合法性
  - 找到待插入位置的____(第i-1个结点)
  - 在其后____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6c0375c05b578e5cce59c4e076019d3589f8e5286d2baae292fc776a326f2b50.jpg)`  
图2.5____的插入操作  

> pro：____插入操作后地址或指针的变化（2016）  

- 具体步骤：
  - 查找第____个结点(*p)
  - 令新结点*s的____域指向*p的后继
  - 令结点*p的____域指向新插入的结点*s
- 代码示例：

```
bool ListInsert(LinkList &L, int i, ElemType e) {
    LNode $\star_{\mathrm{p}=____}$ //指针指向当前扫描到的结点  
    int $\scriptstyle{\dot{\mathbf{j}}}=____$ //记录当前结点的位序，头结点是第0个结点
    while (p != NULL && j < ____) { //循环找到第i-1个结点
        p = p->next; 
        j++; 
    } 
    if ($\mathtt{p}^{==}$ ____) //i值不合法
        return false; 
    LNode ${\bf\Pi}^{+}\,\mathbf{s}=$ (LNode*)malloc(sizeof(____)); 
    s->data $\mathbf{\Sigma}=____$ //图2.5中操作步骤 $^\mathrm{\textregistered}$ 
    s->next = p->____; 
    p->next = ____ //图2.5中操作步骤 - 
    return true;
}
```

- 注意事项：
  - 操作步骤-和⑵的顺序不能____
  - 时间复杂度为____，主要用于查找第i-1个元素
  - 在指定结点后插入新结点的时间复杂度为____
  - 不带头结点时需特殊处理插入位置____的情况
  - 带头结点时插入位置____不需特殊处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

x</li>
    <li>

i</li>
    <li>

插入位置</li>
    <li>

前驱</li>
    <li>

插入</li>
    <li>

单链表</li>
    <li>

单链表</li>
    <li>

i-1</li>
    <li>

指针</li>
    <li>

指针</li>
    <li>

L</li>
    <li>

0</li>
    <li>

i-1</li>
    <li>

NULL</li>
    <li>

LNode</li>
    <li>

e</li>
    <li>

next</li>
    <li>

s</li>
    <li>

颠倒</li>
    <li>

O(n)</li>
    <li>

O(1)</li>
    <li>

i=1</li>
    <li>

i=1</li>
  </ul>
</details>
</div>

#### 扩展：对某一结点进行前插操作

<ul>

- 前插操作定义：
  - 在某结点前面插入____
  - 可转化为____操作
- 实现方式：
  ##### 方式一：通过查找前驱实现

<ul>

  - 从____开始顺序查找前驱结点
  - 对前驱结点执行____操作
  - 时间复杂度为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头结点</li>
    <li>

后插</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

  ##### 方式二：通过数据交换实现

<ul>

  - 将新结点插入到____后面
  - 交换两个结点的____域
  - 时间复杂度为____
  - 代码示例：

```
s->next = p->next; //修改____域，不能颠倒
p->next = $=_{S}$ //交换数据域部分
temp = p->data; 
p->data $=s$->data; 
s->data $=____$;
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

目标结点</li>
    <li>

数据</li>
    <li>

O(1)</li>
    <li>

指针</li>
    <li>

temp</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#### 删除结点操作  

<ul>

- 基本概念：
  - 删除单链表的第____个结点
  - 需先检查____合法性
  - 查找第____个结点(被删结点的前驱)
  - 删除第____个结点

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3cff0f15ae62a7658d4029b54b7c524e489abc7ce64fc2f8b4114f13cb1b6922.jpg)`  
图2.6____结点的删除  

- 操作实现：
  - 假设结点*p为被删结点的____
  - 修改*p的____域：
    - 将*p的____域next指向*q的下一结点
    - 释放*q的____空间

- 代码实现：

```
bool ListDelete(LinkList &L, int i, ElemType &e) {
    LNode *p = ____ //指针p指向当前扫描到的结点 
    int j = ____ //记录当前结点的位序，头结点是第0个结点  
    while (p != NULL && j < ____) { //循环找到第i-1个结点
        p = p->next; 
        j++; 
    }
    if (p == NULL || p->next == NULL) //____值不合法
        return false; 
    LNode *g = p->____; //令g指向被删除结点
    e = g->____; //用e返回元素的值 
    p->next = q->____; //将*g结点从链中"断开" 
    free(____); //释放结点的存储空间
    return true;
}
```

- 算法特点：
  - 时间复杂度为____，主要耗费在查找操作
  - 不带头结点时需特殊处理____删除
  - 带头结点时删除____与其他结点操作相同

##### 扩展：删除结点*p  

<ul>

- 传统方法：
  - 从____开始找前驱
  - 执行____操作

- 优化方法：
  - 通过删除____实现
  - 将后继值赋予____
  - 删除____
  - 时间复杂度____

- 代码实现：

```
g = p->next; //令g指向*p的____结点
p->data = p->next->____; //用后继结点的数据域覆盖
p->next = q->____; //将*g结点从链中"断开" 
free(____); //释放后继结点的存储空间
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

后继</li>
    <li>

data</li>
    <li>

next</li>
    <li>

q</li>
    <li>

头结点</li>
    <li>

删除</li>
    <li>

后继</li>
    <li>

自身</li>
    <li>

后继</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

i</li>
    <li>

删除位置</li>
    <li>

i-1</li>
    <li>

i</li>
    <li>

单链表</li>
    <li>

前驱</li>
    <li>

指针</li>
    <li>

指针</li>
    <li>

存储</li>
    <li>

L</li>
    <li>

0</li>
    <li>

i-1</li>
    <li>

i</li>
    <li>

next</li>
    <li>

data</li>
    <li>

next</li>
    <li>

g</li>
    <li>

O(n)</li>
    <li>

首结点</li>
    <li>

首结点</li>
  </ul>
</details>
</div>

</ul>

#### 采用头插法建立单链表  

<ul>

- 基本思路：
  - 从____开始
  - 生成新结点存放____
  - 将新结点插入____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0a0f50bf826f84ac70af0ce65dd698cb2777cd8ad0fbbf5ade4fd81ade304e3b.jpg)`  
图2.7____建立单链表  

- 代码实现：

```
LinkList ListHeadInsert(LinkList &L) {
    LNode *s;
    int x;
    L = (LNode*)malloc(sizeof(____)); 
    L->next = ____;
    scanf("%d", &x); 
    while (x != 9999) {
        s = (LNode*)malloc(sizeof(____));
        s->data = ____;
        s->next = L->____; 
        L->next = ____;
        scanf("%d", &x);
    }
    return ____;
}
```

- 特点：
  - 读入数据顺序与链表元素顺序____
  - 可用于实现链表____
  - 时间复杂度____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空表</li>
    <li>

数据</li>
    <li>

表头</li>
    <li>

头插法</li>
    <li>

LNode</li>
    <li>

NULL</li>
    <li>

LNode</li>
    <li>

x</li>
    <li>

next</li>
    <li>

s</li>
    <li>

L</li>
    <li>

相反</li>
    <li>

逆置</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

#### 采用尾插法建立单链表  

<ul>

- 基本思路：
  - 新结点插入____
  - 需要____指向当前表尾

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/caee33cb8b607abfcd1c170d3d509e082c3a669d7ba7c8ce5ac880058ba46053.jpg)`  
图2.8____建立单链表  

- 代码实现：

```
LinkList ListTailInsert(LinkList &L) {
    int x;
    L = (LNode*)malloc(sizeof(____));
    LNode *s, *r = ____;
    scanf("%d", &x);
    while (x != 9999) {
        s = (LNode*)malloc(sizeof(____));
        s->data = ____;
        r->next = ____;
        r = ____;
        scanf("%d", &x);
    }
    r->next = ____;
    return ____;
}
```

- 特点：
  - 结点次序与输入数据顺序____
  - 时间复杂度与____相同

> attention: 

____是整个链表的基础，读者一定要熟练掌握____的基本操作算法。在设计算法时，建议先通过画图的方法理清算法的思路，然后进行算法的编写。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

表尾</li>
    <li>

尾指针r</li>
    <li>

尾插法</li>
    <li>

LNode</li>
    <li>

L</li>
    <li>

LNode</li>
    <li>

x</li>
    <li>

s</li>
    <li>

s</li>
    <li>

NULL</li>
    <li>

L</li>
    <li>

一致</li>
    <li>

头插法</li>
    <li>

单链表</li>
    <li>

单链表</li>
  </ul>
</details>
</div>

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

带头结点</li>
    <li>

带头结点</li>
  </ul>
</details>
</div>

## 双链表

<ul>

### 基本概念与结构

<ul>

#### 引入原因

<ul>

- 单链表的局限性：
  - 只能从____遍历
  - 访问前驱需从____遍历，时间复杂度____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前往后</li>
    <li>

头</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

#### 结构特点

<ul>

- 结点包含两个指针：
  - ____：指向直接前驱
  - ____：指向直接后继
- 特殊指针域：
  - 表头结点____域为NULL
  - 尾结点____域为NULL

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1635ec70559d4b6472f60c5d1cc749f0d1f5b25b6eea5c3edfbc5341580c00e.jpg)`  
图2.9____示意图  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

prior</li>
    <li>

next</li>
    <li>

prior</li>
    <li>

next</li>
    <li>

双链表</li>
  </ul>
</details>
</div>

#### 结点类型定义

<ul>

```
typedef struct DNode {
    ElemType data;
    struct DNode *____, *____;
} DNode, *DLinklist;
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

prior</li>
    <li>

next</li>
  </ul>
</details>
</div>

#### 操作效率

<ul>

- ____操作：与单链表相同
- ____操作：
  - 时间复杂度为____
  - 需同时修改____指针

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

查找</li>
    <li>

插入删除</li>
    <li>

O(1)</li>
    <li>

prior</li>
  </ul>
</details>
</div>

</ul>

### 基本操作

<ul>

#### 插入操作

<ul>

##### 实现过程

<ul>

- 在结点*p后插入结点*____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/83f654980bafc9b4794791269186265e596e1c3d8f28a962817e021ff1cd4ecb.jpg)`  
图2.10____插入结点过程  

> pro：____中插入操作的实现（2023）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

s</li>
    <li>

双链表</li>
    <li>

双链表</li>
  </ul>
</details>
</div>

##### 代码实现

<ul>

```
s->next = p->____;
p->next->____ = s;
s->____ = p;
p->next = ____;
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

next</li>
    <li>

prior</li>
    <li>

prior</li>
    <li>

s</li>
  </ul>
</details>
</div>

##### 注意事项

<ul>

- 语句顺序不唯一但有____
- 第____步必须在第____步之前执行

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

限制</li>
    <li>

1</li>
    <li>

4</li>
  </ul>
</details>
</div>

</ul>

#### 删除操作

<ul>

##### 实现过程

<ul>

- 删除结点*p的后继结点*____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/07a13dc6f25520117417e37802a59a25f2e5a4c2ffabd489689bf7af1c7b9b20.jpg)`  
图2.11____删除结点过程  

> pro：____中删除操作的实现（2016）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

q</li>
    <li>

双链表</li>
    <li>

循环双链表</li>
  </ul>
</details>
</div>

##### 代码实现

<ul>

```
p->next = q->____;
q->next->____ = p;
free(____);
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

next</li>
    <li>

prior</li>
    <li>

q</li>
  </ul>
</details>
</div>

</ul>

#### 建立方法

<ul>

- 可采用____和____
- 需注意指针变化与____的区别

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头插法</li>
    <li>

尾插法</li>
    <li>

单链表</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## 循环链表  

<ul>

### 循环单链表  

<ul>

#### 定义与特点

<ul>

- 与____的区别：
  - 表中最后一个结点的指针不是____
  - 改为指向____，形成一个环

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1036b7d9f88e230ec8d510ec10fb16a52bbd3942f1269b375f972803c8fba3d.jpg)`  
图2.12____  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

单链表</li>
    <li>

NULL</li>
    <li>

头结点</li>
    <li>

循环单链表</li>
  </ul>
</details>
</div>

#### 判空条件

<ul>

- 不是____是否为空
- 而是它是否等于____

> pro：____中删除首元素的操作（2021）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

头结点的指针</li>
    <li>

头指针L</li>
    <li>

循环单链表</li>
  </ul>
</details>
</div>

#### 操作特点

<ul>

- ____算法
  - 与单链表几乎相同
  - ____操作有所不同以保持循环性质
  - 任何位置的插入和删除操作都____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入、删除</li>
    <li>

表尾</li>
    <li>

等价</li>
  </ul>
</details>
</div>

#### 遍历特性

<ul>

- 可从____开始遍历整个链表
- ____设置
  - 不设____而仅设____效率更高
  - 原因：
    - 设头指针：表尾插入需____时间
    - 设尾指针r：表头或表尾插入仅需____时间
    - r->next即为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

任意结点</li>
    <li>

尾指针</li>
    <li>

头指针</li>
    <li>

尾指针</li>
    <li>

O(n)</li>
    <li>

O(1)</li>
    <li>

头指针</li>
  </ul>
</details>
</div>

</ul>

### 循环双链表  

<ul>

#### 结构特点

<ul>

- 基于____的扩展
- ____特征：
  - ____指针指向表尾结点
  - 尾结点时，p->next==____
  - 空表时，头结点的____域和____域都等于L

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f089f98aeac64cd154c17a4d590a4678fbf669cfc40bf052cc22d399064c7fb7.jpg)`  
图2.13____  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

循环单链表</li>
    <li>

头结点</li>
    <li>

prior</li>
    <li>

L</li>
    <li>

prior</li>
    <li>

next</li>
    <li>

循环双链表</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## 静态链表  

<ul>

____是用数组来描述线性表的链式存储结构：
- 结点组成：
  - ____域data
  - ____域next
    - 指针是结点在数组中的____（数组下标），又称游标
- 特点：
  - 需预先分配____内存空间（类似顺序表）

____和单链表的对应关系如图2.14所示。  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4344735f5bafa80a6ad93380b6299d5fabec7267fba214b27a248cce1475d949.jpg)`  
图2.14____存储示意图  

静态链表结构类型的描述如下：  

```
#define MaxSize 50 //____的最大长度
typedef struct { //____结构类型的定义 
    ElemType data; //存储____元素
    int next; //下一个元素的____下标
} SLinkList[MaxSize];
```

- 特征：
  - 以____作为结束标志
  - 操作特点：
    - ____操作与动态链表相同
    - 只需修改指针，不需____元素
  - 应用场景：
    - 在不支持____的高级语言中是一种巧妙的设计方法
    - 总体使用不如____方便

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

静态链表</li>
    <li>

数据</li>
    <li>

指针</li>
    <li>

相对地址</li>
    <li>

连续</li>
    <li>

静态链表</li>
    <li>

静态链表</li>
    <li>

静态链表</li>
    <li>

数据</li>
    <li>

数组</li>
    <li>

next=-1</li>
    <li>

插入、删除</li>
    <li>

移动</li>
    <li>

指针</li>
    <li>

单链表</li>
  </ul>
</details>
</div>

## 顺序表和链表的比较  

<ul>

### 存取（读/写）方式  

<ul>

- ____：
  - 支持____存取
  - 支持____存取
- ____：
  - 仅支持____存取
  - 需从表头开始依次访问

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序表</li>
    <li>

顺序</li>
    <li>

随机</li>
    <li>

链表</li>
    <li>

顺序</li>
  </ul>
</details>
</div>

### 逻辑结构与物理结构  

<ul>

- ____存储：
  - 逻辑相邻元素____位置也相邻
- ____存储：
  - 逻辑相邻元素____位置不一定相邻
  - 通过____链接表示逻辑关系

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

物理</li>
    <li>

链式</li>
    <li>

物理</li>
    <li>

指针</li>
  </ul>
</details>
</div>

### 查找、插入和删除操作  

<ul>

- ____操作：
  - 按值查找：
    - 无序时：两者时间复杂度均为____
    - 有序时：顺序表可用____查找，时间复杂度为____
  - 按序号查找：
    - 顺序表：____
    - 链表：____
- ____操作：
  - 顺序表：需移动____个表长的元素
  - 链表：只需修改相关结点____域

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

查找</li>
    <li>

O(n)</li>
    <li>

折半</li>
    <li>

O(log₂n)</li>
    <li>

O(1)</li>
    <li>

O(n)</li>
    <li>

插入、删除</li>
    <li>

半个</li>
    <li>

指针</li>
  </ul>
</details>
</div>

### 空间分配  

<ul>

- ____存储：
  - 静态分配：
    - 空间满后不能____
    - 预分配过大：____闲置
    - 预分配过小：可能____
  - 动态分配：
    - 可扩充但需____元素
    - 可能无法获得____空间
- ____存储：
  - 按需____空间
  - 只要有空间就可____
  - 存储密度较低

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

扩充</li>
    <li>

后部</li>
    <li>

溢出</li>
    <li>

移动</li>
    <li>

连续</li>
    <li>

链式</li>
    <li>

分配</li>
    <li>

分配</li>
  </ul>
</details>
</div>

### 选取存储结构的考虑因素

<ul>

#### 基于存储的考虑  

<ul>

- 难估计____时不宜用顺序表
- 链表无需预估但____密度低

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

长度</li>
    <li>

存储</li>
  </ul>
</details>
</div>

#### 基于运算的考虑  

<ul>

- 频繁按____访问：____优于链表
- 频繁____：链表优于顺序表

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

序号</li>
    <li>

顺序表</li>
    <li>

插入删除</li>
  </ul>
</details>
</div>

#### 基于环境的考虑  

<ul>

- ____：实现简单，所有语言都支持数组
- ____：需要____支持，实现相对复杂

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序表</li>
    <li>

链表</li>
    <li>

指针</li>
  </ul>
</details>
</div>

</ul>

> attention: 

只有熟练掌握____存储和____存储，才能深刻理解它们的优缺点。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

链式</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 归纳总结  

<ul>

本章是____设计题的重点考查章节，因为____的算法题的代码量一般都比较少，又具有一定的算法设计技巧，因此适合笔试考查。考研题中常以三段式的结构命题。  

在给出题目背景和要求的情况下：  
- 给出算法的基本____思想。  
- 采用C或 $\mathrm{C++}$ 语言描述算法，并给出____。  
- 分析所设计算法的____复杂度和____复杂度。  

算法具体的设计思想干变方化，难以从一而定。因此读者一定要勤加练习，反复咀嚼本章的练习题，采用多种方法进行设计并比较它们的____，逐渐熟悉各类题型的思考角度和最佳思路。  
这里，编者列出几种常用的算法设计技巧，仅供参考：对于链表，经常采用的方法有____法、____法、____法、____法、____法等，对具体问题需要灵活变通；对于顺序表，因为可以直接存取，所以经常结合____和____的几种算法设计思路进行设计，如____排序、____查找等。  

> attention: 

对于算法设计题，若能写出____类型的定义、正确的____思想，则至少会给一半的分数；若能用____写出，则自然更好；比较复杂的地方可以直接用文字表达。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

算法</li>
    <li>

线性表</li>
    <li>

设计</li>
    <li>

注释</li>
    <li>

时间</li>
    <li>

空间</li>
    <li>

复杂度</li>
    <li>

头插</li>
    <li>

尾插</li>
    <li>

逆置</li>
    <li>

归并</li>
    <li>

双指针</li>
    <li>

排序</li>
    <li>

查找</li>
    <li>

归并</li>
    <li>

二分</li>
    <li>

数据结构</li>
    <li>

算法</li>
    <li>

伪代码</li>
  </ul>
</details>
</div>

</ul>

</ul>
