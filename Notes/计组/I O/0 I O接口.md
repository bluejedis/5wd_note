 <span style="color: silver;">

#  <span style="color: silver;">I/O<span style="color: DarkRed;">地址</span>
  -  通过不同<span style="color: DarkRed;">地址</span><span style="color: LightSkyBlue;">码</span> 区分 <span style="color: orange;">存储</span>单元和<span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>设备
  -  <span style="color: Gold;">逻辑</span>地址 & 物理~
       - 物理地址
         - 外部连接使用
         - 唯一性
         - 与地址总线对应
         - <span style="color: gray;">实际</span>内存地址
       -  <span style="color: Gold;">逻辑</span>地址
            - 内部和编程使用
            - 非唯一性
            - 用于逻辑段管理
            - <span style="color: gray;">程序员</span>使用

#  <span style="color: silver;">I/O <span style="color: GreenYellow;">接口
  - 基本功能
    - <span style="color: DarkRed;">选址</span>功能
    - 传送<span style="color: gray;">命令</span>功能 
    - 传送<span style="color: LightSkyBlue;">数据</span>功能 
    - 反映I/O设备工作 <span style="color: Gold;">状态</span>功能 
- <span style="color: LightSkyBlue;">数据</span><span style="color: gray;">宽度
  - <span style="color: orange;">主机</span>侧~ & <span style="color: LightSkyBlue;">设备</span>侧~ 不一定相同
- 与I/O  <span style="color: Gold;">bus</span>
  - <span style="color: LightSkyBlue;">数据</span> <span style="color: Gold;">线</span>上传输的信息
  -  I/O接口中的 <span style="color: LightSkyBlue;">命令</span><span style="color: gray;">字</span>、 <span style="color: Gold;">状态</span><span style="color: gray;">字</span>  
  -  <span style="color: DarkRed;">中断</span><span style="color: green;">类型</span><span style="color: gray;">号</span>
- ~ 中的 <span style="color: LimeGreen;">R</span>

## <span style="color: LightSkyBlue;">端口</span>

- I/O <span style="color: GreenYellow;">接口</span>中 CPU可访问的 <span style="color: LimeGreen;">R</span>
  -  <span style="color: Gold;">状态</span><span style="color: LightSkyBlue;">端口</span>  <span style="color: LimeGreen;">控制</span><span style="color: LightSkyBlue;">端口</span> can 合用同一个 <span style="color: LimeGreen;">R</span>

##  <span style="color: silver;">I/O <span style="color: GreenYellow;">接口</span>与<span style="color: LightSkyBlue;">设备</span>区分
  - <span style="color: gray;">磁盘</span> <span style="color: GreenYellow;">驱动</span>器
    - 存储装置
    - 功能
      - 读取磁盘中的数据
      - 传递给处理器
    - 特点
      - 是 <span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span> <span style="color: LightSkyBlue;">设备
    - 不属于I/O <span style="color: GreenYellow;">接口</span>
  - I/O接口包括:
    - <span style="color: gray;">打印机</span>适配器
    - <span style="color: LightSkyBlue;">网络</span>控制器
    - 可 <span style="color: GreenYellow;">编程</span><span style="color: DarkRed;">中断</span>控制器
    - 功能：负责特定的I/O操作和中断处理 

<br>

# <span style="color: deepskyblue;">编址</span>
<ul>

##  <span style="color: silver;"><span style="color: gray;">统一</span>编址
 - <span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>设备 & 内存use <span style="color: Gold;">相同</span>的<span style="color: DarkRed;">地址</span>空间 ← through访问 <span style="color: Gold;">内存</span>的指令 直接访问I/O设备
   -  <span style="color: LimeGreen;">访</span><span style="color: Gold;">存</span>~ 也可访问I/O设备
  -  <span style="color: Gold;">特点</span>
       - CPU<span style="color: gray;">无需</span> <span style="color: LightSkyBlue;">专门</span>I/O指令
       - use统一访存指令访问I/O端口
##   <span style="color: silver;"><span style="color: Gold;">独立</span>编址
-  具有专门I/O指令的计算机系统中，<span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>设备have独立的<span style="color: DarkRed;">地址</span>空间，<span style="color: gray;">与</span> <span style="color: GreenYellow;">内存</span><span style="color: DarkRed;">地址</span>空间分开
- <span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>端口地址 &  <span style="color: Gold;">主存</span>地址 might相同
##  <span style="color: silver;">I/O<span style="color: LightSkyBlue;">指令</span>
 -  <span style="color: Gold;">特点</span>
      - <span style="color: LightSkyBlue;">指令</span>系统一部分
      - <span style="color: gray;">机器</span>指令的一<span style="color: green;">类</span>
      -  <span style="color: Gold;">格式</span>与<span style="color: gray;">通用</span>指令 <span style="color: Goldenrod;">不同</span>
- <span style="color: LightSkyBlue;">数据</span> <span style="color: LimeGreen;">传送</span> 通常发生在
  - 通用 <span style="color: LimeGreen;">R</span> & I/O<span style="color: LightSkyBlue;">端口</span>
</ul>

# <span style="color: DarkRed;">中断

- 打印机~
  - 打印控制 <span style="color: GreenYellow;">接口</span> 和 打印机之间
    - 不交换 <span style="color: DarkRed;">中断</span> <span style="color: LimeGreen;">请求 <span style="color: Gold;">信号</span>

#  <span style="color: LightSkyBlue;">通路 <span style="color: silver;">& 磁盘
- <span style="color: LightSkyBlue;">通路</span>
  - <span style="color: gray;">主机</span>&外设
    -  CPU和主存
    -  I/O  <span style="color: Gold;">bus</span>—I/O <span style="color: GreenYellow;">接口</span>
    -  <span style="color: orange;">通信</span><span style="color: Gold;">bus</span>(电缆)一外设
- 磁盘
  - 驱动器向盘片磁道 记录数据时 采用 <span style="color: Gold;">串行</span>方式