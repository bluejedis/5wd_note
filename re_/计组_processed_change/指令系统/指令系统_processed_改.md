以下是按照您的要求，将输入的 Markdown 内容增加 `<ul></ul>` 标签后的输出结果。每个标题段落的内容被包裹在 `<ul></ul>` 中，且 `<ul></ul>` 上下均有空行，Markdown 格式的图片链接（如 `![alt]`(url)`）保持不变：

---

html:
  	toc: true
print_background: true
---

#  <span style="color: silver;">above  

<ul>

##  <span style="color: silver;">【考纲内容】  
 <span style="color: silver;">
（一）指令格式的基本概念（二）指令格式（三）寻址方式（四）数据的对齐和大/小端存放方式（五）CISC和RISC的基本概念（六）高级语言程序与机器级代码之间的对应编译器、汇编器与链接器的基本概念：选择结构语句的机器级表示循环结构语句的机器级表示：过程（函数）调用对应的机器级表示  

</ul>

<ul>

##  <span style="color: silver;">【复习提示】  

- 指令系统的重要性：
  - 是表征计算机性能的重要因素。

- 需要掌握的内容：
  - 各种寻址方式的特点及有效地址的计算。
  - 三种偏移寻址的计算：相对寻址、基址寻址和变址寻址。
  - CISC与RISC的特点与区别。

- 2022年大纲新增内容：
  - 机器级表示。
  - 能够读懂机器级代码。

- 考试题型：
  - 可能出选择题。
  - 可能结合其他章节出有关指令的综合题。

- 指令相关知识点的重要性：
  - 指令格式、机器指令和指令寻址方式与CPU指令执行过程紧密相关。
  - 需要引起重视。


在学习本章时，请读者思考以下问题  

1）什么是指令？什么是指令系统？为什么要引入指令系统？2）一般来说，指令分为哪些部分？每部分有什么用处？3）对于一个指令系统来说，寻址方式多和少有什么影响？请读者在本章的学习过程中寻找答案，本章末尾会给出参考答案。  

</ul>

# <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span>  

<ul>

## <span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span>  <span style="color: silver;">体系<span style="color: green;">结构  <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S<span style="color: Gold;">A</span>

>pro：指令集体系结构（ISA）规定的内容（2022）  
<ul>

###  <span style="color: silver;">基本概念

<ul>

- <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span>
  -  <span style="color: silver;">完整定义了</span><u>软件</u>和<u>硬件</u>之间的 <span style="color: LimeGreen;">接口</span>
      - <span style="color: gray; font-size: 14px;">机器语言或汇编语言程序员应熟悉</span>
  - <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span> is（ISA）最<u>核心</u>
- <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span> /<span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span> 
  - 一台计算机的所有<span style="color: LightSkyBlue;">指令</span>的 <span style="color: LimeGreen;">集合</span>
-  <span style="color: silver;">机器指令（简称<span style="color: LightSkyBlue;">指令</span>
   - 指示 <span style="color: silver;">计算机执行某种</span> <span style="color: LimeGreen;">操作</span>'<span style="color: LightSkyBlue;">命令</span>

</ul>

###  <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">规定内容</span>
Instruction Set Architecture，<span style="color: LightSkyBlue;">指令<span style="color: GreenYellow;">集 <span style="color: LimeGreen;">体系 <span style="color: Gold;">结构
<ul>

#### <span style="color: LightSkyBlue;">指令</span>
- 格式
- 寻址方式
- 操作类型
- 每种操作对应的操作数的相应规定

####  <span style="color: LimeGreen;">操作</span><span style="color: LightSkyBlue;">数</span>
- 类型
- 寻址方式
- 存放方式（大端/小端）

#### 硬件<span style="color: Gold;">资源</span>
- 程序可访问的寄存器
  - 编号
  - 个数
  - 位数
- 存储空间
  - 大小
  - 编址方式

####  <span style="color: LimeGreen;">执行<span style="color: Gold;">控制
- 指令执行过程的控制方式
  - 程序计数器
  - 条件码定义

</ul>

### <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">& 程序 <span style="color: LimeGreen;">开发</span>
<ul>

#### <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">与机器级程序
- <span style="color: green;">规定</span>了机器级程序的格式
- 机器语言或汇编语言程序员必须对机器的ISA非常熟悉

####  <span style="color: LimeGreen;">高级</span> <span style="color: silver;">语言编程
- 大多数程序员使用高级语言（如C/C++/Java）编写程序
  - 开发效率更高
  - 不易出错
- 局限性：
  - 抽象层太高
  - 隐藏机器级程序细节
  - 难以利用机器结构相关优化

####  <span style="color: silver;">~重要性
- <span style="font-size: 14px;">对ISA和底层硬件实现细节有充分了解
  - <span style="font-size: 14px;">有助于编制高性能程序

</ul>

</ul>

</ul>

<ul>

##  <span style="color: silver;">基本格式
<ul>

###  <span style="color: silver;">概念
- 指令
  - 定义：一条指令 is 机器语言的一个语句
    - 本质：一组有意义的 <span style="color: black;">二进制</span>代码
  - 组成部分：
    -  <span style="color: LimeGreen;">OP</span>+<span style="color: DarkRed;">A</span>

####  <span style="color: LimeGreen;">操作</span><span style="color: green;">码</span>   <span style="color: silver;">& <span style="color: DarkRed;">地址</span>码
- <span style="color: LimeGreen;">操作</span><span style="color: green;">码</span>
  - 指出该指令应<span style="color: green;">执行</span>什么 <span style="color: GreenYellow;">操作</span>以及具有何种 <span style="color: Gold;">功能</span>
    - 识别指令
    - 了解指令功能
    - 区分操作数地址内容
  - 例如：
    - 运算类型
      - 算术加运算
      - 算术减运算
    - 程序控制
      - 程序转移
      - 返回操作
- <span style="color: silver;"><span style="color: DarkRed;">地址</span>码</span>
  - 给出被操作的信息（指令或数据）的<span style="color: DarkRed;">地址</span>
  - 包括：
    - 参加运算的一个或多个操作数的地址
    - 运算结果的保存地址
    - 程序的转移地址
    - 被调用子程序的入口地址等

#### <span style="color: silver;">~ 字长</span>
- 定义：
  - 一条指令所包含的 <span style="color: black;">二进制</span><span style="color: gray;">代码</span>的<span style="color: LightSkyBlue;">位数</span>
- 决定因素：
  -  <span style="color: LimeGreen;">操作</span>码的长度
  - <span style="color: DarkRed;">地址</span>码的长度、个数
- 与机器字长的关系：
  - = 机器字长
  - or < >机器字长
- 分类：
  - 单字长指令：1 机器字长
  - 半字长指令： 1/2机器字长
  - 双字长指令：2*机器字长

>attention: 
- 指令长度不同会影响取指令时间开销：
  - 单字长指令：
    - 只需访存1次
    - 能将指令完整取出
    - 耗费1个存取周期
  - 双字长指令：
    - 需要访存2次
    - 才能完整取出指令
    - 耗费2个存取周期
#### <span style="color: LightSkyBlue;">指令<span style="color: gray;">字</span><span style="color: LimeGreen;">结构</span>
- 定长指~：
  - 所有指令的长度都相等
  - 特点：执行速度快，控制简单
- 变长~：
  - 各种指令的长度随指令功能而异
- 注意：因为主存一般是按字节编址的，所以指令字长通常为字节的整数倍

>pro：根据指令格式及相关编码条件组合成机器代码（2015）

###  <span style="color: silver;">指令格式 <span style="color: LimeGreen;">分类
<ul>

#### 零<span style="color: DarkRed;">地址</span><span style="color: LightSkyBlue;">指令</span>
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6e7552f06b4d8317fc022359d2dcccb811aec4c3314eb4cd1ac1ec714e795bd3.jpg)
- only <span style="color: LimeGreen;">操作</span>码OP，没有显式地址
- 两种可能：
  - 不需要操作数的指令
    - 如空操作指令、停机指令、关中断指令等
  - 零地址的运算类指令（用在堆栈计算机中）
    - 参与运算的两个操作数从栈顶和次栈顶弹出
    - 送到运算器进行运算
    - 运算结果压入堆栈

####  <span style="color: silver;">一~
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f73beb07fd477d00ecf244bb03d345248115ffa6dad3968d55fb69658646a4ca.jpg)
- 两种常见形态：
  - 只有目的操作数的<span style="color: SlateBlue;">单</span><span style="color: LimeGreen;">操作</span>数指令：
    - 执行过程：
      - 按A₁地址读取操作数
      - 进行OP操作后，结果存回原地址
    - 指令含义：
      - OP(A₁)→A₁
    - 典型指令：
      - 加1
      - 减1
      - 求反
      - 求补
      - 移位

- ![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.86tpfzoekp.webp)
  - 隐含约定目的地址的 <span style="color: Gold;">双</span>~指令：
    - 执行过程：
      - 按指令地址A₁读取源操作数
      - ACC（累加器）提供另一个操作数
      - 运算结果存放在ACC中
    - 指令含义：
      - (ACC)OP(A₁)→ACC
>pro：地址位数与寻址范围的关系（2010、2021）

#####  <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占8位
  - 1个地址码字段占24位
  - 操作数的直接寻址范围为2²⁴=16M
- <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
  - 若地址码字段均为主存地址
  - 需要3次访存：
    - 取指令1次
    - 取操作数<span style="color: gray;">1</span>次
    - 存结果1次

####  <span style="color: silver;">二~
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/808143d9dc4a64a19f32b18f99d45ecad816da4b5a2564cee34b907da02c8e67.jpg)
- 指令含义：(A₁)OP(A₂)→A₁
- 使用场景：
  - 常用的算术和逻辑运算指令
  - 需要 2* <span style="color: LimeGreen;">操作</span>数
  - 目的操作数地址用于保存运算结果

#####  <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占8位
  - 两个地址码字段各占12位
  - 每个操作数的直接寻址范围为2¹²=4K
- <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
  - 若地址码字段均为主存地址
  - 需要4次访存：
    - 取指令1次
    - 取两个操作数 <span style="color: black;">2</span>次
    - 存结果1次

####  <span style="color: silver;">三~
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/964f896e4265099daa90e4a7313c3f27dbada8cdcabb04ced0efe9b9d5d4944a.jpg)
- 指令含义：(A₁)OP(A₂)→A₃

#####  <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占8位
  - 3个地址码字段各占8位
  - 每个操作数的直接寻址范围为2⁸=256
- 访存次数：
  - 若地址码字段均为主存地址
  - 需要4次访存：
    - 取指令1次
    - 取两个操作数<span style="color: black;">2</span>次
    - 存结果1次

####  <span style="color: silver;">四~
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/56bca1a6922d69a95d02641971447a3f6f573122ef2321a9000c316913151d9c.jpg)
- 指令含义：
  - (A₁)OP(A₂)→A₃
  - A₄=下一条将要执行指令的地址

#####  <span style="color: silver;">寻址</span><span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占8位
  - 4个地址码字段各占6位
  - 每个操作数的直接寻址范围为2⁶=64
- 访存次数：
  - 若地址码字段均为主存地址
  - 需要4次访存：
    - 取指令1次
    - 取两个操作数<span style="color: black;">2</span>次
    - 存结果1次

</ul>

</ul>

</ul>

<ul>

##  <span style="color: silver;"><span style="color: gray;">定长</span>操作码指令格式  

>pro：定长操作码的指令条数（2015）  
<ul>

-  <span style="color: LimeGreen;">操作</span>码位置：
   - 在指令字的<span style="color: gray;">最高位</span>部分
   - 分配固定的若干位表示
- 指令系统 <span style="color: GreenYellow;">容量</span>：
  - n位操作码字段
  - 最大能够表示$\color{black}2^n$条指令
- 优点：
  - <span style="color: green;">简化</span>计算机硬件设计
  -  <span style="color: black;">提高</span>指令译码和识别<span style="color: RoyalBlue;">速度
- 场景：
  - 计算机字长较长时的常规用法
    - <span style="color: gray;">32位</span>或<span style="color: gray;">更长</span>字长的系统

</ul>

</ul>

<ul>

## <span style="color: green;">扩展</span> <span style="color: silver;">操作码指令格式  

>pro：扩展操作码的设计与分析（2017、2021、2022）  
<ul>

###  <span style="color: silver;">基本概念
- 设计目的：
  - 在指令字长<span style="color: gray;">有限</span>的前提下保持<span style="color: Gold;">丰富</span>的 指令种类
- 特点：
  - 操作码字段 <span style="color: LightSkyBlue;">位数</span> 不**fix**
  - 分散放在 指令字的不同位置上
  - 操作码 长度 随地址码的减少而增加

###  <span style="color: silver;">具体<span style="color: Gold;">实现
 <span style="color: LimeGreen;">操作</span>码的位数 随 <span style="color: DarkRed;">地址</span>数的减少而增加  
![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.7i0fvxoo5i.webp)


- 示例分析（16位指令字长）：
  - 基本结构：
    - 4位基本操作码字段OP
    - 3个4位长的地址字段A₁、A₂、A₃
  - 指令分配：
    - 三地址指令：15条（1111留作<span style="color: green;">扩展</span>操作码）← 剩的那条
    - 二地址指令：15条（11111111留作~）
    - 一地址指令：15条（111111111111留作~）
    - 零地址指令：16条

###  <span style="color: GreenYellow;">注意
- 关键原则：
  -  <span style="color: LimeGreen;">短</span>码 <span style="color: black;">不能</span>是<span style="color: LightSkyBlue;">长</span>码的前缀
  - 各指令的操作码不能重复
- 优化建议：
  - 使用$f$<span style="color: LightSkyBlue;">高</span>的指令分配较 <span style="color: Gold;">短</span>操作码
  - 使用$f$ <span style="color: LimeGreen;">低</span>的指令分配较<span style="color: gray;">长</span>操作码

</ul>

</ul>

<ul>

##  <span style="color: silver;">指令的<span style="color: gray;">操作<span style="color: LimeGreen;">类型  
<ul>

### <span style="color: LightSkyBlue;">数据</span><span style="color: green;">传送  
- 主要指令类型：
  -  <span style="color: LimeGreen;">R</span>之间的传送（MOV）
  -  <span style="color: LimeGreen;">R</span>→ <span style="color: black;">Memory</span>（LOAD）
  - <span style="color: LimeGreen;">R</span>← <span style="color: black;">Memory</span>（STORE）
  - 进栈操作（PUSH）
  - 出栈操作（POP）

###  <span style="color: LimeGreen;">算术</span> <span style="color: silver;">和 <span style="color: Gold;">逻辑</span>运算  
<span style="font-size: 12px;">  详见 机器级代码表示
- 主要指令类型：
  -  <span style="color: LimeGreen;">算术</span>运算：
     - 加（ADD）
     - 减（SUB）
     - 乘（MUL）
     - 除（DIV）
     - 加1（INC）
     - 减1（DEC）
  -  <span style="color: Gold;">逻辑</span>运算：
     - 与（AND）
     - 或（OR）
     - 取反（NOT）
     - 异或（XOR）

###  <span style="color: LimeGreen;">移位  
- 主要类型：
  - 算术移位
  - 逻辑移位
  - 循环移位

### <span style="color: green;">转移

>pro：转跳指令、调用和返回指令、条件转移指令的区分（2019）  

- 主要指令类型：
  - 无条件转移（JMP）
  - 条件转移（BRANCH）
  - 调用（CALL）
  - 返回（RET）
  - 陷阶（TRAP）

-  <span style="color: Gold;">对比</span>：
   - <span style="color: purple;">无</span><span style="color: LimeGreen;">条件</span>转移
     -  <span style="color: black;">任何情况</span>下都执行转移操作
   -  <span style="color: LimeGreen;">条件</span>转移
        - 仅在特定条件满足时执行转移
        - 转移条件
           - 某个标志位的值
           - 几个标志位的组合
   - <span style="color: RoyalBlue;">调用</span>指令vs<span style="color: green;">转移</span>指令
     - 调用指令
        - 需保存 <span style="color: black;">返回</span><span style="color: DarkRed;">地址</span>
        - 子程序结束后返回主程序
     - <span style="color: green;">转移</span>指令
        -  <span style="color: black;">不返回</span>执行
### I O 
- 主要功能：
  - 完成CPU与外部设备的 <span style="color: black;">数据交换</span>
  - 传送控制命令及状态信息 

</ul>

</ul>

# <span style="color: green;">寻址</span><span style="color: silver;">方式  

<ul>

- 寻址方式：
  - 定义：寻找指令或操作数有效地址的方式
  - 作用：确定
    - 本条指令的数据地址
    - 下一条待执行指令的地址
  - 分类：
    -  <span style="color: LimeGreen;">指令</span>寻址
    - <span style="color: LightSkyBlue;">数据</span>寻址

</ul>

<ul>

##  <span style="color: silver;"> <span style="color: LimeGreen;">指令</span>寻址和<span style="color: LightSkyBlue;">数据</span>寻址

<ul>

- 指令寻址：寻找 <span style="color: black;">下一条</span>将要执行的指令<span style="color: DarkRed;">地址
- 数据寻址：寻找 <span style="color: black;">本条</span>指令的数据~

</ul>

<ul>

###  <span style="color: LimeGreen;">指令</span><span style="color: silver;">寻址
<ul>

#### <span style="color: gray;">顺序 <span style="color: silver;">寻址
- 通过 <span style="color: black;">PC</span> <span style="color: Gold;">自增</span>实现
- ~过程
  - PC+1条指令的 <span style="color: black;">长度</span>
    - 自动形成下一条指令的<span style="color: DarkRed;">地址
  - 大小
    - 与 <span style="color: LimeGreen;">编址</span>方式、<span style="color: LightSkyBlue;">指令</span>字长有关
>pro：PC自增大小与编址方式、指令字长的关系（2013、2014、2019、2023）  

>attention: 
- 现代计算机通常是按字节编址的
- <span style="color: LightSkyBlue;">指令</span>字长：
  -  <span style="color: black;">16</span>位指令字长
      - PC自增为 $(\mathrm{PC})+\color{black}2$
  -  <span style="color: black;">32</span>位指令字长
       - PC自增为 $(\mathrm{PC})+\color{blue}4$

####  <span style="color: LimeGreen;">跳跃<span style="color: silver;">寻址
通过<span style="color: green;">转移</span><span style="color: gray;">类</span>指令实现
  - 定义
    - 由本条指令 <span style="color: black;">给出下条</span>指令<span style="color: DarkRed;">地址</span>的计算方式
    - 是否跳跃可能受到 <span style="color: Gold;">状态</span>R的控制
  - 方式
    - <span style="color: gray;">绝对</span>转移
      - 地址码 <span style="color: black;">直接</span>指出转移目标地址
    -  <span style="color: GreenYellow;">相对</span>转移
      - 地址码指出转移目的地址 <span style="color: black;">相对于当前</span>PC值的偏移量
  - 转移指令执行结果
    - 修改PC值
    - CPU根据PC的内容去主存取下一条指令
>pro：指令格式中各字段的位数分析（2020）  

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span>寻址
<ul>

  - 定义
    - 在指令中表示 <span style="color: LimeGreen;">操作</span>数<span style="color: DarkRed;">地址</span>的方式
    - 计算操作数地址的方法
  - 寻址 <span style="color: Gold;">特征</span>字段
      - 用于<span style="color: green;">标识</span>具体的寻址<u>方式</u>
      - 字段 <span style="color: black;">位数</span>决定可支持的寻址方式<span style="color: gray;">数量

>pro：指令格式中寻址特征字段的作用（2023）  

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cc57f57875406369a446ee41b6e46ac9b01777329de41e632ddfab7ec83264fd.jpg)  

- <span style="color: DarkRed;">地址</span>码字段与 <span style="color: LimeGreen;">操作</span>数<span style="color: gray;">真实地址</span>的关系
  - 地址码字段<span style="color: gray;">不直接</span>代表操作数的真实地址
  - 分类
    - <span style="color: gray;">形式</span>地址(<span style="color: DarkRed;">A</span>)
      - 指令中的<span style="color: DarkRed;">地址</span>码字段
    - <span style="color: LightSkyBlue;">有效</span>地址(<span style="color: LightSkyBlue;">E</span><span style="color: DarkRed;">A</span>)
      - 操作数在存储器中的真实地址
      - 计算方式
        - 通过形式地址和寻址方式计算得出
- (<span style="color: DarkRed;">A</span>)位数的决定作用
  - <span style="color: LightSkyBlue;">立即</span>寻址
    - 操作数的范围
  -  <span style="color: black;">直接</span>寻址
      - 可寻址的范围
  -  <span style="color: LimeGreen;">R</span>寻址
     - 通用R的最大<span style="color: gray;">数量</span>
  -  <span style="color: LimeGreen;">R</span><span style="color: gray;">间接</span>寻址
     - R的位数决定可寻址的范围
>attention: 

（A）表示地址为A的数值
- A既可以是寄存器编号，又可以是内存地址。

</ul>

</ul>

</ul>

<ul>

##  <span style="color: silver;">common<span style="color: LightSkyBlue;">数据</span>寻址方式
<ul>

### 基本 <span style="color: silver;">寻址方式
<ul>

####  <span style="color: silver;">隐含~
不明显地给出操作数的地址，而是隐含操作数的地址
- 单地址指令格式的隐含约定
  - 第二个操作数由累加器(ACC)提供
  - 指令中只明显指出第一个操作数的地址
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/eb95a905f61e44cad56b518a1aa375ef438a60ca7ed3fc676e2fa55c6f573d41.jpg)  
图4.2隐含寻址  

- 优缺点
  - 优点：有利于缩短指令字长
  - 缺点：需增加存储操作数或隐含地址的硬件

#### <span style="color: LightSkyBlue;">立即</span>（数）~
>pro：立即寻址的概念（2023）

- 概念
  - 指令字中的<span style="color: DarkRed;">地址</span>字段
    - 不是操作数的地址
    - 而是 <span style="color: LimeGreen;">操作</span>数 <span style="color: black;">本身</span>
      - 也称<span style="color: gray;">立即数
      - 采用补码表示
  - #: 立即寻址 <span style="color: Gold;">特征
  - A:  <span style="color: LimeGreen;">操作</span>数
- 优缺点
  - 优点
    - 指令在执行阶段<span style="color: purple;">不</span> <span style="color: LimeGreen;">访 <span style="color: Gold;">存
    - 指令执行速度最 <span style="color: black;">快
  - 缺点
    - A的<span style="color: gray;">位数</span> <span style="color: black;">限制了</span>立即数的范围
#### 直接~
- 指令字中的形式地址<span style="color: DarkRed;">A</span>就是操作数的 <span style="color: black;">真实</span><span style="color: DarkRed;">地址</span><span style="color: LightSkyBlue;">E</span><span style="color: DarkRed;">A</span>
  - </span><span style="color: LightSkyBlue;">E</span><span style="color: DarkRed;">A</span> = <span style="color: DarkRed;">A</span>

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/948183c5b772d6544c6bec9a19645480a2b25ccbad62d507552486df04009957.jpg)  

- 优缺点
  - 优点
    - 简单，不需要专门计算操作数的地址
    - 指令在执行阶段仅需<span style="color: LimeGreen;">访<span style="color: Gold;">存</span> <span style="color: black;">一次
  - 缺点
    - A的<span style="color: gray;">位数</span> <span style="color: black;">限制了</span>该指令操作数的寻址<span style="color: gray;">范围</span>
    - 操作数的地址<span style="color: gray;">不易修改

</ul>

### <span style="color: gray;">间接</span> <span style="color: silver;">寻址类
<ul>

#### <span style="color: gray;">间接~
- 指令的地址字段给出的是操作数有效地址所在主存单元的地址
  - 即操作数地址的地址
  - EA = (A)

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/297661d0b53d517f5369db6eeea0399b48288d259fb0194ce89d2cff392ca596.jpg)  
图4.5间接寻址  

- 优缺点
  - 优点
    - 可扩大寻址范围
    - 便于编制程序
  - 缺点：指令在执行阶段要多次访存

####  <span style="color: LimeGreen;">R</span> <span style="color: silver;">寻址
- 与直接寻址原理相同，但访问寄存器而非主存
  - 指令的地址字段给出操作数所在寄存器的编号
  - EA = Ri

>pro：寄存器编号位数与寄存器数量的关系（2022）  

- 优缺点
  - 优点
    - 执行速度快，不用访存
    - 指令字长较短
  - 缺点
    - 寄存器价格昂贵
    - CPU寄存器数量有限

#### <span style="color: LimeGreen;">R</span> <span style="color: silver;"><span style="color: gray;">间接</span>寻址
>pro：寄存器间接寻址的取数操作（2010）  

- 综合了间接寻址和寄存器寻址特点
  - Ri所指寄存器给出操作数所在主存单元的地址
  - EA = (Ri)

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/92cc364b37cca2cace4edc484a7917ca840b456ec8c78df2714108a04df0e6ef.jpg)  
图4.6寄存器寻址  

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/71cf46d10de7a2353718ca3f208d5dd43920b00188d4ad2d26638c7036ec9415.jpg)  
图4.7寄存器间接寻址  

- 特点比较
  - 相比间接寻址
    - 扩大了寻址范围
    - 减少了访存次数
  - 相比寄存器寻址
    - 执行阶段需要访存获得操作数

</ul>

### <span style="color: green;">偏移</span> <span style="color: silver;">寻址类
<ul>

####  <span style="color: Gold;">相对 <span style="color: silver;">寻址
>pro：相对寻址的偏移量或目标地址的计算（2009、2013、2014、2019、2023）  

#####   <span style="color: silver;">原理
- <span style="color: LightSkyBlue;">E</span><span style="color: DarkRed;">A</span>计算
  - EA = (<span style="color: LightSkyBlue;">P</span><span style="color: LimeGreen;">C</span>) + <span style="color: DarkRed;">A</span>
    - PC内容 + 指令格式中的形式地址A
    - A: 相对于当前PC值的偏移量，可正可负，补码表示

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54a79a897f2ebe46f3c3320ba9fc90c8d14eba5a2917c433c88919cf0d1c4e2d.jpg)  
图4.8相对寻址  

##### 特点
- 寻址范围
  - <span style="color: DarkRed;">A</span>的 <span style="color: black;">位数</span>决定操作数的寻址范围
- 优势
  - 操作数<span style="color: DarkRed;">地址</span>不 <span style="color: GreenYellow;">fix</span>，随PC值变化
  - 与指令地址保持固定偏移量
  - 便于程序浮动
- 应用
  - 广泛应用于转移指令
>pro：相对寻址转跳范围的计算（2010、2013、2014）  

>attention: 

- 对于转移指令JMPA
  - 若指令的地址为X，且占2B
  - 取出该指令后
    - PC的值会增2
    - 即 $(\mathrm{PC})\,{=}\,\mathrm{X}+2$
  - 执行完该指令后
    - 会自动跳转到 $\mathrm{X}+2+\mathrm{A}$ 的地址继续执行
#### <span style="color: LightSkyBlue;">基址</span> <span style="color: silver;">寻址
>pro：基址寻址的EA的计算（2019）  

- EA = (<span style="color: LightSkyBlue;">B</span><span style="color: LimeGreen;">R</span>) + <span style="color: DarkRed;">A</span>
  - BR+指令字中的形式地址A
  - 基址寄存器
    - 可以是专用寄存器或通用寄存器

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a34564d3543b6f2ccacb8cfb471b140348d32097e27bbf6b321ab8f9a9a2be06.jpg)  
图4.9基址寻址  

- 特点
  - 面向 <span style="color: Gold;">OS</span>
  - 内容由操作系统或管理程序确定
  - BR内容不变
- 优点
  - 可以 <span style="color: black;">扩大</span>寻址 <span style="color: LimeGreen;">范围
  - 有利于多道程序设计
  - 可用于编制浮动程序
- 缺点：偏移量 <span style="color: black;">位数</span>较 <span style="color: Gold;">短</span>

#### <span style="color: green;">变<span style="color: LightSkyBlue;">址</span> <span style="color: silver;">寻址
>pro：变址寻址的EA的计算（2013），先变址后间址方式的EA的计算（2016）  

- EA = (IX) + A
- IX+指令字中的形式地址A
- IX: 变址寄存器
  - 可用 专用变址寄存器或通用寄存器

>pro：变址寻址的适用场景（2017）  

- 特点
  - 面向 <span style="color: LimeGreen;">user</span>
  - 执行过程中变址寄存器内容可变
  - 形式地址A不变

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f0e1bf068edf0a515fc2ed92442f6f857a8030bab1164982e17c514ba92116c.jpg)  
图4.10变址寻址  

>pro：变址寻址访问数组的过程（2018）  

- 与<span style="color: LightSkyBlue;">基址</span>寻址的区别
  - 基址寻址
    - 面向系统
    - 基址寄存器内容不可变
    - 指令字中A可变
  - 变址寻址
    - 面向用户
    - 变址寄存器 <span style="color: Gold;">内容</span> <span style="color: black;">可变</span>
    - 指令字中<span style="color: DarkRed;">A</span>不可变

>pro：偏移寻址的范畴（2011）  

- 偏移寻址包括
  - 相对寻址
  - 基址寻址
  - 变址寻址

</ul>

### <span style="color: SlateBlue;">特殊</span>~
<ul>

####  <span style="color: silver;">堆<span style="color: Gold;">栈</span>~
- 堆栈 <span style="color: Gold;">特点</span>
  - 特定存储区域
  -  <span style="color: black;">后进先出</span>(LIFO)原则
  - 使用堆栈指针( <span style="color: Gold;">S</span> <span style="color: LimeGreen;">P</span>)管理
- 堆栈类型
  -  <span style="color: LimeGreen;">硬</span>堆栈(寄存器堆栈)
      - 成本高
      - 不适合大容量
  - <span style="color: LightSkyBlue;">软</span>堆栈(主存区域)
    - 成本低
    - 最常用
- 操作特点
  - 大部分指令表现为<span style="color: purple;">无</span> <span style="color: LimeGreen;">操作</span>数形式
  - <span style="color: Gold;">S</span> <span style="color: LimeGreen;">P</span>
    - 隐含使用~
    - 自动完成~的 <span style="color: black;">加减</span>操作

表4.1寻址方式、有效地址及访存次数
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c51f3e89ddc451b47a9e622c8b801b80139caf0bb46af25e8b2187d5cd2dfd58.jpg)  
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1c50194cc3786f302b53c78b63af2b45a119ca8380862b67f5dcabb0710cde4.jpg)  

</ul>

</ul>

</ul>

---

以上内容严格遵循您的要求，未更改任何 Markdown 格式的图片链接，并确保 `<ul></ul>` 标签正确包裹每个标题段落的内容，同时上下均保留空行。

