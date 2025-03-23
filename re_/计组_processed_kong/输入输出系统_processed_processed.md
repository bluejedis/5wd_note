以下是根据您的要求对提供的Markdown文档进行挖空处理后的结果，包含Markdown和HTML折叠块格式。挖空的关键词、公式定理和关键步骤均已设置为下划线空缺（____），答案在每个次级标题下以HTML折叠块形式列出。原有的目录结构和内容未做任何改变或省略。

---

# <span style="color: silver;">above

<ul>

## <span style="color: silver;">【考纲内容】

<ul>

（一）I/O接口（I/O控制器）I/O接口的____和基本结构；1/O端口及其____

（二）10方式

程序____方式程序____方式：____的基本概念；____响应过程；____处理过程：____中断和中断____的概念 DMA方式：DMA____的组成：DMA____过程

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>功能</li>
    <li>编址</li>
    <li>查询</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>屏蔽</li>
    <li>控制器</li>
    <li>传送</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">【复习提示】

<ul>

- I/O方式的重要性：
  - 是本章的____和____。
  - 每年以选择题形式考查____概念和____。
  - 可能以综合题形式考查，特别是____相关计算。

- 中断方式的相关内容：
  - ____、____、____过程。
  - 中断____。

- DMA方式的相关内容：
  - ____、____过程。
  - 与____方式的区别。

在学习本章时，请读者思考以下问题：1）I/O设备有哪些____方式？各有何特点？2）CPU响应中断应具备哪些____？请读者在学习本章的过程中寻找答案，本章末尾将给出参考答案。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>重点</li>
    <li>难点</li>
    <li>基本</li>
    <li>原理</li>
    <li>效率</li>
    <li>原理</li>
    <li>特点</li>
    <li>处理</li>
    <li>屏蔽</li>
    <li>特点</li>
    <li>传输</li>
    <li>中断</li>
    <li>编址</li>
    <li>条件</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: silver;">\*concept

<ul>

## <span style="color: silver;">\* I/O系统

<ul>

- 输入/输出是以____为中心而言的
  - 将信息从____设备传送到主机称为输入，反之称为输出
  - 输入/输出系统解决的主要问题是对各种形式的____进行输入和输出的____

### <span style="color: silver;">concept

<ul>

- 外部设备
  - 包括____设备及通过____接口才能访问的外存储设备
- <span style="color: GreenYellow;">接口</span>
     - 在各个外设与主机之间传输____时进行各种____工作的逻辑部件
     - 协调包括传输过程中____的匹配、____和格式转换等
- <span style="color: LightSkyBlue;">I</span>
  - 用于向计算机系统输入____和文本、____等信息的部件
  - ____和____是最基本的输入设备
- <span style="color: Gold;">O</span>
     - 用于将计算机系统中的信息输出到计算机外部进行____、____等的部件
     - ____和____是最基本的输出设备
- <span style="color: silver;">外M</span>
     - 指除计算机____及CPU____等外的存储器，如____、光盘等

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主机</li>
    <li>外部</li>
    <li>信息</li>
    <li>控制</li>
    <li>输入/输出</li>
    <li>输入/输出</li>
    <li>数据</li>
    <li>协调</li>
    <li>速度</li>
    <li>电平</li>
    <li>命令</li>
    <li>数据</li>
    <li>键盘</li>
    <li>鼠标</li>
    <li>显示</li>
    <li>交换</li>
    <li>显示器</li>
    <li>打印机</li>
    <li>内存</li>
    <li>缓存</li>
    <li>硬磁盘</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> <span style="color: LimeGreen;">构成</span>

<ul>

- I/O<span style="color: LightSkyBlue;">指令</span>：实现____与I/O设备的信息____
- I/O<span style="color: green;">硬件</span>
  - 包括____设备、____控制器和接口、I/O____等
  - 通过____控制器来控制I/O设备的具体____
  - 通过I/O____与主机（____）相连

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>交换</li>
    <li>外部</li>
    <li>设备</li>
    <li>总线</li>
    <li>设备</li>
    <li>动作</li>
    <li>接口</li>
    <li>总线</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> <span style="color: Gold;">控制</span>方式

<ul>

- 程序 <span style="color: LimeGreen;">查询</span>方式
  - 由____通过程序不断查询I/O设备是否已做好____
- 程序<span style="color: SlateBlue;">中断</span>方式
  - 只在I/O设备____并向____发出____请求时才予以响应
- <span style="color: DarkRed;">DMA</span>方式
  - ____和I/O设备之间有一条____数据通路
  - 无须调用____服务程序
- <span style="color: LightSkyBlue;">通道</span>方式
  - 在系统中设有____控制部件
  - 每个通道都挂接若干____
  - 主机只需____有关通道，通道将执行____程序完成I/O操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>准备</li>
    <li>准备就绪</li>
    <li>CPU</li>
    <li>中断</li>
    <li>主存</li>
    <li>直接</li>
    <li>中断</li>
    <li>通道</li>
    <li>外设</li>
    <li>启动</li>
    <li>通道</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">外部设备

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">I

<ul>

##### <span style="color: silver;">键盘

<ul>

- 最常用的____设备，通过它可发出____或输入____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>输入</li>
    <li>命令</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">鼠标

<ul>

- 常用的____输入设备
- 把用户的____与计算机屏幕上的____信息相联系

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>定位</li>
    <li>操作</li>
    <li>位置</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;"> <span style="color: Gold;"> O

<ul>

##### <span style="color: silver;">显示器

<ul>

- 主要参数：
  - 屏幕____
    - 以对角线长度表示，单位为____
    - 常用的有12~32英寸等
  - ____率
    - 能表示的____个数
    - 如800×600、1024×768和1280×1024等
  - 灰度级
    - 表示____点的亮暗差别或颜色的不同
    - 典型的有8位（256级）、16位等
  - ____
    - 在光点消失之前重新扫描显示
  - ____频率
    - 单位时间内扫描整个屏幕内容的____
    - 通常为60~120Hz
  - 显示____（VRAM）
    - 也称____存储器
    - 存储容量计算：
      - VRAM容量=____×灰度级位数
      - VRAM带宽=____×灰度级位数×____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>大小</li>
    <li>英寸</li>
    <li>分辨</li>
    <li>像素</li>
    <li>像素</li>
    <li>刷新</li>
    <li>刷新</li>
    <li>次数</li>
    <li>存储器</li>
    <li>刷新</li>
    <li>分辨率</li>
    <li>分辨率</li>
    <li>帧频</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">printer

<ul>

- 用于将计算机的____结果打印在相关____上

<ul>

###### <span style="color: silver;">针式~

<ul>

- 擅长"多层____打印"
- 工作____简单，造价____
- ____便宜
- 打印____和速度不够高

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>复写</li>
    <li>原理</li>
    <li>低廉</li>
    <li>耗材</li>
    <li>分辨率</li>
  </ul>
</details>
</div>

</ul>

###### <span style="color: silver;">喷墨式~

<ul>

- 基于____原理
- 可实现高质量____打印

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>三基色</li>
    <li>彩色</li>
  </ul>
</details>
</div>

</ul>

###### <span style="color: silver;">激光~

<ul>

- 结合____技术和____技术
- 打印质量高、____快、____能力强

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>激光</li>
    <li>电子显像</li>
    <li>速度</li>
    <li>处理</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

#### <span style="color: silver;">外部M（辅存）

<ul>

##### <span style="color: silver;"><span style="color: SlateBlue;">磁</span>表面M

<ul>

- 把____材料涂在金属铝或____表面上作为____体
- 包括____存储器、____存储器和____存储器

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>磁性</li>
    <li>塑料</li>
    <li>载磁</li>
    <li>磁盘</li>
    <li>磁带</li>
    <li>磁鼓</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">固态硬盘（SSD）

<ul>

- 采用高性能____存储器作为硬盘
- 需要其他____和____的支持

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Flash</li>
    <li>硬件</li>
    <li>软件</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">光盘M

<ul>

- 利用____原理读/写信息的存储装置
- 采用聚焦____对盘式介质以____方式记录信息
- 系统组成：
  - ____片
  - ____驱动器
  - ____控制器

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>光学</li>
    <li>激光束</li>
    <li>非接触</li>
    <li>光盘</li>
    <li>光盘</li>
    <li>光盘</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;"> 0 I/O <span style="color: GreenYellow;">接口</span>

<ul>

- I/O接口的作用：
  - 作为____和____之间的交接界面。
  - 实现____与____之间的信息交换。

- 外设的多样性：
  - 外设种类繁多，具有不同的____特性。
  - 在____方式、____格式和____速度等方面存在差异。

- I/O接口的必要性：
  - 为了解决____之间的差异而设置。

## <span style="color: orange;">功能</span>

<ul>

>pro：I/O接口的定义与特性（2021）

- 主要功能
  - <span style="color: DarkRed;">地址</span>____和设备____
    - 对____送来的地址码进行____
  - <span style="color: Gold;">通信</span>____控制
       - 解决____配合
       - 协调____差异
       - 保证系统____工作
  - <span style="color: LightSkyBlue;">数据</span> <span style="color: Gold;">缓冲</span>
    - 设置____寄存器
    - 解决____不匹配
    - 防止____丢失
  - <span style="color: Gold;">信号</span> <span style="color: GreenYellow;">格式</span>____
       - ____转换
       - ____转换
       - ____转换
  - ____命令和____传送
    - CPU发送____命令
    - 外设返回____信息
    - CPU响应____请求

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>主机</li>
    <li>外设</li>
    <li>主机</li>
    <li>外设</li>
    <li>工作</li>
    <li>工作</li>
    <li>数据</li>
    <li>工作</li>
    <li>外设</li>
    <li>译码</li>
    <li>选择</li>
    <li>CPU</li>
    <li>译码</li>
    <li>联络</li>
    <li>时序</li>
    <li>速度</li>
    <li>协调</li>
    <li>缓冲</li>
    <li>速度</li>
    <li>数据</li>
    <li>转换</li>
    <li>电平</li>
    <li>并/串</li>
    <li>模/数</li>
    <li>控制</li>
    <li>状态</li>
    <li>启动</li>
    <li>状态</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">基本<span style="color: LimeGreen;">结构</span>

<ul>

>pro：I/O端口与CPU交换的内容（2015）

- 通用结构组成
  - through I/O____与____、____相连
  - 含 <span style="color: LightSkyBlue;">数据</span> <span style="color: Gold;">缓冲</span> <span style="color: LimeGreen;">R</span>
    - <span style="color: Gold;">状态</span> <span style="color: LimeGreen;">R</span> & <span style="color: Gold;">控制</span> <span style="color: LimeGreen;">R</span>可____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/75e5c6546b9bbbf454e784b0b1efb00c038b494907e65ad7039f2432158a0fc4.jpg)
图7.1I/0接口的通用结构

>pro：I/O接口的数据线上传输的内容（2012）

- 接口 <span style="color: Gold;">信号线</span>功能
  - <span style="color: LightSkyBlue;">数据</span>线：
    - 传送____数据、____信息、____信息和____类型号
  - <span style="color: DarkRed;">地址</span>线：
    - 传送访问I/O接口____的地址
  - <span style="color: Gold;">控制</span>线：
       - 传送____控制信号、____请求和____信号、____信号和____信号

- I/O控制 <span style="color: Gold;">逻辑</span>功能
  - 对 <span style="color: Gold;">控制</span> <span style="color: LimeGreen;">R</span>____字 进行____
  - through____界面控制逻辑 与 外设 <span style="color: GreenYellow;">交互</span>
    - 管理<span style="color: LightSkyBlue;">数据</span>____
      - 控制____缓冲寄存器
    - 管理 <span style="color: Gold;">状态</span>____
      - 收集____状态
      - 存入____寄存器

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>总线</li>
    <li>内存</li>
    <li>CPU</li>
    <li>合二为一</li>
    <li>读/写</li>
    <li>状态</li>
    <li>控制</li>
    <li>中断</li>
    <li>寄存器</li>
    <li>读/写</li>
    <li>中断</li>
    <li>响应</li>
    <li>仲裁</li>
    <li>握手</li>
    <li>命令</li>
    <li>译码</li>
    <li>外设</li>
    <li>传输</li>
    <li>数据</li>
    <li>信息</li>
    <li>外设</li>
    <li>状态</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: green;">类型</span>

<ul>

- 按数据传送方式分类
  - <span style="color: LimeGreen;">并行</span>接口：同时传送____或____的所有位
  - <span style="color: Gold;">串</span>行接口：____一位地有序传送
- 按主机访问I/O设备的 <span style="color: Gold;">控制</span>方式分类
  - 程序 <span style="color: LimeGreen;">查询</span>____
  - <span style="color: SlateBlue;">中断</span>____
  - <span style="color: DarkRed;">DMA</span>____
- 按功能选择的灵活性分类
  - <span style="color: gray;">可</span> <span style="color: GreenYellow;">编程</span>接口：通过____改变接口____
  - <span style="color: purple;">不</span><span style="color: gray;">可</span> <span style="color: GreenYellow;">编程</span>接口

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>一字节</li>
    <li>一个字</li>
    <li>一位</li>
    <li>接口</li>
    <li>接口</li>
    <li>接口</li>
    <li>编程</li>
    <li>功能</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">I/O<span style="color: LightSkyBlue;">端口</span>& <span style="color: deepskyblue;">编址</span>

<ul>

>pro：I/O端口的定义及相关特性（2014）

- I/O端口:
  - 指I/O <span style="color: GreenYellow;">接口</span>电路中可被____直接访问的 <span style="color: LimeGreen;">R</span>
  - 主要包括
    - <span style="color: LightSkyBlue;">数据</span>____
    - <span style="color: Gold;">状态</span>____
    - <span style="color: Goldenrod;">控制</span>____
  - CPU对不同端口的____权限不同

### <span style="color: silver;">I/O端口<span style="color: deepskyblue;">编址</span>方式

<ul>

#### <span style="color: silver;"> <span style="color: Gold;">独立</span>~

<ul>

>pro：I/O指令的作用（2017）

- 特点
  - (<span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span> <span style="color: Gold;">映射</span>方式
  - I/O端口 <span style="color: GreenYellow;">单</span><span style="color: Gold;">独</span>____
  - I/O端口____空间 与 ____地址空间 <span style="color: Gold;">独立
- 优点
  - only need 少量____线，____简单
  - 寻址<span style="color: RoyalBlue;">速度</span> <span style="color: GreenYellow;">快</span>
  - 程序____易理解
- 缺点
  - I/O____少，程序设计____性差
  - need 两组____信号，增加控制____性

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>编址</li>
    <li>地址</li>
    <li>主存</li>
    <li>地址</li>
    <li>译码</li>
    <li>清晰</li>
    <li>指令</li>
    <li>灵活</li>
    <li>控制</li>
    <li>复杂</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;"><span style="color: gray;">统一</span>~

<ul>

- 特点
  - ( <span style="color: gray;">M</span>~方式
  - <span style="color: Gold;">主存</span><span style="color: DarkRed;">地址</span>空间分出部分 → I/O<span style="color: LightSkyBlue;">端口</span>
  - 使用统一的____指令
- 优点
  - 无需专门I/O____，操作____方便
  - 端口____空间大
  - 可利用____存储管理系统实现____
- 缺点
  - 占用部分____地址空间
  - ____电路复杂，速度较慢

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>访存</li>
    <li>指令</li>
    <li>灵活</li>
    <li>编址</li>
    <li>虚拟</li>
    <li>保护</li>
    <li>主存</li>
    <li>译码</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>寄存器</li>
    <li>端口</li>
    <li>端口</li>
    <li>端口</li>
    <li>操作</li>
  </ul>
</details>
</div>

</ul>

</ul>

# <span style="color: silver;"> 1 I/O <span style="color: deepskyblue;">方式</span>

<ul>

- 作用：
  - 实现____与I/O设备之间的____传送

- 控制方式的多样性：
  - 采用不同的____方式，如程序____、程序____和____等。
  - 这些方式在____、____、解决问题的着重点等方面各不相同。

- 基于CPU程序指令的I/O方式：
  - 程序 <span style="color: LimeGreen;">查询</span>和程序<span style="color: SlateBlue;">中断</span>
    - 更依赖于____中 程序____的执行

## <span style="color: silver;">程序 <span style="color: LimeGreen;">查询</span>方式

<ul>

### <span style="color: silver;">原理

<ul>

- 直接由 <span style="color: GreenYellow;">CPU</span> 执行____实现
- 程序查询方式接口设置：
  - <span style="color: LightSkyBlue;">数据</span>____ <span style="color: LimeGreen;">R</span>（____端口）
  - <span style="color: gray;">设备</span>____ <span style="color: LimeGreen;">R</span>（____端口）
- 主机I/O操作流程：
  - 读取设备 <span style="color: Gold;">状态</span>
  - 根据____决定下一步____

>pro：程序查询方式的特点（2023）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>程序</li>
    <li>缓冲</li>
    <li>数据</li>
    <li>状态</li>
    <li>状态</li>
    <li>状态</li>
    <li>操作</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">process

<ul>

- ① ____执行初始化程序，并预置____参数
- ② 向I/O接口发出____字，____I/O设备
- ③ 从外设接口读取其____信息
- ④ CPU周期或持续的____设备状态，直到外设____
- ⑤ 传送一次____
- ⑥ 修改____和____参数
- ⑦ 判断传送是否____，若未结束转第③步，直到____为0

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/fca58357301e2be2277f2fb06008bb5333a1276e5841ec4934610c16e8d988f0.jpg)
图7.2程序查询方式流程图

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>传送</li>
    <li>命令</li>
    <li>启动</li>
    <li>状态</li>
    <li>查询</li>
    <li>准备就绪</li>
    <li>数据</li>
    <li>地址</li>
    <li>计数器</li>
    <li>结束</li>
    <li>计数器</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;"> <span style="color: LimeGreen;">查询</span>方式<span style="color: green;">分类</span>

<ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">独占</span>~

<ul>

- CPU<u>一直</u>持续____接口____
- CPU花费<span style="color: gray;">100%</span>时间用于____操作
- 外设和CPU完全 <span style="color: Gold;">串行</span>____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>查询</li>
    <li>状态</li>
    <li>I/O</li>
    <li>工作</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;"> <span style="color: Gold;">定时</span>~

<ul>

- CPU<u>周期</u>性查询接口____
  - ____满足才进行____传送
  - 传送完成后返回____程序
- 时间间隔 与 设备数据 <span style="color: LimeGreen;">传输</span><span style="color: LightSkyBlue;">速率</span>____

>pro：定时查询的特点、效率分析及计算（2011、2018）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>状态</li>
    <li>条件</li>
    <li>数据</li>
    <li>用户</li>
    <li>相关</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">eg

<ul>

【例7.1】假设计算机的主频为500MHz，CPI为4，某外设的数据率为2MB/s，I/O接口中有一个32位数据缓冲寄存器，采用定时查询方式，每次1/0都执行10条指令。外设最多间隔多长时间查询一次才能不丢失数据？CPU用于外设I/O的时间占CPU总时间的百分比至少是多少？

解：
- 计算过程：
  - 外设准备32位数据时间：____÷2MB/s=2μs
  - 最大查询间隔：____
  - 每秒最少查询次数：____÷2μs=5×10^5
  - CPU用于I/O的时钟周期：5×10^5×____×4=2×10^7
  - CPU时间占比：2×10^7/____=4%

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>4B</li>
    <li>2μs</li>
    <li>1s</li>
    <li>10</li>
    <li>500M</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">优缺点

<ul>

- 优点：
  - 设计____
  - ____量少
- 缺点：
  - CPU浪费大量时间____等待
  - 同一时间只能与一台____交换____
  - CPU与设备____工作，效率低

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>简单</li>
    <li>硬件</li>
    <li>查询</li>
    <li>外设</li>
    <li>信息</li>
    <li>串行</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: silver;">程序<span style="color: SlateBlue;">中断</span>方式

<ul>

### <span style="color: silver;">concept

<ul>

- 定义：
  - CPU暂时中止____程序
  - 转去处理____情况或____请求
  - 处理完毕返回原程序____继续执行

>pro：程序中断方式的特点（2022、2023）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>现行</li>
    <li>异常</li>
    <li>特殊</li>
    <li>断点</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: Gold;">function

<ul>

- ① 实现____与I/O设备____工作
- ② 处理____故障和____错误
- ③ 实现____交互
- ④ 实现____程序、____操作
- ⑤ 实时处理____响应
- ⑥ 实现____程序和____系统切换
- ⑦ 多处理器系统____交流和____切换

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>并行</li>
    <li>硬件</li>
    <li>软件</li>
    <li>人机</li>
    <li>多道</li>
    <li>分时</li>
    <li>快速</li>
    <li>应用</li>
    <li>操作</li>
    <li>信息</li>
    <li>任务</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">工作<span style="color: Gold;">原理

<ul>

- CPU在程序中安排____外设
- CPU继续执行____程序
- 外设完成____后发出____请求
- CPU响应____并执行____服务程序
- 完成____传送后返回____程序
- 外设和CPU____工作

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d801b68aeb041a5302c1291f1270babd69f5c5840e4f2e2e4063c194152b2d83.jpg)
图7.3程序中断方式示意图

>pro：程序中断的效率分析及相关计算（2009、2014、2016、2018、2019）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>启动</li>
    <li>当前</li>
    <li>准备</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>数据</li>
    <li>原</li>
    <li>并行</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">eg

<ul>

【例7.2】假定计算机的主频为500MHz，CPI为4，某外设的数据率为40MB/s，I/0接口中有一个32位数据缓冲寄存器。在中断I/O方式下，若每次中断响应和中断处理的总时钟周期数至少为400，则该外设能否采用中断1/0方式？为什么？

解：
- 计算过程：
  - 中断响应和处理时间：400×____/500M=0.8μs
  - 外设准备32位数据时间：____÷40MB/s=0.1μs
  - 结论：不适合采用____I/O方式
  - 原因：准备____时间小于____处理时间，会造成____丢失

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>4B</li>
    <li>中断</li>
    <li>数据</li>
    <li>中断</li>
    <li>数据</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">process

<ul>

>pro： 中断工作流程中的相关细节（2017、2018、2021）

#### <span style="color: silver;">1. 中断 <span style="color: GreenYellow;">请求</span>

<ul>

- 中断 <span style="color: Gold;">源</span>
  - 定义：请求____中断的____或____
  - 特点：
    - 数量：一台计算机允许有多个____源
    - 时间：每个中断源向CPU发出____请求的时间是____的
  - 中断系统 <span style="color: GreenYellow;">管理</span>：
    - 需求：对每个____源设置中断请求____触发器
    - 触发器状态：
      - "1"表示该中断源有____
    - 触发器组织：
      - 形式：组成中断请求____寄存器
      - 位置：
        - 可集中在____中
        - 可分散在各个____源中

>pro：可屏蔽中断和不可屏蔽中断的特点（2020）

##### <span style="color: silver;">中断<span style="color: green;">类型

<ul>

- <span style="color: gray;">可</span>屏蔽中断(INTR线)
  - 优先级最 <span style="color: LimeGreen;">低</span>
  - ____中断模式下不被____
- <span style="color: purple;">不</span><span style="color: gray;">可</span>屏蔽中断(NMI线)
  - 用于处理____和____事件
    - 如____中断
    - ____掉电等
  - 优先级____
  - 即使在____中断模式下也被____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>关</li>
    <li>响应</li>
    <li>紧急</li>
    <li>重要</li>
    <li>时钟</li>
    <li>电源</li>
    <li>最高</li>
    <li>关</li>
    <li>响应</li>
  </ul>
</details>
</div>

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>CPU</li>
    <li>设备</li>
    <li>事件</li>
    <li>中断</li>
    <li>中断</li>
    <li>随机</li>
    <li>中断</li>
    <li>标记</li>
    <li>请求</li>
    <li>标记</li>
    <li>CPU</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">2. 中断响应 <span style="color: Gold;">判</span><span style="color: GreenYellow;">优</span>

<ul>

- 优先级
  - 定义：CPU响应____请求的____顺序
- 多个中断源<span style="color: gray;">同时</span>请求
  - 需求：通过中断____逻辑确定____顺序
- <span style="color: Gold;">判</span> <span style="color: GreenYellow;">优</span>实现方式
     - <span style="color: green;">硬件</span>方式：____
     - <span style="color: LightSkyBlue;">软件</span>方式：中断____程序

##### <span style="color: silver;"> <span style="color: GreenYellow;">优</span><span style="color: LightSkyBlue;">先</span>级顺序

<ul>

- ____中断 > ____异常 > ____中断
- 内部异常中：____故障 > ____中断
- ____中断请求 > I/O设备的中断请求
- I/O传送类中断请求中
  - ____设备 > ____设备
  - ____设备 > ____设备
  - ____设备 > ____设备

>attention:

- I/O设备的中断请求机制：
  - I/O设备的____时间是随机的。
  - CPU在每条____执行结束时采样中断请求____。
  - 仅在____中断的情况下获取I/O的中断____。
  - CPU响应中断的时间是每条____执行阶段的____时刻。

- <span style="color: SlateBlue;">中断</span>与 <span style="color: Gold;">异常</span>的区别：
  - 这里的中断only指 I/O<span style="color: SlateBlue;">中断</span>
  - <span style="color: Gold;">异常</span>不属于I/O____的范畴

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>不可屏蔽</li>
    <li>内部</li>
    <li>可屏蔽</li>
    <li>硬件</li>
    <li>软件</li>
    <li>DMA</li>
    <li>高速</li>
    <li>低速</li>
    <li>输入</li>
    <li>输出</li>
    <li>实时</li>
    <li>普通</li>
    <li>就绪</li>
    <li>指令</li>
    <li>信号</li>
    <li>开</li>
    <li>请求</li>
    <li>指令</li>
    <li>结束</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>先后</li>
    <li>判优</li>
    <li>响应</li>
    <li>排队器</li>
    <li>查询</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">3. CPU <span style="color: Gold;">响应</span>中断的<span style="color: Goldenrod;">条件</span>

<ul>

- 三个条件：
  1. 中断源有中断 <span style="color: GreenYellow;">请求</span>
  2. CPU <span style="color: Gold;">允许</span>____及____中断（____和____中断不受此限制）
  3. 一条指令执行<span style="color: gray;">完毕</span>（____不受此限制），且没有更____的任务

>attention:

- I/O设备的中断请求机制：
  - I/O设备的____时间特点：
    - 具有____性
  - CPU对中断请求的处理：
    - 采样时机：
      - 在每条____执行结束时
    - 获取条件：
      - 必须在____中断状态下
    - 响应时间：
      - 在____执行阶段的____时刻
- <span style="color: SlateBlue;">中断</span>与 <span style="color: Gold;">异常</span>的区别：
  - 这里说的中断only指I/O<span style="color: SlateBlue;">中断</span>
  - <span style="color: Gold;">异常</span>不属于I/O____的范畴

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>开</li>
    <li>异常</li>
    <li>不可屏蔽</li>
    <li>异常</li>
    <li>紧道</li>
    <li>就绪</li>
    <li>随机</li>
    <li>指令</li>
    <li>开</li>
    <li>指令</li>
    <li>结束</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">4. 中断 <span style="color: Gold;">响应</span>process

<ul>

##### <span style="color: silver;">中断<span style="color: LightSkyBlue;">隐</span>指令

<ul>

- 本质：<span style="color: green;">硬件</span>的<u>一系列</u>____操作
- 完成的操作：
  1. <span style="color: Gold;">关</span>____
     - 保护程序____和____信息 期间 不能响应更____中断
  2. <span style="color: Goldenrod;">保存</span>____
         - 将原程序____保存在____或特定____中
         - ____和中断的差异：
           - ____：断点是当前指令地址
           - ____：断点是下一条指令地址
  3. 引出中断 <span style="color: GreenYellow;">服务</span>____
     - ____中断源
     - 将服务程序____地址送入____
     - 识别方法：
       - ____向量法
       - ____查询法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自动</li>
    <li>中断</li>
    <li>断点</li>
    <li>现场</li>
    <li>高级</li>
    <li>断点</li>
    <li>断点</li>
    <li>栈</li>
    <li>寄存器</li>
    <li>异常</li>
    <li>异常</li>
    <li>中断</li>
    <li>程序</li>
    <li>识别</li>
    <li>入口</li>
    <li>PC</li>
    <li>硬件</li>
    <li>软件</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;">5. 中断<span style="color: LightSkyBlue;">向量

<ul>

##### <span style="color: silver;">中断<span style="color: gray;">识别</span>方式

<ul>

- ____中断
- ____中断（软件查询法）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>向量</li>
    <li>非向量</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">中断<span style="color: LightSkyBlue;">向量</span><span style="color: gray;">表

<ul>

- 每个中断源有唯一____号
- 每个类型号对应一个____程序
- 每个服务程序有一个____地址（中断向量）
- 所有中断向量集中存放在____特定区域

>pro：中断向量表的数据结构（2023）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>类型</li>
    <li>服务</li>
    <li>入口</li>
    <li>存储器</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;">中断<span style="color: LightSkyBlue;">向量</span>法 <span style="color: GreenYellow;">工作</span>流程

<ul>

1. CPU响应____
2. 识别____源获得____号
3. 计算对应中断____地址
4. 从____表取出____地址
5. 送入____执行____程序

>attention:

- 中断请求和响应信号
  - 在IO总线的____线上传送

- CPU响应中断后的处理流程
  - 从____线上获取中断源的中断____号
  - 根据类型号计算中断____在向量表中的____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>中断</li>
    <li>类型</li>
    <li>向量</li>
    <li>向量</li>
    <li>入口</li>
    <li>PC</li>
    <li>服务</li>
    <li>控制</li>
    <li>数据</li>
    <li>类型</li>
    <li>向量</li>
    <li>位置</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;">6. 中断 <span style="color: GreenYellow;">处理</span>过程

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ab84db701920d4fe3e864b31bb3c16635e25ae9907717b89a42118448e2e3e09.jpg)
图7.4可嵌套中断的处理流程

##### <span style="color: silver;"> 处理流程步骤

<ul>

- <span style="color: Gold;">关</span>____
   - 保存____
   - 中断服务程序____
   - 保存____和____字
- <span style="color: LightSkyBlue;">开</span>____ <span style="font-size: 12px;">5</span>
   - 执行中断____程序 <span style="font-size: 12px;">6</span>
- <span style="color: Gold;">关</span>____ <span style="font-size: 12px;">7</span>
   - 恢复____和____字
- 开____、____返回

>attention:

- 中断服务程序中的信息保护：
  - ____信息和____信息都不能被中断服务程序____。

- 现场信息的保护：
  - 通过____直接访问。
  - 通常在中断服务程序中保存到____中。
  - 由____实现。

- 断点信息的保护：
  - CPU在中断响应时自动保存到____或指定____中。
  - 由____实现。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>断点</li>
    <li>寻址</li>
    <li>现场</li>
    <li>屏蔽</li>
    <li>中断</li>
    <li>服务</li>
    <li>中断</li>
    <li>现场</li>
    <li>屏蔽</li>
    <li>中断</li>
    <li>中断</li>
    <li>现场</li>
    <li>断点</li>
    <li>破坏</li>
    <li>指令</li>
    <li>栈</li>
    <li>软件</li>
    <li>栈</li>
    <li>寄存器</li>
    <li>硬件</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;"> <span style="color: LimeGreen;">执行</span>方式

<ul>

- 步骤1~3由中断<span style="color: LightSkyBlue;">隐</span>____（____自动）完成
- 步骤4~9由中断 <span style="color: GreenYellow;">服务</span>____完成

>pro：单级中断的处理流程（2010）

>attention:

若是单重中断（或称单级中断），则在上述流程中去掉 ⑤ 和 ⑦ 即可。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>指令</li>
    <li>硬件</li>
    <li>程序</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

### <span style="color: silver;"><span style="color: RoyalBlue;">多</span><span style="color: Gold;">重</span>中断 & 中断<span style="color: green;">屏蔽</span>技术

<ul>

>pro：多重中断的中断屏蔽字相关的性质（2017、2020、2021）

#### <span style="color: silver;">中断<span style="color: green;">类型</span><span style="color: Gold;">对比

<ul>

##### <span style="color: silver;">单重中断

<ul>

- CPU执行服务程序时不响应新的更高____中断____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优先级</li>
    <li>请求</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;"><span style="color: RoyalBlue;">多</span>~（中断嵌套）

<ul>

- CPU可暂停现行服务程序处理新的更高____中断____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1d3d8beb712bf54344e3605d581c5a8d10e4944f258311c805ffa316f694c414.jpg)
图7.5单重中断和多重中断示意图

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优先级</li>
    <li>请求</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;">process

<ul>

- 主程序执行时发生<span style="color: SlateBlue;">中断</span>____1
  - <span style="color: Gold;">响应</span>____1并保存____
- 执行<span style="color: LightSkyBlue;">服务</span>程序1时 发生更<span style="color: LightSkyBlue;">高</span> <span style="color: GreenYellow;">优先</span><span style="color: Gold;">级</span>____2
  - 中止处理1 <span style="color: Gold;">响应</span>____<span style="color: gray;">2
- 以此类推直到所有____处理完毕
- 最终返回____程序继续____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>请求</li>
    <li>中断</li>
    <li>断点</li>
    <li>中断</li>
    <li>中断</li>
    <li>中断</li>
    <li>主</li>
    <li>执行</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: Gold;">条件

<ul>

- <span style="color: LightSkyBlue;">服务</span>程序中需提前设置 <span style="color: LimeGreen;">开</span><span style="color: SlateBlue;">中断</span><span style="color: LightSkyBlue;">指令</span>
- <span style="color: LightSkyBlue;">高</span>____级中断源 可中断 <span style="color: LimeGreen;">低</span>____级中断源

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优先</li>
    <li>优先</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">中断 <span style="color: LimeGreen;">屏蔽</span>技术

<ul>

- 每个中断源有一个 <span style="color: LimeGreen;">屏蔽</span> <span style="color: GreenYellow;">触发</span>器(MASK)
  - <span style="color: gray;">1</span>表示 <span style="color: LimeGreen;">屏蔽</span>该中断源____
  - 0表示可以正常____
- 所有屏蔽触发器 → ____字 <span style="color: LimeGreen;">R</span>
<br>

【例7.3】
- 问题分析：
  - 中断源：____、____、____、____。
  - 硬件排队优先次序：____ > ____ > ____ > ____。
  - 需改变的中断处理次序：____ > ____ > ____ > ____。
  - 目标：写出每个中断源对应的____字。

- 解答思路：
  - 根据新的中断处理次序确定____字。
  - 最高____级的中断源可以屏蔽所有其他____，不能中断____。
  - 次高____级的中断源只能被更高____级的中断源____。

- 屏蔽字计算：
  - D的屏蔽字：____（最高优先级，屏蔽所有其他中断）。
  - A的屏蔽字：____（次高优先级，只能被D中断）。
  - C的屏蔽字：____（只能被D和A中断）。
  - B的屏蔽字：____（只能被D、A和C中断）。

- 结果：
  - 屏蔽字汇总表：表7.1。

表7.1中断源对应的中断屏蔽字
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c51e363202806c9ac2a1ac35db7cc75e6bd5d697fae775c075ea07369b546fcc.jpg)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>请求</li>
    <li>请求</li>
    <li>屏蔽</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>D</li>
    <li>A</li>
    <li>C</li>
    <li>B</li>
    <li>屏蔽</li>
    <li>屏蔽</li>
    <li>优先</li>
    <li>中断</li>
    <li>自身</li>
    <li>优先</li>
    <li>优先</li>
    <li>中断</li>
    <li>1111</li>
    <li>1110</li>
    <li>1101</li>
    <li>1100</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">程序中断方式的<span style="color: gray;">局限

<ul>

- 宏观优点： <span style="color: GreenYellow;">克服</span>CPU <span style="color: Gold;">等待</span>，提高____率
- 微观缺点：
  - 处理____时需暂停____程序
  - ____设备频繁交换信息时需不断打断____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>利用</li>
    <li>中断</li>
    <li>原</li>
    <li>高速</li>
    <li>CPU</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

## <span style="color: silver;"><span style="color: DarkRed;">DMA</span>方式

<ul>

direct memory access

- 特点：
  - 硬件控制特点：
    - 完全由____控制成组____传送

  - 效率优势：
    - 具有程序____方式优点
    - ____与外设____工作

  - 数据传输特点：
    - 外设与____间有____数据通路
    - 信息传送不经过____

  - 处理开销：
    - 无需____恢复CPU____
- 适用场景：
  - ____、____、____、____等高速设备
  - 大批量____传送
- ____开销较大
- ____仅用于故障和正常传送结束处理

### <span style="color: silver;">concept

<ul>

#### <span style="color: Gold;">特点

<ul>

- <span style="color: Gold;">主存</span>和<span style="color: DarkRed;">DMA</span> <span style="color: GreenYellow;">接口</span>之间有直接<span style="color: LightSkyBlue;">数据</span>____:
        - 数据传送特点：
     - 数据传送路径：
       - 传送数据不需经过____
     - 程序执行：
       - 不必中断____程序
     - <span style="color: LimeGreen;">并行</span>工作能力：
          - I/O与____并行工作
          - ____和传送并行工作
- 特点：
  - 主存与CPU关系：
    - ____联系脱钩
    - 可同时被____和____访问

  - 数据传送特点：
    - 由____电路直接实现块传送
    - 需在主存开辟专用____区
    - 传送____快
    - ____和外设可并行工作

  - 程序处理要求：
    - 需要程序____处理
    - 需要____后处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>通路</li>
    <li>CPU</li>
    <li>现行</li>
    <li>主机</li>
    <li>程序</li>
    <li>固定</li>
    <li>CPU</li>
    <li>外设</li>
    <li>硬件</li>
    <li>缓冲</li>
    <li>速度</li>
    <li>CPU</li>
    <li>预</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">DMA控制器的 <span style="color: Gold;">组成

<ul>

- 基本功能：
  - 接受外设____请求并向____发出____请求
  - 接管____控制权进入____操作周期
  - 确定和修改传送数据的____地址及____
  - 规定传送____并执行____传送
  - 向____报告操作____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8522cd40675adcad448679876eac85a3951fa26a1116a5b156080131b7de7bcf.jpg)
图7.6简单的DMA控制器

- 主要组成部件：

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>DMA</li>
    <li>CPU</li>
    <li>总线</li>
    <li>总线</li>
    <li>DMA</li>
    <li>主存</li>
    <li>长度</li>
    <li>方向</li>
    <li>数据</li>
    <li>CPU</li>
    <li>结束</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

---

以上内容严格遵循您的要求，挖空了定义中的关键词、公式定理和算法的关键步骤，并将答案以HTML折叠块形式列于每个次级标题下方。折叠块使用`<ul>`和`<li>`标签，并保留空行以支持Markdown公式渲染。原文档的结构和内容未做任何删减或修改。

以下是按照要求对提供的Markdown文档进行挖空处理后的结果，包含Markdown和HTML折叠块格式。挖空的关键词、公式和关键步骤已在下方折叠块中列出。

---

### 主存地址计数器：存放____数据的主存地址

<ul>

- 传送长度计数器：记录传送数据____
- 数据缓冲寄存器：____每次传送数据
- DMA请求触发器：响应I/O设备____信号
- "控制/状态"逻辑：指定传送____和参数修改
- 中断机构：数据传送完毕后请求____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>交换</li>
    <li>总长度</li>
    <li>暂存</li>
    <li>准备</li>
    <li>方向</li>
    <li>中断</li>
  </ul>
</details>
</div>

</ul>

#### 传送方式

<ul>

##### 停止CPU访存

<ul>

- 工作过程：
  - I/O设备发出____请求
  - CPU放弃____控制权
  - DMA传送完成后归还____

![图7.7停止CPU访存](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6ec983e624318edc13175044b2d5cebc2b11509fa61e7d5aa190149951d0aa44.jpg)

- 优缺点：
  - 优点：控制____，适合高速I/O设备
  - 缺点：CPU基本处于____状态

<div>
<details>
  <summary> </summary>
  <ul>
    <li>DMA</li>
    <li>总线</li>
    <li>控制权</li>
    <li>简单</li>
    <li>不工作</li>
  </ul>
</details>
</div>

</ul>

##### 周期挪用

<ul>

>pro：周期挪用的特点及挪用次数分析（2012、2020、2022）

- 工作特点：
  - I/O访存____高于CPU
  - ____传送方式
  - 传送完立即释放____
- 三种情况：
  - CPU不在访存时无____
  - CPU正在访存需等待____结束
  - 同时请求时CPU暂时放弃____

![图7.8周期挪用](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/f1cb1aeae481f0ba9014acc77c9a136f81250ae56fe2f1afdbaaae40727dad9f.jpg)

- 优缺点：
  - 优点：兼顾I/O传送和____效率
  - 缺点：频繁申请归还____控制权

<div>
<details>
  <summary> </summary>
  <ul>
    <li>优先级</li>
    <li>单字</li>
    <li>总线</li>
    <li>冲突</li>
    <li>周期</li>
    <li>控制权</li>
    <li>系统</li>
    <li>总线</li>
  </ul>
</details>
</div>

</ul>

##### DMA CPU交替访存

<ul>

- 工作方式：
  - CPU工作周期 → ____时间片
  - CPU和DMA____访存
  - 适用于 ____周期 > ____周期

![图7.9DMA与CPU交替访存](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ffcf3f4a552e1dfafa466c4a36585fb69c056f358e0b653e960ca62e1a3344ba.jpg)

- 优缺点：
  - 优点：无需申请归还____，传送速率高
  - 缺点：硬件逻辑____

>pro：DMA方式的效率分析及相关计算（2011、2018）

- 【例7.4】问题分析：
  - 计算机主频：____ MHz。
  - CPI（每条指令周期数）：____。
  - 外设数据率：____ MB/s。
  - I/O接口数据端口大小：____位。
  - DMA方式，每次DMA传送块大小：____B。
  - DMA预处理和后处理总时钟周期数：____。
  - 问题：CPU用于该外设I/O的时间占CPU总时间的____是多少？

- 解答思路：
  - 计算外设每秒的____次数。
  - 确定DMA方式下CPU处理的____时钟周期数。
  - 计算CPU用于外设I/O的____时间。
  - 计算CPU用于外设I/O的时间占CPU总时间的____。

- 计算过程：
  - 外设每秒DMA次数：40MB/s ÷ 1000B = ____次。
  - CPU用于外设I/O的总时钟周期数：40000次 × 500周期/次 = ____个时钟周期。
  - CPU用于外设I/O的时间占CPU总时间的百分比：2 × 10^7 ÷ 500M = ____%。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>两个</li>
    <li>轮流</li>
    <li>CPU</li>
    <li>主存</li>
    <li>总线</li>
    <li>复杂</li>
    <li>500</li>
    <li>4</li>
    <li>40</li>
    <li>32</li>
    <li>1000</li>
    <li>500</li>
    <li>百分比</li>
    <li>DMA</li>
    <li>总</li>
    <li>总</li>
    <li>百分比</li>
    <li>40000</li>
    <li>2 × 10^7</li>
    <li>4</li>
  </ul>
</details>
</div>

</ul>

</ul>

### DMA的 传送过程

<ul>

>pro：DMA方式的传送过程（2019）

#### concept

<ul>

图7.10所示为DMA的数据传送流程，分为
- ____处理
- ____传送
- ____处理

![图7.10DMA的传送流程](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a3b3e6b4a23a187f89eda625719dd33923705cfd841a0f99f9153f246e978d6b.jpg)

<div>
<details>
  <summary> </summary>
  <ul>
    <li>预</li>
    <li>数据</li>
    <li>后</li>
  </ul>
</details>
</div>

</ul>

#### steps

<ul>

##### 预处理

<ul>

- CPU完成必要____工作
  - 初始化DMA控制器中的有关____
  - 设置传送____
  - 测试并____设备
- 后续流程
  - CPU继续执行____程序
  - I/O设备准备好数据时
    - 向DMA控制器发送____请求
    - DMA控制器向CPU发出____请求

<div>
<details>
  <summary> </summary>
  <ul>
    <li>准备</li>
    <li>寄存器</li>
    <li>方向</li>
    <li>启动</li>
    <li>原</li>
    <li>DMA</li>
    <li>总线</li>
  </ul>
</details>
</div>

</ul>

##### 数据 传送

<ul>

- 传送特点
  - 以____为基本传送单位
  - 通过____实现数据输入/输出操作
  - 完全由____(硬件)控制

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数据块</li>
    <li>循环</li>
    <li>DMA</li>
  </ul>
</details>
</div>

</ul>

##### 后处理

<ul>

- step:
  - DMA控制器向CPU发送____请求
  - CPU执行____服务程序
    - ____数据(出错则转诊断程序)
    - 其他后处理工作
- 效率:
  - 整个数据块传送过程不需____参与
  - CPU仅在____和结束处理时介入
  - CPU用于I/O的____非常小

<div>
<details>
  <summary> </summary>
  <ul>
    <li>中断</li>
    <li>中断</li>
    <li>校验</li>
    <li>CPU</li>
    <li>初始化</li>
    <li>开销</li>
  </ul>
</details>
</div>

</ul>

</ul>

### DMA方式 & 中断方式的区别

<ul>

>pro：中断方式与DMA方式的区别（2013、2023）

- 程序切换与现场保护
  - 中断方式需要程序____，需保护和恢复____
  - DMA方式不中断现行____，无需保护现场
- 响应时机
  - 中断请求：仅在指令____时响应
  - DMA请求：可在任意____周期结束时响应
- CPU干预程度
  - 中断传送需要CPU____
  - DMA传送不需CPU____，传输速率高
- 优先级关系
  - DMA请求____高于中断请求
- 处理能力
  - 中断方式可处理____事件
  - DMA方式仅用于____数据传送
- 传送方式
  - 中断方式：____传送
  - DMA方式：____传送

>pro：DMA与CPU请求总线的优先级对比（2012、2022）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>切换</li>
    <li>现场</li>
    <li>程序</li>
    <li>执行结束</li>
    <li>机器</li>
    <li>干预</li>
    <li>干预</li>
    <li>优先级</li>
    <li>异常</li>
    <li>大批</li>
    <li>程序</li>
    <li>硬件</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

---

以上内容严格遵循您的要求，保留了原有目录结构，挖空了关键词、公式和关键步骤，并在每个次级标题下用HTML折叠块列出答案。折叠块使用`<ul>`和`<li>`标签，并确保Markdown公式渲染正常。

