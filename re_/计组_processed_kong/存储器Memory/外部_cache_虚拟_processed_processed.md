
<span style="color: silver;">

# <span style="color: gray;">外</span><span style="color: silver;">部M

<ul>

## <span style="color: LightSkyBlue;">磁盘</span> <span style="color: silver;">M

<ul>

磁盘存储器是以____为存储介质的存储器，其主要优点：
- 存储____大，位价格低
- 记录介质可____使用
- 记录信息可长期保存而不____，甚至可脱机存档
- 非____性读出，读出时不需要再生

缺点：
- 存取速度____
- ____结构复杂
- 对工作环境要求较高

> pro：磁盘存储器的相关概念（2019）

### <span style="color: Goldenrod;">组成

<ul>

#### <span style="color: silver;">组件
- 磁盘存储器由以下组成：
  - 磁盘 <span style="color: GreenYellow;">____</span>器
  - 磁盘 <span style="color: Gold;">____</span>器 
  - <span style="color: gray;">____

#### <span style="color: silver;">磁盘<span style="color: GreenYellow;">驱动</span>器
- ____磁盘转动并在盘面上通过____进行读/写操作的装置，如图3.14所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/949e3320f633db83d48f7dfbb5d87ac3e37d71935bede8ce35981b7926da2bb7.jpg)`  
图3.14磁盘 <span style="color: GreenYellow;">驱动</span> 器示意图

<div>
<details>
  <summary> </summary>
  <ul>
    <li>磁盘</li>
    <li>容量</li>
    <li>重复</li>
    <li>丢失</li>
    <li>破坏</li>
    <li>慢</li>
    <li>机械</li>
    <li>驱动</li>
    <li>控制</li>
    <li>盘片</li>
    <li>驱动</li>
    <li>磁头</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">磁盘<span style="color: Gold;">控制</span>器
- 磁盘驱动器与主机的 <span style="color: GreenYellow;">____</span>
- 主要功能：
  - ____并解释CPU发来的命令
  - 向磁盘驱动器发出各种____信号
  - 负责检测磁盘驱动器的____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>接口</li>
    <li>接收</li>
    <li>控制</li>
    <li>状态</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">存储</span> <span style="color: silver;">区域
- 组成结构：
  - 多个____面
  - 每个记录面划分为若干____磁道
  - 每条磁道划分为若干____
- 存取特点：
  - ____（也称块）是磁盘读/写的最小单位
  - 磁盘按____存取

<div>
<details>
  <summary> </summary>
  <ul>
    <li>记录</li>
    <li>圆形</li>
    <li>扇区</li>
    <li>扇区</li>
    <li>块</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">参数
- 磁<span style="color: gray;">____</span>数（Heads）：
  - 即____面数
  - 表示磁盘共有多少个____
  - 用于读取/写入盘片上记录面的____
  - 一个记录面对应一个____
- 柱<span style="color: gray;">____</span>数（Cylinders）：
  - 表示磁盘每面盘片上有多少条____
  - 不同记录面的相同编号（位置）的诸磁道构成一个____面
- <span style="color: LightSkyBlue;">____</span>区数（Sectors）：
  - 表示每条磁道上有多少个____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>头</li>
    <li>记录</li>
    <li>磁头</li>
    <li>信息</li>
    <li>磁头</li>
    <li>面</li>
    <li>磁道</li>
    <li>圆柱</li>
    <li>扇</li>
    <li>扇区</li>
  </ul>
</details>
</div>

#### <span style="color: LightSkyBlue;">物理</span> <span style="color: Gold;">特性
- 磁道<span style="color: gray;">____</span>：
  - 相邻磁道及相邻扇区间通过____分隔
  - 目的是避免____错误
- 位密度特点：
  - 从最____向里道增加
  - 磁盘存储能力受限于最____的最大记录密度

<div>
<details>
  <summary> </summary>
  <ul>
    <li>间隔</li>
    <li>间隙</li>
    <li>精度</li>
    <li>外道</li>
    <li>内道</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">磁盘 <span style="color: Gold;">高速</span>缓存
- 实现方式：
  - 在 <span style="color: Gold;">____</span>中开辟一部分区域
  - ____ 将要被送到磁盘上的<span style="color: LightSkyBlue;">____</span>
- 优点：
  - 写磁盘时按" <span style="color: GreenYellow;">____</span>"进行，避免频繁小块数据写盘
  - 中间结果数据在写回磁盘前可快速再次____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>内存</li>
    <li>缓冲</li>
    <li>数据</li>
    <li>簇</li>
    <li>使用</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">原理

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">编码</span>方法
- 按特定方案将____信息转换为____翻转状态序列
- 要求读/写控制电路____、可靠地实现转换

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二进制</li>
    <li>磁化</li>
    <li>容易</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">磁<span style="color: LimeGreen;">记录</span>方式
- 通常采用：
  - ____制（FM）
  - ____型调频制（MFM）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>调频</li>
    <li>改进</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">性能</span><span style="color: LimeGreen;">指标

<ul>

#### <span style="color: silver;">记录<span style="color: gray;">密度
- 定义：盘片单位面积上记录的____信息量
- 表示方式：
  - ____密度：沿磁盘半径方向单位长度上的磁道数
  - ____密度：磁道单位长度上能记录的二进制代码位数
  - ____密度：位密度和道密度的乘积

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二进制</li>
    <li>道</li>
    <li>位</li>
    <li>面</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">磁盘 <span style="color: LimeGreen;">容量
- 非格式化容量：
  - 定义：磁记录表面可利用的____单元总数
  - 计算：____面数 × ____数 × 每条磁道的磁化单元数
- 格式化容量：
  - 定义：按特定记录格式所能存储____的总量
  - 计算：____面数 × ____数 × 每道____数 × 每个扇区的容量
  - 特点：比非格式化容量____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>磁化</li>
    <li>记录</li>
    <li>柱面</li>
    <li>信息</li>
    <li>记录</li>
    <li>柱面</li>
    <li>扇区</li>
    <li>小</li>
  </ul>
</details>
</div>

> pro：磁盘存取时间的计算（2013、2015、2022）

#### <span style="color: silver;">存取<span style="color: gray;">时间
- 组成部分：
  - ____时间：磁头移动到目的磁道的时间
  - ____延迟时间：磁头定位到要读/写扇区的时间
  - ____时间：传输数据所花费的时间
- 时间计算：
  - 平均____时间：从最外道移动到最内道时间的一半
  - 平均____延迟时间：旋转半周的时间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>寻道</li>
    <li>旋转</li>
    <li>传输</li>
    <li>寻道</li>
    <li>旋转</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span>传输<span style="color: RoyalBlue;">速率
- 定义：单位时间内向主机传送数据的____数
- 计算公式：Dr = ____
  - r：磁盘____（转/秒）
  - N：每条磁道____（字节）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>字节</li>
    <li>rN</li>
    <li>转数</li>
    <li>容量</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">磁盘<span style="color: DarkRed;">地址

> pro：磁盘地址结构的计算（2022）

<ul>

#### <span style="color: silver;">地址 <span style="color: LimeGreen;">结构
- 主机向磁盘控制器发送____信息
- 基本地址结构如图所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/63c7621ebd786e99322bc2b3b8f2b7a6108c715c1896f3fefe6388625f9c5d47.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>寻址</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">eg
- 条件：
  - 16个____
  - 每个盘面256个____
  - 每个磁道16个____
- 结果：
  - 每个扇区地址需____位二进制代码
  - 格式如图所示

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a05c8eee3f46040951717583967f67c0aa6f299dd9fed653a49b666bc3e3b2b4.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>盘面</li>
    <li>磁道</li>
    <li>扇区</li>
    <li>16</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">工作 <span style="color: Gold;">过程

<ul>

- 主要操作类型：
  - ____
  - ____盘
  - ____盘
- 操作特点：
  - 每个操作对应一个____字
  - 工作步骤：
    1. ____控制字
    2. ____控制字

<div>
<details>
  <summary> </summary>
  <ul>
    <li>寻址</li>
    <li>读</li>
    <li>写</li>
    <li>控制</li>
    <li>取</li>
    <li>执行</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">limit
- <span style="color: gray;">____</span>式部件
- 读/写操作是 <span style="color: Gold;">____</span>行的：
  - 不能____读写
  - ~两组数据

<div>
<details>
  <summary> </summary>
  <ul>
    <li>机械</li>
    <li>串</li>
    <li>同时</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">磁盘<span style="color: RoyalBlue;">阵列</span> <span style="color: silver;">(  <span style="color: GreenYellow;">R</span><span style="color: RoyalBlue;">A</span><span style="color: gray;">I</span>D

<ul>

____冗余磁盘阵列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>独立</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">特点</span> <span style="color: silver;">:
- 组成特点：
  - 将多个独立的____磁盘组成一个独立的____盘
- 存储特点：
  - 数据分布：
    - 在多个物理盘上____存储
    - ____存储方式
  - 访问方式：
    - 支持____访问
- 性能优势：
  - 更好的____性能
  - 更高的____性
  - 更强的____性

<div>
<details>
  <summary> </summary>
  <ul>
    <li>物理</li>
    <li>逻辑</li>
    <li>分割</li>
    <li>交叉</li>
    <li>并行</li>
    <li>存储</li>
    <li>可靠</li>
    <li>安全</li>
  </ul>
</details>
</div>

> pro：提高RAID可靠性的措施（2013）

#### <span style="color: Gold;">分级
- RAID1～RAID5的共同特点：
  - 磁盘损坏时可随时____
  - 数据不会____
  - 提升系统____性

<div>
<details>
  <summary> </summary>
  <ul>
    <li>更换</li>
    <li>损坏</li>
    <li>可靠</li>
  </ul>
</details>
</div>

<ul>

##### <span style="color: GreenYellow;">类型
- RAID0：<span style="color: gray;">____</span>和无<span style="color: LightSkyBlue;">____</span>的磁盘阵列
- RAID1：<span style="color: GreenYellow;">____</span>磁盘阵列
- RAID2：采用____的海明码的磁盘阵列
- RAID3：____交叉奇偶校验的磁盘阵列
- RAID4：____交叉奇偶校验的磁盘阵列
- RAID5：无独立____的奇偶校验磁盘阵列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无冗余</li>
    <li>校验</li>
    <li>镜像</li>
    <li>纠错</li>
    <li>位</li>
    <li>块</li>
    <li>校验</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">RAID<span style="color: LightSkyBlue;">0
- 特点：
  - 使用____化技术
  - 连续数据块交替存放在不同____磁盘扇区
  - 多个磁盘____并行读/写
- 优点：
  - 扩大存储____
  - 提高磁盘存取____
- 缺点：
  - 无____能力

<div>
<details>
  <summary> </summary>
  <ul>
    <li>条带</li>
    <li>物理</li>
    <li>交叉</li>
    <li>容量</li>
    <li>速度</li>
    <li>容错</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">RAID<span style="color: GreenYellow;">1
- 工作方式：
  - 两个磁盘同时进行____
  - 互为____
- 优点：
  - 若一个磁盘故障，可从另一磁盘____数据
- 缺点：
  - 实际容量减少____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>读/写</li>
    <li>备份</li>
    <li>读取</li>
    <li>一半</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">优势
- 性能提升
  - 传输速率
    - 多磁盘同时使用提高____速率
  - 数据吞吐量
    - 通过并行存取提高数据____量
- 可靠性提升
  - 数据安全
    - 通过____功能提高安全可靠性
  - 容错能力
    - 通过数据____提供容错能力

<div>
<details>
  <summary> </summary>
  <ul>
    <li>传输</li>
    <li>吞吐</li>
    <li>镜像</li>
    <li>校验</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: Gold;">固态</span> <span style="color: silver;">硬盘

<ul>

### <span style="color: Gold;">特性

<ul>

#### <span style="color: silver;">组成
- 固态硬盘（SSD）是基于____技术的存储器
  - 与U盘无本质差别，但____更大，存取性能更好
- 组成部分
  - 一个或多个____芯片
  - ____翻译层
    - 替代传统磁盘控制器角色
    - 将CPU的____块读/写请求翻译成底层物理设备的控制信号

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f4c9b82aff9e75d81635a4e6f89fa583ec0838d5124b1cd07047a821d4691ebd.jpg)`  
图3.15固态硬盘（SSD）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>闪存</li>
    <li>容量</li>
    <li>闪存</li>
    <li>闪存</li>
    <li>逻辑</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"> <span style="color: LimeGreen;">结构</span> & 特点
- 闪存结构
  - 由____块组成，每块由____页组成
  - 页大小：____B~____KB
  - 每块包含____~____页
  - 块大小：____KB~____KB
- 读写特性
  - 以____为单位读/写
  - 写入限制：需先擦除整个____
  - 块擦除后的页可直接写入____次
  - 重复写会导致块____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>B</li>
    <li>P</li>
    <li>512</li>
    <li>4</li>
    <li>32</li>
    <li>128</li>
    <li>16</li>
    <li>512</li>
    <li>页</li>
    <li>块</li>
    <li>一</li>
    <li>磨损</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">特点
- 随机写入<span style="color: gray;">____</span>的原因
  - 块擦除速度慢，比____访问慢一个数量级
  - 修改已有数据需要整块____
- 相对传统磁盘的优势
  - 随机访问更____
  - 无____噪声和振动
  - ____低
  - 抗震性____
  - 安全性____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>慢</li>
    <li>页</li>
    <li>复制</li>
    <li>快</li>
    <li>机械</li>
    <li>能耗</li>
    <li>好</li>
    <li>高</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"><span style="color: gray;">磨损</span> <span style="color: Gold;">均衡</span>（Wear Leveling）

<ul>

#### <span style="color: gray;">寿命
- 缺点
  - 闪存擦写寿命____（几百到几千次）
  - 读写集中可能导致部分闪存过度____
  - 局部损坏可能影响整个____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有限</li>
    <li>损耗</li>
    <li>SSD</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">技术

<ul>

##### <span style="color: silver;"> <span style="color: LimeGreen;">动</span>态磨损均衡
- 写入数据时自动选择较<span style="color: gray;">____</span>的闪存块
- 让老的闪存块暂时____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>新</li>
    <li>休息</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"><span style="color: LightSkyBlue;">静</span>~
- 更高级的技术方案
  - 无数据写入时也进行____
  - 自动进行数据____
    - <u>老</u>闪存块用于存储<span style="color: LightSkyBlue;">____</span>态数据
    - <span style="color: gray;">____</span>闪存块负责<span style="color: gray;">____</span>读写操作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>监测</li>
    <li>分配</li>
    <li>静</li>
    <li>新</li>
    <li>日常</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">提升
- 实际使用寿命显著____
  - 以256GB SSD为例
    - 擦写寿命____次时需写入____TB才会损坏
    - 每天写入____GB数据需____多年才会磨损

<div>
<details>
  <summary> </summary>
  <ul>
    <li>提升</li>
    <li>500</li>
    <li>125</li>
    <li>10</li>
    <li>30</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: Gold;">缓冲</span> <span style="color: silver;">~  (<span style="color: SlateBlue;">cache

<ul>

- 主存系统效率提升的限制：
  - 程序转移概率不会很____
  - 数据分布____性较大
  - 单纯依靠并行主存系统提升效率____

- <span style="color: SlateBlue;">Cache</span>的优势：
  - 比主存速度更____
  - 在CPU和主存之间设置可显著提高____系统效率

- 特点：
  - 由 <span style="color: Gold;">____</span>RAM组成
  - 通常直接集成在____中

<div>
<details>
  <summary> </summary>
  <ul>
    <li>低</li>
    <li>离散</li>
    <li>有限</li>
    <li>快</li>
    <li>存储</li>
    <li>S</li>
    <li>CPU</li>
  </ul>
</details>
</div>

## <span style="color: silver;">程序访问的 <span style="color: Gold;">局部</span>性原理

<ul>

### <span style="color: silver;">概述
- 包括____局部性和____局部性

> pro：分析给定代码的时空局部性（2017、2023）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>时间</li>
    <li>空间</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">时间</span> <span style="color: silver;">局部性
- 最近的未来要用到的信息，很可能是现在正在使用的____
  - 原因：
    - 程序中存在____
    - 需要多次重复执行的____段
    - 对____的存储和访问操作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>信息</li>
    <li>盾环</li>
    <li>子程序</li>
    <li>数组</li>
  </ul>
</details>
</div>

#### <span style="color: gray;">空间</span> <span style="color: silver;">~
- 最近的末来要用到的信息
- might与现在正在使用的信息在存储空间上是<span style="color: gray;">____</span>的
  - 原因：
    - 指令通常是____存放、____执行的
    - 数据一般以____、数组等形式簇聚地存储

<div>
<details>
  <summary> </summary>
  <ul>
    <li>邻近</li>
    <li>顺序</li>
    <li>顺序</li>
    <li>向量</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">在cache中的 <span style="color: Gold;">应用
- 利用局部性原理:
  - 数据存放策略:
    - 将正在使用的部分数据存入____
    - Cache特点:
      - ____速
      - ____较小
  - 访问策略:
    - CPU主要访问____
  - 最终目标:
    - 提高程序____速度

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Cache</li>
    <li>高</li>
    <li>容量</li>
    <li>Cache</li>
    <li>执行</li>
  </ul>
</details>
</div>

### <span style="color: silver;">eg

<ul>

【例3.2】假设数组元素按____优先方式存储，对于下面的两个程序：

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b41550f0178bf3620106cb205eed357ec765a9ec70eeda1a5cf5cda98d67dbf0.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>行</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">q

<ul>

1）对于数组a的访问，哪个空间局部性更好？哪个时间局部性更好？
2）对于指令访问来说，for循环体的空间局部性和时间局部性如何？

</ul>

#### <span style="color: silver;">answer
- 基本条件：
  - M、N为____
  - 按____编址
  - 每个数组元素占____字节

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3beffe3fd561e33f22d27b23b7735f6b3805a9b89288a00b6514d0ad34b06ace.jpg)`  
图3.16指令和数据在主存的存放

> pro：数组按行或列访问命中率的分析（2010）；数组循环访问的命中率分析（2016、2020）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>2048</li>
    <li>字节</li>
    <li>4</li>
  </ul>
</details>
</div>

##### <span style="color: LightSkyBlue;">数组</span> <span style="color: silver;">:
- 程序A的空间局部性：
  - 访问顺序：a[0][0],a[0][1],,a[0][2047];a[1][0],a[1][1],,a[1][2047]
  - 访问顺序与存放顺序____，空间局部性____

- 程序B的空间局部性：
  - 访问顺序：a[0][0],a[1][0].,a[2047][0];a[0][1],a[1][1],,a[2047][1]
  - 每次访问跳过____个数组元素（____字节）
  - 若主存与Cache交换单位<____KB，每访问都需装入新块
  - ____空间局部性

- 时间局部性：
  - 两个程序都____
  - 原因：每个数组元素只访问____次

> pro：程序中指令Cache的命中率分析（2014）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一致</li>
    <li>好</li>
    <li>2048</li>
    <li>8192</li>
    <li>8</li>
    <li>无</li>
    <li>差</li>
    <li>一</li>
  </ul>
</details>
</div>

##### <span style="color: GreenYellow;">循环</span> <span style="color: silver;">体:
- 两个程序的循环体局部性相同：
  - 空间局部性____：指令按序____存放
  - 时间局部性____：内循环体被连续重复执行____次

<div>
<details>
  <summary> </summary>
  <ul>
    <li>好</li>
    <li>连续</li>
    <li>好</li>
    <li>2048×2048</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">sum
- 虽然功能相同，但执行时间____大
- 原因：内外循环顺序不同导致数组访问空间局部性____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>差异</li>
    <li>差异</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;">工作<span style="color: Gold;">原理

<ul>

### <span style="color: green;">结构
- Cache和主存划分特点：
  - 块划分：
    - 都划分为大小相等的____
    - Cache块也称Cache____
  - 块组成：
    - 每块由若干____组成
    - 块长也称____长
- Cache容量特点：
  - 容量对比：
    - 远小于主存____
    - 块数远少于主存____数
  - 存储内容：
    - 仅保存主存最____块的副本

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e95e7ed2b82fea1f024168bab35ac7aaf81ff99ed3bddc2a543be0029e74d2bd.jpg)`  
图3.17高速缓冲存储器的工作原理

> pro：Cache命中对CPU执行时间影响的分析（2013、2015）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>块</li>
    <li>行</li>
    <li>字节</li>
    <li>行</li>
    <li>容量</li>
    <li>块</li>
    <li>活跃</li>
  </ul>
</details>
</div>

### <span style="color: silver;">process

<ul>

#### <span style="color: Gold;">R
- Cache命中时：
  - 将访存地址转换为____地址
  - 直接读取Cache，不访问____
- Cache不命中时：
  - 访问____
  - 将整块数据调入____
  - 若Cache已满，使用 <span style="color: LimeGreen;">____</span>算法

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Cache</li>
    <li>主存</li>
    <li>主存</li>
    <li>Cache</li>
    <li>替换</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">W
- Cache命中时：
  - 数据一致性：
    - 可能出现数据____问题
  - 处理方式：
    - 需按____策略处理
  - 解决方案：
    - <span style="color: Gold;">____</span>写法
    - <span style="color: gray;">____</span>写法

> attention：

- 某些计算机的访存方式：
  - 同时访问Cache和主存
  - 如果Cache命中：
    - 则终止____操作

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不一致</li>
    <li>写</li>
    <li>全</li>
    <li>回</li>
    <li>访存</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">性能

> pro：Cache命中率的计算（2009）

<ul>

#### <span style="color: LimeGreen;">命中</span><span style="color: RoyalBlue;">率</span> <span style="color: silver;">计算
- 命中率计算公式：
  - H = ____
  - Nc：Cache____次数
  - Nm：访问____次数
- 平均访问时间：
  - Ta = ____
  - tc：Cache____时间
  - tm：主存____时间

> pro：Cache缺失率对主存带宽的影响（2012）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Nc/(Nc+Nm)</li>
    <li>命中</li>
    <li>主存</li>
    <li>H×tc + (1-H)×tm</li>
    <li>访问</li>
    <li>访问</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">eg
【例3.3】性能计算：
- 条件：
  - Cache速度是主存____倍
  - Cache命中率____%
- 计算过程：
  - Cache存取周期为____
  - 主存存取周期为____
  - 平均访问时间T = ____
  - 或T = ____
- 结论：性能提升约____倍

<div>
<details>
  <summary> </summary>
  <ul>
    <li>5</li>
    <li>95</li>
    <li>t</li>
    <li>5t</li>
    <li>0.95×t + 0.05×(t+5t)</li>
    <li>t + 0.05×5t</li>
    <li>4</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">key 环节
1. 数据____
   - 如何快速判断数据是否在Cache中

2. 地址____
   - 主存块如何存放在Cache中
   - 如何将主存地址转换为Cache地址

3. ____策略
   - Cache满后的块替换策略
   - 块淘汰策略选择

4. ____策略
   - 如何保证数据一致性
   - 如何提升效率

<div>
<details>
  <summary> </summary>
  <ul>
    <li>查找</li>
    <li>映射</li>
    <li>替换</li>
    <li>写入</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;"><span style="color: SlateBlue;">Cache</span>和 <span style="color: Gold;">主存</span> 的 <span style="color: GreenYellow;">映射</span>方式

- Cache行需要____位和____位:
  - 标记位:
    - 指明是主存中哪一块的____
  - 有效位:
    - 说明Cache行中信息是否____

- <span style="color: DarkRed;">地址</span> <span style="color: GreenYellow;">____</span>:
  - 基本定义:
    - 把主存地址空间映射到____地址空间
    - 按规则将主存信息装入____
  - 映射方法:
    - 共有____种不同的映射方法

<div>
<details>
  <summary> </summary>
  <ul>
    <li>标记</li>
    <li>有效</li>
    <li>副本</li>
    <li>有效</li>
    <li>映射</li>
    <li>Cache</li>
    <li>Cache</li>
    <li>3</li>
  </ul>
</details>
</div>

<ul>

### <span style="color: gray;">直接 <span style="color: silver;">~

<ul>

#### <span style="color: silver;">concept
- 主存块只能装入Cache____位置
  - 每个主存块对应固定的Cache____
  - 无法选择其他位置____
- 块冲突情况
  - 若对应位置已有内容则产生____
  - 需要____已有块
- 特点分析
  - 实现方面
    - 硬件实现____
    - 映射规则固定不____
  - 性能方面
    - 块冲突概率____
    - Cache空间利用率____

> pro：直接映射的地址结构及映射关系的分析（2010、2011、2015）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>唯一</li>
    <li>位置</li>
    <li>存放</li>
    <li>冲突</li>
    <li>替换</li>
    <li>简单</li>
    <li>灵活</li>
    <li>最高</li>
    <li>最低</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">映射 <span style="color: GreenYellow;">关系
- 公式:
  - Cache行号 = ____
- 规则:
  - 假设Cache有____行,主存有____块
  - 主存块映射规律:
    - 第0块、第____块、第____块映射到Cache第0行
    - 第1块、第____块、第____块映射到Cache第1行
  - 主存块号低____位即为Cache行号
  - Cache行需设置____位标记

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0d4d9150e1b74972905e0f2411e001d19ac079c052b685d6319df172fd1f46af.jpg)`  
图3.18Cache和主存之间的直接映射方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>mod Cache</li>
    <li>$2^c$</li>
    <li>$2^m$</li>
    <li>$2^c$</li>
    <li>$2^{c+1}$</li>
    <li>$2^c+1$</li>
    <li>$2^{c+1}+1$</li>
    <li>$c$</li>
    <li>$t=m-c$</li>
  </ul>
</details>
</div>

#### <span style="color: DarkRed;">地址</span> <span style="color: silver;">结构
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1a310ec397e1e430790891edc7b4fe7034517d79896535099a72318e362d5cfc.jpg)`

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- 根据访存地址 中间____位 找到Cache <span style="color: LimeGreen;">____</span>
- <span style="color: Gold;">____</span> Cache行 标记 & 主存地址高____位 标记:
     - <span style="color: gray;">____</span> & 有效位为 <span style="color: LimeGreen;">____</span>:
       - ____
       - 根据块内地址在Cache行中____
     - <span style="color: purple;">____</span> || 有效位为<span style="color: purple;">____</span>:
       - 不____
       - 从主存读块到Cache____
       - 设置____位和标记
       - 将内容送____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>c</li>
    <li>行</li>
    <li>compare</li>
    <li>t</li>
    <li>=</li>
    <li>1</li>
    <li>命中</li>
    <li>存取</li>
    <li>≠</li>
    <li>0</li>
    <li>命中</li>
    <li>行</li>
    <li>有效</li>
    <li>CPU</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">全</span> <span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联</span> <span style="color: silver;">~

<ul>

#### <span style="color: silver;">concept
- 主存块可装入Cache____位置

- 每行____指示来自主存的哪一块

- 优点:
  - Cache块____概率低
  - 空间____率高
  - ____率高

- 缺点:
  - 标记比较速度____
  - 实现____高

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8989ceb071e5ad8c8d6dca134a27f62a4c6286c510cc52ef891f745bf53aba0.jpg)`  
图3.19Cache和主存之间的全相联映射方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>任何</li>
    <li>标记</li>
    <li>冲突</li>
    <li>利用</li>
    <li>命中</li>
    <li>慢</li>
    <li>成本</li>
  </ul>
</details>
</div>

#### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">结构
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d778483358bb5cfaa81acdb4053dea9aacce5ec9ea238257e705ba9e2fca92cd.jpg)`

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- <span style="color: Gold;">____</span>主存地址高位标记与Cache各行标记
- 命中情况:
  - 有相等且有效位为____时:
    - ____
    - 根据块内地址取____
  - 都不相等时:
    - 不____
    - 从主存读块到____行
    - 设置____位和标记
    - 将内容送____

> pro：根据地址结构和比较器数量判断映射方式（2018）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>compare</li>
    <li>1</li>
    <li>命中</li>
    <li>信息</li>
    <li>命中</li>
    <li>空闲</li>
    <li>有效</li>
    <li>CPU</li>
  </ul>
</details>
</div>

#### <span style="color: green;">硬件</span> <span style="color: Gold;">实现
- 比较器配置:
  - 每个Cache行设置一个____
  - 比较器位数等于____字段位数
- 存取方式:
  - 采用"按____访问"的存取方式
- 大容量Cache限制:
  - 不适合使用，原因:
    - ____开销大
    - ____开销大

<div>
<details>
  <summary> </summary>
  <ul>
    <li>比较器</li>
    <li>标记</li>
    <li>内容</li>
    <li>时间</li>
    <li>硬件</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: gray;">组</span><span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联 ~

> pro：组相联映射方式的原理（2009、2016、2018～2020、2023）

<ul>

#### <span style="color: silver;">concept
将Cache分成____个大小相等的组
- <span style="color: Gold;">____</span><span style="color: LightSkyBlue;">____</span> 映射:
     - 每个主存块可以装入固定组中的____一行
     - 映射方式
       - 组间：采用____映射
       - 组内：采用____映射
- <span style="color: silver;">____</span><span style="color: Gold;">____</span>
    - 是对直接映射和全相联映射的____
    - 特殊情况
      - Q=____时变为全相联映射
      - Q=Cache____数时变为直接映射
- <span style="color: gray;">____</span><span style="color: Gold;">____</span>
  - 基本关系
    - 路数越大，每组Cache行数量____
    - 块冲突概率越____，但相联比较电路越____
  - 性能权衡
    - 适当路数可使性能接近____
    - 成本接近____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/705d35296eca71ed8eded974c3d677da76008d584c3b528fa5e8971962c6d880.jpg)`  
图3.20Cache和主存之间的二路组相联映射方式

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Q</li>
    <li>主存</li>
    <li>块</li>
    <li>任意</li>
    <li>直接</li>
    <li>全相联</li>
    <li>映射</li>
    <li>特性</li>
    <li>折中</li>
    <li>1</li>
    <li>行</li>
    <li>路数</li>
    <li>特点</li>
    <li>越大</li>
    <li>低</li>
    <li>复杂</li>
    <li>全相联</li>
    <li>直接映射</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">映射</span> <span style="color: silver;">关系
- Cache组号 = ____
- 地址结构：
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16468247b7f68d80ea35bf713452faaeaab1af0cc4620f1f67e90b71bd4d66a4.jpg)`

> pro：组相联映射的访存过程及Cache缺失处理过程（2020）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>mod Cache 组数（Q）</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- according to访存地址中间____号 find 对应Cache组
- compare<span style="color: gray;">____</span>每行标记 & <span style="color: Gold;">____</span>地址高位标记
- 命中:
  - ____ & 有效位为____
    - ____
      - 根据块内地址在Cache行中____
  - ____ || 有效位为____
    - 不____
      - 从主存读块到对应组____行
      - 设置____位和标记
      - 将内容送____

> pro：组相联映射中比较器的个数和位数（2022）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>组</li>
    <li>组内</li>
    <li>主存</li>
    <li>=</li>
    <li>1</li>
    <li>命中</li>
    <li>存取</li>
    <li>≠</li>
    <li>0</li>
    <li>命中</li>
    <li>空闲</li>
    <li>有效</li>
    <li>CPU</li>
  </ul>
</details>
</div>

#### <span style="color: green;">硬件</span> <span style="color: silver;">实现
- 比较器需求
  - 直接映射：____个比较器
  - r路组相联：____个比较器

> pro：直接映射、组相联映射相关标记位及总容量的分析（2010）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>r</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">eg
主存条件：
- 地址空间：____MB
- 按____编址
- 数据Cache：____个Cache行
- 行长：____B

<div>
<details>
  <summary> </summary>
  <ul>
    <li>256</li>
    <li>字节</li>
    <li>8</li>
    <li>64</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">q&a:
1. Cache总 <span style="color: LimeGreen;">____</span>计算
   - 总容量 = ____容量 + ____阵列容量
   - 不考虑脏位和替换算法位

> pro：直接映射相关标记位的分析（2015、2021）

> attention：

<div>
<details>
  <summary> </summary>
  <ul>
    <li>容量</li>
    <li>存储</li>
    <li>标记</li>
  </ul>
</details>
</div>

###### <span style="color: silver;"> <span style="color: GreenYellow;">标记</span>阵列结构
- 每Cache行对应一个____项
  - 包括：____位、____位、____算法位、____位
- 组相联特点
  - 每组各行标记项排成____行
  - 各组从上到下排列成____标记阵列

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/57f1a99d258e755109902e23acf15b394fc66b1b280f1f9dca674653a358810b.jpg)`  
图3.21二路组相联的标记阵列示意图

<div>
<details>
  <summary> </summary>
  <ul>
    <li>标记</li>
    <li>有效</li>
    <li>脏</li>
    <li>替换</li>
    <li>标记</li>
    <li>一</li>
    <li>二维</li>
  </ul>
</details>
</div>

###### <span style="color: silver;">存储 <span style="color: LimeGreen;">容量</span>计算
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/683ed3f03365e410bb54f631a3aa7975ef5c257a5d5fb4a06bc06596f36764f8.jpg)`  
图3.22Cache行的存储容量示意图

- 标记字段长度计算
  - 主存地址：____位(256MB=____B)
  - 块内地址：____位(____B=64B)
  - 行号：____位(____=8)
  - 标记字段：____位(____)
- 总容量：____×(____+____+____)=____位

<div>
<details>
  <summary> </summary>
  <ul>
    <li>28</li>
    <li>$2^{28}$</li>
    <li>6</li>
    <li>$2^6$</li>
    <li>3</li>
    <li>$2^3$</li>
    <li>19</li>
    <li>28-6-3</li>
    <li>8</li>
    <li>1</li>
    <li>19</li>
    <li>512</li>
    <li>4256</li>
  </ul>
</details>
</div>

2. 主存<span style="color: DarkRed;">____</span>3200映射分析
   - 直接映射：Cache行号为____
   - 二路组相联：组号____(行号____或____)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>地址</li>
    <li>2</li>
    <li>2</li>
    <li>4</li>
    <li>5</li>
  </ul>
</details>
</div>

3. <span style="color: LimeGreen;">____</span> <span style="color: Gold;">____</span>过程(地址0123456H)
     - 地址划分
       - 主存标记位：____位
       - 块号：____位
       - 块内地址：____位
     - 访问步骤
       - 根据____号查Cache对应行
       - 比较主存____位
       - 检查____位
       - 根据结果进行相应____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>访</li>
    <li>存</li>
    <li>19</li>
    <li>3</li>
    <li>6</li>
    <li>块</li>
    <li>标记</li>
    <li>有效</li>
    <li>操作</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"> <span style="color: LimeGreen;">映射</span>方式 <span style="color: Gold;">比较
- 映射范围
  - 直接映射：____行
  - 全相联映射：____行
  - N路组相联：____行
- 性能对比
  - 命中率：____>____>____
  - 判断开销：____<____<____
  - 空间开销：____<____<____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>固定</li>
    <li>所有</li>
    <li>N</li>
    <li>全相联</li>
    <li>组相联</li>
    <li>直接映射</li>
    <li>直接映射</li>
    <li>组相联</li>
    <li>全相联</li>
    <li>直接映射</li>
    <li>组相联</li>
    <li>全相联</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">Cache中<span style="color: Gold;">主存</span>块的 <span style="color: LimeGreen;">替换</span>算法

<ul>

### <span style="color: silver;">concept
- 替换算法使用场景：
  - 需要使用替换算法的映射方式：
    - ____映射
    - ____映射
  - 不需要使用替换算法的映射方式：
    - ____映射
      - 原因：主存块只能放到唯一固定Cache____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>全相联</li>
    <li>组相联</li>
    <li>直接</li>
    <li>行</li>
  </ul>
</details>
</div>

### <span style="color: GreenYellow;">type

<ul>

#### <span style="color: silver;">随机( <span style="color: Gold;">RAND</span>)
- ____确定替换的Cache行
- 特点：
  - 实现____
  - 未依据____原理
  - 命中率可能较低

<div>
<details>
  <summary> </summary>
  <ul>
    <li>随机</li>
    <li>简单</li>
    <li>局部性</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">先进先出(<span style="color: gray;">F</span>I<span style="color: gray;">F</span>O)
- 选择____调入的Cache行进行替换
- 特点：
  - 容易____
  - 未依据____原理
  - 最早进入的块可能仍____

> pro：组相联映射中LRU算法的命中分析（2012、2021）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>最早</li>
    <li>实现</li>
    <li>局部性</li>
    <li>常用</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">近期最少使用( <span style="color: Gold;">L</span><span style="color: gray;">R</span><span style="color: green;">U</span>)
- 基本原理：
  - 依据程序访问的____原理
  - 选择近期未访问的Cache行____
  - 属于____类算法
  - 平均命中率高于____

> pro：LRU替换位及其位数的计算（2018、2020）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>局部性</li>
    <li>替换</li>
    <li>堆栈</li>
    <li>FIFO</li>
  </ul>
</details>
</div>

<ul>

##### <span style="color: silver;">(1) <span style="color: GreenYellow;">细节
- 计数器设置：
  - 每个Cache行设置____(LRU替换位)
  - 计数值记录主存块____情况
  - 位数与Cache组大小相关：
    - 二路：____位LRU位
    - 四路：____位LRU位

- 替换过程示例：
  - 条件：
    - ____路组相联
    - ____个主存块{1,2,3,4,5}映射到同一组
    - 访问序列{____}

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/172e58f1cfb7469387af458dc7e49c1ea931605bc2c9081f5e57a4932c9604de.jpg)`  
图3.23LRU算法的替换过程示意图

- 计数器变化规则：
  - 命中时：
    - 命中行计数器____
    - 比其低的计数器____
    - 其余____
  - 未命中且有空闲行：
    - 新装入行计数器置____
    - 其余全____
  - 未命中且无空闲行：
    - 计数值为____的行被替换
    - 新装入行计数器置____
    - 其余全____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>计数器</li>
    <li>使用</li>
    <li>1</li>
    <li>2</li>
    <li>四</li>
    <li>5</li>
    <li>1,2,3,4,1,2,5,1,2,3,4,5</li>
    <li>清零</li>
    <li>加1</li>
    <li>不变</li>
    <li>0</li>
    <li>加1</li>
    <li>3</li>
    <li>0</li>
    <li>加1</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">(2) <span style="color: LimeGreen;">抖动</span>现象
- 发生条件：集中访问存储区超过Cache组____
- 示例：
  - 访问序列：____
  - Cache每组____行
  - 结果：命中率为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>大小</li>
    <li>1,2,3,4,5,1,2,3,4,5,...</li>
    <li>4</li>
    <li>0</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">最不<u>经常</u>使用(L <span style="color: Gold;">F</span>U)算法
- 基本原理：
  - 换出一段时间内访问次数最少的Cache____
- 实现方式：
  - 每行设置____
  - 新行装入从____开始计数
  - 每次访问计数器____
  - 替换时选择计数值____的行

<div>
<details>
  <summary> </summary>
  <ul>
    <li>行</li>
    <li>计数器</li>
    <li>0</li>
    <li>加1</li>
    <li>最小</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">Cache的 <span style="color: Gold;">一致</span>性问题

<ul>

### <span style="color: silver;"><span style="color: LimeGreen;">W</span>操作策略
- 目的：保持Cache和主存内容____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一致</li>
  </ul>
</details>
</div>

</ul>
```

---

### 说明
1. **挖空处理**：  
   - 定义中的关键词（如“磁盘”“容量”）、公式定理（如“Dr = rN”）、算法关键步骤（如“取控制字”“执行控制字”）已被挖空。
   - 挖空部分用下划线“____”表示，确保简洁明了，便于记忆和自我测试。

2. **折叠块**：  
   - 每个次级标题下的挖空答案均置于 `<details>` 和 `<ul>` 标签中，作为折叠块。
   - 答案使用 `<li>` 标签并空行处理，支持 Markdown 内公式渲染（如 `$2^c$`）。

3. **结构完整性**：  
   - 未改变原有目录结构，所有内容均完整输出，未省略任何部分。
   - 图片链接保持不变，直接引用原 Markdown 中的格式。

4. **格式符合要求**：  
   - Markdown 和 HTML 结合，标题段落间使用 `<ul>` 标签缩进，折叠块与题干使用空行分隔。

您可以直接将上述内容复制到支持 Markdown 和 HTML 的编辑器中查看效果。如需进一步调整，请告诉我！

以下是按照要求对提供的 Markdown 文档进行挖空处理后的结果，包含 Markdown 和 HTML 折叠块格式。挖空部分包括定义中的关键词、公式定理和算法关键步骤，并在每个次级标题下用 `<details>` 标签将答案折叠。内容结构保持不变，所有内容完整输出。

---

```markdown
- 分类：
  - 写____策略
  - 写____策略

### <span style="color: LimeGreen;">W</span> <span style="color: silver;"><span style="color: LightSkyBlue;">命中</span>策略

> pro：直写法的特点（2015）、直写法是否需设修改位（2020）

<ul>

#### <span style="color: silver;"> <span style="color: Gold;">全</span> <span style="color: LimeGreen;">写</span>法(直写法、Write-through)
- 基本原理：
  - CPU同时写入____和____
  - 替换时直接覆盖，无需____
- 特点：
  - 实现____
  - 保持主存数据____
  - 缺点：增加____次数
- 写缓冲优化：
  - 位置：____和主存之间
  - 工作方式：
    - CPU同时写入Cache和____
    - 写缓冲再写入____
  - 局限性：频繁写时可能____

> pro：回写法的修改位（2018、2020）

#### <span style="color: silver;"><span style="color: gray;">回</span><span style="color: LimeGreen;">写</span>法(write-back)
- 基本原理：
  - 仅写入____
  - 替换时才____主存
- 特点：
  - 减少____次数
  - 存在数据____风险
- 修改位(脏位)机制：
  - 1：块被____，需写回
  - 0：块未____，无需写回

<div>
<details>
  <summary> </summary>
  <ul>
    <li>写命中</li>
    <li>写不命中</li>
    <li>Cache</li>
    <li>主存</li>
    <li>写回</li>
    <li>简单</li>
    <li>正确性</li>
    <li>访存</li>
    <li>Cache</li>
    <li>写缓冲</li>
    <li>主存</li>
    <li>溢出</li>
    <li>Cache</li>
    <li>写回</li>
    <li>访存</li>
    <li>不一致</li>
    <li>修改</li>
    <li>修改</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">~ <span style="color: gray;">不</span>~

<ul>

#### <span style="color: silver;"> <span style="color: LimeGreen;">W</span> <span style="color: Gold;">分配</span>法
- 处理步骤：
  - 更新____单元
  - 调入____块到Cache
- 特点：
  - 利用空间____性
  - 缺点：每次需从主存____块

#### <span style="color: silver;"><span style="color: gray;">非</span>~
- 处理方式：
  - 仅更新____单元
  - 不调入____块
- 使用搭配：
  - 通常与____法合用
  - 写分配法通常和____法合用

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存</li>
    <li>主存</li>
    <li>局部</li>
    <li>读</li>
    <li>主存</li>
    <li>主存</li>
    <li>全写</li>
    <li>回写</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">Cache <span style="color: LimeGreen;">结构</span>设计

> pro：采用分离的指令Cache和数据Cache的主要目的（2014）

<ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">分离</span>Cache结构
- 背景：指令____技术发展需求
- 优势：
  - 避免指令____与数据存取冲突
  - 优化不同____性特征
- 统一Cache特点：
  - 设计实现____
  - 存在访问____

#### <span style="color: silver;"> <span style="color: Gold;">多级</span>Cache设计
- 二级Cache示例：
  - L1Cache（靠近CPU）：
    - ____快，容量小
    - 指令数据通常____
    - 采用____法和回写法
  - L2Cache：
    - 速度和容量____
    - L1对L2使用____法
    - L2对主存使用____法
  - 优势：避免写缓冲____溢出

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a36a40284b9aa454bc42de878bcab6fe9160cad5f6b92ce9054bac667f2a2cf5.jpg)`

<div>
<details>
  <summary> </summary>
  <ul>
    <li>流水</li>
    <li>预取</li>
    <li>局部</li>
    <li>简单</li>
    <li>冲突</li>
    <li>速度</li>
    <li>分离</li>
    <li>写分配</li>
    <li>居中</li>
    <li>全写</li>
    <li>回写</li>
    <li>饱和</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: SlateBlue;">虚拟</span>M

<ul>

- 构成
  - 由____和____共同构成
  - 在硬件和____的共同管理下工作
- 透明性
  - 对于应用程序员而言是____的
- 特点
  - 具有____的速度
  - 具有____的容量

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存</li>
    <li>辅存</li>
    <li>系统软件</li>
    <li>透明</li>
    <li>主存</li>
    <li>辅存</li>
  </ul>
</details>
</div>

## <span style="color: silver;">concept

<ul>

### <span style="color: DarkRed;">地址</span> <span style="color: silver;">空间

<ul>

#### <span style="color: SlateBlue;">虚拟</span> <span style="color: silver;">~
- 地址空间统一编址
  - 将____和____地址空间合并
  - 形成庞大的统一____空间
- 用户编程自由度
  - 无需关注____限制
    - 不受____容量限制
    - 不受程序存放____限制
  - 提供____的编程环境

#### <span style="color: GreenYellow;">type

<ul>

##### <span style="color: silver;"><span style="color: SlateBlue;">虚</span>地址( <span style="color: Gold;">逻辑</span>地址)
- 用户编程允许涉及的____
- 对应的存储空间称为：
  - ____空间
  - ____空间

##### <span style="color: silver;"><span style="color: green;">实</span>地址(<span style="color: LightSkyBlue;">物理</span>地址)
- 实际的____单元地址
- 对应的是____地址空间(实地址空间)
- 虚地址比实地址要____很多

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3f30148f78a751f6de56c12ee740b690d95cef0f05379cb11a3386b06baf0ec8.jpg)`  
图3.24虚拟存储器的三个地址空间

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主存</li>
    <li>辅存</li>
    <li>地址</li>
    <li>硬件</li>
    <li>主存</li>
    <li>位置</li>
    <li>透明</li>
    <li>地址</li>
    <li>虚拟</li>
    <li>程序</li>
    <li>主存</li>
    <li>主存</li>
    <li>大</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;">CPU <span style="color: LimeGreen;">访问</span>机制
- CPU使用____地址时process：
  - 判断虚地址对应内容whether已装入____
  - if 在主存中：
    - 通过____变换直接访问主存指示的实际单元
  - ..不..：
    - 把包含这个字的____调入主存
      - 调入主存后再____
    - 若主存已满：
      - 采用____算法
      - 置换主存中的____块

> pro：虚拟存储器只能采用回写法的原因（2016）

### <span style="color: silver;"> <span style="color: LimeGreen;">技术</span>特点
- 类似Cache技术：
  - 将辅存中经常访问的____副本--> ____
- 特殊机制：
  - ____映射：
    - 每个虚页面可存放到对应主存区域的任何____页位置
  - ____法处理一致性：
    - 原因：____访问辅存代价大
    - 结果：不能每次写操作都同时____磁盘

<div>
<details>
  <summary> </summary>
  <ul>
    <li>虚</li>
    <li>主存</li>
    <li>地址</li>
    <li>一页或一段</li>
    <li>访问</li>
    <li>替换</li>
    <li>交换</li>
    <li>数据</li>
    <li>主存</li>
    <li>全相联</li>
    <li>空闲</li>
    <li>回写</li>
    <li>缺页</li>
    <li>写回</li>
  </ul>
</details>
</div>

## <span style="color: LightSkyBlue;">页</span><span style="color: silver;">式虚拟存储器

> 以____为基本单位
- 页的划分
  - ____空间和____地址空间都被划分成相同大小的页
    - 主存空间中的页
      - ____页
      - ____页
      - ____框
    - 虚拟地址空间中的页
      - ____页
      - ____页
- 页表特点
  - 记录了程序的虚页调入主存时被安排在____中的位置
  - 一般长久地保存在____中

### <span style="color: LightSkyBlue;">页</span><span style="color: gray;">表

<ul>

#### <span style="color: silver;">组成
- 页表项包含以下位：
  - ____位(装入位)
    - 表示页面在 ____中的状态
      - 1: 该虚拟页已从外存调入____
        - 页表项存放该页的____页号
      - 0: 未调入____
        - 页表项可存放该页的____地址
  - ____位(____位)
    - 表示页面 ____状态
      - 用于判断页面是否被____
      - 在____策略中用于判断替换时是否需要写回磁盘
  - ____位(使用位)
    - 用于页面 ____策略
      - 可实现____(最先调入)策略
      - 可实现____(最近最少使用)策略
      - 其他替换策略

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b8ab5292e69b51c36468563f144fde40a570b1a370f205fa85c05cc588cbae16.jpg)`  
图3.25主存中的页表示例

> pro：数组的分页存放、缺页异常分析及缺页处理过程（2014、2019、2023）

#### <span style="color: Gold;">缺</span><span style="color: LightSkyBlue;">页</span> <span style="color: silver;">处理过程
CPU访问数据的两种情况：
- ____ in ____页面时：
  - 如第1页，有效位为1，说明该页已存放在____中
  - 通过地址转换部件将虚拟地址转换为____地址
  - 到相应的主存实页中存取____
- ~ in ____页面时：
  - <span style="font-size:12px">如第5页，有效位为0，则发生"____"异常
  - 调用 OS' ____异常处理程序
  - step：
    - 从____调入页面：
      - 根据对应表项中的存放____字段
      - 将所缺页面调入一个空闲的____页框
    - 处理____页框不足：
      - 若主存中没有空闲页框时
      - 需要选择一个页面进行____
      - 采用回写策略时：
        - 根据____位判断
        - 确定是否需要____磁盘
    - ____页表：
      - 完成缺页处理后
      - 对页表进行相应____

#### <span style="color: silver;">优缺点
- 优点：
  - 页面的长度____
  - 页表____
  - 调入____
- 缺点：
  - 最后一页的零头将无法利用而造成____
  - 页不是逻辑上独立的实体，处理、保护和共享都不及____虚拟存储器方便

<div>
<details>
  <summary> </summary>
  <ul>
    <li>页</li>
    <li>主存</li>
    <li>虚拟</li>
    <li>物理</li>
    <li>实</li>
    <li>页</li>
    <li>虚拟</li>
    <li>虚</li>
    <li>主存</li>
    <li>内存</li>
    <li>有效</li>
    <li>主存</li>
    <li>主存</li>
    <li>物理</li>
    <li>主存</li>
    <li>磁盘</li>
    <li>脏</li>
    <li>修改</li>
    <li>修改</li>
    <li>修改</li>
    <li>回写</li>
    <li>引用</li>
    <li>替换</li>
    <li>FIFO</li>
    <li>LRU</li>
    <li>数据</li>
    <li>已存在</li>
    <li>主存</li>
    <li>物理</li>
    <li>数据</li>
    <li>缺失</li>
    <li>缺页</li>
    <li>缺页</li>
    <li>磁盘</li>
    <li>位置</li>
    <li>物理</li>
    <li>空闲</li>
    <li>替换</li>
    <li>脏</li>
    <li>写回</li>
    <li>更新</li>
    <li>更新</li>
    <li>固定</li>
    <li>简单</li>
    <li>方便</li>
    <li>浪费</li>
    <li>段式</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">转换

> pro：虚拟地址结构的分析（2011、2019、2021）

<ul>

#### <span style="color: silver;"><span style="color: SlateBlue;">虚拟</span>地址 & <span style="color: LightSkyBlue;">物理</span>~
- ____地址分为两个字段：
  - ____位为 ____号
  - ____位为 页内 ____地址
- ____地址分为两个字段：
  - ____位为物理____号
  - ____位为 页内 ____地址
- 特点：
  - these two 页面 ____ ____，页内 ____地址 ____
  - ____ -> ____地址的 转换由 ____ ____
  - ____
    - concept:
      - 存放在主存中的____表
        - 包含虚页号和实页号的____关系
        - 用于查找虚页号对应的____
    - 作用
      - 地址 ____
        - 建立____地址和____地址之间的映射关系
      - 地址 ____
        - 实现地址空间的____过程

> pro：虚拟地址主存物理地址（2011、2013、2018、2022）

#### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">转换
- 基本步骤：
  - 找到页表____地址
    - 通过页表____寄存器定位（①）
  - ____页表项
     - 使用虚拟地址高位的____页号（②）
  - ________位
     - if 装入位 = 1：
       - 获取____页号（③）
       - 与____地址拼接（④）
       - 生成____地址
     - if 装入位 = 0：
       - 表示发生____
       - 需要操作系统____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8abbc24dc44951166da271761d02b9beff867be6de5e5dc08cc6e6325bcebf8e.jpg)`  
图3.26页式虚拟存储器的地址变换过程

<div>
<details>
  <summary> </summary>
  <ul>
    <li>虚拟</li>
    <li>高</li>
    <li>虚页</li>
    <li>低</li>
    <li>偏移</li>
    <li>物理</li>
    <li>高</li>
    <li>页</li>
    <li>低</li>
    <li>偏移</li>
    <li>大小</li>
    <li>相同</li>
    <li>偏移</li>
    <li>=</li>
    <li>虚</li>
    <li>物理</li>
    <li>页</li>
    <li>表</li>
    <li>页表</li>
    <li>对照</li>
    <li>对应</li>
    <li>实页号</li>
    <li>映射</li>
    <li>虚拟</li>
    <li>物理</li>
    <li>转换</li>
    <li>转换</li>
    <li>首</li>
    <li>基址</li>
    <li>定位</li>
    <li>虚拟</li>
    <li>检查</li>
    <li>装入</li>
    <li>物理</li>
    <li>页内</li>
    <li>物理</li>
    <li>缺页</li>
    <li>处理</li>
  </ul>
</details>
</div>

### <span style="color: GreenYellow;">快</span><span style="color: gray;">表 <span style="color: silver;">（TLB）

<ul>

#### <span style="color: silver;">引入
- 访存过程中：
  - 访问主存次数增加：
    - 第一次：访问主存查____
    - 第二次：访问主存取____
  - 若发生____：
    - 需要额外进行：
      - 页面____
      - 页面____
  - 结论：
    - ____ 存储机制 cause 访问主存次数增加

> pro：TLB的硬件实现（2018），TLB和Cache的比较（2020）

#### <span style="color: Gold;">原理
- 基于程序访问的 ____性原理：
  - 特点：
    - 在一段时间内总是____访问某些页
  - 解决：
    - ____(TLB)：
       - 由____缓冲器组成
       - 存放常用页的____项
     - 慢表(Page)：
       - 放在____中的页表
- process：
  - 第一步：
    - 查找____
  - 第二步：
    - if 命____：
      - 无须访问主存中的____

> pro：TLB映射方式、地址划分与标记字段：与Cache相同（2016、2021）

#### <span style="color: Gold;">实现
- 硬件实现：
  - 用 ____实现
  - 工作原理类似于____
  - 通常采用____或____映射方式
- TLB表项 ____：
  - 页表表项内容
  - TLB标记
- ____方式：
   - ____映射：
      - TLB标记 = 对应页表项的虚拟____号
   - ____ ：
     - TLB标记=对应____号的____位部分
     - 虚拟____号的 ____位部分作为TLB组的____号

<div>
<details>
  <summary> </summary>
  <ul>
    <li>页表</li>
    <li>数据</li>
    <li>缺页</li>
    <li>替换</li>
    <li>修改</li>
    <li>虚拟</li>
    <li>局部</li>
    <li>经常</li>
    <li>快表</li>
    <li>高速</li>
    <li>页表</li>
    <li>主存</li>
    <li>快表</li>
    <li>中</li>
    <li>页表</li>
    <li>SRAM</li>
    <li>Cache</li>
    <li>全相联</li>
    <li>组相联</li>
    <li>组成</li>
    <li>映射</li>
    <li>全相联</li>
    <li>页</li>
    <li>组相联</li>
    <li>虚拟页</li>
    <li>高</li>
    <li>页</li>
    <li>低</li>
    <li>组</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> have <span style="color: Gold;">T</span>L<span style="color: Gold;">B</span>和<span style="color: SlateBlue;">Cache</span>的 <span style="color: RoyalBlue;">多级</span>存储系统

<ul>

#### <span style="color: Gold;">组成</span> <span style="color: silver;"> & 工作原理
- CPU给出32位____地址
- TLB采用 ____方式
  - 每项都有比较器
- ____process
   - 将____号 & TLB标记字段同时比较
   - 命中情况:
     - 若某项相等 & ____位为1
     - TLB____
     - 直接通过TLB进行____转换
   - 未~:
     - TLB ____
     - 访问 ____查 页表
     - 使用____页表方式
       - 虚页号:
         - ____索引 + ____索引
       - through these two -> ____ to 地址转换
       - TLB ____
         - 将表项调入TLB
         - 若已满需____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/631bb0e61b3bdacef3897c62f9b2563c6e1aa46c348e5f719e87b9db2f47ed57.jpg)`  
图3.27TLB和Cache的访问过程

#### <span style="color: GreenYellow;">快</span> <span style="color: silver;">表 & <span style="color: Gold;">慢</span>表的查找
- can同步进行____
- if 快表中有虚页号:
  - 快速找到____
  - 慢表查找____
  - 访问主存速度几乎不____

> pro：TLB、Cache和Page缺失组合的分析（2010）

#### <span style="color: LimeGreen;">访问</span> <span style="color: silver;">过程

<ul>

##### <span style="color: LimeGreen;">缺失</span> <span style="color: silver;">type
- TLB缺失：页表项不在____中
- Cache缺失：主存块不在____中
- Page缺失：页面不在____中
  - Page缺失时TLB必然____
  - Page缺失时Cache必然____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/410f211a8065de602231efcdde6fb31482045afcb7cd24653c854c6b447608e7.jpg)`  
图3.28带TLB虚拟存储器的CPU访存过程

##### <span style="color: silver;">.. <span style="color: Gold;">组合
表3.3TLB、Page、Cache三种缺失的可能组合情况
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5449e48e05a1210c3ad8e1dda8ec750f02c257f2e7997847b56ece5d409deea7.jpg)`

##### <span style="color: silver;">different组合' <span style="color: Gold;">处理
- 第1种组合：最佳情况，无需访问____
- 第2、3种组合：需访问一次____
- 第4种组合：需访问两次____
- 第5种组合：
  - 发生"____异常"
  - 需访问____
  - 至少访问两次____
- 处理方式：
  - Cache缺失：____处理
  - 缺页处理：____处理(操作系统缺页异常处理程序)
  - TLB缺失：可____或____处理

> attention：

<span style="font-size: 12px;">(OS 第3章: 同时具有TLB和Cache的存储系统, 虚实地址转换'eg)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>虚拟</li>
    <li>全相联</li>
    <li>查找</li>
    <li>虚页</li>
    <li>有效</li>
    <li>命中</li>
    <li>地址</li>
    <li>缺失</li>
    <li>主存</li>
    <li>两级</li>
    <li>页目录</li>
    <li>页表</li>
    <li>页表项</li>
    <li>更新</li>
    <li>替换</li>
    <li>查找</li>
    <li>实页号</li>
    <li>作废</li>
    <li>下降</li>
    <li>TLB</li>
    <li>Cache</li>
    <li>主存</li>
    <li>缺失</li>
    <li>缺失</li>
    <li>主存</li>
    <li>主存</li>
    <li>主存</li>
    <li>缺页</li>
    <li>磁盘</li>
    <li>主存</li>
    <li>硬件</li>
    <li>软件</li>
    <li>硬件</li>
    <li>软件</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;"><span style="color: gray;">段</span>式 ~

<ul>

### <span style="color: silver;">划分 & <span style="color: LimeGreen;">结构
- 段的划分
  - 按程序的____结构划分
  - 段长度特点
    - 不同程序段长____
    - 长度____
- 虚拟地址结构
  - 由两部分组成
    - ____部分
    - ____部分

### <span style="color: DarkRed;">地址</span><span style="color: silver;"> <span style="color: LimeGreen;">变换</span>机制
- 通过____实现虚拟地址到实地址的变换
  - 段表结构
    - 是程序的逻辑段和____位置的对照表
    - 段表每行记录包含:
      - ____
      - ____位
      - ____起点
      - ____等信息
  - CPU访存过程:
    - 第一步:根据段表____地址与____拼接成段表项
    - 第二步:根据____位判断段是否在主存
      - 装入位为"1":表示段已在____
      - 装入位为"0":表示段不在____
    - 第三步:若在主存
      - 读出段____地址
      - 与____地址相加得到实地址

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1b0fa6804dac3b58468ab24b6f02dbc573bbcb4d48f2326802894513dae0c641.jpg)`  
图3.29段式虚拟存储器的地址变换过程

### <span style="color: Gold;">特点

<ul>

#### <span style="color: GreenYellow;">透明</span><span style="color: silver;">性
- 分段对程序员____
  - 因为段是程序逻辑结构决定的____部分
- 分页对程序员____
  - 编程时无需知道____方式

#### <span style="color: silver;">优缺点
- 优点:
  - 段的分界与程序____分界对应
    - 更符合程序的____结构
  - 具有逻辑____性
    - 每段都是独立的____单位
  - 易于____、____、____和____
    - 编译: 可独立____
    - 管理: 按段进行____
    - 修改: 可按段____
    - 保护: 可按段设置____权限
  - 便于多道程序____
    - 可以____代码段
    - 数据段独立____
- 缺点:
  - 段长度可变导致空间____不便
    - 难以找到合适大小的____空间
    - 需要复杂的内存____算法
  - 易在段间留下____
    - 产生外部____
    - 降低内存____率
  - 空间利用____低
    - 由于____问题
    - 实际可用空间____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>逻辑</li>
    <li>不同</li>
    <li>可变</li>
    <li>段号</li>
    <li>段内地址</li>
    <li>段表</li>
    <li>主存</li>
    <li>段号</li>
    <li>装入</li>
    <li>段</li>
    <li>段长</li>
    <li>基</li>
    <li>段号</li>
    <li>装入</li>
    <li>主存</li>
    <li>主存</li>
    <li>起始</li>
    <li>段内</li>
    <li>不透明</li>
    <li>独立</li>
    <li>透明</li>
    <li>分页</li>
    <li>自然</li>
    <li>逻辑</li>
    <li>独立</li>
    <li>功能</li>
    <li>编译</li>
    <li>管理</li>
    <li>修改</li>
    <li>保护</li>
    <li>编译</li>
    <li>管理</li>
    <li>修改</li>
    <li>访问</li>
    <li>共享</li>
    <li>共享</li>
    <li>保护</li>
    <li>分配</li>
    <li>空闲</li>
    <li>分配</li>
    <li>碎片</li>
    <li>碎片</li>
    <li>利用</li>
    <li>效率</li>
    <li>碎片</li>
    <li>减少</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;"><span style="color: gray;">段</span><span style="color: LightSkyBlue;">页</span>式~

<ul>

### <span style="color: LimeGreen;">结构
- 程序分____后再分____
  - 每段划分为固定大小的____
  - 主存空间划分为等大的____
  - 以____为基本交换单位
- 程序结构
  - 每程序对应一个____
  - 每段对应一个____
  - 段的特点
    - 段长必须是____的整数倍
    - 段起点必须是____的起点

### <span style="color: DarkRed;">地址</span><span style="color: LimeGreen;">变换 <span style="color: silver;">process
- 虚地址分为三部分:
  - ____
  - 段内____
  - ____内____
- CPU访存步骤:
  - 根据____得到段表地址
  - 从段表取出____起始地址与段内____合成页表地址
  - 从页表取出____与____拼接成实地址

### <span style="color: silver;">优缺点
- 优点:
  - 兼具 ____式和____式 的优点
  - 可<u>按段</u> 实现 ____和 ____
- 缺点:
  - 需<u>____查表</u>
  - 系统____大

<div>
<details>
  <summary> </summary>
  <ul>
    <li>段</li>
    <li>页</li>
    <li>页</li>
    <li>页</li>
    <li>页</li>
    <li>段表</li>
    <li>页表</li>
    <li>页长</li>
    <li>页</li>
    <li>段号</li>
    <li>页号</li>
    <li>页</li>
    <li>地址</li>
    <li>段号</li>
    <li>页表</li>
    <li>页号</li>
    <li>实页号</li>
    <li>页内地址</li>
    <li>页</li>
    <li>段</li>
    <li>共享</li>
    <li>保护</li>
    <li>两次</li>
    <li>开销</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;"> <span style="color: Gold;">虚拟</span>存储器Virtual memory与<span style="color: SlateBlue;">Cache</span>的比较

<ul>

### <span style="color: silver;">same:
- 目标都是提高系统____
  - 都有____、____、____梯度
- 数据组织方式相似
  - 都划分为____块作为交换单位
  - 虚存系统信息块更____
- 管理机制相似
  - 都有地址____
  - 都有____算法
  - 都有____策略
- 原理相似
  - 都依据____原理
  - 采用"____缓存"思想
  - 将活跃数据放在____部件

### <span style="color: silver;">不同
- 解决 ____不同
  - Cache解决系统____
  - 虚拟存储器解决主存____

- 实现____不同
  - ____全由____实现
    - 对所有程序员____
  - 虚拟存储器由OS和硬件共同____
    - 对系统程序员____
    - 对应用程序员____

> pro：Cache缺失和缺页的处理开销对比（2016）

- 不命中影响不同
  - CPU速度约为Cache的____倍
  - 主存速度为硬盘的____倍以上
  - 虚拟存储器不命中对系统____更大

- 访问通路不同
  - CPU与Cache和主存有____通路
    - Cache不命中时可直接与____通信
  - CPU与辅存无____通路
    - 虚存不命中需先调入____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>性能</li>
    <li>容量</li>
    <li>速度</li>
    <li>价格</li>
    <li>信息</li>
    <li>大</li>
    <li>映射</li>
    <li>替换</li>
    <li>更新</li>
    <li>局部性</li>
    <li>快速</li>
    <li>高速</li>
    <li>目标</li>
    <li>速度</li>
    <li>容量</li>
    <li>方式</li>
    <li>Cache</li>
    <li>硬件</li>
    <li>透明</li>
    <li>实现</li>
    <li>不透明</li>
    <li>透明</li>
    <li>10</li>
    <li>100</li>
    <li>影响</li>
    <li>直接</li>
    <li>CPU</li>
    <li>直接</li>
    <li>主存</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# <span style="color: silver;">本章小结

<ul>

1）存储器系统为何要分这些层次？计算机如何管理这些层次？

- 存储系统层次的作用
  - Cache-主存层
    - 主要对CPU访存起____作用
    - CPU访存速度接近____速度
    - 寻址空间和位价接近____
  - 主存-辅存层
    - 主要起____作用
    - 程序员使用的存储器容量和位价接近____
    - 速度接近____
  - 整体效果
    - 速度____
    - 容量____
    - 位价____

- 层次间信息调度方式
  - 主存与Cache之间
    - 全部由____自动完成
  - 主存与辅存之间
    - 采用____技术实现
    - 通过____结合技术组成虚拟存储器
    - 程序员可用较大的____地址空间编程
    - 运行时由____自动完成虚拟地址到物理地址的转换

2.影响Cache性能的因素有哪些？

- 决定Cache系统访存效率重要因素是____，它与很多因素有关：
  - 命中率与____方式有关
    - ____映射方式的命中率最高
    - ____映射方式的命中率最低
  - 命中率与Cache____有关
    - Cache容量越大，____就越高
  - 命中率与主存块（或Cache行）的____有关
    - 主存块的____要适中

- 其他影响Cache总体性能的因素：
  - 系统是采用____还是采用____Cache
  - 数据Cache和指令Cache是____还是____在一起
  - 主存-总线-Cache-CPU之间采用什么____

3）虚拟存储系统的页面是设置得大一些好还是设置得小

# 

<ul>

能的因素有哪些？  

- 决定Cache系统访存效率重要因素是命中率，它与很多因素有关：
  - 命中率与映射方式有关
    - 全相联映射方式的命中率最高
    - 直接映射方式的命中率最低
  - 命中率与Cache容量有关
    - Cache容量越大，命中率就越高
  - 命中率与主存块（或Cache行）的大小有关
    - 主存块的大小要适中

- 其他影响Cache总体性能的因素：
  - 系统是采用单级还是采用多级Cache
  - 数据Cache和指令Cache是分离还是合在一起
  - 主存-总线-Cache-CPU之间采用什么架构

</ul>

#

<ul>

3）虚拟存储系统的页面是设置得大一些好还是设置得小一些好？  

- 页面大小要____
  - 页面太小的影响
    - 平均页内剩余空间较小，可节省____空间
    - ____会增大
    - 不能充分利用____局部性来提高命中率
  - 页面太大的影响
    - 可减少____空间
    - 平均页内剩余空间较大，会浪费较多____空间
    - 页面____的时间较长

<div>
<details>
  <summary> </summary>
  <ul>
    <li>加速</li>
    <li>Cache</li>
    <li>主存</li>
    <li>扩容</li>
    <li>辅存</li>
    <li>主存</li>
    <li>快</li>
    <li>大</li>
    <li>低</li>
    <li>硬件</li>
    <li>虚拟存储</li>
    <li>软/硬</li>
    <li>虚拟</li>
    <li>软/硬件</li>
    <li>命中率</li>
    <li>映射</li>
    <li>全相联</li>
    <li>直接</li>
    <li>容量</li>
    <li>命中率</li>
    <li>大小</li>
    <li>大小</li>
    <li>单级</li>
    <li>多级</li>
    <li>分离</li>
    <li>合</li>
    <li>架构</li>
    <li>适中</li>
    <li>存储</li>
    <li>页表</li>
    <li>空间</li>
    <li>页表</li>
    <li>存储</li>
    <li>调入/调出</li>
  </ul>
</details>
</div>

</ul>

# <span style="color: silver;">常见问题和易混淆知识点  

<ul>

- 1.Cache行的大小和命中率之间有什么关系？  

Cache行的长度较大时，能充分利用程序访问的____局部性，使一个较大的局部空间被一起调到Cache中，因而可以增加____机会。但是，行长也不能太大，主要原因有两个：  

1）行长大使____损失变大。也就是说，若未命中，则需花更多时间从主存____块。  

2）行长太大，Cache项数变少，因而____的可能性变小。  

Cache行的长度较小时，命中率会很____，但好处是存取块的____较小。  

- 2.发生取指令Cache缺失的处理过程是什么？  

1）程序计数器恢复当前____的值。  

2）对主存进行____的操作。  

3）将读入的指令写入Cache中，更改____位和____位。  

4）重新执行当前____。  

- 3.Cache总容量与映射方式有何种关系？  

Cache总容量 $=$ [每个Cache行标记项的容量（____位、____位、____替换位、____位）+Cache行长xCache总行数。其中，有效位和标记位是所有Cache所必需的；脏位只在Cache采用____时才需要设置；LRU替换位只在Cache采用____替换算法时才需要设置。  

有效位：占1位，用于说明Cache行中的数据是否____。脏位（修改位）：占1位，回写法才需要设置，用以说明Cache行中的数据是否被____。LRU替换位：位数为 $\log_{2}($ 组内块数），用于____替换算法中的访问计数。  

标记位Tag：主存地址结构中的____字段，其位数取决于所用的____方式，用于匹配Cache行对应主存中的哪个块。  

Cache容量与映射方式的具体关系如图3.30所示。  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/77d74c7bc0a8fc408aa68057edb2cbdd1c424abbf65fd57e9f4d982659723d0b.jpg)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>空间</li>
    <li>命中</li>
    <li>失效</li>
    <li>读</li>
    <li>命中</li>
    <li>低</li>
    <li>代价</li>
    <li>指令</li>
    <li>读</li>
    <li>有效</li>
    <li>标记</li>
    <li>指令</li>
    <li>有效</li>
    <li>脏</li>
    <li>LRU</li>
    <li>标记</li>
    <li>回写法</li>
    <li>LRU</li>
    <li>有效</li>
    <li>修改</li>
    <li>LRU</li>
    <li>标记</li>
    <li>映射</li>
  </ul>
</details>
</div>

</ul>


