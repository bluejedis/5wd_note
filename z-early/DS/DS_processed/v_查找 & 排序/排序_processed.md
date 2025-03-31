以下是按照您的要求对提供的 Markdown 内容增加 `<ul></ul>` 标签后的结果。每个标题段落内容被包裹在 `<ul></ul>` 中，且上下均保留空行，严格遵循您给出的格式示例，未更改任何 Markdown 图片链接。

```markdown
# above

<ul>

# 

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

堆sort、快速sort和归并sort是本章的重难点。

读者应深入掌握各种sort算法的思想、sort过程（能动手模拟）和特征（初态的影响、复杂度、稳定性、适用性等），通常以选择题的形式考查不同算法之间的对比。

此外，对于一些常用sort算法的关键代码，要达到熟练编写的程度：看到某特定序列，读者应具有选择最优sort算法（根据sort算法特征）的能力。  

</ul>

</ul>

# sort的基本概念  

<ul>

## sort的定义

<ul>

### 基本概念

<ul>

- sort的本质
  - 重新排列表中的元素，使表中的元素满足按关键字有序的过程
  - 为了查找方便，通常希望计算机中的表是按关键字有序的

</ul>

### 输入输出定义

<ul>

- 输入
  - $n$ 个记录 $R_{1},R_{2},\cdots,R_{n}$ 
  - 对应的关键字为 $k_{1},k_{2},\cdots,k_{n}$
- 输出
  - 输入序列的一个重排 $R_{1}^{\prime},R_{2}^{\prime},\cdots,R_{n}^{\prime}$
  - 使得 $k_{1}^{\prime}\leqslant k_{2}^{\prime}\leqslant\cdots\leqslant k_{n}^{\prime}$
  - （其中"≤"可以换成其他的比较大小的符号)

</ul>

### 算法特性

<ul>

#### 稳定性

<ul>

- 定义条件
  - 若待sort表中有两个元素 $R_{i}$ 和 $R_{j}$ 
  - 其对应的关键字相同，即 ${\bf k e y}_{i}={\bf k e y}_{j}$ 
  - 在sort前 $R_{i}$ 在 $R_{j}$ 的前面
- 稳定性判断
  - 若使用某一sort算法sort后
  - $R_{i}$ 仍然在 $R_{j}$ 的前面
  - sort算法是稳定的
  - or else称这个sort算法是不稳定的

</ul>

>**attention**  
对于不稳定的sort算法，只需举出一组关键字的实例，说明它的不稳定性即可。  

#### 分类方式

<ul>

- 按存储位置分类
  - 内部sort：元素全部存放在内存中的sort
  - 外部sort：元素在内外存之间移动的sort

</ul>

#### 基本操作

<ul>

- 常见操作类型
  - 比较：确定元素前后关系
  - 移动：达到有序目的
- 特殊情况
  - 部分算法不基于比较（如基数sort）

</ul>

#### 算法分类

<ul>

- 五大类别
  - 插入sort
  - 交换sort
  - 选择sort
  - 归并sort
  - 基数sort

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
  - 每次将待sort记录插入已排序子序列
  - 按关键字大小确定插入位置
  - 直到全部记录插入完成
- 衍生算法
  - 直接插入sort
  - 折半插入sort
  - 希尔sort

</ul>

### 直接插入sort

<ul>

#### 算法过程

<ul>

- 基本状态示意
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d25ff3c4c8f034d8e69956e4e46fa3d66458180385b7fec90ac66beacd5b43c8.jpg)  

- 操作步骤
  1. 查找L（i）在L[1.i-1]中的插入位置k
  2. 将L[k...i-1]中的所有元素依次后移
  3. 将L（i）复制到L（k）

</ul>

#### 代码实现

<ul>

- 代码特点
  - 采用原地sort
  - 空间复杂度为O(1)
  - 使用哨兵优化

</ul>

#### 示例演示

<ul>

- 初始序列：49，38，65，97，76，13，27，49
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f692fcf6091936b992c48b73392b1b8b99439fcc63adb80f34bf4a92dc3a7bc.jpg)  

</ul>

#### 性能分析

<ul>

- 空间效率
  - 仅使用常数个辅助单元
  - 空间复杂度O(1)

- 时间效率
  - 最好情况：O(n)
    - 表已有序
    - 每次只需比较一次
  - 最坏情况：O(n²)
    - 表完全逆序
    - 比较和移动次数最大
  - 平均情况：O(n²)
    - 随机序列
    - 比较和移动次数约n²/4

- 稳定性
  - 是稳定的sort算法
  - 原因：从后往前比较移动

- 适用性
  - 适用于顺序存储和链式存储
  - 链式存储时无须移动元素

</ul>

#### 折半插入排序

<ul>

##### 基本思想

<ul>

- 从直接插入排序算法改进而来
- 将比较和移动操作分离：
  - 先折半查找出元素的待插入位置
  - 然后统一地移动待插入位置之后的所有元素

</ul>

##### 算法实现

<ul>

- 代码实现：

void InsertSort（ElemType A[l,int n){ 
    int i,j,low,high,mid; 
    for(i=2;i<=n;i++) //依次将A[2]~A[n]插入前面的已排序序列
        A[0]=A[i]; //将A[i]暂存到A[0] 
        low=1;high=i-1 //设置折半查找的范围 
        while(low<=high){//折半查找（默认递增有序）
            mid=(low+high)/2;//取中间点
            if(A[mid]>A[0])
                high=mid-1；//查找左半子表
            else
                low=mid+l;//查找右半子表
        }
        for(j=i-1;j>=high+1;--j)
            A[j+1]=A[j];//统一后移元素，空出插入位置
        A[high+1]=A[0];//插入操作
}

</ul>

> pro：直接插入排序和折半插入排序的比较（2012）  

##### 性能分析

<ul>

- 时间效率：
  - 比较次数约为O(nlog₂n)，与初始状态无关
  - 移动次数未改变，依赖初始状态
  - 整体时间复杂度仍为O(n²)
  - 对数据量不大时性能较好
- 稳定性：是稳定的排序算法
- 适用性：仅适用于顺序存储的线性表

</ul>

#### 希尔排序

<ul>

##### 基本思想

<ul>

- 基于直接插入排序的改进
- 先将待排序表分割成若干"特殊"子表
- 对各子表进行直接插入排序
- 最后对全体记录进行一次直接插入排序

</ul>

> pro：希尔排序中各子序列采用的排序算法（2015）  

##### 排序过程

<ul>

- 具体步骤：
  1. 取增量d₁<n，分成d₁组
  2. 各组进行直接插入排序
  3. 取第二个增量d₂<d₁
  4. 重复直到dt=1
  5. 最后一次直接插入排序

</ul>

> pro：根据希尔排序的中间过程判断所采用的增量（2014、2018）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fed15f10d006d56734ed7a4ea13576087c06e17f9b076afa8e5ea4725e0fb071.jpg)  

##### 算法实现

<ul>

- 代码实现：

void ShellSort(ElemType A[],int n){
    int dk,i,j;
    for(dk=n/2;dk>=1;dk=dk/2) //增量变化
        for(i=dk+1;i<=n;++i)
            if(A[i]<A[i-dk]){ //需将A[i]插入有序增量子表
                A[0]=A[i] //暂存A[0]
                for(j=i-dk;j>0&&A[0]<A[j];j-=dk)
                    A[j+dk]=A[j];//记录后移，查找插入的位置
                A[j+dk]=A[0] //插入
            }
}

</ul>

##### 性能分析

<ul>

- 空间效率：
  - 使用常数个辅助单元
  - 空间复杂度O(1)
- 时间效率：
  - 依赖增量序列
  - 一般约为O(n¹·³)
  - 最坏情况O(n²)
- 稳定性：不稳定
- 适用性：仅适用于顺序存储的线性表

</ul>

</ul>

</ul>

## 交换sort  

<ul>

### 冒泡sort  

<ul>

#### 基本思想

<ul>

- 从后往前（或从前往后）两两比较相邻元素的值
  - 若为逆序（即A[i-1]>A[i]），则交换它们
  - 直到序列比较完
- 第一趟冒泡结果
  - 将最小的元素交换到待sort列的第一个位置
  - 或将最大的元素交换到待sort列的最后一个位置
- 下一趟冒泡
  - 前一趟确定的最小元素不再参与比较
  - 最多做n-1趟冒泡就能把所有元素排好序

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
- 结果：最小元素已交换到第一个位置（最终位置）
- 后续趟数：对剩余子序列采用同样方法进行sort

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ed7cdadbc990048828d90cd70389495b74cc134c304ca5434cc034bef5c682a7.jpg)  
图8.3冒泡sort示例  

#### 算法实现

<ul>

void BubbleSort（ElemType A[],int for(int i=0;i<n-1;    
    boolflag = false; 
    for(int j=n-1;j>i;j--) 
        if(A[j-1]>A[j]){
            //表示本趟冒泡是否发生交换的标志
            //一趟冒泡过程
            //若为逆序  
            swap（A[j-1]，A[j]）；//使用封装的swap函数交换
            flag = true; 
        if(flag == false) 
            return;//本趟遍历后没有发生交换，说明表已经有序  

</ul>

#### 性能分析

<ul>

##### 空间效率

<ul>

- 仅使用了常数个辅助单元
- 空间复杂度为O(1)

</ul>

##### 时间效率

<ul>

- 最好情况：O(n)
  - 当初始序列有序时
  - 第一趟冒泡后flag依然为false
  - 直接跳出循环
  - 比较次数为n-1，移动次数为0
- 最坏情况：O(n²)
  - 当初始序列为逆序时
  - 需要进行n-1趟sort
  - 第i趟sort要进行n-i次关键字的比较
  - 每次比较后都必须移动元素3次
- 平均时间复杂度：O(n²)

</ul>

##### 稳定性

<ul>

- 稳定的sort算法
  - 因为i>j且A[i]=A[j]时不会发生交换

</ul>

##### 适用性

<ul>

- 适用于顺序存储和链式存储的线性表

</ul>

</ul>

> **attention**  
- 中所产生的有序子序列must是全局有序的（不同于直接插入sort）
- 有序子序列中的所有元素的关键字must **<** or **>** 无序子序列
- per tripsort都会place一个元素to其最终的位置上

### 快速sort  

<ul>

#### 基本思想

<ul>

- 基于分治法
  - 在待sort表L[1..n]中任取一个元素pivot作为枢轴
  - 通过一趟sort将待sort表划分为独立的两部分L[1.k-1]和 $\operatorname{L}\left[\mathsf{k}\!+\!1...\mathsf{n}\right]$
    - L[1.k-1]中的所有元素小于pivot
    - $\mathrm{L}\,[\,\mathsf{k}\!+\!1...\mathsf{n}\,]$ 中的所有元素大于或等于pivot
    - pivot放在其最终位置L（k）上
  - 这个过程称为一次划分
  - 然后分别递归地对两个子表重复上述过程
  - 直至每部分内只有一个元素或为空为止

</ul>

#### 一趟快速sort过程示例

<ul>

- 过程是交替搜索和交换
- 设两个指针i和j，初值分别为low和high
- 取第一个元素49为枢轴赋值到变量pivot
- 搜索过程：
  - 指针j从high往前搜索找到第一个小于枢轴的元素27，将27交换到i所指位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/526c93eb7112f29a9e13e9ad683c9d3dc855c77dc463ca2b2d7e5ec96387ca9d.jpg)  

  - 指针i从1ow往后搜索找到第一个大于枢轴的元素65，将65交换到j所指位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/567c047e31d6ce1a994c684a4dfb4b2d64c9ba4e4c04b1136c9c4c4e3317aa7d.jpg)  

  - 指针继续往前搜索找到小于枢轴的元素13，将13交换到i所指位置
  - 指针i继续往后搜索找到大于枢轴的元素97，将97交换到j所指位置
  - 指针j继续往前搜索小于枢轴的元素，直至 $\scriptstyle{\dot{\Sigma}}=={\dot{\bar{\jmath}}}$

</ul>

> pro：快速sort的中间过程的分析（2014、2019、2023）  

#### 算法实现

<ul>

- 划分算法Partition()
  - 返回k值，L(k)已放在其最终位置
  - 对表进行划分，然后对两个子表递归调用
- 代码实现：
  
  int pivot pos = Partition(A,low,high);
  QuickSort(A,low,pivotpos-1);
  QuickSort(A,pivotpos+1,high);
  

</ul>

> pro：（算法题）快速sort中划分操作的应用（2016）  

##### Partition()函数实现

<ul>

- 以第一个元素为枢轴
- 将表中比枢轴大的元素向右移动
- 将比枢轴小的元素向左移动
- 代码实现略

</ul>

#### 性能分析

<ul>

> pro：快速sort中递归次数的影响因素分析（2010）  

##### 空间效率

<ul>

- 需要递归工作栈
  - 最好情况：O(log₂n)
  - 最坏情况：O(n)
  - 平均情况：O(log₂n)

</ul>

##### 时间效率

<ul>

- 与划分是否对称有关
- 最坏情况：O(n²)
  - 发生在两个区域极度不对称时
- 改进方法：
  - 选取更好的枢轴元素
  - 随机选取枢轴元素
- 最理想情况：O(nlog₂n)
  - Partition()能做到最平衡划分
- 平均情况接近最佳情况

</ul>

##### 稳定性

<ul>

- 不稳定的sort算法
- 原因：相同关键字的记录可能交换位置

</ul>

> pro：快速sort适合采用的存储方式（2011）  

##### 适用性

<ul>

- 仅适用于顺序存储的线性表

</ul>

</ul>

>**attention**  
- 在快速sort算法中，并不产生有序子序列，但每一趟sort后会将上一趟划分的各个无序子表的枢轴（基准）元素放到其最终的位置上。

</ul>

</ul>

##  选择sort  

<ul>

### 基本思想

<ul>

- 每一趟（如第 $i$ 趟）在后面 $n-i+1\ (i=1,2,\cdots,n-1)$ 个待sort元素中选取关键字最小的元素，作为有序子序列的第 $i$ 个元素，直到第 $n\!-\!1$ 趟做完，待sort元素只剩下1个，就不用再选。选择sort中的堆sort是历年统考考查的重点。  

</ul>

### 简单选择sort  

<ul>

#### 算法思想

<ul>

- 假设sort表为L[1.n]，第 $i$ 趟sort即从L[i.n]中选择关键字最小的元素与L（i）交换
- 每一趟sort可以确定一个元素的最终位置
- 经过 $n\!-\!1$ 趟sort就可使得整个sort表有序

</ul>

#### 代码实现

<ul>

void SelectSort（ElemType A[l,int n){ for(int  $\scriptstyle{\dot{\boldsymbol{\mathbf{z}}}}=0$   $\scriptstyle{\mathrm{i}}<{\mathrm{n}}-1$   $\ \ \mathrm{i}_{\mathrm{++}}$  //一共进行n-1趟 int min $\mathbf{\tau}=\dot{\mathbf{\tau}}\mathbf{\Gamma}$ //记录最小元素位置for（int $\scriptstyle{\mathrm{j}}={\mathrm{i}}+1$ ;j<n; $\j++$ //在A[in-1]中选择最小的元素if(A[j] $\tt<\tt A$ [min]） min=j;/更新最小元素位置if(min ${\mathfrak{z}}={\mathfrak{z}}$ ）swap（A[i]，A[min]）；//封装的swap（）函数共移动元素3次  

</ul>

#### 性能分析

<ul>

##### 空间efficiency

<ul>

- 仅使用常数个辅助单元
- 空间efficiency为 $O(1)$  

</ul>

##### 时间efficiency

<ul>

- 元素移动操作次数
  - 不会超过 $3(n-1)$ 次
  - 最好情况：移动0次（表已有序）
- 元素比较次数
  - 与序列初始状态无关
  - 始终是 $n(n-1)/2$ 次
- 时间复杂度始终是 $O(n^{2})$  

</ul>

##### 稳定性

<ul>

- 是一种不稳定的sort算法
- 原因：第 $i$ 趟找到最小元素后和第 $i$ 个元素交换，可能导致相同关键字元素的相对位置改变
- 示例：表 $L=\{2,2,1\}$ ，经过一趟sort后 $L=\{1,2,2\}$ ，最终sort序列也是 $L=\{1,2,2\}$

</ul>

##### 适用性

<ul>

- 适用于顺序存储和链式存储的线性表
- 适用于关键字较少的情况

</ul>

</ul>

### 堆sort  

<ul>

#### 定义

<ul>

- $n$ 个关键字序列L[1..n]称为堆，当&仅当该序列满足：  
  - $\textcircled{1}\,\texttt{L}(\dot{\texttt{i}})>=\texttt{L}$ （2i）& $\tt L\left(\mathrm{i}\right)\mathrm{>=}\tt L$ （2i+1）或 
  - $\circledcirc\mathrm{~\bf~L~}(\dot{\mathrm{~\bf~i~}})<=\tt{L}$ （2i）& $\mathrm{~\tt~L~}(\mathrm{i})<=\tt L\;(2\,\mathrm{i}+1)$ （1≤i≤Ln/2]）  

</ul>

>pro：堆的性质与特点（2020）  

#### 基本概念

<ul>

- 可以将堆视为一颗完全二叉树
  - 满足条件 $\circledcirc$ 的堆称为大根堆（大顶堆）
    - 大根堆的最大元素存放在根结点
    - 任意非根结点的值小于或等于其双亲结点值
  - 满足条件 $\mathcal{Q}$ 的堆称为小根堆（小顶堆）
    - 小根堆的定义与大根堆相反
    - 根结点是最小元素

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2247078dce401249cf3e73341e50d39d624875f9123a83d24eb59f6fed868004.jpg)  
图8.5一个大根堆示意图  

#### 堆sort思路

<ul>

- 基本步骤
  - 将L[1.n]中的n个元素建成初始堆
  - 输出堆顶元素（最大值）
  - 将堆底元素送入堆顶
  - 向下调整保持大顶堆性质
  - 重复直到堆中仅剩一个元素
- 需要解决的关键问题
  - $\textcircled{\scriptsize{1}}$ 如何将无序序列构造成初始堆
  - $\circledcirc$ 输出堆顶元素后如何调整新堆

</ul>

>pro：初始建堆的操作（2018、2021）  

#### 初始堆构造过程

<ul>

- 基本原理
  - n个结点的完全二叉树，最后一个结点是第$\lfloor n/2\rfloor$个结点的孩子
  - 从第$\lfloor n/2\rfloor$个结点开始向前依次调整
- 调整步骤
  - 对当前结点进行筛选
  - 比较根结点与左右孩子的值
  - 必要时进行交换
  - 继续向下调整直到满足堆的性质

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a02575fe03c9077c1e1b12da0a42128eed1a6389ff67ccc69548cc3ecd8c9411.jpg)  
图8.6自下往上逐步调整为大根堆  

>pro：输出堆顶元素后调整堆的比较次数的分析（2015）  

#### 堆的调整过程

<ul>

- 输出堆顶元素后的处理
  - 将堆的最后一个元素与堆顶元素交换
  - 向下进行筛选
  - 不断与左右孩子较大者交换
  - 直到满足堆的性质

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/705800718fde337b1004d353eb67a4467c05345b00380d86c440143a0192d934.jpg)  
图8.7输出堆顶元素后再将剩余元素调整成新堆  

#### 算法实现

<ul>

##### 建立大根堆

<ul>

void Build Max Heap（ElemType A[],intlen) 
for（inti=len/2;i>0;i--) 川/从  $\mathrm{i}\!=\![\mathrm{n}/2]\!\sim\!1$  ，反复调整堆 
HeadAdjust（A,i,len);  

void HeadAdjust（ElemType A[],int k,int len）(//Head Adjust  $\kappa$  为根的子树进行调整  

$\mathtt{A}\left[\,0\,\right]\mathtt{=A}\left[\,k\,\right]$  I/A[0】暂存子树的根结点 
for（int $\scriptstyle{\dot{1}}=Z^{\star}k$  $\scriptstyle{\mathrm{i}}<={\mathrm{1em}}$  $\scriptstyle{\mathrm{~i~}}\star=2$ ）/沿key较大的子结点向下筛选
if（i<len&&A[i]<A[i+l])   //取key较大的子结点的下标
if  $\scriptstyle(\mathtt{A}\,[\,0\,]\,>=\mathtt{A}\,[\,\mathtt{i}\,]$  )break; 筛选结束 
elsel A[k]  $\mathtt{\ =A}$  [i]; //将A[i]调整到双亲结点上  $\kappa{=}1$ //修改 $\kappa$ 值，以便继续向下筛选
A[k]=A[0];//被筛选结点的值放入最终位置  

</ul>

##### 堆sort实现

<ul>

void HeapSort（ElemType A[],int len){
Build Max Heap(A,len); /初始建堆 
for（int i=len; $^{\mathrm{i}>1}$ ;i--）{
${\mathrm{{//n-1}}}$ 趟的交换和建堆过程
Swap(A[i],A[1]);//输出堆顶元素（和堆底元素交换）
HeadAdjust（A,l,i-1); /调整，把剩余的i-1个元素整理成堆  

</ul>

</ul>

>pro：堆的插入操作及比较次数的分析（2009、2011）  

#### 堆的插入操作

<ul>

- 基本步骤
  - 将新结点放在堆的末端
  - 对新结点向上执行调整操作

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/98ce82e66a4eab0bac8b05ca1e714ecc3d9283c4602d47d25fd506bba0c39752.jpg)  
图8.8大根堆的插入操作示例  

>pro：堆在海量数据中选出最小 $\pmb{k}$ 个数的应用及efficiency分析（2022）  

#### 应用场景

<ul>

- 适用于关键字较多的情况
- 海量数据处理示例
  - 在1亿个数中选出前100个最大值
  - 处理步骤：
    - 使用100大小的数组读入前100个数
    - 建立小顶堆
    - 读入余下数据并与堆顶比较
    - 大于堆顶则替换并重新调整

</ul>

#### 性能分析

<ul>

##### 空间efficiency

<ul>

- 仅使用常数个辅助单元
- 空间复杂度为O(1)

</ul>

##### 时间efficiency

<ul>

- 建堆时间为O(n)
- n-1次向下调整操作
- 每次调整时间复杂度为O(h)
- 各种情况下时间复杂度均为O(nlog₂n)

</ul>

##### 稳定性

<ul>

- 是一种不稳定的sort算法
- 原因：筛选可能改变相同关键字元素的相对位置
- 示例：表L={1,2,2}的sort过程说明

</ul>

##### 适用性

<ul>

- 仅适用于顺序存储的线性表

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
- 归并含义：将两个或两个以上的有序表合并成新的有序表
- 基本过程：
  - 将n个记录视为n个有序子表(每个长度为1)
  - 两两归并得到⌈n/2⌉个长度为2或1的有序表
  - 继续两两归并直到合并成一个长度为n的有序表

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/365d58fda45f0a53c2d1bd276f956db5d5d2faf07813666f234e33ea5ffff7d7.jpg)  
图8.9二路归并sort示例  

> pro：（算法题）归并sort思想的应用（2011）  

#### Merge操作实现

<ul>

##### 功能描述

<ul>

- 将前后相邻的两个有序表归并为一个有序表
- 两段有序表位于A[low..mid]和A[mid+1..high]

</ul>

##### 实现步骤

<ul>

- 复制数据到辅助数组B
- 比较B中两段数据
- 将较小值放入A中
- 处理剩余数据

</ul>

ElemType ${}^{\star}\mathtt{B}=$ （ElemType \*)malloc（ $(\mathtt{n}\!+\!1)$ \*sizeof（ElemType））；//辅助数组Bvoid Merge（ElemType A[],int low,int mid,int high)(表A的两段A[low..mid]和A[mid+1..high]各自有序，将它们合并成一个有序表int i,j，k; for(  $\kappa=$  low;  $\kappa\!<=$  high;  $\kappa++$  B[k]  $\mathtt{\ =}\mathtt{A}$  [k]; /将A中所有元素复制到B中 for(  $\dot{x}=$  low,j=mid+1,  $\kappa{=}1$   $\mathrm{i}<=$  mid&&j  $<=$  high;  $\kappa++$  if（B[i] $<=\mathtt{B}$ [j])/比较B的两个段中的元素A[k] $\mathbf{\tau}=\mathbf{F}$ 3 $\mathtt{i}_{\mathcal{+++}}$ //将较小值复制到A中else A[k]=B[j++]; while $\scriptstyle{\dot{\mathbf{z}}}<={\mathfrak{m}}$ id) $\mathbb{A}\left[\mathbb{k}^{++}\right]\!=\!\mathbb{B}\left[\mathbb{i}^{++}\right]$ ：//若第一个表未检测完，复制while( $\scriptstyle{\mathrm{~j}}<=$ high) $\mathbb{A}\left[\mathbb{k}{+}{+}\right]{=}\mathbb{B}\left[\mathbb{j}{+}{+}\right]$ ：//若第二个表未检测完，复制  

</ul>

>**attention**  

在上面的代码中，最后两个while循环只有一个会执行  

#### 归并sort的实现

<ul>

##### 一趟归并操作

<ul>

- 调用⌈n/2h⌉次merge()算法
- 将相邻长度为h的有序段两两归并
- 得到长度为2h的有序段
- 需要进行logn趟

</ul>

##### 递归实现

<ul>

###### 分解阶段

<ul>

- 将n个元素的待sort表分成两个n/2元素的子表
- 递归对子表进行sort

</ul>

###### 合并阶段

<ul>

- 合并两个已sort的子表得到sort结果

</ul>

void MergeSort（ElemType A[],int low,int high）{if(low<high){ int mid $=$ (low+high)/2;从中间划分两个子序列MergeSort（A,low,mid);//对左侧子序列进行递归sortMergeSort(A,mid+l,high); /对右侧子序列进行递归sort Merge(A,low,mid,high); /归并  

</ul>

</ul>

> pro： 归并sort和插入sort的对比（2017）  

#### 性能分析

<ul>

##### 空间efficiency

<ul>

- Merge操作需要n个辅助单元
- 空间复杂度为O(n)

</ul>

##### 时间efficiency

<ul>

- 每趟归并时间复杂度O(n)
- 需要⌈log₂n⌉趟归并
- 总时间复杂度O(nlog₂n)

</ul>

##### 稳定性

<ul>

- 是稳定的sort算法
- Merge操作不改变相同关键字记录的相对次序

</ul>

##### 适用性

<ul>

- 适用于顺序存储和链式存储的线性表

</ul>

</ul>

>**attention**  

一般而言，对于 $N$ 个元素进行 $k$ 路归并sort时，sort的趟数 $m$ 满足 $k^{m}\!=\!N$ ，thus $m\!=\!\log_{k}\!N$ 又考虑到 $m$ 为整数，thus $\scriptstyle m\,=\,\lceil\log_{k}N\rceil_{\circ}$ 这和前面的二路归并sort算法是一致的。

### 基数sort  

<ul>

#### 基本概念

<ul>

- 一种特别的sort算法
  - 不基于比较和移动进行sort
  - 基于关键字各位的大小进行sort
  - 借助多关键字sort思想对单逻辑关键字进行sort

</ul>

#### 算法原理

<ul>

##### 关键字组成

<ul>

- 长度为n的线性表中每个结点aj的关键字由d元组(kj^(d-1), kj^(d-2),..., kj^1, kj^0)组成
- 满足0≤kj^i≤r-1 (0≤j<n,0≤i≤d-1)
  - kj^(d-1)为最主位关键字
  - kj^0为最次位关键字

</ul>

##### 实现方法

<ul>

- 最高位优先（MSD）法
  - 按关键字位权重递减依次划分子序列
  - 最后连接成有序序列
- 最低位优先（LSD）法
  - 按关键字位权重递增依次sort
  - 最后形成有序序列

</ul>

</ul>

#### sort过程

<ul>

##### 基本步骤

<ul>

- 使用r个队列Q0,Q1,...,Qr-1
- 对i=0,1,...,d-1依次进行：
  - 分配：
    - 初始化空队列
    - 根据关键字kj^i将aj放入对应队列
  - 收集：
    - 将各队列节点首尾相接形成新序列

</ul>

##### 实例演示

<ul>

- 对10个记录进行sort示例
  - 关键字为1000以下正整数
  - 基数r=10
  - 需要10个链队列
  - 每个关键字由3位子关键字构成

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/48cc62165ce2360ed01930db009972b6262a390392448a6089225dc7f219ffea.jpg)  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9c6f2bf6f54e66bb9877535bef33f0c0f8826a93ead82956fa1cc97ee0d7f7ec.jpg)  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16003a2547311992cc50f4c5ee3d857229a213f2dc465318c889f2714a206b93.jpg)  

</ul>

#### 性能分析

<ul>

##### 空间efficiency

<ul>

- 需要r个队列的辅助存储空间
- 空间复杂度为O(r)

</ul>

> pro：元素的移动次数与序列初态无关的sort算法（2015）  

##### 时间efficiency

<ul>

- 需要d趟分配和收集操作
- 一趟分配时间复杂度O(n)
- 一趟收集时间复杂度O(r)
- 总时间复杂度O(d(n+r))
- 与序列初始状态无关

</ul>

##### 稳定性

<ul>

- 是稳定的sort算法
- 不会交换相同关键字的相对位置

</ul>

##### 适用性

<ul>

- 适用于顺序存储和链式存储的线性表

</ul>

</ul>

### 计数sort

<ul>

#### 基本思想

<ul>

- 不基于比较的sort算法
- 统计小于x的元素个数确定最终位置

</ul>

>**attention**  

计数sort并不在统考大纲的范围内，但其sort思想在历年真题中多次涉及！  

#### 算法实现

<ul>

##### 数据结构

<ul>

- 输入数组A[n]
- 输出数组B[n]
- 计数数组C[k]

</ul>

> pro：计数sort相关的思想和代码的分析（2021）  

##### 算法步骤

<ul>

- 初始化计数数组
- 统计元素出现次数
- 累加计算小于等于x的元素个数
- 从后往前放置元素到正确位置

</ul>

##### 示例演示

<ul>

- 输入数组A[]={2,4,3,0,2,3}的sort过程

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e6d44032ce8506b47ebbb00a8709f6c74ae4f9f3c10eef0ae5cff2a9686fb669.jpg)  

</ul>

#### 性能分析

<ul>

##### 空间efficiency

<ul>

- 空间复杂度O(n+k)或O(k)
- 用空间换时间的策略

</ul>

##### 时间efficiency

<ul>

- 总时间复杂度O(n+k)
- k=O(n)时为O(n)
- k>O(nlogn)时不如比较类sort

</ul>

##### 稳定性

<ul>

- 是稳定的sort算法
- 相同元素相对位置不变

</ul>

##### 适用性

<ul>

- 更适用于顺序存储
- 适用于整数且范围不太大的序列

</ul>

</ul>

</ul>

</ul>

# 各种内部sort算法的比较及应用  

<ul>

##  比较  

<ul>

### 比较因素

<ul>

- 时间复杂度
- 空间复杂度
- 稳定性
- 适用性
- 过程特征

</ul>

> pro：各种sort算法的特点、比较和适用场景（2017、2020、2022）  

#### 时间复杂度分析

<ul>

- O(n²)算法
  - 简单选择sort
  - 直接插入sort
  - 冒泡sort
    - 最好情况可达O(n)：直接插入sort和冒泡sort
    - 与初始状态无关：简单选择sort
- 希尔sort
  - 对大规模数据效率高
  - 精确渐近时间未知
- O(nlog₂n)算法
  - 堆sort
    - 线性时间建堆
    - O(nlog₂n)完成sort
  - 快速sort
    - 最坏O(n²)
    - 平均O(nlog₂n)
  - 归并sort
    - 最好、最坏、平均均为O(nlog₂n)

</ul>

#### 空间复杂度分析

<ul>

- O(1)空间
  - 简单选择sort
  - 插入sort
  - 冒泡sort
  - 希尔sort
  - 堆sort
- O(log₂n)空间
  - 快速sort（递归栈）
    - 最坏可达O(n)
- O(n)空间
  - 二路归并sort

</ul>

> pro：sort算法的稳定性判断及改进（2021、2023）  

#### 稳定性分析

<ul>

- 稳定算法
  - 插入sort
  - 冒泡sort
  - 归并sort
  - 基数sort
- 不稳定算法
  - 简单选择sort
  - 快速sort
  - 希尔sort
  - 堆sort

</ul>

> pro：更适合采用顺序存储的sort算法（2017）  

#### 适用性分析

<ul>

- 仅适用于顺序存储
  - 折半插入sort
  - 希尔sort
  - 快速sort
  - 堆sort
- 同时适用于顺序和链式存储
  - 直接插入sort
  - 冒泡sort
  - 简单选择sort
  - 归并sort
  - 基数sort

</ul>

> pro：根据sort的中间过程判断所采用的sort算法（2009、2010）  

> pro：per tripsort后都至少能确定一个元素的最终位置的sort算法（2012）  

#### 过程特征分析

<ul>

- per trip确定最值
  - 冒泡sort
  - 简单选择sort
  - 堆sort
- per trip确定最终位置
  - 快速sort

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

- 待sort的元素个数n
- 待sort的元素的初始状态
- 关键字的结构及其分布情况
- 稳定性的要求
- 存储结构及辅助空间的大小限制等

</ul>

### sort算法小结  

<ul>

#### 基于数据规模n的选择

<ul>

##### n较小时的选择

<ul>

- 可采用：
  - 直接插入sort
  - 简单选择sort
- 选择考虑：
  - 当记录本身信息量较大时，用简单选择sort较好
  - 原因：直接插入sort所需的记录移动次数较简单选择sort的多

</ul>

##### n较大时的选择

<ul>

- 应采用时间复杂度为 $O(n\mathrm{log}_{2}n)$ 的sort算法：
  - 快速sort
  - 堆sort 
  - 归并sort
- 具体选择考虑：
  - 快速sort：当待sort的关键字随机分布时，是目前基于比较的内部sort算法中最好的算法
  - 堆sort：
    - 所需辅助空间少于快速sort
    - 不会出现快速sort可能的最坏情况
    - 属于不稳定sort
  - 归并sort：适用于要求稳定且时间复杂度为 $O(n\mathrm{log}_{2}n)$ 的情况

</ul>

</ul>

#### 基于初始状态的选择

<ul>

- 当文件初始状态已按关键字基本有序时，宜选用：
  - 直接插入sort
  - 冒泡sort

</ul>

#### 基于比较的sort算法特性

<ul>

- 比较判定过程特点：
  - 每次比较两个关键字大小后只有两种可能的转移
  - 可用二叉树描述比较判定过程
- 时间复杂度结论：
  - 当文件的 $n$ 个关键字随机分布时，任何借助于"比较"的sort算法
  - 至少需要 $O(n\mathrm{log}_{2}n)$ 的时间

</ul>

#### 特殊情况的选择

<ul>

##### n很大且关键字特殊时

<ul>

- 当满足以下条件时，采用基数sort较好：
  - 记录的关键字位数较少
  - 可以分解

</ul>

##### 记录信息量较大时

<ul>

- 为避免耗费大量时间移动记录
- 可用链表作为存储结构

</ul>

</ul>

</ul>

</ul>

## 外部sort  

<ul>

### 概述

<ul>

- 外部sort可能会考查相关概念、方法和sort过程
- 外部sort的算法比较复杂，不会在算法设计上进行考查
- 主要内容：
  - 外部sort指大文件sort，待sort记录存储在外存中，无法一次性装入内存
  - 减少平衡归并中外存读/写次数的方法：
    - 增大归并路数
    - 减少归并段个数
  - 利用败者树增大归并路数
  - 利用置换-选择sort增大归并段长度来减少归并段个数
  - 由长度不等的归并段进行多路平衡归并，需要构造最佳归并树

</ul>

### 基本概念

<ul>

- 内部sort：在内存中进行的sort算法
- 外部sort：
  - 适用于大文件sort
  - 记录存储在外存上
  - 需要分批调入内存进行sort
  - 需要多次内存和外存交换

</ul>

### 方法

<ul>

#### 基本原理

<ul>

- 文件存储特点：
  - 按块存储在磁盘上
  - 操作系统按块读/写
  - 磁盘读/写时间远超内存运算时间
  - 主要考虑I/O次数

</ul>

> pro：对大文件sort时使用的sort算法（2016）  

#### sort过程

<ul>

- 两个阶段：
  1. 初始化阶段：
     - 根据内存缓冲区大小分割文件
     - 对子文件进行内部sort
     - 生成有序子文件（归并段/顺串）
  2. 归并阶段：
     - 对归并段逐趟归并
     - 直至得到完整有序文件

</ul>

#### 归并实现

<ul>

- 内存分配：
  - 三个缓冲区
    - 两个输入缓冲区
    - 一个输出缓冲区

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f9dfc2273b2657ab8f22bac4053500f6f3c968af70843c709cd6de6d27e0e7f8.jpg)  
图8.14二路归并  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/594c62b9eed6c74fbcd2ef228dc89133d1f7dacc1faac7b8cf3699861e02d96b.jpg)  
图8.15二路平衡归并的sort过程  

#### 时间开销

<ul>

- 总时间组成：
  - 内部sort时间
  - 外存信息读/写时间
  - 内部归并时间
- 优化重点：
  - 减少I/O次数
  - 以磁盘块为单位读写

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/29ffd4a87f89e3a71844bdb43087db397877ef3872bcda905c7c5cc68854e819.jpg)  
图8.164路平衡归并的sort过程  

#### 优化策略

<ul>

- 增大归并路数k：
  - 减少归并趟数
  - 减少磁盘I/O次数
- 减少初始归并段个数r：
  - 降低归并树高度
  - 减少归并趟数S

</ul>

</ul>

### 多路平衡归并与败者树

<ul>

#### 归并路数k的影响

<ul>

- 增加归并路数k的优缺点：
  - 优点：减少归并趟数S和I/O次数
  - 缺点：增加内部归并时间
    - k个元素选最小需k-1次比较
    - 每趟归并n个元素需(n-1)(k-1)次比较
    - S趟归并总比较次数：S(n-1)(k-1)=⌈log_kr⌉(n-1)(k-1)=⌈log_2r⌉(n-1)(k-1)/⌈log_2k⌉
    - (k-1)/⌈log_2k⌉随k增长而增长

</ul>

#### 败者树优化

<ul>

- 引入目的：
  - 使内部归并不受k增大影响
- 特点：
  - 树形选择排序变体
  - 完全二叉树结构
  - k个叶节点存放当前比较元素
  - 内部节点记录"失败者"
  - 根节点指向最小数

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e2a0f7cbaa050a4bfea0e9a28cf40956989e3d9e2e56ab38136f036fb8d98f85.jpg)  
图8.17实现5路归并的败者树  

- 性能分析：
  - 深度为⌈log_2k⌉+1
  - 选择最小关键字需⌈log_2k⌉次比较
  - 总比较次数：S(n-1)⌈log_2k⌉=⌈log_kr⌉(n-1)⌈log_2k⌉=(n-1)⌈log_2r⌉
  - 比较次数与k无关

#### 归并路数k的选择

<ul>

- 限制因素：
  - 内存空间大小
  - 输入缓冲区数量
  - 缓冲区容量
- 不宜过大原因：
  - 减少每个输入缓冲区容量
  - 增加内存外存交换次数

</ul>

</ul>

### 置换-选择排序

<ul>

#### 目的

<ul>

- 减少初始归并段个数r
- 产生更长的初始归并段

</ul>

> pro：置换-选择sort生成初始归并段的实例（2023）  

#### 基本条件

<ul>

- 文件设置：
  - FI：初始待排文件
  - FO：初始归并段输出文件
  - WA：内存工作区（可容纳w个记录）

</ul>

#### 算法步骤

<ul>

1. 从FI输入w个记录到WA
2. 从WA选出关键字最小值记录(MINIMAX)
3. 将MINIMAX输出到FO
4. FI不空时从FI输入下一记录到WA
5. 从WA中选择新的MINIMAX
6. 重复3~5直到无法选出新MINIMAX
7. 重复2~6直到WA为空

</ul>

表8.2置换-选择sort过程示例
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/06a91576d394233195d293599a1105b769edc8b13f4d56330f10343b1c301dd4.jpg)  

#### 实现说明

<ul>

- WA中选择MINIMAX记录需使用败者树实现

</ul>

</ul>

### 最佳归并树

<ul>

#### 基本概念

<ul>

- 目标：组织长度不等的初始归并段的归并顺序，使I/O次数最少
- 示例：9个初始归并段长度分别为9,30,12,18,3,17,2,6,24

</ul>

#### 归并树分析

<ul>

##### 平衡归并树

<ul>

- 3路平衡归并树结构
  - 叶结点表示初始归并段，权值为段长度
  - 路径长度表示参加归并的趟数
  - 非叶结点代表新归并段
  - 根结点表示最终归并段

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/750b4b70d0ce28d6e100a1915c1ed3b27078c90f2f1ab7eb391e62ad4abbcbd8.jpg)  
图8.183路平衡归并的归并树  

> pro：构造三叉哈夫曼树及相关的分析和计算（2013）  

##### 最佳归并树

<ul>

- 优化原则
  - 记录数少的初始归并段最先归并
  - 记录数多的初始归并段最晚归并
- 特点：总I/O次数最少

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8c05244e5d184f1800bafd18f0e9500aee22c219443d98eaf2a153b89b8ca4f3.jpg)  
图8.193路平衡归并的最佳归并树  

</ul>

#### 虚段处理

<ul>

##### 虚段添加策略

<ul>

- 情况：初始归并段不足以构成严格k叉树时
- 处理方法
  - 添加长度为0的"虚段"
  - 权为0的叶子应离树根最远

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/400c7ffb6e3e01b16694a55f891313b9094c8e8fae3723f8318229f52ec41d71.jpg)  
图8.208个归并段的最佳归并树  

##### 虚段数目判定

<ul>

###### 理论基础

<ul>

- 基本公式
  - n = nk + n0（总结点数关系）
  - n = k*nk + 1（度数关系）
  - n0 = (k-1)nk + 1（严格k叉树性质）
  - nk = (n0-1)/(k-1)

</ul>

###### 判定方法

<ul>

- 情况1：(n0-1)%(k-1)=0
  - 可直接构造k叉归并树
  - 内结点数为nk
- 情况2：(n0-1)%(k-1)=u≠0
  - 需增加1个内结点
  - 添加(k-u-1)个空归并段

</ul>

</ul>

> pro：实现最佳归并时需补充的虚段数量的分析（2019）  

###### 示例分析

<ul>

- 8个归并段构成3叉树案例
  - (8-1)%(3-1)=1
  - 将叶子5变为内结点
  - 添加1个空归并段(3-1-1=1)

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
  - 直接插入sort
  - 冒泡sort 
  - 简单选择sort
- 共同特点
  - 平均时间复杂度均为O(n²)
  - 实现简单
- 直接插入sort
  - 适用：规模很小的序列(n≤25)
  - 时间复杂度与初始排列相关
    - 最好情况：n-1次比较，无交换
    - 平均/最差：O(n²)比较和交换
- 冒泡sort
  - 最好情况：一趟完成，n-1次比较，无交换
- 简单选择sort
  - 比较次数与初始排列无关：O(n²)
  - 移动次数与初始排列相关
    - 最好：无需移动
    - 最坏：不超过3(n-1)
- 空间复杂度：均只需一个辅助元素
- 稳定性
  - 稳定：直接插入sort、冒泡sort
  - 不稳定：简单选择sort

</ul>

###### 中等规模sort算法（n≤1000）

<ul>

- 希尔sort特点
  - 增量变化特征
    - 初始：增量大，分组多，组内记录少
    - 后期：增量小，分组少，组内记录多
  - 优势
    - 比较次数少于直接插入sort
    - 移动次数少于直接插入sort
    - 代码简单，额外内存少
  - 缺点：不稳定

</ul>

###### 大规模sort算法

<ul>

- 适用算法
  - 快速sort（不稳定）
  - 堆sort（不稳定）
  - 归并sort（稳定）
  - 基数sort（稳定）
- 快速sort
  - 特点：最通用的高效内部sort
  - 性能
    - 平均：O(nlog₂n)时间，O(log₂n)空间
    - 最差：O(n²)时间，O(n)空间
  - 优化：三者取中法避免最差情况
- 堆sort
  - 时间复杂度：O(nlog₂n)
  - 优点
    - 无明显最差情况
    - 几乎不需额外空间
  - 缺点：平均性能难超快速sort
- 归并sort
  - 特点：性能与输入无关
  - 时间复杂度：O(nlog₂n)
  - 缺点：需O(n)额外空间
- 基数sort
  - 特点：基于关键字位处理
  - 优点：线性时间复杂度
  - 缺点
    - 实际开销不比快速sort小
    - 适应性差
    - 需额外存储空间

</ul>

###### 混合使用策略

<ul>

- 目的：发挥不同算法优势
- 示例：直接插入sort与归并sort结合
- 效果：获得更好整体性能

</ul>

</ul>

</ul>

</ul>

</ul>
```

### 说明
1. 每个标题下的内容都被包裹在 `<ul></ul>` 标签中，且上下均保留空行。
2. Markdown 图片链接（如 `![](url)``）保持原样未修改。
3. 所有层级的标题（`#`, `##`, `###` 等）后均添加了对应的 `<ul></ul>` 包裹其内容。
4. 严格遵循您提供的期望格式示例，确保缩进和层级关系清晰。

如果您有进一步调整需求，请随时告知！