以下是按照您的要求对提供的 Markdown 文档进行挖空处理后的结果，关键词、公式定理和关键步骤已设置为空缺，并在每个次级标题下使用 HTML 的 `<details>` 折叠块列出挖去的答案。内容保持原有结构，简洁明了，适合自我考察和反复记忆。

---

```markdown
<span style="color: silver;">

#  <span style="color: silver;">above 

<ul>

##  <span style="color: silver;">【考纲内容】  

<ul>

（一）数制与编码____计数制及其相互转换；定点数的____表示  

（二）运算方法和运算____  

____运算部件：加法器：算术逻辑单元（ALU）加/减运算：____加/减运算器：____位的生成乘/除运算：乘/除法运算的____原理：乘法电路和除法电路的____结构  

（三）____的表示和运算  

____整数的表示和运算：____整数的表示和运算  

（四）____数的表示和运算  

____数的表示：____标准：____数的加/减运算  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>进位</li>
    <li>编码</li>
    <li>电路</li>
    <li>基本</li>
    <li>补码</li>
    <li>标志</li>
    <li>基本</li>
    <li>基本</li>
    <li>整数</li>
    <li>无符号</li>
    <li>有符号</li>
    <li>浮点</li>
    <li>浮点</li>
    <li>IEEE754</li>
    <li>浮点</li>
  </ul>
</details>
</div>

##  <span style="color: silver;">【复习提示】  

<ul>

- 本章内容概述：
  - 内容较为____。
  - 计算机中数的表示和运算方法与日常生活中的表示和运算方法____，理解难度较大。

- 考研考查重点：
  - C语言中的____、short、int、long、float、double类型的表示。
  - 这些类型的____、____判断。
  - ____类型转换和____类型转换。
  - IEEE754____数的表示。
  - ____数的运算。

- 学习建议：
  - 这些内容都是需要____掌握的知识点。

在学习本章时，请读者思考以下问题：  

1）在计算机中，为什么要采用____进制来表示数据？2）计算机在字长足够的情况下能够____地表示每个数吗？若不能，请举例说明3）字长相同的情况下，____数和____数的表示范围与精度有什么区别？  

请读者在本章的学习过程中寻找答案，本章末尾会给出参考答案。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>繁杂</li>
    <li>不同</li>
    <li>unsigned</li>
    <li>运算</li>
    <li>溢出</li>
    <li>隐式</li>
    <li>强制</li>
    <li>浮点</li>
    <li>浮点</li>
    <li>牢固</li>
    <li>二</li>
    <li>精确</li>
    <li>浮点</li>
    <li>定点</li>
  </ul>
</details>
</div>

</ul>

#  <span style="color: silver;">0 数制与<span style="color: deepskyblue;">编码  

<ul>

##  <span style="color: silver;">进位计数制及其相互 <span style="color: LimeGreen;">转换</span>  

<ul>

>pro：采用二进制编码的原因（2018）  

###  <span style="color: silver;">二进制编码的原因

<ul>

- ____状态
  - use有____稳定状态的物理器件:
    - 制造____低
      - ____电平表示0和1
      - 电荷____极性表示0和1
-  ____
     - 1 "____"
     - 0 "____" 
     - 便于实现
       - ____运算
       - 程序____判断
- 规则____
  - ____、____规则简单
  - ____门电路 实现算术运算

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>两种</li>
    <li>两个</li>
    <li>成本</li>
    <li>高低</li>
    <li>正负</li>
    <li>逻辑</li>
    <li>真</li>
    <li>假</li>
    <li>逻辑</li>
    <li>逻辑</li>
    <li>简单</li>
    <li>编码</li>
    <li>运算</li>
    <li>逻辑</li>
  </ul>
</details>
</div>

###  <span style="color: silver;">进位 <span style="color: LimeGreen;">计数</span>法

<ul>

####   <span style="color: silver;"><span style="color: LightSkyBlue;">基</span>数 & <span style="color: gray;">位</span><span style="color: Gold;">权</span>

<ul>

- ____数
  - 每个数位所用到的不同数码的____
  - 十进制的基数为____，"____"
- ____权
  - 每个数码所表示的数值 = 该数码本身 × 所在数位的____
-  ____进制数
     - $K_{n}____^{n}+K_{n-1}____^{n-1}+\dots+K_{0}____^{0}+K_{-1}____^{-1}+\dots+K_{-m}____^{-m}=\sum_{i=n}^{-m}K_{i}____^{i}$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>基</li>
    <li>个数</li>
    <li>10(0~9)</li>
    <li>逢十进一</li>
    <li>位</li>
    <li>位权</li>
    <li>r</li>
    <li>r</li>
    <li>r</li>
    <li>r</li>
    <li>r</li>
    <li>r</li>
  </ul>
</details>
</div>

####  <span style="color: silver;"><span style="color: LightSkyBlue;">二</span>  <span style="color: Gold;">八</span>  <span style="color: LimeGreen;">十六</span> 进制

<ul>

- ____
  - 基数为____，只有____两种数码
  - "____"
  - 位权为____
-  ____
     - 基数为____，有____共8个数码
     - "____"
     - r=____，3位二进制对应1位八进制
-  ____
     - 基数为____，有____共16个数码
     - "____"
     - r=____，4位二进制对应1位十六进制

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二</li>
    <li>2</li>
    <li>0和1</li>
    <li>逢二进一</li>
    <li>2^i</li>
    <li>八</li>
    <li>8</li>
    <li>0~7</li>
    <li>逢八进一</li>
    <li>8=2^3</li>
    <li>十六</li>
    <li>16</li>
    <li>0~9、A~F</li>
    <li>逢十六进一</li>
    <li>16=2^4</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;">  <span style="color: LimeGreen;">转换

<ul>

#### <span style="color: silver;"><span style="color: LightSkyBlue;">二</span>  <span style="color: Gold;">八</span>  <span style="color: LimeGreen;">十六</span> 

<ul>

- method:
  - 以____为界
    - ____部分：向左分组
    - ____部分：向右分组
  - 八进制：____位一组
  - 十六进制：____位一组
  - 必要时____
<br>

【例2.1】将二进制数1111000010.01101分别转换为____数和____数。  

解：  

高位补0，凑足3位分界点低位补0，凑足3位↓ ↓ ↓ 001 111 000 010 011 010  

所以，对应的八进制数为 $(____)_{8}\!=\!(1111000010.01101)_{2}\!\circ$  

所以，对应的十六进制数为 $(____)_{16}\!=\!(1111000010.01101)_{2}.$  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>.</li>
    <li>整数</li>
    <li>小数</li>
    <li>3</li>
    <li>4</li>
    <li>补0</li>
    <li>八进制</li>
    <li>十六进制</li>
    <li>1702.32</li>
    <li>3C2.68</li>
  </ul>
</details>
</div>

####   <span style="color: silver;"><span style="color: LimeGreen;">r</span> -> <span style="color: gray;">十

<ul>

- 按____展开相加法
  - 各位数码与____相乘后相加

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>权</li>
    <li>权值</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: LimeGreen;">r</span> <- <span style="color: gray;">十

<ul>

>pro：十进制小数转换为二进制小数（2021、2022）  

- 基数____法
  - ____部分：____基取____法
  - ____部分：____基取____法

【例2.2】将十进制数123.6875转换成____数。  

解：  

- ____基取____（整数部分）：
  - 步骤：
    - 整数部分____
    - 最____取得的余数为数的最____位
    - 最____取得的余数为数的最____位
  - 规律：
    - ____，先余为低，后余为高
  - 终止条件：
    - ____时结束
  

![image](https://bluejedis.github.io/picx-images-hosting/test/image.58hfjs247f.webp)

因此整数部分 $123\,{=}\,____,$  

-  ____基取____（小数部分）：
     - 计算步骤：
       - 小数部分____
       - 最____取得的整数为数的最____位
       - 最____取得的整数为数的最____位
     - 规律：
       - ____，先整为高，后整为低
     - 终止条件：
       - ____时结束
       - 或满足____时结束
小数部分：  

![image](https://bluejedis.github.io/picx-images-hosting/test/image.32i0y0eg14.webp) 

因此小数部分 $0.6875\!=\!____$ ，所以 $123.6875\!=\!____.$  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>乘除</li>
    <li>整数</li>
    <li>除</li>
    <li>余</li>
    <li>小数</li>
    <li>乘</li>
    <li>整</li>
    <li>二进制</li>
    <li>除</li>
    <li>余</li>
    <li>除基取余</li>
    <li>先</li>
    <li>低</li>
    <li>后</li>
    <li>高</li>
    <li>除基取余</li>
    <li>商为0</li>
    <li>(1111011)_{2}</li>
    <li>乘</li>
    <li>整</li>
    <li>乘基取整</li>
    <li>先</li>
    <li>高</li>
    <li>后</li>
    <li>低</li>
    <li>乘基取整</li>
    <li>乘积为1.0</li>
    <li>精度要求</li>
    <li>(0.1011)_{2}</li>
    <li>(1111011.1011)_{2}</li>
  </ul>
</details>
</div>

> attention:
- 计算机中整数与小数的表示差异：
  - 整数可以____表示。
  - 小数：
    - ____性：
      - 不是每个十进制小数都能____用二进制表示
      - 例如：____无法精确表示
    - 转换：
      - 任意二进制小数都可以用____表示

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>连续</li>
    <li>离散</li>
    <li>准确</li>
    <li>0.3</li>
    <li>十进制小数</li>
  </ul>
</details>
</div>

</ul>

</ul>

##  <span style="color: silver;"> <span style="color: LimeGreen;">定</span>点数的编码表示  

<ul>

###  <span style="color: silver;"> <span style="color: Gold;">真</span>值和<span style="color: LightSkyBlue;">机器</span>数

<ul>

- ____值
  - 日常生活中使用____表示
    - 如+15、-8等
    - 正号可____
  - 是机器数所代表的____值

- ____数
  - 将数的____和____部分一起编码
  - ____数字化
    - "____"表示"正"
    - "____"表示"负" 
  - 常用表示法
    - ____码
    - ____码
    - ____码
  - 示例：0,101表示____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>真</li>
    <li>正负号</li>
    <li>省略</li>
    <li>实际</li>
    <li>机器</li>
    <li>符号</li>
    <li>数值</li>
    <li>符号</li>
    <li>0</li>
    <li>1</li>
    <li>原</li>
    <li>补</li>
    <li>反</li>
    <li>+5</li>
  </ul>
</details>
</div>

###  <span style="color: silver;"><span style="color: LightSkyBlue;">机器</span>数的<span style="color: gray;">定点</span>表示

<ul>

- 数据格式分类
  - ____表示
  - ____表示

- 现代计算机使用情况
  - ____整数表示整数
  - ____小数表示浮点数的尾数部分
  - ____表示浮点数的阶码部分

####  <span style="color: silver;"> <span style="color: gray;">定点</span> <span style="color: GreenYellow;">小数</span>

<ul>

- ____小数
- 小数点位置____
  - 在____位之后
  - 有效数值部分____位之前
- 数据形式：X=____
  - x₀为____位
  - x₁~xₓ是数值的____部分(尾数)
  - x₁为____有效位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>定点</li>
    <li>浮点</li>
    <li>补码</li>
    <li>原码</li>
    <li>移码</li>
    <li>纯</li>
    <li>约定</li>
    <li>符号</li>
    <li>最高</li>
    <li>x₀.x₁x₂...xₓ</li>
    <li>符号</li>
    <li>有效</li>
    <li>最高</li>
  </ul>
</details>
</div>

####  <span style="color: silver;"><span style="color: gray;">定点</span> 整数

<ul>

- 小数点位置____
  - 在有效数值部分____位之后
- 数据形式：X=____
  - x₀为____位
  - x₁~xₙ是____
  - xₙ为____有效位

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4dd1fb5972f1ed936d1fc0ddfb38f8f045ee71a4c4d74334f59f8240e1e90456.jpg)  
图2.2定点整数表示  

- note:
  - 机器内部数据:
    - 没有实际____存在
    - 小数点位置____
      - 完全由____约定
    - 数据处理特点
      - ____和____时无需区分小数或整数
      - 只需关注两个要素
        - ____位
        - ____位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>约定</li>
    <li>最低</li>
    <li>x₀x₁x₂...xₙ</li>
    <li>符号</li>
    <li>尾数</li>
    <li>最低</li>
    <li>小数点</li>
    <li>特性</li>
    <li>人为</li>
    <li>编码</li>
    <li>运算</li>
    <li>符号</li>
    <li>数值</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"> <span style="color: GreenYellow;">原</span>码、 <span style="color: Gold;">补</span>码、 <span style="color: GreenYellow;">反</span>码、 <span style="color: LimeGreen;">移</span>码

<ul>

#### <span style="color: silver;"> <span style="color: GreenYellow;">原</span>码

<ul>

- 定义特点
  - ____位表示符号
  - 其余位表示____值
- 数学定义
$$
[x]_{\text{原}} = 
\begin{cases} 
____, & 0 \leq x < 2^n \\ 
____, & -2^n < x \leq 0 
\end{cases}
$$
(x是____，字长为____)

- 示例
  - x₁=____，x₂=____(8位)
    - [x₁]ᵣ=____
    - [x₂]ᵣ=____
- 表示范围
  - ____(关于原点对称)

>attention： 
零的原码表示有____和____两种形式，即[+0]ᵣ=____和[-0]ᵣ=____.

- 优缺点
  - 优点
    - 与____对应关系简单直观
    - 转换____
    - ____运算比较简便
  - 缺点
    - 0表示____
    - ____运算复杂

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>最高</li>
    <li>绝对</li>
    <li>0, x</li>
    <li>2^n - x = 2^n + |x|</li>
    <li>真值</li>
    <li>n+1</li>
    <li>+1110</li>
    <li>-1110</li>
    <li>0,0001110</li>
    <li>1,0001110</li>
    <li>-(2ⁿ-1)≤x≤2ⁿ-1</li>
    <li>正零</li>
    <li>负零</li>
    <li>00000000</li>
    <li>10000000</li>
    <li>真值</li>
    <li>简单</li>
    <li>乘除</li>
    <li>不唯一</li>
    <li>加减</li>
  </ul>
</details>
</div>

####  <span style="color: silver;"><span style="color: Gold;">补</span>码

<ul>

- 基本特点
  - ____运算统一用加法
  - 正数补码与____相同
  - 负数补码等于____与____之差
- 数学定义
$$
[x]_{\text{补}} = 
\begin{cases} 
____, & 0 \leq x < 2^n \\
____, & -2^n \leq x < 0 
\end{cases}
(____ \; 2^{n+1})
$$
- 示例
  - x₁=____，x₂=____(8位)
    - [x₁]补=____
    - [x₂]补=____

>pro：补码的表示范围（2010、2013、2014、2022）

- 表示范围
  - ____
  - 比原码多表示____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>加减</li>
    <li>原码</li>
    <li>模</li>
    <li>绝对值</li>
    <li>0, x</li>
    <li>2^{n+1} + x = 2^{n+1} - |x|</li>
    <li>mod</li>
    <li>+1010</li>
    <li>-1101</li>
    <li>0,0001010</li>
    <li>1,1110011</li>
    <li>-2ⁿ≤x≤2ⁿ-1</li>
    <li>"-2ⁿ"</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;">+0 -1 2ⁿ-1 -2ⁿ ' ~

<ul>

- [+0]补=[-0]补=____
  - <span style="font-size: 12px;"> 含符号位共____个0,说明0的补码表示是____。
- [-1]补=____
  - <span style="font-size: 12px;"> (含符号位共____个1)
- [2ⁿ-1]补=____
  - <span style="font-size: 12px;"> n+1位补码能表示的____整数
- [-2ⁿ]补=____
  - <span style="font-size: 12px;"> ..min

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>0,00...0</li>
    <li>n+1</li>
    <li>唯一的</li>
    <li>1,11...1</li>
    <li>n+1</li>
    <li>0,11...1</li>
    <li>最大</li>
    <li>1,00...0</li>
  </ul>
</details>
</div>

#####  <span style="color: GreenYellow;">模</span><span style="color: silver;">运算

<ul>

- 基本概念
  - A≡B(____ M): A、B各除以M → ____相同
- 补码运算特点
  - [A]补-[B]补=____
  - M-[B]补=____
  - 可用____实现减法

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>mod</li>
    <li>余数</li>
    <li>[A]补+M-[B]补</li>
    <li>[-B]补</li>
    <li>加法</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"> <span style="color: Gold;">补</span>码与<span style="color: LightSkyBlue;">真值</span>转换

<ul>

>pro：补码和真值的相互转换（2020、2023）

- 真值转补码
  - 正数：与____相同
  - 负数：符号位取____，其余位"____"
- 补码转真值
  - 符号位为____：与原码相同
  - 符号位为____：负数，"____"

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原码</li>
    <li>1</li>
    <li>取反加1</li>
    <li>0</li>
    <li>1</li>
    <li>取反加1</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"><span style="color: gray;">变形

<ul>

- 定义
  - ____符号位的补码表示
  - 又称____补码
    - $$
  [x]_{\text{变补}}=\begin{cases}____,&0\leqslant x<2^{n-1}\\____,&-2^{n-1}\leqslant x<0\end{cases}(\bmod2^{n+1})$$


- 表示方式
  - ____表示正
  - ____表示负
- 用途：用于____算术运算

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>双</li>
    <li>模4</li>
    <li>00,x</li>
    <li>2^{n+1}+x=2^{n+1}-|x|</li>
    <li>00</li>
    <li>11</li>
    <li>ALU</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: silver;"> <span style="color: GreenYellow;">反</span>码(了解)

<ul>

- concept
  - 正数：与____相同
  - 负数：补码末位____
- 缺点
  - 0表示____
  - 表示范围比补码少一个____负数
- 用途：主要用作____表示形式

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原码</li>
    <li>-1</li>
    <li>不唯一</li>
    <li>最小</li>
    <li>中间</li>
  </ul>
</details>
</div>

####   <span style="color: silver;"><span style="color: green;">移</span>码

<ul>

- concept
  - represent浮点数____
  - only表示____
  - 在____上+偏置值(通常为____)
- 数学定义
  - [x]移=____，____
- 示例
  - x₁=____，x₂=____(8位)
    - [x₁]移=____
    - [x₂]移=____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>阶码</li>
    <li>整数</li>
    <li>真值</li>
    <li>2ⁿ</li>
    <li>2ⁿ+x</li>
    <li>-2ⁿ≤x<2ⁿ</li>
    <li>+10101</li>
    <li>-10101</li>
    <li>1,0010101</li>
    <li>0,1101011</li>
  </ul>
</details>
</div>

#####  <span style="color: Gold;">特点

<ul>

- 零表示____：[+0]移=[-0]移=____
- 与补码关系：____位取反即可相互转换
- 边界值特点
  - 全0对应____值____
  - 全1对应____值____
- 保持数据原有____顺序

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>唯一</li>
    <li>100...0</li>
    <li>符号</li>
    <li>最小</li>
    <li>-2ⁿ</li>
    <li>最大</li>
    <li>2ⁿ-1</li>
    <li>大小</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: Gold;">compare

<ul>

>pro：补码大小的判断（2015）

- 共同点与区别
  -  ____码、____码、____码
       - ____位、正数机器码 相同
  
  -  ____码与____码
       - 在数轴____
       - 存在____
  -  ____码与____码
       - ____
       - 零____
       - 整数的~
         - ____位相反
         - ____位相同
  - 负数的____码与____码
    - 末位相差____
- 大小判断
  -  ____码
    - 易于____判断
  - 负数的____码与____码
    - 数值位越小，____越大

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原</li>
    <li>补</li>
    <li>反</li>
    <li>符号</li>
    <li>原</li>
    <li>反</li>
    <li>对称</li>
    <li>±0</li>
    <li>补</li>
    <li>移</li>
    <li>不对称</li>
    <li>唯一</li>
    <li>符号</li>
    <li>数值</li>
    <li>补</li>
    <li>反</li>
    <li>1</li>
    <li>原</li>
    <li>直接</li>
    <li>补</li>
    <li>反</li>
    <li>绝对值</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: gray;">整</span>数的表示  

<ul>

###  <span style="color: silver;"><span style="color: SlateBlue;">无</span> <span style="color: Gold;">符号</span>~

<ul>

>pro：机器码与补码、无符号数之间的转换（2021）  

- concept
  - 全部二进制位均为____位，无____位
  - 默认数的符号为____
  - 相同字长下能表示的____数比有符号整数大
- 场景
  - 全部是____运算且不出现____结果的场合
  - ____运算
  - ____表示
- eg(8位)
  - 最小数：____（值为____）
  - 最大数：____（值为____）
  - 表示范围：____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数值</li>
    <li>符号</li>
    <li>正</li>
    <li>最大</li>
    <li>正数</li>
    <li>负值</li>
    <li>地址</li>
    <li>指针</li>
    <li>00000000</li>
    <li>0</li>
    <li>11111111</li>
    <li>255</li>
    <li>0~255</li>
  </ul>
</details>
</div>

###  <span style="color: silver;">有  <span style="color: Gold;">符号</span>

<ul>

- concept
  - 将符号____
  - ____位放在有效数字前面
-  ____码表示~'优势
     - ①与原码和反码相比
       - 补码多表示一个____负数
       - 0的补码表示____
     - ②与原码和移码相比
       - 补码运算规则____
       - ____位 与 ____位  ____参加运算

- n位有符号整数表示范围：____ ~____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>数值化</li>
    <li>符号</li>
    <li>补</li>
    <li>最小</li>
    <li>唯一</li>
    <li>简单</li>
    <li>符号</li>
    <li>数值</li>
    <li>一起</li>
    <li>-2^{n-1}</li>
    <li>2^{n-1}-1</li>
  </ul>
</details>
</div>

###  <span style="color: silver;"><span style="color: green;">C</span>语言中的整数类型及类型转换  

<ul>

####  <span style="color: silver;">整型数据类型  

<ul>

>pro：int型数据的表示范围（2017、2019）  

- 整型数据分类(按____)
  - 字符型(char)：____位
  - 短整型(short/short int)：____位
  - 整型(int)：____位
  - 长整型(long/long int)
    - 32位机器：____位
    - 64位机器：____位
- 特殊说明
  - char默认____整数
  - short/int/long默认____整数
- 存储形式
  - signed/unsigned都按____存储
  - signed____位为符号位
  - unsigned全部为____位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>位数</li>
    <li>8</li>
    <li>16</li>
    <li>32</li>
    <li>32</li>
    <li>64</li>
    <li>无符号</li>
    <li>有符号</li>
    <li>补码</li>
    <li>最高</li>
    <li>数值</li>
  </ul>
</details>
</div>

####  <span style="color: silver;"><span style="color: SlateBlue;">有</span>/无 <span style="color: Gold;">符号</span>数' <span style="color: LimeGreen;">转换  

<ul>

>pro：有符号数与无符号数的相互转换（2011、2016、2019）  

- concept
  - 格式："____"
  - 返回____类型数值
  - 不改变____本身

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>TYPE b=(TYPE)a</li>
    <li>TYPE</li>
    <li>操作数</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;">short型 → unsigned short型

<ul>

- eg
```c
  int main(){ 
    short x=____
    unsigned short y=____;
    printf("x=%d, y=%u\n", x, y);
  }
```

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ea75c374ba8836e0e20e1d2fbf17389368b80728623490a6848a5ac33303d2d0.jpg)  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>-4321</li>
    <li>(unsigned short)x</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">short型 ← unsigned short型

<ul>

- principe
  - 保持____不变
  - 仅改变____方式

>attention： 若同时有无符号数和有符号数参与运算，则C语言标准规定按____进行运算。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>位值</li>
    <li>解释</li>
    <li>无符号数</li>
  </ul>
</details>
</div>

####  <span style="color: silver;">不同<span style="color: gray;">字长</span>整数之间的转换  

<ul>

>pro：无符号数的零扩展（2012）  

##### <span style="color: silver;">小字长 <span style="color: gray;">←</span> <span style="color: gray;">大</span>字长

<ul>

- principle
  - 多余____直接截断
  -  ____位直接赋值
  - 保持____不变

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>高位</li>
    <li>低</li>
    <li>位值</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;">小字长 <span style="color: gray;">→</span> 大字长

<ul>

- principle
  - 保持相应____相等
  - 高位部分____处理
    - 无符号整数：____扩展
    - 有~：____扩展

>pro：无符号数的零扩展（2012），补码的符号扩展（2021）  

- 特殊说明
  - char型(8位无符号整数)转int型时高位____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>位值</li>
    <li>扩展</li>
    <li>零</li>
    <li>符号</li>
    <li>补0</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

</ul>

#  <span style="color: silver;">1  <span style="color: LimeGreen;">运算</span>方法 & 运算<span style="color: LightSkyBlue;">电路  

<ul>

##  <span style="color: silver;">组成 运算 部件

<ul>

- 计算机中运算器的组成：
  - ____单元（ArithmeticLogicUnit，ALU）
  - ____器
  - ____寄存器（PSW）
  - ____寄存器组

- 运算器的基本功能：
  - ____运算：
    - ____
    - ____
    - ____
    - ____
  - ____运算：
    - ____运算
    - ____运算
    - ____运算
    - ____运算
  - 其他操作：
    - ____
    - ____

- ALU的核心部件：
  - ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>算术逻辑</li>
    <li>移位</li>
    <li>状态</li>
    <li>通用</li>
    <li>四则</li>
    <li>加法</li>
    <li>减法</li>
    <li>乘法</li>
    <li>除法</li>
    <li>逻辑</li>
    <li>与</li>
    <li>或</li>
    <li>非</li>
    <li>异或</li>
    <li>移位</li>
    <li>求补</li>
    <li>加法器</li>
  </ul>
</details>
</div>

###  <span style="color: silver;">带 <span style="color: Gold;">标志</span>加法器  

<ul>

- 无符号数加法器的局限性：
  - 只能用于两个____相加
  - 不能进行____的加/减运算
- 改进方案：
  - 在无符号数加法器基础上增加____电路
    - 使加法器能计算____
    - 能生成相应的____信息

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b08b1b2e0864197bdd1d72ef2052e0df883af964dc46d02ed1cabeaf47084dfc.jpg)  
图2.3用全加器实现 $n$ 位带标志加法器的电路  

- 标志位的____表达式：
  - 溢出标志：${\mathrm{OF}}=____$
  - 符号标志：$\mathrm{SF}=____$
  - 零标志：$\mathrm{ZF}=____$ 当且仅当 $F\!=\!0$
  - 进位/借位标志：$\mathrm{CF}=____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无符号数</li>
    <li>有符号整数</li>
    <li>逻辑门</li>
    <li>和/差</li>
    <li>标志</li>
    <li>逻辑</li>
    <li>C_{n}\oplus C_{n-1}</li>
    <li>F_{n-1}</li>
    <li>1</li>
    <li>C_{\mathrm{out}}\oplus C_{\mathrm{in}^{\mathrm{c}}</li>
  </ul>
</details>
</div>

###  <span style="color: silver;">算术逻辑单元（ <span style="color: GreenYellow;">A</span><span style="color: Gold;">L</span>U）  

<ul>

-  ____：
     - 功能较强的____电路
     - 能进行多种____运算和____运算
     - 核心是____加法器
     - 能执行"____""____""____"等逻辑运算

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9cdde373a0e9aac54e8a3252d040b0625dc2982eaa7ffb7b834dd4a5f48a2d34.jpg)  
图2.4ALU的基本结构  

- ALU基本____：
  - 输入端：
    - ____和____（n位操作数）
    - ____（进位输入端）
  - 控制端：
    - ____（决定执行功能）
    - ____位数决定操作种类

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/446801d26dabb23d19fea7dea7846e8892b38051dc1408e8f16cf0921912b209.jpg)  
图2.5一位ALU的结构  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>特点</li>
    <li>组合逻辑</li>
    <li>算术</li>
    <li>逻辑</li>
    <li>带标志</li>
    <li>与</li>
    <li>或</li>
    <li>非</li>
    <li>结构</li>
    <li>A</li>
    <li>B</li>
    <li>Cin</li>
    <li>ALUop</li>
    <li>ALUop</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;"> <span style="color: LimeGreen;">定</span>点数的<span style="color: green;">移位</span>运算  

<ul>

- 移位运算的作用：
  - 可替代____运算电路
  - 通过____和____组合实现乘/除法
- 移位效果：
  - 左移一位：相当于____（不产生____时）
  - 右移一位：相当于____（不考虑舍去的____）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>乘/除法</li>
    <li>加法</li>
    <li>移位</li>
    <li>乘以2</li>
    <li>溢出</li>
    <li>除以2</li>
    <li>末位</li>
  </ul>
</details>
</div>

###  <span style="color: silver;"> <span style="color: Gold;">逻辑</span>~

<ul>

>pro：逻辑移位运算（2018）  

- 操作对象：____整数
- 移位规则：
  - 左移：____移出，____补0
  - 右移：____移出，____补0
- 溢出情况：____的1移出时发生溢出

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无符号</li>
    <li>高位</li>
    <li>低位</li>
    <li>低位</li>
    <li>高位</li>
    <li>高位</li>
  </ul>
</details>
</div>

###  <span style="color: silver;"> <span style="color: LimeGreen;">算术</span>~

<ul>

>pro：算术移位运算（2012、2017、2018）  

- 操作对象：____整数（____表示）
- 移位规则：
  - 左移：
    - ____移出，____补0
    - 移出____与移位后____不同时发生溢出
  - 右移：
    - ____移出，____补符号位
    - ____1移出影响精度

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有符号</li>
    <li>补码</li>
    <li>高位</li>
    <li>低位</li>
    <li>高位</li>
    <li>符号位</li>
    <li>低位</li>
    <li>高位</li>
    <li>低位</li>
  </ul>
</details>
</div>

</ul>

##  <span style="color: silver;">..<span style="color: LimeGreen;">加</span><span style="color: gray;">减</span>运算  

<ul>

###   <span style="color: silver;"><span style="color: Gold;">补</span>码

<ul>

>pro：不同字长补码的加法运算（2009）、补码和无符号数的减法运算（2011、2017）  

####  <span style="color: silver;">fomula

<ul>

- 设机器字长为____：
  - $[A+B]_{*}=____\ (\bmod2^{n+1})$
  - $[A-B]_{*}=____\ (\bmod2^{n+1})$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>n+1</li>
    <li>[A]_{*}+[B]_{*}</li>
    <li>[A]_{*}+[-B]_{*}</li>
  </ul>
</details>
</div>

####  <span style="color: Gold;">特点

<ul>

1. 按____运算规则运算，____
2. 运算方式：
   - 加法：两个数的____直接相加
   - 减法：____与____的负数补码相加
3. ____位参与运算：
   - ____位与____位一起参与
   - 结果____位在运算中直接得出
4. 结果处理：
   - ____丢弃
   - 保留____位
   - 运算结果为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二进制</li>
    <li>逢二进一</li>
    <li>补码</li>
    <li>被减数</li>
    <li>减数</li>
    <li>符号</li>
    <li>符号</li>
    <li>数值</li>
    <li>符号</li>
    <li>高位</li>
    <li>n+1</li>
    <li>补码</li>
  </ul>
</details>
</div>

####  <span style="color: silver;">eg

<ul>

【例2.3】设字长为8位（含1位符号位）， $A=____$  $B=____$ ，求 $[A+B]*$ 和 $[A-B]*$ 解：  
- 数值转换：
  - $A=____$ ，$[A]_{*}\,{=}\,____$
  - $B=____$ ，$[B]_{*}\,{=}\,____$
  - $[-B]_{*}=____$
- 计算过程：
  - $[A+B]_{*}=____=____（符号位为____，对应真值为____）
  - $[A-B]_{*}=____=____（符号位为____，对应真值为____）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>15</li>
    <li>24</li>
    <li>+15=+0001111</li>
    <li>00001111</li>
    <li>+24=+0011000</li>
    <li>00011000</li>
    <li>11101000</li>
    <li>00001111+00011000</li>
    <li>00100111</li>
    <li>0</li>
    <li>+39</li>
    <li>[A]_{*}+[-B]_{*}=00001111+1110\,1000</li>
    <li>11110\,1111</li>
    <li>1</li>
    <li>-9</li>
  </ul>
</details>
</div>

</ul>

###  <span style="color: silver;"> <span style="color: LimeGreen;">溢出</span>判别方法

<ul>

>pro：补码加减运算后的溢出判断（2010、2011、2014、2018、2021）  

####  <span style="color: silver;">发生 <span style="color: Gold;">条件

<ul>

- 两个____相同的数相加可能溢出
- 两个____相异的数相减可能溢出
- 异常情况示例：
  - 两____相加结果为负
  - ____减____结果为正

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>符号</li>
    <li>符号</li>
    <li>正数</li>
    <li>负数</li>
    <li>正数</li>
  </ul>
</details>
</div>

####  <span style="color: silver;">三种 <span style="color: Gold;">判断</span>方法

<ul>

#####  <span style="color: silver;"> <span style="color: GreenYellow;">一</span>位<span style="color: Gold;">符号</span>位法

<ul>

- 判断条件：参与运算的两数____相同，结果____与原操作数不同
- 溢出____表达式：$V=____$
- 结果判断：
  - V=____：无溢出
  - V=____：有溢出

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>符号</li>
    <li>符号</li>
    <li>逻辑</li>
    <li>A_{\mathrm{s}}B_{\mathrm{s}}\overline{{S_{\mathrm{s}}}}+\overline{{A_{\mathrm{s}}B_{\mathrm{s}}}}S_{\mathrm{s}}</li>
    <li>0</li>
    <li>1</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"><span style="color: SlateBlue;">双</span> <span style="color: Gold;">符号</span>位法（模4补码）

<ul>

- 判断规则：
  - 两____位相同：未溢出
  - 两____位不同：溢出
- 符号位组合情况：
  - ____：正数，无溢出
  - ____：正溢出
  - ____：负溢出
  - ____：负数，无溢出
- 溢出____表达式：$V\!=\!____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>符号</li>
    <li>符号</li>
    <li>00</li>
    <li>01</li>
    <li>10</li>
    <li>11</li>
    <li>逻辑</li>
    <li>S_{s1}\oplus S_{s2}</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"> <span style="color: LimeGreen;">进位</span>判断法

<ul>

- 判断依据：____位进位与____数位进位的关系
- 判断规则：
  - Cn与Cn-1____：无溢出
  - Cn与Cn-1____：有溢出
- 溢出____表达式：$V=____$

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>符号</li>
    <li>最高</li>
    <li>相同</li>
    <li>不同</li>
    <li>逻辑</li>
    <li>C_{n}\oplus C_{n-1}</li>
  </ul>
</details>
</div>

</ul>

</ul>

###  <span style="color: silver;">加减 <span style="color: GreenYellow;">运算</span><span style="color: LightSkyBlue;">电路</span>  

<ul>

>pro：无符号数与有符号数加/减运算能用同一个加法器实现的理由（2011）  

- 原理：
  - 一个数的补码Y的负数补码为____
  - 实现方式：
    - 在Y输入端加n个____实现取反
    - 加入____多路选择器
    - 用____控制端选择输入Y或____
    - Sub同时作为____进位

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ca2c5205d971573b48f8360dfee06c31fc7050362e076fdddeb45c514b1d2093.jpg)  
图2.6加减运算部件  

- 电路功能：
  - 可实现____ $2^{n}$ 补码加减运算
  - Sub=____：做减法，实现____
  - Sub=____：做加法，实现____
  - 同时支持____运算：
    - 无符号整数等同于____补码
    - X、Y分别是____或____表示

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>\overrightharpoon{Y}+1</li>
    <li>反向器</li>
    <li>2选1</li>
    <li>Sub</li>
    <li>\overrightharpoon{Y}</li>
    <li>低位</li>
    <li>模</li>
    <li>1</li>
    <li>X+\overline{{{Y}}}+1=[x]_{*}+[-y]_{*}</li>
    <li>0</li>
    <li>X+Y=[x]_{*}+[y]_{*}</li>
    <li>无符号数</li>
    <li>正整数</li>
    <li>补码</li>
    <li>二进制</li>
  </ul>
</details>
</div>

>attention： 

- 运算器本身无法识别所处理的二进制串是____还是____
  - 示例：0-1=____
    - 若解释为____：
      - 对应值为____
      - 结果____
    - 若解释为____：
      - 对应值为____（n位无符号数的最大值）
      - 结果____
  - 此类易混点是统考极易考查的内容

>pro：  无符号数、有符号数加减运算后CF和OF的值（2011、2018、2023）；SF和OF的逻辑表达式（2022）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有符号数</li>
    <li>无符号数</li>
    <li>00...0+11...1=11...1</li>
    <li>有符号数</li>
    <li>-1</li>
    <li>正确</li>
    <li>无符号数</li>
    <li>2^n-1</li>
    <li>出错</li>
  </ul>
</details>
</div>

####  <span style="color: silver;"> <span style="color: Gold;">标志</span>位

<ul>

#####  <span style="color: silver;"><span style="color: LightSkyBlue;">零</span>标志 <span style="color: LightSkyBlue;">Z</span>F

<ul>

- $Z\mathrm{F}=____$ 表示结果F为____
- 对____和____运算都有意义

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>0</li>
    <li>无符号数</li>
    <li>有符号数</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"> <span style="color: LimeGreen;">溢出</span>标志 <span style="color: LimeGreen;">O</span>F  

<ul>

- 判断____运算是否溢出
- ${\mathrm{OF}}=____$
- 对____运算无意义

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有符号数</li>
    <li>C_{n}\oplus C_{n-1}</li>
    <li>无符号数</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"> <span style="color: Gold;">符号</span>标志 <span style="color: Gold;">S</span>F

<ul>

- 表示结果的____(F的____位)
- 对____运算无意义

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>符号</li>
    <li>最高</li>
    <li>无符号数</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"> <span style="color: GreenYellow;">进/借</span>位标志 <span style="color: GreenYellow;">C</span>F

<ul>

- 表示____运算的进位/借位
- $\mathrm{CF}\,{=}\,____$
- 对____运算无意义

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>无符号数</li>
    <li>\mathrm{Sub}\oplus C_{\mathrm{out}}</li>
    <li>有符号数</li>
  </ul>
</details>
</div>

</ul>

####  <span style="color: silver;">数值 <span style="color: Gold;">比较</span>

<ul>

#####  <span style="color: silver;"><span style="color: SlateBlue;">无</span> <span style="color: Gold;">符号</span>数比较

<ul>

- 基于____和____标志
- A-B的几种情况：
  - A=B: ____, ____
  - A>B: ____, ____
  - A<B: ____, ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ZF</li>
    <li>CF</li>
    <li>ZF=1</li>
    <li>CF=0</li>
    <li>ZF=0</li>
    <li>CF=0</li>
    <li>ZF=0</li>
    <li>CF=1</li>
  </ul>
</details>
</div>

#####  <span style="color: silver;"><span style="color: gray;">有</span>~

<ul>

- 基于____、____、____标志
- [A]*-[B]*的几种情况：
  - A=B: ____, ____, ____
  - A>B: 两种可能
    - ____, ____, ____
    - ____, ____, ____
  - A<B: 两种可能
    - ____, ____, ____
    - ____, ____, ____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>ZF</li>
    <li>OF</li>
    <li>SF</li>
    <li>ZF=1</li>
    <li>OF=0</li>
    <li>SF=0</li>
    <li>ZF=0</li>
    <li>OF=0</li>
    <li>SF=0</li>
    <li>ZF=0</li>
    <li>OF=1</li>
    <li>SF=1</li>
    <li>ZF=0</li>
    <li>OF=0</li>
    <li>SF=1</li>
    <li>ZF=0</li>
    <li>OF=1</li>
    <li>SF=0</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

###  <span style="color: silver;"> <span style="color: GreenYellow;">原</span>码的 <span style="color: LimeGreen;">加</span><span style="color: gray;">减</span>法运算（了解）  

<ul>

```

---

### 说明
1. **挖空处理**：关键词（如“基数”、“位权”）、公式中的关键部分（如“$2^n - x$”）、算法步骤（如“除基取余”）已被替换为下划线（____），保留上下文以便理解和记忆。
2. **折叠块**：每个次级标题下的答案使用 `<details>` 和 `<ul>` 标签以折叠形式列出，确保 Markdown 内公式渲染正确（如 `<li>$f(x_0 + \Delta x) - f(x_0)$</li>`）。
3. **结构完整性**：未改变原有目录结构，所有内容均完整输出，未省略。
4. **后续内容**：由于输入内容未包含“原码的加减法运算”以下部分，此处未处理。如需继续处理，请提供剩余内容。

如果有其他需求或需要进一步调整，请告诉我！

以下是按照您的要求对提供的内容进行挖空处理后整理的 Markdown 及 HTML 格式输出。挖空部分包括定义中的关键词、公式定理和算法中的关键步骤，并在每个次级标题下将答案以 HTML 折叠块形式列出。

---

#### <span style="color: silver;"> <span style="color: LimeGreen;">加</span>法规则

<ul>

- "____求和，____求差"原则
- 符号位相同：
  - ____位相加
  - 符号位____
  - 最高数值位进位则____
- 符号位不同：
  - 做____
  - 取____大的减小的
  - 结果符号与____大的相同

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>同号</li>
    <li>异号</li>
    <li>数值</li>
    <li>不变</li>
    <li>溢出</li>
    <li>减法</li>
    <li>绝对值</li>
    <li>绝对值</li>
  </ul>
</details>
</div>

#### <span style="color: silver;"><span style="color: gray;">减</span>法规则

<ul>

- ____符号取反
- 按____加法运算

>attention： 

原码的加减运算规则比较复杂，因此计算机采用的大多是 <span style="color: Gold;">____</span>码加减运算。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>减数</li>
    <li>原码</li>
    <li>补</li>
  </ul>
</details>
</div>

</ul>

</ul>

## <span style="color: silver;"> ..<span style="color: Gold;">乘</span><span style="color: SlateBlue;">除</span>运算  

<ul>

### <span style="color: Gold;">乘</span>

<ul>

#### <span style="color: silver;">concept

<ul>

>pro：如何用加、减、移位指令实现____指令（2020）；用软/硬件实现____指令的速度对比（2020）  

##### <span style="color: Gold;">特点

<ul>

- ____位与____位分开求
  - 乘积符号位：两个乘数符号位"____"得到
  - 乘积数值位：两个乘数____之积
- 两个定点数数值部分之积可视为两个____数的乘积

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>乘法</li>
    <li>乘法</li>
    <li>符号</li>
    <li>数值</li>
    <li>异或</li>
    <li>绝对值</li>
    <li>无符号</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"><span style="color: SlateBlue;">无</span> <span style="color: Gold;">符号</span>数 相 <span style="color: Gold;">乘</span>过程

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e9db16b99b4414f5ea84bd89e7c11ec1810c2c66dcab7d40d3de91283d2f650b.jpg)  

###### <span style="color: silver;">formula

<ul>

- 基本公式：
$
\begin{array}{r l}&{X{\times}Y{=}X{\times}y_{4}{\times}____+X{\times}y_{3}{\times}____+X{\times}y_{2}{\times}____+X{\times}y_{1}{\times}____}\\ &{\qquad=2^{-1}\{2^{-1}[\ 2^{-1}(2^{-1}(0+X{\times}y_{4})+X{\times}y_{3})+X{\times}y_{2}]+X{\times}y_{1}\}}\end{array}
$  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>2^{-4}</li>
    <li>2^{-3}</li>
    <li>2^{-2}</li>
    <li>2^{-1}</li>
  </ul>
</details>
</div>

###### <span style="color: silver;">n位无符号数乘法递归定义

<ul>

- 递归式：
$
\begin{array}{l}{{P_{1}=____(P_{0}+X\times y_{n})}}\\ {{P_{2}=____(P_{1}+X\times y_{n-1})}}\\ {{{}}}\\ {{P_{n}=____(P_{n-1}+X\times y_{1})}}\end{array}
$  

- 递推公式：
$
P_{i+1}=____(P_{i}+X\times y_{n-i}\ )\quad(\,i=0,\,1,\,2,\cdots,\,n-1\,)
$  

- 最终乘积：
$
P_{n}{=}____
$  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>2^{-1}</li>
    <li>2^{-1}</li>
    <li>2^{-1}</li>
    <li>2^{-1}</li>
    <li>X{\times}Y</li>
  </ul>
</details>
</div>

</ul>

##### <span style="color: silver;"> <span style="color: LimeGreen;">原</span>码乘法运算步骤

<ul>

- 符号处理：
  - 被乘数和乘数取____
  - 符号位为____
- 运算过程：
  - 初始部分积____
  - 从乘数____位y_n开始
  - 部分积P_i加上____
  - ____一位
  - 重复____次

>attention： 

- 参与运算的是两个数的____位
- thus 运算过程中的右移操作均为____右移，  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>绝对值</li>
    <li>x_s⊕y_s</li>
    <li>P_0=0</li>
    <li>最低</li>
    <li>X×y_(n-i)</li>
    <li>右移</li>
    <li>n</li>
    <li>数值</li>
    <li>逻辑</li>
  </ul>
</details>
</div>

</ul>

</ul>

#### <span style="color: silver;">运算<span style="color: LightSkyBlue;">电路  

<ul>

>pro：乘法电路中____逻辑的作用（2020）  

##### <span style="color: silver;"> <span style="color: Gold;">32</span>位<span style="color: SlateBlue;">无</span> <span style="color: Gold;">符号</span>数乘法运算逻辑 <span style="color: LimeGreen;">结构</span>

<ul>

- 主要组件：
  - ____位C
  - 乘积寄存器____（初始置0）
  - 计数器____（初值32）
  - ____（核心部件）
- 运算过程：
  - ALU对P和X做____加法
  - 结果送回P，进位存放在____
  - C、P和Y同步____右移
  - Y____位决定被乘数是否加到部分积

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8b2f2efb8fb8e06dba5d1e1515aadb7d8ddaed5027b92202ab8b99fb2db85ef1.jpg)  
图2.732位无符号数乘法运算的逻辑结构图  

>pro：无符号数和有符号数乘法指令的____判断（2019、2020、2021）  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>控制</li>
    <li>进位</li>
    <li>P</li>
    <li>C_n</li>
    <li>ALU</li>
    <li>无符号</li>
    <li>C</li>
    <li>逻辑</li>
    <li>最低</li>
    <li>溢出</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"> <span style="color: LimeGreen;">溢出</span> <span style="color: Gold;">判断</span>

<ul>

- int型变量乘积：
  - 不溢出：乘积高32位每位____且等于低32位符号
  - 溢出：其他情况
- unsigned int型变量乘积：
  - 不溢出：乘积高32位全为____
  - 溢出：其他情况

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相同</li>
    <li>0</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

### <span style="color: SlateBlue;">除</span>

<ul>

#### <span style="color: silver;">concept

<ul>

##### <span style="color: silver;"> <span style="color: GreenYellow;">原</span>码<span style="color: SlateBlue;">除</span>法特点

<ul>

- 与乘法类似：____和____运算迭代过程
- 更复杂的统一要求：
  - ____位数除以____位数
  - 得到____位商
- 被除数扩展方式：
  - 定点正小数：____添n个0
  - 定点正整数：____添n个0
- 特殊情况：
  - 除数为____时发生异常
  - 需调用____处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>移位</li>
    <li>加减</li>
    <li>2n</li>
    <li>n</li>
    <li>n</li>
    <li>低位</li>
    <li>高位</li>
    <li>0</li>
    <li>操作系统</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"><span style="color: gray;">无</span> <span style="color: Gold;">符号</span>数除法 手算

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b22578c8487627eb2d6a4c43646e4c36db3f32c45ffb58d5a241672596cd920b.jpg)  

###### process

<ul>

- 基本步骤：
  - 被除数与除数____
  - 够减上商____，不够减上商____
  - 差为____余数
  - 除数____后与中间余数比较
  - 重复直到满足____要求

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>相减</li>
    <li>1</li>
    <li>0</li>
    <li>中间</li>
    <li>右移</li>
    <li>商位数</li>
  </ul>
</details>
</div>

###### <span style="color: Gold;">special</span> case

<ul>

- 2n位除以n位无符号数：
  - 商位数为____位
  - 第一次试商为____表示溢出
- n位无符号数相除：
  - 第一位商为____
  - 结果不会____
- 浮点数尾数原码小数相除：
  - 第一次试商为____表示尾数溢出
  - 可通过____消除

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>n+1</li>
    <li>1</li>
    <li>0</li>
    <li>溢出</li>
    <li>1</li>
    <li>右规</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

#### <span style="color: silver;">除法运算<span style="color: gray;">电路  

<ul>

##### <span style="color: silver;"> <span style="color: Gold;">32</span>位除法逻辑 <span style="color: LimeGreen;">结构</span>

<ul>

- 主要组件：
  - 寄存器____：存放除数
  - 寄存器____：存放中间余数高位
  - 寄存器____：存放商和中间余数低位
  - ____：核心部件
  - 计数器____：初值32
- 运算过程：
  - ALU对R和Y做____运算
  - 结果送回____
  - R和Q同步____
  - Q最高位移入____最低位
  - Q空出最低位被____
  - ____逻辑根据ALU结果符号决定上商

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/99e080eafaeaa56c6e3b0cb75bcae35c36ab081b32783fa2a18c159d18a06bda.jpg)  
图2.832位除法运算的逻辑结构图  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>Y</li>
    <li>R</li>
    <li>Q</li>
    <li>ALU</li>
    <li>C_n</li>
    <li>加/减</li>
    <li>R</li>
    <li>左移</li>
    <li>R</li>
    <li>上商</li>
    <li>控制</li>
  </ul>
</details>
</div>

##### <span style="color: silver;"><span style="color: LightSkyBlue;">int</span>型整数除法溢出

<ul>

- ____会溢出
- 其他情况不会____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>-2^31/-1</li>
    <li>溢出</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>

</ul>

# <span style="color: silver;">2 <span style="color: LightSkyBlue;">浮</span>点数的表示与运算  

<ul>

## <span style="color: silver;"> 表示

<ul>

### <span style="color: Gold;">特点

<ul>

- 浮点数表示法的特点：
  - ____因子表示在数据中
  - 小数点位置根据需要____
  - 在<span style="color: gray;">____</span><span style="color: LightSkyBlue;">____</span>情况下：
    - 扩大数的____范围
    - 保持数的____精度
  - be suitable for 表示____或____的数值
    - 如：电子质量(____g)
    - 如：太阳质量(____g)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>比例</li>
    <li>浮动</li>
    <li>位数</li>
    <li>有限</li>
    <li>表示</li>
    <li>有效</li>
    <li>极大</li>
    <li>极小</li>
    <li>9×10^-28</li>
    <li>2×10^33</li>
  </ul>
</details>
</div>

### <span style="color: GreenYellow;">格式

<ul>

- 浮点数表示：
  - $N=(-1)^S×____×____$
    - S：____位(0或1)
    - M：<span style="color: Goldenrod;">____</span>数(二进制定点小数，用定点原码小数表示)
    - E： <span style="color: Gold;">____</span><span style="color: LightSkyBlue;">____</span>or <span style="color: GreenYellow;">____</span>(二进制定点整数，用移码表示)
    - R：<span style="color: gray;">____</span>(隐含，可为2、4、16等)

- eg
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a1b7a71d10d028b99f2e5658ea6e33dcdc0d30ea436288f4013315ca9d3ac5ff.jpg)
  - 组成部分：
    - 第0位：符号____
    - 第1~7位：____表示的阶码E(偏置值64)
    - 第8~31位：24位二进制____小数表示的尾数M
    - 基数R为____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>M</li>
    <li>R^E</li>
    <li>符号</li>
    <li>尾</li>
    <li>阶</li>
    <li>码</li>
    <li>指数</li>
    <li>基数</li>
    <li>S</li>
    <li>移码</li>
    <li>原码</li>
    <li>2</li>
  </ul>
</details>
</div>

### <span style="color: gray;">范围

<ul>

- 特点：关于____对称
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b69c0bc872d03974bb8a0faff59a9536bc3766b1475dc6f2288fb16f9676567b.jpg)
- 溢出情况：
  - 上溢：
    - 正上溢：结果大于____正数
    - 负上溢：结果小于绝对值____负数
    - 处理：____运算操作
  - 下溢：
    - 正下溢：结果在0至____正数之间
    - 负下溢：结果在0至绝对值____负数之间
    - 处理：当作____零

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原点</li>
    <li>最大</li>
    <li>最大</li>
    <li>中断</li>
    <li>最小</li>
    <li>最小</li>
    <li>机器</li>
  </ul>
</details>
</div>

### <span style="color: LightSkyBlue;">规格</span><span style="color: LimeGreen;">化</span>

<ul>

#### <span style="color: silver;">concept

<ul>

- 保留最多____数字位数
- 使有效数字占满____数位

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有效</li>
    <li>尾数</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">规格化操作<span style="color: green;">类型

<ul>

##### <span style="color: Gold;">左</span><span style="color: silver;">规

<ul>

- 条件：尾数最高数位非____位(±0.0...0×...×)
- 处理：
  - 尾数____一位
  - 阶码____(基数为2时)
  - 可能需____操作

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>有效</li>
    <li>左移</li>
    <li>减1</li>
    <li>多次</li>
  </ul>
</details>
</div>

##### <span style="color: LightSkyBlue;">右</span><span style="color: silver;">规

<ul>

- 条件：有效位进到____前
- 处理：
  - 尾数____一位
  - 阶码____(基数为2时)
  - 只需____操作
  - 注意阶码可能____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>小数点</li>
    <li>右移</li>
    <li>加1</li>
    <li>一次</li>
    <li>溢出</li>
  </ul>
</details>
</div>

</ul>

#### <span style="color: silver;">要求

<ul>

- 基数为2时：
  - 原码规格化尾数M满足：____≤|M|<____
  - 正数形式：____×...×
    - 最大值：____
    - 最小值：____
    - 范围：____≤M≤____
  - 负数形式：____×...×
    - 最大值：____
    - 最小值：____
    - 范围：____≤M≤____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1/2</li>
    <li>1</li>
    <li>0.1</li>
    <li>0.11...1</li>
    <li>0.100...0</li>
    <li>1/2</li>
    <li>(1-2^-n)</li>
    <li>1.1</li>
    <li>1.10...0</li>
    <li>1.11..1</li>
    <li>-(1-2^-n)</li>
    <li>-1/2</li>
  </ul>
</details>
</div>

</ul>

</ul>

### <span style="color: silver;">IEEE754标准

<ul>

>pro：IEEE754单精度数大小的比较（2014）

#### <span style="color: silver;">格式

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3b05317cc38d69e199cbfe63befd2efce159619079739354914b91a50fa5ab65.jpg)

- 常用格式：
  - 32位单精度(____浮点数、float型)
  - 64位双精度(____浮点数、double型)
- 基数隐含为____

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0ca31a6a712a028a5cadc8997f2d0ee5e30453ac3a0d7a755db034c662d63b9a.jpg)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>短</li>
    <li>长</li>
    <li>2</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">特点

<ul>

- 单精度组成：
  - ____位符号s
  - ____位阶码e
  - ____位尾数f
- 双精度组成：
  - ____位符号s
  - ____位阶码e
  - ____位尾数f
- 隐藏位特性：
  - 规格化二进制浮点数尾数最高位为____
  - 这个____被隐藏以增加一位有效数字
  - 隐藏位____位于小数点之前

>attention：
- 单精度与双精度浮点数的隐藏位特点：
  - 都采用隐藏____最高位的方法
  - 这种方法可以使浮点数的____更高

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>1</li>
    <li>8</li>
    <li>23</li>
    <li>1</li>
    <li>11</li>
    <li>52</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>尾数</li>
    <li>精度</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">阶</span><span style="color: LightSkyBlue;">码</span> <span style="color: silver;">表示

<ul>

- 使用____表示
- 偏置值特点：
  - 非标准____
  - 使用____
  - 单精度：____
  - 双精度：____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>移码</li>
    <li>2^(n-1)</li>
    <li>2^(n-1)-1</li>
    <li>127</li>
    <li>1023</li>
  </ul>
</details>
</div>

#### <span style="color: LightSkyBlue;">真值</span>

<ul>

- 规格化单精度：____×____×____
- 规格化双精度：____×____×____
- 阶码范围：
  - 单精度：____(8位)
  - 双精度：____(11位)

>pro：IEEE754单精度数的表示范围和有效位（2017、2018）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0e09dbec5860d7cec7c801ef49119346c4db36645552b736a3f51caead1e3a23.jpg)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>(-1)^s</li>
    <li>1.f</li>
    <li>2^(e-127)</li>
    <li>(-1)^s</li>
    <li>1.f</li>
    <li>2^(e-1023)</li>
    <li>1~254</li>
    <li>1~2046</li>
  </ul>
</details>
</div>

#### <span style="color: LimeGreen;">特殊</span> <span style="color: silver;">值

<ul>

>pro：IEEE754标准中阶码全为0或全为1时的特殊意义（2017、2023）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5cab272967bd8b58b3d1903235f5ed69c303bb77df5afa2deea36e8c30238b4d.jpg)
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a466833be1246442271c1562278ccba92a69b86a821388a52a08a2ecffff59b4.jpg)

- 全0阶码全0尾数：
  - 表示：____
  - 符号由____决定
  - +0和-0通常____
- 全1阶码全0尾数：
  - 表示：____
  - +∞大于所有____数
  - -∞小于所有____数
  - 用于____情况下继续运算
- 全1阶码非0尾数：
  - 表示：____(Not a Number)
  - 表示____数
- 全0阶码非0尾数：
  - 表示：____数
  - 特点：
    - 阶码____
    - 尾数高位有____0
    - 隐藏位为____
    - 用于处理阶码____

>pro：实数与IEEE754单精度数的相互转换（2011、2013、2020、2022、2023）

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>+0/-0</li>
    <li>s</li>
    <li>等效</li>
    <li>+∞/-∞</li>
    <li>有限</li>
    <li>有限</li>
    <li>异常</li>
    <li>NaN</li>
    <li>未定义</li>
    <li>非规格化</li>
    <li>全0</li>
    <li>连续</li>
    <li>0</li>
    <li>下溢</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">转换eg

<ul>

##### <span style="color: silver;">例2.5

<ul>

- 将-8.25转换为____单精度浮点数格式
- 解题步骤：
  - 转换为二进制：____=____×____
  - 计算阶码：____=3，E=____(二进制10000010)
  - 按格式排列：____(1位)+____(8位)+____(23位)

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>IEEE754</li>
    <li>-1000.01</li>
    <li>-1.00001</li>
    <li>2^3</li>
    <li>E-127</li>
    <li>130</li>
    <li>符号</li>
    <li>阶码</li>
    <li>尾数</li>
  </ul>
</details>
</div>

##### <span style="color: silver;">例2.6

<ul>

- 求IEEE754单精度浮点数____的值
- 解题步骤：
  - 二进制展开：____
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d7a584d8be78918f4c203a6b65fcbebbfc1fbd6fb5150e3de3722237aab3bc05.jpg)
  - 分析组成：
    - 符号=____(负数)
    - 阶码=____-____=____=13
    - 尾数=____(含隐藏位)
  - 最终结果：____×____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>C640 0000H</li>
    <li>11000110010000000000000000000000</li>
    <li>1</li>
    <li>10001100</li>
    <li>01111111</li>
    <li>00001101</li>
    <li>1.5</li>
    <li>-1.5</li>
    <li>2^13</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

### <span style="color: silver;"> <span style="color: LimeGreen;">定</span>点、<span style="color: LightSkyBlue;">浮</span>点表示的区别

<ul>

- 主要区别：
  1. 数值的____范围
     - 若定点数和浮点数的____相同，则浮点表示法所能表示的数值范围远大于____表示法
  2. ____
     - 对于字长相同的定点数和浮点数来说，浮点数虽然扩大了数的表示范围，但____降低了
  3. 数的____
     - 浮点数包括____和____两部分
     - 运算时不仅要做尾数的运算，还要做____的运算
     - 运算结果要求____，所以浮点运算比定点运算复杂
  4. ____问题
     - 定点运算：运算结果超出数的表示范围时，发生____
     - 浮点运算：
       - 运算结果超出____表示范围却不一定溢出
       - 只有规格化后____超出所能表示的范围时，才发生溢出

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>表示</li>
    <li>字长</li>
    <li>定点</li>
    <li>精度</li>
    <li>精度</li>
    <li>运算</li>
    <li>阶码</li>
    <li>尾数</li>
    <li>阶码</li>
    <li>规格化</li>
    <li>溢出</li>
    <li>溢出</li>
    <li>尾数</li>
    <li>阶码</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;"><span style="color: LightSkyBlue;">浮</span>点数的加减运算

<ul>

- 特点： <span style="color: Gold;">____</span><span style="color: LightSkyBlue;">____</span>运算和尾数运算分开进行

>pro：float型能否通过左移实现乘以2运算（2017）；浮点数的加减运算（2009）

### <span style="color: LimeGreen;">对</span><span style="color: Gold;">阶</span>

<ul>

- 使两个 <span style="color: GreenYellow;">____</span>数的<u>____</u>位置<span style="color: gray;">____</span>
- step：
  - 求____差
  - 以<span style="color: gray;">____</span>阶码 → <span style="color: gray;">____</span>阶码看齐
  - 将阶码小的尾数____一位，阶码____
  - 直到两个数的____相等
- note：
  - 尾数右移时，低位移出的位应____并参加运算

>attention： 
- if 大阶码 → 小阶码看齐：
  - 尾数 ____
    - 最高有效位被移出
      - 导致结果____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>阶</li>
    <li>码</li>
    <li>操作</li>
    <li>小数点</li>
    <li>对齐</li>
    <li>阶码</li>
    <li>小</li>
    <li>大</li>
    <li>右移</li>
    <li>加1</li>
    <li>阶码</li>
    <li>保留</li>
    <li>左移</li>
    <li>error</li>
  </ul>
</details>
</div>

### <span style="color: silver;"> <span style="color: Goldenrod;">尾</span>数 加减

<ul>

- 运算规则：
  - 按定点____小数的加（减）运算规则
  - 需将____位还原到尾数部分
- 结果可能需要____处理

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原码</li>
    <li>隐藏</li>
    <li>规格化</li>
  </ul>
</details>
</div>

### <span style="color: silver;"><span style="color: Goldenrod;">尾</span>数 <span style="color: LightSkyBlue;">规格</span>化

<ul>

- IEEE754规格化尾数形式：____
- 可能的运算结果：
  1. 右规情况：
     - 结果为____
     - 处理：尾数____一位，阶码____
  2. 左规情况：
     - 结果为____
     - 处理：尾数____，阶码____，直到规格化

>attention： 
①左规一次相当于乘以____，右规一次相当于除以____； $\textcircled{2}$ 需要右规时，只需进行____。

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>\pm1.\times...\times_{\circ}</li>
    <li>|\pm1\times.\times\ldots\times</li>
    <li>右移</li>
    <li>加1</li>
    <li>\pm0.0...01\times...\times</li>
    <li>左移</li>
    <li>减1</li>
    <li>2</li>
    <li>2</li>
    <li>一次</li>
  </ul>
</details>
</div>

### <span style="color: LimeGreen;">舍入</span>

<ul>

- IEEE754提供四种舍入模式：
  - 就<span style="color: GreenYellow;">____</span>舍入
     - 舍入为____的可表示数
     - 中间值时选择____结果
  - <span style="color: LightSkyBlue;">____</span>向舍入
     - 朝数轴____方向舍入
  - <span style="color: Gold;">____</span>向舍入
     - 朝数轴____方向舍入
  - <span style="color: Gold;">____</span>法
     - 直接截取____位数
     - 趋向____的舍入

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>近</li>
    <li>最近</li>
    <li>偶数</li>
    <li>正</li>
    <li>+\infty</li>
    <li>负</li>
    <li>-</li>
    <li>截断</li>
    <li>所需</li>
    <li>原点</li>
  </ul>
</details>
</div>

### <span style="color: Gold;">溢出</span> <span style="color: GreenYellow;">判断</span>

<ul>

>pro：浮点数运算时的溢出判断（2015）

- 溢出情况：
  - 指数<span style="color: LightSkyBlue;">____</span>溢
     - <span style="color: gray;">____</span>指数 exceed max允许值
  - 指数 <span style="color: LimeGreen;">____</span>溢
     - <span style="color: Gold;">____</span>指数 exceed min允许值
     - 通常按____处理
- 溢出判断时机：
  - ____和尾数舍入时
     - 需判断指数____
  - ____时
     - 需判断指数____

>attention： 
- 题目可能指定特殊表示方式：
  - 尾数采用____表示
  - 阶码采用____表示

- 处理方法：
  - 通常采用____符号位
  - 尾数求和结果处理：
    - 溢出情况：
      - 尾数为____
      - 尾数为____
      - 处理：需____一次
    - 特殊结果情况：
      - 出现____
      - 出现____
      - 处理：需要____，直到尾数变为____或____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>上</li>
    <li>正</li>
    <li>下</li>
    <li>负</li>
    <li>机器零</li>
    <li>右规</li>
    <li>上溢</li>
    <li>左规</li>
    <li>下溢</li>
    <li>补码</li>
    <li>补码</li>
    <li>双</li>
    <li>10.\times\times...\times</li>
    <li>01.\times\times...\times</li>
    <li>右规</li>
    <li>00.0\times\times_{...}\times</li>
    <li>11.1\times\times_{...}\times</li>
    <li>左规</li>
    <li>00.1\times\times...\times</li>
    <li>11.0\times\times_{...}\times_{i}</li>
  </ul>
</details>
</div>

### <span style="color: silver;"><span style="color: green;">C</span>语言中：<span style="color: LightSkyBlue;">浮</span>点数类型

<ul>

>pro：不同类型数据转换后数值的变化（2010）

- 浮点数类型对应关系：
  - float型：____单精度浮点数
  - double型：____双精度浮点数
  - longdouble型：____双精度浮点数
- 类型转换规则：
  1. ____类型转换
     - 常见顺序：____→____→____→____和____→____
  2. 混合运算的类型提升
     - ____类型转换为____类型
     - 属于____类型转换

>pro：int型和float型的精度和范围的分析（2017）

- 不同类型转换的影响：
  - int→float
     - 可能影响____
  - int/float→double
     - 能保留____值
  - double→float
     - 可能发生____和____
  - float/double→int
     - 向____方向截断
     - 可能发生____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>IEEE754</li>
    <li>IEEE754</li>
    <li>扩展</li>
    <li>强制</li>
    <li>char</li>
    <li>int</li>
    <li>long</li>
    <li>double</li>
    <li>float</li>
    <li>double</li>
    <li>较低</li>
    <li>较高</li>
    <li>隐式</li>
    <li>精度</li>
    <li>精确</li>
    <li>溢出</li>
    <li>舍入</li>
    <li>0</li>
    <li>溢出</li>
  </ul>
</details>
</div>

</ul>

## <span style="color: silver;">数据的<span style="color: gray;">大小端</span>和 <span style="color: Gold;">对齐</span>存储

<ul>

### <span style="color: silver;">数据的"<span style="color: gray;">大</span>端方式"和"<span style="color: gray;">小</span>端方式"存储

<ul>

- 数据存储位排列方式
  - 可以 从____/从____ 排列
  - 使用____和____表示
    - LSB：____有效字节，表示数据低位
    - MSB：____有效字节，表示数据高位
    - 示例：32位计算机中int型变量i=01234567H
      - MSB=____
      - LSB=____

>pro：数据的大小端存储（2016、2018、2019）

- <span style="color: LightSkyBlue;">____</span><span style="color: deepskyblue;">____</span>
  - 每个地址存放____字节
  - 不同数据类型占用字节数不同
    - int型和float型：____字节
    - double型：____字节
  - 每个数据只有一个____地址

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/84b38180f8e3e94007c8d5d059202ea50bd801817d21a778faa66e4c344005dc.jpg)

>pro：根据存放顺序判断大小端方式（2019、2023）

#### <span style="color: silver;">存储方式区别

<ul>

- 大:
  - 先存储<span style="color: LightSkyBlue;">____</span>位字节，后存储低位字节
  - 字节顺序与原序列相<u>____</u>
- 小:
  - 先存储 <span style="color: LimeGreen;">____</span>位字节，后存储高位字节
  - 字节顺序与原序列相<u>____</u>

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>左到右</li>
    <li>右到左</li>
    <li>LSB</li>
    <li>MSB</li>
    <li>最低</li>
    <li>最高</li>
    <li>01H</li>
    <li>67H</li>
    <li>字节</li>
    <li>编址</li>
    <li>1</li>
    <li>4</li>
    <li>8</li>
    <li>起始</li>
    <li>高</li>
    <li>同</li>
    <li>低</li>
    <li>反</li>
  </ul>
</details>
</div>

#### <span style="color: silver;">eg

<ul>

- 机器级代码示例：4004d3:010564940408 addeax,0x8049464
  - 地址：____（十六进制）
  - 机器代码：____
  - 汇编形式：____
  - 立即数存储分析
    - 字节序列：____
    - 采用____方式存储
    - 最终值：____

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>4004d3</li>
    <li>01 05 64 94 04 08</li>
    <li>addeax,0x8049464</li>
    <li>64H、94H、04H、08H</li>
    <li>小端</li>
    <li>0x8049464</li>
  </ul>
</details>
</div>

</ul>

### <span style="color: silver;">数据按"边<span style="color: GreenYellow;">界</span>对齐"方式存储

<ul>

#### <span style="color: silver;">concept

<ul>

- 字节编址要求
  - 存储地址需是____大小的整数倍
  - 半字地址是____的整数倍
  - 字地址是____的整数倍

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>自身</li>
    <li>2</li>
    <li>4</li>
  </ul>
</details>
</div>

#### <span style="color: Gold;">特点

<ul>

- 优点
  - 可一次____取出数据
- 缺点
  - 需要填充____字节
  - 会浪费____空间
- 不对齐的影响
  - 需要____访存
  - 需要调整____字节位置

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/67830ff4aa95539687716a65b4721775d480669d1061978c1db29d559d02a9d6.jpg)

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d1d6304976238

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>访存</li>
    <li>空白</li>
    <li>存储</li>
    <li>两次</li>
    <li>高低</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 

<ul>

数值数据的表示方法有以下两大类。  

①直接用____数表示。分为____数和____数，有符号数又分为____数表示和____数表示。无符号数用来表示无符号整数（如地址等信息）。  

②二进制编码的____数，一般采用____码表示，用来表示整数。  

所以，计算机中的数值数据虽然都用____表示，但不全是二进制，也有用____表示的。例如在指令类型中，就分别有____加法指令和____加法指令。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>二进制</li>
    <li>有符号</li>
    <li>无符号</li>
    <li>定点</li>
    <li>浮点</li>
    <li>十进制</li>
    <li>BCD</li>
    <li>二进制</li>
    <li>十进制</li>
    <li>二进制</li>
    <li>十进制</li>
  </ul>
</details>
</div>

## 

<ul>

2. 什么称为无符号整数的“____”？  

对于无符号定点整数来说，若寄存器位数不够，则计算机运算过程中一般保留低 ____ 位，舍弃高位。这样，会产生以下两种结果。  

①保留的低 ____ 位数不能正确表示运算结果。在这种情况下，意味着运算的结果超出了计算机所能表达的范围，有效数值进到了第 ____ 位，称此时发生了“____”现象。  

②保留的低 ____ 位数能正确表达计算结果，即高位的舍去并不影响其运算结果，  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>溢出</li>
    <li>n</li>
    <li>n</li>
    <li>n+1</li>
    <li>溢出</li>
    <li>n</li>
  </ul>
</details>
</div>

### 

<ul>

3. 如何判断一个浮点数是否是____数？  

为了使浮点数能尽量多地表示____位数，一般要求运算结果用____数形式表示。规格化浮点数的尾数小数点后的第一位一定是个____数。因此，对于____编码的尾数来说，只要看尾数的第一位是否为____就行；对于____表示的尾数，只要看符号位和尾数最高位是否____。需要注意的是，IEEE754标准的浮点数尾数是用____编码的。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>规格化</li>
    <li>有效</li>
    <li>规格化</li>
    <li>非零</li>
    <li>原码</li>
    <li>1</li>
    <li>补码</li>
    <li>相反</li>
    <li>原码</li>
  </ul>
</details>
</div>

#### 

<ul>

4. 对于位数相同的定点数和浮点数，可表示的浮点数个数比定点数个数多吗？  

不是，可表示的数据个数取决于____所采用的位数。编码位数一定，编码出来的数据个数就是一定的。 ____ 位编码只能表示 ____ 个数，所以对于相同位数的定点数和浮点数来说，可表示的数据个数应该____（有时可能因为一个值有两个或多个编码对应，编码个数会有少量差异）。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>编码</li>
    <li>n</li>
    <li>2^{n}</li>
    <li>一样多</li>
  </ul>
</details>
</div>

##### 

<ul>

5. 现代计算机中是否要考虑____加减运算？如何实现？现代计算机中的浮点数采用____标准，所以在进行两个浮点数的加减运算时，必须考虑____的加减运算，因为____标准的浮点数尾数都采用____表示。  

原码的加减运算可以有以下两种实现方式  

1）转换为____后，用____加减法实现，结果再转换为____。2）直接用____进行加减运算，____位和____位分开处理（见原码加减运算部分）。  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>原码</li>
    <li>IEEE754</li>
    <li>原码</li>
    <li>IEEE754</li>
    <li>原码</li>
    <li>补码</li>
    <li>补码</li>
    <li>原码</li>
    <li>原码</li>
    <li>符号</li>
    <li>数值</li>
  </ul>
</details>
</div>

---

以上内容严格遵循您的要求，未改变原有目录结构，确保所有内容完整输出，并在每个次级标题下将挖空答案以 HTML 折叠块形式列出，方便自我考察和记忆。

