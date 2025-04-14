# above  

<ul>

## 【考纲内容】  

<ul>

（一）____的分类  

（二）____的基本结构  

（三）半导体____存储器（RAM）____、____、Flash存储器  

（四）主存储器____芯片和内存条、____存储器、主存储器和CPU之间的连接  

（五）外部存储器____存储器、____硬盘（SSD）  

（六）____缓冲存储器（Cache）Cache的基本原理：Cache和主存之间的____方式Cache中主存块的____算法：Cache____策略  

（七）____存储器  

<ul>

虚拟存储器的基本概念____虚拟存储器：基本原理、____、地址转换、____（快表）____虚拟存储器的基本原理：____虚拟存储器的基本原理  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>存储器</li>
    <li>层次化存储器</li>
    <li>随机</li>
    <li>SRAM</li>
    <li>DRAM</li>
    <li>DRAM</li>
    <li>多模块</li>
    <li>磁盘</li>
    <li>固态</li>
    <li>高速</li>
    <li>映射</li>
    <li>替换</li>
    <li>写</li>
    <li>虚拟</li>
    <li>页式</li>
    <li>页表</li>
    <li>TLB</li>
    <li>段式</li>
    <li>段页式</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 【复习提示】  

<ul>

- 本章命题重点：
  - 特别关注____和____存储器相关内容，这些考点容易出综合题。
  - 存储器的特点、扩展（芯片选择、连接方式、地址范围等）、____存储器也常考。
  - Cache的相关____与____算法是重要考点。
  - 虚拟存储器与____（Translation Lookaside Buffer）也是考试重点。

- 地址翻译与Cache映射问题：
  - 掌握存在____和____的计算机中的地址翻译机制。
  - 理解Cache____问题。

- 学习建议：
  - 掌握基本原理，并多结合____进行反复训练。
  - 深化理解并巩固知识。

<details>
<summary>学习本章时的思考问题：</summary>

<ul>

1. 存储器系统分层次的原因：
   - 为什么存储器系统需要____？
   - 计算机如何管理这些____？

2. 影响Cache性能的因素：
   - 有哪些因素会影响Cache的____？

3. 虚拟存储系统页面大小的选择：
   - 虚拟存储系统的页面是设置得____一些好还是____一些好？

</ul>

</details>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Cache</li>
    <li>虚拟</li>
    <li>交叉</li>
    <li>计算</li>
    <li>替换</li>
    <li>TLB</li>
    <li>Cache</li>
    <li>TLB</li>
    <li>映射</li>
    <li>习题</li>
    <li>分层次</li>
    <li>层次</li>
    <li>性能</li>
    <li>大</li>
    <li>小</li>
  </ul>
</details>
</div>

</ul>

</ul>

# concept 

<ul>

## M分类  

<ul>

存储器种类繁多，可从不同角度对存储器进行____。  

### 按在计算机中的____（层次）

<ul>

- 主存储器
  - 简称____，也称____存储器（内存）
  - 用途：存放计算机运行期间所需的____和____
  - 特点：
    - CPU可以直接____访问
    - 可与____及____存储器交换数据
    - 容量较____
    - 存取速度较____
    - 每位价格较____

- 辅助存储器
  - 简称____，也称____存储器或外存
  - 用途：存放当前暂时不用的程序和数据，以及需要____性保存的信息
  - 特点：
    - 需要调入____后才能被CPU访问
    - 容量____
    - 存取速度较____
    - 单位成本____

- 高速缓冲存储器
  - 简称____
  - 位置：位于____和____之间
  - 用途：存放当前CPU经常使用的____和____
  - 特点：
    - 存取速度可与____速度匹配
    - 存储容量____
    - 价格____
    - 现代计算机通常将其制作在____中

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分类</li>
    <li>作用</li>
    <li>主存</li>
    <li>内</li>
    <li>程序</li>
    <li>数据</li>
    <li>随机</li>
    <li>Cache</li>
    <li>辅助</li>
    <li>小</li>
    <li>快</li>
    <li>高</li>
    <li>辅存</li>
    <li>外</li>
    <li>永久</li>
    <li>主存</li>
    <li>大</li>
    <li>慢</li>
    <li>低</li>
    <li>Cache</li>
    <li>主存</li>
    <li>CPU</li>
    <li>指令</li>
    <li>数据</li>
    <li>CPU</li>
    <li>小</li>
    <li>高</li>
    <li>CPU</li>
  </ul>
</details>
</div>

</ul>

### 按存储____ 

<ul>

- ____表面存储器
  - 磁盘
  - 磁带
- ____芯存储器
- 半导体存储器
  - ____型存储器
  - 双极型存储器
- ____存储器
  - 光盘

<div>
<details>
  <summary> </summary>
  <ul>
    <li>介质</li>
    <li>磁</li>
    <li>磁</li>
    <li>MOS</li>
    <li>光</li>
  </ul>
</details>
</div>

</ul>

### 按____方式分类  

<ul>

> pro：采用随机存取的存储器（2011）  

- 随机存储器（RAM)
  - 特点：
    - 任何存储单元都可以____存取
    - 存取时间与存储单元____位置无关
  - 优点：____方便、使用灵活
  - 用途：主要用作____或____缓冲存储器
  - 分类：
    - ____RAM
    - ____RAM

- 只读存储器（ROM）
  - 特点：
    - 内容只能____读出不能写入
    - ____内容不会丢失
    - 写入速度比读取速度____得多
  - 用途：存放固定不变的____、____和汉字字库等
  - 功能：可与____存储器共同作为主存的一部分

- ____行访问存储器
  - 特点：需按____位置先后顺序寻址
  - 类型：
    - ____存取存储器（如磁带）
      - 特点：存取速度____，按顺序存取
    - ____存取存储器（如磁盘、光盘）
      - 特点：介于RAM和顺序存取之间
      - 存取方式：先寻找小区域，再在区域内____查找

<div>
<details>
  <summary> </summary>
  <ul>
    <li>存取</li>
    <li>随机</li>
    <li>物理</li>
    <li>读/写</li>
    <li>主存</li>
    <li>高速</li>
    <li>静态</li>
    <li>动态</li>
    <li>随机</li>
    <li>断电</li>
    <li>慢</li>
    <li>程序</li>
    <li>常数</li>
    <li>随机</li>
    <li>串</li>
    <li>物理</li>
    <li>顺序</li>
    <li>慢</li>
    <li>直接</li>
    <li>顺序</li>
  </ul>
</details>
</div>

</ul>

### 按信息的____性分类  

<ul>

- ____性存储器
  - 特点：____后信息消失
  - 示例：RAM

- ____~
  - 特点：~ ____
  - 类型：
    - ROM
    - 磁表面存储器
    - 光存储器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可保存</li>
    <li>易失</li>
    <li>断电</li>
    <li>非</li>
    <li>保持</li>
  </ul>
</details>
</div>

</ul>

#### 按____方式

<ul>

- ____性读出
  - 特点：读出时____存储信息被破坏
  - 要求：每次读出后需要进行 ____操作

- ____~
  - 特点：读出时原存储信息不被破坏

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Read</li>
    <li>破坏</li>
    <li>原</li>
    <li>再生</li>
    <li>非</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ____指标  

<ul>

### ____容量

<ul>

- formula：
  - = ____ × ____（如1M×8位）
- 单位换算：1B（Byte，字节）= ____ (bit，位)
- 说明：
  - 存储字数表示存储器的____大小
  - 字长表示一次存取操作的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>性能</li>
    <li>存储</li>
    <li>存储字数</li>
    <li>字长</li>
    <li>8b</li>
    <li>地址空间</li>
    <li>数据量</li>
  </ul>
</details>
</div>

</ul>

### 单位____ 

<ul>

- 计算公式：每位价格 = ____/____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>成本</li>
    <li>总成本</li>
    <li>总容量</li>
  </ul>
</details>
</div>

</ul>

### ____速度

<ul>

- 计算公式：数据传输速率 = ____/____
- 重要参数：
  - 存取时间（____）
    - 定义：从____一次存储器操作 → 完成该操作所经历的t
    - 分类：____t 和 ____t
  - 存取周期（____）
    - 定义：一次完整的 ____ 操作所需的全部时间
    - 特点：
      - 连续两次 ____访问存储器操作之间 所需的 min时间间隔
  - 主存带宽（____）
    Main memory bandwidth
    - 别称：____
    - 含义：每秒从主存进出信息的____数量
    - 单位：____、____（B/s）或____（b/s）

#### T____&T____

<ul>

- 基本关系：____ > ____
- 原因：
  - ____操作后需要恢复内部状态
  - 对于____性读出的存储器，可达____ > = 2 ____
- 示意图：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/21f64fafd194c1ba1c6165c7728968a6e8ae536402c6539569c4d4e7c1719c0f.jpg)  
图3.1存取时间与存取周期的关系  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>存储</li>
    <li>数据的宽度</li>
    <li>存取周期</li>
    <li>Ta</li>
    <li>启动</li>
    <li>读出</li>
    <li>写入</li>
    <li>Tm</li>
    <li>读/写</li>
    <li>独立</li>
    <li>Bm</li>
    <li>数据传输速率</li>
    <li>最大</li>
    <li>字/秒</li>
    <li>字节/秒</li>
    <li>位/秒</li>
    <li>Ta</li>
    <li>Tm</li>
    <li>Tm</li>
    <li>Ta</li>
    <li>读/写</li>
    <li>破坏</li>
    <li>Tm</li>
    <li>Ta</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## ____层次的存储系统  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ecbfb7431920fae95ef8cac047bea026b1dcf473fe23120161d91a5948c10f1a.jpg)  
图3.2多级存储器结构  

### ____

<ul>

- 层次结构特征：
  - 由上至下：
    - 位价越来越____
    - 速度越来越____
    - 容量越来越____
    - CPU访问频度越来越____
- main：
  - ____-主存层
  - ____-辅存层

![image](https://bluejedis.github.io/picx-images-hosting/test/image.1hs9v6mslx.webp) 
图3.3三级存储系统的层次结构及其构成  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多级</li>
    <li>特点</li>
    <li>低</li>
    <li>慢</li>
    <li>大</li>
    <li>低</li>
    <li>Cache</li>
    <li>主存</li>
  </ul>
</details>
</div>

</ul>

### ____

<ul>

- 信息交换方式：
  - ____、____能与CPU____交换信息
    - ____存through主存与CPU交换信息
  - 主存与CPU、____、____都能交换信息

<div>
<details>
  <summary> </summary>
  <ul>
    <li>结构</li>
    <li>Cache</li>
    <li>主存</li>
    <li>直接</li>
    <li>辅</li>
    <li>Cache</li>
    <li>辅存</li>
  </ul>
</details>
</div>

</ul>

### 工作____

<ul>

- CPU数据存取过程：
  - 先访问____
  - 若不在____中，则访问____
  - 若不在____中，则访问____
  - 数据读取路径：____→____→____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原理</li>
    <li>Cache</li>
    <li>Cache</li>
    <li>主存</li>
    <li>主存</li>
    <li>磁盘</li>
    <li>磁盘</li>
    <li>主存</li>
    <li>Cache</li>
  </ul>
</details>
</div>

</ul>

### ____

<ul>

- Cache-主存层：
  - 速度接近____
  - 容量和位价接近____
- 主存-辅存层：
  - 速度接近____
  - 容量和位价接近____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优势</li>
    <li>Cache</li>
    <li>主存</li>
    <li>主存</li>
    <li>辅存</li>
  </ul>
</details>
</div>

</ul>

### 层次____

<ul>

- Cache-主存层：
  - 主要功能：解决CPU和主存____不匹配问题
  - 数据调动：由____自动完成
  - 特点：对所有____透明
- 主存-辅存层：
  - 主要功能：解决存储系统____问题
  - 数据调动：由____和____共同完成
  - 特点：对____透明

<div>
<details>
  <summary> </summary>
  <ul>
    <li>功能</li>
    <li>速度</li>
    <li>硬件</li>
    <li>程序员</li>
    <li>容量</li>
    <li>硬件</li>
    <li>操作系统</li>
    <li>应用程序员</li>
  </ul>
</details>
</div>

</ul>

### ____

<ul>

- 虚拟存储系统的形成：
  - 特点：程序员编程地址范围与____地址空间对应
  - 优势：可用地址空间远大于____空间

> attention：  

<span style="font-size: 12px;"> 上一层中的内容都只是下一层中的内容的副本
- Cache一主存层
  - Cache中的内容只是____中的内容的一部分
- 主存一辅存层
  - 主存..____~

<div>
<details>
  <summary> </summary>
  <ul>
    <li>趋势</li>
    <li>虚拟存储器</li>
    <li>主存</li>
    <li>主存</li>
    <li>辅存</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# 主M

<ul>

## ____RAM ____ ~
<span style="font-size: 12px;"> Static random access memory;Dynamic random access memory

<ul>

- 半导体存储器
  - 随机存储器（RAM）
    - 静态随机存储器（____）
      - 用于实现靠近处理器的____
      - ____性存储器
    - 动态随机存储器（____）
      - 用于实现____存储器
      - ____性存储器
  - 只读存储器（____）
    - ____易失性存储器

### ____RAM

<ul>

- 基本概念
  - 存储____：
    - 存放 一个____位的物理器件 
    - (M'最基本 ____
  - 存储____：地址码相同' 多个存储____
  - 存储____：集合 of 存储____s 

- 工作特点
  - use____触发器（六晶体管MOS）记忆信息
  - 静态特性：信息读出后保持原状态，无需____（____性读出）
  - 性能特征：
    - 存取速度____
    - 集成度____
    - 功耗较____
    - 价格____
  - 用途：____缓冲存储器____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>S</li>
    <li>D</li>
    <li>SRAM</li>
    <li>Cache</li>
    <li>易失</li>
    <li>DRAM</li>
    <li>主</li>
    <li>易失</li>
    <li>ROM</li>
    <li>非</li>
    <li>S</li>
    <li>元</li>
    <li>二进制</li>
    <li>构件</li>
    <li>单元</li>
    <li>元</li>
    <li>体</li>
    <li>单元</li>
    <li>双稳态</li>
    <li>再生</li>
    <li>非破坏</li>
    <li>快</li>
    <li>低</li>
    <li>大</li>
    <li>昂贵</li>
    <li>高速</li>
    <li>cache</li>
  </ul>
</details>
</div>

</ul>

### ____RAM

<ul>

- 存储原理：
  - 利用存储元电路中____上的电荷存储信息
- 基本结构：
  - usually only一个 ____管
- 与SRAM对比优势：
  - 密度更____
  - 集成度____
  - 位价____
  - 功耗____
- 缺点：
  - 存取速度较____
  - 需要定时____和读后____
- 用途：
  - 大容量____系统

> pro：需要刷新的存储芯片：SDRAM（2015）  

#### ____

<ul>

- 电荷维持时间：
  - 持续____
- 读操作特性：
  - ____性读出
  - 需要读后____
- 刷新周期：
  - 定义：相邻两次____的时间间隔
  - 典型值：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>D</li>
    <li>栅极电容</li>
    <li>晶体</li>
    <li>高</li>
    <li>高</li>
    <li>低</li>
    <li>低</li>
    <li>慢</li>
    <li>刷新</li>
    <li>再生</li>
    <li>主存</li>
    <li>特点</li>
    <li>$1\sim2\mathrm{ms}$</li>
    <li>破坏</li>
    <li>再生</li>
    <li>刷新</li>
    <li>$2\mathrm{ms}$</li>
  </ul>
</details>
</div>

</ul>

#### ____方式

<ul>

##### ____~

<ul>

- 特点：
  - 在固定时间内逐一对所有行____
  - 刷新期间停止____操作（死时间/访存死区）
- 优点：____操作不受刷新影响
- 缺点：刷新期间不能____存储器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>刷新</li>
    <li>集中</li>
    <li>再生</li>
    <li>读/写</li>
    <li>读/写</li>
    <li>访问</li>
  </ul>
</details>
</div>

</ul>

##### ____~

<ul>

- 工作方式：后半部分用于____
- 影响：增加系统____周期（如$0.5\mu\mathrm{s}$到$1\mu\mathrm{s}$）
- 优点：没有____
- 缺点：加长系统____周期

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分散</li>
    <li>刷新</li>
    <li>存取</li>
    <li>死区</li>
    <li>存取</li>
  </ul>
</details>
</div>

</ul>

##### ____步~

<ul>

- 原理：结合____和____刷新方法
- 实现方式：
  - 将刷新周期除以____
  - 按间隔时间产生____请求
- 优势：死时间分布更分散，减少CPU____时间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>异</li>
    <li>集中</li>
    <li>分散</li>
    <li>行数</li>
    <li>刷新</li>
    <li>等待</li>
  </ul>
</details>
</div>

</ul>

#### attention

<ul>

- 特性：
  - 对CPU____，不依赖外部访问
- 执行：
  - 以____为单位进行
  - 由芯片内部自动生成____地址
- 操作：
  - 类似____操作但存在区别
  - 刷新时____选片
  - 所有芯片可____进行刷新

> attention：  

- 刷新&再生' ____：
  - both恢复数据，but过程不完全相同
  - 刷新：
    - 以____为单位进行
    - 需要____恢复数据
  - 再生特点：
    - 只针对被____的单元
    - 仅恢复____单元的数据

> pro：DRAM芯片行缓冲器容量的计算（2022）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>透明</li>
    <li>行</li>
    <li>行</li>
    <li>读</li>
    <li>无需</li>
    <li>同时</li>
    <li>区别</li>
    <li>行</li>
    <li>逐行</li>
    <li>读出</li>
    <li>被读出</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### ____RAM

<ul>

- 工作方式：与CPU____交换数据
- 与传统DRAM区别：
  - 传统DRAM：
    - 采用____步方式
    - CPU需 ____读/写完成
  - SDRAM：
    - 采用____方式
    - 锁存地址和____信号
    - CPU可____进行其他操作
- 操作特点：
  - 在系统____控制下进行
  - 支持 ____传输
    - 首次给出 ____
    - 整行数据送入____缓冲器
    - 每个时钟连续输出数据
- ____缓冲器：
  - 功能：
    - 缓存 指定行中____数据
  - 大小：
    - ____×位平面数
  - 实现方式：
    - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>S</li>
    <li>D</li>
    <li>同步</li>
    <li>异</li>
    <li>等待</li>
    <li>同步</li>
    <li>控制</li>
    <li>同时</li>
    <li>时钟</li>
    <li>突发</li>
    <li>首地址</li>
    <li>行</li>
    <li>行</li>
    <li>整行</li>
    <li>列数</li>
    <li>S</li>
  </ul>
</details>
</div>

</ul>

#### 读/写$T$ ____图

<ul>

- 芯片信号时间关系要求：
  - 需符合特定要求以确保正确接收____地址和____操作

- 读/写$T$ $t$：
  - 读周期时间(____)：两次连续____操作的必要间隔时间
  - 写周期时间(____)：两次连续____操作的必要间隔时间

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ac49c5139324c976bef95c5760eecc986130d9c6997bdc4b888ceda236371d26.jpg)  
图3.4DRAM芯片读/写周期时序图  
<span style="font-size: 12px;"> “ ____ Address Strobe”，  ____ 地址 选通脉冲
“____ Address Strobe”， ____ 地址 选通脉冲
“Write ____”，写 使能 

- ____ $T$：
  - ____：
    - 在 ____有效前送到芯片地址引脚
  - 时序：
    - ____必须滞后RAS一段时间
  - ____：
    - 在CAS有效前送到芯片地址引脚
  - 持续时间要求：
    - RAS至少保持____时间
    - CAS..____..
  - ____信号要求：
    - 保持____电平
    - 在CAS有效前建立

- ____ $T$：
  - 行列选通信号的时序关系
    - 与____周期相同
  - ____
    - 保持____电平
    - 在CAS有效前建立
  - 写数据
    - 必须在CAS有效前在____上保持稳定
    - 目的：确保数据可靠____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时序</li>
    <li>行列</li>
    <li>读写</li>
    <li>$t_{\mathrm{{RC}}}$</li>
    <li>读</li>
    <li>$t_{\mathrm{{wc}}}$</li>
    <li>写</li>
    <li>R</li>
    <li>ow</li>
    <li>行</li>
    <li>C</li>
    <li>olumn</li>
    <li>列</li>
    <li>E</li>
    <li>nable</li>
    <li>R</li>
    <li>行</li>
    <li>R</li>
    <li>AS</li>
    <li>C</li>
    <li>AS</li>
    <li>列</li>
    <li>$t_{\mathrm{RAS}}$</li>
    <li>$t_{\mathrm{CAS}}$</li>
    <li>W</li>
    <li>E</li>
    <li>高</li>
    <li>W</li>
    <li>读</li>
    <li>$\overline{W\color{gold}E}$</li>
    <li>低</li>
    <li>数据总线</li>
    <li>写入</li>
  </ul>
</details>
</div>

</ul>

</ul>

### compare

<ul>

- 表3.1详细列出了SRAM和DRAM各自的____

表3.1SRAM DRAM
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/247e4075afae5a6921141e41eb4721eb9e64db737333bbae6ebd4d1ecd2c7aab.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>特点</li>
  </ul>
</details>
</div>

</ul>

### ____器芯片

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2516f94b368ccd12877ec553c7401ec98c5b18224a062f7a42b548d1c7b596b4.jpg)  
图3.5存储器芯片结构图  

#### 存储体（存储____）

<ul>

- 存储体是存储单元的____
- 存储单元选择方式：
  - ____选择线（X）选择
  - ____选择线（Y）选择
- 读写特点：
  - ____上的多位同时操作
  - ____数 决定 同时操作 的____
  - 支持的操作：
    - ____
    - ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>存储</li>
    <li>矩阵</li>
    <li>集合</li>
    <li>行</li>
    <li>列</li>
    <li>相同行列</li>
    <li>位平面</li>
    <li>位数</li>
    <li>读出</li>
    <li>写入</li>
  </ul>
</details>
</div>

</ul>

#### 地址____器

<ul>

- 地址转换：
  - 地址信号--> 译码输出线上的____
- 目的：
  - 驱动相应的____电路
- 译码方式：

##### ____译码法（一维译码）

<ul>

- only一个____译码器
  - 特点：
    - 同一行中所有存储单元的____连在一起
    - 同一行中的各单元构成一个____
      - 被同时____或____
  - 问题：
    - 地址译码器的____数过多

<div>
<details>
  <summary> </summary>
  <ul>
    <li>译码</li>
    <li>高电平</li>
    <li>读/写</li>
    <li>单</li>
    <li>行</li>
    <li>字线</li>
    <li>字</li>
    <li>读出</li>
    <li>写入</li>
    <li>输出线</li>
  </ul>
</details>
</div>

</ul>

##### ____译码法（二维译码）

<ul>

- 2 direction：
  - ____方向译码器
  - ____方向~
- 存储单元选择：
  - 行列____定位
  - 精确确定 单个存储单元____
- 现状：
  - DRAM芯片的____译码结构

<div>
<details>
  <summary> </summary>
  <ul>
    <li>双</li>
    <li>X</li>
    <li>Y</li>
    <li>交叉点</li>
    <li>位置</li>
    <li>主流</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### I/O ____电路

<ul>

- 控制操作：
  - 控制被选中单元的 ____操作
- 信号处理：
  - 具有信号____功能
  - 增强信息的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>控制</li>
    <li>R/W</li>
    <li>放大</li>
    <li>可靠性</li>
  </ul>
</details>
</div>

</ul>

#### ____控制信号

<ul>

- 必要性：
  - ____芯片容量限制：
    - 容量太____
    - 无法满足计算机____需求
  - 存储器____需求：
    - 需要____芯片组合
  - 访问控制要求：
    - 必须选中 ____所在芯片
    - 其他芯片保持____状态
  - thus：
    - need ~

<div>
<details>
  <summary> </summary>
  <ul>
    <li>片选</li>
    <li>单个</li>
    <li>小</li>
    <li>存储</li>
    <li>扩展</li>
    <li>多个</li>
    <li>目标字</li>
    <li>非选中</li>
  </ul>
</details>
</div>

</ul>

#### ____控制信号

<ul>

- 根据CPU给出的____命令或____命令，控制被选中单元进行____或____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>读/写</li>
    <li>读</li>
    <li>写</li>
    <li>读</li>
    <li>写</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## ____  

<ul>

### ____  

<ul>

> pro：RAM和ROM的区别（2010）  

- <span style="font-size: 12px;">both支持随机访问
- ____ (SRAM和DRAM)：
  - 属于 ____性半导体存储器
- ____ ：
  - 信息一旦写入____改变
  - 掉电不会____信息
  - 主要优点：
    - 结构____，位密度高于可读/写存储器
    - ____性，可靠性高

<div>
<details>
  <summary> </summary>
  <ul>
    <li>R</li>
    <li>O</li>
    <li>M</li>
    <li>特点</li>
    <li>R</li>
    <li>A</li>
    <li>M</li>
    <li>易失</li>
    <li>R</li>
    <li>O</li>
    <li>M</li>
    <li>不易</li>
    <li>丢失</li>
    <li>简单</li>
    <li>非易失</li>
  </ul>
</details>
</div>

</ul>

### ____  

<ul>

#### ____ROM

<ul>

- 内容由半导体制造厂写入
  - 按用户提出的要求在芯片生产过程中直接____
  - 写入后内容____
- 优点：
  - 可靠性____
  - 集成度____
  - 价格____
- 缺点：
  - ____性差

<div>
<details>
  <summary> </summary>
  <ul>
    <li>类型</li>
    <li>M</li>
    <li>写入</li>
    <li>无法改变</li>
    <li>高</li>
    <li>高</li>
    <li>便宜</li>
    <li>灵活</li>
  </ul>
</details>
</div>

</ul>

#### ____ROM  

<ul>

- 定义：可以实现____编程的只读存储器
- 特点：
  - 允许用户利用专门的设备（____）写入自己的程序
  - 一旦写入，内容就____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>P</li>
    <li>一次性</li>
    <li>编程器</li>
    <li>无法改变</li>
  </ul>
</details>
</div>

</ul>

#### ____PROM  

<ul>

- EPROM特点：
  - 可由用户利用____写入信息
  - 可对内容进行多次____
- 局限性：
  - 编程次数____
  - 写入时间过____
  - ____RAM

<div>
<details>
  <summary> </summary>
  <ul>
    <li>E</li>
    <li>编程器</li>
    <li>改写</li>
    <li>有限</li>
    <li>长</li>
    <li>不能取代</li>
  </ul>
</details>
</div>

</ul>

#### ____ M 

<ul>

> pro：Flash存储器的特点（2012）  

- 在____基础上发展
- 特点：
  - 兼有____和____的优点
  - 可在不加电情况下长期____信息
  - 能在线进行快速____与____
  - 价格____
  - 集成度____
  - 擦除重写速度____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Flash</li>
    <li>EPROM</li>
    <li>ROM</li>
    <li>RAM</li>
    <li>保存</li>
    <li>擦除</li>
    <li>重写</li>
    <li>便宜</li>
    <li>高</li>
    <li>快</li>
  </ul>
</details>
</div>

</ul>

#### 固态硬盘（Solid State Drive，____）

<ul>

- 基本组成：
  - ____单元
  - ____单元（Flash芯片）
- 特点：
  - 保留Flash存储器____
  - 读/写速度____
  - 低____
- 缺点：
  - 价格较____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>S</li>
    <li>SD</li>
    <li>控制</li>
    <li>存储</li>
    <li>优点</li>
    <li>快</li>
    <li>功耗</li>
    <li>高</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ____的基本组成  

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/32d7adac4f2bd43918e63a15cb75067abfdb78b3072fd13466d39b41b1a285a2.jpg)  
图3.6主存储器的基本组成框图  

### 存储____

<ul>

- 由 存储____（ ____单元）构成
  - 具有两种稳态的 能表示____的 物理器件
- 编址方式：
  - 可按____/____编址
  - 现代计算机通常采用____编址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主</li>
    <li>M</li>
    <li>矩阵</li>
    <li>元件</li>
    <li>记忆</li>
    <li>二进制0和1</li>
    <li>字</li>
    <li>字节</li>
    <li>字节</li>
  </ul>
</details>
</div>

</ul>

### 存储器 ____过程

<ul>

- CPU操作：
  - 将被访问单元地址送到____
  - 主存地址-____线->主存____
  - 发送 ____信号 to 控制电路
- ____：
  - CPU将数据送到____
  - --数据线-> 选中单元
- ____：
  - 主存读出选中单元____
  - --数据线-> ____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>访问</li>
    <li>MAR</li>
    <li>地址</li>
    <li>地址</li>
    <li>R/W</li>
    <li>W</li>
    <li>MDR</li>
    <li>R</li>
    <li>内容</li>
    <li>MDR</li>
  </ul>
</details>
</div>

</ul>

### ____特性

<ul>

- M____位数与____线~相同
- M____..与____线位..
- 地址空间范围：____

> attention：  

<ul>

- ____线的____通常= ____字长
  - M____的位数通常=存储字长
- 若~的位数 ≠  ____字长
  - ~由数据线的____决定  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>硬件</li>
    <li>D</li>
    <li>R</li>
    <li>数据</li>
    <li>A</li>
    <li>R</li>
    <li>地址</li>
    <li>0~2^地址线位数-1</li>
    <li>数据</li>
    <li>位数</li>
    <li>存储</li>
    <li>D</li>
    <li>R</li>
    <li>存储</li>
    <li>位数</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### ____RAM芯片特性

<ul>

##### ____引脚复用技术

<ul>

- 背景：
  - DRAM芯片容量较大，地址位数较多
- 目的：
  - 减少芯片的____数
- 实现方式：
  - 行地址和列地址通过相同的引脚分先后____输入
- 效果：
  - 地址引脚数可减少____

> pro：DRAM芯片行、列数的优化原则（2018）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>D</li>
    <li>地址</li>
    <li>地址引脚</li>
    <li>两次</li>
    <li>一半</li>
  </ul>
</details>
</div>

</ul>

##### ____数优化原则

<ul>

- 基本参数：
  - 存储容量：____ 位
  - 行数：____
  - 列数：____
  - 关系：____
- 地址位数：
  - 总地址位数：____
  - 行地址位数：____
  - 列地址位数：____
  - 关系：____
- 优化要求：
  - 减少地址引脚数：____ 最小
  - 减少刷新开销：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>行列</li>
    <li>$2^{n}{\times}b$</li>
    <li>r</li>
    <li>c</li>
    <li>$2^{n}=r\times\!c$</li>
    <li>n</li>
    <li>$\log_{2}r$</li>
    <li>$\log_{2}c$</li>
    <li>$n=\log_{2}r+\log_{2}c$</li>
    <li>$|r–c|$</li>
    <li>$r\leqslant c$</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ____模块M

<ul>

- 定义：一种空间____技术
- 目的：提高存储器的____
- 实现方式：利用多个结构完全相同的存储模块____工作
- 常见类型：
  - ____多字存储器
  - ____低位交叉存储器

> attention：  

- CPU的速度比存储器____得多
- 若同时从存储器中取出 ____ 条指令
  - 就可以充分利用____资源，提高运行速度

多体交叉存储器就是基于这种思想提出的。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多</li>
    <li>并行</li>
    <li>吞吐率</li>
    <li>并行</li>
    <li>单体</li>
    <li>多体</li>
    <li>快</li>
    <li>$n$</li>
    <li>CPU</li>
  </ul>
</details>
</div>

### ____字M

<ul>

- 基本特点：
  - 每个存储单元存储____个字
  - 总线宽度为____个字
  - 一次并行读出____个字
- 工作过程：
  - 一个存取周期内从同一地址取出____条指令
  - 将指令逐条送至____执行
  - 每隔____存取周期，CPU向主存取一条指令
- 缺点：
  - 仅在指令和数据____存放时有效
  - 遇到____指令或操作数不连续时效果不明显

<div>
<details>
  <summary> </summary>
  <ul>
    <li>单体多</li>
    <li>m</li>
    <li>m</li>
    <li>m</li>
    <li>m</li>
    <li>CPU</li>
    <li>1/m</li>
    <li>连续</li>
    <li>转移</li>
  </ul>
</details>
</div>

</ul>

### ____M

<ul>

- 基本组成：
  - 由多个相同容量和存取速度的____组成
  - 每个模块具有独立的：
    - ____控制电路
    - ____寄存器
    - ____寄存器
  - 可____工作也可____工作

#### ____交叉编址~（____方式）

<ul>

- 地址划分：
  - ____位表示模块号（体____）
  - ____位表示模块内地址（体内____）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/75d2ac2a627c5bcdace95fe592ef3010583976cec7fbd37807fc2eed52d25b78.jpg)  
图3.7高位交叉编址的多体存储器  

- 工作特点：
  - 低位体内地址送到高位体号确定的模块内____
  - 连续访问特性：
    - 在一个模块内____
    - 各模块不能____访问
  - 性能影响：
    - ____提高存储器吞吐率

> attention：  

- 模块内特点：
  - 地址是____的
  - 存取方式是____的
- 结论：
  - 这种存储器仍是____存储器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多体并行</li>
    <li>模块</li>
    <li>读/写</li>
    <li>地址</li>
    <li>数据</li>
    <li>并行</li>
    <li>交叉</li>
    <li>高位</li>
    <li>顺序</li>
    <li>高</li>
    <li>号</li>
    <li>低</li>
    <li>地址</li>
    <li>译码</li>
    <li>完成</li>
    <li>并行</li>
    <li>不能</li>
    <li>连续</li>
    <li>串行</li>
    <li>顺序</li>
  </ul>
</details>
</div>

</ul>

#### ____交叉编址（____方式）

<ul>

> pro：交叉存储器中数据的存放方式（2017）  

- 地址划分：
  - ____位为模块号（体____）
  - ____位为模块内地址（体内____）
- 编址规则：
  - 每个模块按"____"交叉编址
  - 模块号 = 单元地址 ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b4f48c1df4011710c3242e64f98016fdf9a431c95108f08cf1745946d0aec796.jpg)  
图3.8低位交叉编址的多体存储器  

- 工作特点：
  - 高位体内地址送到低位体号确定的模块内____
  - 程序连续存放在____模块中

<div>
<details>
  <summary> </summary>
  <ul>
    <li>低位</li>
    <li>交叉</li>
    <li>低</li>
    <li>号</li>
    <li>高</li>
    <li>地址</li>
    <li>模m</li>
    <li>% m</li>
    <li>译码</li>
    <li>相邻</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</span>

---

以上内容已严格按照要求处理：
1. 挖空了定义中的关键词、公式定理和关键步骤。
2. 答案置于 HTML `<details>` 折叠块中，使用 `<ul>` 和 `<li>` 标签，并确保 Markdown 公式渲染正确。
3. 保留了原有目录结构和所有内容，包括图片链接。
4. 标题下的段落使用 `<ul>` 标签缩进，保持格式一致。

如果需要进一步调整或补充，请告诉我！

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，关键词、公式定理和关键步骤已设置为空缺，答案以折叠块形式使用 HTML `<details>` 和 `<ul>` 标签呈现。内容保持原有目录结构，格式简洁明了，适用于自我考察和反复记忆。

---

##### <span style="color: silver;">(1) <span style="color: LightSkyBlue;">轮流</span> <span style="color: silver;"><span style="color: LimeGreen;">启动</span> <span style="color: silver;">方式

<ul>

- 条件要求：
  - 每个模块读/写位数等于____总线位数
  - 模块数m ≥ ____（T为存取周期，r为总线周期）

> pro：交叉存储器存取时间和带宽的计算（2012、2013）  

- 工作特点：
  - 每隔____个存取周期轮流启动各模块
  - 存取速度提高____倍
  - 连续存取m个字时间：t₁ = ____ + (m-1)r
  - 顺序方式时间：t₂ = ____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/357a8d6b3c8858f8e0445d4f33ec790e4dc9c97914e01f04c3acc061319ce47a.jpg)  
图3.9低位交叉轮流启动的存取时间示意图  

> pro：交叉存储器中访存冲突的分析（2015）  

- 访存冲突：
  - 发生条件：相邻m次访问的地址在____模块
  - 处理方法：____发生冲突的访问请求

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据</li>
    <li>

T/r</li>
    <li>

1/m</li>
    <li>

m</li>
    <li>

T</li>
    <li>

mT</li>
    <li>

同一</li>
    <li>

延迟</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">(2) <span style="color: Gold;">同时 <span style="color: silver;">~

<ul>

- 条件要求：
  - 所有模块并行读/写的总位数等于____总线位数
- 工作示例：
  - 每模块读/写____位
  - 模块数m=____
  - 数据总线____位
  - ____个模块同时启动并行读/写

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据</li>
    <li>

16</li>
    <li>

4</li>
    <li>

64</li>
    <li>

4</li>
  </ul>
</details>
</div>

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
    - ____总线
    - ____总线 
    - ____总线
  - 总线特点：
    - 数据总线：位数与____的乘积决定数据传输速率
    - 地址总线：位数决定____可寻址内存空间
    - 控制总线：指示总线周期类型和____操作完成时刻

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1e1d92cf5473f7cdbefec0c268399f79d298a75bd67083e238876b319130a603.jpg)  
图3.10主存储器与CPU的连接  

- 存储器扩展需求：
  - 单个芯片____有限
  - 通过____技术集成多个芯片
  - 多个内存条和____芯片组成主存空间
  - 通过____与CPU相连

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据</li>
    <li>

地址</li>
    <li>

控制</li>
    <li>

工作频率</li>
    <li>

最大</li>
    <li>

I/O</li>
    <li>

容量</li>
    <li>

扩展</li>
    <li>

ROM</li>
    <li>

总线</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">主M <span style="color: LimeGreen;">容量</span>的 <span style="color: GreenYellow;">扩展  

<ul>

- 扩展需求：
  - 存储芯片容量限制：
    - 单个芯片____有限
  - 扩展方向：
    - <span style="color: gray;">字</span>的____
    - <span style="color: LightSkyBlue;">位</span>~
  - 扩展目标：
    - 满足实际____容量需求

### <span style="color: silver;"><span style="color: LightSkyBlue;">位</span>扩展法  

<ul>

- 概念：对____进行扩展
- 应用场景：
  - CPU<span style="color: LightSkyBlue;">数据</span> <span style="color: Gold;">线</span>数 > 存储芯片~<span style="color: gray;">位</span>数
- 连接方式：
  - 各芯片的连接：
    - <span style="color: DarkRed;">地址</span>线 与系统____并联
    - <span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>线..
    - <span style="color: Gold;">R</span>/ <span style="color: LimeGreen;">W</span>____线..
  - <span style="color: LightSkyBlue;">数据</span><span style="color: Gold;">线</span>连接：
    - 各芯片数据线 <span style="color: LimeGreen;">单独</span>____
    - 连接到____数据线
  - 工作方式：
    - 各芯片____时工作
- 实例：
  - 目标：组成____×8位存储器
  - 使用：8片____×1位RAM

![image](https://bluejedis.github.io/picx-images-hosting/test/image.eskko8o6z.webp) 
图3.11位扩展连接示意图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

容量</li>
    <li>

扩充</li>
    <li>

存储</li>
    <li>

字长</li>
    <li>

总线</li>
    <li>

控制</li>
    <li>

引出</li>
    <li>

系统</li>
    <li>

同</li>
    <li>

8K</li>
    <li>

8K</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: gray;">字</span>~

<ul>

- 概念：对存储<span style="color: gray;">字</span>____进行扩展
- 特点：
  - 存储字____满足系统要求
- 连接方式：
  - 芯片地址线：
    - 与系统地址<span style="color: green;">低</span>位____
  - 数据线和读/写控制线：
    - 与系统____并联
  - 片选信号：
    - 由系统地址____译码得到
  - 工作方式：
    - 各芯片____工作

> pro：字扩展（或字位扩展）后存储芯片的地址范围（2010、2016）  

- 实例：用____片16K×8位RAM组成64K×8位存储器
- 地址分配：
  - 第一片：____-0011111111111111
  - 第二片：0100000000000000-____
  - 第三片：1000000000000000-____
  - 第四片：1100000000000000-____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/44f1fe99a9391d96d9aeb0fb8712474bf298dbedaaa36321308e7bb49a6874d2.jpg)  
图3.12字扩展连接示意图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数量</li>
    <li>

位数</li>
    <li>

相连</li>
    <li>

总线</li>
    <li>

高位</li>
    <li>

分时</li>
    <li>

4</li>
    <li>

0000000000000000</li>
    <li>

0111111111111111</li>
    <li>

1011111111111111</li>
    <li>

1111111111111111</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: gray;">字</span><span style="color: LightSkyBlue;">位</span>同时~

<ul>

- 概念：____扩展和____扩展的组合
- 功能：
  - add 存储<span style="color: gray;">字</span>____、存储<span style="color: LightSkyBlue;">字长</span>
- 连接方式：
  - ____扩展芯片作为一组
  - 各组连接方式同____扩展
  - 系统地址高位译码产生____信号
- 实例：用____片16K×4位RAM组成64K×8位存储器
  - 组织方式：
    - 每两片构成16K×8位存储器（____扩展）
    - 4组构成64K×8位存储器（____扩展）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1bd0ffee871eff245d8c4e998e914cbf1ee53c30a0465b58592027c9ed8d0501.jpg)  
图3.13字位同时扩展及CPU的连接图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

位</li>
    <li>

字</li>
    <li>

数量</li>
    <li>

位</li>
    <li>

位</li>
    <li>

片选</li>
    <li>

8</li>
    <li>

位</li>
    <li>

字</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">0 存储芯片的<span style="color: DarkRed;">地址</span> <span style="color: Gold;">分配</span>和<span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>  

<ul>

### <span style="color: silver;">concept

<ul>

- CPU访问存储单元需要____个步骤：

#### <span style="color: silver;"><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>：

<ul>

- <span style="color: Gold;">存储</span><span style="color: LimeGreen;">芯<span style="color: LightSkyBlue;">片
- ~ <span style="color: Gold;">信号</span>产生方法：
  - ____选法
  - ____片选法

</ul>

#### <span style="color: silver;"><span style="color: gray;">字</span>选：

<ul>

- 在选定芯片中选择具体 <span style="color: Gold;">存储</span> ____
- process：
  - 由CPU送出N条____地址线完成
  - N由片内存储容量____决定

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

两</li>
    <li>

线</li>
    <li>

译码</li>
    <li>

单元</li>
    <li>

低位</li>
    <li>

2^N</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">线</span><span style="color: LimeGreen;">选</span><span style="color: silver;">法  

<ul>

- <span style="color: LightSkyBlue;">高</span>位地址线直接连接至存储芯片<span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>端
  - 地址线为"<span style="color: gray;">0</span>"时____对应存储芯片
- 每次only有一位____

#### <span style="color: silver;">eg

<ul>

- ____片2K×8位存储芯片构成8K×8位存储器
- 低位地址线____~A0作为字选线
- 片选信号分配如下：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d3e8ef9e2d826e33c5a04dddaf3613401040af874224f56e1f181b5f42aec2d2.jpg)  

- 优点：
  - <span style="color: gray;">不需要</span>地址<span style="color: gray;">译码</span>器
  - 线路____
- 缺点：
  - <span style="color: DarkRed;">地址</span><span style="color: gray;">空间</span>____
  - 选片地址线必须<span style="color: gray;">分时</span>为<span style="color: green;">低</span>____
  - 存储器空间 <span style="color: LimeGreen;">利用</span><span style="color: RoyalBlue;">率</span>____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

选中</li>
    <li>

有效</li>
    <li>

4</li>
    <li>

A10</li>
    <li>

简单</li>
    <li>

不连续</li>
    <li>

电平</li>
    <li>

低</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: gray;">译码</span><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span> <span style="color: silver;">法  

<ul>

- ____位地址线通过地址译码器产生片选信号

#### <span style="color: silver;">eg

<ul>

- ____片8K×8位存储芯片组成64K×8位存储器
  - 地址线____位，数据线____位
  - 需要____个片选信号
  - 使用____作为地址译码器
  - 高3位用于片选：
    - A15A14A13=____选中第一片
    - A15A14A13=____选中第二片
    - 以此类推

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

高</li>
    <li>

8</li>
    <li>

16</li>
    <li>

8</li>
    <li>

8</li>
    <li>

74LS138</li>
    <li>

000</li>
    <li>

001</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">1 <span style="color: Gold;">存储器</span>与 <span style="color: LimeGreen;">CPU</span>的连接  

<ul>

### <span style="color: silver;">合理选择存储 <span style="color: LimeGreen;">芯</span><span style="color: LightSkyBlue;">片</span>  

<ul>

> pro：根据要求合理选择存储芯片（2009、2021）  

- 存储芯片 <span style="color: LimeGreen;">类型</span>选择：
  - ROM：存放____程序、标准子程序和常数
  - RAM：用于____编程
- 芯片<span style="color: gray;">数量</span>考虑：
  - 追求连线<span style="color: gray;">简单
  - ____实用

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

系统</li>
    <li>

用户</li>
    <li>

方便</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>的连接  

<ul>

> pro：地址范围与存储容量的对应关系（2016、2023）  

#### <span style="color: silver;">principle

<ul>

- CPU地址线数usually > ____芯片
- 连接方式：
  - <span style="color: green;">低</span>位：CPU<span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>与存储芯片<span style="color: DarkRed;">地址</span><span style="color: Gold;">线</span>____
    - <span style="color: gray;">字</span><span style="color: LimeGreen;">选</span>
    - 由片<span style="color: gray;">内</span><span style="color: Gold;">逻辑</span> 完成____
  - <span style="color: LightSkyBlue;">高</span>位：用于 <span style="color: LimeGreen;">扩充</span>____芯片
    - <span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>
    - 由 <span style="color: GreenYellow;">外接</span><span style="color: gray;">译码器</span>完成____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储</li>
    <li>

相连</li>
    <li>

译码</li>
    <li>

存储</li>
    <li>

译码</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">eg

<ul>

- CPU：____位地址线(A15~A0)
- 存储芯片：____×4位，10根地址线
- 连接方式：CPU的____~ A0与存储芯片的A9~ A0相连

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

16</li>
    <li>

1K</li>
    <li>

A9</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;"><span style="color: deepskyblue;">数据</span><span style="color: Gold;">线</span>的连接  

<ul>

- CPU与存储芯片 <span style="color: deepskyblue;">数据</span><span style="color: Gold;">线</span>数相等：
  - ____相连
- ..不等：
  - 对存储芯片 <span style="color: black;">扩位
  - 使数据位数 与CPU____线数相等

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接</li>
    <li>

数据</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: Gold;">读</span>/ <span style="color: LimeGreen;">写</span><span style="color: LightSkyBlue;"> 命令</span>线的连接  

<ul>

- <span style="color: GreenYellow;">单</span>一 ~：
  - <span style="color: black;">直接</span>与存储芯片____端相连
  - <span style="color: LightSkyBlue;">高</span>电平为 <span style="color: Gold;">读</span>， <span style="color: LimeGreen;">低</span>电平为____
- <span style="color: Gold;">分开</span>'~：
  - 读命令线( <span style="color: Gold;">RD</span>)连接芯片 <span style="color: Gold;">读</span>____端
  - 写命令线( <span style="color: LimeGreen;">WE</span>)连接芯片 <span style="color: LimeGreen;">写</span>____端
  - 均为<span style="color: green;">低</span>电平____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

控制</li>
    <li>

写</li>
    <li>

控制</li>
    <li>

控制</li>
    <li>

有效</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: LightSkyBlue;">片</span><span style="color: LimeGreen;">选</span>线的连接  

<ul>

- <span style="color: gray;">决定</span>存储芯片____被选中
- 取决于片选 <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">端</span>____到的信号

#### <span style="color: LimeGreen;">M</span><span style="color: Gold;">REQ</span>

<ul>

- CPU要求 <span style="color: LimeGreen;">访</span><span style="color: Gold;">存</span>： <span style="color: LimeGreen;">M</span><span style="color: Gold;">REQ</span>为____电平
- CPU访问<span style="color: LightSkyBlue;">I</span>/ <span style="color: LimeGreen;">O</span>：~____电平， <span style="color: Gold;">M</span>不工作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

whether</li>
    <li>

接收</li>
    <li>

低</li>
    <li>

高</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

</span>



