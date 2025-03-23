以下是按照您的要求处理后的内容，关键词、公式定理、关键步骤被挖空，并将答案以折叠块形式放在每个次级标题下。输出同时包含 Markdown 和 HTML 格式。

---

### Markdown 输出

```markdown
html:
  	toc: true
print_background: true
---

# <span style="color: silver;">above  

<ul>

## <span style="color: silver;">【考纲内容】  
 <span style="color: silver;">

<ul>

（一）____的基本概念（二）____（三）____（四）数据的____和大/小端存放方式（五）____的基本概念（六）____与____之间的对应编译器、____与____的基本概念：____的机器级表示____的机器级表示：____对应的机器级表示  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令格式</li>
    <li>指令格式</li>
    <li>寻址方式</li>
    <li>对齐</li>
    <li>CISC和RISC</li>
    <li>高级语言程序</li>
    <li>机器级代码</li>
    <li>汇编器</li>
    <li>链接器</li>
    <li>选择结构语句</li>
    <li>循环结构语句</li>
    <li>过程（函数）调用</li>
  </ul>
</details>
</div>

</ul>

<ul>

## <span style="color: silver;">【复习提示】  

<ul>

- 指令系统的重要性：
  - 是表征____的重要因素。

- 需要掌握的内容：
  - 各种____的特点及____的计算。
  - 三种____的计算：____、____和____。
  - ____与____的特点与区别。

- 2022年大纲新增内容：
  - ____。
  - 能够读懂____。

- 考试题型：
  - 可能出____。
  - 可能结合其他章节出有关____的综合题。

- 指令相关知识点的重要性：
  - ____、____和____与____紧密相关。
  - 需要引起重视。

在学习本章时，请读者思考以下问题  

1）什么是____？什么是____？为什么要引入____？2）一般来说，指令分为哪些部分？每部分有什么用处？3）对于一个指令系统来说，____多和少有什么影响？请读者在本章的学习过程中寻找答案，本章末尾会给出参考答案。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>计算机性能</li>
    <li>寻址方式</li>
    <li>有效地址</li>
    <li>偏移寻址</li>
    <li>相对寻址</li>
    <li>基址寻址</li>
    <li>变址寻址</li>
    <li>CISC</li>
    <li>RISC</li>
    <li>机器级表示</li>
    <li>机器级代码</li>
    <li>选择题</li>
    <li>指令</li>
    <li>指令格式</li>
    <li>机器指令</li>
    <li>指令寻址方式</li>
    <li>CPU指令执行过程</li>
    <li>指令</li>
    <li>指令系统</li>
    <li>指令系统</li>
    <li>寻址方式</li>
  </ul>
</details>
</div>

</ul>

# <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span>  

<ul>

## <span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span> <span style="color: silver;">体系<span style="color: green;">结构 <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S<span style="color: Gold;">A</span>

>pro：指令集体系结构（ISA）规定的内容（2022）  
<ul>

### <span style="color: silver;">基本概念

<ul>

- <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span>
  - <span style="color: silver;">完整定义了</span><u>____</u>和<u>____</u>之间的 <span style="color: LimeGreen;">____</span>
      - <span style="color: gray; font-size: 14px;">____应熟悉</span>
  - <span style="color: LightSkyBlue;">____</span><span style="color: deepskyblue;">____</span> is（ISA）最<u>____</u>
- <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span> /<span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span> 
  - 一台计算机的所有<span style="color: LightSkyBlue;">____</span>的 <span style="color: LimeGreen;">____</span>
- <span style="color: silver;">机器指令（简称<span style="color: LightSkyBlue;">____</span>
   - 指示 <span style="color: silver;">计算机执行某种</span> <span style="color: LimeGreen;">____</span>'<span style="color: LightSkyBlue;">____</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>软件</li>
    <li>硬件</li>
    <li>接口</li>
    <li>机器语言或汇编语言程序员</li>
    <li>指令</li>
    <li>系统</li>
    <li>核心</li>
    <li>指令</li>
    <li>集合</li>
    <li>指令</li>
    <li>操作</li>
    <li>命令</li>
  </ul>
</details>
</div>

### <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">规定内容</span>
Instruction Set Architecture，<span style="color: LightSkyBlue;">指令<span style="color: GreenYellow;">集 <span style="color: LimeGreen;">体系 <span style="color: Gold;">结构
<ul>

#### <span style="color: LightSkyBlue;">指令</span>
- ____
- ____
- ____
- 每种操作对应的____的相应规定

#### <span style="color: LimeGreen;">操作</span><span style="color: LightSkyBlue;">数</span>
- ____
- ____
- ____（大端/小端）

#### 硬件<span style="color: Gold;">资源</span>
- 程序可访问的____
  - ____
  - ____
  - ____
- ____
  - ____
  - ____

#### <span style="color: LimeGreen;">执行<span style="color: Gold;">控制
- ____的控制方式
  - ____
  - ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>格式</li>
    <li>寻址方式</li>
    <li>操作类型</li>
    <li>操作数</li>
    <li>类型</li>
    <li>寻址方式</li>
    <li>存放方式</li>
    <li>寄存器</li>
    <li>编号</li>
    <li>个数</li>
    <li>位数</li>
    <li>存储空间</li>
    <li>大小</li>
    <li>编址方式</li>
    <li>指令执行过程</li>
    <li>程序计数器</li>
    <li>条件码定义</li>
  </ul>
</details>
</div>

### <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">& 程序 <span style="color: LimeGreen;">开发</span>
<ul>

#### <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">与机器级程序
- <span style="color: green;">____</span>了机器级程序的格式
- ____必须对机器的ISA非常熟悉

#### <span style="color: LimeGreen;">高级</span> <span style="color: silver;">语言编程
- 大多数程序员使用____（如C/C++/Java）编写程序
  - 开发效率____
  - 不易____
- 局限性：
  - ____太高
  - 隐藏____细节
  - 难以利用____相关优化

#### <span style="color: silver;">~重要性
- <span style="font-size: 14px;">对ISA和____有充分了解
  - <span style="font-size: 14px;">有助于编制____程序

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>规定</li>
    <li>机器语言或汇编语言程序员</li>
    <li>高级语言</li>
    <li>更高</li>
    <li>出错</li>
    <li>抽象层</li>
    <li>机器级程序</li>
    <li>机器结构</li>
    <li>底层硬件实现细节</li>
    <li>高性能</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

## <span style="color: silver;">基本格式
<ul>

### <span style="color: silver;">概念
- 指令
  - 定义：一条指令 is ____的一个语句
    - 本质：一组有意义的 <span style="color: black;">____</span>代码
  - 组成部分：
    - <span style="color: LimeGreen;">____</span>+<span style="color: DarkRed;">____</span>

#### <span style="color: LimeGreen;">操作</span><span style="color: green;">码</span> <span style="color: silver;">& <span style="color: DarkRed;">地址</span>码
- <span style="color: LimeGreen;">操作</span><span style="color: green;">码</span>
  - 指出该指令应<span style="color: green;">____</span>什么 <span style="color: GreenYellow;">____</span>以及具有何种 <span style="color: Gold;">____</span>
    - ____指令
    - 了解____
    - 区分____内容
  - 例如：
    - ____类型
      - ____运算
      - ____运算
    - ____
      - ____
      - ____
- <span style="color: silver;"><span style="color: DarkRed;">地址</span>码</span>
  - 给出被操作的信息（指令或数据）的<span style="color: DarkRed;">____</span>
  - 包括：
    - 参加运算的一个或多个____的地址
    - ____的保存地址
    - 程序的____
    - 被调用____的入口地址等

#### <span style="color: silver;">~ 字长</span>
- 定义：
  - 一条指令所包含的 <span style="color: black;">____</span><span style="color: gray;">____</span>的<span style="color: LightSkyBlue;">____</span>
- 决定因素：
  - <span style="color: LimeGreen;">____</span>码的长度
  - <span style="color: DarkRed;">____</span>码的长度、个数
- 与____的关系：
  - = ____
  - or < >____
- 分类：
  - ____指令：1 机器字长
  - ____指令： 1/2机器字长
  - ____指令：2*机器字长

>attention: 
- 指令长度不同会影响____时间开销：
  - 单字长指令：
    - 只需____1次
    - 能将指令完整取出
    - 耗费1个____周期
  - 双字长指令：
    - 需要____2次
    - 才能完整取出指令
    - 耗费2个____周期

#### <span style="color: LightSkyBlue;">指令<span style="color: gray;">字</span><span style="color: LimeGreen;">结构</span>
- 定长指~：
  - 所有指令的____都相等
  - 特点：____快，____简单
- 变长~：
  - 各种指令的____随指令功能而异
- 注意：因为主存一般是按____编址的，所以指令字长通常为____的整数倍

>pro：根据____及相关____条件组合成机器代码（2015）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>机器语言</li>
    <li>二进制</li>
    <li>OP</li>
    <li>A</li>
    <li>执行</li>
    <li>操作</li>
    <li>功能</li>
    <li>识别</li>
    <li>指令功能</li>
    <li>操作数地址</li>
    <li>运算</li>
    <li>算术加</li>
    <li>算术减</li>
    <li>程序控制</li>
    <li>程序转移</li>
    <li>返回操作</li>
    <li>地址</li>
    <li>操作数</li>
    <li>运算结果</li>
    <li>转移地址</li>
    <li>子程序</li>
    <li>二进制</li>
    <li>代码</li>
    <li>位数</li>
    <li>操作</li>
    <li>地址</li>
    <li>机器字长</li>
    <li>机器字长</li>
    <li>机器字长</li>
    <li>单字长</li>
    <li>半字长</li>
    <li>双字长</li>
    <li>取指令</li>
    <li>访存</li>
    <li>存取</li>
    <li>访存</li>
    <li>存取</li>
    <li>长度</li>
    <li>执行速度</li>
    <li>控制</li>
    <li>长度</li>
    <li>字节</li>
    <li>字节</li>
    <li>指令格式</li>
    <li>编码</li>
  </ul>
</details>
</div>

### <span style="color: silver;">指令格式 <span style="color: LimeGreen;">分类
<ul>

#### 零<span style="color: DarkRed;">地址</span><span style="color: LightSkyBlue;">指令</span>
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6e7552f06b4d8317fc022359d2dcccb811aec4c3314eb4cd1ac1ec714e795bd3.jpg)
- only <span style="color: LimeGreen;">____</span>码OP，没有显式地址
- 两种可能：
  - 不需要____的指令
    - 如____指令、____指令、____指令等
  - 零地址的____类指令（用在____计算机中）
    - 参与运算的两个操作数从____和____弹出
    - 送到____进行运算
    - 运算结果____堆栈

#### <span style="color: silver;">一~
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f73beb07fd477d00ecf244bb03d345248115ffa6dad3968d55fb69658646a4ca.jpg)
- 两种常见形态：
  - 只有目的操作数的<span style="color: SlateBlue;">____</span><span style="color: LimeGreen;">____</span>数指令：
    - 执行过程：
      - 按A₁地址____操作数
      - 进行OP操作后，结果____原地址
    - 指令含义：
      - ____→A₁
    - 典型指令：
      - ____
      - ____
      - ____
      - ____
      - ____

- ![image](https://bluejedis.github.io/picx-images-hosting/test/image.86tpfzoekp.webp)
  - 隐含约定目的地址的 <span style="color: Gold;">____</span>~指令：
    - 执行过程：
      - 按指令地址A₁读取____操作数
      - ____（累加器）提供另一个操作数
      - 运算结果存放在____中
    - 指令含义：
      - ____OP(A₁)→ACC
>pro：地址位数与____的关系（2010、2021）

##### <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占____位
  - 1个地址码字段占____位
  - 操作数的直接寻址范围为____=16M
- <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
  - 若地址码字段均为主存地址
  - 需要____次访存：
    - ____1次
    - ____<span style="color: gray;">1</span>次
    - ____1次

#### <span style="color: silver;">二~
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/808143d9dc4a64a19f32b18f99d45ecad816da4b5a2564cee34b907da02c8e67.jpg)
- 指令含义：____OP(A₂)→A₁
- 使用场景：
  - 常用的____和____运算指令
  - 需要 ____* <span style="color: LimeGreen;">____</span>数
  - 目的操作数地址用于保存____

##### <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占____位
  - 两个地址码字段各占____位
  - 每个操作数的直接寻址范围为____=4K
- <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
  - 若地址码字段均为主存地址
  - 需要____次访存：
    - ____1次
    - 取两个操作数 <span style="color: black;">____</span>次
    - ____1次

#### <span style="color: silver;">三~
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/964f896e4265099daa90e4a7313c3f27dbada8cdcabb04ced0efe9b9d5d4944a.jpg)
- 指令含义：____OP(A₂)→A₃

##### <span style="color: silver;">寻址<span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占____位
  - 3个地址码字段各占____位
  - 每个操作数的直接寻址范围为____=256
- 访存次数：
  - 若地址码字段均为主存地址
  - 需要____次访存：
    - ____1次
    - 取两个操作数<span style="color: black;">____</span>次
    - ____1次

#### <span style="color: silver;">四~
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/56bca1a6922d69a95d02641971447a3f6f573122ef2321a9000c316913151d9c.jpg)
- 指令含义：
  - ____OP(A₂)→A₃
  - A₄=下一条将要执行____的地址

##### <span style="color: silver;">寻址</span><span style="color: green;">范围
- 若指令字长为32位：
  - 操作码占____位
  - 4个地址码字段各占____位
  - 每个操作数的直接寻址范围为____=64
- 访存次数：
  - 若地址码字段均为主存地址
  - 需要____次访存：
    - ____1次
    - 取两个操作数<span style="color: black;">____</span>次
    - ____1次

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作</li>
    <li>操作数</li>
    <li>空操作</li>
    <li>停机</li>
    <li>关中断</li>
    <li>运算</li>
    <li>堆栈</li>
    <li>栈顶</li>
    <li>次栈顶</li>
    <li>运算器</li>
    <li>压入</li>
    <li>单</li>
    <li>操作</li>
    <li>读取</li>
    <li>存回</li>
    <li>OP(A₁)</li>
    <li>加1</li>
    <li>减1</li>
    <li>求反</li>
    <li>求补</li>
    <li>移位</li>
    <li>双</li>
    <li>源</li>
    <li>ACC</li>
    <li>ACC</li>
    <li>(ACC)</li>
    <li>寻址范围</li>
    <li>8</li>
    <li>24</li>
    <li>2²⁴</li>
    <li>3</li>
    <li>取指令</li>
    <li>取操作数</li>
    <li>存结果</li>
    <li>(A₁)</li>
    <li>算术</li>
    <li>逻辑</li>
    <li>2</li>
    <li>操作</li>
    <li>运算结果</li>
    <li>8</li>
    <li>12</li>
    <li>2¹²</li>
    <li>4</li>
    <li>取指令</li>
    <li>2</li>
    <li>存结果</li>
    <li>(A₁)</li>
    <li>8</li>
    <li>8</li>
    <li>2⁸</li>
    <li>4</li>
    <li>取指令</li>
    <li>2</li>
    <li>存结果</li>
    <li>(A₁)</li>
    <li>指令</li>
    <li>8</li>
    <li>6</li>
    <li>2⁶</li>
    <li>4</li>
    <li>取指令</li>
    <li>2</li>
    <li>存结果</li>
  </ul>
</details>
</div>

</ul>

</ul>

<ul>

## <span style="color: silver;"><span style="color: gray;">定长</span>操作码指令格式  

>pro：定长操作码的指令条数（2015）  
<ul>

- <span style="color: LimeGreen;">操作</span>码位置：
   - 在指令字的<span style="color: gray;">____</span>部分
   - 分配固定的若干位表示
- 指令系统 <span style="color: GreenYellow;">____</span>：
  - n位操作码字段
  - 最大能够表示$\color{black}____$条指令
- 优点：
  - <span style="color: green;">____</span>计算机硬件设计
  - <span style="color: black;">____</span>指令译码和识别<span style="color: RoyalBlue;">____
- 场景：
  - 计算机字长较长时的常规用法
    - <span style="color: gray;">____</span>或<span style="color: gray;">____</span>字长的系统

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>最高位</li>
    <li>容量</li>
    <li>2^n</li>
    <li>简化</li>
    <li>提高</li>
    <li>速度</li>
    <li>32位</li>
    <li>更长</li>
  </ul>
</details>
</div>

</ul>

<ul>

## <span style="color: green;">扩展</span> <span style="color: silver;">操作码指令格式  

>pro：扩展操作码的设计与分析（2017、2021、2022）  
<ul>

### <span style="color: silver;">基本概念
- 设计目的：
  - 在指令字长<span style="color: gray;">____</span>的前提下保持<span style="color: Gold;">____</span>的 指令种类
- 特点：
  - 操作码字段 <span style="color: LightSkyBlue;">____</span> 不**fix**
  - 分散放在 指令字的____上
  - 操作码 ____ 随地址码的减少而增加

### <span style="color: silver;">具体<span style="color: Gold;">实现
 <span style="color: LimeGreen;">操作</span>码的位数 随 <span style="color: DarkRed;">地址</span>数的减少而增加  
![image](https://bluejedis.github.io/picx-images-hosting/test/image.7i0fvxoo5i.webp)

- 示例分析（16位指令字长）：
  - 基本结构：
    - ____基本操作码字段OP
    - 3个____长的地址字段A₁、A₂、A₃
  - 指令分配：
    - 三地址指令：____条（1111留作<span style="color: green;">____</span>操作码）← 剩的那条
    - 二地址指令：____条（11111111留作~）
    - 一地址指令：____条（111111111111留作~）
    - 零地址指令：____条

### <span style="color: GreenYellow;">注意
- 关键原则：
  - <span style="color: LimeGreen;">____</span>码 <span style="color: black;">____</span>是<span style="color: LightSkyBlue;">____</span>码的前缀
  - 各指令的____不能重复
- 优化建议：
  - 使用$f$<span style="color: LightSkyBlue;">____</span>的指令分配较 <span style="color: Gold;">____</span>操作码
  - 使用$f$ <span style="color: LimeGreen;">____</span>的指令分配较<span style="color: gray;">____</span>操作码

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有限</li>
    <li>丰富</li>
    <li>位数</li>
    <li>不同位置</li>
    <li>长度</li>
    <li>4位</li>
    <li>4位</li>
    <li>15</li>
    <li>扩展</li>
    <li>15</li>
    <li>15</li>
    <li>16</li>
    <li>短</li>
    <li>不能</li>
    <li>长</li>
    <li>操作码</li>
    <li>高</li>
    <li>短</li>
    <li>低</li>
    <li>长</li>
  </ul>
</details>
</div>

</ul>

<ul>

## <span style="color: silver;">指令的<span style="color: gray;">操作<span style="color: LimeGreen;">类型  
<ul>

### <span style="color: LightSkyBlue;">数据</span><span style="color: green;">传送  
- 主要指令类型：
  - <span style="color: LimeGreen;">____</span>之间的传送（MOV）
  - <span style="color: LimeGreen;">____</span>→ <span style="color: black;">____</span>（LOAD）
  - <span style="color: LimeGreen;">____</span>← <span style="color: black;">____</span>（STORE）
  - ____操作（PUSH）
  - ____操作（POP）

### <span style="color: LimeGreen;">算术</span> <span style="color: silver;">和 <span style="color: Gold;">逻辑</span>运算  
<span style="font-size: 12px;"> 详见 机器级代码表示
- 主要指令类型：
  - <span style="color: LimeGreen;">____</span>运算：
     - ____（ADD）
     - ____（SUB）
     - ____（MUL）
     - ____（DIV）
     - ____（INC）
     - ____（DEC）
  - <span style="color: Gold;">____</span>运算：
     - ____（AND）
     - ____（OR）
     - ____（NOT）
     - ____（XOR）

### <span style="color: LimeGreen;">移位  
- 主要类型：
  - ____移位
  - ____移位
  - ____移位

### <span style="color: green;">转移

>pro：转跳指令、调用和返回指令、条件转移指令的区分（2019）  

- 主要指令类型：
  - ____（JMP）
  - ____（BRANCH）
  - ____（CALL）
  - ____（RET）
  - ____（TRAP）

- <span style="color: Gold;">对比</span>：
   - <span style="color: purple;">____</span><span style="color: LimeGreen;">____</span>转移
     - <span style="color: black;">____</span>下都执行转移操作
   - <span style="color: LimeGreen;">____</span>转移
        - 仅在____满足时执行转移
        - 转移条件
           - 某个____的值
           - 几个____的组合
   - <span style="color: RoyalBlue;">____</span>指令vs<span style="color: green;">____</span>指令
     - 调用指令
        - 需保存 <span style="color: black;">____</span><span style="color: DarkRed;">____</span>
        - 子程序结束后返回____
     - <span style="color: green;">____</span>指令
        - <span style="color: black;">____</span>执行

### I O 
- 主要功能：
  - 完成CPU与外部设备的 <span style="color: black;">____</span>
  - 传送____及____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>R</li>
    <li>R</li>
    <li>Memory</li>
    <li>R</li>
    <li>Memory</li>
    <li>进栈</li>
    <li>出栈</li>
    <li>算术</li>
    <li>加</li>
    <li>减</li>
    <li>乘</li>
    <li>除</li>
    <li>加1</li>
    <li>减1</li>
    <li>逻辑</li>
    <li>与</li>
    <li>或</li>
    <li>取反</li>
    <li>异或</li>
    <li>算术</li>
    <li>逻辑</li>
    <li>循环</li>
    <li>无条件转移</li>
    <li>条件转移</li>
    <li>调用</li>
    <li>返回</li>
    <li>陷阶</li>
    <li>无</li>
    <li>条件</li>
    <li>任何情况</li>
    <li>条件</li>
    <li>特定条件</li>
    <li>标志位</li>
    <li>标志位</li>
    <li>调用</li>
    <li>转移</li>
    <li>返回</li>
    <li>地址</li>
    <li>主程序</li>
    <li>转移</li>
    <li>不返回</li>
    <li>数据交换</li>
    <li>控制命令</li>
    <li>状态信息</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: green;">寻址</span><span style="color: silver;">方式  

<ul>

- 寻址方式：
  - 定义：寻找____或____有效地址的方式
  - 作用：确定
    - 本条指令的____
    - 下一条待执行____的地址
  - 分类：
    - <span style="color: LimeGreen;">____</span>寻址
    - <span style="color: LightSkyBlue;">____</span>寻址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>操作数</li>
    <li>数据地址</li>
    <li>指令</li>
    <li>指令</li>
    <li>数据</li>
  </ul>
</details>
</div>

<ul>

## <span style="color: silver;"><span style="color: LimeGreen;">指令</span>寻址和<span style="color: LightSkyBlue;">数据</span>寻址

<ul>

- 指令寻址：寻找 <span style="color: black;">____</span>将要执行的指令<span style="color: DarkRed;">____
- 数据寻址：寻找 <span style="color: black;">____</span>指令的数据~

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>下一条</li>
    <li>地址</li>
    <li>本条</li>
  </ul>
</details>
</div>

<ul>

### <span style="color: LimeGreen;">指令</span><span style="color: silver;">寻址
<ul>

#### <span style="color: gray;">顺序 <span style="color: silver;">寻址
- 通过 <span style="color: black;">____</span> <span style="color: Gold;">____</span>实现
- ~过程
  - PC+1条指令的 <span style="color: black;">____</span>
    - 自动形成下一条指令的<span style="color: DarkRed;">____
  - 大小
    - 与 <span style="color: LimeGreen;">____</span>方式、<span style="color: LightSkyBlue;">____</span>字长有关
>pro：PC自增大小与编址方式、指令字长的关系（2013、2014、2019、2023）  

>attention: 
- 现代计算机通常是按____编址的
- <span style="color: LightSkyBlue;">指令</span>字长：
  - <span style="color: black;">____</span>位指令字长
      - PC自增为 $(\mathrm{PC})+\color{black}____$
  - <span style="color: black;">____</span>位指令字长
       - PC自增为 $(\mathrm{PC})+\color{blue}____$

#### <span style="color: LimeGreen;">跳跃<span style="color: silver;">寻址
通过<span style="color: green;">____</span><span style="color: gray;">____</span>指令实现
  - 定义
    - 由本条指令 <span style="color: black;">____</span>指令<span style="color: DarkRed;">____</span>的计算方式
    - 是否跳跃可能受到 <span style="color: Gold;">____</span>R的控制
  - 方式
    - <span style="color: gray;">____</span>转移
      - 地址码 <span style="color: black;">____</span>指出转移目标地址
    - <span style="color: GreenYellow;">____</span>转移
      - 地址码指出转移目的地址 <span style="color: black;">____</span>PC值的偏移量
  - 转移指令执行结果
    - ____PC值
    - CPU根据PC的内容去主存取____指令
>pro：指令格式中各字段的位数分析（2020）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>PC</li>
    <li>自增</li>
    <li>长度</li>
    <li>地址</li>
    <li>编址</li>
    <li>指令</li>
    <li>字节</li>
    <li>16</li>
    <li>2</li>
    <li>32</li>
    <li>4</li>
    <li>转移</li>
    <li>类</li>
    <li>给出下条</li>
    <li>地址</li>
    <li>状态</li>
    <li>绝对</li>
    <li>直接</li>
    <li>相对</li>
    <li>相对于当前</li>
    <li>修改</li>
    <li>下一条</li>
  </ul>
</details>
</div>

### <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span>寻址
<ul>

  - 定义
    - 在指令中表示 <span style="color: LimeGreen;">____</span>数<span style="color: DarkRed;">____</span>的方式
    - 计算____地址的方法
  - 寻址 <span style="color: Gold;">____</span>字段
      - 用于<span style="color: green;">____</span>具体的寻址<u>方式</u>
      - 字段 <span style="color: black;">____</span>决定可支持的寻址方式<span style="color: gray;">____

>pro：指令格式中寻址特征字段的作用（2023）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cc57f57875406369a446ee41b6e46ac9b01777329de41e632ddfab7ec83264fd.jpg)  

- <span style="color: DarkRed;">地址</span>码字段与 <span style="color: LimeGreen;">操作</span>数<span style="color: gray;">____</span>的关系
  - 地址码字段<span style="color: gray;">____</span>代表操作数的真实地址
  - 分类
    - <span style="color: gray;">____</span>地址(<span style="color: DarkRed;">____</span>)
      - 指令中的<span style="color: DarkRed;">____</span>码字段
    - <span style="color: LightSkyBlue;">____</span>地址(<span style="color: LightSkyBlue;">____</span><span style="color: DarkRed;">____</span>)
      - 操作数在存储器中的____地址
      - 计算方式
        - 通过____地址和____计算得出
- (<span style="color: DarkRed;">____</span>)位数的决定作用
  - <span style="color: LightSkyBlue;">____</span>寻址
    - 操作数的____
  - <span style="color: black;">____</span>寻址
      - 可寻址的____
  - <span style="color: LimeGreen;">____</span>寻址
     - 通用R的最大<span style="color: gray;">____</span>
  - <span style="color: LimeGreen;">____</span><span style="color: gray;">____</span>寻址
     - R的位数决定可寻址的____
>attention: 

（A）表示地址为A的数值
- A既可以是寄存器编号，又可以是内存地址。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>操作</li>
    <li>地址</li>
    <li>操作数</li>
    <li>特征</li>
    <li>标识</li>
    <li>位数</li>
    <li>数量</li>
    <li>真实地址</li>
    <li>不直接</li>
    <li>形式</li>
    <li>A</li>
    <li>地址</li>
    <li>有效</li>
    <li>E</li>
    <li>A</li>
    <li>真实</li>
    <li>形式</li>
    <li>寻址方式</li>
    <li>A</li>
    <li>立即</li>
    <li>范围</li>
    <li>直接</li>
    <li>范围</li>
    <li>R</li>
    <li>数量</li>
    <li>R</li>
    <li>间接</li>
    <li>范围</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<ul>

## <span style="color: silver;">common<span style="color: LightSkyBlue;">数据</span>寻址方式
<ul>

### 基本 <span style="color: silver;">寻址方式
<ul>

#### <span style="color: silver;">隐含~
不明显地给出操作数的地址，而是____操作数的地址
- 单地址指令格式的____
  - 第二个操作数由____(ACC)提供
  - 指令中只明显指出____操作数的地址
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/eb95a905f61e44cad56b518a1aa375ef438a60ca7ed3fc676e2fa55c6f573d41.jpg)  
图4.2隐含寻址  

- 优缺点
  - 优点：有利于缩短____
  - 缺点：需增加____或____的硬件

#### <span style="color: LightSkyBlue;">立即</span>（数）~
>pro：立即寻址的概念（2023）

- 概念
  - 指令字中的<span style="color: DarkRed;">____</span>字段
    - 不是操作数的地址
    - 而是 <span style="color: LimeGreen;">____</span>数 <span style="color: black;">____</span>
      - 也称<span style="color: gray;">____
      - 采用____表示
  - #: 立即寻址 <span style="color: Gold;">____
  - A: <span style="color: LimeGreen;">____</span>数
- 优缺点
  - 优点
    - 指令在执行阶段<span style="color: purple;">____</span> <span style="color: LimeGreen;">____ <span style="color: Gold;">____
    - 指令执行速度最 <span style="color: black;">____
  - 缺点
    - A的<span style="color: gray;">____</span> <span style="color: black;">____</span>立即数的范围

#### 直接~
- 指令字中的形式地址<span style="color: DarkRed;">____</span>就是操作数的 <span style="color: black;">____</span><span style="color: DarkRed;">____</span><span style="color: LightSkyBlue;">____</span><span style="color: DarkRed;">____</span>
  - </span><span style="color: LightSkyBlue;">____</span><span style="color: DarkRed;">____</span> = <span style="color: DarkRed;">____</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/948183c5b772d6544c6bec9a19645480a2b25ccbad62d507552486df04009957.jpg)  

- 优缺点
  - 优点
    - ____，不需要专门计算操作数的地址
    - 指令在执行阶段仅需<span style="color: LimeGreen;">____<span style="color: Gold;">____</span> <span style="color: black;">____
  - 缺点
    - A的<span style="color: gray;">____</span> <span style="color: black;">____</span>该指令操作数的寻址<span style="color: gray;">____</span>
    - 操作数的地址<span style="color: gray;">____</span>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>隐含</li>
    <li>隐含约定</li>
    <li>累加器</li>
    <li>第一个</li>
    <li>指令字长</li>
    <li>存储操作数</li>
    <li>隐含地址</li>
    <li>地址</li>
    <li>操作</li>
    <li>本身</li>
    <li>立即数</li>
    <li>补码</li>
    <li>特征</li>
    <li>操作</li>
    <li>不</li>
    <li>访</li>
    <li>存</li>
    <li>快</li>
    <li>位数</li>
    <li>限制了</li>
    <li>A</li>
    <li>真实</li>
    <li>地址</li>
    <li>E</li>
    <li>A</li>
    <li>E</li>
    <li>A</li>
    <li>A</li>
    <li>简单</li>
    <li>访</li>
    <li>存</li>
    <li>一次</li>
    <li>位数</li>
    <li>限制了</li>
    <li>范围</li>
    <li>不易修改</li>
  </ul>
</details>
</div>

### <span style="color: gray;">间接</span> <span style="color: silver;">寻址类
<ul>

#### <span style="color: gray;">间接~
- 指令的地址字段给出的是操作数____所在主存单元的地址
  - 即操作数地址的____
  - EA = ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/297661d0b53d517f5369db6eeea0399b48288d259fb0194ce89d2cff392ca596.jpg)  
图4.5间接寻址  

- 优缺点
  - 优点
    - 可扩大____
    - 便于____
  - 缺点：指令在执行阶段要____访存

#### <span style="color: LimeGreen;">R</span> <span style="color: silver;">寻址
- 与____寻址原理相同，但访问____而非主存
  - 指令的地址字段给出操作数所在____的编号
  - EA = ____

>pro：寄存器编号位数与寄存器数量的关系（2022）  

- 优缺点
  - 优点
    - 执行速度____，不用____
    - 指令字长较____
  - 缺点
    - 寄存器____昂贵
    - CPU寄存器____有限

#### <span style="color: LimeGreen;">R</span> <span style="color: silver;"><span style="color: gray;">间接</span>寻址
>pro：寄存器间接寻址的取数操作（2010）  

- 综合了____寻址和____寻址特点
  - Ri所指寄存器给出操作数所在____单元的地址
  - EA = ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/92cc364b37cca2cace4edc484a7917ca840b456ec8c78df2714108a04df0e6ef.jpg)  
图4.6寄存器寻址  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/71cf46d10de7a2353718ca3f208d5dd43920b00188d4ad2d26638c7036ec9415.jpg)  
图4.7寄存器间接寻址  

- 特点比较
  - 相比间接寻址
    - 扩大了____
    - 减少了____
  - 相比寄存器寻址
    - 执行阶段需要____获得操作数

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有效地址</li>
    <li>地址</li>
    <li>(A)</li>
    <li>寻址范围</li>
    <li>编制程序</li>
    <li>多次</li>
    <li>直接</li>
    <li>寄存器</li>
    <li>寄存器</li>
    <li>Ri</li>
    <li>快</li>
    <li>访存</li>
    <li>短</li>
    <li>价格</li>
    <li>数量</li>
    <li>间接</li>
    <li>寄存器</li>
    <li>主存</li>
    <li>(Ri)</li>
    <li>寻址范围</li>
    <li>访存次数</li>
    <li>访存</li>
  </ul>
</details>
</div>

### <span style="color: green;">偏移</span> <span style="color: silver;">寻址类
<ul>

#### <span style="color: Gold;">相对 <span style="color: silver;">寻址
>pro：相对寻址的偏移量或目标地址的计算（2009、2013、2014、2019、2023）  

##### <span style="color: silver;">原理
- <span style="color: LightSkyBlue;">____</span><span style="color: DarkRed;">____</span>计算
  - EA = (<span style="color: LightSkyBlue;">____</span><span style="color: LimeGreen;">____</span>) + <span style="color: DarkRed;">____</span>
    - PC内容 + 指令格式中的____A
    - A: 相对于当前PC值的____，可正可负，____表示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/54a79a897f2ebe46f3c3320ba9fc90c8d14eba5a2917c433c88919cf0d1c4e2d.jpg)  
图4.8相对寻址  

##### 特点
- 寻址范围
  - <span style="color: DarkRed;">____</span>的 <span style="color: black;">____</span>决定操作数的____
- 优势
  - 操作数<span style="color: DarkRed;">____</span>不 <span style="color: GreenYellow;">____</span>，随PC值变化
  - 与指令地址保持____偏移量
  - 便于程序____
- 应用
  - 广泛应用于____指令
>pro：相对寻址转跳范围的计算（2010、2013、2014）  

>attention:

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>E</li>
    <li>A</li>
    <li>P</li>
    <li>C</li>
    <li>A</li>
    <li>形式地址</li>
    <li>偏移量</li>
    <li>补码</li>
    <li>A</li>
    <li>位数</li>
    <li>寻址范围</li>
    <li>地址</li>
    <li>fix</li>
    <li>固定</li>
    <li>浮动</li>
    <li>转移</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>
```

---

### HTML 输出

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Data Structures</title>
  <style>
    details > summary { cursor: pointer; }
    ul { margin-left: 20px; }
  </style>
</head>
<body>

<div>
  toc: true<br>
  print_background: true
</div>

<h1><span style="color: silver;">above</span></h1>

<ul>
  <h2><span style="color: silver;">【考纲内容】</span></h2>
  <ul>
    （一）____的基本概念（二）____（三）____（四）数据的____和大/小端存放方式（五）____的基本概念（六）____与____之间的对应编译器、____与____的基本概念：____的机器级表示____的机器级表示：____对应的机器级表示
  </ul>
  <div>
    <details>
      <summary> </summary>
      <ul>
        <li>指令格式</li>
        <li>指令格式</li>
        <li>寻址方式</li>
        <li>对齐</li>
        <li>CISC和RISC</li>
        <li>高级语言程序</li>
        <li>机器级代码</li>
        <li>汇编器</li>
        <li>链接器</li>
        <li>选择结构语句</li>
        <li>循环结构语句</li>
        <li>过程（函数）调用</li>
      </ul>
    </details>
  </div>
</ul>

<ul>
  <h2><span style="color: silver;">【复习提示】</span></h2>
  <ul>
    - 指令系统的重要性：
      - 是表征____的重要因素。
    - 需要掌握的内容：
      - 各种____的特点及____的计算。
      - 三种____的计算：____、____和____。
      - ____与____的特点与区别。
    - 2022年大纲新增内容：
      - ____。
      - 能够读懂____。
    - 考试题型：
      - 可能出____。
      - 可能结合其他章节出有关____的综合题。
    - 指令相关知识点的重要性：
      - ____、____和____与____紧密相关。
      - 需要引起重视。
    在学习本章时，请读者思考以下问题<br>
    1）什么是____？什么是____？为什么要引入____？2）一般来说，指令分为哪些部分？每部分有什么用处？3）对于一个指令系统来说，____多和少有什么影响？请读者在本章的学习过程中寻找答案，本章末尾会给出参考答案。
  </ul>
  <div>
    <details>
      <summary> </summary>
      <ul>
        <li>计算机性能</li>
        <li>寻址方式</li>
        <li>有效地址</li>
        <li>偏移寻址</li>
        <li>相对寻址</li>
        <li>基址寻址</li>
        <li>变址寻址</li>
        <li>CISC</li>
        <li>RISC</li>
        <li>机器级表示</li>
        <li>机器级代码</li>
        <li>选择题</li>
        <li>指令</li>
        <li>指令格式</li>
        <li>机器指令</li>
        <li>指令寻址方式</li>
        <li>CPU指令执行过程</li>
        <li>指令</li>
        <li>指令系统</li>
        <li>指令系统</li>
        <li>寻址方式</li>
      </ul>
    </details>
  </div>
</ul>

<h1><span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span></h1>

<ul>
  <h2><span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span> <span style="color: silver;">体系<span style="color: green;">结构 <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S<span style="color: Gold;">A</span></h2>
  <blockquote>pro：指令集体系结构（ISA）规定的内容（2022）</blockquote>
  <ul>
    <h3><span style="color: silver;">基本概念</span></h3>
    <ul>
      - <span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span>
        - <span style="color: silver;">完整定义了</span><u>____</u>和<u>____</u>之间的 <span style="color: LimeGreen;">____</span>
          - <span style="color: gray; font-size: 14px;">____应熟悉</span>
        - <span style="color: LightSkyBlue;">____</span><span style="color: deepskyblue;">____</span> is（ISA）最<u>____</u>
      - <span style="color: LightSkyBlue;">指令</span><span style="color: deepskyblue;">系统</span> /<span style="color: LightSkyBlue;">指令</span><span style="color: LimeGreen;">集</span>
        - 一台计算机的所有<span style="color: LightSkyBlue;">____</span>的 <span style="color: LimeGreen;">____</span>
      - <span style="color: silver;">机器指令（简称<span style="color: LightSkyBlue;">____</span>
        - 指示 <span style="color: silver;">计算机执行某种</span> <span style="color: LimeGreen;">____</span>'<span style="color: LightSkyBlue;">____</span>
    </ul>
    <div>
      <details>
        <summary> </summary>
        <ul>
          <li>软件</li>
          <li>硬件</li>
          <li>接口</li>
          <li>机器语言或汇编语言程序员</li>
          <li>指令</li>
          <li>系统</li>
          <li>核心</li>
          <li>指令</li>
          <li>集合</li>
          <li>指令</li>
          <li>操作</li>
          <li>命令</li>
        </ul>
      </details>
    </div>

    <h3><span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">规定内容</span></h3>
    Instruction Set Architecture，<span style="color: LightSkyBlue;">指令<span style="color: GreenYellow;">集 <span style="color: LimeGreen;">体系 <span style="color: Gold;">结构</span>
    <ul>
      <h4><span style="color: LightSkyBlue;">指令</span></h4>
      - ____
      - ____
      - ____
      - 每种操作对应的____的相应规定

      <h4><span style="color: LimeGreen;">操作</span><span style="color: LightSkyBlue;">数</span></h4>
      - ____
      - ____
      - ____（大端/小端）

      <h4>硬件<span style="color: Gold;">资源</span></h4>
      - 程序可访问的____
        - ____
        - ____
        - ____
      - ____
        - ____
        - ____

      <h4><span style="color: LimeGreen;">执行<span style="color: Gold;">控制</span></h4>
      - ____的控制方式
        - ____
        - ____
    </ul>
    <div>
      <details>
        <summary> </summary>
        <ul>
          <li>格式</li>
          <li>寻址方式</li>
          <li>操作类型</li>
          <li>操作数</li>
          <li>类型</li>
          <li>寻址方式</li>
          <li>存放方式</li>
          <li>寄存器</li>
          <li>编号</li>
          <li>个数</li>
          <li>位数</li>
          <li>存储空间</li>
          <li>大小</li>
          <li>编址方式</li>
          <li>指令执行过程</li>
          <li>程序计数器</li>
          <li>条件码定义</li>
        </ul>
      </details>
    </div>

    <h3><span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">& 程序 <span style="color: LimeGreen;">开发</span></h3>
    <ul>
      <h4><span style="color: LightSkyBlue;">I</span><span style="color: LimeGreen;">S</span><span style="color: Gold;">A</span> <span style="color: silver;">与机器级程序</span></h4>
      - <span style="color: green;">____</span>了机器级程序的格式
      - ____必须对机器的ISA非常熟悉

      <h4><span style="color: LimeGreen;">高级</span> <span style="color: silver;">语言编程</span></h4>
      - 大多数程序员使用____（如C/C++/Java）编写程序
        - 开发效率____
        - 不易____
      - 局限性：
        - ____太高
        - 隐藏____细节
        - 难以利用____相关优化

      <h4><span style="color: silver;">~重要性</span></h4>
      - <span style="font-size: 14px;">对ISA和____有充分了解
        - <span style="font-size: 14px;">有助于编制____程序
    </ul>
    <div>
      <details>
        <summary> </summary>
        <ul>
          <li>规定</li>
          <li>机器语言或汇编语言程序员</li>
          <li>高级语言</li>
          <li>更高</li>
          <li>出错</li>
          <li>抽象层</li>
          <li>机器级程序</li>
          <li>机器结构</li>
          <li>底层硬件实现细节</li>
          <li>高性能</li>
        </ul>
      </details>
    </div>
  </ul>
</ul>

<ul>
  <h2><span style="color: silver;">基本格式</span></h2>
  <ul>
    <h3><span style="color: silver;">概念</span></h3>
    - 指令
      - 定义：一条指令 is ____的一个语句
        - 本质：一组有意义的 <span style="color: black;">____</span>代码
      - 组成部分：
        - <span style="color: LimeGreen;">____</span>+<span style="color: DarkRed;">____</span>

    <h4><span style="color: LimeGreen;">操作</span><span style="color: green;">码</span> <span style="color: silver;">& <span style="color: DarkRed;">地址</span>码</span></h4>
    - <span style="color: LimeGreen;">操作</span><span style="color: green;">码</span>
      - 指出该指令应<span style="color: green;">____</span>什么 <span style="color: GreenYellow;">____</span>以及具有何种 <span style="color: Gold;">____</span>
        - ____指令
        - 了解____
        - 区分____内容
      - 例如：
        - ____类型
          - ____运算
          - ____运算
        - ____
          - ____
          - ____
    - <span style="color: silver;"><span style="color: DarkRed;">地址</span>码</span>
      - 给出被操作的信息（指令或数据）的<span style="color: DarkRed;">____</span>
      - 包括：
        - 参加运算的一个或多个____的地址
        - ____的保存地址
        - 程序的____
        - 被调用____的入口地址等

    <h4><span style="color: silver;">~ 字长</span></h4>
    - 定义：
      - 一条指令所包含的 <span style="color: black;">____</span><span style="color: gray;">____</span>的<span style="color: LightSkyBlue;">____</span>
    - 决定因素：
      - <span style="color: LimeGreen;">____</span>码的长度
      - <span style="color: DarkRed;">____</span>码的长度、个数
    - 与____的关系：
      - = ____
      - or < >____
    - 分类：
      - ____指令：1 机器字长
      - ____指令： 1/2机器字长
      - ____指令：2*机器字长
    <blockquote>attention: 
    - 指令长度不同会影响____时间开销：
      - 单字长指令：
        - 只需____1次
        - 能将指令完整取出
        - 耗费1个____周期
      - 双字长指令：
        - 需要____2次
        - 才能完整取出指令
        - 耗费2个____周期</blockquote>

    <h4><span style="color: LightSkyBlue;">指令<span style="color: gray;">字</span><span style="color: LimeGreen;">结构</span></h4>
    - 定长指~：
      - 所有指令的____都相等
      - 特点：____快，____简单
    - 变长~：
      - 各种指令的____随指令功能而异
    - 注意：因为主存一般是按____编址的，所以指令字长通常为____的整数倍
    <blockquote>pro：根据____及相关____条件组合成机器代码（2015）</blockquote>
  </ul>
  <div>
    <details>
      <summary> </summary>
      <ul>
        <li>机器语言</li>
        <li>二进制</li>
        <li>OP</li>
        <li>A</li>
        <li>执行</li>
        <li>操作</li>
        <li>功能</li>
        <li>识别</li>
        <li>指令功能</li>
        <li>操作数地址</li>
        <li>运算</li>
        <li>算术加</li>
        <li>算术减</li>
        <li>程序控制</li>
        <li>程序转移</li>
        <li>返回操作</li>
        <li>地址</li>
        <li>操作数</li>
        <li>运算结果</li>
        <li>转移地址</li>
        <li>子程序</li>
        <li>二进制</li>
        <li>代码</li>
        <li>位数</li>
        <li>操作</li>
        <li>地址</li>
        <li>机器字长</li>
        <li>机器字长</li>
        <li>机器字长</li>
        <li>单字长</li>
        <li>半字长</li>
        <li>双字长</li>
        <li>取指令</li>
        <li>访存</li>
        <li>存取</li>
        <li>访存</li>
        <li>存取</li>
        <li>长度</li>
        <li>执行速度</li>
        <li>控制</li>
        <li>长度</li>
        <li>字节</li>
        <li>字节</li>
        <li>指令格式</li>
        <li>编码</li>
      </ul>
    </details>
  </div>

  <h3><span style="color: silver;">指令格式 <span style="color: LimeGreen;">分类</span></h3>
  <ul>
    <h4>零<span style="color: DarkRed;">地址</span><span style="color: LightSkyBlue;">指令</span></h4>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6e7552f06b4d8317fc022359d2dcccb811aec4c3314eb4cd1ac1ec714e795bd3.jpg">
    - only <span style="color: LimeGreen;">____</span>码OP，没有显式地址
    - 两种可能：
      - 不需要____的指令
        - 如____指令、____指令、____指令等
      - 零地址的____类指令（用在____计算机中）
        - 参与运算的两个操作数从____和____弹出
        - 送到____进行运算
        - 运算结果____堆栈

    <h4><span style="color: silver;">一~</span></h4>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f73beb07fd477d00ecf244bb03d345248115ffa6dad3968d55fb69658646a4ca.jpg">
    - 两种常见形态：
      - 只有目的操作数的<span style="color: SlateBlue;">____</span><span style="color: LimeGreen;">____</span>数指令：
        - 执行过程：
          - 按A₁地址____操作数
          - 进行OP操作后，结果____原地址
        - 指令含义：
          - ____→A₁
        - 典型指令：
          - ____
          - ____
          - ____
          - ____
          - ____
    - <img src="https://bluejedis.github.io/picx-images-hosting/test/image.86tpfzoekp.webp">
      - 隐含约定目的地址的 <span style="color: Gold;">____</span>~指令：
        - 执行过程：
          - 按指令地址A₁读取____操作数
          - ____（累加器）提供另一个操作数
          - 运算结果存放在____中
        - 指令含义：
          - ____OP(A₁)→ACC
    <blockquote>pro：地址位数与____的关系（2010、2021）</blockquote>

    <h5><span style="color: silver;">寻址<span style="color: green;">范围</span></h5>
    - 若指令字长为32位：
      - 操作码占____位
      - 1个地址码字段占____位
      - 操作数的直接寻址范围为____=16M
    - <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
      - 若地址码字段均为主存地址
      - 需要____次访存：
        - ____1次
        - ____<span style="color: gray;">1</span>次
        - ____1次

    <h4><span style="color: silver;">二~</span></h4>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/808143d9dc4a64a19f32b18f99d45ecad816da4b5a2564cee34b907da02c8e67.jpg">
    - 指令含义：____OP(A₂)→A₁
    - 使用场景：
      - 常用的____和____运算指令
      - 需要 ____* <span style="color: LimeGreen;">____</span>数
      - 目的操作数地址用于保存____

    <h5><span style="color: silver;">寻址<span style="color: green;">范围</span></h5>
    - 若指令字长为32位：
      - 操作码占____位
      - 两个地址码字段各占____位
      - 每个操作数的直接寻址范围为____=4K
    - <span style="color: green;">访</span><span style="color: Gold;">存</span>次数：
      - 若地址码字段均为主存地址
      - 需要____次访存：
        - ____1次
        - 取两个操作数 <span style="color: black;">____</span>次
        - ____1次

    <h4><span style="color: silver;">三~</span></h4>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/964f896e4265099daa90e4a7313c3f27dbada8cdcabb04ced0efe9b9d5

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，关键词、公式中的关键部分、步骤等被设置为____，并在每个次级标题下用 HTML 折叠块（`<details>`）列出答案。输出同时包含 Markdown 和 HTML 格式，确保结构完整、简洁明了，便于自我考察和记忆。

---

### Markdown 输出

#### 对于转移指令JMPA
- 若指令的地址为____，且占____
- 取出该指令后
  - PC的值会____
  - 即 $(\mathrm{PC})\,{=}\,____$
- 执行完该指令后
  - 会自动跳转到 ____ 的地址继续执行

<div>
<details>
  <summary> </summary>
  <ul>
    <li>X</li>
    <li>2B</li>
    <li>增2</li>
    <li>\mathrm{X}+2</li>
    <li>\mathrm{X}+2+\mathrm{A}</li>
  </ul>
</details>
</div>

#### <span style="color: LightSkyBlue;">基址</span> <span style="color: silver;">寻址
>pro：基址寻址的EA的计算（2019）  

- EA = (<span style="color: LightSkyBlue;">B</span><span style="color: LimeGreen;">R</span>) + ____
  - ____+指令字中的形式地址A
  - 基址寄存器
    - 可以是____寄存器或____寄存器

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a34564d3543b6f2ccacb8cfb471b140348d32097e27bbf6b321ab8f9a9a2be06.jpg)  
图4.9基址寻址  

- 特点
  - 面向 ____
  - 内容由____确定
  - BR内容____
- 优点
  - 可以 ____寻址 ____
  - 有利于____程序设计
  - 可用于编制____程序
- 缺点：偏移量 ____较 ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: DarkRed;">A</span></li>
    <li>BR</li>
    <li>专用</li>
    <li>通用</li>
    <li><span style="color: Gold;">OS</span></li>
    <li>操作系统或管理程序</li>
    <li>不变</li>
    <li><span style="color: black;">扩大</span></li>
    <li><span style="color: LimeGreen;">范围</span></li>
    <li>多道</li>
    <li>浮动</li>
    <li><span style="color: black;">位数</span></li>
    <li><span style="color: Gold;">短</span></li>
  </ul>
</details>
</div>

#### <span style="color: green;">变<span style="color: LightSkyBlue;">址</span> <span style="color: silver;">寻址
>pro：变址寻址的EA的计算（2013），先变址后间址方式的EA的计算（2016）  

- EA = ____ + A
- ____+指令字中的形式地址A
- IX: 变址寄存器
  - 可用 ____变址寄存器或____寄存器

>pro：变址寻址的适用场景（2017）  

- 特点
  - 面向 ____
  - 执行过程中变址寄存器内容____
  - 形式地址A____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f0e1bf068edf0a515fc2ed92442f6f857a8030bab1164982e17c514ba92116c.jpg)  
图4.10变址寻址  

>pro：变址寻址访问数组的过程（2018）  

- 与<span style="color: LightSkyBlue;">基址</span>寻址的区别
  - 基址寻址
    - 面向____
    - 基址寄存器内容____
    - 指令字中A____
  - 变址寻址
    - 面向____
    - 变址寄存器 ____ ____
    - 指令字中<span style="color: DarkRed;">A</span>____

>pro：偏移寻址的范畴（2011）  

- 偏移寻址包括
  - ____寻址
  - ____寻址
  - ____寻址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>(IX)</li>
    <li>IX</li>
    <li>专用</li>
    <li>通用</li>
    <li><span style="color: LimeGreen;">user</span></li>
    <li>可变</li>
    <li>不变</li>
    <li>系统</li>
    <li>不可变</li>
    <li>可变</li>
    <li>用户</li>
    <li><span style="color: Gold;">内容</span></li>
    <li><span style="color: black;">可变</span></li>
    <li>不可变</li>
    <li>相对</li>
    <li>基址</li>
    <li>变址</li>
  </ul>
</details>
</div>

### <span style="color: SlateBlue;">特殊</span>~
#### <span style="color: silver;">堆<span style="color: Gold;">栈</span>~
- 堆栈 ____
  - ____存储区域
  - ____(LIFO)原则
  - 使用堆栈指针( ____ ____)管理
- 堆栈类型
  - ____堆栈(寄存器堆栈)
    - 成本____
    - 不适合____
  - ____堆栈(主存区域)
    - 成本____
    - ____
- 操作特点
  - 大部分指令表现为____ ____数形式
  - ____ ____
    - ____使用~
    - 自动完成~的 ____操作

表4.1寻址方式、有效地址及访存次数  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c51f3e89ddc451b47a9e622c8b801b80139caf0bb46af25e8b2187d5cd2dfd58.jpg)  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1c50194cc3786f302b53c78b63af2b45a119ca8380862b67f5dcabb0710cde4.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li><span style="color: Gold;">特点</span></li>
    <li>特定</li>
    <li><span style="color: black;">后进先出</span></li>
    <li><span style="color: Gold;">S</span></li>
    <li><span style="color: LimeGreen;">P</span></li>
    <li><span style="color: LimeGreen;">硬</span></li>
    <li>高</li>
    <li>大容量</li>
    <li><span style="color: LightSkyBlue;">软</span></li>
    <li>低</li>
    <li>最常用</li>
    <li><span style="color: purple;">无</span></li>
    <li><span style="color: LimeGreen;">操作</span></li>
    <li><span style="color: Gold;">S</span></li>
    <li><span style="color: LimeGreen;">P</span></li>
    <li>隐含</li>
    <li><span style="color: black;">加减</span></li>
  </ul>
</details>
</div>

---

### HTML 输出

```html
<h3>对于转移指令JMPA</h3>
<ul>
  <li>若指令的地址为____，且占____</li>
  <li>取出该指令后
    <ul>
      <li>PC的值会____</li>
      <li>即 $(\mathrm{PC})\,{=}\,____$</li>
    </ul>
  </li>
  <li>执行完该指令后
    <ul>
      <li>会自动跳转到 ____ 的地址继续执行</li>
    </ul>
  </li>
</ul>
<div>
  <details>
    <summary> </summary>
    <ul>
      <li>X</li>
      <li>2B</li>
      <li>增2</li>
      <li>\mathrm{X}+2</li>
      <li>\mathrm{X}+2+\mathrm{A}</li>
    </ul>
  </details>
</div>

<h4><span style="color: LightSkyBlue;">基址</span> <span style="color: silver;">寻址</h4>
<blockquote>pro：基址寻址的EA的计算（2019）</blockquote>
<ul>
  <li>EA = (<span style="color: LightSkyBlue;">B</span><span style="color: LimeGreen;">R</span>) + ____
    <ul>
      <li>____+指令字中的形式地址A</li>
      <li>基址寄存器
        <ul>
          <li>可以是____寄存器或____寄存器</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a34564d3543b6f2ccacb8cfb471b140348d32097e27bbf6b321ab8f9a9a2be06.jpg"><br>图4.9基址寻址</li>
  <li>特点
    <ul>
      <li>面向 ____</li>
      <li>内容由____确定</li>
      <li>BR内容____</li>
    </ul>
  </li>
  <li>优点
    <ul>
      <li>可以 ____寻址 ____</li>
      <li>有利于____程序设计</li>
      <li>可用于编制____程序</li>
    </ul>
  </li>
  <li>缺点：偏移量 ____较 ____</li>
</ul>
<div>
  <details>
    <summary> </summary>
    <ul>
      <li><span style="color: DarkRed;">A</span></li>
      <li>BR</li>
      <li>专用</li>
      <li>通用</li>
      <li><span style="color: Gold;">OS</span></li>
      <li>操作系统或管理程序</li>
      <li>不变</li>
      <li><span style="color: black;">扩大</span></li>
      <li><span style="color: LimeGreen;">范围</span></li>
      <li>多道</li>
      <li>浮动</li>
      <li><span style="color: black;">位数</span></li>
      <li><span style="color: Gold;">短</span></li>
    </ul>
  </details>
</div>

<h4><span style="color: green;">变<span style="color: LightSkyBlue;">址</span> <span style="color: silver;">寻址</h4>
<blockquote>pro：变址寻址的EA的计算（2013），先变址后间址方式的EA的计算（2016）</blockquote>
<ul>
  <li>EA = ____ + A</li>
  <li>____+指令字中的形式地址A</li>
  <li>IX: 变址寄存器
    <ul>
      <li>可用 ____变址寄存器或____寄存器</li>
    </ul>
  </li>
</ul>
<blockquote>pro：变址寻址的适用场景（2017）</blockquote>
<ul>
  <li>特点
    <ul>
      <li>面向 ____</li>
      <li>执行过程中变址寄存器内容____</li>
      <li>形式地址A____</li>
    </ul>
  </li>
  <li><img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f0e1bf068edf0a515fc2ed92442f6f857a8030bab1164982e17c514ba92116c.jpg"><br>图4.10变址寻址</li>
</ul>
<blockquote>pro：变址寻址访问数组的过程（2018）</blockquote>
<ul>
  <li>与<span style="color: LightSkyBlue;">基址</span>寻址的区别
    <ul>
      <li>基址寻址
        <ul>
          <li>面向____</li>
          <li>基址寄存器内容____</li>
          <li>指令字中A____</li>
        </ul>
      </li>
      <li>变址寻址
        <ul>
          <li>面向____</li>
          <li>变址寄存器 ____ ____</li>
          <li>指令字中<span style="color: DarkRed;">A</span>____</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<blockquote>pro：偏移寻址的范畴（2011）</blockquote>
<ul>
  <li>偏移寻址包括
    <ul>
      <li>____寻址</li>
      <li>____寻址</li>
      <li>____寻址</li>
    </ul>
  </li>
</ul>
<div>
  <details>
    <summary> </summary>
    <ul>
      <li>(IX)</li>
      <li>IX</li>
      <li>专用</li>
      <li>通用</li>
      <li><span style="color: LimeGreen;">user</span></li>
      <li>可变</li>
      <li>不变</li>
      <li>系统</li>
      <li>不可变</li>
      <li>可变</li>
      <li>用户</li>
      <li><span style="color: Gold;">内容</span></li>
      <li><span style="color: black;">可变</span></li>
      <li>不可变</li>
      <li>相对</li>
      <li>基址</li>
      <li>变址</li>
    </ul>
  </details>
</div>

<h3><span style="color: SlateBlue;">特殊</span>~</h3>
<h4><span style="color: silver;">堆<span style="color: Gold;">栈</span>~</h4>
<ul>
  <li>堆栈 ____
    <ul>
      <li>____存储区域</li>
      <li>____(LIFO)原则</li>
      <li>使用堆栈指针( ____ ____)管理</li>
    </ul>
  </li>
  <li>堆栈类型
    <ul>
      <li>____堆栈(寄存器堆栈)
        <ul>
          <li>成本____</li>
          <li>不适合____</li>
        </ul>
      </li>
      <li>____堆栈(主存区域)
        <ul>
          <li>成本____</li>
          <li>____</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>操作特点
    <ul>
      <li>大部分指令表现为____ ____数形式</li>
      <li>____ ____
        <ul>
          <li>____使用~</li>
          <li>自动完成~的 ____操作</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>表4.1寻址方式、有效地址及访存次数<br>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c51f3e89ddc451b47a9e622c8b801b80139caf0bb46af25e8b2187d5cd2dfd58.jpg"><br>
    <img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1c50194cc3786f302b53c78b63af2b45a119ca8380862b67f5dcabb0710cde4.jpg">
  </li>
</ul>
<div>
  <details>
    <summary> </summary>
    <ul>
      <li><span style="color: Gold;">特点</span></li>
      <li>特定</li>
      <li><span style="color: black;">后进先出</span></li>
      <li><span style="color: Gold;">S</span></li>
      <li><span style="color: LimeGreen;">P</span></li>
      <li><span style="color: LimeGreen;">硬</span></li>
      <li>高</li>
      <li>大容量</li>
      <li><span style="color: LightSkyBlue;">软</span></li>
      <li>低</li>
      <li>最常用</li>
      <li><span style="color: purple;">无</span></li>
      <li><span style="color: LimeGreen;">操作</span></li>
      <li><span style="color: Gold;">S</span></li>
      <li><span style="color: LimeGreen;">P</span></li>
      <li>隐含</li>
      <li><span style="color: black;">加减</span></li>
    </ul>
  </details>
</div>
```

---

### 说明
1. **挖空处理**：关键词（如“X”、“2B”、“可导”等）、公式关键部分（如“\mathrm{X}+2”）、步骤中的核心内容被替换为“____”，确保重点突出，便于记忆和自测。
2. **折叠块**：每个次级标题下的答案使用 `<details>` 和 `<ul>` 标签包裹，`<li>` 标签内保留原始格式（如颜色标签、公式等），并空行分隔以支持 Markdown 公式渲染。
3. **结构完整性**：保留了原有的目录结构、图片链接、表格引用，未省略任何内容。
4. **格式一致性**：严格遵循示例格式，Markdown 和 HTML 输出均保持简洁明了，层次清晰。

请检查以上内容是否符合您的预期！

