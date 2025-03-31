以下是按照您的要求处理后的 Markdown 内容，增加了 `<ul></ul>` 标签以实现标题段落间的缩进，并保持原有 Markdown 格式（如图片链接）不变：

---

# 栈、队列和数组above  

<ul>

## 【考纲内容】  

<ul>

（一）栈和队列的基本概念（二）栈和队列的顺序存储结构（三）栈和队列的链式存储结构（四）多维数组的存储（五）特殊矩阵的压缩存储（六）栈、队列和数组的应用  

</ul>

## 【知识框架】  

<ul>

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8673aabdcf1c2823e8b532d26b74c2cd29ebb988bfb15dc7924c46a2a1ba5995.jpg)  

</ul>

## 【复习提示】  

<ul>

本章通常以选择题的形式考查，题目不算难，但命题的形式比较灵活，其中栈（出入栈的过程、出栈序列的合法性）和队列的操作及其特征是重点。因为它们均是线性表的应用和推厂，所以也容易出现在算法设计题中。此外，栈和队列的顺序存储、链式存储及其特点、双端队列的特点、栈和队列的常见应用，以及数组和特殊矩阵的压缩存储都是读者必须掌握的内容。  

</ul>

</ul>

# 栈  

<ul>

## 基本概念  

<ul>

### 栈的定义

<ul>

#### 栈的基本概念
- 栈（Stack）是只允许在一端进行插入或删除操作的线性表
  - 首先栈是一种线性表
  - 限定这种线性表只能在某一端进行插入和删除操作
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7106c13b6e1245e55ff693a1f8672ede610b5435b7a237926c8ead113245747c.jpg)  
图3.1栈的示意图  

#### 栈的组成部分
- 栈顶（Top）
  - 线性表允许进行插入删除的那一端
- 栈底（Bottom）
  - 固定的，不允许进行插入和删除的另一端
- 空栈
  - 不含任何元素的空表

>pro：入栈序列和出栈序列之间的关系（2022）  

>pro：特定条件下的出栈序列分析（2010、2011、2013、2018、2020）  

#### 栈的操作特性
- 假设某个栈 $S=(a_{1},\,a_{2},\,a_{3},\,a_{4},\,a_{5})$
  - $a_{1}$ 为栈底元素
  - $a_{5}$ 为栈顶元素
- 栈的操作规则
  - 只能在栈顶进行插入和删除操作
  - 进栈次序：$a_{1},a_{2},a_{3},a_{4},a_{5}$
  - 出栈次序：$a_{5},a_{4},a_{3},a_{2},a_{1}$
- 特性：后进先出（LastInFirstOut，LIFO）

>attention: 每接触一种新的数据结构，都应从其逻辑结构、存储结构和运算三个方面着手。  

</ul>

### 栈的基本操作

<ul>

#### 基本操作列表
- InitStack（&S）：初始化一个空栈S
- StackEmpty（S）：判断栈是否为空
- Push（&S，x）：进栈操作
- Pop（&S，&x）：出栈操作
- GetTop（S，&x）：读栈顶元素
- DestroyStack（&S）：销毁栈

#### 栈的数学性质
- 当n个不同元素进栈时，出栈元素不同排列的个数为$\frac{1}{n+1}C_{2n}^{n}$
  - 这个公式称为卡特兰数（Catalan）公式
  - 可采用数学归纳法证明

</ul>

</ul>

### 顺序存储结构

<ul>

#### 顺序栈的基本概念
- 采用顺序存储的栈称为顺序栈
  - 利用连续存储单元存放数据元素
  - 附设指针（top）指示栈顶位置

#### 顺序栈的实现
##### 数据结构定义

#define MaxSize 50//定义栈中元素的最大个数
typedef struct{ 
    Elemtype data[MaxSize]`;//存放栈中元素
    int top; //栈顶指针 
}SqStack;


##### 栈的基本属性
- 栈顶指针：s.top
  - 初始时设置s.top=-1
- 栈顶元素：S.data[S.top]`
- 基本操作
  - 进栈：栈不满时，指针先加1，再送值
  - 出栈：栈非空时，先取值，再指针减1
- 状态判断
  - 栈空条件：S.top==-1
  - 栈满条件：S.top==MaxSize-1
  - 栈长：S.top+1

##### 另一种实现方式
- 初始设置：S.top=0
- 操作方式
  - 进栈：先送值，指针再加1
  - 出栈：指针先减1，再取值
- 状态判断
  - 栈空条件：S.top==0
  - 栈满条件：S.top==MaxSize

>attention: 栈和队列的判空、判满条件，会因实际给的条件不同而变化，下面的代码实现是在栈顶指针初始化为-1的条件下的相应方法，而其他情况则需具体问题具体分析。

</ul>

### 顺序栈的基本操作

<ul>

#### >pro：出/入栈操作的模拟（2009）

- 栈操作的示意图如图3.2所示
  - 图3.2(a)是空栈
  - 图3.2(c)是A、B、C、D、E共5个元素依次入栈后的结果
  - 图3.2(d)是在图3.2(c)之后E、D、C的相继出栈
    - 此时栈中还有2个元素
    - 或许最近出栈的元素C、D、E仍在原先的单元存储着
    - 但top指针已经指向了新的栈顶，元素C、D、E已不在栈中
    - 读者应通过该示意图深刻理解栈顶指针的作用

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/33624a050419102d021d22fcad1a1b9b9ce7d2f891ec502117a6376ac3ae2992.jpg)  
图3.2栈顶指针和栈中元素之间的关系

#### 顺序栈基本操作实现
##### 初始化

void InitStack（SqStack &S){
    s.top  $\scriptstyle{\varepsilon=-1}$  /初始化栈顶指针


##### 判栈空

bool StackEmpty(SqStack S){
    if(s.top  $==-1$  一 //栈 
        returntrue;
    else
        return false;


##### 进栈

bool Push(SqStack &S,ElemType x){
    if(s.top  $==$  MaxSize-1) /栈满，报错 
        return false;
    S.data[  $++\mathbb{S}$  .top]`  $=\!\mathrm{x}$  /指针先加1，再入栈 
    returntrue;


##### 出栈

bool Pop（SqStack &S,ElemType &x){
    if(s.top  $==1$  /栈空，报错 
        return false;
    $\scriptstyle{\mathrm{x}}={\mathrm{s}}$  .data[s.top--]`; /先出栈，指针再减1 
    returntrue;


##### 读栈顶元素

bool GetTop（SqStack S,ElemType &x){
    if(s.top  $==-1$  一 /栈空，报错 
        return false;
    $\scriptstyle{\mathrm{x}=\mathrm{S}}$ .data[s.top]`; $/\mathrm{x}$ 记录栈顶元素
    return true;


> attention:  

这里的top指的是栈顶元素。于是：
- 进栈操作为S.data $_{[++S.\thinspace t o p]`=x}$
- 出栈操作为 $\scriptstyle{\mathrm{x}=\mathrm{S}}$ .data[s.top--]`
- 若栈顶指针初始化为s.top $\scriptstyle{\boldsymbol{\mathbf{\varepsilon}}}=0$：
  - 即top指向栈顶元素的下一位置
  - 入栈操作变为S.data $\scriptstyle[S,\,\mathsf{t o p}^{++}\,]`\,=\,\mathrm{x}$
  - 出栈操作变为 $\scriptstyle{\mathrm{x}=\mathrm{S}}$ .data[--S.top]`
  - 相应的栈空栈满条件也会发生变化

</ul>

### 共享栈

<ul>

- 利用栈底位置相对不变的特性
  - 可让两个顺序栈共享一个一维数组空间
  - 将两个栈的栈底分别设置在共享空间的两端
  - 两个栈顶向共享空间的中间延伸

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1c0004fb22716e3b1a316c37cc6ce28b1dd46cc1c751801d6c9ab8fc25d3ee2e.jpg)  
图3.3两个顺序栈共享存储空间

- 两个栈的栈顶指针都指向栈顶元素
  - top $_{0=-1}$ 时0号栈为空
  - top1 $=$ Max Size 1空
  - 仅当两个栈顶指针相邻（top1-top $_{;0=1}$ ）时，判断为栈满
  - 0号栈进栈时top0先加1再赋值
  - 1号栈进栈时top1先减1再赋值
  - 出栈时则刚好相反

- 共享栈特点：
  - 为了更有效地利用存储空间
  - 两个栈的空间相互调节
  - 只有在整个存储空间被占满时才发生上溢
  - 存取数据的时间复杂度均为 $O(1)$
  - 对存取效率没有影响

</ul>

### 链式存储结构

<ul>

- 采用链式存储的栈称为链栈
- 链栈优点：
  - 便于多个栈共享存储空间
  - 提高效率
  - 不存在栈满上溢的情况
- 实现特点：
  - 通常采用单链表实现
  - 所有操作都在单链表的表头进行
  - 规定链栈没有头结点
  - Lhead指向栈顶元素

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f0d7b95eed53c3a5dd03b6056fd4e1c3c4e1ee1245d21383134cea5854d80bfd.jpg)  
图3.4栈的链式存储

栈的链式存储类型代码：

typedef struct Linknode{
    ElemType data;//数据域
    struct Linknode \*next;/指针域
)LiStack; /栈类型定义


- 链栈特点：
  - 采用链式存储，便于结点的插入与删除
  - 链栈的操作与链表类似
  - 入栈和出栈的操作都在链表的表头进行
  - 对于带头结点和不带头结点的链栈，具体的实现会有所不同

</ul>

</ul>

#  队列  

<ul>

## 基本概念  

<ul>

### 队列的定义  

<ul>

#### 概述
* 队列（Queue）简称队
  * 是一种操作受限的线性表
  * 只允许在表的一端进行插入
  * 只允许在表的另一端进行删除

#### 基本操作类型
* 入队/进队：向队列中插入元素
* 出队/离队：删除队列中元素
* 操作特性：先进先出（FirstInFirstOut，FIFO）

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/da7e4f84e84162acb3f9824684070eb0b9c7296ec89a63d06b1c5dec814dbf84.jpg)  
图3.5队列示意图  

#### 基本术语
* 队头（Front）
  * 允许删除的一端
  * 又称队首
* 队尾（Rear）
  * 允许插入的一端
* 空队列
  * 不含任何元素的空表

</ul>

### 队列常见的基本操作  

<ul>

#### 初始化操作
* InitQueue（&Q）
  * 初始化队列
  * 构造一个空队列Q

#### 数据操作
* EnQueue（&Q，x）
  * 入队操作
  * 若队列Q未满，将x加入
  * 使之成为新的队尾
* DeQueue（&Q，&x）
  * 出队操作
  * 若队列Q非空，删除队头元素
  * 并用x返回
* GetHead（Q，&x）
  * 读队头元素
  * 若队列Q非空，则将队头元素赋值给x

#### 操作限制说明
* 栈和队列是操作受限的线性表
* 不是任何对线性表的操作都可以作为栈和队列的操作
* 不可以随便读取栈或队列中间的某个数据

</ul>

</ul>

## 顺序存储结构  

<ul>

### 队列的顺序存储  

<ul>

#### 基本概念
* 队列的顺序实现特点：
  * 分配连续存储单元存放队列元素
  * 附设两个指针：
    * 队头指针front指向队头元素
    * 队尾指针rear指向队尾元素的下一个位置

#### 存储类型定义
* 队列的顺序存储类型：

#define MaxSize 50 //定义队列中元素的最大个数
typedef struct{
    ElemType data[MaxSize]`; //用数组存放队列元素
    int front,rear; //队头指针和队尾指针
}SqQueue;


#### 基本操作特点
* 初始状态：
  * Q.front = Q.rear = 0
* 操作规则：
  * 进队操作：
    * 队不满时执行
    * 先送值到队尾元素
    * 再将队尾指针加1
  * 出队操作：
    * 队不空时执行
    * 先取队头元素值
    * 再将队头指针加1

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e760968acf7af6ebf1dbb79c2ec260ef38948b9bfa862117879af3c154b72de2.jpg)  

</ul>

### 循环队列  

<ul>

#### 概念引入
* 解决顺序队列"假溢出"问题
* 将顺序队列视为环状空间
* 队首指针到MaxSize-1后自动转到0

> pro：特定条件下循环队列队头/队尾指针的初值（2011）  

#### 基本规则
* 初始状态：Q.front = Q.rear = 0
* 指针操作：
  * 队首指针进1：Q.front = (Q.front+1)%MaxSize
  * 队尾指针进1：Q.rear = (Q.rear+1)%MaxSize
  * 队列长度：(Q.rear+MaxSize-Q.front)%MaxSize

> pro：特定条件下循环队列队空/队满的判断条件（2014）  

#### 队空队满判断
* 判断方式：
  * 方式一：牺牲一个单元
    * 队满条件：(Q.rear+1)%MaxSize == Q.front
    * 队空条件：Q.front == Q.rear
    * 元素个数：(Q.rear-Q.front+MaxSize)%MaxSize
  * 方式二：增设size成员
    * 队空：Q.size == 0
    * 队满：Q.size == MaxSize
  * 方式三：增设tag成员
    * 删除成功置tag=0
    * 插入成功置tag=1

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3b778995860d2f05b33eca711357acb81d2a1bb530366b1912ac965859336dc2.jpg)  

#### 基本操作实现
* 初始化：

void InitQueue(SqQueue &Q){
    Q.rear = Q.front = 0;
}

* 判队空：

bool isEmpty(SqQueue Q){
    if(Q.rear == Q.front)
        return true;
    else 
        return false;
}

* 入队：

bool EnQueue(SqQueue &Q, ElemType x){
    if((Q.rear+1)%MaxSize == Q.front)
        return false;
    Q.data[Q.rear]` = x;
    Q.rear = (Q.rear+1)%MaxSize;
    return true;
}

* 出队：

bool DeQueue(SqQueue &Q, ElemType &x){
    if(Q.rear == Q.front)
        return false;
    x = Q.data[Q.front]`;
    Q.front = (Q.front+1)%MaxSize;
    return true;
}

</ul>

</ul>

## 的链式存储结构  

<ul>

### 队列的链式存储  

<ul>

>pro： 根据需求分析队列适合的存储结构（2019）  

#### 基本概念和结构
* 队列的链式表示称为链队列
* 特点：
  * 同时有队头指针和队尾指针的单链表
  * 头指针指向队头结点
  * 尾指针指向队尾结点（单链表的最后一个结点）

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c9b89a689e0863f3050513c3d2d3c2e7227d9979b1c2302cf4a18fa7ab5c711e.jpg)  

#### 存储类型定义
* 链式队列结点定义：

typedef struct LinkNode
  ElemType data;
  struct LinkNode *next;
}LinkNode;

* 链式队列结构定义：

typedef struct{
  LinkNode *front,*rear;
}LinkQueue;


#### 不带头结点的特点
* 队空条件：Q.front == NULL且Q.rear == NULL
* 操作特点：
  * 入队：
    * 建立新结点
    * 插入链表尾部
    * 更新Q.rear指针
    * 空队时同时更新Q.front
  * 出队：
    * 判断队是否为空
    * 取出队头元素
    * 更新Q.front指针
    * 最后一个结点时置Q.front和Q.rear为NULL

>pro：链式队列队空的判断（2019）  

#### 带头结点的特点
* 优点：插入和删除操作更统一
* 适用场景：
  * 数据元素变动比较大
  * 不存在队列满溢出问题
  * 适合多队列使用场景

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8af42305c84b1db057b731c2ac6cbaf08a48cded83345ce64d0e00865086d911.jpg)  

</ul>

### 链式队列的基本操作  

<ul>

>pro：链式队列出队/入队操作的基本过程（2019）  

#### 初始化操作

void InitQueue(LinkQueue &Q){
  Q.front=Q.rear=(LinkNode*)malloc(sizeof(LinkNode));
  Q.front->next=NULL;
}


#### 判队空操作

bool IsEmpty(LinkQueue Q){
  if(Q.front==Q.rear)
    return true;
  else 
    return false;
}


#### 入队操作

void EnQueue(LinkQueue &Q,ElemType x){
  LinkNode *s=(LinkNode*)malloc(sizeof(LinkNode));
  s->data=x;
  s->next=NULL;
  Q.rear->next=s;
  Q.rear=s;
}


#### 出队操作

bool DeQueue(LinkQueue &Q,ElemType &x){
  if(Q.front==Q.rear) 
    return false;
  LinkNode *p=Q.front->next;
  x=p->data;
  Q.front->next=p->next;
  if(Q.rear==p)
    Q.rear=Q.front;
  free(p);
  return true;
}

</ul>

</ul>

### 双端队列  

<ul>

#### 基本概念
* 定义：允许两端都可以进行插入和删除操作的线性表
* 特点：
  * 两端地位平等
  * 左端为前端，右端为后端
  * 前端进元素排在后端进元素前面
  * 出队顺序与入队位置无关

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1da10f24ae28a725f51be7ee497b0b1c18a8ec812393d08ded54926f0d6b961f.jpg)  

#### 受限双端队列类型

##### 输出受限的双端队列
* 特点：
  * 一端可进行插入和删除
  * 另一端只允许插入

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/412059d5591f77b15fa5943928dd9fa3528f4d8a5e4e920475b56d30bb8b1afe.jpg)  

##### 输入受限的双端队列
* 特点：
  * 一端可进行插入和删除
  * 另一端只允许删除
* 特殊情况：限定某端点插入的元素只能从该端点删除时，变为两个栈底相邻接的栈

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3703f98b201c6aadf0e90edf86536b6cf4c40b5e9399b80353440957b098fef.jpg)  

>pro：双端队列出队/入队操作模拟（2010、2021）  

#### 双端队列序列示例
* 问题设定：
  * 输入序列：1,2,3,4
  * 求解不同条件下的输出序列

##### 输入受限双端队列分析
* 基本情况：
  * end1端输入1,2,3,4
  * end2端输出类似队列
  * end1端输出类似栈
* 输出序列分析：
  * 仅通过end1端有14种输出序列
  * 不能通过end1端有10种序列
  * 通过混合输出可得到其中8种

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c2677c806971860f4767ece3963de2c1b99e0969a172510b50a0cc0ae913a36f.jpg)  

##### 输出受限双端队列分析
* 基本情况：
  * end1和end2端都能输入
  * 仅end2端可输出
* 输出序列分析：
  * 仅从end2端输入有14种输出序列
  * 交替输入可得到额外8种序列

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7ee83752ae002490dec6ba352ef759b0311a3f65db52e714bddd5a7352cdca5a.jpg)  
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cfbdac15b091802d5970ceea862de0c0a58f0a2d29a4adb9cb4967e4c9bcc15c.jpg)  
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/224fbf5bfba12b3a501404b5a4aa8fe80f204a22b869d41a9a87709a7ab11172.jpg)  

#### 结论总结
* 仅输入受限可得：4,1,3,2
* 仅输出受限可得：4,2,1,3
* 两种都不能得到：4,2,3,1

注：实际考题通常只需判断序列是否满足题设条件，代入验证即可。

</ul>

</ul>

# 栈和队列的应用  

<ul>

要熟练掌握栈和队列，必须学习栈和队列的应用，把握其中的规律，然后举一反三。接下来将简单介绍栈和队列的一些常见应用。  

## 栈在括号匹配中的应用  

<ul>

* 括号匹配问题：
  * 允许包含圆括号和方括号
  * 嵌套顺序任意，如（[]`（））或[（[]`[]`）]`为正确格式
  * 【（]`）或（[（））或（（）]`为不正确格式

* 括号序列分析示例：
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0cd3915f55655148ee9e4f297d3c26daed9b7f1d084ad8250aa813568d341f5a.jpg)  

* 处理过程分析：
  * 第1个括号"["等待匹配"]`"
  * 第2个括号"("暂存，等待匹配")"
  * 第3个括号"["暂存，等待匹配"]`"
  * 处理过程符合栈的特点

* 算法思想：
  * 初始化空栈
  * 顺序读入括号
    * 左括号：压入栈中
    * 右括号：与栈顶匹配
      * 匹配成功：出栈
      * 匹配失败：序列不合法
  * 结束时栈为空则匹配成功

</ul>

## 栈在表达式求值中的应用  

<ul>

### 算术表达式  

<ul>

* 表达式类型：
  * 中缀表达式(如3+4)
    * 人们常用
    * 操作符在中间
    * 需要括号指示运算次序
  * 前缀表达式(如+34)
  * 后缀表达式(如34+)
    * 无需括号
    * 运算符在操作数后

* 表达式示例：
  * 中缀表达式：A+B*(C-D)-E/F 
  * 对应后缀表达式：ABCD-*+EF/-
  * 表达式树：
    ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f8f4edba937b98723b163204e382184bedf71a343caf83f2f893e1ded9054c59.jpg)  

</ul>

### 中缀表达式转后缀表达式  

<ul>

#### 手算方法
* 步骤：
  * 按运算顺序加括号
  * 运算符移至对应括号后
  * 去除所有括号

* 示例过程：
  * 原式：A+B*(C-D)-E/F
  * 加括号：((A+(B*(C-D)))-E/F)
  * 运算符后移
  * 最终结果：ABCD-*+EF/-

> pro：中缀表达式转后缀表达式的过程（2012、2014）  

#### 计算机实现方法
* 使用栈保存运算符
* 扫描规则：
  * 操作数：直接输出
  * 界限符：
    * "("：入栈
    * ")"：弹出运算符直到"("
  * 运算符：
    * 比栈顶优先级高：入栈
    * 否则：弹出高优先级运算符后入栈

* 转换过程示例：
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7d59a1e6b98dabe04671cea9f7370d964faf9cc2185c70ec263d36354a0bf00f.jpg)  

> pro：栈的深度分析（2009、2012）  

</ul>

### 后缀表达式求值  

<ul>

> pro：用栈实现表达式求值的分析（2018）  

* 求值过程：
  * 从左向右扫描
  * 操作数：入栈
  * 运算符：
    * 弹出两个操作数
    * 计算结果入栈
  * 最终栈顶为计算结果

* 求值示例：
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/009b49fea9da6b6600cee3e7f9f793fc89dbabc4280106bfa145e14317d4e668.jpg)  

</ul>

</ul>

## 栈在递归中的应用  

<ul>

* 递归定义：
  * 函数/过程/数据结构定义中应用自身
  * 将复杂问题转化为规模较小的相似问题

* 斐波那契数列示例：
  * 数学定义：
    
    F(n)={
      F(n-1)+F(n-2), n>1
      1,             n=1
      0,             n=0
    }
    
  * 程序实现：
    
    int F(int n) {
      if(n==0) return 0;
      else if(n==1) return 1;
      else return F(n-1)+F(n-2);
    }
    

* 递归要求：
  * 必须有递归表达式
  * 必须有边界条件
  * 不能循环定义

* 递归执行过程：
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b1765aa7b3b4d8bce1ae3fe8341015f640cd60fb984c62cec77f3cc6d17e1f8c.jpg)  

* 递归特点：
  * 优点：
    * 代码简单
    * 易于理解
  * 缺点：
    * 效率较低
    * 重复计算多
    * 可能栈溢出

</ul>

### 队列在层次遍历中的应用  

<ul>

* 应用场景：
  * 需要逐层或逐行处理的信息处理问题
  * 处理当前层/行时对下一层/行做预处理
  * 使用队列保存下一步处理顺序

* 二叉树层次遍历示例：
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2b923f9d4833a808612db9c30f2b85b5133d8a56cbfeb7966bdd34458b5317ce.jpg)  

  * 遍历过程展示：
    表3.3层次遍历二叉树的过程
    ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b8cb24cb677bef69da981cbb6d7b317e1b439554c47c344cfb7888cd321a0604.jpg)  
    (续表) 
    ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0046326bdaef5b60248505d24f7bbb224e8462e86a9e27e83c0d92838d5788e3.jpg)  

  * 遍历步骤：
    * $\textcircled{\scriptsize{1}}$ 根结点入队
    * $\circledcirc$ 判断队列是否为空
      * 若队空：结束遍历
      * 否则：继续执行步骤3
    * $\textcircled{3}$ 处理当前节点
      * 队首节点出队并访问
      * 若有左孩子，左孩子入队
      * 若有右孩子，右孩子入队
      * 返回步骤2

</ul>

### 队列在计算机系统中的应用  

<ul>

#### 解决速度不匹配问题
> pro：缓冲区的逻辑结构（2009）  

* 主机与打印机速度不匹配示例：
  * 问题：主机输出速度远快于打印速度
  * 解决方案：
    * 设置打印数据缓冲区
    * 主机写入数据到缓冲区
    * 缓冲区满则主机暂停输出
    * 打印机按FIFO原则取出数据打印
    * 打印完成后向主机发出请求
  * 优点：
    * 保证打印数据正确性
    * 提高主机效率

#### 解决资源竞争问题
> pro：多队列出队/入队操作的应用（2016）  

* CPU资源竞争示例：
  * 场景：多终端系统中多用户需求CPU资源
  * 处理方式：
    * 按时间顺序将请求排成队列
    * 分配CPU给队首用户使用
    * 程序结束或用完时间后出队
    * 继续分配CPU给新队首用户
  * 优点：
    * 满足所有用户请求
    * 确保CPU正常运行

</ul>

</ul>

# 数组和特殊矩阵  

<ul>

## 数组的定义  

<ul>

* 数组是由n(n≥1)个相同类型的数据元素构成的有限序列
  * 每个数据元素称为一个数组元素
  * 每个元素在n个线性关系中的序号称为该元素的下标
  * 下标的取值范围称为数组的维界

* 数组与线性表的关系：
  * 数组是线性表的推广
  * 一维数组可视为一个线性表
  * 二维数组可视为其元素是定长数组的线性表
  * 数组一旦被定义，其维数和维界就不再改变
  * 操作仅限于：
    * 初始化和销毁
    * 存取元素
    * 修改元素

</ul>

## 数组的存储结构

<ul>

* 存储特点：
  * 使用计算机语言中的数组数据类型
  * 所有元素在内存中占用连续存储空间

* 一维数组存储：
  * 存储结构关系式：
    * LOC(ai)=LOC(a0)+i×L (0≤i<n)
    * L是每个数组元素所占的存储单元

* 多维数组存储：
  * 两种映射方法：
    * 按行优先
    * 按列优先
  * 二维数组按行优先存储：
    * 存储结构关系式：LOC(ai,j)=LOC(a0,0)+[i×(h2+1)+j]`×L
    ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/431323970be87b0380983b68a2fdb2ce80b5cbf7a18caf848ab1a8260d81a826.jpg)  
  * 按列优先存储：
    * 存储结构关系式：LOC(ai,j)=LOC(a0,0)+[j×(h1+1)+i]`×L

</ul>

## 特殊矩阵的压缩存储

<ul>

* 基本概念：
  * 压缩存储：相同元素只分配一个存储空间，零元素不分配空间
  * 特殊矩阵：具有规律分布的相同矩阵元素或零元素的矩阵

### 对称矩阵
> pro：对称矩阵压缩存储的下标对应关系（2018、2020）  

<ul>

* 定义：
  * 满足aij=aji (1≤i,j≤n)的n阶矩阵
* 矩阵划分：
  * 上三角区
  * 主对角线
  * 下三角区
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e4256158c828de1e2cb6d0685d7ddee56c4f7c884ab10abb7d55e1bf9d481b93.jpg)  

* 存储方式：
  * 使用一维数组B[n(n+1)/2]`存储
  * 只存储下三角部分（含主对角）元素
  * 下标对应关系计算

> attention:  
二维数组A[n]`[n]`和A[0...n-1]`[0...n-1]`的写法是等价的。若数组写为A[1...n]`[1...n]`则说明指定了从下标1开始存储元素。二维数组元素写为a[i]`[j]`，注意数组元素下标i和j通常是从0开始的。矩阵元素通常写为aij或a(i)(j)，注意行号i和列号j是从1开始的。

</ul>

### 三角矩阵
#### 下三角矩阵

<ul>

* 特点：
  * 上三角区元素均为同一常量
* 存储方式：
  * 存储在B[n(n+1)/2+1]`中
  * 包含下三角区、主对角线元素和常量
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/25122d74975c8650cafab2687461cdad7ae6a123b006675775407fbf29de80b4.jpg)  

</ul>

#### 上三角矩阵
> pro：上三角矩阵采用行优先存储的应用（2011）  

<ul>

* 特点：
  * 下三角区元素均为同一常量
* 存储方式：
  * 存储在B[n(n+1)/2+1]`中
  * 包含主对角线、上三角区元素和常量
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3ea00e4c5b645bf0ee30817d65282d10453885d9b14108abe3c7b909285b1689.jpg)  
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4670216ebcead756acc2d02dac75f00a5dd009e8b6bd46d16a48af92ccd17946.jpg)  

</ul>

### 三对角矩阵
> pro：三对角矩阵压缩存储的下标对应关系（2016）  

<ul>

* 定义：
  * 当|i-j|>1时，aij=0的n阶矩阵
* 特点：
  * 非零元素集中在主对角线为中心的3条对角线区域
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/09f60287f1be3fd30a39118a9dfc6d7ae692305a94a6e48506db74f20a23429f.jpg)  
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21fa8fffa9f2183e60a1ad04942217b8362649967cba87a22370801c0e42845a.jpg)  

* 存储方式：
  * 按行优先方式存储3条对角线元素
  * 下标对应关系：k=2i+j-3
  * 反向计算：
    * i=⌊(k+1)/3+1⌋
    * j=k-2i+3

</ul>

</ul>

## 稀疏矩阵
> pro：存储稀疏矩阵需要保存的信息（2023）  

<ul>

* 定义：
  * 非零元素个数t远小于矩阵元素总数s的矩阵

* 存储特点：
  * 仅存储非零元素
  * 需存储元素的行列位置
  * 使用三元组(行标i，列标j，值aij)表示
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b0c42fe0d8732a593781e47414cea74094d463474100aa7492a58b47b74fc271.jpg)  

> pro：适合稀疏矩阵压缩存储的存储结构（2017）  

* 存储结构：
  * 可使用数组存储
  * 可使用十字链表存储
  * 需保存：
    * 三元组表
    * 矩阵行数
    * 矩阵列数
    * 非零元素个数

</ul>

</ul>

# 归纳总结  

<ul>

本章所讲的几种数据结构类型是线性表的应用和推广，在考试中主要以选择题形式进行考查，但栈和队列也仍然有可能出现在算法设计题中。很多读者看到课本上有好多个函数时很恐惧，若考到了栈或队列的大题，难道要把每个操作的函数都写出来吗？  

其实，在考试中，栈或队列都是作为一个工具来解决其他问题的，我们可以把栈或队列的声明和操作写得很简单，而不必分函数写出。以顺序栈的操作为例：  

（1）声明一个栈并初始化：  

Elemtype stack[maxSize]`;int top $\scriptstyle{1\equiv-1}$ ；//两句话连声明带初始化都有了  

（2）元素进栈：  
（3）元素x出栈  

$\mathrm{Xe}$ stack[top--]`;/单目运算符在变量之前表示“先运算后使用”，之后则相反  

对于链式栈，同样只需定义一个结构体，然后从讲解中摘取必要的语句组合在自己的函数代码中即可。另外，在考研真题中，链式栈出现的概率要比顺序栈低得多，因此大家应该有所侧重，多训练与顺序栈相关的题目。

</ul>

---

以上内容严格遵循您的要求，增加了 `<ul></ul>` 标签以实现缩进效果，同时保留了所有 Markdown 格式（如图片链接 `![alt]`(url)`）不变，且确保了空行分隔。希望符合您的预期！