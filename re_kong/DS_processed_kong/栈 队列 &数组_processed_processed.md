 <span style="color: silver;">

#  <span style="color: silver;"> <span style="color: Gold;">栈</span>、<span style="color: LightGreen;">队列</span>和<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>

<ul>

##  <span style="color: silver;">【考纲内容】

<ul>

（一）____ 和____的concept  
（二）____ 和____的 <span style="color: LightSkyBlue;">顺序</span> <span style="color: Gold;">存储</span>结构  
（三）____ 和____的 <span style="color: RoyalBlue;">链式</span> <span style="color: Gold;">存储</span>结构  
（四）____ 的 <span style="color: Gold;">存储</span>
（五）____ 的<span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>  
（六）____、____和____的应用  

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">栈</span> <span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span> <span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span> <span style="color: LightGreen;">队列</span></li>
    <li>多维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span></li>
    <li>特殊<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span></li>
    <li><span style="color: Gold;">栈</span> ><span style="color: LightGreen;">队列</span> <span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span></li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;">【知识框架】

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8673aabdcf1c2823e8b532d26b74c2cd29ebb988bfb15dc7924c46a2a1ba5995.jpg)`

</ul>

##  <span style="color: silver;">【复习提示】

<ul>

本章通常以____题的形式考查，题目不算难，但命题的形式比较灵活，其中____（出入<span style="color: Gold;">栈</span>的过程、出<span style="color: Gold;">栈</span>序列的合法性）和____的操作及其特征是重点。

因为它们均是____的应用和推广，所以也容易出现在____设计题中。
<br>
此外，____和____的<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">存储</span>、<span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>及其特点、____的特点、____和____的常见应用，以及____和____的<span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>都是读者必须掌握的内容。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>选择</li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <br>
    <li>线性表</li>
    <li>算法</li>
    <br>
    <li><span style="color: Gold;">栈</span> <span style="color: LightGreen;">队列</span></li>
    <li>双端<span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span> <span style="color: LightGreen;">队列</span></li>
    <li><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span> 特殊<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

#  <span style="color: silver;"><span style="color: Gold;">栈</span>

<ul>


##   <span style="color: silver;">定义

<ul>

###  <span style="color: silver;"><span style="color: Gold;">栈</span>
- <span style="color: Gold;">栈</span>（Stack）是只允许在____进行插入或删除操作的____  
  - 首先<span style="color: Gold;">栈</span>是一种____  
  - 限定这种____只能在某一端进行插入和删除操作  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7106c13b6e1245e55ff693a1f8672ede610b5435b7a237926c8ead113245747c.jpg)`  
图3.1<span style="color: Gold;">栈</span>的示意图  

###  <span style="color: silver;">组成部分
- ____（Top）  
  - ____允许进行插入删除的那一端  
- ____（Bottom）  
  - 固定的，不允许进行插入和删除的另一端  
- ____  
  - 不含任何元素的空表  

>pro：____序列和____序列之间的关系（2022）  
>pro：特定条件下的____序列分析（2010、2011、2013、2018、2020）  

###  <span style="color: silver;">操作特性
- 假设某个<span style="color: Gold;">栈</span> $S=(a_{1},\,a_{2},\,a_{3},\,a_{4},\,a_{5})$  
  - $a_{1}$ 为____元素  
  - $a_{5}$ 为____元素  
- <span style="color: Gold;">栈</span>的操作规则  
  - 只能在____进行插入和删除操作  
  - 进<span style="color: Gold;">栈</span>次序：$a_{1},a_{2},a_{3},a_{4},a_{5}$  
  - 出<span style="color: Gold;">栈</span>次序：$a_{5},a_{4},a_{3},a_{2},a_{1}$  
- 特性：____（LastInFirstOut，LIFO）  

>attention: 每接触一种新的数据结构，都应从其____结构、____结构和____三个方面着手。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一端</li>
    <li>线性表</li>
    <li>线性表</li>
    <li>线性表</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li>线性表</li>
    <li><span style="color: Gold;">栈</span>底</li>
    <li>空<span style="color: Gold;">栈</span></li>
    <li>入<span style="color: Gold;">栈</span></li>
    <li>出<span style="color: Gold;">栈</span></li>
    <li>出<span style="color: Gold;">栈</span></li>
    <li><span style="color: Gold;">栈</span>底</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li>后进先出</li>
    <li>逻辑</li>
    <li><span style="color: Gold;">存储</span></li>
    <li>运算</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;">基本操作 ✓

<ul>

###  <span style="color: silver;">基本操作列表
- ____（&S）：初始化一个空<span style="color: Gold;">栈</span>S  
- ____（S）：判断<span style="color: Gold;">栈</span>是否为空  
<br>
- ____（&S，x）：进<span style="color: Gold;">栈</span>操作  
- ____（&S，&x）：出<span style="color: Gold;">栈</span>操作  
<br>
- ____（S，&x）：读<span style="color: Gold;">栈</span>顶元素  
- ____（&S）：销毁<span style="color: Gold;">栈</span>  

###  <span style="color: silver;"><span style="color: Gold;">栈</span>的数学性质
- 当n个不同元素进<span style="color: Gold;">栈</span>时，出<span style="color: Gold;">栈</span>元素不同排列的个数为____  
  - 这个公式称为____数（Catalan）公式  
  - 可采用____法证明  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>InitStack</li>
    <li>StackEmpty</li>
    <li>Push</li>
    <li>Pop</li>
    <li>GetTop</li>
    <li>DestroyStack</li>
    <br>
    <li>

$\frac{1}{n+1}C_{2n}^{n}$</li>
    <li>卡特兰</li>
    <li>数学归纳</li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">存储</span>结构

<ul>

###  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span>的concept
- 采用____<span style="color: Gold;">存储</span>的<span style="color: Gold;">栈</span>称为____  
  - 利用____<span style="color: Gold;">存储</span>单元存放数据元素  
  - 附设指针（____）指示<span style="color: Gold;">栈</span>顶位置  

###  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span>的实现
####  <span style="color: silver;">数据结构定义

```c
#define MaxSize 50 //定义<span style="color: Gold;">栈</span>中元素的最大个数
typedef struct{ 
    Elemtype data[MaxSize]; //存放<span style="color: Gold;">栈</span>中元素
    int top; //____ 
}SqStack;
```

####  <span style="color: silver;"><span style="color: Gold;">栈</span>的基本属性
- ____指针：S.top  
  - 初始时设置____  
- ____元素：S.data[S.top]  
- 基本操作  
  - 进<span style="color: Gold;">栈</span>：<span style="color: Gold;">栈</span>不满时，____，再送值  
  - 出<span style="color: Gold;">栈</span>：<span style="color: Gold;">栈</span>非空时，____，再指针减1  
- 状态判断  
  - <span style="color: Gold;">栈</span>空条件：____  
  - <span style="color: Gold;">栈</span>满条件：____  
  - <span style="color: Gold;">栈</span>长：____  

####  <span style="color: silver;">另一种实现方式
- 初始设置：____  
- 操作方式  
  - 进<span style="color: Gold;">栈</span>：____，指针再加1  
  - 出<span style="color: Gold;">栈</span>：____，再取值  
- 状态判断  
  - <span style="color: Gold;">栈</span>空条件：____  
  - <span style="color: Gold;">栈</span>满条件：____  

>attention: <span style="color: Gold;">栈</span>和<span style="color: LightGreen;">队列</span>的判空、判满条件，会因实际给的条件不同而变化，下面的代码实现是在<span style="color: Gold;">栈</span>顶指针初始化为____的条件下的相应方法，而其他情况则需具体问题具体分析。

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LightSkyBlue;">顺序</span></li>
    <li><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span></li>
    <li>连续</li>
    <li>top</li>
    <li><span style="color: Gold;">栈</span>顶指针</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li>S.top=-1</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li>指针先加1</li>
    <li>先取值</li>
    <li>S.top==-1</li>
    <li>S.top==MaxSize-1</li>
    <li>S.top+1</li>
    <li>S.top=0</li>
    <li>先送值</li>
    <li>指针先减1</li>
    <li>S.top==0</li>
    <li>S.top==MaxSize</li>
    <li>-1</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span>的基本操作

<ul>

###  <span style="color: silver;">>pro：出/入<span style="color: Gold;">栈</span>操作的模拟（2009）
- <span style="color: Gold;">栈</span>操作的示意图如图3.2所示  
  - 图3.2(a)是____  
  - 图3.2(c)是____共5个元素依次入<span style="color: Gold;">栈</span>后的结果  
  - 图3.2(d)是在图3.2(c)之后____的相继出<span style="color: Gold;">栈</span>  
    - 此时<span style="color: Gold;">栈</span>中还有____个元素  
    - 或许最近出<span style="color: Gold;">栈</span>的元素____仍在原先的单元<span style="color: Gold;">存储</span>着  
    - 但____指针已经指向了新的<span style="color: Gold;">栈</span>顶，元素____已不在<span style="color: Gold;">栈</span>中  
    - 读者应通过该示意图深刻理解____指针的作用  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/33624a050419102d021d22fcad1a1b9b9ce7d2f891ec502117a6376ac3ae2992.jpg)`  
图3.2<span style="color: Gold;">栈</span>顶指针和<span style="color: Gold;">栈</span>中元素之间的关系  

###  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span>基本操作实现
####  <span style="color: silver;">初始化

```c
void InitStack(SqStack &S){
    S.top = ____; //初始化<span style="color: Gold;">栈</span>顶指针
}
```

####  <span style="color: silver;">判<span style="color: Gold;">栈</span>空

```c
bool StackEmpty(SqStack S){
    if(S.top == ____) //<span style="color: Gold;">栈</span>____
        return true;
    else
        return false;
}
```

####  <span style="color: silver;">进<span style="color: Gold;">栈</span>

```c
bool Push(SqStack &S, ElemType x){
    if(S.top == ____) //<span style="color: Gold;">栈</span>满，报错 
        return false;
    S.data[____] = x; //____
    return true;
}
```

####  <span style="color: silver;">出<span style="color: Gold;">栈</span>

```c
bool Pop(SqStack &S, ElemType &x){
    if(S.top == ____) //<span style="color: Gold;">栈</span>空，报错 
        return false;
    x = S.data[____]; //____
    return true;
}
```

####  <span style="color: silver;">读<span style="color: Gold;">栈</span>顶元素

```c
bool GetTop(SqStack S, ElemType &x){
    if(S.top == ____) //<span style="color: Gold;">栈</span>空，报错 
        return false;
    x = S.data[____]; //x____
    return true;
}
```

>attention:  

这里的top指的是____。于是：  
- 进<span style="color: Gold;">栈</span>操作为____  
- 出<span style="color: Gold;">栈</span>操作为____  
- 若<span style="color: Gold;">栈</span>顶指针初始化为____：  
  - 即top指向____的下一位置  
  - 入<span style="color: Gold;">栈</span>操作变为____  
  - 出<span style="color: Gold;">栈</span>操作变为____  
  - 相应的<span style="color: Gold;">栈</span>空<span style="color: Gold;">栈</span>满条件也会发生变化  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>空<span style="color: Gold;">栈</span></li>
    <li>A、B、C、D、E</li>
    <li>E、D、C</li>
    <li>2</li>
    <li>C、D、E</li>
    <li>top</li>
    <li>C、D、E</li>
    <li><span style="color: Gold;">栈</span>顶</li>
    <li>-1</li>
    <li>-1</li>
    <li>空</li>
    <li>MaxSize-1</li>
    <li>++S.top</li>
    <li>指针先加1，再入<span style="color: Gold;">栈</span></li>
    <li>-1</li>
    <li>S.top--</li>
    <li>先出<span style="color: Gold;">栈</span>，指针再减1</li>
    <li>-1</li>
    <li>S.top</li>
    <li>记录<span style="color: Gold;">栈</span>顶元素</li>
    <li><span style="color: Gold;">栈</span>顶元素</li>
    <li>S.data[++S.top]=x</li>
    <li>x=S.data[S.top--]</li>
    <li>S.top=0</li>
    <li><span style="color: Gold;">栈</span>顶元素</li>
    <li>S.data[S.top++]=x</li>
    <li>x=S.data[--S.top]</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;">共享<span style="color: Gold;">栈</span>

<ul>

- 利用____位置相对不变的特性  
  - 可让两个____共享一个一维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>空间  
  - 将两个<span style="color: Gold;">栈</span>的<span style="color: Gold;">栈</span>底分别设置在____的两端  
  - 两个<span style="color: Gold;">栈</span>顶向____延伸  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1c0004fb22716e3b1a316c37cc6ce28b1dd46cc1c751801d6c9ab8fc25d3ee2e.jpg)`  
图3.3两个<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span>共享<span style="color: Gold;">存储</span>空间  

- 两个<span style="color: Gold;">栈</span>的____都指向<span style="color: Gold;">栈</span>顶元素  
  - ____时0号<span style="color: Gold;">栈</span>为空  
  - ____时1号<span style="color: Gold;">栈</span>为空  
  - 仅当____（____）时，判断为<span style="color: Gold;">栈</span>满  
  - 0号<span style="color: Gold;">栈</span>进<span style="color: Gold;">栈</span>时____  
  - 1号<span style="color: Gold;">栈</span>进<span style="color: Gold;">栈</span>时____  
  - 出<span style="color: Gold;">栈</span>时则刚好相反  

- 共享<span style="color: Gold;">栈</span>特点：  
  - 为了更有效地利用____  
  - 两个<span style="color: Gold;">栈</span>的____相互调节  
  - 只有在____被占满时才发生上溢  
  - 存取数据的时间复杂度均为____  
  - 对存取效率没有影响  

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">栈</span>底</li>
    <li><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span></li>
    <li>共享空间</li>
    <li>共享空间的中间</li>
    <li><span style="color: Gold;">栈</span>顶指针</li>
    <li>top0=-1</li>
    <li>top1=MaxSize-1</li>
    <li>两个<span style="color: Gold;">栈</span>顶指针相邻</li>
    <li>top1-top0=1</li>
    <li>top0先加1再赋值</li>
    <li>top1先减1再赋值</li>
    <li><span style="color: Gold;">存储</span>空间</li>
    <li>空间</li>
    <li>整个<span style="color: Gold;">存储</span>空间</li>
    <li>O(1)</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"><span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>结构

<ul>

- 采用____<span style="color: Gold;">存储</span>的<span style="color: Gold;">栈</span>称为____  
- 链<span style="color: Gold;">栈</span>优点：  
  - 便于多个<span style="color: Gold;">栈</span>____  
  - 提高____  
  - 不存在____的情况  
- 实现特点：  
  - 通常采用____实现  
  - 所有操作都在____进行  
  - 规定链<span style="color: Gold;">栈</span>____头结点  
  - ____指向<span style="color: Gold;">栈</span>顶元素  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f0d7b95eed53c3a5dd03b6056fd4e1c3c4e1ee1245d21383134cea5854d80bfd.jpg)`  
图3.4<span style="color: Gold;">栈</span>的<span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>  

<span style="color: Gold;">栈</span>的<span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>类型代码：

```c
typedef struct Linknode{
    ElemType data; //数据域
    struct Linknode *next; //____
}LiStack; //<span style="color: Gold;">栈</span>类型定义
```

- 链<span style="color: Gold;">栈</span>特点：  
  - 采用____<span style="color: Gold;">存储</span>，便于结点的____与____  
  - 链<span style="color: Gold;">栈</span>的操作与____类似  
  - 入<span style="color: Gold;">栈</span>和出<span style="color: Gold;">栈</span>的操作都在____进行  
  - 对于____和____的链<span style="color: Gold;">栈</span>，具体的实现会有所不同  

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: RoyalBlue;">链式</span></li>
    <li>链<span style="color: Gold;">栈</span></li>
    <li>共享<span style="color: Gold;">存储</span>空间</li>
    <li>效率</li>
    <li><span style="color: Gold;">栈</span>满上溢</li>
    <li>单链表</li>
    <li>单链表的表头</li>
    <li>没有</li>
    <li>Lhead</li>
    <li>指针域</li>
    <li><span style="color: RoyalBlue;">链式</span></li>
    <li>插入</li>
    <li>删除</li>
    <li>链表</li>
    <li>链表的表头</li>
    <li>带头结点</li>
    <li>不带头结点</li>
  </ul>
</details>
</div>

</ul>

</ul>

#  <span style="color: silver;"><span style="color: LightGreen;">队列</span>

<ul>

##  <span style="color: silver;">concept

<ul>

###  <span style="color: silver;">定义

<ul>

####  <span style="color: silver;">概述
- <span style="color: LightGreen;">队列</span>（Queue）简称队  
  - 是一种____的线性表  
  - 只允许在表的一端进行____  
  - 只允许在表的另一端进行____  

####  <span style="color: silver;">基本操作类型
- ____：向<span style="color: LightGreen;">队列</span>中插入元素  
- ____：删除<span style="color: LightGreen;">队列</span>中元素  
- 操作特性：____（FirstInFirstOut，FIFO）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/da7e4f84e84162acb3f9824684070eb0b9c7296ec89a63d06b1c5dec814dbf84.jpg)`  
图3.5<span style="color: LightGreen;">队列</span>示意图  

####  <span style="color: silver;">基本术语
- ____（Front）  
  - 允许____的一端  
  - 又称____  
- ____（Rear）  
  - 允许____的一端  
- ____  
  - 不含任何元素的空表  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作受限</li>
    <li>插入</li>
    <li>删除</li>
    <li>入队/进队</li>
    <li>出队/离队</li>
    <li>先进先出</li>
    <li>队头</li>
    <li>删除</li>
    <li>队首</li>
    <li>队尾</li>
    <li>插入</li>
    <li>空<span style="color: LightGreen;">队列</span></li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"><span style="color: LightGreen;">队列</span>常见的基本操作

<ul>

####  <span style="color: silver;">初始化操作
- ____（&Q）  
  - ____<span style="color: LightGreen;">队列</span>  
  - 构造一个____Q  

####  <span style="color: silver;">数据操作
- ____（&Q，x）  
  - ____操作  
  - 若<span style="color: LightGreen;">队列</span>Q未满，将x加入  
  - 使之成为新的____  
- ____（&Q，&x）  
  - ____操作  
  - 若<span style="color: LightGreen;">队列</span>Q非空，删除____元素  
  - 并用x返回  
- ____（Q，&x）  
  - 读____元素  
  - 若<span style="color: LightGreen;">队列</span>Q非空，则将____元素赋值给x  

####  <span style="color: silver;">操作限制说明
- <span style="color: Gold;">栈</span>和<span style="color: LightGreen;">队列</span>是____的线性表  
- 不是任何对线性表的操作都可以作为____和____的操作  
- 不可以随便读取____或____中间的某个数据  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>InitQueue</li>
    <li>初始化</li>
    <li>空<span style="color: LightGreen;">队列</span></li>
    <li>EnQueue</li>
    <li>入队</li>
    <li>队尾</li>
    <li>DeQueue</li>
    <li>出队</li>
    <li>队头</li>
    <li>GetHead</li>
    <li>队头</li>
    <li>队头</li>
    <li>操作受限</li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">存储</span>结构

<ul>

###  <span style="color: silver;"><span style="color: LightGreen;">队列</span>的<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">存储</span>

<ul>

####  <span style="color: silver;">concept
- <span style="color: LightGreen;">队列</span>的<span style="color: LightSkyBlue;">顺序</span>实现特点：  
  - 分配____<span style="color: Gold;">存储</span>单元存放<span style="color: LightGreen;">队列</span>元素  
  - 附设两个指针：  
    - ____指针____指向队头元素  
    - ____指针____指向队尾元素的下一个位置  

####  <span style="color: silver;"><span style="color: Gold;">存储</span>类型定义
- <span style="color: LightGreen;">队列</span>的<span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">存储</span>类型：

```c
#define MaxSize 50 //定义<span style="color: LightGreen;">队列</span>中元素的最大个数
typedef struct{
    ElemType data[MaxSize]; //用<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>存放<span style="color: LightGreen;">队列</span>元素
    int front, rear; //____指针和____指针
}SqQueue;
```

####  <span style="color: silver;">基本操作特点
- 初始状态：  
  - ____  
- 操作规则：  
  - 进队操作：  
    - 队不满时执行  
    - ____到队尾元素  
    - 再将____加1  
  - 出队操作：  
    - 队不空时执行  
    - ____队头元素值  
    - 再将____加1  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e760968acf7af6ebf1dbb79c2ec260ef38948b9bfa862117879af3c154b72de2.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连续</li>
    <li>队头</li>
    <li>front</li>
    <li>队尾</li>
    <li>rear</li>
    <li>队头</li>
    <li>队尾</li>
    <li>Q.front = Q.rear = 0</li>
    <li>先送值</li>
    <li>队尾指针</li>
    <li>先取</li>
    <li>队头指针</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">循环<span style="color: LightGreen;">队列</span>

<ul>

####  <span style="color: silver;">概念引入
- 解决<span style="color: LightSkyBlue;">顺序</span><span style="color: LightGreen;">队列</span>____问题  
- 将<span style="color: LightSkyBlue;">顺序</span><span style="color: LightGreen;">队列</span>视为____空间  
- ____到MaxSize-1后自动转到0  

>pro：特定条件下循环<span style="color: LightGreen;">队列</span>____的初值（2011）

####  <span style="color: silver;">基本规则
- 初始状态：____  
- 指针操作：  
  - 队首指针进1：____  
  - 队尾指针进1：____  
  - <span style="color: LightGreen;">队列</span>长度：____  

>pro：特定条件下循环<span style="color: LightGreen;">队列</span>____的判断条件（2014）

####  <span style="color: silver;">队空队满判断
- 判断方式：  
  - 方式一：牺牲一个单元  
    - 队满条件：____  
    - 队空条件：____  
    - 元素个数：____  
  - 方式二：增设____成员  
    - 队空：____  
    - 队满：____  
  - 方式三：增设____成员  
    - 删除成功置____  
    - 插入成功置____  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3b778995860d2f05b33eca711357acb81d2a1bb530366b1912ac965859336dc2.jpg)`

####  <span style="color: silver;">基本操作实现
- 初始化：

```c
void InitQueue(SqQueue &Q){
    Q.rear = Q.front = ____;
}
```

- 判队空：

```c
bool isEmpty(SqQueue Q){
    if(____)
        return true;
    else 
        return false;
}
```

- 入队：

```c
bool EnQueue(SqQueue &Q, ElemType x){
    if(____)
        return false;
    Q.data[____] = x;
    Q.rear = ____;
    return true;
}
```

- 出队：

```c
bool DeQueue(SqQueue &Q, ElemType &x){
    if(____)
        return false;
    x = Q.data[____];
    Q.front = ____;
    return true;
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>假溢出</li>
    <li>环状</li>
    <li>队首指针</li>
    <li>队头/队尾指针</li>
    <li>Q.front = Q.rear = 0</li>
    <li>Q.front = (Q.front+1)%MaxSize</li>
    <li>Q.rear = (Q.rear+1)%MaxSize</li>
    <li>(Q.rear+MaxSize-Q.front)%MaxSize</li>
    <li>队空/队满</li>
    <li>(Q.rear+1)%MaxSize == Q.front</li>
    <li>Q.front == Q.rear</li>
    <li>(Q.rear-Q.front+MaxSize)%MaxSize</li>
    <li>size</li>
    <li>Q.size == 0</li>
    <li>Q.size == MaxSize</li>
    <li>tag</li>
    <li>tag=0</li>
    <li>tag=1</li>
    <li>0</li>
    <li>Q.rear == Q.front</li>
    <li>(Q.rear+1)%MaxSize == Q.front</li>
    <li>Q.rear</li>
    <li>(Q.rear+1)%MaxSize</li>
    <li>Q.rear == Q.front</li>
    <li>Q.front</li>
    <li>(Q.front+1)%MaxSize</li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>结构

<ul>

###  <span style="color: silver;"><span style="color: LightGreen;">队列</span>的<span style="color: RoyalBlue;">链式</span><span style="color: Gold;">存储</span>

<ul>

>pro：根据需求分析<span style="color: LightGreen;">队列</span>适合的____结构（2019）

####  <span style="color: silver;">concept和结构
- <span style="color: LightGreen;">队列</span>的<span style="color: RoyalBlue;">链式</span>表示称为____  
- 特点：  
  - 同时有____指针和____指针的____  
  - ____指向队头结点  
  - ____指向队尾结点（单链表的最后一个结点）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c9b89a689e0863f3050513c3d2d3c2e7227d9979b1c2302cf4a18fa7ab5c711e.jpg)`

####  <span style="color: silver;"><span style="color: Gold;">存储</span>类型定义
- <span style="color: RoyalBlue;">链式</span><span style="color: LightGreen;">队列</span>结点定义：

```c
typedef struct LinkNode {
    ElemType data;
    struct LinkNode *next;
} LinkNode;
```

- <span style="color: RoyalBlue;">链式</span><span style="color: LightGreen;">队列</span>结构定义：

```c
typedef struct {
    LinkNode *front, *rear;
} LinkQueue;
```

####  <span style="color: silver;">不带头结点的特点
- 队空条件：____  
- 操作特点：  
  - 入队：  
    - ____新结点  
    - 插入____尾部  
    - 更新____指针  
    - 空队时同时更新____  
  - 出队：  
    - 判断队是否____  
    - 取出____元素  
    - 更新____指针  
    - 最后一个结点时置____和____为NULL  

>pro：<span style="color: RoyalBlue;">链式</span><span style="color: LightGreen;">队列</span>____的判断（2019）

####  <span style="color: silver;">带头结点的特点
- 优点：____和____操作更统一  
- 适用场景：  
  - 数据元素变动比较大  
  - 不存在____问题  
  - 适合____使用场景  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8af42305c84b1db057b731c2ac6cbaf08a48cded83345ce64d0e00865086d911.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">存储</span></li>
    <li>链<span style="color: LightGreen;">队列</span></li>
    <li>队头</li>
    <li>队尾</li>
    <li>单链表</li>
    <li>头指针</li>
    <li>尾指针</li>
    <li>Q.front == NULL且Q.rear == NULL</li>
    <li>建立</li>
    <li>链表</li>
    <li>Q.rear</li>
    <li>Q.front</li>
    <li>为空</li>
    <li>队头</li>
    <li>Q.front</li>
    <li>Q.front</li>
    <li>Q.rear</li>
    <li>队空</li>
    <li>插入</li>
    <li>删除</li>
    <li><span style="color: LightGreen;">队列</span>满溢出</li>
    <li>多<span style="color: LightGreen;">队列</span></li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"><span style="color: RoyalBlue;">链式</span><span style="color: LightGreen;">队列</span>的基本操作

<ul>

>pro：<span style="color: RoyalBlue;">链式</span><span style="color: LightGreen;">队列</span>____操作的基本过程（2019）

####  <span style="color: silver;">初始化操作

```c
void InitQueue(LinkQueue &Q){
    Q.front = Q.rear = (LinkNode*)malloc(sizeof(LinkNode));
    Q.front->next = ____;
}
```

####  <span style="color: silver;">判队空操作

```c
bool IsEmpty(LinkQueue Q){
    if(____)
        return true;
    else 
        return false;
}
```

####  <span style="color: silver;">入队操作

```c
void EnQueue(LinkQueue &Q, ElemType x){
    LinkNode *s = (LinkNode*)malloc(sizeof(LinkNode));
    s->data = x;
    s->next = ____;
    Q.rear->next = ____;
    Q.rear = ____;
}
```

####  <span style="color: silver;">出队操作

```c
bool DeQueue(LinkQueue &Q, ElemType &x){
    if(____) 
        return false;
    LinkNode *p = Q.front->next;
    x = p->data;
    Q.front->next = ____;
    if(____)
        Q.rear = Q.front;
    free(p);
    return true;
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>出队/入队</li>
    <li>NULL</li>
    <li>Q.front == Q.rear</li>
    <li>NULL</li>
    <li>s</li>
    <li>s</li>
    <li>Q.front == Q.rear</li>
    <li>p->next</li>
    <li>Q.rear == p</li>
  </ul>
</details>
</div>

</ul>

</ul>

###  <span style="color: silver;">双端<span style="color: LightGreen;">队列</span>

<ul>

####  <span style="color: silver;">concept
- 定义：允许____都可以进行插入和删除操作的____  
- 特点：  
  - 两端地位平等  
  - 左端为____，右端为____  
  - ____进元素排在____进元素前面  
  - 出队<span style="color: LightSkyBlue;">顺序</span>与____无关  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1da10f24ae28a725f51be7ee497b0b1c18a8ec812393d08ded54926f0d6b961f.jpg)`

####  <span style="color: silver;">受限双端<span style="color: LightGreen;">队列</span>类型

#####  <span style="color: silver;">输出受限的双端<span style="color: LightGreen;">队列</span>
- 特点：  
  - 一端可进行____和____  
  - 另一端只允许____  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/412059d5591f77b15fa5943928dd9fa3528f4d8a5e4e920475b56d30bb8b1afe.jpg)`

#####  <span style="color: silver;">输入受限的双端<span style="color: LightGreen;">队列</span>
- 特点：  
  - 一端可进行____和____  
  - 另一端只允许____  
- 特殊情况：限定某端点插入的元素只能从该端点删除时，变为____相邻接的<span style="color: Gold;">栈</span>  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3703f98b201c6aadf0e90edf86536b6cf4c40b5e9399b80353440957b098fef.jpg)`

>pro：双端<span style="color: LightGreen;">队列</span>____操作模拟（2010、2021）

####  <span style="color: silver;">双端<span style="color: LightGreen;">队列</span>序列示例
- 问题设定：  
  - 输入序列：____  
  - 求解不同条件下的____序列  

#####  <span style="color: silver;">输入受限双端<span style="color: LightGreen;">队列</span>分析
- 基本情况：  
  - end1端输入____  
  - end2端输出类似____  
  - end1端输出类似____  
- 输出序列分析：  
  - 仅通过end1端有____种输出序列  
  - 不能通过end1端有____种序列  
  - 通过混合输出可得到其中____种  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c2677c806971860f4767ece3963de2c1b99e0969a172510b50a0cc0ae913a36f.jpg)`

#####  <span style="color: silver;">输出受限双端<span style="color: LightGreen;">队列</span>分析
- 基本情况：  
  - ____端都能输入  
  - 仅____端可输出  
- 输出序列分析：  
  - 仅从end2端输入有____种输出序列  
  - 交替输入可得到额外____种序列  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7ee83752ae002490dec6ba352ef759b0311a3f65db52e714bddd5a7352cdca5a.jpg)`  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cfbdac15b091802d5970ceea862de0c0a58f0a2d29a4adb9cb4967e4c9bcc15c.jpg)`  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/224fbf5bfba12b3a501404b5a4aa8fe80f204a22b869d41a9a87709a7ab11172.jpg)`

####  <span style="color: silver;">结论总结
- 仅输入受限可得：____  
- 仅输出受限可得：____  
- 两种都不能得到：____  

注：实际考题通常只需判断序列是否满足题设条件，代入验证即可。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>两端</li>
    <li>线性表</li>
    <li>前端</li>
    <li>后端</li>
    <li>前端</li>
    <li>后端</li>
    <li>入队位置</li>
    <li>插入</li>
    <li>删除</li>
    <li>插入</li>
    <li>插入</li>
    <li>删除</li>
    <li>删除</li>
    <li>两个<span style="color: Gold;">栈</span>底</li>
    <li>出队/入队</li>
    <li>1,2,3,4</li>
    <li>输出</li>
    <li>1,2,3,4</li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li>14</li>
    <li>10</li>
    <li>8</li>
    <li>end1和end2</li>
    <li>end2</li>
    <li>14</li>
    <li>8</li>
    <li>4,1,3,2</li>
    <li>4,2,1,3</li>
    <li>4,2,3,1</li>
  </ul>
</details>
</div>

</ul>

</ul>

#  <span style="color: silver;"><span style="color: Gold;">栈</span>和<span style="color: LightGreen;">队列</span>的应用

<ul>

要熟练掌握____和____，必须学习____和____的应用，把握其中的规律，然后举一反三。接下来将简单介绍____和____的一些常见应用。

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"><span style="color: Gold;">栈</span>在括号匹配中的应用

<ul>

- 括号匹配问题：  
  - 允许包含____和____  
  - 嵌套<span style="color: LightSkyBlue;">顺序</span>任意，如____或____为正确格式  
  - ____或____或____为不正确格式  

- 括号序列分析示例：  
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0cd3915f55655148ee9e4f297d3c26daed9b7f1d084ad8250aa813568d341f5a.jpg)`

- 处理过程分析：  
  - 第1个括号____等待匹配____  
  - 第2个括号____暂存，等待匹配____  
  - 第3个括号____暂存，等待匹配____  
  - 处理过程符合____的特点  

- 算法思想：  
  - 初始化____  
  - <span style="color: LightSkyBlue;">顺序</span>读入括号  
    - ____：压入<span style="color: Gold;">栈</span>中  
    - ____：与<span style="color: Gold;">栈</span>顶匹配  
      - 匹配成功：____  
      - 匹配失败：____  
  - 结束时____则匹配成功  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>圆括号</li>
    <li>方括号</li>
    <li>([]())</li>
    <li>[([][])]</li>
    <li>[(])</li>
    <li>([())</li>
    <li>(()]</li>
    <li>[</li>
    <li>]</li>
    <li>(</li>
    <li>)</li>
    <li>[</li>
    <li>]</li>
    <li><span style="color: Gold;">栈</span></li>
    <li>空<span style="color: Gold;">栈</span></li>
    <li>左括号</li>
    <li>右括号</li>
    <li>出<span style="color: Gold;">栈</span></li>
    <li>序列不合法</li>
    <li><span style="color: Gold;">栈</span>为空</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"><span style="color: Gold;">栈</span>在表达式求值中的应用

<ul>

###  <span style="color: silver;">算术表达式

<ul>

- 表达式类型：  
  - ____表达式(如3+4)  
    - 人们常用  
    - 操作符在中间  
    - 需要____指示运算次序  
  - ____表达式(如+34)  
  - ____表达式(如34+)  
    - 无需____  
    - 运算符在操作数后  

- 表达式示例：  
  - 中缀表达式：____  
  - 对应后缀表达式：____  
  - 表达式树：  
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f8f4edba937b98723b163204e382184bedf71a343caf83f2f893e1ded9054c59.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中缀</li>
    <li>括号</li>
    <li>前缀</li>
    <li>后缀</li>
    <li>括号</li>
    <li>A+B*(C-D)-E/F</li>
    <li>ABCD-*+EF/-</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">中缀表达式转后缀表达式

<ul>

####  <span style="color: silver;">手算方法
- 步骤：  
  - 按____加括号  
  - 运算符移至____后  
  - 去除所有____  

- 示例过程：  
  - 原式：____  
  - 加括号：____  
  - 运算符后移  
  - 最终结果：____  

>pro：____转____的过程（2012、2014）

####  <span style="color: silver;">计算机实现方法
- 使用____保存运算符  
- 扫描规则：  
  - ____：直接输出  
  - 界限符：  
    - ____：入<span style="color: Gold;">栈</span>  
    - ____：弹出运算符直到____  
  - 运算符：  
    - 比<span style="color: Gold;">栈</span>顶优先级高：____  
    - 否则：____后入<span style="color: Gold;">栈</span>  

- 转换过程示例：  
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7d59a1e6b98dabe04671cea9f7370d964faf9cc2185c70ec263d36354a0bf00f.jpg)`

>pro：____的深度分析（2009、2012）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>运算<span style="color: LightSkyBlue;">顺序</span></li>
    <li>对应括号</li>
    <li>括号</li>
    <li>A+B*(C-D)-E/F</li>
    <li>((A+(B*(C-D)))-E/F)</li>
    <li>ABCD-*+EF/-</li>
    <li>中缀表达式</li>
    <li>后缀表达式</li>
    <li><span style="color: Gold;">栈</span></li>
    <li>操作数</li>
    <li>"("</li>
    <li>")"</li>
    <li>"("</li>
    <li>入<span style="color: Gold;">栈</span></li>
    <li>弹出高优先级运算符</li>
    <li><span style="color: Gold;">栈</span></li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">后缀表达式求值

<ul>

>pro：用____实现表达式求值的分析（2018）

- 求值过程：  
  - 从____扫描  
  - ____：入<span style="color: Gold;">栈</span>  
  - ____：  
    - 弹出____操作数  
    - 计算结果____  
  - 最终____为计算结果  

- 求值示例：  
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/009b49fea9da6b6600cee3e7f9f793fc89dbabc4280106bfa145e14317d4e668.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">栈</span></li>
    <li>左向右</li>
    <li>操作数</li>
    <li>运算符</li>
    <li>两个</li>
    <li>入<span style="color: Gold;">栈</span></li>
    <li><span style="color: Gold;">栈</span>顶</li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: Gold;">栈</span>在递归中的应用

<ul>

- 递归定义：  
  - 函数/过程/数据结构定义中应用____  
  - 将复杂问题转化为____的相似问题  

- 斐波那契数列示例：  
  - 数学定义：  

    ```
    F(n)={
      ____, n>1
      1,    n=1
      0,    n=0
    }
    ```

  - 程序实现：  

    ```c
    int F(int n) {
      if(n==0) return 0;
      else if(n==1) return 1;
      else return ____;
    }
    ```

- 递归要求：  
  - 必须有____表达式  
  - 必须有____条件  
  - 不能____定义  

- 递归执行过程：  
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b1765aa7b3b4d8bce1ae3fe8341015f640cd60fb984c62cec77f3cc6d17e1f8c.jpg)`

- 递归特点：  
  - 优点：  
    - 代码____  
    - 易于____  
  - 缺点：  
    - ____较低  
    - ____计算多  
    - 可能____溢出  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自身</li>
    <li>规模较小</li>
    <li>F(n-1)+F(n-2)</li>
    <li>F(n-1)+F(n-2)</li>
    <li>递归</li>
    <li>边界</li>
    <li>循环</li>
    <li>简单</li>
    <li>理解</li>
    <li>效率</li>
    <li>重复</li>
    <li><span style="color: Gold;">栈</span></li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"><span style="color: LightGreen;">队列</span>在层次遍历中的应用

<ul>

- 应用场景：  
  - 需要____或____处理的信息处理问题  
  - 处理当前层/行时对____做预处理  
  - 使用____保存下一步处理<span style="color: LightSkyBlue;">顺序</span>  

- 二叉树层次遍历示例：  
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2b923f9d4833a808612db9c30f2b85b5133d8a56cbfeb7966bdd34458b5317ce.jpg)`

  - 遍历过程展示：  
    表3.3层次遍历二叉树的过程  
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b8cb24cb677bef69da981cbb6d7b317e1b439554c47c344cfb7888cd321a0604.jpg)`  
    (续表)  
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0046326bdaef5b60248505d24f7bbb224e8462e86a9e27e83c0d92838d5788e3.jpg)`

  - 遍历步骤：  
    - $\textcircled{\scriptsize{1}}$ ____入队  
    - $\circledcirc$ 判断____是否为空  
      - 若队空：____  
      - 否则：继续执行步骤3  
    - $\textcircled{3}$ 处理当前节点  
      - ____出队并访问  
      - 若有____，____入队  
      - 若有____，____入队  
      - 返回步骤2  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>逐层</li>
    <li>逐行</li>
    <li>下一层/行</li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li>根结点</li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li>结束遍历</li>
    <li>队首节点</li>
    <li>左孩子</li>
    <li>左孩子</li>
    <li>右孩子</li>
    <li>右孩子</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"><span style="color: LightGreen;">队列</span>在计算机系统中的应用

<ul>

####  <span style="color: silver;">解决速度不匹配问题
>pro：____的逻辑结构（2009）

- 主机与打印机速度不匹配示例：  
  - 问题：主机输出速度远快于____  
  - 解决方案：  
    - 设置____缓冲区  
    - 主机写入数据到____  
    - ____满则主机暂停输出  
    - 打印机按____原则取出数据打印  
    - 打印完成后向____发出请求  
  - 优点：  
    - 保证打印数据____  
    - 提高____效率  

####  <span style="color: silver;">解决资源竞争问题
>pro：____出队/入队操作的应用（2016）

- CPU资源竞争示例：  
  - 场景：多终端系统中____需求CPU资源  
  - 处理方式：  
    - 按____将请求排成<span style="color: LightGreen;">队列</span>  
    - 分配CPU给____使用  
    - 程序结束或用完时间后____  
    - 继续分配CPU给____用户  
  - 优点：  
    - 满足所有____请求  
    - 确保____正常运行  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>缓冲区</li>
    <li>打印速度</li>
    <li>打印数据</li>
    <li>缓冲区</li>
    <li>缓冲区</li>
    <li>FIFO</li>
    <li>主机</li>
    <li>正确性</li>
    <li>主机</li>
    <li>多<span style="color: LightGreen;">队列</span></li>
    <li>多用户</li>
    <li>时间<span style="color: LightSkyBlue;">顺序</span></li>
    <li>队首用户</li>
    <li>出队</li>
    <li>新队首</li>
    <li>用户</li>
    <li>CPU</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#  <span style="color: silver;"><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>和特殊<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>

<ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>的定义

<ul>

- <span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>是由____个相同类型的数据元素构成的有限序列  
  - 每个数据元素称为一个____  
  - 每个元素在n个线性关系中的序号称为该元素的____  
  - 下标的取值范围称为<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>的____  

- <span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>与线性表的关系：  
  - <span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>是____的推广  
  - 一维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>可视为一个____  
  - 二维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>可视为其元素是____的线性表  
  - <span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>一旦被定义，其____和____就不再改变  
  - 操作仅限于：  
    - ____和____  
    - ____元素  
    - ____元素  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>n(n≥1)</li>
    <li><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>元素</li>
    <li>下标</li>
    <li>维界</li>
    <li>线性表</li>
    <li>线性表</li>
    <li>定长<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span></li>
    <li>维数</li>
    <li>维界</li>
    <li>初始化</li>
    <li>销毁</li>
    <li>存取</li>
    <li>修改</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>的<span style="color: Gold;">存储</span>结构

<ul>

- <span style="color: Gold;">存储</span>特点：  
  - 使用计算机语言中的____数据类型  
  - 所有元素在内存中占用____<span style="color: Gold;">存储</span>空间  

- 一维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span><span style="color: Gold;">存储</span>：  
  - <span style="color: Gold;">存储</span>结构关系式：  
    - ____ (0≤i<n)  
    - L是每个<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>元素所占的____  

- 多维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span><span style="color: Gold;">存储</span>：  
  - 两种映射方法：  
    - 按____优先  
    - 按____优先  
  - 二维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>按行优先<span style="color: Gold;">存储</span>：  
    - <span style="color: Gold;">存储</span>结构关系式：____  
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/431323970be87b0380983b68a2fdb2ce80b5cbf7a18caf848ab1a8260d81a826.jpg)`  
  - 按列优先<span style="color: Gold;">存储</span>：  
    - <span style="color: Gold;">存储</span>结构关系式：____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span></li>
    <li>连续</li>
    <li>LOC(ai)=LOC(a0)+i×L</li>
    <li><span style="color: Gold;">存储</span>单元</li>
    <li>行</li>
    <li>列</li>
    <li>LOC(ai,j)=LOC(a0,0)+[i×(h2+1)+j]×L</li>
    <li>LOC(ai,j)=LOC(a0,0)+[j×(h1+1)+i]×L</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;">特殊<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>的<span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>

<ul>

- concept：  
  - <span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>：____只分配一个<span style="color: Gold;">存储</span>空间，____不分配空间  
  - 特殊<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>：具有规律分布的____或____的<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>  

<ul>

###  <span style="color: silver;">对称<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>
>pro：对称<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span><span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>的____对应关系（2018、2020）

<ul>

- 定义：  
  - 满足____ (1≤i,j≤n)的n阶<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>  
- <span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>划分：  
  - ____区  
  - ____  
  - ____区  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e4256158c828de1e2cb6d0685d7ddee56c4f7c884ab10abb7d55e1bf9d481b93.jpg)`

- <span style="color: Gold;">存储</span>方式：  
  - 使用一维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>____<span style="color: Gold;">存储</span>  
  - 只<span style="color: Gold;">存储</span>____部分（含主对角）元素  
  - ____对应关系计算  

>attention:  
二维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>A[n][n]和A[0...n-1][0...n-1]的写法是等价的。若<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>写为A[1...n][1...n]则说明指定了从下标1开始<span style="color: Gold;">存储</span>元素。二维<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>元素写为a[i][j]，注意<span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span>元素下标i和j通常是从0开始的。<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>元素通常写为aij或a(i)(j)，注意行号i和列号j是从1开始的。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相同元素</li>
    <li>零元素</li>
    <li>相同<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>元素</li>
    <li>零元素</li>
    <li>下标</li>
    <li>aij=aji</li>
    <li>上三角</li>
    <li>主对角线</li>
    <li>下三角</li>
    <li>B[n(n+1)/2]</li>
    <li>下三角</li>
    <li>下标</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">三角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>
####  <span style="color: silver;">下三角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>

<ul>

- 特点：  
  - ____元素均为同一常量  
- <span style="color: Gold;">存储</span>方式：  
  - <span style="color: Gold;">存储</span>在____中  
  - 包含____、____元素和常量  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/25122d74975c8650cafab2687461cdad7ae6a123b006675775407fbf29de80b4.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>上三角区</li>
    <li>B[n(n+1)/2+1]</li>
    <li>下三角区</li>
    <li>主对角线</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: silver;">上三角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>
>pro：上三角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>采用____<span style="color: Gold;">存储</span>的应用（2011）

<ul>

- 特点：  
  - ____元素均为同一常量  
- <span style="color: Gold;">存储</span>方式：  
  - <span style="color: Gold;">存储</span>在____中  
  - 包含____、____元素和常量  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3ea00e4c5b645bf0ee30817d65282d10453885d9b14108abe3c7b909285b1689.jpg)`  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4670216ebcead756acc2d02dac75f00a5dd009e8b6bd46d16a48af92ccd17946.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>行优先</li>
    <li>下三角区</li>
    <li>B[n(n+1)/2+1]</li>
    <li>主对角线</li>
    <li>上三角区</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">三对角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>
>pro：三对角<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span><span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>的____对应关系（2016）

<ul>

- 定义：  
  - 当____时，aij=0的n阶<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>  
- 特点：  
  - 非零元素集中在____为中心的3条对角线区域  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/09f60287f1be3fd30a39118a9dfc6d7ae692305a94a6e48506db74f20a23429f.jpg)`  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21fa8fffa9f2183e60a1ad04942217b8362649967cba87a22370801c0e42845a.jpg)`

- <span style="color: Gold;">存储</span>方式：  
  - 按____方式<span style="color: Gold;">存储</span>3条对角线元素  
  - 下标对应关系：____  
  - 反向计算：  
    - ____  
    - ____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>下标</li>
    <li>|i-j|>1</li>
    <li>主对角线</li>
    <li>行优先</li>
    <li>k=2i+j-3</li>
    <li>i=⌊(k+1)/3+1⌋</li>
    <li>j=k-2i+3</li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;">稀疏<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>
>pro：<span style="color: Gold;">存储</span>稀疏<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>需要保存的____（2023）

<ul>

- 定义：  
  - 非零元素个数t远小于<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>元素总数s的____  

- <span style="color: Gold;">存储</span>特点：  
  - 仅<span style="color: Gold;">存储</span>____  
  - 需<span style="color: Gold;">存储</span>元素的____位置  
  - 使用____表示  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b0c42fe0d8732a593781e47414cea74094d463474100aa7492a58b47b74fc271.jpg)`

>pro：适合稀疏<span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span><span style="color: gray;">压缩</span><span style="color: Gold;">存储</span>的____结构（2017）

- <span style="color: Gold;">存储</span>结构：  
  - 可使用____<span style="color: Gold;">存储</span>  
  - 可使用____<span style="color: Gold;">存储</span>  
  - 需保存：  
    - ____表  
    - <span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>____  
    - <span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span>____  
    - ____个数  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>信息</li>
    <li><span style="color: RoyalBlue;">矩</span><span style="color: gray;">阵</span></li>
    <li>非零元素</li>
    <li>行列</li>
    <li>三元组(行标i，列标j，值aij)</li>
    <li><span style="color: Gold;">存储</span></li>
    <li><span style="color: LightSkyBlue;">数</span><span style="color: gray;">组</span></li>
    <li>十字链表</li>
    <li>三元组</li>
    <li>行数</li>
    <li>列数</li>
    <li>非零元素</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#  <span style="color: silver;">归纳总结

<ul>

本章所讲的几种数据结构类型是____的应用和推广，在考试中主要以____题形式进行考查，但____和____也仍然有可能出现在____设计题中。很多读者看到课本上有好多个函数时很恐惧，若考到了____或____的大题，难道要把每个操作的函数都写出来吗？

其实，在考试中，____或____都是作为一个工具来解决其他问题的，我们可以把____或____的声明和操作写得很简单，而不必分函数写出。以____的操作为例：

（1）声明一个<span style="color: Gold;">栈</span>并初始化：

```c
Elemtype stack[maxSize]; int top = ____; //两句话连声明带初始化都有了
```

（2）元素进<span style="color: Gold;">栈</span>：  
（3）元素x出<span style="color: Gold;">栈</span>

```c
x = stack[____]; //单目运算符在变量之前表示“先运算后使用”，之后则相反
```

对于____，同样只需定义一个结构体，然后从讲解中摘取必要的语句组合在自己的函数代码中即可。另外，在考研真题中，____出现的概率要比____低得多，因此大家应该有所侧重，多训练与____相关的题目。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>线性表</li>
    <li>选择</li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li>算法</li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightGreen;">队列</span></li>
    <li><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span></li>
    <li>-1</li>
    <li>top--</li>
    <li><span style="color: RoyalBlue;">链式</span><span style="color: Gold;">栈</span></li>
    <li><span style="color: RoyalBlue;">链式</span><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span></li>
    <li><span style="color: LightSkyBlue;">顺序</span><span style="color: Gold;">栈</span></li>
  </ul>
</details>
</div>

</ul>


