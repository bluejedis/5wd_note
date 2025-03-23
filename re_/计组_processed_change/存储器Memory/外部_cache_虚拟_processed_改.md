以下是按照您的要求处理后的 Markdown 内容，增加了 `<ul></ul>` 标签并保持标题段落间的缩进格式，同时保留原有 Markdown 图片链接不变：

```markdown
<span style="color: silver;">

# <span style="color: gray;">外</span><span style="color: silver;">部M

<ul>

## <span style="color: LightSkyBlue;">磁盘</span> <span style="color: silver;">M

<ul>

磁盘存储器是以磁盘为存储介质的存储器，其主要优点：
- 存储容量大，位价格低
- 记录介质可重复使用
- 记录信息可长期保存而不丢失，甚至可脱机存档
- 非破坏性读出，读出时不需要再生

缺点：
- 存取速度慢
- 机械结构复杂
- 对工作环境要求较高

> pro：磁盘存储器的相关概念（2019）

### <span style="color: Goldenrod;">组成

<ul>

#### <span style="color: silver;">组件
- 磁盘存储器由以下组成：
  - 磁盘 <span style="color: GreenYellow;">驱动</span>器
  - 磁盘 <span style="color: Gold;">控制</span>器 
  - <span style="color: gray;">盘片

#### <span style="color: silver;">磁盘<span style="color: GreenYellow;">驱动</span>器
- 驱动磁盘转动并在盘面上通过磁头进行读/写操作的装置，如图3.14所示

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/949e3320f633db83d48f7dfbb5d87ac3e37d71935bede8ce35981b7926da2bb7.jpg)`  
图3.14磁盘 <span style="color: GreenYellow;">驱动</span> 器示意图

#### <span style="color: silver;">磁盘<span style="color: Gold;">控制</span>器
- 磁盘驱动器与主机的 <span style="color: GreenYellow;">接口</span>
- 主要功能：
  - 接收并解释CPU发来的命令
  - 向磁盘驱动器发出各种控制信号
  - 负责检测磁盘驱动器的状态

#### <span style="color: Gold;">存储</span> <span style="color: silver;">区域
- 组成结构：
  - 多个记录面
  - 每个记录面划分为若干圆形磁道
  - 每条磁道划分为若干扇区
- 存取特点：
  - 扇区（也称块）是磁盘读/写的最小单位
  - 磁盘按块存取

#### <span style="color: LimeGreen;">参数
- 磁<span style="color: gray;">头</span>数（Heads）：
  - 即记录面数
  - 表示磁盘共有多少个磁头
  - 用于读取/写入盘片上记录面的信息
  - 一个记录面对应一个磁头
- 柱<span style="color: gray;">面</span>数（Cylinders）：
  - 表示磁盘每面盘片上有多少条磁道
  - 不同记录面的相同编号（位置）的诸磁道构成一个圆柱面
- <span style="color: LightSkyBlue;">扇</span>区数（Sectors）：
  - 表示每条磁道上有多少个扇区

#### <span style="color: LightSkyBlue;">物理</span> <span style="color: Gold;">特性
- 磁道<span style="color: gray;">间隔</span>：
  - 相邻磁道及相邻扇区间通过间隙分隔
  - 目的是避免精度错误
- 位密度特点：
  - 从最外道向里道增加
  - 磁盘存储能力受限于最内道的最大记录密度

#### <span style="color: silver;">磁盘 <span style="color: Gold;">高速</span>缓存
- 实现方式：
  - 在 <span style="color: Gold;">内存</span>中开辟一部分区域
  - 缓冲 将要被送到磁盘上的<span style="color: LightSkyBlue;">数据</span>
- 优点：
  - 写磁盘时按" <span style="color: GreenYellow;">簇</span>"进行，避免频繁小块数据写盘
  - 中间结果数据在写回磁盘前可快速再次使用

</ul>

### <span style="color: Gold;">原理

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">编码</span>方法
- 按特定方案将二进制信息转换为磁化翻转状态序列
- 要求读/写控制电路容易、可靠地实现转换

#### <span style="color: silver;">磁<span style="color: LimeGreen;">记录</span>方式
- 通常采用：
  - 调频制（FM）
  - 改进型调频制（MFM）

</ul>

### <span style="color: Gold;">性能</span><span style="color: LimeGreen;">指标

<ul>

#### <span style="color: silver;">记录<span style="color: gray;">密度
- 定义：盘片单位面积上记录的二进制信息量
- 表示方式：
  - 道密度：沿磁盘半径方向单位长度上的磁道数
  - 位密度：磁道单位长度上能记录的二进制代码位数
  - 面密度：位密度和道密度的乘积

#### <span style="color: silver;">磁盘 <span style="color: LimeGreen;">容量
- 非格式化容量：
  - 定义：磁记录表面可利用的磁化单元总数
  - 计算：记录面数 × 柱面数 × 每条磁道的磁化单元数
- 格式化容量：
  - 定义：按特定记录格式所能存储信息的总量
  - 计算：记录面数 × 柱面数 × 每道扇区数 × 每个扇区的容量
  - 特点：比非格式化容量小

> pro：磁盘存取时间的计算（2013、2015、2022）

#### <span style="color: silver;">存取<span style="color: gray;">时间
- 组成部分：
  - 寻道时间：磁头移动到目的磁道的时间
  - 旋转延迟时间：磁头定位到要读/写扇区的时间
  - 传输时间：传输数据所花费的时间
- 时间计算：
  - 平均寻道时间：从最外道移动到最内道时间的一半
  - 平均旋转延迟时间：旋转半周的时间

#### <span style="color: silver;"><span style="color: LightSkyBlue;">数据</span>传输<span style="color: RoyalBlue;">速率
- 定义：单位时间内向主机传送数据的字节数
- 计算公式：Dr = rN
  - r：磁盘转数（转/秒）
  - N：每条磁道容量（字节）

</ul>

### <span style="color: silver;">磁盘<span style="color: DarkRed;">地址

> pro：磁盘地址结构的计算（2022）

<ul>

#### <span style="color: silver;">地址 <span style="color: LimeGreen;">结构
- 主机向磁盘控制器发送寻址信息
- 基本地址结构如图所示

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/63c7621ebd786e99322bc2b3b8f2b7a6108c715c1896f3fefe6388625f9c5d47.jpg)`

#### <span style="color: silver;">eg
- 条件：
  - 16个盘面
  - 每个盘面256个磁道
  - 每个磁道16个扇区
- 结果：
  - 每个扇区地址需16位二进制代码
  - 格式如图所示

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a05c8eee3f46040951717583967f67c0aa6f299dd9fed653a49b666bc3e3b2b4.jpg)`

</ul>

### <span style="color: silver;">工作 <span style="color: Gold;">过程

<ul>

- 主要操作类型：
  - 寻址
  - 读盘
  - 写盘
- 操作特点：
  - 每个操作对应一个控制字
  - 工作步骤：
    1. 取控制字
    2. 执行控制字

#### <span style="color: silver;">limit
- <span style="color: gray;">机械</span>式部件
- 读/写操作是 <span style="color: Gold;">串</span>行的：
  - 不能同时读写
  - ~两组数据

</ul>

### <span style="color: silver;">磁盘<span style="color: RoyalBlue;">阵列</span> <span style="color: silver;">(  <span style="color: GreenYellow;">R</span><span style="color: RoyalBlue;">A</span><span style="color: gray;">I</span>D

<ul>

独立冗余磁盘阵列

#### <span style="color: Gold;">特点</span> <span style="color: silver;">:
- 组成特点：
  - 将多个独立的物理磁盘组成一个独立的逻辑盘
- 存储特点：
  - 数据分布：
    - 在多个物理盘上分割存储
    - 交叉存储方式
  - 访问方式：
    - 支持并行访问
- 性能优势：
  - 更好的存储性能
  - 更高的可靠性
  - 更强的安全性

> pro：提高RAID可靠性的措施（2013）

#### <span style="color: Gold;">分级
- RAID1～RAID5的共同特点：
  - 磁盘损坏时可随时更换
  - 数据不会损坏
  - 提升系统可靠性

<ul>

##### <span style="color: GreenYellow;">类型
- RAID0：<span style="color: gray;">无冗余</span>和无<span style="color: LightSkyBlue;">校验</span>的磁盘阵列
- RAID1：<span style="color: GreenYellow;">镜像</span>磁盘阵列
- RAID2：采用纠错的海明码的磁盘阵列
- RAID3：位交叉奇偶校验的磁盘阵列
- RAID4：块交叉奇偶校验的磁盘阵列
- RAID5：无独立校验的奇偶校验磁盘阵列

##### <span style="color: silver;">RAID<span style="color: LightSkyBlue;">0
- 特点：
  - 使用条带化技术
  - 连续数据块交替存放在不同物理磁盘扇区
  - 多个磁盘交叉并行读/写
- 优点：
  - 扩大存储容量
  - 提高磁盘存取速度
- 缺点：
  - 无容错能力

##### <span style="color: silver;">RAID<span style="color: GreenYellow;">1
- 工作方式：
  - 两个磁盘同时进行读/写
  - 互为备份
- 优点：
  - 若一个磁盘故障，可从另一磁盘读取数据
- 缺点：
  - 实际容量减少一半

</ul>

#### <span style="color: silver;">优势
- 性能提升
  - 传输速率
    - 多磁盘同时使用提高传输速率
  - 数据吞吐量
    - 通过并行存取提高数据吞吐量
- 可靠性提升
  - 数据安全
    - 通过镜像功能提高安全可靠性
  - 容错能力
    - 通过数据校验提供容错能力

</ul>

</ul>

## <span style="color: Gold;">固态</span> <span style="color: silver;">硬盘

<ul>

### <span style="color: Gold;">特性

<ul>

#### <span style="color: silver;">组成
- 固态硬盘（SSD）是基于闪存技术的存储器
  - 与U盘无本质差别，但容量更大，存取性能更好
- 组成部分
  - 一个或多个闪存芯片
  - 闪存翻译层
    - 替代传统磁盘控制器角色
    - 将CPU的逻辑块读/写请求翻译成底层物理设备的控制信号

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f4c9b82aff9e75d81635a4e6f89fa583ec0838d5124b1cd07047a821d4691ebd.jpg)`  
图3.15固态硬盘（SSD）

#### <span style="color: silver;"> <span style="color: LimeGreen;">结构</span> & 特点
- 闪存结构
  - 由B块组成，每块由P页组成
  - 页大小：512B~4KB
  - 每块包含32~128页
  - 块大小：16KB~512KB
- 读写特性
  - 以页为单位读/写
  - 写入限制：需先擦除整个块
  - 块擦除后的页可直接写入一次
  - 重复写会导致块磨损

##### <span style="color: silver;">特点
- 随机写入<span style="color: gray;">慢</span>的原因
  - 块擦除速度慢，比页访问慢一个数量级
  - 修改已有数据需要整块复制
- 相对传统磁盘的优势
  - 随机访问更快
  - 无机械噪声和振动
  - 能耗低
  - 抗震性好
  - 安全性高

</ul>

### <span style="color: silver;"><span style="color: gray;">磨损</span> <span style="color: Gold;">均衡</span>（Wear Leveling）

<ul>

#### <span style="color: gray;">寿命
- 缺点
  - 闪存擦写寿命有限（几百到几千次）
  - 读写集中可能导致部分闪存过度损耗
  - 局部损坏可能影响整个SSD

#### <span style="color: silver;">技术

<ul>

##### <span style="color: silver;"> <span style="color: LimeGreen;">动</span>态磨损均衡
- 写入数据时自动选择较<span style="color: gray;">新</span>的闪存块
- 让老的闪存块暂时休息

##### <span style="color: silver;"><span style="color: LightSkyBlue;">静</span>~
- 更高级的技术方案
  - 无数据写入时也进行监测
  - 自动进行数据分配
    - <u>老</u>闪存块用于存储<span style="color: LightSkyBlue;">静</span>态数据
    - <span style="color: gray;">新</span>闪存块负责<span style="color: gray;">日常</span>读写操作

</ul>

#### <span style="color: silver;">提升
- 实际使用寿命显著提升
  - 以256GB SSD为例
    - 擦写寿命500次时需写入125TB才会损坏
    - 每天写入10GB数据需30多年才会磨损

</ul>

</ul>

</ul>

</ul>

# <span style="color: Gold;">缓冲</span> <span style="color: silver;">~  (<span style="color: SlateBlue;">cache

<ul>

- 主存系统效率提升的限制：
  - 程序转移概率不会很低
  - 数据分布离散性较大
  - 单纯依靠并行主存系统提升效率有限

- <span style="color: SlateBlue;">Cache</span>的优势：
  - 比主存速度更<span style="color: LightSkyBlue;">快
  - 在CPU和主存之间设置可显著提高存储系统效率

- 特点：
  - 由 <span style="color: Gold;">S</span>RAM组成
  - 通常直接集成在CPU中

## <span style="color: silver;">程序访问的 <span style="color: Gold;">局部</span>性原理

<ul>

### <span style="color: silver;">概述
- 包括时间局部性和空间局部性

> pro：分析给定代码的时空局部性（2017、2023）

#### <span style="color: LimeGreen;">时间</span> <span style="color: silver;">局部性
- 最近的未来要用到的信息，很可能是现在正在使用的信息
  - 原因：
    - 程序中存在盾环
    - 需要多次重复执行的子程序段
    - 对数组的存储和访问操作

#### <span style="color: gray;">空间</span> <span style="color: silver;">~
- 最近的末来要用到的信息
- might与现在正在使用的信息在存储空间上是<span style="color: gray;">邻近</span>的
  - 原因：
    - 指令通常是顺序存放、顺序执行的
    - 数据一般以向量、数组等形式簇聚地存储

#### <span style="color: silver;">在cache中的 <span style="color: Gold;">应用
- 利用局部性原理:
  - 数据存放策略:
    - 将正在使用的部分数据存入Cache
    - Cache特点:
      - 高速
      - 容量较小
  - 访问策略:
    - CPU主要访问Cache
  - 最终目标:
    - 提高程序执行速度

### <span style="color: silver;">eg

<ul>

【例3.2】假设数组元素按行优先方式存储，对于下面的两个程序：

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b41550f0178bf3620106cb205eed357ec765a9ec70eeda1a5cf5cda98d67dbf0.jpg)`

#### <span style="color: silver;">q

<ul>

1）对于数组a的访问，哪个空间局部性更好？哪个时间局部性更好？
2）对于指令访问来说，for循环体的空间局部性和时间局部性如何？

</ul>

#### <span style="color: silver;">answer
- 基本条件：
  - M、N为2048
  - 按字节编址
  - 每个数组元素占4字节

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3beffe3fd561e33f22d27b23b7735f6b3805a9b89288a00b6514d0ad34b06ace.jpg)`  
图3.16指令和数据在主存的存放

> pro：数组按行或列访问命中率的分析（2010）；数组循环访问的命中率分析（2016、2020）

##### <span style="color: LightSkyBlue;">数组</span> <span style="color: silver;">:
- 程序A的空间局部性：
  - 访问顺序：a[0]`[0]`,a[0]`[1]`,,a[0]`[2047]`;a[1]`[0]`,a[1]`[1]`,,a[1]`[2047]`
  - 访问顺序与存放顺序一致，空间局部性好

- 程序B的空间局部性：
  - 访问顺序：a[0]`[0]`,a[1]`[0]`.,a[2047]`[0]`;a[0]`[1]`,a[1]`[1]`,,a[2047]`[1]`
  - 每次访问跳过2048个数组元素（8192字节）
  - 若主存与Cache交换单位<8KB，每访问都需装入新块
  - 无空间局部性

- 时间局部性：
  - 两个程序都差
  - 原因：每个数组元素只访问一次

> pro：程序中指令Cache的命中率分析（2014）

##### <span style="color: GreenYellow;">循环</span> <span style="color: silver;">体:
- 两个程序的循环体局部性相同：
  - 空间局部性好：指令按序连续存放
  - 时间局部性好：内循环体被连续重复执行2048×2048次

##### <span style="color: silver;">sum
- 虽然功能相同，但执行时间差异大
- 原因：内外循环顺序不同导致数组访问空间局部性差异

</ul>

</ul>

## <span style="color: silver;">工作<span style="color: Gold;">原理

<ul>

### <span style="color: green;">结构
- Cache和主存划分特点：
  - 块划分：
    - 都划分为大小相等的块
    - Cache块也称Cache行
  - 块组成：
    - 每块由若干字节组成
    - 块长也称行长
- Cache容量特点：
  - 容量对比：
    - 远小于主存容量
    - 块数远少于主存块数
  - 存储内容：
    - 仅保存主存最活跃块的副本

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e95e7ed2b82fea1f024168bab35ac7aaf81ff99ed3bddc2a543be0029e74d2bd.jpg)`  
图3.17高速缓冲存储器的工作原理

> pro：Cache命中对CPU执行时间影响的分析（2013、2015）

### <span style="color: silver;">process

<ul>

#### <span style="color: Gold;">R
- Cache命中时：
  - 将访存地址转换为Cache地址
  - 直接读取Cache，不访问主存
- Cache不命中时：
  - 访问主存
  - 将整块数据调入Cache
  - 若Cache已满，使用 <span style="color: LimeGreen;">替换</span>算法

#### <span style="color: LimeGreen;">W
- Cache命中时：
  - 数据一致性：
    - 可能出现数据不一致问题
  - 处理方式：
    - 需按写策略处理
  - 解决方案：
    - <span style="color: Gold;">全</span>写法
    - <span style="color: gray;">回</span>写法

> attention：

- 某些计算机的访存方式：
  - 同时访问Cache和主存
  - 如果Cache命中：
    - 则终止访存操作

</ul>

### <span style="color: Gold;">性能

> pro：Cache命中率的计算（2009）

<ul>

#### <span style="color: LimeGreen;">命中</span><span style="color: RoyalBlue;">率</span> <span style="color: silver;">计算
- 命中率计算公式：
  - H = Nc/(Nc+Nm)
  - Nc：Cache命中次数
  - Nm：访问主存次数
- 平均访问时间：
  - Ta = H×tc + (1-H)×tm
  - tc：Cache访问时间
  - tm：主存访问时间

> pro：Cache缺失率对主存带宽的影响（2012）

#### <span style="color: silver;">eg
【例3.3】性能计算：
- 条件：
  - Cache速度是主存5倍
  - Cache命中率95%
- 计算过程：
  - Cache存取周期为t
  - 主存存取周期为5t
  - 平均访问时间T = 0.95×t + 0.05×(t+5t) = 1.25t
  - 或T = t + 0.05×5t = 1.25t
- 结论：性能提升约4倍

</ul>

### <span style="color: silver;">key 环节
1. 数据查找
   - 如何快速判断数据是否在Cache中

2. 地址映射
   - 主存块如何存放在Cache中
   - 如何将主存地址转换为Cache地址

3. 替换策略
   - Cache满后的块替换策略
   - 块淘汰策略选择

4. 写入策略
   - 如何保证数据一致性
   - 如何提升效率

</ul>

## <span style="color: silver;"><span style="color: SlateBlue;">Cache</span>和 <span style="color: Gold;">主存</span> 的 <span style="color: GreenYellow;">映射</span>方式

- Cache行需要标记位和有效位:
  - 标记位:
    - 指明是主存中哪一块的副本
  - 有效位:
    - 说明Cache行中信息是否有效

- <span style="color: DarkRed;">地址</span> <span style="color: GreenYellow;">映射</span>:
  - 基本定义:
    - 把主存地址空间映射到Cache地址空间
    - 按规则将主存信息装入Cache
  - 映射方法:
    - 共有3种不同的映射方法

<ul>

### <span style="color: gray;">直接 <span style="color: silver;">~

<ul>

#### <span style="color: silver;">concept
- 主存块只能装入Cache唯一位置
  - 每个主存块对应固定的Cache位置
  - 无法选择其他位置存放
- 块冲突情况
  - 若对应位置已有内容则产生冲突
  - 需要替换已有块
- 特点分析
  - 实现方面
    - 硬件实现简单
    - 映射规则固定不灵活
  - 性能方面
    - 块冲突概率最高
    - Cache空间利用率最低

> pro：直接映射的地址结构及映射关系的分析（2010、2011、2015）

#### <span style="color: silver;">映射 <span style="color: GreenYellow;">关系
- 公式:
  - Cache行号 $=$ mod Cache
- 规则:
  - 假设Cache有$2^c$行,主存有$2^m$块
  - 主存块映射规律:
    - 第0块、第$2^c$块、第$2^{c+1}$块映射到Cache第0行
    - 第1块、第$2^c+1$块、第$2^{c+1}+1$块映射到Cache第1行
  - 主存块号低$c$位即为Cache行号
  - Cache行需设置$t=m-c$位标记

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0d4d9150e1b74972905e0f2411e001d19ac079c052b685d6319df172fd1f46af.jpg)`  
图3.18Cache和主存之间的直接映射方式

#### <span style="color: DarkRed;">地址</span> <span style="color: silver;">结构
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1a310ec397e1e430790891edc7b4fe7034517d79896535099a72318e362d5cfc.jpg)`

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- 根据访存地址 中间c位 找到Cache <span style="color: LimeGreen;">行</span>
- <span style="color: Gold;">compare</span> Cache行 标记 & 主存地址高t位 标记:
     - <span style="color: gray;">=</span> & 有效位为 <span style="color: LimeGreen;">1</span>:
       - 命中
       - 根据块内地址在Cache行中存取
     - <span style="color: purple;">≠</span> || 有效位为<span style="color: purple;">0</span>:
       - 不命中
       - 从主存读块到Cache行
       - 设置有效位和标记
       - 将内容送CPU

</ul>

### <span style="color: Gold;">全</span> <span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联</span> <span style="color: silver;">~

<ul>

#### <span style="color: silver;">concept
- 主存块可装入Cache任何位置

- 每行标记指示来自主存的哪一块

- 优点:
  - Cache块冲突概率低
  - 空间利用率高
  - 命中率高

- 缺点:
  - 标记比较速度慢
  - 实现成本高

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a8989ceb071e5ad8c8d6dca134a27f62a4c6286c510cc52ef891f745bf53aba0.jpg)`  
图3.19Cache和主存之间的全相联映射方式

#### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">结构
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d778483358bb5cfaa81acdb4053dea9aacce5ec9ea238257e705ba9e2fca92cd.jpg)`

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- <span style="color: Gold;">compare</span>主存地址高位标记与Cache各行标记
- 命中情况:
  - 有相等且有效位为1时:
    - 命中
    - 根据块内地址取信息
  - 都不相等时:
    - 不命中
    - 从主存读块到空闲行
    - 设置有效位和标记
    - 将内容送CPU

> pro：根据地址结构和比较器数量判断映射方式（2018）

#### <span style="color: green;">硬件</span> <span style="color: Gold;">实现
- 比较器配置:
  - 每个Cache行设置一个比较器
  - 比较器位数等于标记字段位数
- 存取方式:
  - 采用"按内容访问"的存取方式
- 大容量Cache限制:
  - 不适合使用，原因:
    - 时间开销大
    - 硬件开销大

</ul>

### <span style="color: gray;">组</span><span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联 ~

> pro：组相联映射方式的原理（2009、2016、2018～2020、2023）

<ul>

#### <span style="color: silver;">concept
将Cache分成Q个大小相等的组
- <span style="color: Gold;">主存</span><span style="color: LightSkyBlue;">块</span> 映射:
     - 每个主存块可以装入固定组中的任意一行
     - 映射方式
       - 组间：采用直接映射
       - 组内：采用全相联映射
- <span style="color: silver;">映射</span><span style="color: Gold;">特性</span>
    - 是对直接映射和全相联映射的折中
    - 特殊情况
      - Q=1时变为全相联映射
      - Q=Cache行数时变为直接映射
- <span style="color: gray;">路数</span><span style="color: Gold;">特点</span>
  - 基本关系
    - 路数越大，每组Cache行数量越大
    - 块冲突概率越低，但相联比较电路越复杂
  - 性能权衡
    - 适当路数可使性能接近全相联
    - 成本接近直接映射

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/705d35296eca71ed8eded974c3d677da76008d584c3b528fa5e8971962c6d880.jpg)`  
图3.20Cache和主存之间的二路组相联映射方式

#### <span style="color: LimeGreen;">映射</span> <span style="color: silver;">关系
- Cache组号 = mod Cache 组数（Q）
- 地址结构：
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/16468247b7f68d80ea35bf713452faaeaab1af0cc4620f1f67e90b71bd4d66a4.jpg)`

> pro：组相联映射的访存过程及Cache缺失处理过程（2020）

#### <span style="color: LimeGreen;">访</span><span style="color: Gold;">存
- according to访存地址中间组号 find 对应Cache组
- compare<span style="color: gray;">组内</span>每行标记 & <span style="color: Gold;">主存</span>地址高位标记
- 命中:
  - = & 有效位为1
    - 命中
      - 根据块内地址在Cache行中存取
  - ≠ || 有效位为0
    - 不命中
      - 从主存读块到对应组空闲行
      - 设置有效位和标记
      - 将内容送CPU

> pro：组相联映射中比较器的个数和位数（2022）

#### <span style="color: green;">硬件</span> <span style="color: silver;">实现
- 比较器需求
  - 直接映射：1个比较器
  - r路组相联：r个比较器

> pro：直接映射、组相联映射相关标记位及总容量的分析（2010）

#### <span style="color: silver;">eg
主存条件：
- 地址空间：256MB
- 按字节编址
- 数据Cache：8个Cache行
- 行长：64B

##### <span style="color: silver;">q&a:
1. Cache总 <span style="color: LimeGreen;">容量</span>计算
   - 总容量 = 存储容量 + 标记阵列容量
   - 不考虑脏位和替换算法位

> pro：直接映射相关标记位的分析（2015、2021）

> attention：

###### <span style="color: silver;"> <span style="color: GreenYellow;">标记</span>阵列结构
- 每Cache行对应一个标记项
  - 包括：有效位、脏位、替换算法位、标记位
- 组相联特点
  - 每组各行标记项排成一行
  - 各组从上到下排列成二维标记阵列

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/57f1a99d258e755109902e23acf15b394fc66b1b280f1f9dca674653a358810b.jpg)`  
图3.21二路组相联的标记阵列示意图

###### <span style="color: silver;">存储 <span style="color: LimeGreen;">容量</span>计算
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/683ed3f03365e410bb54f631a3aa7975ef5c257a5d5fb4a06bc06596f36764f8.jpg)`  
图3.22Cache行的存储容量示意图

- 标记字段长度计算
  - 主存地址：28位(256MB=2^28B)
  - 块内地址：6位(2^6B=64B)
  - 行号：3位(2^3=8)
  - 标记字段：19位(28-6-3)
- 总容量：8×(1+19+512)=4256位

2. 主存<span style="color: DarkRed;">地址</span>3200映射分析
   - 直接映射：Cache行号为2
   - 二路组相联：组号2(行号4或5)

3. <span style="color: LimeGreen;">访</span> <span style="color: Gold;">存</span>过程(地址0123456H)
     - 地址划分
       - 主存标记位：19位
       - 块号：3位
       - 块内地址：6位
     - 访问步骤
       - 根据块号查Cache对应行
       - 比较主存标记位
       - 检查有效位
       - 根据结果进行相应操作

##### <span style="color: silver;"> <span style="color: LimeGreen;">映射</span>方式 <span style="color: Gold;">比较
- 映射范围
  - 直接映射：固定行
  - 全相联映射：所有行
  - N路组相联：N行
- 性能对比
  - 命中率：全相联>组相联>直接映射
  - 判断开销：直接映射<组相联<全相联
  - 空间开销：直接映射<组相联<全相联

</ul>

## <span style="color: silver;">Cache中<span style="color: Gold;">主存</span>块的 <span style="color: LimeGreen;">替换</span>算法

<ul>

### <span style="color: silver;">concept
- 替换算法使用场景：
  - 需要使用替换算法的映射方式：
    - 全相联映射
    - 组相联映射
  - 不需要使用替换算法的映射方式：
    - 直接映射
      - 原因：主存块只能放到唯一固定Cache行

### <span style="color: GreenYellow;">type

<ul>

#### <span style="color: silver;">随机( <span style="color: Gold;">RAND</span>)
- 随机确定替换的Cache行
- 特点：
  - 实现简单
  - 未依据局部性原理
  - 命中率可能较低

#### <span style="color: silver;">先进先出(<span style="color: gray;">F</span>I<span style="color: gray;">F</span>O)
- 选择最早调入的Cache行进行替换
- 特点：
  - 容易实现
  - 未依据局部性原理
  - 最早进入的块可能仍常用

> pro：组相联映射中LRU算法的命中分析（2012、2021）

#### <span style="color: silver;">近期最少使用( <span style="color: Gold;">L</span><span style="color: gray;">R</span><span style="color: green;">U</span>)
- 基本原理：
  - 依据程序访问的局部性原理
  - 选择近期未访问的Cache行替换
  - 属于堆栈类算法
  - 平均命中率高于FIFO

> pro：LRU替换位及其位数的计算（2018、2020）

<ul>

##### <span style="color: silver;">(1) <span style="color: GreenYellow;">细节
- 计数器设置：
  - 每个Cache行设置计数器(LRU替换位)
  - 计数值记录主存块使用情况
  - 位数与Cache组大小相关：
    - 二路：1位LRU位
    - 四路：2位LRU位

- 替换过程示例：
  - 条件：
    - 四路组相联
    - 5个主存块{1,2,3,4,5}映射到同一组
    - 访问序列{1,2,3,4,1,2,5,1,2,3,4,5}

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/172e58f1cfb7469387af458dc7e49c1ea931605bc2c9081f5e57a4932c9604de.jpg)`  
图3.23LRU算法的替换过程示意图

- 计数器变化规则：
  - 命中时：
    - 命中行计数器清零
    - 比其低的计数器加1
    - 其余不变
  - 未命中且有空闲行：
    - 新装入行计数器置0
    - 其余全加1
  - 未命中且无空闲行：
    - 计数值为3的行被替换
    - 新装入行计数器置0
    - 其余全加1

##### <span style="color: silver;">(2) <span style="color: LimeGreen;">抖动</span>现象
- 发生条件：集中访问存储区超过Cache组大小
- 示例：
  - 访问序列：1,2,3,4,5,1,2,3,4,5,...
  - Cache每组4行
  - 结果：命中率为0

</ul>

#### <span style="color: silver;">最不<u>经常</u>使用(L <span style="color: Gold;">F</span>U)算法
- 基本原理：
  - 换出一段时间内访问次数最少的Cache行
- 实现方式：
  - 每行设置计数器
  - 新行装入从0开始计数
  - 每次访问计数器加1
  - 替换时选择计数值最小的行

</ul>

## <span style="color: silver;">Cache的 <span style="color: Gold;">一致</span>性问题

<ul>

### <span style="color: silver;"><span style="color: LimeGreen;">W</span>操作策略
- 目的：保持Cache和主存内容一致
- 分类：
  - 写命中策略
  - 写不命中策略

### <span style="color: LimeGreen;">W</span> <span style="color: silver;"><span style="color: LightSkyBlue;">命中</span>策略

> pro：直写法的特点（2015）、直写法是否需设修改位（2020）

<ul>

#### <span style="color: silver;"> <span style="color: Gold;">全</span> <span style="color: LimeGreen;">写</span>法(直写法、Write-through)
- 基本原理：
  - CPU同时写入Cache和主存
  - 替换时直接覆盖，无需写回
- 特点：
  - 实现简单
  - 保持主存数据正确性
  - 缺点：增加访存次数
- 写缓冲优化：
  - 位置：Cache和主存之间
  - 工作方式：
    - CPU同时写入Cache和写缓冲
    - 写缓冲再写入主存
  - 局限性：频繁写时可能溢出

> pro：回写法的修改位（2018、2020）

#### <span style="color: silver;"><span style="color: gray;">回</span><span style="color: LimeGreen;">写</span>法(write-back)
- 基本原理：
  - 仅写入Cache
  - 替换时才写回主存
- 特点：
  - 减少访存次数
  - 存在数据不一致风险
- 修改位(脏位)机制：
  - 1：块被修改，需写回
  - 0：块未修改，无需写回

</ul>

### <span style="color: silver;">~ <span style="color: gray;">不</span>~

<ul>

#### <span style="color: silver;"> <span style="color: LimeGreen;">W</span> <span style="color: Gold;">分配</span>法
- 处理步骤：
  - 更新主存单元
  - 调入主存块到Cache
- 特点：
  - 利用空间局部性
  - 缺点：每次需从主存读块

#### <span style="color: silver;"><span style="color: gray;">非</span>~
- 处理方式：
  - 仅更新主存单元
  - 不调入主存块
- 使用搭配：
  - 通常与全写法合用
  - 写分配法通常和回写法合用

</ul>

### <span style="color: silver;">Cache <span style="color: LimeGreen;">结构</span>设计

> pro：采用分离的指令Cache和数据Cache的主要目的（2014）

<ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">分离</span>Cache结构
- 背景：指令流水技术发展需求
- 优势：
  - 避免指令预取与数据存取冲突
  - 优化不同局部性特征
- 统一Cache特点：
  - 设计实现简单
  - 存在访问冲突

#### <span style="color: silver;"> <span style="color: Gold;">多级</span>Cache设计
- 二级Cache示例：
  - L1Cache（靠近CPU）：
    - 速度快，容量小
    - 指令数据通常分离
    - 采用写分配法和回写法
  - L2Cache：
    - 速度和容量居中
    - L1对L2使用全写法
    - L2对主存使用回写法
  - 优势：避免写缓冲饱和溢出

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a36a40284b9aa454bc42de878bcab6fe9160cad5f6b92ce9054bac667f2a2cf5.jpg)`

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"><span style="color: SlateBlue;">虚拟</span>M

<ul>

- 构成
  - 由主存和辅存共同构成
  - 在硬件和系统软件的共同管理下工作
- 透明性
  - 对于应用程序员而言是透明的
- 特点
  - 具有主存的速度
  - 具有辅存的容量

## <span style="color: silver;">concept

<ul>

### <span style="color: DarkRed;">地址</span> <span style="color: silver;">空间

<ul>

#### <span style="color: SlateBlue;">虚拟</span> <span style="color: silver;">~
- 地址空间统一编址
  - 将主存和辅存地址空间合并
  - 形成庞大的统一地址空间
- 用户编程自由度
  - 无需关注硬件限制
    - 不受主存容量限制
    - 不受程序存放位置限制
  - 提供透明的编程环境

#### <span style="color: GreenYellow;">type

<ul>

##### <span style="color: silver;"><span style="color: SlateBlue;">虚</span>地址( <span style="color: Gold;">逻辑</span>地址)
- 用户编程允许涉及的地址
- 对应的存储空间称为：
  - 虚拟空间
  - 程序空间

##### <span style="color: silver;"><span style="color: green;">实</span>地址(<span style="color: LightSkyBlue;">物理</span>地址)
- 实际的主存单元地址
- 对应的是主存地址空间(实地址空间)
- 虚地址比实地址要大很多

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3f30148f78a751f6de56c12ee740b690d95cef0f05379cb11a3386b06baf0ec8.jpg)`  
图3.24虚拟存储器的三个地址空间

</ul>

</ul>

### <span style="color: silver;">CPU <span style="color: LimeGreen;">访问</span>机制
- CPU使用<span style="color: SlateBlue;">虚</span>地址时process：
  - 判断虚地址对应内容whether已装入主存
  - if 在主存中：
    - 通过地址变换直接访问主存指示的实际单元
  - ..不..：
    - 把包含这个字的一页或一段调入主存
      - 调入主存后再访问
    - 若主存已满：
      - 采用替换算法
      - 置换主存中的交换块

> pro：虚拟存储器只能采用回写法的原因（2016）

### <span style="color: silver;"> <span style="color: LimeGreen;">技术</span>特点
- 类似Cache技术：
  - 将辅存中经常访问的数据副本--> 主存
- 特殊机制：
  - 全相联映射：
    - 每个虚页面可存放到对应主存区域的任何空闲页位置
  - 回写法处理一致性：
    - 原因：缺页访问辅存代价大
    - 结果：不能每次写操作都同时写回磁盘

## <span style="color: LightSkyBlue;">页</span><span style="color: silver;">式虚拟存储器

> 以<span style="color: LightSkyBlue;">页</span>为基本单位
- 页的划分
  - 主存空间和虚拟地址空间都被划分成相同大小的页
    - 主存空间中的页
      - 物理页
      - 实页
      - 页框
    - 虚拟地址空间中的页
      - 虚拟页
      - 虚页
- 页表特点
  - 记录了程序的虚页调入主存时被安排在主存中的位置
  - 一般长久地保存在内存中

### <span style="color: LightSkyBlue;">页</span><span style="color: gray;">表

<ul>

#### <span style="color: silver;">组成
- 页表项包含以下位：
  - <span style="color: LightSkyBlue;">有效</span>位(装入位)
    - 表示页面在 <span style="color: Gold;">主存</span>中的状态
      - 1: 该虚拟页已从外存调入主存
        - 页表项存放该页的物理页号
      - 0: 未调入主存
        - 页表项可存放该页的磁盘地址
  - <span style="color: gray;">脏</span>位(<span style="color: GreenYellow;">修改</span>位)
    - 表示页面 <span style="color: LimeGreen;">修改</span>状态
      - 用于判断页面是否被修改
      - 在回写策略中用于判断替换时是否需要写回磁盘
  - <span style="color: LimeGreen;">引用</span>位(使用位)
    - 用于页面 <span style="color: GreenYellow;">替换</span>策略
      - 可实现FIFO(最先调入)策略
      - 可实现LRU(最近最少使用)策略
      - 其他替换策略

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b8ab5292e69b51c36468563f144fde40a570b1a370f205fa85c05cc588cbae16.jpg)`  
图3.25主存中的页表示例

> pro：数组的分页存放、缺页异常分析及缺页处理过程（2014、2019、2023）

#### <span style="color: Gold;">缺</span><span style="color: LightSkyBlue;">页</span> <span style="color: silver;">处理过程
CPU访问数据的两种情况：
- <span style="color: LightSkyBlue;">数据</span> in <span style="color: gray;">已存在</span>页面时：
  - 如第1页，有效位为1，说明该页已存放在主存中
  - 通过地址转换部件将虚拟地址转换为物理地址
  - 到相应的主存实页中存取数据
- ~ in <span style="color: GreenYellow;">缺失</span>页面时：
  - <span style="font-size:12px">如第5页，有效位为0，则发生"缺页"异常
  - 调用 OS' <span style="color: Gold;">缺</span><span style="color: LightSkyBlue;">页</span>异常处理程序
  - step：
    - 从<span style="color: gray;">磁盘</span>调入页面：
      - 根据对应表项中的存放位置字段
      - 将所缺页面调入一个空闲的物理页框
    - 处理<span style="color: Goldenrod;">空闲</span>页框不足：
      - 若主存中没有空闲页框时
      - 需要选择一个页面进行替换
      - 采用回写策略时：
        - 根据脏位判断
        - 确定是否需要写回磁盘
    - <span style="color: GreenYellow;">更新</span>页表：
      - 完成缺页处理后
      - 对页表进行相应更新

#### <span style="color: silver;">优缺点
- 优点：
  - 页面的长度固定
  - 页表简单
  - 调入方便
- 缺点：
  - 最后一页的零头将无法利用而造成浪费
  - 页不是逻辑上独立的实体，处理、保护和共享都不及段式虚拟存储器方便

</ul>

### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">转换

> pro：虚拟地址结构的分析（2011、2019、2021）

<ul>

#### <span style="color: silver;"><span style="color: SlateBlue;">虚拟</span>地址 & <span style="color: LightSkyBlue;">物理</span>~
- <span style="color: SlateBlue;">虚拟</span>地址分为两个字段：
  - <span style="color: LightSkyBlue;">高</span>位为 <span style="color: SlateBlue;">虚</span><span style="color: LightSkyBlue;">页</span><span style="color: gray;">号
  - <span style="color: LimeGreen;">低</span>位为 页内 <span style="color: GreenYellow;">偏移</span><span style="color: DarkRed;">地址
- <span style="color: LightSkyBlue;">物理</span>地址分为两个字段：
  - <span style="color: LightSkyBlue;">高</span>位为物理<span style="color: LightSkyBlue;">页</span><span style="color: gray;">号</span>
  - <span style="color: LimeGreen;">低</span>位为 页内 <span style="color: LimeGreen;">偏移</span>地址
- 特点：
  - these two 页面 <span style="color: gray;">大小</span> <span style="color: Gold;">相同</span>，页内 <span style="color: LimeGreen;">偏移</span>地址 <span style="color: LightSkyBlue;">=</span>
  - <span style="color: SlateBlue;">虚</span> -> <span style="color: LightSkyBlue;">物理</span>地址的 转换由 <span style="color: LightSkyBlue;">页</span><span style="color: gray;">表</span> <span style="color: Gold;">实现</span>
  - <span style="color: LightSkyBlue;">页</span><span style="color: gray;">表</span>
    - concept:
      - 存放在主存中的对照表
        - 包含虚页号和实页号的对应关系
        - 用于查找虚页号对应的实页号
    - 作用
      - 地址 <span style="color: GreenYellow;">映射</span>
        - 建立<span style="color: SlateBlue;">虚</span>拟地址和<span style="color: LightSkyBlue;">物理</span>地址之间的映射关系
      - 地址 <span style="color: LimeGreen;">转换</span>
        - 实现地址空间的转换过程

> pro：虚拟地址主存物理地址（2011、2013、2018、2022）

#### <span style="color: DarkRed;">地址</span> <span style="color: LimeGreen;">转换
- 基本步骤：
  - 找到页表<span style="color: gray;">首</span>地址
    - 通过页表基址寄存器定位（①）
  - <span style="color: LimeGreen;">定位</span>页表项
     - 使用虚拟地址高位的虚拟页号（②）
  - <span style="color: GreenYellow;">检查</span><span style="color: gray;">装入</span>位
     - if 装入位 = 1：
       - 获取物理页号（③）
       - 与页内地址拼接（④）
       - 生成物理地址
     - if 装入位 = 0：
       - 表示发生缺页
       - 需要操作系统处理

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8abbc24dc44951166da271761d02b9beff867be6de5e5dc08cc6e6325bcebf8e.jpg)`  
图3.26页式虚拟存储器的地址变换过程

### <span style="color: GreenYellow;">快</span><span style="color: gray;">表 <span style="color: silver;">（TLB）

<ul>

#### <span style="color: silver;">引入
- 访存过程中：
  - 访问主存次数增加：
    - 第一次：访问主存查页表
    - 第二次：访问主存取数据
  - 若发生缺页：
    - 需要额外进行：
      - 页面替换
      - 页面修改
  - 结论：
    - <span style="color: SlateBlue;">虚拟</span> 存储机制 cause 访问主存次数增加

> pro：TLB的硬件实现（2018），TLB和Cache的比较（2020）

#### <span style="color: Gold;">原理
- 基于程序访问的 <span style="color: Gold;">局部</span>性原理：
  - 特点：
    - 在一段时间内总是<span style="color: gray;">经常</span>访问某些页
  - 解决：
    - <span style="color: GreenYellow;">快</span><span style="color: gray;">表</span>(TLB)：
       - 由高速缓冲器组成
       - 存放常用页的页表项
     - 慢表(Page)：
       - 放在主存中的页表
- process：
  - 第一步：
    - 查找快表
  - 第二步：
    - if 命<span style="color: gray;">中</span>：
      - 无须访问主存中的页表

> pro：TLB映射方式、地址划分与标记字段：与Cache相同（2016、2021）

#### <span style="color: Gold;">实现
- 硬件实现：
  - 用 <span style="color: Gold;">S</span>RAM实现
  - 工作原理类似于Cache
  - 通常采用全相联或组相联映射方式
- TLB表项 <span style="color: Gold;">组成</span>：
  - 页表表项内容
  - TLB标记
- <span style="color: GreenYellow;">映射</span>方式：
   - <span style="color: Gold;">全</span><span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联</span>映射：
      - TLB标记 = 对应页表项的虚拟<span style="color: LightSkyBlue;">页</span>号
   - <span style="color: gray;">组</span>~ ：
     - TLB标记=对应<span style="color: SlateBlue;">虚拟</span><span style="color: LightSkyBlue;">页</span>号的<span style="color: LightSkyBlue;">高</span>位部分
     - 虚拟<span style="color: LightSkyBlue;">页</span>号的 <span style="color: LimeGreen;">低</span>位部分作为TLB组的<span style="color: gray;">组</span>号

</ul>

### <span style="color: silver;"> have <span style="color: Gold;">T</span>L<span style="color: Gold;">B</span>和<span style="color: SlateBlue;">Cache</span>的 <span style="color: RoyalBlue;">多级</span>存储系统

<ul>

#### <span style="color: Gold;">组成</span> <span style="color: silver;"> & 工作原理
- CPU给出32位虚拟地址
- TLB采用 <span style="color: Gold;">全</span><span style="color: GreenYellow;">相</span><span style="color: LightSkyBlue;">联</span>方式
  - 每项都有比较器
- <span style="color: LimeGreen;">查找</span>process
   - 将<span style="color: SlateBlue;">虚</span><span style="color: LightSkyBlue;">页</span>号 & TLB标记字段同时比较
   - 命中情况:
     - 若某项相等 & 有效位为1
     - TLB命中
     - 直接通过TLB进行地址转换
   - 未~:
     - TLB <span style="color: LimeGreen;">缺失</span>
     - 访问 <span style="color: Gold;">主存</span>查 页表
     - 使用<span style="color: LightSkyBlue;">两</span> <span style="color: Gold;">级</span>页表方式
       - 虚页号:
         - <span style="color: LightSkyBlue;">页</span> <span style="color: GreenYellow;">目录</span>索引 + <span style="color: LightSkyBlue;">页</span><span style="color: gray;">表</span>索引
       - through these two -> <span style="color: LightSkyBlue;">页</span>表<span style="color: gray;">项</span> to 地址转换
       - TLB <span style="color: GreenYellow;">更新</span>
         - 将表项调入TLB
         - 若已满需替换

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/631bb0e61b3bdacef3897c62f9b2563c6e1aa46c348e5f719e87b9db2f47ed57.jpg)`  
图3.27TLB和Cache的访问过程

#### <span style="color: GreenYellow;">快</span> <span style="color: silver;">表 & <span style="color: Gold;">慢</span>表的查找
- can同步进行查找
- if 快表中有虚页号:
  - 快速找到实页号
  - 慢表查找作废
  - 访问主存速度几乎不下降

> pro：TLB、Cache和Page缺失组合的分析（2010）

#### <span style="color: LimeGreen;">访问</span> <span style="color: silver;">过程

<ul>

##### <span style="color: LimeGreen;">缺失</span> <span style="color: silver;">type
- TLB缺失：页表项不在TLB中
- Cache缺失：主存块不在Cache中
- Page缺失：页面不在主存中
  - Page缺失时TLB必然缺失
  - Page缺失时Cache必然缺失

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/410f211a8065de602231efcdde6fb31482045afcb7cd24653c854c6b447608e7.jpg)`  
图3.28带TLB虚拟存储器的CPU访存过程

##### <span style="color: silver;">.. <span style="color: Gold;">组合
表3.3TLB、Page、Cache三种缺失的可能组合情况
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5449e48e05a1210c3ad8e1dda8ec750f02c257f2e7997847b56ece5d409deea7.jpg)`

##### <span style="color: silver;">different组合' <span style="color: Gold;">处理
- 第1种组合：最佳情况，无需访问主存
- 第2、3种组合：需访问一次主存
- 第4种组合：需访问两次主存
- 第5种组合：
  - 发生"缺页异常"
  - 需访问磁盘
  - 至少访问两次主存
- 处理方式：
  - Cache缺失：硬件处理
  - 缺页处理：软件处理(操作系统缺页异常处理程序)
  - TLB缺失：可硬件或软件处理

> attention：

<span style="font-size: 12px;">(OS 第3章: 同时具有TLB和Cache的存储系统, 虚实地址转换'eg)

</ul>

</ul>

## <span style="color: silver;"><span style="color: gray;">段</span>式 ~

<ul>

### <span style="color: silver;">划分 & <span style="color: LimeGreen;">结构
- 段的划分
  - 按程序的逻辑结构划分
  - 段长度特点
    - 不同程序段长不同
    - 长度可变
- 虚拟地址结构
  - 由两部分组成
    - 段号部分
    - 段内地址部分

### <span style="color: DarkRed;">地址</span><span style="color: silver;"> <span style="color: LimeGreen;">变换</span>机制
- 通过段表实现虚拟地址到实地址的变换
  - 段表结构
    - 是程序的逻辑段和主存位置的对照表
    - 段表每行记录包含:
      - 段号
      - 装入位
      - 段起点
      - 段长等信息
  - CPU访存过程:
    - 第一步:根据段表基地址与段号拼接成段表项
    - 第二步:根据装入位判断段是否在主存
      - 装入位为"1":表示段已在主存
      - 装入位为"0":表示段不在主存
    - 第三步:若在主存
      - 读出段起始地址
      - 与段内地址相加得到实地址

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1b0fa6804dac3b58468ab24b6f02dbc573bbcb4d48f2326802894513dae0c641.jpg)`  
图3.29段式虚拟存储器的地址变换过程

### <span style="color: Gold;">特点

<ul>

#### <span style="color: GreenYellow;">透明</span><span style="color: silver;">性
- 分段对程序员不透明
  - 因为段是程序逻辑结构决定的独立部分
- 分页对程序员透明
  - 编程时无需知道分页方式

#### <span style="color: silver;">优缺点
- 优点:
  - 段的分界与程序自然分界对应
    - 更符合程序的逻辑结构
  - 具有逻辑独立性
    - 每段都是独立的功能单位
  - 易于编译、管理、修改和保护
    - 编译: 可独立编译
    - 管理: 按段进行管理
    - 修改: 可按段修改
    - 保护: 可按段设置访问权限
  - 便于多道程序共享
    - 可以共享代码段
    - 数据段独立保护
- 缺点:
  - 段长度可变导致空间分配不便
    - 难以找到合适大小的空闲空间
    - 需要复杂的内存分配算法
  - 易在段间留下碎片
    - 产生外部碎片
    - 降低内存利用率
  - 空间利用效率低
    - 由于碎片问题
    - 实际可用空间减少

</ul>

## <span style="color: silver;"><span style="color: gray;">段</span><span style="color: LightSkyBlue;">页</span>式~

<ul>

### <span style="color: LimeGreen;">结构
- 程序分<span style="color: gray;">段</span>后再分<span style="color: LightSkyBlue;">页</span>
  - 每段划分为固定大小的页
  - 主存空间划分为等大的页
  - 以页为基本交换单位
- 程序结构
  - 每程序对应一个段表
  - 每段对应一个页表
  - 段的特点
    - 段长必须是页长的整数倍
    - 段起点必须是页的起点

### <span style="color: DarkRed;">地址</span><span style="color: LimeGreen;">变换 <span style="color: silver;">process
- 虚地址分为三部分:
  - 段<span style="color: gray;">号</span>
  - 段内<span style="color: LightSkyBlue;">页</span><span style="color: gray;">号</span>
  - <span style="color: LightSkyBlue;">页</span>内<span style="color: DarkRed;">地址</span>
- CPU访存步骤:
  - 根据段号得到段表地址
  - 从段表取出页表起始地址与段内页号合成页表地址
  - 从页表取出实页号与页内地址拼接成实地址

### <span style="color: silver;">优缺点
- 优点:
  - 兼具 <span style="color: LightSkyBlue;">页</span>式和<span style="color: gray;">段</span>式 的优点
  - 可<u>按段</u> 实现 <span style="color: Gold;">共享</span>和 <span style="color: LimeGreen;">保护
- 缺点:
  - 需<u>两次查表</u>
  - 系统开销大

</ul>

## <span style="color: silver;"> <span style="color: Gold;">虚拟</span>存储器Virtual memory与<span style="color: SlateBlue;">Cache</span>的比较

<ul>

### <span style="color: silver;">same:
- 目标都是提高系统性能
  - 都有容量、速度、价格梯度
- 数据组织方式相似
  - 都划分为信息块作为交换单位
  - 虚存系统信息块更大
- 管理机制相似
  - 都有地址映射
  - 都有替换算法
  - 都有更新策略
- 原理相似
  - 都依据局部性原理
  - 采用"快速缓存"思想
  - 将活跃数据放在高速部件

### <span style="color: silver;">不同
- 解决 <span style="color: Gold;">目标</span>不同
  - Cache解决系统速度
  - 虚拟存储器解决主存容量

- 实现<span style="color: Goldenrod;">方式</span>不同
  - <span style="color: SlateBlue;">Cache</span>全由<span style="color: green;">硬件</span>实现
    - 对所有程序员透明
  - 虚拟存储器由OS和硬件共同实现
    - 对系统程序员不透明
    - 对应用程序员透明

> pro：Cache缺失和缺页的处理开销对比（2016）

- 不命中影响不同
  - CPU速度约为Cache的10倍
  - 主存速度为硬盘的100倍以上
  - 虚拟存储器不命中对系统影响更大

- 访问通路不同
  - CPU与Cache和主存有直接通路
    - Cache不命中时可直接与CPU通信
  - CPU与辅存无直接通路
    - 虚存不命中需先调入主存

</ul>

</ul>

</ul>

# <span style="color: silver;">本章小结

<ul>

1）存储器系统为何要分这些层次？计算机如何管理这些层次？

- 存储系统层次的作用
  - Cache-主存层
    - 主要对CPU访存起加速作用
    - CPU访存速度接近Cache速度
    - 寻址空间和位价接近主存
  - 主存-辅存层
    - 主要起扩容作用
    - 程序员使用的存储器容量和位价接近辅存
    - 速度接近主存
  - 整体效果
    - 速度快
    - 容量大
    - 位价低

- 层次间信息调度方式
  - 主存与Cache之间
    - 全部由硬件自动完成
  - 主存与辅存之间
    - 采用虚拟存储技术实现
    - 通过软/硬结合技术组成虚拟存储器
    - 程序员可用较大的虚拟地址空间编程
    - 运行时由软/硬件自动完成虚拟地址到物理地址的转换

2.影响Cache性能的因素有哪些？

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

- 页面大小要适中
  - 页面太小的影响
    - 平均页内剩余空间较小，可节省存储空间
    - 页表会增大
    - 不能充分利用空间局部性来提高命中率
  - 页面太大的影响
    - 可减少页表空间
    - 平均页内剩余空间较大，会浪费较多存储空间
    - 页面调入/调出的时间较长

</ul>

# <span style="color: silver;">常见问题和易混淆知识点  

<ul>

- 1.Cache行的大小和命中率之间有什么关系？  

Cache行的长度较大时，能充分利用程序访问的空间局部性，使一个较大的局部空间被一起调到Cache中，因而可以增加命中机会。但是，行长也不能太大，主要原因有两个：  

1）行长大使失效损失变大。也就是说，若未命中，则需花更多时间从主存读块。  

2）行长太大，Cache项数变少，因而命中的可能性变小。  

Cache行的长度较小时，命中率会很低，但好处是存取块的代价较小。  

- 2.发生取指令Cache缺失的处理过程是什么？  

1）程序计数器恢复当前指令的值。  

2）对主存进行读的操作。  

3）将读入的指令写入Cache中，更改有效位和标记位。  

4）重新执行当前指令。  

- 3.Cache总容量与映射方式有何种关系？  

Cache总容量 $=$ [每个Cache行标记项的容量（有效位、脏位、LRU替换位、标记位）+Cache行长xCache总行数。其中，有效位和标记位是所有Cache所必需的；脏位只在Cache采用回写法时才需要设置；LRU替换位只在Cache采用LRU替换算法时才需要设置。  

有效位：占1位，用于说明Cache行中的数据是否有效。脏位（修改位）：占1位，回写法才需要设置，用以说明Cache行中的数据是否被修改过。LRU替换位：位数为 $\log_{2}($ 组内块数），用于LRU替换算法中的访问计数。  

标记位Tag：主存地址结构中的标记字段，其位数取决于所用的映射方式，用于匹配Cache行对应主存中的哪个块。  

Cache容量与映射方式的具体关系如图3.30所示。  

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/77d74c7bc0a8fc408aa68057edb2cbdd1c424abbf65fd57e9f4d982659723d0b.jpg)

</ul>

