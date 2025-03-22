

# 第2章物理层  

<ul>

## 【考纲内容】  

<ul>

（一）通信基础  

信道、信号、带宽、码元、波特、速率、信源与信宿等基本概念：奈奎斯特定理与香农定理：编码与调制：电路交换、报文交换与分组交换：数据报与虚电路  

（二）传输介质双绞线、同轴电缆、光纤与无线传输介质：物理层接口的特性  

（三）物理层设备  

中继器：集线器  

</ul>

## 【复习提示】  

<ul>

- 物理层考虑的是怎样才能在连接各台计算机的传输介质上传输数据比特流，而不是具体的传输介质。
- 本章概念较多，易出选择题，复习时应抓住重点。
  - 如奈奎斯特定理和香农定理的应用
  - 编码与调制技术
  - 数据交换方式
  - 电路交换、报文交换与分组交换技术等

</ul>
</ul>

#  <span style="color: Gold;">通信</span>基础  

<ul>

## 基本**概念**  

<ul>

### <span style="color: blue;">数据</span>、 <span style="color: Gold;">信号</span> <span style="color: deepskyblue;">码元</span>

<ul>

#### 通信<span style="color: orange;">目的</span> & 基本**概念**

<ul>

- 通信的目的是传输信息
  - 文字
  - 图像 
  - 视频等
- 基本概念定义
  - 数据：指传送信息的实体
  - 信号：数据的电气或电磁表现，是数据在传输过程中的存在形式

</ul>

#### 数据与信号的 <span style="color: GreenYellow;">分类

<ul>

- 模拟形式
  - 模拟数据：取值是连续的
  - 模拟信号：取值是连续的
- 数字形式  
  - 数字数据：取值是离散的
  - 数字信号：取值是离散的

</ul>

#### 码元概念与特征

<ul>

- 定义与表示
  - 码元是数字通信中数字信号的计量单位
  - 常用固定时长的信号波形(数字脉冲)表示一位k进制数字
  - 代表不同离散数值的基本波形称为码元
- 码元特性
  - 码元宽度：信号的固定时长
  - 信息容量：1码元可携带若干比特的信息量
- 实例说明
  - 二进制编码时有两种不同码元
    - 一种代表0状态
    - 另一种代表1状态

</ul>

</ul>

### 信<span style="color: Gold;">源</span>、信<span style="color: deepskyblue;">道</span> 信<span style="color: SlateBlue;">宿</span>

<ul>

#### 通信系统组成

<ul>

#### 通信系统模型

<ul>

- 基本特点：
  - 图2.1展示了**单向**通信系统模型
  - 实际通信系统多为**双向**通信

##### 系统组成部分

<ul>

- 主要分为三部分：
  - 信<span style="color: Gold;">源</span>：
    - 产生和发送数据的 <span style="color: Gold;">源头</span>
    - 通常是计算机或其他数字终端装置
  - 信<span style="color: deepskyblue;">道</span>：
    - 信号的传输<span style="color: purple;">介质
    - 双向通信线路包含发送和接收两个信道
  - 信<span style="color: SlateBlue;">宿</span>：
    - 接收数据的<span style="color: LightSkyBlue;">终点</span>
    - 通常是计算机或其他数字终端装置

</ul>

##### 信号传输过程

<ul>

- 发送端：
  - 信源发出信息
  - 通过变换器转换成适合传输的信号
- 接收端：
  - 信号经反变换器转换成原始信息
  - 发送给信宿
- 噪声影响：
  - 噪声源是信道上及系统各处噪声的集中表示

</ul>

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d49cc4d7da6d319d17512b142cd5e47536c50eba359e66e26492dd13c96427b0.jpg)  
图2.1通信系统模型  

#### 信道分类

<ul>

- 按传输信号形式分类：
  - 传送模拟信号的模拟信道
  - 传送数字信号的数字信道
- 按传输介质分类：
  - 无线信道
  - 有线信道

</ul>

#### 信号类型

<ul>

- 基带信号：
  - 将数字信号1和0直接用两利不同的电压表示
  - 然后送到数字信道上传输（称为基带传输）
- 宽带信号：
  - 首先将基带信号进行调制，形成频分复用模拟信号
  - 然后送到模拟信道上传输（称为宽带传输）

</ul>

#### 数据传输方式

<ul>

- 串行传输：
  - 逐比特地按序依次传输
  - 适用于长距离通信，如计算机网络
- 并行传输：
  - 若干比特通过多个通信信道同时传输
  - 适用于近距离通信，常用于计算机内部，如CPU与主存之间

</ul>

#### 通信交互方式

<ul>

- 单向通信：
  - 只有一个方向的通信而没有反方向的交互
  - 如无线电广播、电视广播等
- 半双工通信：
  - 通信双方都可发送或接收信息
  - 但任何一方都不能同时发送和接收信息
- 全双工通信：
  - 通信双方可同时发送和接收信息
- 信道需求：
  - 单向通信只需一个信道
  - 半双工通信或全双工通信都需要两个信道，每个方向一个信道

</ul>

</ul>

### 速<span style="color: SlateBlue;">率</span>、  <span style="color: GreenYellow;">波特</span> <span style="color: green;">带<span style="color: deepskyblue;">宽</span>

<ul>

#### 速<span style="color: SlateBlue;">率</span>

<ul>

- 速率是指数据传输速率
- 表示单位时间内传输的数据量
- 常有两种描述形式

>pro：调制速率的概念（2014）  

##### <span style="color: deepskyblue;">码元</span><span style="color: green;">传输</span>速<span style="color: SlateBlue;">率</span> -  <span style="color: GreenYellow;">波特</span><span style="color: SlateBlue;">率</span>

<ul>

率
- 单位时间内 数字通信系统所传输的<span style="color: deepskyblue;">码元</span><span style="color: green;">数</span>（也称调制速率或符号速率）
  - 单位: 波特（Baud)
  - 1 <span style="color: GreenYellow;">波特</span>:  数字通信系统每秒传输1个码元
- <span style="color: deepskyblue;">码元</span> ← 一个unit
  - 既可以是多进制的，又可以是二进制的，码元速率与进制数无关

###### <span style="color: LightSkyBlue;">信息</span><span style="color: green;">传输</span>速<span style="color: SlateBlue;">率</span>- <span style="color: LightSkyBlue;">bit</span><span style="color: SlateBlue;">率</span>

<ul>

- 单位时间内 数字通信系统传输的**二进制**<span style="color: deepskyblue;">码元</span><span style="color: green;">数</span>（bit数）
  - 单位: 比特/秒（b/s）

</ul>

> attention:  

- 若一个码元携带n比特的信息量，则波特率M Baud =  M*n b/s

</ul>

</ul>

#### <span style="color: green;">带<span style="color: deepskyblue;">宽</span>

<ul>

- 在模拟信号系统中：
  - 带宽（又称频率带宽）表示: 某个信道所能传输信号的<span style="color: orange;">频率</span><span style="color: blue;">范围</span>
    - 最高f - 最低f
    - 单位: 赫兹（Hz）
- 在计算机网络中：
  - 带宽用来表示网络的通信线路所能<span style="color: green;">传输</span><span style="color: blue;">数据</span>的能力 ← 最<span style="color: deepskyblue;">高<span style="color: blue;">数据</span><span style="color: SlateBlue;">率</span>
  - 单位: b/s

</ul>

</ul>

</ul>

## 信<span style="color: deepskyblue;">道</span>的<span style="color: green;">极限</span> <span style="color: Gold;">容量</span>  

<ul>

### 信<span style="color: deepskyblue;">道<span style="color: green;">失</span><span style="color: LightSkyBlue;">真

<ul>

- 信道传输特性
  - 任何实际的信道都不是理想的，信号在信道上传输时会不可避免地产生失真
  - 失真的影响
    - 可接受的失真：只要接收端能够从失真的信号波形中识别出原来的信号，这种失真对通信质量就没有影响
    - 严重失真：若信号失真很严重，则接收端就无法识别出每个码元
  - 影响失真程度的因素
    - 码元的传输速率越高
    - 信号的传输距离越远  
    - 噪声干扰越大
    - 传输介质的质量越差
    - 上述因素越显著，接收端波形的失真就越严重

</ul>

### 奈奎斯特定理（奈氏准则）  

<ul>

>pro： 无噪声信道的最大数据传输速率（2009、2022、2023）  

#### 信道带宽限制

<ul>

- 具体的信道所能通过的频率范围总是有限的
- 信号传输特性
  - 高频分量限制
    - 信号中的许多高频分量往往不能通过信道
    - 会在传输中衰减
    - 导致接收端收到的信号波形失去码元之间的清晰界限
    - 这种现象称为码间串扰

</ul>

#### 奈奎斯特定理规定

<ul>

- 理想低通信道条件
  - 没有噪声
  - 带宽有限
- 极限传输速率
  - 码元传输速率
    - 为避免码间串扰，极限码元传输速率为 $2W$ 波特
    - $W$ 是信道的频率带宽（单位为 $\mathrm{Hz}$）
  - 数据传输速率
    - $V$ 表示码元的离散电平数目
      - 码元的离散电平数目指有多少种不同的码元
      - 若有16种不同的码元，则需要4个二进制位
      - 数据传输速率是码元传输速率的4倍
    - 理想低通信道下的极限数据传输速率 $=2W\log_{2}V$ （单位为b/s）

</ul>

#### 奈氏准则结论

<ul>

- 码元传输速率限制
  - 在任何信道中，码元传输速率有上限
  - 超过上限的影响
    - 出现严重的码间串扰问题
    - 接收端无法完全正确识别码元
- 频带宽度影响
  - 信道的频带越宽
  - 通过的信号高频分量越多
  - 可用更高的速率有效传输码元
- 信息传输特性
  - 奈氏准则仅限制码元传输速率
  - 未限制信息传输速率
  - 未对一个码元可对应的二进制位数给出限制
- 提高数据传输速率方法
  - 由于码元传输速率受奈氏准则制约
  - 需要使每个码元携带更多比特信息量
  - 采用多元制的调制方法

</ul>

</ul>

### 香农定理  

<ul>

>pro：有噪声信道的实际数据传输速率（2016）  

#### 香农定理基本概念

<ul>

- 信道特性
  - 实际的信道会有噪声，噪声是随机产生的
- 定理意义
  - 给出了带宽受限且有高斯噪声干扰的信道的极限数据传输速率
  - 当用该速率传输数据时，不会产生误差

</ul>

#### 香农定理公式

<ul>

- 基本公式
  - 信道的极限数据传输速率 $=W\mathrm{log}_{2}(1+S/N)$ （单位为b/s）
- 参数说明
  - $W$：信道的频率带宽（单位为 $\mathrm{Hz}$ )
  - $S$：信道内所传输信号的平均功率
  - $N$：信道内的高斯噪声功率
- 信噪比计算
  - 定义：信号的平均功率与噪声的平均功率之比
  - 计算公式：信噪比 $=10\mathrm{log}_{10}(S/N)$ （单位为dB）
  - 示例
    - 当 $S/N\!=\!10$ 时，信噪比为10dB
    - 当 $S/N\!=\!1000$ 时，信噪比为30dB

</ul>

>pro：信道数据传输速率的影响因素分析（2014）  

#### 香农定理结论

<ul>

- 影响因素
  - 信道的带宽或信道中的信噪比越大，信息的极限传输速率越高
  - 对一定的传输带宽和一定的信噪比，信息传输速率的上限是确定的
- 实际应用
  - 只要信息传输速率低于信道的极限传输速率，就能找到某种方法实现无差错的传输
  - 香农定理得出的是极限信息传输速率，实际信道能达到的传输速率要比它低不少

</ul>

>pro：奈氏准则和香农定理的对比分析（2017）  

#### 奈氏准则与香农定理的比较

<ul>

- 考虑因素差异
  - 奈氏准则：只考虑了带宽与极限码元传输速率之间的关系
  - 香农定理：不仅考虑了带宽，也考虑了信噪比
- 理论意义
  - 从另一个侧面表明，一个码元对应的二进制位数是有限的

</ul>

</ul>

</ul>

## <span style="color: deepskyblue;">编码</span> <span style="color: green;">调<span style="color: Gold;">制  

<ul>

### 概述

<ul>

- 信号是数据的具体表示形式
- 数据转换规则：
  - 数据无论是数字的还是模拟的，为了传输的目的，都要转换成信号
  - 将数据转换为模拟信号的过程称为调制
  - 将数据转换为数字信号的过程称为编码

</ul>

### 数据<span style="color: green;">转换</span>

<ul>

- 数字数据转换：
  - 可通过数字发送器转换为数字信号传输
  - 可通过调制器转换成模拟信号传输
- 模拟数据转换：
  - 可通过PCM编码器转换成数字信号传输
  - 可通过放大器调制器转换成模拟信号传输

</ul>

### <span style="color: LightSkyBlue;">数字</span><span style="color: blue;">数据</span>coded as<span style="color: LightSkyBlue;">数字</span> <span style="color: Gold;">信号</span>

<ul>

#### 基本原理

<ul>

- 应用场景：
  - 用于基带传输中
  - 在基本不改变数字数据信号频率的情况下，直接传输数字信号
- 编码规则：
  - 具体用什么样的数字信号表示0及用什么样的数字信号表示1
  - 编码的规则有多种，只要能有效区分0和1即可
- 常用编码类型：
  - 如图2.2所示包含多种编码方式

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6328c430a19cd2ee823cbd2821a49bdecf3d765b187fe98e01a4fe7bd2d22cac.jpg)  
图2.2常用的数字数据编码

#### <span style="color: gray;">ways</span>

<ul>

#####  <span style="color: GreenYellow;">归</span><span style="color: LightSkyBlue;">零</span>（RZ）编码

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.5c10lpa8mx.webp)
- 基本特点
  - <span style="color: RoyalBlue;">高</span><span style="color: LightSkyBlue;">电平</span>: 1
  -  <span style="color: GreenYellow;">低</span>~: 0（或者相反）
  - 每个码元的 <span style="color: Gold;">中间</span>均跳变到 **0**<span style="color: LightSkyBlue;">电平</span>（归零）
- 优缺点
  - 优点：接收方根据该跳变调整本方的时钟基准，提供自同步机制
  - 缺点：归零占用带宽，影响传输效率

</ul>

>pro： 非归零编码和反向非归零编码的波形记忆（2015）  

##### <span style="color: SlateBlue;">非</span><span style="color: GreenYellow;">归</span><span style="color: LightSkyBlue;">零</span>（NRZ）~

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.83a2trxf4l.webp)
- 特点对比
  - 与RZ编码区别：
    - 不用归零
    - 一个<span style="color: Goldenrod;">时钟</span>**全部**用来传输数据
  - 编码效率最高
- 局限性
  - 收发双方存在 <span style="color: Gold;">同步</span>问题
  - 需要双方都带有时钟线

</ul>

##### <span style="color: green;">反向</span><span style="color: SlateBlue;">非</span><span style="color: GreenYellow;">归</span><span style="color: LightSkyBlue;">零</span>（NRZI）~

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.231wp1lefm.webp)
- 编码原理
  - 电平保持 <span style="color: Gold;">不变</span> 1
  - 电平的<span style="color: green;">跳变</span> 0
- 优势
  - 集成了RZ和NRZ的优点
  - 能传输时钟信号
  - 尽量不损失系统带宽
- 应用
  - USB2.0采用此编码方式

</ul>

>pro：曼彻斯特编码的波形记忆（2013、2015）  

##### <span style="color: Goldenrod;">曼彻斯特</span>~ *(MC)

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.8hgikn1xhd.webp)
- 基本特征
  - 每个码元的**中间**都发生电平<span style="color: green;">跳变</span>
  - 电平跳变 <span style="color: Gold;">双重</span> 作用
    - 作为 <span style="color: Goldenrod;">时钟</span> <span style="color: Gold;">信号</span>（用于同步）
    - 作为数据信号
  - 规则：
    - ⬇️ 跳变 <span style="color: deepskyblue;">1</span>
    -  ↑  跳变  <span style="color: GreenYellow;">0</span>（或相反）

</ul>

>pro：差分曼彻斯特编码的波形记忆（2021）  

##### <span style="color: SlateBlue;">差分</span><span style="color: Goldenrod;">曼彻斯特</span>~ *(<span style="color: SlateBlue;">D</span>MC)

<ul>

- ![image](https://bluejedis.github.io/picx-images-hosting/basic/image.7sn90mc1h7.webp)
- 基本特征
  - ~
- 与曼彻斯特编码的区别
  - 电平跳变 only : 
    - <span style="color: Goldenrod;">时钟</span> <span style="color: Gold;">信号</span>
  - 数据表示依据码元开始处跳变情况
    - <span style="color: purple;">无</span><span style="color: green;">跳变</span> 1
    - <span style="color: green;">跳变</span> 0
- 优点
  - 拥有更强的抗干扰能力

</ul>

##### <span style="color: Goldenrod;">曼彻斯特</span>~ *(MC) 与 <span style="color: SlateBlue;">差分</span><span style="color: Goldenrod;">曼彻斯特</span>~ *(<span style="color: SlateBlue;">D</span>MC)的共同点

<ul>

- 技术特征
  - 每个码元的中间都发生电平跳变
  - 将一个码元一分为二
  - 编码速率是码元速率的2倍
  - 占用频带宽度是原始基带宽度的2倍
- 应用场景
  -  <span style="color: Gold;">标准</span><span style="color: purple;">以太</span>网 : 曼彻斯特编码
  - 宽带<span style="color: LightSkyBlue;">高速</span>网:  <span style="color: SlateBlue;">差分</span><span style="color: Goldenrod;">曼彻斯特</span>~ *(<span style="color: SlateBlue;">D</span>MC)

</ul>

</ul>

</ul>

###  <span style="color: GreenYellow;">模拟</span><span style="color: blue;">数据</span>coded as<span style="color: LightSkyBlue;">数字</span> <span style="color: Gold;">信号</span>  

<ul>

- 主要包括三个步骤，即<span style="color: green;">采样</span>、 <span style="color: Gold;">量化</span>和<span style="color: deepskyblue;">编码</span>，常用于对音频信号进行编码的PCM编码

#### 采样定理

<ul>

- 在将模拟信号转换成数字信号时，假设原始信号中的最大频率为f
- 采样率f采必须大于或等于最大频率 $f$ 的2倍，才能保证采样后的数字信号完整保留原模拟信号的信息（只需记住结论）
- 采样定理又称奈奎斯特定理

</ul>

#### 具体步骤

<ul>

##### <span style="color: green;">采样</span>

<ul>

- 对模拟信号进行周期性扫描
- 时间上<span style="color: green;">连续</span>的信号 → 时间上<span style="color: LightSkyBlue;">离散</span>的信号

</ul>

##### <span style="color: Gold;">量化</span>

<ul>

- 将采样得到的电平幅值按照一定的分级标度 → 对应的<span style="color: LightSkyBlue;">数值</span>并 <span style="color: green;">取整</span>
- 这样就将连续的电平幅值转换为了离散的数字量

</ul>

> 采样和量化的实质: 分割和转换

##### <span style="color: deepskyblue;">编码</span>

<ul>

- 将量化得到的离散整数转换为与之对应的二进制编码

</ul>

</ul>

</ul>

### 数字数据<span style="color: SlateBlue;">调制</span>为模拟信号  

<ul>

#### 概述

<ul>

- 数字数据调制技术
  - 发送端
    - 将数字信号转换为模拟信号
  - 接收端  
    - 将模拟信号还原为数字信号
  - 对应过程
    - 调制解调器的调制和解调过程

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fdf0f699eda49c38bad96dea6527302a5202b07e045d5b6c0970c2d0b46c0000.jpg)  
图2.3数字调制的三种方式  

#### 具体调制方式

<ul>

##### 调幅(AM)/幅移键控(ASK)

<ul>

>pro：采用调幅技术时码元的比特位数（2022）  

- 原理：通过改变载波的振幅来表示数字信号1和0
  - 例如：用有载波和无载波输出分别表示1和0
- 特点：
  - 容易实现
  - 抗干扰能力差

</ul>

##### 调频(FM)/频移键控(FSK)

<ul>

- 原理：通过改变载波的频率来表示数字信号1和0
  - 例如：用频率 $f_{1}$ 和频率f分别表示1和0
- 特点：
  - 容易实现
  - 抗干扰能力强
  - 目前应用较广泛

</ul>

##### 调相(PM)/相移键控(PSK)

<ul>

>pro：采用调相技术时比特率和波特率的转化（2011）  

- 原理：通过改变载波的相位来表示数字信号1和0
  - 分类：
    - 绝对调相
    - 相对调相
  - 例如：用相位0和 $\pi$ 分别表示1和0（绝对调相方式）

</ul>

##### 正交幅度调制(QAM)

<ul>

>pro：采用QAM技术时码元的比特位数（2009、2023）  

- 原理：在频率相同的前提下，将AM与PM结合起来，形成叠加信号
- 数据传输速率计算：
  - 设波特率为 $B$
  - 采用 $m$ 个相位
  - 每个相位有 $n$ 种振幅
  - 则该QAM的数据传输速率 $R$ 为：
    - $R\!=\!B\mathrm{log}_{2}(m n)$ （单位为 ${\tt b}/{\tt s}$

</ul>

</ul>

</ul>

### 模拟数据<span style="color: SlateBlue;">调制</span>为模拟信号  

<ul>

- 为了实现传输的有效性，可能需要较高的频率。
  - 这种调制方式还可使用频分复用（FDM）技术，充分利用带宽资源。
- 电话机和本地局交换机采用模拟信号传输模拟数据的编码方式。

</ul>

</ul>

# <b><span style="color: green;">传输<span style="color: purple;">介质 </b> 

<ul>

## 双<span style="color: Green;">绞</span>线、同<span style="color: RoyalBlue;">轴</span><span style="color: LightSkyBlue;">电缆</span>、光<span style="color: Gold;">纤</span> & <span style="color: SlateBlue;">无</span><span style="color: Gold;">线</span>传输<span style="color: purple;">介质</span>  

<ul>

### 概述

<ul>

- 传输介质也称传输媒体
  - 是数据传输系统中发送器和接收器之间的**物理**<span style="color: deepskyblue;">通路</span>
- 传输介质<span style="color: green;">分类</span>：
  - <span style="color: green;">导向</span>传输介质
    - 指铜线或光纤等
    - 电磁波被导向为沿着固体介质传播
  - 非导向传输介质
    - 指自由空间（空气、真空或海水)
    - 电磁波在非导向传输介质中的传输称为无线传输

</ul>

### 双<span style="color: Green;">绞</span>线

<ul>

#### 基本概念

<ul>

- 双绞线是最常用的传输介质
- 在局域网和传统电话网中普遍使用

</ul>

#### 结构组成

<ul>

- 基本结构：
  - 由两根采用一定规则并排绞合、相互绝缘的铜导线组成
  - 绞合可减少对相邻导线的电磁干扰
- 屏蔽类型：
  - 屏蔽双绞线（STP）
    - 在双绞线外面加上一层金属丝编织成的屏蔽层
  - 非屏蔽双绞线（UTP）
    - 无屏蔽层的双绞线

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3a619194921245e780d0ffe50a3003bdc096f8ead04f90c663789508bfd94971.jpg)  
图2.4双绞线的结构  

#### 特点

<ul>

- 价格特点：
  - 价格便宜
- 传输特点：
  - 模拟传输和数字传输都可使用
  - 通信距离一般为几干米到数十干米
- 带宽特点：
  - 带宽取决于铜线的粗细和传输的距离
  - 信号处理：
    - 模拟传输：距离太远时要用放大器放大衰减的信号
    - 数字传输：要用中继器来对失真的信号进行整形

</ul>

</ul>

### 同<span style="color: RoyalBlue;">轴</span><span style="color: LightSkyBlue;">电缆</span>  

<ul>

#### 结构组成

<ul>

- 同轴电缆由四层构成：
  - 内导体
  - 绝缘层
  - 网状编织屏蔽层
  - 塑料外层

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f83aba72a656e91cbd56efb07284b51198d458300a656b4cbf4727da4a90f39f.jpg)  
图2.5同轴电缆的结构  

#### 分类与应用

<ul>

- 按阻抗分类：
  - 50Q同轴电缆
    - 用途：传送基带数字信号
    - 应用：早期局域网
  - 75Q同轴电缆
    - 用途：传送宽带信号
    - 应用：有线电视系统

</ul>

#### 特点与发展

<ul>

- 性能特点：
  - 具有良好的抗干扰特性
  - 适合传输较高速率的数据
  - 抗干扰性能归功于外导体屏蔽层
- 应用发展：
  - 随着技术发展和集线器出现
  - 局域网领域已基本被双绞线取代

</ul>

</ul>

### 光<span style="color: Gold;">纤</span>  

<ul>

#### 基本概念

<ul>

- 光纤通信:
  - 利用光导纤维（简称光纤）传递光脉冲来进行通信
- 信号表示方式
    - 有光脉冲表示1
    - 无光脉冲表示0
- 带宽特性
    - 可见光的频率约为 $10^{8}\mathrm{MHz}$
    - 因此光纤通信系统的带宽极大

</ul>

#### 结构与原理

<ul>

##### 基本构成

<ul>

- 主要组成部分
  - 纤芯
    - 直径仅为 $8\!\sim\!100\mu\mathrm{m}$
  - 包层
    - 较纤芯有较低的折射率
- 传输原理
  - 光波通过纤芯进行传导

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c31445185d6237de4247e897a7799344b5db3b959ae64e145a7362d9f491e11d.jpg)  
图2.6光波在纤芯中的传播  

</ul>

#### <span style="color: green;">类型</span>

<ul>

##### <span style="color: LightSkyBlue;">多</span>模~

<ul>

- 工作原理
  - 利用光的<span style="color: LightSkyBlue;">全</span><span style="color: Gold;">反射</span>特性
  - 可让从不同角度入射的**多**<span style="color: GreenYellow;">条</span>光线在一根光纤中传输
- 特性
  - 光源：发光二极管
  - 传输特点：光脉冲在传输时逐渐展宽，造成失真
  - 应用范围：只适合近距离传输

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/080cf89791186e918919cd964321ccd192440fb467f8c03c0ee6e92df8ed3a93.jpg)  
图2.7多模光纤  

#####  <span style="color: GreenYellow;">单</span>模~

<ul>

- 工作原理
  - 当光纤的<span style="color: LightSkyBlue;">直径</span><span style="color: green;">减小</span>到只有**一个**<span style="color: Gold;">光</span>的波长时，光纤就像一根波导那样
- 特性
  - 结构特点：
    - 纤芯很**细**，直径只有几微米
  - 成本：高
  - 光源：定向性很好的半导体激光器
  - 传输特点
    - 衰减较小
    - 可传输数干米甚至数十干米而不必采用中继器
  - 应用范围：适合<span style="color: LightSkyBlue;">远距离</span>传输

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/03c389f0abce206bef77a5089dfa39ac538e0ae63477808ab3557b5a1a9110bb.jpg)  
图2.8单模光纤  

</ul>

#### 优点

<ul>

- 传输性能
  - 传输损耗小
  - 中继距离长
  - 对远距离传输特别经济
- 抗干扰性能
  - 抗雷电和电磁干扰性能好
  - 在有大电流脉冲干扰的环境下尤为重要
- 安全性能
  - 无串音干扰
  - 保密性好
  - 不易被窃听或截取数据
- 物理特性
  - 体积小
  - 重量轻
  - 在现有电缆管道已拥塞不堪的情况下这特别有利

</ul>

</ul>

### <span style="color: SlateBlue;">无</span><span style="color: Gold;">线</span>传输<span style="color: purple;">介质</span>   

<ul>

- 无线通信已广泛用于蜂窝移动电话领域
- 随着便携式计算机的出现，以及军事、野外等特殊场合对移动联网的需要，促进了移动通信的发展
- 现在无线局域网的应用已非常普遍

#### <span style="color: SlateBlue;">无</span><span style="color: Gold;">线</span><span style="color: LightSkyBlue;">电波</span>  

<ul>

- 特点：
  - 具有较强的穿透能力
  - 可以传输很长的距离
  - 信号向所有方向散播
  - 有效距离范围内的接收设备无须对准某个方向就可通信
- 应用：
  - 无线手机通信
  - 计算机网络中的无线局域网（WLAN）等

</ul>

####  <span style="color: Gold;">微</span><span style="color: LightSkyBlue;">波</span>、<span style="color: DarkRed;">红</span>外线 & <span style="color: Lime;">激光  

<ul>

##### 共同特点

<ul>

- 在发送方和接收方之间有一条视线<span style="color: LightSkyBlue;">通路</span>
- 有很强的方向性，沿直线传播

</ul>

###### <span style="color: green;">区别</span>

<ul>

- 信号转换方式
  - 红外通信：将传输信号转换为红外光信号
  - 激光通信：将传输信号转换为激光信号
- 传播方式
  - 均直接在空间中传播

</ul>

#####  <span style="color: Gold;">微</span><span style="color: LightSkyBlue;">波</span>通信特点

<ul>

- 频率较高，频段范围也很宽，载波频率通常为 $2\!\sim\!40\mathrm{GHz}$
- 通信信道的容量大
  - 一个带宽为2MHz的频段可容纳500条语音线路
  - 传输数字信号时数据率可达数兆比特/秒
- 信号沿直线传播，地面传播距离有限，需要中继站

</ul>

#####  <span style="color: Gold;">卫星</span>通信

<ul>

- 原理：
  - 利用地球同步卫星作为中继来转发微波信号
- 优点：
  - 通信容量大
  - 距离远
  - 覆盖广
- 缺点：
  - 保密性差
  - 端到端传播时延长

</ul>

</ul>

</ul>

</ul>

## 物理层<span style="color: green;">接口</span>的 <span style="color: Gold;">特性</span>  

<ul>

- 物理层考虑的是如何在连接各种计算机的传输介质上传输比特流，而不指具体的传输介质
- 物理层应尽可能屏蔽硬件设备和传输介质的差异，让数据链路层感觉不到这些差异

>pro：物理层接口的特性的内容（2018）  

### 主要特性

<ul>

- 机械特性
  - 指明接口所用接线器的形状和尺寸、引脚数目和排列、固定和锁定装置等
- 电气特性
  - 指明在接口电缆的各条线上的电压范围、传输速率和距离限制等
- 功能特性
  - 指明某条线上出现的某一电平的电压的意义，以及每条线的功能

</ul>

>pro：物理层接口的过程特性的内容（2012）  

- 过程特性（规程特性）
  - 指明对不同功能的各种可能事件的出现顺序

</ul>

</ul>

# <b><span style="color: deepskyblue;">设备</span></b>  

<ul>

##  <span style="color: Gold;">中</span><span style="color: RoyalBlue;">继</span>器 

<ul>

### <span style="color: orange;">功能</span> & <span style="color: LightSkyBlue;">原理</span>

<ul>

- <span style="color: orange;">功能</span>: 
  - 整形、放大并转发信号
    - 消除信号经过一长段电缆后产生的失真和衰减
    - 使信号的波形和强度达到所需的要求
    - <span style="color: green;">扩大</span>网络传输的<span style="color: LightSkyBlue;">距离</span>
- <span style="color: LightSkyBlue;">原理</span>
  - 信号再生（而非简单地放大衰减的信号）

</ul>

###  <span style="color: GreenYellow;">特性</span>

<ul>

- 有两个端口
  - 数据从一个端口输入，从另一个端口发出
  - 端口仅作用于信号的电气部分
  - 不管是否有错误数据或不适于网段的数据

</ul>

### 网络连接 <span style="color: Gold;">特征</span>

<ul>

- 基本特征
  - 是用来扩大网络规模的最简单的廉价互连设备
  - 中继器两端的网络部分是网段，而不是子网
  - 使用中继器连接的几个网段仍是一个局域网
  - 中继器若出现敌障，则对相邻两个网络段的工作都产生影响
  - 不能连接两个具有不同速率的局域网

</ul>

> attention:  

####  <span style="color: Gold;">协议</span><span style="color: green;">limit</span>

<ul>

- 协议连接能力与存储转发功能的关系
  - 存储转发功能决定协议连接能力
    - 有存储转发功能：可连接不同协议
    - 无存储转发功能：不能连接不同协议
- 中继器的具体限制
  - 无存储转发功能
  - 不能连接速率不同的网段
  - 两端网段必须使用相同协议

</ul>

### <span style="color: green;">limit</span>

<ul>

- 理论
  - 从理论上讲，中继器的使用数目是无限的
- 实际限制
  - 基本限制
    - 网络标准对信号的延迟范围做了具体规定
    - 中继器只能在该范围内进行有效的工作
  - "5-4-3规则"示例
    - 适用范围：采用粗同轴电缆的10BASE5以太网规范中
    - 具体规则
      - 互相串联的中继器个数不能超过4个
      - 5段通信介质中只有3段可以挂接计算机
      - 其余2段只能用作扩展通信范围的链路段

</ul>

> attention:  

#### <span style="color: green;">放大</span>器 & <span style="color: Gold;">中</span><span style="color: RoyalBlue;">继</span>器' <span style="color: green;">区别</span>

<ul>

- 放大作用' <span style="color: green;">区别</span>
  - 放大器
    - 放大模拟信号
    - 原理：放大衰减的信号
  - 中继器
    - 放大数字信号
    - 原理：整形再生衰减的信号

</ul>

</ul>

## <span style="color: green;">集</span><span style="color: Gold;">线</span>器  

<ul>

### <span style="color: LightSkyBlue;">原理</span>

<ul>

- 实质上:  <span style="color: SlateBlue;">多</span><span style="color: deepskyblue;">端口</span>的<span style="color: Gold;">中</span><span style="color: RoyalBlue;">继</span>器
- 工作过程
  - 一个端口接收到数据信号后，对信号进行<span style="color: SlateBlue;">整形</span><span style="color: green;">放大</span>
  - 使之再生（恢复） → 发送时的状态
  - 转发到其他 所有处于工作状态的 <span style="color: deepskyblue;">端口</span>
- 冲突处理
  - 若同时有两个或多个端口输入，则输出时将发生冲突
  - 这些数据都将无效

</ul>

###  <span style="color: GreenYellow;">特点</span> or <span style="color: green;">limit</span>

<ul>

- only 信号 <span style="color: Gold;">放大</span>和  <span style="color: GreenYellow;">转发</span>
- 目的: <span style="color: green;">扩大</span> 网络的传输<span style="color: blue;">范围</span>
- 
  - **不**具备 信号的<span style="color: deepskyblue;">定向</span>传送能力
  - 信息传输的方向是<span style="color: LightSkyBlue;">固定</span>的
  - 标准的<span style="color: orange;">共享</span>式设备

</ul>

### 组网<span style="color: orange;">特性</span>

<ul>

#### 组网特点

<ul>

- 灵活性
  - 使用Hub组网灵活
  - 将所有结点的通信集中在以其为中心的结点上
- 网络结构
  - 由Hub组成的网络是共享式网络
  - 逻辑上仍是总线网
  - Hub的每个端口连接的是同一网络的不同网段
- 工作模式
  - 只能在半双工状态下工作
  - 网络的吞吐率受到限制

</ul>

>pro：中继器和集线器对冲突域/广播域的划分（2010、2020）  

> attention:  

#### 冲突域划分

<ul>

##### 集线器的冲突域特性

<ul>

- 集线器不能分割冲突域
  - 集线器的所有端口都属于同一个冲突域
  - 集线器在一个时钟周期内只能传输一组信息
    - 当一台集线器连接的机器数目较多且多台机器经常需要同时通信时，将导致信息冲突
    - 使得集线器的工作效率很差

</ul>

##### 带宽分配示例

<ul>

- 例如，一个带宽为10MIb/s的集线器上连接了8台计算机
  - 当这8台计算机同时工作时，每台计算机所真正拥有的带宽为 $10/8\mathrm{{M}\mathrm{{b}/\mathrm{{s}=1.25\mathrm{{M}\mathrm{{b}/\mathrm{{s}.}}}}}}$

</ul>

</ul>

</ul>

</ul>

</ul>

# 本章小结及疑难点  

<ul>

1.传输介质是物理层吗？传输介质和物理层的主要区别是什么？  

<ul>

传输介质并不是物理层。因为传输介质在物理层的下面，而物理层是体系结构的第一层，所以有时称传输介质为0层。在传输介质中传输的是信号，但传输介质并不知道所传输的信号代表什么。也就是说，传输介质不知道所传输的信号什么时候是1、什么时候是0。但是，物理层因为规定了电气特性，所以能够识别所传送的比特流。图2.9描述了上述概念。  

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2f1f5f2c0d7fe7203bffb23547955323749cf1e817aa2ce960cb455a03143dca.jpg)  
图2.9传输介质与物理层  

2.什么是基带传输、频带传输和宽带传输？三者的区别是什么？  

<ul>

在计算机内部或在相邻设备之间近距离传输时，可不经过调制就在信道上直接进行的传输方式称为基带传输。它通常用于局域网。数字基带传输就是在信道中直接传输数字信号，且传输介质的整个带宽都被基带信号占用，双向地传输信息。最简单的方法是用两个高低电平来表示二进制数字，常用的编码方法有不归零编码和曼彻斯特编码。例如，要传输1010，低电平代表0，高电平代表1，那么在基带传输下，1010需要向通信线路传输（高、低、高、低电平）。  

用数字信号对特定频率的载波进行调制（数字调制），将其变成适合传送的信号后再进行传输，这种传输方式就是频带传输。当采用远距离传输或无线传输时，数字信号必须用频带传输技术进行传输。利用频带传输，不仅解决了电话系统传输数字信号的问题，而且可以实现多路复用，进而提高传输信道的利用率。同样传输1010，经过调制，一个码元对应4个二进制位，假设码元A代表1010，那么在模拟信道上传输码元A就相当于传输1010。  

借助频带传输，可将链路分解成两个或多个信道，每个信道可携带不同的信号，这就是宽带传输。宽带传输中所有的信道能同时互不干扰地发送信号。例如，对信道进行频分复用，划分为2个互不相关的子信道，分别在两个子信道上同时进行频带传输，链路容量就会大大增加。  

</ul>

3.奈氏准则和香农定理的主要区别是什么？这两个定理对数据通信的意义是什么？  

<ul>

奈氏准则指出，码元传输的速率是受限的，不能任意提高，否则接收端就不能正确判定码元所携带的比特数据（因为码元之间存在相互干扰）。奈氏准则是在理想条件下推导出来的。在实际条件下，最高码元传输速率要比理想条件下得出的数值小很多。  

值得注意的是，奈氏准则并未限制信息传输速率。要提高信息传输速率，就必须使每个码元能够携带许多比特的信息。但是，码元所载的比特数确定后，信道的极限数据率也就确定了。  

香农定理给出了信息传输速率的极限，即对于一定的传输带宽（单位为Hz）和一定的信噪比，信息传输速率的上限是确定的，这个极限不能突破。要想提高信息传输速率，要么设法提高传输线路的带宽，要么设法提高信道的信噪比，此外没有其他任何办法。  

香农定理告诉我们，要得到无限大的信息传输速率，只有两个办法：要么使用无限大的传输带宽（这显然不可能），要么使信号的信噪比无限大，即采用没有噪声的信道或使用无限大的发送功率（这显然也不可能）。注意，奈氏准则和香农定理中“带宽”的单位都是 $\mathrm{Hz}$  

</ul>

4.信噪比为SIN，为什么还要取对数 $10\mathrm{log}_{10}(S/N)$？

<ul>

 1）数字形式表示，如噪声功率为1，信号功率为100，信噪比为 $100/1\,{=}\,100$ 
 
 2）同样还是上面这些数字，以分贝形式表示的信噪比为 $10\mathrm{log}_{10}(S/N)\,{=}\,10\mathrm{log}_{10}100\,{=}\,20\mathrm{dB}\,.$  

二者在数值上等价。区别在于，前者没有单位，后者必须加dB（分贝）。采用分贝表示的原因：很多时候，信号要比噪声强得多，如信号比噪声强10亿倍，若用数值表示，则1后面有9个0，很容易丢失0；若用分贝表示，则仅为90dB，因此要简单得多，且不容易出错。分贝对于表示特别大或特别小的数值极为方使，在通信领域中用途很广。

</ul>

</ul>
