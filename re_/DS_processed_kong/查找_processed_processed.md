<span style="color: silver;">

# <span style="color: silver;">above  ✓

<ul>

## <span style="color: silver;">【考纲内容】  

~*search=查找*~

（一）<span style="color: Gold;">search</span>的concept（二）顺序<span style="color: Gold;">search</span>法（三）分块<span style="color: Gold;">search</span>法（四）折半<span style="color: Gold;">search</span>法（五）树形<span style="color: Gold;">search</span>（六）B树及其基本操作、$^{\mathrm{B+}}$树的concept（七）<span style="color: RoyalBlue;">散列</span>（Hash）表（八）<span style="color: Gold;">search</span>算法的分析及应用  

</ul>

<ul>

## <span style="color: silver;">【知识框架】  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/04bba28557f8de0f60708124edff3cf56401157743f882b68284dea1f7097c04.jpg)`  

</ul>

<ul>

## <span style="color: silver;">【复习提示】  

- 重点掌握的知识点：

  - 折半搜索：
    - 掌握折半搜索的____。
    - <span style="color: Lime;">构造</span>____树。
    - 分析<span style="color: LightSkyBlue;">平均</span>____长度。

  - 二叉排序树、二叉平衡树和<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>：
    - 了解它们的____、性质和相关操作。
    - B树和B+树是本章的____。

  - B树：
    - 掌握<span style="color: GreenYellow;">插入</span>、____和____操作过程。

  - B+树：
    - 了解其____和性质。

  - <span style="color: RoyalBlue;">散列</span>搜索：
    - 掌握<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的<span style="color: Lime;">构造</span>。
    - 掌握<span style="color: Gold;">冲突</span>____方法及其过程。
    - 掌握搜索成功和搜索失败的<span style="color: LightSkyBlue;">平均</span>____长度。
    - 掌握散搜索的____和性能分析。

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>过程 判定 搜索</li>
    <li>concept 难点</li>
    <li><span style="color: Goldenrod;">删除</span> 搜索</li>
    <li>concept</li>
    <li>处理 搜索 特征</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: silver;">concept✓

<ul>

## <span style="color: silver;">基本定义

- <span style="color: Gold;">search</span>
  - 在数据集合中寻找____某种条件的数据元素的过程
  - 结果分为两种：
    - 查找成功：找到____条件的数据元素
    - <span style="color: Gold;">search</span>____

- <span style="color: Gold;">search</span>表
  - 定义：用于<span style="color: Gold;">search</span>的____集合，由同一类型的数据元素组成
  - 常见操作：
    - 查询____条件的数据元素
    - <span style="color: GreenYellow;">插入</span>、____数据元素

- 静态<span style="color: Gold;">search</span>表
  - 定义：只涉及<span style="color: Gold;">search</span>操作的____
  - 对应的动态<span style="color: Gold;">search</span>表：需要动态<span style="color: GreenYellow;">插入</span>或____的表
  - 适用方法：
    - 静态表：顺序<span style="color: Gold;">search</span>、折半<span style="color: Gold;">search</span>、<span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>
    - 动态表：二叉排序树<span style="color: Gold;">search</span>、<span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>

- <span style="color: green;">关键</span>字
  - 定义：数据元素中____标识该元素的数据项值
  - 特点：基于<span style="color: green;">关键</span>字的<span style="color: Gold;">search</span>结果应该是____的

- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度
  - 定义：所有<span style="color: Gold;">search</span>过程中<span style="color: green;">关键</span>字比较<span style="color: LimeGreen;">次数</span>的<span style="color: LightSkyBlue;">平均</span>值
  - 数学表达式：$\mathrm{ASL}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 参数说明：
    - n：<span style="color: Gold;">search</span>表____
    - <span style="color: LightSkyBlue;">P</span>i：<span style="color: Gold;">search</span>第i个元素的____(通常Pi=1/n)
    -  <span style="color: LimeGreen;">C</span>i：找到第i个元素所需比较____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>满足 满足 失败</li>
    <li><span style="color: LightSkyBlue;">数据</span> 符合 <span style="color: Goldenrod;">删除</span></li>
    <li><span style="color: LightSkyBlue;">表</span> <span style="color: Goldenrod;">删除</span></li>
    <li>唯一 唯一</li>
    <br>
    <li>

$\sum_{i=1}^{n}P_{i}C_{i}$</li>

  <li><span style="color: gray;">长度</span></li>
  <li><span style="color: LightSkyBlue;">概率</span></li>
  <li><span style="color: LimeGreen;">次数</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span> & <span style="color: Gold;">折</span><span style="color: gray;">半</span>~ & <span style="color: GreenYellow;">分块</span>~

<ul>

## <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span>~

<ul>

### <span style="color: silver;">concept✓

- 又称<span style="color: orange;">线性</span><span style="color: Gold;">search</span>
- 适用范围：
  - <span style="color: LightSkyBlue;">顺序</span>表：通过数组____递增扫描
  - <span style="color: RoyalBlue;">链</span>表：通过指针____扫描

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LimeGreen;">下标</span></li>
    <li><span style="color: Gold;">next</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">一般</span><span style="color: orange;">线性</span>表的顺序<span style="color: Gold;">search</span> ✓？

<ul>

#### <span style="color: silver;">基本思想 ✓

- from<span style="color: orange;">线性</span>表一<span style="color: LightSkyBlue;">端</span>开始逐个检查____
  - find<span style="color: GreenYellow;">满足</span>条件元素 → return____
- till表另一端not find → return____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: green;">关键</span>字</li>
    <li><span style="color: gray;">位置</span></li>
    <li>失败</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: LightSkyBlue;">算法</span>  <span style="color: silver;">✓

```c
typedef struct{
    ElemType *elem;
    int TableLen;
}SSTable;

int <span style="color: Gold;">search</span>_Seq(SSTable ST,ElemType key){
    ST.elem[0]=____;
    for(int i=ST.TableLen;ST.elem[i]!=____;--i);
    return i;
}
```

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LimeGreen;">key</span></li>
    <li><span style="color: LimeGreen;">key</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### ⭐<span style="color: silver;"><span style="color: Gold;">性能</span>分析 ✓？

？why
- <span style="color: Gold;">search</span>成功时<span style="color: LightSkyBlue;">平均</span>长度：
  - $\operatorname{ASL}_{\mathfrak{h}(n;i)}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 当Pi=1/n时：$\operatorname{{\color{skyblue}{P}}SL}_{n|k\rangle n|}{=}{\boxed{\phantom{m-1}\hspace{0.5cm}}}$
- ~失败时：ASL=____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\sum_{i=1}^{n}{\color{skyblue}{P}}_{i}(n-i+1)$</li>
    <li>$\frac{n+1}{2}$</li>
    <li>n+1</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">优</span><span style="color: GreenYellow;">缺</span>点✓？

- 缺点：n较大时____低
- 优点：
  - 存储方式____
  - ？无____要求
  - 适用于链表

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LightSkyBlue;">效率</span></li>
    <li><span style="color: Lime;">灵活</span></li>
    <li>序 ← ？</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: GreenYellow;"><span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span></span><span style="color: orange;">线性</span>表的顺序<span style="color: Gold;">search</span>

<ul>

#### <span style="color: silver;">Feature

- 提前know表is<u><span style="color: green;">关键</span>字____</u>
- False:
  - <span style="color: Gold;">search</span>失败时can<span style="color: GreenYellow;">提前</span>____
  - 可降低<span style="color: Gold;">search</span>失败的<span style="color: LightSkyBlue;"><span style="color: LightSkyBlue;">平均</span></span><span style="color: gray;">长度

> pro：<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>线性表的顺序<span style="color: Gold;">search</span>的应用（2013）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b9a556e5c788039f2fe0a08be26af8476e380c1fcd30a762adcbe9951bfa13c7.jpg)`
↑<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>顺序表上的顺序查找判定树

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有序</li>
    <li>返回</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- <span style="color: Gold;">search</span><span style="color: Gold;">成功</span>：same as<span style="color: gray;">一般</span>____表
- <span style="color: Gold;">search</span><span style="color: GreenYellow;">失败</span>：
  - <span style="color: LightSkyBlue;">平均</span>长度：$\operatorname{ASL}_{\mathcal{K}:n\times l}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 当n=6时：ASL=____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>线性</li>
    <li>$\frac{n}{2} + \frac{n}{n+1}$</li>
    <li>3.86</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: silver;">attention

- 思想与<span style="color: Gold;">折</span><span style="color: gray;">半</span><span style="color: Gold;">search</span>____
  - <span style="color: RoyalBlue;">链</span>式____结构
  - 折半~only<span style="color: LightSkyBlue;">顺序</span>____结构

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不同</li>
    <li>存储</li>
    <li>存储</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

<ul>

## <span style="color: Gold;">折</span><span style="color: gray;">半</span>~

<ul>

折半<span style="color: Gold;">search</span>又称二分<span style="color: Gold;">search</span>，它仅适用于<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>的____表。

> pro：分析对比给定<span style="color: Gold;">search</span>算法与折半<span style="color: Gold;">search</span>的<span style="color: LightSkyBlue;">效率</span>（2016）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>顺序</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;">基本思想

- compare<span style="color: gray;">给</span><span style="color: GreenYellow;">定</span>值key with table____<span style="color: gray;">位置</span>的元素
  - if =
    - <span style="color: Gold;">search</span>____
    - return该元素的____<span style="color: gray;">位置</span>
  - elif ≠
    - →所需<span style="color: Gold;">search</span>的元素in
      - 中间元素以外的
      - <span style="color: LightSkyBlue;">前</span>半or<span style="color: GreenYellow;">后</span>半
<br>
  - eg
    - <span style="color: Gold;">search</span>表升序排列时
      - 若key＞中间元素
        - then所<span style="color: Gold;">search</span>的元素only might在<span style="color: GreenYellow;">后</span><span style="color: gray;">半</span>____
        - 在缩小的<span style="color: gray;">范围</span>内go on同样的<span style="color: Gold;">search</span>
      - repeat the steps
        - till<span style="color: GreenYellow;">Find</span>
        - or ensure表中no所需要<span style="color: Gold;">search</span>的元素
          - 则<span style="color: Gold;">search</span>____
          - return ____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中间</li>
    <li>成功</li>
    <li>存储</li>
    <li>部分</li>
    <li>不成功</li>
    <li>False</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: LightSkyBlue;">算法

```c
int Binary<span style="color: Gold;">search</span>(SSTable L,ElemType key){
    int low=0,high=L.TableLen-1,mid;
    while(low<=high){
        mid=(low+high)/2; //取____<span style="color: gray;">位置</span>
        if(L.elem[mid]==key) return mid; // <span style="color: Gold;">search</span>成功则返回所在____
        else if(L.elem[mid]>key) high=mid-1; //从____部分继续<span style="color: Gold;">search</span>
        else low=mid+1; //从____部分继续<span style="color: Gold;">search</span>
    }
    return -1; // <span style="color: Gold;">search</span>失败，返回____
}
```

<ul>

#### <span style="color: silver;">instruction

- 折半<span style="color: Gold;">search</span>算法select中间node时
  - 向____取整
  - ~____~
- both can
  - but每次<span style="color: Gold;">search</span>的取整方式必须____

> pro：折半<span style="color: Gold;">search</span>的<span style="color: Gold;">search</span>路径的判断（2015）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中间</li>
    <li><span style="color: gray;">位置</span></li>
    <li>前半</li>
    <li>后半</li>
    <li>-1</li>
    <li>↑</li>
    <li>↓</li>
    <li>相同</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: silver;">eg

- 已知11个元素的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>表{7,10,13,16,19,29,32,33,37,41,43}
- <span style="color: Gold;">search</span>值为11的过程：
  - 第一次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<29，在[low,mid-1]范围内继续<span style="color: Gold;">search</span>
  - 第二次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11<13，在[low,mid-1]范围内继续<span style="color: Gold;">search</span>
  - 第三次<span style="color: Gold;">search</span>
    - 比较中间元素____与key
    - 11>7，在[mid+1,high]范围内继续<span style="color: Gold;">search</span>
  - 第四次<span style="color: Gold;">search</span>
    - 子表只含一个元素____
    - 10≠11，<span style="color: Gold;">search</span>____

> pro：分析给定二叉树树形能否构成折半<span style="color: Gold;">search</span>判定树（2017）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>29</li>
    <li>13</li>
    <li>7</li>
    <li>10</li>
    <li>失败</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: GreenYellow;">判定</span><span style="color: green;">树

- Feature：
  - node:
    - 每个圆形~express一个____
    - 最下面的叶~为方形，表示<span style="color: Gold;">search</span>____的区间
    - 每个~值均＞其左子~值
      - 且＜其右子~值
    - n个元素对应n个圆形非叶~和n+1个方形叶~
  - is<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3c13d8b6e09e2161cf91b26befcb36e69ca849ba58fb230483c6eaa214215f5.jpg)`  
↑描述折半查找过程的判定树

> pro：折半<span style="color: Gold;">search</span>的最多比较<span style="color: LimeGreen;">次数</span>的分析（2010、2023）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>记录</li>
    <li>失败</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">性能</span>分析

- 比较<span style="color: LimeGreen;">次数</span>最多≤树的<span style="color: LightSkyBlue;">高度</span>
- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度：
  - $\mathrm{ASL}=\boxed{\phantom{m-1}\hspace{0.5cm}}\approx\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 时间复杂度为____
- 示例分析(图7.2)：
  - <span style="color: Gold;">search</span>成功ASL=____
  - <span style="color: Gold;">search</span>失败ASL=____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$\frac{n+1}{n}\log_{2}(n+1)-1$</li>
    <li>$\log_{2}(n+1)-1$</li>
    <li>O(log₂n)</li>
    <li>(1×1+2×2+3×4+4×4)/11=3</li>
    <li>(3×4+4×8)/12=11/3</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">conditions

- only<span style="color: LightSkyBlue;">顺序</span>____结构
- request元素按<span style="color: green;">关键</span>字<span style="color: GreenYellow;">有</span><span style="color: LightSkyBlue;">序</span>____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>存储</li>
    <li>排列</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

## <span style="color: silver;"><span style="color: GreenYellow;">分块</span>~

<ul>

- also called as<span style="color: Gold;">索引</span><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span>
- 顺序<span style="color: Gold;">search</span>和折半<span style="color: Gold;">search</span>各自的____
  - 既<span style="color: GreenYellow;">动态</span>____
  - 又<span style="color: RoyalBlue;">快速</span><span style="color: Gold;">search</span>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优点</li>
    <li>结构</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;">基本思想

- 将<span style="color: Gold;">search</span>表分为若干<span style="color: gray;">子块</span>
  - 块内
    - can____
  - 块间
    - 元素<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>
      - 第一个块中
        - max<span style="color: green;">关键</span>字＜第二个块中all recorded____
      - 第二个块中
        - max<span style="color: green;">关键</span>字＜第二个块中all recorded____
      - ...
      - 以此类推
- 建立____表
  - 包含各块最大<span style="color: green;">关键</span>字和各块第一个元素____
  - 索引表按<span style="color: green;">关键</span>字<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无序</li>
    <li><span style="color: green;">关键</span>字</li>
    <li><span style="color: green;">关键</span>字</li>
    <li>索引</li>
    <li>地址</li>
    <li>排列</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">过程

- step1：在**索引表**中确定待查记录所在的<span style="color: gray;">块</span>
  - 可以<span style="color: LightSkyBlue;">顺序</span>~or<span style="color: Gold;">折</span><span style="color: gray;">半</span>~____表
- step2：在<span style="color: gray;">块</span>内<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>索引</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;">eg

- <span style="color: green;">关键</span>码集合：{88,24,72,61,21,6,32,11,8,31,22,83,78,54}
- 按<span style="color: green;">关键</span>码值24,54,78,88分为4个块和索引表

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/76ded7a7f7a5d8bfa95e7e4f016ef281090b1deb3b0fa15e348952f286083f80.jpg)`  

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

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>L₁ + Ls</li>
    <li>长度</li>
    <li>长度</li>
    <li>(s²+2s+n)/2s</li>
    <li>√n</li>
    <li>√n+1</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">优</span><span style="color: GreenYellow;">缺</span>点

- <span style="color: LightSkyBlue;">优</span>点：
  - 具有<span style="color: GreenYellow;">动态</span>____
  - <span style="color: RoyalBlue;">快速</span><span style="color: Gold;">search</span>
  - 块内<span style="color: Gold;">search</span>范围小，<span style="color: LightSkyBlue;">效率</span>高于<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">search</span>
- <span style="color: GreenYellow;">缺</span>点：
  - 索引表占用<span style="color: gray;">额外</span>____空间
  - 索引<span style="color: Gold;">search</span>增加系统<span style="color: gray;">开销</span>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>结构</li>
    <li>存储</li>
  </ul>
</details>
</div>

</ul>

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
    - <span style="color: green;">关键</span>字<span style="color: Gold;">search</span>
    - ~<span style="color: GreenYellow;"><span style="color: GreenYellow;">插入</span></span>
    - ~<span style="color: gray;"><span style="color: Goldenrod;">删除</span></span>
- 优势：
  - ____结构
  - 这种结构特别有利于：
    - <span style="color: GreenYellow;"><span style="color: GreenYellow;">插入</span></span>
    - <span style="color: gray;"><span style="color: Goldenrod;">删除</span></span>

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>排序</li>
    <li><span style="color: LightSkyBlue;">效率</span></li>
    <li>非线性</li>
  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;">定义

> pro：二叉排序树的应用（2013）

二叉排序树（也称二叉<span style="color: Gold;">search</span>树）或者是一棵____树，或者是具有下列____的二叉树：

- 若左子树非空，则左子树上所有node的值均＜____node的值
- 若右子树非空，则右子树上所有node的值均＞____node的值
- 左、右子树也分别是一棵____排序树

> pro：二叉排序树中node值之间的关系（2015、2018）

- 根据二叉排序树的定义:
  - 左子树node值$<\boxed{\phantom{m-1}\hspace{0.5cm}}$node值$<\boxed{\phantom{m-1}\hspace{0.5cm}}$node值
  - 对二叉排序树进行____遍历，可以得到一个递增的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>序列
  - 例如，图7.4所示二叉排序树的中序遍历序列为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ce5699f8e763d0cb3b6dbd0974980ca0913f135c1e27622016155408d0e469aa.jpg)`  
图7.4一棵二叉排序树

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>空</li>
    <li>特性</li>
    <li>根</li>
    <li>根</li>
    <li>二叉</li>
    <li>根</li>
    <li>右子树</li>
    <li>中序</li>
    <li>123468</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;">基本操作

<ul>

#### <span style="color: Gold;">search</span>

- 过程：
  - 从____node开始，沿某个分支遂层向下比较
  - 若二义排序树非空：
    - 先将给定值与____node的<span style="color: green;">关键</span>字比较
    - 若相等，则<span style="color: Gold;">search</span>____
    - 若不等：
      - ＜____node的<span style="color: green;">关键</span>字，则在____node的左子树上<span style="color: Gold;">search</span>
      - 否则在____node的右子树上<span style="color: Gold;">search</span>

- 非递归<span style="color: Gold;">search</span>算法：

```c
BSTNode *BST<span style="color: Gold;">search</span>(BiTree T,ElemType key)( 
    while(T!=NULL&&key $!=$ T->data){ 
      if（key<T->data）T=T->____；
      elseT=T->____; 
    }
    returnT;  
```

- eg：
  - 在图7.4中<span style="color: Gold;">search</span>值为4的node
    - 首先4与根node____比较
      - 4＜6
        - 在根node6的____子树中继续<span style="color: Gold;">search</span>
      - 4＞2
        - 在node2的____子树中<span style="color: Gold;">search</span>
        - <span style="color: Gold;">search</span>____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>根</li>
    <li>根</li>
    <li>成功</li>
    <li>根</li>
    <li>根</li>
    <li>根</li>
    <li>lchild</li>
    <li>rchild</li>
    <li>6</li>
    <li>左</li>
    <li>右</li>
    <li>成功</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: GreenYellow;"><span style="color: GreenYellow;">插入</span>

- 特点：
  - 树的结构通常不是一次____的
  - 在<span style="color: Gold;">search</span>过程中，当树中不存在<span style="color: green;">关键</span>字值等于给定值的node时再进行<span style="color: GreenYellow;">插入</span>

- <span style="color: GreenYellow;">插入</span>过程：
  - 若原二义排序树为____，则直接<span style="color: GreenYellow;">插入</span>
  - 否则：
    - <span style="color: green;">关键</span>字k＜____node值则<span style="color: GreenYellow;">插入</span>到左子树
    - <span style="color: green;">关键</span>字k＞____node值则<span style="color: GreenYellow;">插入</span>到右子树
  - <span style="color: GreenYellow;">插入</span>的node一定是一个新添加的____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e89e6ea7f4ada4a4c481bc8b1e0ce1cafabd2e67868cbf3cc6ccf9d77c30fc9c.jpg)`  
图7.5向二叉排序树中<span style="color: GreenYellow;">插入</span>node

- <span style="color: GreenYellow;">插入</span>算法：

```c
int BST Insert（BiTree &T，KeyType k）(
  if（T==NULL)(
    T = (BiTree)malloc（sizeof（BSTNode));
    T->data = k
    T->lchild = T->rchild = NULL;
    return____;
  else if(k=T->data)
    return ____;
  else if(k<T->data)
    return BST Insert(T->____,k);
  else
    return BST Insert（T->____,k);
```

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>生成</li>
    <li>空</li>
    <li>根</li>
    <li>根</li>
    <li>叶</li>
    <li>1</li>
    <li>0</li>
    <li>lchild</li>
    <li>rchild</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: Lime;"><span style="color: Lime;">构造</span>

> pro: <span style="color: Lime;">构造</span>二叉排序树的过程（2020）

- 过程：
  - from____树<span style="color: GreenYellow;">出发
  - <u>依次</u><span style="color: gray;">输入</span>____
  - insert元素to____<span style="color: gray;">位置</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/359f08371aa754ac430fc9f29a85302372b2b4d9718c8e692c96b4d3a2472bf0.jpg)`  
图7.6二叉排序树的<span style="color: Lime;">构造</span>过程

- <span style="color: Lime;">构造</span>算法：

```c
void Creat BST（BiTree &T，KeyType str[],int n){
    T = ____;
    int i = 0
    while(i < n)
      BSTInsert(T,str[i]);
```

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>空</li>
    <li>元素</li>
    <li>合适</li>
    <li>NULL</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: gray;"><span style="color: Goldenrod;">删除</span>

- 过程：
  - 不能
    - 把以该node为<u>根</u>的子树上的node都____
  - 必须重新
    - 链接断开的<span style="color: Gold;">二叉</span><span style="color: RoyalBlue;">链</span>表
  - 确保
    - 二叉排序树的<span style="color: Gold;">性质</span>不会____

- 情况：
  1. 被<span style="color: Goldenrod;">删除</span>node是____node：
     - 直接<span style="color: Goldenrod;">删除</span>
  2. nodez只有一棵子树：
     - 让z的子树成为z____node的子树
  3. nodez有左、右两棵子树：
     - 令z的直接____（或直接前驱）替代z
     - 从二叉排序树中删去这个直接____（或直接前驱）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/337a0835918349dc03e9c616897783190facdb482e06740c2ec450fd4cfe8a1b.jpg)`  
3种情况下的<span style="color: Goldenrod;">删除</span>过程

> pro：二叉排序树中<span style="color: Goldenrod;">删除</span>并<span style="color: GreenYellow;">插入</span>某node的分析（2013）

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>册除</li>
    <li>丢失</li>
    <li>叶</li>
    <li>父</li>
    <li>后继</li>
    <li>后继</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Gold;">search</span><span style="color: RoyalBlue;"><span style="color: LightSkyBlue;">效率</span></span>分析

- 影响因素：
  - main:树的<span style="color: LightSkyBlue;"><span style="color: LightSkyBlue;">高度</span></span>
    - <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
      - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度为____
    - 单支树：
      - ~____

- 最坏情况：
  - 输入序列
    - <span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>
  - 形成倾斜的<span style="color: GreenYellow;">单</span>支树
  - 树的<span style="color: LightSkyBlue;">高度</span>increase to____个数n

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54dd73fa59f89a754e5fd4e7dce8cf7124f8fa9db15eeeafeb8140073840c7bf.jpg)`  
图7.8相同<span style="color: green;">关键</span>字组成的不同二叉排序树

- <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度比较：
  - 图7.8(a)：ASL=____
  - 图7.8(b)：ASL=____

- 与二分<span style="color: Gold;">search</span>比较：
  - <span style="color: LightSkyBlue;">平均</span>时间性能____
  - 二分<span style="color: Gold;">search</span>判定树____
  - 二叉排序树<span style="color: Gold;">search</span>____

- 维护表的<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>性：
  - 二叉排序树：
    - 无须移动____
    - 只需修改____
    - <span style="color: LightSkyBlue;">平均</span>执行时间____

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>O(log₂n)</li>
    <li>O(n)</li>
    <li>元素</li>
    <li>(1+2×2+3×4+4×3)/10=2.9</li>
    <li>(1+2+3+4+5+6+7+8+9+10)/10=5.5</li>
    <li>相似</li>
    <li>唯一</li>
    <li>不唯一</li>
    <li>node</li>
    <li>指针</li>
    <li>O(log₂n)</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>


- 二分<span style="color: Gold;">search</span>：
    - 对象是<span style="color: gray;">有</span><span style="color: LightSkyBlue;">序</span>____表
    - <span style="color: GreenYellow;">插入</span><span style="color: Goldenrod;">删除</span>操作代价____
  - 选择建议：
    - 静态<span style="color: Gold;">search</span>表：用____表+二分<span style="color: Gold;">search</span>
    - 动态<span style="color: Gold;">search</span>表：用____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

O(n)</li>
    <li>

顺序</li>
    <li>

二叉排序树</li>
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
    - 降低二叉排序树的性能
- 规定：
  - 任意node的左、右子树____的绝对值≤1
  - 这样的二叉树称为____（Balanced BinaryTree）或AVL树
- 平衡因子：
  - 定义为node左子树与右子树的____
  - 值只可能是____

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的定义（2009）

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

</ul>

<ul>

#### <span style="color: gray;">完整<span style="color: silver;">定义

- special:一棵____
- 具有以下性质的二叉树：
  - 左子树和右子树都是____
  - 左子树和右子树的____的绝对值≤1

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/42460a711e8a2a7bcbc0a975d83fd52c42972810cdf1ff0354c8c9d9ea7aa463.jpg)`  
<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>和<span style="color: gray;">不</span>~

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

</ul>

</ul>

<ul>

### <span style="color: GreenYellow;">插入</span>

<ul>

#### <span style="color: silver;">基本思想

- ____（或<span style="color: Goldenrod;">删除</span>）node时：
  - 检查____路径上的node是否不平衡
  - 若不平衡：
    - 找到最近的平衡因子绝对值＞1的node____
    - 调整以____为根的子树
    - 保持二叉排序树特性
    - 使之重新平衡

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: GreenYellow;">插入</span>操作的特点（2015）

> notice: 

每次调整的对象都是最小不平衡子树，即以____路径上离____node最近的平衡因子的绝对值＞1的node作为根的子树。图7.10中的虚线框内为最小不平衡子树。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2209bb6cb24b8548ca118f9d5f40aa8899f7ed2e20e83c7fe0c0621ee7b842db.jpg)`  
图7.10最小不平衡子树示意

> pro：<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>及调整操作的实例（2010、2019、2021）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

插入</li>
    <li>

A</li>
    <li>

A</li>
    <li>

插入</li>
    <li>

插入</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 调整规律

<ul>

##### LL平衡旋转（右单旋转）

- 原因：在nodeA的左孩子(L)的左子树(L)上____新node
- 过程：
  - A的平衡因子由1增至____
  - ____向右上旋转代替A成为根node
  - A向右下旋转成为____的右孩子
  - ____的原右子树作为A的左子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0b95eff2c046b43bb6a18bc9a41beacc9de133dbf00206769ee68eb40f6d13e7.jpg)`  
图7.11LL平衡旋转

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
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

<ul>

##### RR平衡旋转（左单旋转）

- 原因：在nodeA的右孩子(R)的右子树(R)上____新node
- 过程：
  - A的平衡因子由-1减至____
  - ____向左上旋转代替A成为根node
  - A向左下旋转成为____的左孩子
  - ____的原左子树作为A的右子树

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5619c6d8436c1be38b63d259dcc65e0d4dfdd684c7e61b46edda1f39de83300f.jpg)`  
图7.12RR平衡旋转

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
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

<ul>

##### LR平衡旋转（先左后右双旋转）

- 原因：在A的左孩子(L)的右子树(R)上____新node
- 过程：
  - A的平衡因子由1增至____
  - 先将____向左上旋转提升到B的<span style="color: gray;">位置</span>
  - 再将____向右上旋转提升到A的<span style="color: gray;">位置</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e7462a89cd7274f34abe2309c0d8eedb6ed3d046096c03916695558689e50a9f.jpg)`  
图7.13LR平衡旋转

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

2</li>
    <li>

C</li>
    <li>

C</li>
  </ul>
</details>
</div>

</ul>

<ul>

##### RL平衡旋转（先右后左双旋转）

- 原因：在A的右孩子(R)的左子树(L)上____新node
- 过程：
  - A的平衡因子由-1减至____
  - 先将____向右上旋转提升到B的<span style="color: gray;">位置</span>
  - 再将____向左上旋转提升到A的<span style="color: gray;">位置</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/044e9dac3e9118af06383caa4ab6770b19e9168a05e12eabac22b4702037505f.jpg)`  
图7.14RL平衡旋转

> notice: 

LR和RL旋转时，新node究竟是____C的左子树还是____C的右子树不影响旋转过程，而图7.13和图7.14中以____C的左子树中为例。

> pro：<span style="color: Lime;">构造</span><span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的过程（2013）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

-2</li>
    <li>

C</li>
    <li>

C</li>
    <li>

插入</li>
    <li>

插入</li>
    <li>

插入</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### <span style="color: Lime;">构造</span>示例

- <span style="color: green;">关键</span>字序列：15，3，7，10，9，8
- 过程：
  - ____7后：
    - 最小不平衡子树根为____
    - 执行____旋转
  - ____9后：
    - 最小不平衡子树根为____
    - 执行____旋转
  - ____8后：
    - 最小不平衡子树根为____
    - 执行____旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/093f0bfc9d39ea0cacad9cfef59f6edf59790e2ed7a6692f2ea8792f99c3b8bf.jpg)`  
图7.15<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的生成过程

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

15</li>
    <li>

LR</li>
    <li>

插入</li>
    <li>

15</li>
    <li>

LL</li>
    <li>

插入</li>
    <li>

7</li>
    <li>

RL</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Goldenrod;">删除</span>

<ul>

#### <span style="color: Goldenrod;">删除</span>步骤

- 步骤1：用二叉排序树方法<span style="color: Goldenrod;">删除</span>node____
- 步骤2：若不平衡：
  - 从____向上回溯找第一个不平衡node____
  - ____为z的最高孩子node
  - ____为y的最高孩子node
- 步骤3：对以z为根的子树进行平衡调整：
  - LL情况：y是z____孩子，x是y____孩子
  - LR情况：y是z____孩子，x是y____孩子
  - RR情况：y是z____孩子，x是y____孩子
  - RL情况：y是z____孩子，x是y____孩子

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

w</li>
    <li>

w</li>
    <li>

z</li>
    <li>

y</li>
    <li>

x</li>
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
  - 仅需对____为根的子树调整
- <span style="color: Goldenrod;">删除</span>操作：
  - 调整____为根的子树后
  - 若____减1，可能需要继续向上调整
  - 可能一直调整到____node

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

根</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: Goldenrod;">删除</span>示例

- 以<span style="color: Goldenrod;">删除</span>node32为例：
  - 32为叶node直接<span style="color: Goldenrod;">删除</span>
  - 找到第一个不平衡node____(z)
  - ____为y，____为x
  - 满足____情况，执行先右后左双旋转

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7583531b4059bdd4839026ef84e33d80a0e80d188229f9a181a9205146f44d1b.jpg)`  
图7.16<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Goldenrod;">删除</span>

<div>
<details>
  <summary> </summary>
  <ul>
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

<ul>

### <span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>

命题追踪指定条件下<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的node数的分析（2012）

<ul>

#### <span style="color: Gold;">search</span>过程

- 与二叉排序树____
- 比较<span style="color: LimeGreen;">次数</span>≤树的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相同</li>
    <li>

深度</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### node数分析

- 深度为h的最少node数nh：
  - n0=____, n1=____, n2=____
  - nh=____+____+1
  - 推导：n3=4, n4=7, n5=12,...
- 含n个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>：
  - 最大深度为____
  - <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span><span style="color: LightSkyBlue;">效率</span>为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/05527187cb555c4a8c169a1c9bb747cea9d526708b08d8e44da08c7188104059.jpg)`  
图7.17node个数n最少的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>

> notice: 

该sum可用于求解给定node数的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>的<span style="color: Gold;">search</span>所需的最多比较<span style="color: LimeGreen;">次数</span>（或树的最大____）。如在含有12个node的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中<span style="color: Gold;">search</span>某个node的最多比较<span style="color: LimeGreen;">次数</span>？

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

O(log2n)</li>
    <li>

O(log2n)</li>
    <li>

高度</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: silver;">最多node数

- 深度为h的<span style="color: Goldenrod;">平衡</span><span style="color: Gold;">二叉</span><span style="color: green;">树</span>中含有的最多node数是____的情况

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

<ul>

## <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>

<ul>

### 定义

<ul>

#### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span>性质

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

</ul>

<ul>

#### <span style="color: silver;"><span style="color: black;">黑</span><span style="color: LightSkyBlue;">高</span>concept

- 从某node出发（不含该node）到达一个叶node的任意一个简单路径上
  - 的____node____（记为bh）
- ____高的concept是由性质⑤确定的
- 根node的____高称为<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____高

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

</ul>

<ul>

#### sum1：从根到叶node的最长路径不＞最短路径的____倍

- 最短路径：全由____node构成
- 最长路径：由____node和____node相间构成，____node数量相同
- 例如图7.18中的6-2和6-15-18-20就是这样的两条路径

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
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

</ul>

<ul>

#### sum2：有n个内部node的<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的____h≤____

- 证明过程：
  - 从根到叶node的任何路径至少一半是____node
  - 根的____高至少为____
  - 因此n≥____
  - 可得sum2结论

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高度</li>
    <li>

2log2(n+1)</li>
    <li>

黑</li>
    <li>

黑</li>
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
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>降低到"任意node左右子树____相差≤2倍"
- 应用场景：
  - ____<span style="color: Goldenrod;">删除</span>少，____多：适合AVL树
  - 其他情况：适合<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>
- 实际应用：
  - <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>应用更广泛
  - C++的map和set用____实现
  - Java的TreeMap和TreeSet用____实现

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

</ul>

</ul>

<ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>

<ul>

#### 基本过程

- 与二叉<span style="color: Gold;">search</span>树____类似
- 区别：____后需要调整以满足<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>性质
  - 通过重新____
  - 或____操作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

插入</li>
    <li>

着色</li>
    <li>

旋转</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### sum3：新____node初始着为____色

- 原因分析：
  - 若着为____色：
    - 会导致路径多出一个____node
    - 破坏性质⑤
    - 调整麻烦
  - 着为____色：
    - 所有路径____node数量不变
    - 仅在出现连续____node时需调整
    - 调整较简单

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

红</li>
    <li>

黑</li>
    <li>

红</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: GreenYellow;">插入</span>过程详述

1. 基本____：
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
     - z和父node交换<span style="color: gray;">位置</span>
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
     - 指针z上移____层

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f5ccc56ed08320a072e5b4dc2d9a90053800244c9efa93005dfc054cd43073d8.jpg)`  
图7.20情况3的调整方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
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
    <li>

两</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: GreenYellow;">插入</span>示例

- 以图7.21为例，展示____5、4、12的过程：
  - ____5：____处理
  - ____4：____到____处理
  - ____12：父node____色，无需调整

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/866a8fdbeb20f4f9f1017d2842fcadd4a0308566f5ba94047bdd131149297787.jpg)`  
图7.21<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: GreenYellow;">插入</span>过程

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

插入</li>
    <li>

情况3</li>
    <li>

插入</li>
    <li>

RL</li>
    <li>

RR</li>
    <li>

插入</li>
    <li>

黑</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: Goldenrod;">删除</span>

<ul>

#### <span style="color: Goldenrod;">删除</span>操作的影响

- ____操作易导致连续____node，破坏性质④
- <span style="color: Goldenrod;">删除</span>操作易造成____高变化，破坏性质⑤

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
  </ul>
</details>
</div>

</ul>

<ul>

#### 基本<span style="color: Goldenrod;">删除</span>过程

- 先执行二叉<span style="color: Gold;">search</span>树的____方法
- 两个孩子的情况：
  - 找中序____（或前驱）填补
  - 转换为<span style="color: Goldenrod;">删除</span>____node
  - ____node至多一个孩子

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: Goldenrod;">删除</span></li>
    <li>

后继</li>
    <li>

后继</li>
    <li>

后继</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### <span style="color: Goldenrod;">删除</span>情况分类

##### 情况A：待删node只有一个子树

- 两种可能：
  - 如图7.22所示
  - 子树必为____node

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cab26f5079edd0a6447893d1eae634ce7de3b9df2de6eabbb5a6359254c2e364.jpg)`  
图7.22只有右子树或左子树的<span style="color: Goldenrod;">删除</span>情况

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

- ____node：直接<span style="color: Goldenrod;">删除</span>
- ____node：
  - 设待删node为____
  - ____是替换node
  - <span style="color: Goldenrod;">删除</span>后路径____node减1
  - 将____视为双____node处理

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
    <li>

y</li>
    <li>

x</li>
    <li>

黑</li>
    <li>

x</li>
    <li>

黑</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 双<span style="color: black;">黑</span>node的处理

##### 情况1：兄弟nodew为____色

- 特点：
  - w有____色左右孩子和父node
- 处理：
  - 交换w和父node____
  - 对父node____
  - 转为情况2、3或4

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/60760335c4d8bc8941e363634d6e9120ff151d6b6f52818aa54fe7a239bac7ed.jpg)`  
图7.23情况1的调整方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

红</li>
    <li>

黑</li>
    <li>

颜色</li>
    <li>

左旋</li>
  </ul>
</details>
</div>

##### 情况2：w____色且右孩子____色(RR)

- 处理：
  - 交换w和父node____
  - w右孩子着____
  - 父node____
  - x变单重____色

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0acf8e79a22ee8cdebb7c67323a375bbd51c9a6a9a72ff5305d1ec8bf75d6c37.jpg)`  
图7.24情况2的调整方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黑</li>
    <li>

红</li>
    <li>

颜色</li>
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

- 处理：
  - 交换w和左孩子____
  - 对w____
  - 转为情况2

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21ad3f76de9b3e1effcce1f8a03e3fcbb06283ab2c8c5ded905ca2ecfa56abc7.jpg)`  
图7.25情况3的调整方式

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

颜色</li>
    <li>

右旋</li>
  </ul>
</details>
</div>

##### 情况4：w及其孩子都是____色

- 处理：
  - 去掉x和w各一重____色
  - x变普通____色，w变____色
  - 父node增加一重____色
  - x上升一层继续循环

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f77f4733c0cffc561dc2e545e593ce2eb429d88b4703d725d26d24d9778e963.jpg)`  
图7.26情况4的调整方式

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

</ul>

<ul>

#### <span style="color: Goldenrod;">删除</span>示例

- 以图7.27为例，展示<span style="color: Goldenrod;">删除</span>5和15的过程：
  - <span style="color: Goldenrod;">删除</span>5：____到____
  - <span style="color: Goldenrod;">删除</span>15：____到____处理

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16b040213c28dc879ebf6aede317568cd287ae396fdf09e05e9949dcf6c67b0e.jpg)`  
图7.27<span style="color: DarkRed;">红</span><span style="color: black;">黑</span><span style="color: green;">树</span>的<span style="color: Goldenrod;">删除</span>过程

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

## B树和$\mathbf{B}+$树

考研大纲对B树和$^{\mathrm{B+}}$树的要求各不相同，重点在于考查B树，不仅要求理解B树的基本特点，还要求掌握B树的建立、____和<span style="color: Goldenrod;">删除</span>操作，而对$^{\mathrm{B+}}$树则只考查____。

<ul>

### B树及其基本操作

所谓$m$阶B树是所有node的平衡因子均等于0的$m$路平衡<span style="color: Gold;">search</span>树。

> pro：B树的定义和特点（2009）

<ul>

#### B树的定义特性

- 一棵$m$阶B树或为____，或为满足如下特性的$m$叉树：
  - 树中每个node至多有____棵子树，即至多有____个<span style="color: green;">关键</span>字
  - 若根node不是叶node，则至少有____棵子树，即至少有____个<span style="color: green;">关键</span>字
  - 除根node外的所有非叶node至少有____棵子树，即至少有____个<span style="color: green;">关键</span>字
  - 所有非叶node的结构如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/641123898fc54d168c81307aaa0f46a0aeb4dc3c39dc6bc0add67a795683e706.jpg)`

  - 其中：
    - $K_{i}$ $(i=1,2,\cdots,n)$为node的____，且满足____
    - $P_{i}\,\,(i=0,\,1,\cdots,n)$为指向子树根node的____
    - 指针$P_{i+1}$所指子树中所有node的<span style="color: green;">关键</span>字均\boxed{\phantom{m-1}\hspace{0.5cm}}$K_{i}$
    - $P_{i}$所指子树中所有node的<span style="color: green;">关键</span>字均\boxed{\phantom{m-1}\hspace{0.5cm}}$K_{i}$
    - $n~(\lceil m/2\rceil\!-\!1\!\leqslant\!n\!\leqslant\!\boxed{\phantom{m-1}\hspace{0.5cm}})$为node中<span style="color: green;">关键</span>字的个数
  - 所有的叶node都出现在同一层次上，并且不带____

> pro：B树中<span style="color: green;">关键</span>字数和node数的分析（2013、2014、2018、2021）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

concept</li>
    <li>

空树</li>
    <li>

m</li>
    <li>

m-1</li>
    <li>

2</li>
    <li>

1</li>
    <li>

\lceil m/2\rceil</li>
    <li>

\lceil m/2\rceil-1</li>
    <li>

<span style="color: green;">关键</span>字</li>
    <li>

$K_{1}<K_{2}<\cdots<K_{n}$</li>
    <li>

指针</li>
    <li>

＜</li>
    <li>

＞</li>
    <li>

m-1</li>
    <li>

信息</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B树的性质分析

- 以图7.28所示5阶B树为例：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3296559c5d2d7110e03f8b45bfcbf4ee8b8931f234697bbe0eba579683969db7.jpg)`

- 主要性质：
  - node的孩子个数等于该node中<span style="color: green;">关键</span>字个数加____
  - 根node特性：
    - 无<span style="color: green;">关键</span>字时无子树(____)
    - 有<span style="color: green;">关键</span>字时子树个数≥____
  - 非根非叶node特性：
    - 至少有____棵子树
    - 至少有____个<span style="color: green;">关键</span>字
    - 至多有____棵子树和____个<span style="color: green;">关键</span>字
  - <span style="color: green;">关键</span>字排序特性：
    - 从左到右____
    - 左侧子树<span style="color: green;">关键</span>字＜____<span style="color: green;">关键</span>字
    - 右侧子树<span style="color: green;">关键</span>字＞____<span style="color: green;">关键</span>字
  - 叶node特性：
    - 均在第____层
    - 代表查找失败<span style="color: gray;">位置</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

1</li>
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

当前</li>
    <li>

当前</li>
    <li>

4</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B树的查找

- 基本特点：
  - 与二叉排序树____
  - 每个node包含多个____
  - 进行多路分支决定

##### 查找操作的两个基本步骤

- 在B树中找node(____操作)
- 在node内找<span style="color: green;">关键</span>字(____操作)
  - 可用顺序查找或折半查找
  - 查找<span style="color: LightSkyBlue;">效率</span>取决于目标node____数

##### 查找过程

- 从____node开始
- 在当前node____表中查找
- 根据比较结果选择子树继续查找
- 直到找到目标或达到____node

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相似</li>
    <li>

<span style="color: green;">关键</span>字</li>
    <li>

磁盘</li>
    <li>

内存</li>
    <li>

层次</li>
    <li>

根</li>
    <li>

有序</li>
    <li>

叶</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B树的<span style="color: LightSkyBlue;">高度</span>分析

##### <span style="color: LightSkyBlue;">高度</span>定义

- 不包括最后不带信息的____node层

##### <span style="color: LightSkyBlue;">高度</span>范围分析

- 最小____情况：
  - 每个node<span style="color: green;">关键</span>字数____
  - 满足：$n\!\leqslant\!(m-1)(1+m+m^{2}+\cdots+m^{h-1})=\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 得到：$h\geqslant\boxed{\phantom{m-1}\hspace{0.5cm}}$

- 最大____情况：
  - 每个node<span style="color: green;">关键</span>字数____
  - 层次node数分析：
    - 第一层：至少____个node
    - 第二层：至少____个node
    - 第三层：至少____个node
    - 第$h+1$层：至少____个node
  - 满足：$n+1\!\geqslant\\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 得到：$h{\leqslant}\boxed{\phantom{m-1}\hspace{0.5cm}}$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

叶</li>
    <li>

高度</li>
    <li>

最多</li>
    <li>

m^{h}-1</li>
    <li>

\log_{m}\left(n+1\right)</li>
    <li>

高度</li>
    <li>

最少</li>
    <li>

1</li>
    <li>

2</li>
    <li>

2\left\lceil m/2\right\rceil</li>
    <li>

2(\lceil m/2\rceil)^{h-1}</li>
    <li>

2(\lceil m/2\rceil)^{h-1}</li>
    <li>

\log_{\lceil m/2\rceil}((n+1)/2)+1</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### B树的<span style="color: GreenYellow;">插入</span>操作

> pro：通过____操作____一棵初始为空的B树（2020）

##### <span style="color: GreenYellow;">插入</span>过程

- 定位阶段：
  - 使用B树____算法
  - 找到____的终端node<span style="color: gray;">位置</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入</li>
    <li>

构造</li>
    <li>

查找</li>
    <li>

插入</li>
  </ul>
</details>
</div>

- <span style="color: GreenYellow;">插入</span>阶段：
  - <span style="color: green;">关键</span>字数限制：$[\lceil m/2\rceil\!-\!1,\,\boxed{\phantom{m-1}\hspace{0.5cm}}]$
  - 两种情况：
    - <span style="color: GreenYellow;">插入</span>后<span style="color: green;">关键</span>字数<____：直接<span style="color: GreenYellow;">插入</span>
    - <span style="color: GreenYellow;">插入</span>后<span style="color: green;">关键</span>字数>____：需要分裂

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$m-1$</li>
    <li>

$m$</li>
    <li>

$m-1$</li>
  </ul>
</details>
</div>

##### node分裂方法

- 基本步骤：
  - 创建新node
  - 从____<span style="color: gray;">位置</span>分割<span style="color: green;">关键</span>字
  - 左部分保留在____node
  - 右部分移至____node
  - ____<span style="color: green;">关键</span>字上移至父node
- 特殊情况：
  - 父node可能需要继续____
  - 分裂可能传播至____node
  - 可能导致树<span style="color: LightSkyBlue;">____</span>增1

- 示例(m=3的B树)：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/80d65ed644ea63d8e94f85979f930603e6eb9b46bb9c910cd6cf03ad6c8bf748.jpg)`

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

中间</li>
    <li>

分裂</li>
    <li>

根</li>
    <li>

高度</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### B树的<span style="color: Goldenrod;">删除</span>

<ul>

#### <span style="color: Goldenrod;">删除</span>操作概述

- B树的<span style="color: Goldenrod;">删除</span>操作与<span style="color: GreenYellow;">插入</span>操作类似，但更____
- 需确保<span style="color: Goldenrod;">删除</span>后node<span style="color: green;">关键</span>字个数≥____
- 可能涉及node的"____"问题

> pro：B树的<span style="color: Goldenrod;">删除</span>操作的实例（2012、2022）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

复杂</li>
    <li>

$m/2-1$</li>
    <li>

合并</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 非终端node的<span style="color: Goldenrod;">删除</span>处理

- 当被删<span style="color: green;">关键</span>字k不在终端node时：
  - 可用k的____(k')或____替代
    - 前驱：k左侧子树中"____"元素
    - 后继：k右侧子树中"____"元素
  - 然后<span style="color: Goldenrod;">删除</span>____
  - k'必定在____node中

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

$k'$</li>
    <li>

终端</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 终端node的<span style="color: Goldenrod;">删除</span>情况

##### 情况一：直接<span style="color: Goldenrod;">删除</span>

- 条件：<span style="color: Goldenrod;">删除</span>前<span style="color: green;">关键</span>字个数≥____
- 操作：____删去该<span style="color: green;">关键</span>字

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil$</li>
    <li>

直接</li>
  </ul>
</details>
</div>

##### 情况二：借助兄弟node

- 条件：
  - <span style="color: Goldenrod;">删除</span>前<span style="color: green;">关键</span>字个数=____
  - 相邻兄弟node<span style="color: green;">关键</span>字个数≥____
- 操作：调整该node、____node及____node

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

兄弟</li>
    <li>

父</li>
  </ul>
</details>
</div>

##### 情况三：node合并

- 条件：
  - <span style="color: Goldenrod;">删除</span>前<span style="color: green;">关键</span>字个数=____
  - 相邻兄弟node<span style="color: green;">关键</span>字个数≤____
- 操作：与____node及____node<span style="color: green;">关键</span>字合并

> pro：非空B树的<span style="color: Gold;">search</span>、<span style="color: GreenYellow;">插入</span>、<span style="color: Goldenrod;">删除</span>操作的特点（2023）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

$\lceil m/2 \rceil - 1$</li>
    <li>

兄弟</li>
    <li>

父</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 合并后的处理

- 双亲node为根node时：
  - 若<span style="color: green;">关键</span>字减至____，<span style="color: Goldenrod;">删除</span>根node
  - 合并后____node成为根
- 双亲node非根node时：
  - 若<span style="color: green;">关键</span>字数减至____
  - 需与____node调整或合并
  - 重复直至符合____树要求

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

新</li>
    <li>

$\lceil m/2 \rceil - 2$</li>
    <li>

兄弟</li>
    <li>

B</li>
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
     - 包含____<span style="color: green;">关键</span>字
     - 包含____指针
     - 按____顺序排列
     - 相邻叶node相互____
  5. 分支node特性：
     - 仅包含子node____<span style="color: green;">关键</span>字
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

<span style="color: green;">关键</span>字</li>
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

- <span style="color: green;">关键</span>字与子树关系：
  - B+树：n个<span style="color: green;">关键</span>字对应____棵子树
  - B树：n个<span style="color: green;">关键</span>字对应____棵子树

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n$</li>
    <li>

$n+1$</li>
  </ul>
</details>
</div>

##### node特性差异

- <span style="color: green;">关键</span>字数量范围：
  - B+树：____≤n≤____
  - B树：____≤n≤____
- <span style="color: green;">关键</span>字分布：
  - B+树：叶node包含____<span style="color: green;">关键</span>字
  - B树：<span style="color: green;">关键</span>字____出现

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

$m-1$</li>
    <li>

全部</li>
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

- 基本类似____树
- <span style="color: Gold;">search</span>特点：
  - 总是遍历到____node
  - 路径：____node到____node
  - 支持两种<span style="color: Gold;">search</span>方式：
    - ____<span style="color: Gold;">search</span>
    - ____<span style="color: Gold;">search</span>

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

# <span style="color: silver;"><span style="color: RoyalBlue;">散列</span>（Hash）表

<ul>

## <span style="color: silver;">concept

<ul>

### <span style="color: silver;">n.

- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>(哈希<span style="color: green;">函数</span>)
  - 定义：把<span style="color: Gold;">search</span>表中的<span style="color: green;">关键</span>字映射成____地址的<span style="color: green;">函数</span>
  - 表示：$\operatorname{Hash}(\ker)=\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 地址类型：____<span style="color: LimeGreen;">下标</span>、____或内存地址等

- <span style="color: Gold;">冲突</span>
  - 定义：不同<span style="color: green;">关键</span>字映射到____地址
  - 同义词：发生<span style="color: Gold;">冲突</span>的____<span style="color: green;">关键</span>字
  - 处理：
    - 需设计良好的<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>减少____
    - 设计<span style="color: Gold;">冲突</span>____方法

- <span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>(哈希表)
  - 定义：根据<span style="color: green;">关键</span>字直接进行____的数据结构
  - 特点：建立<span style="color: green;">关键</span>字和____地址的直接映射
  - 性能：理想情况下<span style="color: Gold;">search</span>时间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

对应</li>
    <li>

Addr</li>
    <li>

数组</li>
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

存储</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: silver;"><span style="color: Lime;">构造</span>方法

<ul>

#### <span style="color: silver;"><span style="color: Lime;">构造</span>原则

- 定义域必须包含____<span style="color: green;">关键</span>字
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

- 方法：取<span style="color: green;">关键</span>字的____<span style="color: green;">函数</span>值为<span style="color: RoyalBlue;">散列</span>地址
- 优点：计算____，无<span style="color: Gold;">冲突</span>
- 适用：<span style="color: green;">关键</span>字分布基本____的情况
- 缺点：<span style="color: green;">关键</span>字不连续时____空间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性</li>
    <li>

简单</li>
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

- 方法：$H(\mathrm{kcy})=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- 要点：选择合适的____值
  - p不＞____m
  - p最接近或等于m的____
- 目标：使<span style="color: green;">关键</span>字____映射到任意地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\mathrm{kcy}\:\%\:p$</li>
    <li>

$p$</li>
    <li>

表长</li>
    <li>

质数</li>
    <li>

等<span style="color: LightSkyBlue;">概率</span></li>
  </ul>
</details>
</div>

</ul>

<ul>

#### 数字分析法

- 适用：已知____集合
- 原理：
  - 分析r进制数各位上数码____频率
  - 选取分布____的位作为<span style="color: RoyalBlue;">散列</span>地址
- 局限：更换<span style="color: green;">关键</span>字需____<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

<span style="color: green;">关键</span>字</li>
    <li>

出现</li>
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

- 方法：取<span style="color: green;">关键</span>字____值的中间几位
- 特点：
  - <span style="color: RoyalBlue;">散列</span>地址与<span style="color: green;">关键</span>字____都相关
  - 地址分布较____
- 适用：<span style="color: green;">关键</span>字各位取值____或位数较小

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

平方</li>
    <li>

每位</li>
    <li>

均匀</li>
    <li>

不均匀</li>
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

<span style="color: green;">关键</span>字</li>
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
  - 为发生<span style="color: Gold;">冲突</span>的<span style="color: green;">关键</span>字寻找下一个"____"的Hash地址
  - 使用____表示第i次探测得到的<span style="color: RoyalBlue;">散列</span>地址
  - 处理流程：
    - 若H1发生<span style="color: Gold;">冲突</span>，继续寻找____
    - 若H2仍<span style="color: Gold;">冲突</span>，继续寻找____
    - 以此类推，直到找到不发生<span style="color: Gold;">冲突</span>的____
    - ____即为该<span style="color: green;">关键</span>字在表中的最终地址

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

$Hi$</li>
    <li>

$H2$</li>
    <li>

$H3$</li>
    <li>

$Hk$</li>
    <li>

$Hk$</li>
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

- 递推公式：$H_{i}\,{=}\,\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - H(key)为<span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>
  - $i=\boxed{\phantom{m-1}\hspace{0.5cm}}$ $(k{\leqslant}\boxed{\phantom{m-1}\hspace{0.5cm}})$
  - $m$表示<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>____
  - $d_{i}$为____序列

> pro：堆积现象导致的结果（2014）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$(H(\mathrm{kcy})+d_{i})\:\%\:m$</li>
    <li>

$1,2,\cdots,k$</li>
    <li>

$m-1$</li>
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
- $d_{i}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
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

$1,2,\cdots,m-1$</li>
    <li>

顺序</li>
    <li>

表首</li>
    <li>

空闲</li>
    <li>

堆积</li>
    <li>

<span style="color: LightSkyBlue;">效率</span></li>
  </ul>
</details>
</div>

##### 2. 平方探测法

- 又称二次探测法
- $d_{i}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- 条件：
  - $k{\leqslant}\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 表长m必须是____的素数
- 优缺点：
  - 避免____问题
  - 不能探测____单元，至少能探测一半

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$1^{2},-1^{2},2^{2},-2^{2},\cdots,k^{2},-k^{2}$</li>
    <li>

$m/2$</li>
    <li>

$4k+3$</li>
    <li>

堆积</li>
    <li>

所有</li>
  </ul>
</details>
</div>

##### 3. 双<span style="color: RoyalBlue;">散列</span>法

- $d_{i}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：
  - $H_{i}\,{=}\,\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - 初始探测<span style="color: gray;">位置</span>：$H_{0}\,{=}\,\boxed{\phantom{m-1}\hspace{0.5cm}}$
  - i为<span style="color: Gold;">冲突</span>____，初始为0

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$i{\times}\mathrm{Hash}_{2}(\mathrm{ker})$</li>
    <li>

$(H(\mathrm{kcy})+i{\times}\mathrm{Hash}_{2}(\mathrm{kcy}))\:\%\:m$</li>
    <li>

$H(\mathrm{kcy})\:\%\:m$</li>
    <li>

<span style="color: LimeGreen;">次数</span></li>
  </ul>
</details>
</div>

##### 4. 伪随机序列法

- $d_{i}\!=$____

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>中<span style="color: Goldenrod;">删除</span>部分元素后的<span style="color: Gold;">search</span><span style="color: LightSkyBlue;">效率</span>分析（2023）

> notice: 

- 开放定址法<span style="color: Goldenrod;">删除</span>元素的注意事项：
  - 不能随便____<span style="color: Goldenrod;">删除</span>表中已有元素
    - 原因：会截断其他____元素的查找路径
  - <span style="color: Goldenrod;">删除</span>方案：
    - 采用____<span style="color: Goldenrod;">删除</span>方式
    - 具体做法：在要<span style="color: Goldenrod;">删除</span>的元素<span style="color: gray;">位置</span>做一个____标记
  - 副作用：
    - 多次<span style="color: Goldenrod;">删除</span>后会造成____现象
      - 表面上：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>很满
      - 实际上：许多<span style="color: gray;">位置</span>未被利用

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

<span style="color: Goldenrod;">删除</span></li>
    <li>

假满</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

### <span style="color: silver;"><span style="color: gray;">拉</span><span style="color: RoyalBlue;">链</span>法

- 又称链接法、chaining
- 原理：
  - ____存储在线性链表中
  - 链表由<span style="color: RoyalBlue;">散列</span>地址____标识
  - ____指针存放在<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>对应单元
- 适用：
  - usually进行<span style="color: GreenYellow;">插入</span>和____的情况

- eg
  - 已知条件：
    - <span style="color: green;">关键</span>字序列：{19,14,23,01,68,20,84,27,55,11,10,79}
    - <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：H(key)=____
    - 处理<span style="color: Gold;">冲突</span>方法：____
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

同义词</li>
    <li>

唯一</li>
    <li>

头</li>
    <li>

<span style="color: Goldenrod;">删除</span></li>
    <li>

$key\%13$</li>
    <li>

拉链法</li>
    <li>

平均</li>
  </ul>
</details>
</div>

</ul>

<ul>

### <span style="color: RoyalBlue;">散列</span><span style="color: Gold;">search</span>及性能分析

> pro：<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span>的<span style="color: Lime;">构造</span>及<span style="color: Gold;">search</span><span style="color: LightSkyBlue;">效率</span>的分析（2010、2018、2019）

<ul>

#### <span style="color: Gold;">search</span>过程

- 初始化：Addr $\smile$____
- 步骤：
  1. 检测地址____<span style="color: gray;">位置</span>
     - 无记录：返回____
     - 有记录：比较____值
       - 相等：返回____
       - 不等：执行步骤2
  2. 计算下一<span style="color: RoyalBlue;">散列</span>____
     - 更新____
     - 返回步骤1

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$Hash(key)$</li>
    <li>

$Addr$</li>
    <li>

失败</li>
    <li>

$key$</li>
    <li>

成功</li>
    <li>

地址</li>
    <li>

$Addr$</li>
  </ul>
</details>
</div>

</ul>

<ul>

#### eg

<ul>

##### 示例数据

- <span style="color: green;">关键</span>字序列：{19,14,23,01,68,20,84,27,55,11,10,79}
- <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>：H(key)=____
- 处理方法：____探测

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/37af350f00080c15707906e376408f9d353587a88dd2c9322a9a8e4bad9e594b.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$key\%13$</li>
    <li>

线性</li>
  </ul>
</details>
</div>

</ul>

<ul>

##### <span style="color: Gold;">search</span>过程示例

###### 值84的<span style="color: Gold;">search</span>

1. 初始地址：H(84)=____
2. 第一次<span style="color: Gold;">冲突</span>：H₁=____
3. 第二次<span style="color: Gold;">冲突</span>：H₂=____
4. 结果：成功，<span style="color: gray;">位置</span>____

###### 值38的<span style="color: Gold;">search</span>

1. 初始地址：H(38)=____
2. 第一次<span style="color: Gold;">冲突</span>：H₁=____
3. 结果：失败，L[13]为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/becdbede030512e5e2ac3b81b756cc81d076a78bca8c20dbff207903db34e92a.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

6</li>
    <li>

$(6+1)\%16=7$</li>
    <li>

$(6+2)\%16=8$</li>
    <li>

8</li>
    <li>

12</li>
    <li>

$(12+1)\%16=13$</li>
    <li>

空</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

#### 性能分析

<ul>

##### <span style="color: LightSkyBlue;">平均</span><span style="color: Gold;">search</span>长度

- ASL计算：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$(1\times6+2+3\times3+4+9)/12=2.5$</li>
  </ul>
</details>
</div>

</ul>

<ul>

##### 影响因素

> 影响<span style="color: RoyalBlue;">散列</span><span style="color: gray;">表</span><span style="color: Gold;">search</span><span style="color: LightSkyBlue;">效率</span>的因素（2011、2022）

1. <span style="color: RoyalBlue;">散列</span><span style="color: green;">函数</span>
2. 处理<span style="color: Gold;">冲突</span>的____
3. ____因子
   - 定义：$\alpha\!=$____
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

$\frac{表中记录数n}{散列表长度m}$</li>
    <li>

$\alpha$</li>
    <li>

越大</li>
    <li>

越小</li>
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
  - 基于查找____
    - 由相同数据类型的记录或node构成

###### 计算公式

- 查找成功的ASL：AS $\mathrm{~L~}_{n\in i}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- 查找失败的ASL：A $\backslash\mathrm{SL}_{\mathbb{F}^{n\mathbb{W}}}=\boxed{\phantom{m-1}\hspace{0.5cm}}$

###### 参数说明

- 已有数据元素：____个
- 查找成功情况
  - 每个元素查找____：$p_{i}$
  - 数据____<span style="color: LimeGreen;">次数</span>：$c_{i}\ (i=1,2,\cdots,n)$
- 查找失败情况
  - 子集合元素查找____：$q_{j}$
  - 数据____<span style="color: LimeGreen;">次数</span>：$c_{j}\ (j=0,\,1,\cdots,\,n)$

###### ASL考虑方式

- 综合考虑
  - 条件：____
  - 元素查找<span style="color: LightSkyBlue;">概率</span>相等时：$p_{i}=q_{j}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- 分开考虑
  - 条件：____
  - 元素查找<span style="color: LightSkyBlue;">概率</span>相等时：$p_{i}=\boxed{\phantom{m-1}\hspace{0.5cm}}\,,\;\;q_{j}=\boxed{\phantom{m-1}\hspace{0.5cm}}$
- 实际应用
  - 多采用____考虑
  - 原因：查找失败情况常被____
  - 注意：两种考虑方式计算结果不同，考试需仔细阅题

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

性能</li>
    <li>

结构</li>
    <li>

$\sum_{i=1}^{n}p_{i}c_{i}$</li>
    <li>

$\sum_{j=0}^{n}q_{j}c_{j}$</li>
    <li>

$n$</li>
    <li>

<span style="color: LightSkyBlue;">概率</span></li>
    <li>

比较</li>
    <li>

<span style="color: LightSkyBlue;">概率</span></li>
    <li>

比较</li>
    <li>

$\sum_{i=1}^{n}p_{i}+\sum_{j=0}^{n}q_{j}=1$</li>
    <li>

$\frac{1}{2n+1}$</li>
    <li>

$\sum_{i=1}^{n}p_{i}=1\;,\;\;\sum_{j=0}^{n}q_{j}=1$</li>
    <li>

$\frac{1}{n}$</li>
    <li>

$\frac{1}{n+1}$</li>
    <li>

分开</li>
    <li>

忽略</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

