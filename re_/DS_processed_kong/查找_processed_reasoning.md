
# <span style="color: silver;">above

<ul>

## <span style="color: silver;">【考纲内容】

（一）<span style="color: Gold;">search</span>的____（二）____<span style="color: Gold;">search</span>法（三）____<span style="color: Gold;">search</span>法（四）____<span style="color: Gold;">search</span>法（五）____<span style="color: Gold;">search</span>（六）____树及其基本操作、$^{\mathrm{B+}}$树的____（七）<span style="color: RoyalBlue;">散列</span>（Hash）____（八）<span style="color: Gold;">search</span>算法的____及____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

concept</li>
    <li>

顺序</li>
    <li>

分块</li>
    <li>

折半</li>
    <li>

树形</li>
    <li>

B</li>
    <li>

concept</li>
    <li>

表</li>
    <li>

分析</li>
    <li>

应用</li>

  </ul>
</details>
</div>

</ul>

<ul>

## <span style="color: silver;">【知识框架】

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/04bba28557f8de0f60708124edff3cf56401157743f882b68284dea1f7097c04.jpg)

</ul>

<ul>

## <span style="color: silver;">【复习提示】

- 重点掌握的知识点：

  - 折半搜索：
    - 掌握折半搜索的____。
    - <span style="color: Lime;">构造</span>____树。
    - 分析<span style="color: LightSkyBlue;">平均</span>____长度。

  - 二叉排序树、二叉平衡树和<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>：
    - 了解它们的____、____和相关____。
    - B树和B+树是本章的____。

  - B树：
    - 掌握<span style="color: GreenYellow;">插入</span>、____和____的操作____。

  - B+树：
    - 了解其____和____。

  - <span style="color: RoyalBlue;">散列</span>搜索：
    - 掌握<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的<span style="color: Lime;">构造</span>。
    - 掌握<span style="color: Gold;">冲突</span>____方法及其____过程。
    - 掌握搜索____和搜索____的<span style="color: LightSkyBlue;">平均</span>____长度。
    - 掌握____搜索的____和____分析。

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

过程</li>
    <li>

判定</li>
    <li>

搜索</li>
    <li>

concept</li>
    <li>

性质</li>
    <li>

操作</li>
    <li>

难点</li>
    <li>

删除</li>
    <li>

搜索</li>
    <li>

过程</li>
    <li>

concept</li>
    <li>

性质</li>
    <li>

处理</li>
    <li>

处理</li>
    <li>

成功</li>
    <li>

失败</li>
    <li>

搜索</li>
    <li>

散列</li>
    <li>

特征</li>
    <li>

性能</li>

  </ul>
</details>
</div>

</ul>

# <span style="color: silver;">concept

<ul>

## <span style="color: silver;">基本定义

- <span style="color: Gold;">search</span>
  - 在数据集合中寻找____的数据元素的过程
  - 结果分为两种：
    - 查找____：找到满足条件的数据元素
    - <span style="color: Gold;">search</span>____

- <span style="color: Gold;">search</span>表
  - 定义：用于<span style="color: Gold;">search</span>的____，由同一类型的数据元素组成
  - 常见操作：
    - 查询____的数据元素
    - <span style="color: GreenYellow;">插入</span>、____数据元素

- 静态<span style="color: Gold;">search</span>表
  - 定义：只涉及____操作的表
  - 对应的动态<span style="color: Gold;">search</span>表：需要动态____或____的表
  - 适用方法：
    - 静态表：____<span style="color: Gold;">search</span>、____<span style="color: Gold;">search</span>、<span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>
    - 动态表：____<span style="color: Gold;">search</span>、<span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>

- 关键字
  - 定义：数据元素中____的数据项值
  - 特点：基于关键字的<span style="color: Gold;">search</span>结果应该是____

- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度
  - 定义：所有<span style="color: Gold;">search</span>过程中关键字____的<span style="color: LightSkyBlue;">平均</span>值
  - 数学表达式：____
  - 参数说明：
    - n：<span style="color: Gold;">search</span>表____
    - Pi：<span style="color: Gold;">search</span>第i个元素的____(通常Pi=1/n)
    - Ci：找到第i个元素所需____次数

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

满足某种条件</li>
    <li>

成功</li>
    <li>

失败</li>
    <li>

数据集合</li>
    <li>

符合条件</li>
    <li>

删除</li>
    <li>

search</li>
    <li>

插入</li>
    <li>

删除</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

二叉排序树</li>
    <li>

唯一标识该元素</li>
    <li>

唯一的</li>
    <li>

比较次数</li>
    <li>

$\mathrm{ASL}=\sum_{i=1}^{n}P_{i}C_{i}$</li>
    <li>

长度</li>
    <li>

概率</li>
    <li>

比较</li>

  </ul>
</details>
</div>

</ul>

# <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span> & <span style="color: Gold;">折</span><span style="color: gray;">半</span>~ & <span style="color: GreenYellow;">分块</span>~

<ul>

## <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span>~

<ul>

### <span style="color: silver;">concept

- 又称____<span style="color: Gold;">search</span>
- 适用范围：
  - <span style="color: LightSkyBlue;">顺序</span>表：通过____扫描
  - <span style="color: RoyalBlue;">链</span>表：通过____扫描

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性</li>
    <li>

数组下标递增</li>
    <li>

指针next</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">一般</span><span style="color: orange;">线性</span>表的顺序<span style="color: Gold;">search</span>

<ul>

#### <span style="color: silver;">基本思想

- from<span style="color: orange;">线性</span>表一<span style="color: LightSkyBlue;">端</span>开始逐个检查____
  - find<span style="color: GreenYellow;">满足</span>条件元素 → return____
- till表另一端not find → return____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

位置</li>
    <li>

失败</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: LightSkyBlue;">算法

```c
typedef struct{
    ElemType *elem;
    int TableLen;
}SSTable;

int <span style="color: Gold;">search</span>_Seq(SSTable ST,ElemType key){
    ST.elem[0]=____;
    for(int i=ST.TableLen;ST.elem[i]____key;--i);
    return i;
}
```

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

key</li>
    <li>

!=</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- <span style="color: Gold;">search</span>成功时<span style="color: LightSkyBlue;">平均</span>长度：
  - ____
  - 当Pi=1/n时：____
- ~失败时：ASL=____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\operatorname{ASL}_{\mathfrak{h}(n;i)}=\sum_{i=1}^{n}P_{i}(n-i+1)$</li>
    <li>

$\operatorname{PSL}_{n|k\rangle n|}{=}{\frac{n+1}{2}}$</li>
    <li>

n+1</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">优</span><span style="color: GreenYellow;">缺</span>点

- 缺点：n较大时____低
- 优点：
  - ____方式灵活
  - ____序要求
  - 适用于____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

效率</li>
    <li>

存储</li>
    <li>

无序</li>
    <li>

链表</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: GreenYellow;"><span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span></span><span style="color: orange;">线性</span>表的顺序<span style="color: Gold;">search</span>

<ul>

#### <span style="color: silver;">Feature

- 提前know表is<u>关键字____</u>
- False:
  - <span style="color: Gold;">search</span>失败时can<span style="color: GreenYellow;">提前</span>____
  - 可降低<span style="color: Gold;">search</span>失败的<span style="color: LightSkyBlue;"><span style="color: LightSkyBlue;">平均</span></span><span style="color: gray;">长度

> pro：<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>线性表的顺序<span style="color: Gold;">search</span>的应用（2013）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b9a556e5c788039f2fe0a08be26af8476e380c1fcd30a762adcbe9951bfa13c7.jpg)
↑<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>顺序表上的顺序查找判定树

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有序</li>
    <li>

返回</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- <span style="color: Gold;">search</span><span style="color: Gold;">成功</span>：same as____线性表
- <span style="color: Gold;">search</span><span style="color: GreenYellow;">失败</span>：
  - <span style="color: LightSkyBlue;">平均</span>长度：____
  - 当n=6时：ASL=____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一般</li>
    <li>

$\operatorname{ASL}_{\mathcal{K}:n\times l}=\!\!\sum_{j=1}^{n}q_{j}(l_{j}-1)\!=\!\frac{1\!+2\!+\!\cdots\!+n\!+\!n}{n\!+\!1}\!=\!\frac{n}{2}\!+\!\frac{n}{n\!+\!1}$</li>
    <li>

3.86</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;">attention

- 思想与<span style="color: Gold;">折</span><span style="color: gray;">半</span><span style="color: Gold;">search</span>____
  - <span style="color: RoyalBlue;">链</span>式____结构
  - 折半~only<span style="color: LightSkyBlue;">顺序</span>____结构

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不同</li>
    <li>

存储</li>
    <li>

存储</li>

  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

## <span style="color: Gold;">折</span><span style="color: gray;">半</span>~

<ul>

折半<span style="color: Gold;">search</span>又称____<span style="color: Gold;">search</span>，它仅适用于____的顺序表。

> pro：分析对比给定<span style="color: Gold;">search</span>算法与折半<span style="color: Gold;">search</span>的效率（2016）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二分</li>
    <li>

有序</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;">基本思想

- compare<span style="color: gray;">给</span><span style="color: GreenYellow;">定</span>值key with table____位置的元素
  - if =
    - <span style="color: Gold;">search</span>____
    - return该元素的____位置
  - elif ≠
    - →所需<span style="color: Gold;">search</span>的元素in
      - 中间元素以外的
      - <span style="color: LightSkyBlue;">前</span>半or<span style="color: GreenYellow;">后</span>半
<br>
  - eg
    - <span style="color: Gold;">search</span>表升序排列时
      - 若key＞中间元素
        - then所<span style="color: Gold;">search</span>的元素only might在<span style="color: GreenYellow;">后</span><span style="color: gray;">半</span>部分
        - 在缩小的<span style="color: gray;">范围</span>内go on同样的<span style="color: Gold;">search</span>
      - repeat the steps
        - till<span style="color: GreenYellow;">Find</span>
        - or ensure表中no所需要<span style="color: Gold;">search</span>的元素
          - 则<span style="color: Gold;">search</span>不____
          - return ____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

中间</li>
    <li>

成功</li>
    <li>

存储</li>
    <li>

成功</li>
    <li>

False</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: LightSkyBlue;">算法

```c
int Binary<span style="color: Gold;">search</span>(SSTable L,ElemType key){
    int low=0,high=L.TableLen-1,mid;
    while(low<=high){
        mid=____; //取中间位置
        if(L.elem[mid]`==key) return ____; // <span style="color: Gold;">search</span>成功则返回所在位置
        else if(L.elem[mid]`>key) high=____; //从前半部分继续<span style="color: Gold;">search</span>
        else low=____; //从后半部分继续<span style="color: Gold;">search</span>
    }
    return ____; // <span style="color: Gold;">search</span>失败，返回-1
}
```

<ul>

#### <span style="color: silver;">instruction

- 折半<span style="color: Gold;">search</span>算法select中间node时
  - 向↑____
  - ~↓~
- both can
  - but每次<span style="color: Gold;">search</span>的取整方式必须____

> pro：折半<span style="color: Gold;">search</span>的<span style="color: Gold;">search</span>路径的判断（2015）

</ul>

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

mid+1</li>
    <li>

-1</li>
    <li>

取整</li>
    <li>

相同</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;">eg

- 已知11个元素的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>表{7,10,13,16,19,29,32,33,37,41,43}
- <span style="color: Gold;">search</span>值为11的过程：
  - 第一次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<29，在____范围内继续<span style="color: Gold;">search</span>
  - 第二次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<13，在____范围内继续<span style="color: Gold;">search</span>
  - 第三次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11>7，在____范围内继续<span style="color: Gold;">search</span>
  - 第四次<span style="color: Gold;">search</span>
    - 子表只含一个元素____
    - 10≠11，<span style="color: Gold;">search</span>____

> pro：分析给定二叉树树形能否构成折半<span style="color: Gold;">search</span>____树（2017）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

29</li>
    <li>

[low,mid-1]</li>
    <li>

13</li>
    <li>

[low,mid-1]</li>
    <li>

7</li>
    <li>

[mid+1,high]</li>
    <li>

10</li>
    <li>

失败</li>
    <li>

判定</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: GreenYellow;">判定</span><span style="color: green;">树

- Feature：
  - node:
    - 每个圆形~express一个____
    - 最下面的叶~为____，表示<span style="color: Gold;">search</span>失败的____
    - 每个~值均＞其左子~值
      - 且＜其右子~值
    - n个元素对应n个圆形非叶~和____个方形叶~
  - is____<span style="color: Gold;">二叉</span><span style="color: green;">树</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3c13d8b6e09e2161cf91b26befcb36e69ca849ba58fb230483c6eaa214215f5.jpg)
↑描述折半查找过程的____树

> pro：折半<span style="color: Gold;">search</span>的最多____次数的分析（2010、2023）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

记录</li>
    <li>

方形</li>
    <li>

区间</li>
    <li>

n+1</li>
    <li>

平衡</li>
    <li>

判定</li>
    <li>

比较</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- 比较次数最多≤树的____
- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度：
  - ____
  - 时间复杂度为____
- 示例分析(图7.2)：
  - <span style="color: Gold;">search</span>成功ASL=____
  - <span style="color: Gold;">search</span>失败ASL=____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

$\mathrm{ASL}={\frac{1}{n}}\sum_{i=1}^{n}l_{i}={\frac{1}{n}}(1\times1+2\times2+\cdots+h\times2^{h-1})={\frac{n+1}{n}}\log_{2}(n+1)-1\approx\log_{2}(n+1)-1$</li>
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

<ul>

### <span style="color: silver;"><span style="color: gray;">conditions

- only____存储结构
- request元素按关键字____排列

</ul>

<ul>

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

<ul>

## <span style="color: silver;"><span style="color: GreenYellow;">分块</span>~

<ul>

- also called as____<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span>
- 顺序<span style="color: Gold;">search</span>和折半<span style="color: Gold;">search</span>各自的____
  - 既<span style="color: GreenYellow;">动态</span>____
  - 又<span style="color: RoyalBlue;">快速</span>____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

索引</li>
    <li>

优点</li>
    <li>

结构</li>
    <li>

search</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;">基本思想

- 将<span style="color: Gold;">search</span>表分为若干____
  - 块内
    - can____
  - 块间
    - 元素____
      - 第一个块中
        - max关键字＜第二个块中all recorded____
      - 第二个块中
        - max关键字＜第二个块中all recorded____
      - ...
      - 以此类推
- 建立____表
  - 包含各块____关键字和各块第一个元素____
  - 索引表按关键字____排列

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

子块</li>
    <li>

无序</li>
    <li>

有序</li>
    <li>

关键字</li>
    <li>

关键字</li>
    <li>

索引</li>
    <li>

最大</li>
    <li>

地址</li>
    <li>

有序</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">过程

- step1：在**索引表**中确定待查记录所在的____
  - 可以____~or____~索引表
- step2：在____内____<span style="color: Gold;">search</span>

</ul>

<ul>

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

<ul>

### <span style="color: silver;">eg

- 关键码集合：{88,24,72,61,21,6,32,11,8,31,22,83,78,54}
- 按关键码值24,54,78,88分为4个块和索引表

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/76ded7a7f7a5d8bfa95e7e4f016ef281090b1deb3b0fa15e348952f286083f80.jpg)

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- <span style="color: LightSkyBlue;"><span style="color: LightSkyBlue;">平均</span></span><span style="color: Gold;">search</span>长度
  - ASL = ____
    - L₁：索引<span style="color: Gold;">search</span><span style="color: LightSkyBlue;">平均</span>____
    - Ls：块内<span style="color: Gold;">search</span><span style="color: LightSkyBlue;">平均</span>____
- 均匀分块情况下
  - n长度表分为b块，每块s个记录
  - ASL = ____
  - 当s=____时，ASL最小，为____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L₁ + Ls</li>
    <li>

长度</li>
    <li>

长度</li>
    <li>

(b+1)/2 + (s+1)/2 = (s²+2s+n)/2s</li>
    <li>

√n</li>
    <li>

√n+1</li>

  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">优</span><span style="color: GreenYellow;">缺</span>点

- <span style="color: LightSkyBlue;">优</span>点：
  - 具有____结构
  - ____<span style="color: Gold;">search</span>
  - 块内<span style="color: Gold;">search</span>范围小，效率高于____<span style="color: Gold;">search</span>
- <span style="color: GreenYellow;">缺</span>点：
  - 索引表占用____存储空间
  - 索引<span style="color: Gold;">search</span>增加系统____

</ul>

<ul>

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

## <span style="color: silver;"><span style="color: Gold;">二叉</span><span style="color: GreenYellow;">排序</span><span style="color: green;">树</span>（BST）

Binary sort tree

- 目的：
  - 不是用于____
  - 是为了提高以下操作的____：
    - 关键字____
    - ~____
    - ~____
- 优势：
  - ____结构
  - 这种结构特别有利于：
    - ____
    - ____

<ul>

### <span style="color: silver;">定义

> pro：二叉排序树的应用（2013）

二叉排序树（也称二叉<span style="color: Gold;">search</span>树）或者是一棵____树，或者是具有下列____的二叉树：

- 若左子树非空，则左子树上所有node的值均＜____node的值
- 若右子树非空，则右子树上所有node的值均＞____node的值
- 左、右子树也分别是一棵____排序树

> pro：二叉排序树中node值之间的关系（2015、2018）

- 根据二叉排序树的定义:
  - 左子树node值＜____node值＜右子树node值
  - 对二叉排序树进行____遍历，可以得到一个____的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>序列
  - 例如，图7.4所示二叉排序树的中序遍历序列为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ce5699f8e763d0cb3b6dbd0974980ca0913f135c1e27622016155408d0e469aa.jpg)
图7.4一棵二叉排序树

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

排序</li>
    <li>

效率</li>
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

特性</li>
    <li>

根</li>
    <li>

根</li>
    <li>

二叉</li>
    <li>

根</li>
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

<ul>

### <span style="color: silver;">基本操作

<ul>

#### <span style="color: Gold;">search</span>

- 过程：
  - 从____node开始，沿某个分支遂层向下____
  - 若二义排序树非空：
    - 先将给定值与____node的关键字____
    - 若相等，则<span style="color: Gold;">search</span>____
    - 若不等：
      - ＜____node的关键字，则在____node的左子树上<span style="color: Gold;">search</span>
      - 否则在____node的右子树上<span style="color: Gold;">search</span>

- 非递归<span style="color: Gold;">search</span>算法：

```c
BSTNode *BST<span style="color: Gold;">search</span>(BiTree T,ElemType key)( 
    while(T!=NULL&&key ____ T->data){ 
      if（key<T->data）T=____；
      elseT=____; 
    }
    return____;  
```

- eg：
  - 在图7.4中<span style="color: Gold;">search</span>值为4的node
    - 首先4与根node____比较
      - 4＜6
        - 在根node6的____子树中继续<span style="color: Gold;">search</span>
      - 4＞2
        - 在node2的____子树中<span style="color: Gold;">search</span>
        - <span style="color: Gold;">search</span>____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

比较</li>
    <li>

根</li>
    <li>

比较</li>
    <li>

成功</li>
    <li>

根</li>
    <li>

根</li>
    <li>

根</li>
    <li>

!=</li>
    <li>

T->lchild</li>
    <li>

T->rchild</li>
    <li>

T</li>
    <li>

6</li>
    <li>

左</li>
    <li>

右</li>
    <li>

成功</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: GreenYellow;"><span style="color: GreenYellow;">插入</span>

- 特点：
  - 树的结构通常不是____生成的
  - 在<span style="color: Gold;">search</span>过程中，当树中不存在关键字值等于____值的node时再进行____

- <span style="color: GreenYellow;">插入</span>过程：
  - 若原二义排序树为____，则直接<span style="color: GreenYellow;">插入</span>
  - 否则：
    - 关键字k＜____node值则<span style="color: GreenYellow;">插入</span>到____子树
    - 关键字k＞____node值则<span style="color: GreenYellow;">插入</span>到____子树
  - <span style="color: GreenYellow;">插入</span>的node一定是一个新添加的____node

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
    return ____;
  else if(k<____)
    return BST Insert(____,k);
  else
    return BST Insert（____,k);
```

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一次</li>
    <li>

给定</li>
    <li>

插入</li>
    <li>

空</li>
    <li>

根</li>
    <li>

左</li>
    <li>

根</li>
    <li>

右</li>
    <li>

叶</li>
    <li>

k</li>
    <li>

NULL</li>
    <li>

1</li>
    <li>

T->data</li>
    <li>

0</li>
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

<ul>

#### <span style="color: Lime;"><span style="color: Lime;">构造</span>

> pro: <span style="color: Lime;">构造</span>二叉排序树的过程（2020）

- 过程：
  - from____树<span style="color: GreenYellow;">出发
  - <u>依次</u><span style="color: gray;">输入</span>____
  - insert元素to____位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/359f08371aa754ac430fc9f29a85302372b2b4d9718c8e692c96b4d3a2472bf0.jpg)
图7.6二叉排序树的<span style="color: Lime;">构造</span>过程

- <span style="color: Lime;">构造</span>算法：

```c
void Creat BST（BiTree &T，KeyType str[]`,int n){
    T = ____;
    int i = ____
    while(i < n)
      BSTInsert(T,____);
```

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空</li>
    <li>

元素</li>
    <li>

合适</li>
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

<ul>

#### <span style="color: gray;">删除

- 过程：
  - 不能
    - 把以该node为<u>____</u>的子树上的node都册除
  - 必须重新
    - 链接断开的____<span style="color: RoyalBlue;">链</span>表
  - 确保
    - 二叉排序树的____不会丢失

- 情况：
  1. 被删除node是____node：
     - ____删除
  2. nodez只有一棵子树：
     - 让z的子树成为z____node的子树
  3. nodez有左、右两棵子树：
     - 令z的____后继（或____前驱）替代z
     - 从二叉排序树中删去这个____后继（或____前驱）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/337a0835918349dc03e9c616897783190facdb482e06740c2ec450fd4cfe8a1b.jpg)
3种情况下的删除过程

> pro：二叉排序树中删除并<span style="color: GreenYellow;">插入</span>某node的分析（2013）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

二叉</li>
    <li>

性质</li>
    <li>

叶</li>
    <li>

直接</li>
    <li>

父</li>
    <li>

直接</li>
    <li>

直接</li>
    <li>

直接</li>
    <li>

直接</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">search</span><span style="color: RoyalBlue;">效率</span>分析

- 影响因素：
  - main:树的____
    - <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
      - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度为____
    - 单支树：
      - ~____

- 最坏情况：
  - 输入序列
    - ____
  - 形成倾斜的____支树
  - 树的____increase to元素个数n

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54dd73fa59f89a754e5fd4e7dce8cf7124f8fa9db15eeeafeb8140073840c7bf.jpg)
图7.8相同关键字组成的不同二叉排序树

- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度比较：
  - 图7.8(a)：ASL=____
  - 图7.8(b)：ASL=____

- 与二分<span style="color: Gold;">search</span>比较：
  - <span style="color: LightSkyBlue;">平均</span>时间____相似
  - 二分<span style="color: Gold;">search</span>____树唯一
  - 二叉排序树<span style="color: Gold;">search</span>____

- 维护表的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>性：
  - 二叉排序树：
    - 无须移动____
    - 只需修改____
    - <span style="color: LightSkyBlue;">平均</span>执行时间____
  - 二分<span style="color: Gold;">search</span>：
    - 对象是____<span style="color: LightSkyBlue;">序</span>顺序表
    - <span style="color: GreenYellow;">插入</span>删除操作____O(n)
  - 选择建议：
    - 静态<span style="color: Gold;">search</span>表：用____表+二分<span style="color: Gold;">search</span>
    - 动态<span style="color: Gold;">search</span>表：用____排序树

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
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

(1+2×2+3×4+4×3)/10=2.9</li>
    <li>

(1+2+3+4+5+6+7+8+9+10)/10=5.5</li>
    <li>

性能</li>
    <li>

判定</li>
    <li>

不唯一</li>
    <li>

node</li>
    <li>

指针</li>
    <li>

O(log₂n)</li>
    <li>

有序</li>
    <li>

代价</li>
    <li>

顺序</li>
    <li>

二叉</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

## <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

<ul>

### <span style="color: silver;">定义

<ul>

#### <span style="color: silver;">concept

- 为了避免
  - 树的____增长过快
    - 降低二叉排序树的____
- 规定：
  - 任意node的左、右子树____<span style="color: Gold;">差</span>的绝对值____
  - 这样的二叉树称为____<span style="color: Gold;">二叉</span><span style="color: green;">树</span>（Balanced BinaryTree）或____树
- 平衡因子：
  - 定义为node左子树与右子树的____<span style="color: Gold;">差</span>
  - 值只可能是____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的定义（2009）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

性能</li>
    <li>

高度</li>
    <li>

≤1</li>
    <li>

平衡</li>
    <li>

AVL</li>
    <li>

高度</li>
    <li>

-1、0或1</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: gray;">完整<span style="color: silver;">定义

- special:一棵____树
- 具有以下____的二叉树：
  - 左子树和右子树都是____<span style="color: Gold;">二叉</span><span style="color: green;">树</span>
  - 左子树和右子树的____<span style="color: Gold;">差</span>的绝对值____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/42460a711e8a2a7bcbc0a975d83fd52c42972810cdf1ff0354c8c9d9ea7aa463.jpg)
<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>和<span style="color: gray;">不</span>~

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空</li>
    <li>

性质</li>
    <li>

平衡</li>
    <li>

高度</li>
    <li>

≤1</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: GreenYellow;">插入</span>

<ul>

#### <span style="color: silver;">基本思想

- <span style="color: GreenYellow;">插入</span>（或____）node时：
  - 检查<span style="color: GreenYellow;">插入</span>路径上的node是否____
  - 若不平衡：
    - 找到最近的____因子绝对值＞1的nodeA
    - 调整以A为____的子树
    - 保持二叉排序树____
    - 使之重新____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: GreenYellow;">插入</span>操作的特点（2015）

> notice:

每次调整的对象都是____不平衡子树，即以<span style="color: GreenYellow;">插入</span>路径上离<span style="color: GreenYellow;">插入</span>node最近的____因子的绝对值＞1的node作为____的子树。图7.10中的虚线框内为____不平衡子树。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2209bb6cb24b8548ca118f9d5f40aa8899f7ed2e20e83c7fe0c0621ee7b842db.jpg)
图7.10____不平衡子树示意

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>及____操作的实例（2010、2019、2021）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

删除</li>
    <li>

不平衡</li>
    <li>

平衡</li>
    <li>

根</li>
    <li>

特性</li>
    <li>

平衡</li>
    <li>

最小</li>
    <li>

平衡</li>
    <li>

根</li>
    <li>

最小</li>
    <li>

调整</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 调整规律

<ul>

##### LL平衡旋转（____单旋转）

- 原因：在nodeA的左孩子(L)的左子树(L)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的____因子由1增至2
  - B向____旋转代替A成为____node
  - A向____旋转成为B的____孩子
  - B的原____子树作为A的____子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0b95eff2c046b43bb6a18bc9a41beacc9de133dbf00206769ee68eb40f6d13e7.jpg)
图7.11LL平衡旋转

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

右</li>
    <li>

平衡</li>
    <li>

右上</li>
    <li>

根</li>
    <li>

右下</li>
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

<ul>

##### RR平衡旋转（____单旋转）

- 原因：在nodeA的右孩子(R)的右子树(R)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的____因子由-1减至-2
  - B向____旋转代替A成为____node
  - A向____旋转成为B的____孩子
  - B的原____子树作为A的____子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5619c6d8436c1be38b63d259dcc65e0d4dfdd684c7e61b46edda1f39de83300f.jpg)
图7.12RR平衡旋转

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

左</li>
    <li>

平衡</li>
    <li>

左上</li>
    <li>

根</li>
    <li>

左下</li>
    <li>

左</li>
    <li>

左</li>
    <li>

右</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### LR平衡旋转（先____后____双旋转）

- 原因：在A的左孩子(L)的右子树(R)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的____因子由1增至2
  - 先将C向____旋转提升到____的位置
  - 再将C向____旋转提升到____的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e7462a89cd7274f34abe2309c0d8eedb6ed3d046096c03916695558689e50a9f.jpg)
图7.13LR平衡旋转

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

左</li>
    <li>

右</li>
    <li>

平衡</li>
    <li>

左上</li>
    <li>

B</li>
    <li>

右上</li>
    <li>

A</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### RL平衡旋转（先____后____双旋转）

- 原因：在A的右孩子(R)的左子树(L)上<span style="color: GreenYellow;">插入</span>新node
- 过程：
  - A的____因子由-1减至-2
  - 先将C向____旋转提升到____的位置
  - 再将C向____旋转提升到____的位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/044e9dac3e9118af06383caa4ab6770b19e9168a05e12eabac22b4702037505f.jpg)
图7.14RL平衡旋转

> notice:

LR和RL旋转时，新node究竟是<span style="color: GreenYellow;">插入</span>C的____子树还是<span style="color: GreenYellow;">插入</span>C的____子树不影响旋转过程，而图7.13和图7.14中以<span style="color: GreenYellow;">插入</span>C的左子树中为例。

> pro：<span style="color: Lime;">构造</span><span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的过程（2013）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

右</li>
    <li>

左</li>
    <li>

平衡</li>
    <li>

右上</li>
    <li>

B</li>
    <li>

左上</li>
    <li>

A</li>
    <li>

左</li>
    <li>

右</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: Lime;">构造</span>示例

- 关键字序列：15，3，7，10，9，8
- 过程：
  - <span style="color: GreenYellow;">插入</span>7后：
    - 最小不平衡子树____为15
    - 执行____旋转
  - <span style="color: GreenYellow;">插入</span>9后：
    - 最小不平衡子树____为15
    - 执行____旋转
  - <span style="color: GreenYellow;">插入</span>8后：
    - 最小不平衡子树____为7
    - 执行____旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/093f0bfc9d39ea0cacad9cfef59f6edf59790e2ed7a6692f2ea8792f99c3b8bf.jpg)
图7.15<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的生成过程

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

LR</li>
    <li>

根</li>
    <li>

LL</li>
    <li>

根</li>
    <li>

RL</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除

<ul>

#### 删除步骤

- 步骤1：用二叉排序树方法删除____w
- 步骤2：若不____：
  - 从w向上回溯找第一个不____nodez
  - y为z的最高____node
  - x为y的最高____node
- 步骤3：对以z为____的子树进行平衡____：
  - LL情况：y是z____孩子，x是y____孩子
  - LR情况：y是z____孩子，x是y____孩子
  - RR情况：y是z____孩子，x是y____孩子
  - RL情况：y是z____孩子，x是y____孩子

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

node</li>
    <li>

平衡</li>
    <li>

平衡</li>
    <li>

孩子</li>
    <li>

孩子</li>
    <li>

根</li>
    <li>

调整</li>
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

<ul>

#### 与<span style="color: GreenYellow;">插入</span>操作的区别

- <span style="color: GreenYellow;">插入</span>操作：
  - 仅需对z为____的子树____
- 删除操作：
  - ____z为根的子树后
  - 若<span style="color: LightSkyBlue;">高度</span>减1，可能需要继续____调整
  - 可能一直调整到____node

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

调整</li>
    <li>

调整</li>
    <li>

向上</li>
    <li>

根</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 删除示例

- 以删除node32为例：
  - 32为____node直接删除
  - 找到第一个不平衡node____(z)
  - ____为y，____为x
  - 满足____情况，执行先____后____双旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7583531b4059bdd4839026ef84e33d80a0e80d188229f9a181a9205146f44d1b.jpg)
图7.16<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的删除

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

叶</li>
    <li>

44</li>
    <li>

78</li>
    <li>

50</li>
    <li>

RL</li>
    <li>

右</li>
    <li>

左</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>

命题追踪指定条件下<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的node数的分析（2012）

<ul>

#### <span style="color: Gold;">search</span>过程

- 与____排序树相同
- 比较次数≤树的____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉</li>
    <li>

深度</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### node数分析

- 深度为h的最少node数____：
  - n0=0, n1=1, n2=2
  - nh=____
  - 推导：n3=4, n4=7, n5=12,...
- 含n个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
  - 最大____为____
  - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>____为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/05527187cb555c4a8c169a1c9bb747cea9d526708b08d8e44da08c7188104059.jpg)
图7.17node个数n最少的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

> notice:

该sum可用于求解给定node数的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>所需的最多____次数（或树的最大____）。如在含有12个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: Gold;">search</span>某个node的最多____次数？

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

nh</li>
    <li>

nh-2+nh-1+1</li>
    <li>

深度</li>
    <li>

O(log2n)</li>
    <li>

效率</li>
    <li>

O(log2n)</li>
    <li>

比较</li>
    <li>

高度</li>
    <li>

比较</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;">最多node数

- 深度为h的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中含有的最多node数是____二叉树的情况

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

满</li>

  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

## <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>

<ul>

### 定义

<ul>

#### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span>性质

- 每个node或是<span style="color: DarkRed;">红</span>色，或是____色的
- 根node是____色的
- 叶node（虚构的外部node、____node）都是____色的
- 不存在两个相邻的<span style="color: DarkRed;">红</span>node（即<span style="color: DarkRed;">红</span>node的____node和____node均是____色的）
- 对每个node，从该node到任意一个叶node的简单路径上，所含____node的数量____
- 与折半<span style="color: Gold;">search</span>树和B树类似，为了便于对<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的实现和理解：
  - 引入了____个外部叶node
  - 以保证<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>中每个node（内部node）的左、右孩子均____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6302ead6b67560702595dc181ea237d148fcc79e5f41102d878fe7c0d83723be.jpg)
图7.18一棵<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑色</li>
    <li>

黑色</li>
    <li>

NULL</li>
    <li>

黑色</li>
    <li>

父</li>
    <li>

孩子</li>
    <li>

黑色</li>
    <li>

黑色</li>
    <li>

相同</li>
    <li>

n+1</li>
    <li>

非空</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: black;">黑</span><span style="color: LightSkyBlue;">高</span>concept

- 从某node出发（不含该node）到达一个叶node的任意一个简单路径上
  - 的<span style="color: black;">黑</span>node<span style="color: gray;">总数</span>（记为____）
- <span style="color: black;">黑</span>高的concept是由性质____确定的
- 根node的<span style="color: black;">黑</span>高称为<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____高

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

bh</li>
    <li>

⑤</li>
    <li>

黑</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### sum1：从根到叶node的最长路径不＞最短路径的____倍

- 最短路径：全由____node构成
- 最长路径：由____node和____node相间构成，____<span style="color: black;">黑</span>node数量____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
    <li>

黑色</li>
    <li>

黑色</li>
    <li>

红色</li>
    <li>

红</li>
    <li>

相同</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### sum2：有n个内部node的<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: LightSkyBlue;">高度</span>h≤____

- 证明过程：
  - 从根到叶node的任何路径至少____是<span style="color: black;">黑</span>node
  - 根的<span style="color: black;">黑</span>高至少为____
  - 因此n≥____
  - 可得sum2结论

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2log2(n+1)</li>
    <li>

一半</li>
    <li>

h/2</li>
    <li>

2^(h/2)-1</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span> vs AVL树

- 平衡程度比较：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>："____平衡"
  - AVL树："____平衡"
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>降低到"任意node左右子树____相差≤____倍"
- 应用场景：
  - <span style="color: GreenYellow;">插入</span>删除少，<span style="color: Gold;">search</span>多：适合____树
  - 其他情况：适合____<span style="color: black;">黑</span><span style="color: green;">树</span>
- 实际应用：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>应用更____
  - C++的____和____用<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>实现
  - Java的____和____用<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>实现

</ul>

<ul>

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

2</li>
    <li>

AVL</li>
    <li>

红</li>
    <li>

广泛</li>
    <li>

map</li>
    <li>

set</li>
    <li>

TreeMap</li>
    <li>

TreeSet</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>

<ul>

#### 基本过程

- 与____<span style="color: Gold;">search</span>树<span style="color: GreenYellow;">插入</span>类似
- 区别：<span style="color: GreenYellow;">插入</span>后需要____以满足<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>____
  - 通过重新____
  - 或____操作

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉</li>
    <li>

调整</li>
    <li>

性质</li>
    <li>

着色</li>
    <li>

旋转</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### sum3：新<span style="color: GreenYellow;">插入</span>node初始着为____色

- 原因分析：
  - 若着为<span style="color: black;">黑</span>色：
    - 会导致路径多出一个____node
    - 破坏性质____
    - 调整____
  - 着为<span style="color: DarkRed;">红</span>色：
    - 所有路径____node数量____
    - 仅在出现____<span style="color: DarkRed;">红</span>node时需____
    - ____较简单

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑色</li>
    <li>

⑤</li>
    <li>

麻烦</li>
    <li>

黑色</li>
    <li>

不变</li>
    <li>

连续</li>
    <li>

调整</li>
    <li>

调整</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: GreenYellow;">插入</span>过程详述

1. 基本<span style="color: GreenYellow;">插入</span>：
   - 用二叉<span style="color: Gold;">search</span>树<span style="color: GreenYellow;">插入</span>法
   - 将nodez着为____色
   - 若父node____色无需____

2. 特殊情况处理：
   - 若z是____node：
     - 将z着为____色
     - 树的____高增1
   
3. 需要调整的情况：
   - 前提条件：
     - z不是____node
     - z的父nodez.p是____色
   - 分为三种情况：
     
     ##### 情况1：叔node____色且z是右孩子(LR)
     - 先____旋转换为情况2
     - z和____node交换位置
     - 不影响____高和性质④
     
     ##### 情况2：叔node____色且z是左孩子(LL)
     - 做一次____旋
     - 交换z原____node和原____node颜色
     - 保持性质____
     - 消除____<span style="color: DarkRed;">红</span>node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6141fe894e84b2ccf481ee1228f8dde35deaefe9f7c1b34e6857aad4fded5586.jpg)
图7.19情况1和情况2的调整方式

     ##### 情况3：叔node是____色
     - 调整方式：
       - ____node和____node着为____色
       - ____node着为____色
       - 保持性质____和____
     - 循环处理：
       - 将____node作为新z继续
       - 指针z上移____层

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f5ccc56ed08320a072e5b4dc2d9a90053800244c9efa93005dfc054cd43073d8.jpg)
图7.20情况3的调整方式

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑色</li>
    <li>

调整</li>
    <li>

根</li>
    <li>

黑色</li>
    <li>

黑</li>
    <li>

根</li>
    <li>

红</li>
    <li>

黑色</li>
    <li>

左</li>
    <li>

父</li>
    <li>

黑</li>
    <li>

黑色</li>
    <li>

右</li>
    <li>

父</li>
    <li>

爷</li>
    <li>

⑤</li>
    <li>

连续</li>
    <li>

红</li>
    <li>

父</li>
    <li>

叔</li>
    <li>

黑色</li>
    <li>

爷</li>
    <li>

红</li>
    <li>

④</li>
    <li>

⑤</li>
    <li>

爷</li>
    <li>

两</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: GreenYellow;">插入</span>示例

- 以图7.21为例，展示<span style="color: GreenYellow;">插入</span>5、4、12的过程：
  - <span style="color: GreenYellow;">插入</span>5：____处理
  - <span style="color: GreenYellow;">插入</span>4：____到____处理
  - <span style="color: GreenYellow;">插入</span>12：父node____色，无需____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/866a8fdbeb20f4f9f1017d2842fcadd4a0308566f5ba94047bdd131149297787.jpg)
图7.21<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>过程

</ul>

<ul>

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

黑色</li>
    <li>

调整</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除

<ul>

#### 删除操作的影响

- <span style="color: GreenYellow;">插入</span>操作易导致____<span style="color: DarkRed;">红</span>node，破坏性质____
- 删除操作易造成____高变化，破坏性质____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连续</li>
    <li>

④</li>
    <li>

黑</li>
    <li>

⑤</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 基本删除过程

- 先执行二叉<span style="color: Gold;">search</span>树的____方法
- 两个孩子的情况：
  - 找____后继（或____）填补
  - 转换为删除____node
  - 后继node至多____孩子

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

删除</li>
    <li>

中序</li>
    <li>

前驱</li>
    <li>

后继</li>
    <li>

一个</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 删除情况分类

<ul>

##### 情况A：待删node只有____子树

- 两种可能：
  - 如图7.22所示
  - 子树必为____色node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cab26f5079edd0a6447893d1eae634ce7de3b9df2de6eabbb5a6359254c2e364.jpg)
图7.22只有右子树或左子树的删除情况

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一个</li>
    <li>

红</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况B：待删node无____

- <span style="color: DarkRed;">红</span>色node：____删除
- <span style="color: black;">黑</span>色node：
  - 设待删node为____
  - ____是替换node
  - 删除后路径____node减1
  - 将____视为双____node处理

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

孩子</li>
    <li>

直接</li>
    <li>

y</li>
    <li>

x</li>
    <li>

黑色</li>
    <li>

x</li>
    <li>

黑</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 双<span style="color: black;">黑</span>node的处理

<ul>

##### 情况1：兄弟nodew为____色

- 特点：
  - w有____色左右孩子和____node
- 处理：
  - 交换w和____node颜色
  - 对____node____旋
  - 转为情况____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/60760335c4d8bc8941e363634d6e9120ff151d6b6f52818aa54fe7a239bac7ed.jpg)
图7.23情况1的调整方式

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑色</li>
    <li>

父</li>
    <li>

父</li>
    <li>

父</li>
    <li>

左</li>
    <li>

2、3或4</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况2：w____色且右孩子____色(RR)

- 处理：
  - 交换w和____node颜色
  - w右孩子着____
  - ____node____旋
  - x变单重____色

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0acf8e79a22ee8cdebb7c67323a375bbd51c9a6a9a72ff5305d1ec8bf75d6c37.jpg)
图7.24情况2的调整方式

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑色</li>
    <li>

红</li>
    <li>

父</li>
    <li>

黑</li>
    <li>

父</li>
    <li>

左</li>
    <li>

黑色</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况3：w____色，左____右____(RL)

- 处理：
  - 交换w和____孩子颜色
  - 对w____旋
  - 转为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21ad3f76de9b3e1effcce1f8a03e3fcbb06283ab2c8c5ded905ca2ecfa56abc7.jpg)
图7.25情况3的调整方式

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑色</li>
    <li>

红</li>
    <li>

黑</li>
    <li>

左</li>
    <li>

右</li>
    <li>

情况2</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况4：w及其孩子都是____色

- 处理：
  - 去掉x和w各一重____色
  - x变普通____色，w变____色
  - ____node增加一重____色
  - x上升____层继续循环

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f77f4733c0cffc561dc2e545e593ce2eb429d88b4703d725d26d24d9778e963.jpg)
图7.26情况4的调整方式

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑色</li>
    <li>

黑</li>
    <li>

黑色</li>
    <li>

红</li>
    <li>

父</li>
    <li>

黑</li>
    <li>

一</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 删除示例

- 以图7.27为例，展示删除5和15的过程：
  - 删除5：____到____
  - 删除15：____到____处理

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16b040213c28dc879ebf6aede317568cd287ae396fdf09e05e9949dcf6c67b0e.jpg)
图7.27<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的删除过程

</ul>

<ul>

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

</ul>

</ul>

<ul>

## B树和 $\mathbf{B}+$ 树

考研大纲对B树和$^{\mathrm{B+}}$树的要求各不相同，重点在于考查B树，不仅要求理解B树的____特点，还要求掌握B树的____、<span style="color: GreenYellow;">插入</span>和____操作，而对$^{\mathrm{B+}}$树则只考查____。

<ul>

### B树及其基本操作

所谓 $m$ 阶B树是所有node的____因子均等于0的 $m$ 路平衡<span style="color: Gold;">search</span>树。

> pro：B树的定义和特点（2009）

#### B树的定义特性

- 一棵 $m$ 阶B树或为____树，或为满足如下____的 $m$ 叉树：
  - 树中每个node至多有____棵子树，即至多有____个关键字
  - 若根node不是叶node，则至少有____棵子树，即至少有____个关键字
  - 除根node外的所有非叶node至少有____棵子树，即至少有____个关键字
  - 所有非叶node的结构如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/641123898fc54d168c81307aaa0f46a0aeb4dc3c39dc6bc0add67a795683e706.jpg)

- 其中：
    - $K_{i}$ $(i=1,2,\cdots,n)$ 为node的____，且满足____
    - $P_{i}\,\,(i=0,\,1,\cdots,n)$ 为指向子树____node的____
    - 指针 $P_{i+1}$ 所指子树中所有node的关键字均 ＜ ____
    - $P_{i}$ 所指子树中所有node的关键字均 ＞ ____
    - $n~(\lceil m/2\rceil\!-\!1\!\leqslant\!n\!\leqslant\!____)$ 为node中____的个数
- 所有的叶node都出现在____层次上，并且不带____

> pro：B树中关键字数和node数的分析（2013、2014、2018、2021）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基本</li>
    <li>

建立</li>
    <li>

删除</li>
    <li>

concept</li>
    <li>

平衡</li>
    <li>

空</li>
    <li>

特性</li>
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

关键字</li>
    <li>

$K_{1}<K_{2}<\cdots<K_{n}$</li>
    <li>

根</li>
    <li>

指针</li>
    <li>

$K_{i}$</li>
    <li>

$K_{i}$</li>
    <li>

$m-1$</li>
    <li>

关键字</li>
    <li>

同一</li>
    <li>

信息</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### B树的性质分析

- 以图7.28所示5阶B树为例：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3296559c5d2d7110e03f8b45bfcbf4ee8b8931f234697bbe0eba579683969db7.jpg)

- 主要性质：
  - node的孩子个数等于该node中____个数加____
  - 根node特性：
    - 无关键字时无____(空树)
    - 有关键字时子树个数____
  - 非根非叶node特性：
    - 至少有____棵子树
    - 至少有____个关键字
    - 至多有____棵子树和____个关键字
  - 关键字排序特性：
    - 从左到右____<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>
    - 左侧子树关键字 ＜ ____关键字
    - 右侧子树关键字 ＞ ____关键字
  - 叶node特性：
    - 均在第____层
    - 代表查找____位置

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

1</li>
    <li>

子树</li>
    <li>

≥2</li>
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

当前</li>
    <li>

当前</li>
    <li>

4</li>
    <li>

失败</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### B树的查找

- 基本特点：
  - 与____排序树相似
  - 每个node包含____关键字
  - 进行____分支决定

##### 查找操作的两个基本步骤

- 在B树中找____(磁盘操作)
- 在node内找____(内存操作)
  - 可用____查找或____查找
  - 查找效率取决于目标node____数

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二叉</li>
    <li>

多个</li>
    <li>

多路</li>
    <li>

node</li>
    <li>

关键字</li>
    <li>

顺序</li>
    <li>

折半</li>
    <li>

层次</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 查找过程

- 从____node开始
- 在当前node<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>表中____
- 根据____结果选择子树继续查找
- 直到找到____或达到____node

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

查找</li>
    <li>

比较</li>
    <li>

目标</li>
    <li>

叶</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### B树的<span style="color: LightSkyBlue;">高度</span>分析

##### <span style="color: LightSkyBlue;">高度</span>定义

- 不包括最后不带____的叶node层

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

信息</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### <span style="color: LightSkyBlue;">高度</span>范围分析

- 最小<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node____数最多
  - 满足：____
  - 得到：____

- 最大<span style="color: LightSkyBlue;">高度</span>情况：
  - 每个node____数最少
  - 层次node数分析：
    - 第一层：至少____个node
    - 第二层：至少____个node
    - 第三层：至少____个node
    - 第 $h+1$ 层：至少____个node
  - 满足：____
  - 得到：____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

$n\!\leqslant\!(m-1)(1+m+m^{2}+\cdots+m^{h-1})=m^{h}-1$</li>
    <li>

$h\geqslant\log_{m}\left(n+1\right)$</li>
    <li>

关键字</li>
    <li>

1</li>
    <li>

2</li>
    <li>

$2\left\lceil m/2\right\rceil$</li>
    <li>

$2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$n+1\!\geqslant\!2(\lceil m/2\rceil)^{h-1}$</li>
    <li>

$h{\leqslant}\log_{\lceil m/2\rceil}((n+1)/2)+1$</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### B树的<span style="color: GreenYellow;">插入</span>操作

> pro：通过<span style="color: GreenYellow;">插入</span>操作<span style="color: Lime;">构造</span>一棵初始为____的B树（2020）

##### <span style="color: GreenYellow;">插入</span>过程

- 定位阶段：
  - 使用B树____算法
  - 找到<span style="color: GreenYellow;">插入</span>的____node位置

- <span style="color: GreenYellow;">插入</span>阶段：
  - 关键字数限制：____
  - 两种情况：
    - <span style="color: GreenYellow;">插入</span>后关键字数 < ____：____<span style="color: GreenYellow;">插入</span>
    - <span style="color: GreenYellow;">插入</span>后关键字数 > ____：需要____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

空</li>
    <li>

查找</li>
    <li>

终端</li>
    <li>

$[\lceil m/2\rceil\!-\!1,\,m\!-\!1]$</li>
    <li>

m</li>
    <li>

直接</li>
    <li>

m-1</li>
    <li>

分裂</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### node分裂方法

- 基本步骤：
  - 创建新____
  - 从____位置分割关键字
  - 左部分保留在____node
  - 右部分移至____node
  - 中间关键字上移至____node
- 特殊情况：
  - ____node可能需要继续分裂
  - 分裂可能传播至____node
  - 可能导致树____增1

- 示例(m=3的B树)：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/80d65ed644ea63d8e94f85979f930603e6eb9b46bb9c910cd6cf03ad6c8bf748.jpg)

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

node</li>
    <li>

中间</li>
    <li>

原</li>
    <li>

新</li>
    <li>

父</li>
    <li>

父</li>
    <li>

根</li>
    <li>

高度</li>

  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

### B树的删除

<ul>

#### 删除操作概述

- B树的删除操作与<span style="color: GreenYellow;">插入</span>操作类似，但更____
- 需确保删除后node关键字个数____
- 可能涉及node的"____"问题

> pro：B树的删除操作的实例（2012、2022）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

复杂</li>
    <li>

≥m/2-1</li>
    <li>

合并</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 非终端node的删除处理

- 当被删关键字k不在____node时：
  - 可用k的____(k')或____替代
    - 前驱：k左侧子树中"____"元素
    - 后继：k右侧子树中"____"元素
  - 然后删除____
  - k'必定在____node中

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7238b2b80bcf193f427d7371143169091e88dc7e89de6a71f0c30816046d808c.jpg)

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

终端</li>
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

终端</li>

  </ul>
</details>
</div>

</ul>

<ul>

#### 终端node的删除情况

<ul>

##### 情况一：____删除

- 条件：删除前关键字个数 ____
- 操作：____删去该关键字

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接</li>
    <li>

≥ ⌈m/2⌉</li>
    <li>

直接</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况二：借助____node

- 条件：
  - 删除前关键字个数 = ____
  - 相邻____node关键字个数 ____
- 操作：调整该node、____node及____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/215b6baf0ac411ac31105377425b16f9f12f9828b89f9a64b2c180cfee010990.jpg)

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

兄弟</li>
    <li>

⌈m/2⌉-1</li>
    <li>

兄弟</li>
    <li>

≥ ⌈m/2⌉</li>
    <li>

兄弟</li>
    <li>

父</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 情况三：node____

- 条件：
  - 删除前关键字个数 = ____
  - 相邻____node关键字个数 ____
- 操作：与____node及____node关键字____

> pro：非空B树的<span style="color: Gold;">search</span>、<span style="color: GreenYellow;">插入</span>、____操作的特点（2023）

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

合并</li>
    <li>

⌈m/2⌉-1</li>
    <li>

兄弟</li>
    <li>

≤ ⌈m/2⌉-1</li>
    <li>

兄弟</li>
    <li>

父</li>
    <li>

合并</li>
    <li>

删除</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 合并后的处理

- 双亲node为____node时：
  - 若关键字减至____，删除____node
  - 合并后新node成为____
- 双亲node非____node时：
  - 若关键字数减至____
  - 需与____node____或____
  - 重复直至符合B树____

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

根</li>
    <li>

0</li>
    <li>

根</li>
    <li>

根</li>
    <li>

根</li>
    <li>

⌈m/2⌉-2</li>
    <li>

兄弟</li>
    <li>

调整</li>
    <li>

合并</li>
    <li>

要求</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### B+树的concept

> pro：B+树的应用场合（2017）

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
     - 包含指向子node的____

> pro：B树和B+树的____的分析（2016）

</ul>

<ul>

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

指针</li>
    <li>

差异</li>

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

</ul>

<ul>

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

</ul>

<ul>

##### node特性差异

- 关键字数量范围：
  - B+树：____
  - B树：____
- 关键字分布：
  - B+树：____node包含全部关键字
  - B树：关键字____出现

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈m/2⌉≤n≤m</li>
    <li>

⌈m/2⌉-1≤n≤m-1</li>
    <li>

叶</li>
    <li>

不重复</li>

  </ul>
</details>
</div>

</ul>

<ul>

##### 功能特性差异

- node作用：
  - B+树：非叶node仅做____
  - B树：所有node既____又____
- 链接结构：
  - B+树：____node形成链表
  - B树：node间____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/db9dc115f173d19c088aab329b4f42f2125e735f6d5222eacbec4640c3e2ffab.jpg)

</ul>

<ul>

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

叶</li>
    <li>

独立</li>

  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### B+树的操作特点

- 基本类似____树
- <span style="color: Gold;">search</span>特点：
  - 总是遍历到____node
  - 路径：____node到____node
  - 支持两种<span style="color: Gold;">search</span>方式：
    - ____<span style="color: Gold;">search</span>
    - ____<span style="color: Gold;">search</span>

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

B</li>
    <li>

叶</li>
    <li>

根</li>
    <li>

叶</li>
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

<ul>

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>(哈希<span style="color: green;">函数</span>)
  - 定义：把<span style="color: Gold;">search</span>表中的____映射成对应地址的<span style="color: green;">函数</span>
  - 表示：____
  - 地址类型：____

- <span style="color: Gold;">冲突</span>
  - 定义：____
  - 同义词：发生<span style="color: Gold;">冲突</span>的____
  - 处理：
    - 需设计良好的<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>减少____
    - 设计____处理方法

- <span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>(哈希表)
  - 定义：____
  - 特点：建立____的直接映射
  - 性能：理想情况下<span style="color: Gold;">search</span>时间复杂度为____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>关键字</li>
    <li>$\operatorname{Hash}(\ker)=$Addr</li>
    <li>数组下标、索引或内存地址等</li>
    <li>不同关键字映射到同一地址</li>
    <li>不同关键字</li>
    <li><span style="color: Gold;">冲突</span></li>
    <li><span style="color: Gold;">冲突</span></li>
    <li>根据关键字直接进行访问的数据结构</li>
    <li>关键字和存储地址</li>
    <li>O(1)</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Lime;">构造</span>方法

<ul>

#### <span style="color: silver;"><span style="color: Lime;">构造</span>原则

<ul>

- 定义域必须包含____
- 地址分布应尽可能____
- 计算过程应尽量____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全部关键字</li>
    <li>均匀</li>
    <li>简单</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 直接定址法

<ul>

- 方法：取关键字的____值为<span style="color: RoyalBlue;">散列</span>地址
- 优点：计算简单，无____
- 适用：关键字分布____的情况
- 缺点：关键字____时浪费空间

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>线性<span style="color: green;">函数</span></li>
    <li><span style="color: Gold;">冲突</span></li>
    <li>基本连续</li>
    <li>不连续</li>
  </ul>
</details>
</div>

</ul>

</ul>



#### 除留余数法

<ul>

- 方法：____
- 要点：选择合适的____值
  - p不____表长m
  - p最接近或等于m的____
- 目标：使关键字____映射到任意地址

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$H(\mathrm{kcy})=\mathrm{kcy}\,\%\,p$</li>
    <li>p</li>
    <li>＞</li>
    <li>质数</li>
    <li>等概率</li>
  </ul>
</details>
</div>

</ul>

</ul>



#### 数字分析法

<ul>

- 适用：____
- 原理：
  - 分析____
  - 选取____的位作为<span style="color: RoyalBlue;">散列</span>地址
- 局限：更换关键字需____<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>已知关键字集合</li>
    <li>r进制数各位上数码出现频率</li>
    <li>分布均匀</li>
    <li>重构</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 平方取中法

<ul>

- 方法：取____
- 特点：
  - <span style="color: RoyalBlue;">散列</span>地址与____都相关
  - 地址分布____
- 适用：关键字各位取值____或____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>关键字平方值的中间几位</li>
    <li>关键字每位</li>
    <li>较均匀</li>
    <li>不均匀</li>
    <li>位数较小</li>
  </ul>
</details>
</div>

</ul>

</ul>



#### 方法选择

<ul>

- 没有____的通用方法
- 需根据____情况选择

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>最优</li>
    <li>具体关键字集合</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

<ul>

## <span style="color: silver;">处理<span style="color: Gold;">冲突</span>的方法

<ul>

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>设计：
  - 任何<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>都无法完全避免____
  - 必须考虑____处理方法

- <span style="color: Gold;">冲突</span>处理过程：
  - 为发生<span style="color: Gold;">冲突</span>的关键字寻找下一个____的Hash地址
  - 使用____表示第i次探测得到的<span style="color: RoyalBlue;">散列</span>地址
  - 处理流程：
    - 若H1发生____，继续寻找H2
    - 若H2仍____，继续寻找H3
    - 以此类推，直到找到不发生____的Hk
    - Hk即为该关键字在表中的____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">冲突</span></li>
    <li><span style="color: Gold;">冲突</span></li>
    <li>"空"</li>
    <li>Hi</li>
    <li><span style="color: Gold;">冲突</span></li>
    <li><span style="color: Gold;">冲突</span></li>
    <li><span style="color: Gold;">冲突</span></li>
    <li>最终地址</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### 开放定址法

<ul>

- 开放定址法的含义：
  - 表中的空闲地址对以下两类表项开放：
    - ____表项
    - ____表项

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>同义词</li>
    <li>非同义词</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 数学公式

<ul>

- 递推公式：____
  - H(key)为____
  - ____
  - $m$表示____
  - $d_{i}$为____

> pro：堆积现象导致的结果（2014）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$H_{i}\,{=}\,(H(\mathrm{kcy})+d_{i})\,\%\,m$</li>
    <li><span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span></li>
    <li>$i=1,2,\cdots,k$ $(k{\leqslant}m-1)$</li>
    <li><span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>表长</li>
    <li>增量序列</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 增量序列的四种取法

<ul>

##### 1. 线性探测法

<ul>

- 又称____
- ____
- 特点：
  - <span style="color: Gold;">冲突</span>发生时____
  - 探测到表尾____
  - 未填满时____
- 缺点：
  - 可能造成____
  - 降低____效率

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>线性探测再<span style="color: RoyalBlue;">散列</span>法</li>
    <li>$d_{i}=1,2,\cdots,m-1$</li>
    <li>顺序查看下一个单元</li>
    <li>转到表首</li>
    <li>一定能找到空闲单元</li>
    <li>元素堆积</li>
    <li><span style="color: Gold;">search</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

##### 2. 平方探测法

<ul>

- 又称____
- ____
- 条件：
  - ____
  - 表长m必须是____
- 优缺点：
  - 避免____问题
  - 不能探测____，至少能探测____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二次探测法</li>
    <li>$d_{i}=1^{2},-1^{2},2^{2},-2^{2},\cdots,k^{2},-k^{2}$</li>
    <li>$k{\leqslant}m/2$</li>
    <li>4k+3的素数</li>
    <li>堆积</li>
    <li>所有单元</li>
    <li>一半</li>
  </ul>
</details>
</div>

</ul>

</ul>

##### 3. 双<span style="color: RoyalBlue;">散列</span>法

<ul>

- ____
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：
  - ____
  - 初始探测位置：____
  - i为____，初始为____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$d_{i}=i{\times}\mathrm{Hash}_{2}(\mathrm{ker})$</li>
    <li>$H_{i}\,{=}\,(H(\mathrm{kcy})+i{\times}\mathrm{Hash}_{2}(\mathrm{kcy}))\:\%\:m$</li>
    <li>$H_{0}\,{=}\,H(\mathrm{kcy})\;\%\,m$</li>
    <li><span style="color: Gold;">冲突</span>次数</li>
    <li>0</li>
  </ul>
</details>
</div>

</ul>

</ul>

##### 4. 伪随机序列法

<ul>

- ____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$d_{i}\!=$伪随机数序列</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>中删除部分元素后的<span style="color: Gold;">search</span>效率分析（2023）

> notice: 

- 开放定址法删除元素的注意事项：
  - 不能随便____表中已有元素
    - 原因：会截断____的查找路径
  - 删除方案：
    - 采用____方式
    - 具体做法：在要删除的元素位置做____
  - 副作用：
    - 多次删除后会造成____现象
      - 表面上：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>____
      - 实际上：许多位置____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>物理删除</li>
    <li>其他同义词元素</li>
    <li>逻辑删除</li>
    <li>一个删除标记</li>
    <li>假满</li>
    <li>很满</li>
    <li>未被利用</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">拉</span><span style="color: RoyalBlue;">链</span>法

<ul>

- 又称____
- 原理：
  - ____存储在线性链表中
  - 链表由____唯一标识
  - ____存放在<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>对应单元
- 适用：
  - usually进行____的情况

- eg
  - 已知条件：
    - 关键字序列：____
    - <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：____
    - 处理<span style="color: Gold;">冲突</span>方法：____
  - 建立的表结构：
    - 如图7.33所示
  - 练习建议：
    - 学完下节内容后
    - 可尝试计算该例的____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d1940764bbe5838b67ac8609d78335783a585aa5c7fc0cb6560c6e81692cd7da.jpg)

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>链接法、chaining</li>
    <li>同义词</li>
    <li><span style="color: RoyalBlue;">散列</span>地址</li>
    <li>头指针</li>
    <li><span style="color: GreenYellow;">插入</span>和删除</li>
    <li>{19,14,23,01,68,20,84,27,55,11,10,79}</li>
    <li>H(key)=key%13</li>
    <li>拉链法</li>
    <li>平均查找长度ASL</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>及性能分析

<ul>

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的<span style="color: Lime;">构造</span>及<span style="color: Gold;">search</span>效率的分析（2010、2018、2019）

#### <span style="color: Gold;">search</span>过程

<ul>

- 初始化：____
- 步骤：
  1. 检测地址Addr位置
     - 无记录：____
     - 有记录：比较____值
       - 相等：____
       - 不等：执行步骤2
  2. 计算下一____地址
     - 更新____
     - 返回____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Addr $\smile$Hash(key)</li>
    <li>返回失败</li>
    <li>key</li>
    <li>返回成功</li>
    <li><span style="color: RoyalBlue;">散列</span></li>
    <li>Addr</li>
    <li>步骤1</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### eg

<ul>

##### 示例数据

<ul>

- 关键字序列：____
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：____
- 处理方法：____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/37af350f00080c15707906e376408f9d353587a88dd2c9322a9a8e4bad9e594b.jpg)

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>{19,14,23,01,68,20,84,27,55,11,10,79}</li>
    <li>H(key)=key%13</li>
    <li>线性探测</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

##### <span style="color: Gold;">search</span>过程示例

<ul>

###### 值84的<span style="color: Gold;">search</span>

<ul>

1. 初始地址：____
2. 第一次<span style="color: Gold;">冲突</span>：____
3. 第二次<span style="color: Gold;">冲突</span>：____
4. 结果：____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>H(84)=6</li>
    <li>H₁=(6+1)%16=7</li>
    <li>H₂=(6+2)%16=8</li>
    <li>成功，位置8</li>
  </ul>
</details>
</div>

</ul>

</ul>

###### 值38的<span style="color: Gold;">search</span>

<ul>

1. 初始地址：____
2. 第一次<span style="color: Gold;">冲突</span>：____
3. 结果：____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>H(38)=12</li>
    <li>H₁=(12+1)%16=13</li>
    <li>失败，L[13]`为空</li>
  </ul>
</details>
</div>

</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/becdbede030512e5e2ac3b81b756cc81d076a78bca8c20dbff207903db34e92a.jpg)

</ul>

</ul>

</ul>

<ul>

#### 性能分析

<ul>

##### <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度

<ul>

- ASL计算：____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>(1×6+2+3×3+4+9)/12=2.5</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

##### 影响因素

<ul>

> 影响<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span><span style="color: Gold;">search</span>效率的因素（2011、2022）

1. ____
2. ____的方法
3. 装填因子
   - 定义：____
   - 特点：
     - ASL依赖于____而非____
     - ____越大，<span style="color: Gold;">冲突</span>可能性越大
     - ____越小，<span style="color: Gold;">冲突</span>可能性越小

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span></li>
    <li>处理<span style="color: Gold;">冲突</span></li>
    <li>$\alpha\!=\frac{表中记录数n}{<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>长度m}$</li>
    <li>α</li>
    <li>n或m</li>
    <li>α</li>
    <li>α</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

#### 归纳总结

<ul>

##### <span style="color: LightSkyBlue;">平均</span>查找长度（ASL）计算

<ul>

- 核心考查点：求____
  - 用于度量____的性能
  - 基于查找结构
    - 由____构成

<ul>

###### 计算公式

<ul>

- 查找成功的ASL：____
- 查找失败的ASL：____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>AS $\mathrm{~L~}_{n\in i}=\sum_{i=1}^{n}p_{i}c_{i}$</li>
    <li>A $\backslash\mathrm{SL}_{\mathbb{F}^{n\mathbb{W}}}=\sum_{j=0}^{n}q_{j}c_{j}$</li>
  </ul>
</details>
</div>

</ul>

</ul>

###### 参数说明

<ul>

- 已有数据元素：____
- 查找成功情况
  - 每个元素查找概率：____
  - 数据比较次数：____
- 查找失败情况
  - 子集合元素查找概率：____
  - 数据比较次数：____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>n个</li>
    <li>$p_{i}$</li>
    <li>$c_{i}\ (i=1,2,\cdots,n)$</li>
    <li>$q_{j}$</li>
    <li>$c_{j}\ (j=0,\,1,\cdots,\,n)$</li>
  </ul>
</details>
</div>

</ul>

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
  - 多采用____
  - 原因：____常被忽略
  - 注意：两种考虑方式计算结果不同，考试需____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$\sum_{i=1}^{n}p_{i}+\sum_{j=0}^{n}q_{j}=1$</li>
    <li>$p_{i}=q_{j}=\frac{1}{2n+1}$</li>
    <li>$\sum_{i=1}^{n}p_{i}=1\;,\;\;\sum_{j=0}^{n}q_{j}=1$</li>
    <li>$p_{i}={\frac{1}{n}}\,,\;\;q_{j}={\frac{1}{n+1}}\,.$</li>
    <li>分开考虑</li>
    <li>查找失败情况</li>
    <li>仔细阅题</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LightSkyBlue;">平均</span>查找长度（ASL）</li>
    <li>各种查找算法</li>
    <li>相同数据类型的记录或node</li>
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

