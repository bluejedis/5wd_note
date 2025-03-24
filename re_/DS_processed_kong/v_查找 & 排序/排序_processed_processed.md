# above

<ul>

## 【考纲内容】  

<ul>

（一）sort的基本概念  
（二）插入sort直接插入sort：折半插入sort：希尔sort（shellsort）  
（三）交换sort冒泡sort（bubblesort）：快速sort  
（四）选择sort简单选择sort：堆sort  
（五）二路归并sort（mergesort）  
（六）基数sort  
（七）外部sort  
（八）sort算法的分析和应用  

</ul>

## 【知识框架】  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/08a16d8a8b640262f36d9686866d92f5ba9d690ee8e2b9b03a94808ae99e6d5b.jpg)  

</ul>

## 【复习提示】  

<ul>

____、____和____是本章的重难点。

读者应深入掌握各种sort算法的____、____（能动手模拟）和____（初态的影响、____、____、____等），通常以选择题的形式考查不同算法之间的对比。

此外，对于一些常用sort算法的____，要达到熟练编写的程度：看到某特定序列，读者应具有选择____（根据sort算法特征）的能力。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

堆sort</li>
    <li>

快速sort</li>
    <li>

归并sort</li>
    <li>

思想</li>
    <li>

sort过程</li>
    <li>

特征</li>
    <li>

复杂度</li>
    <li>

稳定性</li>
    <li>

适用性</li>
    <li>

关键代码</li>
    <li>

最优sort算法</li>
  </ul>
</details>
</div>

</ul>

</ul>

# sort的基本概念  

<ul>

## sort的定义

<ul>

### 基本概念

<ul>

- sort的本质
  - 重新排列表中的元素，使表中的元素满足按____有序的过程
  - 为了查找方便，通常希望计算机中的表是按____有序的

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

关键字</li>
  </ul>
</details>
</div>

</ul>

### 输入输出定义

<ul>

- 输入
  - $n$ 个记录 $R_{1},R_{2},\cdots,R_{n}$ 
  - 对应的关键字为 $k_{1},k_{2},\cdots,k_{n}$
- 输出
  - 输入序列的一个重排 $R_{1}^{\prime},R_{2}^{\prime},\cdots,R_{n}^{\prime}$
  - 使得 ____
  - （其中"≤"可以换成其他的比较大小的符号)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$k_{1}^{\prime}\leqslant k_{2}^{\prime}\leqslant\cdots\leqslant k_{n}^{\prime}$</li>
  </ul>
</details>
</div>

</ul>

### 算法特性

<ul>

#### 稳定性

<ul>

- 定义条件
  - 若待sort表中有两个元素 $R_{i}$ 和 $R_{j}$ 
  - 其对应的关键字相同，即 ____ 
  - 在sort前 $R_{i}$ 在 $R_{j}$ 的前面
- 稳定性判断
  - 若使用某一sort算法sort后
  - $R_{i}$ 仍然在 $R_{j}$ 的前面
  - sort算法是____
  - or else称这个sort算法是____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

${\bf k e y}_{i}={\bf k e y}_{j}$</li>
    <li>

稳定的</li>
    <li>

不稳定的</li>
  </ul>
</details>
</div>

</ul>

>**attention**  
对于不稳定的sort算法，只需举出一组关键字的实例，说明它的不稳定性即可。  

#### 分类方式

<ul>

- 按存储位置分类
  - 内部sort：元素全部存放在____中的sort
  - 外部sort：元素在____之间移动的sort

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

内存</li>
    <li>

内外存</li>
  </ul>
</details>
</div>

</ul>

#### 基本操作

<ul>

- 常见操作类型
  - 比较：确定元素____关系
  - 移动：达到____目的
- 特殊情况
  - 部分算法不基于比较（如____）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前后</li>
    <li>

有序</li>
    <li>

基数sort</li>
  </ul>
</details>
</div>

</ul>

#### 算法分类

<ul>

- 五大类别
  - ____
  - ____
  - ____
  - ____
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入sort</li>
    <li>

交换sort</li>
    <li>

选择sort</li>
    <li>

归并sort</li>
    <li>

基数sort</li>
  </ul>
</details>
</div>

</ul>

>**attention**  
大多数的内部sort算法都更适用于顺序存储的线性表。  

</ul>

</ul>

</ul>

# 内部sort

<ul>

## 插入sort

<ul>

### 基本思想

<ul>

- 核心概念
  - 每次将待sort记录插入____子序列
  - 按____大小确定插入位置
  - 直到全部记录插入完成
- 衍生算法
  - ____
  - ____
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

已排序</li>
    <li>

关键字</li>
    <li>

直接插入sort</li>
    <li>

折半插入sort</li>
    <li>

希尔sort</li>
  </ul>
</details>
</div>

</ul>

### 直接插入sort

<ul>

#### 算法过程

<ul>

- 基本状态示意
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d25ff3c4c8f034d8e69956e4e46fa3d66458180385b7fec90ac66beacd5b43c8.jpg)  

- 操作步骤
  1. 查找L（i）在____中的插入位置k
  2. 将____中的所有元素依次后移
  3. 将____复制到L（k）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L[1..i-1]</li>
    <li>

L[k..i-1]</li>
    <li>

L（i）</li>
  </ul>
</details>
</div>

</ul>

#### 代码实现

<ul>

- 代码特点
  - 采用____sort
  - 空间复杂度为____
  - 使用____优化

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

原地</li>
    <li>

O(1)</li>
    <li>

哨兵</li>
  </ul>
</details>
</div>

</ul>

#### 示例演示

<ul>

- 初始序列：49，38，65，97，76，13，27，49
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f692fcf6091936b992c48b73392b1b8b99439fcc63adb80f34bf4a92dc3a7bc.jpg)  

</ul>

#### 性能分析

<ul>

- 空间效率
  - 仅使用____个辅助单元
  - 空间复杂度____

- 时间效率
  - 最好情况：____
    - 表已有序
    - 每次只需比较一次
  - 最坏情况：____
    - 表完全逆序
    - 比较和移动次数最大
  - 平均情况：____
    - 随机序列
    - 比较和移动次数约n²/4

- 稳定性
  - 是____sort算法
  - 原因：从后往前比较移动

- 适用性
  - 适用于____存储和____存储
  - 链式存储时无须移动元素

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常数</li>
    <li>

O(1)</li>
    <li>

O(n)</li>
    <li>

O(n²)</li>
    <li>

O(n²)</li>
    <li>

稳定的</li>
    <li>

顺序</li>
    <li>

链式</li>
  </ul>
</details>
</div>

</ul>

#### 折半插入sort

<ul>

##### 基本思想

<ul>

- 从____算法改进而来
- 将比较和移动操作分离：
  - 先____查找出元素的待插入位置
  - 然后统一地移动待插入位置之后的所有元素

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接插入sort</li>
    <li>

折半</li>
  </ul>
</details>
</div>

</ul>

##### 算法实现

<ul>

- 代码实现：

```c
void InsertSort（ElemType A[], int n) { 
    int i, j, low, high, mid; 
    for(i = 2; i <= n; i++) //依次将A[2]~A[n]插入前面的已排序序列
        A[0] = A[i]; //将A[i]暂存到A[0] 
        low = 1; high = i - 1; //设置折半查找的范围 
        while(low <= high) { //折半查找（默认递增有序）
            mid = ____; //取中间点
            if(A[mid] > A[0])
                high = mid - 1; //查找左半子表
            else
                low = mid + 1; //查找右半子表
        }
        for(j = i - 1; j >= high + 1; --j)
            A[j + 1] = A[j]; //统一后移元素，空出插入位置
        A[high + 1] = A[0]; //插入操作
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(low + high) / 2</li>
  </ul>
</details>
</div>

</ul>

> pro：直接插入sort和折半插入sort的比较（2012）  

##### 性能分析

<ul>

- 时间效率：
  - 比较次数约为____，与初始状态无关
  - 移动次数未改变，依赖____状态
  - 整体时间复杂度仍为____
  - 对数据量不大时性能较好
- 稳定性：是____sort算法
- 适用性：仅适用于____存储的线性表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(nlog₂n)</li>
    <li>

初始</li>
    <li>

O(n²)</li>
    <li>

稳定的</li>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

#### 希尔sort

<ul>

##### 基本思想

<ul>

- 基于____的改进
- 先将待sort表分割成若干"特殊"子表
- 对各子表进行____
- 最后对全体记录进行一次____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接插入sort</li>
    <li>

直接插入sort</li>
    <li>

直接插入sort</li>
  </ul>
</details>
</div>

</ul>

> pro：希尔sort中各子序列采用的sort算法（2015）  

##### 排序过程

<ul>

- 具体步骤：
  1. 取增量____<n，分成____组
  2. 各组进行____
  3. 取第二个增量____<____
  4. 重复直到____=1
  5. 最后一次____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

d₁</li>
    <li>

d₁</li>
    <li>

直接插入sort</li>
    <li>

d₂</li>
    <li>

d₁</li>
    <li>

dt</li>
    <li>

直接插入sort</li>
  </ul>
</details>
</div>

</ul>

> pro：根据希尔sort的中间过程判断所采用的增量（2014、2018）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fed15f10d006d56734ed7a4ea13576087c06e17f9b076afa8e5ea4725e0fb071.jpg)  

##### 算法实现

<ul>

- 代码实现：

```c
void ShellSort(ElemType A[], int n) {
    int dk, i, j;
    for(dk = n / 2; dk >= 1; dk = dk / 2) //增量变化
        for(i = dk + 1; i <= n; ++i)
            if(____ < ____) { //需将A[i]插入有序增量子表
                A[0] = A[i]; //暂存A[0]
                for(j = i - dk; j > 0 && A[0] < A[j]; j -= dk)
                    A[j + dk] = A[j]; //记录后移，查找插入的位置
                A[j + dk] = A[0]; //插入
            }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A[i]</li>
    <li>

A[i - dk]</li>
  </ul>
</details>
</div>

</ul>

##### 性能分析

<ul>

- 空间效率：
  - 使用____个辅助单元
  - 空间复杂度____
- 时间效率：
  - 依赖____序列
  - 一般约为____
  - 最坏情况____
- 稳定性：____
- 适用性：仅适用于____存储的线性表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常数</li>
    <li>

O(1)</li>
    <li>

增量</li>
    <li>

O(n¹·³)</li>
    <li>

O(n²)</li>
    <li>

不稳定</li>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## 交换sort  

<ul>

### 冒泡sort  

<ul>

#### 基本思想

<ul>

- 从后往前（或从前往后）两两比较____元素的值
  - 若为____（即A[i-1]>A[i]），则交换它们
  - 直到序列比较完
- 第一趟冒泡结果
  - 将____元素交换到待sort列的第一个位置
  - 或将____元素交换到待sort列的最后一个位置
- 下一趟冒泡
  - 前一趟确定的最小元素不再参与比较
  - 最多做____趟冒泡就能把所有元素排好序

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相邻</li>
    <li>

逆序</li>
    <li>

最小</li>
    <li>

最大</li>
    <li>

n-1</li>
  </ul>
</details>
</div>

</ul>

#### 排序过程示例

<ul>

- 第一趟冒泡
  - 27<49，不交换
  - 13<27，不交换
  - 76>13交换
  - 97>13，交换
  - 65>13，交换
  - 38>13，交换
  - 49>13，交换
- 结果：____元素已交换到第一个位置（最终位置）
- 后续趟数：对剩余子序列采用同样方法进行sort

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最小</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ed7cdadbc990048828d90cd70389495b74cc134c304ca5434cc034bef5c682a7.jpg)  
图8.3冒泡sort示例  

#### 算法实现

<ul>

```c
void BubbleSort（ElemType A[], int n) {
    for(int i = 0; i < n - 1; i++) {    
        bool flag = false; 
        for(int j = n - 1; j > i; j--) 
            if(____ > ____) {
                //表示本趟冒泡是否发生交换的标志
                //一趟冒泡过程
                //若为逆序  
                swap（A[j-1], A[j]）；//使用封装的swap函数交换
                flag = true; 
            }
        if(flag == false) 
            return; //本趟遍历后没有发生交换，说明表已经有序  
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A[j-1]</li>
    <li>

A[j]</li>
  </ul>
</details>
</div>

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 仅使用了____个辅助单元
- 空间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常数</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 最好情况：____
  - 当初始序列有序时
  - 第一趟冒泡后flag依然为false
  - 直接跳出循环
  - 比较次数为n-1，移动次数为0
- 最坏情况：____
  - 当初始序列为逆序时
  - 需要进行n-1趟sort
  - 第i趟sort要进行n-i次关键字的比较
  - 每次比较后都必须移动元素3次
- 平均时间复杂度：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(n)</li>
    <li>

O(n²)</li>
    <li>

O(n²)</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- ____sort算法
  - 因为i>j且A[i]=A[j]时不会发生交换

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

稳定的</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 适用于____存储和____存储的线性表

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

> **attention**  
- 中所产生的有序子序列must是____有序的（不同于直接插入sort）
- 有序子序列中的所有元素的关键字must ____ or ____ 无序子序列
- per tripsort都会place一个元素to其____的位置上

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

全局</li>
    <li>

<</li>
    <li>

></li>
    <li>

最终</li>
  </ul>
</details>
</div>

### 快速sort  

<ul>

#### 基本思想

<ul>

- 基于____法
  - 在待sort表L[1..n]中任取一个元素____作为枢轴
  - 通过一趟sort将待sort表划分为独立的两部分____和____
    - L[1..k-1]中的所有元素小于____
    - $\mathrm{L}\,[\,\mathsf{k}\!+\!1...\mathsf{n}\,]$ 中的所有元素大于或等于____
    - ____放在其最终位置L（k）上
  - 这个过程称为____
  - 然后分别递归地对两个子表重复上述过程
  - 直至每部分内只有一个元素或为空为止

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

分治</li>
    <li>

pivot</li>
    <li>

L[1..k-1]</li>
    <li>

$\operatorname{L}\left[\mathsf{k}\!+\!1...\mathsf{n}\right]$</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

一次划分</li>
  </ul>
</details>
</div>

</ul>

#### 一趟快速sort过程示例

<ul>

- 过程是交替搜索和交换
- 设两个指针i和j，初值分别为____和____
- 取第一个元素49为枢轴赋值到变量____
- 搜索过程：
  - 指针j从high往前搜索找到第一个小于____的元素27，将27交换到i所指位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/526c93eb7112f29a9e13e9ad683c9d3dc855c77dc463ca2b2d7e5ec96387ca9d.jpg)  

  - 指针i从low往后搜索找到第一个大于____的元素65，将65交换到j所指位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/567c047e31d6ce1a994c684a4dfb4b2d64c9ba4e4c04b1136c9c4c4e3317aa7d.jpg)  

  - 指针继续往前搜索找到小于____的元素13，将13交换到i所指位置
  - 指针i继续往后搜索找到大于____的元素97，将97交换到j所指位置
  - 指针j继续往前搜索小于____的元素，直至 ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

low</li>
    <li>

high</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

pivot</li>
    <li>

$i=j$</li>
  </ul>
</details>
</div>

</ul>

> pro：快速sort的中间过程的分析（2014、2019、2023）  

#### 算法实现

<ul>

- 划分算法Partition()
  - 返回____值，L(k)已放在其最终位置
  - 对表进行划分，然后对两个子表递归调用
- 代码实现：
  
```c
int pivotpos = Partition(A, low, high);
QuickSort(A, low, ____);
QuickSort(A, ____, high);
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

k</li>
    <li>

pivotpos - 1</li>
    <li>

pivotpos + 1</li>
  </ul>
</details>
</div>

</ul>

> pro：（算法题）快速sort中划分操作的应用（2016）  

##### Partition()函数实现

<ul>

- 以第一个元素为____
- 将表中比____大的元素向右移动
- 将比____小的元素向左移动
- 代码实现略

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

枢轴</li>
    <li>

枢轴</li>
    <li>

枢轴</li>
  </ul>
</details>
</div>

</ul>

#### 性能分析

<ul>

> pro：快速sort中递归次数的影响因素分析（2010）  

##### 空间效率

<ul>

- 需要____工作栈
  - 最好情况：____
  - 最坏情况：____
  - 平均情况：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

递归</li>
    <li>

O(log₂n)</li>
    <li>

O(n)</li>
    <li>

O(log₂n)</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 与____是否对称有关
- 最坏情况：____
  - 发生在两个区域极度不对称时
- 改进方法：
  - 选取更好的____元素
  - 随机选取____元素
- 最理想情况：____
  - Partition()能做到最平衡划分
- 平均情况接近最佳情况

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

划分</li>
    <li>

O(n²)</li>
    <li>

枢轴</li>
    <li>

枢轴</li>
    <li>

O(nlog₂n)</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- ____sort算法
- 原因：相同关键字的记录可能交换位置

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不稳定的</li>
  </ul>
</details>
</div>

</ul>

> pro：快速sort适合采用的存储方式（2011）  

##### 适用性

<ul>

- 仅适用于____存储的线性表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

</ul>

>**attention**  
- 在快速sort算法中，并不产生有序子序列，但每一趟sort后会将上一趟划分的各个无序子表的____元素放到其最终的位置上。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

枢轴（基准）</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 选择sort  

<ul>

### 基本思想

<ul>

- 每一趟（如第 $i$ 趟）在后面 ____ 个待sort元素中选取关键字____的元素，作为有序子序列的第 $i$ 个元素，直到第 ____ 趟做完，待sort元素只剩下1个，就不用再选。选择sort中的____是历年统考考查的重点。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$n-i+1\ (i=1,2,\cdots,n-1)$</li>
    <li>

最小</li>
    <li>

$n-1$</li>
    <li>

堆sort</li>
  </ul>
</details>
</div>

</ul>

### 简单选择sort  

<ul>

#### 算法思想

<ul>

- 假设sort表为L[1..n]，第 $i$ 趟sort即从____中选择关键字____的元素与L（i）交换
- 每一趟sort可以确定一个元素的____位置
- 经过____趟sort就可使得整个sort表有序

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

L[i..n]</li>
    <li>

最小</li>
    <li>

最终</li>
    <li>

$n-1$</li>
  </ul>
</details>
</div>

</ul>

#### 代码实现

<ul>

```c
void SelectSort（ElemType A[], int n) { 
    for(int i = 0; i < n - 1; i++) { //一共进行n-1趟 
        int min = i; //记录最小元素位置
        for(int j = i + 1; j < n; j++) //在A[i..n-1]中选择最小的元素
            if(____ < ____) 
                min = j; //更新最小元素位置
        if(min != i) 
            swap（A[i], A[min]）；//封装的swap（）函数共移动元素3次  
    }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A[j]</li>
    <li>

A[min]</li>
  </ul>
</details>
</div>

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 仅使用____个辅助单元
- 空间效率为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常数</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 元素移动操作次数
  - 不会超过____次
  - 最好情况：移动0次（表已有序）
- 元素比较次数
  - 与序列初始状态无关
  - 始终是____次
- 时间复杂度始终是____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$3(n-1)$</li>
    <li>

$n(n-1)/2$</li>
    <li>

O(n²)</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- 是一种____sort算法
- 原因：第 $i$ 趟找到最小元素后和第 $i$ 个元素交换，可能导致相同关键字元素的____改变
- 示例：表 $L=\{2,2,1\}$ ，经过一趟sort后 $L=\{1,2,2\}$ ，最终sort序列也是 $L=\{1,2,2\}$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不稳定的</li>
    <li>

相对位置</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 适用于____存储和____存储的线性表
- 适用于关键字较少的情况

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

### 堆sort  

<ul>

#### 定义

<ul>

- $n$ 个关键字序列L[1..n]称为堆，当&仅当该序列满足：  
  - $\textcircled{1}\ \texttt{L}(\dot{\texttt{i}})____\texttt{L}$ （2i）& $\tt L\left(\mathrm{i}\right)\mathrm{>=}\tt L$ （2i+1）或 
  - $\circledcirc\ \mathrm{~\bf~L~}(\dot{\mathrm{~\bf~i~}})____\tt{L}$ （2i）& $\mathrm{~\tt~L~}(\mathrm{i})____\tt L\;(2\,\mathrm{i}+1)$ （1≤i≤Ln/2]）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

>=</li>
    <li>

<=</li>
    <li>

<=</li>
  </ul>
</details>
</div>

</ul>

>pro：堆的性质与特点（2020）  

#### 基本概念

<ul>

- 可以将堆视为一颗____二叉树
  - 满足条件 $\circledcirc$ 的堆称为____（大顶堆）
    - 大根堆的____元素存放在根结点
    - 任意非根结点的值小于或等于其双亲结点值
  - 满足条件 $\mathcal{Q}$ 的堆称为____（小顶堆）
    - 小根堆的定义与大根堆相反
    - 根结点是____元素

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

完全</li>
    <li>

大根堆</li>
    <li>

最大</li>
    <li>

小根堆</li>
    <li>

最小</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2247078dce401249cf3e73341e50d39d624875f9123a83d24eb59f6fed868004.jpg)  
图8.5一个大根堆示意图  

#### 堆sort思路

<ul>

- 基本步骤
  - 将L[1..n]中的n个元素建成____堆
  - 输出____元素（最大值）
  - 将堆底元素送入____
  - 向下调整保持____性质
  - 重复直到堆中仅剩一个元素
- 需要解决的关键问题
  - $\textcircled{\scriptsize{1}}$ 如何将无序序列构造成____
  - $\circledcirc$ 输出堆顶元素后如何调整____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

初始</li>
    <li>

堆顶</li>
    <li>

堆顶</li>
    <li>

大顶堆</li>
    <li>

初始堆</li>
    <li>

新堆</li>
  </ul>
</details>
</div>

</ul>

>pro：初始建堆的操作（2018、2021）  

#### 初始堆构造过程

<ul>

- 基本原理
  - n个结点的完全二叉树，最后一个结点是第____个结点的孩子
  - 从第____个结点开始向前依次调整
- 调整步骤
  - 对当前结点进行____
  - 比较根结点与____的值
  - 必要时进行____
  - 继续向下调整直到满足堆的性质

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$\lfloor n/2\rfloor$</li>
    <li>

$\lfloor n/2\rfloor$</li>
    <li>

筛选</li>
    <li>

左右孩子</li>
    <li>

交换</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a02575fe03c9077c1e1b12da0a42128eed1a6389ff67ccc69548cc3ecd8c9411.jpg)  
图8.6自下往上逐步调整为大根堆  

>pro：输出堆顶元素后调整堆的比较次数的分析（2015）  

#### 堆的调整过程

<ul>

- 输出堆顶元素后的处理
  - 将堆的最后一个元素与____交换
  - 向下进行____
  - 不断与左右孩子____交换
  - 直到满足堆的性质

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

堆顶元素</li>
    <li>

筛选</li>
    <li>

较大者</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/705800718fde337b1004d353eb67a4467c05345b00380d86c440143a0192d934.jpg)  
图8.7输出堆顶元素后再将剩余元素调整成新堆  

#### 算法实现

<ul>

##### 建立大根堆

<ul>

```c
void BuildMaxHeap（ElemType A[], int len) {
    for(int i = len / 2; i > 0; i--) //从 i=[n/2]~1，反复调整堆 
        HeapAdjust（A, i, len);
}

void HeapAdjust（ElemType A[], int k, int len） { //Heap Adjust k 为根的子树进行调整  
    A[0] = A[k]; //A[0]暂存子树的根结点 
    for(int i = 2 * k; i <= len; i *= 2) { //沿key较大的子结点向下筛选
        if(i < len && ____ < ____) //取key较大的子结点的下标
            i++;
        if(____ >= ____) 
            break; //筛选结束 
        else { 
            A[k] = A[i]; //将A[i]调整到双亲结点上  
            k = i; //修改 k 值，以便继续向下筛选
        }
    }
    A[k] = A[0]; //被筛选结点的值放入最终位置  
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A[i]</li>
    <li>

A[i+1]</li>
    <li>

A[0]</li>
    <li>

A[i]</li>
  </ul>
</details>
</div>

</ul>

##### 堆sort实现

<ul>

```c
void HeapSort（ElemType A[], int len) {
    BuildMaxHeap(A, len); //初始建堆 
    for(int i = len; i > 1; i--) { //n-1 趟的交换和建堆过程
        Swap(A[i], A[1]); //输出堆顶元素（和堆底元素交换）
        HeapAdjust（A, 1, ____); //调整，把剩余的i-1个元素整理成堆  
    }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

i-1</li>
  </ul>
</details>
</div>

</ul>

</ul>

>pro：堆的插入操作及比较次数的分析（2009、2011）  

#### 堆的插入操作

<ul>

- 基本步骤
  - 将新结点放在____
  - 对新结点向上执行____操作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

堆的末端</li>
    <li>

调整</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/98ce82e66a4eab0bac8b05ca1e714ecc3d9283c4602d47d25fd506bba0c39752.jpg)  
图8.8大根堆的插入操作示例  

>pro：堆在海量数据中选出最小 $\pmb{k}$ 个数的应用及效率分析（2022）  

#### 应用场景

<ul>

- 适用于____较多的情况
- 海量数据处理示例
  - 在1亿个数中选出前100个最大值
  - 处理步骤：
    - 使用100大小的数组读入前100个数
    - 建立____堆
    - 读入余下数据并与____比较
    - 大于堆顶则替换并重新调整

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

关键字</li>
    <li>

小顶</li>
    <li>

堆顶</li>
  </ul>
</details>
</div>

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 仅使用____个辅助单元
- 空间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

常数</li>
    <li>

O(1)</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 建堆时间为____
- n-1次____操作
- 每次调整时间复杂度为____
- 各种情况下时间复杂度均为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(n)</li>
    <li>

向下调整</li>
    <li>

O(h)</li>
    <li>

O(nlog₂n)</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- 是一种____sort算法
- 原因：筛选可能改变相同关键字元素的____
- 示例：表L={1,2,2}的sort过程说明

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不稳定的</li>
    <li>

相对位置</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 仅适用于____存储的线性表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

## 归并sort、基数sort和计数sort  

<ul>

### 归并sort  

<ul>

>pro：二路归并操作的功能（2022）  

#### 基本概念

<ul>

- 归并sort与基于交换、选择等sort思想不同
- 归并含义：将两个或两个以上的____合并成新的____
- 基本过程：
  - 将n个记录视为n个____(每个长度为1)
  - 两两归并得到____个长度为2或1的有序表
  - 继续两两归并直到合并成一个长度为____的有序表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有序表</li>
    <li>

有序表</li>
    <li>

有序子表</li>
    <li>

⌈n/2⌉</li>
    <li>

n</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/365d58fda45f0a53c2d1bd276f956db5d5d2faf07813666f234e33ea5ffff7d7.jpg)  
图8.9二路归并sort示例  

> pro：（算法题）归并sort思想的应用（2011）  

#### Merge操作实现

<ul>

##### 功能描述

<ul>

- 将前后相邻的两个____归并为一个____
- 两段有序表位于____和____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有序表</li>
    <li>

有序表</li>
    <li>

A[low..mid]</li>
    <li>

A[mid+1..high]</li>
  </ul>
</details>
</div>

</ul>

##### 实现步骤

<ul>

- 复制数据到____数组B
- 比较B中____数据
- 将____值放入A中
- 处理____数据

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

辅助</li>
    <li>

两段</li>
    <li>

较小</li>
    <li>

剩余</li>
  </ul>
</details>
</div>

</ul>

```c
ElemType *B = (ElemType *)malloc((n + 1) * sizeof(ElemType)); //辅助数组B
void Merge（ElemType A[], int low, int mid, int high) { //表A的两段A[low..mid]和A[mid+1..high]各自有序，将它们合并成一个有序表
    int i, j, k; 
    for(k = low; k <= high; k++) 
        B[k] = A[k]; //将A中所有元素复制到B中 
    for(i = low, j = mid + 1, k = i; i <= mid && j <= high; k++) { 
        if(____ <= ____) //比较B的两个段中的元素
            A[k] = B[i++]; //将较小值复制到A中
        else 
            A[k] = B[j++];
    } 
    while(i <= mid) 
        A[k++] = B[i++]; //若第一个表未检测完，复制
    while(j <= high) 
        A[k++] = B[j++]; //若第二个表未检测完，复制  
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

B[i]</li>
    <li>

B[j]</li>
  </ul>
</details>
</div>

</ul>

>**attention**  
在上面的代码中，最后两个while循环只有一个会执行  

#### 归并sort的实现

<ul>

##### 一趟归并操作

<ul>

- 调用____次merge()算法
- 将相邻长度为h的有序段____归并
- 得到长度为____的有序段
- 需要进行____趟

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈n/2h⌉</li>
    <li>

两两</li>
    <li>

2h</li>
    <li>

logn</li>
  </ul>
</details>
</div>

</ul>

##### 递归实现

<ul>

###### 分解阶段

<ul>

- 将n个元素的待sort表分成两个____元素的子表
- 递归对子表进行____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

n/2</li>
    <li>

sort</li>
  </ul>
</details>
</div>

</ul>

###### 合并阶段

<ul>

- 合并两个已____的子表得到sort结果

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

sort</li>
  </ul>
</details>
</div>

</ul>

```c
void MergeSort（ElemType A[], int low, int high） {
    if(low < high) { 
        int mid = ____; //从中间划分两个子序列
        MergeSort（A, low, mid); //对左侧子序列进行递归sort
        MergeSort(A, mid + 1, high); //对右侧子序列进行递归sort 
        Merge(A, low, mid, high); //归并  
    }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(low + high) / 2</li>
  </ul>
</details>
</div>

</ul>

</ul>

> pro：归并sort和插入sort的对比（2017）  

#### 性能分析

<ul>

##### 空间效率

<ul>

- Merge操作需要____个辅助单元
- 空间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

n</li>
    <li>

O(n)</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 每趟归并时间复杂度____
- 需要____趟归并
- 总时间复杂度____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(n)</li>
    <li>

⌈log₂n⌉</li>
    <li>

O(nlog₂n)</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- 是____sort算法
- Merge操作不改变相同关键字记录的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

稳定的</li>
    <li>

相对次序</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 适用于____存储和____存储的线性表

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

>**attention**  
一般而言，对于 $N$ 个元素进行 $k$ 路归并sort时，sort的趟数 $m$ 满足 ____ ，thus $m=\log_{k}N$ 又考虑到 $m$ 为整数，thus ____ 这和前面的二路归并sort算法是一致的。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$k^{m}=N$</li>
    <li>

$m=\lceil\log_{k}N\rceil$</li>
  </ul>
</details>
</div>

### 基数sort  

<ul>

#### 基本概念

<ul>

- 一种特别的sort算法
  - 不基于____和____进行sort
  - 基于____各位的大小进行sort
  - 借助____思想对单逻辑关键字进行sort

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

比较</li>
    <li>

移动</li>
    <li>

关键字</li>
    <li>

多关键字sort</li>
  </ul>
</details>
</div>

</ul>

#### 算法原理

<ul>

##### 关键字组成

<ul>

- 长度为n的线性表中每个结点aj的关键字由____组成
- 满足____ (0≤j<n,0≤i≤d-1)
  - kj^(d-1)为____关键字
  - kj^0为____关键字

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

d元组(kj^(d-1), kj^(d-2),..., kj^1, kj^0)</li>
    <li>

0≤kj^i≤r-1</li>
    <li>

最主位</li>
    <li>

最次位</li>
  </ul>
</details>
</div>

</ul>

##### 实现方法

<ul>

- 最高位优先（MSD）法
  - 按关键字位____依次划分子序列
  - 最后连接成____序列
- 最低位优先（LSD）法
  - 按关键字位____依次sort
  - 最后形成____序列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

权重递减</li>
    <li>

有序</li>
    <li>

权重递增</li>
    <li>

有序</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### sort过程

<ul>

##### 基本步骤

<ul>

- 使用____个队列Q0,Q1,...,Qr-1
- 对i=0,1,...,d-1依次进行：
  - 分配：
    - 初始化____队列
    - 根据关键字____将aj放入对应队列
  - 收集：
    - 将各队列节点____相接形成新序列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

r</li>
    <li>

空</li>
    <li>

kj^i</li>
    <li>

首尾</li>
  </ul>
</details>
</div>

</ul>

##### 实例演示

<ul>

- 对10个记录进行sort示例
  - 关键字为1000以下正整数
  - 基数r=____
  - 需要____个链队列
  - 每个关键字由____位子关键字构成

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

10</li>
    <li>

10</li>
    <li>

3</li>
  </ul>
</details>
</div>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/48cc62165ce2360ed01930db009972b6262a390392448a6089225dc7f219ffea.jpg)  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9c6f2bf6f54e66bb9877535bef33f0c0f8826a93ead82956fa1cc97ee0d7f7ec.jpg)  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16003a2547311992cc50f4c5ee3d857229a213f2dc465318c889f2714a206b93.jpg)  

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 需要____个队列的辅助存储空间
- 空间复杂度为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

r</li>
    <li>

O(r)</li>
  </ul>
</details>
</div>

</ul>

> pro：元素的移动次数与序列初态无关的sort算法（2015）  

##### 时间效率

<ul>

- 需要____趟分配和收集操作
- 一趟分配时间复杂度____
- 一趟收集时间复杂度____
- 总时间复杂度____
- 与序列____无关

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

d</li>
    <li>

O(n)</li>
    <li>

O(r)</li>
    <li>

O(d(n+r))</li>
    <li>

初始状态</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- 是____sort算法
- 不会交换相同关键字的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

稳定的</li>
    <li>

相对位置</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 适用于____存储和____存储的线性表

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

### 计数sort

<ul>

#### 基本思想

<ul>

- 不基于____的sort算法
- 统计____的元素个数确定最终位置

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

比较</li>
    <li>

小于x</li>
  </ul>
</details>
</div>

</ul>

>**attention**  
计数sort并不在统考大纲的范围内，但其sort思想在历年真题中多次涉及！  

#### 算法实现

<ul>

##### 数据结构

<ul>

- 输入数组____
- 输出数组____
- 计数数组____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A[n]</li>
    <li>

B[n]</li>
    <li>

C[k]</li>
  </ul>
</details>
</div>

</ul>

> pro：计数sort相关的思想和代码的分析（2021）  

##### 算法步骤

<ul>

- 初始化____数组
- 统计元素____次数
- 累加计算____的元素个数
- 从后往前放置元素到____位置

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

计数</li>
    <li>

出现</li>
    <li>

小于等于x</li>
    <li>

正确</li>
  </ul>
</details>
</div>

</ul>

##### 示例演示

<ul>

- 输入数组A[]={2,4,3,0,2,3}的sort过程

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e6d44032ce8506b47ebbb00a8709f6c74ae4f9f3c10eef0ae5cff2a9686fb669.jpg)  

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 空间复杂度____或____
- 用____换时间的策略

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(n+k)</li>
    <li>

O(k)</li>
    <li>

空间</li>
  </ul>
</details>
</div>

</ul>

##### 时间效率

<ul>

- 总时间复杂度____
- k=O(n)时为____
- k>O(nlogn)时不如____类sort

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(n+k)</li>
    <li>

O(n)</li>
    <li>

比较</li>
  </ul>
</details>
</div>

</ul>

##### 稳定性

<ul>

- 是____sort算法
- 相同元素____不变

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

稳定的</li>
    <li>

相对位置</li>
  </ul>
</details>
</div>

</ul>

##### 适用性

<ul>

- 更适用于____存储
- 适用于____且范围不太大的序列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顺序</li>
    <li>

整数</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# 各种内部sort算法的比较及应用  

<ul>

## 比较  

<ul>

### 比较因素

<ul>

- ____复杂度
- ____复杂度
- ____
- ____
- 过程特征

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间</li>
    <li>

空间</li>
    <li>

稳定性</li>
    <li>

适用性</li>
  </ul>
</details>
</div>

</ul>

> pro：各种sort算法的特点、比较和适用场景（2017、2020、2022）  

#### 时间复杂度分析

<ul>

- O(n²)算法
  - ____
  - ____
  - ____
    - 最好情况可达O(n)：____和____
    - 与初始状态无关：____
- 希尔sort
  - 对大规模数据效率高
  - 精确渐近时间未知
- O(nlog₂n)算法
  - ____
    - ____时间建堆
    - ____完成sort
  - ____
    - 最坏____
    - 平均____
  - ____
    - 最好、最坏、平均均为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

简单选择sort</li>
    <li>

直接插入sort</li>
    <li>

冒泡sort</li>
    <li>

直接插入sort</li>
    <li>

冒泡sort</li>
    <li>

简单选择sort</li>
    <li>

堆sort</li>
    <li>

线性</li>
    <li>

O(nlog₂n)</li>
    <li>

快速sort</li>
    <li>

O(n²)</li>
    <li>

O(nlog₂n)</li>
    <li>

归并sort</li>
    <li>

O(nlog₂n)</li>
  </ul>
</details>
</div>

</ul>

#### 空间复杂度分析

<ul>

- O(1)空间
  - ____
  - ____
  - ____
  - ____
  - ____
- O(log₂n)空间
  - ____（递归栈）
    - 最坏可达____
- O(n)空间
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

简单选择sort</li>
    <li>

插入sort</li>
    <li>

冒泡sort</li>
    <li>

希尔sort</li>
    <li>

堆sort</li>
    <li>

快速sort</li>
    <li>

O(n)</li>
    <li>

二路归并sort</li>
  </ul>
</details>
</div>

</ul>

> pro：sort算法的稳定性判断及改进（2021、2023）  

#### 稳定性分析

<ul>

- 稳定算法
  - ____
  - ____
  - ____
  - ____
- 不稳定算法
  - ____
  - ____
  - ____
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

插入sort</li>
    <li>

冒泡sort</li>
    <li>

归并sort</li>
    <li>

基数sort</li>
    <li>

简单选择sort</li>
    <li>

快速sort</li>
    <li>

希尔sort</li>
    <li>

堆sort</li>
  </ul>
</details>
</div>

</ul>

> pro：更适合采用顺序存储的sort算法（2017）  

#### 适用性分析

<ul>

- 仅适用于顺序存储
  - ____
  - ____
  - ____
  - ____
- 同时适用于顺序和链式存储
  - ____
  - ____
  - ____
  - ____
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

折半插入sort</li>
    <li>

希尔sort</li>
    <li>

快速sort</li>
    <li>

堆sort</li>
    <li>

直接插入sort</li>
    <li>

冒泡sort</li>
    <li>

简单选择sort</li>
    <li>

归并sort</li>
    <li>

基数sort</li>
  </ul>
</details>
</div>

</ul>

> pro：根据sort的中间过程判断所采用的sort算法（2009、2010）  

> pro：per tripsort后都至少能确定一个元素的最终位置的sort算法（2012）  

#### 过程特征分析

<ul>

- per trip确定最值
  - ____
  - ____
  - ____
- per trip确定最终位置
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

冒泡sort</li>
    <li>

简单选择sort</li>
    <li>

堆sort</li>
    <li>

快速sort</li>
  </ul>
</details>
</div>

</ul>

表8.1列出了各种sort算法的时空复杂度和稳定性情况，其中空间复杂度仅列举了平均情况的复杂度，因为希尔sort的时间复杂度依赖于增量函数，所以无法准确给出其时间复杂度。  

表8.1各种sort算法的性质
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0b1409c5ee2c569d34f51b5f3a267d60625ccf83b77b7de8ecb3eb03282fc0fb.jpg)  

</ul>

## 应用  

<ul>

> pro：选取sort算法时需要考虑的因素（2019）  

### 选取sort算法需要考虑的因素  

<ul>

- 待sort的元素个数____
- 待sort的元素的____状态
- 关键字的____及其分布情况
- ____的要求
- ____及辅助空间的大小限制等

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

n</li>
    <li>

初始</li>
    <li>

结构</li>
    <li>

稳定性</li>
    <li>

存储结构</li>
  </ul>
</details>
</div>

</ul>

### sort算法小结  

<ul>

#### 基于数据规模n的选择

<ul>

##### n较小时的选择

<ul>

- 可采用：
  - ____
  - ____
- 选择考虑：
  - 当记录本身信息量较大时，用____较好
  - 原因：____所需的记录移动次数较____的多

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接插入sort</li>
    <li>

简单选择sort</li>
    <li>

简单选择sort</li>
    <li>

直接插入sort</li>
    <li>

简单选择sort</li>
  </ul>
</details>
</div>

</ul>

##### n较大时的选择

<ul>

- 应采用时间复杂度为 ____ 的sort算法：
  - ____
  - ____ 
  - ____
- 具体选择考虑：
  - 快速sort：当待sort的关键字随机分布时，是目前基于比较的内部sort算法中____的算法
  - 堆sort：
    - 所需辅助空间少于____
    - 不会出现快速sort可能的____情况
    - 属于____sort
  - 归并sort：适用于要求____且时间复杂度为 ____ 的情况

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$O(n\mathrm{log}_{2}n)$</li>
    <li>

快速sort</li>
    <li>

堆sort</li>
    <li>

归并sort</li>
    <li>

最好</li>
    <li>

快速sort</li>
    <li>

最坏</li>
    <li>

不稳定</li>
    <li>

稳定</li>
    <li>

$O(n\mathrm{log}_{2}n)$</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 基于初始状态的选择

<ul>

- 当文件初始状态已按关键字基本有序时，宜选用：
  - ____
  - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接插入sort</li>
    <li>

冒泡sort</li>
  </ul>
</details>
</div>

</ul>

#### 基于比较的sort算法特性

<ul>

- 比较判定过程特点：
  - 每次比较两个关键字大小后只有____可能的转移
  - 可用____描述比较判定过程
- 时间复杂度结论：
  - 当文件的 $n$ 个关键字随机分布时，任何借助于"比较"的sort算法
  - 至少需要 ____ 的时间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

两种</li>
    <li>

二叉树</li>
    <li>

$O(n\mathrm{log}_{2}n)$</li>
  </ul>
</details>
</div>

</ul>

#### 特殊情况的选择

<ul>

##### n很大且关键字特殊时

<ul>

- 当满足以下条件时，采用____较好：
  - 记录的关键字位数较少
  - 可以分解

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基数sort</li>
  </ul>
</details>
</div>

</ul>

##### 记录信息量较大时

<ul>

- 为避免耗费大量时间移动记录
- 可用____作为存储结构

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链表</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

## 外部sort  

<ul>

### 概述

<ul>

- 外部sort可能会考查相关____、____和sort过程
- 外部sort的算法比较复杂，不会在____上进行考查
- 主要内容：

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

概念</li>
    <li>

方法</li>
    <li>

算法设计</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>
```

### 说明：
1. **挖空处理**：
   - 定义中的关键词（如“关键字”“稳定性”）、公式定理（如时间复杂度公式）、算法关键步骤（如代码中的比较条件）被替换为空缺。
   - 挖空内容简洁明了，突出重点，便于记忆和自测。

2. **折叠块设计**：
   - 每个次级标题下的答案使用 `<details>` 和 `<summary>` 标签实现折叠效果。
   - 答案列表使用 `<ul>` 和 `<li>` 标签，Markdown 内公式渲染通过空行和 `$` 符号实现。

3. **格式保持**：
   - 原有目录结构未改变，所有内容完整输出。
   - Markdown 和 HTML 结合，确保兼容性和可读性。

此结果符合您的要求，可直接用于学习和复习。若有进一步调整需求，请告知！

以下是按照您的要求对提供的Markdown文档进行挖空处理后的结果，关键词、关键步骤等被设置为空缺，答案以HTML折叠块形式置于下方。输出同时保留Markdown和HTML格式，确保目录结构不变，内容完整。

---

- 外部sort指大文件sort，待sort记录存储在____中，无法一次性装入内存
  - 减少平衡归并中外存读/写次数的方法：
    - ____归并路数
    - ____归并段个数
  - 利用____增大归并路数
  - 利用____sort增大归并段长度来减少归并段个数
  - 由长度不等的归并段进行多路平衡归并，需要构造____归并树

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

外存</li>
    <li>

增大</li>
    <li>

减少</li>
    <li>

败者树</li>
    <li>

置换-选择</li>
    <li>

最佳</li>
  </ul>
</details>
</div>
</ul>

### 基本概念

<ul>

- 内部sort：在____中进行的sort算法
- 外部sort：
  - 适用于____sort
  - 记录存储在____上
  - 需要分批调入内存进行____
  - 需要多次____和外存交换

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

内存</li>
    <li>

大文件</li>
    <li>

外存</li>
    <li>

sort</li>
    <li>

内存</li>
  </ul>
</details>
</div>
</ul>

</ul>

### 方法

<ul>

#### 基本原理

<ul>

- 文件存储特点：
  - 按____存储在磁盘上
  - 操作系统按____读/写
  - 磁盘读/写时间远超____运算时间
  - 主要考虑____次数

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

块</li>
    <li>

块</li>
    <li>

内存</li>
    <li>

I/O</li>
  </ul>
</details>
</div>
</ul>

</ul>

> pro：对大文件sort时使用的sort算法（2016）  

#### sort过程

<ul>

- 两个阶段：
  1. 初始化阶段：
     - 根据____缓冲区大小分割文件
     - 对子文件进行____sort
     - 生成____子文件（归并段/顺串）
  2. 归并阶段：
     - 对归并段____归并
     - 直至得到____有序文件

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

内存</li>
    <li>

内部</li>
    <li>

有序</li>
    <li>

逐趟</li>
    <li>

完整</li>
  </ul>
</details>
</div>
</ul>

</ul>

#### 归并实现

<ul>

- 内存分配：
  - ____个缓冲区
    - ____输入缓冲区
    - ____输出缓冲区

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

三个</li>
    <li>

两个</li>
    <li>

一个</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f9dfc2273b2657ab8f22bac4053500f6f3c968af70843c709cd6de6d27e0e7f8.jpg)  
图8.14二路归并  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/594c62b9eed6c74fbcd2ef228dc89133d1f7dacc1faac7b8cf3699861e02d96b.jpg)  
图8.15二路平衡归并的sort过程  

#### 时间开销

<ul>

- 总时间组成：
  - ____sort时间
  - 外存信息____时间
  - 内部____时间
- 优化重点：
  - 减少____次数
  - 以____为单位读写

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

内部</li>
    <li>

读/写</li>
    <li>

归并</li>
    <li>

I/O</li>
    <li>

磁盘块</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/29ffd4a87f89e3a71844bdb43087db397877ef3872bcda905c7c5cc68854e819.jpg)  
图8.164路平衡归并的sort过程  

#### 优化策略

<ul>

- 增大归并路数k：
  - 减少____趟数
  - 减少____I/O次数
- 减少初始归并段个数r：
  - 降低____高度
  - 减少____趟数S

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

归并</li>
    <li>

磁盘</li>
    <li>

归并树</li>
    <li>

归并</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

### 多路平衡归并与败者树

<ul>

#### 归并路数k的影响

<ul>

- 增加归并路数k的优缺点：
  - 优点：减少____趟数S和I/O次数
  - 缺点：增加____归并时间
    - k个元素选最小需____次比较
    - 每趟归并n个元素需____次比较
    - S趟归并总比较次数：____=⌈log_kr⌉(n-1)(k-1)=⌈log_2r⌉(n-1)(k-1)/⌈log_2k⌉
    - (k-1)/⌈log_2k⌉随k____而增长

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

归并</li>
    <li>

内部</li>
    <li>

k-1</li>
    <li>

(n-1)(k-1)</li>
    <li>

S(n-1)(k-1)</li>
    <li>

增长</li>
  </ul>
</details>
</div>
</ul>

</ul>

#### 败者树优化

<ul>

- 引入目的：
  - 使内部归并不受____增大影响
- 特点：
  - ____选择排序变体
  - ____二叉树结构
  - k个叶节点存放____比较元素
  - 内部节点记录____
  - 根节点指向____数

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

k</li>
    <li>

树形</li>
    <li>

完全</li>
    <li>

当前</li>
    <li>

"失败者"</li>
    <li>

最小</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e2a0f7cbaa050a4bfea0e9a28cf40956989e3d9e2e56ab38136f036fb8d98f85.jpg)  
图8.17实现5路归并的败者树  

- 性能分析：
  - 深度为____
  - 选择最小关键字需____次比较
  - 总比较次数：____=⌈log_kr⌉(n-1)⌈log_2k⌉=(n-1)⌈log_2r⌉
  - 比较次数与____无关

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

⌈log_2k⌉+1</li>
    <li>

⌈log_2k⌉</li>
    <li>

S(n-1)⌈log_2k⌉</li>
    <li>

k</li>
  </ul>
</details>
</div>
</ul>

#### 归并路数k的选择

<ul>

- 限制因素：
  - ____空间大小
  - ____缓冲区数量
  - 缓冲区____
- 不宜过大原因：
  - 减少每个____缓冲区容量
  - 增加____外存交换次数

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

内存</li>
    <li>

输入</li>
    <li>

容量</li>
    <li>

输入</li>
    <li>

内存</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

### 置换-选择排序

<ul>

#### 目的

<ul>

- ____初始归并段个数r
- 产生____的初始归并段

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

减少</li>
    <li>

更长</li>
  </ul>
</details>
</div>
</ul>

</ul>

> pro：置换-选择sort生成初始归并段的实例（2023）  

#### 基本条件

<ul>

- 文件设置：
  - FI：____待排文件
  - FO：初始____输出文件
  - WA：内存____区（可容纳w个记录）

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

初始</li>
    <li>

归并段</li>
    <li>

工作</li>
  </ul>
</details>
</div>
</ul>

</ul>

#### 算法步骤

<ul>

1. 从FI输入____个记录到WA
2. 从WA选出____最小值记录(MINIMAX)
3. 将MINIMAX输出到____
4. FI不空时从FI输入____记录到WA
5. 从WA中选择新的____
6. 重复____直到无法选出新MINIMAX
7. 重复____直到WA为空

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

w</li>
    <li>

关键字</li>
    <li>

FO</li>
    <li>

下一</li>
    <li>

MINIMAX</li>
    <li>

3~5</li>
    <li>

2~6</li>
  </ul>
</details>
</div>
</ul>

</ul>

表8.2置换-选择sort过程示例
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/06a91576d394233195d293599a1105b769edc8b13f4d56330f10343b1c301dd4.jpg)  

#### 实现说明

<ul>

- WA中选择MINIMAX记录需使用____实现

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

败者树</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

### 最佳归并树

<ul>

#### 基本概念

<ul>

- 目标：组织____不等的初始归并段的归并顺序，使____次数最少
- 示例：9个初始归并段长度分别为____

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

长度</li>
    <li>

I/O</li>
    <li>

9,30,12,18,3,17,2,6,24</li>
  </ul>
</details>
</div>
</ul>

</ul>

#### 归并树分析

<ul>

##### 平衡归并树

<ul>

- 3路平衡归并树结构
  - 叶结点表示____归并段，权值为____
  - 路径长度表示参加____的趟数
  - 非叶结点代表____归并段
  - 根结点表示____归并段

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

初始</li>
    <li>

段长度</li>
    <li>

归并</li>
    <li>

新</li>
    <li>

最终</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/750b4b70d0ce28d6e100a1915c1ed3b27078c90f2f1ab7eb391e62ad4abbcbd8.jpg)  
图8.183路平衡归并的归并树  

> pro：构造三叉哈夫曼树及相关的分析和计算（2013）  

##### 最佳归并树

<ul>

- 优化原则
  - 记录数____的初始归并段最先归并
  - 记录数____的初始归并段最晚归并
- 特点：总____次数最少

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

少</li>
    <li>

多</li>
    <li>

I/O</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8c05244e5d184f1800bafd18f0e9500aee22c219443d98eaf2a153b89b8ca4f3.jpg)  
图8.193路平衡归并的最佳归并树  

</ul>

#### 虚段处理

<ul>

##### 虚段添加策略

<ul>

- 情况：初始归并段不足以构成严格____树时
- 处理方法
  - 添加长度为____的"虚段"
  - 权为____的叶子应离树根最远

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

k叉</li>
    <li>

0</li>
    <li>

0</li>
  </ul>
</details>
</div>
</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/400c7ffb6e3e01b16694a55f891313b9094c8e8fae3723f8318229f52ec41d71.jpg)  
图8.208个归并段的最佳归并树  

##### 虚段数目判定

<ul>

###### 理论基础

<ul>

- 基本公式
  - n = ____（总结点数关系）
  - n = ____（度数关系）
  - n0 = ____（严格k叉树性质）
  - nk = ____

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

nk + n0</li>
    <li>

k*nk + 1</li>
    <li>

(k-1)nk + 1</li>
    <li>

(n0-1)/(k-1)</li>
  </ul>
</details>
</div>
</ul>

</ul>

###### 判定方法

<ul>

- 情况1：____=0
  - 可直接构造____归并树
  - 内结点数为____
- 情况2：____=u≠0
  - 需增加____内结点
  - 添加____个空归并段

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(n0-1)%(k-1)</li>
    <li>

k叉</li>
    <li>

nk</li>
    <li>

(n0-1)%(k-1)</li>
    <li>

1个</li>
    <li>

(k-u-1)</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

> pro：实现最佳归并时需补充的虚段数量的分析（2019）  

###### 示例分析

<ul>

- 8个归并段构成3叉树案例
  - ____=1
  - 将叶子____变为内结点
  - 添加____个空归并段(3-1-1=1)

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(8-1)%(3-1)</li>
    <li>

5</li>
    <li>

1</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

</ul>

#### 归纳总结  

<ul>

##### sort算法的比较与复习

<ul>

###### 基本sort算法（n<10000）

<ul>

- 包含算法
  - ____插入sort
  - ____sort 
  - 简单____sort
- 共同特点
  - 平均时间复杂度均为____
  - 实现____
- 直接插入sort
  - 适用：规模很小的序列(____)
  - 时间复杂度与____相关
    - 最好情况：____次比较，无交换
    - 平均/最差：____比较和交换
- 冒泡sort
  - 最好情况：____完成，n-1次比较，无交换
- 简单选择sort
  - 比较次数与初始排列____：O(n²)
  - 移动次数与初始排列____
    - 最好：____移动
    - 最坏：不超过____
- 空间复杂度：均只需____辅助元素
- 稳定性
  - 稳定：____、冒泡sort
  - 不稳定：____

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接</li>
    <li>

冒泡</li>
    <li>

选择</li>
    <li>

O(n²)</li>
    <li>

简单</li>
    <li>

n≤25</li>
    <li>

初始排列</li>
    <li>

n-1</li>
    <li>

O(n²)</li>
    <li>

一趟</li>
    <li>

无关</li>
    <li>

相关</li>
    <li>

无需</li>
    <li>

3(n-1)</li>
    <li>

一个</li>
    <li>

直接插入sort</li>
    <li>

简单选择sort</li>
  </ul>
</details>
</div>
</ul>

</ul>

###### 中等规模sort算法（n≤1000）

<ul>

- 希尔sort特点
  - 增量变化特征
    - 初始：增量____，分组多，组内记录少
    - 后期：增量____，分组少，组内记录多
  - 优势
    - 比较次数少于____sort
    - 移动次数少于____sort
    - 代码简单，额外内存____
  - 缺点：____

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

大</li>
    <li>

小</li>
    <li>

直接插入</li>
    <li>

直接插入</li>
    <li>

少</li>
    <li>

不稳定</li>
  </ul>
</details>
</div>
</ul>

</ul>

###### 大规模sort算法

<ul>

- 适用算法
  - ____sort（不稳定）
  - ____sort（不稳定）
  - ____sort（稳定）
  - ____sort（稳定）
- 快速sort
  - 特点：最通用的____内部sort
  - 性能
    - 平均：____时间，O(log₂n)空间
    - 最差：____时间，O(n)空间
  - 优化：____避免最差情况
- 堆sort
  - 时间复杂度：____
  - 优点
    - 无明显____情况
    - 几乎不需____空间
  - 缺点：平均性能难超____sort
- 归并sort
  - 特点：性能与____无关
  - 时间复杂度：____
  - 缺点：需____额外空间
- 基数sort
  - 特点：基于____位处理
  - 优点：____时间复杂度
  - 缺点
    - 实际开销不比____sort小
    - ____差
    - 需____存储空间

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

快速</li>
    <li>

堆</li>
    <li>

归并</li>
    <li>

基数</li>
    <li>

高效</li>
    <li>

O(nlog₂n)</li>
    <li>

O(n²)</li>
    <li>

三者取中法</li>
    <li>

O(nlog₂n)</li>
    <li>

最差</li>
    <li>

额外</li>
    <li>

快速</li>
    <li>

输入</li>
    <li>

O(nlog₂n)</li>
    <li>

O(n)</li>
    <li>

关键字</li>
    <li>

线性</li>
    <li>

快速</li>
    <li>

适应性</li>
    <li>

额外</li>
  </ul>
</details>
</div>
</ul>

</ul>

###### 混合使用策略

<ul>

- 目的：发挥不同算法____
- 示例：____sort与归并sort结合
- 效果：获得____整体性能

<ul>
<div>
<details>
  <summary> </summary>
  <ul>
    <li>

优势</li>
    <li>

直接插入</li>
    <li>

更好</li>
  </ul>
</details>
</div>
</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

