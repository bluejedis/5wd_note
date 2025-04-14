```html
toc: true
print_background: true
```

# 网络层

<ul>

## above

<ul>

### 【考纲内容】

<ul>

（一）网络层的功能

<ul>

____网络互连：____与____：SDN____概念：____控制

</ul>

（二）路由算法____路由与____路由；____-____路由算法；____状态路由算法；____路由

<ul>

（三）IPv4

<ul>

IPv4____；IPv4____与NAT；____划分与____掩码、CIDR、____聚合、ARP、DHCP 与ICMP

</ul>

（四）IPv6

<ul>

IPv6的____特点：IPv6____

</ul>

（五）路由协议

<ul>

____系统：____路由与____路由：RIP____协议：OSPF____协议：BGP____协议

</ul>

（六）IP多播

<ul>

____的概念：IP____地址

</ul>

（七）移动IP ____IP的概念；移动IP____过程

<ul>

（八）网络层设备____的组成和功能；____表与____转发

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>异构</li>
    <li>路由</li>
    <li>转发</li>
    <li>基本</li>
    <li>拥塞</li>
    <li>静态</li>
    <li>动态</li>
    <li>距离</li>
    <li>向量</li>
    <li>链路</li>
    <li>层次</li>
    <li>分组</li>
    <li>地址</li>
    <li>子网</li>
    <li>子网</li>
    <li>路由</li>
    <li>主要</li>
    <li>地址</li>
    <li>自治</li>
    <li>域内</li>
    <li>域间</li>
    <li>路由</li>
    <li>路由</li>
    <li>路由</li>
    <li>多播</li>
    <li>多播</li>
    <li>移动</li>
    <li>通信</li>
    <li>路由器</li>
    <li>路由</li>
    <li>路由</li>
  </ul>
</details>
</div>

</ul>

### 【复习提示】

<ul>

- 重点关注
  - 结合第3章、第5章、第6章出综合题的概率很大
    - ____链路层、____层、____层

<ul>

- **IPv4**和**路由**的相关知识点是核心
  - 历年真题都有涉及
  - 必须牢固掌握其____
  - 还要多做题，以便灵活____

<ul>

- 其他知识点
  - 如IP____、____IP、IPv6也要有所了解

<ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>传输</li>
    <li>网络</li>
    <li>原理</li>
    <li>应用</li>
    <li>多播</li>
    <li>移动</li>
  </ul>
</details>
</div>

</ul>

## Network-layer'功能

<ul>

### INTRO

<ul>

* 提供**主机**→**主机**的____服务
* 主要任务
  * 将____ 从源主机 经过多个网络和多段链路传输 → 目的主机
* 该任务可划分为两种重要功能：
  * ____转发（packet forwarding）
  * ____选择（route selection）

</ul>

#### 网络层服务模型

<ul>

* OSI参考模型
  * 主张在网络层使用
    * **____连接**的虚电路服务
  * 认为应由 _网络自身_ 来保证通信的____
* TCP/IP体系
  * 网络层提供的是____的数据报服务
  * 由_用户主机_负责____

~~虚电路和数据报服务见2.1~~

</ul>

#### TCP/IP网络层特点

<ul>

* 只提供 
  * 简单灵活的、____的、尽最大努力交付的____服务
* 分组传送特性：
  * 可能____、____、____、____或____
  * 使得路由器可以做得比较简单且价格低廉
* 通信可靠性：
  * 由上层____负责
* 优点：
  * 网络造价大大____
  * 运行方式____
  * 能够适应多种____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>通信</li>
    <li>分组</li>
    <li>分组</li>
    <li>路由</li>
    <li>面向</li>
    <li>可靠性</li>
    <li>无连接</li>
    <li>可靠性</li>
    <li>无连接</li>
    <li>数据报</li>
    <li>出错</li>
    <li>丢失</li>
    <li>重复</li>
    <li>失序</li>
    <li>超时</li>
    <li>传输层</li>
    <li>降低</li>
    <li>灵活</li>
    <li>应用</li>
  </ul>
</details>
</div>

</ul>

### 异构网络互连（Heterogeneous network interconnection）

<ul>

#### INTRO

<ul>

* The Internet由
  * 全球数百万____网络互连而成
* 这些网络的差异：
  * ____结构
  * ____方案
  * ____处理方法
  * ____选择机制
* 网络层任务之一：
  * 实现____网络互连

</ul>

#### 网络互连基本概念

<ul>

* 定义：
  * 两个以上计算机网络，通过某种方法，用**____系统**互连形成更大的网络系统
* 中继系统(Relay system)分类：
  * Not
    * 物理层：____transponder，____hub
    * 数据链路层：____bridge或____switch //
  * 网络层：____Router
  * 网络层以上：____gateway

</ul>

#### 网络互连特征

<ul>

* 物理层或数据链路层中继系统：
  * 仅____网络
  * 从网络层看仍是同一个网络
  * 一般不称为网络互连
* **真正的**网络互连：
  * 使用**____**进行网络连接和____选择
    * 路由器是专用计算机，用于互联网____选择
  * 路由器 也称为____（gateway）

</ul>

#### TCP/IP网络互连实现

<ul>

* 网络层采用
  * ____协议
* 允许相互连接的网络
  * 保持____
* 所有互连网络
  * 使用相同____协议
* 形成虚拟IP网络：

<figure><img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/621a3f2136975b86286096e310e22fa48507532f731983586cccced6c926f71f.jpg" alt=""><figcaption><p>IP网络的概念</p></figcaption></figure>

</ul>

##### 虚拟互连网络特点

<ul>

* 本质：
  * 互连的各种物理网络
    * ____性客观存在
  * 通过IP协议使性能各异的网络
    * 在网络层表现为  ____网络

> use IP协议的虚拟互连网络can be abbreviated as IP网络
>
> namely 虚拟互连网络(逻辑\~)= IP网络

* 优势：
  * IP网上主机通信
    * 如同  在____网络上通信
  * 无需关注  互连各网络的  具体____细节
    * ~~（编址方案Addressing scheme、路由选择协议Routing protocol etc）~~

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>异构</li>
    <li>拓扑</li>
    <li>寻址</li>
    <li>差错</li>
    <li>路由</li>
    <li>异构</li>
    <li>中继</li>
    <li>转发器</li>
    <li>集线器</li>
    <li>网桥</li>
    <li>交换机</li>
    <li>路由器</li>
    <li>网关</li>
    <li>扩展</li>
    <li>路由器</li>
    <li>路由</li>
    <li>路由</li>
    <li>网关</li>
    <li>标准化</li>
    <li>异构</li>
    <li>IP</li>
    <li>异构</li>
    <li>统一</li>
    <li>单个</li>
    <li>异构</li>
  </ul>
</details>
</div>

</ul>

### 路由&转发Routing and Forwarding

<ul>

#### 路由器的功能

<ul>

* ____选择
  * （确定 ____）
* ____转发
  * （当一个分组到达时 所采取的____）

</ul>

##### 路由选择 route selection

<ul>

* 根据____协议
  *  构造并维护  ____表
* 与 相邻路由  **____信息**
  * get网络  最新____
  * 动态更新维护  ____表
  * 决定分组  到达目的地结点的  ____路径(optimal path)

</ul>

##### 分组转发 packet forwarding

<ul>

* 路由器根据  ____表  转发分组 → 合适的端口
  * 路由选择：
    * 根据  ____协议 构造并维护路由表
  * **分组转发**：
    * 处理  经过路由器的____流
    * key operation: 
      * ____表查询  转发及相关的队列管理  任务调度etc

> routing _algorithm_→ routing _table_→ _forwarding_ table

</ul>

##### 转发表

<ul>

* structure: 
  * 确保  ____过程最优化
* 最优化网络____变化  的计算

When discussing the principles of routing，往往不区分转发表和路由表，both use **____表** routing _table_

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由</li>
    <li>路径</li>
    <li>分组</li>
    <li>动作</li>
    <li>路由</li>
    <li>路由</li>
    <li>交换</li>
    <li>拓扑</li>
    <li>路由</li>
    <li>最优</li>
    <li>转发</li>
    <li>路由</li>
    <li>数据</li>
    <li>转发</li>
    <li>查找</li>
    <li>拓扑</li>
    <li>路由</li>
  </ul>
</details>
</div>

</ul>

### 两种服务provided by网络层

<ul>

- 分组交换网 根据其 通信子网向端点系统提供的服务，分为:
  * **____**向连接的**____**电路服务Connection-oriented virtual circuit service 
  * **____**连接的**____**报服务 connectionless datagram service

</ul>

####  <span style="color: Gold;">虚</span><span style="color: deepskyblue;">电路</span> virtual circuit

<ul>

> **pro：虚电路网络的特性（2020）**

</ul>

##### 基本概念

<ul>

* establish 网络层的____(一条逻辑上的虚电路（VirtualCircuit，VC)）← between 2 hosts
  * **ONCE** established，**FIX**虚电路corresponding____路径

</ul>

##### 虚电路建立过程

<ul>

* building VC: An **UNUSED ____号** (VCID) is assigned to the virtual circuit ← to **____** it from **other VCs** in the system
* TRANSMIT PACKETS: 双方 ~ along the established ____
* NOTICED: **HEADER** of 分组 only连接建立时use完整'____地址
* HEADER carrys **VCID**: later The header of each packet only needs to 携带 the **____** of this VC

</ul>

##### 虚电路表

<ul>

* Every **NODE** in the VC network 维持a piece of____表
* Every item in the table, 记录一个open虚电路'____
  * 虚电路号on the receiving and transmitting links
  * 前一结点&下一结点的____ ← Determined during VC establishment

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9233181e79b8ebc96077008ff22adf1f54d99334985fab79c6c81d56c6d3f9fd.jpg)

</ul>

##### 通信过程

<ul>

>like电路交换，communication process have三个阶段：虚电路____、数据____与&虚电路____:

</ul>

###### 数据传输前

<ul>

* 主机A与主机B 建立____
  * 主机A send"____请求"分组，该分组through中间结点to主机B
  * if 主机B同意连接 → 发送"____应答"分组予以确认

</ul>

###### 虚电路建立

<ul>

* 主机A和主机B 传送____分组each other

</ul>

###### 传送结束

<ul>

* 主机A through 发送"____请求"分组来拆除虚电路
* 逐段断开整个____

</ul>

##### 虚电路服务特点

<ul>

* VC **通信链路**' 建立和拆除need**____开销**
  * for交互式应用and少量的短分组情况 → 显得很浪费
  * for长时间、频繁的数据交换 → 效率较高
* VC' **路由选择** 体现在 the 阶段 of____建立
  * 连接建立后 → confirmed ____路径
* VC provide**____**'**通信功能**
  * can guarantee每个分组正确且有序到达
  * control 两个端点'____
    * when接收方 **来不及** 接收数据时
    * can inform 发送方 暂缓发送
* VC have 致命的**____**
  * 当网络中的某个结点或某条链路出现故障而彻底失效时，所有经过该结点或该链路的虚电路将遭到破坏
* 分组首部不包含目的地址，包含的是____，相对于数据报方式，其开销小

</ul>

##### 虚电路的"虚"

<ul>

* circuit 非____
* every结点to其他结点' ____
  * maight同时
    * have many虚电路通过
    * or在多个结点之间 建立____

>⚠️attention: 
As shown in the picture above, 数据传输过程 is 有确认的传输（由高层实现），B收到分组后要发回相应分组的确认。
- 传输in network 是否有确认 与 网络层提供的两种服务 没有任何关系

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向</li>
    <li>虚</li>
    <li>无</li>
    <li>数据</li>
    <li>连接</li>
    <li>物理</li>
    <li>虚电路</li>
    <li>区别</li>
    <li>VC</li>
    <li>目的</li>
    <li>编号</li>
    <li>虚电路</li>
    <li>information</li>
    <li>标识</li>
    <li>建立</li>
    <li>传输</li>
    <li>释放</li>
    <li>连接</li>
    <li>呼叫</li>
    <li>呼叫</li>
    <li>数据</li>
    <li>释放</li>
    <li>连接</li>
    <li>时间</li>
    <li>连接</li>
    <li>传输</li>
    <li>可靠</li>
    <li>流量</li>
    <li>弱点</li>
    <li>VCID</li>
    <li>专用</li>
    <li>链路</li>
    <li>VC</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: blue;">数据</span>报datagram

<ul>

The network does NOT NEED to establish a ____ before sending packets
datagram as "DG" personally

</ul>

##### 数据处理流程

<ul>

* Source host的高层协议：
  * 报文**message**--divided into --> many较小的**____** + 地址etc**____信息** = 分组**Packet**
* 处理过程：
  * 中间结点 ____分组 for a short time
  * find最佳的____后
    * 尽快Forward each packet

</ul>

##### 服务特性

<ul>

* 网络层not provide____质量' 承诺
  * 网络not provide端到端的____传输服务
  * that makes网络中的**Router** ____and造价低廉（与电话网络相比）

</ul>

##### 数据报服务'原理

<ul>

>assumption: 主机A --packet--> 主机B

![数据报方式转发分组](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/12567fcdff5ade6c268261075cfc133a5380945b6f92cd8795694b59b3b807a6.jpg)

* 传输过程：
  * 1）**HOST A** --Packets--> SWITCH **NODE A**
    * NODE A **____** received packets 
  * 2）NODE A 查找own____表
    * different time 网络状态 不同 → 转发表的内容might不完全相同
    * thus：P1 --> SWITCH NODEC，P2 --> SWITCH NODE D
  * 3）other NODEs recieve分组后，samely____分组--till-- Packets-->HOST B

* 资源共享特性：
  * when分组正在某一链路上传送时，分组don't occupy网络其他部分的____ ← 采用存储转发技术资源是共享的
    * HOST A在发送分组时
    * meanwhile
    * HOST B can发送分组to other hosts 

</ul>

##### 特点详解

<ul>

* 1）send分组前don't need建立____:
  * 发送方 can 发送分组any time
  * 结点 can 接收分组 any time

* 2）Internet尽最大努力交付，传输不保证____ ← 分组可能出错或丢失
  * 网络为每个分组独立地选择____ → 转发的路径可能不同
  * 分组 Not always按序到达自的结点

* 3）sended分组should **involve** 发送方&接收方的**____address**
  * for 独立传输

* 4）**____**：
  * when分组在交换结点存储转发时，need 排队等候处理 → 一定的 时延
  * when 网络发生拥塞 → 时延↑↑↑ →SWITCH NODE ~may~ 丢弃部分分组 depend on the situation

* 5）网络have**____**路径(Redundant path)
  * when 某个交换结点 or 一条链路出现故障时
  * can correspondingly更新转发表，寻找另一条路径转发分组
  * Strong 适应力 to faults

* 6）收发双方不独占某条链路，____利用率较高。

</ul>

##### 优势

<ul>

* 网络的造价大大____、运行方式____、能够适应多种____
* 互联网能够发展到今大的规模，充分证明了当初采用这种设计思想的正确性。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CONNECTION</li>
    <li>DG</li>
    <li>控制</li>
    <li>存储</li>
    <li>路由</li>
    <li>服务</li>
    <li>可靠</li>
    <li>简单</li>
    <li>Cache</li>
    <li>转发</li>
    <li>转发</li>
    <li>资源</li>
    <li>连接</li>
    <li>可靠性</li>
    <li>路由</li>
    <li>完整</li>
    <li>时延</li>
    <li>冗余</li>
    <li>资源</li>
    <li>降低</li>
    <li>灵活</li>
    <li>应用</li>
  </ul>
</details>
</div>

</ul>

####  VC&DG --comparison

<ul>

![数据报服务和虚电路服务的比较 ](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f324c7ccd6e10a702d7ac84398e33b642c254c1efe5182a43c73d0e91c714684.jpg)
|  \       | VC      | DG  |
|  :----:  | :----:  | :----:  |
|building of ____   | √ | \ |
|目的____   | - only Building of 连接 use <br>- other: **____** | ____ |
|.        |  |  |
|____选择   |  belonging to the **same VC**' 分组 <br> 转发according to same **____**  | 每个分组独立<br>routing and forwarding |
|分组~(arrive)~____ <br>~(whether有序)~  | <br>√ | <br>× | 
|<br>____   | <br>by the  **____**  | NOT guaranteed;<br> by the **____**|
|.        |  |  |
|<br>Adaptability to网络____|<br> All 经过**FAULT NODE**' VCs → **×**work | - **FAULT NODE** 丢失分组<br>- **OTHER**分组 path selection changes→WORK  |
|.        |  |  |
|<br>____处理&____控制| by the **PACKET SWITCHING NETWORK** <br>or<br> by the **USER HOST** | 流量控制<br>by the **USER HOST** |

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连接</li>
    <li>ADDRESS</li>
    <li>VCID</li>
    <li>WHOLE</li>
    <li>路由</li>
    <li>ROUTE</li>
    <li>顺序</li>
    <li>可靠性</li>
    <li>NETWORK</li>
    <li>USER HOST</li>
    <li>故障</li>
    <li>差错</li>
    <li>流量</li>
  </ul>
</details>
</div>

</ul>

### SDN （SoftwareDefinedNetwork）：

<ul>

> 网络层'main tasks：____和____选择

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>转发</li>
    <li>路由</li>
  </ul>
</details>
</div>

</ul>

### 数据平面 & 控制平面

<ul>

#### 基本概念

<ul>

* 网络层可抽象分为两个平面：
  * ____平面（转发层面）
  * ____平面
* 功能划分：
  * 转发：由____平面实现
  * 路由选择：由____平面实现

</ul>

#### 软件定义网络（SDN）

<ul>

##### 核心特征

<ul>

> Adopt ____式的控制平面&____的数据平面
>
> 。Centralized control plane + Distributed data plane

* 两个平面
  * 相互____
* 控制平面
  * 通过 ____数据接口  对数据平面的路由器
  * 进行____式控制
* 更便于  ____控制网络

</ul>

##### 网络架构对比

<ul>

* 传统网络架构：
  * 路由器同时包含
    * ____表和____选择软件
  * 同时具备  ____平面和____平面  功能

* SDN架构：
  * 路由器功能____
  * 不再需要路由器之间交换____信息
  * 控制平面特点：
    * 包含一个逻辑____控制器（可能由多个服务器组成）
    * 控制器功能：
      * 掌握各主机和整个网络____
      * 为每个分组计算____路由
      * 通过____协议下发流表（转发表）给路由器
    * 路由器职责仅限于：
      * 收到____
      * 查找____表
      * ____分组

<figure><img src="https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8980411f3a345b80986b7d3b5cb90dfa7fc85d40d5af689d3f0e6480ae45beba.jpg" alt=""><figcaption><p>远程控制器  确定并分发 转发表中的值</p></figcaption></figure>

</ul>

##### 应用场景

<ul>

* 网络控制模式的转变：
  * 从原始的____转向____控制
  * 但不会完全改造整个互联网
* 适用条件：
  * 特定环境下的____
  * 尤其适合大型数据中心间的____
  * 可显著提高网络运行____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据</li>
    <li>控制</li>
    <li>数据</li>
    <li>控制</li>
    <li>集中</li>
    <li>分布式</li>
    <li>分离</li>
    <li>控制</li>
    <li>集中</li>
    <li>软件</li>
    <li>转发</li>
    <li>路由</li>
    <li>数据</li>
    <li>控制</li>
    <li>简化</li>
    <li>路由</li>
    <li>远程</li>
    <li>状态</li>
    <li>最佳</li>
    <li>OpenFlow</li>
    <li>分组</li>
    <li>转发</li>
    <li>转发</li>
    <li>分布式</li>
    <li>集中</li>
    <li>应用</li>
    <li>广域网</li>
    <li>效率</li>
  </ul>
</details>
</div>

</ul>

#### 北向接口&南向\~|东西向~

<ul>

> **pro：SDN的南向接口的定义（2022）**

</ul>

##### SDN的可编程性

<ul>

* 通过为开发者提供强大的**____接口**，使得网络具有很好的____性

</ul>

##### 三种接口类型

<ul>

* ____接口
  * 面向对象：**_上层应用_**的开发者
  * 特点：
    * 提供一系列丰富的____
    * 开发者可以在此基础上设计自己的____
    * <u>不必关心底层</u>的____细节

* ____接口
  * 面向对象：SDN控制器and____设备
  * 功能：建立**_双向会话_**
  * 实现方式：
    * through不同的南向接口协议（如____）
    * SDN控制器就可兼容不同的____设备
    * 同时可在设备中实现上层应用的____

* ____接口
  * 面向对象：SDN控制器集群**_内部控制器_**之间
  * 功能：____接口
  * 目的：增强整个控制平面的____性和____性

</ul>

##### 优点

<ul>

* ____集中式控制和____高速转发
  * 利于控制平面的____优化
  * 利于高性能的网络____
* ____可编程与性能的平衡
  * 控制和转发功能分离后
  * 使得网络可以由专有的自动化工具以____方式配置
* 降低____
  * 控制和数据平面分离后
  * 尤其是在使用开放的接口协议后
  * 实现了网络设备的制造与功能软件的并发相____
  * 从而有效降低了____

</ul>

##### 问题

<ul>

* ____风险
  * **集中管理**容易受____
  * 若崩溃，则整个网络会受到____
* **____**问题
  * 原本分布式的控制平面**集中化后**
  * 随着网络规模扩大，控制器可能成为网络性能的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>编程</li>
    <li>编程</li>
    <li>北向</li>
    <li>API</li>
    <li>应用</li>
    <li>硬件</li>
    <li>南向</li>
    <li>转发</li>
    <li>Openflow</li>
    <li>硬件</li>
    <li>逻辑</li>
    <li>东西向</li>
    <li>通信</li>
    <li>可靠性</li>
    <li>可拓展</li>
    <li>全局</li>
    <li>分布式</li>
    <li>全局</li>
    <li>转发</li>
    <li>灵活</li>
    <li>编程</li>
    <li>成本</li>
    <li>分离</li>
    <li>成本</li>
    <li>安全</li>
    <li>攻击</li>
    <li>影响</li>
    <li>瓶颈</li>
    <li>瓶颈</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 拥塞控制 Congestion Control

<ul>

#### 拥塞

<ul>

* 定义：
  * 因出现过量的____导致网络性能下降的现象

* 判断网络是否进入拥塞状态的方法：
  * 观察网络的**____**与网络**____**的关系：
    * 如果随着网络**____**的增加，网络的吞吐量明显小于**____**的吞吐量 → 网络可能已处于轻度拥塞状态
    * 如果吞吐量而下降 → 网络处于____状态

</ul>

#### 拥塞控制

<ul>

##### 基本概念

<ul>

* 含义：
  * 主要解决的问题：
    * 如何获取网络中发生**____**的**____**
    * 如何利用这些信息进行____，避免因拥塞而出现分组的____
  
  * 作用：
    * 确保网络能承载已达到的____
    * 是一个**____性**的过程，涉及网络中所有主机、路由器及导致网络传输能力下降的所有因素
    * 单一地增加资源并不能解决____

  * 与流量控制的区别：
    * 流量控制：在发送方和接收方之间的**____**通信量的控制
    * 目的：抑制发送方发送数据的____，使接收方能及时接收

</ul>

##### 控制方法

<ul>

* ____控制：
  * 特点：
    * 在设计网络时事**____**将相关发生拥塞的因素**____**周到
    * 力求网络在工作时不产生____
    * 是一种静态的____方法
  * 运行机制：
    * 系统启动并运行后，中途不再需要____
  * 控制手段：
    * 确定何时可接收新____
    * 确定何时可丢弃____及丢弃哪些分组
    * 确定____策略等
  * 共性：
    * 在做决定时不考虑当前网络的____

* ____控制：
  * 特点：
    * **事先不考虑**有关发生拥塞的各种____
    * 采用监测网络系统去____
    * 及时检测哪里发生了____
    * 基于反馈环路的概念，是一种____方法
  * 运行机制：
    * 将拥塞信息传到合适的____
    * 调整网络系统的____
    * 解决出现的问题- - -

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分组</li>
    <li>吞吐量</li>
    <li>负载</li>
    <li>负载</li>
    <li>正常</li>
    <li>拥塞</li>
    <li>拥塞</li>
    <li>信息</li>
    <li>控制</li>
    <li>丢失</li>
    <li>流量</li>
    <li>全局</li>
    <li>拥塞</li>
    <li>点对点</li>
    <li>速率</li>
    <li>开环</li>
    <li>先</li>
    <li>考虑</li>
    <li>拥塞</li>
    <li>预防</li>
    <li>修改</li>
    <li>流量</li>
    <li>分组</li>
    <li>调度</li>
    <li>状态</li>
    <li>闭环</li>
    <li>因素</li>
    <li>监视</li>
    <li>拥塞</li>
    <li>动态</li>
    <li>地方</li>
    <li>运行</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## IPv<b><span style="color:blue;">4</b>

<ul>

### IPv4分组

<ul>

>IPv4（版本4）即现在普遍使用的 网际协议（InternetProtocol，IP）

IP定义**数据传送**的 **_基本单元_** 一一IP____ & 其确切的数据格式

IP also includes一套规则，指明分组如何____、错误怎样____。Especially, IP还包含 非可靠投递的思想，and与此关联的____选择的思想

</ul>

#### 格式

<ul>

> **pro：IP首部的分析/各字段的含义（2011、2012）**

一个**IP分组**（或称**IP数据报**）由 **_首部_** 和 **_数据_** 部分组成。
首部
- 前一部分的**长度固定**，共____
  - 是所有IP分组必须具有的。
- 在首部固定部分的后面是一些可选字段，
  - 其**长度可变**，用来提供____检测及____等机制。

<span style="font-size: 14px;">IP数据报的格式如图:

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/83f7bc75378b06ceb46c21f71b64717714580f6ea9f486f61f4aca59abefe7d7.jpg)
图4.5IP数据报的格式

IPv4首部的部分重要字段含义如下：
>标号除"31"表示截至位，其余均应视为start位

1）____。~4bit~
指IP的版本，IPv4数据报中该字段值是____。

2）____长度。~4bit~
以4B为单位，最大可表示的首部长度为____（ $15\times4\mathrm{B}$ ）。最常用的首部长度是20B（ $5{\times}4\mathrm{B}$ ），该字段值是____，此时不使用任何可选字段。

> **attention:** IP首部前两个字节往往以**____**开头，解题时可用于定位IP数据报的**开始位置**

3）____长度。~16bit~
指首部和数据之和的长度，单位为字节，thus数据报的最大长度为 ____ 
以太网帧的最大传送单元（MTU）为____，thus当一个IP数据报封装成
硕时，数据报的总长度（首部加数据）一定不能超过下面的数据链路层的MTU值

4）____。~16bit~
是一个计数器，每产生一个数据报就加1，并赋值给标识字段。但它并不是“____”（因为IP是无连接服务）。当一个数据报的长度超过网络的MTU时，必须____，此时每个数据报片都复制一次标识号，以便能正确地重装成原来的数据报。

5）____（Flag）。~3bit~
标志字段的最低位为____:
 - <span style="font-size: 14px;">$MF=1$ : still have____
 - <span style="font-size: 14px;">$MF=0$ : LAST ____
 
 标志字段中间的一位是____，只有当 $DF=0$ 时才允许分片。

6）____Fragment Offset。~13bit~
><span style="font-size: 14px;"> Point out: 较长的DG在Fragment后，某片在原数据报中的____位置
- 片偏移以____为偏移单位
- 除最后一个分片外，每个分片的长度一定是8B的整数倍。

7）____Time to live (TTL)。~8bit~
>DG在网络中可通过的____数的最大值

标识DG在网络中的____，以确保DG不会永远在网络中循环。
路由器在转发数据报前，先将TTL减1。若TTL被减为0，则该数据报必须去弃。
> **pro：TTL的计算（2014）**

8）____。~8bit~
指出此数据报携带的数据使用何种协议，即数据报的数据部分应上交给哪个协议进行____，如TCP、UDP等。其中值为____表示TCP，值为____表示UDP。

9）____检验和。~16bit~
它只检验数据报的____，但不包括数据部分。这是因为数据报每经过一个路由器，都要重新计算首部检验和（有些字段，如生存时间、总长度、标志、片偏移、源/目的地址都可能发生变化）。不检验数据部分可减少____的工作量。

10）____地址字段。~4Byte~
标识发送方的IP地址。

11）____地址字段。~4Byte~
标识接收方的IP地址。

> ◀️**attention:**

① REMEMBER: 首部长度H、总长度T、片偏移F， basic units are **____**B、**____**B、**____**B
- ~这几个长度之间的加减运算~
  
In addition，熟悉IP数据报首部中的各个字段的意义和功能
<span style="font-size: 12px;"> don't need记忆IP数据报的首部, generally若需要参考首部，则题目会直接给出 
第5章学习的TCP、UDP的首部也是一样的</span> 
② IP地址usaully用____进制表示的，要注意其与十进制之间的转换。

</ul>

#### IP数据报分片

<ul>

##### 最大传送单元（MTU)Maximum transfer unit

<ul>

一个链路层 数据帧能承载的____数据量

因为IP数据报被封装在链路层的顿中，thus链路层的MTU严格地限制了IP数据报的____，而且在IP数据报的源与目的地路径上的各段链路可能使用不同的链路层协议，有不同的____。
例如，以太网的MTU为1500B，而许多广域网的MTU不超过576B。

</ul>

##### length of DG >MTU → DG分片

<ul>

数据报分片
当IP数据报的总长度大于链路MTU时 → 将IP数据报中的数据分装 在多个较小的IP数据报中

those较小的数据报 → ____Fragment

> **pro：分片时会影响首部中的哪些字段（2011）**

片在目的地的网络层被重新____。
**目的主机**使用IP HEADER中的 ____、____和____字段 来完成对片的**____**。
创建一个IP数据报时，源主机为该数据报加上一个____号。

当一个路由器需要将一个数据报分片时，形成的每个数据报（即片）都具有原始数据报的____号。
当目的主机收到来自同一发送主机的一批数据报时，它可通过检查数据报的____号来确定哪些数据报属于同一个原始数据报的片。
HEADER中的标志位占3位，only后2位有意义，分别是____（Don'tFragment)位和____（More Fragment）位。
- only当 $\bf{DF=0}$ 时，该IP数据报才**可**被**____**
- MF则用来告知目的主机该IP数据报Whether为原始数据报的____
  - 当 $MF=1$ 时，表示相应的原始数据报还有后续的片；
  - 当 $MF=0$ 时，表示该数据报是相应原始数据报的最后一个片。

目的主机在对片进行重组时，use**____字段F**to make sure片应放在原始IP数据报的哪个位置。

> **pro：IP分片的原理及相关字段的分析（2021）**

</ul>

###### Fragmentation 计算

<ul>

eg，一个长4000B的IP数据报（首部20B，数据部分3980B）到达一个路由器，需要转发到一条**MTU ____**的链路上。(assumption原始数据报的标识号为777)
This means：
原始数据报中的3980B数据必须分配到____独立的片中（每片也是一个IP数据报）：
- 每片的数据部分依次为____、____和____。
- 则分成的3片如图。
- 可见，因为偏移值的单位是8B，thus 除最后一个片外，其他所有片中的数据部分都为____的倍数。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/626e7ffc8ed5ca7c1f4c45679e7d234b783838316cdd440725a7b9512cb99c27.jpg)
图4.6IP分片的例子

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分组</li>
    <li>处理</li>
    <li>控制</li>
    <li>路由</li>
    <li>20B</li>
    <li>错误</li>
    <li>安全</li>
    <li>版本</li>
    <li>4</li>
    <li>首部</li>
    <li>60B</li>
    <li>5</li>
    <li>0x45</li>
    <li>总</li>
    <li>$2^{16}-1=65535\mathrm{B}$</li>
    <li>1500B</li>
    <li>标识</li>
    <li>序号</li>
    <li>分片</li>
    <li>标志</li>
    <li>MF</li>
    <li>分片</li>
    <li>分片</li>
    <li>DF</li>
    <li>片偏移</li>
    <li>相对</li>
    <li>8B</li>
    <li>生存时间</li>
    <li>路由器</li>
    <li>寿命</li>
    <li>协议</li>
    <li>处理</li>
    <li>6</li>
    <li>17</li>
    <li>首部</li>
    <li>首部</li>
    <li>计算</li>
    <li>源</li>
    <li>目的</li>
    <li>4</li>
    <li>1</li>
    <li>8</li>
    <li>十六</li>
    <li>max</li>
    <li>长度</li>
    <li>MTU</li>
    <li>片</li>
    <li>组装</li>
    <li>标识</li>
    <li>标志</li>
    <li>片偏移</li>
    <li>重组</li>
    <li>标识</li>
    <li>标识</li>
    <li>DF</li>
    <li>MF</li>
    <li>分片</li>
    <li>Last</li>
    <li>片偏移</li>
    <li>1500B</li>
    <li>3</li>
    <li>1480B</li>
    <li>1480B</li>
    <li>1020B</li>
    <li>8B</li>
  </ul>
</details>
</div>

</ul>

</ul>

### IPv4地址与NAT

<ul>

#### IPv4地址

<ul>

##### IPv4地址

<ul>

###### 基本定义

<ul>

- IP地址是给互联网上的每台主机（或路由器）的每个接口分配的一个在____范围内唯一的____位标识符
  - 由互联网名字和数字分配机构____进行分配
  - 早期采用的是____的IP地址，如图4.7所示

</ul>

###### IP地址的组成结构

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f2e278ae9a152d96978ffc45243b7b127a36a1cce3578e4c25be1b688bd910d2.jpg)
图4.7分类的IP地址

- IP地址： $=$ {<____号>，<____号>}
  - 网络号：标志主机（或路由器）所连接到的____
    - 在整个互联网范围内必须是____
  - 主机号：标志该主机（或路由器）
    - 在它前面的网络号所指明的网络范围内必须是____

</ul>

###### 特殊IP地址

<ul>

> **pro：特殊IP地址0.0.0.0的用途（2017）**

- 特殊用途的IP地址：
  - 主机号全为0：表示本网络本身（如____）
  - 主机号全为1：表示本网络的____地址/直接广播地址（如____）
  - ____：环回自检地址
  - ____：本网络上的本主机
  - ____：整个TCP/IP网络的广播地址/受限广播地址

</ul>

###### IP地址分类使用范围

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8e5f99e160787c8b792c1180313a4d2d4e023d0e54160b7414f055ff18773b94.jpg)

- A类地址可用网络数：____
  - 减2原因：
    - 网络号字段全0为____地址
    - 网络号127为____地址

</ul>

###### IP地址特点

<ul>

- ____的地址结构
  - 好处：
    - 地址管理____：只分配网络号，主机号由单位自行分配
    - 减小路由表____空间：路由器仅根据网络号转发
- 标志____特性
  - 一台主机连接两个网络需要两个不同网络号的____地址
  - 路由器至少需要____个IP地址
- 网络连接特性
  - 用转发器/桥接器连接的LAN共用同一____号
  - 所有分配网络号的网络____
  - 同一局域网上的主机/路由器接口网络号必须____

</ul>

</ul>

##### 网络地址转换（NAT）

<ul>

###### 基本概念

<ul>

- 将____地址转换为____地址
  - 对外隐藏内部IP地址
  - 只需一个____IP地址即可连通互联网
  - 节省IP地址____
  - 提高网络____

</ul>

###### 私有IP地址

<ul>

> **pro：私有IP地址访问Internet的处理（2011）**

- 私有IP地址范围：
  - A类：____~____
  - B类：____~____
  - C类：____~____
- 特点：
  - 仅用于____
  - 不能直接用于____
  - 允许LAN____使用
  - 需通过NAT____才能访问Internet

</ul>

###### NAT工作原理

<ul>

> **pro：NAT的原理和应用（2016、2019、2020、2023）**

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e02ffb33271e0f0ef1690c1d80df4b45778e6944f11d8a56baafaeed794a29f0.jpg)
图4.8NAT路由器的工作原理

- 工作流程：
  1. 用户发送请求（____地址→____服务器）
  2. NAT路由器转换：
     - 生成新____号
     - 修改源地址为____IP
     - 更新NAT____表
  3. 服务器响应到____路由器
  4. NAT路由器根据____表还原私有地址信息

> **attention:**

- NAT路由器vs普通路由器：
  - 普通路由器：
    - 仅工作在____层
    - 转发时不改变____地址
  - NAT路由器：
    - 需要转换____地址
    - 需要查看和转换____层端口号

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全球</li>
    <li>32</li>
    <li>ICANN</li>
    <li>分类</li>
    <li>网络</li>
    <li>主机</li>
    <li>网络</li>
    <li>唯一</li>
    <li>唯一</li>
    <li>202.98.174.0</li>
    <li>广播</li>
    <li>202.98.174.255</li>
    <li>127.x.x.x</li>
    <li>0.0.0.0</li>
    <li>255.255.255.255</li>
    <li>$2^{7}-2$</li>
    <li>保留</li>
    <li>环回自检</li>
    <li>分等级</li>
    <li>方便</li>
    <li>存储</li>
    <li>接口</li>
    <li>IP</li>
    <li>2</li>
    <li>网络</li>
    <li>平等</li>
    <li>相同</li>
    <li>专用</li>
    <li>公用</li>
    <li>全球</li>
    <li>消耗</li>
    <li>安全性</li>
    <li>10.0.0.0</li>
    <li>10.255.255.255</li>
    <li>172.16.0.0</li>
    <li>172.31.255.255</li>
    <li>192.168.0.0</li>
    <li>192.168.255.255</li>
    <li>LAN</li>
    <li>Internet</li>
    <li>重复</li>
    <li>转换</li>
    <li>私有</li>
    <li>公网</li>
    <li>端口</li>
    <li>全球</li>
    <li>转换</li>
    <li>NAT</li>
    <li>转换</li>
    <li>网络</li>
    <li>IP</li>
    <li>IP</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

### 划分子网subnetting & 路由聚合Route aggregation

<ul>

#### 划分子网subnetting

<ul>

- 两级IP地址的缺点：
  - IP地址空间的利用率有时很____
  - 给每个物理网络分配一个网络号会使路由表变得太大，进而使网络性能变____
  - 两级IP地址不够____

- 从1985年起，在IP地址中又增加了一个"____字段"，使两级IP地址变成了____IP地址
  - 这种做法称为划分子网
  - 划分子网已成为互联网的正式标准____

</ul>

##### subnetting的基本思路

<ul>

- subnetting is 一个单位内部的事情
  - **对外**still**表现为** **没有划分**子网的一个____
  - 方法:
    - **从**网络的**____号** **借用**若干位作为____号~（主机号也相应减少了相同的位数）~
- ____IP地址的结构：
  - IP地址： $=$ {<网络号>，<子网号>，<主机号>}
- 路由器转发分组根据： IPDG的**____网络号**
  - 本单位的路由器收到TP数据报后，再按目的网络号和____号找到目的子网
  - 最后把IP数据报交付给____主机

</ul>

#####  eg 

<ul>

- 将一个C类网络208.115.21.0划分为____个子网
  - 子网号占用____位，thus主机号就只有____位
  - 各子网的网络地址分别为____、____、____、____
  - 每个子网可分配的IP地址数为 ____

> **attention:**

- subnetting只是把IP地址的**____号部分**进行**再划分**
  - **不改变**IP地址**原**来**的____号**
  - **从**一个**IP地址本身** **无法判断**该主机所连接的网络**whether**进行了____
- subnet中的**主机号** **全0**或**全1**的地址不能被____
  - 全0: ____地址
  - 全1: ____地址
- 划分子网**增加**了**____**
  - but**减少了**能够连接在**network上**的**____总数**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>低</li>
    <li>坏</li>
    <li>灵活</li>
    <li>子网号</li>
    <li>三级</li>
    <li>协议</li>
    <li>网络</li>
    <li>主机</li>
    <li>子网</li>
    <li>三级</li>
    <li>目的</li>
    <li>子网</li>
    <li>目的</li>
    <li>4</li>
    <li>2</li>
    <li>6</li>
    <li>208.115.21.0</li>
    <li>208.115.21.64</li>
    <li>208.115.21.128</li>
    <li>208.115.21.192</li>
    <li>$2^{6}{-}2{=}62$</li>
    <li>主机</li>
    <li>网络</li>
    <li>subnetting</li>
    <li>指派</li>
    <li>网络</li>
    <li>广播</li>
    <li>灵活性</li>
    <li>主机</li>
  </ul>
</details>
</div>

</ul>

#### 子网掩码Subnet mask &默认网关Default Gateway

<ul>

##### 子网掩码

<ul>

- 子网掩码可用来 **==指明==** 分类IP地址的主机号部分 **==被借用==了** **____位**作为子网号
*short as **SM** personally
> **pro：根据IP地址和子网掩码求网络地址（2022）**

- 组成：
  - 一个与IP地址相对应的、长32位的**____串**
    - 由一串____和跟随的一串____组成
    - 1对应于IP地址中的网络号及____号
    - 0对应于____号
- 主机或路由器只需将IP地址和其对应的子网掩码逐位"____"（AND运算），就可得出相应子网的____地址

</ul>

##### 默认网关Default Gateway

<ul>

> **pro：默认网关配置错误对访问局域网和跨网访问的影响（2015）**

> **pro：默认网关和子网掩码的配置分析（2016、2019、2022）**

- 默认网关是**子网**与**外部网络**==连接==的____
  - 也就是连接本机或子网的 **路由器接口**的'**____地址**
- 主机发送数据时的process：
  - On the basis of所发送数据的目的IP地址，through子网掩码来判定目的**主机whether在____中**
    - 若目的主机在子网中，则直接____
    - 若目的主机不在子网中，则将该数据 → 默认网关，由网关（路由器）将其____到其他网络

</ul>

##### 子网掩码使用规定

<ul>

- 现在的互联网标准规定：所有网络都must使用____掩码
  - 若一个网络**未划分子网**，则该网络的**SM**use **____**SM
  - A、B、C类地址的DSM
    - ____、____、____
- eg：
  - 某主机的1P地址为192.168.5.56，子网掩码为255.255.255.0
    - 进行逐位"与"运算后，得出该主机所在子网的____号为____

</ul>

##### SM的重要性

<ul>

- is一个网络的重要____
  - 路由器相互之间**交换路由信息**时，必须将自己**所在网络**的**____掩码**告诉对方
  - 分组转发时：
    - 路由器将分组的目标地址和某网络的子网掩码**____相与**
      - 若**结果**与该网络地址**一致**，则路由匹配成功
      - 路由器将**分组转发**至该____

</ul>

##### SM使用要求

<ul>

- 一台主机在设置IP地址信息的同时，must设置**____**
- 同属于一个子网的所有主机及路由器的相应端口，必须设置**____**的SM
- 路由器的**路由表**中所包含的信息**主要内容**
  - ____网络地址、**SM**、____地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多少</li>
    <li>二进制</li>
    <li>1</li>
    <li>0</li>
    <li>子网</li>
    <li>主机</li>
    <li>与</li>
    <li>网络</li>
    <li>设备</li>
    <li>IP</li>
    <li>子网</li>
    <li>发送</li>
    <li>转发</li>
    <li>子网</li>
    <li>Default</li>
    <li>255.0.0.0</li>
    <li>255.255.0.0</li>
    <li>255.255.255.0</li>
    <li>网络</li>
    <li>192.168.5.0</li>
    <li>属性</li>
    <li>子网</li>
    <li>按位</li>
    <li>网络</li>
    <li>SM</li>
    <li>相同</li>
    <li>目的</li>
    <li>下一跳</li>
  </ul>
</details>
</div>

</ul>

#### 无分类编址CIDR <span style="font-size: 14px;"> (无分类 域间 路由选择Classless Inter-Domain Routing</span> ——New

<ul>

##### CIDR基本概念

<ul>

- 提出的一种**____**传统**A、B、C类地址**及**划分子网**的概念
- 特点：
  - **更有效**地分配IPv4的____空间
  - 使用网络**____****N**etwork **P**refix的概念代替网络的概念
    - 位数不是固定的，可以任意选取
- CIDR的==记法==：IP地址 = {<____前缀>，<主机号>}

</ul>

##### ?CIDR斜线记法

<ul>

- 记为："IP地址/网络前缀**____**"
  - NP 所占的位数corresponds to____号的部分
  - ⇔ SM中连续____的部分
- eg：(128.14.32.5/20)
  - 掩码是____个连续的1和后续____个连续的0
  - IP=10000000.00001110.00100000.00000101
  - 掩码=11111111.11111111.11110000.00000000
  - 网络前缀=____(128.14.32.0)
![image](https://bluejedis.github.io/picx-images-hosting/image.8l042v31fg.webp)

</ul>

##### CIDR地址块address block特性

<ul>

> **pro：CIDR地址块的分析（2011、2015、2016、2019、2023）**
> **pro：地址块的最小地址和最大地址分析（2023）**

- 将网络前缀都相同的连续IP地址--compose-->一个CIDR____块
- 地址范围：
  - 最小地址：____（128.14.32.0）
  - 最大地址：____（128.14.47.255）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>消除</li>
    <li>地址</li>
    <li>前缀</li>
    <li>网络</li>
    <li>所占的位数</li>
    <li>网络</li>
    <li>1</li>
    <li>20</li>
    <li>12</li>
    <li>10000000.00001110.00100000.00000000</li>
    <li>地址</li>
    <li>10000000.00001110.00100000.00000000</li>
    <li>10000000.00001110.00101111.11111111</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

---

以上内容严格遵循了您的要求：
1. 挖空了定义中的关键词、公式定理和算法中的关键步骤。
2. 保持了原有目录结构，未改变或省略任何内容。
3. 将挖空答案以 HTML 折叠块形式放在每个次级标题下方，使用 `<ul>` 和 `<li>` 标签，并对公式进行了适当的 Markdown 渲染处理。
4. 输出的格式同时包含 Markdown 和 HTML 代码，便于查看和使用。

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果。每个次级标题下的关键知识点已被挖空，答案以 HTML 折叠块形式附在下方。Markdown 和 HTML 格式均符合要求，保留了原有目录结构，并确保内容简洁明了，便于自我考察和记忆。

---

# 数据结构

<ul>

### 无分类域间路由选择 CIDR

<ul>

#### CIDR的基本概念

<ul>

- 无分类域间路由选择（CIDR）的核心思想是消除了传统 ____ 和 ____ 的概念。
- CIDR使用“网络前缀”（network-prefix）来代替传统分类地址中的网络号和子网号。
- IP地址格式从三级编址回归到两级编址，即 ____ / 网络前缀长度。
- CIDR将网络前缀相同的连续IP地址组成一个“CIDR地址块”。
- 例子：
  - 128.14.35.7/20 表示一个地址块，其中前 ____ 位是网络前缀。
  - 该地址块的最小地址是 ____，最大地址是 ____。
- 注意事项：
  - 主机号全0或全1的地址一般 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

A类、B类、C类</li>
    <li>

子网</li>
    <li>

网络前缀</li>
    <li>

20</li>
    <li>

128.14.32.0</li>
    <li>

128.14.47.255</li>
    <li>

不使用</li>
  </ul>
</details>
</div>

</ul>

##### CIDR与子网的关系

<ul>

- CIDR虽然不使用子网，仍使用 ____。
- CIDR不使用子网的含义：
  - 不在32位地址中____若干位作为子网字段。
- 单位内部仍可划分子网：
  - 分配到地址块/20的单位可划分为 ____ 个子网。
  - 从主机号中借用 ____ 位来划分子网。
  - 每个子网的网络前缀变成 ____ 位。

> **pro：子网广播地址/网络地址的分析（2011、2012、2018、2019）**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

掩码</li>
    <li>

指明</li>
    <li>

8</li>
    <li>

3</li>
    <li>

23</li>
  </ul>
</details>
</div>

</ul>

##### CIDR地址块特点

<ul>

- 地址数量：
  - 地址块中的地址数一定是 ____ 的整数次幂。
  - 实际可指派的地址数通常为 ____（N表示主机号的位数）。
  - 主机号全0代表 ____，主机号全1为 ____。
- 网络前缀特性：
  - 网络前缀越短，其地址块包含的地址数就 ____。
  - 在三级结构的IP地址中，划分子网使网络前缀 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
    <li>

2^N-2</li>
    <li>

网络号</li>
    <li>

广播地址</li>
    <li>

越多</li>
    <li>

变长</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 路由聚合 Route aggregation

<ul>

- 一个CIDR地址块中有很多地址 → ____ 中就可利用CIDR地址块来查找目的网络。
- 这种地址的聚合称为 ____，也称 ____。
  - 它使得路由表中的一个项可以表示多个原来传统分类地址的路由。
  - 有利于减少路由器之间的信息交换，进而提高 ____。

> **pro：路由聚合的分析（2009、2011、2013、2014、2018）**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

路由表</li>
    <li>

路由聚合</li>
    <li>

构成超网</li>
    <li>

网络性能</li>
  </ul>
</details>
</div>

</ul>

##### 示例

<ul>

- 在如图4.9所示的网络中，若不使用路由聚合：
  - 则R1的路由表中需分别有到网络1和网络2的 ____。
- 不难发现：
  - 网络1和网络2的网络前缀在二进制表示的情况下：
    - 前 ____ 位都是相同的。
    - 第 ____ 位分别是0和1。
  - 从R1到网络1和网络2的路由的下一跳皆为 ____。
- 若使用路由聚合：
  - 则在R1看来，网络1和网络2可以构成一个更大的地址块 ____。
  - 到网络1和网络2的两条路由就可聚合成一条到 ____ 的路由。

![路由聚合示例](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3c327d3febd0959034937d5135371eb34698ee1d81aeb0c0a097b58a53585744.jpg)`

> **pro：路由器分组转发的最长前缀匹配（2013、2015）**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

路由表项</li>
    <li>

16</li>
    <li>

17</li>
    <li>

R2</li>
    <li>

206.1.0.0/16</li>
    <li>

206.1.0.0/16</li>
  </ul>
</details>
</div>

</ul>

##### 最长前缀匹配 Longest prefix matching

<ul>

- 又称 ____。
- 使用CIDR时：
  - 路由表中的每项由 ____ 和 ____ 组成。
  - 在查找路由表时可能会得到不止一个匹配结果。
  - 此时，应从匹配结果中选择具有 ____ 的路由。
    - 网络前缀越长，其地址块就 ____。
    - 因此路由就 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最佳匹配</li>
    <li>

网络前缀</li>
    <li>

下一跳地址</li>
    <li>

最长网络前缀</li>
    <li>

越小</li>
    <li>

越具体</li>
  </ul>
</details>
</div>

</ul>

##### CIDR查找路由表的方法

<ul>

- 为了更有效地查找最长前缀匹配：
  - 通常将无分类编址的路由表存放在一种 ____ 数据结构（通常采用二叉线索）中。
  - 然后自上而下地按层次进行 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

层次式</li>
    <li>

查找</li>
  </ul>
</details>
</div>

</ul>

##### CIDR的优点

<ul>

- 网络前缀长度的 ____：
  - 因为上层网络的前缀长度较短，因此相应的路由表项目 ____。
  - 而内部又可采用延长网络前缀的方法来灵活地 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

灵活性</li>
    <li>

较少</li>
    <li>

划分子网</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 子网划分 subnetting 的 application

<ul>

##### 子网划分方法 Types of subnet division methods

<ul>

- 采用 ____ 的SM。
- 采用 ____ 的SM。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

定长</li>
    <li>

变长</li>
  </ul>
</details>
</div>

</ul>

###### 定长SM划分 Fixed-length subnet mask division

<ul>

- 当采用定长的子网掩码划分子网时：
  - 所划分的每个子网使用 ____ 子网掩码。
  - 每个子网所分配的IP地址数量也 ____。
  - 因此容易造成地址资源的 ____。

> **pro：采用定长SM划分子网的应用（2009、2010、2017、2018）**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

相同</li>
    <li>

相同</li>
    <li>

浪费</li>
  </ul>
</details>
</div>

</ul>

###### 定长SM划分示例 Example of fixed-length subnet mask division

<ul>

- 假设某单位拥有一个CIDR地址块为208.115.21.0/24：
  - 该单位有三个部门，各部门的主机台数分别为 ____、____、____。
  - 采用定长的子网掩码给各部门分配IP地址。
- 需求分析：
  - 部门1需要 ____ 个IP地址（含一个路由器接口地址）。
  - 部门2需要 ____ 个IP地址。
  - 部门3需要 ____ 个IP地址。
- 划分方案：
  - 从给定地址块208.115.21.0/24的主机号部分借用 ____ 位作为子网号。
  - 可以划分为 ____ 个子网。
  - 每个子网可分配的IP地址数为 ____。
- 具体划分：
  - 208.115.21.00000000～208.115.21.00111111，地址块 ____，分配给部门1。
  - 208.115.21.01000000～208.115.21.01111111，地址块 ____，分配给部门2。
  - 208.115.21.10000000～208.115.21.10111111，地址块 ____，分配给部门3。
  - 208.115.21.11000000～208.115.21.11111111，地址块 ____，留作以后用。
  - 子网掩码：____，即255.255.255.192。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

50</li>
    <li>

20</li>
    <li>

5</li>
    <li>

51</li>
    <li>

21</li>
    <li>

6</li>
    <li>

2</li>
    <li>

4</li>
    <li>

62</li>
    <li>

208.115.21.0/26</li>
    <li>

208.115.21.64/26</li>
    <li>

208.115.21.128/26</li>
    <li>

208.115.21.192/26</li>
    <li>

255.255.255.11000000</li>
  </ul>
</details>
</div>

</ul>

###### 变长SM划分 Variable-length subnet mask division

<ul>

> **pro：采用变长SM划分子网的应用（2019、2021）**

- 特点：
  - 所划分的每个子网可以使用 ____ 子网掩码。
  - 每个子网所分配的IP地址数量可以 ____。
  - 这样就尽可能地减少了对地址资源的 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不同</li>
    <li>

不同</li>
    <li>

浪费</li>
  </ul>
</details>
</div>

</ul>

###### 变长SM划分示例 Example of variable-length subnet mask division

<ul>

- 需求分析：
  - 部门1的主机号需 ____ 位，剩余 ____ 位作为网络前缀。
  - 部门2的主机号需 ____ 位，剩余 ____ 位作为网络前缀。
  - 部门3的主机号需 ____ 位，剩余 ____ 位作为网络前缀。
- 划分方案：
  - 从地址块208.115.21.0/24中划分出3个子网：
    - 1个 ____ 地址块。
    - 1个 ____ 地址块。
    - 1个 ____ 地址块。
  - 按需分配给三个部门。
  - 每个子网的最小地址只能选取主机号 ____ 的地址。
  - 建议从 ____ 子网开始划分。

![变长SM划分示例](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ac44667c05deef529ea237a5beaa962fc08414413a27f237c11d6473ec294d88.jpg)`

- 注意事项：
  - 子网主机号全0或全1的地址 ____。
  - 对于一段连接两个路由器的链路：
    - 可以分配一个 ____ 地址块。
    - 这样可分配地址为 ____ 个。
    - 恰好可分配给链路两端的 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

6</li>
    <li>

26</li>
    <li>

5</li>
    <li>

27</li>
    <li>

3</li>
    <li>

29</li>
    <li>

/26</li>
    <li>

/27</li>
    <li>

/29</li>
    <li>

全0</li>
    <li>

大的</li>
    <li>

不能分配</li>
    <li>

/30</li>
    <li>

2</li>
    <li>

路由器接口</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

### 网络层转发分组的过程 Packet forwarding process at the network layer

<ul>

#### 转发表基本信息 Basic forwarding table information

<ul>

- 分组转发全部基于 ____ 所在网络的。
  - 因为互联网上的 ____ << ____。
  - 极大地压缩转发表的 ____。
- 当分组到达路由器后，路由器根据目的IP地址的 ____ 来查找转发表，确定下一跳应当到哪个路由器。
- 因此，在转发表中，每条路由必须有下面两条信息：
  - （____，____）。
- 这样，IP数据报最终一定可以找到目的主机所在目的网络上的路由器（可能要通过多次 ____），当到达最后一个路由器时，才试图向目的主机进行 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

目的主机</li>
    <li>

网络数</li>
    <li>

主机数</li>
    <li>

大小</li>
    <li>

网络前缀</li>
    <li>

目的网络地址</li>
    <li>

下一跳地址</li>
    <li>

间接交付</li>
    <li>

直接交付</li>
  </ul>
</details>
</div>

</ul>

#### CIDR编址下的转发表查找 Forwarding table lookup under CIDR addressing

<ul>

- 采用CIDR编址时，若一个分组在转发表中可以找到多个匹配的前缀，则应当使用 ____。
- 为了更快地查找转发表，可以按照前缀的 ____，将前缀最长的排在第1行，按前缀长度的 ____ 排列。
- 这样，从第1行最长的开始查找，只要检索到 ____ 的，就不必再继续查找。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最长前缀匹配</li>
    <li>

长短</li>
    <li>

降序</li>
    <li>

匹配</li>
  </ul>
</details>
</div>

</ul>

#### 特殊路由 Special routes

<ul>

##### 特定主机路由 Specific host routes

<ul>

> **pro：特定主机路由的应用（2009）**

- 对特定目的主机的IP地址 ____ 一个路由，以方便网络管理员控制和测试网络。
- 若特定主机的IP地址是a.b.c.d，则转发表中对应项的目的网络是 ____。
  - /32表示的子网掩码 ____。
  - 但这种特殊的前缀可以用在 ____ 中。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

专门指明</li>
    <li>

a.b.c.d/32</li>
    <li>

没有意义</li>
    <li>

转发表</li>
  </ul>
</details>
</div>

</ul>

##### 默认路由 Default route

<ul>

> **pro：默认路由的应用（2009、2014）**

- 用特殊前缀 ____ 表示默认路由。
  - 全0掩码和任何目的地址进行按位与运算，结果必然为 ____，即必然和前缀 ____ 相匹配。
- 只要目的网络是 ____（不在转发表中），就 ____。
- 默认路由通常用于 路由器 → ____ 的路由。
  - 互联网包括无数的网络集合，不可能在路由表项中 ____。
  - 因此只能采用 ____ 的方式。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0.0.0.0/0</li>
    <li>

全0</li>
    <li>

0.0.0.0/0</li>
    <li>

其他网络</li>
    <li>

一律选择默认路由</li>
    <li>

互联网</li>
    <li>

一一列出</li>
    <li>

默认路由</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 分组转发算法 Packet forwarding algorithm

<ul>

- 1）从收到的IP分组的首部 ____ 目的主机的IP地址D（即目的地址）。
- 2）____ 特定主机路由（目的地址为D）。
  - Y：
    - 按照这条路由的 ____ 转发分组；
  - N：
    - 从转发表中的 ____（即按前缀长度的顺序）开始 ____，执行步骤3）。
- 3）将这一行的 ____ 与 ____ 逐位“与”（____ 操作）。
  - 若运算结果与本行的前缀匹配：
    - 则查找 ____。
    - 按照“下一跳”指出的进行处理。
    - （或者直接交付本网络上的目的主机，或通过指定接口发送到 ____）。
  - 否则，若转发表还有下一行，则对下一行进行检查，重新执行步骤3）。
  - 否则，执行步骤4）。
    - 4）若转发表中 ____，则把分组传送给默认路由；否则，报告转发分组出错。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

提取</li>
    <li>

查找</li>
    <li>

下一跳转发</li>
    <li>

下一条</li>
    <li>

检查</li>
    <li>

子网掩码</li>
    <li>

目的地址D</li>
    <li>

AND</li>
    <li>

结束</li>
    <li>

下一跳路由器</li>
    <li>

有一个默认路由</li>
  </ul>
</details>
</div>

</ul>

#### 转发表特点 Forwarding table characteristics

<ul>

> step by step

- 转发表（或路由表）____ 给分组 ____ 到某个网络的 ____（即先经过哪个路由器，然后经过哪个路由器等）。
- 转发表指出，到某个网络应当 ____ 某个路由器（即 ____）。
  - 到达下一跳路由器后，再继续查找其转发表，知道再下一步应当到 ____。
- 这样一步一步地查找下去，直到最后到达 ____。

> **attention:**
- 得到下一跳路由器的IP地址后：
  - 不是直接将该地址填入 ____。
  - 而是将该IP地址转 → ____（通过ARP）。
    - 将此MAC地址填入 ____。
    - 然后根据这个MAC地址找到 ____。
- 不同网络中传送时：
  - MAC帧的源地址和目的地址要发生 ____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

并没有</li>
    <li>

指明</li>
    <li>

完整路径</li>
    <li>

先到</li>
    <li>

下一跳路由器</li>
    <li>

哪个路由器</li>
    <li>

目的网络</li>
    <li>

待发送的数据报</li>
    <li>

MAC地址</li>
    <li>

MAC帧首部</li>
    <li>

下一跳路由器</li>
    <li>

变化</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

---

### 处理说明

1. **挖空原则**：
   - 定义中的关键词（如“网络前缀”、“路由聚合”）、公式定理（如地址数量公式 2^N-2）、算法关键步骤（如“提取”、“查找”）被设置为 ____。
   - 挖空内容为关键术语或数值，确保简洁且易于记忆。

2. **折叠块格式**：
   - 每个次级标题下的答案使用 `<details>` 和 `<summary>` 标签实现折叠效果。
   - 答案内容放入 `<ul>` 标签中，`<li>` 标签之间空行处理以支持 Markdown 内公式渲染。

3. **结构完整性**：
   - 保留了原文档的所有标题和内容，未省略任何部分。
   - 图片链接保持不变，仅对文本内容进行挖空处理。

4. **示例验证**：
   - 参考您提供的“导数的概念”示例，确保挖空和折叠块格式一致。

如需进一步调整或补充，请随时告知！

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，挖空的关键词、公式和关键步骤已用空缺表示，并在每个次级标题下使用 HTML 的 `<details>` 标签将答案折叠。输出的格式同时包含 Markdown 和 HTML 代码，确保内容简洁明了，便于自我考察和反复记忆，同时保留原有目录结构。

---

### Markdown 及 HTML 输出

#### 网络中的每个路由器都要维护从它自身到其他每个目的网络的____记录
- RIP使用____来衡量到达目的网络的____
  - 从一路由器到直接连接的网络的____定义为____
  - 每经过一个路由器，____就加1
  - RIP认为好的路由就是通过的____数目少

> **pro：RIP中跳数为16的含义（2010）**

- 跳数限制
  - RIP允许一条路径最多只能包含____个路由器
    - ____等于16时表示网络____
    - RIP只适用于____互联网
    - 限制跳数目的是防止____在环路上循环
- 路由表结构
  - 每个路由表项都有三个关键字段：<____ $N$ ，____ $d$ ，下一跳路由器地址 $\chi>$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>距离</li>
    <li>跳数（HopCount）</li>
    <li>距离</li>
    <li>距离</li>
    <li>1</li>
    <li>距离</li>
    <li>路由器</li>
    <li>15</li>
    <li>距离</li>
    <li>不可达</li>
    <li>小型</li>
    <li>分组</li>
    <li>目的网络</li>
    <li>距离</li>
  </ul>
</details>
</div>

---

#### RIP的特点

##### 信息交换机制

- 交换对象
  - 仅和____路由器交换信息
- 交换内容
  - 交换的信息是本路由器所知道的____信息，即自己的____
- 交换时机
  - 按固定的____间隔（如____秒）交换
  - 网络____变化时及时通告

<div>
<details>
  <summary> </summary>
  <ul>
    <li>直接相邻的</li>
    <li>全部</li>
    <li>路由表</li>
    <li>时间</li>
    <li>30</li>
    <li>拓扑</li>
  </ul>
</details>
</div>

##### 路由器工作过程

- 初始阶段
  - 只知道自己到直接相连的几个网络的____为____
- 更新阶段
  - 每个路由器仅和____路由器周期性地交换并更新____信息
- 收敛阶段
  - 所有路由器最终知道到达本____系统内任何网络的____距离和____路由器地址

> **pro：封装RIP报文所采用的协议（2017）**

<div>
<details>
  <summary> </summary>
  <ul>
    <li>距离</li>
    <li>1</li>
    <li>相邻</li>
    <li>路由</li>
    <li>自治</li>
    <li>最短</li>
    <li>下一跳</li>
  </ul>
</details>
</div>

##### 协议特性

- 传输层协议
  - RIP是____层协议，使用____传送数据（端口____）
- 路径选择
  - RIP选择的路径不一定是____最短的
  - 一定是具有最少的____跳数

<div>
<details>
  <summary> </summary>
  <ul>
    <li>应用</li>
    <li>UDP</li>
    <li>520</li>
    <li>时间</li>
    <li>路由</li>
  </ul>
</details>
</div>

---

#### RIP的距离向量算法

- 对每个相邻路由器发送来的____报文，执行如下步骤：

##### 步骤1：报文修改

- 对地址为 $X$ 的相邻路由器发来的RIP报文，先修改此报文中的所有项目：
  - 把"____"字段中的地址都改为 $X$
  - 并把所有"____"字段的值加____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>RIP</li>
    <li>下一跳</li>
    <li>距离</li>
    <li>1</li>
  </ul>
</details>
</div>

##### 步骤2：项目处理

- 对修改后的RIP报文中的每个项目，执行如下步骤：
  - IF（若原来的路由表中没有____ $N$) 则把该项目____到路由表中（表明这是新的____网络）
  - ELSEIF（若原来的路由表中有____ $N$ ，且下一跳路由器的地址是 $X)$ 用收到的项目____原路由表中的项目（因为要以更新的消息为准）
  - ELSEIF（若原来的路由表中有____ $N$ ，且下一跳路由器的地址不是 $X)$ 若收到的项目中的____ $d$ 小于路由表中的____，则进行____
  - ELSE什么也不做

<div>
<details>
  <summary> </summary>
  <ul>
    <li>目的网络</li>
    <li>添加</li>
    <li>目的</li>
    <li>目的网络</li>
    <li>替换</li>
    <li>目的网络</li>
    <li>距离</li>
    <li>距离</li>
    <li>更新</li>
  </ul>
</details>
</div>

##### 步骤3：超时处理

- 若____秒（RIP默认____时间）还没有收到相邻路由器的更新路由表，则把此相邻路由器记为____的路由器，即把____设置为____（____为16表示不可达）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>180</li>
    <li>超时</li>
    <li>不可达</li>
    <li>距离</li>
    <li>16</li>
    <li>距离</li>
  </ul>
</details>
</div>

##### 步骤4：返回

- 举例说明RIP路由条目的更新过程：
  - 已知路由器R6和R4互为____路由器，表4.4(a)所示为R6的____，现在收到相邻路由器R4发来的路由____信息，如表4.4(b)所示
- 更新R6的路由表过程：
  - 先把 $\mathrm{R_{4}}$ 发来的路由表［表4.4(b)]中各项的____都加1，并把____路由器都改为R4，得到表4.5(a)
  - 将这个表的每行与R6的____[表4.4(a)］进行比较：
    - 第一行的Netl在表4.4(a)中没有，thus要把这一行____到表4.4(a)中
    - 第二行的Net2在表4.4(a)中有，且____路由器也是R4，thus要____（距离增大了）
    - 第三行的Net3在表4.4(a)中有，但____路由器不同。于是需要比较____。新的路由信息的____是2，小于原表中的4，thus要____
  - 这样，得出更新后的R6的路由表如表4.5(b)所示

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相邻</li>
    <li>路由表</li>
    <li>更新</li>
    <li>距离</li>
    <li>下一跳</li>
    <li>路由表</li>
    <li>添加</li>
    <li>下一跳</li>
    <li>更新</li>
    <li>下一跳</li>
    <li>距离</li>
    <li>距离</li>
    <li>更新</li>
  </ul>
</details>
</div>

---

#### RIP的优缺点

##### RIP的优点：

- 实现____、开销____、收敛过程较____
- 若一个路由器发现了更短的____，则这种更新信息就传播得很快，在较短时间内便可被传至所有路由器，俗称"____传播得快"

<div>
<details>
  <summary> </summary>
  <ul>
    <li>简单</li>
    <li>小</li>
    <li>快</li>
    <li>路由</li>
    <li>好消息</li>
  </ul>
</details>
</div>

##### RIP的缺点：

- RIP限制了网络的____，它能使用的最大____为____（16表示____）
- 路由器之间交换的是路由器中的____路由表，thus网络规模越大，____也越大
- 当网络出现____时，路由器之间需反复多次交换信息才能完成____，要经过较长时间才能将故障消息传送到所有路由器（即慢____现象），俗称"____传播得慢"

<div>
<details>
  <summary> </summary>
  <ul>
    <li>规模</li>
    <li>距离</li>
    <li>15</li>
    <li>不可达</li>
    <li>完整</li>
    <li>开销</li>
    <li>故障</li>
    <li>收敛</li>
    <li>收敛</li>
    <li>坏消息</li>
  </ul>
</details>
</div>

##### RIP"好消息传播得快，坏消息传播得慢"的特点举例

###### 好消息传播快的情况：

- 在图4.16(a)中：
  - 某时刻R1的某个端口检测到"到 $N$ ____的链路"（____由4变为1）
  - R1计算其到 $N$ 的最新____ = $\min\{1, 1+R2到N的距离\} = \min\{1, 1+5\} = 1$，并通知____
  - R2收到后，更新其到 $N$ 的____为2，并通知____
  - R1收到后，R1到 $N$ 的最短____未变，不再发送通知，算法进入____状态
- 可见，R2到 $N$ 的____减少的好消息通过RIP得到了迅速____

> **pro：RIP"坏消息传播得慢"的分析（2016）**

<div>
<details>
  <summary> </summary>
  <ul>
    <li>更短</li>
    <li>距离</li>
    <li>距离</li>
    <li>邻居</li>
    <li>距离</li>
    <li>邻居</li>
    <li>距离</li>
    <li>静止</li>
    <li>距离</li>
    <li>传播</li>
  </ul>
</details>
</div>

###### 坏消息传播慢的情况：

- 在图4.16（b)中：
  - 某时刻R1的某个端口检测到" $^{\circ}N$ ____"（即____变为16）
  - R1计算其到 $N$ 的最新____ = $\min\{16, 1+R2到N的距离\} = \min\{16, 1+5\} = 6$
  - 从网络全局的视角可以看出，经过R2的这个新____显然是____的
  - R1算出到 $N$ 的最新____后，通知____
  - R2收到后，更新其到 $N$ 的____为7，通知____
  - R1收到后，计算其到 $N$ 的____= $\min\{16, 1+R2到N的距离\} = \min\{16, 1+7\} = 8$，继续通知____
  - 如此循环，直到R2最终算出它经由R1到达 $N$ 的____为16为止
- 可见，RIP关于链路____或____增加的坏消息传播得很____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不可达</li>
    <li>距离</li>
    <li>距离</li>
    <li>距离</li>
    <li>错误</li>
    <li>距离</li>
    <li>邻居</li>
    <li>距离</li>
    <li>邻居</li>
    <li>距离</li>
    <li>故障</li>
    <li>距离</li>
    <li>慢</li>
  </ul>
</details>
</div>

---

### 开放最短路径优先Open shortest path first（OSPF）协议

#### OSPF协议的基本特点

- OSPF与RIP相比有以下4点主要区别：
  - OSPF向本____系统中所有路由器发送信息。这里使用的方法是____法。而RIP仅仅向自己____的几个路由器发送信息。
  - 发送的信息是与本路由器____的所有路由器的____状态，但这只是路由器所知道的____信息。而在RIP中，发送的信息是本路由器所知道的____信息，即整个____。
  - 只有当____状态发生变化时，路由器才用____法向所有路由器发送此信息，并且更新过程____得快，不会出现RIP"____传得慢"的问题。而在RIP中，不管网络____是否发生变化，路由器之间都要定期交换____的信息。

> **pro：封装OSPF报文所采用的协议（2017）**

- OSPF是____层协议，它不用____或____，而直接用____数据报传送（其IP数据报首部的____字段为____）。而RIP是____层协议，它在传输层使用____。

> **attention:**

- 用UDP传送是指将该信息作为____报文的数据部分，而直接使用IP数据报传送是指将该信息直接作为____数据报的数据部分。RIP报文是作为____数据报的数据部分。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自治</li>
    <li>洪泛</li>
    <li>相邻</li>
    <li>相邻</li>
    <li>链路</li>
    <li>部分</li>
    <li>全部</li>
    <li>路由表</li>
    <li>链路</li>
    <li>洪泛</li>
    <li>收敛</li>
    <li>坏消息</li>
    <li>拓扑</li>
    <li>路由表</li>
    <li>网络</li>
    <li>UDP</li>
    <li>TCP</li>
    <li>IP</li>
    <li>协议</li>
    <li>89</li>
    <li>应用</li>
    <li>UDP</li>
    <li>UDP</li>
    <li>IP</li>
    <li>UDP</li>
  </ul>
</details>
</div>

##### OSPF的其他特点

- OSPF允许对每条路由设置成不同的____，对于不同类型的业务可计算出不同的____。
- 若到同一个目的网络有多条相同____的路径，则可将____量分配给这几条路径。
- OSPF分组具有____功能，从而保证仅在____的路由器之间交换链路状态信息。
- OSPF支持____长度的子网划分和____编址CIDR。
- 每个链路状态都带上一个____位的序号，序号越大，状态就越____。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>代价</li>
    <li>路由</li>
    <li>代价</li>
    <li>通信</li>
    <li>鉴别</li>
    <li>可信赖</li>
    <li>可变</li>
    <li>无分类</li>
    <li>32</li>
    <li>新</li>
  </ul>
</details>
</div>

---

#### OSPF的基本工作原理

- 基本流程：
  - 各路由器之间频繁地交换____状态信息
  - 所有路由器最终都能建立一个____状态数据库，即全网的____结构图
  - 每个路由器利用____状态数据库中的数据，使用____算法计算自己到达各自的网络的____路径，构造出自己的____表
  - 当____状态发生变化时，每个路由器重新计算到达各目的网络的____路径，构造出新的____表

> **attention:**

- 虽然使用Dijkstra算法能计算出完整的____路径，但路由表中不会存储完整路径，而只存储"____"（只有到了下一跳路由器，才能知道再下一跳应当怎样走）。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>链路</li>
    <li>链路</li>
    <li>拓扑</li>
    <li>链路</li>
    <li>Dijkstra</li>
    <li>最优</li>
    <li>路由</li>
    <li>链路</li>
    <li>最优</li>
    <li>路由</li>
    <li>最优</li>
    <li>下一跳</li>
  </ul>
</details>
</div>

##### OSPF的区域划分

- 为了使OSPF能够用于规模很大的网络，OSPF将一个____系统再划分为若干更小的范围，称为____
- 划分____的好处是，将利用____法交换链路状态信息的范围局限在每个____而非整个____系统，从而减少了整个网络上的____量

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自治</li>
    <li>区域</li>
    <li>区域</li>
    <li>洪泛</li>
    <li>区域</li>
    <li>自治</li>
    <li>通信</li>
  </ul>
</details>
</div>

---

#### OSPF的五种分组类型

- ____分组：用来发现和维持邻站的____性
- ____分组：向邻站给出自己的____状态数据库中的所有____状态项目的摘要信息
- ____分组：向对方请求发送某些____状态项目的详细信息
- ____分组：用____法对全网更新____状态，它是OSPF最____的部分
- ____分组：对____更新分组的确认

##### OSPF分组的传送机制

- 问候分组的传送：
  - 在网络中通常传送的OSPF分组大多是____分组
  - 两个相邻路由器通常每隔____秒要交换一次____分组，以便知道哪些站____
  - 若有____秒没有收到某个相邻路由器发来的____分组，则认为该相邻路由器____，应立即修改____状态数据库，并重新计算____表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>问候</li>
    <li>可达</li>
    <li>数据库描述</li>
    <li>链路</li>
    <li>链路状态请求</li>
    <li>链路</li>
    <li>链路状态更新</li>
    <li>洪泛</li>
    <li>链路</li>
    <li>核心</li>
    <li>链路状态确认</li>
    <li>链路</li>
    <li>问候</li>
    <li>10</li>
    <li>问候</li>
    <li>可达</li>
    <li>40</li>
    <li>问候</li>
    <li>不可达</li>
    <li>链路</li>
    <li>路由</li>
  </ul>
</details>
</div>

##### OSPF的初始化过程

- 路由器刚开始工作时：
  - OSPF让每个路由器使用____分组和相邻路由器交换本数据库中已有的____状态摘要信息
  - 然后，路由器使用____分组，向对方请求发送自己所缺少的某些____状态项目的详细信息
  - 经过一系列的这种分组交换，就建立了全网____的链路数据库

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据库描述</li>
    <li>链路</li>
    <li>链路状态请求</li>
    <li>链路</li>
    <li>同步</li>
  </ul>
</details>
</div>

##### OSPF的运行维护

- 链路状态更新：
  - 只要一个路由器的____状态发生变化，该路由器就要使用____分组，用____法向全网更新____状态
  - 其他路由器在收到更新分组后要发送____
- 数据库刷新：
  - 为了确保____状态数据库与全网的状态保持____，OSPF还规定每隔一段时间（如____分钟）要刷新一次数据库中的____状态
  - 因为一个路由器的____状态只涉及与____路由器的连通状态，与整个网络的____并无直接关系，thus 当互联网规模很大时，OSPF要比RIP好得多

<div>
<details>
  <summary> </summary>
  <ul>
    <li>链路</li>
    <li>链路状态更新</li>
    <li>洪泛</li>
    <li>链路</li>
    <li>确认</li>
    <li>链路</li>
    <li>一致</li>
    <li>30</li>
    <li>链路</li>
    <li>链路</li>
    <li>相邻</li>
    <li>规模</li>
  </ul>
</details>
</div>

---

### 边界网关Boundary gateway协议（BGP）

> **pro：BGP的作用（2013）**

#### BGP的基本概念

- ____网关协议（Border Gateway Protocol，BGP）AS信息的协议，是一种____网关协议
- ____网关协议BGP常用于互联网的____之间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>边界</li>
    <li>外部</li>
    <li>边界</li>
    <li>网关</li>
  </ul>
</details>
</div>

#### BGP的环境特点

- 内部网关协议主要是设法使数据报在一个AS中尽可能____地从源站传送到目的站
- 在一个AS内部也不需要考虑其他方面的____
- 然而BGP使用的环境却不同，主要原因如下：
  - 互联网的____太大，使得AS之间____选择非常困难，每个主干网路由器表中的项目数都非常庞大
  - AS之间的____选择必须考虑____、____或____等有关因素

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有效</li>
    <li>策略</li>
    <li>规模</li>
    <li>路由</li>
    <li>路由</li>
    <li>政治</li>
    <li>安全</li>
    <li>经济</li>
  </ul>
</details>
</div>

#### BGP的工作原理

##### BGP的基本特征

- BGP只能是力求寻找一条能够到达目的网络且比较好的____（不能兜圈子），而并非要寻找一条____路由
- BGP采用的是____向量路由选择协议，它与____向量协议（如RIP）和____状态协议（如OSPF）都有很大的区别
- BGP是____层协议，它是基于____的

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由</li>
    <li>最佳</li>
    <li>路径</li>
    <li>距离</li>
    <li>链路</li>
    <li>应用</li>
    <li>TCP</li>
  </ul>
</details>
</div>

##### BGP的运行过程

1. 配置BGP时，每个AS的管理员要选择至少一个路由器，作为该AS的"____"BGP发言人往往就是BGP____路由器

> **pro：封装BGP报文所采用的协议（2013、2017）**

2. 一个BGP发言人与其他AS中的BGP发言人要交换____信息：
   - 先建立____连接
   - 然后在此连接上交换____报文以建立____会话
   - 再利用____会话交换____信息
   - 使用____连接交换路由信息的两个BGP发言人，彼此成为对方的____或____
   - 每个BGP发言人除了必须运行____外，还必须运行该AS所用的____网关协议，如____或____

3. BGP所交换的网络____信息：
   - 就是要到达某个网络所要经过的一系列____
   - 当BGP发言人互相交换网络____的信息后，各BGP发言人就根据所用的____，从收到的____信息中找出到达各____的较好路由

<div>
<details>
  <summary> </summary>
  <ul>
    <li>BGP发言人</li>
    <li>边界</li>
    <li>路由</li>
    <li>TCP</li>
    <li>BGP</li>
    <li>BGP</li>
    <li>路由</li>
    <li>TCP</li>
    <li>邻站</li>
    <li>对等站</li>
    <li>BGP</li>
    <li>内部</li>
    <li>OSPF</li>
    <li>RIP</li>
    <li>可达性</li>
    <li>自治系统</li>
    <li>可达性</li>
    <li>策略</li>
    <li>路由</li>
    <li>自治系统</li>
  </ul>
</details>
</div>

#### BGP的特点

- BGP交换路由信息的结点数量级是____个数的数量级，这要比这些AS中的____数少很多
- 寻找一条较好的____，取决于找准正确的____，而每个AS中BGP____（或边界路由器）的数目是很少的。这样就使得AS之间的____选择不致过分复杂
- BGP支持____，thusBGP的路由表也就应当包括____网络前缀、____路由器，以及
- 当BGP刚运行时，BGP的____交换整个BGP____表。但以后只需要在发生变化时更新有变化的部分。这样做对节省网络____和减少路由器的____开销方面都有好处

<div>
<details>
  <summary> </summary>
  <ul>
    <li>AS</li>
    <li>网络</li>
    <li>路径</li>
    <li>BGP发言人</li>
    <li>发言人</li>
    <li>路由</li>
    <li>CIDR</li>
    <li>目的</li>
    <li>下一跳</li>
    <li>邻站</li>
    <li>路由</li>
    <li>带宽</li>
    <li>处理</li>
  </ul>
</details>
</div>

#### BGP的报文类型

- BGP-4共使用4种报文：
  - ____报文：用来与相邻的另一个BGP发言人建立关系，使通信____
  - ____报文：用来通知某一路由的信息，以及列出要____的多条路由
  - ____报文：用来周期性地证实____的连通性
  - ____报文：用来发送检测到的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>打开（Open）</li>
    <li>初始化</li>
    <li>更新（Update）</li>
    <li>撤销</li>
    <li>保活（Keepalive）</li>
    <li>邻站</li>
    <li>通知（Notification）</li>
    <li>差错</li>
  </ul>
</details>
</div>

#### BGP的通信过程

- 建立邻站关系：
  - BGP发言人向对方发送____报文
  - 对方接受则用____报文响应
- 维持邻站关系：
  - 两个BGP发言人彼此要周期性地交换____报文（一般每隔____秒）
  - ____报文只有____B，thus不会造成网络上太大的____
- 路由更新：
  - ____报文是BGP的核心内容
  - BGP发言人可以用____报文撤销它曾经通知过的路由，也可以宣布增加新的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>打开（Open）</li>
    <li>保活（Keepalive）</li>
    <li>保活（Keepalive）</li>
    <li>30</li>
    <li>保活（Keepalive）</li>
    <li>19</li>
    <li>开销</li>
    <li>更新（Update）</li>
    <li>更新（Update）</li>
    <li>路由</li>
  </ul>
</details>
</div>

---

## IP<span style="color: orange;">多<span style="color:green;">播

### 概念

#### 定义

- 多播:
  - 让源主机一次发送的单个____可以抵达用一个____地址标识的若干目的主机
    - 即**____**的通信
- 在互联网上进行的多播 ← ____多播

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分组</li>
    <li>组</li>
    <li>一对多</li>
    <li>IP</li>
  </ul>
</details>
</div>

#### <span style="color: orange;">多</span><span style="color:green;">播</span>与<span style="color:darkviolet;">单</span>播的比较

##### 资源效率

- 与____相比，在一对多的通信中，多播可大大节约____资源
- 示例：视频服务器向90台主机传送同样的视频节目时的对比
  - 多播时仅发送____数据，并且只需发送____次
  - 只有在传送路径出现____时才将分组____后继续转发
  - 因此大大减轻了____的负担和网络的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>单播</li>
    <li>网络</li>
    <li>一份</li>
    <li>一次</li>
    <li>分岔</li>
    <li>复制</li>
    <li>发送者</li>
    <li>负载</li>
  </ul>
</details>
</div>

##### 实现要求

- 多播需要____的支持才能实现
- 能够运行多播协议的路由器称为____路由器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由器</li>
    <li>多播</li>
  </ul>
</details>
</div>

---

### IP多播<span style="color:lightblue;">地址

#### D类地址范围与多播组

- 多播数据报的____地址是源主机的IP地址，____地址是IP多播地址
- IP多播地址就是IPv4中的____类地址
  - D类地址的前四位是____
  - D类地址范围是 $____{\sim}____$
- 每个D类IP地址标志一个____组，一台主机可以随时____或____一个多播组

<div>
<details>
  <summary> </summary>
  <ul>
    <li>源</li>
    <li>目的</li>
    <li>D</li>
    <li>1110</li>
    <li>224.0.0.0</li>
    <li>239.255.255.255</li>
    <li>多播</li>
    <li>加入</li>
    <li>离开</li>
  </ul>
</details>
</div>

#### 多播数据报特点

- 多播数据报和一般的IP数据报的区别：
  - 前者使用____类IP地址作为____地址
  - 首部中的____字段值是____，表明使用____协议
- 需要注意的是：
  1）多播数据报也是"____交付"，不提供____交付。
  2）多播地址只能用于____地址，而不能用于____地址。
  3）对多播数据报不产生____差错报文。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>D</li>
    <li>目的</li>
    <li>协议</li>
    <li>2</li>
    <li>IGMP</li>
    <li>尽最大努力</li>
    <li>可靠</li>
    <li>目的</li>
    <li>源</li>
    <li>ICMP</li>
  </ul>
</details>
</div>

#### IP多播分类与应用

- IP多播可以分为两种：
  - ① 只在本____网上进行____多播
  - $\circledcirc$ 在____的范围内进行多播
- 目前大部分主机都是通过____网接入互联网的
  - 在互联网上进行多播的最后阶段，还是要把多播数据报在____网上用____多播交付给多播组的所有成员
- 多播机制仅应用于____，它能将报文同时发送给多个____
- ____是一个面向连接的协议，它意味着分别运行在两台主机的进程之间存在一条____，thus会____地发送

<div>
<details>
  <summary> </summary>
  <ul>
    <li>局域</li>
    <li>硬件</li>
    <li>互联网</li>
    <li>局域</li>
    <li>局域</li>
    <li>硬件</li>
    <li>UDP</li>
    <li>接收者</li>
    <li>TCP</li>
    <li>连接</li>
    <li>一对一</li>
  </ul>
</details>
</div>

---

### 在局域网上进行硬件多播

#### 多播地址映射过程

- 因为局域网支持____多播，thus只要把IP多播地址映射成____MAC地址
- 即可将IP多播数据报封装在____网的MAC帧中
- MAC帧首部的____MAC地址字段就设置为由IP多播地址映射成的____MAC地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>硬件</li>
    <li>多播</li>
    <li>局域</li>
    <li>目的</li>
    <li>多播</li>
  </ul>
</details>
</div>

#### 以太网多播地址范围

- IANA拥有的以太网多播地址的范围是从____到____
- 在这些地址中：
  - 只有____位可用作多播
  - 这只能和D类IP地址中的____位有一一对应关系
  - D类IP地址可供分配的有____位，可见在这____位中前____位无法映射到多播MAC地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>01-00-5E-00-00-00</li>
    <li>01-00-5E-7F-FF-FF</li>
    <li>23</li>
    <li>23</li>
    <li>28</li>
    <li>28</li>
    <li>5</li>
  </ul>
</details>
</div>

#### 地址映射示例与过滤

- IP多播地址____（即E0-80-40-20）和另一个IP多播地址____（即E0-00-40-20）转换成以太网的硬件多播地址都是____
- 因为多播IP地址与以太网MAC地址的映射关系不是____的，thus收到多播数据报的主机，还要在____层利用软件进行____，把不是本主机要接收的数据报____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>224.128.64.32</li>
    <li>224.0.64.32</li>
    <li>01-00-5E-00-40-20</li>
    <li>唯一</li>
    <li>IP</li>
    <li>过滤</li>
    <li>丢弃</li>
  </ul>
</details>
</div>

---

### IGMP与多播路由协议

#### IGMP概述

- 路由器要获得多播组的____信息，需要利用____组管理协议（InternetGroupManagementProtocol，IGMP)
- 连接到____网上的多播路由器还必须和互联网上的其他____路由器协同工作
  - 以便把多播数据报用____代价传送给所有____成员
  - 这就需要使用____路由选择协议

<div>
<details>
  <summary> </summary>
  <ul>
    <li>成员</li>
    <li>网际</li>
    <li>局域</li>
    <li>多播</li>
    <li>最小</li>
    <li>组</li>
    <li>多播</li>
  </ul>
</details>
</div>

#### IGMP特点

- IGMP是让连接到本地____网上的多播路由器，知道本____网上是否有主机____或____了某个多播组
- IGMP并不是在____范围内对所有多播组成员进行管理的协议
- IGMP不知道：
  - IP多播组包含的____数
  - 这些成员分布在哪些____上

<div>
<details>
  <summary> </summary>
  <ul>
    <li>局域</li>
    <li>局域</li>
    <li>参加</li>
    <li>退出</li>
    <li>互联网</li>
    <li>成员</li>
    <li>网络</li>
  </ul>
</details>
</div>

#### IGMP工作机制

- IGMP报文被封装在____数据报中传送，但它也向____提供服务
- thus不把IGMP视为一个单独的协议，而视为整个____协议IP的一个组成部分
- IGMP的工作可分为两个阶段：

##### 第一阶段

- 当某台主机加入新的____组时：
  - 该主机应向多播组的____地址发送一个____报文，声明自己要成为该组的____
  - 本地的____路由器收到____报文后，还要利用____路由选择协议，把这种____关系转发给互联网上的其他____路由器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>IP</li>
    <li>IP</li>
    <li>网际</li>
    <li>多播</li>
    <li>多播</li>
    <li>IGMP</li>
    <li>成员</li>
    <li>多播</li>
    <li>IGMP</li>
    <li>多播</li>
    <li>组成员</li>
    <li>多播</li>
  </ul>
</details>
</div>

##### 第二阶段

- 组成员关系是____的
- 本地多播路由器要周期性地____本地____网上的主机，以便知道这些主机是否仍继续是____的成员
- 只要对某个组有一台主机____，多播路由器就认为这个组是____的
- 但一个组在经过几次____后仍然没有一台主机____：
  - 多播路由器就认为本网络上的主机都已____了这个组
  - thus就不再把这个组的____关系转发给其他的____路由器

<div>
<details>
  <summary> </summary>
  <ul>
    <li>动态</li>
    <li>探询</li>
    <li>局域</li>
    <li>组</li>
    <li>响应</li>
    <li>活跃</li>
    <li>探询</li>
    <li>响应</li>
    <li>离开</li>
    <li>成员</li>
    <li>多播</li>
  </ul>
</details>
</div>

#### 多播路由选择

- 多播路由选择实际上就是要找出以____主机为根结点的____转发树
  - 其中每个分组在每条____上只传送____次
  - 即在多播转发树上的路由器不会收到____的多播数据报
- 不同的____组对应于不同的____转发树
- 同一个多播组，对不同的____点也会有不同的____转发树

<div>
<details>
  <summary> </summary>
  <ul>
    <li>源</li>
    <li>多播</li>
    <li>链路</li>
    <li>一次</li>
    <li>重复</li>
    <li>多播</li>
    <li>多播</li>
    <li>源</li>
    <li>多播</li>
  </ul>
</details>
</div>

---

## <span style="color: DeepSkyBlue;">移动</span>IP

### 概念

- 指
  - 移动站**以固定的____地址**实现 <span style="color:green;">____</span> 不同网络的漫游功能，并保证基于IP的网络____在漫游过程中**不发生任何____**。
    - 目标：把____自动地投递给移动站。
      - 一个移动站是把其____点从一个网络或子网改变到另一个网络或子网的主机。
- 定义了**三种____实体**：____结点、____代理（也称归属代理）和____代理。
  - 1）移动结点
    - 具有____IP地址的移动主机
  - 2）本地代理
    - 通常就是连接在____网络（原始连接到的网络）上的路由器
  - 3）外地代理
    - 通常就是连接在____网络（移动到另一地点所接入的网络）上的路由器
- 值得注意的是，某用户将笔记本关机后从家里带到办公室重新上网，在办公室能很方便地通过____自动获取新的IP地址。
  - 虽然笔记本移动了，更换了地点及所接入的网络，但这并不是____IP。
  - 但是，若我们需要在移动中进行____传输，则在移动站漫游时，应一直保持这个____连接，否则移动站的____连接就会断断续续。
  - 可见，若要使移动站在移动中的____连接不中断，就必须使笔记本的____地址在移动中保持____。
    - 这就是____IP要研究的问题。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>IP</li>
    <li>跨越</li>
    <li>权限</li>
    <li>改变</li>
    <li>分组</li>
    <li>连接</li>
    <li>功能</li>
    <li>移动</li>
    <li>本地</li>
    <li>外地</li>
    <li>永久</li>
    <li>归属</li>
    <li>被访</li>
    <li>DHCP</li>
    <li>移动</li>
    <li>TCP</li>
    <li>TCP</li>
    <li>TCP</li>
    <li>TCP</li>
    <li>IP</li>
    <li>不变</li>
    <li>移动</li>
  </ul>
</details>
</div>

---

### 通信过程

#### 通俗例子

- 本科毕业时都将走向各自的工作岗位
  - 事先并不知道自己未来的准确____地址
  - 解决方案：彼此留下各自的____地址（即____地址）
  - 毕业后若要和某同学联系
    - 只要写信寄到该同学的____地址
    - 再请其家长把信件____即可

<div>
<details>
  <summary> </summary>
  <ul>
    <li>通讯</li>
    <li>家庭</li>
    <li>永久</li>
    <li>永久</li>
    <li>转交</li>
  </ul>
</details>
</div>

#### 基本概念

- 每个移动站都有一个____地址
  - 即____地址（或归属地址）
  - 移动站原始连接的网络称为____网络
  - ____地址和____网络的关联是不变的
- 在图4.22中
  - 移动站A的____地址是____
  - 其____网络是____
- ____代理
  - 通常是连接到____网络上的路由器
  - 代理功能是在____层完成的
- ____网络
  - 移动站移动到另一地点所接入的____网络
  - 在图4.22中，移动站A被移动到____网络____
- ____代理
  - 通常是连接在____网络上的路由器
  - 两个重要功能
    - 为移动站创建一个____地址，称为____地址
    - 及时把移动站的____地址告诉其____代理

> **attention:**

____地址是供移动站、____代理及____代理使用的，各种应用程序都不会使用。____代理要向连接在____网络上的移动站发送IP分组时，直接使用移动站的____地址。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原始</li>
    <li>永久</li>
    <li>归属</li>
    <li>永久</li>
    <li>归属</li>
    <li>永久</li>
    <li>131.8.6.7/16</li>
    <li>归属</li>
    <li>131.8.0.0/16</li>
    <li>归属</li>
    <li>归属</li>
    <li>应用</li>
    <li>被访</li>
    <li>外地</li>
    <li>被访</li>
    <li>15.0.0.0/8</li>
    <li>外地</li>
    <li>被访</li>
    <li>临时</li>
    <li>转交</li>
    <li>转交</li>
    <li>归属</li>
    <li>转交</li>
    <li>归属</li>
    <li>外地</li>
    <li>外地</li>
    <li>被访</li>
    <li>MAC</li>
  </ul>
</details>
</div>

#### 基本通信流程

- 通信者B要和移动站A进行通信
  - B并不知道A在什么地方
  - B使用A的____地址作为发送的IP分组中的____地址
- 具体流程
  1. 移动站A在____网络时，按传统的____方式进行通信
  2. 移动站A漫游到____网络时
     - 向____代理进行登记，以获得一个临时的____地址
     - ____代理要向A的____代理登记A的____地址
  3. ____代理知道移动站A的____地址后
     - 会构建一条通向____地址的____
     - 将截获的发送给A的IP分组进行____
     - 通过____发送给____网络的____代理
  4. ____代理处理
     - 把收到的封装的IP分组进行____
     - 恢复成____的IP分组
     - 发送给移动站A
  5. 移动站A在____网络对外发送IP分组时
     - 仍然使用自己的____地址作为IP分组的____地址
     - 无须通过A的____代理来转发
     - 直接通过____网络的____代理
  6. 移动站A移动到另一____网络时
     - 在新____代理登记
     - 新____代理将A的新____地址告诉其____代理
     - 无论如何移动，A收到的IP分组都是由____代理转发的
  7. 移动站A回到____网络时，A向____代理注销____地址

<div>
<details>
  <summary> </summary>
  <ul>
    <li>永久</li>
    <li>目的</li>
    <li>归属</li>
    <li>TCP/IP</li>
    <li>被访</li>
    <li>外地</li>
    <li>转交</li>
    <li>外地</li>
    <li>归属</li>
    <li>转交</li>
    <li>归属</li>
    <li>转交</li>
    <li>隧道</li>
    <li>再封装</li>
    <li>隧道</li>
    <li>被访</li>
    <li>外地</li>
    <li>外地</li>
    <li>拆封</li>
    <li>原始</li>
    <li>被访</li>
    <li>永久</li>
    <li>源</li>
    <li>归属</li>
    <li>被访</li>
    <li>外地</li>
    <li>被访</li>
    <li>外地</li>
    <li>外地</li>
    <li>转交</li>
    <li>归属</li>
    <li>归属</li>
    <li>归属</li>
    <li>归属</li>
    <li>转交</li>
  </ul>
</details>
</div>

#### 新增网络层功能

- 移动站到____代理的____协议
- ____代理到____代理的____协议
- ____代理数据报____协议
- ____代理____协议

<div>
<details>
  <summary> </summary>
  <ul>
    <li>外地</li>
    <li>登记</li>
    <li>外地</li>
    <li>归属</li>
    <li>登记</li>
    <li>归属</li>
    <li>封装</li>
    <li>外地</li>
    <li>拆封</li>
  </ul>
</details>
</div>

---

## 网络层设备

### 冲突域和广播域

>pro：各种中继设备对冲突域/广播域的划分（2010、2020）

"域"express 冲突or广播in which发生并传播的____

#### 冲突域

- 连接到同一____介质上的所有结点的集合，这些结点之间存在____争用的现象。
- OSI参考模型中，冲突域被视为第____层的概念
  - 像____、____等简单无脑复制转发信号的第____层设备所连接的结点都属于同一个____域
  - 也就是说它们不能划分____域
  - 而第____层（网桥、交换机）、第____层（路由器）设备都可以划分____域

<div>
<details>
  <summary> </summary>
  <ul>
    <li>区域</li>
    <li>物理</li>
    <li>介质</li>
    <li>1</li>
    <li>集线器</li>
    <li>中继器</li>
    <li>1</li>
    <li>冲突</li>
    <li>冲突</li>
    <li>2</li>
    <li>3</li>
    <li>冲突</li>
  </ul>
</details>
</div>

#### 广播域

- 广播域是指接收同样____消息的结点集合
  - 也就是说，在该集合中的任何一个结点发送一个____帧，其他能收到这个帧的结点都被认为是该____域的一部分
- 在OSI参考模型中，广播域被视为第____层的概念
  - 像第____层（集线器等）、第____层（交换机等）设备所连接的结点都属于同一个____域
  - 而____，作为第____层设备，则可以划分____域，即可以连接不同的____域
- 通常所说的____网（LAN）特指使用____分割的网络，也就是____域

<div>
<details>
  <summary> </summary>
  <ul>
    <li>广播</li>
    <li>广播</li>
    <li>广播</li>
    <li>2</li>
    <li>1</li>
    <li>2</li>
    <li>广播</li>
    <li>路由器</li>
    <li>3</li>
    <li>广播</li>
    <li>广播</li>
    <li>局域</li>
    <li>路由器</li>
    <li>广播</li>
  </ul>
</details>
</div>

---

### 路由器的组成和功能

>  pro：路由器的功能（2010）

#### 路由器基本概念

- 路由器是一种具有多个____/____端口的专用计算机
  - 其任务是连接不同的____（连接____网络）并完成____转发
  - 在多个____网络（即多个____域）互连时必须使用____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>输入</li>
    <li>输出</li>
    <li>网络</li>
    <li>异构</li>
    <li>分组</li>
    <li>逻辑</li>
    <li>广播</li>
    <li>路由器</li>
  </ul>
</details>
</div>

#### 数据传输过程

- 当源主机向目标主机发送____时
  - 路由器先检查____主机与____主机是否连接在同一个____上
  - 若源主机和目标主机在同一个网络上，则____交付而无须通过____
  - 若源主机和目标主机不在同一个网络上
    - 则路由器按照____（由____表得出）指出的路由将____转发给下一个____，这称为____交付
- 在同一个网络中传递数据无须____的参与，而跨网络通信必须通过____进行转发
  - 例如，路由器可以连接不同的____，连接不同的____，连接不同的____，或者把____和____互连起来
  - 路由器隔离了____域

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据报</li>
    <li>源</li>
    <li>目标</li>
    <li>网络</li>
    <li>直接</li>
    <li>路由器</li>
    <li>转发表</li>
    <li>路由</li>
    <li>分组</li>
    <li>路由器</li>
    <li>间接</li>
    <li>路由器</li>
    <li>路由器</li>
    <li>LAN</li>
    <li>VLAN</li>
    <li>WAN</li>
    <li>LAN</li>
    <li>WAN</li>
    <li>广播</li>
  </ul>
</details>
</div>

#### 路由器结构

- 从结构上看，路由器由____选择和____转发两部分构成
- 从模型的角度看，路由器是____层设备，它实现了网络模型的下____层，即____层、____层和____层

> **attention:**

若一个存储转发设备实现了某个层次的功能，则它可以互连两个在该层次上使用不同____的网段（网络）。若网桥实现了____层和____层，则网桥可以互连两个____层和____层不同的网段；但中继器实现了____层后，却不能互连两个____层不同的网段，这是因为中继器不是____转发设备，它属于____式设备。

##### 路由选择部分

- 也称____部分，核心构件是____选择处理机
- 其任务是
  - 根据所选定的____选择协议构造出____表
  - 同时经常或定期地和____路由器交换____信息而不断更新和维护____表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由</li>
    <li>分组</li>
    <li>网络</li>
    <li>三</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>网络</li>
    <li>协议</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>物理</li>
    <li>物理</li>
    <li>存储</li>
    <li>直通</li>
    <li>控制</li>
    <li>路由</li>
    <li>路由</li>
    <li>路由</li>
    <li>相邻</li>
    <li>路由</li>
    <li>路由</li>
  </ul>
</details>
</div>

##### 分组转发部分

- 由三部分构成：
  - ____结构
    - 也称____组织
    - 其作用是根据____表对分组进行处理，将某个____端口进入的分组从一个合适的____端口转发出去
    - ____结构本身就是一个"在路由器中的____"
  - 一组____端口
  - 一组____端口
- 路由器的端口特点
  - 都有____层、____层和____层的处理模块
  - 输入端口处理流程
    - 在____层接收比特流
    - 在____层提取出帧
    - 剥去帧的____和____后，分组就被送入____层的处理模块
  - ____端口执行相反的操作
  - 端口在____层的处理模块中都设有一个____队列
    - 用来暂存等待处理或已处理完毕待发送的____
    - 还可用来进行必要的____检测
    - 若分组处理的____赶不上分组进入队列的____，就会使后面进入队列的分组因____满而只能被____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>交换</li>
    <li>交换</li>
    <li>转发表</li>
    <li>输入</li>
    <li>输出</li>
    <li>交换</li>
    <li>网络</li>
    <li>输入</li>
    <li>输出</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>网络</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>首部</li>
    <li>尾部</li>
    <li>网络</li>
    <li>输出</li>
    <li>网络</li>
    <li>缓冲</li>
    <li>分组</li>
    <li>差错</li>
    <li>速率</li>
    <li>速率</li>
    <li>缓冲区</li>
    <li>丢弃</li>
  </ul>
</details>
</div>

---

### 路由表与分组转发

> **pro：根据网络拓扑并利用路由聚合构造出路由表（2009、2013）**

#### 路由表概述

- 路由表是根据____选择算法得出的，主要用途是____选择
- 标准的路由表有4个项目：
  - ____网络IP地址
  - ____掩码
  - ____IP地址
  - ____

> **pro：路由表转发分组的分析（2014）**

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由</li>
    <li>路由</li>
    <li>目的</li>
    <li>子网</li>
    <li>下一跳</li>
    <li>接口</li>
  </ul>
</details>
</div>

#### 转发表特点

- 转发表是从____表得出的
  - 其表项和____表项有直接的对应关系
  - 但转发表的格式和____表的格式不同，其结构应使____过程最优化
- 转发表内容
  - 含有一个分组将要发往的____地址
  - 以及分组的____（即下一步接收者的____地址，实际为____地址）
- 为了减少转发表的重复项目
  - 可以使用一个____路由代替所有具有相同"____"的项目
  - 并将____路由设置得比其他项目的____低
- 实现方式
  - ____表总是用____来实现的
  - 转发表可以用____来实现，甚至也可以用特殊的____来实现

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由</li>
    <li>路由</li>
    <li>路由</li>
    <li>查找</li>
    <li>目的</li>
    <li>下一跳</li>
    <li>目的</li>
    <li>MAC</li>
    <li>默认</li>
    <li>下一跳</li>
    <li>默认</li>
    <li>优先级</li>
    <li>路由</li>
    <li>软件</li>
    <li>软件</li>
    <li>硬件</li>
  </ul>
</details>
</div>

#### 转发与路由选择的区别

- "转发"特点
  - 是路由器根据____表把收到的IP数据报从合适的____转发出去
  - 它仅涉及一个____
- "路由选择"特点
  - 涉及很多____
  - ____表是许多路由器协同工作的结果
  - 这些路由器按照复杂的____算法，根据从各____路由器得到的关于网络____的变化情况，动态地改变所选择的____，并由此构造出整个____表
- ____表不等于____表，分组的实际转发是靠直接查找____表，而不是查找____表

<div>
<details>
  <summary> </summary>
  <ul>
    <li>转发表</li>
    <li>端口</li>
    <li>路由器</li>
    <li>路由器</li>
    <li>路由</li>
    <li>路由</li>
    <li>相邻</li>
    <li>拓扑</li>
    <li>路由</li>
    <li>路由</li>
    <li>路由</li>
    <li>转发</li>
    <li>转发</li>
    <li>路由</li>
  </ul>
</details>
</div>

---

## 本章小结及疑难点

1.“____交付”有哪些含义？

1）不保证源主机发送的IP数据报一定____地交付到目的主机。

2）不保证源主机发送的IP数据报都在某一规定的____内交付到目的主机。

3）不保证源主机发送的IP数据报一定按____时的顺序交付到目的主机。

4）不保证源主机发送的IP数据报不会____交付给目的主机。

5）不敌意____IP数据报。____IP数据报的情况是：路由器检测出____检验和有错误；或者因为网络中____过大，路由器或目的主机中的____已无空闲空间。

但要注意，IP数据报的首部中有一个“____检验和”字段。当它检验出IP数据报的____出现了差错时，就____该数据报。thus，凡交付给目的主机的IP数据报都是IP____没有差错的或没有检测出差错的。也就是说，在传输过程中，出现____的IP数据报都被____了。

现在互联网上绝大多数的通信量都属于“____交付”。若数据必须____地交付给目的地，则使用IP的____软件必须负责解决这一问题。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>尽最大努力</li>
    <li>无差错</li>
    <li>时间</li>
    <li>发送</li>
    <li>重复</li>
    <li>丢弃</li>
    <li>丢弃</li>
    <li>首部</li>
    <li>通信量</li>
    <li>缓存</li>
    <li>首部</li>
    <li>首部</li>
    <li>丢弃</li>
    <li>首部</li>
    <li>差错</li>
    <li>丢弃</li>
    <li>尽最大努力</li>
    <li>可靠</li>
    <li>高层</li>
  </ul>
</details>
</div>

2.假定在一个局域网中，计算机A广播一个____请求分组，希望找出计算机B的____地址。试问这时由哪个计算机发送____响应分组？将谁的____地址告诉计算机A？

这要区分两种情况。第一，若计算机B和计算机A都连接在同一个____网上，则计算机____发送____响应分组，给出计算机____的硬件地址。第二，若计算机B和计算机A不连接在同一个____网上，则必须由一个连接计算机A所在____网的____来响应，这时该____向计算机A发送____响应分组，给出该____的硬件地址。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ARP</li>
    <li>硬件</li>
    <li>ARP</li>
    <li>硬件</li>
    <li>局域</li>
    <li>B</li>
    <li>ARP</li>
    <li>B</li>
    <li>局域</li>
    <li>局域</li>
    <li>路由器</li>
    <li>路由器</li>
    <li>ARP</li>
    <li>路由器</li>
  </ul>
</details>
</div>

3. 在数据报的HEADER中只有____IP地址和____IP地址

- 没有中间经过的____的IP地址，未指明____路由器的IP地址
- 待转发的数据报怎样才能找到____路由器呢？
- 路由器收到 待转发DG后的**____流程**：
  - through____表得出下一跳路由器的**____地址**
  - 不把这个地址填入____
    - 而是 **____**数据链路层的**____软件**
    - 网络接口软件的处理：
      - 把下一跳路由器的____地址转换成____地址(使用____)
      - 将此____地址写入____帧的首部
      - 根据此____地址找到____路由器
  - 发送连续数据报时会重复以上过程，造成一定____
- why不在路由表中**直接使用** **____地址**：
  - 使用抽象的____地址 → 隐蔽各种底层网络的____性
    - 便于分析和研究问题  
    - cost：  
      - 选择路由时 ____↑
  - 直接使用MAC地址的问题：
    - ____地址是平面的
      - 导致路由表极为____
      - troublesome

<div>
<details>
  <summary> </summary>
  <ul>
    <li>源</li>
    <li>目的</li>
    <li>路由器</li>
    <li>下一跳</li>
    <li>下一跳</li>
    <li>处理</li>
    <li>路由</li>
    <li>IP</li>
    <li>数据报</li>
    <li>送交</li>
    <li>网络接口</li>
    <li>IP</li>
    <li>硬件</li>
    <li>ARP</li>
    <li>硬件</li>
    <li>MAC</li>
    <li>硬件</li>
    <li>下一跳</li>
    <li>开销</li>
    <li>硬件</li>
    <li>IP</li>
    <li>复杂</li>
    <li>开销</li>
    <li>硬件</li>
    <li>庞大</li>
  </ul>
</details>
</div>

4."路由器实现了____层、____层、____层" 的含义？

- **两个通信结点**利用____栈进行**通信的过程**
  - 发送方一层一层地把数据“____”
  - 接收方一层一层地把“____”拆开，最后上交给用户。
- **路由器**有能力对这三层____的控制信息进行____、____以及____。
  - 直观的理解是路由器**有能力**对数据“____”这三层协议or“____”这三层协议。
    - thus 路由器就有能力互连这三层____不同的两个____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>物理</li>
    <li>数据链路</li>
    <li>网络</li>
    <li>协议</li>
    <li>包装</li>
    <li>包装</li>
    <li>协议</li>
    <li>识别</li>
    <li>分析</li>
    <li>转换</li>
    <li>包装</li>
    <li>拆开</li>
    <li>协议</li>
    <li>网络</li>
  </ul>
</details>
</div>


