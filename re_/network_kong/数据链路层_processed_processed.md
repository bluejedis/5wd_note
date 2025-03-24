# 第3章 数据链路层  

<ul>

## 【考纲内容】  

<ul>

（一）____层的功能  

（二）____  

（三）____控制  

____编码：____编码  

（四）____控制与____传输机制  
____控制、____传输与____窗口机制：____协议：____协议（GBN）：____协议（SR）  

（五）____访问控制  

1. ____划分：____复用、____复用、____复用、____复用  
2. ____访问：____协议：____协议：____协议：____协议  
3. ____访问：____协议  

（六）____  
____的基本概念与体系结构：____与IEEE802.3；IEEE802.11____：VLAN的基本概念与基本原理  

（七）____  
____的基本概念：____协议  

____及其工作原理  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据链路</li>
    <li>组帧</li>
    <li>差错</li>
    <li>检错</li>
    <li>纠错</li>
    <li>流量</li>
    <li>可靠</li>
    <li>流量</li>
    <li>可靠</li>
    <li>滑动</li>
    <li>停止-等待</li>
    <li>后退 $N$ 帧</li>
    <li>选择重传</li>
    <li>介质</li>
    <li>信道</li>
    <li>频分</li>
    <li>时分</li>
    <li>波分</li>
    <li>码分</li>
    <li>随机</li>
    <li>ALOHA</li>
    <li>CSMA</li>
    <li>CSMA/CD</li>
    <li>CSMA/CA</li>
    <li>轮询</li>
    <li>令牌传递</li>
    <li>局域网</li>
    <li>局域网</li>
    <li>以太网</li>
    <li>无线局域网</li>
    <li>广域网</li>
    <li>广域网</li>
    <li>PPP</li>
    <li>以太网交换机</li>
  </ul>
</details>
</div>

</ul>

## 【复习提示】  

<ul>

历年考试中考查的重点  
  - 要求在了解____层基本概念和功能的基础上，重点掌握  
    - ____机制  
    - 三种____传输协议  
    - 各种____协议  
      - 特别是____协议  
      - ____协议  
      - ____帧格式  
    - 以及____的争用期和最小帧长的概念  
    - ____算法  
  - 此外，____、____、____、____和____的原理及区别也要重点掌握  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据链路</li>
    <li>滑动窗口</li>
    <li>可靠</li>
    <li>MAC</li>
    <li>CSMA/CD</li>
    <li>CSMA/CA</li>
    <li>以太网</li>
    <li>局域网</li>
    <li>二进制指数退避</li>
    <li>中继器</li>
    <li>网卡</li>
    <li>集线器</li>
    <li>网桥</li>
    <li>局域网交换机</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 数据链路层的功能  

<ul>

## Function  

<ul>

### 功能  

<ul>

#### 基本任务  

<ul>

- 实现____在一段链路上或一个网络中进行传输  
- 三个基本问题  
  - ____成帧  
  - ____传输  
  - ____检测  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>帧</li>
    <li>封装</li>
    <li>透明</li>
    <li>差错</li>
  </ul>
</details>
</div>

</ul>

#### 信道类型  

<ul>

- ____信道  
  - 使用____的通信方式  
  - ____协议是目前使用最广泛的点对点协议  
- ____信道  
  - 连接的主机很多，使用____的广播通信方式  
  - 有线局域网普遍使用____协议  
  - 无线局域网使用____协议  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>点对点</li>
    <li>一对一</li>
    <li>PPP</li>
    <li>广播</li>
    <li>一对多</li>
    <li>CSMA/CD</li>
    <li>CSMA/CA</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 数据链路层所处的地位  

<ul>

#### 通信示例  

<ul>

- 两台主机通过互联网通信  
  - 局域网1中的主机H1经过路由器R1、广域网及路由器R2连接到局域网2中的主机H2  
  - 主机H1和H2都有完整的____协议栈  
  - 路由器在转发分组时仅使用协议栈的____层  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e7e297fbb0520613c7252ae1f3530980f5248c701458e45dd8079c49662f2683.jpg)  
图3.1主机H1向H2发送数据  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/25920ca739682fceb5264e70ee939f8d7abe7feee0fa034448b85f86ab86b5f8.jpg)  
图3.2从层次上看数据的流动  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ffb78b2e18190098f64fcc494beb631836f32110a4006eb8b1a6412e30626310.jpg)  
图3.3只考虑数据在数据链路层的流动  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>五层</li>
    <li>下三</li>
  </ul>
</details>
</div>

</ul>

#### 基本概念  

<ul>

- ____  
  - 从一个结点到相邻结点的一段____线路  
  - 是通信路径的组成部分  
- ____  
  - 在链路上加上必要的____协议的硬件和软件  
  - ____链路vs____链路  
- ____  
  - 数据链路层对等实体之间进行逻辑通信的____数据单元  
  - 功能：  
    - 把网络层下交的数据构成____发送到链路上  
    - 把接收到的____中的数据取出并上交给网络层  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>链路</li>
    <li>物理</li>
    <li>数据链路</li>
    <li>通信</li>
    <li>物理</li>
    <li>逻辑</li>
    <li>帧</li>
    <li>协议</li>
    <li>帧</li>
    <li>帧</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 为网络层提供服务  

<ul>

#### 服务类型  

<ul>

- ____的无连接服务  
  - 特点：  
    - 不需要先建立____连接  
    - 不需要发回____  
  - 适用于____较低的信道，如以太网  
- ____的无连接服务  
  - 特点：  
    - 不需先建立____连接  
    - 必须发回____  
    - ____重传机制  
  - 适用于____较高的信道，如无线通信  
- ____的面向连接服务  
  - 特点：  
    - 三个阶段：____链路、____帧、____链路  
    - 每帧都要返回____  
  - 适用于____要求较高的场合  

> attention:  
有连接就一定要有确认，即不存在____的面向连接的服务。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无确认</li>
    <li>链路</li>
    <li>确认</li>
    <li>误码率</li>
    <li>有确认</li>
    <li>链路</li>
    <li>确认</li>
    <li>超时</li>
    <li>误码率</li>
    <li>有确认</li>
    <li>建立</li>
    <li>传输</li>
    <li>释放</li>
    <li>确认</li>
    <li>可靠性</li>
    <li>无确认</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 链路管理  

<ul>

#### 定义与过程  

<ul>

- 链路管理是数据链路层连接的____、____和____过程  
- 主要用于____的服务  
- 通信步骤：  
  - ____对方就绪状态  
  - ____必要信息初始化  
  - ____连接  
  - ____连接  
  - 传输完毕后____连接  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>建立</li>
    <li>维持</li>
    <li>释放</li>
    <li>面向连接</li>
    <li>确认</li>
    <li>交换</li>
    <li>建立</li>
    <li>维持</li>
    <li>释放</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 封装成帧与透明传输  

<ul>

#### 封装成帧  

<ul>

- 定义：在数据前后添加____和____构成帧  
- 帧长计算：____部分长度 + ____长度 + ____长度  
- ____和____作用：  
  - 确定____（帧定界）  
  - 实现____  
- HDLC协议示例：  
  - 使用____位F（____）标识帧的开始和结束  
  - 标准帧格式如图3.4所示  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/cf66d2f1d0b40f4535ac0e51bb07fdcdfe8a22a900b11a84e927a41c2f9190f7.jpg)  
图3.4HDLC标准帧格式  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>首部</li>
    <li>尾部</li>
    <li>数据</li>
    <li>首部</li>
    <li>尾部</li>
    <li>首部</li>
    <li>尾部</li>
    <li>帧界限</li>
    <li>帧同步</li>
    <li>标识</li>
    <li>01111110</li>
  </ul>
</details>
</div>

</ul>

#### 透明传输  

<ul>

- 定义：能够按原样无差错地传输____比特组合  
- 解决问题：防止数据中出现与____相同的比特组合导致的误判  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>任何</li>
    <li>帧定界符</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: green;">流量</span> <span style="color: Gold;">控制</span>  

<ul>

#### 基本概念  

<ul>

- 目的：限制发送方的____速率，避免超过接收方的____能力  
- 实现机制：  
  - 通过____机制控制发送  
  - 根据____信息决定继续发送或暂停  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>发送</li>
    <li>接收</li>
    <li>反馈</li>
    <li>反馈</li>
  </ul>
</details>
</div>

</ul>

#### 不同体系结构中的实现  

<ul>

- OSI体系：在____层实现  
  - 控制____间数据链路上的流量  
- TCP/IP体系：在____层实现  
  - 控制____之间的流量  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据链路</li>
    <li>相邻结点</li>
    <li>传输</li>
    <li>源端到目的端</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color:darkred;">差错</span><span style="color: green;">检测</span>  

<ul>

#### 错误类型  

<ul>

- ____  
  - 帧中某些位出现差错  
  - 使用____检验(CRC)检测  
- ____  
  - 包括____、____或____  
  - 属于____差错  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>位错</li>
    <li>循环冗余</li>
    <li>帧错</li>
    <li>帧丢失</li>
    <li>帧重复</li>
    <li>帧失序</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

#### 差错处理机制  

<ul>

- ____传输（通信质量较差）  
  - 使用____和____机制  
  - 数据链路层提供____传输服务  
- ____链路（通信质量良好）  
  - 仅进行____检错  
  - ____错误帧  
  - ____任务由高层协议完成  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无线</li>
    <li>确认</li>
    <li>重传</li>
    <li>可靠</li>
    <li>有线</li>
    <li>CRC</li>
    <li>丢弃</li>
    <li>重传</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color: green;">组</span><span style="color: LightSkyBlue;">帧</span>  

<ul>

## 概述  

<ul>

### 概念  

<ul>

- 发送方依据一定的规则将 ____层递交的分组 封装成 ____（也称组帧）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>网络</li>
    <li>帧</li>
  </ul>
</details>
</div>

</ul>

### 目的  

<ul>

- 数据链路层 将比特组合成以____为单位传输 'reason:  
  - 在出错时只重发____的帧  
  - 不必重发____数据  
  - 提高____效率  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>帧</li>
    <li>出错</li>
    <li>全部</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

### 主要问题  

<ul>

- ____  
- ____  
- ____传输  

> attention:

<div>
<details>
  <summary> </summary>
  <ul>
    <li>帧定界</li>
    <li>帧同步</li>
    <li>透明</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: green;">结构</span>特点  

<ul>

- 组帧时既要加____，又要加____  
  #### 原因分析  
  - 网络中信息以____为最小单位进行传输  
  - 接收方需要在比特流中正确识别____的起止位置  
    - 接收方收到的是一串____  
    - 没有____和____无法正确区分帧  
  #### 与分组的区别  
  - ____（IP数据报）is ____中的 ____部分  
  - 分组不需要加____来定界  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>首部</li>
    <li>尾部</li>
    <li>帧</li>
    <li>帧</li>
    <li>比特流</li>
    <li>首部</li>
    <li>尾部</li>
    <li>分组</li>
    <li>帧</li>
    <li>数据</li>
    <li>尾部</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 字符计<span style="color: green;">数</span>法  

<ul>

### 基本原理  

<ul>

- 在____使用一个计数字段来记录该帧所含的____数（包括计数字段自身所占用的1个字节）  
- 接收方读出____的字节计数值时，就知道后面跟随的____数，从而确定____结束位置  
- 帧与帧之间____传输，能确定下一帧的____位置  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/18cc49d5bb85480e0fc592ac0552950e0a6fde483285e113ce24cf11aa21335f.jpg)  
图3.5字符计数法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>首部</li>
    <li>字节</li>
    <li>首部</li>
    <li>字节</li>
    <li>帧</li>
    <li>连续</li>
    <li>开始</li>
  </ul>
</details>
</div>

</ul>

### 主要问题  

<ul>

- ____字段出错会导致:  
  - 失去____划分依据  
  - 接收方无法判断____的结束位和下一帧的____位  
  - 收发双方失去____  
  - 造成____后果  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>计数字段</li>
    <li>帧边界</li>
    <li>帧</li>
    <li>开始</li>
    <li>同步</li>
    <li>灾难性</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: RoyalBlue;">字节</span><span style="color: Gold;">填充</span>法  

<ul>

### 定界方式  

<ul>

- 使用特定字节定界帧的____与____  
  - 控制字符____表示帧的开始  
  - 控制字符____表示帧的结束  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>开始</li>
    <li>结束</li>
    <li>SOH</li>
    <li>EOT</li>
  </ul>
</details>
</div>

</ul>

### 透明传输实现  

<ul>

- 在特殊字符前填充____字符ESC  
- 接收方收到____字符后，知道后面是____信息而非____信息  
- 对于数据中的____字符，也在其前插入一个____字符  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8bc622f7582e5fe4c3b6569bf04fcef4d549661a5ba94591071cdb9feec74e46.jpg)  
图3.6字节填充法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>转义</li>
    <li>转义</li>
    <li>数据</li>
    <li>控制</li>
    <li>ESC</li>
    <li>ESC</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: purple;">零</span><span style="color: LightSkyBlue;">比特</span><span style="color: Gold;">填充</span>法  

<ul>

>pro：HDLC协议中的比特填充法（2013）  

### 基本原理  

<ul>

- 使用特定比特串____标志帧的开始和结束  
- 发送方处理:  
  - 扫描整个____字段  
  - 遇到____个连续的"1"后插入一个"0"  
- 接收方处理:  
  - 收到____个连续的"1"后删除后面的"0"  
  - 恢复____数据  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>01111110</li>
    <li>数据</li>
    <li>5</li>
    <li>5</li>
    <li>原始</li>
  </ul>
</details>
</div>

</ul>

### 特点  

<ul>

- 允许数据帧包含____个数的比特  
- 很容易由____实现  
- 性能优于____填充法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>任意</li>
    <li>硬件</li>
    <li>字节</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: orange;">违规</span><span style="color: deepskyblue;">编码</span>法  

<ul>

### 实现方式  

<ul>

- 在____层进行比特编码  
- 利用____编码序列定界帧的起始和终止  
  - 如曼彻斯特编码中的"____"和"____"电平对  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>物理</li>
    <li>违规</li>
    <li>高-高</li>
    <li>低-低</li>
  </ul>
</details>
</div>

</ul>

### 特点  

<ul>

- 不需____技术即可实现____传输  
- 仅适用于采用____编码的特殊编码环境  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>填充</li>
    <li>透明</li>
    <li>冗余</li>
  </ul>
</details>
</div>

</ul>

### 使用现状  

<ul>

- 局域网____标准采用此方法  
- 与____填充法为当前较常用的组帧方法  
- 原因:  
  - ____法计数字段脆弱  
  - ____法实现复杂且不兼容  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>IEEE802</li>
    <li>零比特</li>
    <li>字符计数</li>
    <li>字节填充</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color:darkred;">差错</span> <span style="color: Gold;">控制</span>  

<ul>

## 基本概念  

<ul>

- 实际通信链路都不是____的  
  - 比特在传输过程中可能产生____  
    - 1可能变成____  
    - 0也可能变成____  
  - 这就是____差错  
- 比特差错是____差错中的一种，本节仅讨论比特差错  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>理想</li>
    <li>差错</li>
    <li>0</li>
    <li>1</li>
    <li>比特</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

## 差错控制方式  

<ul>

- 通常利用____技术进行差错控制，主要有两类：  
  - ____（AutomaticRepeatreQuest，ARQ）  
    - 当接收方检测到差错时，就设法通知发送方____  
    - 直到收到____的数据为止  
  - ____（Forward Error Correction，FEC）  
    - 接收方不但能发现____  
    - 而且能确定____的位置并加以纠正  
- 因此，差错控制又可分为：  
  - ____编码  
  - ____编码  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>编码</li>
    <li>自动重传请求</li>
    <li>重发</li>
    <li>正确</li>
    <li>前向纠错</li>
    <li>差错</li>
    <li>错误</li>
    <li>检错</li>
    <li>纠错</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: green;">检错</span><span style="color: deepskyblue;">编码</span>  

<ul>

### 基本原理  

<ul>

- 检错编码都采用____编码技术  
  - 核心思想：  
    - 在____数据（信息位）被发送前  
    - 按某种关系附加一定的____位  
    - 构成一个符合某一规则的____后发送  
  - 工作机制：  
    - 当要发送的____数据变化时，相应的____位也随之变化  
    - 使得____遵从不变的规则  
    - 接收方根据收到的____是否仍符合原规则来判断是否出错  
- 常见的检错编码有：  
  - ____码  
  - ____码  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>冗余</li>
    <li>有效</li>
    <li>冗余</li>
    <li>码字</li>
    <li>有效</li>
    <li>冗余</li>
    <li>码字</li>
    <li>码字</li>
    <li>奇偶检验</li>
    <li>循环冗余</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: GreenYellow;">奇</span><span style="color: Gold;">偶</span><span style="color: green;">检验</span>码  

<ul>

#### 定义  

<ul>

- 奇偶检验码是____码和____码的统称  
- 是一种最基本的____码  
- 组成：  
  - ____位数据  
  - ____位检验位  
- 检验位的取值（0或1）将使整个检验码中"1"的个数为____或____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>奇检验</li>
    <li>偶检验</li>
    <li>检错</li>
    <li>n-1</li>
    <li>1</li>
    <li>奇数</li>
    <li>偶数</li>
  </ul>
</details>
</div>

</ul>

#### 类型  

<ul>

- ____码：  
  - 附加一个检验位后，码长为n的码字中"1"的个数为____  
- ____码：  
  - 附加一个检验位后，码长为n的码字中"1"的个数为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>奇检验</li>
    <li>奇数</li>
    <li>偶检验</li>
    <li>偶数</li>
  </ul>
</details>
</div>

</ul>

#### 示例与局限性  

<ul>

- 示例：  
  - 7位数据1001101对应的：  
    - 奇检验码为____  
    - 偶检验码为____  
- 局限性：  
  - 只能检测____位的出错情况  
  - 不知道____错了  
  - 不能发现____位的出错情况  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>10011011</li>
    <li>10011010</li>
    <li>奇数</li>
    <li>哪些位</li>
    <li>偶数</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: LightSkyBlue;">循环</span><span style="color: Gold;">冗余</span>码<span style="color: green;">CRC</span>  

<ul>

#### 定义与概述  

<ul>

- （Cyclic Redundancy Code，CRC）____技术  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>检错</li>
  </ul>
</details>
</div>

</ul>

#### 基本原理  

<ul>

- 收发双方约定生成____ $G(x)$  
  - 最高位和最低位必须为____  
  - $k$ 位位串可视为阶数为 ____ 的多项式的系数序列  
    - 例如，可用多项式 $x^{3}+x^{2}+1$ 表示位串____  
- 工作流程  
  - 发送方基于待发送的____和 $G(x)$ ，计算出____，将____附加到数据后面一起发送  
  - 接收方收到____和____后，通过 $G(x)$ 来计算收到的数据和冗余码是否产生____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多项式</li>
    <li>1</li>
    <li>$k-1$</li>
    <li>1101</li>
    <li>数据</li>
    <li>冗余码</li>
    <li>冗余码</li>
    <li>数据</li>
    <li>冗余码</li>
    <li>差错</li>
  </ul>
</details>
</div>

</ul>

#### 运算机制  

<ul>

##### 基本概念  

<ul>

- 数据组成  
  - 待传送 $m$ 位的数据  
  - CRC运算产生 $r$ 位的____（FCS)  
  - 最终帧长度为 ____ 位  
- 运算特点  
  - 带检验码的帧能被预先确定的____ $G(x)$ 整除  
  - 接收方用相同____除帧，无余数则____  

>pro：循环冗余码的计算（2023）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>冗余码</li>
    <li>$m+r$</li>
    <li>多项式</li>
    <li>多项式</li>
    <li>无差错</li>
  </ul>
</details>
</div>

</ul>

##### 计算步骤  

<ul>

- 加0  
  - 假设 $G(x)$ 的阶为 $r$  
  - 在数据后面加 ____ 个 $0$  
  - 相当于乘以 ____  
- 模2除  
  - 用 $G(x)$ 对应的____串除以加0后的数据串  
  - 得到的____即为冗余码（共 $r$ 位，前面的0不可省略）  
  - ____运算规则：加法不进位，减法不借位，相当于____运算  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$r$</li>
    <li>$2^{r}$</li>
    <li>二进制</li>
    <li>余数</li>
    <li>模2</li>
    <li>异或</li>
  </ul>
</details>
</div>

</ul>

##### 计算示例  

<ul>

- 已知条件  
  - 数据 $M=____$ （即 $m=6$ )  
  - 除数 $G(x)=____$ （即 $r=3$ ）  
- 计算结果  
  - 商 $Q=____$ （无实际用途）  
  - 余数 $R=____$  
- 最终发送数据  
  - 完整数据为 ____ （即 $2^{r}M+\mathrm{FCS}$ )  
  - 总长度为 ____ 位  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7fe3ce6cca99d7917138341845afea8f15d743f93b7222c8dc023eca16fb4d69.jpg)  
图3.8循环冗余码的运算过程  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>101001</li>
    <li>1101</li>
    <li>110101</li>
    <li>001</li>
    <li>101001001</li>
    <li>$m+r$</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### 实现特点与效果  

<ul>

##### 硬件实现  

<ul>

- 发送方的____生成和接收方的____检验由硬件完成  
- 处理速度快，不影响____传输  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>FCS</li>
    <li>CRC</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

##### 检错效果  

<ul>

- 无差错情况  
  - CRC检验后余数 $R$ 为____  
- 有差错情况  
  - 余数 $R$ 为0的概率极低  
  - 可近似认为接收的帧____  
  - 有差错的帧会被____  

>attention:  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>0</li>
    <li>无差错</li>
    <li>丢弃</li>
  </ul>
</details>
</div>

</ul>

##### 特别说明  

<ul>

- CRC具有____功能但在数据链路层  
  - 仅使用____功能  
  - 检测到帧出错则直接____  
  - 为简化____实现  
- 因此将CRC归类为____编码  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>纠错</li>
    <li>检错</li>
    <li>丢弃</li>
    <li>协议</li>
    <li>检错</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

## <span style="color: green;">纠错</span><span style="color: deepskyblue;">编码</span>  

<ul>

### 海明码原理  

<ul>

- 最常见的纠错编码是____码  
- 实现原理：  
  - 在____信息位中加入几个____位形成海明码  
  - 把海明码的每个二进制位分配到几个____检验组中  
  - 某一位出错后会引起相关____位值变化，可发现错位并指出位置  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>海明</li>
    <li>有效</li>
    <li>检验</li>
    <li>奇偶</li>
    <li>检验</li>
  </ul>
</details>
</div>

</ul>

### 海明码的编码原理和过程 → eg. 数据码1010  

<ul>

#### 1. 确定海明码位数  

<ul>

- 设n为____信息位数，k为____位数，应满足：  
  - ____  
- 对于示例：  
  - 海明码位数____成立  
  - 信息位____(1010)共____位  
  - 检验位____共____位  
  - 对应海明码为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有效</li>
    <li>检验</li>
    <li>$n+k \leq 2^k-1$</li>
    <li>$n+k=7 \leq 2^3-1$</li>
    <li>$D_4D_3D_2D_1$</li>
    <li>4</li>
    <li>$P_3P_2P_1$</li>
    <li>3</li>
    <li>$H_7H_6H_5H_4H_3H_2H_1$</li>
  </ul>
</details>
</div>

</ul>

#### 2. 确定检验位分布  

<ul>

- 规定检验位$P_i$在海明位号为____的位置  
- 具体分布：  
  - $P_1$的海明码位号为____，即$H_1$为$P_1$  
  - $P_2$的海明码位号为____，即$H_2$为$P_2$  
  - $P_3$的海明码位号为____，即$H_4$为$P_3$  
- 海明码各位分布：  
$\begin{array}{c c c c c c c c}{{H_{7}}}&{{H_{6}}}&{{H_{5}}}&{{H_{4}}}&{{H_{3}}}&{{H_{2}}}&{{H_{1}}}\\ {{D_{4}}}&{{D_{3}}}&{{D_{2}}}&{{P_{3}}}&{{D_{1}}}&{{P_{2}}}&{{P_{1}}}\end{array}$  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$2^{i-1}$</li>
    <li>$2^0=1$</li>
    <li>$2^1=2$</li>
    <li>$2^2=4$</li>
  </ul>
</details>
</div>

</ul>

#### 3. 分组形成检验关系  

<ul>

- 每个数据位用多个____位进行检验  
- 条件：被检验数据位的____位号等于检验该数据位的各____位海明位号之和  
- ____位不需要再被检验  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f963b4fdaa3d709ead387b3b915ec9d6919e696e045e6a79d41c56bbe2ccb151.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>检验</li>
    <li>海明</li>
    <li>检验</li>
    <li>检验</li>
  </ul>
</details>
</div>

</ul>

#### 4. 检验位取值  

<ul>

- 检验位$P_i$的值为第i组所有位求____  
- 根据分组计算：  
  - $P_1=____=0\oplus1\oplus1=0$  
  - $P_2=____=0\oplus0\oplus1=1$  
  - $P_3=____=1\oplus0\oplus1=0$  
- 最终1010对应的海明码为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>异或</li>
    <li>$D_1\oplus D_2\oplus D_4$</li>
    <li>$D_1\oplus D_3\oplus D_4$</li>
    <li>$D_2\oplus D_3\oplus D_4$</li>
    <li>1010010</li>
  </ul>
</details>
</div>

</ul>

#### 5. 海明码检验原理  

<ul>

- 每个检验组进行____检验，构成k个检验方程：  
$\begin{array}{c}{S_{1}=____}\\ {S_{2}=____}\\ {S_{3}=____}\end{array}$  
- 检验结果：  
  - $S_3S_2S_1=____$说明无错  
  - 否则出错，数值为____位的位号  
  - 如$S_3S_2S_1=001$说明____出错，将该位取反即可纠错  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>奇偶</li>
    <li>$P_1\oplus D_1\oplus D_2\oplus D_4$</li>
    <li>$P_2\oplus D_1\oplus D_3\oplus D_4$</li>
    <li>$P_3\oplus D_2\oplus D_3\oplus D_4$</li>
    <li>"000"</li>
    <li>错误</li>
    <li>$H_1$</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: green;">流量</span> <span style="color: Gold;">控制</span> & <span style="color: GreenYellow;">可靠</span><span style="color: green;">传输</span>机制  

<ul>

在数据链路层中，____控制机制和____传输机制是交织在一起的。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>流量</li>
    <li>可靠</li>
  </ul>
</details>
</div>

## <span style="color: green;">流量</span> <span style="color: Gold;">控制</span> & <span style="color: GreenYellow;">滑动</span><span style="color: LightSkyBlue;">窗口</span>机制  

<ul>

### <span style="color: green;">流量</span> <span style="color: Gold;">控制</span>  

<ul>

- 流量控制是指由____控制发送方的____速率，使接收方有足够的____空间来接收每个帧  
- 常见的流量控制方法有两种：____协议和____协议  
- 数据链路层和传输层均有____控制的功能，它们都用到了____协议，但也有所区别，主要体现如下：  
  - 数据链路层控制的是____之间的流量，而传输层控制的是____的流量  
  - 数据链路层的控制手段是接收方收不下就不返回____。传输层的控制手段是接收方通过____报文段中的窗口值来调整发送方的____窗口  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>接收方</li>
    <li>发送</li>
    <li>缓冲</li>
    <li>停止-等待</li>
    <li>滑动窗口</li>
    <li>流量</li>
    <li>滑动窗口</li>
    <li>相邻结点</li>
    <li>端到端</li>
    <li>确认</li>
    <li>确认</li>
    <li>发送</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: orange;">停止</span>-<span style="color: GreenYellow;">等待</span><span style="color: green;">流量</span><span style="color: Gold;">控制</span>  

<ul>

- 停止-等待流量控制是一种最简单的____控制方法  
- 基本过程：  
  - 发送方每次只允许发送____帧  
  - 接收方每接收一个帧都要反馈一个____信号，表示可以接收下一帧  
  - 发送方收到____信号后才能发送下一帧  
  - 若发送方没有收到接收方反馈的____信号，则需要一直____  
- 发送方每发送完一个帧，就进入等待接收方____信息的过程中，因而____效率很低  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>流量</li>
    <li>一个</li>
    <li>应答</li>
    <li>应答</li>
    <li>应答</li>
    <li>等待</li>
    <li>确认</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: GreenYellow;">滑动</span><span style="color: LightSkyBlue;">窗口</span> 流量控制  

<ul>

#### 基本概念  

<ul>

- 滑动窗口流量控制是一种更高效的____控制方法  
- 窗口维护：  
  - 发送方维持____窗口：一组连续的允许发送帧的____  
  - 接收方维持____窗口：一组连续的允许接收帧的____  
- 窗口作用：  
  - ____窗口表示在还未收到对方确认信息的情况下，发送方最多还能发送多少个帧和哪些帧  
  - ____窗口是为了控制可以接收哪些帧和不可以接收哪些帧  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>流量</li>
    <li>发送</li>
    <li>序号</li>
    <li>接收</li>
    <li>序号</li>
    <li>发送</li>
    <li>接收</li>
  </ul>
</details>
</div>

</ul>

#### 工作原理  

<ul>

- 发送窗口工作原理：  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/248725a206d61268b973ecf8d7a386b827f85a708e4466f48aca92b0595310cb.jpg)  

- 接收窗口工作原理：  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9d828f694c1132f7e08e7c2789e1420a756d8816e676452e1fb324f88be8ccd3.jpg)  

</ul>

#### 操作过程  

<ul>

- 发送方操作：  
  - 每收到一个按序确认的____帧，就将发送窗口向前滑动____位置  
  - 新的____落入发送窗口，序号落入发送窗口内的____帧可以继续发送  
  - 当窗口内没有可以发送的帧时，发送方就____发送  
- 接收方操作：  
  - 每收到一个序号落入接收窗口的____帧，就允许将该帧收下  
  - 将接收窗口向前滑动____位置，并发回____  
  - 新的____落入接收窗口，序号落入接收窗口内的____帧即为准备接收的帧  
  - 若收到的帧落在接收窗口之外，则一律____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>确认</li>
    <li>一个</li>
    <li>序号</li>
    <li>数据</li>
    <li>停止</li>
    <li>数据</li>
    <li>一个</li>
    <li>确认</li>
    <li>序号</li>
    <li>数据</li>
    <li>丢弃</li>
  </ul>
</details>
</div>

</ul>

#### 重要特性  

<ul>

- 窗口滑动特性：  
  - 只有接收窗口向前滑动（同时接收方发送了____）时，发送窗口才有可能向前____  

>pro：滑动窗口协议的窗口大小的关系（2019）  

- 窗口大小关系：  
  - ____协议：发送窗口 $W_{\mathrm{T}}=____$ ，接收窗口 $W_{\mathbb{R}}=____$  
  - ____协议：发送窗口 $W_{\mathrm{T}}>____$ ，接收窗口 $W_{\mathbb{R}}=____$  
  - ____协议：发送窗口 $W_{\mathrm{T}}>____$ ，接收窗口 $W_{\mathbb{R}}>____$  
  - 若采用 $n$ 比特对帧编号，则后两种滑动窗口协议还需满足 ____  
- 其他特性：  
  - 当接收窗口的大小为____时，可保证帧的____接收  
  - 在数据链路层的滑动窗口协议中，窗口大小在传输过程中是____的（与传输层不同）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>确认</li>
    <li>滑动</li>
    <li>停止-等待</li>
    <li>1</li>
    <li>1</li>
    <li>后退 $N$ 帧</li>
    <li>1</li>
    <li>1</li>
    <li>选择重传</li>
    <li>1</li>
    <li>1</li>
    <li>$W_{\mathrm{T}}+W_{\mathrm{R}}\leq 2^{n}$</li>
    <li>1</li>
    <li>有序</li>
    <li>固定</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: GreenYellow;">可靠</span><span style="color: green;">传输</span>机制  

<ul>

### 基本概念与机制  

<ul>

- 可靠传输含义：发送方发送的数据都能被接收方____地接收  
- 实现机制：  
  - ____机制：接收方每收到发送方发来的数据帧，都要向发送方发回一个____帧  
  - ____机制：发送方在发送数据后启动计时器，规定时间内未收到确认则____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>正确</li>
    <li>确认</li>
    <li>确认</li>
    <li>超时重传</li>
    <li>重发</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: LightSkyBlue;">A</span><span style="color: green;">R</span><span style="color: Gold;">Q</span>协议 <span style="color: gray; font-size: 14px;">Automatic Repeat-reQuest</span>  

<ul>

- ARQ(____)协议特点：  
  - 重传____进行，无需接收方请求  
  - 数据帧和确认帧需____  
- 分类：  
  - ____协议  
  - ____协议  
  - ____协议  
- 应用范围：  
  - 不仅限于____层  
  - 可应用到____协议  
- 使用场景：  
  - ____网络：链路误码率低，不要求数据链路层提供可靠传输  
  - ____网络：链路易受干扰，要求数据链路层提供可靠传输  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自动重传请求</li>
    <li>自动</li>
    <li>编号</li>
    <li>停止-等待</li>
    <li>后退N帧</li>
    <li>选择重传</li>
    <li>数据链路</li>
    <li>上层</li>
    <li>有线</li>
    <li>无线</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: GreenYellow;">单</span>帧<span style="color: GreenYellow;">滑动</span><span style="color: LightSkyBlue;">窗口</span> 与 <span style="color: Gold;">停止</span>-<span style="color: green;">等待</span>协议（<span style="color: Gold;">S</span>-<span style="color: green;">W</span>）  

<ul>

#### 基本原理  

<ul>

- 发送方每次只能发送____帧  
- 需等待接收方____后才可发送下一帧  
- 发送窗口和接收窗口大小均为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一个</li>
    <li>确认</li>
    <li>1</li>
  </ul>
</details>
</div>

</ul>

#### 差错处理  

<ul>

- 数据帧破坏情况：  
  - 接收方检测到破坏后____  
  - 发送方____重传直到正确接收  
- 确认帧破坏情况：  
  - 发送方____数据帧  
  - 接收方____重复帧并重发确认  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>丢弃</li>
    <li>超时</li>
    <li>重传</li>
    <li>丢弃</li>
  </ul>
</details>
</div>

</ul>

#### 实现细节  

<ul>

- 帧编号：  
  - 使用____比特编号(0和1交替)  
  - 确认帧使用____和____  
- 缓冲区设置：  
  - 发送方和接收方都需设置____缓冲区  
  - 发送方需保留____用于重传  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>ACK0</li>
    <li>ACK1</li>
    <li>帧</li>
    <li>副本</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: purple;">多</span>帧<span style="color: GreenYellow;">滑动</span><span style="color: LightSkyBlue;">窗口</span> 与 <span style="color: green;">后退</span>N帧协议（<span style="color: green;">GB</span>N）  

<ul>

#### 基本工作原理  

<ul>

>pro：GBN协议的工作原理（2009）  

- 发送方可连续发送____帧而无需等待确认  
- 出错时需重传____帧及其后续____个帧  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>多个</li>
    <li>出错</li>
    <li>N</li>
  </ul>
</details>
</div>

</ul>

#### 确认机制  

<ul>

>pro：GBN确认号的含义/捎带确认的应用（2017）  

- ____确认：  
  - 可对连续多个正确帧只确认____个  
  - ____表示n号帧及之前所有帧均正确接收  
- 接收方只____接收数据帧  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>累积</li>
    <li>最后</li>
    <li>ACKn</li>
    <li>按序</li>
  </ul>
</details>
</div>

</ul>

#### 差错处理  

<ul>

>pro：GBN超时重传的分析（2017）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f3d8ffa553e14eac7cd68cf2198b841bed3882b8f8397d4235957d13e95a1280.jpg)  
图3.11GBN协议的工作原理：对出错数据帧的处理  

</ul>

#### 窗口设置  

<ul>

>pro：GBN发送窗口的意义/最大尺寸（2017）  

- 发送窗口要求：  
  - 使用n比特编号时，____  
  - 超出范围会导致____帧无法分辨  
- 接收窗口：  
  - ____，保证按序接收  
- 效率分析：  
  - 优点：连续发送提高____利用率  
  - 缺点：重传包含____帧，在高误码率时效率可能低于____协议  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>$1<W_T\leq 2^n-1$</li>
    <li>新旧</li>
    <li>$W_R=1$</li>
    <li>信道</li>
    <li>正确</li>
    <li>停止-等待</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: purple;">多</span>帧<span style="color: GreenYellow;">滑动</span><span style="color: LightSkyBlue;">窗口</span> 与 <span style="color: LightSkyBlue;">选择</span><span style="color: green;">重传</span>协议（<span style="color: LightSkyBlue;">S</span><span style="color: green;">R</span>）  

<ul>

Selective Repeat  

#### 工作原理  

<ul>

>pro：选择重传协议的工作原理（2011）  

- 只重传____和____的帧  
- 接收方可接收____但正确的帧  
- 需要较大____窗口缓存失序帧  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>出错</li>
    <li>超时</li>
    <li>失序</li>
    <li>接收</li>
  </ul>
</details>
</div>

</ul>

#### 实现<span style="color: green;">机制</span>  

<ul>

- 确认机制：  
  - ____确认，不使用____确认  
  - 可使用____请求立即重传  
- <span style="color: Gold;">缓冲</span>要求：  
  - <span style="color: GreenYellow;">接收方</span> 设置 足够____缓冲区  
  - every <span style="color: LightSkyBlue;">发送</span> ____区对应 → 一个____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>逐帧</li>
    <li>累积</li>
    <li>NAK</li>
    <li>帧</li>
    <li>缓冲</li>
    <li>计时器</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: LightSkyBlue;">窗口</span>设置  

<ul>

- 基本要求：  
  - $W_R$和$W_T$都____  
  - 使用n比特编号时需满足：  
    - ____  
    - ____  
    - ____  
  - 通常$W_R$和$W_T$大小____  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/de59299ec42c47f7749328137b7d85d10deaadf593f80970a3170cc75da885a2.jpg)  
图3.12SR协议的工作原理：对超时和出错数据帧的处理  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>大于1</li>
    <li>$W_R+W_T\leq 2^n$</li>
    <li>$W_R\leq W_T$</li>
    <li>$W_R\leq 2^n-1$</li>
    <li>相同</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: Gold;">信</span><span style="color: LightSkyBlue;">道</span><span style="color: green;">利用</span><span style="color: purple;">率</span>  

<ul>

信道利用率是指信道的____。从时间角度看，信道效率是对____而言的，是指发送方在一个发送周期（从发送方开始发送分组到收到第一个确认分组所需的时间）内，____发送数据的时间与整个发送周期之比。本节之所以使用分组的PDU名称而不使用帧，是为了更具____性。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>效率</li>
    <li>发送方</li>
    <li>有效</li>
    <li>通用</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">S</span>-<span style="color: green;">W</span>' <span style="color: Gold;">信</span><span style="color: LightSkyBlue;">道</span><span style="color: green;">利用</span><span style="color: purple;">率</span>  

<ul>

>pro：停止-等待协议下信道利用率的计算（2018、2020）  

- 停止-等待协议的特点：  
  - 优点是____  
  - 缺点是信道利用率太____  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/32c2e5a6d87213d9c91d0cbc5b5ea99f663b7a7cf0a460c11b9a131bd28a37f8.jpg)  
图3.13停止-等待协议中数据帧和确认帧的发送时间关系  

- 信道利用率计算：  
  - 发送时延 $T_{\mathrm{D}} = $ ____长度/____传输速率  
  - 发送周期 = ____  
  - 信道利用率公式：$U=____$  
  - 计算示例：  
    - 条件：RTT=20ms，分组长度=1200比特  
    - 当数据传输速率=1Mb/s时，U=____  
    - 当数据传输速率=10Mb/s时，U=____  
    - 结论：当RTT大于$T_D$时，信道利用率非常____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>简单</li>
    <li>低</li>
    <li>分组</li>
    <li>数据</li>
    <li>${T_{\mathrm{D}}}+\mathrm{RTT}+T_{\mathrm{A}}$</li>
    <li>$\frac{T_{\mathrm{D}}}{T_{\mathrm{D}}+\mathrm{RTT}+T_{\mathrm{A}}}$</li>
    <li>5.66%</li>
    <li>0.0596%</li>
    <li>低</li>
  </ul>
</details>
</div>

</ul>

#### 连续 <span style="color: LightSkyBlue;">A</span><span style="color: green;">R</span><span style="color: Gold;">Q</span> ' <span style="color: Gold;">信</span><span style="color: LightSkyBlue;">道</span><span style="color: green;">利用</span><span style="color: purple;">率</span>  

<ul>

>pro: 三种滑动窗口协议的信道利用率比较（2023）  

- 基本原理：  
  - 采用____传输  
  - 发送方可连续发送____分组  
  - 发送窗口足够大时可使信道持续有____流动  
  - 可获得很高的____利用率  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8e812ae1175819652438ba38e40f983c2fad2ab762a531a9c6ad028e526082e0.jpg)  
图3.14连续ARQ协议的流水线传输可提高信道利用率  

>pro: GBN协议下信道利用率与发送窗口大小的关系（2012、2015、2017）  

- 信道利用率计算（发送窗口为n）：  
  - 情况1：$n T_{\mathrm{D}}<____$  
    - 一个发送周期内可发送完____个分组  
    - $U=____$  
  - 情况2：$n T_{\mathrm{D}}\geq____$  
    - 一个发送周期内发不完（或刚好发完）____个分组  
    - 无差错时可不间断发送，$U=____$  

>pro: 滑动窗口协议的数据传输速率的计算（2009、2010、2014）  

- 信道数据传输速率计算：  
  - 方法1：信道平均数据传输速率 = ____ × ____  
  - 方法2：信道平均数据传输速率 = ____/____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>流水线</li>
    <li>多个</li>
    <li>数据</li>
    <li>信道</li>
    <li>$T_{\mathrm{D}}+\mathrm{RTT}+T_{\mathrm{A}}$</li>
    <li>n</li>
    <li>$\frac{n T_{\mathrm{D}}}{T_{\mathrm{D}}+\mathrm{RTT}+T_{\mathrm{A}}}$</li>
    <li>$T_{\mathrm{D}}+\mathrm{RTT}+T_{\mathrm{A}}$</li>
    <li>n</li>
    <li>1</li>
    <li>信道利用率</li>
    <li>信道带宽</li>
    <li>发送周期内发送的数据量</li>
    <li>发送周期</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

## <span style="color: purple;">介质</span>访问Media access控制  

<ul>

### 概述  

<ul>

- 主要任务：  
  - 为使用介质的每个结点隔离来自同一信道上其他结点所传送的____  
  - 协调____结点的传输  
- 通信方式：  
  - 广播信道的通信方式如图3.15所示  
  - 结点A、B、C、D、E共享____信道  
  - 若不加控制，不同结点间的通信可能会因互相____而失败  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9ca053d64d3e0454a486ca2d0596abec10117566cb04d939d349516482e06b37.jpg)  
图3.15广播信道的通信方式  

- ____子层：  
  - 用来决定广播信道中信道分配的____  
  - 属于____层的一个子层  
- 常见的介质访问控制方法：  
  - ____介质访问控制（静态划分）  
  - ____介质访问控制（动态分配）  
  - ____介质访问控制（动态分配）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>信号</li>
    <li>活动</li>
    <li>广播</li>
    <li>干扰</li>
    <li>MAC</li>
    <li>协议</li>
    <li>数据链路</li>
    <li>信道划分</li>
    <li>随机访问</li>
    <li>轮询访问</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">信</span><span style="color: LightSkyBlue;">道</span><span style="color: green;">划分</span> <span style="color: purple;">介质</span>访问 控制  

<ul>

#### 基本概念  

<ul>

- ____技术实现：  
  - 发送端：把多个发送方的____组合在一条物理信道上传输  
  - 接收端：把收到的____信号分离并发送给对应接收方  
  - 可提高____系统利用率（当介质带宽超过单个信号所需带宽时）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/db2b663112711b7fbd103f843c6340fe46b6a5abd6a2b395f3b85c66372e3d9a.jpg)  
图3.16复用原理示意图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>复用</li>
    <li>信号</li>
    <li>复用</li>
    <li>传输</li>
  </ul>
</details>
</div>

</ul>

#### 原理  

<ul>

- 实质：  
  - 通过____、____、____等方法  
  - 将广播信道逻辑分为几个____的子信道  
  - 将广播信道转变为若干个____信道  
- 分类：  
  - ____种信道划分介质访问控制方法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>分时</li>
    <li>分频</li>
    <li>分码</li>
    <li>互不干扰</li>
    <li>点对点</li>
    <li>4</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 分类  

<ul>

#### <span style="color: Gold;">频</span>分复用<span style="color: gray; font-size: 14px;">Division Multiplexing</span>（FDM）  

<ul>

- 每个____作为一个子信道，每对用户使用一个子信道进行通信，如图3.17所示  
- 所有用户在同一时间占用不同的____资源  
- 每个子信道分配的____可不相同，但它们的总和不能超过信道的____频带  
- 在实际应用中，为了防止子信道之间互相干扰，相邻信道间还要加入"____频带"  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/97ee383c310e7a88c1fad36132c6e33425721806fd85d6e745c3a2f5bee9b126.jpg)  
图3.17频分复用的原理示意图  

- 分复用的优点：  
  - 充分利用了传输介质的____  
  - 系统____较高  
  - 实现也较____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>子频带</li>
    <li>频带</li>
    <li>频带</li>
    <li>总</li>
    <li>隔离</li>
    <li>带宽</li>
    <li>效率</li>
    <li>容易</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: green;">时</span>分复用（TDM）  

<ul>

##### 基本原理  

<ul>

- ____片，称为TDM帧  
- 每个用户在每个TDM帧中占用____序号的时隙  
- 每个用户所占用的时隙____地出现（其周期就是TDM的长度）  
- 所有用户在不同的时间占用同样的____资源，如图3.18所示  
- TDM帧实际上是一段固定长度的时间，它与数据链路层的____不是同一个概念  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/eeb2deb249d0dcde4ed543762681f37459cd83d3337b43692dc71503e9e57355.jpg)  
图3.18时分复用的原理示意图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时间</li>
    <li>固定</li>
    <li>周期性</li>
    <li>信道</li>
    <li>帧</li>
  </ul>
</details>
</div>

</ul>

##### 特点  

<ul>

- 从某个时刻来看，时分复用信道上传送的仅是____用户之间的信号  
- 从某段时间来看，传送的是按____分割的复用信号  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>某对</li>
    <li>时间</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

---

以上内容严格按照您的要求处理，确保挖空关键词、公式和步骤，并在每个次级标题下以折叠块形式给出答案。Markdown与HTML结合，公式渲染正常，目录结构完整保留。

以下是按照您的要求对输入内容进行挖空处理后的 Markdown 和 HTML 折叠块输出。挖空部分包括定义中的关键词、公式定理和算法的关键步骤，答案在每个次级标题下用 HTML `<details>` 折叠块呈现，折叠块内容使用 `<ul>` 和 `<li>` 标签，并确保公式渲染正确。原有目录结构保持不变，所有内容完整输出。

```markdown
### 时分复用（TDM）

<ul>

- 因为时分复用是按____次序给用户分配时隙的，当用户在某段时间暂无数据传输时，其他用户也无法使用这个暂时____的线路资源，所以时分复用后的____利用率不高

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

固定</li>
    <li>

空闲</li>
    <li>

信道</li>
  </ul>
</details>
</div>

</ul>

##### 统计时分复用（STDM）

<ul>

- 又称____时分复用，它是对TDM的一种改进
- STDM倾向于TDM帧不同：
  - 它并不____分配时隙
  - 而按需____分配时隙
  - 当用户有数据要传送时，才会分配到STDM帧中的____
  - 因此可以提高线路的____率
- 例如：
  - 假设线路的____传输速率为6000b/s
  - 3个用户的平均速率都为____b/s
  - 当采用TDM方式时，每个用户的最高速率为____b/s
  - 而在STDM方式下，每个用户的最高速率可达____b/s

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

异步</li>
    <li>

固定</li>
    <li>

动态</li>
    <li>

时隙</li>
    <li>

利用</li>
    <li>

数据</li>
    <li>

2000</li>
    <li>

2000</li>
    <li>

6000</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: LightSkyBlue;">波</span>分复用（WDM）

<ul>

- 即光的____复用
- 它在一根光纤中传输多种不同____（频率）的光信号
- 因为波长不同，各路光信号____干扰
- 最后用光分用器将各路____分解出来
- 因为光波处于频谱的____频段，有很大的带宽，所以可以实现多路的波分复用

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

频分</li>
    <li>

波长</li>
    <li>

互不</li>
    <li>

波长</li>
    <li>

高频</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: deepskyblue;">码</span>分复用（CDM）

<ul>

##### 基本概念

<ul>

- 复用方式与FDM和TDM不同：
  - 它既共享信道的____
  - 又共享____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

频率</li>
    <li>

时间</li>
  </ul>
</details>
</div>

</ul>

##### CDMA原理

<ul>

- 基本原理：
  - 将每个比特时间再划分成m个短的____，称为码片（Chip）
  - 通常m的值是____或128，下例中为简单起见，设m为____
  - 每个站点被指派一个唯一的____码片序列
  - 发送1时，站点发送它的____序列
  - 发送0时，站点发送该码片序列的____
  - 当两个或多个站点同时发送时，各路数据在信道中____相加
  - 为了从信道中分离出各路信号，要求各个站点的码片序列相互____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间槽</li>
    <li>

64</li>
    <li>

8</li>
    <li>

m位</li>
    <li>

码片</li>
    <li>

反码</li>
    <li>

线性</li>
    <li>

正交</li>
  </ul>
</details>
</div>

</ul>

##### 简单理解

<ul>

- A站向C站发出的信号用一个____来表示
- B站向C站发出的信号用另一个____来表示
- 两个向量要求相互____
- 向量中的分量，就是所谓的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

向量</li>
    <li>

向量</li>
    <li>

正交</li>
    <li>

码片</li>
  </ul>
</details>
</div>

</ul>

##### 具体示例

<ul>

###### 基本设置

<ul>

- 令向量s表示A站的____向量，T表示B站的____向量
- A站的码片序列被指派为00011011：
  - 发送____表示发送比特1
  - 发送____表示发送比特0
- 为了方便计算：
  - 将码片中的0写为____
  - 将1写为____
  - 因此A站的码片序列是____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

码片</li>
    <li>

码片</li>
    <li>

00011011</li>
    <li>

11100100</li>
    <li>

-1</li>
    <li>

+1</li>
    <li>

(-1-1-1+1+1-1+1+1)</li>
  </ul>
</details>
</div>

</ul>

###### 数学原理

<ul>

- 不同站的码片序列相互正交：
  $S\mathbf{\cdot}T\equiv\frac{1}{m}\sum_{i=1}^{m}S_{i}T_{i}=____$

- 任何站的码片向量和该码片向量自身的规格化内积都是____：
  $S\bullet S={\frac{1}{m}}\sum_{i=1}^{m}S_{i}S_{i}={\frac{1}{m}}\sum_{i=1}^{m}S_{i}^{2}={\frac{1}{m}}\sum_{i=1}^{m}(\pm1)^{2}=____$

- 任何站的码片向量和该码片反码的向量的规格化内积都是____：
  $S\bullet\overline{{S}}=\frac{1}{m}\sum_{i=1}^{m}S_{i}\,\overline{{S_{i}}}=-\frac{1}{m}\sum_{i=1}^{m}S_{i}^{2}=____$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

1</li>
    <li>

1</li>
    <li>

-1</li>
    <li>

-1</li>
  </ul>
</details>
</div>

</ul>

###### 实际计算

<ul>

- 令向量T为____
- 当A站向C站发送数据1时，发送向量____
- 当B站向C站发送数据0时，发送向量____
- 两个向量在公共信道上叠加，线性相加得到：
  $S+\overline{{{T}}}=____$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

(-1-1+1-1+1+1+1-1)</li>
    <li>

(-1-1-1+1+1-1+1+1)</li>
    <li>

(+1+1-1+1-1-1-1+1)</li>
    <li>

\left(\begin{array}{c c c c c c c}{{0}}&{{0}}&{{-2}}&{{2}}&{{0}}&{{-2}}&{{0}}&{{2}}\end{array}\right)</li>
  </ul>
</details>
</div>

>pro：码分复用中数据分离的计算（2014）  

</ul>

###### 数据分离

<ul>

- 到达C站后进行数据分离：
  - 若要得到来自A站的数据：
    - C站必须知道A站的____序列
    - 让s与s+T进行____内积
    - 根据____原理，其他站点的信号都在内积的结果中被过滤掉
    - 内积的相关项都是____，而只剩下A站发送的信号
    - 得到：$S\bullet(S+\overline{{{T}}})=____$
    - 所以A站发出的数据是____
  - 同理，若要得到来自B站的数据：
    - $T\bullet(S+{\overline{{T}}})=____$
    - 因此从B站发送过来的信号向量是一个____向量，代表____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

码片</li>
    <li>

规格化</li>
    <li>

叠加</li>
    <li>

0</li>
    <li>

1</li>
    <li>

1</li>
    <li>

-1</li>
    <li>

反码</li>
    <li>

0</li>
  </ul>
</details>
</div>

</ul>

</ul>

##### 直观理解

<ul>

- 假设场景：
  - A站要向C站运输____
  - B站要向C站运输____
  - A站和B站与C站之间有一条公共的____，可类比为广播信道

- 不同复用方式的比较：
  - 频分复用：
    - 公共道路被划分为两个____
    - 分别提供给A站到C站的车和B站到C站的车____
    - 两类车可同时通行，但都只分到了公共车道的一半
    - 因此频分复用（波分复用也一样）共享____而不共享空间
  - 时分复用：
    - 先让A站到C站的车走一趟
    - 再让B站到C站的车走一趟
    - 两类车____地使用公共车道
    - 因此时分复用共享____，但不共享时间
  - 码分复用：
    - 黄豆与绿豆放在同一辆车上____
    - 到达C站后，由C站负责把车上的黄豆和绿豆____
    - 因此码分复用既共享____，又共享时间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

黄豆</li>
    <li>

绿豆</li>
    <li>

道路</li>
    <li>

车道</li>
    <li>

通行</li>
    <li>

时间</li>
    <li>

交替</li>
    <li>

空间</li>
    <li>

运送</li>
    <li>

分开</li>
    <li>

空间</li>
  </ul>
</details>
</div>

</ul>

##### 优点

<ul>

- ____利用率高
- ____能力强
- ____性强
- 语音____好
- 可以减少____及降低运行____
- 主要应用：
  - 用于____通信系统
  - 特别是____通信系统

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

频谱</li>
    <li>

抗干扰</li>
    <li>

保密</li>
    <li>

质量</li>
    <li>

投资</li>
    <li>

成本</li>
    <li>

无线</li>
    <li>

移动</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>
```

### 说明
1. **挖空处理**：
   - 关键词如“固定”“空闲”“信道”等在定义中被挖空。
   - 算法关键步骤如“码片序列”“线性相加”等被挖空。
   - 公式中的关键部分（如正交性公式结果“0”“1”等）被挖空。
2. **折叠块**：
   - 每个次级标题下的答案使用 `<details>` 和 `<summary>` 实现折叠，内容用 `<ul>` 和 `<li>` 包裹。
   - 公式部分（如向量、数学表达式）在 `<li>` 中单独占一行，确保 Markdown 渲染正确。
3. **结构完整性**：
   - 原有目录结构未改变，所有内容均输出，未省略任何部分。
   - `<ul>` 标签缩进保持一致，标题与内容之间有空行。

如需进一步调整或处理其他部分，请告诉我！

以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，关键词、公式定理和关键步骤被挖空，并在每个次级标题下使用 HTML 折叠块（`<details>`）列出答案。输出同时包含 Markdown 和 HTML 格式，确保内容简洁明了，方便自我考察和记忆。

---

### 处理后的 Markdown 及 HTML 代码

```markdown
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/dd404bb6f4326a5aaef9831d2ab0187e38a5a00c9a33d5c1bef9ca4561b86ddf.jpg)  
图3.31利用以太网交换机构成虚拟局域网  

#### 通信场景

<ul>

- 同一交换机内VLAN通信
  - A站向B站发送帧：交换机1____转发帧
- 跨交换机同VLAN通信
  - A站向E站发送帧：
    - 交换机1插入____后转发
    - 交换机2移除____后转发给E站
- 不同VLAN间通信
  - A站向C站发送帧：
    - 需要通过____
    - 或使用交换机中嵌入____进行转发

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直接</li>
    <li>

VLAN标签</li>
    <li>

VLAN标签</li>
    <li>

上层路由器</li>
    <li>

专用芯片</li>
  </ul>
</details>
</div>

</ul>

### 本质

<ul>

- 虚拟局域网只是局域网为用户提供的一种____，并不是一种新型局域网

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

服务</li>
  </ul>
</details>
</div>

</ul>

# <span style="color: Gold;">广</span>域网  

<ul>

## 基本概念  

<ul>

### 定义与特点

<ul>

- 覆盖范围
  - 覆盖范围很____
  - 远超一个城市的范围的____网络
- 主要任务
  - ____运送主机所发送的数据
- 链路特征
  - 连接厂域网各结点交换机的链路都是____链路
  - 通信容量必须____
    - 支持日益增长的通信量

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

广</li>
    <li>

长距离</li>
    <li>

长距离</li>
    <li>

高速</li>
    <li>

足够大</li>
  </ul>
</details>
</div>

</ul>

### 与互联网的关系

<ul>

- 区分概念
  - 广域网不等于____
- 互联网特点
  - 可以连接____类型的网络
  - 通常使用____来连接
- 通信方式
  - 局域网可以通过广域网与另一个相隔很远的____通信

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

互联网</li>
    <li>

不同</li>
    <li>

路由器</li>
    <li>

局域网</li>
  </ul>
</details>
</div>

</ul>

### 组成与工作原理

<ul>

- 基本组成
  - ____交换机
  - ____链路
- 工作特点
  - 结点交换机功能
    - ____并转发分组
  - 连接方式
    - 结点之间都是____连接
    - 一个结点交换机往往与____相连以提高可靠性

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

结点</li>
    <li>

连接</li>
    <li>

存储</li>
    <li>

点到点</li>
    <li>

多个结点交换机</li>
  </ul>
</details>
</div>

</ul>

### 广域网与局域网的区别

<ul>

- 层次区别
  - 局域网：mainly use____层协议
  - <span style="color: Gold;">广</span>域网：mainly use____层协议
- 其他区别
  - 具体区别与联系见表3.5

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5405276467369b2d85907054b6143b147698e5110094dc13809916dce8e72eac.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据链路</li>
    <li>

网络</li>
  </ul>
</details>
</div>

</ul>

</ul>

## PPP协议 <span style="color: gray; font-size: 14px;">Point-to-Point Protocol</span>

<ul>

### 概述

<ul>

- 是现在最流行的____链路控制协议
- 主要应用
  - 用户计算机与ISP通信时所用的____层协议
  - 广域网路由器之间的____线路

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

点对点</li>
    <li>

数据链路</li>
    <li>

专用</li>
  </ul>
</details>
</div>

</ul>

### 组成

<ul>

- 链路控制协议（LCP）
  - 用来____、____、____数据链路连接
  - 协商一些选项
- 网络控制协议（NCP）
  - 为不同____层协议配置
  - 建立和配置____连接
- IP数据报封装方法
  - IP数据报在PPP帧中作为____部分
  - 长度受____限制

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

建立</li>
    <li>

配置</li>
    <li>

测试</li>
    <li>

网络</li>
    <li>

逻辑</li>
    <li>

信息</li>
    <li>

MTU</li>
  </ul>
</details>
</div>

</ul>

### 帧格式

<ul>

- 帧结构如图3.33所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1e8d91d9da44885d266b032830b73b1f319582eddaad40c563b504eeddffc9ef.jpg)  
图3.33PPP帧的格式  

#### 首部字段

<ul>

- 标志字段(F)：____
- 地址字段(A)：____
- 控制字段(C)：____
- 协议字段：2字节
  - ____表示IP数据报
  - ____表示LCP数据

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0x7E</li>
    <li>

0xFF</li>
    <li>

0x03</li>
    <li>

0x0021</li>
    <li>

0xC021</li>
  </ul>
</details>
</div>

</ul>

#### 信息字段

<ul>

- 长度可变(____字节)

>attention:  
因为PPP是点对点的，并不是总线形，所以无须使用CSMA/CD协议，自然就不会有最短帧长的限制，所以信息段占 $0\sim1500$ 字节，而不是46\~1500字节。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0~1500</li>
  </ul>
</details>
</div>

</ul>

#### 尾部字段

<ul>

- 帧检验序列(FCS)：____字节，使用____检验

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

2</li>
    <li>

CRC</li>
  </ul>
</details>
</div>

</ul>

</ul>

### PPP协议状态图及工作过程

<ul>

- 状态图如图3.34所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d94ee3aeefa6ea19b8d920eb532cdff20689de0539f58617c2802450a1044797.jpg)  
图3.34PPP协议的状态图  

#### 工作状态流程

<ul>

- ____状态
- ____状态
- ____状态
- ____状态
- ____状态
- ____状态

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链路静止</li>
    <li>

链路建立</li>
    <li>

鉴别</li>
    <li>

网络层协议</li>
    <li>

链路打开</li>
    <li>

链路终止</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: Gold;">特点</span>

<ul>

- 不使用序号和确认机制，只保证____接收
  - 只支持____的点对点链路
  - 两端可运行____网络层协议
- 面向____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

无差错</li>
    <li>

全双工</li>
    <li>

不同</li>
    <li>

字节</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color: LightSkyBlue;">设备</span>  

<ul>

## *网<span style="color: green;">桥</span>

<ul>

### 工作原理

<ul>

- 使用集线器在物理层扩展以太网会形成更大的____域
- 为了避免这个问题，可以使用网桥在____层扩展以太网，而原来的每个以太网称为一个____
- 网桥具有____帧和____帧的能力
  - 根据帧首部中的____和网桥的帧转发表来转发或丢弃所收到的帧
  - 起到了____通信量的功能
- 各个网段是相对____的，一个网段的故障不影响另一个网段的运行

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

冲突</li>
    <li>

数据链路</li>
    <li>

网段</li>
    <li>

识别</li>
    <li>

转发</li>
    <li>

目的MAC地址</li>
    <li>

过滤</li>
    <li>

独立</li>
  </ul>
</details>
</div>

</ul>

### 连接方式

<ul>

- 网络1和网络2通过网桥连接后
  - 网桥接收网络1发送的____，检查数据帧中的____
    - 若是网络2的地址，则____给网络2
    - 若是网络1的地址，则将其____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据帧</li>
    <li>

地址</li>
    <li>

转发</li>
    <li>

丢弃</li>
  </ul>
</details>
</div>

</ul>

### 现状

<ul>

- 网桥是早期的____层设备，现已被____取代，最新大纲中已将其删除

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

数据链路</li>
    <li>

以太网交换机</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: purple;">以太</span>网<span style="color: green;">交换机</span>  

<ul>

### 原理和特点  

<ul>

#### 基本原理

<ul>

- 以太网交换机也称____交换机
  - 二层: 工作在____层
- 实质是一个____的网桥
  - 能将网络分成小的____域
  - 为每个用户提供更大的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

二层</li>
    <li>

数据链路</li>
    <li>

多接口</li>
    <li>

冲突</li>
    <li>

带宽</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: GreenYellow;">带</span><span style="color: LightSkyBlue;">宽</span> <span style="color: green;">分配</span>

<ul>

- ____器的共享式10Mb/s以太网
  - 若共有N个用户，则每个用户的平均带宽为总带宽(10Mb/s)的____
- 以太网交换机(____方式)
  - 每个接口到主机的带宽都是____
    - 用户通信时是____带宽的
  - 拥有N个接口的交换机的**总容量**: ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

集线</li>
    <li>

$1/N$</li>
    <li>

全双工</li>
    <li>

10Mb/s</li>
    <li>

独占</li>
    <li>

N×10Mb/s</li>
  </ul>
</details>
</div>

</ul>

#### 主要特点

<ul>

1. 可工作在____方式
   - 当交换机的接口直接与____连接时
   - 能同时连通____
   - ____传输数据
   - 不需要使用____协议

2. ____工作模式
   - 当交换机的接口连接____时
   - 只能使用____协议
   - 只能工作在____方式

3. ____功能
   - 内部的帧转发表通过____算法建立
   - 基于网络中各主机间的通信____建立

4. ____交换性能
   - 使用____芯片
   - 交换速率较高

5. ____特性
   - 交换机____传输介质的带宽

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

全双工</li>
    <li>

主机或其他交换机</li>
    <li>

多对接口</li>
    <li>

无冲突地</li>
    <li>

CSMA/CD</li>
    <li>

半双工</li>
    <li>

集线器</li>
    <li>

CSMA/CD</li>
    <li>

半双工</li>
    <li>

即插即用</li>
    <li>

自学习</li>
    <li>

自动逐渐</li>
    <li>

高速</li>
    <li>

专用交换结构</li>
    <li>

带宽</li>
    <li>

独占</li>
  </ul>
</details>
</div>

</ul>

#### 交换模式

<ul>

1. ____交换方式
   - 只检查帧的____
   - 决定该帧的____
   - 交换时延非常____
   - 缺点：不检查差错就____

2. ____交换方式
   - 将接收到的帧缓存到____中
   - 检查数据是否____
   - 通过查找表转换为____
   - 优点：____高，支持不同速率接口间的转换
   - 缺点：时延____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

直通</li>
    <li>

目的MAC地址</li>
    <li>

转发接口</li>
    <li>

小</li>
    <li>

直接转发</li>
    <li>

存储转发</li>
    <li>

高速缓存器</li>
    <li>

正确</li>
    <li>

输出接口</li>
    <li>

可靠性</li>
    <li>

较大</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: GreenYellow;">接口</span>速<span style="color: SlateBlue;">率</span>

<ul>

- 具有多种速率的接口
  - ____
  - ____
  - ____接口

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

10Mb/s</li>
    <li>

100Mb/s</li>
    <li>

多速率自适应</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 自学习功能  

<ul>

#### 过滤和转发机制

<ul>

- 过滤：
  - decide 帧是____or____
- 转发：
  - 帧应被移至哪个____
- 借助____完成
  - 交换表项包含：
    - ____
    - 连通该MAC地址的____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/53ad90e0fe9307244331a3e9fee9dbea78bb5927bafa54f29fc77ee3e117e528.jpg)  
图3.35以太网交换机中的交换表  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

转发</li>
    <li>

丢弃</li>
    <li>

接口</li>
    <li>

交换表</li>
    <li>

MAC地址</li>
    <li>

接口</li>
  </ul>
</details>
</div>

</ul>

#### 自学习过程

<ul>

- A向B发送帧的过程
  - 从____进入交换机
    - 查找交换表，找不到____
    - 将____和____写入交换表
  - 向除____外的所有接口广播

- B向A发送帧的过程
  - 通过____向A发送
  - 查找交换表，发现____
    - 从____转发给A
  - 将____和____写入交换表

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

接口1</li>
    <li>

MAC地址B</li>
    <li>

源地址A</li>
    <li>

接口1</li>
    <li>

接口1</li>
    <li>

接口3</li>
    <li>

(A,1)</li>
    <li>

接口1</li>
    <li>

源地址B</li>
    <li>

接口3</li>
  </ul>
</details>
</div>

</ul>

#### 交换表维护

<ul>

- 设有____时间
- ____表项自动删除
- 保证交换表符合当前网络____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有效</li>
    <li>

过期</li>
    <li>

实际状况</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 共享式以太网和交换式以太网' <span style="color: orange;">对比  

<ul>

#### 通信方式对比

<ul>

1. 普通帧发送
   - 共享式以太网
     - 集线器将帧转发到____
     - 网卡根据____决定接收或丢弃
   - 交换式以太网
     - 根据____和____
     - 明确转发给____

2. 广播帧发送
   - 共享式以太网
     - 集线器转发到____
     - 网卡检测____并接收
   - 交换式以太网
     - 交换机从____转发
     - 各主机接收____

3. 多对主机通信
   - 共享式以太网
     - 必然产生____
   - 交换式以太网
     - 实现多对接口____交换
     - 不会产生____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

所有接口</li>
    <li>

目的MAC地址</li>
    <li>

目的MAC地址</li>
    <li>

交换表</li>
    <li>

目的主机</li>
    <li>

所有接口</li>
    <li>

广播地址</li>
    <li>

所有接口</li>
    <li>

广播帧</li>
    <li>

冲突</li>
    <li>

高速并行</li>
    <li>

冲突</li>
  </ul>
</details>
</div>

</ul>

#### 域隔离特性

<ul>

- 集线器
  - 不隔离____域
  - 不隔离____域
- 交换机
  - 不隔离____域
  - 隔离____域

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

广播</li>
    <li>

冲突</li>
    <li>

广播</li>
    <li>

冲突</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# 本章小结及疑难点  

<ul>

1.说明用 $n$ 比特进行编号时，若接收窗口的大小为1，则仅在发送窗口的大小 $W_{\mathrm{T}}\leqslant____$ 时，连续ARQ协议才能正确运行。  

假设用3比特进行编号，可表示____个不同的序号，发送窗口的最大值似乎可以为8。但是，实际上，发送窗口的大小设为8将使协议在某些情况下无法工作。下面来证明这一点。  

设发送窗口为8，发送方发送完 $_{0\sim7}$ 号共8个数据帧后，暂停发送。假定这8个数据帧均已正确到达接收方，且接收方对每个数据帧都发回了____。下面考虑两种不同的情况。  

第一种情况：所有确认帧都正确地到达发送方，因此发送方接着又发送8个新的数据帧，其编号应是____。注意，序号是循环使用的。因此序号虽然相同，但8个帧都是____。  

第二种情况：所有确认帧都丢失。经过一段____控制的时间后，发送方重传这8个旧数据帧，其编号仍为____  
于是，当接收方第二次收到编号为 $_{0\sim7}$ 的8个数据帧时，就无法判定这是8个____还是8个____。因此，将发送窗口设为8显然是不行的。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$2^{n}-1$</li>
    <li>

8</li>
    <li>

确认帧</li>
    <li>

$_{0\sim7}$</li>
    <li>

新帧</li>
    <li>

超时计时器</li>
    <li>

$_{0\sim7}$</li>
    <li>

新数据帧</li>
    <li>

重传的旧数据帧</li>
  </ul>
</details>
</div>

2.为什么PPP协议不使用帧的编号和确认机制来实现____传输？PPP不使用序号和确认机制是出于以下考虑：  

若使用能够实现可靠传输的数据链路层协议（如____），开销就会增大。当数据链路层出现差错的概率不大时，使用比较简单的PPP较为合理。  

在因特网环境下，PPP的信息字段放入的数据是____。假定我们采用了能实现可靠传输但十分复杂的数据链路层协议，当数据帧在路由器中从数据链路层上升到网络层时，仍有可能因____而被丢弃。因此，数据链路层的可靠传输并不能保证网络层的传输也是____。  

PPP在帧格式中有帧检验序列____字段。对于每个收到的帧，PPP都要使用硬件进行____检验。若发现差错，则____该帧（一定不能把有差错的帧交给上一层）。端到端的差错控制最后由____负责。因此，PPP可以保证____接收。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

可靠</li>
    <li>

HDLC</li>
    <li>

IP数据报</li>
    <li>

网络拥塞</li>
    <li>

可靠的</li>
    <li>

FCS</li>
    <li>

CRC</li>
    <li>

丢弃</li>
    <li>

高层协议</li>
    <li>

无差错</li>
  </ul>
</details>
</div>

3.在标准以太网中，为什么说若有冲突，则冲突一定发生在____内？或者说一个帧若在冲突窗口内没有发生冲突，则该帧不会再发生冲突？  

结点在发送数据之前，先____信道是否有载波，若有，表示信道忙，则继续监听，直至检测到____为止。一个数据帧在从结点A向最远结点的传输过程中，若有其他结点也在发送数据，则会发生____，冲突后的信号经过____时间后传回结点A，结点A会检测到冲突，所以说若有冲突，则一定发生在冲突窗口内，若在冲突窗口内没有发生冲突，之后若其他结点再要发送数据，则会监听到____，而不会发送数据，从而不会再发生冲突。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

冲突窗口</li>
    <li>

监听</li>
    <li>

信道空闲</li>
    <li>

冲突</li>
    <li>

冲突窗口</li>
    <li>

信道忙</li>
  </ul>
</details>
</div>

4.一个以太网的速率从10Mb/s升级到100Mb/s，满足CSMA/CD冲突条件。为使其正常工作，需做哪些调整？为什么？  

100BaseT以太网与 $10\,\mathrm{{Mb}/\mathrm{{s}}}$ 以太网的帧格式相同，唯一不同的参数是____，10Mb/s以太网的帧间最小间隔时间是____，100BaseT以太网的帧间最小间隔时间是____。此外，为了保持最短帧长不变，将一个网段的最大长度减小到____。所有这些调整的原因是速率提高到了____。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

帧间最小间隔时间</li>
    <li>

$9.6\upmu\mathrm{s}$</li>
    <li>

$0.96\upmu\mathrm{s}$</li>
    <li>

$100\mathrm{m}$</li>
    <li>

原速度的10倍</li>
  </ul>
</details>
</div>

5.关于物理层、数据链路层、网络层设备对于隔离冲突域和广播域的总结。
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fc3ddde383674d06764c118a9de7de3dffbcff35e7317effddf57d889c61eb8c.jpg)  

</ul>


