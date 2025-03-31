以下是按照您的要求处理后的 Markdown 内容，增加了 `<ul></ul>` 标签以实现标题段落间的缩进，并严格保留原始文本内容和 Markdown 格式（如图片链接）不变：

```markdown
<span style="color: silver;">

#  <span style="color: silver;">above

<ul>

##  <span style="color: silver;">【考纲内容】  

<ul>

总线的基本概念总线的组成及性能指标总线事务和定时  

</ul>

##  <span style="color: silver;">【复习提示】  

<ul>

本章的知识点较少，通常以选择题的形式出现，特别是总线的特点、猝发传输方式、性能指标、定时方式及常见的总线标准等。总线带宽的计算也可能结合其他章节出综合题。  

在学习本章时，请读者思考以下问题  

1）引入总线结构有什么好处？2）引入总线结构会导致什么问题？如何解决？请读者在学习本章的过程中寻找答案，本章末尾会给出参考答案。  

</ul>

</ul>

# <span style="color: gray;">概述</span>  

<ul>

- 早期计算机的连接方式
  - 各部件之间通过单独连线互连
  - 这种方式称为分散连接
- 发展到总线连接
  - 原因：I/O设备种类和数量增多
  - 目的：更好地解决I/O设备和主机之间连接的灵活性
- 进一步发展 
  - 提出各类总线标准
  - 目的：简化设计

<ul>

## <span style="color: gray;">概念</span>  

<ul>

### <span style="color: gray;">define  

<ul>

- 一组能为多个部件分时和共享的 公共 <span style="color: LightSkyBlue;">信息</span><span style="color: green;">传送</span> <span style="color: Gold;">线路</span>
- <span style="color: silver;">symbol:</span>

<ul>

#### <span style="color: LimeGreen;">分时</span>：

<ul>

  - <span style="color: silver;">same moment</span> only 1部件--<span style="color: green;">发送</span><span style="color: LightSkyBlue;">信息</span>-->bus

</ul>

#### <span style="color: Gold;">共享</span>：

<ul>

  - bus can 挂接多个部件
    -  <span style="color: silver;">部件s之间 互相交换信息</span>

</ul>

</ul>

</ul>

### <span style="color: gray;">bus<span style="color: LightSkyBlue;">设备</span>  

<ul>

- <span style="color: gray;">按对bus控制功能分</span>:

<ul>

#### <span style="color: orange;">主</span>~：

<ul>

  - 发出总线请求且获得总线控制权的设备

</ul>

#### <span style="color: LimeGreen;">从</span>~：

<ul>

   - <span style="color: gray;">only can</span>响应主~发来的总线命令

</ul>

</ul>

</ul>

###  <span style="color: Gold;">特性</span>  

<ul>

- 机械特性（尺寸、形状）
- 电气~（传输方向和有效的电平范围）
- 功能~（每根传输线的功能）
- 时间~（信号和时序的关系）

</ul>

</ul>

</ul>

## <span style="color: green;">分类  

<ul>

###  <span style="color: Gold;">功能</span> <span style="color: silver;">层次

<ul>

> pro： 总线相关的概念与特点（2016、2017）  

<ul>

####  <span style="color: silver;">片内~

<ul>

- cpu芯片内部bus
  - 各寄存器之间 & 寄存器与ALU 的连接

</ul>

#### <span style="color: LightSkyBlue;">系统</span><span style="color: gray;">~

<ul>

- <span style="color: gray;">computer system</span> 内各<u>功能部件</u>之间相互连接
- 按传输信息内容分为:
  > pro：数据总线上传输的内容（2011）  

<ul>

#####  <span style="color: LimeGreen;">数据</span> <span style="color: silver;">bus

<ul>

  - 用途：传输数据、指令和中断类型号等
  - 特点：双向传输
  - 位数：反映一次能传送的数据位数

</ul>

##### <span style="color: LightSkyBlue;">地址</span> <span style="color: silver;">~

<ul>

  - 用途：指出数据源或目的地址
  - 特点：单向传输
  - 位数：反映最大寻址空间

</ul>

##### <span style="color: orange;">控制</span> <span style="color: silver;">~

<ul>

  - 用途：传输各种命令、反馈和定时信号
  - 典型信号：时钟、复位、总线请求/充许等

</ul>

注意区分：
- 数据通路：各功能部件通过数据总线连接形成的数据传输路径
- 数据总线：数据传输的媒介

</ul>

</ul>

####  <span style="color: silver;">I/O ~

<ul>

- 用途：连接中低速I/O设备
- 特点：通过I/O接口与系统总线相连
- 目的：将低速设备与高速总线分离
- 例如：USB、PCI总线

</ul>

####  <span style="color: Gold;">通信</span> <span style="color: silver;">~

<ul>

- 又称外部总线
- 用途：计算机系统之间或与其他系统的信息传送

</ul>

</ul>

</ul>

### <span style="color: LightSkyBlue;">时序</span> <span style="color: Gold;">控制<span style="color: silver;">方式 

<ul>

####  <span style="color: silver;"><span style="color: LightSkyBlue;">同步</span>bus

<ul>

- 使用统一时钟进行同步
- 在规定时钟节拍内进行规定总线操作

</ul>

#### <span style="color: SlateBlue;">异步</span> <span style="color: silver;">~

<ul>

- 无统一时钟
- 使用信号握手方式协调
- 总线操作时序不固定

</ul>

</ul>

### <span style="color: LightSkyBlue;">数据</span><span style="color: green;">传输</span> <span style="color: silver;">方式

<ul>

####   <span style="color: silver;"><span style="color: Gold;">串</span>行<span style="color: gray;">bus</span>

<ul>

- 结构：一条双向或两条单向数据线
- 传输：按比特位串行顺序
- 特点：
  - 效率低于并行总线
  - 适合长距离通信
  - 要求不高

</ul>

####  <span style="color: LimeGreen;">并行</span> <span style="color: silver;">~

<ul>

- 结构：多条双向数据线
- 传输：多比特位同时传输
- 特点：
  - 效率较高
  - 存在延迟和干扰问题
  - 适合近距离通信

> attention  

- 并行总线并不一定总比串行总线快，它们适合不同的场景
  - 并行总线特点：
    - 多个数据位同时传输
    - 需要考虑数据的协同性
    - 存在线路之间的相互干扰
    - 工作频率无法持续提高
  - 串行总线特点：
    - 可通过不断提高工作频率来提高传输速度
    - 最终速度可能超越并行总线

</ul>

</ul>

</ul>

</ul>

##  <span style="color: silver;">系统总线的 <span style="color: LimeGreen;">结构</span>  

<ul>

###  <span style="color: silver;">按结构

<ul>

####  <span style="color: silver;"><span style="color: LightSkyBlue;">单</span>总线结构  

<ul>

- 基本特征：
  - CPU、主存、I/O设备都挂在一组总线上
  - 允许设备间直接交换信息
  - 无需中间设备干预
- 注意事项：
  - ~~单总线不是指只有一根信号线~~
  - 可分为地址总线、数据总线和控制总线

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8b75e0bcbcbe7c1e22d71e2fa26222c4fe36d1dfe9f77fe38f2dbbcd9c3075a.jpg)  
图6.1单总线结构  

- 优点：
  - 结构简单
  - 成本低
  - 易于接入新设备
- 缺点：
  - 带宽低
  - 负载重
  - 只能争用唯一总线
  - 不支持并发传送

</ul>

####  <span style="color: silver;"><span style="color: green;">双</span>~  

<ul>

- 组成：
  - 主存总线：<u>CPU</u>、<u>主存</u>和<u>通道</u>  间传送数据
  - I/O总线：外部设备与通道间传送数据

- 优：
  - 实现存储器总线和I/O总线分离
  - 低速I/O设备从单总线分离
- 缺：
  - 需要增加通道等硬件设备

</ul>

####  <span style="color: silver;"><span style="color: orange;">三</span>~

<ul>

- 组成：
  - <span style="color: orange;">主存</span>总线：CPU和内存间传送信息
  - <span style="color: green;">I/O</span>~：CPU和外设间通信
  - <span style="color: DarkRed;">DMA</span>~：内存和高速外设间直接传送数据

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d7065d4dc41e8445bd893d3f0057b7a4fbb7dfb06e816e4830f2970c62d12561.jpg)  
图6.2双总线结构  

- 优点：
  - 提高I/O设备性能
  - 提高系统吞吐量
- 缺点：
  - 任意时刻only use 1 总线
  - 系统工作效率较低

</ul>

</ul>

###  <span style="color: silver;">常见bus <span style="color: Gold;">标准</span>

<ul>

> pro：总线标准的英文缩写（2010）  

<ul>

#### <span style="color: LightSkyBlue;">系统</span><span style="color: silver;">总线

<ul>

#####  <span style="color: silver;"><span style="color: green;">并行</span>bus

<ul>

######  <span style="color: silver;"><span style="color: green;">I</span>SA (Industry Standard Architecture)

<ul>

- 工业标准体系结构
- 特点：
  - 最早出现的系统总线
  - 传输速率低
  - CPU占用率高
  - 占用硬件中断资源

</ul>

######  <span style="color: silver;"><span style="color: LightSkyBlue;">E</span>ISA (Extended Industry Standard Architecture)

<ul>

- 扩展的ISA
- 特点：
  - 对ISA完全兼容
  - 支持突发传送

> pro：区分设备总线和局部总线（2013）  

</ul>

</ul>

</ul>

#### <span style="color: orange;">局部</span>

<ul>

#####  <span style="color: silver;"><span style="color: green;">并行</span>bus

<ul>

######  <span style="color: silver;"><span style="color: LightSkyBlue;">V</span><span style="color: deepskyblue;">E</span>SA (Video Electronics Standards Association)

<ul>

- 视频电子标准协会
- 特点：
  - 32位局部总线
  - 针对多媒体PC高速传送需求

</ul>

######  <span style="color: silver;">P<span style="color: gray;">C</span>I (Peripheral Component Interconnect)

<ul>

- 外部设备互连
- 应用：显卡、声卡、网卡等
- 特点：
  - 高速外围总线
  - 与处理器时钟频率无关
  - 支持即插即用

</ul>

######  <span style="color: silver;">AGP (Accelerated Graphics Port)

<ul>

- 加速图形接口
- 用途：连接主存和图形卡

</ul>

</ul>

#####  <span style="color: silver;"> <span style="color: Gold;">串</span><span style="color: green;">行</span>bus

<ul>

######  <span style="color: silver;">PCI- <span style="color: Gold;">E</span> (PCI-Express)

<ul>

- 特点：
  - 高速串行双通道传输
  - 支持双向传输模式
  - 支持全双工模式

> pro：PCI-E总线的特点（2017）  

</ul>

</ul>

</ul>

<br>

#### <span style="color: deepskyblue;">设备</span>

<ul>

#####  <span style="color: silver;"><span style="color: Gold;">串</span><span style="color: green;">行</span>bus

<ul>

######  <span style="color: silver;">RS-232C

<ul>

- 用途：数据终端设备和数据通信设备间的标准接口

</ul>

######  <span style="color: silver;">USB (Universal Serial Bus)

<ul>

- 通用串行总线
- 特点：
  - 即插即用
  - 热插拔
  - 强连接能力

> pro：USB总线的特点（2012）  

</ul>

######  <span style="color: silver;">SATA (Serial Advanced Technology Attachment)

<ul>

- 串行高级技术附件
- 用途：串行硬件驱动器接口

</ul>

</ul>

### <span style="color: silver;"><span style="color: green;">并行</span>bus

<ul>

######  <span style="color: silver;">PCMCIA

<ul>

- 用途：笔记本电脑接口标准
- 特点：即插即用

</ul>

######  <span style="color: silver;">IDE (Integrated Drive Electronics)

<ul>

- 集成设备电路
- 又称ATA
- 用途：连接硬盘和光驱

</ul>

######  <span style="color: silver;">SCSI (Small Computer System Interface)

<ul>

- 小型计算机系统接口
- 用途：计算机和周边设备间接口

</ul>

<br>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

## <span style="color: orange;">性能<span style="color: LightSkyBlue;">指标</span>  

<ul>

###  <span style="color: silver;"><span style="color: LightSkyBlue;">时钟</span>相关

<ul>

#### <span style="color: gray;">bus时钟</span>$\color{deepskyblue}T$

<ul>

  - 即机器的时钟周期
    - 计算机有一个统一的时钟，以控制整个计算机的各个部件
  - 总线也要受此时钟的控制

</ul>

#### ..$\color{orange}{f}$

<ul>

  - 即机器的时钟频率
  - $f=1/T$

</ul>

</ul>

###  <span style="color: silver;"><span style="color: green;">传输</span>相关

<ul>

#### <span style="color: gray;">bus<span style="color: green;">传输</span>$\color{deepskyblue}T$

<ul>

  - 指一次总线操作所需的时间
  - 包括:
    - 申请阶段
    - 寻址阶段
    - 传输阶段
    - 结束阶段
  - 通常由若干总线时钟周期构成

</ul>

#### ..<span style="color: LightSkyBlue;">工作</span>$\color{orange}{f}$

<ul>

  - 总线上各种操作的频率，为总线周期的倒数
  - 实际上指1秒内传送几次数据
  - 若总线周期 $=N$ 个时钟周期，则总线的工作频率 $=$ 时钟频率/N
  - 若一个时钟周期可以传送 $K$ 次数据，则总线工作频率是总线时钟频率的 $K$ 倍

</ul>

</ul>

###  <span style="color: silver;"><span style="color: deepskyblue;">物理</span>特性

<ul>

#### <span style="color: gray;">bus<span style="color: deepskyblue;">宽度</span>

<ul>

  - 也称总线位宽
  - 是总线上能够同时传输的数据位数
  - 通常指数据总线的根数，如32根称为32位总线

> pro：总线带宽的相关计算（2009、2013、2014、2019、2020）  

</ul>

#### <span style="color: green;">带</span><span style="color: LightSkyBlue;">宽</span>

<ul>

  - 单位时间内总线上最多可传输数据的位数
  - 通常用每秒传送信息的字节数来衡量，单位可用字节/秒（B/s）表示
  - 计算公式：总线带宽 $=$ 总线工作频率 $\times($ (总线宽度/8）

</ul>

#### <span style="color: green;">复用</span>

<ul>

  - 一种信号线在不同的时间传输不同的信息
  - 例如：地址/数据线复用
  - 优点：使用较少的线传输更多的信息，节省空间和成本

</ul>

####  <span style="color: silver;">信号 <span style="color: Gold;">线</span><span style="color: LimeGreen;">数

<ul>

  - 包含：
    - 地址总线
    - 数据总线
    - 控制总线
  - 三种总线数的总和

</ul>

</ul>

> pro：提高总线带宽的办法（2018）  

### <span style="color: gray;">sum</span>

<ul>

- 最主要的三个性能指标：
  - 宽度
  - 工作$f$
  - 带宽
- 三者关系：$\color{green}带宽\color{black}=\color{blue}宽度\color{black}\times工作\color{orange}f$
  - eg：总线工作频率为22MHz，总线宽度为16位，则总线带宽 $\scriptstyle=22\mathbf{M}\times(16/8)=44\mathbf{M}\mathrm{B/s}$

</ul>

</ul>

</ul>

#  <span style="color: silver;">bus<span style="color: green;">事务</span>  
Bus transaction

<ul>

- 从请求总线到完成总线使用的<span style="color: green;">操作</span><span style="color: deepskyblue;">序列</span> → 总线事务
  - 一个总线周期中发生的一系列活动
- typically:
  - 请求操作
  - 仲裁~
  - 地址传输
  - 数据..
  - bus释放

## <span style="color: LightSkyBlue;">阶段</span>

<ul>

- 请求阶段
  - 主设备（CPU或DMA）发出总线传输请求
  - 获得总线控制权
-  <span style="color: Gold;">仲裁</span>~
   - 决定将下一个传输周期的总线使用权 <span style="color: green;">授予</span> 某个申请者
- 寻址~
  - 主设备通过总线给出要访问的从设备地址及有关命令
  - 启动从模块
- 传输~
  - 主模块和从模块进行数据交换
  - 可单向或双向进行数据传送
- 释放~
  - 主模块的有关信息均从系统总线上撤除
  - 让出总线使用权

> pro：非突发传送的时间分析（2023）  

## 数据<span style="color: green;">传送</span>方式

<ul>

### <span style="color: purple;">非</span><span style="color: orange;">突发</span>传送

<ul>

- 每个传送周期内
  - first传送地址
  - second传送数据
- usually每次只能传输一个字长的数据 (主、从设备之间)

> pro：突发传送的概念（2014），突发传送的时间分析（2012、2013）  

</ul>

### </span><span style="color: orange;">突发</span>~

<ul>

- 每个传送周期内
  - first传送一个地址
  - second连续传送多次数据
    - (成组数据)or(连续数据单元)
    - 后续数据的地址is
    - 前一个地址的自动增量
<br>

- 每个时钟周期
  - 传送一个字长的信息
- 不释放总线，直到一组数据全部传送完毕

</ul>

### <span style="color: gray;">"一个字长"</span>

<ul>

- 非突发传送的“一个字长数据”:  每次传输操作的单元大小
- 突发传送的“一个字长信息”:   传输过程中每个时钟周期可以处理的数据量，并且处理可以连续进行。
<br>

</ul>

</ul>

</ul>

</ul>

#  <span style="color: silver;">bus<span style="color: orange;">定时</span>  

<ul>

- 一种协议或规则
  - 用于控制总线双方交换数据时的 <span style="color: green;">时间</span>配合关系
- 目的
  - 确保总线双方在数据交换过程中的正确时序配合
  
> pro：各种总线定时方式的特点（2015、2021）  

<ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">同</span>步~

<ul>

- 基本特征
  - 采用统一的时钟信号协调发送和接收双方
  - 时钟产生相等的时间间隔
  - 每个间隔构成一个总线周期
  - 一个总线周期可进行一次数据传送

- 优点
  - 传送速度快，具有较高的传输速率
  - 总线控制逻辑简单
- 缺点
  - 主从设备属于强制性同步
  - 不能及时进行数据通信的有效性检验
  - 可靠性较差

<ul>

###  <span style="color: silver;"><span style="color: LightSkyBlue;">同</span>步<span style="color: Gold;">串</span><span style="color: green;">行</span>通信

<ul>

- 特点
  - 发送方时钟直接控制接收方时钟
  - 双方完全同步的逐位传输
  - 仅在数据块头尾添加开始和结束标记
  - 传输效率高但硬件复杂

</ul>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: purple;">异</span>步~ 

<ul>

- 基本特征
  - 无统一时钟和固定时间间隔
  - 依靠传送双方"握手"信号实现定时控制
  - 主设备提出"请求"信号
  - 从设备发出"回答"信号

- 优点
  - 总线周期长度可变
  - 能保证不同速度设备间可靠信息交换
  - 自动适应时间配合
- 缺点
  - 控制较复杂
  - 速度较慢

### <span style="color: green;">类型</span>

<ul>

#### <span style="color: purple;">不</span><span style="color: Gold;">互锁</span>

<ul>

- 主设备不等待回答信号即可撤销请求
- 从设备自动撤销回答信号
- 双方无互锁关系

</ul>

#### <span style="color: LimeGreen;">半</span>~

<ul>

- 主设备需等待回答信号后撤销请求
- 从设备自动撤销回答信号
- 单向互锁关系

</ul>

#### <span style="color: orange;">全</span>~

<ul>

- 主设备需等待回答后撤销请求
- 从设备需等待请求撤销后撤销回答
- 双向互锁关系

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e30f9589c45b2a57c15931e592518bb215f20b47d5abf20d0fd0e062b8376d2f.jpg)  
图6.4请求和回答信号的互锁  

</ul>

</ul>

> pro：异步串行通信方式的特点（2016）  

###  <span style="color: silver;"><span style="color: purple;">异</span>步<span style="color: Gold;">串</span><span style="color: green;">行</span>通信

<ul>

- 特点
  - 收发双方时钟不严格一致
  - 每个字符都有开始位和停止位
  - 通信线空闲时为逻辑"1"
  - 数据位从最低位开始传输
  - 可选奇偶校验位
  - 最后发送停止位 

</ul>

</ul>

##  <span style="color: Gold;">半</span><span style="color: LightSkyBlue;">同</span>步<span style="color: orange;">定时

<ul>

- 基本特征
  - 结合同步和异步定时特点
  - 信号发出时间参照系统时钟前沿
  - 接收方采用系统时钟后沿判断
  - 增设Wait响应信号线

- 优点
  - 控制方式比异步定时简单
  - 各模块同步工作，可靠性高
- 缺点
  - 系统时钟频率不能太高
  - 整体工作速度不高

</ul>

##  <span style="color: silver;"><span style="color: green;">分离</span>式定时方式  

<ul>

- 基本特征
  - 将总线事务分解为<span style="color: green;">请求</span>和<span style="color: LightSkyBlue;">应答</span>两个子过程
    - 均为 单方向信息流
    - 每个设备all可变为主设备

### <span style="color: LimeGreen;">请求</span>

<ul>

- 主设备获得总线使用权
- 发送命令和地址信息
- 从设备接收信息
- 主设备立即释放总线

</ul>

### <span style="color: LightSkyBlue;">应答</span>

<ul>

- 从设备准备数据
- 申请总线使用权
- 发送准备好的数据
- 主设备接收数据

</ul>

### <span style="color: gray;">特点</span>

<ul>

- 优点
  - 不传送数据时释放总线
  - 可接受其他设备请求
  - 无空闲等待时间
- 缺点
  - 控制复杂
  - 开销大

</ul>

</ul>

</ul>

</ul>

#  <span style="color: silver;">本章小结</span>  

<ul>

##  <span style="color: silver;">总线结构的优点?

<ul>

- 引入总线结构主要有以下优点：
  - 简化了系统结构，便于系统设计制造
  - 便于接口设计，所有与总线连接的设备均采用类似的接口
  - 便于系统的扩充、更新与灵活配置，易于实现系统的模块化
  - 便于设备的软件设计，所有接口的软件对不同的接口地址进行操作
  - 便于故障诊断和维修，同时也能降低成本

</ul>

##  <span style="color: silver;">总线引入的问题及解决方案?

<ul>

- 主要问题
  - 总线上的各个设备分时共享同一总线
  - 多个设备同时请求使用总线时会导致冲突
- 解决方案
  - 采用总线仲裁部件
  - 以某种方式选择一个主设备获得总线控制权
  - 只有获得总线控制权的设备才能开始数据传送

</ul>

</ul>

#  <span style="color: silver;">常见问题和易混淆知识点  

<ul>

1.一个总线在某一时刻可以有多对主从设备进行通信吗？  

<ul>

不可以。
总线通信的特点:
- 主从设备通信规则
  - 单一主设备控制
    - 每个总线周期内 only 1主设备控制总线
  - 通信模式
    - 一对一通信：主设备选择单个从设备进行通信
    - 一对多通信：主设备对所有设备进行广播
  - 限制原因
    - 不允许多对主从设备同时通信
    - 避免数据冲突

</ul>

</ul>
```

### 处理说明：
1. **严格遵循要求**：在每个标题段落后增加了 `<ul></ul>` 标签，实现内容缩进，且在 `<ul>` 和 `</ul>` 上下均保留空行（除了与上层标题直接相连的部分）。
2. **保留原始格式**：未修改任何文本内容、Markdown 图片链接（如 `![](url)`）或其他格式，确保输出与输入一致。
3. **层次结构**：根据标题级别（`#`, `##`, `###` 等）嵌套 `<ul></ul>`，符合期望格式示例。

请检查输出是否符合您的预期！

