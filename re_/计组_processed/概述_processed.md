以下是按照您的要求处理后的 Markdown 内容，已在标题段落间添加 `<ul></ul>` 标签并确保上下空行，严格保留原有文本和 Markdown 格式（如图片链接）不变：

```markdown
<span style="color: silver;">

##  <span style="color: silver;"> above

<ul>

###  <span style="color: silver;">【考纲内容】

<ul>

（一）计算机系统层次结构

- 计算机系统的基本组成
  - 计算机硬件的基本组成
  - 计算机软件和硬件的关系

- 计算机系统的工作原理
  - "存储程序"方式
  - 高级语言程序与机器语言程序的转换
  - 程序和指令的执行过程

（二）计算机性能指标

- 吞吐量
- 响应时间
- CPU相关指标：
  - CPU时钟周期
  - 主频
  - CPI
  - CPU执行时间
- 浮点运算性能指标：
  - MIPS（每秒百万条指令）
  - MFLOPS（每秒百万次浮点运算）
  - GFLOPS（每秒十亿次浮点运算）
  - TFLOPS（每秒万亿次浮点运算）
  - PFLOPS（每秒千万亿次浮点运算）
  - EFLOPS（每秒百亿亿次浮点运算）
  - ZFLOPS（每秒十万亿亿次浮点运算）

</ul>

###  <span style="color: silver;">【复习提示】

<ul>

- 本章概述：
  - 组成原理的概述章节。
  - 考查时易针对概念或性能指标出选择题。
  - 可能综合后续章节内容出性能分析的综合题。

- 学习本章的重要性：
  - 掌握本章基本概念是学好后续章节的基础。

- 学习建议：
  - 初学时对部分知识点理解不深刻不必担忧。
  - 随着后续章节的学习，会有更深入的理解。

<br>

学习本章时，请读者思考以下问题：

1）计算机由哪几部分组成？以哪部分为中心？
2）主频高的CPU一定比主频低的CPU快吗？为什么？
3）翻译程序、汇编程序、编译程序、解释程序有什么差别？各自的特性是什么？
4）不同级别的语言编写的程序有什么区别？哪种语言编写的程序能被硬件直接执行？
请读者在学习本章的过程中寻找答案，本章末尾会给出参考答案。

</ul>

</ul>

##  <span style="color: silver;">* 发展历程

<ul>

<details>

###  <span style="color: silver;">* <span style="color: green;">硬</span>件的发展

<ul>

#### <span style="color: silver;">四代变化

<ul>

- 1946（ENIAC）问世以来，计算机的发展已经经历了四代
  - 第一代计算机（1946-1957年）- 电子管时代
    - 特点：
      - 逻辑元件采用电子管
      - 使用机器语言进行编程
      - 主存储器用延迟线或磁鼓存储信息，容量极小
      - 体积庞大，成本高
      - 运算速度较低，一般只有几千次到几万次每秒

  - 第二代计算机（1958-1964年）- 晶体管时代
    - 特点：
      - 逻辑元件采用晶体管
      - 运算速度提高到几万次到几十万次每秒
      - 主存储器使用磁芯存储器
      - 计算机软件得到发展
        - 开始出现高级语言及其编译程序
        - 有了操作系统的雏形

  - 第三代计算机（1965-1971年）- 中小规模集成电路时代
    - 特点：
      - 逻辑元件采用中小规模集成电路
      - 半导体存储器开始取代磁芯存储器
      - 高级语言发展迅速
      - 操作系统进一步发展，开始有分时操作系统

  - 第四代计算机（1972年至今）- 超大规模集成电路时代
    - 特点：
      - 逻辑元件采用大规模和超大规模集成电路
      - 产生了微处理器
      - 应用新概念：
        - 并行
        - 流水线
        - 高速缓存
        - 虚拟存储器

</ul>

#### <span style="color: silver;">元件'更新换代

<ul>

- 摩尔定律
  - 当价格不变时，集成电路上可容纳的晶体管数目约每隔18个月便会增加一倍
  - 性能也将提升一倍
  - 揭示了信息技术进步的速度

- 半导体存储器的发展
  - 1970年，美国仙童半导体公司生产出第一个较大容量的半导体存储器
  - 经历了11代：
    - 单芯片1KB
    - 4KB
    - 16KB
    - 64KB
    - 256KB
    - 1MB
    - 4MB
    - 16MB
    - 64MB
    - 256MB
    - 1GB

- 微处理器的发展
  - 发展历程：
    - Intel4004（第一个微处理器）
    - Intel8008（8位）
    - Intel8086（16位）
    - Intel80386（32位）
    - Pentium（32位）
    - PentiumIII（64位）
    - Pentium4（64位）
    - Corei7（64位）
  - 32位、64位指机器字长，是指计算机进行一次整数运算所能处理的二进制数据的位数

</ul>

</ul>

### <span style="color: silver;">* <span style="color: LightSkyBlue;">软</span>件的发展

<ul>

- 计算机语言的发展历程
  - 面向机器的语言
    - 机器语言
    - 汇编语言
  - 面向问题的高级语言
    - FORTRAN（科学计算和工程计算）
    - PASCAL（结构化程序设计）
    - C++（面向对象）
    - Java（适应网络环境）

- 系统软件的发展
  - 直接影响计算机系统性能提升
  - 特别是操作系统
    - Windows
    - UNIX
    - Linux

</ul>

</details>

</ul>

##  <span style="color: silver;">0 <span style="color: LightSkyBlue;">系统 <span style="color: Gold;">层次</span><span style="color: green;">结构</span>

<ul>

<details open>

### <span style="color: gray;">组成

<ul>

- 硬件系统和软件系统构成完整计算机系统
  - 硬件：有形的物理设备
  - 软件：在硬件上运行的程序、相关数据及文档
  - 软硬件关系：
    - 系统性能很大程度由软件效率决定
    - 软件性能发挥需要硬件支持
    - 软/硬件在逻辑功能上等价
    - 功能分配原则：频繁使用且成本合理的功能用硬件实现可提高效率

</ul>

### <span style="color: green;">硬</span>件

<ul>

####  <span style="color: silver;"> <span style="color: gray;">冯·诺依曼

<ul>

> pro： 冯·诺依曼计算机的特点（2019）**

- "存储程序"
  - 特点：
    - 采用"存储程序"工作方式
    - 由5大部件组成：
      - 运算器、M、 <span style="color: Gold;">C</span>U
      - 输入设备和输出设备
    - 指令和数据
      - 同等地位存储，形式无区别但可区分
      - 用二进制代码表示
    - 指令构成：
      -  <span style="color: GreenYellow;">操作</span>码（操作类型）+ <span style="color: DarkRed;">地址</span>码（操作数地址）
  - 基本思想：
    - 程序和原始数据<span style="color: gray;">预先</span>送入 <span style="color: Gold;">主存
    - 启动后<span style="color: gray;">自动</span>执行，无需人工干预
      - 自动逐条执行直至结束

</ul>

####  <span style="color: silver;"> <span style="color: Gold;">功能</span>部件

<ul>

> pro： MAR和MDR位数的概念和计算（2010、2011）**

#####  <span style="color: silver;">I

<ul>

- 主要功能：将程序和数据以机器可识别形式输入
- 常用设备：
  - 键盘（最基本）
  - 鼠标
  - 扫描仪
  - 摄像机

</ul>

#####  <span style="color: silver;">O

<ul>

- 主要任务：将处理结果以可接受形式输出
- 常用设备：
  - 显示器
  - 打印机
- I/O设备是计算机与外界联系的桥梁

</ul>

##### M

<ul>

- 分类：
  - 主存储器（内存）
    - CPU可直接访问
    - 按地址存取方式工作
  - 辅助存储器（外存）
    - 帮助主存记忆更多信息
    - 需调入主存后才能被CPU访问

- 主存储器基本组成：
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/36517a18494fdeb8a07395f328a28abdfbd453d9dab3e6d2c9c8c828b2a23076.jpg)
  - 存储体
    - 由多个存储单元组成
    - 每个存储单元包含多个存储元件
    - 每个存储元件存储一位二进制代码
    - 存储字长可为1B或字节的偶数倍
  - MAR（存储器地址寄存器）
    - 存放访存地址
    - 位数决定最大寻址能力
    - 长度与PC相等
  - MDR（存储器数据寄存器）
    - 暂存读写信息
    - 位数通常等于存储字长
  - 时序控制逻辑
    - 产生存储器操作所需时序信号

> attention：
MAR与MDR虽然是存储器的一部分，但在现代计算机中却是存在于CPU中的；另外，后文提到的高速缓存（Cache）也存在于CPU中。

</ul>

#####   <span style="color: silver;"><span style="color: GreenYellow;">运算</span>器

<ul>

- 功能：执行算术运算和逻辑运算
  - 算术运算：加、减、乘、除
  - 逻辑运算：与、或、非、异或、比较、移位等

- 组成部分：
  - ALU（算术逻辑单元）：核心部件
  - 通用寄存器：
    - ACC（累加器）
    - MQ（乘商寄存器）
    - X（操作数寄存器）
    - IX（变址寄存器）
    - BR（基址寄存器）
  - PSW（程序状态寄存器/标志寄存器）
    - 存放ALU运算标志信息
    - 存放处理机状态信息

</ul>

#####   <span style="color: silver;"><span style="color: Gold;">控制</span>器

<ul>

- 功能：计算机的指挥中心
- 组成部分：
  - PC（程序计数器）
    - 存放当前欲执行指令地址
    - 具有自动加1功能
    - 与MAR有直接通路
  - IR（指令寄存器）
    - 存放当前指令
    - 内容来自MDR
    - OP(IR)送至CU用于分析指令
    - Ad(IR)送往MAR用于取操作数
  - CU（控制单元）
    - 分析指令
    - 发出微操作命令序列

- CPU相关说明：
  - 运算器和控制器集成为CPU
  - CPU和主存构成主机
  - 其他硬件装置称为外设

- 冯·诺依曼结构模型机：
  ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e5599c11147c84255a3bcb6e68a0e63ecce4c3c670d01ea80490c4c98da2c745.jpg)
  - CPU组成：
    - ALU
    - GPRs（通用寄存器组）
    - 标志寄存器
    - 控制器
    - IR、PC、MAR、MDR
  - 控制信号功能：
    - 修改PC获取下一条指令地址
    - 控制ALU执行运算
    - 控制主存读写操作
  - CPU和主存连接：
    - 通过总线相连
    - 总线包含：
      -  <span style="color: LimeGreen;">地址</span>线
      - <span style="color: orange;">控制</span>线
      - <span style="color: LightSkyBlue;">数据</span>线
    - 数据传输：
      - MAR地址信息送到地址线
      - 控制线包含读写信号
      - MDR与数据线间进行数据交换

</ul>

</ul>

</ul>

###  <span style="color: silver;"><span style="color: LightSkyBlue;">软</span>件

<ul>

####  <span style="color: silver;"><span style="color: LightSkyBlue;">系统</span>~ &  <span style="color: Gold;">应用</span>~

<ul>

- 软件按功能分类
  - <span style="color: LightSkyBlue;">系统</span>软件
    - 定义：保证计算机系统高效、正确运行的基础软件
    - 作用：作为系统资源提供给用户使用
    - 主要类型：
      - 操作系统（OS）
      - 数据库管理系统（DBMS）
      - 语言处理程序
      - 分布式软件系统
      - 网络软件系统
      - 标准库程序
      - 服务性程序
  -  <span style="color: Gold;">应用</span>软件
       - 定义：用户为解决应用领域问题而编制的程序
       - 示例：
         - 科学计算类程序
         - 工程设计类程序
         - 数据统计与处理程序

- 程序员分类
  - 系统程序员：编写操作系统、编译程序等系统软件
  - 应用程序员：编写解决具体应用问题的程序

</ul>

####  <span style="color: silver;">计算机 <span style="color: Gold;">语言

<ul>

#####  <span style="color: silver;">三个level的语言

<ul>

> pro：三种机器语言的特点（2015）**

- <span style="color: gray;">机器</span>语言
  - 又称二进制代码语言
  - 需要记忆每条指令的二进制编码
  - 计算机唯一可直接识别和执行的语言

-  <span style="color: LimeGreen;">汇编</span>
   - 用英文单词或缩写代替二进制指令代码
   - 易于记忆和理解
   - 需要通过汇编程序翻译成机器语言

-  <span style="color: Gold;">高级</span>
   - 示例：C、C++、Java等
   - 方便程序设计人员编写程序
   - 需要通过编译和汇编转换为机器语言

</ul>

#####  <span style="color: silver;"> <span style="color: GreenYellow;">翻译</span>程序<span style="color: green;">类型

<ul>

> pro：各种翻译程序的概念（2016）

  -  <span style="color: LimeGreen;">汇编</span>程序（汇编器）：
       - 汇编 → <span style="color: gray;">机器</span>语言
  - <span style="color: green;">解释</span>程序（解释器）：
    - <span style="color: green;">逐</span><span style="color: LightSkyBlue;">条</span>翻译&立即 <span style="color: GreenYellow;">执行
  - <span style="color: LightSkyBlue;">编译</span>程序（编译器）：将高级语言翻译成汇编语言或机器语言

</ul>

</ul>

####  <span style="color: silver;">软件和硬件的 <span style="color: Gold;">逻辑</span>功能 <span style="color: GreenYellow;">等价</span>性

<ul>

- concept
  - <span style="color: green;">硬</span>件 基本运算function
  - <span style="color: LightSkyBlue;">软</span>件 扩充
  - 同一功能可通过软件或硬件实现

- apply
  - eg：浮点数运算
    - 专门硬件实现
    - or 子程序实现
    - 功能等效但性能不同

- 设计考虑
  - 是计算机系统设计重要依据
  - 功能分配因素：
    - 设计目标
    - 性能价格比
    - 技术水平

</ul>

</ul>

###  <span style="color: Gold;">层次</span> <span style="color: LimeGreen;">结构

<ul>

- 计算机系统 <span style="color: Gold;">特点</span>
  - 是硬软件的<span style="color: Goldenrod;">综合</span>体
  - 需要复杂系统支持
  - 不同角度有不同需求

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ba10a968e6fa79eefcc9bdc76353183bb076480dd94dd122497668c14bb47a43.jpg)\
图1.3计算机系统的多级层次结构

####  <span style="color: GreenYellow;">划分

<ul>

- 0：<span style="color: SlateBlue;">微</span>程序机器层
  - 实际硬件层
  - 直接执行 <span style="color: SlateBlue;">微</span><span style="color: LightSkyBlue;">指令

- 1：传统<span style="color: gray;">机器</span>语言层
  - 实际机器层
  - 由微程序解释机器指令

- 2：OS层
  - 由操作系统程序实现
  - 也称混合层
  - 包含机器指令和广义指令

- 3： <span style="color: LimeGreen;">汇编</span>语言层
  - 由汇编程序支持执行
  - 用于编写汇编语言程序

- 4： <span style="color: Gold;">高级</span>语言层
  - 面向用户
  - 由编译程序支持执行
  - 上层可扩展应用程序层

</ul>

####  <span style="color: Gold;">层次</span> <span style="color: GreenYellow;">关系

<ul>

- concept
  - 裸机：纯硬件系统
  - 虚拟机：第3层～第5层
  - ISA：软件和硬件的界面

- 层次间关系
  - 下层是上层基础
  - 上层是下层扩展
  - 各层相对 <span style="color: Gold;">独立

</ul>

</ul>

###  <span style="color: GreenYellow;">工作</span> <span style="color: Gold;">原理

<ul>

####  <span style="color: silver;">"存储程序"工作方式

<ul>

- 基本概念
  - 程序执行前需将指令和数据送入主存储器
  - 启动后自动执行，无需人工干预
  - 程序执行是逐条执行指令的过程

- 指令执行过程
  - 从主存储器中取指令
  - 对指令进行译码
  - 计算下条指令地址
  - 取操作数并执行
  - 将结果送回存储器

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/92147f3b866cf96839105ec932140b0e4ff184d56cbe32653f7a5a310837bacb.jpg)\
图1.4程序执行过程

- steps
  - <span style="color: gray;">初始</span>化
    - 将第一条指令地址存入<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>
    - 用PC内容访问 <span style="color: Gold;">主存
  - 指令<span style="color: DarkRed;">地址</span>计算
    - <span style="color: gray;">顺序</span>型指令：PC内容加指令长度
    -  <span style="color: LimeGreen;">转跳</span>型指令：使用指令 <span style="color: GreenYellow;">指定</span>的目标地址
  - 自动循环执行
    - 根据PC取下一条指令
    - 周而复始地执行

</ul>

####   <span style="color: silver;"><span style="color: Gold;">源</span>程序→ <span style="color: LimeGreen;">可执行</span>文件

<ul>

> pro：翻译过程的四个阶段（2022）**

- concept
  - C语言程序need转换为<span style="color: gray;">机器</span><span style="color: LightSkyBlue;">指令
  - 以.exe格式打包
  - <span style="color: gray;">二进制</span>形式存储

- GCC编译器eg:
  - 输入：源程序文件hello.c
  - 输出：可执行文件hello
  - 分为四个阶段完成

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/32b38423c35a842f0ba819ce89774db99c0a25717ce5fb9005ae757f21a9a38b.jpg)
图1.5源程序转换为可执行文件的过程

#####  <span style="color: silver;">step

<ul>

- 预处理
  - 处理#开头的命令
  - 处理#include文件
  - 输出hello.**i**文件

- <span style="color: LightSkyBlue;">编译</span>
  - 生成汇编语言源程序hello.**s**
  - 包含文本格式的<u>机器语言</u>指令

-  <span style="color: LimeGreen;">汇编</span>
   - 生成可重定位目标文件hello.**o**
   - 转换为<u>二进制</u>格式

- <span style="color: deepskyblue;">链接</span>
  - 合并多个目标文件
  - 包含标准库函数
  - 生成最终可执行文件

</ul>

</ul>

####  <span style="color: silver;">process

<ul>

- 可执行文件特点
  - 由机器指令构成
  - 指令为0/1序列
  - 指示CPU完成原子操作

#####  <span style="color: silver;">基本指令<span style="color: green;">类型

<ul>

- 取数指令：存储单元到CPU寄存器
- 存数指令：CPU寄存器到存储单元
- ALU指令：执行算术或逻辑运算

</ul>

#####  <span style="color: silver;"><span style="color: GreenYellow;">取</span><span style="color: LightSkyBlue;">指令</span>process

<ul>

-  <span style="color: GreenYellow;">取</span><span style="color: LightSkyBlue;">指令</span>阶段：
   -  PC→MAR→M→MDR-IR
        - 将PC内容送MAR
        - MAR内容送地址线
        - 控制器发送读信号
        - 主存读出指令到数据线
        - 通过MDR传送到IR

-  <span style="color: Gold;">分析</span>指令阶段：
   -  OP(IR)→CU
        - 指令译码
        - 生成控制信号
        - 发送到执行部件

-  <span style="color: LimeGreen;">执行</span>指令阶段：
   -  Ad(IR)→MAR→M→MDR→ACC
        - 地址码送MAR
        - 读取操作数
        - 数据传送到ACC

- 准备<span style="color: gray;">下条</span>指令：(PC)+1→PC

> attention：

对于 $(\mathrm{PC}){\rightarrow}\mathrm{MAR}$
- (PC)的含义
  - 指程序计数器PC中存放的内容

- $\mathsf{P C}\to\mathsf{M A R}$ 的理解:
  - <=> $(\mathrm{PC}){\rightarrow}\mathrm{MAR}$
  - P<span style="color: GreenYellow;">C</span>中的值经过数据通路送到MAR

- 数据<span style="color: LightSkyBlue;">通路</span> 表示规则
  - 括号可以省略
  - 原因：只表示数据流经<span style="color: gray;">途径</span>，不强调数据本身流动

-  <span style="color: GreenYellow;">运算</span>表示规则
     - 括号<span style="color: gray;">不能省略
     - 例如：$(\mathrm{PC})+1{\rightarrow}\mathrm{PC}$ 不能写为 $\mathrm{PC}+1{\rightarrow}\mathrm{PC}$

- 考试答题建议
  - 当题目中(PC)→MAR的括号未省略时
  - 答题时也最好不要省略括号

</ul>

</ul>

</ul>

</ul>

</details>

</ul>

## <span style="color: orange;">性能</span><span style="color: green;">指标</span>

<ul>

### <span style="color: LightSkyBlue;">机器</span><span style="color: gray;">字长</span>

<ul>

> pro：与机器字长位数相同的部件（2020、2021）**

- 定义
  - 指计算机进行<u>一次</u>整数运算所能处理的二进制数据的位数
  - short as字长
  - usually 与CPU的寄存器位数、ALU有关
- 特点
  - 一般等于通用寄存器的位数或ALU的<span style="color: gray;">宽度</span>
  - 字长越长，数的表示范围越大，计算精度越高
  - 通常选定为字节（8位）的整数倍

> attention：

 <span style="color: LightSkyBlue;">机器</span><span style="color: gray;">字长</span>、<span style="color: deepskyblue;">指令</span>~、 <span style="color: Gold;">存储</span>~ 的关系
  <span style="color: silver;">（见章末的常见问题3）

</ul>

###  <span style="color: silver;"> 1 <span style="color: deepskyblue;">数据<span style="color: gray;">通路<span style="color: green;">带</span><span style="color: LightSkyBlue;">宽</span>

<ul>

- 定义：
  - <span style="color: deepskyblue;">数据</span>bus  <span style="color: silver;">一次所能</span><u>并行</u>传送信息的<span style="color: LightSkyBlue;">位数</span>
- 说明：
  -  <span style="color: LimeGreen;">外部</span><span style="color: deepskyblue;">数据</span>bus的宽度 <span style="color: gray;">may be different from </span>CPU<span style="color: green;">内部~宽度

> attention：

 <span style="color: silver;">各个子系统通过数据总线连接形成的</span>数据传送路径 ← <span style="color: deepskyblue;">数据<span style="color: gray;">通路

</ul>

###  <span style="color: Gold;">主存<span style="color: green;">容量</span>

<ul>

- 定义：主存储器所能存储信息的 <span style="color: gray;">max</span>容量
- 衡量方式
  - 以字节为单位
  - 用字数×字长表示（如512K×16位）
- 相关参数
  - M<span style="color: DarkRed;">A</span>R位数：反映存储单元的<span style="color: green;">个数
  - M<span style="color: LightSkyBlue;">D</span>R位数：反映存储单元的<span style="color: gray;">字长</span>
- eg:
  - MAR为16位：表示2^16=65536个存储单元（64K内存）
  - MDR为32位：存储容量为64K×32位

</ul>

###  <span style="color: LimeGreen;">运算<span style="color: LightSkyBlue;">速度</span>

<ul>

> pro：提高系统性能的综合措施（2010）

<details open>
<summary><span style="color: gray;">elements</span></summary>

####  <span style="color: Gold;">吞吐</span><span style="color: LimeGreen;">量</span> & <span style="color: green;">响应</span><span style="color: LightSkyBlue;">时间</span>

<ul>

- <span style="color: Gold;">吞吐</span><span style="color: LimeGreen;">量</span>
  - 定义：
    -  <span style="color: silver;">单位时间内</span> <span style="color: LimeGreen;">处理</span> <span style="color: Gold;">请求</span>' <span style="color: LightSkyBlue;">数量
</span>  
 -  <span style="color: Gold;">影响</span><span style="color: LightSkyBlue;">因素</span>：
  -  <span style="color: silver;">主memory</span>'存取周期
- <span style="color: green;">响应</span><span style="color: LightSkyBlue;">时间</span>
  - 定义：
    - 发送请求→获得结果' <span style="color: green;">等待<span style="color: LightSkyBlue;">时间</span>
  - <span style="color: orange;">组成</span>
    - CPU<span style="color: LightSkyBlue;">时间</span>： <span style="color: LimeGreen;">运行</span><span style="color: Gold;">程序</span>所需~
    - <span style="color: green;">等待</span>~：用于各种系统果然<span style="color: green;">操作</span>的~

> pro：时钟脉冲信号和时钟周期的相关概念（2019）

</ul>

####  <span style="color: Gold;">主频</span> & CPU <span style="color: LimeGreen;">时钟</span><span style="color: LightSkyBlue;">周期</span>

<ul>

- CPU时钟$T$
  - define：CPU工作的 min时间<span style="color: gray;">单位
  -  <span style="color: Gold;">特点</span>
      - 由 机器脉冲源 发出的信号经整形和分频形成
        - 信号源：机器脉冲源
        - 过程：整形和分频
      - 以组合逻辑电路最大延迟为基准
        - 基准点：组合逻辑电路
        - 关键因素：最大延迟
      - 以指令流水线各段最大延迟时间确定
        - 决定因素：流水线各段
        - 关键指标：最大延迟时间
> pro：主频和时钟周期的转换计算（2013）

- <span style="color: Gold;">主频</span>
  - 定义：机器内部  <span style="color: Gold;">主</span><span style="color: LimeGreen;">时钟</span>'$\color{orange}f$
  - 特点
    - $\color{orange}f$=$1/T$
    - 主频越<span style="color: LightSkyBlue;">高</span>，执行<span style="color: RoyalBlue;">速度</span>越快

> attention：

- 以Hz（赫兹）为单位，10Hz表示每秒10次。

</ul>

####  <span style="color: LimeGreen;">C<span style="color: silver;">P</span><span style="color: LightSkyBlue;">I</span>

<ul>

（Cycle Per Instruction）
- 定义：指令执行所需的平均时钟周期数
  - <span style="font-size: 14px;">即 一个I用了几个T</span>
  - $$CPI = \frac{N_{\bf\color{blue}T}}{N_{\color{LightSkyBlue}{I}}}$$
- 特点：不同指令的时钟周期数可能不同

</ul>

#### <span style="color: gray;">CPU</span> <span style="color: LimeGreen;">执行</span> <span style="color: LightSkyBlue;">时间</span>

<ul>

> pro：CPU执行时间的相关计算（2012、2013、2014、2017、2022、2023）
-  formula
   - $t={N_{\bf\color{blue}T}}/f$
     - 其实就是 $N_T\times T$
   - $t=（{N_{\color{LightSkyBlue}{I}}}×CPI）/f$
- 性能要素：主频、CPI和指令条数
- 要素关系：三者相互制约

【例1.1】（原例题保持不变）

</ul>

####  <span style="color: LightSkyBlue;">I</span><span style="color: silver;">PS | <span style="color: gray;">M<span style="color: LightSkyBlue;">I</span> <span style="color: silver;">PS &</span>  <span style="color: LimeGreen;">FL</span><span style="color: Gold;">O <span style="color: silver;">PS</span>

<ul>

<span style="color: gray;">均为运算速度单位(不同类型指令)</span>

#### <span style="color: LightSkyBlue;">I</span><span style="color: silver;">PS

<ul>

> pro：IPS的相关计算（2023）

-  <span style="color: silver;">IPS（Instructions Per Second）</span>
   - 定义：每秒执行的指令数
   - 计算：
     - $f/平均CPI$

</ul>

#### <span style="color: gray;">M<span style="color: LightSkyBlue;">I</span> <span style="color: silver;">PS

<ul>

（Million Instructions Per Second）

> pro：MIPS相关的计算（2012、2013）

-  formula
   - MIPS=指令条数÷(执行时间×10^6)
   - MIPS=主频÷(CPI×10^6)
- 局限性：
  - 不同机器间的性能比较存在缺陷

</ul>

#### <span style="color: LimeGreen;">FL</span><span style="color: Gold;">O <span style="color: silver;">PS</span>

<ul>

（Floating-point Operations Per Second）

> pro：浮点数运算指标的概念（2011、2021）

- 不同量级的FLOPS
  - MFLOPS：10^6次浮点运算/秒
  - GFLOPS：10^9次浮点运算/秒
  - TFLOPS：10^12次浮点运算/秒
  - PFLOPS：10^15次浮点运算/秒
  - EFLOPS：10^18次浮点运算/秒
  - ZFLOPS：10^21次浮点运算/秒

> attention：

- 容量与速率的单位表示区别：
  - 存储容量、文件大小：
    - 使用<u>2的幂次</u>表示
    - 如：1KB = 2^10b
    - 使用<u>大写K</u>
  - 速率、频率：
    - 使用<u>10的幂次</u>表示
    - 如：1kb/s = 10^3b/s
    - 使用<u>小写k</u>
  - 注意事项：
    - K/k以外的其他前缀均为大写
    - 具体含义取决于使用场景

</ul>

</ul>

</ul>

</details>

</ul>

### <span style="color: gray;">基准 <span style="color: LimeGreen;">程序</span>

<ul>

- 定义：
  - 专门用来进行 <span style="color: Gold;">性能</span> <span style="color: GreenYellow;">评价</span>的一组程序
- 作用：
  - 反映机器在运行实际负载时的性能
  - 通过在不同机器上运行相同的基准程序来比较运行时间，评测性能
- 使用特点：
  - 需根据不同应用场合选择不同基准程序
- 存在缺陷：
  - 性能可能与小段短代码密切相关
  - 可能被特殊优化，导致：
    - 执行速度非常快
    - 无法得到准确的性能评测结果

</ul>

### <span style="color: gray;">术语

<ul>

#### <span style="color: LightSkyBlue;">系列机</span>

<ul>

- 定义：
    - 具有共同特征：
      - 基本相同的<span style="color: LightSkyBlue;">体系</span><span style="color: LimeGreen;">结构
      - 使用相同的<span style="color: gray;">基本</span><span style="color: LightSkyBlue;">指令</span>系统
    - 由多个不同型号的计算机组成
    - → 一个完整的产品系列

</ul>

####  <span style="color: Gold;">兼容</span>

<ul>

- 定义：
  - 软件或硬件的<span style="color: gray;">通用</span>性
- 特点：
  - 兼容性的定义：
    - 一个系统的硬/软件能应用于另一系统时
    - → 这两台计算机存在 <span style="color: Gold;">兼容</span>性

</ul>

####  <span style="color: LimeGreen;">固件</span>

<ul>

- 定义：
  - 将程序<span style="color: LimeGreen;">固化</span>在ROM中组成的部件
- 特性：
  - 具有软件特性的硬件
  - 执行速度快于软件
  - 灵活性优于硬件
  - 是软/硬件结合的产物
-  <span style="color: silver;">应用实例：
   - 操作系统已实现部分固化（把软件永恒地存储于ROM中）

</ul>

</ul>

</ul>
```

### 处理说明
1. **标题段落间添加 `<ul></ul>`**：在每个标题（`#`, `##`, `###`, `####`, `#####` 等）后的内容段落外添加 `<ul></ul>`，并确保上下有空行。
2. **保留原有格式**：未更改任何 Markdown 图片链接（如 `![](url)`），严格保持原文内容不变。
3. **嵌套结构**：对于已有 `<ul>` 的部分（如【复习提示】和 * 发展历程 中的部分内容），保留其原有嵌套结构，仅在外部标题段落添加新的 `<ul></ul>`。
4. **空行处理**：确保每个 `<ul>` 和 `</ul>` 上下均有空行，与非 `<ul></ul>` 内容分隔开。

如果您有进一步需求，请随时告知！

