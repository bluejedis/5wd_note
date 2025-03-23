以下是按照要求对提供的Markdown文档进行挖空处理后的结果，包含Markdown和HTML折叠块格式。挖空的关键词、公式和关键步骤已用下划线（____）表示，答案置于下方折叠块中。原文档结构保持不变。

---

# concept

## 基本定义

- search
  - 在数据集合中寻找____条件的数据元素的过程
  - 结果分为两种：
    - 查找成功：找到满足条件的数据元素
    - search____

- search表
  - 定义：用于search的____，由同一类型的数据元素组成
  - 常见操作：
    - 查询符合条件的数据元素
    - ____、删除数据元素

- 静态search表
  - 定义：只涉及search操作的表
  - 对应的动态search表：需要动态____或删除的表
  - 适用方法：
    - 静态表：____search、____search、____search
    - 动态表：____search、____search

- 关键字
  - 定义：数据元素中____该元素的数据项值
  - 特点：基于关键字的search结果应该是____

- ____search长度
  - 定义：所有search过程中关键字比较次数的____值
  - 数学表达式：$\mathrm{ASL}=____$
  - 参数说明：
    - n：search____
    - Pi：search第i个元素的____(通常Pi=1/n)
    - Ci：找到第i个元素所需____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

满足</li>
    <li>

失败</li>
    <li>

数据集合</li>
    <li>

插入</li>
    <li>

插入</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

散列</li>
    <li>

二叉排序树</li>
    <li>

散列</li>
    <li>

唯一标识</li>
    <li>

唯一</li>
    <li>

平均</li>
    <li>

平均</li>
    <li>

$\sum_{i=1}^{n}P_{i}C_{i}$</li>
    <li>

表长度</li>
    <li>

概率</li>
    <li>

比较次数</li>
  </ul>
</details>
</div>

# ____search & ____~ & ____~

## ____~

### concept

- 又称____search
- 适用范围：
  - ____表：通过数组下标递增扫描
  - ____表：通过指针next扫描

### ____线性表的顺序search

#### 基本思想

- from____表一____开始逐个检查关键字
  - find____条件元素 → return位置
- till表另一端not find → return____

#### 算法

```c
typedef struct{
    ElemType *elem;
    int TableLen;
}SSTable;

int search_Seq(SSTable ST,ElemType key){
    ST.elem[0]=____;
    for(int i=ST.TableLen;ST.elem[i]!=____;--i);
    return i;
}
```

#### ____分析

- search成功时____长度：
  - $\operatorname{ASL}_{\mathfrak{h}(n;i)}=____$
  - 当Pi=1/n时：$\operatorname{PSL}_{n|k\rangle n|}{=}{____}$
- ~失败时：ASL=____

#### ____点

- 缺点：n较大时____
- 优点：
  - 存储方式____
  - 无____要求
  - 适用于链表

### ____线性表的顺序search

#### Feature

- 提前know表is<u>关键字____</u>
- False:
  - search失败时can____返回
  - 可降低search失败的____长度

> pro：____线性表的顺序search的应用（2013）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b9a556e5c788039f2fe0a08be26af8476e380c1fcd30a762adcbe9951bfa13c7.jpg)`

#### ____分析

- search____：same as____线性表
- search____：
  - ____长度：$\operatorname{ASL}_{\mathcal{K}:n\times l}=____$
  - 当n=6时：ASL=____

#### attention

- 思想与____search不同
  - ____式存储结构
  - 折半~only____存储结构

## ____~

折半search又称____search，它仅适用于____的顺序表。

> pro：分析对比给定search算法与折半search的____（2016）

### 基本思想

- compare____值key with table____位置的元素
  - if =
    - search____
    - return该元素的____
  - elif ≠
    - →所需search的元素in
      - 中间元素以外的
      - ____半or____半
<br>
  - eg
    - search表____排列时
      - 若key＞中间元素
        - then所search的元素only might在____部分
        - 在缩小的____内go on同样的search
      - repeat the steps
        - till____
        - or ensure表中no所需要search的元素
          - 则search____
          - return False

### 算法

```c
int Binarysearch(SSTable L,ElemType key){
    int low=0,high=L.TableLen-1,mid;
    while(low<=high){
        mid=(low+high)/2; //取____位置
        if(L.elem[mid]==key) return mid; // search成功则返回____
        else if(L.elem[mid]>key) high=mid-1; //从____部分继续search
        else low=mid+1; //从____部分继续search
    }
    return -1; // search____，返回-1
}
```

#### instruction

- 折半search算法select中间node时
  - 向____取整
  - ~____~
- both can
  - but每次search的____方式必须相同

> pro：折半search的search路径的____（2015）

#### eg

- 已知11个元素的____表{7,10,13,16,19,29,32,33,37,41,43}
- search值为____的过程：
  - 第一次search
    - 比较中间元素____与key
    - 11<29，在[low,mid-1]范围内继续search
  - 第二次search
    - 比较中间元素____与key
    - 11<13，在[low,mid-1]范围内继续search
  - 第三次search
    - 比较中间元素____与key
    - 11>7，在[mid+1,high]范围内继续search
  - 第四次search
    - 子表只含一个元素____
    - 10≠11，search____

> pro：分析给定二叉树树形能否构成折半search____树（2017）

### ____树

- Feature：
  - node:
    - 每个圆形~express一个____
    - 最下面的叶~为____，表示search失败的区间
    - 每个~值均＞其左子~值
      - 且＜其右子~值
    - n个元素对应n个圆形非叶~和n+1个____叶~
  - is____二叉树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3c13d8b6e09e2161cf91b26befcb36e69ca849ba58fb230483c6eaa214215f5.jpg)`

> pro：折半search的最多____的分析（2010、2023）

### ____分析

- 比较次数最多≤树的____
- ____search长度：
  - $\mathrm{ASL}={\frac{1}{n}}\sum_{i=1}^{n}l_{i}=____\approx____$
  - 时间复杂度为____
- 示例分析(图7.2)：
  - search成功ASL=____
  - search失败ASL=____

### ____

- only____存储结构
- request元素按关键字____排列

## ____~

- also called as____顺序search
- 顺序search和折半search各自的____
  - 既____结构
  - 又____search

### 基本思想

- 将search表分为若干____
  - 块内
    - can____
  - 块间
    - 元素____
      - 第一个块中
        - max关键字＜第二个块中all recorded关键字
      - 第二个块中
        - max关键字＜第二个块中all recorded关键字
      - ...
      - 以此类推
- 建立____表
  - 包含各块____关键字和各块____元素地址
  - ____表按关键字____排列

### ____

- step1：在**索引表**中确定待查记录所在的____
  - 可以____~or____~索引表
- step2：在____内____search

### eg

- 关键码集合：{88,24,72,61,21,6,32,11,8,31,22,83,78,54}
- 按关键码值____分为4个块和索引表

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/76ded7a7f7a5d8bfa95e7e4f016ef281090b1deb3b0fa15e348952f286083f80.jpg)`

### ____分析

- ____search长度
  - ASL = ____
    - L₁：索引search____长度
    - Ls：块内search____长度
- 均匀分块情况下
  - n长度表分为b块，每块s个记录
  - ASL = ____
  - 当s=____时，ASL最小，为____

### ____点

- ____点：
  - 具有____结构
  - ____search
  - 块内search范围小，效率高于____search
- ____点：
  - ____表占用____存储空间
  - 索引search增加系统____

# ____形search

## ____排序树（BST）

Binary sort tree

- 目的：
  - 不是用于排序
  - 是为了提高以下操作的效率：
    - 关键字____
    - ~____
    - ~____
- 优势：
  - ____结构
  - 这种结构特别有利于：
    - ____
    - ____

### 定义

> pro：二叉排序树的应用（2013）

二叉排序树（也称二叉search树）或者是一棵____树，或者是具有下列特性的二叉树：

- 若左子树非空，则左子树上所有node的值均＜____node的值
- 若右子树非空，则右子树上所有node的值均＞____node的值
- 左、右子树也分别是一棵____排序树

> pro：二叉排序树中node值之间的关系（2015、2018）

- 根据二叉排序树的定义:
  - 左子树node值$<____$值$<____$node值
  - 对二叉排序树进行____遍历，可以得到一个递增的____序列
  - 例如，图7.4所示二叉排序树的中序遍历序列为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ce5699f8e763d0cb3b6dbd0974980ca0913f135c1e27622016155408d0e469aa.jpg)`

### 基本操作

#### search

- 过程：
  - 从____node开始，沿某个分支遂层向下比较
  - 若二义排序树非空：
    - 先将给定值与____node的关键字比较
    - 若相等，则search____
    - 若不等：
      - ＜____node的关键字，则在____node的左子树上search
      - 否则在____node的右子树上search

- 非递归search算法：

```c
BSTNode *BSTsearch(BiTree T,ElemType key)( 
    while(T!=NULL&&key $!=$ ____){ 
      if（key<T->data）T=T->____；
      elseT=T->____; 
    }
    returnT;  
```

- eg：
  - 在图7.4中search值为____的node
    - 首先4与____node____比较
      - 4＜6
        - 在____node6的左子树中继续search
      - 4＞2
        - 在node2的右子树中search
        - search____

#### ____

- 特点：
  - 树的结构通常不是一次生成的
  - 在search过程中，当树中不存在关键字值等于____值的node时再进行____

- ____过程：
  - 若原二义排序树为空，则直接____
  - 否则：
    - 关键字k＜____node值则____到左子树
    - 关键字k＞____node值则____到右子树
  - ____的node一定是一个新添加的____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e89e6ea7f4ada4a4c481bc8b1e0ce1cafabd2e67868cbf3cc6ccf9d77c30fc9c.jpg)`

- ____算法：

```c
int BST Insert（BiTree &T，KeyType k）(
  if（T==NULL)(
    T = (BiTree)malloc（sizeof（BSTNode));
    T->data = ____
    T->lchild = T->rchild = ____;
    return1;
  else if(k=T->data)
    return 0;
  else if(k<T->data)
    return BST Insert(____,k);
  else
    return BST Insert（____,k);
```

#### ____

> pro: ____二叉排序树的过程（2020）

- 过程：
  - from____树____
  - <u>依次</u>____元素
  - insert元素to____位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/359f08371aa754ac430fc9f29a85302372b2b4d9718c8e692c96b4d3a2472bf0.jpg)`

- ____算法：

```c
void Creat BST（BiTree &T，KeyType str[],int n){
    T = ____;
    int i = 0
    while(i < n)
      BSTInsert(T,____);
```

#### 删除

- 过程：
  - 不能
    - 把以该node为<u>____</u>的子树上的node都册除
  - 必须重新
    - 链接断开的____表
  - 确保
    - 二叉排序树的____不会丢失

- 情况：
  1. 被删除node是____node：
     - 直接删除
  2. nodez只有一棵子树：
     - 让z的子树成为z____node的子树
  3. nodez有左、右两棵子树：
     - 令z的直接____（或直接前驱）替代z
     - 从二叉排序树中删去这个直接____（或直接前驱）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/337a0835918349dc03e9c616897783190facdb482e06740c2ec450fd4cfe8a1b.jpg)`

> pro：二叉排序树中删除并____某node的分析（2013）

### search____分析

- 影响因素：
  - main:树的____
    - ____二叉树：
      - ____search长度为O(log₂n)
    - 单支树：
      - ~O(n)

- 最坏情况：
  - 输入序列
    - ____
  - 形成倾斜的____树
  - 树的____increase to元素个数n

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54dd73fa59f89a754e5fd4e7dce8cf7124f8fa9db15eeeafeb8140073840c7bf.jpg)`

- ____search长度比较：
  - 图7.8(a)：ASL=____
  - 图7.8(b)：ASL=____

- 与二分search比较：
  - ____时间性能相似
  - 二分search____树唯一
  - 二叉排序树search____

- 维护表的____性：
  - 二叉排序树：
    - 无须移动node
    - 只需修改____
    - ____执行时间O(log₂n)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

分块</li>
    <li>

顺序</li>
    <li>

线性</li>
    <li>

顺序</li>
    <li>

链</li>
    <li>

一般</li>
    <li>

线性</li>
    <li>

端</li>
    <li>

满足</li>
    <li>

失败</li>
    <li>

key</li>
    <li>

key</li>
    <li>

性能</li>
    <li>

平均</li>
    <li>

$\sum_{i=1}^{n}P_{i}(n-i+1)$</li>
    <li>

$\frac{n+1}{2}$</li>
    <li>

n+1</li>
    <li>

优缺</li>
    <li>

效率低</li>
    <li>

灵活</li>
    <li>

序序</li>
    <li>

有序</li>
    <li>

有序</li>
    <li>

提前</li>
    <li>

平均</li>
    <li>

有序</li>
    <li>

性能</li>
    <li>

成功</li>
    <li>

一般</li>
    <li>

失败</li>
    <li>

平均</li>
    <li>

$\sum_{j=1}^{n}q_{j}(l_{j}-1)=\frac{1+2+\cdots+n+n}{n+1}=\frac{n}{2}+\frac{n}{n+1}$</li>
    <li>

3.86</li>
    <li>

折半</li>
    <li>

链</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

二分</li>
    <li>

有序</li>
    <li>

效率</li>
    <li>

给定</li>
    <li>

中间</li>
    <li>

成功</li>
    <li>

存储位置</li>
    <li>

前</li>
    <li>

后</li>
    <li>

升序</li>
    <li>

后半</li>
    <li>

范围</li>
    <li>

Find</li>
    <li>

不成功</li>
    <li>

中间</li>
    <li>

所在位置</li>
    <li>

前半</li>
    <li>

后半</li>
    <li>

失败</li>
    <li>

↑</li>
    <li>

↓</li>
    <li>

取整</li>
    <li>

判断</li>
    <li>

有序</li>
    <li>

11</li>
    <li>

29</li>
    <li>

13</li>
    <li>

7</li>
    <li>

10</li>
    <li>

失败</li>
    <li>

判定</li>
    <li>

记录</li>
    <li>

方形</li>
    <li>

方形</li>
    <li>

平衡</li>
    <li>

比较次数</li>
    <li>

性能</li>
    <li>

高度</li>
    <li>

平均</li>
    <li>

${\frac{1}{n}}(1\times1+2\times2+\cdots+h\times2^{h-1})={\frac{n+1}{n}}\log_{2}(n+1)-1$</li>
    <li>

$\log_{2}(n+1)-1$</li>
    <li>

O(log₂n)</li>
    <li>

(1×1+2×2+3×4+4×4)/11=3</li>
    <li>

(3×4+4×8)/12=11/3</li>
    <li>

conditions</li>
    <li>

顺序</li>
    <li>

有序</li>
    <li>

分块</li>
    <li>

索引</li>
    <li>

优点</li>
    <li>

动态</li>
    <li>

快速</li>
    <li>

子块</li>
    <li>

无序</li>
    <li>

有序</li>
    <li>

索引</li>
    <li>

最大</li>
    <li>

第一个</li>
    <li>

索引</li>
    <li>

有序</li>
    <li>

过程</li>
    <li>

块</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

块</li>
    <li>

顺序</li>
    <li>

24,54,78,88</li>
    <li>

性能</li>
    <li>

平均</li>
    <li>

L₁ + Ls</li>
    <li>

平均</li>
    <li>

平均</li>
    <li>

(b+1)/2 + (s+1)/2 = (s²+2s+n)/2s</li>
    <li>

√n</li>
    <li>

√n+1</li>
    <li>

优缺</li>
    <li>

优</li>
    <li>

动态</li>
    <li>

快速</li>
    <li>

顺序</li>
    <li>

缺</li>
    <li>

索引</li>
    <li>

额外</li>
    <li>

开销</li>
    <li>

树</li>
    <li>

二叉</li>
    <li>

search</li>
    <li>

插入</li>
    <li>

删除</li>
    <li>

非线性</li>
    <li>

插入</li>
    <li>

删除</li>
    <li>

空</li>
    <li>

根</li>
    <li>

根</li>
    <li>

二叉</li>
    <li>

根node</li>
    <li>

右子树</li>
    <li>

中序</li>
    <li>

有序</li>
    <li>

123468</li>
    <li>

根</li>
    <li>

根</li>
    <li>

成功</li>
    <li>

根</li>
    <li>

根</li>
    <li>

T->data</li>
    <li>

lchild</li>
    <li>

rchild</li>
    <li>

4</li>
    <li>

根</li>
    <li>

6</li>
    <li>

根</li>
    <li>

成功</li>
    <li>

插入</li>
    <li>

给定</li>
    <li>

插入</li>
    <li>

插入</li>
    <li>

根</li>
    <li>

插入</li>
    <li>

根</li>
    <li>

插入</li>
    <li>

插入</li>
    <li>

叶</li>
    <li>

插入</li>
    <li>

k</li>
    <li>

NULL</li>
    <li>

T->lchild</li>
    <li>

T->rchild</li>
    <li>

构造</li>
    <li>

构造</li>
    <li>

空</li>
    <li>

出发</li>
    <li>

输入</li>
    <li>

合适</li>
    <li>

构造</li>
    <li>

NULL</li>
    <li>

str[i]</li>
    <li>

根</li>
    <li>

二叉链</li>
    <li>

性质</li>
    <li>

叶</li>
    <li>

父</li>
    <li>

后继</li>
    <li>

后继</li>
    <li>

插入</li>
    <li>

效率</li>
    <li>

高度</li>
    <li>

平衡</li>
    <li>

平均</li>
    <li>

有序</li>
    <li>

单支</li>
    <li>

高度</li>
    <li>

平均</li>
    <li>

(1+2×2+3×4+4×3)/10=2.9</li>
    <li>

(1+2+3+4+5+6+7+8+9+10)/10=5.5</li>
    <li>

平均</li>
    <li>

判定</li>
    <li>

不唯一</li>
    <li>

有序</li>
    <li>

指针</li>
    <li>

平均</li>
  </ul>
</details>
</div>

---

以上内容严格遵循要求，挖空了关键词、公式和关键步骤，并在每个次级标题下使用HTML折叠块列出答案。原文档结构和内容未做任何省略或修改。

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，包含 Markdown 和 HTML 折叠块格式。挖空的关键词、公式和关键步骤已在正文中用下划线（____）表示，答案在每个次级标题下方的折叠块中列出。原有的目录结构和内容保持不变。

---

## 二分<span style="color: Gold;">search</span>

<ul>

- 对象是____顺序表
- ____操作代价O(n)
- 选择建议：
  - 静态<span style="color: Gold;">search</span>表：用顺序表+二分<span style="color: Gold;">search</span>
  - 动态<span style="color: Gold;">search</span>表：用____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有序</li>
    <li>

插入删除</li>
    <li>

二叉排序树</li>
  </ul>
</details>
</div>

## <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

### <span style="color: silver;">定义

#### <span style="color: silver;">concept

<ul>

- 为了避免
  - 树的____增长过快
    - 降低二叉排序树的性能
- 规定：
  - 任意node的左、右子树____的绝对值≤1
  - 这样的二叉树称为____（Balanced BinaryTree）或AVL树
- 平衡因子：
  - 定义为node左子树与右子树的____
  - 值只可能是____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的定义（2009）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

高度差</li>
    <li>

平衡二叉树</li>
    <li>

高度差</li>
    <li>

-1、0或1</li>
  </ul>
</details>
</div>

#### <span style="color: gray;">完整<span style="color: silver;">定义

<ul>

- special:一棵____
- 具有以下性质的二叉树：
  - 左子树和右子树都是____
  - 左子树和右子树的____的绝对值≤1

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/42460a711e8a2a7bcbc0a975d83fd52c42972810cdf1ff0354c8c9d9ea7aa463.jpg)`  
<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>和<span style="color: gray;">不</span>~

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空树</li>
    <li>

平衡二叉树</li>
    <li>

高度差</li>
  </ul>
</details>
</div>

### <span style="color: GreenYellow;">插入</span>

#### <span style="color: silver;">基本思想

<ul>

- ____（或删除）node时：
  - 检查____路径上的node是否不平衡
  - 若不平衡：
    - 找到最近的____＞1的nodeA
    - 调整以A为根的子树
    - 保持____特性
    - 使之重新平衡

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: GreenYellow;">插入</span>操作的特点（2015）

> notice: 

每次调整的对象都是最小不平衡子树，即以____路径上离____node最近的平衡因子的绝对值＞1的node作为根的子树。图7.10中的虚线框内为最小不平衡子树。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2209bb6cb24b8548ca118f9d5f40aa8899f7ed2e20e83c7fe0c0621ee7b842db.jpg)`  
图7.10最小不平衡子树示意

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>及调整操作的实例（2010、2019、2021）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

插入</li>
    <li>

平衡因子绝对值</li>
    <li>

二叉排序树</li>
    <li>

插入</li>
    <li>

插入</li>
  </ul>
</details>
</div>

#### 调整规律

##### LL平衡旋转（右单旋转）

<ul>

- 原因：在nodeA的左孩子(L)的左子树(L)上____新node
- 过程：
  - A的平衡因子由1增至____
  - B向____旋转代替A成为根node
  - A向____旋转成为B的右孩子
  - B的原右子树作为A的左子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0b95eff2c046b43bb6a18bc9a41beacc9de133dbf00206769ee68eb40f6d13e7.jpg)`  
图7.11LL平衡旋转

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

2</li>
    <li>

右上</li>
    <li>

右下</li>
  </ul>
</details>
</div>

##### RR平衡旋转（左单旋转）

<ul>

- 原因：在nodeA的右孩子(R)的右子树(R)上____新node
- 过程：
  - A的平衡因子由-1减至____
  - B向____旋转代替A成为根node
  - A向____旋转成为B的左孩子
  - B的原左子树作为A的右子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5619c6d8436c1be38b63d259dcc65e0d4dfdd684c7e61b46edda1f39de83300f.jpg)`  
图7.12RR平衡旋转

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

-2</li>
    <li>

左上</li>
    <li>

左下</li>
  </ul>
</details>
</div>

##### LR平衡旋转（先左后右双旋转）

<ul>

- 原因：在A的左孩子(L)的右子树(R)上____新node
- 过程：
  - A的平衡因子由1增至____
  - 先将C向____旋转提升到B的位置
  - 再将C向____旋转提升到A的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e7462a89cd7274f34abe2309c0d8eedb6ed3d046096c03916695558689e50a9f.jpg)`  
图7.13LR平衡旋转

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

2</li>
    <li>

左上</li>
    <li>

右上</li>
  </ul>
</details>
</div>

##### RL平衡旋转（先右后左双旋转）

<ul>

- 原因：在A的右孩子(R)的左子树(L)上____新node
- 过程：
  - A的平衡因子由-1减至____
  - 先将C向____旋转提升到B的位置
  - 再将C向____旋转提升到A的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/044e9dac3e9118af06383caa4ab6770b19e9168a05e12eabac22b4702037505f.jpg)`  
图7.14RL平衡旋转

> notice: 

LR和RL旋转时，新node究竟是____C的左子树还是____C的右子树不影响旋转过程，而图7.13和图7.14中以____C的左子树中为例。

> pro：<span style="color: Lime;">构造</span><span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的过程（2013）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

-2</li>
    <li>

右上</li>
    <li>

左上</li>
    <li>

插入</li>
    <li>

插入</li>
    <li>

插入</li>
  </ul>
</details>
</div>

#### <span style="color: Lime;">构造</span>示例

<ul>

- 关键字序列：15，3，7，10，9，8
- 过程：
  - ____7后：
    - 最小不平衡子树根为15
    - 执行____旋转
  - ____9后：
    - 最小不平衡子树根为15
    - 执行____旋转
  - ____8后：
    - 最小不平衡子树根为7
    - 执行____旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/093f0bfc9d39ea0cacad9cfef59f6edf59790e2ed7a6692f2ea8792f99c3b8bf.jpg)`  
图7.15<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的生成过程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

LR</li>
    <li>

插入</li>
    <li>

LL</li>
    <li>

插入</li>
    <li>

RL</li>
  </ul>
</details>
</div>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除

#### 删除步骤

<ul>

- 步骤1：用____方法删除nodew
- 步骤2：若不平衡：
  - 从w向上回溯找第一个不平衡nodez
  - y为z的____node
  - x为y的____node
- 步骤3：对以z为根的子树进行平衡调整：
  - LL情况：y是z____，x是y____
  - LR情况：y是z____，x是y____
  - RR情况：y是z____，x是y____
  - RL情况：y是z____，x是y____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉排序树</li>
    <li>

最高孩子</li>
    <li>

最高孩子</li>
    <li>

左孩子</li>
    <li>

左孩子</li>
    <li>

左孩子</li>
    <li>

右孩子</li>
    <li>

右孩子</li>
    <li>

右孩子</li>
    <li>

左孩子</li>
  </ul>
</details>
</div>

#### 与<span style="color: GreenYellow;">插入</span>操作的区别

<ul>

- <span style="color: GreenYellow;">插入</span>操作：
  - 仅需对z为根的子树调整
- 删除操作：
  - 调整z为根的子树后
  - 若____减1，可能需要继续向上调整
  - 可能一直调整到____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

根node</li>
  </ul>
</details>
</div>

#### 删除示例

<ul>

- 以删除node32为例：
  - 32为叶node直接删除
  - 找到第一个不平衡node44(z)
  - 78为y，50为x
  - 满足____情况，执行____双旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7583531b4059bdd4839026ef84e33d80a0e80d188229f9a181a9205146f44d1b.jpg)`  
图7.16<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

RL</li>
    <li>

先右后左</li>
  </ul>
</details>
</div>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>

命题追踪指定条件下<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的node数的分析（2012）

#### <span style="color: Gold;">search</span>过程

<ul>

- 与____相同
- 比较次数≤____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉排序树</li>
    <li>

树的深度</li>
  </ul>
</details>
</div>

#### node数分析

<ul>

- 深度为h的最少node数nh：
  - n0=0, n1=1, n2=2
  - nh=____+____+1
  - 推导：n3=4, n4=7, n5=12,...
- 含n个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
  - 最大深度为____
  - ____效率为O(log2n)

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/05527187cb555c4a8c169a1c9bb747cea9d526708b08d8e44da08c7188104059.jpg)`  
图7.17node个数n最少的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

> notice: 

该sum可用于求解给定node数的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>所需的最多比较次数（或树的最大____）。如在含有12个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: Gold;">search</span>某个node的最多比较次数？

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

nh-2</li>
    <li>

nh-1</li>
    <li>

O(log2n)</li>
    <li>

平均search</li>
    <li>

高度</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">最多node数

<ul>

- 深度为h的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中含有的最多node数是____的情况

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

满二叉树</li>
  </ul>
</details>
</div>

## <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>

### 定义

#### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span>性质

<ul>

- 每个node或是____色，或是____色的
- 根node是____色的
- 叶node（虚构的外部node、NULLnode）都是____色的
- 不存在两个相邻的____node（即____node的父node和孩子node均是____色的）
- 对每个node，从该node到任意一个叶node的简单路径上，所含____node的数量相同
- 与折半<span style="color: Gold;">search</span>树和B树类似，为了便于对<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的实现和理解：
  - 引入了____个外部叶node
  - 以保证<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>中每个node（内部node）的左、右孩子均非空

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6302ead6b67560702595dc181ea237d148fcc79e5f41102d878fe7c0d83723be.jpg)`  
图7.18一棵<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

红</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

n+1</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: black;">黑</span><span style="color: LightSkyBlue;">高</span>concept

<ul>

- 从某node出发（不含该node）到达一个叶node的任意一个简单路径上
  - 的____node____（记为bh）
- ____高的concept是由性质⑤确定的
- 根node的____高称为<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____高

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

总数</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

黑</li>
  </ul>
</details>
</div>

#### sum1：从根到叶node的最长路径不＞最短路径的2倍

<ul>

- 最短路径：全由____node构成
- 最长路径：由____node和____node相间构成，____node数量相同
- 例如图7.18中的6-2和6-15-18-20就是这样的两条路径

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

黑</li>
    <li>

红</li>
    <li>

红黑</li>
  </ul>
</details>
</div>

#### sum2：有n个内部node的<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: LightSkyBlue;">高度</span>h≤2log2(n+1)

<ul>

- 证明过程：
  - 从根到叶node的任何路径至少一半是____node
  - 根的____高至少为h/2
  - 因此n≥____
  - 可得sum2结论

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

黑</li>
    <li>

2^(h/2)-1</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span> vs AVL树

<ul>

- 平衡程度比较：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>："____平衡"
  - AVL树："____平衡"
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>降低到"任意node左右子树____相差≤2倍"
- 应用场景：
  - ____删除少，____多：适合AVL树
  - 其他情况：适合<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>
- 实际应用：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>应用更广泛
  - C++的map和set用____实现
  - Java的TreeMap和TreeSet用____实现

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

适度</li>
    <li>

高度</li>
    <li>

高度</li>
    <li>

插入</li>
    <li>

search</li>
    <li>

红黑树</li>
    <li>

红黑树</li>
  </ul>
</details>
</div>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>

#### 基本过程

<ul>

- 与二叉<span style="color: Gold;">search</span>树____类似
- 区别：____后需要调整以满足<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>性质
  - 通过____
  - 或____操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

插入</li>
    <li>

重新着色</li>
    <li>

旋转</li>
  </ul>
</details>
</div>

#### sum3：新<span style="color: GreenYellow;">插入</span>node初始着为<span style="color: DarkRed;">红</span>色

<ul>

- 原因分析：
  - 若着为____色：
    - 会导致路径多出一个____node
    - 破坏性质⑤
    - 调整麻烦
  - 着为____色：
    - 所有路径____node数量不变
    - 仅在出现连续____node时需调整
    - 调整较简单

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

黑</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

红</li>
  </ul>
</details>
</div>

#### <span style="color: GreenYellow;">插入</span>过程详述

<ul>

1. 基本<span style="color: GreenYellow;">插入</span>：
   - 用二叉<span style="color: Gold;">search</span>树____法
   - 将nodez着为____色
   - 若父node____色无需调整

2. 特殊情况处理：
   - 若z是根node：
     - 将z着为____色
     - 树的____高增1

3. 需要调整的情况：
   - 前提条件：
     - z不是根node
     - z的父nodez.p是____色
   - 分为三种情况：

     ##### 情况1：叔node____色且z是右孩子(LR)

     - 先____转换为情况2
     - z和父node交换位置
     - 不影响____高和性质④

     ##### 情况2：叔node____色且z是左孩子(LL)

     - 做一次____
     - 交换z原父node和原爷node颜色
     - 保持性质⑤
     - 消除连续____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6141fe894e84b2ccf481ee1228f8dde35deaefe9f7c1b34e6857aad4fded5586.jpg)`  
图7.19情况1和情况2的调整方式

##### 情况3：叔node是____色

   - 调整方式：
     - 父node和叔node着为____色
     - 爷node着为____色
     - 保持性质④和⑤
   - 循环处理：
     - 将爷node作为新z继续
     - 指针z上移两层

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f5ccc56ed08320a072e5b4dc2d9a90053800244c9efa93005dfc054cd43073d8.jpg)`  
图7.20情况3的调整方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

左旋</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

右旋</li>
    <li>

红</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

红</li>
  </ul>
</details>
</div>

#### <span style="color: GreenYellow;">插入</span>示例

<ul>

- 以图7.21为例，展示<span style="color: GreenYellow;">插入</span>5、4、12的过程：
  - <span style="color: GreenYellow;">插入</span>5：____处理
  - <span style="color: GreenYellow;">插入</span>4：____到____处理
  - <span style="color: GreenYellow;">插入</span>12：父node____色，无需调整

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/866a8fdbeb20f4f9f1017d2842fcadd4a0308566f5ba94047bdd131149297787.jpg)`  
图7.21<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>过程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

情况3</li>
    <li>

RL</li>
    <li>

RR</li>
    <li>

黑</li>
  </ul>
</details>
</div>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除

#### 删除操作的影响

<ul>

- <span style="color: GreenYellow;">插入</span>操作易导致连续____node，破坏性质④
- 删除操作易造成____高变化，破坏性质⑤

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
  </ul>
</details>
</div>

#### 基本删除过程

<ul>

- 先执行二叉<span style="color: Gold;">search</span>树的____方法
- 两个孩子的情况：
  - 找____填补
  - 转换为删除后继node
  - 后继node至多一个孩子

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

删除</li>
    <li>

中序后继（或前驱）</li>
  </ul>
</details>
</div>

#### 删除情况分类

##### 情况A：待删node只有一个子树

<ul>

- 两种可能：
  - 如图7.22所示
  - 子树必为____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cab26f5079edd0a6447893d1eae634ce7de3b9df2de6eabbb5a6359254c2e364.jpg)`  
图7.22只有右子树或左子树的删除情况

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
  </ul>
</details>
</div>

##### 情况B：待删node无孩子

<ul>

- ____node：直接删除
- ____node：
  - 设待删node为y
  - x是替换node
  - 删除后路径____node减1
  - 将x视为____node处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

双黑</li>
  </ul>
</details>
</div>

#### 双<span style="color: black;">黑</span>node的处理

##### 情况1：兄弟nodew为____色

<ul>

- 特点：
  - w有____色左右孩子和父node
- 处理：
  - 交换w和父node颜色
  - 对父node____
  - 转为情况2、3或4

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/60760335c4d8bc8941e363634d6e9120ff151d6b6f52818aa54fe7a239bac7ed.jpg)`  
图7.23情况1的调整方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
    <li>

左旋</li>
  </ul>
</details>
</div>

##### 情况2：w____色且右孩子____色(RR)

<ul>

- 处理：
  - 交换w和父node颜色
  - w右孩子着____
  - 父node____
  - x变单重____色

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0acf8e79a22ee8cdebb7c67323a375bbd51c9a6a9a72ff5305d1ec8bf75d6c37.jpg)`  
图7.24情况2的调整方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

左旋</li>
    <li>

黑</li>
  </ul>
</details>
</div>

##### 情况3：w____色，左____右____(RL)

<ul>

- 处理：
  - 交换w和左孩子颜色
  - 对w____
  - 转为情况2

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21ad3f76de9b3e1effcce1f8a03e3fcbb06283ab2c8c5ded905ca2ecfa56abc7.jpg)`  
图7.25情况3的调整方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

右旋</li>
  </ul>
</details>
</div>

##### 情况4：w及其孩子都是____色

<ul>

- 处理：
  - 去掉x和w各一重____色
  - x变普通____色，w变____色
  - 父node增加一重____色
  - x上升一层继续循环

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f77f4733c0cffc561dc2e545e593ce2eb429d88b4703d725d26d24d9778e963.jpg)`  
图7.26情况4的调整方式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

黑</li>
    <li>

黑</li>
    <li>

红</li>
    <li>

黑</li>
  </ul>
</details>
</div>

#### 删除示例

<ul>

- 以图7.27为例，展示删除5和15的过程：
  - 删除5：____到____
  - 删除15：____到____处理

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16b040213c28dc879ebf6aede317568cd287ae396fdf09e05e9949dcf6c67b0e.jpg)`  
图7.27<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除过程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

情况1</li>
    <li>

情况4</li>
    <li>

LR</li>
    <li>

LL</li>
  </ul>
</details>
</div>

## B树和$\mathbf{B}+$树

考研大纲对B树和$^{\mathrm{B+}}$树的要求各不相同，重点在于考查B树，不仅要求理解B树的基本特点，还要求掌握B树的建立、____和删除操作，而对$^{\mathrm{B+}}$树则只考查concept。

### B树及其基本操作

所谓$m$阶B树是所有node的平衡因子均等于0的$m$路平衡____树。

> pro：B树的定义和特点（2009）

#### B树的定义特性

<ul>

- 一棵$m$阶B树或为____，或为满足如下特性的$m$叉树：
  - 树中每个node至多有____棵子树，即至多有____个关键字
  - 若根node不是叶node，则至少有____棵子树，即至少有____个关键字
  - 除根node外的所有非叶node至少有____棵子树，即至少有____个关键字
  - 所有非叶node的结构如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/641123898fc54d168c81307aaa0f46a0aeb4dc3c39dc6bc0add67a795683e706.jpg)`

  - 其中：
    - $K_{i}$ $(i=1,2,\cdots,n)$为node的____，且满足____
    - $P_{i}\,\,(i=0,\,1,\cdots,n)$为指向子树根node的____
    - 指针$P_{i+1}$所指子树中所有node的关键字均____$K_{i}$
    - $P_{i}$所指子树中所有node的关键字均____$K_{i}$
    - $n~(\lceil m/2\rceil\!-\!1\!\leqslant\!n\!\leqslant\!m-1)$为node中____的个数
  - 所有的叶node都出现在同一层次上，并且____

> pro：B树中关键字数和node数的分析（2013、2014、2018、2021）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

search</li>
    <li>

空树</li>
    <li>

$m$</li>
    <li>

$m-1$</li>
    <li>

2</li>
    <li>

1</li>
    <li>

$\lceil m/2\rceil$</li>
    <li>

$\lceil m/2\rceil-1$</li>
    <li>

关键字</li>
    <li>

$K_{1}<K_{2}<\cdots<K_{n}$</li>
    <li>

指针</li>
    <li>

＜</li>
    <li>

＞</li>
    <li>

关键字</li>
    <li>

不带信息</li>
  </ul>
</details>
</div>

#### B树的性质分析

<ul>

- 以图7.28所示5阶B树为例：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3296559c5d2d7110e03f8b45bfcbf4ee8b8931f234697bbe0eba579683969db7.jpg)`

- 主要性质：
  - node的孩子个数等于该node中____个数加1
  - 根node特性：
    - 无关键字时无子树(____)
    - 有关键字时子树个数≥____
  - 非根非叶node特性：
    - 至少有____棵子树
    - 至少有____个关键字
    - 至多有____棵子树和____个关键字
  - 关键字排序特性：
    - 从左到右____
    - 左侧子树关键字＜____
    - 右侧子树关键字＞____
  - 叶node特性：
    - 均在第____层
    - 代表查找失败位置

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

空树</li>
    <li>

2</li>
    <li>

3</li>
    <li>

2</li>
    <li>

5</li>
    <li>

4</li>
    <li>

递增有序</li>
    <li>

当前关键字</li>
    <li>

当前关键字</li>
    <li>

4</li>
  </ul>
</details>
</div>

#### B树的查找

<ul>

- 基本特点：
  - 与____相似
  - 每个node包含____关键字
  - 进行____分支决定

##### 查找操作的两个基本步骤

- 在B树中找node(____操作)
- 在node内找关键字(____操作)
  - 可用____查找或____查找
  - 查找效率取决于目标node____

##### 查找过程

- 从____开始
- 在当前node____表中查找
- 根据比较结果选择子树继续查找
- 直到找到目标或达到____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉排序树</li>
    <li>

多个</li>
    <li>

多路</li>
    <li>

磁盘</li>
    <li>

内存</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

层次数</li>
    <li>

根node</li>
    <li>

有序</li>
    <li>

叶node</li>
  </ul>
</details>
</div>

#### B树的<span style="color: LightSkyBlue;">高度</span>分析

##### <span style="color: LightSkyBlue;">高度</span>定义

<ul>

- 不包括最后不带信息的____层

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

叶node</li>
  </ul>
</details>
</div>

##### <span style="color: LightSkyBlue;">高度</span>范围分析

<ul>

- 最小<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node关键字数____
  - 满足：$n\!\leqslant\!(m-1)(1+m+m^{2}+\cdots+m^{h-1})=____$
  - 得到：$h\geqslant____$

- 最大<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node关键字数____
  - 层次node数分析：
    - 第一层：至少____个node
    - 第二层：至少____个node
    - 第三层：至少____个node
    - 第$h+1$层：至少____个node
  - 满足：$n+1\!\geqslant\!____$
  - 得到：$h{\leqslant}____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最多</li>
    <li>

$m^{h}-1$</li>
    <li>

$\log_{m}\left(n+1\right)$</li>
    <li>

最少</li>
    <li>

1</li>
    <li>

2</li>
    <li>

$2\left\lceil m/2\right\rceil$</li>
    <li>

$2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$\log_{\lceil m/2\rceil}((n+1)/2)+1$</li>
  </ul>
</details>
</div>

#### B树的<span style="color: GreenYellow;">插入</span>操作

> pro：通过<span style="color: GreenYellow;">插入</span>操作<span style="color: Lime;">构造</span>一棵初始为空的B树（2020）

##### <span style="color: GreenYellow;">插入</span>过程

<ul>

- 定位阶段：
  - 使用B树____算法
  - 找到____的终端node位置

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

查找</li>
    <li>

插入</li>
  </ul>
</details>
</div>

---

以上内容已按照您的要求进行挖空处理，保留了原文档的结构和所有内容，并在每个次级标题下添加了折叠块，列出挖空的答案。折叠块使用 HTML `<details>` 和 `<summary>` 标签实现，答案以 `<ul>` 和 `<li>` 标签列出，确保 Markdown 内公式渲染正确。

Below is the processed Markdown content with blanks inserted for key terms, formulas, and steps as per your requirements. The answers are provided in collapsible HTML `<details>` blocks using `<ul>` and `<li>` tags for proper indentation and formula rendering. The original structure is preserved, and the output is presented in both Markdown and HTML formats.

---

### Processed Markdown Content

```markdown
<ul>

### B树的插入

<ul>

- <span style="color: GreenYellow;">插入</span>阶段：
  - 关键字数限制：$[\lceil m/2\rceil - 1, \boxed{\phantom{m - 1}}]$
  - 两种情况：
    - <span style="color: GreenYellow;">插入</span>后关键字数 < m：直接____
    - <span style="color: GreenYellow;">插入</span>后关键字数 > m - 1：需要____

##### node分裂方法

- 基本步骤：
  - 创建新node
  - 从____位置分割关键字
  - 左部分保留在____
  - 右部分移至____
  - 中间关键字上移至____
- 特殊情况：
  - 父node可能需要继续____
  - 分裂可能传播至____
  - 可能导致树<span style="color: LightSkyBlue;">高度</span>增____

- 示例(m=3的B树)：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/80d65ed644ea63d8e94f85979f930603e6eb9b46bb9c910cd6cf03ad6c8bf748.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$m - 1$</li>
    <li>

插入</li>
    <li>

分裂</li>
    <li>

中间</li>
    <li>

原node</li>
    <li>

新node</li>
    <li>

父node</li>
    <li>

分裂</li>
    <li>

根node</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### B树的删除

<ul>

#### 删除操作概述

- B树的删除操作与<span style="color: GreenYellow;">插入</span>操作类似，但更____
- 需确保删除后node关键字个数 ≥ ____
- 可能涉及node的"____"问题

> pro：B树的删除操作的实例（2012、2022）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

复杂</li>
    <li>

$m/2 - 1$</li>
    <li>

合并</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 非终端node的删除处理

- 当被删关键字k不在终端node时：
  - 可用k的____(k')或____替代
    - 前驱：k左侧子树中"____"元素
    - 后继：k右侧子树中"____"元素
  - 然后删除____
  - k'必定在____中

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7238b2b80bcf193f427d7371143169091e88dc7e89de6a71f0c30816046d808c.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前驱</li>
    <li>

后继</li>
    <li>

最右下</li>
    <li>

最左下</li>
    <li>

k'</li>
    <li>

终端node</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 终端node的删除情况

##### 情况一：直接删除

- 条件：删除前关键字个数 ≥ ____
- 操作：直接删去该____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil$</li>
    <li>

关键字</li>
  </ul>
</details>
</div>

##### 情况二：借助兄弟node

- 条件：
  - 删除前关键字个数 = ____
  - 相邻兄弟node关键字个数 ≥ ____
- 操作：调整该node、____及____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/215b6baf0ac411ac31105377425b16f9f12f9828b89f9a64b2c180cfee010990.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

$\lceil m/2 \rceil$</li>
    <li>

兄弟node</li>
    <li>

父node</li>
  </ul>
</details>
</div>

##### 情况三：node合并

- 条件：
  - 删除前关键字个数 = ____
  - 相邻兄弟node关键字个数 ≤ ____
- 操作：与____及____合并

> pro：非空B树的<span style="color: Gold;">search</span>、<span style="color: GreenYellow;">插入</span>、删除操作的特点（2023）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

兄弟node</li>
    <li>

父node关键字</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 合并后的处理

- 双亲node为根node时：
  - 若关键字减至____，删除____
  - 合并后新node成为____
- 双亲node非根node时：
  - 若关键字数减至____
  - 需与____调整或____
  - 重复直至符合____要求

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

根node</li>
    <li>

根</li>
    <li>

$\lceil m/2 \rceil - 2$</li>
    <li>

兄弟node</li>
    <li>

合并</li>
    <li>

B树</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### B+树的concept

> pro：B+树的应用场合（2017）

<ul>

#### B+树的定义条件

- m阶B+树需满足：
  1. 分支node最多____棵子树
  2. node最小子树要求：
     - 非叶根node至少____棵
     - 其他分支node至少____棵
  3. 子树个数等于____个数
  4. 叶node特性：
     - 包含____关键字
     - 包含____指针
     - 按____顺序排列
     - 相邻叶node相互____
  5. 分支node特性：
     - 仅包含子node____关键字
     - 包含指向____的指针

> pro：B树和B+树的差异的分析（2016）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$m$</li>
    <li>

两</li>
    <li>

$\lceil m/2 \rceil$</li>
    <li>

关键字</li>
    <li>

全部</li>
    <li>

记录</li>
    <li>

大小</li>
    <li>

链接</li>
    <li>

最大</li>
    <li>

子node</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B+树与B树的主要差异

##### 结构差异

- 关键字与子树关系：
  - B+树：n个关键字对应____棵子树
  - B树：n个关键字对应____棵子树

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n$</li>
    <li>

$n + 1$</li>
  </ul>
</details>
</div>

##### node特性差异

- 关键字数量范围：
  - B+树：____ ≤ n ≤ ____
  - B树：____ ≤ n ≤ ____
- 关键字分布：
  - B+树：____包含全部关键字
  - B树：关键字____出现

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil$</li>
    <li>

$m$</li>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

$m - 1$</li>
    <li>

叶node</li>
    <li>

不重复</li>
  </ul>
</details>
</div>

##### 功能特性差异

- node作用：
  - B+树：非叶node仅做____
  - B树：所有node既____又____
- 链接结构：
  - B+树：叶node形成____
  - B树：node间____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/db9dc115f173d19c088aab329b4f42f2125e735f6d5222eacbec4640c3e2ffab.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

索引</li>
    <li>

存储</li>
    <li>

索引</li>
    <li>

链表</li>
    <li>

独立</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B+树的操作特点

- 基本类似____
- <span style="color: Gold;">search</span>特点：
  - 总是遍历到____
  - 路径：____到叶node
  - 支持两种<span style="color: Gold;">search</span>方式：
    - ____<span style="color: Gold;">search</span>
    - ____<span style="color: Gold;">search</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

B树</li>
    <li>

叶node</li>
    <li>

根node</li>
    <li>

顺序</li>
    <li>

多路</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: RoyalBlue;">散列</span>（Hash）表

<ul>

## <span style="color: silver;">concept

<ul>

### <span style="color: silver;">n.

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>(哈希<span style="color: green;">函数</span>)
  - 定义：把<span style="color: Gold;">search</span>表中的关键字映射成对应____的<span style="color: green;">函数</span>
  - 表示：$\operatorname{Hash}(\ker) = \boxed{\phantom{Addr}}$
  - 地址类型：数组下标、____或内存地址等

- <span style="color: Gold;">冲突</span>
  - 定义：不同关键字映射到____地址
  - 同义词：发生<span style="color: Gold;">冲突</span>的____关键字
  - 处理：
    - 需设计良好的<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>减少____
    - 设计<span style="color: Gold;">冲突</span>____方法

- <span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>(哈希表)
  - 定义：根据关键字直接进行____的数据结构
  - 特点：建立关键字和存储地址的直接____
  - 性能：理想情况下<span style="color: Gold;">search</span>时间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

地址</li>
    <li>

Addr</li>
    <li>

索引</li>
    <li>

同一</li>
    <li>

不同</li>
    <li>

冲突</li>
    <li>

处理</li>
    <li>

访问</li>
    <li>

映射</li>
    <li>

$O(1)$</li>
  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Lime;">构造</span>方法

<ul>

#### <span style="color: silver;"><span style="color: Lime;">构造</span>原则

- 定义域必须包含____关键字
- 地址分布应尽可能____
- 计算过程应尽量____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

全部</li>
    <li>

均匀</li>
    <li>

简单</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 直接定址法

- 方法：取关键字的____<span style="color: green;">函数</span>值为<span style="color: RoyalBlue;">散列</span>地址
- 优点：计算简单，无____
- 适用：关键字分布基本____的情况
- 缺点：关键字不连续时____空间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性</li>
    <li>

冲突</li>
    <li>

连续</li>
    <li>

浪费</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 除留余数法

- 方法：$H(\mathrm{kcy}) = \boxed{\phantom{\mathrm{kcy} \, \% \, p}}$
- 要点：选择合适的____值
  - p 不 > ____
  - p 最接近或等于m的____
- 目标：使关键字____映射到任意地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\mathrm{kcy} \, \% \, p$</li>
    <li>

p</li>
    <li>

表长m</li>
    <li>

质数</li>
    <li>

等概率</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 数字分析法

- 适用：已知____集合
- 原理：
  - 分析r进制数各位上数码出现____
  - 选取分布____的位作为<span style="color: RoyalBlue;">散列</span>地址
- 局限：更换关键字需____<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

频率</li>
    <li>

均匀</li>
    <li>

重构</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 平方取中法

- 方法：取关键字平方值的____几位
- 特点：
  - <span style="color: RoyalBlue;">散列</span>地址与关键字____都相关
  - 地址分布较____
- 适用：关键字各位取值不____或位数较小

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

中间</li>
    <li>

每位</li>
    <li>

均匀</li>
    <li>

均匀</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 方法选择

- 没有最优的____方法
- 需根据具体____集合情况选择

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

通用</li>
    <li>

关键字</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

## <span style="color: silver;">处理<span style="color: Gold;">冲突</span>的方法

<ul>

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>设计：
  - 任何<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>都无法完全避免____
  - 必须考虑<span style="color: Gold;">冲突</span>____方法

- <span style="color: Gold;">冲突</span>处理过程：
  - 为发生<span style="color: Gold;">冲突</span>的关键字寻找下一个"____"的Hash地址
  - 使用____表示第i次探测得到的<span style="color: RoyalBlue;">散列</span>地址
  - 处理流程：
    - 若____发生<span style="color: Gold;">冲突</span>，继续寻找____
    - 若____仍<span style="color: Gold;">冲突</span>，继续寻找____
    - 以此类推，直到找到不发生<span style="color: Gold;">冲突</span>的____
    - ____即为该关键字在表中的最终地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

冲突</li>
    <li>

处理</li>
    <li>

空</li>
    <li>

$H_i$</li>
    <li>

$H_1$</li>
    <li>

$H_2$</li>
    <li>

$H_2$</li>
    <li>

$H_3$</li>
    <li>

$H_k$</li>
    <li>

$H_k$</li>
  </ul>
</details>
</div>

</ul>

<ul>

### 开放定址法

<ul>

- 开放定址法的含义：
  - 表中的空闲地址对以下两类表项开放：
    - ____表项
    - ____表项

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

同义词</li>
    <li>

非同义词</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 数学公式

- 递推公式：$H_i = \boxed{\phantom{(H(\mathrm{kcy}) + d_i) \, \% \, m}}$
  - $H(\mathrm{kcy})$为____<span style="color: green;">函数</span>
  - $i = 1, 2, \cdots, \boxed{\phantom{k}}$
  - $m$表示<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>____
  - $d_i$为____序列

> pro：堆积现象导致的结果（2014）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$(H(\mathrm{kcy}) + d_i) \, \% \, m$</li>
    <li>

散列</li>
    <li>

$k \leqslant m - 1$</li>
    <li>

表长</li>
    <li>

增量</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 增量序列的四种取法

##### 1. 线性探测法

- 又称线性探测再<span style="color: RoyalBlue;">散列</span>法
- $d_i = \boxed{\phantom{1, 2, \cdots, m - 1}}$
- 特点：
  - <span style="color: Gold;">冲突</span>发生时____查看下一个单元
  - 探测到表尾转到____
  - 未填满时一定能找到____单元
- 缺点：
  - 可能造成元素____
  - 降低<span style="color: Gold;">search</span>____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$1, 2, \cdots, m - 1$</li>
    <li>

顺序</li>
    <li>

表首</li>
    <li>

空闲</li>
    <li>

堆积</li>
    <li>

效率</li>
  </ul>
</details>
</div>

##### 2. 平方探测法

- 又称____探测法
- $d_i = \boxed{\phantom{1^2, -1^2, 2^2, -2^2, \cdots, k^2, -k^2}}$
- 条件：
  - $k \leqslant \boxed{\phantom{m/2}}$
  - 表长m必须是____的素数
- 优缺点：
  - 避免____问题
  - 不能探测所有单元，至少能探测____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二次</li>
    <li>

$1^2, -1^2, 2^2, -2^2, \cdots, k^2, -k^2$</li>
    <li>

$m/2$</li>
    <li>

$4k + 3$</li>
    <li>

堆积</li>
    <li>

一半</li>
  </ul>
</details>
</div>

##### 3. 双<span style="color: RoyalBlue;">散列</span>法

- $d_i = \boxed{\phantom{i \times \mathrm{Hash}_2(\mathrm{ker})}}$
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：
  - $H_i = \boxed{\phantom{(H(\mathrm{kcy}) + i \times \mathrm{Hash}_2(\mathrm{kcy})) \, \% \, m}}$
  - 初始探测位置：$H_0 = \boxed{\phantom{H(\mathrm{kcy}) \, \% \, m}}$
  - i为<span style="color: Gold;">冲突</span>____，初始为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$i \times \mathrm{Hash}_2(\mathrm{ker})$</li>
    <li>

$(H(\mathrm{kcy}) + i \times \mathrm{Hash}_2(\mathrm{kcy})) \, \% \, m$</li>
    <li>

$H(\mathrm{kcy}) \, \% \, m$</li>
    <li>

次数</li>
    <li>

0</li>
  </ul>
</details>
</div>

##### 4. 伪随机序列法

- $d_i = \boxed{\phantom{伪随机数序列}}$

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>中删除部分元素后的<span style="color: Gold;">search</span>效率分析（2023）

> notice: 

- 开放定址法删除元素的注意事项：
  - 不能随便____删除表中已有元素
    - 原因：会截断其他____元素的查找路径
  - 删除方案：
    - 采用____删除方式
    - 具体做法：在要删除的元素位置做一个____标记
  - 副作用：
    - 多次删除后会造成____现象
      - 表面上：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>很____
      - 实际上：许多位置未被____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

伪随机数序列</li>
    <li>

物理</li>
    <li>

同义词</li>
    <li>

逻辑</li>
    <li>

删除</li>
    <li>

假满</li>
    <li>

满</li>
    <li>

利用</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">拉</span><span style="color: RoyalBlue;">链</span>法

- 又称____法、chaining
- 原理：
  - 同义词存储在____链表中
  - 链表由<span style="color: RoyalBlue;">散列</span>地址____标识
  - 头指针存放在<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>____单元
- 适用：
  - usually进行<span style="color: GreenYellow;">插入</span>和____的情况

- eg
  - 已知条件：
    - 关键字序列：{19, 14, 23, 01, 68, 20, 84, 27, 55, 11, 10, 79}
    - <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：$H(\mathrm{key}) = \boxed{\phantom{\mathrm{key} \, \% \, 13}}$
    - 处理<span style="color: Gold;">冲突</span>方法：____法
  - 建立的表结构：
    - 如图7.33所示
  - 练习建议：
    - 学完下节内容后
    - 可尝试计算该例的____查找长度ASL

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d1940764bbe5838b67ac8609d78335783a585aa5c7fc0cb6560c6e81692cd7da.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链接</li>
    <li>

线性</li>
    <li>

唯一</li>
    <li>

对应</li>
    <li>

删除</li>
    <li>

$\mathrm{key} \, \% \, 13$</li>
    <li>

拉链</li>
    <li>

平均</li>
  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>及性能分析

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的<span style="color: Lime;">构造</span>及<span style="color: Gold;">search</span>效率的分析（2010、2018、2019）

<ul>

#### <span style="color: Gold;">search</span>过程

- 初始化：Addr ← ____
- 步骤：
  1. 检测地址Addr位置
     - 无记录：返回____
     - 有记录：比较____值
       - 相等：返回____
       - 不等：执行步骤2
  2. 计算下一<span style="color: RoyalBlue;">散列</span>____
     - 更新____
     - 返回步骤____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\mathrm{Hash}(\mathrm{key})$</li>
    <li>

失败</li>
    <li>

key</li>
    <li>

成功</li>
    <li>

地址</li>
    <li>

Addr</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### eg

<ul>

##### 示例数据

- 关键字序列：{19, 14, 23, 01, 68, 20, 84, 27, 55, 11, 10, 79}
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：$H(\mathrm{key}) = \boxed{\phantom{\mathrm{key} \, \% \, 13}}$
- 处理方法：____探测

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/37af350f00080c15707906e376408f9d353587a88dd2c9322a9a8e4bad9e594b.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\mathrm{key} \, \% \, 13$</li>
    <li>

线性</li>
  </ul>
</details>
</div>

</ul>

<ul>

##### <span style="color: Gold;">search</span>过程示例

###### 值84的<span style="color: Gold;">search</span>

1. 初始地址：$H(84) = \boxed{\phantom{6}}$
2. 第一次<span style="color: Gold;">冲突</span>：$H_1 = (6 + 1) \, \% \, 16 = \boxed{\phantom{7}}$
3. 第二次<span style="color: Gold;">冲突</span>：$H_2 = (6 + 2) \, \% \, 16 = \boxed{\phantom{8}}$
4. 结果：成功，位置____

###### 值38的<span style="color: Gold;">search</span>

1. 初始地址：$H(38) = \boxed{\phantom{12}}$
2. 第一次<span style="color: Gold;">冲突</span>：$H_1 = (12 + 1) \, \% \, 16 = \boxed{\phantom{13}}$
3. 结果：失败，L[13]____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/becdbede030512e5e2ac3b81b756cc81d076a78bca8c20dbff207903db34e92a.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

6</li>
    <li>

7</li>
    <li>

8</li>
    <li>

8</li>
    <li>

12</li>
    <li>

13</li>
    <li>

为空</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 性能分析

<ul>

##### <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度

- ASL计算：$\boxed{\phantom{(1 \times 6 + 2 + 3 \times 3 + 4 + 9) / 12}} = 2.5$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$(1 \times 6 + 2 + 3 \times 3 + 4 + 9) / 12$</li>
  </ul>
</details>
</div>

</ul>

<ul>

##### 影响因素

> 影响<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span><span style="color: Gold;">search</span>效率的因素（2011、2022）

1. ____<span style="color: green;">函数</span>
2. 处理____的方法
3. 装填因子
   - 定义：$\alpha = \boxed{\phantom{\frac{\text{表中记录数n}}{\text{散列表长度m}}}}$
   - 特点：
     - ASL依赖于____而非n或m
     - $\alpha$越大，____可能性越大
     - $\alpha$越小，____可能性越小

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

散列</li>
    <li>

冲突</li>
    <li>

$\frac{\text{表中记录数n}}{\text{散列表长度m}}$</li>
    <li>

$\alpha$</li>
    <li>

冲突</li>
    <li>

冲突</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 归纳总结

<ul>

##### <span style="color: LightSkyBlue;">平均</span>查找长度（ASL）计算

- 核心考查点：求<span style="color: LightSkyBlue;">平均</span>查找长度（ASL）
  - 用于度量各种查找算法的____
  - 基于查找结构
    - 由相同数据类型的____或node构成

###### 计算公式

- 查找成功的ASL：$\mathrm{ASL}_{n \in i} = \boxed{\phantom{\sum_{i=1}^{n} p_i c_i}}$
- 查找失败的ASL：$\mathrm{ASL}_{\mathbb{F}^{n\mathbb{W}}} = \boxed{\phantom{\sum_{j=0}^{n} q_j c_j}}$

###### 参数说明

- 已有数据元素：____个
- 查找成功情况
  - 每个元素查找概率：____
  - 数据比较次数：____ $(i = 1, 2, \cdots, n)$
- 查找失败情况
  - 子集合元素查找概率：____
  - 数据比较次数：____ $(j = 0, 1, \cdots, n)$

###### ASL考虑方式

- 综合考虑
  - 条件：$\boxed{\phantom{\sum_{i=1}^{n} p_i + \sum_{j=0}^{n} q_j = 1}}$
  - 元素查找概率相等时：$p_i = q_j = \boxed{\phantom{\frac{1}{2n + 1}}}$
- 分开考虑
  - 条件：$\sum_{i=1}^{n} p_i = 1, \sum_{j=0}^{n} q_j = 1$
  - 元素查找概率相等时：$p_i = \boxed{\phantom{\frac{1}{n}}}, q_j = \boxed{\phantom{\frac{1}{n + 1}}}$
- 实际应用
  - 多采用____考虑
  - 原因：查找失败情况常被____
  - 注意：两种考虑方式计算结果____，考试需仔细阅题

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

性能</li>
    <li>

记录</li>
    <li>

$\sum_{i=1}^{n} p_i c_i$</li>
    <li>

$\sum_{j=0}^{n} q_j c_j$</li>
    <li>

$n$</li>
    <li>

$p_i$</li>
    <li>

$c_i$</li>
    <li>

$q_j$</li>
    <li>

$c_j$</li>
    <li>

$\sum_{i=1}^{n} p_i + \sum_{j=0}^{n} q_j = 1$</li>
    <li>

$\frac{1}{2n + 1}$</li>
    <li>

$\frac{1}{n}$</li>
    <li>

$\frac{1}{n + 1}$</li>
    <li>

分开</li>
    <li>

忽略</li>
    <li>

不同</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

</span>
```

---

### Explanation of Processing

1. **Blanks Insertion**:
   - Key terms (e.g., "插入", "分裂", "地址"), formulas (e.g., `$H(\mathrm{kcy}) = \mathrm{kcy} \, \% \, p$"), and critical steps (e.g., "从中间位置分割关键字") were replaced with blanks using `\boxed{\phantom{}}` for formulas or `____` for text.
   - The blanks focus on definitions, key steps, and formulas to facilitate self-testing and memory reinforcement.

2. **Collapsible Answers**:
   - Answers are placed in `<details>` blocks with a `<summary>` tag (left empty as per the example) and nested `<ul>` with `<li>` tags.
   - Each `<li>` is followed by an empty line to ensure proper Markdown rendering of formulas (e.g., `$f(x_0 + \Delta x) - f(x_0)$`).

3. **Structure Preservation**:
   - The original hierarchy (`#`, `##`, `###`, etc.) and all content, including images and notes (e.g., `> pro:`), are retained unchanged.
   - Only the specified key elements were blanked out, and no content was omitted or altered beyond the requirements.

4. **Formatting**:
   - `<ul>` tags are used for indentation as per the original structure, and collapsible blocks are placed immediately after the relevant section, ensuring clarity and adherence to the example format.

This output meets all specified requirements and is ready for use in self-study or review purposes. Let me know if further adjustments are needed!

以下是按照要求对提供的Markdown文档进行挖空处理后的结果，包含Markdown和HTML格式的折叠块，关键词、公式和关键步骤已设置为空缺，答案在折叠块中以`<ul>`和`<li>`标签呈现。

---

### <span style="color: LightSkyBlue;">算法</span>

<ul>

int Binary<span style="color: Gold;">search</span>(SSTable L,ElemType key){
    int low=0,high=L.TableLen-1,mid;
    while(low<=high){
        mid=____; //取中间位置
        if(L.elem[mid]==key) return mid; // <span style="color: Gold;">search</span>成功则返回____
        else if(L.elem[mid]>key) high=____; //从____继续<span style="color: Gold;">search</span>
        else low=____; //从____继续<span style="color: Gold;">search</span>
    }
    return ____; // <span style="color: Gold;">search</span>失败，返回____
}

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(low+high)/2</li>
    <li>

mid</li>
    <li>

mid-1</li>
    <li>

前半部分</li>
    <li>

mid+1</li>
    <li>

后半部分</li>
    <li>

-1</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">instruction

<ul>

- 折半<span style="color: Gold;">search</span>算法 select 中间node时
  - ____取整
  - ~ ↓ ~
- both can
    - but 每次<span style="color: Gold;">search</span>的____必须相同

> pro：折半<span style="color: Gold;">search</span>的<span style="color: Gold;">search</span>路径的判断（2015）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

向↑</li>
    <li>

取整方式</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">eg

<ul>

- 已知11个元素的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>表{7,10,13,16,19,29,32,33,37,41,43}
- <span style="color: Gold;">search</span>值为11的过程：
  - 第一次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<____，在[low,____]范围内继续<span style="color: Gold;">search</span>
  - 第二次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<____，在[low,____]范围内继续<span style="color: Gold;">search</span>
  - 第三次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11>____，在[____,high]范围内继续<span style="color: Gold;">search</span>
  - 第四次<span style="color: Gold;">search</span>
    - 子表只含一个元素____
    - ____≠11，<span style="color: Gold;">search</span>失败

> pro：分析给定二叉树树形能否构成折半<span style="color: Gold;">search</span>判定树（2017）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

29</li>
    <li>

29</li>
    <li>

mid-1</li>
    <li>

13</li>
    <li>

13</li>
    <li>

mid-1</li>
    <li>

7</li>
    <li>

7</li>
    <li>

mid+1</li>
    <li>

10</li>
    <li>

10</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"> <span style="color: GreenYellow;">判定</span><span style="color: green;">树

<ul>

- Feature：
  - node:
    - 每个圆形~ express ____
    - 最下面的叶~为方形，表示<span style="color: Gold;">search</span>失败的____
    - 每个~值均 ＞ 其____值
      - 且 ＜ 其____值
    - n个元素对应____个圆形非叶~和____个方形叶~
  - is ____<span style="color: Gold;">二叉</span><span style="color: green;">树</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3c13d8b6e09e2161cf91b26befcb36e69ca849ba58fb230483c6eaa214215f5.jpg)  
↑描述折半查找过程的判定树

> pro：折半<span style="color: Gold;">search</span>的最多比较次数的分析（2010、2023）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一个记录</li>
    <li>

区间</li>
    <li>

左子~</li>
    <li>

右子~</li>
    <li>

n</li>
    <li>

n+1</li>
    <li>

平衡</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> <span style="color: Gold;">性能</span>分析

<ul>

- 比较次数最多≤树的____
- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度：
  - $\mathrm{ASL}={\frac{1}{n}}\sum_{i=1}^{n}l_{i}={\frac{1}{n}}(1\times1+2\times2+\cdots+h\times2^{h-1})={\frac{n+1}{n}}\log_{2}(n+1)-1\approx____$
  - 时间复杂度为____
- 示例分析(图7.2)：
  - <span style="color: Gold;">search</span>成功ASL=____
  - <span style="color: Gold;">search</span>失败ASL=____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

\log_{2}(n+1)-1</li>
    <li>

O(log₂n)</li>
    <li>

(1×1+2×2+3×4+4×4)/11=3</li>
    <li>

(3×4+4×8)/12=11/3</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: gray;">conditions

<ul>

- only ____存储结构
- request 元素 按关键字 ____排列

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

有序</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;"><span style="color: GreenYellow;">分块</span>~

<ul>

- also called as ____<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span>
- 顺序<span style="color: Gold;">search</span>和折半<span style="color: Gold;">search</span>各自的优点
  - 既 ____结构
  - 又 ____<span style="color: Gold;">search</span>

### <span style="color: silver;">基本思想

<ul>

- 将<span style="color: Gold;">search</span>表分为若干 ____
  - 块内
    - can____
  - 块间
    - 元素____
      - 第一个块中
        - max关键字 ＜ 第二个块中 ____关键字
      - 第二个块中
        - max关键字 ＜ 第二个块中 ____关键字
      - ...
      - 以此类推
- 建立索引表
  - 包含各块____和各块____
  - 索引表按关键字____排列

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

索引</li>
    <li>

动态</li>
    <li>

快速</li>
    <li>

子块</li>
    <li>

无序</li>
    <li>

有序</li>
    <li>

all recorded</li>
    <li>

all recorded</li>
    <li>

最大关键字</li>
    <li>

第一个元素地址</li>
    <li>

有序</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> <span style="color: Gold;">过程

<ul>

- step1：在 **索引表** 中确定待查记录所在的____
  - 可以____~ or ____~ 索引表
- step2：在____内____<span style="color: Gold;">search</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

块</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

块</li>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">eg

<ul>

- 关键码集合：{88,24,72,61,21,6,32,11,8,31,22,83,78,54}
- 按关键码值24,54,78,88分为4个块和索引表

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/76ded7a7f7a5d8bfa95e7e4f016ef281090b1deb3b0fa15e348952f286083f80.jpg)  

</ul>

</ul>

### <span style="color: silver;"> <span style="color: Gold;">性能</span>分析

<ul>

- <span style="color: LightSkyBlue;"><span style="color: LightSkyBlue;">平均</span></span><span style="color: Gold;">search</span>长度
  - ASL = ____ + ____
    - L₁：索引<span style="color: Gold;">search</span>____长度
    - Ls：块内<span style="color: Gold;">search</span>____长度
- 均匀分块情况下
  - n长度表分为____块，每块____个记录
  - ASL = ____ = ____
  - 当s=____时，ASL最小，为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L₁</li>
    <li>

Ls</li>
    <li>

平均</li>
    <li>

平均</li>
    <li>

b</li>
    <li>

s</li>
    <li>

(b+1)/2 + (s+1)/2</li>
    <li>

(s²+2s+n)/2s</li>
    <li>

√n</li>
    <li>

√n+1</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">优</span><span style="color: GreenYellow;">缺</span>点

<ul>

- <span style="color: LightSkyBlue;">优</span>点：
  - 具有 ____结构
  - ____<span style="color: Gold;">search</span>
  - 块内<span style="color: Gold;">search</span>范围小，效率高于____<span style="color: Gold;">search</span>
- <span style="color: GreenYellow;">缺</span>点：
   - 索引表 占用 ____存储空间
   - 索引<span style="color: Gold;">search</span> 增加系统 ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

动态</li>
    <li>

快速</li>
    <li>

顺序</li>
    <li>

额外</li>
    <li>

开销</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: green;">树</span>形<span style="color: Gold;">search</span>  

<ul>

## <span style="color: silver;"> <span style="color: Gold;">二叉</span><span style="color: GreenYellow;">排序</span><span style="color: green;">树</span>（BST）  

<ul>

Binary sort tree
- 目的：
  - 不是用于____
  - 是为了提高以下操作的效率：
    - 关键字____
    - ~ ____
    - ~ ____
- 优势：
  - ____结构
  - 这种结构特别有利于：
    - ____
    - ____

### <span style="color: silver;">定义  

<ul>

> pro：二叉排序树的应用（2013）  

二叉排序树（也称二叉<span style="color: Gold;">search</span>树）或者是一棵____，或者是具有下列特性的二叉树：  
- 若左子树非空，则左子树上所有node的值均 ＜ ____的值
- 若右子树非空，则右子树上所有node的值均 ＞ ____的值
- 左、右子树也分别是一棵____

> pro：二叉排序树中node值之间的关系（2015、2018）  

- 根据二叉排序树的定义:
  - 左子树node值 $<$ ____ $<$ 右子树node值
  - 对二叉排序树进行____遍历，可以得到一个____的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>序列
  - 例如，图7.4所示二叉排序树的中序遍历序列为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ce5699f8e763d0cb3b6dbd0974980ca0913f135c1e27622016155408d0e469aa.jpg)  
图7.4一棵二叉排序树  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

排序</li>
    <li>

搜索</li>
    <li>

插入</li>
    <li>

删除</li>
    <li>

非线性</li>
    <li>

插入</li>
    <li>

删除</li>
    <li>

空树</li>
    <li>

根node</li>
    <li>

根node</li>
    <li>

二叉排序树</li>
    <li>

根node值</li>
    <li>

中序</li>
    <li>

递增</li>
    <li>

123468</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">基本操作

<ul>

#### <span style="color: Gold;">search</span>  

<ul>

- 过程：
  - 从____开始，沿某个分支遂层向下比较
  - 若二义排序树非空：
    - 先将给定值与____的关键字比较
    - 若相等，则<span style="color: Gold;">search</span>____
    - 若不等：
      - ＜ ____的关键字，则在____的左子树上<span style="color: Gold;">search</span>
      - 否则在____的右子树上<span style="color: Gold;">search</span>

- 非递归<span style="color: Gold;">search</span>算法：

```c
BSTNode *BST  <span style="color: Gold;">search</span>(BiTree T,ElemType key)( 
  while(T!=NULL&&key  $!=$  ____){ 
    if（key<____）T=____；
    elseT=____; 
  }
  return____;  
```

- eg：
  - 在图7.4中<span style="color: Gold;">search</span>值为4的node
    - 首先4与根node____比较
      - 4 ＜ ____
        - 在根node____的左子树中继续<span style="color: Gold;">search</span>
      - 4 ＞ ____
        - 在node____的右子树中<span style="color: Gold;">search</span>
        - <span style="color: Gold;">search</span>____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根node</li>
    <li>

根node</li>
    <li>

成功</li>
    <li>

根node</li>
    <li>

根node</li>
    <li>

根node</li>
    <li>

T->data</li>
    <li>

T->data</li>
    <li>

T->lchild</li>
    <li>

T->rchild</li>
    <li>

T</li>
    <li>

6</li>
    <li>

6</li>
    <li>

6</li>
    <li>

2</li>
    <li>

2</li>
    <li>

成功</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: GreenYellow;"> <span style="color: GreenYellow;">插入</span>  

<ul>

- 特点：
  - 树的结构通常不是____生成的
  - 在<span style="color: Gold;">search</span>过程中，当树中不存在关键字值等于____的node时再进行____

- <span style="color: GreenYellow;">插入</span>过程：
  - 若原二义排序树为____，则直接____
  - 否则：
    - 关键字k ＜ ____值则____到左子树
    - 关键字k ＞ ____值则____到右子树
  - <span style="color: GreenYellow;">插入</span>的node一定是一个新添加的____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e89e6ea7f4ada4a4c481bc8b1e0ce1cafabd2e67868cbf3cc6ccf9d77c30fc9c.jpg)  
图7.5向二叉排序树中<span style="color: GreenYellow;">插入</span>node  

- <span style="color: GreenYellow;">插入</span>算法：

```c
int BST Insert（BiTree &T，KeyType k）(
  if（T==NULL)(
    T = (BiTree)malloc（sizeof（BSTNode));
    T->data = ____
    T->lchild = T->rchild = ____;
    return____;
  else if(k=____)
    return 0;
  else if(k<____)
    return BST Insert(____,k);
  else
    return BST Insert（____,k);
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一次</li>
    <li>

给定值</li>
    <li>

插入</li>
    <li>

空</li>
    <li>

插入</li>
    <li>

根node</li>
    <li>

插入</li>
    <li>

根node</li>
    <li>

插入</li>
    <li>

叶node</li>
    <li>

k</li>
    <li>

NULL</li>
    <li>

1</li>
    <li>

T->data</li>
    <li>

T->data</li>
    <li>

T->lchild</li>
    <li>

T->rchild</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: Lime;"><span style="color: Lime;">构造</span>  

<ul>

> pro: <span style="color: Lime;">构造</span>二叉排序树的过程（2020）  

- 过程：
  - from ____ <span style="color: GreenYellow;">出发
  - <u>依次</u> ____元素
  - insert 元素 to ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/359f08371aa754ac430fc9f29a85302372b2b4d9718c8e692c96b4d3a2472bf0.jpg)  
图7.6二叉排序树的<span style="color: Lime;">构造</span>过程  

- <span style="color: Lime;">构造</span>算法：

```c
void Creat BST（BiTree &T，KeyType str[],int n){
  T = ____;
  int i = ____
  while(i < n)
    BSTInsert(T,____);
```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空树</li>
    <li>

输入</li>
    <li>

合适位置</li>
    <li>

NULL</li>
    <li>

0</li>
    <li>

str[i]</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: gray;">删除  

<ul>

- 过程：
  - 不能
    - 把 以该node为<u>根</u> 的子树上的node 都____
  - 必须重新 
    - 链接断开的 ____<span style="color: RoyalBlue;">链</span>表
  - 确保
    - 二叉排序树的 ____不会丢失

- 情况：
  1. 被删除node是____：
     - 直接删除
  2. nodez只有一棵子树：
     - 让z的子树成为z____的子树
  3. nodez有左、右两棵子树：
     - 令z的____（或____）替代z
     - 从二叉排序树中删去这个____（或____）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/337a0835918349dc03e9c616897783190facdb482e06740c2ec450fd4cfe8a1b.jpg)  
3种情况下的删除过程  

> pro：二叉排序树中删除并<span style="color: GreenYellow;">插入</span>某node的分析（2013）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

删除</li>
    <li>

二叉</li>
    <li>

性质</li>
    <li>

叶node</li>
    <li>

父node</li>
    <li>

直接后继</li>
    <li>

直接前驱</li>
    <li>

直接后继</li>
    <li>

直接前驱</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"><span style="color: Gold;">search</span><span style="color: RoyalBlue;">效率</span>分析  

<ul>

- 影响因素：
  - main: 树的____
    - ____<span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
      - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度为____
    - 单支树：
      - ~ ____

- 最坏情况：
  - 输入序列
    - ____
  - 形成倾斜的 ____支树
  - 树的____ increase to ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54dd73fa59f89a754e5fd4e7dce8cf7124f8fa9db15eeeafeb8140073840c7bf.jpg)  
图7.8相同关键字组成的不同二叉排序树  

- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度比较：
  - 图7.8(a)：ASL = ____
  - 图7.8(b)：ASL = ____

- 与二分<span style="color: Gold;">search</span>比较：
  - <span style="color: LightSkyBlue;">平均</span>时间性能____
  - 二分<span style="color: Gold;">search</span>判定树____
  - 二叉排序树<span style="color: Gold;">search</span>____

- 维护表的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>性：
  - 二叉排序树：
    - 无须____node
    - 只需修改____
    - <span style="color: LightSkyBlue;">平均</span>执行时间____
  - 二分<span style="color: Gold;">search</span>：
    - 对象是____顺序表
    - ____删除操作代价____
  - 选择建议：
    - 静态<span style="color: Gold;">search</span>表：用____+二分<span style="color: Gold;">search</span>
    - 动态<span style="color: Gold;">search</span>表：用____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

平衡</li>
    <li>

O(log₂n)</li>
    <li>

O(n)</li>
    <li>

有序</li>
    <li>

单</li>
    <li>

高度</li>
    <li>

元素个数n</li>
    <li>

(1+2×2+3×4+4×3)/10 = 2.9</li>
    <li>

(1+2+3+4+5+6+7+8+9+10)/10 = 5.5</li>
    <li>

相似</li>
    <li>

唯一</li>
    <li>

不唯一</li>
    <li>

移动</li>
    <li>

指针</li>
    <li>

O(log₂n)</li>
    <li>

有序</li>
    <li>

插入</li>
    <li>

O(n)</li>
    <li>

顺序表</li>
    <li>

二叉排序树</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>  

<ul>

### <span style="color: silver;">定义  

<ul>

#### <span style="color: silver;">concept

<ul>

- 为了避免
  - 树的____增长过快
    - 降低二叉排序树的____
- 规定：
  - 任意node的左、右子树____的绝对值≤____
  - 这样的二叉树称为____（Balanced BinaryTree）或____树
- 平衡因子：
  - 定义为node左子树与右子树的____
  - 值只可能是____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的定义（2009）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

性能</li>
    <li>

高度差</li>
    <li>

1</li>
    <li>

平衡二叉树</li>
    <li>

AVL</li>
    <li>

高度差</li>
    <li>

-1、0或1</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: gray;">完整 <span style="color: silver;">定义

<ul>

- special: 一棵____
- 具有以下性质的二叉树：
  - 左子树和右子树都是____
  - 左子树和右子树的____的绝对值≤____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/42460a711e8a2a7bcbc0a975d83fd52c42972810cdf1ff0354c8c9d9ea7aa463.jpg)  
<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>和<span style="color: gray;">不</span>~  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空树</li>
    <li>

平衡二叉树</li>
    <li>

高度差</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: GreenYellow;">插入</span>  

<ul>

#### <span style="color: silver;">基本思想

<ul>

- <span style="color: GreenYellow;">插入</span>（或删除）node时：
  - 检查 ____路径上的node是否不平衡
  - 若不平衡：
    - 找到最近的平衡因子绝对值 ＞ ____的node____
    - 调整以____为根的子树
    - 保持____特性
    - 使之重新____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: GreenYellow;">插入</span>操作的特点（2015）  

>notice: 

每次调整的对象都是最小不平衡子树，即以<span style="color: GreenYellow;">插入</span>路径上离<span style="color: GreenYellow;">插入</span>node最近的平衡因子的绝对值 ＞ ____的node作为根的子树。图7.10中的虚线框内为最小不平衡子树。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2209bb6cb24b8548ca118f9d5f40aa8899f7ed2e20e83c7fe0c0621ee7b842db.jpg)  
图7.10最小不平衡子树示意  

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>及调整操作的实例（2010、2019、2021）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

1</li>
    <li>

A</li>
    <li>

A</li>
    <li>

二叉排序树</li>
    <li>

平衡</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

#### 调整规律

<ul>

##### LL平衡旋转（右单旋转）

<ul>

- 原因：在nodeA的左孩子(____)的左子树(____)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的平衡因子由____增至____
  - ____向右上旋转代替A成为根node
  - A向右下旋转成为____的右孩子
  - ____的原右子树作为A的左子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0b95eff2c046b43bb6a18bc9a41beacc9de133dbf00206769ee68eb40f6d13e7.jpg)  
图7.11LL平衡旋转  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L</li>
    <li>

L</li>
    <li>

1</li>
    <li>

2</li>
    <li>

B</li>
    <li>

B</li>
    <li>

B</li>
  </ul>
</details>
</div>

</ul>

##### RR平衡旋转（左单旋转）

<ul>

- 原因：在nodeA的右孩子(____)的右子树(____)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的平衡因子由____减至____
  - ____向左上旋转代替A成为根node
  - A向左下旋转成为____的左孩子
  - ____的原左子树作为A的右子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5619c6d8436c1be38b63d259dcc65e0d4dfdd684c7e61b46edda1f39de83300f.jpg)  
图7.12RR平衡旋转  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

R</li>
    <li>

R</li>
    <li>

-1</li>
    <li>

-2</li>
    <li>

B</li>
    <li>

B</li>
    <li>

B</li>
  </ul>
</details>
</div>

</ul>

##### LR平衡旋转（先左后右双旋转）

<ul>

- 原因：在A的左孩子(____)的右子树(____)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的平衡因子由____增至____
  - 先将____向左上旋转提升到____的位置
  - 再将____向右上旋转提升到____的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e7462a89cd7274f34abe2309c0d8eedb6ed3d046096c03916695558689e50a9f.jpg)  
图7.13LR平衡旋转  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L</li>
    <li>

R</li>
    <li>

1</li>
    <li>

2</li>
    <li>

C</li>
    <li>

B</li>
    <li>

C</li>
    <li>

A</li>
  </ul>
</details>
</div>

</ul>

##### RL平衡旋转（先右后左双旋转）

<ul>

- 原因：在A的右孩子(____)的左子树(____)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的平衡因子由____减至____
  - 先将____向右上旋转提升到____的位置
  - 再将____向左上旋转提升到____的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/044e9dac3e9118af06383caa4ab6770b19e9168a05e12eabac22b4702037505f.jpg)  
图7.14RL平衡旋转  

>notice: 

LR和RL旋转时，新node究竟是<span style="color: GreenYellow;">插入</span>C的左子树还是<span style="color: GreenYellow;">插入</span>C的右子树不影响旋转过程，而图7.13和图7.14中以<span style="color: GreenYellow;">插入</span>C的左子树中为例。  

> pro：<span style="color: Lime;">构造</span><span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的过程（2013）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

R</li>
    <li>

L</li>
    <li>

-1</li>
    <li>

-2</li>
    <li>

C</li>
    <li>

B</li>
    <li>

C</li>
    <li>

A</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: Lime;">构造</span>示例

<ul>

- 关键字序列：15，3，7，10，9，8
- 过程：
  - <span style="color: GreenYellow;">插入</span>____后：
    - 最小不平衡子树根为____
    - 执行____旋转
  - <span style="color: GreenYellow;">插入</span>____后：
    - 最小不平衡子树根为____
    - 执行____旋转
  - <span style="color: GreenYellow;">插入</span>____后：
    - 最小不平衡子树根为____
    - 执行____旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/093f0bfc9d39ea0cacad9cfef59f6edf59790e2ed7a6692f2ea8792f99c3b8bf.jpg)  
图7.15<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的生成过程  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

7</li>
    <li>

15</li>
    <li>

LR</li>
    <li>

9</li>
    <li>

15</li>
    <li>

LL</li>
    <li>

8</li>
    <li>

7</li>
    <li>

RL</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除  

<ul>

#### 删除步骤

<ul>

- 步骤1：用二叉排序树方法删除____
- 步骤2：若不平衡：
  - 从____向上回溯找第一个不平衡node____
  - ____为z的最高孩子node
  - ____为y的最高孩子node
- 步骤3：对以____为根的子树进行平衡调整：
  - LL情况：y是z____孩子，x是y____孩子
  - LR情况：y是z____孩子，x是y____孩子
  - RR情况：y是z____孩子，x是y____孩子
  - RL情况：y是z____孩子，x是y____孩子

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

nodew</li>
    <li>

w</li>
    <li>

z</li>
    <li>

y</li>
    <li>

x</li>
    <li>

z</li>
    <li>

左</li>
    <li>

左</li>
    <li>

左</li>
    <li>

右</li>
    <li>

右</li>
    <li>

右</li>
    <li>

右</li>
    <li>

左</li>
  </ul>
</details>
</div>

</ul>

#### 与<span style="color: GreenYellow;">插入</span>操作的区别

<ul>

- <span style="color: GreenYellow;">插入</span>操作：
  - 仅需对____为根的子树调整
- 删除操作：
  - 调整____为根的子树后
  - 若____减1，可能需要继续向上调整
  - 可能一直调整到____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

z</li>
    <li>

z</li>
    <li>

高度</li>
    <li>

根node</li>
  </ul>
</details>
</div>

</ul>

#### 删除示例

<ul>

- 以删除node____为例：
  - 32为____直接删除
  - 找到第一个不平衡node____(z)
  - ____为y，____为x
  - 满足____情况，执行先右后左双旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7583531b4059bdd4839026ef84e33d80a0e80d188229f9a181a9205146f44d1b.jpg)  
图7.16<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

32</li>
    <li>

叶node</li>
    <li>

44</li>
    <li>

78</li>
    <li>

50</li>
    <li>

RL</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>  

<ul>

命题追踪指定条件下<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的node数的分析（2012）  

#### <span style="color: Gold;">search</span>过程

<ul>

- 与____相同
- 比较次数≤____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉排序树</li>
    <li>

树的深度</li>
  </ul>
</details>
</div>

</ul>

#### node数分析

<ul>

- 深度为h的最少node数nh：
  - n0=____, n1=____, n2=____
  - nh=____+____+____
  - 推导：n3=____, n4=____, n5=____,...
- 含n个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
  - 最大深度为____
  - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>效率为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/05527187cb555c4a8c169a1c9bb747cea9d526708b08d8e44da08c7188104059.jpg)  
图7.17node个数n最少的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>  

>notice: 

该sum可用于求解给定node数的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>所需的最多比较次数（或树的最大____）。如在含有12个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: Gold;">search</span>某个node的最多比较次数？  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

1</li>
    <li>

2</li>
    <li>

nh-2</li>
    <li>

nh-1</li>
    <li>

1</li>
    <li>

4</li>
    <li>

7</li>
    <li>

12</li>
    <li>

O(log₂n)</li>
    <li>

O(log₂n)</li>
    <li>

高度</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">最多node数

<ul>

- 深度为h的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中含有的最多node数是____的情况

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

满二叉树</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>  

<ul>

### 定义  

<ul>

（此处内容未提供完整，暂不处理）

</ul>

</ul>

</ul>

---

以上内容严格按照要求进行了挖空处理，保留了原有目录结构，关键词、公式和关键步骤被替换为空缺，答案在折叠块中以HTML格式呈现。每个次级标题下的挖空答案均单独设置折叠块，且折叠块内容使用`<ul>`和`<li>`标签并空行缩进以支持Markdown公式渲染。由于“红黑树”部分内容未完整提供，暂未处理。

以下是按照要求对提供的Markdown文档进行挖空处理后的结果，包含Markdown和HTML折叠块格式。挖空的关键词、公式和关键步骤已在正文中用下划线（____）表示，并在每个次级标题下方以折叠块形式列出答案。目录结构保持不变，内容完整输出。

---

- 为了保持AVL树的____，在<span style="color: GreenYellow;">插入</span>和删除操作后，会非常频繁地调整全树整体拓扑结构代价较大
- 为此在AVL树的平衡标准上进一步放宽条件，引入了<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

平衡性</li>
    <li>

结构</li>
  </ul>
</details>
</div>

#### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span>性质

<ul>

- 每个node或是<span style="color: DarkRed;">红</span>色，或是<span style="color: black;">黑</span>色的
- 根node是____色的
- 叶node（虚构的外部node、NULLnode）都是____色的
- 不存在两个相邻的<span style="color: DarkRed;">红</span>node（即<span style="color: DarkRed;">红</span>node的父node和孩子node均是____色的）
- 对每个node，从该node到任意一个叶node的简单路径上，所含____node的数量相同
- 与折半<span style="color: Gold;">search</span>树和B树类似，为了便于对<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的实现和理解：
  - 引入了____个外部叶node
  - 以保证<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>中每个node（内部node）的左、右孩子均非空

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6302ead6b67560702595dc181ea237d148fcc79e5f41102d878fe7c0d83723be.jpg)  
图7.18一棵<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

n+1</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: black;">黑</span><span style="color: LightSkyBlue;">高</span>concept

<ul>

- 从某node出发（不含该node）到达一个叶node的任意一个简单路径上
  - 的____node____（记为bh）
- ____高的概念是由性质⑤确定的
- 根node的____高称为<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____高

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: gray;">总数</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

#### sum1：从根到叶node的最长路径不 ＞ 最短路径的____倍

<ul>

- 最短路径：全由____node构成
- 最长路径：由____node和____node相间构成，____node数量相同
- 例如图7.18中的6-2和6-15-18-20就是这样的两条路径

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

#### sum2：有n个内部node的<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: LightSkyBlue;">高度</span>h≤____

<ul>

- 证明过程：
  - 从根到叶node的任何路径至少一半是____node
  - 根的____高至少为h/2
  - 因此n≥____
  - 可得sum2结论

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2log2(n+1)</li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

2^(h/2)-1</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span> vs AVL树

<ul>

- 平衡程度比较：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>："____平衡"
  - AVL树："____平衡"
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>降低到"任意node左右子树____相差≤2倍"
- 应用场景：
  - ____删除少，____多：适合AVL树
  - 其他情况：适合____
- 实际应用：
  - ____应用更广泛
  - C++的map和set用____实现
  - Java的TreeMap和TreeSet用____实现

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

适度</li>
    <li>

<span style="color: LightSkyBlue;">高度</span></li>
    <li>

<span style="color: LightSkyBlue;">高度</span></li>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

<span style="color: Gold;">search</span></li>
    <li>

<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span></li>
    <li>

<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span></li>
    <li>

<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span></li>
    <li>

<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span></li>
  </ul>
</details>
</div>

</ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>

<ul>

#### 基本过程

<ul>

- 与二叉<span style="color: Gold;">search</span>树____类似
- 区别：<span style="color: GreenYellow;">插入</span>后需要调整以满足____性质
  - 通过____
  - 或____操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span></li>
    <li>

重新着色</li>
    <li>

旋转</li>
  </ul>
</details>
</div>

#### sum3：新<span style="color: GreenYellow;">插入</span>node初始着为____色

<ul>

- 原因分析：
  - 若着为____色：
    - 会导致路径多出一个____node
    - 破坏性质⑤
    - 调整麻烦
  - 着为____色：
    - 所有路径____node数量不变
    - 仅在出现连续____node时需调整
    - 调整较简单

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
  </ul>
</details>
</div>

#### <span style="color: GreenYellow;">插入</span>过程详述

<ul>

1. 基本<span style="color: GreenYellow;">插入</span>：
   - 用二叉<span style="color: Gold;">search</span>树____法
   - 将nodez着为____色
   - 若父node____色无需调整

2. 特殊情况处理：
   - 若z是根node：
     - 将z着为____色
     - 树的____高增1
   
3. 需要调整的情况：
   - 前提条件：
     - z不是根node
     - z的父nodez.p是____色
   - 分为三种情况：
     
     ##### 情况1：叔node____色且z是右孩子(LR)
     - 先____转换为情况2
     - z和父node交换位置
     - 不影响____高和性质④
     
     ##### 情况2：叔node____色且z是左孩子(LL)
     - 做一次____
     - 交换z原父node和原爷node颜色
     - 保持性质⑤
     - 消除连续____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6141fe894e84b2ccf481ee1228f8dde35deaefe9f7c1b34e6857aad4fded5586.jpg)  
图7.19情况1和情况2的调整方式  

     ##### 情况3：叔node是____色
     - 调整方式：
       - 父node和叔node着为____色
       - 爷node着为____色
       - 保持性质④和⑤
     - 循环处理：
       - 将爷node作为新z继续
       - 指针z上移两层

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f5ccc56ed08320a072e5b4dc2d9a90053800244c9efa93005dfc054cd43073d8.jpg)  
图7.20情况3的调整方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

左旋</li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

右旋</li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
  </ul>
</details>
</div>

#### <span style="color: GreenYellow;">插入</span>示例

<ul>

- 以图7.21为例，展示<span style="color: GreenYellow;">插入</span>5、4、12的过程：
  - <span style="color: GreenYellow;">插入</span>5：____处理
  - <span style="color: GreenYellow;">插入</span>4：____到____处理
  - <span style="color: GreenYellow;">插入</span>12：父node____色，无需调整

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/866a8fdbeb20f4f9f1017d2842fcadd4a0308566f5ba94047bdd131149297787.jpg)  
图7.21<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>过程  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

情况3</li>
    <li>

RL</li>
    <li>

RR</li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

</ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除

<ul>

#### 删除操作的影响

<ul>

- <span style="color: GreenYellow;">插入</span>操作易导致连续____node，破坏性质④
- 删除操作易造成____高变化，破坏性质⑤

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

#### 基本删除过程

<ul>

- 先执行二叉<span style="color: Gold;">search</span>树的____方法
- 两个孩子的情况：
  - 找____（或前驱）填补
  - 转换为删除____node
  - ____node至多一个孩子

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

删除</li>
    <li>

中序后继</li>
    <li>

后继</li>
    <li>

后继</li>
  </ul>
</details>
</div>

#### 删除情况分类

<ul>

##### 情况A：待删node只有一个子树

<ul>

- 两种可能：
  - 如图7.22所示
  - 子树必为____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cab26f5079edd0a6447893d1eae634ce7de3b9df2de6eabbb5a6359254c2e364.jpg)  
图7.22只有右子树或左子树的删除情况  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: DarkRed;">红</span></li>
  </ul>
</details>
</div>

##### 情况B：待删node无孩子

<ul>

- ____node：直接删除
- ____node：
  - 设待删node为y
  - x是替换node
  - 删除后路径____node减1
  - 将x视为____node处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

双<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

</ul>

#### 双<span style="color: black;">黑</span>node的处理

<ul>

##### 情况1：兄弟nodew为____色

<ul>

- 特点：
  - w有____色左右孩子和父node
- 处理：
  - 交换w和父node颜色
  - 对父node____
  - 转为情况2、3或4

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/60760335c4d8bc8941e363634d6e9120ff151d6b6f52818aa54fe7a239bac7ed.jpg)  
图7.23情况1的调整方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

左旋</li>
  </ul>
</details>
</div>

##### 情况2：w____色且右孩子____色(RR)

<ul>

- 处理：
  - 交换w和父node颜色
  - w右孩子着____
  - 父node____
  - x变单重____色

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0acf8e79a22ee8cdebb7c67323a375bbd51c9a6a9a72ff5305d1ec8bf75d6c37.jpg)  
图7.24情况2的调整方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

左旋</li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

##### 情况3：w____色，左____右____(RL)

<ul>

- 处理：
  - 交换w和左孩子颜色
  - 对w____
  - 转为情况2

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21ad3f76de9b3e1effcce1f8a03e3fcbb06283ab2c8c5ded905ca2ecfa56abc7.jpg)  
图7.25情况3的调整方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

右旋</li>
  </ul>
</details>
</div>

##### 情况4：w及其孩子都是____色

<ul>

- 处理：
  - 去掉x和w各一重____色
  - x变普通____色，w变____色
  - 父node增加一重____色
  - x上升一层继续循环

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f77f4733c0cffc561dc2e545e593ce2eb429d88b4703d725d26d24d9778e963.jpg)  
图7.26情况4的调整方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: black;">黑</span></li>
    <li>

<span style="color: DarkRed;">红</span></li>
    <li>

<span style="color: black;">黑</span></li>
  </ul>
</details>
</div>

</ul>

#### 删除示例

<ul>

- 以图7.27为例，展示删除5和15的过程：
  - 删除5：____到____
  - 删除15：____到____处理

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16b040213c28dc879ebf6aede317568cd287ae396fdf09e05e9949dcf6c67b0e.jpg)  
图7.27<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除过程  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

情况1</li>
    <li>

情况4</li>
    <li>

LR</li>
    <li>

LL</li>
  </ul>
</details>
</div>

</ul>

## B树和 $\mathbf{B}+$ 树  

<ul>

考研大纲对B树和$^{\mathrm{B+}}$树的要求各不相同，重点在于考查B树，不仅要求理解B树的____，还要求掌握B树的建立、____和删除操作，而对$^{\mathrm{B+}}$树则只考查____。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基本特点</li>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

concept</li>
  </ul>
</details>
</div>

### B树及其基本操作  

<ul>

所谓 $m$ 阶B树是所有node的平衡因子均等于____的 $m$ 路平衡<span style="color: Gold;">search</span>树。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
  </ul>
</details>
</div>

> pro：B树的定义和特点（2009）  

#### B树的定义特性

<ul>

- 一棵 $m$ 阶B树或为空树，或为满足如下特性的 $m$ 叉树：
  - 树中每个node至多有____棵子树，即至多有____个关键字
  - 若根node不是叶node，则至少有____棵子树，即至少有____个关键字
  - 除根node外的所有非叶node至少有____棵子树，即至少有____个关键字
  - 所有非叶node的结构如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/641123898fc54d168c81307aaa0f46a0aeb4dc3c39dc6bc0add67a795683e706.jpg)  

- 其中：
    - $K_{i}$ $(i=1,2,\cdots,n)$ 为node的关键字，且满足____
    - $P_{i}\,\,(i=0,\,1,\cdots,n)$ 为指向子树根node的____
    - 指针 $P_{i+1}$ 所指子树中所有node的关键字均____ $K_{i}$
    - $P_{i}$ 所指子树中所有node的关键字均____ $K_{i}$
    - $n~(\lceil m/2\rceil\!-\!1\!\leqslant\!n\!\leqslant\!m-1)$ 为node中____的个数
- 所有的叶node都出现在同一层次上，并且不带____

> pro：B树中关键字数和node数的分析（2013、2014、2018、2021）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$m$</li>
    <li>

$m-1$</li>
    <li>

2</li>
    <li>

1</li>
    <li>

$\lceil m/2\rceil$</li>
    <li>

$\lceil m/2\rceil_{-1}$</li>
    <li>

$K_{1}<K_{2}<\cdots<K_{n}$</li>
    <li>

指针</li>
    <li>

＜</li>
    <li>

＞</li>
    <li>

关键字</li>
    <li>

信息</li>
  </ul>
</details>
</div>

#### B树的性质分析

<ul>

- 以图7.28所示5阶B树为例：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3296559c5d2d7110e03f8b45bfcbf4ee8b8931f234697bbe0eba579683969db7.jpg)  

- 主要性质：
  - node的孩子个数等于该node中____个数加1
  - 根node特性：
    - 无关键字时无子树(____)
    - 有关键字时子树个数≥____
  - 非根非叶node特性：
    - 至少有____棵子树
    - 至少有____个关键字
    - 至多有____棵子树和____个关键字
  - 关键字排序特性：
    - 从左到右____<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>
    - 左侧子树关键字____当前关键字
    - 右侧子树关键字____当前关键字
  - 叶node特性：
    - 均在第____层
    - 代表查找____位置

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

空树</li>
    <li>

2</li>
    <li>

$\scriptstyle{m/2}\,=\,\left\lceil5/2\right\rceil=3$</li>
    <li>

2</li>
    <li>

5</li>
    <li>

4</li>
    <li>

递增</li>
    <li>

＜</li>
    <li>

＞</li>
    <li>

4</li>
    <li>

失败</li>
  </ul>
</details>
</div>

#### B树的查找

<ul>

- 基本特点：
  - 与二叉排序树____
  - 每个node包含____关键字
  - 进行____分支决定

##### 查找操作的两个基本步骤

<ul>

- 在B树中找node(____操作)
- 在node内找关键字(____操作)
  - 可用顺序查找或折半查找
  - 查找效率取决于目标node____数

</ul>

##### 查找过程

<ul>

- 从____node开始
- 在当前node<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>表中查找
- 根据比较结果选择____继续查找
- 直到找到目标或达到____node

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相似</li>
    <li>

多个</li>
    <li>

多路</li>
    <li>

磁盘</li>
    <li>

内存</li>
    <li>

层次</li>
    <li>

根</li>
    <li>

子树</li>
    <li>

叶</li>
  </ul>
</details>
</div>

#### B树的<span style="color: LightSkyBlue;">高度</span>分析

<ul>

##### <span style="color: LightSkyBlue;">高度</span>定义

<ul>

- 不包括最后不带信息的____node层

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

叶</li>
  </ul>
</details>
</div>

##### <span style="color: LightSkyBlue;">高度</span>范围分析

<ul>

- 最小<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node关键字数____
  - 满足：$n\!\leqslant\!(m-1)(1+m+m^{2}+\cdots+m^{h-1})=____$
  - 得到：$h\geqslant____$

- 最大<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node关键字数____
  - 层次node数分析：
    - 第一层：至少____个node
    - 第二层：至少____个node
    - 第三层：至少____个node
    - 第 $h+1$ 层：至少____个node
  - 满足：$n+1\!\geqslant\____$
  - 得到：$h{\leqslant}____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最多</li>
    <li>

$m^{h}-1$</li>
    <li>

$\log_{m}\left(n+1\right)$</li>
    <li>

最少</li>
    <li>

1</li>
    <li>

2</li>
    <li>

$2\left\lceil m/2\right\rceil$</li>
    <li>

$2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$\log_{\lceil m/2\rceil}((n+1)/2)+1$</li>
  </ul>
</details>
</div>

</ul>

#### B树的<span style="color: GreenYellow;">插入</span>操作

<ul>

> pro：通过<span style="color: GreenYellow;">插入</span>操作<span style="color: Lime;">构造</span>一棵初始为空的B树（2020）  

##### <span style="color: GreenYellow;">插入</span>过程

<ul>

- 定位阶段：
  - 使用B树____算法
  - 找到<span style="color: GreenYellow;">插入</span>的____node位置

- <span style="color: GreenYellow;">插入</span>阶段：
  - 关键字数限制：____
  - 两种情况：
    - <span style="color: GreenYellow;">插入</span>后关键字数 < m：直接____
    - <span style="color: GreenYellow;">插入</span>后关键字数 > m-1：需要____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

查找</li>
    <li>

终端</li>
    <li>

$[\lceil m/2\rceil\!-\!1,\,m\!-\!1]$</li>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

分裂</li>
  </ul>
</details>
</div>

##### node分裂方法

<ul>

- 基本步骤：
  - 创建新node
  - 从____位置分割关键字
  - 左部分保留在____node
  - 右部分移至____node
  - 中间关键字上移至____node
- 特殊情况：
  - 父node可能需要继续____
  - 分裂可能传播至____node
  - 可能导致树____增1

- 示例(m=3的B树)：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/80d65ed644ea63d8e94f85979f930603e6eb9b46bb9c910cd6cf03ad6c8bf748.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

中间</li>
    <li>

原</li>
    <li>

新</li>
    <li>

父</li>
    <li>

分裂</li>
    <li>

根</li>
    <li>

<span style="color: LightSkyBlue;">高度</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

### B树的删除  

<ul>

#### 删除操作概述

<ul>

- B树的删除操作与____操作类似，但更复杂
- 需确保删除后node关键字个数≥____
- 可能涉及node的"____"问题

> pro：B树的删除操作的实例（2012、2022）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: GreenYellow;">插入</span></li>
    <li>

m/2-1</li>
    <li>

合并</li>
  </ul>
</details>
</div>

#### 非终端node的删除处理

<ul>

- 当被删关键字k不在终端node时：
  - 可用k的____(k')或后继替代
    - 前驱：k左侧子树中"____"元素
    - 后继：k右侧子树中"____"元素
  - 然后删除k'
  - k'必定在____node中

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7238b2b80bcf193f427d7371143169091e88dc7e89de6a71f0c30816046d808c.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前驱</li>
    <li>

最右下</li>
    <li>

最左下</li>
    <li>

终端</li>
  </ul>
</details>
</div>

#### 终端node的删除情况

<ul>

##### 情况一：直接删除

<ul>

- 条件：删除前关键字个数 ≥ ____
- 操作：直接删去该____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈m/2⌉</li>
    <li>

关键字</li>
  </ul>
</details>
</div>

##### 情况二：借助兄弟node

<ul>

- 条件：
  - 删除前关键字个数 = ____
  - 相邻兄弟node关键字个数 ≥ ____
- 操作：调整该node、兄弟node及____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/215b6baf0ac411ac31105377425b16f9f12f9828b89f9a64b2c180cfee010990.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈m/2⌉-1</li>
    <li>

⌈m/2⌉</li>
    <li>

父</li>
  </ul>
</details>
</div>

##### 情况三：node合并

<ul>

- 条件：
  - 删除前关键字个数 = ____
  - 相邻兄弟node关键字个数 ≤ ____
- 操作：与兄弟node及____node关键字合并

> pro：非空B树的<span style="color: Gold;">search</span>、<span style="color: GreenYellow;">插入</span>、删除操作的特点（2023）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈m/2⌉-1</li>
    <li>

⌈m/2⌉-1</li>
    <li>

父</li>
  </ul>
</details>
</div>

</ul>

#### 合并后的处理

<ul>

- 双亲node为根node时：
  - 若关键字减至____，删除根node
  - 合并后新node成为____
- 双亲node非根node时：
  - 若关键字数减至____
  - 需与兄弟node调整或____
  - 重复直至符合B树要求

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

根</li>
    <li>

⌈m/2⌉-2</li>
    <li>

合并</li>
  </ul>
</details>
</div>

</ul>

### B+树的concept  

<ul>

> pro：B+树的应用场合（2017）  

#### B+树的定义条件

<ul>

- m阶B+树需满足：
  1. 分支node最多____棵子树
  2. node最小子树要求：
     - 非叶根node至少____棵
     - 其他分支node至少____棵
  3. 子树个数等于____个数
  4. 叶node特性：
     - 包含全部____
     - 包含____指针
     - 按大小顺序排列
     - 相邻叶node相互____
  5. 分支node特性：
     - 仅包含子node____关键字
     - 包含指向子node的____

> pro：B树和B+树的差异的分析（2016）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

m</li>
    <li>

两</li>
    <li>

⌈m/2⌉</li>
    <li>

关键字</li>
    <li>

关键字</li>
    <li>

记录</li>
    <li>

链接</li>
    <li>

最大</li>
    <li>

指针</li>
  </ul>
</details>
</div>

#### B+树与B树的主要差异

<ul>

##### 结构差异

<ul>

- 关键字与子树关系：
  - B+树：n个关键字对应____棵子树
  - B树：n个关键字对应____棵子树

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

n</li>
    <li>

n+1</li>
  </ul>
</details>
</div>

##### node特性差异

<ul>

- 关键字数量范围：
  - B+树：____≤n≤____
  - B树：____≤n≤____
- 关键字分布：
  - B+树：叶node包含____关键字
  - B树：关键字____出现

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈m/2⌉</li>
    <li>

m</li>
    <li>

⌈m/2⌉-1</li>
    <li>

m-1</li>
    <li>

全部</li>
    <li>

不重复</li>
  </ul>
</details>
</div>

##### 功能特性差异

<ul>

- node作用：
  - B+树：非叶node仅做____
  - B树：所有node既____又索引
- 链接结构：
  - B+树：叶node形成____
  - B树：node间____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/db9dc115f173d19c088aab329b4f42f2125e735f6d5222eacbec4640c3e2ffab.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

索引</li>
    <li>

存储</li>
    <li>

链表</li>
    <li>

独立</li>
  </ul>
</details>
</div>

</ul>

#### B+树的操作特点

<ul>

- 基本类似____
- <span style="color: Gold;">search</span>特点：
  - 总是遍历到____node
  - 路径：____node到叶node
  - 支持两种<span style="color: Gold;">search</span>方式：
    - ____<span style="color: Gold;">search</span>
    - ____<span style="color: Gold;">search</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

B树</li>
    <li>

叶</li>
    <li>

根</li>
    <li>

顺序</li>
    <li>

多路</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: RoyalBlue;">散列</span>（Hash）表  

<ul>

## <span style="color: silver;">concept

<ul>

### <span style="color: silver;">n.

<ul>

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>(哈希<span style="color: green;">函数</span>)
  - 定义：把<span style="color: Gold;">search</span>表中的关键字映射成对应____的<span style="color: green;">函数</span>
  - 表示：$\operatorname{Hash}(\ker)=____$
  - 地址类型：数组下标、____或内存地址等

- <span style="color: Gold;">冲突</span>
  - 定义：不同关键字映射到同一____
  - 同义词：发生<span style="color: Gold;">冲突</span>的____关键字
  - 处理：
    - 需设计良好的<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>减少____
    - 设计<span style="color: Gold;">冲突</span>____方法

- <span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>(哈希表)
  - 定义：根据关键字直接进行____的数据结构
  - 特点：建立关键字和____的直接映射
  - 性能：理想情况下<span style="color: Gold;">search</span>时间复杂度为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

地址</li>
    <li>

Addr</li>
    <li>

索引</li>
    <li>

地址</li>
    <li>

不同</li>
    <li>

<span style="color: Gold;">冲突</span></li>
    <li>

处理</li>
    <li>

访问</li>
    <li>

存储地址</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

### <span style="color: silver;"><span style="color: Lime;">构造</span>方法

<ul>

#### <span style="color: silver;"><span style="color: Lime;">构造</span>原则

<ul>

- 定义域必须包含全部____
- 地址分布应尽可能____
- 计算过程应尽量____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

均匀</li>
    <li>

简单</li>
  </ul>
</details>
</div>

#### 直接定址法

<ul>

- 方法：取关键字的____<span style="color: green;">函数</span>值为<span style="color: RoyalBlue;">散列</span>地址
- 优点：计算简单，无____
- 适用：关键字分布基本____的情况
- 缺点：关键字不连续时浪费____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性</li>
    <li>

<span style="color: Gold;">冲突</span></li>
    <li>

连续</li>
    <li>

空间</li>
  </ul>
</details>
</div>

#### 除留余数法

<ul>

- 方法：$H(\mathrm{kcy})=____$
- 要点：选择合适的p值
  - p不 ＞ ____
  - p最接近或等于m的____
- 目标：使关键字等概率映射到____地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\mathrm{kcy}\,\%\,p$</li>
    <li>

表长m</li>
    <li>

质数</li>
    <li>

任意</li>
  </ul>
</details>
</div>

#### 数字分析法

<ul>

- 适用：已知____集合
- 原理：
  - 分析r进制数各位上数码出现____
  - 选取分布均匀的位作为____地址
- 局限：更换关键字需重构____<span style="color: green;">函数</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

频率</li>
    <li>

<span style="color: RoyalBlue;">散列</span></li>
    <li>

<span style="color: RoyalBlue;">散列</span></li>
  </ul>
</details>
</div>

#### 平方取中法

<ul>

- 方法：取关键字平方值的____几位
- 特点：
  - <span style="color: RoyalBlue;">散列</span>地址与关键字____都相关
  - 地址分布较____
- 适用：关键字各位取值不均匀或____较小

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

中间</li>
    <li>

每位</li>
    <li>

均匀</li>
    <li>

位数</li>
  </ul>
</details>
</div>

#### 方法选择

<ul>

- 没有最优的____方法
- 需根据具体关键字集合情况____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

通用</li>
    <li>

选择</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">处理<span style="color: Gold;">冲突</span>的方法

<ul>

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>设计：
  - 任何<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>都无法完全避免____
  - 必须考虑<span style="color: Gold;">冲突</span>____方法

- <span style="color: Gold;">冲突</span>处理过程：
  - 为发生<span style="color: Gold;">冲突</span>的关键字寻找下一个"____"的Hash地址
  - 使用Hi表示第i次探测得到的____地址
  - 处理流程：
    - 若H1发生<span style="color: Gold;">冲突</span>，继续寻找____
    - 若H2仍<span style="color: Gold;">冲突</span>，继续寻找____
    - 以此类推，直到找到不发生<span style="color: Gold;">冲突</span>的____
    - Hk即为该关键字在表中的____地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: Gold;">冲突</span></li>
    <li>

处理</li>
    <li>

空</li>
    <li>

<span style="color: RoyalBlue;">散列</span></li>
    <li>

H2</li>
    <li>

H3</li>
    <li>

Hk</li>
    <li>

最终</li>
  </ul>
</details>
</div>

### 开放定址法

<ul>

- 开放定址法的含义：
  - 表中的空闲地址对以下两类表项开放：
    - ____表项
    - ____表项

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

同义词</li>
    <li>

非同义词</li>
  </ul>
</details>
</div>

#### 数学公式

<ul>

- 递推公式：$H_{i}\,{=}\,(H(\mathrm{kcy})+____)\,\%\,m$
  - H(key)为____<span style="color: green;">函数</span>
  - $i=1,2,\cdots,k$ $(k{\leqslant}____)$
  - $m$ 表示____<span style="color: gray;">表</span>表长
  - $d_{i}$ 为____序列

> pro：堆积现象导致的结果（2014）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$d_{i}$</li>
    <li>

<span style="color: RoyalBlue;">散列</span></li>
    <li>

$m-1$</li>
    <li>

<span style="color: RoyalBlue;">散列</span></li>
    <li>

增量</li>
  </ul>
</details>
</div>

#### 增量序列的四种取法

<ul>

##### 1. 线性探测法

<ul>

- 又称线性探测再<span style="color: RoyalBlue;">散列</span>法
- $d_{i}=____$
- 特点：
  - <span style="color: Gold;">冲突</span>发生时顺序查看____单元
  - 探测到表尾转到____
  - 未填满时一定能找到____单元
- 缺点：
  - 可能造成元素____
  - 降低<span style="color: Gold;">search</span>____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

1,2,\cdots,m-1</li>
    <li>

下一个</li>
    <li>

表首</li>
    <li>

空闲</li>
    <li>

堆积</li>
    <li>

效率</li>
  </ul>
</details>
</div>

##### 2. 平方探测法

<ul>

- 又称二次探测法
- $d_{i}=____$
- 条件：
  - $k{\leqslant}____$
  - 表长m必须是____的素数
- 优缺点：
  - 避免____问题
  - 不能探测所有单元，至少能探测____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$1^{2},-1^{2},2^{2},-2^{2},\cdots,k^{2},-k^{2}$</li>
    <li>

$m/2$</li>
    <li>

4k+3</li>
    <li>

堆积</li>
    <li>

一半</li>
  </ul>
</details>
</div>

##### 3. 双<span style="color: RoyalBlue;">散列</span>法

<ul>

- $d_{i}=____$
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：
  - $H_{i}\,{=}\,(H(\mathrm{kcy})+____)\:\%\:m$
  - 初始探测位置：$H_{0}\,{=}\,____\;\%\,m$
  - i为____次数，初始为0

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$i{\times}\mathrm{Hash}_{2}(\mathrm{ker})$</li>
    <li>

$i{\times}\mathrm{Hash}_{2}(\mathrm{kcy})$</li>
    <li>

$H(\mathrm{kcy})$</li>
    <li>

<span style="color: Gold;">冲突</span></li>
  </ul>
</details>
</div>

##### 4. 伪随机序列法

<ul>

- $d_{i}\!=$ ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

伪随机数序列</li>
  </ul>
</details>
</div>

</ul>

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>中删除部分元素后的<span style="color: Gold;">search</span>效率分析（2023）

> notice: 

- 开放定址法删除元素的注意事项：
  - 不能随便____删除表中已有元素
    - 原因：会截断其他____元素的查找路径
  - 删除方案：
    - 采用____删除方式
    - 具体做法：在要删除的元素位置做一个____标记
  - 副作用：
    - 多次删除后会造成____现象
      - 表面上：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>很满
      - 实际上：许多位置未被____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理</li>
    <li>

同义词</li>
    <li>

逻辑</li>
    <li>

删除</li>
    <li>

假满</li>
    <li>

利用</li>
  </ul>
</details>
</div>

</ul>

---

以上内容严格按照要求进行了挖空处理，保留了原文档的结构和完整性。挖空部分选择关键词、公式定理和关键步骤，答案在折叠块中以`<ul>`和`<li>`标签列出，确保Markdown公式渲染正确。

以下是按照要求处理后的 Markdown 和 HTML 格式内容，关键词、公式和关键步骤已挖空，答案置于折叠块中，且保持原有结构不变。

---

### <span style="color: silver;"><span style="color: gray;">拉</span><span style="color: RoyalBlue;">链</span>法

<ul>

- 又称____法、chaining
- 原理：
  - 同义词存储在____中
  - 链表由<span style="color: RoyalBlue;">散列</span>地址唯一标识
  - 头指针存放在<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>____单元
- 适用：
  - usually 进行<span style="color: GreenYellow;">插入</span>和____的情况

- eg
  - 已知条件：
    - 关键字序列：{19,14,23,01,68,20,84,27,55,11,10,79}
    - <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：H(key) = ____
    - 处理<span style="color: Gold;">冲突</span>方法：____
  - 建立的表结构：
    - 如图7.33所示
  - 练习建议：
    - 学完下节内容后
    - 可尝试计算该例的____查找长度ASL

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d1940764bbe5838b67ac8609d78335783a585aa5c7fc0cb6560c6e81692cd7da.jpg)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链接</li>
    <li>

线性链表</li>
    <li>

对应</li>
    <li>

删除</li>
    <li>

key % 13</li>
    <li>

拉链法</li>
    <li>

平均</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>及性能分析

<ul>

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的____及<span style="color: Gold;">search</span>效率的分析（2010、2018、2019）

#### <span style="color: Gold;">search</span>过程

<ul>

- 初始化：Addr $\smile$ ____ (key)
- 步骤：
  1. 检测地址Addr位置
     - 无记录：返回____
     - 有记录：比较key值
       - 相等：返回____
       - 不等：执行步骤2
  2. 计算下一<span style="color: RoyalBlue;">散列</span>____
     - 更新Addr
     - 返回步骤1

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

构造</li>
    <li>

Hash</li>
    <li>

失败</li>
    <li>

成功</li>
    <li>

地址</li>
  </ul>
</details>
</div>

</ul>

#### eg

<ul>

##### 示例数据

<ul>

- 关键字序列：{19,14,23,01,68,20,84,27,55,11,10,79}
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：H(key) = ____
- 处理方法：____探测

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/37af350f00080c15707906e376408f9d353587a88dd2c9322a9a8e4bad9e594b.jpg)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

key % 13</li>
    <li>

线性</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: Gold;">search</span>过程示例

<ul>

###### 值84的<span style="color: Gold;">search</span>

<ul>

1. 初始地址：H(84)=____
2. 第一次<span style="color: Gold;">冲突</span>：H₁=(6+1)%16=____
3. 第二次<span style="color: Gold;">冲突</span>：H₂=(6+2)%16=____
4. 结果：____，位置8

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

6</li>
    <li>

7</li>
    <li>

8</li>
    <li>

成功</li>
  </ul>
</details>
</div>

</ul>

###### 值38的<span style="color: Gold;">search</span>

<ul>

1. 初始地址：H(38)=____
2. 第一次<span style="color: Gold;">冲突</span>：H₁=(12+1)%16=____
3. 结果：____，L[13]为空

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

12</li>
    <li>

13</li>
    <li>

失败</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/becdbede030512e5e2ac3b81b756cc81d076a78bca8c20dbff207903db34e92a.jpg)

</ul>

</ul>

#### 性能分析

<ul>

##### <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度

<ul>

- ASL计算：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(1×6+2+3×3+4+9)/12=2.5</li>
  </ul>
</details>
</div>

</ul>

##### 影响因素

<ul>

> 影响<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span><span style="color: Gold;">search</span>效率的因素（2011、2022）

1. <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>
2. 处理<span style="color: Gold;">冲突</span>的____
3. ____因子
   - 定义：$\alpha\!=\frac{____}{<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>长度m}$
   - 特点：
     - ASL依赖于____而非n或m
     - α越大，<span style="color: Gold;">冲突</span>可能性____
     - α越小，<span style="color: Gold;">冲突</span>可能性____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

方法</li>
    <li>

装填</li>
    <li>

表中记录数n</li>
    <li>

α</li>
    <li>

越大</li>
    <li>

越小</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 归纳总结  

<ul>

##### <span style="color: LightSkyBlue;">平均</span>查找长度（ASL）计算

<ul>

- 核心考查点：求<span style="color: LightSkyBlue;">平均</span>____长度（ASL）
  - 用于度量各种查找算法的____
  - 基于查找结构
    - 由相同____的记录或node构成

###### 计算公式

<ul>

- 查找成功的ASL：AS $\mathrm{~L~}_{n\in i}=____$
- 查找失败的ASL：A $\backslash\mathrm{SL}_{\mathbb{F}^{n\mathbb{W}}}=____$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

查找</li>
    <li>

性能</li>
    <li>

数据类型</li>
    <li>

\sum_{i=1}^{n}p_{i}c_{i}</li>
    <li>

\sum_{j=0}^{n}q_{j}c_{j}</li>
  </ul>
</details>
</div>

</ul>

###### 参数说明

<ul>

- 已有数据元素：____个
- 查找成功情况
  - 每个元素查找概率：____
  - 数据比较次数：____
- 查找失败情况
  - 子集合元素查找概率：____
  - 数据比较次数：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

n</li>
    <li>

$p_{i}$</li>
    <li>

$c_{i}\ (i=1,2,\cdots,n)$</li>
    <li>

$q_{j}$</li>
    <li>

$c_{j}\ (j=0,\,1,\cdots,\,n)$</li>
  </ul>
</details>
</div>

</ul>

###### ASL考虑方式

<ul>

- 综合考虑
  - 条件：____
  - 元素查找概率相等时：____
- 分开考虑
  - 条件：____
  - 元素查找概率相等时：____
- 实际应用
  - 多采用____考虑
  - 原因：查找失败情况常被____
  - 注意：两种考虑方式计算结果不同，考试需仔细____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\sum_{i=1}^{n}p_{i}+\sum_{j=0}^{n}q_{j}=1$</li>
    <li>

$p_{i}=q_{j}=\frac{1}{2n+1}$</li>
    <li>

$\sum_{i=1}^{n}p_{i}=1\;,\;\;\sum_{j=0}^{n}q_{j}=1$</li>
    <li>

$p_{i}={\frac{1}{n}}\,,\;\;q_{j}={\frac{1}{n+1}}\,.$</li>
    <li>

分开</li>
    <li>

忽略</li>
    <li>

阅题</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

</span>

---

以上内容已按照要求完成挖空处理，关键词、公式和关键步骤被替换为空格，答案置于 `<details>` 折叠块中，使用 `<ul>` 和 `<li>` 标签，并确保 Markdown 内公式可正常渲染。原文档结构未改变，所有内容均完整输出。

