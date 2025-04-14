---
html:
  	toc: true
print_background: true
---

<span style="color: silver;">

# <span style="color: silver;">above

<ul>

## <span style="color: silver;">【考纲内容】  

<ul>

（一）CPU的____和____  

（二）____执行过程  

（三）数据通路的____和____  

（四）____的____和工作原理  

（五）异常和中断机制  
- ____和____的基本概念：异常和中断的____；异常和中断的____与____  

（六）指令流水线  
- 指令流水线的____：指令流水线的____：____冒险、____冒险和____冒险的处理；____和____流水线的基本概念  

（七）多处理器基本概念  
- ____、____、____、____处理器的基本概念：____多线程的基本概念：____（multi-core）处理器的基本概念：____内存多处理器（SMP）的基本概念  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>功能</li>
    <li>基本结构</li>
    <li>指令</li>
    <li>功能</li>
    <li>基本结构</li>
    <li>控制器</li>
    <li>功能</li>
    <li>异常</li>
    <li>中断</li>
    <li>分类</li>
    <li>检测</li>
    <li>响应</li>
    <li>基本概念</li>
    <li>基本实现</li>
    <li>结构</li>
    <li>数据</li>
    <li>控制</li>
    <li>超标量</li>
    <li>动态</li>
    <li>SISD</li>
    <li>SIMD</li>
    <li>MIMD</li>
    <li>向量</li>
    <li>硬件</li>
    <li>多核</li>
    <li>共享</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">【复习提示】  

<ul>

- 中央处理器（CPU）概述：
  - 位于计算机的____。
    - 本书的____

- CPU内部结构分析：
  - ____的分析。
  - 指令执行阶段的____与____信号的安排。
  - 流水线____与____分析。

- 易出综合题的内容：
  - ____的分析。
  - 指令执行阶段的____与____信号的安排。
  - 流水线____与____分析。

- 易出选择题的内容：
  - 各种____的特点。
  - 各种指令执行的____与____。
  - ____的相关概念。
  - ____的相关概念。

学习本章时思考的问题：

  1. 指令和数据均存放在内存中，计算机如何区分它们？
     - 从____和____上区分指令和数据。

  2. ____周期、____周期和____周期的概念及其关系：
     - 指令周期：执行一条指令所需的____时间。
     - 机器周期：完成一个____操作所需的时间。
     - 时钟周期：计算机____的倒数，是计算机的____时间单位。
     - 关系：指令周期由多个____周期组成，机器周期由多个____周期组成。

  3. ____的概念及其与普通指令的关系：
     - 微指令：构成____指令的基本元素，用于控制CPU的____。
     - 关系：微指令是更底层的____指令，多条微指令组成一条____指令。

  4. ____的概念及其优势：
     - 指令流水线：将指令执行过程分解为多个____，实现指令____执行。
     - 优势：提高CPU的____和指令执行____，提升系统____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中心</li>
    <li>难点</li>
    <li>数据通路</li>
    <li>节拍</li>
    <li>控制</li>
    <li>技术</li>
    <li>性能</li>
    <li>数据通路</li>
    <li>节拍</li>
    <li>控制</li>
    <li>技术</li>
    <li>性能</li>
    <li>寄存器</li>
    <li>周期</li>
    <li>特点</li>
    <li>控制器</li>
    <li>流水线</li>
    <li>时间</li>
    <li>空间</li>
    <li>指令</li>
    <li>机器</li>
    <li>时钟</li>
    <li>全部</li>
    <li>基本</li>
    <li>主频</li>
    <li>基本</li>
    <li>机器</li>
    <li>时钟</li>
    <li>微指令</li>
    <li>机器</li>
    <li>操作</li>
    <li>控制</li>
    <li>机器</li>
    <li>指令流水线</li>
    <li>阶段</li>
    <li>重叠</li>
    <li>利用率</li>
    <li>效率</li>
    <li>性能</li>
  </ul>
</details>
</div>

</ul>

# <span style="color: silver;">CPU的 <span style="color: Gold;">功能</span> 基本 <span style="color: LimeGreen;">结构  

<ul>

## <span style="color: Gold;">功能  

<ul>

  - 基本<span style="color: Goldenrod;">组成</span>部分
    - 运算器<span style="color: LightSkyBlue;">A</span><span style="color: LimeGreen;">L</span>U
      - 负责对数据进行____
    - 控制器<span style="color: Gold;">C</span>U
      - 负责____并____计算机各部件执行程序的____序列
  - 具体 <span style="color: Gold;">功能</span>
    - ____控制
      - ____指令（取指）
      - ____指令
      - ____指令
      - 实现程序的____控制
    - ____控制
      - 产生完成指令所需的____信号
      - 将____信号送至相应部件
      - 确保部件按指令要求____
    - ____控制
      - 控制____信号的出现时间
      - 控制____信号的持续时间
      - 控制____信号的时间顺序
    - 数据____
      - 执行____运算
      - 执行____运算
    - ____处理
      - 处理运行中的____情况
      - 处理____请求

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>加工</li>
    <li>协调</li>
    <li>控制</li>
    <li>指令</li>
    <li>指令</li>
    <li>取</li>
    <li>分析</li>
    <li>执行</li>
    <li>顺序</li>
    <li>操作</li>
    <li>操作</li>
    <li>操作</li>
    <li>执行</li>
    <li>时间</li>
    <li>操作</li>
    <li>操作</li>
    <li>操作</li>
    <li>加工</li>
    <li>算术</li>
    <li>逻辑</li>
    <li>中断</li>
    <li>异常</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">CPU的基本 <span style="color: LimeGreen;">结构  

<ul>

<span style="font-size: 14px;">[也可将CPU分为____（见5.3节）和____部件两大组成部分]

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4b9660fe8f486ff3097ffb4d9a7cf8d43ce70d8af78ba631a7eee723b6a34fa0.jpg)  
图5.1中央处理器的组成  

### <span style="color: LimeGreen;">运算</span><span style="color: silver;">器<span style="color: LightSkyBlue;">A</span><span style="color: LimeGreen;">L</span>U

<ul>

- 运算器主要组成：
  - ____逻辑单元（ALU）
  - ____寄存器
  - ____寄存器（ACC）
  - ____寄存器组（GPRs）
  - ____状态字寄存器（PSW）
  - ____寄存器
  - ____（CT）
- 主要功能：
  - 根据____送来的命令，对数据执行：
    - ____运算（加、减、乘、除）
    - ____运算（与、或、非、异或、移位、求补等）
    - ____测试（用于设置ZF、SF、OF和CF等标志位，作为条件转移的判断条件）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据通路</li>
    <li>控制</li>
    <li>算术</li>
    <li>暂存</li>
    <li>累加</li>
    <li>通用</li>
    <li>程序</li>
    <li>移位</li>
    <li>计数器</li>
    <li>控制器</li>
    <li>算术</li>
    <li>逻辑</li>
    <li>条件</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">控制<span style="color: silver;">器 <span style="color: Gold;">C</span>U  

<ul>

- 控制器主要组成：
  - ____计数器（PC）
  - ____寄存器（IR）
  - ____译码器（ID）
  - ____地址寄存器（MAR）
  - ____数据寄存器（MDR）
  - ____电路
  - ____操作信号发生器
- 主要功能：
  - ____指令，每条指令的执行是由控制器发出的一组____操作实现的
- 工作原理：
  - 形成____信号：
    - 根据以下要素：
      - ____操作码
      - 指令的____步骤（微命令序列）
      - ____信号
  - 执行结果：
    - 各硬件系统在____信号下协同运行
    - 产生预期的____结果
  - 系统指挥：
    - 作为整个系统的____中枢
    - 控制以下部件形成有机整体：
      - ____
      - ____
      - ____/____设备
    - 根据____要求指挥全机协调工作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>程序</li>
    <li>指令</li>
    <li>指令</li>
    <li>存储器</li>
    <li>存储器</li>
    <li>时序</li>
    <li>微</li>
    <li>执行</li>
    <li>微</li>
    <li>控制</li>
    <li>指令</li>
    <li>执行</li>
    <li>条件</li>
    <li>控制</li>
    <li>执行</li>
    <li>指挥</li>
    <li>运算器</li>
    <li>存储器</li>
    <li>输入</li>
    <li>输出</li>
    <li>指令</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">CPU的 <span style="color: LimeGreen;">R  

<ul>

>pro：汇编程序员可见的____（2010、2015、2021）  

- CPU按汇编语言（或机器语言）程序是否 <span style="color: black;">可</span><span style="color: green;">访问</span>，分为两类：
  - 用户 <span style="color: black;">可</span><span style="color: LimeGreen;">见</span>____
    - 特点：
      - 可对这类____编程
      - 可通过使用这类____减少对主存储器的____次数
    - 包括：
      - ____寄存器组（含基址/变址寄存器）
      - ____状态字寄存器
      - ____计数器
      - ____寄存器
      - ____寄存器
  - 用户<span style="color: purple;">不</span><span style="color: black;">可</span><span style="color: LimeGreen;">见</span>____
    - 特点：
      - 对用户是____的
      - 不可对这类____编程
      - 被____部件使用，以控制CPU的____
    - 包括：
      - ____地址寄存器
      - ____数据寄存器
      - ____寄存器
      - ____寄存器
>pro：CPU中各种____的作用（2013）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>寄存器</li>
    <li>寄存器</li>
    <li>寄存器</li>
    <li>寄存器</li>
    <li>访问</li>
    <li>通用</li>
    <li>程序</li>
    <li>程序</li>
    <li>累加</li>
    <li>移位</li>
    <li>寄存器</li>
    <li>透明</li>
    <li>寄存器</li>
    <li>控制</li>
    <li>操作</li>
    <li>存储器</li>
    <li>存储器</li>
    <li>指令</li>
    <li>暂存</li>
    <li>寄存器</li>
  </ul>
</details>
</div>

### <span style="color: silver;"><span style="color: LightSkyBlue;">A</span><span style="color: LimeGreen;">L</span>U中的 <span style="color: LimeGreen;">R  

<ul>

#### <span style="color: silver;">通用<span style="color: LimeGreen;">R</span>组（GPRs）

<ul>

- 功能：
  - 存放____：
    - ____操作数
    - ____操作数
    - ____结果
  - 存放____信息：
    - 常见寄存器如：
      - ____
      - ____
      - ____
      - ____
      - ____
- 访问方式：
  - 指令中指定寄存器 <span style="color: black;">____</span>
  - 通过____ 确定访问的具体寄存器
- SP特点：
  - ____指针
  - 指示____地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作数</li>
    <li>源</li>
    <li>目的</li>
    <li>中间</li>
    <li>地址</li>
    <li>AX</li>
    <li>BX</li>
    <li>CX</li>
    <li>DX</li>
    <li>SP</li>
    <li>编号</li>
    <li>编号</li>
    <li>堆栈</li>
    <li>栈顶</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;"><span style="color: GreenYellow;">累加</span><span style="color: LimeGreen;">R</span>（ACC）

<ul>

- 功能：
  - ____寄存器
  - 存储：
    - 暂时存放____运算的结果

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>通用</li>
    <li>ALU</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;"><span style="color: green;">移</span>位~（<span style="color: green;">S</span>R）

<ul>

- 功能：
  - 存储：
    - 可用来存放____
  - ____操作：
    - 在____信号作用下
    - 寄存器中的数据可：
      - 向____移位
      - 向____移位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作数</li>
    <li>移位</li>
    <li>控制</li>
    <li>左</li>
    <li>右</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">暂 <span style="color: Gold;">存</span>~

<ul>

- 功能：
  - ____数据：
    - 来源：
      - ____总线
      - ____寄存器
    - 目的：在取出下一个操作数时将其同时送入____
  - 可见性：
    - 对应用程序员是____的（不可见）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>暂存</li>
    <li>数据</li>
    <li>通用</li>
    <li>ALU</li>
    <li>透明</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">程序</span> <span style="color: Gold;">状态</span>字~（<span style="color: LightSkyBlue;">P</span><span style="color: Gold;">S</span>W）

<ul>

- 功能和组成：
  - 保留 由____/____运算指令 或 ____指令 的运行结果 而建立的各种 <span style="color: Gold;">____</span><span style="color: gray;">____</span>
  - 包含的标志位：
    - <span style="color: LimeGreen;">____</span>标志（<span style="color: LimeGreen;">O</span>F）
    - <span style="color: Gold;">____</span>标志（<span style="color: Gold;">S</span>F）
    - <span style="color: LightSkyBlue;">____</span>标志（<span style="color: LightSkyBlue;">Z</span>F）
    - <span style="color: green;">____</span>标志（<span style="color: green;">C</span>F）
  - 存储方式：
    - 每个标志位由一位____来保存
    - 所有标志位组合在一起构成____状态字

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>算术</li>
    <li>逻辑</li>
    <li>测试</li>
    <li>状态</li>
    <li>信息</li>
    <li>溢出</li>
    <li>符号</li>
    <li>零</li>
    <li>进位</li>
    <li>触发器</li>
    <li>程序</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"> <span style="color: Gold;">C</span>U中的 <span style="color: LimeGreen;">R  

<ul>

>pro：PC和<span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">R</span>的位数与____空间和____字长的关系（2016、2021）  

#### <span style="color: silver;">程序计数器（<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>）

<ul>

- 功能：
  - 指出欲执行____在主存储器中的存放____

- 位数：
  - 当PC和主存储器均按____编址时
  - PC的位数等于主存储器____位数

- 指令获取过程：
  - CPU根据PC的内容从主存储器中取____
  - 取出的____送入指令寄存器

- 自动加1功能：
  - 指令通常____执行
  - PC会自动加____
    - 这里的"1"指一条指令的____数

- 特殊情况：
  - 遇到____类指令时
  - PC的新值由____计算得到

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存储器</li>
    <li>指令</li>
    <li>地址</li>
    <li>字节</li>
    <li>地址</li>
    <li>指令</li>
    <li>指令</li>
    <li>顺序</li>
    <li>1</li>
    <li>字节</li>
    <li>转移</li>
    <li>指令</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">指令~（<span style="color: LightSkyBlue;">I</span>R）

<ul>

- 功能：
  - 用于保存当前正在____的指令
- 规格：
  - IR的位数等于____字长

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>执行</li>
    <li>指令</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">存储器地址~（M<span style="color: DarkRed;">A</span>R）

<ul>

- 存放要访问的 <span style="color: gray;">____</span>单元的<span style="color: DarkRed;">____</span>
- MAR的位数
  - 等于主存储器____线数
  - 反映了最多可____的存储单元的个数

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主memory</li>
    <li>地址</li>
    <li>地址</li>
    <li>寻址</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">存储器数据~（M<span style="color: LightSkyBlue;">D</span>R）

<ul>

- 功能：
  - 存放向 I/O ____' <span style="color: gray;">____</span>
- 规格：
  - MDR的位数等于____字长
- 使用场景：
  - CPU和主存储器交换信息时
    - 需要同时使用____和____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存储器</li>
    <li>信息</li>
    <li>存储</li>
    <li>MAR</li>
    <li>MDR</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: LightSkyBlue;">指令</span>执行过程  

<ul>

## <span style="color: LightSkyBlue;">指令</span> <span style="color: silver;">周期  

<ul>

### <span style="color: silver;">concept

<ul>

- 指令周期
  - 定义：
    - CPU每 <span style="color: black;">____</span>并<span style="color: green;">____</span>一条指令所需的全部____
  - 特点：
    - 不同指令的____周期可能不同
    - 可用<span style="color: gray;">____</span> <span style="color: black;">____</span>T 来表示
      - every指令T内的____T数可以不等

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4cdf5401a046fb5fe39af366d76c0d8889d1154a1965f8d7673571ffd1641a97.jpg)  
图5.2指令T和机器T的关系  
  - （a）定长的机器T
  - （b）不定长的机器T

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>取出</li>
    <li>执行</li>
    <li>时间</li>
    <li>指令</li>
    <li>若干</li>
    <li>机器</li>
    <li>机器</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">不同<span style="color: LightSkyBlue;">指令</span>的$T$ <span style="color: Gold;">特点</span>

<ul>

- 指令周期的类型和特点：
  - 无条件转移指令JMP X：
    - 执行特点：
      - 不需要访问____
      - 只包含____阶段和____阶段
    - 周期构成：
      - ____周期（包括取指和分析）
      - ____周期

  - 间接寻址指令：
    - 操作数获取过程：
      - 第一次访存：获取____地址
      - 第二次访存：获取____
    - 周期构成：
      - ____周期
      - ____周期
      - ____周期
    - 特点：____周期位于取指周期和执行周期之间

  - 带中断的指令执行：
    - 中断检查：
      - CPU在每条指令执行结束前发出____查询信号
      - 发现____请求时进入____响应阶段（中断周期）
    - 完整周期构成：
      - ____周期
      - ____周期
      - ____周期
      - ____周期

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f7ac4456b5579efe301d3c745f4bafd3791739991e765a528a6dd737b49f8fa6.jpg)  
图5.3带有间址周期、中断周期的指令周期  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存</li>
    <li>取指</li>
    <li>执行</li>
    <li>取指</li>
    <li>执行</li>
    <li>有效</li>
    <li>操作数</li>
    <li>取指</li>
    <li>间址</li>
    <li>执行</li>
    <li>间址</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>取指</li>
    <li>间址</li>
    <li>执行</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

>pro：____执行的过程（2011）  

### 指令执行的具体过程

<ul>

- CPU执行指令的过程：
  - <span style="color: LimeGreen;">____</span>指周期
    - 取指令操作
      - 从PC指向的主存单元取出____
      - 将____送至指令寄存器
    - PC更新操作
      - PC加"____"准备下一条指令地址
      - 对于转移指令：PC加"____"后会重新计算并更新PC值
  
  - <span style="color: gray;">____</span>址周期(条件执行)
    - 判断是否需要____寻址
    - 如需要则进入____周期获取操作数的____地址
  
  - <span style="color: green;">____</span>行周期
    - 取____
    - 执行____
    - 存储____
  
  - 中<span style="color: Gold;">____</span>周期(条件执行)
    - 检测是否有____请求
    - 如有____请求则：
      - 关闭____
      - 保存____
      - 修改PC值为____服务程序入口地址
      - 转向____服务程序执行

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>取</li>
    <li>指令</li>
    <li>指令</li>
    <li>1</li>
    <li>1</li>
    <li>间</li>
    <li>间接</li>
    <li>间址</li>
    <li>有效</li>
    <li>执</li>
    <li>操作数</li>
    <li>运算</li>
    <li>操作数</li>
    <li>断</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>断点</li>
    <li>中断</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

>attention:  

<ul>

- 中断周期中的____操作:
  - SP减"1"而不是加"1"
  - 原因:
    - 计算机中的堆栈都是向____地址方向增长
    - 因此进栈时需要减"1"来指向新的____位置

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>进栈</li>
    <li>低</li>
    <li>栈顶</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;"><span style="color: LightSkyBlue;">指令</span>T'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  

<ul>

### <span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  

<ul>

- 数据流
  - 定义：
    - 根据指令要求依次访问的<span style="color: LightSkyBlue;">____</span> <span style="color: LimeGreen;">____</span>
  - 特点：
    - 在指令执行的____阶段，数据序列是不同的
    - 不同指令的____流往往也是不同的

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>序列</li>
    <li>不同</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: green;">取</span><span style="color: LightSkyBlue;">指</span><span style="color: silver;">T  

<ul>

#### <span style="color: silver;">任务

<ul>

- 根据PC中的内容从主存中 <span style="color: black;">____</span><span style="color: LightSkyBlue;">____</span>代码→存放在<span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span>中

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>取出</li>
    <li>指令</li>
    <li>I</li>
    <li>R</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流  

<ul>

- PC中存放的是指令的<span style="color: DarkRed;">____</span>
- 取指令
  - <span style="color: black;">____</span><span style="color: LightSkyBlue;">____</span>代码→存放在<span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span>中
- PC更新
  - PC+____ 
    - 以指向下一条指令

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>地址</li>
    <li>取出</li>
    <li>指令</li>
    <li>I</li>
    <li>R</li>
    <li>1</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流向

<ul>

- PC到存储器的数据流向:
  - <span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span> → MAR → <span style="color: DarkRed;">____</span>bus → <span style="color: Gold;">____</span>

- CU发出读命令的流向:
  - CU读命令 → <span style="color: Gold;">____</span>bus → <span style="color: Gold;">____</span>

- 获取指令的流向:
  - 主存 → <span style="color: LightSkyBlue;">____</span>bus → M<span style="color: LightSkyBlue;">____</span>R → IR（存放指令）

- PC更新流向:
  - CU发出控制信号 → <span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span>+1

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f75084f25f382c3b663c9acfe77f401b2ea0ef4abcdf6fe2e458bbf2de1010ae.jpg)  
图5.4取指周期的数据流  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>P</li>
    <li>C</li>
    <li>地址</li>
    <li>M</li>
    <li>控制</li>
    <li>M</li>
    <li>数据</li>
    <li>D</li>
    <li>P</li>
    <li>C</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;">间<span style="color: DarkRed;">址</span>T

<ul>

#### <span style="color: silver;">任务

<ul>

- 取操作数<span style="color: LightSkyBlue;">____</span><span style="color: DarkRed;">____</span>
- 以一次间址为例
  - step1:
    - 将指令中的____码送到MAR
    - 将MAR中的____码送至地址总线
  - step2:
    - CU向存储器发出____命令
    - 获取____地址
    - 将____地址存至MDR

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>E</li>
    <li>A</li>
    <li>地址</li>
    <li>地址</li>
    <li>读</li>
    <li>有效</li>
    <li>有效</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">~'<span style="color: LightSkyBlue;">数据</span><span style="color: silver;">流向

<ul>

- Ad(IR)(或MDR)到存储器的数据流向:
  - Ad(<span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span>)(或MDR) → M<span style="color: DarkRed;">____</span>R → <span style="color: DarkRed;">____</span>bus → <span style="color: Gold;">____</span>
- CU发出读命令的流向:
  - CU读命令 → <span style="color: Gold;">____</span>bus → <span style="color: Gold;">____</span>
- 获取有效地址的流向:
  - <span style="color: Gold;">____</span> → <span style="color: LightSkyBlue;">____</span>bus → MDR(存放有效地址)

<span style="font-size: 14px;">[Ad（IR）表示取出IR中存放的指令字的地址字段。

![image](https://bluejedis.github.io/picx-images-hosting/test/image.2yyeudx8js.webp)  
图5.5一次间址周期的数据流  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>I</li>
    <li>R</li>
    <li>A</li>
    <li>地址</li>
    <li>M</li>
    <li>控制</li>
    <li>M</li>
    <li>M</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: LimeGreen;">执行</span><span style="color: silver;">T

<ul>

- 任务
  - 取____
  - 根据IR中的指令字的____码通过ALU操作产生执行____
- 特点
  - 不同指令的____周期操作不同
  - 因此没有统一的____流向

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作数</li>
    <li>操作</li>
    <li>结果</li>
    <li>执行</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">中断</span> <span style="color: silver;">T  

<ul>

#### <span style="color: silver;">任务

<ul>

- 处理____请求
- 假设程序____存入堆栈中
- 用SP指示____地址
- ____操作是先修改栈顶指针，后存入数据

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>断点</li>
    <li>栈顶</li>
    <li>进栈</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: LightSkyBlue;">数据</span><span style="color: deepskyblue;">流</span><span style="color: green;">向</span>

<ul>

- <span style="color: Gold;">____</span>U控制将 SP-1
  - SP ① M<span style="color: DarkRed;">____</span>R ② <span style="color: DarkRed;">____</span>bus ③ 存储器
- CU发出 <span style="color: LimeGreen;">____</span>命令
  - 写命令 ④ ____总线 ⑤ 存储器
- 程序<span style="color: gray;">____</span>存入存储器
  - PC ⑥ MDR ⑦ ____总线 ⑧ 主存
- <span style="color: Gold;">____</span>U<u>处理</u>中断服务
  - CU(中断服务程序的入口地址) ⑨ PC

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c5e774da7c287935949863c45b6d8ed1c27c81c7ecb099690202cb499289d6e4.jpg)  
图5.6中断周期的数据流

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>C</li>
    <li>A</li>
    <li>地址</li>
    <li>写</li>
    <li>控制</li>
    <li>断点</li>
    <li>数据</li>
    <li>C</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: LightSkyBlue;">指令</span><span style="color: green;">执行</span> <span style="color: silver;">方案  

<ul>

- 一个<span style="color: LightSkyBlue;">____</span>T包括多个执行____
  - 每个步骤完成指令的____功能
  - 几个步骤依次执行完成指令的____功能
- 指令执行步骤的安排方案
  - 不同处理器采用不同方案
    - ____周期处理器
    - ____周期处理器
    - ____线处理器
>pro：单周期和多周期CPU的____（2020）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>步骤</li>
    <li>一部分</li>
    <li>全部</li>
    <li>单</li>
    <li>多</li>
    <li>流水</li>
    <li>CPI</li>
  </ul>
</details>
</div>

### <span style="color: silver;"> <span style="color: LimeGreen;">单</span>T处理器  

<ul>

>pro：单周期CPU的____（2016）  

#### <span style="color: Gold;">特点

<ul>

- 指令执行特点
  - 所有指令使用 <span style="color: black;">____</span> <span style="color: LimeGreen;">____</span>时间完成
    - 每条指令在____时钟周期内完成
    - <span style="color: LimeGreen;">____</span>P<span style="color: LightSkyBlue;">____</span> = 1
  - 指令执行方式
    - <span style="color: Gold;">____</span>行执行
    - 下一条指令必须等待前一条指令____才能开始
  - 时钟周期限制
    - 由执行时间最长的____决定
    - 影响
      - 较短指令也必须使用相同的较长____
      - 导致系统整体运行____降低

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>特点</li>
    <li>相同</li>
    <li>执行</li>
    <li>一个</li>
    <li>C</li>
    <li>I</li>
    <li>串</li>
    <li>执行完成</li>
    <li>指令</li>
    <li>周期</li>
    <li>速度</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">多</span>周期处理器  

<ul>

#### 特征

<ul>

对不同类型的指令选用不同的执行____
- 指令执行T分配
  - 根据指令需要分配相应数量的____
  - 特点：
    - 不同指令可使用不同数量的____周期执行 (CPI>1)
    - 不要求所有指令执行____相同
- 执行方式
  - 指令之间采用 <span style="color: Gold;">____</span>行执行
  - 一条指令执行完成后才开始____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>步骤</li>
    <li>周期</li>
    <li>时钟</li>
    <li>时间</li>
    <li>串</li>
    <li>下一条</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: LightSkyBlue;">流水</span><span style="color: Gold;">线</span>处理器  

<ul>

#### 执行方式

<ul>

采用指令之间 <span style="color: green;">____</span>执行的方案
- 追求的目标
  - 力争在每个时钟周期完成一条指令的____过程
  - 只在理想情况下才能达到____=1
- 特点
  - 每个时钟周期启动一条____
  - 多条指令____运行
    - 不同指令同时处于不同____步骤

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>并行</li>
    <li>执行</li>
    <li>CPI</li>
    <li>指令</li>
    <li>并行</li>
    <li>执行</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span><span style="color: gray;">通路</span>的功能和基本结构  

<ul>

## <span style="color: Gold;">功能  

<ul>

- CPU的组成
  - 主要组成部分
    - <span style="color: silver;"><span style="color: LightSkyBlue;">____</span><span style="color: gray;">____</span>
    - <span style="color: Gold;">____</span>部件
  - 发展特点
    - 随着技术发展
      - 更多功能逻辑被集成到____芯片中
    - 不论内部结构多复杂
      - 仍主要由____和____部件构成
>pro：数据通路的组成____（2017、2021）

- <span style="color: silver;"><span style="color: LightSkyBlue;">____</span><span style="color: gray;">____</span>
  - 定义
    - 数据在指令执行过程中的____及其经过的部件
  - 组成<span style="color: gray;">____</span>
    - ____
    - ____寄存器
    - ____寄存器
    - ____和____处理逻辑
  - 功能特点
    - 描述信息流动的____、中间经过的部件和____
  - 控制特性
    - 由____部件控制
    - 根据指令功能生成____信号

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>通路</li>
    <li>控制</li>
    <li>CPU</li>
    <li>数据通路</li>
    <li>控制</li>
    <li>部件</li>
    <li>数据</li>
    <li>通路</li>
    <li>路径</li>
    <li>部件</li>
    <li>ALU</li>
    <li>通用</li>
    <li>状态</li>
    <li>异常</li>
    <li>中断</li>
    <li>起点</li>
    <li>终点</li>
    <li>控制</li>
    <li>控制</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: Goldenrod;">组成  

<ul>

- 组成数据通路的元件
  - 主要分为两类
    - ____逻辑元件
    - ____逻辑元件
>pro：数据通路中的____逻辑元件和____逻辑元件（2021、2023）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>组合</li>
    <li>时序</li>
    <li>组合</li>
    <li>时序</li>
  </ul>
</details>
</div>

### <span style="color: silver;"> <span style="color: LimeGreen;">组合</span><span style="color: Gold;">逻辑</span>元件（操作元件）  

<ul>

- 组合逻辑元件的特点
  - 输出仅取决于当前____
  - 无____单元和____控制
  - 无____通路
  - 信号____传输

- 常用组合逻辑元件类型
  - ____
  - 算术逻辑单元(____)
  - ____器
  - ____选择器
  - ____门

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/96308c858ff5f7964125d669141286fa1586d651484b7c7042c3ce73a05e35c4.jpg)  
图5.7数据通路中的几种常用组合逻辑元件  

- <span style="color: LimeGreen;">____</span><span style="color: LightSkyBlue;">____</span>器
  - 特点
    - 虚线表示____信号
    - 可用于操作码或地址码____
  - 输入输出关系
    - n位输入对应____种不同组合
    - 有____个不同输出

- 多路选择器(MUX)
  - 控制特性
    - 需要____信号Select
    - 用于确定选择哪个输入被____

- 三态门
  - 基本功能
    - 可视为一种控制____
    - 由____信号EN决定信号线的通断
  - 工作状态
    - EN=1时
      - 三态门被____
      - 输出信号等于____信号
    - EN=0时
      - 输出端呈____态(隔断态) 
      - 所连寄存器与____断开

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>输入</li>
    <li>存储</li>
    <li>时钟</li>
    <li>反馈</li>
    <li>单向</li>
    <li>加法器</li>
    <li>ALU</li>
    <li>译码</li>
    <li>多路</li>
    <li>三态</li>
    <li>译</li>
    <li>码</li>
    <li>控制</li>
    <li>译码</li>
    <li>2^n</li>
    <li>2^n</li>
    <li>控制</li>
    <li>输出</li>
    <li>开关</li>
    <li>控制</li>
    <li>打开</li>
    <li>输入</li>
    <li>高阻</li>
    <li>总线</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: LightSkyBlue;">时序</span> <span style="color: Gold;">逻辑</span> <span style="color: silver;">元件（状态元件）  

<ul>

- 时序电路的特点
  - 输出特性
    - 输出与当前____和以前____都有关
  - 结构特性
    - 包含____信号的记忆单元

- 时序电路的工作条件
  - 时钟要求
    - 必须在<span style="color: gray;">____</span>下工作

- 时序逻辑元件的类型
  - 寄存器类
    - ____寄存器组
    - ____计数器
    - ____寄存器
    - ____寄存器
    - ____寄存器
    - ____寄存器
  - ____类 

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>输入</li>
    <li>输入</li>
    <li>存储</li>
    <li>时钟节拍</li>
    <li>通用</li>
    <li>程序</li>
    <li>状态</li>
    <li>移位</li>
    <li>暂存</li>
    <li>锁存</li>
    <li>存储器</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">基本<span style="color: green;">结构  

<ul>

### <span style="color: silver;">CPU内部 <span style="color: LimeGreen;">单</span><span style="color: Gold;">总线</span>方式  

<ul>

>pro：数据通路中的____及____方式（2013、2015、2022）  

- 单总线结构的数据通路
  - 定义
    - 将ALU及所有寄存器都连接到一条内部____总线上
  - 特点
    - 结构____
    - 性能较低
      - 原因：数据传输存在较多的____现象
  - 注意事项
    - 此总线在CPU____
    - 不要与____总线混淆
      - 系统总线用于连接CPU、存储器和____
- 图5.8所示为单总线的数据通路和____信号
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0161e7b16de00d520d62405d382e730a37430111a550273cdc1cb28934a907c8.jpg)  
图5.8单总线的数据通路和控制信号  

>pro：数据通路中的____及其作用（2015）  

- 在图5.8中：
  - GPRs为____寄存器组
    - rs、rd分别为所读、写的通用寄存器的____

  - 暂存器
    - Y为____寄存器
    - Z为____寄存器

  - FR为____寄存器
    - 用于存放ALU产生的____信息

  - 控制信号（带箭头的虚线）
    - 写入控制
      - 字母加"____"表示该部件充许写入
      - 例如：MDRin表示内部总线上信息写入____
    - 输出控制  
      - 字母加"____"表示该部件充许输出
      - 例如：MDRout表示MDR的内容送入____总线

  - 三态门连接
    - 能输出到总线的部件均通过____门与内部总线相连
    - 用途：控制该部件与内部总线之间数据通路的____与____
>attention:  
- 单周期处理器（$\mathrm{CPI}=1$）不能采用单总线方式
  - 原因：
    - 单总线将所有寄存器都连接到一条____总线上
    - 一个时钟内只允许____操作
    - 因此无法完成一条指令的____操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>部件</li>
    <li>连接</li>
    <li>公共</li>
    <li>简单</li>
    <li>冲突</li>
    <li>内部</li>
    <li>系统</li>
    <li>外设</li>
    <li>控制</li>
    <li>三态门</li>
    <li>通用</li>
    <li>编号</li>
    <li>暂存</li>
    <li>暂存</li>
    <li>标志</li>
    <li>标志</li>
    <li>in</li>
    <li>MDR</li>
    <li>out</li>
    <li>内部</li>
    <li>三态</li>
    <li>连接</li>
    <li>断开</li>
    <li>公共</li>
    <li>一次</li>
    <li>所有</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">CPU内部<span style="color: SlateBlue;">多</span>总线方式  

<ul>

- CPU内部有两条或更多的总线时→双总线结构或多总线结构
  - 结构特点
    - 将所有寄存器的____端和____端都连接到多条公共通路上
  - 与单总线对比
    - 单总线特点
      - 一个时钟内只充许传送____数据
      - 指令执行____很低
    - 多总线优势
      - 可同时在多个总线上传送不同的____
      - 提高指令执行<span style="color: LightSkyBlue;">____</span>
>pro：单周期CPU的____（2016）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>输入</li>
    <li>输出</li>
    <li>一个</li>
    <li>效率</li>
    <li>数据</li>
    <li>效率</li>
    <li>特点</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: gray;">专用</span><span style="color: silver;">数据通路方式  

<ul>

- 根据指令执行过程中的____和____的流动方向安排连接电路
  - 特点：
    - 避免使用____的总线
    - 性能____
    - 硬件量____
> attention
- 总线分类：
  - ____总线
    - 连接CPU内部各寄存器及运算部件之间的总线
  - ____总线
    - 连接同一台计算机系统的各部件之间的总线
    - 包括：CPU、内存和各类____接口

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>地址</li>
    <li>共享</li>
    <li>较高</li>
    <li>大</li>
    <li>内部</li>
    <li>系统</li>
    <li>I/O</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ~ <span style="color: silver;"><span style="color: green;">操作</span>举例  

<ul>

- 总线是一组____的传输信号线
  - 它不能____信息
  - 任一时刻也只能有一个部件把信息送到____上

<span style="font-size: 14px;">以图5.8所示的单总线数据通路为例
- 常见操作的____及____信号

>pro：指令执行的____及有效____信号（2009、2015）：指令在取数和执行阶段所用到的____（2019）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>共享</li>
    <li>存储</li>
    <li>总线</li>
    <li>流程</li>
    <li>控制</li>
    <li>节拍</li>
    <li>控制</li>
    <li>部件</li>
  </ul>
</details>
</div>

### <span style="color: silver;">通用<span style="color: LimeGreen;">R</span>之间传送<span style="color: LightSkyBlue;">数据  

<ul>

- 寄存器和总线之间的控制信号
  - 两种控制信号
    - Rin信号
      - 功能：控制将____上的信息存到寄存器R中
    - Rout信号
      - 功能：控制将寄存器R的内容送至____
  - 操作示例：将PC内容送至MAR
    - 流程及控制信号
      - (PC)→____
      - PC out ____in
      - PC内容→____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>总线</li>
    <li>总线</li>
    <li>MAR</li>
    <li>MAR</li>
    <li>MAR</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">从<span style="color: Gold;">主</span><span style="color: LimeGreen;">存</span> <span style="color: GreenYellow;">读取</span>数据  

<ul>

>pro：取指令阶段所需____周期分析（2022）  

- 从主存中读取的信息可能是____或____
- 以CPU从主存中取指令为例，说明数据在单总线数据通路中的传送过程：
  - 实现该操作的流程及控制信号：
    - 第一步：
      - （PC）→____
      - PC out ____in
      - 现行指令____→MAR
      - 需要1个____周期
    - 第二步：
      - MEM（MAR)→____
      - （PC)+1→____
      - ____in有效
      - CU发出____命令
      - 取出指令后PC+____
      - 需要1个____周期
    - 第三步：
      - (MDR）→____ 
      - MDR out ____in
      - 现行____→IR
      - 需要1个____周期

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时钟</li>
    <li>数据</li>
    <li>指令</li>
    <li>MAR</li>
    <li>MAR</li>
    <li>地址</li>
    <li>时钟</li>
    <li>MDR</li>
    <li>PC</li>
    <li>MDR</li>
    <li>读</li>
    <li>1</li>
    <li>主存</li>
    <li>IR</li>
    <li>IR</li>
    <li>指令</li>
    <li>时钟</li>
  </ul>
</details>
</div>

</ul>

</ul>

```

---

### 处理说明
1. **挖空原则**：
   - 定义中的关键词（如“功能”“结构”）、公式中的关键部分（如“PC+1”）、算法步骤中的核心操作（如“取指令”）被挖空。
   - 挖空后用下划线（____）表示，确保简洁且易于自我检查。
2. **折叠块**：
   - 每个次级标题下的答案使用 `<details>` 和 `<summary>` 标签实现折叠效果。
   - 答案以 `<ul>` 和 `<li>` 标签列出，保留空行以支持 Markdown 公式渲染。
3. **结构完整性**：
   - 保留了原始目录结构，未省略任何内容，包括图片链接和注释。
4. **格式优化**：
   - 使用 `<ul>` 标签增加缩进，保持 Markdown 和 HTML 的兼容性。
   - 颜色标签（如 `<span style="color: silver;">`）未改动，维持原视觉效果。

此结果可直接用于 Markdown 渲染，并支持 HTML 折叠功能，便于学习和记忆。

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果。挖空的关键词、公式和关键步骤已在正文中用下划线（____）表示，并在每个次级标题下以 HTML 折叠块形式列出答案。输出的内容同时保留 Markdown 和 HTML 格式，结构未改变，公式使用 Markdown 渲染。

---

### <span style="color: silver;">将数据 <span style="color: black;">写入</span> <span style="color: Gold;">主<span style="color: LimeGreen;">存  

<ul>

- 将寄存器R1的内容写入寄存器R2所指的主存单元：
  - 步骤1：将R1内容送入____
    - 控制信号：____ out MDR in
    - 操作：(R1)→____
  - 步骤2：将R2内容送入____
    - 控制信号：R2 out ____ in
    - 操作：(R2)→____
  - 步骤3：将____内容写入主存
    - 控制信号：____ out有效，CU发出____命令
    - 操作：____→MEM(MAR)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>MDR</li>
    <li>R1</li>
    <li>MDR</li>
    <li>MAR</li>
    <li>MAR</li>
    <li>MAR</li>
    <li>MDR</li>
    <li>MDR</li>
    <li>写</li>
    <li>MDR</li>
  </ul>
</details>
</div>

### <span style="color: silver;">执行 <span style="color: LimeGreen;">算术</span>或<span style="color: Gold;">逻辑</span>运算  

<ul>

> pro: ALU中设置暂存器的原因（2015、2022）  
  - 在单总线数据通路中：
    - 每一时刻总线上只有____数据有效
    - ALU运算的特殊要求：
      - ALU是无存储功能的____逻辑元件
      - 执行运算时需要两个输入端____有效
      - 解决方案：
        - 第一个操作数：经内部总线送入暂存器____保存，Y的内容在ALU左输入端始终有效
        - 第二个操作数：经内部总线直接送到ALU____输入端
      - ALU输出的特殊处理：
        - 不能直接与____相连
        - 原因：输出会通过总线反馈到输入端，影响____结果
        - 解决方案：将运算结果暂存在暂存器____中

  - 加法指令ADDACC，R1的执行过程：
    - 功能：将ACC的内容和R1的内容____并写回ACC
    - 执行步骤：
      - 第一步：
        - 操作：(R1)→____
        - 控制信号：Rl out ____in
        - 作用：操作数→____
      - 第二步：
        - 操作：(ACC) $^+$ (____）→Z
        - 控制信号：ACC out ____ in，CU ALU
        - 作用：结果→____
      - 第三步：
        - 操作：(____)→ACC
        - 控制信号：____ out ACC in
        - 作用：结果→____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一个</li>
    <li>组合</li>
    <li>同时</li>
    <li>Y</li>
    <li>右</li>
    <li>总线</li>
    <li>运算</li>
    <li>乙</li>
    <li>相加</li>
    <li>Y</li>
    <li>Y</li>
    <li>Y</li>
    <li>Y</li>
    <li>ALU</li>
    <li>Z</li>
    <li>Z</li>
    <li>Z</li>
    <li>ACC</li>
  </ul>
</details>
</div>

> pro：分析减法和自增指令执行所需的时钟周期数（2015）  

<ul>

- 以上3步不能____执行，否则会引起总线冲突，因此该操作需要____时钟周期  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>同时</li>
    <li>3个</li>
  </ul>
</details>
</div>

### <span style="color: silver;">修改<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>的值  

<ul>

- 转移指令的作用：
  - 通过修改____的值实现程序的跳转

- 转移指令JMPaddr的操作：
  - 假设转移指令为JIMPaddr：
    - addr是目标____地址
  - 操作流程：
    - 将指令寄存器IR中的____字段写入PC
  - 控制信号：
    - ____→PC
    - IR out
    - PC in

- 数据通路结构的影响：
  - 直接影响CPU内各种信息的____路径
  - 数据通路不同：
    - 指令执行过程的____序列安排也不同
    - 影响微操作信号形成部件的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>程序计数器PC</li>
    <li>转移</li>
    <li>地址</li>
    <li>Ad(IR)</li>
    <li>传送</li>
    <li>微操作</li>
    <li>设计</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: Gold;">C</span><span style="color: silver;">U'功能和工作原理  

<ul>

## <span style="color: LimeGreen;">结构</span> <span style="color: silver;">和功能  

<ul>

### <span style="color: LimeGreen;">连接 <span style="color: silver;">关系

<ul>

- 五大功能部件及其连接关系(figure 5.9)
  - 通过<span style="color: LightSkyBlue;">D</span>B <span style="color: DarkRed;">A</span>B  <span style="color: Gold;">C</span>B ____在一起
  - <span style="font-size: 14px;">  点画线框内的是 <span style="color: Gold;">C</span>U

#### <span style="color: silver;">连接关系

<ul>

- 部件间的数据传送：
  - <span style="color: LightSkyBlue;">A</span> <span style="color: LimeGreen;">L</span>U：
    - 通过<span style="color: LightSkyBlue;">D</span>B与内____、I和O 传送数据
  - I O：
    - 通过 <span style="color: GreenYellow;">接口</span>电路与____相连接
  - 内Memory、I和O：
    - 从<span style="color: DarkRed;">A</span>B 接收____信息
    - 从 <span style="color: Gold;">C</span>B得到____信号
    - 通过<span style="color: LightSkyBlue;">D</span>B与其他部件传送____
  - 控制器部件：
    - 从<span style="color: LightSkyBlue;">D</span>B接收____信息
      - 从<span style="color: LightSkyBlue;">A</span> <span style="color: LimeGreen;">L</span>U部件接收指令____地址
    - 送出指令地址到<span style="color: DarkRed;">A</span>B
    - 向系统中的部件提供运行所需的____信号
    - ![image](https://bluejedis.github.io/picx-images-hosting/test/image.58hfcnfphn.webp)  
图5.9计算机硬件系统和控制器部件的组成  

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连接</li>
    <li>Memory</li>
    <li>总线</li>
    <li>地址</li>
    <li>控制</li>
    <li>数据</li>
    <li>指令</li>
    <li>转移</li>
    <li>控制</li>
  </ul>
</details>
</div>

### <span style="color: Gold;">功能

<ul>

- 作为系统的指挥中心，主要功能：
  - 指令<span style="color: green;">管理</span>
    - 从主存中____指令
    - 指出下一条指令在主存中的____
  - 指令 <span style="color: Gold;">处理</span>
    - 对指令进行____
    - 对指令进行____
    - 产生相应的____控制信号
  - 数据<span style="color: LightSkyBlue;">流</span><span style="color: green;">向</span><span style="color: Gold;">控制</span>
    - 指挥并控制以下设备间的数据流动方向：
      - ____
      - 主存
      - 输入设备
      - 输出设备

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>取出</li>
    <li>位置</li>
    <li>译码</li>
    <li>测试</li>
    <li>操作</li>
    <li>CPU</li>
  </ul>
</details>
</div>

### <span style="color: LimeGreen;">分类</span>

<ul>

- 按 微操作控制信号的 <span style="color: black;">产生方式</span>，分为：
  - ____CU
  - 微程序~
- 两类控制器的异同：
  - 相同点：PC和IR____
  - 不同点：
    - 确定和表示 <span style="color: LightSkyBlue;">指令</span>执行步骤的____
    - <span style="color: Gold;">控制</span>信号的____方案

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>硬布线</li>
    <li>相同</li>
    <li>办法</li>
    <li>给出</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: green;">硬</span><span style="color: Gold;">布线</span>~ 

<ul>

### <span style="color: silver;">基本概念

<ul>

- 硬布线控制器基本特征：
  - 由复杂的____逻辑<u>门电路</u>和<u>触发器</u>构成
  - 即<span style="color: LimeGreen;">组合</span><span style="color: Gold;">逻辑</span>____

- 工作原理：
  - 根据以下因素发送____控制信号：
    - 指令____
    - 当前____
    - 内外部____
  - 控制信号发送遵循____顺序

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>组合</li>
    <li>控制器</li>
    <li>微操作</li>
    <li>要求</li>
    <li>时序</li>
    <li>状态</li>
    <li>时间</li>
  </ul>
</details>
</div>

### <span style="color: silver;"> <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">单元</span>结构

<ul>

- <span style="color: LightSkyBlue;">指令</span> <span style="color: LimeGreen;">操作</span>码
  - 决定CU发出不同____信号的关键
    - 通过译码电路将n位操作码产生____个输出
      - 每种~<span style="color: gray;">对应</span>一个Output送至____

![image](https://bluejedis.github.io/picx-images-hosting/test/image.26ljcg4y79.webp) 
图5.10带指令译码器和节拍输入的控制单元框图  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>控制</li>
    <li>2^n</li>
    <li>CU</li>
  </ul>
</details>
</div>

### <span style="color: silver;"> <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">单元</span><span style="color: gray;">输入</span>信号

<ul>

- 指令信息
  - 经指令译码器____产生
  - 操作码决定____周期的不同操作
  - 与时钟配合产生不同____信号
- 时序系统信号
  - 包括____周期信号和节拍信号
  - 控制单元需要____控制以有序发出控制信号
- 执行单元反馈信息
  - 包括各种____
  - 用于根据CPU当前状态产生____信号

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>译码</li>
    <li>执行</li>
    <li>控制</li>
    <li>机器</li>
    <li>时钟</li>
    <li>标志</li>
    <li>控制</li>
  </ul>
</details>
</div>

### <span style="color: Gold;">特点

<ul>

- 优点：
  - 速度 <span style="color: black;">快</span>，主要取决于____延迟
  - 适用于<span style="color: gray;">高速</span>计算机CPU和____架构
- 缺点：
  - 控制信号实现____
  - 修改或增加指令需重新____电路
  - 指令系统越全，电路越____
  - ____困难

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>电路</li>
    <li>RISC</li>
    <li>复杂</li>
    <li>设计</li>
    <li>庞杂</li>
    <li>调试</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: SlateBlue;">微</span><span style="color: LightSkyBlue;">程序</span> <span style="color: silver;">控制器  

<ul>

- 实现方式：
  - 采用 <span style="color: Gold;">存储</span>____实现
- 实现原理：
  - 将微操作信号<span style="color: LightSkyBlue;">代码</span> <span style="color: LimeGreen;">化</span>
  - 每条机器指令转化为一段____
  - 将微程序存入____存储器中
- 控制信号生成：
  - 微操作控制信号由____产生

### <span style="color: silver;">基本概念  

<ul>

- 设计思想：
  - 机器指令与微程序的关系：
    - 每条机器指令对应一个____
  - 微程序的组成：
    - 由若干条____构成
    - 每条微指令可对应一个或多个____命令
  - 指令执行过程：
    - 本质是执行对应____的过程
  - 存储位置：
    - 所有微程序存放在____存储器中
  - 应用现状：
    - 目前大多数计算机都采用此____

#### <span style="color: silver;"><span style="color: purple;">微</span><span style="color: LightSkyBlue;">命令</span>与微 <span style="color: LimeGreen;">操作

<ul>

- 微命令：
  - 控制部件向执行部件发出的各种____命令
  - 是构成控制序列的____单位
  - 例如：打开/关闭控制门、寄存器打入____
- 微操作：
  - 执行部件收到微命令后进行的____
  - 与微命令____对应
- 微命令分类：
  - ____性微命令：可同时出现完成某些微操作
  - ____性微命令：不允许同时出现

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>逻辑</li>
    <li>微程序</li>
    <li>控制</li>
    <li>微指令</li>
    <li>微程序</li>
    <li>微指令</li>
    <li>微操作</li>
    <li>微程序</li>
    <li>控制</li>
    <li>技术</li>
    <li>控制</li>
    <li>最小</li>
    <li>脉冲</li>
    <li>操作</li>
    <li>一一</li>
    <li>相容</li>
    <li>互斥</li>
  </ul>
</details>
</div>

> attention:  
硬布线控制器中也有微命令与微操作的概念，并非微程序控制器的专有概念。  

#### <span style="color: silver;"><span style="color: purple;">微</span><span style="color: RoyalBlue;">指令</span>与微$T$

<ul>

- 微指令组成：
  - 操作控制字段（微操作码字段）：产生____控制信号
  - 顺序控制字段（微地址码字段）：控制下一条微指令____
- 微周期：
  - 取出并执行一条微指令所需的____时间
  - 通常为一个____周期

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作</li>
    <li>地址</li>
    <li>全部</li>
    <li>时钟</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"> <span style="color: Gold;">主</span><span style="color: orange;">M</span>与控制M

<ul>

> pro：主存储器和控制存储器的区别（2017）  
- 主M：
  - 用途：存放____和数据
  - 位置：____外部
  - 实现：用____
- 控制M：
  - 用途：存放____
  - 位置：____内部
  - 实现：用____
  - 单元地址称为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>程序</li>
    <li>CPU</li>
    <li>RAM</li>
    <li>微程序</li>
    <li>CPU</li>
    <li>ROM</li>
    <li>微地址</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">程序与<span style="color: purple;">微</span>程序

<ul>

- 程序：
  - 定义：____的有序集合
  - 目的：完成特定____
  - 编制者：____设计人员
  - 存储位置：
    - 主存
    - ____
- 微程序：
  - 定义：<u>微指令</u>的____集合
  - 功能：
    - 描述____指令
    - 是指令的实时____
  - 编制者：计算机____
  - 存储位置：____存储器
  - 特点：对程序员____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>功能</li>
    <li>软件</li>
    <li>辅存</li>
    <li>有序</li>
    <li>机器</li>
    <li>解释器</li>
    <li>设计者</li>
    <li>控制</li>
    <li>透明</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: LimeGreen;">R</span>区分

<ul>

- 地址寄存器（MAR）
  - 功能：存放主存____地址

- 微指令地址寄存器（μPC或CMAR）
  - 功能：存放待执行微指令的____

- 指令寄存器（IR）
  - 功能：存放从主存读出的____

- 微指令寄存器（μIR或CMIDR）
  - 功能：存放从控制存储器读出的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>读/写</li>
    <li>微地址</li>
    <li>指令</li>
    <li>微指令</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Goldenrod;">组成</span> <span style="color: silver;">和工作过程  

<ul>

#### 基本组成

<ul>

- 主要部件：
  - 起始和转移地址形成部件：
    - 产生初始和后继____
    - 保证微指令____执行
  - 微指令地址寄存器：
    - 接收____
    - 为读取微指令做____
  - 控制存储器：
    - ____部件
    - 存放各指令对应的____
  - 微指令寄存器：
    - 位数等于微指令____

![image](https://bluejedis.github.io/picx-images-hosting/test/image.86tph81sgb.webp) 
图5.11微程序控制器的基本结构  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>微地址</li>
    <li>连续</li>
    <li>微地址</li>
    <li>准备</li>
    <li>核心</li>
    <li>微程序</li>
    <li>字长</li>
  </ul>
</details>
</div>

#### 工作过程

<ul>

- 执行机器指令的过程：
  1. 执行取指令公共操作：
     - 将取指微程序入口地址送入____
     - 从 <span style="color: Gold;">C</span><span style="color: gray;">M</span>读出微指令送入____
     - 完成后机器指令存入____寄存器
  2. 产生微程序入口地址：
     - 由机器指令____通过微地址形成部件产生
     - 送入____
  3. 执行微指令：
     - 从____逐条取出
     - 依次____
  4. 循环执行：
     - 完成一条机器指令后返回____入口
     - 重复以上步骤直到程序____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>μPC</li>
    <li>μIR</li>
    <li>指令</li>
    <li>操作码</li>
    <li>μPC</li>
    <li>CM</li>
    <li>执行</li>
    <li>取指</li>
    <li>结束</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: purple;">微</span><span style="color: LightSkyBlue;">程序</span>和机器指令关系

<ul>

- 对应关系：
  - 一条机器指令对应一个____
  - 公共操作可统一编程：
    - ____操作微程序
    - 间址周期微程序
    - 中断周期微程序
- 控制存储器内容：
  - 机器指令对应的____
  - 公共操作的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>微程序</li>
    <li>取指令</li>
    <li>微程序</li>
    <li>微程序</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: deepskyblue;">编码</span>方式  

<ul>

- 目的：
  - 保证速度的情况下缩短微指令____
- 作用：
  - 对微指令____字段编码
  - 形成____信号

#### <span style="color: silver;"><span style="color: gray;">直接</span>~

<ul>

- 特点：
  - 无须____
  - 每位代表一个____
  - 1/0表示选用/____
- 优点：
  - 简单直观
  - 执行速度____
  - 操作并行性____
- 缺点：
  - 微指令____过长
  - 控制存储器____大

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c6e197e941e2f1058a37b511cbaa37823f47acc90dd408d7e4f2e9e15c655007.jpg)  
图5.12直接编码方式  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>字长</li>
    <li>控制</li>
    <li>控制</li>
    <li>译码</li>
    <li>微命令</li>
    <li>不选用</li>
    <li>快</li>
    <li>好</li>
    <li>字长</li>
    <li>容量</li>
  </ul>
</details>
</div>

#### <span style="color: LightSkyBlue;">字段</span><span style="color: gray;">直接~

<ul>

> pro：字段直接控制的编码方法（2012）  
- 基本方法：
  - 操作控制字段分成<span style="color: gray;">若干</span>____字段
    - <span style="font-size: 12px;">将整个操作控制字段划分为多个独立的小字段
  - <span style="color: Gold;">互斥</span>性微命令在<span style="color: gray;">同一</span>____
      - <span style="font-size: 12px;">不能同时执行的微命令放在一个字段中
  - <span style="color: gray;">相容</span>性微命令在<u>不同</u>____
    - <span style="font-size: 12px;">可以同时执行的微命令分配到不同字段中
  - 每个字段 <span style="color: LimeGreen;">独立</span>____
    - <span style="font-size: 12px;">各个字段可以单独进行编码
    - <span style="font-size: 12px;">编码方式可以不同
  - 各字段编码含义 <span style="color: GreenYellow;">单独</span>____
    - 每个字段的编码都有其特定的含义
    - 编码含义相互独立

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8f2b917f211c35fb07f59a18310c4809c207a77d2f9e952f169ab68cecd9625.jpg)  
图5.13字段直接编码方式  

- 分段原则：
  - 命令:
    - 互斥性微命令分在____段
    - 相容性微命令分在____段
  - 每段信息位<u>不能太多</u>
  - 每段留出<span style="color: gray;">不操作</span>____（通常000）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>小</li>
    <li>字段</li>
    <li>字段</li>
    <li>编码</li>
    <li>定义</li>
    <li>同一</li>
    <li>不同</li>
    <li>状态</li>
  </ul>
</details>
</div>

#### <span style="color: LightSkyBlue;">字段</span> <span style="color: silver;">间接~

<ul>

- 特点：
  - 一个字段的微命令由<span style="color: gray;">另一字段</span>____
  - 非直接译码发出____
  - <span style="color: gray;">隐式</span>____
- 优缺点：
  - 优点：进一步缩短微指令____
  - 缺点：<span style="color: LightSkyBlue;">削弱</span>____控制能力
  - 用途：作为字段直接编码的____手段

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>解释</li>
    <li>微命令</li>
    <li>编码</li>
    <li>字长</li>
    <li>并行</li>
    <li>辅助</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: DarkRed;">地址</span>形成方式  

<ul>

后继微地址的形成主要有以下几个基本类型：  

#### <span style="color: silver;">后<span style="color: purple;">继</span>地址字段指出

<ul>

- 在微指令格式中设置一个后继____字段
  - 用于直接指示<span style="color: gray;">下一条</span>微指令的<span style="color: DarkRed;">地址</span>
- 由微指令的后继地址字段直接指出后继微指令的____
  - 直接从字段中获取地址信息
  - 无需额外计算或____
- 也称____方式
  - 因为地址是确定的
  - 不依赖于其他条件

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>地址</li>
    <li>地址</li>
    <li>转换</li>
    <li>断定</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">由 机器<span style="color: LightSkyBlue;">指令</span>操作码形成

<ul>

- 机器指令从____寄存器取出
- 通过微地址形成部件处理：
  - 输入：____
  - 输出：对应机器指令微程序的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>操作码</li>
    <li>首地址</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">增量 <span style="color: LimeGreen;">计数器</span>法

<ul>

- 即 $(\mu\mathrm{PC})+1{\rightarrow}____$
- 适用于后继微指令地址是____的情况

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>μPC</li>
    <li>连续</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">标志</span> <span style="color: silver;">决定分支转移

<ul>

- 根据各种 <span style="color: Gold;">标志</span>决定下一条微指令____转移的地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分支</li>
  </ul>
</details>
</div>

#### <span style="color: green;">硬件</span> <span style="color: silver;">直接产生

<ul>

- 电源加电后，第一条微指令的地址可由专门的<span style="color: green;">硬件</span><span style="color: gray;">电路</span>____
- 并送至 ____
- 这个地址即为取指周期微程序的____地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>产生</li>
    <li>μPC</li>
    <li>入口</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: LightSkyBlue;">格式</span>  

<ul>

微指令格式与微指令的 <span style="color: deepskyblue;">编码</span>方式有关， 分为:
- ____型~ 和 垂直型~

> pro： 微指令后继地址字段位数与微指令条数的关系（2014）  

#### <span style="color: LightSkyBlue;">水平</span> <span style="color: silver;">型~

<ul>

- 编码方式特点：
  - 水平型微指令包含以下编码方式：
    - <span style="color: gray;">直接</span>____
    - <span style="color: LightSkyBlue;">字段</span><span style="color: gray;">直接</span>____ 
    - <span style="color: LightSkyBlue;">字段</span>____编码
- 基本指令格式：
  - 格式结构：
    - 如图
  - 控制信号编码：
    - 每<span style="color: gray;">一位</span> <span style="color: Gold;">对应</span><span style="color: gray;">一个</span>____信号
    - 信号状态：
      - 1表示有____
      - 0表示无____
  - 执行特点：
    - <span style="color: gray;">单条</span>微指令可同时：
      - 定义<span style="color: gray;">多个</span>____
      - 执行多个<span style="color: green;">并行</span>____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b2aedaa58c557759dbd6b0fe7d9c754a7d34a84fc4317965518d9de55c2fb6a1.jpg)  

- 优缺点：
  - 优点：微程序____，并行能力强，执行速度____
  - 缺点：微指令____，编写微程序较<span style="color: gray;">麻烦

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>水平</li>
    <li>编码</li>
    <li>编码</li>
    <li>间接</li>
    <li>控制</li>
    <li>输出</li>
    <li>输出</li>
    <li>微命令</li>
    <li>操作</li>
    <li>短</li>
    <li>快</li>
    <li>长</li>
  </ul>
</details>
</div>

#### <span style="color: green;">垂直</span> <span style="color: silver;">型~

<ul>

- 基本特点：
  - 编码方式：
    - 采用类似<span style="color: gray;">机器</span><span style="color: LightSkyBlue;">指令</span>____的方式
  - 微指令结构：
    - 在微指令字中设置微____字段
    - 基本格式参照图5.15
  - 执行特点：
    - 一条垂直型微指令通常只能：
      - 定义 执行 <span style="color: black;">一种</span>____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7065d0c6793931c03ff4fb46419e81a29e8a05e3dc173555b1f656c5aa397918.jpg)  

- 优缺点：
  - 优点：微指令____、简单、规整，便于编写____
  - 缺点：微程序____，执行速度____，效率____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作码</li>
    <li>操作码</li>
    <li>微命令</li>
    <li>短</li>
    <li>微程序</li>
    <li>长</li>
    <li>慢</li>
    <li>低</li>
  </ul>
</details>
</div>

#### 对比

<ul>

- 并行操作能力：
  - 水平型：____、效率高、灵活性强
  - 垂直型：____
- 执行时间：
  - 水平型：____
  - 垂直型：____
- 微程序特点：
  - 水平型：微指令字较长但微程序____
  - 垂直型：____
- 掌握难度：
  - 水平型：难以____
  - 垂直型：与机器指令比较相似，相对容易____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>强</li>
    <li>较差</li>
    <li>短</li>
    <li>长</li>
    <li>短</li>
    <li>相反</li>
    <li>掌握</li>
    <li>掌握</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"> compare: 

<ul>

> pro：硬布线控制器和微程序控制器的特点（2009）  

#### <span style="color: green;">硬</span> <span style="color: Gold;">布线

<ul>

- 优点：
  - 由于控制器的速度取决于电路____，所以速度 <span style="color: black;">快</span>
- 缺点：
  - 由于将控制部件视为专门产生固定时序控制信号的____电路
  - 把用最少元件和取得最高速度作为____目标
  - 一旦设计完成，就 <span style="color: black;">不可</span>能通过其他额外修 <span style="color: black;">改</span>添加____功能

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>延迟</li>
    <li>逻辑</li>
    <li>设计</li>
    <li>新</li>
  </ul>
</details>
</div>

#### <span style="color: purple;">微</span><span style="color: LightSkyBlue;">程序</span>

<ul>

- 具有规整性、 <span style="color: LimeGreen;">灵活</span>性和____性
- 缺点：
  - 由于采用了存储____原理
  - 每条指令都要从控制存储器中取____
    - 影响 <span style="color: black;">速度</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可维护</li>
    <li>程序</li>
    <li>一次</li>
  </ul>
</details>
</div>

#### 对比总结

<ul>

为便于比较，下面以表格的形式对比二者的不同，见表5.1。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5758d88c281f323689f1a57cbe9859540b34d296985c6fd404c91be129bd19f0.jpg)

</ul>

</ul>

</ul>

</ul>

</span>



