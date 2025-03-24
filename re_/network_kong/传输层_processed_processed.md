# 第5章 传输层  

<ul>

## 【考纲内容】  

<ul>

（一）传输层提供的服务  
传输层的功能：____ 与端口：____服务和____服务  
（二）UDP  
UDP____：UDP____  
（三）TCP  
TCP____：TCP____管理：TCP____传输：TCP____控制与____控制  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>传输层寻址</li>
    <li>无连接</li>
    <li>面向连接</li>
    <li>数据报</li>
    <li>检验</li>
    <li>段</li>
    <li>连接</li>
    <li>可靠</li>
    <li>流量</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

## 【复习提示】  

<ul>

- 传输层是整个网络体系结构中的____层次
  - 要求掌握：传输层在计算机网络中的____、____及____等
  - 掌握: UDP及TCP
    - 如____格式、____传输、____控制、____控制、____管理等

- **TCP**报文分析、连接管理、流量控制与拥塞控制机制
  - 出选择题、综合题的____均较大
  - 因此要将其____透彻掌握
    - 以便能在具体的题目中____运用

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>关键</li>
    <li>功能</li>
    <li>工作方式</li>
    <li>原理</li>
    <li>首部</li>
    <li>可靠</li>
    <li>流量</li>
    <li>拥塞</li>
    <li>连接</li>
    <li>概率</li>
    <li>工作原理</li>
    <li>灵活</li>
  </ul>
</details>
</div>

</ul>

# 传输层提供的<span style="color: blue;">服务  

<ul>

## 传输层的功能  

<ul>

- 网络分层通信概述：
  - 数据链路层：提供链路上____节点之间的____通信。
  - 网络层：提供____之间的逻辑通信。
  - 传输层：为运行在不同主机上的____之间提供逻辑通信。

- 传输层的定位：
  - 位于____之上、____之下。
  - 属于面向通信部分的____层。
  - 也是用户功能中的____层。

- 传输层的可靠性：
  - 即使____协议不可靠，传输层仍能为应用程序提供____服务。

- 传输层功能的存在：
  - 网络边缘的____有传输层，用于____通信。
  - ____在转发分组时只用到下三层功能，不涉及传输层。

- 传输层的具体功能：
  - 见图5.1

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相邻</li>
    <li>逻辑</li>
    <li>主机</li>
    <li>进程</li>
    <li>网络层</li>
    <li>应用层</li>
    <li>最高</li>
    <li>最低</li>
    <li>网络层</li>
    <li>可靠</li>
    <li>主机</li>
    <li>端到端</li>
    <li>路由器</li>
  </ul>
</details>
</div>

### 应用进程之间的逻辑通信  

<ul>

- 网络层与传输层的通信区别：
  - 网络层：
    - 通信的双方是两台____，IP数据报首部包含这两台主机的____。
  - 实际通信：
    - 两台主机中的____之间的通信，称为____逻辑通信。
  - IP协议：
    - 负责将分组送到____主机，但分组仅停留在____，未交付给主机中的____。
  - 传输层：
    - 通信的真正端点是主机中的____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主机</li>
    <li>IP地址</li>
    <li>应用进程</li>
    <li>端到端</li>
    <li>目的</li>
    <li>网络层</li>
    <li>进程</li>
    <li>进程</li>
  </ul>
</details>
</div>

### 复用和分用  

<ul>

- 传输层的复用和分用：
  - 复用：发送方不同的____可以使用同一个传输层协议传送数据。
  - 分用：**接收方**的传输层**____** 报文**____**后，将数据正确交付到目的应用进程。
>attention
- 网络层的复用和分用：
  - 复用：发送方不同____的数据都可以被封装成IP数据报发送。
  - 分用：接收方的网络层____首部后，将数据交付给相应的协议。

- 传输层逻辑通信示例：
  - ![传输层逻辑通信](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/63d78670549561819a300f6b9fc62e30df373cce7e510de756f34b967bc87bb0.jpg)
  - 图5.1展示了传输层为相互通信的____提供逻辑通信。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>应用进程</li>
    <li>剥去</li>
    <li>首部</li>
    <li>协议</li>
    <li>剥去</li>
    <li>进程</li>
  </ul>
</details>
</div>

### 检错检测  

<ul>

- 传输层的差错检测：
  - 对收到的报文（**____**和**____**部分）进行差错检测。
  - TCP协议：
    - 接收方发现报文段出错，**____**发送方**____**该报文段。
  - UDP协议：
    - 接收方发现数据报出错，**____**。

- **网络层**的限制：
  - IP数据报首部的检验和字段仅检验____是否出错
  - **____** **数据部分**是否出错

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>首部</li>
    <li>数据</li>
    <li>要求</li>
    <li>重发</li>
    <li>直接丢弃</li>
    <li>首部</li>
    <li>不检查</li>
  </ul>
</details>
</div>

### 提供面向连接和无连接的传输协议  

<ul>

- 传输层的**作用**：
  - **____**低层网络核心的**____**，如网络拓扑、路由协议等。
  - 为应用进程提供____逻辑通信信道。
  - 逻辑通信信道的可靠性取决于____。

- 传输层协议与逻辑通信信道的关系：
  - 使用TCP协议时：
    - 网络不可靠，只提供____服务。
    - 逻辑通信信道表现为____的可靠信道。
  - 使用UDP协议时：
    - 逻辑通信信道仍然是____。

- 网络层的限制：
  - 无法同时实现____和____的协议。
  - 要么提供____服务，如虚电路。
  - 要么提供____服务，如数据报。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>屏蔽</li>
    <li>细节</li>
    <li>端到端</li>
    <li>传输层协议</li>
    <li>尽最大努力</li>
    <li>全双工</li>
    <li>不可靠</li>
    <li>面向连接</li>
    <li>无连接</li>
    <li>面向连接</li>
    <li>无连接</li>
  </ul>
</details>
</div>

## 传输层的寻址与<span style="color: blue;">端口  

<ul>

### 端口的作用  

<ul>

- 端口的作用：
  - ____通过端口将数据交付给传输层。
  - 传输层通过端口将报文段数据交付给____相应进程。
  - 端口在传输层的作用类似于____在网络层的作用。
  - ____标识主机，而端口标识主机中的____。

- 协议栈各层的服务访问点：
  - 数据链路层：帧的“____”字段。
  - 网络层：IP数据报的“____”字段。
  - 传输层：“____”字段。
  - 应用层：“____”。

- 端口与硬件端口的区别：
  - 协议栈中的端口是____端口。
  - 软件端口是____与传输实体交互的地址。
  - 硬件端口是不同____交互的接口。
  - 传输层使用____端口。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>应用层进程</li>
    <li>应用层</li>
    <li>IP地址</li>
    <li>IP地址</li>
    <li>应用进程</li>
    <li>类型</li>
    <li>协议</li>
    <li>端口号</li>
    <li>用户界面</li>
    <li>软件</li>
    <li>应用层协议进程</li>
    <li>硬件设备</li>
    <li>软件</li>
  </ul>
</details>
</div>

### ⚠️端口号  

<ul>

- 应用进程通过端口号进行标识：
  - 端口号长度为____比特，可表示____个不同的端口号。
  - 端口号只具有____意义，标识本计算机应用层中的____。
  - 不同计算机的相同端口号____联系。

- 端口号的分类：
  - 服务器端使用的端口号：
    - **____**端口号：
      - 数值为**____**~**____**，IANA指派给重要应用程序。
    - **____**端口号：
      - 数值为**____**~**____**，供无熟知端口号应用使用，需在IANA登记。
  - **____**端使用的端口号：
    - 数值为**____**~**____**，动态选择，故称____端口号。
    - 服务器根据客户端报文中的端口号发送数据。
    - 通信结束后，短暂端口号可供其他客户进程使用。

- 常用的熟知端口号示例：
  - ![熟知端口号图片](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e1544960964df4d9da3367ec224ca92c1bb3a1058ebde23539b5c5d0aa0c544a.jpg)
- 
  | 应用程序 | 端口号 |
  |---------|--------|
  | **FTP** | **____** |
  | SSH     | 22     |
  | TELNET  | 23     |
  | **SMTP**| **____** |
  | DNS     | 53     |
  | HTTP    | 80     |
  | **POP3**| **____** |
  | HTTPS   | 443    |

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>16</li>
    <li>65536</li>
    <li>本地</li>
    <li>各进程</li>
    <li>没有</li>
    <li>熟知</li>
    <li>0</li>
    <li>1023</li>
    <li>登记</li>
    <li>1024</li>
    <li>49151</li>
    <li>客户</li>
    <li>49152</li>
    <li>65535</li>
    <li>短暂</li>
    <li>21</li>
    <li>25</li>
    <li>110</li>
  </ul>
</details>
</div>

### 套接字Socket  

<ul>

- **网络标识**与**套接字**：
  <details>
  <summary>网络标识</summary>
  网络标识是机器在网络中的标志信息，它们使得网络设备能够被唯一识别和定位。在不同的网络层次中，有不同的标识类型：

    数据链路层：MAC地址 ← 设备在局域网（如以太网）中的  物理地址
    网络层：IP地址 ← 标识 主机或路由器
    传输层：端口号 ← 区分 同一台主机上的不同 网络服务
  </details>

  - IP地址： 标识和区别不同的**____**
    - 端口号： 标识和区分一台主机中的不同**____**
  - 套接字(**Socket**)=(**____**地址：**____**)
    - 唯一标识网络中的一个____
    - 用于**____**网络通信中的**____**
      - 唯一的通信端点

- **网络通信**中的套接字使用：
  - 主机A → 主机B的报文
    - 报文包含____端口号和____端口号
    - 源端口号是“____”的一部分
  - 主机A ← 主机B，会使用主机A报文中的____端口号作为目的端口号。
  - 完整的返回地址
    - 主机A的 ____和源端口号
  - ```mermaid
    sequenceDiagram
    participant Host_A
    participant Host_B

    Note over Host_A,Host_B: Socket Communication
    
    Host_A->>Host_B: Message(Source Port, Destination Port)
    Note over Host_B: Records Source Port & IP
    
    Host_B->>Host_A: Reply(Using Host_A's Source Port as Destination)
    Note over Host_A,Host_B: Return Address = (Host_A IP : Source Port)
    ```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主机</li>
    <li>应用进程</li>
    <li>IP</li>
    <li>端口号</li>
    <li>应用进程</li>
    <li>识别</li>
    <li>端点</li>
    <li>目的</li>
    <li>源</li>
    <li>返回地址</li>
    <li>源</li>
    <li>IP地址</li>
  </ul>
</details>
</div>

</ul>

## 无连接服务与面向连接服务  

<ul>

### TCP/IP传输层协议概述

<ul>

- TCP/IP协议族在IP层之上使用了两个传输协议：
  - 面向连接的____（TCP）
    - 采用TCP时，传输层向上提供的是一条____的可靠逻辑信道
  - 无连接的____（UDP）
    - 采用UDP时，传输层向上提供的是一条____逻辑信道

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>传输控制协议</li>
    <li>全双工</li>
    <li>用户数据报协议</li>
    <li>不可靠</li>
  </ul>
</details>
</div>

### 传输层协议特点

<ul>

#### TCP特点与应用

<ul>

- TCP提供____的可靠服务
  - 通信双方在传送数据之前必须先____
  - 然后基于此连接进行____数据传输
  - 数据传输结束后要____
  - TCP不提供____或____服务
- TCP为实现可靠数据传输的措施
  - ____
  - ____控制
  - ____
  - ____管理等
- TCP的开销
  - 协议数据单元的____增大很多
  - 要占用许多的____资源
- TCP的适用场合
  - 主要适用于____更重要的场合，如：
    - ____（FTP）
    - ____（HTTP）
    - ____（TELNET）等

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向连接</li>
    <li>建立连接</li>
    <li>可靠</li>
    <li>释放连接</li>
    <li>广播</li>
    <li>多播</li>
    <li>确认</li>
    <li>流量</li>
    <li>计时器</li>
    <li>连接</li>
    <li>首部</li>
    <li>处理机</li>
    <li>可靠性</li>
    <li>文件传输协议</li>
    <li>超文本传输协议</li>
    <li>远程登录</li>
  </ul>
</details>
</div>

#### UDP特点与应用

<ul>

- UDP提供____的不可靠服务
  - 通信双方在传送数据之前不需要____
  - 接收方的传输层在收到UDP用户数据报后，无须给发送方发回任何____
- UDP在IP层之上的附加服务
  - ____复用
  - 对数据的____检查
- UDP的优势
  - 比较____
  - 执行速度比较____
  - ____好
- UDP的应用包括
  - ____（TFTP）
  - ____
  - ____
  - ____（RTP）

表5.1所示为一些典型互联网应用所用的TCP/IP应用层协议和传输层协议。  

表5.1一些典型互联网应用所用的TCP/IP应用层协议和传输层协议
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/31e145544e04ef12547e4868bcdfac5ddf5c7a417aa2b6348a1ff3570218580d.jpg)  

> attention:

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无连接</li>
    <li>建立连接</li>
    <li>确认</li>
    <li>多路</li>
    <li>错误</li>
    <li>简单</li>
    <li>快</li>
    <li>实时性</li>
    <li>小文件传送协议</li>
    <li>DNS</li>
    <li>SNMP</li>
    <li>实时传输协议</li>
  </ul>
</details>
</div>

</ul>

### 重要区别说明

<ul>

#### IP数据报和UDP数据报的区别

<ul>

- IP数据报
  - 在**____**要经过 **____** 的存储转发
- UDP数据报
  - 在**____**的**____**逻辑信道中传输
  - **____**成IP数据报在网络层传输时
    - UDP数据报的信息对路由器是____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>网络层</li>
    <li>路由器</li>
    <li>传输层</li>
    <li>端到端</li>
    <li>封装</li>
    <li>不可见</li>
  </ul>
</details>
</div>

#### TCP和网络层虚电路的区别

<ul>

- TCP报文段在传输层____逻辑信道中传输，对路由器____
- 虚电路所经过的交换结点都必须保存____状态信息
- 在网络层若采用虚电路方式，则无法提供____服务
- 而传输层采用TCP不影响网络层提供____服务

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>抽象</li>
    <li>不可见</li>
    <li>虚电路</li>
    <li>无连接</li>
    <li>无连接</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color:blue;">U</span>DP <span style="font-size: 14px;">User Datagram Protocol  

<ul>

## UDP数据报  

<ul>

### UDP概述  

<ul>

#### 定义

<ul>

UDP（User Datagram Protocol，用户数据报协议）
- 互联网协议套件（TCP/IP）中的一种____传输层协议
  - ____、____
- TCP提供____、____的数据传输服务

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无连接</li>
    <li>无连接</li>
    <li>不可靠</li>
    <li>面向连接</li>
    <li>可靠</li>
  </ul>
</details>
</div>

#### UDP的基本功能

<ul>

- UDP仅在 IP层的数据报（网络层） 服务之上增加了两个最基本的功能：
  - ____和____
  - ____检测

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>复用</li>
    <li>分用</li>
    <li>差错</li>
  </ul>
</details>
</div>

#### UDP的优点选择

<ul>

- 为什么应用开发者宁愿在UDP之上构建应用，也不选择TCP？
- 既然TCP提供____的服务，而UDP不提供，则TCP总是首选吗？
  - 答案是否定的，因为有很多应用更适合用____

> pro：UDP协议的特点（2014）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>UDP</li>
  </ul>
</details>
</div>

##### 主要优势

<ul>

- **____**建立**____**
  - 因此UDP不会引入建立连接的____
    - 试想若DNS运行在TCP而非UDP上，则DNS的____会慢很多
  - HTTP使用TCP而非UDP，是因为对于基于文本数据的Web网页来说，____是至关重要的
- ____状态
  - TCP需要在端系统中维护____状态
    - 此连接状态包括____和____缓存、____参数和____与____的参数
  - UDP既不维护连接状态，也不跟踪这些参数
  - 因此，当某些专用服务器使用UDP时，一般都能支持更多的____客户机
- UDP的**____开销小**
  - **TCP**有**____**的首部开销，而UDP仅有____的开销
- UDP **____控制**
  - 因此网络中的拥塞**____**源主机的**____**
  - 某些实时应用要求源主机以____发送数据，能容忍一些数据的____，但不允许有太大的____
- UDP支持**____通信**方式
  - ____、____、____和____的交互通信

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无须</li>
    <li>连接</li>
    <li>时延</li>
    <li>速度</li>
    <li>可靠性</li>
    <li>无连接</li>
    <li>连接</li>
    <li>接收</li>
    <li>发送</li>
    <li>拥塞控制</li>
    <li>序号</li>
    <li>确认号</li>
    <li>活动</li>
    <li>首部</li>
    <li>20B</li>
    <li>8B</li>
    <li>无拥塞</li>
    <li>不会影响</li>
    <li>发送速率</li>
    <li>稳定速率</li>
    <li>丢失</li>
    <li>时延</li>
    <li>多种</li>
    <li>一对一</li>
    <li>一对多</li>
    <li>多对一</li>
    <li>多对多</li>
  </ul>
</details>
</div>

#### UDP的应用场景

<ul>

- UDP常用于**____**传输**____数据**的网络应用
  - 如____、____等
  - 因为对于这些应用，若采用TCP，则将为连接____、____和____带来不小的开销
- UDP也常用于____应用
  - 如____、____、____等
  - 显然，____数据传输对这些应用来说并不是最重要的
  - TCP的____会导致数据出现较大的____，这是它们不可容忍的

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一次性</li>
    <li>较少</li>
    <li>DNS</li>
    <li>SNMP</li>
    <li>创建</li>
    <li>维护</li>
    <li>拆除</li>
    <li>多媒体</li>
    <li>IP电话</li>
    <li>实时视频会议</li>
    <li>流媒体</li>
    <li>可靠</li>
    <li>拥塞控制</li>
    <li>延迟</li>
  </ul>
</details>
</div>

#### UDP的可靠性与报文特性

<ul>

##### 可靠性处理

<ul>

- UDP不保证____交付，但这并不意味着应用对数据的要求是____
- 所有维护可靠性的工作可由用户在____来完成
- 应用开发者可根据应用的需求来灵活设计自己的____机制

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>不可靠</li>
    <li>应用层</li>
    <li>可靠性</li>
  </ul>
</details>
</div>

##### 报文处理特性

<ul>

- UDP是____的
  - 发送方处理：
    - UDP对应用层交下来的报文，在添加____后就向下交付给IP层
    - 一次发送一个报文，既不____，也不____，而是保留这些报文的____
  - 接收方处理：
    - UDP对IP层交上来UDP数据报，在去除____后就原封不动地交付给上层应用进程
    - **____**一个完整的报文
- 报文大小选择
  - 报文**____**，是UDP数据报处理的最小单位
  - 应用程序必须选择____大小的报文
    - 若报文太长，UDP把它交给IP层后，可能会导致____
    - 若报文太短，UDP把它交给IP层后，会使IP数据报的首部的____太大
    - 两者都会降低IP层的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向报文</li>
    <li>首部</li>
    <li>合并</li>
    <li>拆分</li>
    <li>边界</li>
    <li>首部</li>
    <li>一次交付</li>
    <li>不可分割</li>
    <li>合适</li>
    <li>分片</li>
    <li>相对长度</li>
    <li>效率</li>
  </ul>
</details>
</div>

</ul>

</ul>

### UDP的首部格式  

<ul>

#### 基本结构

<ul>

- UDP数据报包含两部分：
  - ____字段
  - ____字段
- UDP首部有____，由4个字段组成
  - 每个字段的长度都是____，如图5.2所示

> pro：UDP首部格式及各字段意义（2018）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>首部</li>
    <li>用户数据</li>
    <li>8B</li>
    <li>2B</li>
  </ul>
</details>
</div>

#### 字段说明

<ul>

- **____**端口
  - 源端口号
  - 在需要对方**____**选用，不需要时可用全0
- **____**端口
  - 目的端口号
  - 这在终点**____**报文时**____**
> pro： UDP首部的长度（2021)

- 长度
  - UDP数据报的长度（包括**____**和**____**）
  - 其**____**是**____**（仅有首部）
- 检验和
  - 检测UDP数据报在传输中是否有____
  - 有错就____
  - 该字段是____，当源主机不想计算检验和时，则直接令该字段为全0

- 当传输层从IP层收到UDP数据报时，就根据首部中的____端口，把UDP数据报通过应的端口，上交最后的终点一一____，如图5.3所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/da63d7c9b93503146918383294c5c15589fdbdc37358c5de93970ddb49063021.jpg)  
图5.2UDP数据报格式  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a16cc2056a05a15b10c395b7339bc3ac5fd58814468389f9a0015024fd2be756.jpg)  
图5.3UDP基于端口的分用  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>源</li>
    <li>回信时</li>
    <li>目的</li>
    <li>交付</li>
    <li>必须使用</li>
    <li>首部</li>
    <li>数据</li>
    <li>min值</li>
    <li>8</li>
    <li>错</li>
    <li>丢弃</li>
    <li>可选的</li>
    <li>目的</li>
    <li>应用进程</li>
  </ul>
</details>
</div>

#### 端口处理

<ul>

- 若接收方UDP发现收到的报文中的自的**____不正确**（即不存在对应于端口号的应用进程）
  - 则就**____**该报文
  - 并由**____**发送"____"**____**给发送方

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>端口号</li>
    <li>丢弃</li>
    <li>ICMP</li>
    <li>端口不可达</li>
    <li>差错报文</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ⚠️UDP<span style="color: orange;">检验</span>

<ul>

### UDP<span style="color: orange;">检验</span><span style="color: green;">和</span>计算概述

<ul>

- 在计算检验和时，要在UDP数据报之前增加____的伪首部
  - 伪首部并不是UDP的真正首部
  - 只是在计算____时，临时添加在UDP数据报的前面，得到一个临时的UDP数据报
  - 检验和就是按照这个临时的UDP数据报来____的
  - 伪首部既不____传送又不____递交，而只是为了计算检验和

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/05fa857d9ae050353446295e04e96bef0c74167c8553e5cf4439dd5c06e12f8d.jpg)  
图5.4UDP数据报的首部和伪首部  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>12B</li>
    <li>检验和</li>
    <li>计算</li>
    <li>向下</li>
    <li>向上</li>
  </ul>
</details>
</div>

### UDP检验和特点

<ul>

- UDP计算检验和的方法和计算IP数据报首部检验和的方法____
- 不同点：
  - IP数据报的检验和只检验____
  - UDP的检验和要将____和____一起检验

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相似</li>
    <li>IP数据报的首部</li>
    <li>首部</li>
    <li>数据部分</li>
  </ul>
</details>
</div>

### UDP检验和<span style="color: green;">计算</span>方法

<ul>

- 发送方计算步骤：
  - 首先把全0放入____字段并添加____
  - 把UDP数据报视为许多____字串接起来
  - 若UDP数据报的数据部分不是____个字节，则要在末尾填入一个____字节（但此字节不发送）
  - 按____计算出这些16位字的和
  - 将此和的____写入检验和字段，并发送
- 接收方计算步骤：
  - 把收到的UDP数据报加上____（若不为偶数个字节，则还需要补上全0字节）
  - 按____求这些16位字的和
  - 当无差错时其结果应为____，否则就表明有差错出现
  - 有差错时接收方就应该____这个UDP数据报
- ![image](https://bluejedis.github.io/picx-images-hosting/image.4g4j0ss5qe.webp)
- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9a474cc8b394cdcf814dda506d8775a8ef67f54081079a382c666e8607f4cb96.jpg)  
图5.5计算UDP检验和的例子  
-
  ```mermaid
  flowchart TD
    subgraph 发送方
        A[开始] --> B[____字段填充0]
        B --> C[添加____]
        C --> D[将UDP数据报视为____字串]
        D --> E[若为____则末尾补0]
        E --> F[计算____和]
        F --> G[将____写入校验和字段]
        G --> H[发送数据报]
    end

    subgraph 接收方
        I[接收数据报] --> J[添加____]
        J --> K[若需要则____]
        K --> L[计算____和]
        L --> M{结果是否____?}
        M -->|是| N[接受数据报]
        M -->|否| O[丢弃数据报]
    end
  ```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>检验和</li>
    <li>伪首部</li>
    <li>16位</li>
    <li>偶数</li>
    <li>全0</li>
    <li>二进制反码</li>
    <li>二进制反码</li>
    <li>伪首部</li>
    <li>二进制反码</li>
    <li>全1</li>
    <li>丢弃</li>
    <li>校验和</li>
    <li>伪首部</li>
    <li>16位</li>
    <li>奇数字节</li>
    <li>二进制反码</li>
    <li>反码</li>
    <li>伪首部</li>
    <li>补充字节</li>
    <li>二进制反码</li>
    <li>全1</li>
  </ul>
</details>
</div>

> attention:

### 注意事项

<ul>

- 检验时，若UDP数据报部分的长度**____**，则需填入一个全0字节，如图5.5所示
  - 但是此字节和伪首部一样，是____
- 若UDP检验和检验出UDP数据报是**____**的：
  - **____**
  - **____**给上层，但是需要附上错误报告，即告诉上层这是错误的数据报
- 通过伪首部的作用：
  - 可以检查____端口号、____端口号和UDP用户数据报的____
  - 还可以检查IP数据报的____和____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不是偶数个字节</li>
    <li>不发送的</li>
    <li>错误</li>
    <li>丢弃</li>
    <li>or交付</li>
    <li>源</li>
    <li>目的</li>
    <li>数据部分</li>
    <li>源IP地址</li>
    <li>目的地址</li>
  </ul>
</details>
</div>

### 检验方法评价

<ul>

- 这种简单的差错检验方法的校错能力并不____
- 好处是**____**、计算速度**____**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>强</li>
    <li>简单</li>
    <li>快</li>
  </ul>
</details>
</div>

</ul>

<span style="font-size: 45px;">  👻</span>

</ul>

# <span style="color: orange;">T</span><span style="color: green;">C</span>P

<ul>

## TCP协议的特点  

<ul>

### TCP协议的主要特点

<ul>

- TCP是在不可靠的IP层之上实现的____数据传输协议，它主要解决传输的____、____、____和____问题。TCP是TCP/IP体系中非常复杂的一个协议，主要特点如下：

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>可靠</li>
    <li>有序</li>
    <li>无丢失</li>
    <li>不重复</li>
  </ul>
</details>
</div>

#### 连接特点

<ul>

- TCP是____传输层协议，TCP连接是一条____连接
- 每一条TCP连接只能有两个____，每一条TCP连接只能是____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向连接</li>
    <li>逻辑</li>
    <li>端点</li>
    <li>一对一</li>
  </ul>
</details>
</div>

#### 可靠性

<ul>

- TCP提供____交付的服务，保证传送的数据____、____、____且____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>无差错</li>
    <li>不丢失</li>
    <li>不重复</li>
    <li>有序</li>
  </ul>
</details>
</div>

#### 通信方式

<ul>

- TCP提供**____**通信，允许通信双方的应用进程在任何时候都能发送数据
  - TCP连接的两端都设有____缓存和____缓存，用来临时存放双向通信的数据
    - 发送缓存用来暂时存放以下数据：
      - $\textcircled{\scriptsize{1}}$ 发送应用程序传送给发送方TCP准备发送的____
      - $\circledcirc$ TCP已发送但尚未收到确认的____
    - 接收缓存用来暂时存放以下数据：
      - $\textcircled{\scriptsize{1}}$ 按序到达但尚未被接收应用程序读取的____
      - $\circledcirc$ 不按序到达的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全双工</li>
    <li>发送</li>
    <li>接收</li>
    <li>数据</li>
    <li>数据</li>
    <li>数据</li>
    <li>数据</li>
  </ul>
</details>
</div>

#### 数据传输特点

<ul>

- TCP是____的，虽然应用程序和TCP的交互是一次一个数据块（大小不等）
- 但TCP把应用程序交下来的数据仅视为一连串的____字节流

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向字节流</li>
    <li>无结构</li>
  </ul>
</details>
</div>

#### 报文长度控制

<ul>

- TCP和UDP在发送报文时所采用的方式完全不同
  - UDP报文的长度由____决定
  - TCP报文的长度则根据____给出的窗口值和当前____来决定
    - 若应用进程传送到TCP缓存的数据块太长，则TCP就把它____再传送
    - 若太短，则TCP也可等到积累足够多的字节后再构成____发送出去
- 关于TCP报文的长度问题，后面会详细讨论

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>发送应用进程</li>
    <li>接收方</li>
    <li>网络拥塞程度</li>
    <li>划分得短一些</li>
    <li>报文段</li>
  </ul>
</details>
</div>

</ul>

</ul>

## TCP报文段

<ul>

### TCP报文段的结构

<ul>

- TCP传送的数据单元称为____
- TCP报文段既可以用来运载____，又可以用来____、____和____
- 一个TCP报文段分为____和____两部分
  - 整个TCP报文段作为IP数据报的____部分封装在IP数据报中，如图5.6所示
  - 其首部的前____是固定的
  - TCP首部最短为____，后面有 $\bf{____}$ 字节是根据需要而增加的选项
    - 长度为____的整数倍

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4f25e5e7af600a926e06cfbeecdb4d247bc24f97f4e1b6d8267cb4459a094260.jpg)  
图5.6TCP报文段  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>报文段</li>
    <li>数据</li>
    <li>建立连接</li>
    <li>释放连接</li>
    <li>应答</li>
    <li>首部</li>
    <li>数据</li>
    <li>数据</li>
    <li>20B</li>
    <li>20B</li>
    <li>4N</li>
    <li>4B</li>
  </ul>
</details>
</div>

### TCP <span style="color: blue;">首部</span>字段

<ul>

> pro：TCP报文段首部中各字段的分析（2012）

#### 端口字段

<ul>

- ____端口和____端口
  - 各占____
  - 分别表示发送方和接收方使用的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>源</li>
    <li>目的</li>
    <li>2B</li>
    <li>端口号</li>
  </ul>
</details>
</div>

> pro：TCP首部中序号、确认号的含义（2009、2016）

#### 序号和确认号字段

<ul>

- 序号
  - 占____，范围为 $0{\sim}____$ ，共 $____$ 个序号
  - TCP连接中传送的字节流中的每个字节都要____编号
  - 序号字段值指的是本报文段所发送的数据的____的序号
- 确认号
  - 占____
  - 是期望收到对方下一个报文段的____的序号
  - 若确认号为 $N,$ 则表明到序号 $____$ 为止的所有数据都已正确收到

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>4B</li>
    <li>2^{32}-1</li>
    <li>2^{32}</li>
    <li>按顺序</li>
    <li>第一个字节</li>
    <li>4B</li>
    <li>第一个数据字节</li>
    <li>N-1</li>
  </ul>
</details>
</div>

> pro：TCP首部的最小长度（2021)

#### 控制字段

<ul>

- 数据偏移
  - 占____位
  - 表示____长度
  - "数据偏移"的单位是____位
  - TCP首部的最大长度为 $____$
- 保留
  - 占____位
  - 保留为今后使用，目前应置为____
- 控制位
  - <span style="color: purple;">____</span>（紧急位）
  - <b><span style="color: green;">____</span></b>（确认位）
  - ____（推送位）
  - ____（复位位）
  - <span style="color: orange;">____</span>（同步位）
  - **____**（终止位）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>4</li>
    <li>首部</li>
    <li>32</li>
    <li>60\mathrm{B}</li>
    <li>6</li>
    <li>0</li>
    <li>URG</li>
    <li>ACK</li>
    <li>PSH</li>
    <li>RST</li>
    <li>SYN</li>
    <li>FIN</li>
  </ul>
</details>
</div>

#### 其他字段

<ul>

- 窗口
  - 占____，范围为 $____$
  - 窗口值告诉对方允许发送的____
- 检验和
  - 占____
  - 检验范围包括____和____两部分
- 紧急指针
  - 占____
  - 仅在 $\mathrm{{____}}\!=\!1$ 时才有意义
- 选项
  - 长度____，最长可达 $____$
  - TCP最初只规定了____选项
- 填充
  - 使整个首部长度是____的整数倍

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>2B</li>
    <li>0{\sim}2^{16}-1</li>
    <li>数据量</li>
    <li>2B</li>
    <li>首部</li>
    <li>数据</li>
    <li>2B</li>
    <li>URG</li>
    <li>可变</li>
    <li>40\mathrm{B}</li>
    <li>MSS</li>
    <li>4B</li>
  </ul>
</details>
</div>

</ul>

</ul>

## ⚠️连接管理(3次握手、4次挥手)

<ul>

### TCP连接的基本概念

<ul>

- TCP是____的协议
- 每个TCP连接都有____个阶段
  - ____建立
  - ____传送
  - ____释放

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>面向连接</li>
    <li>三个</li>
    <li>连接</li>
    <li>数据</li>
    <li>连接</li>
  </ul>
</details>
</div>

### TCP连接建立要解决的问题

<ul>

- 要使每一方能够确知____的存在
- 要允许双方协商一些____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>对方</li>
    <li>参数</li>
  </ul>
</details>
</div>

### TCP连接的特点

<ul>

- TCP连接的**____**是**____**
- 每条TCP连接 唯一地被 **____** **____**
- 同一个IP地址可以有多个不同的____连接
- 同一个端口号可以出现在多个不同的____连接中
- TCP连接的建立采用____模式
  - 主动发起连接建立的应用进程称为____
  - 被动等待连接建立的应用进程称为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>端点</li>
    <li>套接字</li>
    <li>两个端点</li>
    <li>确定</li>
    <li>TCP</li>
    <li>TCP</li>
    <li>客户/服务器</li>
    <li>客户</li>
    <li>服务器</li>
  </ul>
</details>
</div>

### TCP连接的建立  

<ul>

### TCP连接的**建立**-“三次握手”

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.41y3dmdsq7.webp)

- 过程：
  - **____**在连接建立前处于**____**（收听）状态，等待客户连接请求。

- 步骤：
   - 客户机发送连接请求：
     - 首部中的____位 $\mathrm{{SYN}} = 1$。
     - 选择一个初始序号 ${\mathrm{seq}} = ____$。
     - 进入____（同步已发送）状态。
  - 服务器收到连接请求并同意建立连接：
     - 发回确认报文段，$\mathrm{{SYN}} = 1$ 和 $\mathrm{{____}} = 1$。
     - 确认号 $\operatorname{ack} = ____$。
     - 选择自己的初始序号 ${\mathrm{seq}} = ____$。
     - 进入____（同步收到）状态。
  - 客户机收到确认后：
     - 发送确认报文段，$\mathrm{{____}} = 1$。
     - 确认号 $\mathsf{ack} = ____$。
     - 序号 ${\mathrm{seq}} = ____$。
     - 可以携带数据，若不携带数据则不消耗序号。
     - 进入____（已建立连接）状态。

- 服务器收到客户机的确认后：
  - 也进入____状态。

- 连接建立后：
  - 双方进入____通信状态，可以随时发送数据。
- pic
- ![image](https://bluejedis.github.io/picx-images-hosting/image.3yehbwb6vd.webp)
  ```mermaid
  sequenceDiagram
      participant Client
      participant Server
      Note over Server: LISTEN state
      
      Client->>Server: SYN=1, seq=____
      Note over Client: SYN-SENT state
      
      Server->>Client: SYN=1, ACK=1, seq=____, ack=____
      Note over Server: SYN-RCVD state
      
      Client->>Server: ACK=1, seq=____, ack=____
      Note over Client,Server: Both ESTABLISHED state
      
      Note over Client,Server: Full-duplex Communication
  ```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>服务器</li>
    <li>LISTEN</li>
    <li>同步</li>
    <li>x</li>
    <li>SYN-SENT</li>
    <li>ACK</li>
    <li>x + 1</li>
    <li>y</li>
    <li>SYN-RCVD</li>
    <li>ACK</li>
    <li>y + 1</li>
    <li>x + 1</li>
    <li>ESTABLISHED</li>
    <li>ESTABLISHED</li>
    <li>全双工</li>
    <li>x</li>
    <li>y</li>
    <li>x+1</li>
    <li>x+1</li>
    <li>y+1</li>
  </ul>
</details>
</div>

</ul>

### TCP连接的**释放**-四次挥手

<ul>

#### steps

<ul>

##### pic

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.7pbuse7qv.webp)
图5.8用"四次挥手"释放TCP连接  
- 

  ```PlantUML
  @startuml
  ' 设置注释背景颜色
  skinparam note {
    BackgroundColor #ffffff
  }

  ' 定义参与者
  participant Client
  participant Server

  ' 添加注释并指定背景颜色
  note over Client, Server
    Active Connection
  end note

  Client -> Server : FIN=1, seq=____
  note over Client
    FIN-WAIT-1 state
  end note

  Server -> Client : ACK=1, seq=____, ack=____
  note over Server
    CLOSE-WAIT state
  end note
  note over Client
    FIN-WAIT-2 state
  end note

  note over Client, Server #f96
    Half-closed state
  end note

  Server -> Client : FIN=1, seq=____, ack=____
  note over Server
    LAST-ACK state
  end note

  Client -> Server : ACK=1, seq=____, ack=____
  note over Client
    TIME-WAIT state (2MSL)
  end note
  note over Server
    CLOSED state
  end note

  note over Client
    CLOSED state after 2MSL
  end note
  @enduml
```

</ul>

##### 第一步

<ul>

- 客户机打算关闭连接时：
  - 向其TCP发送____报文段，并停止发送数据
  - 主动关闭TCP连接
  - 该报文段的____位FIN置1
  - **____** $seq=\!____$，等于前面已传送过的数据的最后一个字节的序号加1
  - FIN报文段即使不携带数据，也要消耗掉一个____
  - 客户机进入____（终止等待1）状态
- TCP是**____**的：
  - 可以想象为一条TCP连接上有两条数据通路
  - 发送FIN的一端不能再发送数据，即关闭了其中一条____
  - 但对方还可以发送数据

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连接释放</li>
    <li>终止</li>
    <li>序号</li>
    <li>u</li>
    <li>序号</li>
    <li>FIN-WAIT-1</li>
    <li>全双工</li>
    <li>数据通路</li>
  </ul>
</details>
</div>

##### 第二步

<ul>

- 服务器收到连接释放报文段后：
  - 发出确认，**____** $ack=\!____$
  - 序号 ${\mathfrak{s e q}}\!=\!____$，等于它前面已传送过的数据的最后一个字节的序号加1
  - 服务器进入____（关闭等待）状态
- 此时：
  - C → S 方向的连接 **____**了
  - TCP连接处于<b><span style="color: green;">____</span><span style="color: orange;">____</span></b>状态
  - 服务器若发送数据，客户机仍要接收
- 客户机：
  - 收到来自服务器的确认后，进入____（终正等待2）状态
  - 等待服务器发出的____报文段

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>确认号</li>
    <li>u+1</li>
    <li>v</li>
    <li>CLOSE-WAIT</li>
    <li>释放</li>
    <li>半</li>
    <li>关闭</li>
    <li>FIN-WAIT-2</li>
    <li>连接释放</li>
  </ul>
</details>
</div>

> pro：TCP连接释放过程中状态的变化（2021）

##### 第三步

<ul>

- 若<span style="color: green;">____</span>已经没有要向客户机发送的数据：
  - 通知TCP释放连接
  - 发出 $\mathrm{____}\!=\!1$ 的连接释放报文段
  - 报文段序号为 $____$（处于半关闭状态的服务器可能又发送了一些数据）
  - 重复发送上次已发送的确认号 $\operatorname{ack}\!=\!____$
  - 服务器进入____（最后确认）状态

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>sever</li>
    <li>FIN</li>
    <li>w</li>
    <li>u+1</li>
    <li>LAST-ACK</li>
  </ul>
</details>
</div>

> pro：TCP连接释放的过程及状态变化的时间分析（2016、2022）

##### 第四步

<ul>

- 客户机收到连接释放报文段后：
  - 必须发出____
  - 进入____（时间等待）状态
  - 该报文段的确认位____置1
  - 确认号 $\operatorname{ack}\!=\!____$
  - 序号 $\scriptstyle{\mathrm{seq}}\,=\,____$
- <span style="color: green;">____</span>：
  - 收到该确认报文段后就进入____（连接关闭）状态
- <span style="color: blue;">____</span>：
  - 进入TIME-WAIT状态后，还要经过时间等待计 ____后，才进入CLOSED状态 ← just 规定
    - 2MSL：**____**Maximum segments lifetime（）
  - 若服务器收到连接释放请求后不再发送数据：
    - 从客户机发出FIN报文段时刻算起，客户机释放连接的最短时间为 $____$
    - 服务器释放连接的==最短==时间为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>确认</li>
    <li>TIME-WAIT</li>
    <li>ACK</li>
    <li>w+1</li>
    <li>u+1</li>
    <li>sever</li>
    <li>CLOSED</li>
    <li>client</li>
    <li>2 MSL</li>
    <li>2倍</li>
    <li>1\,\mathrm{RTT}+2\,\mathrm{MSL}</li>
    <li>1.5RTT</li>
  </ul>
</details>
</div>

</ul>

#### 保活计时器

<ul>

- TCP**____**保活计时器：
  - 解决TCP双方建立连接后，客户主机突然____的情况
  - **____**服务器**____**客户发来的数据

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>设有</li>
    <li>故障</li>
    <li>防止</li>
    <li>一直等待</li>
  </ul>
</details>
</div>

#### ⚠️TCP连接建立和释放**总结**

<ul>

##### 建立连接（3步）

<ul>

- SYN=1,seq=**____**
  - SYN=1,ACK=1,seq=____,ack=**____**
- ACK=1,seq=**____**,ack=____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>x</li>
    <li>y</li>
    <li>x+1</li>
    <li>x+1</li>
    <li>y+1</li>
  </ul>
</details>
</div>

##### 释放连接（4步）

<ul>

- **____**=1,seq=**____**
  - ACK=1,seq=____,ack=**____** (被)
  - **____**=1,ACK=1,seq=*____*,ack=**____**(被)
- ACK=1,seq=**____**,ack=*____*

选择题喜欢考查（关于连接建立和释放的题目，<span style="color: green;">____</span>、<span style="color: orange;">____</span>、**____**=**____**），请牢记。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>FIN</li>
    <li>u</li>
    <li>v</li>
    <li>u+1</li>
    <li>FIN</li>
    <li>w</li>
    <li>u+1</li>
    <li>u+1</li>
    <li>w+1</li>
    <li>ACK</li>
    <li>SYN</li>
    <li>FIN</li>
    <li>1</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## TCP可靠传输  

<ul>

- TCP提供____数据传输服务：
  - 在不可靠的**____**之上建立
  - 确保接收方读出的字节流与发送方发出的**____完全一致**

- TCP使用以下机制实现可靠性：
  - ____：
    - 与UDP的检验机制相同
  - ____：
    - 给每个字节分配序号，确保数据按序到达
  - ____：
    - 接收方发送确认信息，告知发送方已成功接收哪些数据
  - ____：
    - 发送方未在规定时间内收到确认，则重传数据

> pro: TCP的**确认机制**，**序号**和**确认号**的含义（2011、2012、2013）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>IP层</li>
    <li>字节流</li>
    <li>检验</li>
    <li>序号</li>
    <li>确认</li>
    <li>重传</li>
  </ul>
</details>
</div>

### 序号  

<ul>

- TCP首部中的序号字段：
  - 作用是确保数据能按顺序提交给____。
  - TCP将数据视为一个____但____的字节流。
  - 序号是针对传送的____而不是报文段。

- 数据流中的每个字节都有序号：
  - 序号字段值表示本报文段发送的数据的____的序号。
  - 举例说明：
    - 假设A和B建立了一条TCP连接。
    - A的发送缓存区有10个字节，序号从0开始。
    - 第一个报文段包含第0到第2个字节，则该TCP报文段的序号是____。
    - 第二个报文段的序号是____。

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c26ac704f59eca3c51a2c5c371f1336b60b64260c34e4d2227d63e9f9712d1c8.jpg)  
图5.9A的发送缓存区中的数据划分成TCP段  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>应用层</li>
    <li>无结构</li>
    <li>有序</li>
    <li>字节流</li>
    <li>第一个字节</li>
    <li>0</li>
    <li>3</li>
  </ul>
</details>
</div>

### 确认  

<ul>

- TCP首部的确认号字段：
  - 表示接收方期望收到的下一个报文段的____的序号。
  - 举例说明：
    - 如果接收方B已经收到了第一个报文段的数据，那么B希望下一个报文段从第____字节开始，则B发送给A的报文段中的确认号字段应为____。

- 发送方缓存区：
  - 会继续存储已发送但未收到____的报文段，以便在必要时____。

- TCP默认使用____确认：
  - 只确认数据流中至第一个丢失字节为止的字节。
  - 举例说明：
    - 如果接收方B收到了包含字节0到2和字节6到7的报文段，但未收到字节3到5，那么B仍在等待字节____及其后面的字节。
    - 在这种情况下，B发送给A的下一个报文段将确认号字段置为____，表示确认至字节2，并期待字节3。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>第一个数据字节</li>
    <li>3</li>
    <li>3</li>
    <li>确认</li>
    <li>重传</li>
    <li>累积</li>
    <li>3</li>
    <li>3</li>
  </ul>
</details>
</div>

### <span style="color: purple;">重传</span>  

<ul>

- 有两种事件会导致TCP对报文段进行重传：____和____。

#### <span style="color: orange;">超时</span>重传  

<ul>

- TCP协议工作原理：
  - 每发送一个报文段时，TCP会设置一个____。
  - 如果在计时器到期之前没有收到报文段的____，TCP会重传该报文段。

- 互联网环境下的挑战：
  - 由于互联网中IP数据报的____变化很大，导致传输层的____也有很大的方差。

- 超时计时器的自适应算法：
  - TCP记录报文段的____时间和收到____的时间，这两个时间差即为____（RTT）。
  - TCP维护着一个加权平均的RTT值，称为____，它会根据新的RTT样本值进行调整。
  - 超时计时器设置的____（RTO）应略大于RTTS，但不宜过大，以确保在报文段丢失时TCP能够迅速重传，避免过大的____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>超时计时器</li>
    <li>确认</li>
    <li>路由选择</li>
    <li>往返时延</li>
    <li>发送</li>
    <li>确认</li>
    <li>往返时间</li>
    <li>RTTS</li>
    <li>重传时间</li>
    <li>数据传输时延</li>
  </ul>
</details>
</div>

#### <span style="color: Violet;">冗余</span> ACK重传  

<ul>

##### 超时重传的缺陷

<ul>

- 超时触发重传存在的问题是____通常很长

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>超时周期</li>
  </ul>
</details>
</div>

#####  <span style="color: Violet;">冗余</span> ACK机制

<ul>

- 优势
  - 发送方通常可以在____事件发生之前，通过检测冗余ACK来较好地识别____情况
- 定义
  - 冗余ACK是指对某个报文段进行**____**的**____**，而发送方之前已经收到过该报文段的确认

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>超时</li>
    <li>丢包</li>
    <li>重复确认</li>
    <li>ACK</li>
  </ul>
</details>
</div>

##### 工作过程示例

<ul>

- 场景设置
  - 发送方A发送了序号为1、2、3、4、5的TCP报文段，其中**____**号报文段在传输过程中**____**
- r方 行为
  - 由于2号报文段丢失，3、4、5号报文段对于接收方B来说是____的
  - TCP规定，当接收方收到比期望序号大的失序报文段时____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>2</li>
    <li>丢失</li>
    <li>失序</li>
    <li>发送冗余ACK</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

---

以上内容已按照要求完成挖空处理，保留了原有的目录结构，并确保内容完整。每个次级标题下的挖空答案均以HTML折叠块形式置于下方，符合Markdown公式渲染要求。

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，包含 Markdown 和 HTML 折叠块格式。挖空的关键词、公式和关键步骤已在正文中用下划线（____）表示，并在每个次级标题下以折叠块形式列出答案。原有的目录结构和内容未做任何改变或省略。

---

# TCP<span style="color: green;">可靠</span>传输  

<ul>

### 基本概念与机制

<ul>

- TCP基于不可靠的IP服务，通过一系列机制实现____传输
- 核心机制包括：
  - 报文段的____机制
  - ____确认机制
  - ____重传机制

</ul>

### 可靠传输实现过程

<ul>

#### 数据发送与确认

<ul>

- 发送方发送带____的数据，接收方通过发送____报文段确认收到的数据
- TCP使用____确认方式，即确认报文段指明下一个期望接收的字节序号
  - 如接收到1~100字节的数据，下一个确认报文段指明期望接收____字节

</ul>

#### 重传机制

<ul>

- 若发送方在____时间内未收到确认，则认为数据丢失，触发____
- 会发送一个____ACK，指明下一个期望接收的字节序号
  - **3、4、5**号报文段到达B时，B发现它们不是期望接收的下一个报文段
  - 发送**3**个对____号报文段的**冗余ACK**
    - 表示期望接收____号报文段
- s方 响应
  - 当发送方A收到对同一个报文段的____个冗余ACK时
    - 可以判断____号报文段已经丢失，并立即对____号报文段进行____
  - 这种技术称为 <span style="color: green;">____</span><span style="color: purple;">____</span>

</ul>

##### 应用范围

<ul>

- 冗余ACK不仅在____检测中使用，还在____控制中发挥作用，这将在后续内容中讨论

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>编号</li>
    <li>累积</li>
    <li>超时</li>
    <li>序号</li>
    <li>ACK</li>
    <li>101</li>
    <li>超时</li>
    <li>重传</li>
    <li>冗余</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>2</li>
    <li>2</li>
    <li>重传</li>
    <li>快速</li>
    <li>重传</li>
    <li>丢包</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

## TCP<span style="color: green;">流量</span>控制  

<ul>

### 基本概念

<ul>

- 流量控制的功能就是让发送方的发送速率不要太快，以便让接收方来得及接收，因此可以说流量控制是一个____匹配服务（匹配发送方的发送速率与接收方的读取速率）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>速度</li>
  </ul>
</details>
</div>

### 实现机制

<ul>

#### TCP<span style="color: green;">滑动</span>窗口

<ul>

- TCP使用____窗口sw 机制进行流量控制：
  - 这个机制在第3章中已经介绍过其基本原理。

- 流量控制的目的：
  - 确保发送方不会发送超过接收方____能力的报文量。

- 实现方式：
  - 接收方维护一个**____窗口**（rwnd），它表示接收方当前可接收的____量。
    - 接收窗口的**____** ← 接收方的接收缓存大小决定，并动态调整。
    - 接收方通过TCP报文段首部的"____"字段通知发送方其接收窗口的大小。
  - 发送方的发送窗口大小不能超过接收方提供的____窗口值，这样可以避免发送方发送过快，导致接收方处理不过来。

- 结果：
  - 这种方式<span style="color: green;">____</span>了**发送方**发送数据的**____**，从而实现流量控制。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>滑动</li>
    <li>处理</li>
    <li>接收</li>
    <li>数据</li>
    <li>大小</li>
    <li>窗口</li>
    <li>接收</li>
    <li>限制</li>
    <li>速率</li>
  </ul>
</details>
</div>

#### 流量控制process

<ul>

- 图5.10说明了如何利用____窗口机制进行流量控制
  - 接收方B
    - 可通过设置确认报文段首部中的窗口字段来将____通知给A
      - **rwnd**即**接收方** 允许**____接收**的**____**
        - 单位是____
  - 发送方A
    - 总是**根据**最新收到的**____**值来限制自己发送窗口的大小
      - 保证A不会使B的接收缓存____
- process
  - 连接建立时，B告诉A："我的接收窗口rwnd $=____$"
  - 接收方B进行了**____次流量控制**
    - 第一次把窗口减到rwnd $=____$
    - 第二次又减到rwnd $=____$
    - 最后减到rwnd $=____$

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2ea4a8c799f964a7e96572594c00edii4f1536d705a7e0ede4d1ac19178b9e9412.jpg)`  
图5.10利用可变窗口进行流量控制举例  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>滑动</li>
    <li>rwnd</li>
    <li>连续</li>
    <li>能力</li>
    <li>字节</li>
    <li>rwnd</li>
    <li>溢出</li>
    <li>4000</li>
    <li>三次</li>
    <li>300</li>
    <li>100</li>
    <li>0</li>
  </ul>
</details>
</div>

#### <span style="color: green;">持续</span>计时器机制

<ul>

- TCP为每个连接设有一个____计时器
  - 发送方 收到对方的**____通知** ← **____**持续计时器
  - 计时器**____** → 发送零窗口**____报文**段
    - 对方在**____**探测报文段时 → 给出现在的窗口值
- 若窗口仍为零，发送方收到确认后重新设置____计时器

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>持续</li>
    <li>零窗口</li>
    <li>启动</li>
    <li>超时</li>
    <li>探测</li>
    <li>确认</li>
    <li>持续</li>
  </ul>
</details>
</div>

</ul>

### 与<span style="color: blue;">数据链路层</span>流量控制的区别

<ul>

- 实现**____**不同
  - 数据链路层：两个中间的相邻**____**之间
  - 传输层：**____**到**____**，两个进程之间
- **____特性**不同
  - 数据链路层：**窗口大小** **____动态变化**
  - 传输层：~ **____**~

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>范围</li>
    <li>结点</li>
    <li>端</li>
    <li>端</li>
    <li>窗口</li>
    <li>不能</li>
    <li>可以</li>
  </ul>
</details>
</div>

</ul>

</ul>

## TCP<span style="color: orange;">拥塞</span>控制  

<ul>

### 基本概念

<ul>

- 拥塞控制是指防止过多的数据注入网络，保证网络中的____或链路不致过载
- 出现拥塞时，端点并不了解拥塞发生的____
- 对通信的端点来说，拥塞往往表现为通信____的增加

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>路由器</li>
    <li>细节</li>
    <li>时延</li>
  </ul>
</details>
</div>

### 与流量控制的区别

<ul>

#### 控制范围

<ul>

- 拥塞控制
  - ____性过程
  - 涉及所有主机、路由器及相关因素
- 流量控制
  - ____通信量控制
  - 端到端问题

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全局</li>
    <li>点对点</li>
  </ul>
</details>
</div>

#### 相似之处

<ul>

- 都通过控制发送方发送数据的____来达到控制效果

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>速率</li>
  </ul>
</details>
</div>

#### 应用场景示例

<ul>

- 高速链路场景
  - 链路速率：$____\mathrm{{Gb}}/s$
  - 大型机向PC传送：____Gb/s
  - 需要____控制而非拥塞控制
- 多用户场景
  - ____万台PC同时传送：每台____Mb/s
  - 需要考虑网络____承受能力

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>10</li>
    <li>1</li>
    <li>流量</li>
    <li>100</li>
    <li>1</li>
    <li>负载</li>
  </ul>
</details>
</div>

</ul>

### 拥塞控制算法

<ul>

- TCP有____种拥塞控制算法
  - ____开始
  - ____避免
  - ____重传
  - ____恢复

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>四</li>
    <li>慢</li>
    <li>拥塞</li>
    <li>快</li>
    <li>快</li>
  </ul>
</details>
</div>

### 拥塞控制机制

<ul>

#### 窗口控制

<ul>

- 发送方需维持 **____**窗口（cwnd）
- 拥塞窗口大小取决于网络____程度
- 动态变化原则
  - 网络未拥塞：____窗口
  - 网络出现拥塞：____窗口

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>拥塞</li>
    <li>拥塞</li>
    <li>增大</li>
    <li>减小</li>
  </ul>
</details>
</div>

#### 发送窗口确定

<ul>

- 发送窗口上限值计算：
  - 发送窗口的上限值 $= \min[____, ____]
- 影响因素说明
  - ____窗口通过TCP报文首部窗口字段通知
  - ____窗口由网络拥塞程度决定

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>rwnd</li>
    <li>cwnd</li>
    <li>接收</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

#### 说明

<ul>

- 假设条件
  - 数据为____方向传送，对方只传送确认报文
  - 接收方有足够大的____空间
  - 发送窗口大小由网络____程度决定
- 度量单位
  - 采用 **____报文段长度** MSS 作为拥塞窗口大小的单位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>单</li>
    <li>缓存</li>
    <li>拥塞</li>
    <li>最大</li>
  </ul>
</details>
</div>

</ul>

### 慢开始和拥塞避免  

<ul>

#### <span style="color: orange;">慢</span>开始  

<ul>

##### 基本思路与方法

<ul>

- 当发送方刚开始发送数据时，因为并不清楚网络的____情况，若立即把大量数据注入网络，则有可能引发网络____
- 具体方法是：
  - 先发送**____**数据**____**一下，若没有发生拥塞
    - 则适当增大____窗口
  - 即由小到大逐渐增大____窗口（即发送窗口）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>负荷</li>
    <li>拥塞</li>
    <li>少量</li>
    <li>探测</li>
    <li>拥塞</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

##### 实现过程

<ul>

- A向B发送数据，发送方先令cwnd $=____$ ，即一个MSS
- A发送第一个报文段，A收到B对第一个报文段的____后，把cwnd从1增大到____
- A接着发送____个报文段，A收到B对这两个报文段的确认后，把cwnd从2增大到____，下次就可一次发送____个报文段
- 
  ```mermaid
    sequenceDiagram
      participant A
      participant B
      Note over A: cwnd = 1 MSS
      A->>B: Send 1 segment
      B->>A: ACK
      Note over A: cwnd = ____ MSS
      A->>B: Send ____ segments
      B->>A: ACK
      Note over A: cwnd = ____ MSS
      Note over A: Ready to send ____ segments
  ```

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>确认</li>
    <li>2</li>
    <li>2</li>
    <li>4</li>
    <li>4</li>
    <li>2</li>
    <li>2</li>
    <li>4</li>
    <li>4</li>
  </ul>
</details>
</div>

##### 特点说明

<ul>

- 慢开始的"慢"并不是指拥塞窗口cwnd的增长速率慢，而是指在TCP开始发送报文段时先设置cwnd $=____$
  - 每经过一个传输轮次（即往返时延RTT），cwnd就会____，即cwnd的值随传输轮次____增长
  - 为防止cwnd增长过大而引起网络拥塞，需要设置一个慢开始____（网值）
    - 当慢开始一直把cwnd增大到一个规定的ssthresh时 → ____避免算法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>加倍</li>
    <li>指数</li>
    <li>门限</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

</ul>

#### 拥塞<span style="color: green;">避免</span>算法  

<ul>

##### 基本思路

<ul>

- 让**____窗口**cwnd**____增大**
- 每经过一个往返时延RTT就把发送方的拥塞窗口cwnd加____，而不是加倍
- 使拥塞窗口cwnd按____规律缓慢增长（即加法增大）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>拥塞</li>
    <li>缓慢</li>
    <li>1</li>
    <li>线性</li>
  </ul>
</details>
</div>

##### 算法执行规则

<ul>

- 当cwnd$<____$时 → ____开始算法
- 当cwnd $> ____$时，停止使用慢开始算法而改用____避免算法
- 当cwnd $= ____$时，既可使用慢开始算法，又可使用____避免算法（通常做法）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ssthresh</li>
    <li>慢</li>
    <li>ssthresh</li>
    <li>拥塞</li>
    <li>ssthresh</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

</ul>

#### 网络拥塞的处理  

<ul>

##### 处理方法

<ul>

- 无论在慢开始阶段还是在拥塞避免阶段，只要发送方**____** **网络**出现**____**：
  - 首先把 慢开始**____** **ssthresh**设置为
    - **出现拥塞时**的**发送方**的cwnd值的一半（但不能小于____）
  - 然后把**____窗口**cwnd重新设置为____
  - 执行____开始算法

*减小ssthresh，重新开始慢开始

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>判断</li>
    <li>拥塞</li>
    <li>门限</li>
    <li>2</li>
    <li>拥塞</li>
    <li>1</li>
    <li>慢</li>
  </ul>
</details>
</div>

##### 实现过程示例

<ul>

- 初始时：
  - 拥塞窗口置为____，即cwnd $=____$
  - 慢开始门限置为____，即ssthresh $=____$

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a1450fb7a0a2a7cbc01c8a1dcf0c026c45cb4c81db6c5a4ba5ff6ac97202f4bd.jpg)`  
图5.11慢开始和拥塞避免算法的实现过程  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>16</li>
    <li>16</li>
  </ul>
</details>
</div>

##### 窗口变化过程

<ul>

- 慢开始阶段：
  - 发送方**每**收到一个对新报文段的确认**____**，就把拥塞窗口**____**
    - 经过每个传输轮次（RTT），cwnd呈<span style="color: blue;">____</span>规律增长
  - 当cwnd增长到慢开始门限ssthresh时（即当cwnd $=____$ 时），改用____避免算法
    - cwnd按<span style="color: orange;">____</span>规律增长

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ACK</li>
    <li>cwnd+1</li>
    <li>指数</li>
    <li>16</li>
    <li>拥塞</li>
    <li>线性</li>
  </ul>
</details>
</div>

##### <span style="color: orange;">超时</span>处理

<ul>

- 当cwnd $=____$ 时，网络出现____：
  - 调整ssthresh值为____（即为超时时cwnd值的一半）
  - cwnd置为____
  - 执行____开始算法
  - 当cwnd $=____$ 时，改为执行____避免算法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>24</li>
    <li>超时</li>
    <li>12</li>
    <li>1</li>
    <li>慢</li>
    <li>12</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

##### 注意事项

<ul>

- 在慢开始阶段：
  - 若2cwnd $> ____$，RT T cw nd s s thresh,而不等于____
  - 第16个轮次时cwnd $=____$ 、ssthresh $=____$ ，则第17个轮次时cwnd $=____$ ，而不等于____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ssthresh</li>
    <li>2cwnd</li>
    <li>8</li>
    <li>12</li>
    <li>12</li>
    <li>16</li>
  </ul>
</details>
</div>

##### 算法特点

<ul>

- 使用了"____减小"和"____增大"方法：
  - "**____减小**"：
    - 出现超时时，把ssthresh设置为当前拥塞窗口的____
    - 网络频繁出现拥塞时，ssthresh值____下降
  - "**____增大**"：
    - 执行拥塞避免算法后，每个RTT后cwnd增加一个____大小
      - RTT（Round-Trip Time，____时延）
    - 使拥塞窗口**____增大**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>乘法</li>
    <li>加法</li>
    <li>乘法</li>
    <li>一半</li>
    <li>快速</li>
    <li>加法</li>
    <li>MSS</li>
    <li>往返</li>
    <li>缓慢</li>
  </ul>
</details>
</div>

##### 拥塞避免的局限性

<ul>

- 拥塞避免并不能完全避免____
- 拥塞避免是指在拥塞避免阶段把拥塞窗口控制为按____规律增长

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>拥塞</li>
    <li>线性</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: green;">快<span style="color: purple;">重传</span><span style="color: gray;">和</span>快恢复  

<ul>

#### 背景介绍

<ul>

- 个别报文段在网络中丢失时，网络可能并未发生____
  - 发送方未收到确认会产生____，误认为网络发生____
    - 错误启动____开始算法会降低传输效率
- 快重传算法可让发送方尽早知道个别报文段的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>拥塞</li>
    <li>超时</li>
    <li>拥塞</li>
    <li>慢</li>
    <li>丢失</li>
  </ul>
</details>
</div>

#### <span style="color: green;">快<span style="color: purple;">重传</span>  

<ul>

##### 基本原理

<ul>

- 使<span style="color: blue;">____</span>尽快进行重传，不等____计时器超时
- <span style="color: green;">____</span>要求：
  - **____等待**自已发送数据时才进行捐带确认
  - **____发送**确认
    - 收到失序报文段也要立即发出对已收到报文段的____确认
- 发送方收到**____个**冗余**____** → 立即重传相应报文段

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>sender</li>
    <li>超时</li>
    <li>receiver</li>
    <li>不要</li>
    <li>立即</li>
    <li>重复</li>
    <li>3</li>
    <li>ACK</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: green;">快恢复  

<ul>

##### 算法原理

<ul>

- 发送方连续收到____个允余ACK时：
  - 执行"____减小"MD方法
    - 把ssthresh调整为当前cwnd的____
      - 把cwnd值调整为当前cwnd的____
  - 开始执行____避免算法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>3</li>
    <li>乘法</li>
    <li>一半</li>
    <li>一半</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

##### 特点

<ul>

- **跳过了**拥塞窗口cwnd从____起始的**____开始**过程
- **____**进入**____避免**阶段

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/62dd33f004450128a3f441728d804d8b3a69264acb169f32cceb123861070b61.jpg)`  
图5.12快恢复算法的实现过程  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>慢</li>
    <li>直接</li>
    <li>拥塞</li>
  </ul>
</details>
</div>

</ul>

#### 算法应用总结

<ul>

- TCP**____建立**和网络出现**____**时：
  - 采用<span style="color: orange;">____</span>开始  和拥塞<span style="color: green;">____</span>算法
  - ssthresh = cwnd/2，cwnd $=____$
- 发送方收到____个冗余ACK时：
  - 采用<span style="color: green;">快<span style="color: purple;">____</span><span style="color: gray;">和</span>____恢复 
  - ssthresh $=____$/2，cwnd $=____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连接</li>
    <li>超时</li>
    <li>慢</li>
    <li>避免</li>
    <li>1</li>
    <li>3</li>
    <li>重传</li>
    <li>快</li>
    <li>cwnd</li>
    <li>ssthresh</li>
  </ul>
</details>
</div>

#### 发送窗口swnd控制

<ul>

- 流量控制：
  - <span style="color: blue;">____</span>发送数据的量 ←  <span style="color: green;">____</span>决定
- 拥塞控制：
  - <span style="color: blue;">____</span>自己通过检测网络状况来决定
- swnd大小：
  - 由____控制和____控制共同决定
  - 取决于rwnd和cwnd中**____的值**

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>sender</li>
    <li>receiver</li>
    <li>sender</li>
    <li>流量</li>
    <li>拥塞</li>
    <li>较小</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

- - -

</ul>

# 本章小结及疑难点  

<ul>

1.MSS设置得太大或太小会有什么影响？  

<ul>

- TCP规定____报文段长度（MSS）的原因：
  - 不是由于接收方缓存可能放不下TCP报文段中的数据。
  - 实际上，MSS与____窗口没有关系。

- MSS的考虑因素：
  - TCP报文段的数据部分至少需要加上____字节的首部（____字节的TCP首部和____字节的IP首部）才能组成一个IP数据报。
  - 若选择较小的MSS值，网络的____率会很低。
    - 例如，当TCP报文段只含有____字节的数据时，IP层传输的数据报的开销至少有____字节。
    - 这样，网络的利用率不会超过____。
  - 在数据链路层还要加上一些开销，网络的利用率会进一步____。

- MSS的最佳选择：
  - 应尽可能大，只要在IP层传输时不需要再____。
  - 由于IP数据报所经历的路径是____变化的，所以最佳的MSS很难确定。
  - MSS的默认值为____字节。
  - 因此，在互联网上的所有主机都应能接受的报文段长度是 $____ + ____ = ____$ 字节。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>最大</li>
    <li>接收</li>
    <li>40</li>
    <li>20</li>
    <li>20</li>
    <li>利用</li>
    <li>1</li>
    <li>40</li>
    <li>1/41</li>
    <li>降低</li>
    <li>分片</li>
    <li>动态</li>
    <li>536</li>
    <li>536</li>
    <li>20</li>
    <li>556</li>
  </ul>
</details>
</div>

2.TCP使用的是GBN还是选择重传？  

<ul>

- TCP与GBN协议的区别：
  - TCP使用____确认，类似于GBN协议。
  - 但TCP不会丢弃正确收到但____的报文段，而是缓存起来，并发送____ACK，指明期望收到的下一个报文段。这是TCP与GBN的一个显著区别。

- TCP重传机制：
  - 假设A发送了 $N$ 个报文段，其中第 $k$ 个报文段____，其余 $N-1$ 个报文段按序到达接收方B。
  - 在GBN协议中，A需要重传分组 $k$ 以及所有后继分组 $____, ____, \cdots, N$。
  - 在TCP中，A通常只重传一个报文段，即报文段 $____$。

- TCP的选择确认（SACK）选项：
  - 提供了____确认选项，使TCP在某种程度上类似于SR协议。
  - 因此，TCP的差错恢复机制可以看作是____和____协议的混合体。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>累积</li>
    <li>失序</li>
    <li>冗余</li>
    <li>丢失</li>
    <li>k+1</li>
    <li>k+2</li>
    <li>k</li>
    <li>选择</li>
    <li>GBN</li>
    <li>SR</li>
  </ul>
</details>
</div>

3.为什么超时事件发生时cwnd被置为1，而收到3个冗余ACK时cwnd减半？  

<ul>

- 分析网络____程度的两种情况：
  - ____事件发生
  - 收到____个冗余ACK

- 超时事件发生：
  - 表明网络可能已经拥塞到连____报文段都无法传输。
  - 发送方只能等待____后重传数据。
  - 因此，这种情况下的网络____程度更严重。

- 收到3个冗余ACK：
  - 表明网络虽然____，但至少ACK报文段还能被正确交付。
  - 发送方只需稍微抑制一下发送的____量。

- 拥塞窗口（cwnd）的调整：
  - 超时事件发生时：
    - 网络____严重，发送方应最大限度地抑制数据发送量。
    - 因此，cwnd置为____。
  - 收到3个冗余ACK时：
    - 网络____程度较轻。
    - 因此，cwnd____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>拥塞</li>
    <li>超时</li>
    <li>3</li>
    <li>ACK</li>
    <li>超时</li>
    <li>拥塞</li>
    <li>拥塞</li>
    <li>数据</li>
    <li>拥塞</li>
    <li>1</li>
    <li>拥塞</li>
    <li>减半</li>
  </ul>
</details>
</div>

4.为什么不采用“两次握手”建立连接呢？  

<ul>

- 使用“____握手”建立TCP连接的原因：
  - 防止____的连接请求报文段导致的错误。

- 情景模拟：
  - 客户A向服务器B发出TCP____请求。
  - 第一个连接请求报文在网络中____。
  - A____后重传连接请求。
  - B收到重传的请求后建立____。
  - 数据传输完毕，连接____。
  - 此时，滞留的连接请求到达B。

- 若采用“三次握手”：
  - B收到失效的连接请求后，向A发送____报文段。
  - A不理睬，因为并未发出新的____请求。
  - 连接建立____，避免资源浪费。

- 若采用“两次握手”：
  - B收到失效的连接请求后，认为连接已经____。
  - B等待A传输数据，但A并未请求____。
  - B的资源被白白____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>三次</li>
    <li>失效</li>
    <li>连接</li>
    <li>滞留</li>
    <li>超时</li>
    <li>连接</li>
    <li>断开</li>
    <li>确认</li>
    <li>连接</li>
    <li>失败</li>
    <li>建立</li>
    <li>连接</li>
    <li>浪费</li>
  </ul>
</details>
</div>

5.为什么TCP在建立连接时不能每次都选择相同的、固定的初始序号？  

<ul>

- TCP连接的建立和释放过程中可能遇到的问题：
  - 主机A和B频繁地建立____、传送报文段、释放____，然后重复这个过程。
  - 每次建立连接时，主机A选择____的、固定的初始序号（例如____）。
    - 主机A发出的某些TCP报文段在网络中____较长时间，导致____重传。
    - 一些滞留时间较长的TCP报文段最终到达主机B，但此时原连接已____，而新的TCP连接已经____。

- 可能导致的问题：
  - 新的TCP连接的主机B可能错误地接收在旧连接中传送的、已无意义的、____的TCP报文段。
  - 这种情况可能发生是因为过时的TCP报文段的序号正好处在当前新连接所用的____范围内。

- 解决方法：
  - 必须确保迟到的TCP报文段的____不处在新连接所用的序号范围内。
  - TCP在建立新的连接时，选择的____序号应与前面一些连接所用过的序号不同。
  - 不同的TCP连接不能使用____的初始序号。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连接</li>
    <li>连接</li>
    <li>相同</li>
    <li>1</li>
    <li>滞留</li>
    <li>超时</li>
    <li>释放</li>
    <li>建立</li>
    <li>过时</li>
    <li>序号</li>
    <li>序号</li>
    <li>初始</li>
    <li>相同</li>
  </ul>
</details>
</div>

6.假定在一个互联网中，所有链路的传输都不出现差错，所有结点也都不会发生故障。试问在这种情况下，TCP的“可靠交付”功能是否就是多余的？  

<ul>

不是多余的。
- TCP的“____交付”功能在互联网中至关重要，至少在以下情况下是必不可少的：
  - IP数据报独立选择____，可能导致到达目的主机时____。
  - 路由选择计算错误可能导致IP数据报在互联网中____，直至TTL值降为零而被____。
  - 路由器遇到大量通信时可能来不及处理所有数据报，导致部分数据报被____。

- 这些问题都表明：
  - 必须依赖TCP的“____交付”功能来确保目的主机的目的进程能够正确接收到____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>可靠</li>
    <li>路由</li>
    <li>失序</li>
    <li>循环</li>
    <li>丢弃</li>
    <li>丢弃</li>
    <li>可靠</li>
    <li>报文</li>
  </ul>
</details>
</div>

</ul>



