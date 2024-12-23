 <span style="color: silver;">

-  通过不同<span style="color: DarkRed;">地址</span>码区分存储单元和I/O设备

- I/O <span style="color: GreenYellow;">接口
  - 基本功能
    - <span style="color: DarkRed;">选址</span>功能
    - 传送<span style="color: gray;">命令</span>功能 
    - 传送<span style="color: LightSkyBlue;">数据</span>功能 
    - 反映I/O设备工作 <span style="color: Gold;">状态</span>功能 

- ~ 中的 <span style="color: LimeGreen;">R</span>

-  <span style="color: GreenYellow;">接口</span> & <span style="color: LightSkyBlue;">端口</span>
  
<br>

- <span style="color: deepskyblue;">编址</span>
  - <span style="color: gray;">统一</span>编址，
    - <span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>设备 & 内存use <span style="color: Gold;">相同</span>的<span style="color: DarkRed;">地址</span>空间 ← through访问 <span style="color: Gold;">内存</span>的指令 直接访问I/O设备
      -  <span style="color: LimeGreen;">访</span><span style="color: Gold;">存</span>~ 也可访问I/O设备
  -  <span style="color: Gold;">特点
       - CPU<span style="color: gray;">无需</span> <span style="color: LightSkyBlue;">专门</span>I/O指令
       - use统一访存指令访问I/O端口
  -  <span style="color: Gold;">独立</span>编址
       -  具有专门I/O指令的计算机系统中，<span style="color: LightSkyBlue;">I</span>/ <span style="color: Gold;">O</span>设备have独立的<span style="color: DarkRed;">地址</span>空间，<span style="color: gray;">与</span> <span style="color: GreenYellow;">内存</span><span style="color: DarkRed;">地址</span>空间分开

  - I/O<span style="color: LightSkyBlue;">指令</span>
    -  <span style="color: Gold;">特点</span>
         - <span style="color: LightSkyBlue;">指令</span>系统一部分
         - <span style="color: gray;">机器</span>指令的一<span style="color: green;">类</span>
         -  <span style="color: Gold;">格式</span>与<span style="color: gray;">通用</span>指令 <span style="color: Goldenrod;">不同</span>

