 <span style="color: silver;">
#  <span style="color: silver;">above

##  <span style="color: silver;">【考纲内容】  

（一）CPU的功能和基本结构  

（二）指令执行过程  

（三）数据通路的功能和基本结构  

（四）控制器的功能和工作原理  

五）异常和中断机制异常和中断的基本概念：异常和中断的分类；异常和中断的检测与响应  

（六）指令流水线指令流水线的基本概念：指令流水线的基本实现：结构冒险、数据冒险和控制冒险的处理；超标量和动态流水线的基本概念  

（七）多处理器基本概念  

SISD、SIMD、MIMD、向量处理器的基本概念：硬件多线程的基本概念：多核（multi-core）处理器的基本概念：共享内存多处理器（SMP）的基本概念  

##  <span style="color: silver;">【复习提示】  

- 中央处理器（CPU）概述：
  - 位于计算机的中心。
    - 本书的难点

- CPU内部结构分析：
  - 数据通路的分析。
  - 指令执行阶段的节拍与控制信号的安排。
  - 流水线技术与性能分析。

- 易出综合题的内容：
  - 数据通路的分析。
  - 指令执行阶段的节拍与控制信号的安排。
  - 流水线技术与性能分析。

- 易出选择题的内容：
  - 各种寄存器的特点。
  - 各种指令执行的周期与特点。
  - 控制器的相关概念。
  - 流水线的相关概念。


学习本章时思考的问题：

  1. 指令和数据均存放在内存中，计算机如何区分它们？
     - 从时间和空间上区分指令和数据。

  2. 指令周期、机器周期和时钟周期的概念及其关系：
     - 指令周期：执行一条指令所需的全部时间。
     - 机器周期：完成一个基本操作所需的时间。
     - 时钟周期：计算机主频的倒数，是计算机的基本时间单位。
     - 关系：指令周期由多个机器周期组成，机器周期由多个时钟周期组成。

  3. 微指令的概念及其与普通指令的关系：
     - 微指令：构成机器指令的基本元素，用于控制CPU的操作。
     - 关系：微指令是更底层的控制指令，多条微指令组成一条机器指令。

  4. 指令流水线的概念及其优势：
     - 指令流水线：将指令执行过程分解为多个阶段，实现指令重叠执行。
     - 优势：提高CPU的利用率和指令执行效率，提升系统性能。

</details>

#  <span style="color: silver;">CPU的 <span style="color: Gold;">功能</span> 基本 <span style="color: LimeGreen;">结构  

##  <span style="color: Gold;">功能  


  - 基本<span style="color: Goldenrod;">组成</span>部分
    - 运算器<span style="color: LightSkyBlue;">A</span> <span style="color: LimeGreen;">L</span>U
      - 负责对数据进行加工
    - 控制器<span style="color: Gold;">C</span>U
      - 负责协调并控制计算机各部件执行程序的指令序列
  - 具体 <span style="color: Gold;">功能</span>
    - 指令控制
      - 取指令（取指）
      - 分析指令
      - 执行指令
      - 实现程序的顺序控制
    - 操作控制
      - 产生完成指令所需的操作信号
      - 将操作信号送至相应部件
      - 确保部件按指令要求执行
    - 时间控制
      - 控制操作信号的出现时间
      - 控制操作信号的持续时间
      - 控制操作信号的时间顺序
    - 数据加工
      - 执行算术运算
      - 执行逻辑运算
    - 中断处理
      - 处理运行中的异常情况
      - 处理中断请求
##  <span style="color: silver;">CPU的基本 <span style="color: LimeGreen;">结构  

<span style="font-size: 14px;">[也可将CPU分为数据通路（见5.3节）和控制部件两大组成部分]

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4b9660fe8f486ff3097ffb4d9a7cf8d43ce70d8af78ba631a7eee723b6a34fa0.jpg)  
图5.1中央处理器的组成  

###  <span style="color: LimeGreen;">运算</span><span style="color: silver;">器<span style="color: LightSkyBlue;">A</span><span style="color: LimeGreen;">L</span>U

- 运算器主要组成：
  - 算术逻辑单元（ALU）
  - 暂存寄存器
  - 累加寄存器（ACC）
  - 通用寄存器组（GPRs）
  - 程序状态字寄存器（PSW）
  - 移位寄存器
  - 计数器（CT）
- 主要功能：
  - 根据控制器送来的命令，对数据执行：
    - 算术运算（加、减、乘、除）
    - 逻辑运算（与、或、非、异或、移位、求补等）
    - 条件测试（用于设置ZF、SF、OF和CF等标志位，作为条件转移的判断条件）

###  <span style="color: Gold;">控制<span style="color: silver;">器 <span style="color: Gold;">C</span>U  

- 控制器主要组成：
  - 程序计数器（PC）
  - 指令寄存器（IR）
  - 指令译码器（ID）
  - 存储器地址寄存器（MAR）
  - 存储器数据寄存器（MDR）
  - 时序电路
  - 微操作信号发生器
- 主要功能：
  - 执行指令，每条指令的执行是由控制器发出的一组微操作实现的
- 工作原理：
  - 形成控制信号：
    - 根据以下要素：
      - 指令操作码
      - 指令的执行步骤（微命令序列）
      - 条件信号
  - 执行结果：
    - 各硬件系统在控制信号下协同运行
    - 产生预期的执行结果
  - 系统指挥：
    - 作为整个系统的指挥中枢
    - 控制以下部件形成有机整体：
      - 运算器
      - 存储器
      - 输入/输出设备
    - 根据指令要求指挥全机协调工作
##  <span style="color: silver;">CPU的 <span style="color: LimeGreen;">R 

>pro：汇编程序员可见的寄存器（2010、2015、2021）  

- C按汇编语言（或机器语言）程序whether <span style="color: black;">可</span><span style="color: green;">访问</span>，分为两类：
  - 用户 <span style="color: black;">可</span><span style="color: LimeGreen;">见</span>寄存器
    - 特点：
      - 可对这类寄存器编程
      - 可通过使用这类寄存器减少对主存储器的访问次数
    - 包括：
      - 通用寄存器组（含基址/变址寄存器）
      - 程序状态字寄存器
      - 程序计数器
      - 累加寄存器
      - 移位寄存器
  - 用户<span style="color: purple;">不</span><span style="color: black;">可</span><span style="color: LimeGreen;">见</span>寄存器
    - 特点：
      - 对用户是透明的
      - 不可对这类寄存器编程
      - 被控制部件使用，以控制CPU的操作
    - 包括：
      - 存储器地址寄存器
      - 存储器数据寄存器
      - 指令寄存器
      - 暂存寄存器
>pro：CPU中各种寄存器的作用（2013）  

###  <span style="color: silver;"><span style="color: LightSkyBlue;">A</span><span style="color: LimeGreen;">L</span>U中的 <span style="color: LimeGreen;">R</span>
<ul>

####  <span style="color: silver;">通用<span style="color: LimeGreen;">R</span>组（GPRs）
- 功能：
  - 存放操作数：
    - 源操作数
    - 目的操作数
    - 中间结果
  - 存放地址信息：
    - 常见寄存器如：
      - AX
      - BX
      - CX
      - DX
      - SP
- 访问方式：
  - 指令中指定寄存器 <span style="color: black;">编号</span>
  - 通过编号 确定访问的具体寄存器
- SP特点：
  - 堆栈指针
  - 指示栈顶地址
####   <span style="color: silver;"><span style="color: GreenYellow;">累加</span><span style="color: LimeGreen;">R</span>（ACC）
- 功能：
  - 通用寄存器
  - 存储：
    - 暂时存放ALU运算的结果
####  <span style="color: silver;"><span style="color: green;">移</span>位~（<span style="color: green;">S</span>R）
- 功能：
  - 存储：
    - 可用来存放操作数
  - 移位操作：
    - 在控制信号作用下
    - 寄存器中的数据可：
      - 向左移位
      - 向右移位
####  <span style="color: silver;">暂 <span style="color: Gold;">存</span>~
- 功能：
  - 暂存数据：
    - 来源：
      - 数据总线
      - 通用寄存器
    - 目的：在取出下一个操作数时将其同时送入ALU
  - 可见性：
    - 对应用程序员是透明的（不可见）
####  <span style="color: silver;"><span style="color: LightSkyBlue;">程序</span> <span style="color: Gold;">状态</span>字~（<span style="color: LightSkyBlue;">P</span><span style="color: Gold;">S</span>W）
- 功能和组成：
  - 保留 由算术/逻辑运算指令 或 测试指令 的运行结果 而建立的各种 <span style="color: Gold;">状态</span><span style="color: gray;">信息</span>
  - 包含的标志位：
    -  <span style="color: LimeGreen;">溢出</span>标志（ <span style="color: LimeGreen;">O</span>F）
    -  <span style="color: Gold;">符号</span>标志（ <span style="color: Gold;">S</span>F） 
    - <span style="color: LightSkyBlue;">零</span>标志（<span style="color: LightSkyBlue;">Z</span>F）
    - <span style="color: green;">进位</span>标志（<span style="color: green;">C</span>F）
  - 存储方式：
    - 每个标志位由一位触发器来保存
    - 所有标志位组合在一起构成程序状态字</ul>

###  <span style="color: silver;"> <span style="color: Gold;">C</span>U中的 <span style="color: LimeGreen;">R

>pro：PC和IR的位数与主存储器空间和指令字长的关系（2016、2021）  
<ul>

####  <span style="color: silver;">程序计数器（<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>）
- 功能：
  - 指出欲执行指令在主存储器中的存放地址

- 位数：
  - 当PC和主存储器均按字节编址时
  - PC的位数等于主存储器地址位数

- 指令获取过程：
  - CPU根据PC的内容从主存储器中取指令
  - 取出的指令送入指令寄存器

- 自动加1功能：
  - 指令通常顺序执行
  - PC会自动加1
    - 这里的"1"指一条指令的字节数

- 特殊情况：
  - 遇到转移类指令时
  - PC的新值由指令计算得到
####  <span style="color: silver;">指令~（<span style="color: LightSkyBlue;">I</span>R）
- 功能：
  - 用于保存当前正在执行的指令
- 规格：
  - IR的位数等于指令字长
####  <span style="color: silver;">存储器地址~（M<span style="color: DarkRed;">A</span>R）
- 存放要访问的 <span style="color: gray;">主memory</span>单元的<span style="color: DarkRed;">地址</span>
- MAR的位数
  - 等于主存储器地址线数
  - 反映了最多可寻址的存储单元的个数
####  <span style="color: silver;">存储器数据~（M<span style="color: LightSkyBlue;">D</span>R）

  - 功能：
    - 存放向 I/O 主存储器' <span style="color: gray;">信息</span>
  - 规格：
    - MDR的位数等于存储字长
  - 使用场景：
    - CPU和主存储器交换信息时
      - 需要同时使用MAR和MDR</ul>

#  <span style="color: silver;"><span style="color: LightSkyBlue;">指令</span>执行过程  
<ul>

## 指令周期  

### 指令周期的基本概念
- CPU每取出并执行一条指令所需的全部时间称为指令周期，不同指令的指令周期可能不同
- 指令周期通常可用若干机器周期来表示，每个指令周期内的机器周期数可以不等
- 图5.2反映了上述关系
  - 图5.2（a）所示为定长的机器周期
  - 图5.2（b）所示为不定长的机器周期

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4cdf5401a046fb5fe39af366d76c0d8889d1154a1965f8d7673571ffd1641a97.jpg)  
图5.2指令周期和机器周期的关系  

### 不同指令的周期特点
- 对于无条件转移指令JIMIPX
  - 在执行时不需要访问主存
  - 只包含取指阶段（包括取指和分析）和执行阶段
  - 所以其指令周期仅包含取指周期和执行周期

- 对于间接寻址的指令
  - 为了取操作数，需要先访问一次主存，取出有效地址
  - 然后访问主存，取出操作数
  - 所以还需包括间址周期
  - 间址周期介于取指周期和执行周期之间

- 当CPU采用中断方式实现主机和I/O设备的信息交换时
  - CPU在每条指令执行结束前，都要发中断查询信号
  - 若有中断请求，则CPU进入中断响应阶段，也称中断周期
  - 一个完整的指令周期可包括取指、间址、执行和中断4个周期

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f7ac4456b5579efe301d3c745f4bafd3791739991e765a528a6dd737b49f8fa6.jpg)  
图5.3带有间址周期、中断周期的指令周期  

>pro：指令执行的过程（2011）  

### 指令执行的具体过程
- 当CPU执行指令时
  - 首先进入取指周期
    - 从PC指出的主存单元中取出指令，送至指令寄存器
    - 同时PC加"1"以作为下一条指令的地址
  - 当遇到转移指令等改变执行顺序的指令时
    - 在PC加"1"后会重新计算并更新PC值
  - 然后判断是否有间接寻址
    - 如果有，进入间址周期以获取操作数的有效地址
  - 之后进人执行周期
    - 完成取操作数、执行运算和存操作数的任务
  - 执行周期结束后
    - 如果CPU检测到中断请求，则进入中断周期
      - 需要关中断
      - 保存断点
      - 修改PC值为中断服务程序的入口地址
      - 转向中断服务程序

>attention:  

中断周期中的进栈操作是将SP减"1"，这和传统意义上的进栈操作相反，原因是计算机中的堆栈都是向低地址方向增长，所以进栈操作是减"1"而不是加""。  

## 指令周期的数据流  

### 数据流的基本概念
- 数据流是根据指令要求依次访问的数据序列
- 在指令执行的不同阶段，要求依次访问的数据序列是不同的
- 对于不同的指令，它们的数据流往往也是不同的

### 取指周期  
#### 取指周期的任务
- 根据PC中的内容从主存中取出指令代码并存放在IR中

#### 取指周期的数据流
- PC中存放的是指令的地址
- 根据此地址从内存单元中取出的是指令，并放在指令寄存器IR中
- 取指令的同时，PC加1

#### 取指周期的数据流向
1. PC  $\circledast$  MAR②地址总线存储器
2. CU发出读命令控制总线 $\circeq$ 存储器
3. 主存 $\circeq$ 数据总线 $\nsupseteq$ MDR $\circledast$ IR（存放指令）
4. CU发出控制信号PC内容加1

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f75084f25f382c3b663c9acfe77f401b2ea0ef4abcdf6fe2e458bbf2de1010ae.jpg)  
图5.4取指周期的数据流  

### 间址周期  
#### 间址周期的任务
- 取操作数有效地址
- 以一次间址为例
  - 将指令中的地址码送到MAR并送至地址总线
  - CU向存储器发出读命令，以获取有效地址并存至MDR

#### 间址周期的数据流向
1. Ad（IR）（或MDR） $\circledast$ MAR $\circeq$ 地址总线存储器
2. CU发出读命令控制总线存储器
3. 主存数据总线 $\nsupseteq$ MDR（存放有效地址）

其中，Ad（IR）表示取出IR中存放的指令字的地址字段。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a85b790d202f2b82ad10656f53199f418770f4c117771fe30b596a329d044671.jpg)  
图5.5一次间址周期的数据流  

### 执行周期  
- 执行周期的任务是取操作数，并根据IR中的指令字的操作码通过ALU操作产生执行结果
- 不同指令的执行周期操作不同，因此没有统一的数据流向

### 中断周期  
#### 中断周期的任务
- 处理中断请求
- 假设程序断点存入堆栈中
- 用SP指示栈顶地址
- 进栈操作是先修改栈顶指针，后存入数据

#### 中断周期的数据流向
1. CU控制将SP减1，SP $\circeq$ MAR②地址总线存储器
2. CU发出写命令 $\underline{{\boldsymbol{\mathfrak{A}}}}$ 控制总线 $\circeq$ 存储器
3. PCMDR $\nsupseteq$ 数据总线 $\circeq$ 主存（程序断点存入存储器）
4. CU（中断服务程序的入口地址）PC

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c5e774da7c287935949863c45b6d8ed1c27c81c7ecb099690202cb499289d6e4.jpg)  
图5.6中断周期的数据流

## <span style="color: LightSkyBlue;">指令</span><span style="color: green;">执行</span> <span style="color: silver;">方案  
- 一个指令周期包括多个执行步骤
  - 每个步骤完成指令的一部分功能
  - 几个步骤依次执行完成指令的全部功能
- 不同处理器采用不同方案来安排指令的执行步骤

>pro：单周期和多周期CPU的CPI（2020）  
<ul>

###  <span style="color: silver;"> <span style="color: LimeGreen;">单</span>T处理器  

>pro：单周期CPU的特点（2016）  

####  <span style="color: Gold;">特点
- 指令执行特点
  - 所有指令使用相同执行时间完成
    - 每条指令在一个时钟周期内完成
    -  <span style="color: LimeGreen;">C</span>P<span style="color: LightSkyBlue;">I</span> = 1
  - 指令执行方式
    - 串行执行
    - 下一条指令必须等待前一条指令执行完成才能开始
  - 时钟周期限制
    - 由执行时间最长的指令决定
    - 影响
      - 较短指令也必须使用相同的较长周期
      - 导致系统整体运行速度降低

###  <span style="color: silver;"><span style="color: LightSkyBlue;">多</span>周期处理器  

#### 特征
对不同类型的指令选用不同的执行步骤
- 指令执行T分配
  - 根据指令需要分配相应数量的周期
  - 特点：
    - 不同指令可使用不同数量的时钟周期执行 (CPI>1)
    - 不要求所有指令执行时间相同
- 执行方式
  - 指令之间采用串行执行
  - 一条指令执行完成后才开始下一条
### <span style="color: LightSkyBlue;">流水</span><span style="color: Gold;">线</span>处理器  

#### 执行方式
采用指令之间 <span style="color: black;">并行</span>执行的方案
- 追求的目标
  - 力争在每个时钟周期完成一条指令的执行过程
  - 只在理想情况下才能达到CPI=1
- 特点
  - 每个时钟周期启动一条指令
  - 多条指令并行运行
    - 不同指令同时处于不同执行步骤</ul>
</ul>

#  <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span><span style="color: gray;">通路</span>的功能和基本结构  
<ul>

##  <span style="color: Gold;">功能  
- CPU的组成：
  - 随着技术发展，更多功能逻辑集成到CPU芯片中。
  - 不论CPU内部结构多复杂，它主要由数据通路和控制部件组成。

>pro：数据通路的组成部件（2017、2021）

- 数据通路的定义与作用：
  - 数据在指令执行过程中的路径及其经过的部件。
  - 包括ALU、通用寄存器、状态寄存器、异常和中断处理逻辑等。
  - 数据通路描述信息流动的起点、中间经过的部件和终点。
  - 数据通路由控制部件控制，根据指令功能生成控制信号。


## <span style="color: Goldenrod;">组成  

- 组成数据通路的元件主要分为组合逻辑元件和时序逻辑元件两类。

>pro：数据通路中的组合逻辑元件和时序逻辑元件（2021、2023）  

### 组合逻辑元件（操作元件）  

- 任何时刻产生的输出仅取决于当前的输入。
  - 组合电路不含存储信号的记忆单元，也不受时钟信号的控制，输出与输入之间无反馈通路，信号是单向传输的。
- 数据通路中常用的组合逻辑元件有加法器、算术逻辑单元（ALU）、译码器、多路选择器、三态门等，如图。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/96308c858ff5f7964125d669141286fa1586d651484b7c7042c3ce73a05e35c4.jpg)  
图5.7数据通路中的几种常用组合逻辑元件  

- 图中虚线表示控制信号，译码器可用于操作码或地址码译码， $n$ 位输入对应 $2^{n}$ 种不同组合，因此有 $2^{n}$ 个不同输出。
- 多路选择器（MUX）需要控制信号Select来确定选择哪个输入被输出。
- 三态门可视为一种控制开关，由控制信号EN决定信号线的通断
  - 当 $\mathrm{EN}=1$ 时，三态门被打开，输出信号等于输入信号
  - 当 $\mathrm{EN}\,=\,0$ 时，输出端呈高阻态（隔断态），所连寄存器与总线断开

### 时序逻辑元件（状态元件）  

- 时序电路的特点：
  - 输出与当前输入和以前输入都有关。
  - 包含存储信号的记忆单元。

- 时序电路的工作条件：
  - 必须在时钟节拍下工作。

- 时序逻辑元件的例子：
  - 各类寄存器和存储器。
  - 包括通用寄存器组、程序计数器、状态/移位/暂存/锁存寄存器等。
 

## 数据通路的基本结构  

### CPU内部单总线方式  

>pro：数据通路中的部件及连接方式（2013、2015、2022）  

- 将ALU及所有寄存器都连接到一条内部公共总线上，称为单总线结构的数据通路。
  - 这种结构比较简单，但数据传输存在较多的冲突现象，性能较低。
  - 此总线在CPU内部，注意不要把它与连接CPU、存储器和外设的系统总线相混淆。
- 图5.8所示为单总线的数据通路和控制信号。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0161e7b16de00d520d62405d382e730a37430111a550273cdc1cb28934a907c8.jpg)  
图5.8单总线的数据通路和控制信号  

>pro：数据通路中的三态门及其作用（2015）  

- 在图5.8中：
  - GPRs为通用寄存器组，rs、rd分别为所读、写的通用寄存器的编号
  - Y和Z为暂存器
  - FR为标志寄存器，用于存放ALU产生的标志信息
  - 带箭头的虚线表示控制信号
    - 字母加"in"表示该部件充许写入
    - 字母加"out"表示该部件充许输出
  - MDRin表示内部总线上信息写入MDR，MDRout表示MDR的内容送入内部总线
  - 能输出到总线的部件均通过一个三态门与内部总线相连，用于控制该部件与内部总线之间数据通路的连接与断开

>attention:  
单周期处理器（ $\mathrm{CPI}=1$ ）不能采用单总线方式，因为单总线将所有寄存器都连接到一条公共总线上，一个时钟内只允许一次操作，无法完成一条指令的所有操作。  

### CPU内部多总线方式  

- CPU内部有两条或更多的总线时，构成双总线结构或多总线结构。
  - 将所有寄存器的输入端和输出端都连接到多条公共通路上
  - 相比之下单总线中一个时钟内只充许传送一个数据，因而指令执行效率很低
  - 因此采用多总线方式，同时在多个总线上传送不同的数据，提高效率

>pro：单周期CPU的特点（2016）  

### 专用数据通路方式  

- 根据指令执行过程中的数据和地址的流动方向安排连接电路
  - 避免使用共享的总线
  - 性能较高，但硬件量大

>attention:  内部总线是指同一部件，如CPU内部连接各寄存器及运算部件之间的总线；系统总线是指同一台计算机系统的各部件，如CPU、内存和各类I/O接口间互相连接的总线。  

## 数据通路的操作举例  

- 总线是一组共享的传输信号线
  - 它不能存储信息
  - 任一时刻也只能有一个部件把信息送到总线上
- 下面以图5.8所示的单总线数据通路为例，介绍一些常见操作的流程及控制信号

>pro：指令执行的节拍及有效控制信号（2009、2015）：指令在取数和执行阶段所用到的部件（2019）  

### 通用寄存器之间传送数据  

- 在寄存器和总线之间有两个控制信号：Rin和Rout
  - 当Rin有效时，控制将总线上的信息存到寄存器R中
  - 当Rout有效时，控制将寄存器R的内容送至总线
- 下面以程序计数器PC为例，将PC的内容送至MAR。实现该操作的流程及控制信号为
  - (PC)→MARPC out MARin，PC内容→MAR  

### 从主存读取数据  

>pro：取指令阶段所需时钟周期分析（2022）  

- 从主存中读取的信息可能是数据或指令，现以CPU从主存中取指令为例，说明数据在单总线数据通路中的传送过程。实现该操作的流程及控制信号为：
  - （PC）→MARPC out MARin，现行指令地址→MAR
  - MEM（MAR)→MDR，（PC)+1→PCMDRin有效，CU发出读命令，取出指令后PC+1
  - (MDR）→IR MDR out IR in，现行指令→IR  
- 第一步，将PC的内容通过内部总线送至MAR，需要1个时钟周期
- 第二步，CU向主存发出读命令，从MAR所指主存单元读取一个字，并送至MDR；同时PC加1为取下一条指令做准备，需要1个主存周期
- 第三步，将MDR的内容通过内部总线送至IR，需要1个时钟周期

### 将数据写入主存  

- 将寄存器R1的内容写入寄存器R2所指的主存单元，完成该操作的流程及控制信号为：
  - (R1)→MDR Rl out MDR in
  - (R2)→MAR R 2 out MARin
  - MDR→MEM(MAR)MDRout有效，CU发出写命令  

### 执行算术或逻辑运算  

> pro: ALU中设置暂存器的原因（2015、2022）  

- 在单总线数据通路中：
  - 每一时刻总线上只有一个数据有效
  - 由于ALU是一个没有存储功能的组合逻辑元件，在其执行运算时必须保持两个输入端同时有效
    - 因此先将一个操作数经内部总线送人暂存器Y保存，Y的内容在ALU的左输入端始终有效
    - 再将另一个操作数经内部总线直接送到ALU的右输入端
  - ALU的输出端也不能直接与总线相连，否则其输出会通过总线反馈到输入端，影响运算结果
    - 因此将运算结果暂存在暂存器乙中
- 假设加法指令ADDACC，R1，实现将ACC的内容和R1的内容相加并写回ACC，完成该操作的流程及控制信号为：
  - (R1)→Y Rl out Yin，操作数→Y
  - (ACC)  $^+$  (Y）→Z ACC out ALU in，CU ALU，结果→Z
  - (Z)→ACC Z out ACC in，结果→ACC  

>pro：分析减法和自增指令执行所需的时钟周期数（2015）  

- 以上3步不能同时执行，否则会引起总线冲突，因此该操作需要3个时钟周期  

### 修改程序计数器的值  

- 转移指令的作用：
  - 通过修改程序计数器PC的值实现程序的跳转。

- 转移指令JIMPaddr的操作：
  - 假设转移指令为JIMPaddr，其中addr是目标转移地址。
  - 操作流程：将指令寄存器IR中的地址字段写入PC。
  - 控制信号：Ad(IR)→PC, IR out, PC in。

- 数据通路结构的影响：
  - 直接影响CPU内各种信息的传送路径。
  - 数据通路不同，指令执行过程的微操作序列安排也不同。
  - 影响微操作信号形成部件的设计。

</ul>

#  <span style="color: Gold;">C</span><span style="color: silver;">U'功能和工作原理  

##  <span style="color: LimeGreen;">结构</span> <span style="color: silver;">和功能  

###  <span style="color: LimeGreen;">连接 <span style="color: silver;">关系
- 五大功能部件及其连接关系(figure 5.9)
  - 通过<span style="color: LightSkyBlue;">D</span>B <span style="color: DarkRed;">A</span>B  <span style="color: Gold;">C</span>B 连接在一起
  - <span style="font-size: 14px;">  点画线框内的是 <span style="color: Gold;">C</span>U

#### 主要连接关系说明
- 部件间的数据传送：
  - <span style="color: LightSkyBlue;">A</span> <span style="color: LimeGreen;">L</span>U：
    - 通过<span style="color: LightSkyBlue;">D</span>B与内Memory、I和O 传送数据
  - I O：
    - 通过 <span style="color: GreenYellow;">接口</span>电路与总线相连接
  - 内Memory、I和O：
    - 从<span style="color: DarkRed;">A</span>B 接收地址信息
    - 从 <span style="color: Gold;">C</span>B得到控制信号
    - 通过<span style="color: LightSkyBlue;">D</span>B与其他部件传送数据
  - 控制器部件：
    - 从<span style="color: LightSkyBlue;">D</span>B接收指令信息
      - 从<span style="color: LightSkyBlue;">A</span> <span style="color: LimeGreen;">L</span>U部件接收指令转移地址
    - 送出指令地址到<span style="color: DarkRed;">A</span>B
    - 向系统中的部件提供运行所需的控制信号
    - ![image](https://bluejedis.github.io/picx-images-hosting/test/image.58hfcnfphn.webp)  
图5.9计算机硬件系统和控制器部件的组成  

###  <span style="color: Gold;">功能
- 作为系统的指挥中心，主要功能：
  - 指令<span style="color: green;">管理</span>
    - 从主存中取出指令
    - 指出下一条指令在主存中的位置
  - 指令 <span style="color: Gold;">处理</span>
    - 对指令进行译码
    - 对指令进行测试
    - 产生相应的操作控制信号
  - 数据<span style="color: LightSkyBlue;">流</span><span style="color: green;">向</span><span style="color: Gold;">控制</span>
    - 指挥并控制以下设备间的数据流动方向：
      - CPU
      - 主存
      - 输入设备
      - 输出设备
###  <span style="color: LimeGreen;">分类</span>
- 按 微操作控制信号的 <span style="color: black;">产生方式</span>，分为：
  - 硬布线CU
  - 微程序~
- 两类控制器的异同：
  - 相同点：PC和IR相同
  - 不同点：
    - 确定和表示 <span style="color: LightSkyBlue;">指令</span>执行步骤的办法
    -  <span style="color: Gold;">控制</span>信号的给出方案

## <span style="color: green;">硬</span><span style="color: Gold;">布线</span>~ 
<ul>

### 基本概念
- 由复杂的组合逻辑门电路和触发器构成
- 也称组合逻辑控制器
- 工作原理：根据指令要求、当前时序及内外部状态，按时间顺序发送微操作控制信号

### 控制单元结构
- 指令操作码的作用
  - 决定CU发出不同控制信号的关键
  - 通过译码电路将n位操作码产生2^n个输出
  - 每种操作码对应一个输出送至CU

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d2f55e758d9c494275dac108e2cae6bca95b683e62055bdffc92ff9c328afb53.jpg)  
图5.10带指令译码器和节拍输入的控制单元框图  

### 控制单元输入信号
- 指令信息
  - 经指令译码器译码产生
  - 操作码决定执行周期的不同操作
  - 与时钟配合产生不同控制信号
- 时序系统信号
  - 包括机器周期信号和节拍信号
  - 控制单元需要时钟控制以有序发出控制信号
- 执行单元反馈信息
  - 包括各种标志
  - 用于根据CPU当前状态产生控制信号

### 硬布线控制器特点
- 优点：
  - 速度快，主要取决于电路延迟
  - 适用于高速计算机CPU和RISC架构
- 缺点：
  - 控制信号实现复杂
  - 修改或增加指令需重新设计电路
  - 指令系统越全，电路越庞杂
  - 调试困难
</ul>

## <span style="color: SlateBlue;">微</span><span style="color: LightSkyBlue;">程序</span> <span style="color: silver;">控制器  

- 实现方式：
  - 采用存储逻辑实现
- 实现原理：
  - 将微操作信号代码化
  - 每条机器指令转化为一段微程序
  - 将微程序存入控制存储器中
- 控制信号生成：
  - 微操作控制信号由微指令产生
###  <span style="color: silver;">基本概念  
<ul>

#### 基本思想与术语
- 微程序的设计思想：
  - 将每条机器指令编写成一个微程序
  - 每个微程序包含若干微指令
  - 每条微指令对应一个或几个微操作命令
  - 执行指令即执行微程序的过程
  - 这些微程序存储在控制存储器中
  - 目前大多数计算机采用此技术

##### 微命令与微操作
- 微命令：
  - 控制部件向执行部件发出的各种控制命令
  - 是构成控制序列的最小单位
  - 例如：打开/关闭控制门、寄存器打入脉冲
- 微操作：
  - 执行部件收到微命令后进行的操作
  - 与微命令一一对应
- 微命令分类：
  - 相容性微命令：可同时出现完成某些微操作
  - 互斥性微命令：不允许同时出现

>attention:  
硬布线控制器中也有微命令与微操作的概念，并非微程序控制器的专有概念。  

##### 微指令与微周期
- 微指令组成：
  - 操作控制字段（微操作码字段）：产生操作控制信号
  - 顺序控制字段（微地址码字段）：控制下一条微指令地址
- 微周期：
  - 取出并执行一条微指令所需的全部时间
  - 通常为一个时钟周期

##### 主存储器与控制存储器
>pro：主存储器和控制存储器的区别（2017）  
- 主存储器：
  - 用途：存放程序和数据
  - 位置：CPU外部
  - 实现：用RAM
- 控制存储器：
  - 用途：存放微程序
  - 位置：CPU内部
  - 实现：用ROM
  - 单元地址称为微地址

##### 程序与微程序
- 程序：
  - 指令的有序集合
  - 完成特定功能
  - 由软件设计人员编制
  - 存放在主存或辅存中
- 微程序：
  - 微指令的有序集合
  - 描述机器指令
  - 是指令的实时解释器
  - 由计算机设计者编制
  - 存放在控制存储器中
  - 对程序员透明

##### 相关寄存器区分
- 地址寄存器（MAR）：存放主存读/写地址
- 微指令地址寄存器（μPC或CMAR）：存放待执行微指令的微地址
- 指令寄存器（IR）：存放从主存读出的指令
- 微指令寄存器（μIR或CMIDR）：存放从控制存储器读出的微指令
</ul>

### 组成和工作过程  

#### 基本组成
- 主要部件：
  - 起始和转移地址形成部件：
    - 产生初始和后继微地址
    - 保证微指令连续执行
  - 微指令地址寄存器：
    - 接收微地址
    - 为读取微指令做准备
  - 控制存储器：
    - 核心部件
    - 存放各指令对应的微程序
  - 微指令寄存器：
    - 位数等于微指令字长

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/99c89003cac2ee2ef59dde11e4b8aa32720bdbcf83de761ecb39fd778d602223.jpg)  
图5.11微程序控制器的基本结构  

#### 工作过程
- 执行机器指令的过程：
  1. 执行取指令公共操作：
     - 将取指微程序入口地址送入μPC
     - 从CM读出微指令送入μIR
     - 完成后机器指令存入指令寄存器
  2. 产生微程序入口地址：
     - 由机器指令操作码通过微地址形成部件产生
     - 送入μPC
  3. 执行微指令：
     - 从CM逐条取出
     - 依次执行
  4. 循环执行：
     - 完成一条机器指令后返回取指入口
     - 重复以上步骤直到程序结束

####  <span style="color: silver;"><span style="color: purple;">微</span><span style="color: LightSkyBlue;">程序</span>和机器指令关系
- 对应关系：
  - 一条机器指令对应一个微程序
  - 公共操作可统一编程：
    - 取指令操作微程序
    - 间址周期微程序
    - 中断周期微程序
- 控制存储器内容：
  - 机器指令对应的微程序
  - 公共操作的微程序

###  <span style="color: silver;"><span style="color: deepskyblue;">编码</span>方式  
<ul>

- 目的：
  - 保证速度的情况下缩短微指令字长
- 作用：
  - 对微指令控制字段编码
  - 形成控制信号

#### 直接~
- 特点：
  - 无须译码
  - 每位代表一个微命令
  - 1/0表示选用/不选用
- 优点：
  - 简单直观
  - 执行速度快
  - 操作并行性好
- 缺点：
  - 微指令字长过长
  - 控制存储器容量大

#### 字段直接~
>pro：字段直接控制的编码方法（2012）  
- 基本方法：
  - 操作控制字段分成若干小字段
  - 互斥性微命令在同一字段
  - 相容性微命令在不同字段
  - 每个字段独立编码
  - 各字段编码含义单独定义

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c6e197e941e2f1058a37b511cbaa37823f47acc90dd408d7e4f2e9e15c655007.jpg)  
图5.12直接编码方式  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8f2b917f211c35fb07f59a18310c4809c207a77d2f9e952f169ab68cecd9625.jpg)  
图5.13字段直接编码方式  

- 分段原则：
  - 互斥性微命令分在同一段
  - 相容性微命令分在不同段
  - 每段信息位不能太多
  - 每段留出不操作状态（通常000）

#### 字段间接~
- 特点：
  - 一个字段的微命令由另一字段解释
  - 非直接译码发出微命令
  - 也称隐式编码
- 优缺点：
  - 优点：进一步缩短微指令字长
  - 缺点：削弱并行控制能力
  - 用途：作为字段直接编码的辅助手段
</ul>

###  <span style="color: silver;">地址形成方式  

后继微地址的形成主要有以下几个基本类型：  
<ul>

####  <span style="color: silver;">后<span style="color: purple;">继</span>地址字段指出
- 在微指令格式中设置一个后继地址字段
  - 用于直接指示下一条微指令的地址
- 由微指令的后继地址字段直接指出后继微指令的地址
  - 直接从字段中获取地址信息
  - 无需额外计算或转换
- 也称断定方式
  - 因为地址是确定的
  - 不依赖于其他条件
####  <span style="color: silver;">机器<span style="color: LightSkyBlue;">指令</span>操作码形成

  - 机器指令从指令寄存器取出
  - 通过微地址形成部件处理：
    - 输入：操作码
    - 输出：对应机器指令微程序的首地址
####  <span style="color: silver;">增量 <span style="color: LimeGreen;">计数器</span>法
- 即 $(\mu\mathrm{PC})+1{\rightarrow}\mu\mathrm{PC}$
- 适用于后继微指令地址是连续的情况

####  <span style="color: Gold;">标志</span> <span style="color: silver;">决定分支转移
- 根据各种标志决定下一条微指令分支转移的地址

#### <span style="color: green;">硬件</span> <span style="color: silver;">直接产生
- 电源加电后，第一条微指令的地址可由专门的硬件电路产生
- 并送至 $\mu\mathrm{PC}$
- 这个地址即为取指周期微程序的入口地址
</ul>

### <span style="color: LightSkyBlue;">格式</span>  

微指令格式与微指令的 <span style="color: black;">编码</span>方式有关， 分为:
- 水平型~ 和 垂直型~

>pro： 微指令后继地址字段位数与微指令条数的关系（2014）  
<ul>

#### <span style="color: LightSkyBlue;">水平</span> <span style="color: silver;">型~
- 编码方式特点：
  - 直接编码、字段直接编码和字段间接编码都属于水平型微指令
- 基本指令格式：
  - 如图5.14所示
  - 指令字中的一位对应一个控制信号
  - 有输出时为1，否则为0
  - 一条水平型微指令定义并执行多个并行操作的微命令

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b2aedaa58c557759dbd6b0fe7d9c754a7d34a84fc4317965518d9de55c2fb6a1.jpg)  

- 优缺点：
  - 优点：微程序短，并行能力强，执行速度快
  - 缺点：微指令长，编写微程序较麻烦

#### <span style="color: green;">垂直</span> <span style="color: silver;">型~
- 基本特点：
  - 采用类似机器指令操作码的方式
  - 在微指令字中设置微操作码字段
  - 基本格式如图5.15所示
  - 一条垂直型微指令通常只能定义并执行一种微命令

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7065d0c6793931c03ff4fb46419e81a29e8a05e3dc173555b1f656c5aa397918.jpg)  

- 优缺点：
  - 优点：微指令短、简单、规整，便于编写微程序
  - 缺点：微程序长，执行速度慢，效率低

####  对比
- 并行操作能力：
  - 水平型：强、效率高、灵活性强
  - 垂直型：较差
- 执行时间：
  - 水平型：短
  - 垂直型：长
- 微程序特点：
  - 水平型：微指令字较长但微程序短
  - 垂直型：相反
- 掌握难度：
  - 水平型：难以掌握
  - 垂直型：与机器指令比较相似，相对容易掌握
</ul>
</ul>

###  <span style="color: silver;"> compare: 

>pro：硬布线控制器和微程序控制器的特点（2009）  
<ul>

#### <span style="color: green;">硬</span> <span style="color: Gold;">布线
- 优点：
  - 由于控制器的速度取决于电路延迟，所以速度 <span style="color: black;">快</span>
- 缺点：
  - 由于将控制部件视为专门产生固定时序控制信号的逻辑电路
  - 把用最少元件和取得最高速度作为设计目标
  - 一旦设计完成，就 <span style="color: black;">不可</span>能通过其他额外修 <span style="color: black;">改</span>添加新功能

#### <span style="color: purple;">微</span><span style="color: LightSkyBlue;">程序</span>
  - 具有规整性、 <span style="color: LimeGreen;">灵活</span>性和可维护性
- 缺点：
  - 由于采用了存储程序原理
  - 每条指令都要从控制存储器中取一次
    - 影响 <span style="color: black;">速度</span>

#### 对比总结
为便于比较，下面以表格的形式对比二者的不同，见表5.1。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5758d88c281f323689f1a57cbe9859540b34d296985c6fd404c91be129bd19f0.jpg)
</ul>


