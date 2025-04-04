# 第1章 计算机网络体系结构  

<ul>

## 【考纲内容】  

<ul>

（一）计算机网络概述  
计算机网络的____、____与____；计算机网络的____：计算机网络的____  
（二）计算机网络体系结构与参考模型  
计算机网络____结构：计算机网络____、____、____的概念：____/____ ____模型  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

概念</li>
    <li>

组成</li>
    <li>

功能</li>
    <li>

分类</li>
    <li>

性能指标</li>
    <li>

分层</li>
    <li>

协议</li>
    <li>

接口</li>
    <li>

服务</li>
    <li>

ISO</li>
    <li>

OSI TCP</li>
    <li>

IP</li>
  </ul>
</details>
</div>

</ul>

## 【复习提示】  

<ul>

- 本章主要介绍计算机网络体系结构的____概念
  - 读者可以在____的基础上适当地____

- 重点掌握
  - 网络的____结构（包括____层和____层结构）
  - 尤其是____参考模型各层的____
  - 以及相关____、____和____等概念

- 熟悉
  - 有关网络的各种____
  - 尤其是____、____、____等的计算

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基本</li>
    <li>

理解</li>
    <li>

记忆</li>
    <li>

分层</li>
    <li>

5</li>
    <li>

7</li>
    <li>

ISO/OSI</li>
    <li>

功能</li>
    <li>

协议</li>
    <li>

接口</li>
    <li>

服务</li>
    <li>

性能指标</li>
    <li>

时延</li>
    <li>

带宽</li>
    <li>

速率</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 计算机网络概述  

<ul>

## 概念  

<ul>

- 计算机网络
  - 是一个将众多分散的、自治的____系统，通过____设备与____连接起来，由功能完善的____实现____和____的系统。

- 计算机网络（简称网络）
  - 由若干____（node，或译为节点）和连接这些结点的____（link）组成。
  - 网络中的结点可以是____、____、____或____等。
  - 网络之间还可通过____互连构成一个覆盖范围更广的计算机网络，这样的网络称为____（internet）。

thus，it can be understood this way：网络把许多计算机连在一起，而互连网则把许多网络通过____连在一起。

### internet与Internet的区别

<ul>

- internet（互连网）
  - 是一个____名词
  - 泛指由多个____互连而成的计算机网络
  - 在这些网络之间可以使用任意的____作为通信规则
  - 不一定非要使用____协议

- Internet（互联网或因特网）
  - 则是一个____名词
  - 指当前全球最大的、____的、由众多网络和____互连而成的特定计算机网络
  - 它采用____协议族作为通信规则

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

计算机</li>
    <li>

通信</li>
    <li>

线路</li>
    <li>

软件</li>
    <li>

资源共享</li>
    <li>

信息传递</li>
    <li>

结点</li>
    <li>

链路</li>
    <li>

计算机</li>
    <li>

集线器</li>
    <li>

交换机</li>
    <li>

路由器</li>
    <li>

路由器</li>
    <li>

互连网</li>
    <li>

路由器</li>
    <li>

通用</li>
    <li>

计算机网络</li>
    <li>

通信协议</li>
    <li>

TCP/IP</li>
    <li>

专用</li>
    <li>

开放</li>
    <li>

路由器</li>
    <li>

TCP/IP</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 组成  

<ul>

### 组成部分视角

<ul>

- ____
  - ____（也称端系统）
  - ____链路（如双绞线、光纤）
  - ____设备（如路由器、交换机等）
  - ____处理机（如网卡）
- ____
  - 各种实现____的软件
  - 方便用户使用的各利____软件（如E-mail程序、FTP程序、聊天程序等）
- ____
  - 是计算机网络的____
  - 如同____制约汽车驾驶一样，协议规定了网络传输数据时所遵循的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

硬件</li>
    <li>

主机</li>
    <li>

通信</li>
    <li>

交换</li>
    <li>

通信</li>
    <li>

软件</li>
    <li>

资源共享</li>
    <li>

工具</li>
    <li>

协议</li>
    <li>

核心</li>
    <li>

交通规则</li>
    <li>

规范</li>
  </ul>
</details>
</div>

### 工作方式视角

<ul>

- ____部分
  - 由所有连接到互联网上的供用户直接使用的____组成
  - 用来进行____（如传输数据、音频或视频）和____
- ____部分
  - 由大量____和连接这些网络的____组成
  - 为边缘部分提供____和____服务

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/287998ad20487ffe1402b983737c30bf30a87d0899b167101b7b13670e260760.jpg)  
图1.1互联网的核心部分与边缘部分  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

边缘</li>
    <li>

主机</li>
    <li>

通信</li>
    <li>

资源共享</li>
    <li>

核心</li>
    <li>

网络</li>
    <li>

路由器</li>
    <li>

连通性</li>
    <li>

交换</li>
  </ul>
</details>
</div>

### 功能组成视角

<ul>

- ____子网
  - 由各种____介质、____设备和相应的____组成
  - 使网络具有____、____、____和____的能力
  - 实现联网计算机之间的____
- ____子网
  - 是实现____功能的设备及其软件的集合
  - 向网络用户提供共享其他计算机上的____资源、____资源和____资源的服务

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

通信</li>
    <li>

传输</li>
    <li>

通信</li>
    <li>

网络协议</li>
    <li>

数据传输</li>
    <li>

交换</li>
    <li>

控制</li>
    <li>

存储</li>
    <li>

数据通信</li>
    <li>

资源</li>
    <li>

资源共享</li>
    <li>

硬件</li>
    <li>

软件</li>
    <li>

数据</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 功能  

<ul>

### 数据通信  

<ul>

- 是计算机网络最____和____的功能
- 用来实现联网计算机之间各种____的传输
- 并联系分散在不同地理位置的计算机，进行统一的____、____和____
- 例如，____传输、____邮件等应用，离开了计算机网络就无法实现

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基本</li>
    <li>

重要</li>
    <li>

信息</li>
    <li>

调配</li>
    <li>

控制</li>
    <li>

管理</li>
    <li>

文件</li>
    <li>

电子</li>
  </ul>
</details>
</div>

### 资源共享  

<ul>

- 既可是____共享、____共享，又可是____共享
- 使计算机网络中的资源____、____
- 从而极大地提高了____资源、____资源和____资源的利用率

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

软件</li>
    <li>

数据</li>
    <li>

硬件</li>
    <li>

互通有无</li>
    <li>

分工协作</li>
    <li>

硬件</li>
    <li>

软件</li>
    <li>

数据</li>
  </ul>
</details>
</div>

### 分布式处理  

<ul>

- 当计算机网络中的某个计算机系统____过重时，可将其处理的某个复杂任务分配给网络中的其他____系统
- 从而利用____计算机资源来提高整个系统的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

负荷</li>
    <li>

计算机</li>
    <li>

空闲</li>
    <li>

利用率</li>
  </ul>
</details>
</div>

### 提高可靠性  

<ul>

- 计算机网络中的各台计算机可以通过网络互为____机

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

替代</li>
  </ul>
</details>
</div>

### 负载均衡  

<ul>

- 将工作任务____地分配给计算机网络中的各台____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

均衡</li>
    <li>

计算机</li>
  </ul>
</details>
</div>

### 其他功能

<ul>

- 还可实现____办公与服务、____教育、____等功能
- 满足了____的需求，方便了人们的____、____和____
- 具有巨大的____效益

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

电子化</li>
    <li>

远程</li>
    <li>

娱乐</li>
    <li>

社会</li>
    <li>

学习</li>
    <li>

工作</li>
    <li>

生活</li>
    <li>

经济</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 电路交换、报文交换与分组交换  

<ul>

- 在网络核心部分起重要作用的是____（router）
  - 它对收到的____进行____来实现分组交换
- 要了解____交换的原理
  - 首先就要学习____交换的相关概念

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

路由器</li>
    <li>

分组</li>
    <li>

存储转发</li>
    <li>

分组</li>
    <li>

电路</li>
  </ul>
</details>
</div>

### 电路交换  

<ul>

最典型的电路交换网是____电话网，如图1.2所示。

#### 工作原理

<ul>

- 从____资源分配的角度看
  - 交换就是按照某种方式____地分配传输线路的资源

- 电路交换分为____步
  - ____建立
  - ____传输
  - ____释放

- 在进行数据传输前
  - 两个结点之间必须先建立一条____（双方独占）的物理通信路径
    - 由通信双方之间的____设备和____逐段连接而成
    - 该路径可能经过许多____结点

- 在数据传输过程中
  - 这一物理通信路径始终被用户____
  - 直到通信结束后才被____

- 在电路交换的整个通信阶段
  - 比特流____地从源点直达终点
  - 就好像在一个____中传送

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f245e6639db9fb4e87d89db234663c1b92adb3022eb928c2b1f53e57f1c3bbcc.jpg)  
图1.2电路交换示意图  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

传统</li>
    <li>

通信</li>
    <li>

动态</li>
    <li>

三</li>
    <li>

连接</li>
    <li>

数据</li>
    <li>

连接</li>
    <li>

专用</li>
    <li>

交换</li>
    <li>

链路</li>
    <li>

中间</li>
    <li>

独占</li>
    <li>

释放</li>
    <li>

连续</li>
    <li>

管道</li>
  </ul>
</details>
</div>

#### 优点

<ul>

- ____时延小
  - 因为通信线路为通信双方____，数据____，所以传输时延非常小
- ____传输
  - 双方通信时按____顺序传送数据，不存在____问题
- 没有____
  - 不同的通信双方拥有不同的____，不会出现争用____的问题
- ____范围广
  - 电路交换既适用于传输____信号，又适用于传输____信号
- ____性强
  - 通信双方之间的物理通路一旦建立，双方就可____通信
- ____简单
  - 电路交换的____设备（交换机等）及____均较简单

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

通信</li>
    <li>

专用</li>
    <li>

直达</li>
    <li>

有序</li>
    <li>

发送</li>
    <li>

失序</li>
    <li>

冲突</li>
    <li>

信道</li>
    <li>

物理信道</li>
    <li>

适用</li>
    <li>

模拟</li>
    <li>

数字</li>
    <li>

实时</li>
    <li>

随时</li>
    <li>

控制</li>
    <li>

交换</li>
    <li>

控制</li>
  </ul>
</details>
</div>

#### 缺点

<ul>

- 建立____时间长
  - 电路交换的平均连接建立时间对计算机通信来说____
- 线路____率低
  - 物理通路被通信双方____，即使线路____，也不能供其他用户使用
- ____性差
  - 物理通路中的任何一点出现____，就必须重新拨号建立新的____
- 难以____化
  - 不同类型、不同规格、不同速率的终端很难相互进行____
- 难以实现____控制
  - 中间结点不具备____和____数据的能力，无法发现并纠正错误

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连接</li>
    <li>

太长</li>
    <li>

利用</li>
    <li>

独占</li>
    <li>

空闲</li>
    <li>

灵活</li>
    <li>

故障</li>
    <li>

连接</li>
    <li>

规格</li>
    <li>

通信</li>
    <li>

差错</li>
    <li>

存储</li>
    <li>

检验</li>
  </ul>
</details>
</div>

注意，在电路交换中，电路建立后，除源结点和目的结点外，电路上的任何结点都采取"____方式"接收数据和发送数据，即不存在____所耗费的时间。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直通</li>
    <li>

存储转发</li>
  </ul>
</details>
</div>

</ul>

### 报文交换  

<ul>

>pro：报文交换网中____转发、数据传送时间的计算（2013）  

#### 工作原理

<ul>

- 数据交换的单位是____
  - 用户数据加上____地址、____地址等信息后，封装成报文（message）
- 报文交换采用____技术
  - 整个报文先传送到相邻的____
  - 全部____后查找____，转发到下一个结点
  - 如此重复，直至到达____结点
- 每个报文都可单独选择到达____结点的路径

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储</li>
    <li>

报文</li>
    <li>

源</li>
    <li>

目的</li>
    <li>

存储转发</li>
    <li>

结点</li>
    <li>

存储</li>
    <li>

转发表</li>
    <li>

目的</li>
    <li>

目的</li>
  </ul>
</details>
</div>

#### 优点

<ul>

- 无须建立____
  - 通信前无须建立连接，没有建立____时延，用户可____发送报文
- ____分配线路
  - 交换设备存储整个报文后，选择一条合适的____线路，转发报文
- 线路____性高
  - 若某条传输路径发生____，则可重新选择另一条路径传输____
- 线路____率高
  - 报文在哪段链路上传送时才占用这段链路的____资源
- 提供____服务
  - 一个报文可以同时发送给多个____地址

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连接</li>
    <li>

连接</li>
    <li>

随时</li>
    <li>

动态</li>
    <li>

空闲</li>
    <li>

可靠</li>
    <li>

故障</li>
    <li>

数据</li>
    <li>

利用</li>
    <li>

通信</li>
    <li>

多目标</li>
    <li>

目的</li>
  </ul>
</details>
</div>

#### 缺点

<ul>

- ____时延高
  - 交换结点要将报文整体接收完后，才能查找____转发到下一个结点
- ____开销大
  - 报文的大小没有限制，这就要求交换结点拥有较大的____空间
- ____处理低效
  - 报文较长时，发生错误的概率相对更大，重传整个报文的____也很大

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

转发</li>
    <li>

转发表</li>
    <li>

缓存</li>
    <li>

缓存</li>
    <li>

错误</li>
    <li>

代价</li>
  </ul>
</details>
</div>

</ul>

### 分组交换  

<ul>

>pro：分组交换网中____转发、数据传送时间的计算（2010、2013、2023）  

#### 工作原理

<ul>

- 分组交换也采用____技术，但解决了报文交换中报文过长的____
  - 若报文太长，则对交换结点的____容量就有很大的需求，在错误处理方面也比较____
  - 源结点在发送之前，先把较长的报文划分成若干较小的____数据段
    - 在每个数据段前面添加一些由必要____信息（如源地址、目的地址和编号信息等）组成的____，构成分组（Packet）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2d299f322302399b30b0f2b21d0337245ceeccac10e0720f8635d7b7c8877980.jpg)  
图1.3构成分组的过程  

- 源结点将分组发送到____交换网中，分组交换网中的____交换机收到一个分组后，先将其____，然后从其首部中提取____地址，据此查找自己的____，再后将分组转发给下一个____交换机
- 经过多个分组交换机的____后，分组最终到达____结点

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储转发</li>
    <li>

问题</li>
    <li>

缓存</li>
    <li>

低效</li>
    <li>

等长</li>
    <li>

控制</li>
    <li>

首部</li>
    <li>

分组</li>
    <li>

分组</li>
    <li>

缓存</li>
    <li>

目的</li>
    <li>

转发表</li>
    <li>

分组</li>
    <li>

存储转发</li>
    <li>

目的</li>
  </ul>
</details>
</div>

#### 优点

<ul>

- 无建立____
  - 通信前无须建立连接，没有建立____时延，用户可____发送分组
- 线路____率高
  - 分组在哪段链路上传送时才占用这段链路的____资源
  - 相比采用____交换传送突发式的计算机数据，分组交换的通信线路利用率大大提高
- 简化了____管理（相对于报文交换）
  - 因为分组的____固定，相应缓冲区的大小也____，在交换结点中存储器的管理通常被简化为对____的管理，相对比较容易
- ____传输
  - 分组是____传输的，可以使后一个分组的____操作与前一个分组的____操作并行，这种____方式减少了报文的传输时间
  - 此外，传输一个分组比传输一次报文所需的____小得多，这样，因缓冲区不足而等待发送的____及时间必然也少得多
- 减小了____概率和____数据量
  - 因为分组较短，其出错概率必然____，所以每次重发的数据量也就大大____，这样不仅提高了____，而且减小了传输____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时延</li>
    <li>

连接</li>
    <li>

随时</li>
    <li>

利用</li>
    <li>

通信</li>
    <li>

电路</li>
    <li>

存储</li>
    <li>

长度</li>
    <li>

固定</li>
    <li>

缓冲区</li>
    <li>

加速</li>
    <li>

逐个</li>
    <li>

存储</li>
    <li>

转发</li>
    <li>

流水线</li>
    <li>

缓冲区</li>
    <li>

概率</li>
    <li>

出错</li>
    <li>

重发</li>
    <li>

减小</li>
    <li>

减少</li>
    <li>

可靠性</li>
    <li>

时延</li>
  </ul>
</details>
</div>

#### 缺点

<ul>

- 存在____时延
  - 尽管分组交换比报文交换的传输时延小，但相对于____交换仍存在____时延
  - 且其结点交换机必须具有更强的____能力

- 需要传输额外的____量
  - 每个小数据段都要加上____信息以构成分组
  - 这使得传送的信息量增大了____
  - 进而导致____复杂，降低了通信____，增大了处理的____

- 当分组交换网采用____服务时
  - 可能出现____、____或____分组的情况
  - 分组到达目的结点时，要对分组按____进行排序等工作
  - 这些工作很麻烦
- 若采用____服务
  - 虽然没有____问题
  - 但有____建立、____传输和____释放三个过程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储转发</li>
    <li>

电路</li>
    <li>

存储转发</li>
    <li>

处理</li>
    <li>

信息</li>
    <li>

控制</li>
    <li>

$5\%\sim10\%$</li>
    <li>

控制</li>
    <li>

效率</li>
    <li>

时延</li>
    <li>

数据报</li>
    <li>

失序</li>
    <li>

丢失</li>
    <li>

重复</li>
    <li>

编号</li>
    <li>

虚电路</li>
    <li>

失序</li>
    <li>

呼叫</li>
    <li>

数据</li>
    <li>

虚电路</li>
  </ul>
</details>
</div>

</ul>

### 三种交换方式的比较

<ul>

- 当要传送的数据量很大且其传送时间远大于____时间时
  - 采用____交换较为合适
- 当端到端的通路由多段____组成时
  - 采用____交换传送数据较为合适
- 从提高整个网络的____利用率看
  - ____交换和____交换优于____交换
  - 其中____交换比____交换的时延小
    - 尤其适合计算机之间的____数据通信

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cc1c6c84bafb4c42ddde56da97766fa80096e449b7643d1105d033c641008b5a.jpg)  
图1.4三种数据交换方式的比较

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

呼叫</li>
    <li>

电路</li>
    <li>

链路</li>
    <li>

分组</li>
    <li>

信道</li>
    <li>

报文</li>
    <li>

分组</li>
    <li>

电路</li>
    <li>

分组</li>
    <li>

报文</li>
    <li>

突发式</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 计算机网络的分类  

<ul>

### 按分布范围分类  

<ul>

- ____网（WAN）
  - 任务是提供____通信，运送主机所发送的____
  - 覆盖范围通常是直径为____到____千米的区域
  - 是互联网的____部分
  - 连接广域网的各结点交换机的链路一般都是____链路，具有较大的____容量

- ____网（MAN)
  - 覆盖范围可以跨越几个街区甚至整个城市
  - 覆盖区域的直径为____
  - 大多采用____技术，因此有时也常并入____网的范围讨论

- ____网（LAN）
  - 一般用主机通过____线路相连
  - 覆盖范围较小，通常是直径为____到____米的区域
  - 传统上，局域网使用____技术，而广域网使用____技术

- ____区域网（PAN)
  - 指在个人工作的地方将____电子设备（如平板电脑、智能手机等）用____技术连接起来的网络
  - 也称____个人区域网（WPAN）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

广域</li>
    <li>

长距离</li>
    <li>

数据</li>
    <li>

几十</li>
    <li>

几千</li>
    <li>

核心</li>
    <li>

高速</li>
    <li>

通信</li>
    <li>

城域</li>
    <li>

$5{\sim}50\mathrm{km}$</li>
    <li>

以太网</li>
    <li>

局域</li>
    <li>

局域</li>
    <li>

高速</li>
    <li>

几十</li>
    <li>

几千</li>
    <li>

广播</li>
    <li>

交换</li>
    <li>

个人</li>
    <li>

消费</li>
    <li>

无线</li>
    <li>

无线</li>
  </ul>
</details>
</div>

### 按传输技术分类

<ul>

- ____式网络
  - 所有联网计算机都共享一个公共____信道
  - 当一台计算机利用共享通信信道发送____分组时，所有其他计算机都会"____"到这个分组
  - 接收到该分组的计算机将通过检查____地址来决定是否接收该分组
  - ____网基本上都采用广播式通信技术，____网中的元绒、上生通后两网给世木用厂猫式通后权不

- ____网络
  - 每条物理线路连接一对____
  - 若通信的两台主机之间没有直接连接的线路，则它们之间的____传输就要通过____结点进行____和____，直至____结点

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

广播</li>
    <li>

通信</li>
    <li>

报文</li>
    <li>

收听</li>
    <li>

目的</li>
    <li>

局域</li>
    <li>

广域</li>
    <li>

点对点</li>
    <li>

计算机</li>
    <li>

分组</li>
    <li>

中间</li>
    <li>

存储</li>
    <li>

转发</li>
    <li>

目的</li>
  </ul>
</details>
</div>

### 按拓扑结构分类

<ul>

- 网络____结构是指由网中____（路由器、主机等）与____线路之间的几何关系表示的网络结构，主要指____子网的拓扑结构
- 按网络的拓扑结构，可分为____形、____形、____形和____网络等，如图1.5所示
- ____形、____形和____形网络多用于____网，____网络多用于____网

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/03dad756ed141050172e537aa8bcf856a949704d26cadf944b7715839d605a68.jpg)  
图1.5几种不同的网络拓扑结构

#### 总线形网络

<ul>

- 用单根____线把计算机连接起来
- 优点
  - ____网容易
  - 增/减____方便
  - ____线路
- 缺点
  - ____负载时通信效率不高
  - 总线任意一处对____敏感

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

传输</li>
    <li>

建</li>
    <li>

结点</li>
    <li>

节省</li>
    <li>

重</li>
    <li>

故障</li>
  </ul>
</details>
</div>

#### 星形网络

<ul>

- 每个终端或计算机都以单独的线路与____设备相连
- 中央设备一般是____或____
- 优点
  - 便于集中____和____
- 缺点
  - ____高
  - 中央设备对____敏感

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

中央</li>
    <li>

交换机</li>
    <li>

路由器</li>
    <li>

控制</li>
    <li>

管理</li>
    <li>

成本</li>
    <li>

故障</li>
  </ul>
</details>
</div>

#### 环形网络

<ul>

- 所有计算机接口设备连接成一个____
- 环形网络最典型的例子是____环局域网
- 环既可以是____环，又可以是____环，环中信号是____传输的

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

环</li>
    <li>

令牌</li>
    <li>

单</li>
    <li>

双</li>
    <li>

单向</li>
  </ul>
</details>
</div>

#### 网状网络

<ul>

- 一般情况下，每个结点至少有____条路径与其他结点相连，多用在____网中
- 有____型和____型两种
- 优点
  - ____性高
- 缺点
  - ____复杂
  - 线路____高

- 以上4种基本的网络拓扑结构可以互连为更复杂的网络

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

两</li>
    <li>

广域</li>
    <li>

规则</li>
    <li>

非规则</li>
    <li>

可靠</li>
    <li>

控制</li>
    <li>

成本</li>
  </ul>
</details>
</div>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

拓扑</li>
    <li>

结点</li>
    <li>

通信</li>
    <li>

通信</li>
    <li>

总线</li>
    <li>

星</li>
    <li>

环</li>
    <li>

网状</li>
    <li>

星</li>
    <li>

总线</li>
    <li>

环</li>
    <li>

局域</li>
    <li>

网状</li>
    <li>

广域</li>
  </ul>
</details>
</div>

</ul>

### 按使用者分类

<ul>

- ____网（PublicNetwork）
  - 指____公司出资建造的大型网络
  - "公用"的意思是指所有愿意按____公司规定缴纳费用的人都可使用这种网络

- ____网（PrivateNetwork）
  - 指某个部门为满足本单位特殊____的需要而建造的网络
  - 这种网络不向本单位外的人提供____，如铁路、电力、军队等部门的专用网

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

公用</li>
    <li>

电信</li>
    <li>

电信</li>
    <li>

专用</li>
    <li>

业务</li>
    <li>

服务</li>
  </ul>
</details>
</div>

### 按传输介质分类

<ul>

- 传输介质可分为____和____两大类，因此网络可分为____网络和____网络
  - 有线网络又可分为____网络、____网络等
  - 无线网络又可分为____、____、____等类型

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有线</li>
    <li>

无线</li>
    <li>

有线</li>
    <li>

无线</li>
    <li>

双绞线</li>
    <li>

同轴电缆</li>
    <li>

蓝牙</li>
    <li>

微波</li>
    <li>

无线电</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 计算机网络的性能指标  

<ul>

### 常用性能指标

<ul>

- 常用的性能指标如下：
  #### ____
  - 指连接到网络上的____在数字信道上传送数据的____
  - 也称____传输速率、____传输率、____率或____率
  - 单位为____（比特/秒）或____（有时也写为bps）
  - 当数据率较高时，可用____  $(\mathrm{k}=10^{3}$ )、____  $(\mathbf{M}=10^{6})$ ）或____（ $\mathrm{{(G}}\mathrm{{=}}{10}^{\mathrm{{9}}}\mathrm{{)}}$ ）表示

  #### ____
  - 带宽原本表示通信线路允许通过的____范围，单位是____ $\mathrm{(Hz}$
  - 在计算机网络中，带宽表示网络的通信线路所能传送____的能力
  - 是数字信道所能传送的"____数据传输速率"的同义语，单位是____（b/s）

  #### ____
  - 指单位时间内通过某个网络（或信道、接口）的____数据量
  - 吞吐量常用在对____网络的测量中，受网络____的限制

  #### ____
  - 指数据（一个报文或分组）从网络（或链路）的一端传送到另一端所需的____时间
  - 由____部分构成：____时延、____时延、____时延和____时延

>pro：分组交换网中各种时延的计算（2010、2013、2023）  

  ##### ____时延
  - 也称____时延
  - 结点将分组的所有比特推向链路所需的____
  - 即从发送分组的第一个比特算起，到该分组的最后一个比特发送完毕所需的____
  - 发送时延 = ____/____

  ##### ____时延
  - 电磁波在信道（传输介质）中传播一定的距离所花的____
  - 即一个比特从链路的一端传播到另一端所需的____
  - 传播时延 = ____/____

> attention:  

区分传输时延和传播时延。传输时延是路由器将分组推出所需的____，是分组____和链路____的函数。传播时延是一个比特从一台路由器传播至另一台路由器所需的____，是两台路由器之间____的函数，而与分组长度或链路传输速率无关。  

  ##### ____时延
  - 数据在交换结点为____转发而进行的一些必要处理所花的____
  - 例如，分析分组的____、从分组中提取____、____检验或查找合适的____等

  ##### ____时延
  - 分组在进入路由器后要先在____队列中排队等待处理
  - 路由器确定转发端口后，还要在____队列中排队等待转发
  - 这就产生了____时延

  ##### ____时延
  - 数据在网络中经历的总时延就是以上____部分时延之和
  - 总时延 = ____时延 $^+$ ____时延 $^+$ ____时延 $^+$ ____时延

> attention:  

处理时延和排队时延通常可忽略不计（除非另有说明）。  

  #### ____带宽积
  - 指发送端发送的第一个比特即将到达终点时，发送端已发出了多少____
  - 又称以____为单位的链路长度
  - 时延带宽积 = ____ $\times$ ____
  - 如图1.6所示，考虑一个代表链路的____形管道，其长度表示链路的____时延，横截面积表示链路____，则时延带宽积表示该管道可以容纳的____数量

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e564fa3d8c71bff7066a52d237c4d5c1866dd55d3140f45a2653a5b0f92a936d.jpg)  
图1.6链路就像一条空心管道  

  #### ____时延
  - 指从发送端发出一个短分组，到发送端收到来自接收端的____（接收端收到数据后立即发送确认）总共经历的____
  - 在互联网中，往返时延还包括各中间结点的____时延、____时延及转发数据时的____时延

  #### ____利用率
  - 用以指出某个信道有____的时间是有数据通过的
  - 信道利用率 = ____/____ 

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

速率</li>
    <li>

结点</li>
    <li>

速率</li>
    <li>

数据</li>
    <li>

数据</li>
    <li>

数据</li>
    <li>

比特</li>
    <li>

b/s</li>
    <li>

bit/s</li>
    <li>

$\mathrm{{kb/s}}$</li>
    <li>

$\mathrm{{Mb/s}}$</li>
    <li>

Gb/s</li>
    <li>

带宽</li>
    <li>

信号频率</li>
    <li>

赫兹</li>
    <li>

数据</li>
    <li>

最高</li>
    <li>

比特/秒</li>
    <li>

吞吐量</li>
    <li>

实际</li>
    <li>

实际</li>
    <li>

带宽</li>
    <li>

时延</li>
    <li>

总</li>
    <li>

4</li>
    <li>

发送</li>
    <li>

传播</li>
    <li>

处理</li>
    <li>

排队</li>
    <li>

发送</li>
    <li>

传输</li>
    <li>

时间</li>
    <li>

时间</li>
    <li>

分组长度</li>
    <li>

发送速率</li>
    <li>

传播</li>
    <li>

时间</li>
    <li>

时间</li>
    <li>

信道长度</li>
    <li>

电磁波在信道上的传播速率</li>
    <li>

时间</li>
    <li>

长度</li>
    <li>

传输速率</li>
    <li>

时间</li>
    <li>

距离</li>
    <li>

处理</li>
    <li>

存储</li>
    <li>

时间</li>
    <li>

首部</li>
    <li>

数据</li>
    <li>

差错</li>
    <li>

路由</li>
    <li>

排队</li>
    <li>

输入</li>
    <li>

输出</li>
    <li>

排队</li>
    <li>

总</li>
    <li>

4</li>
    <li>

发送</li>
    <li>

传播</li>
    <li>

处理</li>
    <li>

排队</li>
    <li>

时延</li>
    <li>

比特</li>
    <li>

比特</li>
    <li>

传播时延</li>
    <li>

信道带宽</li>
    <li>

圆柱</li>
    <li>

传播</li>
    <li>

带宽</li>
    <li>

比特</li>
    <li>

往返</li>
    <li>

确认</li>
    <li>

时延</li>
    <li>

处理</li>
    <li>

排队</li>
    <li>

发送</li>
    <li>

信道</li>
    <li>

百分之多少</li>
    <li>

有数据通过时间</li>
    <li>

（有+无）数据通过时间</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# 计算机网络体系结构与参考模型  

<ul>

## 计算机网络分层结构  

<ul>

>pro：网络体系结构的____（2010）  

### 网络体系结构的定义

<ul>

- 计算机网络的各层及其____的集合称为网络的____（Architecture）
- 换言之，计算机网络的体系结构就是这个计算机网络及其所应完成的____的精确定义
- 要强调的是，这些功能究竟是用何种____或____完成的，是一个遵循这种体系结构的____（Implementation）问题
- 体系结构是____的，而实现则是____的，是真正在运行的计算机硬件和软件
- 计算机网络体系结构通常都具有可____的特性，它将复杂的大系统分成若干较容易实现的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

定义</li>
    <li>

协议</li>
    <li>

体系结构</li>
    <li>

功能</li>
    <li>

硬件</li>
    <li>

软件</li>
    <li>

实现</li>
    <li>

抽象</li>
    <li>

具体</li>
    <li>

分层</li>
    <li>

层次</li>
  </ul>
</details>
</div>

### 分层基本原则

<ul>

- 每层都实现一种相对____的功能，降低大系统的____
- 各层之间的____自然清晰，易于理解，相互交流尽可能少
- 各层功能的精确定义独立于具体的____方法，可以采用最合适的技术来实现
- 保持下层对上层的____，上层单向使用下层提供的____
- 整个分层结构应能促进____工作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

独立</li>
    <li>

复杂度</li>
    <li>

接口</li>
    <li>

实现</li>
    <li>

独立性</li>
    <li>

服务</li>
    <li>

标准化</li>
  </ul>
</details>
</div>

### 分层结构中的基本概念

<ul>

#### 实体
- 第 $n$ 层中的____元素通常称为第 $n$ 层____
- 具体来说，实体指任何可____或____信息的硬件或软件进程，通常是某个特定的____模块
- 不同机器上的同一层称为____层，同一层的实体称为____实体
- 第 $n$ 层实体实现的____为第 $n+1$ 层所用
- 在这种情况下，第 $n$ 层称为____提供者，第 $n+1$ 层则服务于____

#### 数据单元
##### ____数据单元（PDU）
- ____层之间传送的数据单位称为该层的协议数据单元
- 第 $n$ 层的PDU记为____
- 各层的PDU都分为____和____信息两部分

##### ____数据单元（SDU）
- 为完成用户所要求的功能而传送的____
- 第 $n$ 层的SDU记为____

##### ____控制信息（PCI）
- 控制____操作的信息
- 第 $n$ 层的PCI记为____

##### PDU的通俗名称
- 物理层的PDU称为____
- 数据链路层的PDU称为____
- 网络层的PDU称为____
- 传输层的PDU称为____

##### 数据单元间的关系
- 从第 $n+1$ 层收到的PDU作为第 $n$ 层的____
- 加上第 $n$ 层的____，就封装成了第 $n$ 层的____
- 交给第 $n-1$ 层后作为____发送，接收方接收时做相反的处理
- 三者的关系为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b77b831057ee90ae6a2d9b9cae1dcbd0c76b5de0a6deea4a2c4d15026db44075.jpg)  
图1.7网络各层数据单元的联系  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

活动</li>
    <li>

实体</li>
    <li>

发送</li>
    <li>

接收</li>
    <li>

软件</li>
    <li>

对等</li>
    <li>

对等</li>
    <li>

服务</li>
    <li>

服务</li>
    <li>

用户</li>
    <li>

协议</li>
    <li>

对等</li>
    <li>

$n$-PDU</li>
    <li>

数据</li>
    <li>

控制</li>
    <li>

服务</li>
    <li>

数据</li>
    <li>

$n$ SDU</li>
    <li>

协议</li>
    <li>

协议</li>
    <li>

$n$ PCI</li>
    <li>

比特流</li>
    <li>

帧</li>
    <li>

分组</li>
    <li>

报文段</li>
    <li>

SDU</li>
    <li>

PCI</li>
    <li>

PDU</li>
    <li>

SDU</li>
    <li>

$n{\mathrm{-SDU}}+n{\mathrm{-CI}}=n{\mathrm{-PDU}}\,{=}\,(n-1)$-SDU</li>
  </ul>
</details>
</div>

### 层次结构的含义

<ul>

- 第 $n$ 层的实体不仅要使用第 $n-1$ 层的____来实现自身定义的____，而且要向第 $n+1$ 层提供本层的____，该服务是第 $n$ 层及其下面各层提供的服务____
- ____层只提供服务，是整个层次结构的____；____层面向用户提供服务
- 上一层只能通过____层间的接口使用下一层的服务，而不能调用其他层的____
- 当两台主机通信时，____层在逻辑上有一个直接____，表现为能直接将信息传送到对方

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

服务</li>
    <li>

功能</li>
    <li>

服务</li>
    <li>

总和</li>
    <li>

最低</li>
    <li>

基础</li>
    <li>

最高</li>
    <li>

相邻</li>
    <li>

服务</li>
    <li>

对等</li>
    <li>

信道</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 计算机网络协议、接口、服务的概念  

<ul>

### 协议  

<ul>

#### 协议的定义
- 要在网络中做到有条不紊地交换数据，就必须遵循一些事先约定好的____，其规定了所交换数据的____及有关的____问题
- 为了在网络中进行数据交换而建立的这些规则、标准或约定称为____（NetworkProtocol）
- 是控制在____实体之间进行通信的规则的集合，是____的
- 不对等实体之间是没有____的，如用TCP/IP协议栈通信的两个结点A和结点B，结点A的____层和结点B的____层之间存在协议，但结点A的传输层和结点B的____层之间不存在协议

#### 协议的组成部分
协议由____、____和____三部分组成  

>pro：同步的定义（2020）  

##### ____
- 数据与控制信息的____
- 例如，TCP报文段格式就是由TCP协议的____定义的

##### ____  
- 即需要发出何种____信息、完成何种____及做出何种____
- 例如，在建立TCP连接的____握手时所执行的操作就是由TCP协议的____定义的

##### ____
- 执行各种操作的____、____关系等，即事件实现顺序的详细说明
- 例如，建立TCP连接的____握手操作的时序关系就是由TCP协议的____定义的

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

规则</li>
    <li>

格式</li>
    <li>

同步</li>
    <li>

网络协议</li>
    <li>

对等</li>
    <li>

水平</li>
    <li>

协议</li>
    <li>

传输</li>
    <li>

传输</li>
    <li>

网络</li>
    <li>

语法</li>
    <li>

语义</li>
    <li>

同步</li>
    <li>

语法</li>
    <li>

格式</li>
    <li>

语法</li>
    <li>

语义</li>
    <li>

控制</li>
    <li>

动作</li>
    <li>

应答</li>
    <li>

三次</li>
    <li>

语义</li>
    <li>

同步</li>
    <li>

条件</li>
    <li>

时序</li>
    <li>

三次</li>
    <li>

同步</li>
  </ul>
</details>
</div>

### 接口  

<ul>

- 同一结点内相邻两层的实体交换信息的逻辑接口称为____（ServiceAccessPoint，SAP）
- 每层只能为紧邻的层之间定义____，而不能跨层定义____
- 服务是通过____提供给上层使用的，第 $n$ 层的SAP就是第 $n+1$ 层可以访问第 $n$ 层____的地方
- 例如，在本书描述的5层体系结构中：
  - 数据链路层的服务访问点为帧的"____"字段
  - 网络层的服务访问点为IP数据报的"____"字段
  - 传输层的服务访问点为"____"字段

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

服务访问点</li>
    <li>

接口</li>
    <li>

接口</li>
    <li>

SAP</li>
    <li>

服务</li>
    <li>

类型</li>
    <li>

协议</li>
    <li>

端口号</li>
  </ul>
</details>
</div>

### 服务  

<ul>

#### 服务的定义
- 服务是指下层为紧邻的上层提供的____调用，是____的
- 对等实体在____的控制下，使得本层能为上层提供____，但要实现本层协议，还需要使用下层提供的____
- 当上层使用下层提供的服务时，必须与下层交换一些____，这些命令称为____

#### 服务原语的分类
OSI参考模型将原语划分为____类：  

##### ____（Reguest）
- 由服务____发往服务____，请求完成某项工作

##### ____（Indication）
- 由服务____发往服务____，指示用户做某件事情

##### ____（Response）
- 由服务____发往服务____，作为对指示的响应

##### ____（Confirmation）
- 由服务____发往服务____，作为对请求的证实

- 这四类原语用于不同的____，如建立连接、传输数据和断开连接等
- 有应答服务包括全部____类原语，而无应答服务则只有____和____两类原语
- 四类原语的关系如图1.8所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c465c00fecdaace844348a56599b0bfb30ca06ba294b146e002eeb1081a634b4.jpg)  
图1.8四类原语的关系  

#### 协议与服务的区别
- 只有本层____的实现才能保证向上一层提供____
- 本层的服务用户只能看见____而无法看见下面的____，即下面的协议对上层的服务用户是____的
- 协议是"____的"，即协议是控制____实体之间通信的规则
- 服务是"____的"，即服务是由下层通过____接口向上层提供的
- 并非在一层内完成的全部功能都称为____，只有那些能够被高一层实体"____"的功能才称为服务

协议、接口、服务三者之间的关系如图1.9所示。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/626bd9b77ec2839f6bcc9d127b243ba971ad814f5bd6d44cd4ca7a6a1070033c.jpg)  
图1.9协议、接口、服务三者之间的关系  

#### 计算机网络服务的分类

##### ____服务与____服务  
###### ____服务
- 通信前双方必须先建立____
- 分配相应的____（如缓冲区），以保证通信能正常进行
- 传输结束后释放____和占用的资源
- 这种服务可分为____建立、____传输和____释放三个阶段
- 例如，____就是一种面向连接服务的协议

###### ____服务
- 通信前双方不需要先建立____
- 需要发送数据时可直接发送，将每个带有____地址的包（报文分组）传送到线路上
- 由系统选定路线进行____
- 这种服务常被描述为"____交付"，是一种不可靠的服务
- 例如，____、____就是一种无连接服务的协议

##### ____服务和____服务  
###### ____服务
- 网络具有____、____、____机制
- 能保证数据正确、可靠地传送到目的地

###### ____服务
- 网络只是尽量让数据正确、可靠地传送到____
- 是一种____的服务
- 网络的正确性、可靠性要由____或____来保障
- 用户收到信息后要判断信息的____
- 若不正确，则用户就要把出错信息报告给信息的____，以便发送者采取纠正措施
- 通过用户的这些措施，可将不可靠服务变成____服务

##### ____服务和____服务  
###### ____服务
- 接收方在收到数据后向发送方给出相应的____
- 该应答由____系统内部自动实现，而不由用户实现
- 发送的应答既可以是____应答，又可以是____应答
- 通常在接收到的数据有错误时发送____应答
- 例如，____传输服务就是一种有应答服务

###### ____服务
- 接收方收到数据后不自动给出____
- 若需要应答，则由____实现
- 例如，对于____服务，客户端收到服务器发送的页面文件后不给出应答

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

功能</li>
    <li>

垂直</li>
    <li>

协议</li>
    <li>

服务</li>
    <li>

服务</li>
    <li>

命令</li>
    <li>

服务原语</li>
    <li>

四</li>
    <li>

请求</li>
    <li>

用户</li>
    <li>

提供者</li>
    <li>

指示</li>
    <li>

提供者</li>
    <li>

用户</li>
    <li>

响应</li>
    <li>

用户</li>
    <li>

提供者</li>
    <li>

证实</li>
    <li>

提供者</li>
    <li>

用户</li>
    <li>

功能</li>
    <li>

四</li>
    <li>

请求</li>
    <li>

指示</li>
    <li>

协议</li>
    <li>

服务</li>
    <li>

服务</li>
    <li>

协议</li>
    <li>

透明</li>
    <li>

水平</li>
    <li>

对等</li>
    <li>

垂直</li>
    <li>

层间</li>
    <li>

服务</li>
    <li>

看得见</li>
    <li>

面向连接</li>
    <li>

无连接</li>
    <li>

面向连接</li>
    <li>

连接</li>
    <li>

资源</li>
    <li>

连接</li>
    <li>

连接</li>
    <li>

数据</li>
    <li>

连接</li>
    <li>

TCP</li>
    <li>

无连接</li>
    <li>

连接</li>
    <li>

目的</li>
    <li>

传输</li>
    <li>

尽最大努力</li>
    <li>

IP</li>
    <li>

UDP</li>
    <li>

可靠</li>
    <li>

不可靠</li>
    <li>

可靠</li>
    <li>

纠错</li>
    <li>

检错</li>
    <li>

应答</li>
    <li>

不可靠</li>
    <li>

目的地</li>
    <li>

尽力而为</li>
    <li>

应用</li>
    <li>

用户</li>
    <li>

正确性</li>
    <li>

发送者</li>
    <li>

可靠</li>
    <li>

有应答</li>
    <li>

无应答</li>
    <li>

有应答</li>
    <li>

应答</li>
    <li>

传输</li>
    <li>

肯定</li>
    <li>

否定</li>
    <li>

否定</li>
    <li>

文件</li>
    <li>

无应答</li>
    <li>

应答</li>
    <li>

高层</li>
    <li>

WWW</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ISO/OSI TCP/IP模型  

<ul>

### OSI参考模型  

<ul>

>pro：OSI参考模型的通信子网各层所包含的____设备（2016）  

- 国际标准化组织（ISO）提出的网络体系结构模型称为____系统互连参考模型（OSI/RM），通常简称为____参考模型
- OSI参考模型有____层，自下而上依次为____层、____层、____层、____层、____层、____层、____层
  - 低三层统称____子网，是为联网而附加的通信设备，完成数据的____功能
  - 高三层统称____子网，相当于计算机系统，完成数据的____等功能
  - ____层承上启下

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0007f90cfeedff7909c783165de40e20f9808e61a22237bdf22d1010c48418c4.jpg)  
图1.10OSI参考模型的层次结构  

>pro：OSI参考模型的____结构（2013、2014、2017、2019）  

#### **____**层（Physical Layer）

<ul>

- 物理层的传输单位是____，功能是在物理介质上为数据端设备透明地传输原始____
- 物理层主要定义数据终端设备（DTE）和数据通信设备（DCE）的____与____连接方法
- 物理层接口标准很多，如____、____、CCITT的____等

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/95bdedaa52206e2c534c5ce90c2d9a507b96d7293774f6465464cbfd14036917.jpg)  
图1.11两个通信结点及它们间的一段通信链路  

##### 物理层研究内容
- 通信链路与通信结点的连接需要一些____接口，物理层规定了这些接口的一些____
  - 如____形状和尺寸、____电路的数量和排列等
  - 例如笔记本电脑上的网线接口
- 物理层规定了通信链路上所传输的____的意义和____特征
  - 例如，若规定信号X代表数字0，则当结点传输0时就发出____X，而当结点接收到信号X时就知道收到的是____

##### 物理层注意事项
- 传输信息所用的一些物理介质（如双绞线、光缆、无线信道等）并不在____层协议之内，而在物理层协议____
- 因此，有人将物理介质当作第____层

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理</li>
    <li>

比特</li>
    <li>

比特流</li>
    <li>

物理</li>
    <li>

逻辑</li>
    <li>

EIA-232C</li>
    <li>

EIA/TIA RS-449</li>
    <li>

X.21</li>
    <li>

电路</li>
    <li>

参数</li>
    <li>

机械</li>
    <li>

交换</li>
    <li>

信号</li>
    <li>

电气</li>
    <li>

信号</li>
    <li>

0</li>
    <li>

物理</li>
    <li>

下面</li>
    <li>

0</li>
  </ul>
</details>
</div>

#### 数据<b><span style="color: deepskyblue;">链路</span></b>层（Data Link Layer）  

<ul>

>pro：OSI参考模型的数据链路层的____（2022）  

##### **____**功能
- 传输单位: <span style="color: deepskyblue;">____</span>
- 两台主机之间的数据传输总是在一段一段的____上传送的，这就需要使用专门的____层协议
- 数据链路层将网络层交来的____分组封装成帧，并且可靠地传输到相邻结点的____层
- 主要作用是加强物理层传输原始比特流的____，将物理层提供的可能出错的物理连接改造为逻辑上____的数据链路

##### <span style="color: Gold;">____</span>处理
- 因为外界噪声的干扰，所以原始的物理连接在传输比特流时可能发生____
- 数据链路层协议应能检测出这些____，然后将收到的错误信息____

##### <span style="color: green;">____</span>控制
- 在两个相邻结点之间传送数据时，结点A的____速率可能比结点B的____速率快
- 流量控制可以协调两个结点的____，使结点A的发送速率刚好是结点B的____速率

##### <span style="color: orange;">____</span>网络处理
- 广播式网络在数据链路层还要处理新的问题，即如何控制  对____信道的访问
  - DL层的一个特殊子层一一 ____访问子层 ↑ Deal specifically with this problem

##### 典型协议
- ____、____、____、____和____等

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

功能</li>
    <li>

基本</li>
    <li>

帧</li>
    <li>

链路</li>
    <li>

链路</li>
    <li>

IP</li>
    <li>

网络</li>
    <li>

功能</li>
    <li>

无差错</li>
    <li>

错误</li>
    <li>

错误</li>
    <li>

差错</li>
    <li>

丢弃</li>
    <li>

流量</li>
    <li>

发送</li>
    <li>

接收</li>
    <li>

速率</li>
    <li>

接收</li>
    <li>

广播</li>
    <li>

共享</li>
    <li>

介质</li>
    <li>

SDLC</li>
    <li>

HDLC</li>
    <li>

PPP</li>
    <li>

STP</li>
    <li>

帧中继</li>
  </ul>
</details>
</div>

#### <b><span style="color: DodgerBlue;">网络</span></b>层（Network Layer）  

<ul>

##### 基本功能
- 网络层的传输单位是____
- 它关心的是____子网的运行控制
- 主要任务是将网络层的____数据单元（分组）从____结点传输到____结点，为分组交换网上的不同主机提供____服务
- 关键问题是对分组进行____选择，并实现____控制、____控制、____控制和网际互连等功能

> attention:  
无论是在哪一层传送的数据单元，都可以笼统地用"____"来表示。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/64b7691ecbb524c8f922741a5e0d7779d28ceed9a6a1897443247262e677bc2b.jpg)  
图1.12某网络结构图  

##### <span style="color: orange;">____</span>功能
- 流量控制
  - 与数据链路层的流量控制的____一样
  - 都是协调A的____速率和B的____速率
- 差错控制
  - 通信结点之间约定的特定____规则
  - 接收方根据该规则检查接收到的分组是否____
  - 若出错，则能____就纠错，不能纠错就____
- 拥塞控制
  - 若结点都来不及接收分组而丢弃大量分组，导致结点间无法正常____，网络就处于____状态
  - 网络层要采取措施来缓解这种____

##### 网络互连
- 互联网是由大量____网络通过____相互连接起来的
- 互联网使用的网络层协议是____的网际协议（IP）和许多种____协议
- 因此互联网的网络层也称____层或____层

##### 网络层协议
- ____、____、____、____、____、____、____和____等

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据报</li>
    <li>

通信</li>
    <li>

协议</li>
    <li>

源</li>
    <li>

目的</li>
    <li>

通信</li>
    <li>

路由</li>
    <li>

流量</li>
    <li>

拥塞</li>
    <li>

差错</li>
    <li>

分组</li>
    <li>

控制</li>
    <li>

含义</li>
    <li>

发送</li>
    <li>

接收</li>
    <li>

检错</li>
    <li>

出错</li>
    <li>

纠错</li>
    <li>

丢弃</li>
    <li>

通信</li>
    <li>

拥塞</li>
    <li>

拥塞</li>
    <li>

异构</li>
    <li>

路由器</li>
    <li>

无连接</li>
    <li>

路由选择</li>
    <li>

网际</li>
    <li>

IP</li>
    <li>

IP</li>
    <li>

IPX</li>
    <li>

ICMP</li>
    <li>

IGMP</li>
    <li>

ARP</li>
    <li>

RARP</li>
    <li>

RIP</li>
    <li>

OSPF</li>
  </ul>
</details>
</div>

#### <b><span style="color: green;">传输</span></b>层（Transport Layer）  

<ul>

>pro：OSI参考模型的传输层的____（2009）  

##### 基本功能
- 传输层也称____层，负责主机中两个____之间的通信
- 功能是为____连接提供可靠的传输服务
  - 为端到端连接提供____控制、____控制、____质量、____传输管理等服务

##### 通信特点
- 数据链路层提供的是____通信，传输层提供的是____通信
- 点到点可理解为主机和主机之间的____
  - 一个点是指一个____地址或____地址
  - 网络中参与通信的主机是通过____地址或____地址来标识的
- 端到端通信是指运行在不同主机内的两个____之间的通信
  - 一个进程由一个____来标识

##### 复用与分用功能
- 通过传输层的____，高层用户看不到通信子网的交替和变化
- 因为一台主机可同时运行多个____，所以传输层具有____和____的功能
  - 复用是指多个____层进程可同时使用下面传输层的____
  - 分用是指传输层将收到的信息分别交付给上面____层中相应的____

##### 传输层协议
- ____、____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

功能</li>
    <li>

运输</li>
    <li>

进程</li>
    <li>

端到端</li>
    <li>

流量</li>
    <li>

差错</li>
    <li>

服务</li>
    <li>

数据</li>
    <li>

点到点</li>
    <li>

端到端</li>
    <li>

通信</li>
    <li>

硬件</li>
    <li>

IP</li>
    <li>

硬件</li>
    <li>

IP</li>
    <li>

进程</li>
    <li>

端口</li>
    <li>

屏蔽</li>
    <li>

进程</li>
    <li>

复用</li>
    <li>

分用</li>
    <li>

应用</li>
    <li>

服务</li>
    <li>

应用</li>
    <li>

进程</li>
    <li>

TCP</li>
    <li>

UDP</li>
  </ul>
</details>
</div>

#### <span style="color: GreenYellow;">会话</span>层（Session Layer）  

<ul>

>pro：OSI参考模型的会话层的____（2019）  

- 会话层充许不同主机上的各个____之间进行会话
- 这种服务主要为____层实体或用户进程建立____，并在连接上有序地传输____，这就是会话，也称建立____（SYN）
- 会话层负责管理主机间的____进程，包括____、____和____进程间的会话
- 会话层包含一种称为____的机制来维持可靠会话，使通信会话在通信失效时从检查点继续恢复通信，即____的原理

</ul>

<div>
<details>
  <summary> </summary>

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，包含 Markdown 和 HTML 折叠块格式。挖空部分为关键词、公式定理和关键步骤，答案在每个次级标题下以折叠块形式给出。

---

### 1. 传统电信网与计算机网络的区别

<ul>

传统电信网的主要用途是____通信，且普通电话机不是智能的，因此电信公司必须花费巨大的代价将电信网设计得非常____，以保证用户的通信质量。  

数据的传送显然必须____。当初设计ARPAnet时，很重要的讨论内容之一是“谁应当负责数据传输的____？”一种意见是主张像电信网那样，由通信网络负责数据传输的可靠性（因为电信网的发展史及技术水平已经证明，人们可将网络设计得相当____）。另一种意见则主张由____负责数据传输的可靠性，理由是这样可使计算机网络便宜、灵活。  

计算机网络的先驱认为，计算机网络和电信网的一个重大区别是____的性能差别很大。thus，他们采用了“____”策略，即在传输层使用面向连接的____协议，这样既能使网络部分价格便宜且灵活可靠，又能保证端到端的可靠传输。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

电话</li>
    <li>

可靠</li>
    <li>

可靠</li>
    <li>

可靠性</li>
    <li>

可靠</li>
    <li>

用户主机</li>
    <li>

终端设备</li>
    <li>

端到端的可靠传输</li>
    <li>

TCP</li>
  </ul>
</details>
</div>

### 2. 端到端通信和点到点通信有什么区别？

<ul>

本质上说，由____、____和____组成的通信子网为网络环境中的主机提供点到点的服务，而____为网络中的主机提供端到端的通信。  

直接相连的结点之间的通信称为____通信，它只提供一台机器到另一台机器之间的通信，不涉及____或____的概念。同时，点到点通信并不能保证数据传输的____，也不能说明源主机与目的主机之间是哪两个进程正在通信，这些工作都由____来完成。  

端到端通信建立在____通信的基础上，由一段段点到点通信信道构成，以完成____之间的通信。“端”是指用户程序的____，端口号标识了应用层中的不同____。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

物理层</li>
    <li>

数据链路层</li>
    <li>

网络层</li>
    <li>

传输层</li>
    <li>

点到点</li>
    <li>

程序</li>
    <li>

进程</li>
    <li>

可靠性</li>
    <li>

传输层</li>
    <li>

点到点</li>
    <li>

应用程序（进程）</li>
    <li>

端口</li>
    <li>

进程</li>
  </ul>
</details>
</div>

### 3. 如何理解传输速率和传播速率？

<ul>

传输速率是指主机或路由器在数字信道上发送数据的____，也称____、____或____，单位是____（b/s），或干比特/秒（kb/s）、兆比特/秒（Mb/s）、吉比特/秒（Gb/s）等。  
> attention:  

在通信领域中表示速率时， $\mathbf{k}=____$  $\mathrm{M}=____$  $G=____$  $\mathrm{T}=____$ 。表示存储容量或文件大小时， 
- $\mathtt{K}=____$  $\scriptstyle\mathbf{M}=____$  $\mathrm{G}=____$  $\mathrm{T}=____$ 
与通信领域中的表示方式不同。  

传播速率是指____在信道中传播的速率，单位是____（ $._{\mathrm{m/s}}$ ）或____（ $(\mathrm{km}/\mathrm{s})$  

在图1.17中，假定链路的传播速率为 $____\mathrm{m/s}$ ，这相当于电磁波在该介质中 $1\mu\mathrm{s}$ 可向前传播 $____\mathrm{m}$ 。若链路带宽为 $____\mathrm{{Mb/s}}$ ，则主机在 $1\mu\mathrm{s}$ 内可向链路发送____比特的数据。当 $t=0$ 时，开始向链路发送数据：当 $t=1\mu\mathrm{s}$ 时，信号传播到 $____\mathrm{m}$ 处，注入链路____比特：当 $t=2\mu\mathrm{s}$ 时，信号传播到 $____\mathrm{m}$ 处，注入链路共____比特：当 $t=3\mu\mathrm{s}$ 时，信号传播到 $____\mathrm{m}$ 处，注入链路共____比特。  

从图1.17可以看出，在一段时间内链路中有多少比特取决于____（或传输速率），而1比特“跑”了多远取决于____。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0f85059af28cb65ea81407dcb3fc5444431a016956a56fcf332ccd22ecceba5f.jpg)`  
图1.17传输速率、带宽和传播速率三者的区别

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

速率</li>
    <li>

传输率</li>
    <li>

数据率</li>
    <li>

比特率</li>
    <li>

比特/秒</li>
    <li>

$10^{3}$</li>
    <li>

$10^{6}$</li>
    <li>

$10^{9}$</li>
    <li>

$10^{12}$</li>
    <li>

$2^{10}=1024$</li>
    <li>

$2^{20}$</li>
    <li>

$2^{30}$</li>
    <li>

$2^{40}$</li>
    <li>

电磁波</li>
    <li>

米/秒</li>
    <li>

千米/秒</li>
    <li>

$2{\times}10^{8}$</li>
    <li>

200</li>
    <li>

1</li>
    <li>

1</li>
    <li>

200</li>
    <li>

1</li>
    <li>

400</li>
    <li>

2</li>
    <li>

600</li>
    <li>

3</li>
    <li>

带宽</li>
    <li>

传播速率</li>
  </ul>
</details>
</div>


