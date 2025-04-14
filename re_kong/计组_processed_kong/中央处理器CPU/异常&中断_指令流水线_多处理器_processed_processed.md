<span style="color: silver;">

# <span style="color: silver;"> <span style="color: Gold;">异常</span>（内中断）和<span style="color: green;">中断</span>机制  

<ul>

- 现代计算机的异常和中断处理系统
  - CPU数据通路
    - 异常 <span style="color: Gold;">____</span>/ <span style="color: LimeGreen;">____</span> 逻辑
  - <span style="color: gray;">外设</span>接口
    - 中断 <span style="color: gray;">____</span>/<span style="color: Gold;">____</span> 逻辑
  - 操作系统
    - 中断服务程序
- 处理过程
  - 中断硬件电路和中断服务程序有机结合
  - 共同完成异常和中断的处理

<div>
<details>
  <summary> </summary>
  <ul>
    <li>检测</li>
    <li>响应</li>
    <li>请求</li>
    <li>控制</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">基本概念  

<ul>

>pro： 异常事件的性质（2015）  

### <span style="color: silver;">定义

<ul>

- 异常（内中断）
  - 由CPU内部产生的____事件
- 中断（外中断）
  - 来自CPU外部的设备向CPU发出的____请求
  - 通常用于信息的输入和输出
- 区别特点
  - 异常：CPU执行指令时内部检测到的 <span style="color: LightSkyBlue;">____</span>步 事件
  - 中断：外部设备<span style="color: green;">____</span>的 <span style="color: SlateBlue;">____</span>步 事件

<div>
<details>
  <summary> </summary>
  <ul>
    <li>意外</li>
    <li>中断</li>
    <li>同</li>
    <li>触发</li>
    <li>异</li>
  </ul>
</details>
</div>

</ul>

>pro：异常响应的时机（2023）  

### <span style="color: Gold;">区别

<ul>

1. 关联性
   - 异常：与____指令相关
   - 中断：与指令____
2. 检测方式
   - 异常：CPU____完成
   - 中断：需通过<span style="color: green;">____</span> <span style="color: LimeGreen;">____</span> <span style="color: Gold;">____</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>特定</li>
    <li>无关</li>
    <li>自身</li>
    <li>中断</li>
    <li>请求</li>
    <li>线</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">~处理过程

<ul>

- 触发条件
  - 执行第i条指令 <span style="color: Gold;">____</span> 检测到异常
  - 执行第i条指令 <span style="color: gray;">____</span> 发现中断请求
- 处理流程
  - CPU<span style="color: gray;">____</span>当前程序
  - turn to 执行____/中断处理 程序
- 处理结果
  - 成功解决
    - 通过异常/中断返回指令
    - 回到第i条或i+1条指令继续执行
  - 致命错误
    - ____用户程序
- 处理方式：通常 OS和driver完成

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时</li>
    <li>后</li>
    <li>打断</li>
    <li>异常</li>
    <li>终止</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: GreenYellow;">分类  

<ul>

### <span style="color: Gold;">异常 <span style="color: silver;">~

<ul>

- <span style="color: green;">____</span>故障中断
  - ____连线异常引起
    - 存储器校验错
    - 总线错误
- <span style="color: LightSkyBlue;">____</span>性异常（软件中断）
  - 执行指令引起的异常
    - 整除0
    - 溢出
    - 断点
    - 单步跟踪
    - 非法指令
    - 栈溢出
    - 地址越界
    - 缺页

<div>
<details>
  <summary> </summary>
  <ul>
    <li>硬</li>
    <li>硬</li>
    <li>程序</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">按发生 <span style="color: LimeGreen;">____</span>和 <span style="color: Gold;">____</span><span style="color: gray;">方式

<ul>

##### <span style="color: silver;">（1） <span style="color: Gold;">____</span>（ <span style="color: Gold;">F</span>ault）

<ul>

>pro：异常或中断处理后指令重新执行的断点（2021）  

- define:
  - 系统、设备或组件在运行过程中出现的一种 <span style="color: Gold;">____</span>
    - → 系统、设备或组件无法按照预期执行其功能
- Detection time：<span style="color: LightSkyBlue;">____</span>启动<span style="color: gray;">____</span>、 <span style="color: LimeGreen;">____</span>结束<span style="color: gray;">____</span>
- 常见~
  - <span style="color: gray;">____</span> <span style="color: LimeGreen;">____</span>码
  - <span style="color: Gold;">____</span> <span style="color: gray;">____</span>/<span style="color: LightSkyBlue;">____</span>
  - 除数为0
- <span style="color: green;">____</span>
  - 可恢复~
    - <span style="color: Gold;">____</span> <span style="color: gray;">____</span>/<span style="color: LightSkyBlue;">____</span>：
      - 调入所需 <span style="color: gray;">____</span>/<span style="color: LightSkyBlue;">____</span>面后back <span style="color: Gold;">____</span>
  - 不可恢复~
    - <span style="color: gray;">____</span> <span style="color: LimeGreen;">____</span>码/除数为0：
      - <span style="color: GreenYellow;">____</span>进程执行

<div>
<details>
  <summary> </summary>
  <ul>
    <li>故障</li>
    <li>状态</li>
    <li>指令</li>
    <li>后</li>
    <li>执行</li>
    <li>前</li>
    <li>非法</li>
    <li>操作</li>
    <li>缺</li>
    <li>段</li>
    <li>页</li>
    <li>处理</li>
    <li>缺</li>
    <li>段</li>
    <li>页</li>
    <li>段</li>
    <li>页</li>
    <li>Fault</li>
    <li>非法</li>
    <li>操作</li>
    <li>终止</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">（2）自<span style="color: SlateBlue;">____</span>（<span style="color: SlateBlue;">T</span>rap）

<ul>

>pro：自陷的原理和性质（2020）  

- 定义：<span style="color: gray;">____</span>安排的"异常"事件
  - <span style="font-size: 12px;">(CPU主动发出
- 实现方式
  - <span style="color: Gold;">____</span><span style="color: LightSkyBlue;">____</span>
  - 特殊控制 <span style="color: Gold;">____</span>
- process：
  - 执行完<span style="color: SlateBlue;">____</span>
  - according to类型进行处理
    - 返回<span style="color: gray;">____</span>指令（非转移指令）
    - ~ <span style="color: LimeGreen;">____</span> <span style="color: Gold;">____</span>指令（转移指令）
- 应用实例
  - x86程序调试
  - 系统调用指令
  - 条件Trap指令

<div>
<details>
  <summary> </summary>
  <ul>
    <li>陷</li>
    <li>预先</li>
    <li>特殊</li>
    <li>指令</li>
    <li>标志</li>
    <li>Trap</li>
    <li>next</li>
    <li>转移</li>
    <li>目标</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">（3） <span style="color: GreenYellow;">____</span>（ <span style="color: GreenYellow;">A</span>bort）

<ul>

- Trigger condition：无法继续执行的<span style="color: green;">____</span><span style="color: gray;">____</span>
  - <span style="color: Gold;">____</span>器出错
  - <span style="color: GreenYellow;">____</span>emory校验错
  - <span style="color: Gold;">____</span>错误
- 特点
  - <u>非特定</u>指令产生
  - <span style="color: gray;">____</span>发生
- <span style="color: green;">____</span>方式：调出<u>异常服务</u>程序 <span style="color: Gold;">____</span>系统

<div>
<details>
  <summary> </summary>
  <ul>
    <li>终止</li>
    <li>硬件</li>
    <li>故障</li>
    <li>控制</li>
    <li>M</li>
    <li>bus</li>
    <li>随机</li>
    <li>处理</li>
    <li>重启</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: green;">中断</span> <span style="color: silver;">~

<ul>

>pro：对中断和异常事件的判断（2009、2016、2020）  

#### <span style="color: silver;"> concept

<ul>

- 定义：CPU外部、与指令____的事件
- 来源
  - I/O设备中断
  - 特殊事件
- 处理机制
  - 通过中断____信号线
  - 指令____后检查

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无关</li>
    <li>请求</li>
    <li>执行完</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">按<span style="color: gray;">____</span><span style="color: LimeGreen;">____</span>性

<ul>

##### <span style="color: silver;">（1）<span style="color: gray;">____</span><span style="color: LimeGreen;">____</span>

<ul>

- 通过<span style="color: gray;">____</span>请求线发出
  - 可通过 <span style="color: LimeGreen;">____</span><span style="color: gray;">____</span>控制

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可</li>
    <li>屏蔽</li>
    <li>INTR</li>
    <li>屏蔽</li>
    <li>字</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">（2）<span style="color: purple;">____</span><span style="color: gray;">____</span><span style="color: LimeGreen;">____</span>~

<ul>

- 通过<span style="color: gray;">____</span>请求线发出
- 用于<span style="color: SlateBlue;">____</span>硬件故障

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不</li>
    <li>可</li>
    <li>屏蔽</li>
    <li>NMI</li>
    <li>紧急</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;">其他~

<ul>

- 按识别服务程序<span style="color: DarkRed;">____</span>方式
  - <span style="color: Gold;">____</span><span style="color: green;">____</span>
  - 非~
- 按处理过程whether允许打断
  - <span style="color: GreenYellow;">____</span>重中断
  - <span style="color: RoyalBlue;">____</span>重中断

<div>
<details>
  <summary> </summary>
  <ul>
    <li>地址</li>
    <li>向量</li>
    <li>中断</li>
    <li>单</li>
    <li>多</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: silver;">~<span style="color: Gold;">响应</span>过程  

<ul>

### <span style="color: silver;">概述

<ul>

- 响应过程定义
  - from检测到事件to调出处理程序' <span style="color: gray;">____</span>
    - 称为异常和中断 <span style="color: Gold;">____</span>
      - <span style="font-size: 12px;"> (CPU 检测到 异常或中断请求时 need处理

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全过程</li>
    <li>响应</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">详解

<ul>

#### <span style="color: silver;">1. <span style="color: gray;">____</span><span style="color: green;">____</span>

<ul>

- 在保存断点和程序状态期间，不能被新的中断打断
- 实现方式：
  - 通过设置"中断允许"（IF）触发器
  - IF=1：开中断，允许响应中断
  - IF=0：关中断，不允许响应中断

<div>
<details>
  <summary> </summary>
  <ul>
    <li>关</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">2. <span style="color: GreenYellow;">____</span> 断点和程序 <span style="color: Gold;">____</span>

<ul>

- <span style="color: green;">____</span>（返回地址）保存
  - 保存位置
    - <span style="color: Gold;">____</span>
    - or <span style="color: gray;">____</span> <span style="color: LimeGreen;">____</span>
  - 保存方式
    - usually <span style="color: Gold;">____</span>
      - 目的：支持异常或中断的嵌套
- <span style="color: LightSkyBlue;">____</span>状态保存
  - 保存内容
    - 被中断时的 程序状态字寄存器<span style="color: LightSkyBlue;">____</span><span style="color: Gold;">____</span><span style="color: gray;">____</span>内容
  - 保存位置
    - ~(同<span style="color: green;">____</span>)
  - 目的
    - 为异常和中断返回时<span style="color: gray;">____</span>到<span style="color: LightSkyBlue;">____</span><span style="color: Gold;">____</span><span style="color: gray;">____</span>中

<div>
<details>
  <summary> </summary>
  <ul>
    <li>保存</li>
    <li>状态</li>
    <li>断点</li>
    <li>栈</li>
    <li>特定</li>
    <li>R</li>
    <li>栈</li>
    <li>程序</li>
    <li>P</li>
    <li>S</li>
    <li>W</li>
    <li>断点</li>
    <li>恢复</li>
    <li>P</li>
    <li>S</li>
    <li>W</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">3. <span style="color: Gold;">____</span>异常和中断 & <span style="color: LimeGreen;">____</span>相应的处理<span style="color: LightSkyBlue;">____</span>

<ul>

- <span style="color: GreenYellow;">____</span>识别方式
  - CPU设置
    - 异常状态寄存器<span style="color: SlateBlue;">____</span>xception <span style="color: Gold;">____</span>tatus <span style="color: LimeGreen;">____</span>egister 记录异常原因
  - process:
    - 统一处理
      - 使用<span style="color: gray;">____</span>的异常或中断 <span style="color: LimeGreen;">____</span><span style="color: LightSkyBlue;">____</span>
    - <span style="color: LimeGreen;">____</span>:
      - 按 <span style="color: LimeGreen;">____</span><span style="color: LightSkyBlue;">____</span><span style="color: Gold;">____</span>顺序查询<span style="color: SlateBlue;">____</span><span style="color: Gold;">____</span><span style="color: LimeGreen;">____</span>
      - <span style="color: gray;">____</span>异常和中断 <span style="color: GreenYellow;">____</span>
- <span style="color: green;">____</span>~（ <span style="color: Gold;">____</span><span style="color: green;">____</span>）
  - 中断向量:
    - 定义：异常或中断处理程序的<span style="color: gray;">____</span><span style="color: DarkRed;">____</span>
  - 存储结构:
    - 中断向量<span style="color: gray;">____</span>存放所有<span style="color: green;">____</span> <span style="color: Gold;">____</span>
  - <span style="color: LimeGreen;">____</span>关系:
    - every异常或中断指定一个中断类型号
    - <span style="color: LimeGreen;">____</span>号和<span style="color: green;">____</span> <span style="color: Gold;">____</span>一一对应

<div>
<details>
  <summary> </summary>
  <ul>
    <li>识别</li>
    <li>转到</li>
    <li>程序</li>
    <li>软件</li>
    <li>E</li>
    <li>s</li>
    <li>r</li>
    <li>统一</li>
    <li>查询</li>
    <li>程序</li>
    <li>查询</li>
    <li>优</li>
    <li>先</li>
    <li>级</li>
    <li>E</li>
    <li>S</li>
    <li>R</li>
    <li>确定</li>
    <li>类型</li>
    <li>硬件</li>
    <li>向量</li>
    <li>中断</li>
    <li>首</li>
    <li>地址</li>
    <li>表</li>
    <li>中断</li>
    <li>向量</li>
    <li>映射</li>
    <li>类型</li>
    <li>中断</li>
    <li>向量</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: Gold;">特点

<ul>

- 整个响应过程是不可被打断的
- 处理流程：
  - 响应过程结束后，CPU从PC中取出对应中断服务程序的第一条指令开始执行
  - 执行直至中断返回
  - 由CPU通过执行中断服务程序完成
  - 整个中断处理过程是由____/硬件协同实现的

<div>
<details>
  <summary> </summary>
  <ul>
    <li>软</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: LightSkyBlue;">指令</span> <span style="color: silver;">流水线  

<ul>

- 指令执行方式对比：
  - 单周期处理机：
    - 采用串行方法执行指令
    - 同一时刻CPU只执行<span style="color: gray;">____</span>指令
    - 功能部件使用率低
  - 现代计算机：
    - 采用<span style="color: LightSkyBlue;">____</span>流水线技术
      - <u>同一时刻</u>多条指令在不同功能部件中 <span style="color: LimeGreen;">____</span>执行
    - 优点：
      - 提高功能部件的并行性
      - 提高程序的执行效率

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一条</li>
    <li>指令</li>
    <li>并发</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">基本概念

<ul>

### <span style="color: silver;"><span style="color: green;">____</span>性提升方法

<ul>

- 时间维度:
  - 流水线技术
    - 任务<span style="color: gray;">____</span>为子阶段
    - 子阶段在不同功能部件上执行
    - 可同时执行多个任务的不同阶段
- 空间~:
  - <span style="color: purple;">____</span> <span style="color: Gold;">____</span>处理机
    - 设置多个<u>相同</u>功能部件
      - 多个功能部件并行工作
    - 实现同类任务的<span style="color: gray;">____</span>处理

<div>
<details>
  <summary> </summary>
  <ul>
    <li>并行</li>
    <li>分解</li>
    <li>超</li>
    <li>标量</li>
    <li>并行</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">指令<span style="color: LimeGreen;">____</span>阶段

<ul>

- 指令执行过程
  - 分解为若干阶段
    - 每个阶段由相应功能部件完成
  - 各阶段 --构成--> 指令流水线
    - 将各阶段视为流水<span style="color: gray;">____</span>
    - 组合形成完整流水 <span style="color: Gold;">____</span>
- 5个基本流水<span style="color: gray;">____</span>
  - 取指(<span style="color: LightSkyBlue;">____</span><span style="color: GreenYellow;">____</span>)
    - 功能：从指令存储器或Cache中取指令
  - 译码/读寄存器(____<span style="color: deepskyblue;">____</span>) 
    - 功能：操作控制器译码
    - 功能：从寄存器堆取操作数
  - 执行/计算地址( <span style="color: LimeGreen;">____</span>)
    - 功能：执行运算
    - 功能：计算地址
  - 访存(<span style="color: gray;">____</span>)
    - 功能：对存储器进行读/写操作
  - 写回(<span style="color: gray;">____</span><span style="color: GreenYellow;">____</span>)
    - 功能：将执行结果写回寄存器堆

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4e4d3b2fd28bf010d15ebe5c04890299db4e9d522cfa5616dd58c870df156a3c.jpg)  

>pro：流水线对指令集的要求（2011）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>执行</li>
    <li>段</li>
    <li>线</li>
    <li>段</li>
    <li>I</li>
    <li>F</li>
    <li>I</li>
    <li>D</li>
    <li>EX</li>
    <li>MEM</li>
    <li>W</li>
    <li>B</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">____</span><span style="color: GreenYellow;">____</span>要求

<ul>

- 指令长度一致性
  - 应尽量保持一致
  - 有利于简化取指令和译码操作
  - 避免取指时间不一致导致部件复杂
- 指令格式规整性
  - 源寄存器位置应保持相同
  - 便于在指令未知时取____操作数
- LOAD/STORE型指令设计
  - 其他指令不访问____
  - 有利于规整地址计算和运算步骤
- 存储对齐要求
  - 数据和指令需"按边界对齐"存放
  - 有利于减少____次数

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>集</li>
    <li>寄存器</li>
    <li>存储器</li>
    <li>访存</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">基本 <span style="color: Gold;">____</span>

<ul>

- 单周期实现特点
  - 不是所有指令都需要5个阶段
  - 时钟周期取决于最慢指令
  - 时钟频率受限于最长数据通路

>pro：流水线时钟周期的设计（2009）  

### <span style="color: silver;">principle

<ul>

- 流水段<span style="color: gray;">____</span>原则
  - 以最复杂指令所需功能段个数为准
- 流水段<span style="color: LightSkyBlue;">____</span>原则
  - 以最复杂操作所需时间为准
- eg:
  - 各阶段时间
    - 取指：200ps
    - 译码：100ps
    - 执行：150ps
    - 访存：200ps
    - 写回：100ps
  - 总执行时间分析
    - 串行执行总时间：____ps
    - 流水线设计
      - 每个流水段长度：____ps（按最长段对齐）
      - 单条指令执行时间：____ps
      - 比串行执行增加：____ps
  - 执行效率比较
    - 程序包含N条指令时
      - 单周期串行执行时间：____ × 750ps
      - 流水线执行时间：____ × 200ps

<div>
<details>
  <summary> </summary>
  <ul>
    <li>实现</li>
    <li>个数</li>
    <li>长度</li>
    <li>750</li>
    <li>200</li>
    <li>1000</li>
    <li>250</li>
    <li>N</li>
    <li>(N + 4)</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">____</span> <span style="color: LimeGreen;">____</span>

<ul>

- 流水<span style="color: gray;">____</span> <span style="color: LimeGreen;">____</span>设计
  - 每个流水段后增加流水段寄存器
    - 功能：
      - ____本段处理完的数据
      - 确保结果可用于下一周期
- 时钟<span style="color: LightSkyBlue;">____</span>机制
  - 采用统一时钟CLK
  - 每个时钟周期操作：
    - 第一步：处理完的数据 <span style="color: LimeGreen;">____</span><span style="color: Gold;">____</span>到段寄存器
    - 第二步： <span style="color: GreenYellow;">____</span>前段传递的数据

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/15dad3e9b41ca386ed07524528163648ddba3b917ff3c224e8e9b044083935c5.jpg)  

>attention:  

在考试中，若没有明确说明，则可以不用考虑流水寄存器的时延。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>逻辑</li>
    <li>结构</li>
    <li>段</li>
    <li>R</li>
    <li>锁存</li>
    <li>同步</li>
    <li>锁</li>
    <li>存</li>
    <li>接收</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: gray;">____</span><span style="color: LightSkyBlue;">____</span>

<ul>

- concept
  - 用于直观描述流水线执行情况
  - 横坐标：时间，分割为<span style="color: gray;">____</span>时间段<span style="color: gray;">____</span>
  - 纵~：指令所处功能<span style="color: gray;">____</span>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8f92b2589c2fe4694603f3c9894919d540ed16f5065d6218d79024a19ab46846.jpg)  

>pro：流水线执行4条指令所需的时钟周期数（2012）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时空</li>
    <li>图</li>
    <li>等长</li>
    <li>T</li>
    <li>部件</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: Gold;">____</span> <span style="color: LimeGreen;">____</span>

<ul>

- 执行效率比较
  - 流水线方式：时刻10T 有____条指令完成
  - 串行方式：.. 仅____条指令完成
- 适用场景
  - <span style="color: gray;">____</span><span style="color: Gold;">____</span>、<span style="color: LightSkyBlue;">____</span>执行
  - float运算流水线 only suit</span>运算密集型应用

<div>
<details>
  <summary> </summary>
  <ul>
    <li>性能</li>
    <li>分析</li>
    <li>6</li>
    <li>2</li>
    <li>连续</li>
    <li>任务</li>
    <li>指令</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: Goldenrod;">____</span><span style="color: silver;">与<span style="color: LimeGreen;">____</span>

<ul>

>pro：导致流水线阻塞的各种原因（2010）  

- 流水线冒险概述：
  - 定义：
    - 后续指令无法正确执行而引起流水线____的现象
  - 分类（根据导致原因）：
    - ____冒险
    - ____冒险 
    - ____冒险
- 指令操作说明：
  - 不同类型指令在各流水段的操作是不同的
  - 具体操作详见表5.2表5.2不同类型指令在各流水段中的操作
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0e6ae322ef1d230d3622eda619a0b7d751d40c5ad99cf6bbc3f88c1bdf5ad624.jpg)  

这几类指令将会在下面介绍流水线冲突时涉及。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>冒险</li>
    <li>处理</li>
    <li>阻塞</li>
    <li>结构</li>
    <li>数据</li>
    <li>控制</li>
  </ul>
</details>
</div>

### <span style="color: LimeGreen;">____</span><span style="color: Goldenrod;">____</span>

<ul>

>pro：解决结构冒险的办法（2016）  

- 定义：由<u>不同指令</u>在<span style="color: gray;">____</span>争用同一功能部件而形成的冲突
  - (资源冲突
  - 由硬件资源竞争造成
- 示例：
  - 指令和数据存放在同一存储器引发的冲突
    - 第i条LOAD指令____段访存与第i+3条指令____段取指令同时发生
    - 解决方法：暂停后一条指令操作一个时钟周期
- 解决方案：
  1. 暂停策略
     - 前一指令访存时，暂停后续相关指令一个时钟周期
  2. 硬件冗余
     - 设置多个独立部件
     - 如：寄存器读写口独立
     - 如：数据存储器和指令存储器分离
     - 现代Cache采用数据Cache和指令Cache分离

表5.3 用暂停后续指令的方法解决访存冲突
![image](https://bluejedis.github.io/picx-images-hosting/test/image.7zqhnkwshy.webp)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>结构</li>
    <li>冒险</li>
    <li>同一时刻</li>
    <li>MEM</li>
    <li>F</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: LightSkyBlue;">____</span><span style="color: Goldenrod;">____</span>

<ul>

>pro：分析指令之间的数据冒险（2012、2014、2016、2019、2023）  

#### <span style="color: silver;">concept

<ul>

- 定义：后面指令用到前面指令的结果时，<span style="color: gray;">____</span>面<span style="color: LightSkyBlue;">____</span>的结果<span style="color: gray;">____</span>
- 主要类型：
  - 先写后读（ <span style="color: Gold;">____</span>A<span style="color: LimeGreen;">____</span>）冲突
    - <span style="font-size: 12px;">在写入数据之前 需要读取这个数据
      - if not:读取到错误的数据或者数据尚未更新

>attention:  

在按序执行的流水线中（统考中通常采用这种方式），只可能出现RAW冲突。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>冒险</li>
    <li>前</li>
    <li>指令</li>
    <li>还没有产生</li>
    <li>R</li>
    <li>W</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: gray;"> <span style="color: Gold;">____</span>A<span style="color: LimeGreen;">____</span> <span style="color: silver;">冲突

<ul>

- 指令序列：
  
  I1: add R1,R2,R3  #（R2）+（R3）→R1
  I2: sub R4,R1,R5  #（R1)-（R5）→R4
  
- 冲突原因：
  - I2的源操作数isI1的____操作数
  - 流水线重叠导致读写顺序改变

表5.4add和sub指令发生先写后读（RAW）冲突
![image](https://bluejedis.github.io/picx-images-hosting/test/image.eskjdoazp.webp)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>R</li>
    <li>W</li>
    <li>目的</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">methods

<ul>

##### <span style="color: silver;">1. <span style="color: Gold;">____</span>执行

<ul>

- 实现方式：
  - 软件 <span style="color: LimeGreen;">____</span>空操作"<span style="color: gray;">____</span>"指令
  - 硬件阻塞( <span style="color: Gold;">____</span>)
- 优化方法：
  - 寄存器读写时间控制
    - 前半T 写入
    - 后半T 读出

表5.5用延迟相关指令的办法来解决RAW冲突
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/83b58f5125520e327f2952f138d8b8e3e1c011a0b53539439425dabca2d3aec6.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>延迟</li>
    <li>插入</li>
    <li>nop</li>
    <li>stall</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">2. 转发(<span style="color: Goldenrod;">____</span>)技术

<ul>

- 工作原理：
  - 设置相关转发通路
  - 直接使用中间数据
  - 避免等待写回____

表5.6用转发技术来解决RAW冲突
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6e66822789ad2aac996fbfbdb4f43c39d585688d099743e0d47d9ac80812a914.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>旁路</li>
    <li>寄存器</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">3. <span style="color: LightSkyBlue;">____</span>-use

<ul>

- 问题特点：
  - load指令与紧邻运算指令存在数据相关
  - 无法通过____技术解决
- 解决方法：
  - 编译器插入nop指令
  - 程序编译时优化指令顺序

表5.7用延迟加转发技术来解决load-use冲突
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d8f74604a1f7296c5efc84ccc1b539219931dc8dd2633e2e187d4d2cf904438d.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>load</li>
    <li>转发</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

### <span style="color: Gold;">____</span><span style="color: Goldenrod;">____</span>

<ul>

>pro：分析指令之间的控制冒险（2014、2023）  

#### <span style="color: silver;">concept

<ul>

- 定义： <span style="color: LimeGreen;">____</span> 指令执行<span style="color: gray;">____</span>导致的 <span style="color: Gold;">____</span>
- Trigger condition：
  - 执行 <span style="color: LimeGreen;">____</span>/<span style="color: green;">____</span> 指令
  - 发生 <span style="color: LimeGreen;">____</span>或 <span style="color: Gold;">____</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>控制</li>
    <li>冒险</li>
    <li>改变</li>
    <li>顺序</li>
    <li>冲突</li>
    <li>转移</li>
    <li>返回</li>
    <li>中断</li>
    <li>异常</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">处理

<ul>

- 延迟处理方法：
  - <span style="color: Gold;">____</span>后续指令执行
  - 插入<span style="color: gray;">____</span>指令

表5.8用插入空操作的办法解决控制冲突
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5d0c7063bc5e9cb5cf392f3925551cca3ebbfb37ad2e468043801a4c994d2fcf.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>推迟</li>
    <li>nop</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">methods

<ul>

1. 基本方法
   - 软件插入"<span style="color: gray;">____</span>"指令
   - 硬件阻塞( <span style="color: Gold;">____</span>)
2. 分支预测
   - 简单(静态)预测
     - 预设条件不满足时继续顺序执行
   - 动态预测
     - 基于历史情况动态调整
     - 具有较高预测准确率

>attention:  

Cache缺失的处理过程也会引起流水线阻塞。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>nop</li>
    <li>stall</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: Gold;">____</span> <span style="color: LimeGreen;">____</span>

<ul>

### <span style="color: silver;">流水线的 <span style="color: Gold;">____<span style="color: RoyalBlue;">____</span>

<ul>

<span style="font-size: 12px;"> Throughput rate</span>

- 定义：
  - 单位时间内完成的
    - 任务数量
    - 输出结果的数量

>pro： 流水线吞吐率的计算（2013）  

#### <span style="color: silver;">公式

<ul>

- 
  $
  \color{gray}\mathrm{TP}\,{=}\,\frac{n}{____}
  $  
  - 式中：
    - $n$ 是任务<span style="color: gray;">____</span>
    - $T_{k}$ 是处理完 $n$ 个任务所用的总 <span style="color: LimeGreen;">____</span>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>性能</li>
    <li>指标</li>
    <li>吞吐</li>
    <li>率</li>
    <li>T_{k}</li>
    <li>数</li>
    <li>时间</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: Gold;">____</span> <span style="color: silver;">情况计算

<ul>

- 设定条件：
  - $k$ 为流水段的段数
  - $\Delta t$ 为时钟周期
- 计算过程：
  - 在输入流水线中的任务连续的理想情况下
  - 一条 $k$ 段流水线能在 ____ 个时钟周期内完成 $n$ 个任务
  - 得出流水线的吞吐率为：
    $
    \mathrm{TP}=\frac{n}{____}
    $  
- <span style="color: gray;">____</span> 吞吐率：
  - 当连续输入的任务数 $n{\rightarrow}\infty$ 时
  - $\mathrm{TP}_{\mathrm{max}}\,{=}____$  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>理想</li>
    <li>k+n-1</li>
    <li>(k+n-1)\Delta t</li>
    <li>max</li>
    <li>1/\Delta t</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;">流水线的 <span style="color: LimeGreen;">____</span><span style="color: black;">比

<ul>

- 完成同样一批任务
- $T_{不使用流水线}/T_{使用流水线}$

#### <span style="color: silver;">公式

<ul>

- 
  $
  \color{gray}S=\frac{____}{____}
  $  
  - 式中：
    - $T_{0}$ 表示不使用流水线的总时间
    - $T_{k}$ 表示使用流水线的总时间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>加速</li>
    <li>T_{0}</li>
    <li>T_{k}</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: GreenYellow;">____</span>

<ul>

- 时间计算：
  - 一条 $k$ 段流水线完成 $n$ 个任务所需的时间：$T_{k}=____$
    - ↑<span style="font-size: 12px;">   $\color{gray}k\Delta t+(n-1)\Delta t$
    - <span style="font-size: 12px;">  (并行性 每个指令后推一个$\Delta t$)
  - 顺序执行 $n$ 个任务时，所需的总时间：$T_{0}=____$
- 加速比计算：
  - 将 $T_{0}$ 和 $T_{k}$ 值代入得：
    $
    S=\frac{____}{____}\!=\!\frac{____}{____}
    $  
- max加速比：
  - 当连续输入的任务数 $n{\rightarrow}\infty$ 时
  - $S_{\mathrm{max}}\,{=}\,____$  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>计算</li>
    <li>\left(k+n-1\right)\Delta t</li>
    <li>{kn}\Delta t</li>
    <li>k n\Delta t</li>
    <li>(k+n-1)\Delta t</li>
    <li>k n</li>
    <li>k+n-1</li>
    <li>k</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: Gold;">____</span> <span style="color: silver;">流水线技术

<ul>

- 有两种增加指令级并行的策略：
  - 多发射技术：采用多个内部功能部件，使流水线功能段能同时处理多条指令
  - 超流水线技术：通过增加流水线级数来使更多的指令同时在流水线中重叠执行

### <span style="color: RoyalBlue;">____</span><span style="color: Gold;">____</span><span style="color: silver;">技术

<ul>

#### <span style="color: purple;">____</span><span style="color: silver;"><span style="color: gray;">____</span>流水线 技术

<ul>

>pro：超标量流水线的特性(2017)  

- <span style="color: GreenYellow;">____</span>多发射技术
  - 特点
    - 并发性
      - 每个时钟周期内可并发多条独立指令
    - 编译执行
      - 以并行操作方式将两条或多条指令编译并执行
    - 硬件要求
      - 需配置多个功能部件
  - 执行方式
    - 简单超标量CPU
      - 指令<u>按顺序</u>发射执行
    - 多数~
      - 结合动态流水线调度技术
      - 通过动态分支预测等手段
      - 指令不按顺序执行（<u>乱序</u>执行）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>高级</li>
    <li>多</li>
    <li>发射</li>
    <li>超</li>
    <li>标量</li>
    <li>动态</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

```

---

### 处理说明
1. **挖空内容**：
   - 定义中的关键词（如“意外”“中断”）、公式定理中的关键部分（如 \(T_{k}\)）、算法或流程中的关键步骤（如“检测”“响应”）被替换为 ____。
   - 挖空时保留上下文，确保内容简洁且重点突出，便于记忆和自我测试。

2. **折叠块**：
   - 每个次级标题下的答案使用 `<details>` 和 `<ul>` 标签封装为折叠块，`<li>` 标签独立成行，支持 Markdown 内公式渲染。
   - 折叠块内容与原题干缩进对齐，符合要求。

3. **格式保持**：
   - 原有 Markdown 结构（如标题层级、列表、图片链接）未改变，完整输出所有内容。
   - 保留了 `<span>` 颜色标签和其他格式，确保视觉效果一致。

4. **示例验证**：
   - 处理结果与您提供的“导数的概念”示例一致，确保逻辑和格式统一。

如果需要进一步调整或补充，请告诉我！

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，关键词、公式定理和关键步骤被挖空，并在每个次级标题下以 HTML 折叠块形式提供答案。输出同时保留了 Markdown 和 HTML 格式，结构完整，未省略任何内容。

---

```markdown
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3fb915064ad6368ced430ed580e5bb36216c80da07ef16f0bb6a2923dd9be00f.jpg)  
图5.19超标量流水线技术  

</ul>

#### <span style="color: purple;">超</span><span style="color: silver;">长<span style="color: LightSkyBlue;">指令</span><span style="color: gray;">字</span> 技术  

<ul>

- <span style="color: LightSkyBlue;">静态</span> 多发射技术
  - 特点：
    - 指令并行性：
      - 由编译程序挖掘指令间潜在的____
    - 指令组合：
      - 将可<u>并行</u>操作的多条指令组合成____<span style="color: LightSkyBlue;">指令</span>字
      - 指令字长度可达几百位
    - 硬件要求：
      - 需要配备____处理部件

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

并行性</li>
    <li>

超长</li>
    <li>

多个</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: purple;">超</span><span style="color: LightSkyBlue;">流水</span><span style="color: Gold;">线</span> <span style="color: silver;">技术  

<ul>

- 原理：
  - 通过 ____流水线 ____来提升性能
  - 流水线功能段划分越多，时钟周期越短
  - 指令吞吐率越高
- 限制：
  - 流水线级数越多，用于流水寄存器的____越____
  - 流水线级数有限制，NOT越多越好

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/742aac8f955fdb4c6ca794363252545db1e5f37ff8e48bc846bf71986d0fa0d6.jpg)  
图5.20超流水线技术  

>pro：基本流水线CPU和超标量流水线CPU的CPI（2020）  

- <span style="color: purple;">超</span>流水线CPU：
  - 流水线充满后，每个时钟周期执行<u>一条</u>指令
  -  <span style="color: LimeGreen;">C</span>P<span style="color: LightSkyBlue;">I</span>=____
  - 主频更高
- <span style="color: RoyalBlue;">多</span><span style="color: Gold;">发射</span><span style="color: silver;">流水线CPU：
  - 每个时钟周期可以处理____指令
  -  <span style="color: LimeGreen;">C</span>P<span style="color: LightSkyBlue;">I</span>____
  - 成本更高、控制更复杂

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

提高</li>
    <li>

主频</li>
    <li>

开销</li>
    <li>

大</li>
    <li>

1</li>
    <li>

多条</li>
    <li>

<1</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#  <span style="color: silver;"><span style="color: RoyalBlue;">多</span>处理器

<ul>

>pro： 多处理器的基本概念（2022）  

##  <span style="color: silver;">SISD、SIMD、MISD、MIMD

<ul>

- 基于指令流和数据流的数量：
  - SISD(单 指令流 单 数据流)
  - SIMD 
  - MISD
  - MIMD
- 分类对应关系：
  - 常规单处理器 → ____
  - 常规多处理器 → ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

SISD</li>
    <li>

MIMD</li>
  </ul>
</details>
</div>

###   <span style="color: silver;"> <span style="color: Gold;">S</span>I<span style="color: Gold;">S</span>D  

<ul>

- SISD是____的事行计算机结构
  - 特点：
    - 仅包含一个处理器和一个存储器
    - 一段时间内仅执行____指令
    - 按指令流规定的顺序串行执行指令流中的若干指令
  - 优化方式：
    - 采用____方式提高速度
    - 设置多个功能部件
    - 采用多模块交叉方式组织存储器

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

传统</li>
    <li>

一条</li>
    <li>

流水线</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"> <span style="color: Gold;">S</span>I<span style="color: purple;">M</span>D 

<ul>

- SIMD定义：
  - 一个指令流同时对多个数据流进行处理
  - (也称 数据级____技术
- 结构组成：
  - 一个指令控制部件
  - 多个处理单元
    - 每个单元执行____指令
    - 拥有独立的地址寄存器
    - 处理不同的数据
- 应用效率：
  - 最高效：____循环处理数组
  - 最低效： ____或 ____语句

####  <span style="color: silver;"><span style="color: gray;">向量</span> <span style="color: Gold;">处理</span>器

<ul>

- 定义：SIMID的变体，实现直接操作一维数组____的CPU
- 工作原理：
  - 将数据组按顺序放入____寄存器
  - 以流水化方式依次操作
  - 结果写回寄存器
- 应用优势：
  - 特定工作环境中性能提升显著
  - 尤其在____等领域

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

并行</li>
    <li>

相同</li>
    <li>

for</li>
    <li>

case</li>
    <li>

switch</li>
    <li>

指令集</li>
    <li>

向量</li>
    <li>

数值模拟</li>
  </ul>
</details>
</div>

</ul>

</ul>

###  <span style="color: silver;"><span style="color: purple;">M</span>I<span style="color: Gold;">S</span>D 

<ul>

- 定义：同时执行多条指令，处理____数据
- 实际上不存在这样的计算机

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

同一个</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"><span style="color: purple;">M</span>I<span style="color: purple;">M</span>D 

<ul>

- 定义：同时执行多条指令分别处理多个____数据

####  <span style="color: silver;">多<span style="color: gray;">计算机</span>系统

<ul>

- 特点：
  - 每个节点具有私有存储器
  - 具有独立主存____空间
  - 通过消息传递进行数据传送
  - 也称消息传递____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不同</li>
    <li>

地址</li>
    <li>

MIIMID</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: silver;">多<span style="color: Gold;">处理器</span>系统

<ul>

- 特点：
  - 共享存储多处理器(____)系统
  - 具有共享的单一____空间
  - 通过存取指令访问所有存储器
  - 也称共享存储____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

SMP</li>
    <li>

地址</li>
    <li>

MIIMID</li>
  </ul>
</details>
</div>

</ul>

</ul>

###  <span style="color: silver;">并行计算模式对比( <span style="color: Gold;">S</span>I<span style="color: purple;">M</span>D vs <span style="color: purple;">M</span>I<span style="color: purple;">M</span>D)

<ul>

- SIMD： ____级并行模式
- MIMD： ____级或更高级别的并行计算模式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据</li>
    <li>

线程</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: green;">硬件</span><span style="color: purple;">多</span><span style="color: Gold;">线程</span> 

<ul>

- 传统CPU中的线程切换问题：
  - 包含一系列开销
  - 频繁切换会极大影响系统____

- 硬件多线程的产生：
  - 目的：
    - 减少线程切换过程中的____
  - 实现方式：
    - 为每个线程提供独立硬件：
      - ____寄存器组
      - 程序计数器
    - 切换优化措施：
      - 只需激活选中的寄存器
      - 省略存储器数据交换环节
      - 显著减少线程切换____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

性能</li>
    <li>

开销</li>
    <li>

通用</li>
    <li>

开销</li>
  </ul>
</details>
</div>

### 硬件多线程的实现方式

#### <span style="color: gray;">细</span><span style="color: silver;">粒度~

<ul>

- 多个线程之间轮流____执行指令
  - <u>多个线程</u>之间的指令是不相关的，可以乱序并行执行
  - 处理器能在 every时钟周期切换线程 ←  ____级 ____
    - 例如：
      - 在时钟周期i，将线程A中的多条指令发射执行
      - 在时钟周期 $\mathrm{i}+1$ ，将线程B中的多条指令发射执行

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

交叉</li>
    <li>

线程</li>
    <li>

并行</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: Gold;">粗<span style="color: silver;">粒度~

<ul>

- 粗粒度多线程执行特征：
  - <u>同一线程</u> 指令 ____执行
    - 在多个时钟周期内执行同一线程的指令序列
  - 线程切换触发条件
    - 仅在当前线程出现较大开销阻塞时切换
    - 典型场景如____缺失

- 主要特点：
  - 流水线操作
    - 阻塞时需清除被阻塞的流水线
    - 新线程执行前需重载流水线
  - 切换开销
    - 比细粒度多线程的切换开销更大

- 技术特征总结：
  - 并行性实现
    - 实现了____级____
    - 未实现线程级并行

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连续</li>
    <li>

Cache</li>
    <li>

指令</li>
    <li>

并行</li>
  </ul>
</details>
</div>

</ul>

#### 同时 <span style="color: silver;">~
Simultaneous Multi-Threading

<ul>

- 同时多线程（SMT）
  - 细、粗粒度 的变体
  - 并行特点：
    - ____级、 ____级____
  - 执行特点：
    - 在同一个时钟周期中
      - 发射多个不同线程中的多条指令执行
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fe12e3816bacd5ce1624427dc34539902f856a1a779a1dfcb27e86ac5ec6d5bd.jpg)  

- Intel处理器中的超线程（Hyper-threading）
  - 基本定义
    - ____
  - 硬件实现
    - 在一个单处理器或单个核中设置了两套线程状态部件
  - 资源共享
    - 共享____
    - 共享功能部件

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

指令</li>
    <li>

线程</li>
    <li>

并行</li>
    <li>

SMT</li>
    <li>

高速缓存</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: purple;">多</span><span style="color: LimeGreen;">核</span><span style="color: silver;">~

<ul>

- 定义：
  - 将多个处理单元集成到单个CPU中
    - every处理单元称为一个____（core）
  - (片上多处理器
- 特点：
  - 每个核既可以有自己的____
    - 又an共享同一个____
  - 所有核通常共享主存储器

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4e190cda79c5d3789bba4003dd4e0cf2eedc2899411a4baf8ced7fc668357302.jpg)  
图5.22不共享Cache的双核CPU结构  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

核</li>
    <li>

Cache</li>
    <li>

Cache</li>
  </ul>
</details>
</div>

###  <span style="color: silver;">~性能发挥

<ul>

- <span style="color: purple;">多</span> <span style="color: Gold;">线程</span>（或多进程）执行
  - 使得每个核在同一时刻都有____在执行

- 与单核的区别：
  - 多核执行特点：
    - 多个线程物理上并行执行
    - 实现真正意义的____
    - 同一时刻可有多线程并行
  - 单核执行特点：
    - 多线程以交错方式执行
    - 同一时刻仅能执行____线程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

线程</li>
    <li>

并行</li>
    <li>

一个</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: gray;">Eg

<ul>

- 假设要将四颗圆石头滚到马路对面：
  - 滚动每颗石头平均需花费1分钟
  - 不同处理方式：
    - 串行处理器：逐一滚动每颗石头，花费____分钟
    - 双核处理器：两个人各滚两颗，花费____分钟
    - 向量处理器：用木板同时推动四块石头，理论上____分钟
  - 对比：
    - 多核处理器相当于拥有多名工人
    - 向量处理器拥有同时对多件事进行相同操作的方法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

4</li>
    <li>

2</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: RoyalBlue;">共享<span style="color: Gold;">内存~

<ul>

###  <span style="color: silver;">定义与特点

<ul>

- 多处理器特征：
  - 共享单一物理____空间
- 处理器间通信：
  - 通过存储器中的____变量实现
  - 通信方式：
    - 所有处理器可使用存取指令
    - 可访问存储器任意位置
- 地址空间使用：
  - 支持物理地址空间共享
  - 同时允许：
    - 在各自虚拟地址空间中
    - 独立运行程序

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

地址</li>
    <li>

共享</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: green;">类型

<ul>

####  <span style="color: silver;">统一存储访问（U<span style="color: LightSkyBlue;">M</span><span style="color: GreenYellow;">A</span>）多处理器
Uniform Memory Access

<ul>

- 特点：
  - 每个处理器对所有存储单元的访问时间大致____
  - 访问时间与处理器和访问位置无关
- 架构特征：
  - 内存控制器未整合进____
  - 访存操作需经过北桥芯片
  - CPU通过前端总线和北桥芯片相连

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相同</li>
    <li>

CPU</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: purple;">非</span> <span style="color: silver;">统一存储访问（<span style="color: gray;">N</span>U<span style="color: LightSkyBlue;">M</span><span style="color: GreenYellow;">A</span>）多处理器

<ul>

- 特点：
  - 存储器访存速度不同：
    - 访问速度取决于处理器和____
    - 主存被分割分配给不同处理器
- 架构优势：
  - 消除UMA架构的瓶颈：
    - 内存控制器集成到____内部
    - 每个CPU有独立内存控制器和本地内存
    - CPU间通过QPI总线相连

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

访问位置</li>
    <li>

CPU</li>
  </ul>
</details>
</div>

</ul>

</ul>

###  <span style="color: silver;">共享  <span style="color: GreenYellow;">变量</span><span style="color: LimeGreen;">访问</span>控制

<ul>

- 问题：
  - 多个处理器可能同时访问同一____变量
- 解决方案：
  - 同步操作：
    - 对共享变量加锁控制____访问
    - 访问控制：
      - 一次只允许一个处理器获得锁
      - 其他处理器需等待解锁

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

共享</li>
    <li>

互斥</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: deepskyblue;">Cache</span> <span style="color: silver;">一致性

<ul>

- UMA构架多处理器中的一致性要求：
  - Cache与主存之间的数据一致性
  - 各CPU的Cache之间的____
  - 不同CPU的Cache对同一内存位置的数据应保持一致

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一致性</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#   <span style="color: silver;">本章小结  

<ul>

本章开头提出的问题的参考答案如下。  

1）指令和数据均存放在内存中，计算机如何从时间和空间上区分它们是指令还是数据？  

从时间上讲，取指令事件发生在“____周期”，取数据事件发生在“____周期”。从空间上讲，从内存读出的指令流流向控制器（指令寄存器），从内存读出的数据流流向运算器（____寄存器）  

2）什么是指令周期、机器周期和时钟周期？它们之间有何关系？  

CPU每取出并执行一条指令所需的全部时间称为____周期；机器周期是在同步控制的机器中，执行指令周期中一步相对完整的操作（指令步）所需的时间，通常安排机器周期长度 $=$ ____周期；时钟周期是指计算机主时钟的周期时间，它是计算机运行时最基本的时序单位，对应完成一个微操作所需的时间，通常时钟周期 $=$ 计算机____的倒数。  

3）什么是微指令？它和第4章谈到的指令有什么关系？  

控制部件通过控制线向执行部件发出各种控制命令，通常把这种控制命令称为____，而一组实现一定操作功能的微命令的组合，构成一条微指令。许多条微指令组成的序列构成____， 微程序完成对指令的解释执行。指令，即指____指令。每条指令可以完成一个独立的算术运算或逻辑运算操作。在采用微程序控制器的CPU中，一条指令对应一个微程序，一个微程序由许多微指令构成，一条微指令会发出很多不同的微命令。  

4）什么是指令流水线？指令流水线相对于传统体系结构的优势是什么？  

指令流水线是把指令分解为若干子过程，通过将每个子过程与其他子过程并行执行，来提高计算机的____的技术。采用流水线技术只需增加少量硬件就能把计算机的运算速度提高几倍，因此成为计算机中普遍使用的一种____处理技术，通过在同一个时间段使用各功能部件，使得利用率明显提高。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

取指</li>
    <li>

执行</li>
    <li>

通用</li>
    <li>

指令</li>
    <li>

主存</li>
    <li>

主频</li>
    <li>

微命令</li>
    <li>

微程序</li>
    <li>

机器</li>
    <li>

吞吐率</li>
    <li>

并行</li>
  </ul>
</details>
</div>

</ul>

#  <span style="color: silver;">常见问题和易混淆知识点  

<ul>

1.流水线越多，并行度就越高。是否流水段越多，指令执行越快？  

错误，原因如下：  

1）流水段缓冲之间的额外____增大。每个流水段有一些额外开销用于缓冲间传送数据、进行各种准备和发送等功能，这些开销加长了一条指令的整个执行时间，当指令间逻辑上相互依赖时，开销更大。  

2）流水段间控制逻辑变多、变复杂。用于流水线优化和存储器（或寄存器）冲突处理的控制逻辑将随流水段的增加而大增，这可能导致用于流水段之间控制的逻辑比段本身的控制逻辑更____。  

2.读后写（WAR）相关和写后写（WAW）相关的概念  

1）读后写（WriteAfterRead，WAR）冲突。表示当前指令读出数据后，下一条指令才能写该____。否则，先写后读，读到的就是错误（新）数据。在下列指令中，寄存器R1可能存在这样的冲突，当指令12试图在指令Ⅱ1读R1之前就写入该寄存器时，指令I1就错误地读出该寄存器新的内容。  

I1 add R3,R1,R2  $\begin{array}{r l}{\#\left(\mathbb{R}{1}\right)+\left(\mathbb{R}{2}\right)\rightarrow\mathbb{R}{3}}&{{}}\\ {\#\left(\mathbb{R}{4}\right)-\left(\mathbb{R}{5}\right)\rightarrow\mathbb{R}{1}}&{{}}\end{array}$  I2 sub R1,R4,R5  

在读后写（WAR）冲突中，指令I2的目的操作数是指令I1的____操作数。  

3）写后写（WriteAfterWrite，WAW）相关。表示当前指令写入寄存器后，下一条指令才能写该____。否则，下一条指令在当前指令之前写，将使寄存器的值不是最新值。在下列指令中，寄存器RI可能存在这样的冲突，当指令I2试图在指令I1之前就写入R1时，就会错误地使由指令11写入的值成为该寄存器的内容。  

I1 add R1,R2,R3  $\begin{array}{r}{\#\left(\mathbb{R}2\right)+\left(\mathbb{R}3\right)\rightarrow\mathbb{R}1}\\ {\#\left(\mathbb{R}4\right)-\left(\mathbb{R}5\right)\rightarrow\mathbb{R}1}\end{array}$  I2 sub R1,R4,R5  

在写后写（WAW）冲突中，指令I2和指令I1的____操作数是相同的。  

>attention:  

在非按序执行的流水线中，因为允许后进入流水线的指令超过先进入流水线的指令而先流出流水线，所以既可能发生RAW相关，又可能发生WAR和WAW相关。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

开销</li>
    <li>

复杂</li>
    <li>

寄存器</li>
    <li>

源</li>
    <li>

寄存器</li>
    <li>

目的</li>
  </ul>
</details>
</div>

</ul>


