---
html:
  	toc: true
print_background: true
---

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

<span style="font-size: 14px;">[也可将CPU分为数据通路（见5.3节）和控制部件两大组成部分]`

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4b9660fe8f486ff3097ffb4d9a7cf8d43ce70d8af78ba631a7eee723b6a34fa0.jpg)  
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

>pro：PC和<span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">R</span>的位数与主存储器空间和指令字长的关系（2016、2021）  
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

## <span style="color: LightSkyBlue;">指令</span> <span style="color: silver;">周期  

###  <span style="color: silver;">concept
- 指令周期
  - 定义：
    - CPU每 <span style="color: black;">取出</span>并<span style="color: green;">执行</span>一条指令所需的全部时间
  - 特点：
    - 不同指令的指令周期可能不同
    - 可用<span style="color: gray;">若干</span> <span style="color: black;">机器</span>T 来表示
      - every指令T内的机器T数可以不等



![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4cdf5401a046fb5fe39af366d76c0d8889d1154a1965f8d7673571ffd1641a97.jpg)  
图5.2指令T和机器T的关系  
  - （a）定长的机器T
  - （b）不定长的机器T

###  <span style="color: silver;">不同<span style="color: LightSkyBlue;">指令</span>的$T$ <span style="color: Gold;">特点</span>
- 指令周期的类型和特点：
  - 无条件转移指令JMP X：
    - 执行特点：
      - 不需要访问主存
      - 只包含取指阶段和执行阶段
    - 周期构成：
      - 取指周期（包括取指和分析）
      - 执行周期

  - 间接寻址指令：
    - 操作数获取过程：
      - 第一次访存：获取有效地址
      - 第二次访存：获取操作数
    - 周期构成：
      - 取指周期
      - 间址周期
      - 执行周期
    - 特点：间址周期位于取指周期和执行周期之间

  - 带中断的指令执行：
    - 中断检查：
      - CPU在每条指令执行结束前发出中断查询信号
      - 发现中断请求时进入中断响应阶段（中断周期）
    - 完整周期构成：
      - 取指周期
      - 间址周期
      - 执行周期
      - 中断周期
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f7ac4456b5579efe301d3c745f4bafd3791739991e765a528a6dd737b49f8fa6.jpg)  
图5.3带有间址周期、中断周期的指令周期  

>pro：指令执行的过程（2011）  

### 指令执行的具体过程
- CPU执行指令的过程：
  -  <span style="color: LimeGreen;">取</span>指周期
       - 取指令操作
         - 从PC指向的主存单元取出指令
         - 将指令送至指令寄存器
       - PC更新操作
         - PC加"1"准备下一条指令地址
         - 对于转移指令：PC加"1"后会重新计算并更新PC值
  
  -  <span style="color: gray;">间</span>址周期(条件执行)
      - 判断是否需要间接寻址
      - 如需要则进入间址周期获取操作数的有效地址
  
  - <span style="color: green;">执</span>行周期
    - 取操作数
    - 执行运算
    - 存储操作数
  
  - 中<span style="color: Gold;">断</span>周期(条件执行)
    - 检测是否有中断请求
    - 如有中断请求则：
      - 关闭中断
      - 保存断点
      - 修改PC值为中断服务程序入口地址
      - 转向中断服务程序执行
>attention:  

- 中断周期中的进栈操作:
  - SP减"1"而不是加"1"
  - 原因:
    - 计算机中的堆栈都是向低地址方向增长
    - 因此进栈时需要减"1"来指向新的栈顶位置
##  <span style="color: silver;"><span style="color: LightSkyBlue;">指令</span>T'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  
<ul>

### <span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  
- 数据流
  - 定义：
    - 根据指令要求依次访问的<span style="color: LightSkyBlue;">数据</span> <span style="color: LimeGreen;">序列</span>
  - 特点：
    - 在指令执行的不同阶段，数据序列是不同的
    - 不同指令的数据流往往也是不同的
### <span style="color: green;">取</span><span style="color: LightSkyBlue;">指</span><span style="color: silver;">T 
<ul>

####  <span style="color: silver;">任务
- 根据PC中的内容从主存中 <span style="color: black;">取出</span><span style="color: LightSkyBlue;">指令</span>代码→存放在<span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">R</span>中

####  <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  
- PC中存放的是指令的<span style="color: DarkRed;">地址
- 取指令
  - <span style="color: black;">取出</span><span style="color: LightSkyBlue;">指令</span>代码→存放在<span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">R</span>中
- PC更新
  - PC+1 
    - 以指向下一条指令
#### <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流向
- PC到存储器的数据流向:
  - <span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span> → MAR → <span style="color: DarkRed;">地址</span>bus → <span style="color: Gold;">M</span>

- CU发出读命令的流向:
  - CU读命令 →  <span style="color: Gold;">控制</span>bus →  <span style="color: Gold;">M

- 获取指令的流向:
  - 主存 → <span style="color: LightSkyBlue;">数据</span>bus → M<span style="color: LightSkyBlue;">D</span>R → IR（存放指令）

- PC更新流向:
  - CU发出控制信号 → <span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>+1
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f75084f25f382c3b663c9acfe77f401b2ea0ef4abcdf6fe2e458bbf2de1010ae.jpg)  
图5.4取指周期的数据流  
</ul>

###  <span style="color: silver;">间<span style="color: DarkRed;">址</span>T
<ul>

####  <span style="color: silver;">任务
- 取操作数<span style="color: LightSkyBlue;">E</span><span style="color: DarkRed;">A</span>
- 以一次间址为例
  - step1:
    - 将指令中的地址码送到MAR
    - 将MAR中的地址码送至地址总线
  - step2:
    - CU向存储器发出读命令
    - 获取有效地址
    - 将有效地址存至MDR
#### <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流向
- Ad(IR)(或MDR)到存储器的数据流向:
  - Ad(<span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">R</span>)(或MDR) → M<span style="color: DarkRed;">A</span>R → <span style="color: DarkRed;">地址</span>bus →  <span style="color: Gold;">M
- CU发出读命令的流向:
  - CU读命令 →  <span style="color: Gold;">控制</span>bus →  <span style="color: Gold;">M
- 获取有效地址的流向:
  -  <span style="color: Gold;">M</span> → <span style="color: LightSkyBlue;">数据</span>bus → MDR(存放有效地址)
 <span style="font-size: 14px;">[Ad（IR）表示取出IR中存放的指令字的地址字段。

![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.2yyeudx8js.webp)  
图5.5一次间址周期的数据流  
</ul>

###  <span style="color: LimeGreen;">执行</span><span style="color: silver;">T
- 任务
  - 取操作数
  - 根据IR中的指令字的操作码通过ALU操作产生执行结果
- 特点
  - 不同指令的执行周期操作不同
  - 因此没有统一的数据流向
###  <span style="color: Gold;">中断</span> <span style="color: silver;">T 
<ul>

####   <span style="color: silver;">任务
- 处理中断请求
- 假设程序断点存入堆栈中
- 用SP指示栈顶地址
- 进栈操作是先修改栈顶指针，后存入数据

#### <span style="color: LightSkyBlue;">数据</span><span style="color: deepskyblue;">流</span><span style="color: green;">向</span>
-  <span style="color: Gold;">C</span>U控制将 SP-1
     - SP ① M<span style="color: DarkRed;">A</span>R ② <span style="color: DarkRed;">地址</span>bus ③ 存储器
- CU发出 <span style="color: LimeGreen;">写</span>命令
  - 写命令 ④ 控制总线 ⑤ 存储器
- 程序<span style="color: gray;">断点</span>存入存储器
  - PC ⑥ MDR ⑦ 数据总线 ⑧ 主存
-  <span style="color: Gold;">C</span>U<u>处理</u>中断服务
     - CU(中断服务程序的入口地址) ⑨ PC

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c5e774da7c287935949863c45b6d8ed1c27c81c7ecb099690202cb499289d6e4.jpg)  
图5.6中断周期的数据流
</ul>
</ul>

## <span style="color: LightSkyBlue;">指令</span><span style="color: green;">执行</span> <span style="color: silver;">方案  
- 一个<span style="color: LightSkyBlue;">指令</span>T包括多个执行步骤
  - 每个步骤完成指令的一部分功能
  - 几个步骤依次执行完成指令的全部功能
- 指令执行步骤的安排方案
  - 不同处理器采用不同方案
    - 单周期处理器
    - 多周期处理器
    - 流水线处理器
>pro：单周期和多周期CPU的CPI（2020）  
<ul>

###  <span style="color: silver;"> <span style="color: LimeGreen;">单</span>T处理器  

>pro：单周期CPU的特点（2016）  

####  <span style="color: Gold;">特点
- 指令执行特点
  - 所有指令使用 <span style="color: black;">相同</span> <span style="color: LimeGreen;">执行</span>时间完成
    - 每条指令在一个时钟周期内完成
    -  <span style="color: LimeGreen;">C</span>P<span style="color: LightSkyBlue;">I</span> = 1
  - 指令执行方式
    -  <span style="color: Gold;">串</span>行执行
    - 下一条指令必须等待前一条指令执行完成才能开始
  - 时钟周期限制
    - 由执行时间最长的指令决定
    - 影响
      - 较短指令也必须使用相同的较长周期
      - 导致系统整体运行速度降低

###  <span style="color: silver;"><span style="color: LightSkyBlue;">多</span>周期处理器  
<ul>

#### 特征
对不同类型的指令选用不同的执行步骤
- 指令执行T分配
  - 根据指令需要分配相应数量的周期
  - 特点：
    - 不同指令可使用不同数量的时钟周期执行 (CPI>1)
    - 不要求所有指令执行时间相同
- 执行方式
  - 指令之间采用 <span style="color: Gold;">串</span>行执行
  - 一条指令执行完成后才开始下一条
</ul>

### <span style="color: LightSkyBlue;">流水</span><span style="color: Gold;">线</span>处理器  

#### 执行方式
采用指令之间 <span style="color: green;">并行</span>执行的方案
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
- CPU的组成
  - 主要组成部分
    - <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span><span style="color: gray;">通路</span>
    -  <span style="color: Gold;">控制</span>部件
  - 发展特点
    - 随着技术发展
      - 更多功能逻辑被集成到CPU芯片中
    - 不论内部结构多复杂
      - 仍主要由数据通路和控制部件构成
>pro：数据通路的组成部件（2017、2021）

- <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span><span style="color: gray;">通路</span>
  - 定义
    - 数据在指令执行过程中的路径及其经过的部件
  - 组成<span style="color: gray;">部件</span>
    - ALU
    - 通用寄存器
    - 状态寄存器
    - 异常和中断处理逻辑
  - 功能特点
    - 描述信息流动的起点、中间经过的部件和终点
  - 控制特性
    - 由控制部件控制
    - 根据指令功能生成控制信号

## <span style="color: Goldenrod;">组成  

- 组成数据通路的元件
  - 主要分为两类
    - 组合逻辑元件
    - 时序逻辑元件
>pro：数据通路中的组合逻辑元件和时序逻辑元件（2021、2023）  

###  <span style="color: silver;"> <span style="color: LimeGreen;">组合</span><span style="color: Gold;">逻辑</span>元件（操作元件）  

- 组合逻辑元件的特点
  - 输出仅取决于当前输入
  - 无存储单元和时钟控制
  - 无反馈通路
  - 信号单向传输

- 常用组合逻辑元件类型
  - 加法器
  - 算术逻辑单元(ALU)
  - 译码器
  - 多路选择器
  - 三态门

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/96308c858ff5f7964125d669141286fa1586d651484b7c7042c3ce73a05e35c4.jpg)  
图5.7数据通路中的几种常用组合逻辑元件  

-  <span style="color: LimeGreen;">译</span><span style="color: LightSkyBlue;">码</span>器
     - 特点
       - 虚线表示控制信号
       - 可用于操作码或地址码译码
     - 输入输出关系
       - n位输入对应2^n种不同组合
       - 有2^n个不同输出

- 多路选择器(MUX)
  - 控制特性
    - 需要控制信号Select
    - 用于确定选择哪个输入被输出

- 三态门
  - 基本功能
    - 可视为一种控制开关
    - 由控制信号EN决定信号线的通断
  - 工作状态
    - EN=1时
      - 三态门被打开
      - 输出信号等于输入信号
    - EN=0时
      - 输出端呈高阻态(隔断态) 
      - 所连寄存器与总线断开

### <span style="color: LightSkyBlue;">时序</span> <span style="color: Gold;">逻辑</span> <span style="color: silver;">元件（状态元件）  

- 时序电路的特点
  - 输出特性
    - 输出与当前输入和以前输入都有关
  - 结构特性
    - 包含存储信号的记忆单元

- 时序电路的工作条件
  - 时钟要求
    - 必须在<span style="color: gray;">时钟节拍</span>下工作

- 时序逻辑元件的类型
  - 寄存器类
    - 通用寄存器组
    - 程序计数器
    - 状态寄存器
    - 移位寄存器
    - 暂存寄存器
    - 锁存寄存器
  - 存储器类 

##  <span style="color: silver;">基本<span style="color: green;">结构  

###  <span style="color: silver;">CPU内部 <span style="color: LimeGreen;">单</span><span style="color: Gold;">总线</span>方式  

>pro：数据通路中的部件及连接方式（2013、2015、2022）  

- 单总线结构的数据通路
  - 定义
    - 将ALU及所有寄存器都连接到一条内部公共总线上
  - 特点
    - 结构简单
    - 性能较低
      - 原因：数据传输存在较多的冲突现象
  - 注意事项
    - 此总线在CPU内部
    - 不要与系统总线混淆
      - 系统总线用于连接CPU、存储器和外设
- 图5.8所示为单总线的数据通路和控制信号
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0161e7b16de00d520d62405d382e730a37430111a550273cdc1cb28934a907c8.jpg)  
图5.8单总线的数据通路和控制信号  

>pro：数据通路中的三态门及其作用（2015）  

- 在图5.8中：
  - GPRs为通用寄存器组
    - rs、rd分别为所读、写的通用寄存器的编号

  - 暂存器
    - Y为暂存器
    - Z为暂存器

  - FR为标志寄存器
    - 用于存放ALU产生的标志信息

  - 控制信号（带箭头的虚线）
    - 写入控制
      - 字母加"in"表示该部件充许写入
      - 例如：MDRin表示内部总线上信息写入MDR
    - 输出控制  
      - 字母加"out"表示该部件充许输出
      - 例如：MDRout表示MDR的内容送入内部总线

  - 三态门连接
    - 能输出到总线的部件均通过三态门与内部总线相连
    - 用途：控制该部件与内部总线之间数据通路的连接与断开
>attention:  
- 单周期处理器（$\mathrm{CPI}=1$）不能采用单总线方式
  - 原因：
    - 单总线将所有寄存器都连接到一条公共总线上
    - 一个时钟内只允许一次操作
    - 因此无法完成一条指令的所有操作
###  <span style="color: silver;">CPU内部<span style="color: SlateBlue;">多</span>总线方式  

- CPU内部有两条或更多的总线时→双总线结构或多总线结构
  - 结构特点
    - 将所有寄存器的输入端和输出端都连接到多条公共通路上
  - 与单总线对比
    - 单总线特点
      - 一个时钟内只充许传送一个数据
      - 指令执行效率很低
    - 多总线优势
      - 可同时在多个总线上传送不同的数据
      - 提高指令执行<span style="color: LightSkyBlue;">效率</span>
>pro：单周期CPU的特点（2016）  

### <span style="color: gray;">专用</span><span style="color: silver;">数据通路方式  

- 根据指令执行过程中的数据和地址的流动方向安排连接电路
  - 特点：
    - 避免使用共享的总线
    - 性能较高
    - 硬件量大
> attention
- 总线分类：
  - 内部总线
    - 连接CPU内部各寄存器及运算部件之间的总线
  - 系统总线
    - 连接同一台计算机系统的各部件之间的总线
    - 包括：CPU、内存和各类I/O接口
## ~ <span style="color: silver;"><span style="color: green;">操作</span>举例  

- 总线是一组共享的传输信号线
  - 它不能存储信息
  - 任一时刻也只能有一个部件把信息送到总线上

<span style="font-size: 14px;">以图5.8所示的单总线数据通路为例
- 常见操作的流程及控制信号

>pro：指令执行的节拍及有效控制信号（2009、2015）：指令在取数和执行阶段所用到的部件（2019）  

###  <span style="color: silver;">通用<span style="color: LimeGreen;">R</span>之间传送<span style="color: LightSkyBlue;">数据  

- 寄存器和总线之间的控制信号
  - 两种控制信号
    - Rin信号
      - 功能：控制将总线上的信息存到寄存器R中
    - Rout信号
      - 功能：控制将寄存器R的内容送至总线
  - 操作示例：将PC内容送至MAR
    - 流程及控制信号
      - (PC)→MAR
      - PC out MARin
      - PC内容→MAR

###  <span style="color: silver;">从<span style="color: Gold;">主</span><span style="color: LimeGreen;">存</span>  <span style="color: GreenYellow;">读取</span>数据  

>pro：取指令阶段所需时钟周期分析（2022）  

- 从主存中读取的信息可能是数据或指令
- 以CPU从主存中取指令为例，说明数据在单总线数据通路中的传送过程：
  - 实现该操作的流程及控制信号：
    - 第一步：
      - （PC）→MAR
      - PC out MARin
      - 现行指令地址→MAR
      - 需要1个时钟周期
    - 第二步：
      - MEM（MAR)→MDR
      - （PC)+1→PC
      - MDRin有效
      - CU发出读命令
      - 取出指令后PC+1
      - 需要1个主存周期
    - 第三步：
      - (MDR）→IR 
      - MDR out IR in
      - 现行指令→IR
      - 需要1个时钟周期
###  <span style="color: silver;">将数据 <span style="color: black;">写入</span> <span style="color: Gold;">主<span style="color: LimeGreen;">存  

- 将寄存器R1的内容写入寄存器R2所指的主存单元：
  - 步骤1：将R1内容送入MDR
    - 控制信号：R1 out MDR in
    - 操作：(R1)→MDR
  - 步骤2：将R2内容送入MAR
    - 控制信号：R2 out MAR in
    - 操作：(R2)→MAR
  - 步骤3：将MDR内容写入主存
    - 控制信号：MDR out有效，CU发出写命令
    - 操作：MDR→MEM(MAR)
###  <span style="color: silver;">执行 <span style="color: LimeGreen;">算术</span>或<span style="color: Gold;">逻辑</span>运算  

> pro: ALU中设置暂存器的原因（2015、2022）  
  - 在单总线数据通路中：
    - 每一时刻总线上只有一个数据有效
    - ALU运算的特殊要求：
      - ALU是无存储功能的组合逻辑元件
      - 执行运算时需要两个输入端同时有效
      - 解决方案：
        - 第一个操作数：经内部总线送入暂存器Y保存，Y的内容在ALU左输入端始终有效
        - 第二个操作数：经内部总线直接送到ALU右输入端
      - ALU输出的特殊处理：
        - 不能直接与总线相连
        - 原因：输出会通过总线反馈到输入端，影响运算结果
        - 解决方案：将运算结果暂存在暂存器乙中

  - 加法指令ADDACC，R1的执行过程：
    - 功能：将ACC的内容和R1的内容相加并写回ACC
    - 执行步骤：
      - 第一步：
        - 操作：(R1)→Y
        - 控制信号：Rl out Yin
        - 作用：操作数→Y
      - 第二步：
        - 操作：(ACC) $^+$ (Y）→Z
        - 控制信号：ACC out ALU in，CU ALU
        - 作用：结果→Z
      - 第三步：
        - 操作：(Z)→ACC
        - 控制信号：Z out ACC in
        - 作用：结果→ACC

>pro：分析减法和自增指令执行所需的时钟周期数（2015）  

- 以上3步不能同时执行，否则会引起总线冲突，因此该操作需要3个时钟周期  

###  <span style="color: silver;">修改<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>的值  

- 转移指令的作用：
  - 通过修改程序计数器PC的值实现程序的跳转

- 转移指令JMPaddr的操作：
  - 假设转移指令为JIMPaddr：
    - addr是目标转移地址
  - 操作流程：
    - 将指令寄存器IR中的地址字段写入PC
  - 控制信号：
    - Ad(IR)→PC
    - IR out
    - PC in

- 数据通路结构的影响：
  - 直接影响CPU内各种信息的传送路径
  - 数据通路不同：
    - 指令执行过程的微操作序列安排也不同
    - 影响微操作信号形成部件的设计
</ul>

#  <span style="color: Gold;">C</span><span style="color: silver;">U'功能和工作原理  

##  <span style="color: LimeGreen;">结构</span> <span style="color: silver;">和功能  

###  <span style="color: LimeGreen;">连接 <span style="color: silver;">关系
- 五大功能部件及其连接关系(figure 5.9)
  - 通过<span style="color: LightSkyBlue;">D</span>B <span style="color: DarkRed;">A</span>B  <span style="color: Gold;">C</span>B 连接在一起
  - <span style="font-size: 14px;">  点画线框内的是 <span style="color: Gold;">C</span>U

####  <span style="color: silver;">连接关系
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
    - ![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.58hfcnfphn.webp)  
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

###  <span style="color: silver;">基本概念
- 硬布线控制器基本特征：
  - 由复杂的组合逻辑<u>门电路</u>和<u>触发器</u>构成
  -  即<span style="color: LimeGreen;">组合</span><span style="color: Gold;">逻辑</span>控制器

- 工作原理：
  - 根据以下因素发送微操作控制信号：
    - 指令要求
    - 当前时序
    - 内外部状态
  - 控制信号发送遵循时间顺序
###  <span style="color: silver;"> <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">单元</span>结构
- <span style="color: LightSkyBlue;">指令</span> <span style="color: LimeGreen;">操作</span>码
  - 决定CU发出不同控制信号的关键
    - 通过译码电路将n位操作码产生2^n个输出
      - 每种~<span style="color: gray;">对应</span>一个Output送至CU

![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.26ljcg4y79.webp) 
图5.10带指令译码器和节拍输入的控制单元框图  

### <span style="color: silver;"> <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">单元</span><span style="color: gray;">输入</span>信号
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

###   <span style="color: Gold;">特点
- 优点：
  - 速度 <span style="color: black;">快</span>，主要取决于电路延迟
  - 适用于<span style="color: gray;">高速</span>计算机CPU和RISC架构
- 缺点：
  - 控制信号实现复杂
  - 修改或增加指令需重新设计电路
  - 指令系统越全，电路越庞杂
  - 调试困难
</ul>

## <span style="color: SlateBlue;">微</span><span style="color: LightSkyBlue;">程序</span> <span style="color: silver;">控制器  
<ul>

- 实现方式：
  - 采用 <span style="color: Gold;">存储</span>逻辑实现
- 实现原理：
  - 将微操作信号<span style="color: LightSkyBlue;">代码</span> <span style="color: LimeGreen;">化</span>
  - 每条机器指令转化为一段微程序
  - 将微程序存入控制存储器中
- 控制信号生成：
  - 微操作控制信号由微指令产生
###  <span style="color: silver;">基本概念  
<ul>

- 设计思想：
  - 机器指令与微程序的关系：
    - 每条机器指令对应一个微程序
  - 微程序的组成：
    - 由若干条微指令构成
    - 每条微指令可对应一个或多个微操作命令
  - 指令执行过程：
    - 本质是执行对应微程序的过程
  - 存储位置：
    - 所有微程序存放在控制存储器中
  - 应用现状：
    - 目前大多数计算机都采用此技术
####  <span style="color: silver;"><span style="color: purple;">微</span><span style="color: LightSkyBlue;">命令</span>与微 <span style="color: LimeGreen;">操作
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

#### <span style="color: silver;"><span style="color: purple;">微</span><span style="color: RoyalBlue;">指令</span>与微$T$
- 微指令组成：
  - 操作控制字段（微操作码字段）：产生操作控制信号
  - 顺序控制字段（微地址码字段）：控制下一条微指令地址
- 微周期：
  - 取出并执行一条微指令所需的全部时间
  - 通常为一个时钟周期

####  <span style="color: silver;"> <span style="color: Gold;">主</span><span style="color: orange;">M</span>与控制M
>pro：主存储器和控制存储器的区别（2017）  
- 主M：
  - 用途：存放程序和数据
  - 位置：CPU外部
  - 实现：用RAM
- 控制M：
  - 用途：存放微程序
  - 位置：CPU内部
  - 实现：用ROM
  - 单元地址称为微地址

####  <span style="color: silver;">程序与<span style="color: purple;">微</span>程序
- 程序：
  - 定义：指令的有序集合
  - 目的：完成特定功能
  - 编制者：软件设计人员
  - 存储位置：
    - 主存
    - 辅存
- 微程序：
  - 定义：<u>微指令</u>的有序集合
  - 功能：
    - 描述机器指令
    - 是指令的实时解释器
  - 编制者：计算机设计者
  - 存储位置：控制存储器
  - 特点：对程序员透明
####   <span style="color: silver;"><span style="color: LimeGreen;">R</span>区分
- 地址寄存器（MAR）
  - 功能：存放主存读/写地址

- 微指令地址寄存器（μPC或CMAR）
  - 功能：存放待执行微指令的微地址

- 指令寄存器（IR）
  - 功能：存放从主存读出的指令

- 微指令寄存器（μIR或CMIDR）
  - 功能：存放从控制存储器读出的微指令</ul>

### <span style="color: Goldenrod;">组成</span> <span style="color: silver;">和工作过程  
<ul>

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

![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.86tph81sgb.webp) 
图5.11微程序控制器的基本结构  

#### 工作过程
- 执行机器指令的过程：
  1. 执行取指令公共操作：
     - 将取指微程序入口地址送入μPC
     - 从 <span style="color: Gold;">C</span><span style="color: gray;">M</span>读出微指令送入μIR
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
</ul>

###  <span style="color: silver;"><span style="color: deepskyblue;">编码</span>方式  
<ul>

- 目的：
  - 保证速度的情况下缩短微指令字长
- 作用：
  - 对微指令控制字段编码
  - 形成控制信号

####  <span style="color: silver;"><span style="color: gray;">直接</span>~
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

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c6e197e941e2f1058a37b511cbaa37823f47acc90dd408d7e4f2e9e15c655007.jpg)  
图5.12直接编码方式  
####  <span style="color: LightSkyBlue;">字段</span><span style="color: gray;">直接~
>pro：字段直接控制的编码方法（2012）  
- 基本方法：
  - 操作控制字段分成<span style="color: gray;">若干</span>小字段
    - <span style="font-size: 12px;">将整个操作控制字段划分为多个独立的小字段
  -  <span style="color: Gold;">互斥</span>性微命令在<span style="color: gray;">同一</span>字段
      - <span style="font-size: 12px;">不能同时执行的微命令放在一个字段中
  - <span style="color: gray;">相容</span>性微命令在<u>不同</u>字段
    - <span style="font-size: 12px;">可以同时执行的微命令分配到不同字段中
  - 每个字段 <span style="color: LimeGreen;">独立</span>编码
    - <span style="font-size: 12px;">各个字段可以单独进行编码
    - <span style="font-size: 12px;">编码方式可以不同
  - 各字段编码含义 <span style="color: GreenYellow;">单独</span>定义
    - 每个字段的编码都有其特定的含义
    - 编码含义相互独立


![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8f2b917f211c35fb07f59a18310c4809c207a77d2f9e952f169ab68cecd9625.jpg)  
图5.13字段直接编码方式  

- 分段原则：
  - 命令:
    - 互斥性微命令分在同一段
    - 相容性微命令分在不同段
  - 每段信息位<u>不能太多</u>
  - 每段留出<span style="color: gray;">不操作</span>状态（通常000）

#### <span style="color: LightSkyBlue;">字段</span> <span style="color: silver;">间接~
- 特点：
  - 一个字段的微命令由<span style="color: gray;">另一字段</span>解释
  - 非直接译码发出微命令
  - <span style="color: gray;">隐式</span>编码
- 优缺点：
  - 优点：进一步缩短微指令字长
  - 缺点：<span style="color: LightSkyBlue;">削弱</span>并行控制能力
  - 用途：作为字段直接编码的辅助手段
</ul>

###  <span style="color: silver;"><span style="color: DarkRed;">地址</span>形成方式  

后继微地址的形成主要有以下几个基本类型：  
<ul>

####  <span style="color: silver;">后<span style="color: purple;">继</span>地址字段指出
- 在微指令格式中设置一个后继地址字段
  - 用于直接指示<span style="color: gray;">下一条</span>微指令的<span style="color: DarkRed;">地址</span>
- 由微指令的后继地址字段直接指出后继微指令的地址
  - 直接从字段中获取地址信息
  - 无需额外计算或转换
- 也称断定方式
  - 因为地址是确定的
  - 不依赖于其他条件
####  <span style="color: silver;">由 机器<span style="color: LightSkyBlue;">指令</span>操作码形成

  - 机器指令从指令寄存器取出
  - 通过微地址形成部件处理：
    - 输入：操作码
    - 输出：对应机器指令微程序的首地址
####  <span style="color: silver;">增量 <span style="color: LimeGreen;">计数器</span>法
- 即 $(\mu\mathrm{PC})+1{\rightarrow}\mu\mathrm{PC}$
- 适用于后继微指令地址是连续的情况

####  <span style="color: Gold;">标志</span> <span style="color: silver;">决定分支转移
- 根据各种 <span style="color: Gold;">标志</span>决定下一条微指令分支转移的地址

#### <span style="color: green;">硬件</span> <span style="color: silver;">直接产生
- 电源加电后，第一条微指令的地址可由专门的<span style="color: green;">硬件</span><span style="color: gray;">电路</span>产生
- 并送至 $\mu\mathrm{PC}$
- 这个地址即为取指周期微程序的入口地址
</ul>

### <span style="color: LightSkyBlue;">格式</span>  

微指令格式与微指令的 <span style="color: deepskyblue;">编码</span>方式有关， 分为:
- 水平型~ 和 垂直型~

>pro： 微指令后继地址字段位数与微指令条数的关系（2014）  
<ul>

#### <span style="color: LightSkyBlue;">水平</span> <span style="color: silver;">型~
- 编码方式特点：
  - 水平型微指令包含以下编码方式：
    - <span style="color: gray;">直接</span>编码
    - <span style="color: LightSkyBlue;">字段</span><span style="color: gray;">直接</span>编码 
    - <span style="color: LightSkyBlue;">字段</span>间接编码
- 基本指令格式：
  - 格式结构：
    - 如图
  - 控制信号编码：
    - 每<span style="color: gray;">一位</span> <span style="color: Gold;">对应</span><span style="color: gray;">一个</span>控制信号
    - 信号状态：
      - 1表示有输出
      - 0表示无输出
  - 执行特点：
    - <span style="color: gray;">单条</span>微指令可同时：
      - 定义<span style="color: gray;">多个</span>微命令
      - 执行多个<span style="color: green;">并行</span>操作

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b2aedaa58c557759dbd6b0fe7d9c754a7d34a84fc4317965518d9de55c2fb6a1.jpg)  

- 优缺点：
  - 优点：微程序短，并行能力强，执行速度快
  - 缺点：微指令长，编写微程序较<span style="color: gray;">麻烦

#### <span style="color: green;">垂直</span> <span style="color: silver;">型~
- 基本特点：
  - 编码方式：
    - 采用类似<span style="color: gray;">机器</span><span style="color: LightSkyBlue;">指令</span>操作码的方式
  - 微指令结构：
    - 在微指令字中设置微操作码字段
    - 基本格式参照图5.15
  - 执行特点：
    - 一条垂直型微指令通常只能：
      - 定义 执行 <span style="color: black;">一种</span>微命令

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7065d0c6793931c03ff4fb46419e81a29e8a05e3dc173555b1f656c5aa397918.jpg)  

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

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5758d88c281f323689f1a57cbe9859540b34d296985c6fd404c91be129bd19f0.jpg)
</ul>
</ul>
</span>
