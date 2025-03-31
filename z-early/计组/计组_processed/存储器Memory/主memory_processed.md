以下是按照您要求处理后的 Markdown 内容，增加了 `<ul></ul>` 标签以实现标题段落间的缩进，且严格保留了原始 Markdown 格式中的图片链接（如 `![alt](url)`）不变：

---

<span style="color: silver;">

# <span style="color: silver;">above  

<ul>

## <span style="color: silver;">【考纲内容】  

<ul>

（一）存储器的分类  

（二）层次化存储器的基本结构  

（三）半导体随机存储器（RAM）SRAM、DRAM、Flash存储器  

（四）主存储器DRAM芯片和内存条、多模块存储器、主存储器和CPU之间的连接  

（五）外部存储器磁盘存储器、固态硬盘（SSD）  

（六）高速缓冲存储器（Cache）Cache的基本原理：Cache和主存之间的映射方式Cache中主存块的替换算法：Cache写策略  

（七）虚拟存储器  

<ul>

虚拟存储器的基本概念页式虚拟存储器：基本原理、页表、地址转换、TLB（快表）段式虚拟存储器的基本原理：段页式虚拟存储器的基本原理  

</ul>

</ul>

## <span style="color: silver;">【复习提示】  

<ul>

- 本章命题重点：
  - 特别关注Cache和虚拟存储器相关内容，这些考点容易出综合题。
  - 存储器的特点、扩展（芯片选择、连接方式、地址范围等）、交叉存储器也常考。
  - Cache的相关计算与替换算法是重要考点。
  - 虚拟存储器与TLB（Translation Lookaside Buffer）也是考试重点。

- 地址翻译与Cache映射问题：
  - 掌握存在Cache和TLB的计算机中的地址翻译机制。
  - 理解Cache映射问题。

- 学习建议：
  - 掌握基本原理，并多结合习题进行反复训练。
  - 深化理解并巩固知识。

<details>
<summary>学习本章时的思考问题：</summary>

<ul>

1. 存储器系统分层次的原因：
   - 为什么存储器系统需要分层次？
   - 计算机如何管理这些层次？

2. 影响Cache性能的因素：
   - 有哪些因素会影响Cache的性能？

3. 虚拟存储系统页面大小的选择：
   - 虚拟存储系统的页面是设置得大一些好还是小一些好？

</ul>

</details>

</ul>

</ul>

# <span style="color: silver;">concept 

<ul>

## <span style="color: silver;">M分类  

<ul>

存储器种类繁多，可从不同角度对存储器进行分类。  

### <span style="color: silver;">按在计算机中的<span style="color: gray;">作用</span>（层次）

<ul>

- 主存储器
  - 简称主存，也称内存储器（内存）
  - 用途：存放计算机运行期间所需的程序和数据
  - 特点：
    - CPU可以直接随机访问
    - 可与Cache及辅助存储器交换数据
    - 容量较小
    - 存取速度较快
    - 每位价格较高

- 辅助存储器
  - 简称辅存，也称外存储器或外存
  - 用途：存放当前暂时不用的程序和数据，以及需要永久性保存的信息
  - 特点：
    - 需要调入主存后才能被CPU访问
    - 容量大
    - 存取速度较慢
    - 单位成本低

- 高速缓冲存储器
  - 简称Cache
  - 位置：位于主存和CPU之间
  - 用途：存放当前CPU经常使用的指令和数据
  - 特点：
    - 存取速度可与CPU速度匹配
    - 存储容量小
    - 价格高
    - 现代计算机通常将其制作在CPU中

</ul>

### <span style="color: silver;">按存储<span style="color: SlateBlue;">介质</span> 

<ul>

- 磁表面存储器
  - 磁盘
  - 磁带
- 磁芯存储器
- 半导体存储器
  - MOS型存储器
  - 双极型存储器
- 光存储器
  - 光盘

</ul>

### <span style="color: silver;">按<span style="color: Gold;">存</span><span style="color: LimeGreen;">取</span>方式分类  

<ul>

> pro：采用随机存取的存储器（2011）  

- 随机存储器（RAM)
  - 特点：
    - 任何存储单元都可以随机存取
    - 存取时间与存储单元物理位置无关
  - 优点：读/写方便、使用灵活
  - 用途：主要用作主存或高速缓冲存储器
  - 分类：
    - 静态RAM
    - 动态RAM

- 只读存储器（ROM）
  - 特点：
    - 内容只能随机读出不能写入
    - 断电内容不会丢失
    - 写入速度比读取速度慢得多
  - 用途：存放固定不变的程序、常数和汉字字库等
  - 功能：可与随机存储器共同作为主存的一部分

- <span style="color: Gold;">串</span>行访问存储器
  - 特点：需按<span style="color: gray;">物理</span>位置先后顺序寻址
  - 类型：
    - 顺序存取存储器（如磁带）
      - 特点：存取速度慢，按顺序存取
    - 直接存取存储器（如磁盘、光盘）
      - 特点：介于RAM和顺序存取之间
      - 存取方式：先寻找小区域，再在区域内顺序查找

</ul>

### <span style="color: silver;">按信息的<span style="color: gray;">可</span><span style="color: Gold;">保存</span>性分类  

<ul>

- <span style="color: GreenYellow;">易</span><span style="color: LimeGreen;">失</span>性存储器
  - 特点：<span style="color: gray;">断电</span>后信息消失
  - 示例：RAM

- <span style="color: SlateBlue;">非</span>~
  - 特点：~ <span style="color: Gold;">保持</span>
  - 类型：
    - ROM
    - 磁表面存储器
    - 光存储器

</ul>

#### <span style="color: silver;">按<span style="color: Goldenrod;">Read</span>方式

<ul>

- <span style="color: SlateBlue;">破坏</span>性读出
  - 特点：读出时<span style="color: gray;">原</span>存储信息<u>被破坏</u>
  - 要求：每次读出后需要进行 <span style="color: LimeGreen;">再生</span>操作

- <span style="color: purple;">非</span>~
  - 特点：读出时原存储信息不被破坏

</ul>

</ul>

## <span style="color: Gold;">性能</span> <span style="color: LimeGreen;">指标</span>  

<ul>

### <span style="color: Gold;">存储</span> <span style="color: LimeGreen;">容量</span>

<ul>

- formula：
  - = 存储<span style="color: gray;">字数</span> × 字<span style="color: LightSkyBlue;">长</span>（如1M×8位）
- 单位换算：1B（Byte，字节）= 8b (bit，位)
- 说明：
  - 存储字数表示存储器的地址空间大小
  - 字长表示一次存取操作的数据量

</ul>

### <span style="color: silver;">单位<span style="color: gray;">成本</span> 

<ul>

- 计算公式：每位价格 = 总成本/总容量

</ul>

### <span style="color: Gold;">存储 <span style="color: RoyalBlue;">速度</span>

<ul>

- 计算公式：数据传输速率 = 数据的宽度/存取周期
- 重要参数：
  - 存取时间（T<span style="color: DarkRed;">a</span>）
    - 定义：从<span style="color: gray;">启动</span>一次存储器操作 → 完成该操作所经历的t
    - 分类：读出t 和 写入t
  - 存取周期（T<span style="color: LimeGreen;">m</span>）
    - 定义：一次完整的 读/写 操作所需的全部时间
    - 特点：
      - 连续两次 独立访问存储器操作之间 所需的 min时间间隔
  - 主存带宽（<span style="color: LightSkyBlue;">B</span>m）
    Main memory bandwidth
    - 别称：数据传输速率
    - 含义：每秒从主存进出信息的最大数量
    - 单位：字/秒、字节/秒（B/s）或位/秒（b/s)

#### <span style="color: silver;">T<span style="color: DarkRed;">a</span>&T<span style="color: LimeGreen;">m</span>

<ul>

- 基本关系：T<span style="color: LimeGreen;">m</span> > <span style="color: silver;">T<span style="color: DarkRed;">a</span>
- 原因：
  - 读/写操作后需要恢复内部状态
  - 对于破坏性读出的存储器，可达T<span style="color: LimeGreen;">m</span> > = 2 <span style="color: silver;">T<span style="color: DarkRed;">a</span>
- 示意图：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21f64fafd194c1ba1c6165c7728968a6e8ae536402c6539569c4d4e7c1719c0f.jpg)  
图3.1存取时间与存取周期的关系  

</ul>

</ul>

</ul>

## <span style="color: silver;"><span style="color: RoyalBlue;">多</span><span style="color: Gold;">级</span>层次的存储系统  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ecbfb7431920fae95ef8cac047bea026b1dcf473fe23120161d91a5948c10f1a.jpg)  
图3.2多级存储器结构  

### <span style="color: Gold;">特点

<ul>

- 层次结构特征：
  - 由上至下：
    - 位价越来越低
    - 速度越来越慢
    - 容量越来越大
    - CPU访问频度越来越低
- main：
  - Cache-主存层
  - 主存-辅存层

![image](https://bluejedis.github.io/picx-images-hosting/test/image.1hs9v6mslx.webp) 
图3.3三级存储系统的层次结构及其构成  

</ul>

### <span style="color: LimeGreen;">结构

<ul>

- 信息交换方式：
  - <span style="color: SlateBlue;">Cache</span>、 <span style="color: Gold;">主存</span>能与CPU<u>直接</u>交换信息
    - <span style="color: RoyalBlue;">辅</span>存through主存与CPU交换信息
  - 主存与CPU、Cache、辅存都能交换信息

</ul>

### <span style="color: silver;">工作 <span style="color: Gold;">原理

<ul>

- CPU数据存取过程：
  - 先访问Cache
  - 若不在Cache中，则访问主存
  - 若不在主存中，则访问磁盘
  - 数据读取路径：磁盘→主存→Cache

</ul>

### <span style="color: LightSkyBlue;">优势

<ul>

- Cache-主存层：
  - 速度接近Cache
  - 容量和位价接近主存
- 主存-辅存层：
  - 速度接近主存
  - 容量和位价接近辅存

</ul>

### <span style="color: silver;">层次功能

<ul>

- Cache-主存层：
  - 主要功能：解决CPU和主存速度不匹配问题
  - 数据调动：由硬件自动完成
  - 特点：对所有程序员透明
- 主存-辅存层：
  - 主要功能：解决存储系统容量问题
  - 数据调动：由硬件和操作系统共同完成
  - 特点：对应用程序员透明

</ul>

### <span style="color: silver;">趋势

<ul>

- 虚拟存储系统的形成：
  - 特点：程序员编程地址范围与虚拟存储器地址空间对应
  - 优势：可用地址空间远大于主存空间

> attention：  

<span style="font-size: 12px;"> 上一层中的内容都只是下一层中的内容的副本
- Cache一主存层
  - Cache中的内容只是主存中的内容的一部分
- 主存一辅存层
  - 主存..辅存~

</ul>

</ul>

</ul>

# <span style="color: Gold;">主M

<ul>

## <span style="color: silver;"> <span style="color: Gold;">S</span> <span style="color: GreenYellow;">R</span><span style="color: DarkRed;">A</span>M <span style="color: LimeGreen;">D</span> ~
<span style="font-size: 12px;"> Static random access memory;Dynamic random access memory

<ul>

- 半导体存储器
  - 随机存储器（RAM）
    - 静态随机存储器（SRAM）
      - 用于实现靠近处理器的Cache
      - 易失性存储器
    - 动态随机存储器（DRAM）
      - 用于实现主存储器
      - 易失性存储器
  - 只读存储器（ROM）
    - 非易失性存储器

### <span style="color: silver;"> <span style="color: Gold;">S</span>RAM

<ul>

- 基本概念
  - 存储<span style="color: LightSkyBlue;">元</span>：
    - 存放 一个二进制位的物理器件 
    - (M'最基本 构件
  - 存储<span style="color: gray;">单元</span>：地址码相同' 多个存储<span style="color: LightSkyBlue;">元</span>
  - 存储<span style="color: deepskyblue;">体</span>：集合 of 存储<span style="color: gray;">单元</span>s 

- 工作特点
  - use双稳态触发器（六晶体管MOS）记忆信息
  - 静态特性：信息读出后保持原状态，无需再生（<span style="color: gray;">非破坏</span>性读出）
  - 性能特征：
    - 存取速度快
    - 集成度低
    - 功耗较大
    - 价格昂贵
  - 用途：高速缓冲存储器<span style="color: SlateBlue;">cache

</ul>

### <span style="color: silver;"> <span style="color: LimeGreen;">D</span>RAM

<ul>

- 存储原理：
  - 利用存储元电路中栅极电容上的电荷存储信息
- 基本结构：
  - usually only一个  <span style="color: Gold;">晶体</span><span style="color: LightSkyBlue;">管
- 与SRAM对比优势：
  - 密度更高
  - 集成度高
  - 位价低
  - 功耗低
- 缺点：
  - 存取速度较慢
  - 需要定时刷新和读后再生
- 用途：
  - 大容量主存系统

> pro：需要刷新的存储芯片：SDRAM（2015）  

#### <span style="color: Gold;">特点

<ul>

- 电荷维持时间：
  - 持续$1\sim2\mathrm{ms}$
- 读操作特性：
  - 破坏性读出
  - 需要读后再生
- 刷新周期：
  - 定义：相邻两次刷新的时间间隔
  - 典型值：$2\mathrm{ms}$

</ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">刷新</span>方式

<ul>

##### <span style="color: silver;"> <span style="color: LimeGreen;">集中</span>~

<ul>

- 特点：
  - 在固定时间内逐一对所有行再生
  - 刷新期间停止读/写操作（死时间/访存死区）
- 优点：读/写操作不受刷新影响
- 缺点：刷新期间不能访问存储器

</ul>

##### <span style="color: silver;"> <span style="color: Gold;">分散</span>~

<ul>

- 工作方式：后半部分用于刷新
- 影响：增加系统存取周期（如$0.5\mu\mathrm{s}$到$1\mu\mathrm{s}$）
- 优点：没有死区
- 缺点：加长系统存取周期

</ul>

##### <span style="color: SlateBlue;">异</span><span style="color: silver;">步~

<ul>

- 原理：结合集中和分散刷新方法
- 实现方式：
  - 将刷新周期除以行数
  - 按间隔时间产生刷新请求
- 优势：死时间分布更分散，减少CPU等待时间

</ul>

#### <span style="color: silver;">attention

<ul>

- 特性：
  - 对CPU透明，不依赖外部访问
- 执行：
  - 以行为单位进行
  - 由芯片内部自动生成行地址
- 操作：
  - 类似读操作但存在区别
  - 刷新时<span style="color: gray;">无需</span>选片
  - 所有芯片可<u>同时</u>进行刷新

> attention：  

- 刷新&再生'  <span style="color: Gold;">区别</span>：
  - both恢复数据，but过程不完全相同
  - 刷新：
    - 以行为单位进行
    - 需要<u>逐行</u>恢复数据
  - 再生特点：
    - 只针对被读出的单元
    - 仅恢复<u>被读出</u>单元的数据

> pro：DRAM芯片行缓冲器容量的计算（2022）  

</ul>

</ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">S</span><span style="color: LimeGreen;">D</span>RAM

<ul>

- 工作方式：与CPU<span style="color: LightSkyBlue;">同步</span>交换数据
- 与传统DRAM区别：
  - 传统DRAM：
    - 采用<span style="color: purple;">异</span>步方式
    - CPU需 <span style="color: Gold;">等待</span>读/写完成
  - SDRAM：
    - 采用<span style="color: LightSkyBlue;">同步</span>方式
    - 锁存地址和控制信号
    - CPU可<u>同时</u>进行其他操作
- 操作特点：
  - 在系统时钟控制下进行
  - 支持 <span style="color: Gold;">突发</span>传输
    - 首次给出 首地址
    - 整行数据送入行缓冲器
    - 每个时钟连续输出数据
- <span style="color: LimeGreen;">行</span><span style="color: gray;">缓冲器</span>：
  - 功能：
    - 缓存 指定行中<span style="color: gray;">整行</span>数据
  - 大小：
    - 列数×位平面数
  - 实现方式：
    - <span style="color: Gold;">S</span>RAM

</ul>

#### <span style="color: silver;">读/写$T$ <span style="color: GreenYellow;">时序</span>图

<ul>

- 芯片信号时间关系要求：
  - 需符合特定要求以确保正确接收行列地址和读写操作

- 读/写$T$ $t$：
  - 读周期时间($t_{\mathrm{{RC}}}$)：两次连续读操作的必要间隔时间
  - 写周期时间($t_{\mathrm{{wc}}}$)：两次连续写操作的必要间隔时间

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ac49c5139324c976bef95c5760eecc986130d9c6997bdc4b888ceda236371d26.jpg)  
图3.4DRAM芯片读/写周期时序图  
<span style="font-size: 12px;"> “ <span style="color: LimeGreen;">R</span>ow Address Strobe”，  <span style="color: LimeGreen;">行</span> 地址 选通脉冲
“<span style="color: LightSkyBlue;">C</span>olumn Address Strobe”， <span style="color: LightSkyBlue;">列</span> 地址 选通脉冲
“Write  <span style="color: Gold;">E</span>nable”，写 使能 

- <span style="color: Gold;">R</span> $T$：
  - <span style="color: LimeGreen;">行</span>：
    - 在 <span style="color: LimeGreen;">R</span>AS有效前送到芯片地址引脚
  - 时序：
    - <span style="color: LightSkyBlue;">C</span>AS必须滞后RAS一段时间
  - <span style="color: LightSkyBlue;">列</span>：
    - 在CAS有效前送到芯片地址引脚
  - 持续时间要求：
    - RAS至少保持$t_{\mathrm{RAS}}$时间
    - CAS..$t_{\mathrm{CAS}}$..
  - W<span style="color: Gold;">E</span>信号要求：
    - 保持高电平
    - 在CAS有效前建立

- <span style="color: LimeGreen;">W</span> $T$：
  - 行列选通信号的时序关系
    - 与读周期相同
  - $\overline{W\color{gold}E}$
    - 保持低电平
    - 在CAS有效前建立
  - 写数据
    - 必须在CAS有效前在数据总线上保持稳定
    - 目的：确保数据可靠写入

</ul>

</ul>

### <span style="color: silver;">compare

<ul>

- 表3.1详细列出了SRAM和DRAM各自的特点

表3.1SRAM DRAM
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/247e4075afae5a6921141e41eb4721eb9e64db737333bbae6ebd4d1ecd2c7aab.jpg)  

</ul>

### <span style="color: silver;"><span style="color: Gold;">存储</span>器 <span style="color: LimeGreen;">芯</span><span style="color: LightSkyBlue;">片

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2516f94b368ccd12877ec553c7401ec98c5b18224a062f7a42b548d1c7b596b4.jpg)  
图3.5存储器芯片结构图  

#### <span style="color: silver;">存储体（存储<span style="color: LightSkyBlue;">矩阵</span>）

<ul>

- 存储体是存储单元的集合
- 存储单元选择方式：
  - 行选择线（X）选择
  - 列选择线（Y）选择
- 读写特点：
  - <u>相同行列</u>上的多位同时操作
  - <span style="color: gray;">位平面</span>数 决定 同时操作 的<span style="color: gray;">位数</span>
  - 支持的操作：
    - 读出
    - 写入

</ul>

#### <span style="color: silver;">地址<span style="color: gray;">译码</span>器

<ul>

- 地址转换：
  - 地址信号--> 译码输出线上的高电平
- 目的：
  - 驱动相应的读/写电路
- 译码方式：

##### <span style="color: silver;"> <span style="color: LimeGreen;">单</span>译码法（一维译码）

<ul>

- only一个行译码器
  - 特点：
    - 同一行中所有存储单元的<span style="color: gray;">字线</span>连在一起
    - 同一行中的各单元构成一个<span style="color: gray;">字</span>
      - 被同时读出或写入
  - 问题：
    - 地址译码器的输出线数过多

</ul>

##### <span style="color: silver;"><span style="color: SlateBlue;">双</span>译码法（二维译码）

<ul>

- 2 direction：
  - X方向译码器
  - Y方向~
- 存储单元选择：
  - 行列<span style="color: gray;">交叉点</span>定位
  - 精确确定 单个存储单元位置
- 现状：
  - DRAM芯片的<span style="color: gray;">主流</span>译码结构

</ul>

</ul>

#### <span style="color: silver;">I/O <span style="color: Gold;">控制</span>电路

<ul>

- 控制操作：
  - 控制被选中单元的 <span style="color: Gold;">R</span>/ <span style="color: LimeGreen;">W</span>操作
- 信号处理：
  - 具有信号放大功能
  - 增强信息的可靠性

</ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>控制信号

<ul>

- 必要性：
  - <span style="color: LimeGreen;">单个</span>芯片容量限制：
    - 容量太小
    - 无法满足计算机存储需求
  - 存储器扩展需求：
    - 需要<span style="color: SlateBlue;">多个</span>芯片组合
  - 访问控制要求：
    - 必须选中 <span style="color: Gold;">目标</span><span style="color: gray;">字</span>所在芯片
    - 其他芯片保持非选中状态
  - thus：
    - need ~

</ul>

#### <span style="color: silver;"> <span style="color: Gold;">读</span>/ <span style="color: LimeGreen;">写</span>控制信号

<ul>

- 根据CPU给出的读命令或写命令，控制被选中单元进行读或写

</ul>

</ul>

</ul>

## <span style="color: Gold;">R</span><span style="color: silver;">O</span><span style="color: LimeGreen;">M</span>  

<ul>

### <span style="color: Gold;">特点  

<ul>

> pro：RAM和ROM的区别（2010）  

- <span style="font-size: 12px;">both支持随机访问
- <span style="color: GreenYellow;">R</span><span style="color: DarkRed;">A</span>M (SRAM和DRAM)：
  - 属于 <span style="color: GreenYellow;">易失</span>性半导体存储器
- <span style="color: Gold;">R</span><span style="color: silver;">O</span><span style="color: LimeGreen;">M</span> ：
  - 信息一旦写入<span style="color: gray;">不易</span>改变
  - 掉电不会丢失信息
  - 主要优点：
    - 结构简单，位密度高于可读/写存储器
    - 非易失性，可靠性高

</ul>

### <span style="color: LimeGreen;">类型</span>  

<ul>

#### <span style="color: silver;"><span style="color: green;">M</span>ROM

<ul>

- 内容由半导体制造厂写入
  - 按用户提出的要求在芯片生产过程中直接写入
  - 写入后内容<u>无法改变</u>
- 优点：
  - 可靠性高
  - 集成度高
  - 价格便宜
- 缺点：
  - 灵活性差

</ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">P</span>ROM  

<ul>

- 定义：可以实现一次性编程的只读存储器
- 特点：
  - 允许用户利用专门的设备（编程器）写入自己的程序
  - 一旦写入，内容就无法改变

</ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">E</span><span style="color: LightSkyBlue;">P</span>ROM  

<ul>

- EPROM特点：
  - 可由用户利用编程器写入信息
  - 可对内容进行多次改写
- 局限性：
  - 编程次数有限
  - 写入时间过长
  - <u>不能取代</u>RAM

</ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">Flash</span> M 

<ul>

> pro：Flash存储器的特点（2012）  

- 在EPROM基础上发展
- 特点：
  - 兼有ROM和RAM的优点
  - 可在不加电情况下长期保存信息
  - 能在线进行快速擦除与重写
  - 价格便宜
  - 集成度高
  - 擦除重写速度快

</ul>

#### <span style="color: silver;">固态硬盘（Solid State Drive，<span style="color: Goldenrod;">S</span>SD）

<ul>

- 基本组成：
  - 控制单元
  - 存储单元（Flash芯片）
- 特点：
  - 保留Flash存储器优点
  - 读/写速度快
  - 低功耗
- 缺点：
  - 价格较高

</ul>

</ul>

## <span style="color: silver;"> <span style="color: Gold;">主</span><span style="color: LimeGreen;">M</span>的基本组成  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/32d7adac4f2bd43918e63a15cb75067abfdb78b3072fd13466d39b41b1a285a2.jpg)  
图3.6主存储器的基本组成框图  

### <span style="color: silver;">存储<span style="color: LightSkyBlue;">矩阵

<ul>

- 由 存储<span style="color: gray;">元件</span>（ <span style="color: Gold;">记忆</span>单元）构成
  - 具有两种稳态的 能表示二进制0和1的 物理器件
- 编址方式：
  - 可按<span style="color: gray;">字</span>/<span style="color: LightSkyBlue;">字节</span>编址
  - 现代计算机通常采用<span style="color: LightSkyBlue;">字节</span>编址

</ul>

### <span style="color: silver;">存储器 <span style="color: GreenYellow;">访问</span>过程

<ul>

- CPU操作：
  - 将被访问单元地址送到MAR
  - 主存地址-<span style="color: DarkRed;">地址</span> <span style="color: Gold;">线</span>->主存<span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">R</span>
  - 发送 <span style="color: Gold;">R</span>/ <span style="color: LimeGreen;">W</span>信号 to 控制电路
- <span style="color: LimeGreen;">W</span>：
  - CPU将数据送到MDR
  - --数据线-> 选中单元
- <span style="color: Gold;">R</span>：
  - 主存读出选中单元内容
  - --数据线-> MDR

</ul>

### <span style="color: silver;"><span style="color: green;">硬件</span><span style="color: Gold;">特性

<ul>

- M<span style="color: LightSkyBlue;">D</span>R<span style="color: gray;">位数</span>与<span style="color: LightSkyBlue;">数据</span>线~相同
- M<span style="color: DarkRed;">A</span>R..与<span style="color: DarkRed;">地址</span>线位..
- 地址空间范围：0~2^地址线位数-1

> attention：  

<ul>

- <span style="color: LightSkyBlue;">数据</span>线的<span style="color: gray;">位数</span>通常= <span style="color: Gold;">存储</span>字长
  - M<span style="color: LightSkyBlue;">D</span>R的位数通常=存储字长
- 若~的位数 ≠  <span style="color: Gold;">存储</span>字长
  - ~由数据线的<span style="color: gray;">位数</span>决定  

</ul>

</ul>

#### <span style="color: silver;"> <span style="color: LimeGreen;">D</span>RAM芯片特性

<ul>

##### <span style="color: silver;"><span style="color: DarkRed;">地址</span>引脚复用技术

<ul>

- 背景：
  - DRAM芯片容量较大，地址位数较多
- 目的：
  - 减少芯片的地址引脚数
- 实现方式：
  - 行地址和列地址通过相同的引脚分先后两次输入
- 效果：
  - 地址引脚数可减少一半

> pro：DRAM芯片行、列数的优化原则（2018）  

</ul>

##### <span style="color: silver;"><span style="color: LimeGreen;">行</span><span style="color: LightSkyBlue;">列</span>数优化原则

<ul>

- 基本参数：
  - 存储容量：$2^{n}{\times}b$ 位
  - 行数：r
  - 列数：c
  - 关系：$2^{n}=r\times\!c$
- 地址位数：
  - 总地址位数：n
  - 行地址位数：$\log_{2}r$
  - 列地址位数：$\log_{2}c$
  - 关系：$n=\log_{2}r+\log_{2}c$
- 优化要求：
  - 减少地址引脚数：$|r–c|$ 最小
  - 减少刷新开销：$r\leqslant c$

</ul>

</ul>

## <span style="color: silver;"><span style="color: SlateBlue;">多</span>模块M

<ul>

- 定义：一种空间并行技术
- 目的：提高存储器的吞吐率
- 实现方式：利用多个结构完全相同的存储模块并行工作
- 常见类型：
  - 单体多字存储器
  - 多体低位交叉存储器

> attention：  

- CPU的速度比存储器快得多
- 若同时从存储器中取出 $n$ 条指令
  - 就可以充分利用CPU资源，提高运行速度

多体交叉存储器就是基于这种思想提出的。  

### <span style="color: silver;"> <span style="color: LimeGreen;">单体</span><span style="color: SlateBlue;">多</span>字M

<ul>

- 基本特点：
  - 每个存储单元存储m个字
  - 总线宽度为m个字
  - 一次并行读出m个字
- 工作过程：
  - 一个存取周期内从同一地址取出m条指令
  - 将指令逐条送至CPU执行
  - 每隔1/m存取周期，CPU向主存取一条指令
- 缺点：
  - 仅在指令和数据连续存放时有效
  - 遇到转移指令或操作数不连续时效果不明显

</ul>

### <span style="color: silver;"><span style="color: purple;">多</span>体 <span style="color: LimeGreen;">并行</span>M

<ul>

- 基本组成：
  - 由多个相同容量和存取速度的模块组成
  - 每个模块具有独立的：
    - 读/写控制电路
    - 地址寄存器
    - 数据寄存器
  - 可并行工作也可交叉工作

#### <span style="color: silver;"><span style="color: LightSkyBlue;">高位</span>交叉编址~（<span style="color: LightSkyBlue;">顺序</span>方式）

<ul>

- 地址划分：
  - <span style="color: LightSkyBlue;">高</span>位表示模块号（体<span style="color: gray;">号</span>）
  - <span style="color: green;">低</span>位表示模块内地址（体内<span style="color: DarkRed;">地址</span>）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/75d2ac2a627c5bcdace95fe592ef3010583976cec7fbd37807fc2eed52d25b78.jpg)  
图3.7高位交叉编址的多体存储器  

- 工作特点：
  - 低位体内地址送到高位体号确定的模块内译码
  - 连续访问特性：
    - 在一个模块内完成
    - 各模块不能并行访问
  - 性能影响：
    - <span style="color: gray;">不能</span>提高存储器吞吐率

> attention：  

- 模块内特点：
  - 地址是连续的
  - 存取方式是串行的
- 结论：
  - 这种存储器仍是顺序存储器

</ul>

#### <span style="color: silver;"><span style="color: green;">低位</span>交叉编址（ <span style="color: Gold;">交叉</span>方式）

<ul>

> pro：交叉存储器中数据的存放方式（2017）  

- 地址划分：
  - <span style="color: green;">低</span>位为模块号（体<span style="color: gray;">号</span>）
  - 高位为模块内地址（体内<span style="color: DarkRed;">地址</span>）
- 编址规则：
  - 每个模块按"模m"交叉编址
  - 模块号 = 单元地址 % m

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b4f48c1df4011710c3242e64f98016fdf9a431c95108f08cf1745946d0aec796.jpg)  
图3.8低位交叉编址的多体存储器  

- 工作特点：
  - 高位体内地址送到低位体号确定的模块内译码
  - 程序连续存放在相邻模块中

##### <span style="color: silver;">(1) <span style="color: LightSkyBlue;">轮流</span> <span style="color: silver;"><span style="color: LimeGreen;">启动</span> <span style="color: silver;">方式

<ul>

- 条件要求：
  - 每个模块读/写位数等于数据总线位数
  - 模块数m ≥ T/r（T为存取周期，r为总线周期）

> pro：交叉存储器存取时间和带宽的计算（2012、2013）  

- 工作特点：
  - 每隔1/m个存取周期轮流启动各模块
  - 存取速度提高m倍
  - 连续存取m个字时间：t₁ = T + (m-1)r
  - 顺序方式时间：t₂ = mT

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/357a8d6b3c8858f8e0445d4f33ec790e4dc9c97914e01f04c3acc061319ce47a.jpg)  
图3.9低位交叉轮流启动的存取时间示意图  

> pro：交叉存储器中访存冲突的分析（2015）  

- 访存冲突：
  - 发生条件：相邻m次访问的地址在同一模块
  - 处理方法：延迟发生冲突的访问请求

</ul>

##### <span style="color: silver;">(2) <span style="color: Gold;">同时 <span style="color: silver;">~

<ul>

- 条件要求：
  - 所有模块并行读/写的总位数等于数据总线位数
- 工作示例：
  - 每模块读/写16位
  - 模块数m=4
  - 数据总线64位
  - 4个模块同时启动并行读/写

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: Gold;">主M</span>与 <span style="color: LimeGreen;">CPU</span>' <span style="color: GreenYellow;">连接  

<ul>

## <span style="color: Gold;">原理  

<ul>

- 主存储器与CPU的连接方式：
  - 通过三种总线连接：
    - 数据总线
    - 地址总线 
    - 控制总线
  - 总线特点：
    - 数据总线：位数与工作频率的乘积决定数据传输速率
    - 地址总线：位数决定最大可寻址内存空间
    - 控制总线：指示总线周期类型和I/O操作完成时刻

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1e1d92cf5473f7cdbefec0c268399f79d298a75bd67083e238876b319130a603.jpg)  
图3.10主存储器与CPU的连接  

- 存储器扩展需求：
  - 单个芯片容量有限
  - 通过扩展技术集成多个芯片
  - 多个内存条和ROM芯片组成主存空间
  - 通过总线与CPU相连

</ul>

## <span style="color: silver;">主M <span style="color: LimeGreen;">容量</span>的 <span style="color: GreenYellow;">扩展  

<ul>

- 扩展需求：
  - 存储芯片容量限制：
    - 单个芯片容量有限
  - 扩展方向：
    - <span style="color: gray;">字</span>的扩充
    - <span style="color: LightSkyBlue;">位</span>~
  - 扩展目标：
    - 满足实际存储容量需求

### <span style="color: silver;"><span style="color: LightSkyBlue;">位</span>扩展法  

<ul>

- 概念：对字长进行扩展
- 应用场景：
  - CPU<span style="color: LightSkyBlue;">数据</span> <span style="color: Gold;">线</span>数 > 存储芯片~<span style="color: gray;">位</span>数
- 连接方式：
  - 各芯片的连接：
    - <span style="color: DarkRed;">地址</span>线 与系统总线并联
    - <span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>线..
    - <span style="color: Gold;">R</span>/ <span style="color: LimeGreen;">W</span>控制线..
  - <span style="color: LightSkyBlue;">数据</span><span style="color: Gold;">线</span>连接：
    - 各芯片数据线 <span style="color: LimeGreen;">单独</span>引出
    - 连接到系统数据线
  - 工作方式：
    - 各芯片<u>同</u>时工作
- 实例：
  - 目标：组成8K×8位存储器
  - 使用：8片8K×1位RAM

![image](https://bluejedis.github.io/picx-images-hosting/test/image.eskko8o6z.webp) 
图3.11位扩展连接示意图  

</ul>

### <span style="color: silver;"><span style="color: gray;">字</span>~

<ul>

- 概念：对存储<span style="color: gray;">字</span>数量进行扩展
- 特点：
  - 存储字位数满足系统要求
- 连接方式：
  - 芯片地址线：
    - 与系统地址<span style="color: green;">低</span>位相连
  - 数据线和读/写控制线：
    - 与系统总线并联
  - 片选信号：
    - 由系统地址高位译码得到
  - 工作方式：
    - 各芯片分时工作

> pro：字扩展（或字位扩展）后存储芯片的地址范围（2010、2016）  

- 实例：用4片16K×8位RAM组成64K×8位存储器
- 地址分配：
  - 第一片：0000000000000000-0011111111111111
  - 第二片：0100000000000000-0111111111111111
  - 第三片：1000000000000000-1011111111111111
  - 第四片：1100000000000000-1111111111111111

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/44f1fe99a9391d96d9aeb0fb8712474bf298dbedaaa36321308e7bb49a6874d2.jpg)  
图3.12字扩展连接示意图  

</ul>

### <span style="color: silver;"><span style="color: gray;">字</span><span style="color: LightSkyBlue;">位</span>同时~

<ul>

- 概念：位扩展和字扩展的组合
- 功能：
  - add 存储<span style="color: gray;">字</span>数量、存储<span style="color: LightSkyBlue;">字长</span>
- 连接方式：
  - 位扩展芯片作为一组
  - 各组连接方式同位扩展
  - 系统地址高位译码产生片选信号
- 实例：用8片16K×4位RAM组成64K×8位存储器
  - 组织方式：
    - 每两片构成16K×8位存储器（位扩展）
    - 4组构成64K×8位存储器（字扩展）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1bd0ffee871eff245d8c4e998e914cbf1ee53c30a0465b58592027c9ed8d0501.jpg)  
图3.13字位同时扩展及CPU的连接图  

</ul>

</ul>

## <span style="color: silver;">0 存储芯片的<span style="color: DarkRed;">地址</span> <span style="color: Gold;">分配</span>和<span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>  

<ul>

### <span style="color: silver;">concept

<ul>

- CPU访问存储单元需要两个步骤：

#### <span style="color: silver;"><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>：

<ul>

- <span style="color: Gold;">存储</span><span style="color: LimeGreen;">芯<span style="color: LightSkyBlue;">片
- ~ <span style="color: Gold;">信号</span>产生方法：
  - 线选法
  - 译码片选法

</ul>

#### <span style="color: silver;"><span style="color: gray;">字</span>选：

<ul>

- 在选定芯片中选择具体 <span style="color: Gold;">存储</span> <span style="color: LimeGreen;">单元
- process：
  - 由CPU送出N条低位地址线完成
  - N由片内存储容量2^N决定

</ul>

</ul>

### <span style="color: Gold;">线</span><span style="color: LimeGreen;">选</span><span style="color: silver;">法  

<ul>

- <span style="color: LightSkyBlue;">高</span>位地址线直接连接至存储芯片<span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>端
  - 地址线为"<span style="color: gray;">0</span>"时选中对应存储芯片
- 每次only有一位有效

#### <span style="color: silver;">eg

<ul>

- 4片2K×8位存储芯片构成8K×8位存储器
- 低位地址线A10~A0作为字选线
- 片选信号分配如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d3e8ef9e2d826e33c5a04dddaf3613401040af874224f56e1f181b5f42aec2d2.jpg)  

- 优点：
  - <span style="color: gray;">不需要</span>地址<span style="color: gray;">译码</span>器
  - 线路简单
- 缺点：
  - <span style="color: DarkRed;">地址</span><span style="color: gray;">空间</span>不连续
  - 选片地址线必须<span style="color: gray;">分时</span>为<span style="color: green;">低</span>电平
  - 存储器空间 <span style="color: LimeGreen;">利用</span><span style="color: RoyalBlue;">率</span>低

</ul>

</ul>

### <span style="color: gray;">译码</span><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span> <span style="color: silver;">法  

<ul>

- 高位地址线通过地址译码器产生片选信号

#### <span style="color: silver;">eg

<ul>

- 8片8K×8位存储芯片组成64K×8位存储器
  - 地址线16位，数据线8位
  - 需要8个片选信号
  - 使用74LS138作为地址译码器
  - 高3位用于片选：
    - A15A14A13=000选中第一片
    - A15A14A13=001选中第二片
    - 以此类推

</ul>

</ul>

## <span style="color: silver;">1 <span style="color: Gold;">存储器</span>与 <span style="color: LimeGreen;">CPU</span>的连接  

<ul>

### <span style="color: silver;">合理选择存储 <span style="color: LimeGreen;">芯</span><span style="color: LightSkyBlue;">片</span>  

<ul>

> pro：根据要求合理选择存储芯片（2009、2021）  

- 存储芯片 <span style="color: LimeGreen;">类型</span>选择：
  - ROM：存放系统程序、标准子程序和常数
  - RAM：用于用户编程
- 芯片<span style="color: gray;">数量</span>考虑：
  - 追求连线<span style="color: gray;">简单
  - 方便实用

</ul>

### <span style="color: silver;"><span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>的连接  

<ul>

> pro：地址范围与存储容量的对应关系（2016、2023）  

#### <span style="color: silver;">principle

<ul>

- CPU地址线数usually > 存储芯片
- 连接方式：
  - <span style="color: green;">低</span>位：CPU<span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>与存储芯片<span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>相连
    - <span style="color: gray;">字</span><span style="color: LimeGreen;">选</span>
    - 由片<span style="color: gray;">内</span><span style="color: Gold;">逻辑</span> 完成译码
  - <span style="color: LightSkyBlue;">高</span>位：用于 <span style="color: LimeGreen;">扩充</span>存储芯片
    - <span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>
    - 由 <span style="color: GreenYellow;">外接</span><span style="color: gray;">译码器</span>完成译码

</ul>

#### <span style="color: silver;">eg

<ul>

- CPU：16位地址线(A15~A0)
- 存储芯片：1K×4位，10根地址线
- 连接方式：CPU的A9~ A0与存储芯片的A9~ A0相连

</ul>

</ul>

### <span style="color: silver;"><span style="color: deepskyblue;">数据</span><span style="color: Gold;">线</span>的连接  

<ul>

- CPU与存储芯片 <span style="color: deepskyblue;">数据</span><span style="color: Gold;">线</span>数相等：
  - 直接相连
- ..不等：
  - 对存储芯片 <span style="color: black;">扩位
  - 使数据位数 与CPU数据线数相等

</ul>

### <span style="color: silver;"><span style="color: Gold;">读</span>/ <span style="color: LimeGreen;">写</span><span style="color: LightSkyBlue;"> 命令</span>线的连接  

<ul>

- <span style="color: GreenYellow;">单</span>一 ~：
  - <span style="color: black;">直接</span>与存储芯片控制端相连
  - <span style="color: LightSkyBlue;">高</span>电平为 <span style="color: Gold;">读</span>， <span style="color: LimeGreen;">低</span>电平为<span style="color: LimeGreen;">写</span>
- <span style="color: Gold;">分开</span>'~：
  - 读命令线( <span style="color: Gold;">RD</span>)连接芯片 <span style="color: Gold;">读</span>控制端
  - 写命令线( <span style="color: LimeGreen;">WE</span>)连接芯片 <span style="color: LimeGreen;">写</span>控制端
  - 均为<span style="color: green;">低</span>电平<u>有效</u>

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>线的连接  

<ul>

- <span style="color: gray;">决定</span>存储芯片whether被选中
- 取决于片选 <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">端</span>CS接收到的信号

#### <span style="color: LimeGreen;">M</span><span style="color: Gold;">REQ</span>

<ul>

- CPU要求 <span style="color: LimeGreen;">访</span><span style="color: Gold;">存</span>： <span style="color: LimeGreen;">M</span><span style="color: Gold;">REQ</span>为<span style="color: green;">低</span>电平
- CPU访问<span style="color: LightSkyBlue;">I</span>/ <span style="color: LimeGreen;">O</span>：~<span style="color: LightSkyBlue;">高</span>电平， <span style="color: Gold;">M</span>不工作

</ul>

</ul>

</ul>

</ul>

</ul>

</span>

---

以上内容严格按照您的要求进行了处理：
1. 在标题段落间增加了 `<ul></ul>` 标签，并确保上下有空行。
2. 保留了所有原始 Markdown 格式的图片链接，未作任何更改。
3. 按照层级结构正确嵌套 `<ul></ul>`，确保缩进效果符合预期示例格式。

