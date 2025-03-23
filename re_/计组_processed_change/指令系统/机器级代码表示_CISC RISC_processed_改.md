以下是按照您的要求处理后的 Markdown 内容，增加了 `<ul></ul>` 标签以实现标题段落间的缩进，并保持原有 Markdown 格式（如图片链接）不变：

---

html:
  	toc: true
print_background: true
---

#  <span style="color: silver;">程序' 机器级<span style="color: LightSkyBlue;">代码</span>表示  

<ul>

>pro：涉及过汇编代码的真题的年份（2012、2014、2015、2017、2019、2023）  

-  <span style="color: silver;">本节是2022年才新增的考点
     - 历年统考真题曾多次以综合题的形式考查过
     - 难度较大
     - 不少跨考生对此无从下手
     - 通过本节的学习后，应能从容应对
-  <span style="color: silver;">统考大纲没有指定具体指令集
     - 历年统考真题主要考查的是 <span style="color: black;">x86</span>汇编指令
     - 因此本节主要介绍x86汇编指令 

</ul>

##  <span style="color: silver;">common<span style="color: green;">汇编</span><span style="color: LightSkyBlue;">指令</span>

<ul>

###  <span style="color: silver;">相关</span><span style="color: green;">R</span> 

<ul>

-  <span style="color: silver;">x86处理器有 <span style="color: black;">8个32位</span>的通用R
   - <span style="color: gray;">E</span><span style="color: DarkRed;">A</span>X、<span style="color: gray;">E</span><span style="color: LightSkyBlue;">B</span>X、<span style="color: gray;">E</span><span style="color: LimeGreen;">C</span>X和<span style="color: gray;">E</span><span style="color: deepskyblue;">D</span>X
     - 高两位字节和低两位字节可独立使用
     - E表示 <span style="color: black;">Extended</span>，表示 <span style="color: black;">32位</span><span style="color: green;">R</span> 
-  <span style="color: silver;">R <span style="color: LimeGreen;">命名</span>规则:
   - 以<span style="color: gray;">E</span><span style="color: DarkRed;">A</span>X为例:
    - 低两位字节称为<span style="color: DarkRed;">A</span>X
      - AX又可分为:
        - <span style="color: DarkRed;">A</span><span style="color: LightSkyBlue;">H</span> (高字节8位寄存器)
        - <span style="color: DarkRed;">A</span> <span style="color: LimeGreen;">L</span> (低字节8位寄存器)

![image]`(https://bluejedis.github.io/picx-images-hosting/test/image.491byvfcdd.webp)
 <span style="color: silver;">x86处理器中的主要寄存器及说明  
    
-  <span style="color: silver;">除E<span style="color: LightSkyBlue;">B</span><span style="color: GreenYellow;">P</span>和E<span style="color: LimeGreen;">S</span><span style="color: GreenYellow;">P</span>
   - 其他几个寄存器的用法比较灵活

</ul>

###  <span style="color: silver;">格式</span>  

<ul>

-  <span style="color: silver;">使用不同编程工具开发程序时，用到的汇编程序不同
   - 两种不同的汇编格式
     - AT&T格式 
     -  <span style="color: black;">Intel</span>格式（统考要求掌握）

</ul>

####  <span style="color: silver;">*主要 <span style="color: Gold;">区别</span>

<ul>

 <span style="color: silver;">

- 大小写要求
  - AT&T格式：指令只能用小写字母
  - Intel格式：指令对大小写不敏感

- 操作数顺序
  - AT&T格式：第一个为源操作数，第二个为目的操作数，方向从左到右
  - Intel格式：第一个为目的操作数，第二个为源操作数，方向从右向左

- 前缀使用
  - AT&T格式：寄存器需加前缀"$\omega_{0}$"，立即数需加前缀"$\S$"
  - Intel格式：寄存器和立即数都不需要加前缀

- 内存寻址符号
  - AT&T格式：使用"（"和")"
  - Intel格式：使用"["和"]`"

- 复杂寻址方式
  - AT&T格式：disp(base,index,scale)
    - 如"8(%edx,%eax,2)"表示$\mathrm{M}[\mathrm{R}[\mathrm{edx}]`+\mathrm{R}[\mathrm{eax}]`^{*}2+8]`$
  - Intel格式：对应为'$^{*}[\mathrm{edx+ex}^{*}2+8]`$

- 数据长度指定
  - AT&T格式：操作码后加字符
    - "b"表示byte（字节）
    - "w"表示word（字）
    - "l"表示long（双字）
  - Intel格式：使用ptr
    - byte ptr
    - word ptr
    - dword ptr

>attention: 

由于32或64位体系结构都是由16位扩展而来的
因此用word（字）表示16位。  

- 汇编指令格式对比
  - mov指令
    - 功能：在内存和寄存器之间或者寄存器之间移动数据
  - lea指令
    - 功能：将一个内存地址（而不是其所指的内容）加载到目的寄存器

- 格式对比表
  - 表4.2 AT&T格式指令和Intel格式指令的对比
  ![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/49dd1199e96b48c53ff69b24837136b50fa7439742b0d9afe5606d78dc87dc74.jpg)  

- 符号说明
  - R[：表示寄存器r的内容
  - M[addr]`：表示主存单元addr的内容
  - →或$\leftarrow$：表示信息传送方向

- 注意事项
  - 两种汇编格式可以相互转换，转换过程不复杂
  - 历年统考真题采用的均是 <span style="color: black;">Intel</span>格式
</span>

</ul>

</ul>

###  <span style="color: silver;">常用<span style="color: LightSkyBlue;">指令  

<ul>

 <span style="color: LimeGreen;">分类</span>：
- <span style="color: LightSkyBlue;">数据</span> <span style="color: LimeGreen;">传送</span>指令
- <span style="color: LightSkyBlue;">算术</span>和 <span style="color: Gold;">逻辑</span> <span style="color: LimeGreen;">运算</span>指令  
- <span style="color: orange;">控制</span><span style="color: LightSkyBlue;">流</span>指令

 <span style="color: silver;">以Intel格式为例:

####  <span style="color: LimeGreen;">操作</span><span style="color: LightSkyBlue;">数</span> <span style="color: silver;">标记说明

<ul>

 <span style="color: silver;">

-  <span style="color: black;">\<reg></span>： <span style="color: LimeGreen;">R</span>
   - \<reg32>：32位寄存器(eax,ebx,ecx,edx,esi,edi,esp或ebp)
   - \<reg16>：16位寄存器(ax,bx,cx或dx)
   - \<reg8>：8位寄存器(ah,al,bh,bl,ch,cl,dh,dl)
-  <span style="color: black;">\<mem></span>： <span style="color: Gold;">内存</span><span style="color: green;">地址</span>
   -  (如[eax]`、[var + 4]`或dword ptr[eax + ebx]`)
-  <span style="color: black;">\<con></span>：<span style="color: gray;">常数</span>
   - \<con8>：8位常数
   - \<con16>：16位常数
   - \<con32>：32位常数

</ul>

>pro：分析汇编指令对应的二进制代码（2010）  

#### x86<span style="color: LightSkyBlue;">指令</span><span style="color: silver;">机器码

<ul>

 <span style="color: silver;">

- 长度  <span style="color: black;">1Byte
- 同一指令有 <span style="color: black;">多种</span><span style="color: LightSkyBlue;">编码</span>方式
  - 如mov指令有28种机内编码
    - movax,\<conl6> #机器码为B8H 
    - moval,\<con8> #机器码为BOH
    - mov \<reg16>,\<reg16>/\<mem16> #机器码为89H
    - mov\<reg8>/\<mem8>,\<reg8> #机器码为8AH
    - mov\<reg16>/\<mem16>,\<reg16> #机器码为8BH

</ul>

>pro：模仿写出简单语句的机器级指令（2012）  

#### <span style="color: LightSkyBlue;">数据</span> <span style="color: LimeGreen;">传送</span> <span style="color: silver;">指令

<ul>

 <span style="color: silver;">

#####  <span style="color: LimeGreen;">mov
- 功能：将第二个操作数<span style="color: LightSkyBlue;">复制</span>到第一个操作数
- 语法：
  - mov\<reg>,\<reg>
  - mov\<reg>,\<mem>
  - mov\<mem>,\<reg>
  - mov\<reg>,\<con>
  - mov\<mem>,\<con>
- 举例：
  - moveax,ebx
  - mov byte ptr[var]`,5
- 注意：双操作数不能都是内存

##### <span style="color: RoyalBlue;">push
- 功能：将操作数压<span style="color: RoyalBlue;">入</span><span style="color: Gold;">栈
- 语法：
  - push \<reg32>
  - push \<mem>
  - push \<con32>
- 举例：
  - pusheax
  - push[var]`

##### <span style="color: LightSkyBlue;">pop
- 功能：执行 <span style="color: LimeGreen;">出</span><span style="color: Gold;">栈</span>工作
- 语法：
  - pop\<reg32>
  - pop\<mem>
- 举例：
  - popeax
  - pop[ebx]`

</ul>

#### <span style="color: LightSkyBlue;">算术</span> <span style="color: silver;">和<span style="color: Gold;">逻辑</span> <span style="color: LimeGreen;">运算</span>指令

<ul>

 <span style="color: silver;">

#####  <span style="color: Gold;">add</span> <span style="color: silver;">/<span style="color: gray;">sub
- 功能：
  -  <span style="color: Gold;">add</span>：两操作数 <span style="color: Gold;">+
  - <span style="color: gray;">sub</span>：两操作数 <span style="color: gray;">-
- 语法：
  - add/sub\<reg>,\<reg>
  - add/sub\<reg>,\<mem>
  - add/sub\<mem>,\<reg>
  - add/sub\<reg>,\<con>
  - add/sub\<mem>,\<con>
- 举例：
  - subeax,10
  - add byte ptr[var]`,10

#####  <span style="color: Gold;">inc</span> <span style="color: silver;">/<span style="color: gray;">dec
- 功能：
  - inc：自 <span style="color: Gold;">加</span>1
  - dec：自<span style="color: gray;">减</span>1
- 语法：
  - inc/dec\<reg>
  - inc/dec\<mem>
- 举例：
  - deceax
  - inc dword ptr[var]`

##### <span style="color: Goldenrod;">imul
- 功能：有符号整数<span style="color: Goldenrod;">乘</span>法
- 语法：
  - imul\<reg32>,\<reg32>
  - imul\<reg32>,\<mem>
  - imul\<reg32>,\<reg32>,\<con>
  - imul\<reg32>,\<mem>,\<con>
- 举例：
  - imul eax,[var]`
  - imul esi,edi,25

##### <span style="color: RoyalBlue;">idiv
- 功能：有符号整数<span style="color: RoyalBlue;">除</span>法
- 语法：
  - idiv\<reg32>
  - idiv\<mem>
- 举例：
  - idivebx
  - idiv dword ptr[var]`

#####  <span style="color: black;">and/or/xor
与 或 异或
- 功能： <span style="color: black;">位</span>操作
- 语法：
  - and/or/xor\<reg>,\<reg>
  - and/or/xor\<reg>,\<mem>
  - and/or/xor\<mem>,\<reg>
  - and/or/xor\<reg>,\<con>
  - and/or/xor\<mem>,\<con>
- 举例：
  - andeax,OfH
  - xoredx,edx

##### <span style="color: SlateBlue;">not
- 功能：位<span style="color: SlateBlue;">翻转
- 语法：
  - not\<reg>
  - not\<mem>
- 举例：
  - not byte ptr[var]`

##### <span style="color: gray;">neg
- 功能：取<span style="color: gray;">负
- 语法：
  - neg\<reg>
  - neg\<mem>

#####  <span style="color: silver;">sh<span style="color: LimeGreen;">l</span>/sh<span style="color: LightSkyBlue;">r</span>
- 功能：
  - shl：逻辑 <span style="color: LimeGreen;">左</span>移
  - shr：逻辑<span style="color: LightSkyBlue;">右</span>移
- 语法：
  - shl/shr\<reg>,\<con8>
  - shl/shr\<mem>,\<con8>
  - shl/shr\<reg>,\<cl>
  - shl/shr\<mem>,\<cl>
- 举例：
  - shleax,1
  - shrebx,cl

</ul>

####  <span style="color: Gold;">控制</span><span style="color: LightSkyBlue;">流</span> <span style="color: silver;">指令

<ul>

 <span style="color: silver;">

- x86处理器维持着指令指针(IP)
  - IP自动指向下一条指令
  - 可用标签指示程序中的指令地址

>pro：无条件转移指令的指令格式（2021）  

#####  <span style="color: Gold;">jmp
- 功能：无条件跳转
- 语法：
  - jmp\<label>
- 举例：
  - jmpbegin

>pro：条件转移指令与标志位的结合（2013）  

##### j<span style="color: LimeGreen;">condition
- 功能： <span style="color: Gold;">条件</span><span style="color: green;">转移</span>
- 语法：
  - je\<label>
  - jz\<label>
  - jne\<label>
  - jg\<label>
  - jge\<label>
  - jl\<label>
  - jle\<label>
- 举例：
  - cmpeax,ebx
  - jledone

#####  <span style="color: Gold;">cmp</span> <span style="color: silver;">/<span style="color: Goldenrod;">test
- 功能：
  - cmp： <span style="color: Gold;">比较</span>操作
  - test：<span style="color: gray;">逐位</span><span style="color: orange;">与</span><span style="color: LimeGreen;">运算
- 语法：
  - cmp/test\<reg>,\<reg>
  - cmp/test\<reg>,\<mem>
  - cmp/test\<mem>,\<reg>
  - cmp/test\<reg>,\<con>
- 举例：
  - cmp dword ptr[var]`,10
  - testeax,eax

#####  <span style="color: LimeGreen;">call</span> <span style="color: silver;">/<span style="color: green;">ret
>pro：call指令的功能（2019）  
- 功能：
  - call：子程序 <span style="color: LimeGreen;">调用</span>
  - ret：子程序<span style="color: green;">返回
- 语法：
  - call\<label>
  - ret
- 特点：
  - call保存调用前地址
  - ret实现返回机制

</ul>

</ul>

</ul>

</ul>

</ul>

##  <span style="color: silver;"><span style="color: LightSkyBlue;">选择</span>语句的机器级表示

<ul>

 <span style="color: silver;">

###  <span style="color: silver;"> <span style="color: LimeGreen;">条件</span>码与<span style="color: LightSkyBlue;">指令</span>
- 常见的选择结构语句有if-then、if-then-else等
- 编译器实现方式：
  - 通过<span style="color: LimeGreen;">条件</span>码（ <span style="color: black;">标志</span>位）设置指令
  - 各类转移指令
- 条件码：
  - 描述最近的<span style="color: LightSkyBlue;">算术</span>或 <span style="color: Gold;">逻辑</span>运算操作的<span style="color: Gold;">属性</span>(状态信息)
    - can检测R来执行条件分支指令
  - 最常用的条件码：
    - CF、ZF、SF和OF

### <span style="color: silver;"> <span style="color: LimeGreen;">条件</span>码<span style="color: gray;">设置</span>指令
- 常见的算术逻辑运算指令会设置条件码：
  - add, sub, imul
  - or, and
  - shl, inc, dec, not, sal等
- 特殊指令：
  - cmp和test指令只设置条件码
  - 不改变任何其他寄存器
- jcondition条件转跳指令根据条件码ZF和SF来实现转跳

### if-else

<ul>

####  <span style="color: silver;">通用形式
- if( <span style="color: black;">test_expr</span>) then_statement else else_statement
- 特点：
  - test_expr是 <span style="color: black;">整数表达式
  - 取值为0（假）或非0（真）
  - 两个分支语句只执行一个

#### goto语句形式转换
![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/99de2ec0647f045fd562ae8b7c72c2a534fddb8bc8716ce24718f9784d401682.jpg)  

</ul>

###  <span style="color: silver;">实例分析

<ul>

####  <span style="color: silver;">C语言

```cpp
int get_cont(int *p1, int *p2)
if(p1>p2) return *p2;
else return *p1;
```

####  <span style="color: silver;">汇编代码
- 已知条件：
  - p1和p2对应实参已压入调用函数的栈帧
  - 存储地址：R[ebp]`+8和R[ebp]`+12
  - EBP指向当前栈帧底部
  - 返回结果存放在EAX中

- 具体代码：
```
mov eax,dword ptr [ebp+8]`    #R[eax]`←M[R[ebp]`+8]`,即R[eax]`=p1
mov edx,dword ptr [ebp+12]`   #R[edx]`←M[R[ebp]`+12]`,即R[edx]`=p2
cmp eax,edx                  #比较p1和p2，即根据p1-p2的结果置标志
jbe .L1                      #若p1<=p2，则转标记L1处执行
mov eax,dword ptr [edx]`      #R[eax]`←M[R[edx]`]`,即R[eax]`=M[p2]`
jmp .L2                      #无条件跳转到标记L2执行
.L1:
mov eax,dword ptr [eax]`      #R[eax]`←M[R[eax]`]`,即R[eax]`=M[p1]`
.L2:

```
- 说明：
  - 指针参数：
    - p1和p2是指针型参数
    - 32位机中长度是dword ptr
  - 比较操作：
    - 比较指令cmp的两个操作数都应来自寄存器
    - 需要先将p1和p2从栈中取到通用寄存器
  - 条件处理：
    - 比较指令执行后得到各个条件码
    - 根据条件码值组合选择执行不同指令
  - 跳转实现：
    - 使用条件转移指令实现跳转

</ul>

</ul>

</ul>

##   <span style="color: silver;"><span style="color: LimeGreen;">循环</span>语句的机器级表示  

<ul>

>pro：循环语句的机器级代码分析（2014、2017、2019、2023）  

 <span style="color: silver;">

###  <span style="color: silver;">概述
- 常见的循环结构语句有while、for和do-while
- <span style="color: gray;">汇编</span>中<span style="color: gray;">无</span>相应的指令存在
  - 可以用  <span style="color: Gold;">条件</span>测试和<span style="color: green;">转跳</span>组合起来实现循环效果
  - 大多数编译器将这三种循环结构都转换为 <span style="color: black;">do-while</span>形式来产生机器代码
- 在循环结构中，通常使用 <span style="color: Gold;">条件</span> <span style="color: LimeGreen;">转移</span>指令来判断循环条件的结束

###  <span style="color: Gold;">实现

<ul>

#### do-while
- 通用形式：
  - do body_statement while(test_expr);
- goto语句形式：
  - loop: body_statement
  - t = test_expr;
  - if(t) goto loop;
- 特点：
  - body_statement至少执行一次
  - 然后执行测试表达式
  - 若测试为真，则继续执行循环

#### while
- 通用形式：
  - while(test_expr) body_statement
- 转换为do-while形式：
  - t = test_expr;
  - if(!t) goto done;
  - do body_statement while(test_expr);
  - done:
- goto语句形式：
  - t = test_expr;
  - if(!t) goto done;
  - loop: body_statement
  - t = test_expr;
  - if(t) goto loop;
  - done:

#### for
- 通用形式：
  - for(init_expr; test_expr; update_expr)

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c59e1434ff34a9f2d84130def9419a860a7e3cf1681145df32fe17e1ef02bf32.jpg)  

- 等价while循环形式：
  - init_expr;
  - while(test_expr){
    - body_statement
    - update_expr;
  }
- goto语句形式：
  - init_expr;
  - t = test_expr;
  - if(!t) goto done;
  - loop: body_statement
  - update_expr;
  - t = test_expr;
  - if(t) goto loop;
  - done:

</ul>

###  <span style="color: silver;">实例：for循环求和

<ul>

#### <span style="color: LightSkyBlue;">函数<span style="color: silver;">代码
- int nsum_for(int n){
  - int i;
  - int result = 0;
  - for(i=1; i<=n; i++)
    - result += i;
  - return result;
}

####  <span style="color: LimeGreen;">循环
- init_expr: i = 1
- test_expr: i <= n
- update_expr: i++
- body_statement: result += i

#### <span style="color: gray;">汇编代码
- 已知条件：
  - n对应实参已压入调用函数的栈帧
  - 存储地址为R[ebp]`+8
  - 局部变量i和result分别在E<span style="color: LightSkyBlue;">D</span>X和E<span style="color: DarkRed;">A</span>X中
  - 返回参数在E<span style="color: DarkRed;">A</span>X中

- 具体代码：
  ```
  mov ecx,dword ptr [ebp+8]`    #R[ecx]`←M[R[ebp]`+8]`，即R[ecx]`=n
  mov eax,0                    #R[eax]`←0,即result=0
  mov edx,1                    #R[edx]`←1，即i=1
  cmp edx,ecx                  #Compare R[edx]`:R[ecx]`，即比较i:n
  jg L2                        #If greater，转跳到L2执行
  .L1:                         #loop:
  add eax,edx                  #R[eax]`←R[eax]`+R[edx]`, 即result+=i
  add edx,1                    #R[edx]`←R[edx]`+1，即i++
  cmp edx,ecx                  #比较R[edx]`和R[ecx]`，即比较i:n
  jle .L1                      #If less or equal，转跳到L1执行
  .L2:
  ```

</ul>

</ul>

</ul>

##   <span style="color: silver;"><span style="color: Gold;">过程</span>调用的机器级表示

<ul>

 <span style="color: silver;">

###  <span style="color: LimeGreen;">执行</span><span style="color: silver;">步骤
- 假定过程 <span style="color: black;">P</span>（调用者）<span style="color: green;">调用</span>过程 <span style="color: black;">Q</span>（被调用者）：
  - 参数 <span style="color: LimeGreen;">传递</span>
    - P将入口参数（实参）放到Q能访问到的地方
  -  <span style="color: Gold;">控制</span> <span style="color: LimeGreen;">转移</span>
      - P将返回<span style="color: DarkRed;">地址</span>存到特定的地方
      - 将控制转移到 <span style="color: black;">Q
  -  <span style="color: black;">现场</span><span style="color: LimeGreen;">保护</span>与空间分配
      -  <span style="color: black;">Q</span>保<span style="color: LimeGreen;">存</span> <span style="color: black;">P</span>的现场（通用寄存器的内容）
      - 为自己的非静态局部变量分配空间
  - 过程执行
    -  <span style="color: black;">执行</span>过程 <span style="color: black;">Q</span>
  - 
  - 现场 <span style="color: GreenYellow;">恢复</span>与空间<span style="color: green;">释放</span>
    - Q恢复P的现场
    - 将返回结果放到P能访问到的地方
    - 释放局部变量所占空间
  - <span style="color: gray;">返回</span>控制
    - Q取出返回地址
    - 将控制转移到P

###  <span style="color: silver;">使用<span style="color: LimeGreen;">规范
- 用户可见R数量有限，调用者和被调用者 共享R
  -  <span style="color: LimeGreen;">调用</span>者保存寄存器：E<span style="color: DarkRed;">A</span>X、E<span style="color: LimeGreen;">C</span>X和E<span style="color: RoyalBlue;">D</span>X
  - <span style="color: purple;">被</span>调用者保存寄存器：E<span style="color: LightSkyBlue;">B</span>X、E<span style="color: Gold;">S</span><span style="color: gray;">I</span>、E<span style="color: LightSkyBlue;">D</span><span style="color: gray;">I</span>

###  <span style="color: Gold;">栈</span><span style="color: orange;">帧</span><span style="color: silver;">结构

<ul>

 <span style="color: silver;">

- 定义：每个过程都有自己的栈区，称为栈帧
- 组成：
  - 一个 <span style="color: Gold;">栈</span>由若干<span style="color: Gold;">栈</span><span style="color: orange;">帧</span><span style="color: silver;">组成
- 关键R：
  - E<span style="color: LightSkyBlue;">B</span>P：指示栈帧的<span style="color: LightSkyBlue;">起始</span>位置
  - E<span style="color: Gold;">S</span>P：指示栈 <span style="color: LimeGreen;">顶</span>
-  <span style="color: Gold;">特点</span>：
   -  <span style="color: Gold;">栈</span>从高地址 → 低地址增长

</ul>

###  <span style="color: silver;">实例

<ul>

 <span style="color: silver;">

#### <span style="color: gray;">C语言
- int add（int x, int y）{ 
  - return x+y 
- int caller(){ 
  - int temp1 = 125
  - int temp2 = 80
  - int sum = add(temp1,temp2）
  - return sum

####  <span style="color: LimeGreen;">caller  <span style="color: silver;">汇编
- caller过程对应的代码如下：
  - caller:
    - push ebp
    - mov ebp,esp
    - sub esp,24
    - mov[ebp-12]`,125
    - mov[ebp-8]`,80
    - mov eax,dword ptr [ebp-8]`
    - mov[esp+4]`,eax
    - mov eax,dword ptr[ebp-12]`
    - mov[esp]`,eax
    - call add
    - mov[ebp-4]`,eax
    - mov eax,dword ptr[ebp-4]`
    - leave

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d980c64caf10e8c75223e749aaa0890e4e8f054132e40c8f446ccc6806ddab98.jpg)  
图4.12caller add  

#### <span style="color: green;">leave</span><span style="color: gray;">指令功能
- leave指令功能相当于以下两条指令：
  - mov esp，ebp
  - pop ebp

####  <span style="color: Gold;">add</span> <span style="color: silver;"> 汇编
- add过程经GCC编译并链接后的代码：
  - 8048469:55 push ebp
  - 804846a:89e5 mov ebp,esp
  - 804846c:8b450c mov eax,dword ptr [ebp+12]`
  - 804846f:8b5508 mov edx,dword ptr [ebp+8]`
  - 8048472:8d0402 lea eax,[edx+eax]`
  - 8048475:5d pop ebp
  - 8048476:c3 ret

</ul>

###  <span style="color: silver;">过程的<span style="color: LightSkyBlue;">代码</span><span style="color: Gold;">组成</span>部分

<ul>

 <span style="color: silver;">

####  <span style="color: silver;">准备
- 将当前栈指针 E<span style="color: Gold;">S</span>P传送到E<span style="color: LightSkyBlue;">B</span>P
- 完成将EBP指向当前栈帧底部的任务

####  <span style="color: Gold;">过程<span style="color: LightSkyBlue;">体
- 执行主要功能
- 过程体结束时将返回值放在 E<span style="color: DarkRed;">A</span>X中

#### <span style="color: green;">结束
- 通过将EBP弹出栈帧来恢复 E<span style="color: LightSkyBlue;">B</span>P值
- 在栈中退出过程的栈帧
- 使栈顶指向返回地址 

</ul>

</ul>

</ul>

# <span style="color: purple;">C</span>ISC  <span style="color: LimeGreen;">R</span>ISC  

<ul>

##  <span style="color: silver;">发展方向

<ul>

-  <span style="color: silver;">方向一：增强和<span style="color: purple;">复杂</span>化
    -  <span style="color: Gold;">增强</span>原有指令功能
    - 设置更<span style="color: purple;">复杂</span>的新指令
    - 实现软件功能的 <span style="color: GreenYellow;">硬化</span>
    - 典型代表：
      - x86架构计算机
-  <span style="color: silver;">方向二： <span style="color: LimeGreen;">精简</span>和高效化
     - <span style="color: green;">减少</span>指令种类
     -  <span style="color: LimeGreen;">简化</span>指令功能
     -  <span style="color: black;">提高</span>指令执行<span style="color: RoyalBlue;">速度
     - 典型代表：
       - ARM、MIPS架构计算机

</ul>

##  <span style="color: silver;"><span style="color: purple;">复杂</span>指令系统计算机（<span style="color: purple;">C</span>ISC）</span>
Complex Instruction Set Computer

<ul>

###  <span style="color: silver;">产生背景

<ul>

 <span style="color: silver;">

- 集成电路技术发展
  - 导致软件 <span style="color: Gold;">成本</span>不断 <span style="color: black;">上升</span>
- 指令<span style="color: LightSkyBlue;">系统</span> <span style="color: LimeGreen;">改进</span>
  - 增加更多指令
  - 增加更复杂指令
  - 目的：适应不同应用领域
</span>

</ul>

>pro： CISC的特点(2017)  

###  <span style="color: Gold;">特点

<ul>

 <span style="color: silver;">

- 指令<span style="color: LightSkyBlue;">系统
  - 复杂 <span style="color: black;">庞大
  - 指令数目一般为200条以上

- <span style="color: Gold;">特性
  - 长度 <span style="color: black;">不</span> <span style="color: LimeGreen;">固定</span>
  - 格式多样
  - 寻址方式多样
  - 访存指令不受限制

- 指令<span style="color: green;">执行
  - 使用 <span style="color: Gold;">频度 <span style="color: black;">差异大
  - 执行 <span style="color: LimeGreen;">时间</span>差异大
  - 大多数指令需多个时钟周期完成

-  <span style="color: Gold;">控制</span>器实现
     - 主要采用 <span style="color: SlateBlue;">微</span>程序控制
     - 部分复杂指令 <span style="color: black;">无法</span>采用 <span style="color: GreenYellow;">硬</span><span style="color: green;">连线</span>控制
</span>

</ul>

###  <span style="color: LimeGreen;">局限性

<ul>

-  <span style="color: silver;"> <span style="color: black;">庞大</span>的指令系统
     - 对指令设计提出极高要求
     - 研制周期长
-  <span style="color: silver;">指令使用<span style="color: orange;">频率</span> <span style="color: black;">不</span> <span style="color: LimeGreen;">均衡</span>
     - <span style="color: LightSkyBlue;">高</span>~使用指令
       - 占指令总数 <span style="color: black;">20%</span>（简单指令）
       - 但执行次数占程序的80%
     -  <span style="color: GreenYellow;">低</span>~使用指令
       - 占指令总数 <span style="color: black;">80%</span>（复杂指令）
       - 但执行次数仅占程序的20%

</ul>

</ul>

##   <span style="color: silver;"><span style="color: LimeGreen;">精简</span>指令系统计算机（ <span style="color: LimeGreen;">R</span>ISC）</span>
 <span style="color: LimeGreen;">Reduced</span> Instruction Set Computer

<ul>

###  <span style="color: silver;">设计理念

<ul>

- 中心思想：
  - 要求指令系统 <span style="color: LimeGreen;">简化
  -  <span style="color: silver;">尽量使用</span>寄存器-寄存器操作指令
  - 指令格式力求<u>一致</u>

</ul>

###  <span style="color: Gold;">特点</span>

<ul>

- <span style="color: LightSkyBlue;">设计
  -  <span style="color: silver;">选取使用<span style="color: orange;">频率</span><span style="color: black;">最高</span>的 <span style="color: LimeGreen;">简单</span><span style="color: LightSkyBlue;">指令</span>
  - <span style="color: purple;">复杂</span>~ 由  <span style="color: LimeGreen;">简单</span>~ <span style="color: green;">组合</span> <span style="color: Gold;">实现

-  <span style="color: Gold;">特性
   - <span style="color: LightSkyBlue;">长度</span>fix
   -  <span style="color: LimeGreen;">格式</span><span style="color: green;"> 种类</span>少
   - <span style="color: green;">寻址</span>方式~

- 内存<span style="color: green;">访问
  - 只有LOAD/STORE指令可访存
  - 其余指令在寄存器间进行

-  <span style="color: GreenYellow;">硬件</span> <span style="color: Gold;">特点</span>
   - CPU中通用寄存器数量多
   - 采用指令流水线技术
   - 大部分指令在一个时钟周期内完成
   - 以硬布线控制为主
   - 不用或少用微程序控制

- 编译优化
  - 特别重视编译优化工作
  - 以减少程序执行时间

</ul>

###   <span style="color: silver;"><span style="color: Gold;">兼容性</span>问题

<ul>

-  <span style="color: silver;"><span style="color: purple;">C</span>ISC <span style="color: black;">大多能</span>实现软件兼容
-   <span style="color: silver;"><span style="color: LimeGreen;">R</span>ISC简化指令系统，与老机器 <span style="color: black;">不</span>~
-  <span style="color: silver;">现状：
   -  <span style="color: black;">Intel</span>几乎一统江湖
   -  <span style="color: black;">早期</span>软件 <span style="color: black;">多</span>基于<span style="color: purple;">C</span>ISC设计
   - <span style="color: LightSkyBlue;">现代</span><span style="color: purple;">C</span>ISC已 <span style="color: black;">融合</span> <span style="color: LimeGreen;">R</span>ISC特性，性能差距缩小

</ul>

</ul>

</ul>

## <span style="color: Goldenrod;">比较

<ul>

###  <span style="color: silver;"><span style="color: purple;">R</span>ISC的优势

<ul>

- VLSI芯片面积利用
  - CISC：控制存储器占CPU芯片面积50%以上
  - RISC：硬布线逻辑只占CPU芯片面积10%左右
- 运算速度
  - 指令数、寻址方式和格式种类少
  - 多个通用寄存器
  - 采用流水线技术
- 设计和可靠性
  - 设计周期短
  - 逻辑简单，出错概率低
- 编译优化
  - 指令类型少，寻址方式少
  - 便于编译程序选择更有效的指令和寻址方式

![]`(https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c72ca4df9a8e8d7fdeb190d640247354dcff3e2ee6fb58e6a641d46da41d6b00.jpg)  

</ul>

</ul>

</ul>

# <span style="color: gray;">本章小结</span>  

<ul>

<details>
本章开头提出的问题的参考答案如下。  

1）什么是指令？什么是指令系统？为什么要引入指令系统？  

- 指令
  - 是要计算机执行某种操作的命令

- 指令系统
  - 是一台计算机中所有机器指令的集合

- 引入指令系统的好处
  - 避免用户与二进制代码直接接触
  - 使用户编写程序更为方便

- 指令系统的重要性
  - 是表征计算机性能的重要因素
  - 影响范围
    - 直接影响机器的硬件结构
    - 直接影响系统软件
    - 影响机器的适用范围

2）一般来说，指令分为哪些部分？每部分有什么用处？  

- 一条指令通常包括两部分：
  - 操作码字段
    - 指出指令应执行的操作性质和功能
    - 是识别和了解指令的关键信息
    - 用于区分操作数地址内容的组成和使用方法
  - 地址码字段
    - 用于给出被操作信息的地址
    - 包括以下地址类型：
      - 参加运算的操作数地址
      - 运算结果的保存地址
      - 程序的转移地址
      - 被调用子程序的入口地址
3）对于一个指令系统来说，寻址方式多和少有什么影响？  

- 寻址方式的影响
  - 寻址方式多
    - 优点：让用户编程更为方便
    - 缺点：
      - 造成CPU结构的复杂化
      - 不利于指令流水线的运行
  - 寻址方式少
    - 优点：能够提高CPU的效率
    - 缺点：
      - 使编程变得复杂
      - 很难满足用户的需求
</details>

</ul>

# <span style="color: gray;">常见问题和易混淆知识点</span>  

<ul>

<details>
1.简述各常见指令寻址方式的特点和适用情况。  

- 常见指令寻址方式特点和适用情况：
  - 立即寻址
    - 操作数获取便捷
    - 通常用于给寄存器赋初值

  - 直接寻址
    - 相对于立即寻址，缩短了指令长度

  - 间接寻址
    - 扩大了寻址范围
    - 便于编制程序
    - 易于完成子程序返回

  - 寄存器寻址
    - 指令字较短
    - 指令执行速度较快

  - 寄存器间接寻址
    - 扩大了寻址范围

  - 基址寻址
    - 扩大了操作数寻址范围
    - 适用于多道程序设计
    - 常用于为程序或数据分配存储空间

  - 变址寻址
    - 主要用于处理数组问题
    - 适合编制循环程序

  - 相对寻址
    - 用于控制程序的执行顺序、转移等

  - 基址寻址和变址寻址的区别
    - 共同点：
      - 有效地址的形成都是寄存器内容+偏移地址
    - 不同点：
      - 基址寻址：
        - 程序员操作的是偏移地址
        - 基址寄存器的内容由操作系统控制
        - 执行过程中是动态调整的
      - 变址寻址：
        - 程序员操作的是变址寄存器
        - 偏移地址是固定不变的
2.一个操作数在内存可能占多个单元，怎样在指令中给出操作数的地址？  

- 现代计算机的内存编址方式
  - 采用字节编址方式
    - 一个内存单元只能存放一字节信息
  - 操作数存储特点
    - 不同数据类型占用不同字节数
      - char: 8位(1字节)
      - int: 16位/32位(2/4字节)
      - float: 32位(4字节)
      - double: 64位(8字节)
    - 一个操作数可能对应多个内存地址

- 操作数地址指定方式
  - 大端方式
    - 指令给出的地址是操作数最高有效字节(MSB)所在的地址
  - 小端方式
    - 指令给出的地址是操作数最低有效字节(LSB)所在的地址
3.装入/存储（LOAD/STORE）型指令有什么特点？  

- 装入/存储型指令特点
  - 用在规整型指令系统中的通用寄存器型指令风格
  - 在RISC指令系统中较为常见
  - 指令格式规整化的要求
    - 指令具有相同的长度
    - 只有LOAD/STORE指令能访问内存
    - 运算指令限制
      - 只能从寄存器取数进行运算
      - 运算结果只能送到寄存器
    - 长度一致性实现
      - 利用寄存器编号较短
      - 主存地址位数较长的特点
      - 通过特定方式使运算指令和访存指令长度一致

- 主要特征
  - 指令格式规整
  - 指令长度统一为32位
  - 程序特点
    - 包含大量装入和存储指令
    - 相比一般通用寄存器型指令风格，程序长度更长
</details>

</ul>

---

以上内容严格按照您的要求处理，保留了所有 Markdown 格式（如图片链接 `![alt]`(url)`），并在标题段落间增加了 `<ul></ul>` 标签以实现缩进效果，同时确保上下有空行。

