

# above

<ul>

## 【考纲内容】

<ul>

____时间复杂度和____复杂度的分析&计算

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

算法</li>
    <li>

空间</li>
  </ul>
</details>
</div>

</ul>

## 【知识框架】

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/07b4046e520345a2f48d4734855c101b74d5ea80544a0b7500411d020f367de0.jpg)

</ul>

## 【复习提示】

<ul>

- not in 大纲
- 初步了解数据结构的基本内容和基本方法
- 分析算法的**____**复杂度和**____**复杂度是本章重点，need熟练掌握
  - 算法设计题: 分析时间复杂度、空间复杂度
  - 时间复杂度' 选择题

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间</li>
    <li>

空间</li>
  </ul>
</details>
</div>

</ul>

# 基本概念和术语

<ul>

## 数据

<ul>

- 信息的**____**
- 是描述客观事物属性的以下内容的**____**：
  - **____**
  - **____**
  - 所有能输入到计算机中并被计算机程序识别和处理的**____**
- 数据是计算机程序加工的原料

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

载体</li>
    <li>

集合</li>
    <li>

数</li>
    <li>

字符</li>
    <li>

符号</li>
  </ul>
</details>
</div>

</ul>

## 数据元素

<ul>

- 数据的基本单位
- 通常作为一个整体进行考虑和处理
- 组成结构：
  - 可由若干____组成
  - ____是构成数据元素的不可分割的最小单位
  - 例如：学生记录是一个数据元素
    - 由学号、姓名、性别等____组成

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据项</li>
    <li>

数据项</li>
    <li>

数据项</li>
  </ul>
</details>
</div>

</ul>

## 数据对象

<ul>

- 具有相同性质的____的**____**
- 数据的一个子集
- 示例：
  - 整数数据对象是集合 $N=\{0,\pm1,\pm2,\cdots\}$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据元素</li>
    <li>

集合</li>
  </ul>
</details>
</div>

</ul>

## 数据类型

<ul>

- 是一个值的集合和定义在此集合上的一组____的总称

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

操作</li>
  </ul>
</details>
</div>

### 原子类型

<ul>

- 其值____的数据类型

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不可再分</li>
  </ul>
</details>
</div>

</ul>

### 结构类型

<ul>

- 其值可以再分解为若干____的数据类型

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

成分（分量）</li>
  </ul>
</details>
</div>

</ul>

### 抽象数据类型

<ul>

- 一个数学模型及定义在该数学模型上的一组____
- 特点：
  - 通常是对数据的某种____
  - 定义了数据的____范围及其结构形式
  - 定义了对数据____的集合

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

操作</li>
    <li>

抽象</li>
    <li>

取值</li>
    <li>

操作</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 数据结构

<ul>

- 是相互之间存在一种或多种特定关系的____的集合
- 数据元素关系：
  - 不是孤立存在的
  - 它们之间存在某种____
  - 这种数据元素相互之间的关系称为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据元素</li>
    <li>

关系</li>
    <li>

结构（Structure）</li>
  </ul>
</details>
</div>

### 数据结构的三个方面

<ul>

- ____结构
- ____结构
- 数据的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

逻辑</li>
    <li>

存储</li>
    <li>

运算</li>
  </ul>
</details>
</div>

</ul>

### 结构关系

<ul>

- 数据的逻辑结构和存储结构是密不可分的两个方面
- 算法相关：
  - 算法的____取决于所选定的逻辑结构
  - 算法的____依赖于所采用的存储结构

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

设计</li>
    <li>

实现</li>
  </ul>
</details>
</div>

</ul>

</ul>

# ds三要素

<ul>

## data'逻辑结构

<ul>

### 定义与分类

<ul>

- 逻辑结构是指 <u>____</u> 之间的逻辑关系
  - 从逻辑关系上描述数据
  - 与数据的____无关
  - ____于计算机

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据元素</li>
    <li>

存储</li>
    <li>

独立</li>
  </ul>
</details>
</div>

</ul>

### 主要分类

<ul>

- ____结构
  - 线性表为典型
- ____结构
  - 集合、树和图为典型

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4c0160e3de7b882cb02760de400a3f1d14a69d82805811692110d7243ef0d6d6.jpg)
图1.1数据的逻辑结构分类图

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线性</li>
    <li>

非线性</li>
  </ul>
</details>
</div>

</ul>

### 基本结构关系类型

<ul>

#### 集合结构

<ul>

- 数据元素之间除"____"外，别无其他关系

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

同属一个集合</li>
  </ul>
</details>
</div>

</ul>

#### 线性结构

<ul>

- 数据元素之间只存在____的关系

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一对一</li>
  </ul>
</details>
</div>

</ul>

#### 树形结构

<ul>

- 数据元素之间存在____的关系

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一对多</li>
  </ul>
</details>
</div>

</ul>

#### 图状/网状结构

<ul>

- 数据元素之间存在____的关系

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

多对多</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3d4eee36de9ffedeebe77662203b1d9d8c21ec8508de8057cb03357e0b73365f.jpg)
图1.2四类基本结构关系示例图

</ul>

</ul>

## data'存储结构

<ul>

### 基本概念

<ul>

- 存储结构是数据结构在计算机中的表示（____结构）
  - 包括____的表示和关系的表示
  - 是用计算机语言实现的____结构
  - 依赖于____语言

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理</li>
    <li>

数据元素</li>
    <li>

逻辑</li>
    <li>

计算机</li>
  </ul>
</details>
</div>

</ul>

### 主要存储方式

<ul>

#### 顺序存储

<ul>

- 特点：
  - 逻辑相邻元素____位置也相邻
  - 关系由____单元邻接关系体现
- 优点：
  - 可实现____存取
  - 每个元素占用最少存储空间
- 缺点：
  - 只能使用相邻____单元
  - 可能产生较多外部碎片

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理</li>
    <li>

存储</li>
    <li>

随机</li>
    <li>

存储</li>
  </ul>
</details>
</div>

</ul>

#### 链式存储

<ul>

- 特点：
  - 逻辑相邻元素____位置不必相邻
  - 通过____表示元素间逻辑关系
- 优点：
  - 不会出现碎片现象
  - 能充分利用所有____单元
- 缺点：
  - 需额外____存储空间
  - 只能实现____存取

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理</li>
    <li>

指针</li>
    <li>

存储</li>
    <li>

指针</li>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

#### 索引存储

<ul>

- 特点：
  - 建立附加____表
  - 索引项形式：（____，地址）
- 优点：
  - ____速度快
- 缺点：
  - 索引表占用额外存储空间
  - 增删数据需修改索引表，耗时多

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

索引</li>
    <li>

关键字</li>
    <li>

检索</li>
  </ul>
</details>
</div>

</ul>

#### 散列存储

<ul>

- 特点：
  - 根据____直接计算存储地址
  - 也称____（Hash）存储
- 优点：
  - ____、增删操作快
- 缺点：
  - 散列函数不好可能造成____
  - 解决冲突增加时空开销

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

哈希</li>
    <li>

检索</li>
    <li>

冲突</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## data'运算

<ul>

### 运算组成

<ul>

- 包括运算的____和____
  - ____针对逻辑结构
    - 指出运算的功能
  - ____针对存储结构
    - 指出运算的具体操作步骤

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

定义</li>
    <li>

实现</li>
    <li>

定义</li>
    <li>

实现</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 算法和算法评价

<ul>

## 基本概念

<ul>

### 算法定义

<ul>

- 算法（Algorithm）是对特定问题**____**的一种描述
  - 是指令的____序列
  - 每条指令表示一个或多个____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

求解步骤</li>
    <li>

有限</li>
    <li>

操作</li>
  </ul>
</details>
</div>

</ul>

### 算法特性

<ul>

- 一个算法具有五个重要特性：
  - ____性
    - 一个算法必须总在执行有穷步之后结束
    - 且每一步都可在有穷时间内完成
  - ____性
    - 算法中每条指令必须有确切的含义
    - 对于相同的输入只能得出相同的输出
  - ____性
    - 算法中描述的操作都可以通过已经实现的基本运算执行有限次来实现
  - ____
    - 一个算法有零个或多个输入
    - 这些输入取自于某个特定的对象的集合
  - ____
    - 一个算法有一个或多个输出
    - 这些输出是&输入有着某种特定关系的量

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有穷</li>
    <li>

确定</li>
    <li>

可行</li>
    <li>

输入</li>
    <li>

输出</li>
  </ul>
</details>
</div>

</ul>

### 算法设计目标

<ul>

- 设计一个"好"的算法应考虑达到以下目标：
  - ____性
    - 正确地解决求解问题
  - ____性
    - 良好的可读性
  - ____性
    - 对输入的**____**数据做出反应或**____**
  - 高efficiency&低存储量需求
    - efficiency：算法执行的____
    - 存储量需求：算法执行过程中所need的最大____空间
    - both与问题的规模有关

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

正确</li>
    <li>

可读</li>
    <li>

健壮</li>
    <li>

非法</li>
    <li>

处理</li>
    <li>

时间</li>
    <li>

存储</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 算法efficiency的度量

<ul>

> pro：（算法题）分析时空复杂度（2010一2013、2015、2016、2018一2021）

- 算法efficiency的度量 is described through **____**复杂度和**____**复杂度

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间</li>
    <li>

空间</li>
  </ul>
</details>
</div>

### 时间复杂度

<ul>

> pro：分析算法的时间复杂度（2011一2014、2017、2019、2022）

#### 基本概念

<ul>

- 频度
  - 一个语句的**____** ← 该语句在算法中被重复执行的**____**
  - 算法中所有语句的频度之和记为 $T(n)$
    - 是该算法问题规模 $n$ 的____，时间复杂度主要分析 $T(n)$ 的数量级
    - 基本运算（最深层循环中的语句）的频度与 $T(n)$ 同数量级
      - thus, usually将算法中**____**的执行次数的数量级as该算法的时间复杂度

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

频度</li>
    <li>

次数</li>
    <li>

函数</li>
    <li>

基本运算</li>
  </ul>
</details>
</div>

</ul>

#### 时间复杂度表示

<ul>

- 算法的时间复杂度记为 $T(n)=O(f(n))$
  - $O$ 的含义是 $T(n)$ 的____
    - 严格的数学定义是：
      - 若 $T(n)$ 和 $f(n)$ 是定义在正整数集合上的两个函数
        - 则存在正常数 $C$ 和 $n_{0}$
        - 使得当 $n{\geqslant}n_{0}$ 时
      - 都满足 $0\leqslant T(n)\leqslant C f(n)$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数量级</li>
  </ul>
</details>
</div>

</ul>

#### 影响因素

<ul>

- 算法的T复杂度not only依赖于问题的**____** $n$
- but also取决于待输入数据的**____**（如输入数据元素的初始状态)

eg，在数组 $\mathbb{A}\left[0...\mathtt{n}-1\right]$ 中，查找给定值 $k$ 的算法大致如下：
(1)  $\scriptstyle{\dot{\mathbf{i}}}=\mathbf{n}-1$  (2)while(  $\scriptstyle{\dot{\mathbf{1}}}>=0\,\&$  &(A[i]  $!\!=\!\!\kappa$  (3)  $\mathrm{i--}$  （4)returni;

该算法中语句3（基本运算）的频度不仅&问题规模 $n$ 有关，而且&下列因素有关：
- $\textcircled{\scriptsize{1}}$ 若A中没有& $\kappa$ 相等的元素，则语句3的频度 $f(n)\!=\!n$
- $\circledcirc$ 若A的最后一个元素等于k，则语句3的频度 $f(n)$ 是常数0

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

规模</li>
    <li>

性质</li>
  </ul>
</details>
</div>

</ul>

#### 时间复杂度分类

<ul>

- ____时间复杂度
  - 在最坏情况下，算法的时间复杂度
- ____时间复杂度
  - 所有可能输入实例在等概率出现的情况下，算法的期望运行时间
- ____时间复杂度
  - 在最好情况下，算法的时间复杂度
- 一般总是考虑在最坏情况下的时间复杂度，以保证算法的运行时间不会比它更长

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最坏</li>
    <li>

平均</li>
    <li>

最好</li>
  </ul>
</details>
</div>

</ul>

#### 时间复杂度计算规则

<ul>

- TIME COMPLEXITY两条规则：
  - 1）加法规则：
    $T(n)=T_{1}(n)+T_{2}(n)=O(f(n))+O(g(n))=O(\operatorname*{max}(f(n),g(n)))$
  - 2）乘法规则：
    $T(n)=T_{1}(n)\times T_{2}(n)=O(f(n))\times O(g(n))=O(f(n)\times g(n))$

eg，设a{）、b{}、c{}三个语句块的时间复杂度分别为 $O(1)$、$O(n)$、$O(n^{2})$，则
-  #ac() /时间复杂度为 $O(n^{2})$，满足____规则
- al bi）/时间复杂度为 $O(n^{3})$，满足____规则

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

加法</li>
    <li>

乘法</li>
  </ul>
</details>
</div>

</ul>

#### 常见时间复杂度

<ul>

- 常见的渐近时间复杂度
  $O(1)<O(\log_{2}n)<O(n)<O(n\log_{2}n)<O(n^{2})<O(n^{3})<O(2^{n})<O(n!)<O(n^{n})$

</ul>

</ul>

### 空间复杂度

<ul>

#### 基本概念

<ul>

- 算法的空间复杂度 $S(n)$ 定义为该算法所需的**____**
  - 是问题规模 $n$ 的**____**
  - 记为: $S(n)=O(g(n))$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储空间</li>
    <li>

函数</li>
  </ul>
</details>
</div>

</ul>

#### 空间需求分析

<ul>

- 程序执行时需要的存储空间：
  - 本身所用的____、常数、变量和输入数据
  - 对数据进行操作的____单元
  - 存储一些为实现计算所需信息的**____**空间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

指令</li>
    <li>

工作</li>
    <li>

辅助</li>
  </ul>
</details>
</div>

</ul>

#### 空间复杂度计算

<ul>

- 若输入数据occupy空间only取决于问题本身，和算法无关
  - only need分析除输入和程序之外的____空间
- eg，若算法中新建了几个输入数据规模 $\bf{n}$ 相同的辅助数组 → 空间复杂度为 $\bf{____}$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

额外</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

</ul>

#### 原地工作算法

<ul>

- 算法原地工作：
  - 算法所需的辅助空间为____，即 $O(1)$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常量</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# 归纳总结

<ul>

## 重点：分析程序的时间复杂度。

<ul>

- 一定要掌握分析时间复杂度的____和____
- 很多读者在做题时一眼就能看出程序的时间复杂度，但就是无法规范地表述其推导过程

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

方法</li>
    <li>

步骤</li>
  </ul>
</details>
</div>

</ul>

## 题型的两种形式:

<ul>

### 1.循环主体中的变量 参与循环条件

<ul>

#### 递推实现分析方法

<ul>

- 首先找出基本运算的执行次数 $x$ &问题规模 $n$ 之间的____
- 解得 $x=f(n)$
- $f(n)$ 的最高次幂为 $k$
- 则算法的时间复杂度为 $O(n^{k})$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关系式</li>
  </ul>
</details>
</div>

</ul>

#### 示例分析

<ul>

![image.png](https://s2.loli.net/2024/11/10/nCfwxqPOMhp2sZL.png)

##### 例1分析

<ul>

- 设基本运算 $\dot{\Sigma}\!=\!\dot{\Sigma}^{\star}2$ 的执行次数为 $t$
- 则 $2^{t}{\leqslant}n$
- 解得 $t{\leqslant}\log_{2}\!n$
- 故 $T(n)=O(____)$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

\log_{2}\!n</li>
  </ul>
</details>
</div>

</ul>

##### 例2分析

<ul>

- 设基本运算 $\scriptstyle{\mathrm{y}}={\mathrm{y}}+1$ 的执行次数为1
- 则 $t\!=\!y\!-\!5$
- 且 $(t+5+1)(t+5+1)<n$
- 解得 $t\!<\!\sqrt{n}-6$
- 即 $T(n)=O(____)$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

\sqrt{n}</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

### 2.循环主体中的变量 与循环条件无关

<ul>

#### 分析方法

<ul>

- ____归纳法或直接累计循环次数
- 多层循环时从内到外分析
- 忽略单步语句条件判断语句
- 只关注主体语句的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数学</li>
    <li>

执行次数</li>
  </ul>
</details>
</div>

</ul>

#### 程序类型分析

<ul>

##### 递归程序

<ul>

- 一般使用____进行递推
- 时间复杂度的分析如下：
  - $T(n)=1+T(n-1)=1+1+T(n-2)=\cdots=n-1+T(1)$
  - 即 $T(n)=O(____)$ 0

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

公式</li>
    <li>

n</li>
  </ul>
</details>
</div>

</ul>

##### 非递归程序

<ul>

- 分析比较简单
- 可以直接____次数

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

累计</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>


