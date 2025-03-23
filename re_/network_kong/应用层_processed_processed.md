以下是按照要求对文档进行挖空处理后的内容，格式分为 Markdown 和 HTML 折叠块，确保目录结构完整，关键词、关键步骤等被挖空，并在下方以折叠块形式列出答案。

---

# 第6章应用层  

<ul>

## 【考纲内容】  

<ul>

（一）网络应用模型：____模型；____模型  
（二）____系统（DNS）  
层次域名空间：域名服务器：域名解析过程  
（三）文件传输协议（____）FTP的工作原理：控制连接与数据连接  
（四）电子邮件（____）电子邮件系统的组成结构；电子邮件格式与MIME；____与____  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

客户/服务器</li>
    <li>

P2P</li>
    <li>

域名</li>
    <li>

FTP</li>
    <li>

E-mail</li>
    <li>

SMTP</li>
    <li>

POP3</li>
  </ul>
</details>
</div>

## 【复习提示】  

<ul>

- 本章内容既可以以选择题的形式考查
  - 又可以结合其他章节的内容出综合题
- 所以牢固掌握本章的几个**典型应用层协议**是关键
  - 我们生活中的很多网络应用都是建立在这些协议的基础上的
- 因此，在学习时要注意联系实际
  - 提高学习的兴趣
  - 才会获得更好的学习效果

</ul>
</ul>

# 网络应用模型(<b><span style="color: blue;">C</span></b>/<b><span style="color: green;">S</span></b> P2P)  

<ul>

## 客户/服务器模型  

<ul>

>pro：____模型和____模型的特点（2019）  

### 工作流程

<ul>

- 服务器处于____请求的状态  
- 客户机发出____请求，并等待接收结果  
- 服务器收到请求后，分析请求，进行必要的处理，得到结果并发送给____  

</ul>

### 基本特征

<ul>

- 客户是服务____方，服务器是服务____方
  - 服务器上运行着专门用来提供某种服务的程序，可同时处理多个远程或本地客户的请求
  - 客户程序必须知道服务器程序的____
  - 服务器启动后就一直不断地运行着，被动等待并接收来自各地客户的请求
  - 服务器程序不需要知道客户程序的地址
- 常见应用包括____、文件传输协议（FTP）、远程登录和电子邮件等  

</ul>

### 主要特点

<ul>

- 网络中各计算机的地位不平等，服务器可通过对用户权限的限制来达到管理客户机的目的  
- 整个网络的管理工作由少数服务器担当，因此网络的管理非常集中和方便  
- 客户机相互之间不直接____  
- 可扩展性不佳，受服务器硬件和网络带宽的限制，服务器支持的客户机数有限  
- pic  
  - ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0968413e5bed6d57bfeff2b949e4c6ede48faed1adb20a5457f23dced3514fd4.jpg)  
  图6.1C/S模型  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

C/S</li>
    <li>

P2P</li>
    <li>

接收</li>
    <li>

服务</li>
    <li>

客户机</li>
    <li>

请求</li>
    <li>

提供</li>
    <li>

地址</li>
    <li>

Web</li>
    <li>

通信</li>
  </ul>
</details>
</div>

</ul>

## P2P模型<span style="font-size: 14px;">Peer-to-Peer</span>  

<ul>

### 基本概念

<ul>

- 整个网络中的传输内容不再被保存在中心____上  
- 每个结点都同时具有____、____的功能  
- 其权利和义务都是大体对等的  
- pic  
  - ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/056de45a9156710326d6d90dbab1f59c67aa4d467d7068d514a39ca0ff6589da.jpg)  
  图6.2P2P模型  

</ul>

### 工作原理

<ul>

- 各计算机没有固定的客户和服务器划分  
- 任意一对计算机（称为____方）直接相互通信  
- 本质上仍然使用____模型  
  - 每个结点既作为客户访问其他结点的资源  
  - 又作为服务器提供资源给其他结点访问  

</ul>

### 优点

<ul>

- 减轻了服务器的____压力  
- 消除了对某个服务器的完全____  
- 可以将任务分配到各个结点上  
- 多个客户机之间可以直接共享____  
- 可扩展性好  
- 网络健壮性强  

</ul>

### 缺点

<ul>

- 在获取服务的同时，还要给其他结点提供服务  
- 会占用较多的____，影响整机速度  
- 对硬盘造成较大的____  
- P2P程序已占互联网50%~90%的____  
- 使网络变得非常拥塞  
- 各大ISP通常都对P2P应用持反对态度  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

服务器</li>
    <li>

下载</li>
    <li>

上传</li>
    <li>

对等</li>
    <li>

客户/服务器</li>
    <li>

计算</li>
    <li>

依赖</li>
    <li>

文档</li>
    <li>

内存</li>
    <li>

损伤</li>
    <li>

流量</li>
  </ul>
</details>
</div>

</ul>
</ul>
</ul>

# 域名系统(**DNS**)  

<ul>

>pro：DNS向下依次使用的协议（2018、2021）  

<ul>

- 域名系统（Domain Name System，DNS）是因特网使用的命名系统  
  - 用来把便于人们记忆的具有特定含义的主机名（如www.cskaoyan.com）转换为便于机器处理的____地址  
  - 相对于IP地址，人们更喜欢使用具有特定含义的字符串来标识因特网上的计算机  
  - 值得注意的是，DNS系统采用____模型  
    - 其协议运行在____之上  
    - 使用____号端口  

- 从概念上可将DNS分为三部分  
  - ____域名空间  
  - 域名服务器  
  - 解析器  

</ul>

## 层次域名空间  

<ul>

### 域名特点

<ul>

- 因特网采用层次树状结构的命名方法  
  - 任何一个连接到因特网的主机或路由器，都有一个唯一的层次结构名称，即____（DomainName）  
  - 域（Domain）是名字空间中一个可被管理的划分  
    - 域可以划分为子域，而子域还可以继续划分为子域的子域，形成____域、____域、____域等  
    - 每个域名都由标号序列组成，而各标号之间用____隔开  

- pic  
  - ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/335d7e57f36898e0a60c2df2cb3fd7fdafea1eee6aa0d4604bcebd67d4068da1.jpg)  
  图6.3一个域名的例子  

</ul>

### 域名标号规则

<ul>

- 标号中的英文不区分____  
- 标号中除连字符（-）外不能使用其他的标点符号  
- 每个标号不超过____个字符，多标号组成的完整域名最长不超过____个字符  
- 级别最低的域名写在最____，级别最高的顶级域名写在最____  

</ul>

### 顶级域名分类

<ul>

#### 国家（地区）顶级域名（nTLD）

<ul>

- 国家和某些地区的域名  
  - "____"表示中国  
  - "____"表示美国  
  - "____"表示英国  

</ul>

#### 通用顶级域名（gTLD）

<ul>

- "____"（公司）  
- "____"（网络服务机构）  
- "____"（非营利性组织）  
- "____"（教育机构）  
- "____"（国家或政府部门）  

</ul>

#### 基础结构域名（arpa）

<ul>

- 用于反向域名解析，即____地址反向解析为域名  

</ul>
</ul>

### 域名管理

<ul>

- 各级域名由其上一级的域名管理机构管理  
- 顶级域名由因特网名称与数字地址分配机构（____）管理  
- 国家顶级域名下注册的二级域名均由该国家自行确定  
- 每个组织都可以将它的域再分成一定数目的子域，并将这些子域委托给其他组织去管理  
- pic  
  - ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c7c571a79927f4b59ecf1e91a76adf8317ac05d76b12b5a344e3d21ebb103c82.jpg)  
  图6.4域名空间的树状结构  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

IP</li>
    <li>

客户/服务器</li>
    <li>

UDP</li>
    <li>

53</li>
    <li>

层次</li>
    <li>

域名</li>
    <li>

顶级</li>
    <li>

二级</li>
    <li>

三级</li>
    <li>

点（"."）</li>
    <li>

大小写</li>
    <li>

63</li>
    <li>

255</li>
    <li>

左边</li>
    <li>

右边</li>
    <li>

.cn</li>
    <li>

us</li>
    <li>

uk</li>
    <li>

.com</li>
    <li>

net</li>
    <li>

org</li>
    <li>

edu</li>
    <li>

gov</li>
    <li>

IP</li>
    <li>

ICANN</li>
  </ul>
</details>
</div>

</ul>

## 域名服务器  

<ul>

### 基本概念

<ul>

- 域名到IP地址的解析是由运行在域名服务器上的程序完成的  
- 一个服务器所负责管辖的范围称为区（小于或等于"域"）  
  - 一个区中的所有结点必须是能够____的  
  - 每个区设置相应的权限域名服务器  
- 域名服务器功能  
  - 能够进行域名到____地址的解析  
  - 具有连向其他域名服务器的____  

</ul>

### 域名服务器<span style="color: green;">类型</span>

<ul>

#### **根**域名服务器

<ul>

- 最高层次的域名服务器  
- 知道所有顶级域名服务器的____和____地址  
- 因特网上有____个根域名服务器  
  - 每个"服务器"实际上是冗余服务器的集群  
  - 用来管辖顶级域  
  - 通常不直接转换域名为IP地址  

</ul>

#### **顶级**域名服务器

<ul>

- 负责管理在该顶级域名服务器注册的所有____域名  
- 收到DNS查询请求时给出相应回答  

</ul>

#### **权限**域名服务器（授权域名服务器）

<ul>

- 每台主机都必须在权限域名服务器处____  
- 一台主机最好至少有两个权限域名服务器  
- 许多域名服务器同时充当本地域名服务器和权限域名服务器  
- 总能将其管辖的主机名转换为该主机的____地址  

</ul>

#### **本地**域名服务器

<ul>

- 每个ISP或大学都可以拥有本地域名服务器  
- 主机发出DNS查询请求时，请求报文发送给____域名服务器  
- Windows系统中配置"本地连接"时需填写DNS地址  

</ul>
</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5629d8bb8fb5177ee3e9a1ab880774ec6a90aeab599acde76f7da73da3ff2f16.jpg)  
图6.5DNS的层次结构  

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

连通</li>
    <li>

IP</li>
    <li>

信息</li>
    <li>

域名</li>
    <li>

IP</li>
    <li>

13</li>
    <li>

二级</li>
    <li>

登记</li>
    <li>

IP</li>
    <li>

本地</li>
  </ul>
</details>
</div>

</ul>

## 域名<span style="color: green;">解析</span>过程  

<ul>

>pro：**DNS**(域名系统) 协议的作用（2021)  

### 基本概念

<ul>

- 域名解析是指把域名转化为____地址的过程  
- 当客户端需要域名解析时，通过本机的DNS客户端构造一个DNS请求报文，以____数据报方式发往本地域名服务器  

</ul>

### 查询方式

<ul>

域名解析有两种方式：____查询和____查询。

#### <span style="color: green;">递归</span>查询

<ul>

##### 主机 → 本地域名服务器

<ul>

- 若主机 所询问的本地域名服务器 → 不知道被查询域名的IP地址  
  - 本地~ 以DNS客户的身份  
    - 向**根**域名服务器继续发出____请求报文（即替该主机继续查询）  
  - 而不是 让该主机自己进行下一步的查询  
- 两种查询方式的这一步是相同的  

</ul>

>pro：递归查询DNS的工作原理（2010）  

##### 本地域名服务器 → 其他~ 的 <span style="color: green;">递归</span>查询

<ul>

- 本地域名服务器只需向根域名服务器查询____次  
- 后面的几次查询都是递归地在其他几个域名服务器之间进行的［步骤 $\scriptstyle(\mathbf{\mathcal{B}}\sim\left(\mathbf{\mathcal{C}}\right)$ ]  
- 在步骤 $\circleddash$ 中，本地域名服务器从根域名服务器得到了所需的____地址  
- 最后在步骤 $^\mathrm{\textregistered}$ 中，本地域名服务器把查询结果告诉发起查询的____  
- 因为该方法给根域名服务器造成的负载过大，所以**实际**中**几乎不**使用  

</ul>
</ul>

#### pic

<ul>

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2663a99a9e96d72925ec8df3f3c96270b6c7942f0010e486c7694ed8830a3713.jpg)  
图6.6两种域名解析方式工作原理  
- unsertand:  
  - 递归→顺次；迭代→有1个顺次，后面一步到位  

</ul>

#### <span style="color: orange;">迭代</span>查询

<ul>

>pro：迭代查询DNS的工作原理（2016、2020）  

##### 本地域名服务器→其他~的 <span style="color: orange;">迭代</span>查询

<ul>

- 本地域名服务器 → 根域名~  <span style="color: gray;">的查询  通常是采用____查询</span>  
- 当根域名服务器收到本地域名服务器发出的选代查询请求报文时：  
  - 要么给出所要查询的____地址  
  - 要么告诉本地域名服务器："你下一步应当向哪个顶级域名服务器进行查询"  
- 然后让本地域名服务器进行后续的查询（而不替本地域名服务器进行后续的查询）  
- 顶级域名服务器收到查询报文后：  
  - 要么给出所要查询的IP地址  
  - 要么告诉本地域名服务器下一步应当向哪个____域名服务器查询  
- 最后，知道了所要解析的域名的IP地址后，把这个结果返回给发起查询的____  

</ul>
</ul>
</ul>

### 域名解析<span style="color: lightblue;">eg</span>

<ul>

- 假定某客户机想获知域名为y.abc.com主机的IP地址，域名解析的过程  
- （最多需要使用8个UDP报文：4个查询报文和4个回答报文）：  

  - 客户机向其本地域名服务器发出DNS请求报文（____查询）  
  - 本地域名服务器收到请求后  
    - 查询本地缓存，若没有该记录  
      - 则以DNS客户的身份向根域名服务器发出解析请求报文（____查询）  
  - 根域名服务器收到请求后  
    - 判断该域名属于____域  
      - 将对应的顶级域名服务器dns.com的IP地址返回给本地域名服务器  
  - 本地域名服务器向顶级域名服务器dns.com发出解析请求报文（____查询）  
  - 顶级域名服务器dns.com收到请求后  
    - 判断该域名属于____域  
      - 因此将对应的权限域名服务器dns.abc.com的IP地址返回给本地域名服务器  
  - 本地域名服务器向权限域名服务器dns.abc.com发起解析请求报文（____查询）  
  - 权限域名服务器dns.abc.com收到请求后  
    - 将查询结果返回给本地域名服务器  
  - 本地域名服务器将查询结果保存到本地____  
    - 同时返回给客户机  

- ![image](https://bluejedis.github.io/picx-images-hosting/image.b8xncbpc0.webp)  

  ```mermaid
  sequenceDiagram
      participant C as 客户机
      participant L as 本地域名服务器
      participant R as 根域名服务器
      participant T as 顶级域名服务器dns.com
      participant A as 权限域名服务器dns.abc.com

      C->>+L: 1.DNS请求报文(递归查询)
      L->>+R: 2.解析请求报文(迭代查询)
      R-->>-L: 3.返回顶级域名服务器dns.com的IP
      L->>+T: 4.解析请求报文(迭代查询)
      T-->>-L: 5.返回权限域名服务器dns.abc.com的IP
      L->>+A: 6.解析请求报文(迭代查询)
      A-->>-L: 7.返回查询结果
      L-->>-C: 8.返回查询结果
  ```

</ul>

### 高速缓存

<ul>

- store域名的相关映射信息<span style="color: gray;">(最近查询过的)  
  - another**相同**的**域名查询**arrive  
  - **直接**提供 **____地址**  

- details  
  - 为了提高DINS的查询效率，并减少因特网上的DNS查询报文数量，在域名服务器中广泛地使用了高速缓存  
  - 用来缓存最近查询过的域名的相关映射信息  
  - 当另一个**相同**的**域名查询**到达该DNS服务器时，该服务器就能**直接**提供所要求的IP地址  
  - 因为主机名和IP地址之间的映射不是永久的，所以DNS服务器将在**____**后丢弃高速缓存中的信息  
  - 在主机中同样也很需要高速缓存：  
    - 许多主机在启动时从本地域名服务器下载域名和地址的全部数据库  
    - 维护存放自己最近使用的域名的高速缓存  
    - 只在从**缓存中找不到**域名时才使用域名服务器  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

IP</li>
    <li>

UDP</li>
    <li>

递归</li>
    <li>

迭代</li>
    <li>

查询</li>
    <li>

一次</li>
    <li>

IP</li>
    <li>

主机</li>
    <li>

迭代</li>
    <li>

IP</li>
    <li>

权限</li>
    <li>

主机</li>
    <li>

递归</li>
    <li>

迭代</li>
    <li>

.com</li>
    <li>

迭代</li>
    <li>

abc.com</li>
    <li>

迭代</li>
    <li>

缓存</li>
    <li>

IP</li>
    <li>

一段时间</li>
  </ul>
</details>
</div>

</ul>
</ul>
</ul>

# 文件传输协议(**FTP**)  

<ul>

## 工作原理

<ul>

### 基本功能与特点

<ul>

- 文件传输协议（FileTransferProtocol，FTP）是因特网上使用得最广泛的文件传输协议  
- FTP提供交互式的访问，允许**客户** **指明**文件的<span style="color: orange;">____</span>与<span style="color: lightblue;">____</span>，并允许文件具有<b><span style="color: green;">____</span></b>权限  
- 它屏蔽了各计算机系统的细节，因而适合于在异构网络中的任意计算机之间传送文件  
- FTP提供以下功能：  
  -  提供不同种类主机系统（硬、软件体系等都可以不同）之间的文件____能力  
  -  以用户权限管理的方式提供用户对远程FTP服务器上的文件管理能力  
  -  以匿名FTP的方式提供公用文件____的能力  

</ul>

>pro：FTP在传输层所使用的协议（2009、2018）  
<details>
<summary>TCP</summary>
FTP在传输层所使用的协议是TCP（传输控制协议）。  
FTP依赖于TCP来提供可靠的、面向连接的服务。TCP确保了FTP数据传输的**可靠性**和顺序性，而FTP则利用TCP的这一特性来实现文件的上传和下载功能。  
</details>

### 工作方式

<ul>

- FTP采用<b><span style="color: blue;">C</span></b>/<b><span style="color: green;">S</span></b>的工作方式，使用**____可靠**的传输服务  
- 一个FTP服务器进程可同时为多个客户进程提供服务  
- FTP的服务器进程由两大部分组成：  
  - 一个主进程，负责接收新的____  
  - 另外有若干从属进程，负责处理单个____  

</ul>

#### 工作步骤

<ul>

- 打开熟知端口____（**控制**端口），使客户进程能够连接上  
- 等待客户进程发____请求  
- 启动从属进程处理客户进程发来的请求  
  - 从属进程对客户进程的请求处理完毕后即终止  
- 回到等待状态，继续接收其他客户进程的请求  
  - 主进程与从属进程是并发执行的  

</ul>

#### 状态信息

<ul>

- FTP服务器必须在**____**保留用户的状态信息  
- 特别是服务器必须：  
  - 把指定的用户账户与控制连接联系起来  
  - 服务器必须追踪用户在远程目录树上的当前位置  

</ul>
</ul>

### 控制连接与数据连接

<ul>

>pro：控制连接和数据连接的特点（2017、2023）  

#### port

<ul>

- FTP在工作时使用两个并行的TCP连接：  
  - <span style="color: orange;">控制</span>连接（服务器端口号____）  
  - <span style="color: darkblue;">数据</span>连接（服务器端口号____）  
- 使用两个不同的端口号可以使协议更容易实现  

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c1f0808dc3aeb3e8fa2e341b8a51d60ebf4df40ec50c263cab6b38816315d50f.jpg)  
图6.7控制连接和数据连接  

</ul>

#### 控制连接

<ul>

>pro：控制连接的作用（2009）  

- 服务器监听**____**号端口，等待客户连接  
- 建立在这个端口上的连接称为控制连接，用来**____** <b><span style="color: blue;">____info</span></b>  
- 控制连接特点：  
  - FTP <b><span style="color: blue;">C</span></b>发出的传送请求through~ → <b><span style="color: green;">S</span></b>端的控制进程  
  - 控制连接并**不**用来**____文件**  
  - 在**传输文件时**还可以使用~  
  - ~在整个会话期间一直保持打开状态  

</ul>

#### 数据连接

<ul>

##### 基本工作流程

<ul>

-  <b><span style="color: green;">S</span></b>端的控制进程 在接收到FTP客户发送来的文件传输请求后：  
   - 创建"数据传送 <b><span style="color: orange;">____</span></b>"和"数据 <b><span style="color: green;">____</span></b>"  
     - 数据 <b><span style="color: green;">____</span></b> ：连接 <b><span style="color: blue;">C</span></b>和<b><span style="color: green;">S</span></b>端的数据传送 <b><span style="color: orange;">____</span></b>  
     - 数据传送 <b><span style="color: orange;">____</span></b>  **实际**完成 文件的传送  
   - 在传送完毕后关闭"数据传送连接"并结束运行  

</ul>

##### 传输模式

<ul>

- 数据连接有两种传输模式：  
  - <b><span style="color: orange;">____</span></b>模式 P**ORT**  
  - <b><span style="color: blue;">____</span></b>模式 P _ASV_  

###### PORT模式工作原理

<ul>

- 客户端连接到服务器的____端口  
- 登录成功后要读取数据时：  
  - <b><span style="color: blue;">C</span></b>端随机开放一个端口，并发送命令告知服务器  
  - 服务器收到PORT命令和端口号后，通过____端口和客户端开放的端口连接，发送数据  

</ul>

###### PASV模式工作原理

<ul>

- 客户端要读取数据时：  
  - 发送PASV命令→<b><span style="color: green;">S</span></b>  
    - <b><span style="color: green;">S</span></b>在本地随机开放一个端口，并告知客户端  
  - 客户端再连接到服务器开放的端口进行数据传输  

</ul>

> attention:  
很多教材并未介绍这两种模式，如无特别说明可**默认**为采用**____**模式。  

</ul>
</ul>
</ul>

### 其他特点

<ul>

- 因为FTP使用了一个分离的控制连接，所以也称FTP的控制信息是带外（____）传送的  
- 使用FTP的局限性：  
  - 要修改服务器上的文件，需要先将此文件传送到本地主机  
  - 然后将修改后的文件副本传送到原服务器，来回传送耗费很多时间  
- 网络文件系统（NFS）的优势：  
  - 允许进程打开一个远程文件  
  - 能在该文件的某个特定位置开始读写数据  
  - 可使用户只复制一个大文件中的一个很小的片段，而不需要复制整个大文件  

</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

类型</li>
    <li>

格式</li>
    <li>

存取</li>
    <li>

传输</li>
    <li>

共享</li>
    <li>

TCP</li>
    <li>

请求</li>
    <li>

请求</li>
    <li>

21</li>
    <li>

连接</li>
    <li>

整个会话期间</li>
    <li>

21</li>
    <li>

20</li>
    <li>

21</li>
    <li>

传输</li>
    <li>

控制</li>
    <li>

传送</li>
    <li>

进程</li>
    <li>

连接</li>
    <li>

连接</li>
    <li>

进程</li>
    <li>

进程</li>
    <li>

主动</li>
    <li>

被动</li>
    <li>

21</li>
    <li>

20</li>
    <li>

主动</li>
    <li>

Out-ofband</li>
  </ul>
</details>
</div>

</ul>
</ul>
</ul>

# 电子邮件**E-mail** 

<ul>

## 电子邮件系统的组成结构  

<ul>

### 概述

<ul>

- 电子邮件是一种**____**通信方式，通信时不**需要双方**  **____**  
- 电子邮件把邮件发送到收件人使用的邮件服务器，并放在其中的收件人邮箱中  
- 收件人可以随时上网到自已使用的邮件服务器进行读取  

</ul>

### 主要组成构件

<ul>

一个电子邮件系统应具有三个最主要的组成构件：  
- 用户**____**（User Agent）  
- 邮件<b><span style="color: green;">____</span></b> (Mail Server)  
- 电子邮件使用的<span style="color: orange;">____</span>，如SMTP、POP3（或IMAP）等  

#### pic

<ul>

  - ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/dfcc3f07d050e1a4bd109677dfc892e5090689da8a858b59b160fa23ab313e71.jpg)  
图6.8电子邮件系统最主要的组成构件  

</ul>

#### 用户**代理**（UA）

<ul>

- 用户与电子邮件系统的____  
- 功能：  
  - 向用户提供友好的接口来发送和接收邮件  
  - 至少应当具有撰写、显示和邮件处理的功能  
- 形式：  
  - 通常是运行在PC上的程序（电子邮件客户端软件）  
  - 常见的有Outlook和Foxmail等  

</ul>

#### 邮件<b><span style="color: green;">S</span></b> (Mail Server)

<ul>

- 主要功能：  
  - 发送和接收邮件  
  - 向发件人报告邮件传送的情况（已交付、被拒绝、丢失等）  
- 工作模式：  
  - 以____模式工作  
  - 必须能够同时充当客户和服务器  
  - 例如：  
    - 当邮件服务器A向B发送邮件时，A是SMTP客户，B是SMTP服务器  
    - 当B向A发送邮件时，B是SMTP客户，A是SMTP服务器  

</ul>

>pro：邮件发送协议和读取协议的应用（2012）  

#### 邮件发送、读取<span style="color: orange;">协议</span>

<ul>

- 发送：  
  - 用于用户代理向邮件服务器发送邮件或在邮件服务器之间发送邮件  
  - 如____  
  - 使用"推"（Push）的通信方式  
- 读取：  
  - 用于用户代理从邮件服务器读取邮件  
  - 如____  
  - 使用"拉"（Pull）的通信方式  

</ul>
</ul>

### email的收发过程

<ul>

#### pic

<ul>

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6ca073f4d9e5db6d02912d03369337bbc2dd68d517d1196365f94c02d9453f0b.jpg)  
图6.9电子邮件的发送、接收过程  

</ul>

#### 发送

<ul>

- 发件人调用用户代理来撰写和编辑要发送的邮件  
- 点击"发送邮件"按钮后：  
  - 用户代理用____把邮件传送给发送端邮件服务器  
  - 发送端邮件服务器将邮件放入邮件缓存队列中  
  - 发送端邮件服务器与接收端建立____连接  
  - 依次发送邮件缓存队列中的邮件  

</ul>

#### 接收

<ul>

- SMTP服务器进程收到邮件后：  
  - 将邮件放入收件人的用户邮箱  
  - 等待收件人读取  
- 收件人收信时：  
  - 调用用户代理  
  - 使用____（或IMAP）协议从邮件服务器取回邮件  

</ul>
</ul>
</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

异步</li>
    <li>

同时在场</li>
    <li>

代理</li>
    <li>

S</li>
    <li>

协议</li>
    <li>

接口</li>
    <li>

客户/服务器</li>
    <li>

SMTP</li>
    <li>

POP3</li>
    <li>

SMTP</li>
    <li>

TCP</li>
    <li>

POP3</li>
  </ul>
</details>
</div>

</ul>

## 电子邮件格式与<b><span style="color: purple;">M</span></b>IME  

<ul>

### 电子邮件格式  

<ul>

#### 基本结构

<ul>

- 一个电子邮件分为信封和内容两大部分  
- 邮件内容又分为____和____两部分  
- RFC822规定了邮件的首部格式，而邮件的主体部分则让用户自由撰写  
- 用户写好首部后，邮件系统自动地将信封所需的信息提取出来并写在信封上，用户不需要亲自填写信封上的信息  

</ul>

#### 邮件首部格式

<ul>

- 邮件内容的首部包含一些首部行  
  - 每个首部行由一个关键字后跟冒号再后跟值组成  
  - 有些关键字是必需的，有些则是可选的  
  - 最重要的关键字是____和____  

##### To关键字

<ul>

- 是必填的关键字  
- 后面填入一个或多个收件人的电子邮件地址  
- 电子邮件地址的格式：  
  - 收件人邮箱名 ____ 邮箱所在主机的域名  
  - 如abc@cskaoyan.com  
  - abc cska oy an.com这个邮件服务器上必须是唯一的  
  - 这也就保证了该邮件地址在整个因特网上是唯一的  

</ul>

##### Subject关键字

<ul>

- 是可选关键字  
- 是邮件的____  
- 反映了邮件的主要内容  

</ul>

##### From关键字

<ul>

- 是必填的关键字  
- 通常由邮件系统自动填入  
- 首部与主体之间用一个空行进行分割  

</ul>

##### 典型邮件内容示例

<ul>

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ad6c7d88b4818d5ccfd48b3f5f46a9fdfe4b14571fa005e2fce9eb9bd53a5b58.jpg)  

</ul>
</ul>
</ul>

### 多用途**M**ultipurpose因特网邮件扩展**I**nternet **M**ail **E**xtensions（MIME）  

<ul>

>pro：SMTP直接传输的内容（2018）  

#### MIME产生背景

<ul>

- SMTP只能传送____位ASCII码文本邮件  
- 许多其他非英语国家的文字无法传送  
  - 如中文、俄文  
  - 甚至带重音符号的法文或德文  
- 无法传送可执行文件及其他____对象  

</ul>

#### MIME与SMTP关系

<ul>

- MIME**并未改动**SMTP或取代它  
- 发送过程：  
  - 当发送端发送的邮件中包含有非ASCII码数据时，不能直接使用SMTP进行传送  
  - 要通过MIME进行转换，将非ASCII码数据转换为____码数据  
  - 之后，就可以使用SMTP进行传送  
- 接收过程：  
  - 接收端要使用MIME对接收到的ASCII码数据进行逆转换  
  - 以便可以得到包含有非ASCII码数据的邮件  

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/b50f6aad5d70911c62bdd8542a01a0e00833e19a2ac698dac6e472b48a6ca867.jpg)  
图6.10SMTP与MIME的关系  

#### MIME主要内容

<ul>

- 5个新的邮件首部字段  
  - MIME版本  
  - 内容描述  
  - 内容标识  
  - 传送编码  
  - 内容类型  
- 定义了许多邮件内容的____，对多媒体电子邮件的表示方法进行了标准化  
- 定义了传送编码，可对任何内容格式进行转换，而不会被邮件系统改变  

</ul>
</ul>
</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

首部</li>
    <li>

主体</li>
    <li>

To</li>
    <li>

Subject</li>
    <li>

$@$</li>
    <li>

主题</li>
    <li>

7</li>
    <li>

二进制</li>
    <li>

ASCII</li>
    <li>

格式</li>
  </ul>
</details>
</div>

</ul>

## <b><span style="color: orange;">S</span></b>MTP和<span style="color: blue;">P</span>OP3  

<ul>

>pro：  SMTP和POP3在传输层所使用的服务（2015、2018）  
<details>
<summary> **TCP**</summary>
<p>
SMTP（简单邮件传输协议）和POP3（邮局协议版本3）都是在TCP/IP协议栈的应用层运行的协议，它们分别用于电子邮件的发送和接收。然而，当涉及到传输层时，这两个协议所使用的服务有所不同：  
SMTP：  
SMTP在传输层使用的是TCP（传输控制协议）服务。  
TCP提供了一种可靠的、面向连接的传输服务，确保数据包的顺序传输和错误检测/恢复。  
SMTP利用TCP的这些特性来确保电子邮件消息能够从发送方的邮件服务器可靠地传输到接收方的邮件服务器。  
SMTP通常使用TCP端口25进行通信。  
POP3：  
POP3同样在传输层使用TCP服务。  
与SMTP类似，POP3也依赖于TCP的可靠性和顺序传输特性。  
POP3允许用户从邮件服务器上下载邮件到本地计算机。  
POP3通常使用TCP端口110进行通信。  
总结来说，SMTP和POP3在传输层都使用TCP服务来保证电子邮件的可靠传输。TCP的面向连接和可靠性特性对于确保邮件服务的正常运行至关重要。  
</p></details>

### SMTP和POP3在传输层所使用的服务

<ul>

- SMTP和POP3都是基于____连接的  
  - SMTP使用TCP的____号端口  
  - POP3~____号端口  

</ul>

### <b><span style="color: orange;">S</span></b>MTP  

<ul>

>pro：  SMTP的用途及特点（2013、2014）  

#### 基本概念

<ul>

- 简单邮件传输协议（Simple Mail Transfer Protocol，SMTP）  
  - 控制 两个**____**的<b><span style="color: orange;">S</span></b>MTP进程 交换信息  
- 采用<span style="color: blue;">____</span></b>/<b><span style="color: green;">____</span></b>模式工作：  
  - 发送邮件的<b><span style="color: orange;">S</span></b>MTP进程 → SMTP<span style="color: blue;">____</span></b>  
  - 接收邮件~ → <b><span style="color: green;">____</span></b>  

</ul>

#### SMTP通信阶段

<ul>

##### 连接建立

<ul>

- 发件人的邮件发送到发送方邮件服务器的邮件缓存中后：  
  - SMTP客户就每隔一定时间对邮件缓存扫描一次  
  - 发现有邮件就与接收方邮件服务器的SMTP服务器建立____连接  
  - SMTP服务器使用的熟知端口号为____  
- 连接建立后：  
  - 接收方SMTP服务器发出____（服务就绪）  
  - SMTP客户向SMTP服务器发送____命令，附上发送方的主机名  
- SMTP**连接特点**：  
  - 不使用中间的邮件服务器  
  - TCP连接总是在发送方和接收方这两个邮件服务器之间直接建立  
  - 当接收方邮件服务器故障时，发送方只能等待一段时间后再次尝试连接  

</ul>

##### 邮件传送

<ul>

- 连接建立后开始传送邮件：  
  - 从____命令开始，包含发件人地址  
  - SMTP服务器准备好接收邮件后回答____  
- RCPT命令：  
  - 格式为RCPTTO：<收件人地址>  
  - 每发送一个RCPT命令都有相应信息返回  
  - 作用是确认接收方系统准备状态  
- DATA命令：  
  - 表示开始传送邮件内容  
  - SMTP返回____  
  - 可开始传送邮件内容  
  - 用____表示结束  

</ul>

##### 连接释放

<ul>

- 邮件发送完毕后：  
  - SMTP客户发送____命令  
  - SMTP服务器返回____（服务关闭）  
  - TCP连接释放，邮件传送结束  

</ul>

##### pic

<ul>

- ![SMTP](https://bluejedis.github.io/picx-images-hosting/SMTP.2doqcgsxfj.png)  
- 
  ```mermaid
  sequenceDiagram
      participant Client as SMTP Client
      participant Server as SMTP Server

      Note over Client,Server: Connection Establishment
      Server->>Client: 220 Service ready
      Client->>Server: HELO (hostname)

      Note over Client,Server: Mail Transfer
      Client->>Server: MAIL FROM: <sender address>
      Server->>Client: 250 OK
      Client->>Server: RCPT TO: <recipient address>
      Server->>Client: 250 OK
      Client->>Server: DATA
      Server->>Client: 354 Start mail input
      Client->>Server: Mail content
      Client->>Server: <CRLF>.<CRLF>

      Note over Client,Server: Connection Release
      Client->>Server: QUIT
      Server->>Client: 221 Service closing
  ```

</ul>
</ul>
</ul>

### <span style="color: blue;">P</span>OP3<span style="font-size: 14px;"> Post Office Protocol 3</span>和IM<span style="color: darkred;">A</span>P<span style="font-size: 14px;"> Internet Message Access Protocol </span> 

<ul>

即 邮局协议的第3个版本  
- 规定**____**计算机如何连接到互联网上的邮件服务器进行收发邮件  

互联网消息访问协议  
- 邮件获取协议  
- 允许用户  
  - 从邮件服务器上获取邮件的信息，下载邮件等  
- 与POP3协议相比  
  - 用户可以在不同的设备上访问和操作服务器上的邮件  
  - 无需先将邮件下载到本地设备  

#### POP3

<ul>

- 邮局协议特点：  
  - 是简单但功能有限的邮件读取协议  
  - 现在使用的版本是____  
  - 采用客户/服务器模式  
  - 在传输层使用TCP，端口号为____  
- 工作方式：  
  - "____并保留"：邮件保存在服务器上**可再次读取**  
  - "____并删除"：邮件**读取后**从服务器**删除**  

</ul>

#### IMAP

<ul>

- 因特网报文存取协议特点：  
  - 比POP复杂  
  - 提供创建文件夹、移动邮件等联机命令  
  - IMAP服务器维护会话用户状态信息  
  - 允许用户代理只获取报文部分内容  

</ul>

#### 基于万维网的电子邮件

<ul>

- 特点：  
  - 如Hotmail、Gmail等  
  - 用户浏览器与邮件服务器间使用____  
  - 不同邮件服务器间传送才使用SMTP  

</ul>
</ul>
</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

TCP</li>
    <li>

25</li>
    <li>

110</li>
    <li>

相互通信</li>
    <li>

C</li>
    <li>

S</li>
    <li>

C</li>
    <li>

S</li>
    <li>

TCP</li>
    <li>

25</li>
    <li>

220Serviceready</li>
    <li>

HELO</li>
    <li>

MAIL</li>
    <li>

250OK</li>
    <li>

354 Start mail input</li>
    <li>

<CRLF>.<CRLF></li>
    <li>

QUIT</li>
    <li>

221</li>
    <li>

个人</li>
    <li>

POP3</li>
    <li>

110</li>
    <li>

下载</li>
    <li>

下载</li>
    <li>

HTTP</li>
  </ul>
</details>
</div>

</ul>
</ul>

# 万维网 (**www**)  

<ul>

## WWW的概念与组成结构

<ul>

### WWW基本概念

<ul>

- 万维网（WorldWideWeb，WWW）是分布式、联机式的信息存储空间  
  - 有用的事物称为"____"  
  - 资源由统一资源定位符（____）标识  
  - 通过____协议传送给使用者  
  - 使用者通过单击链接获取资源  

</ul>

### WWW特点与功能

<ul>

- 使用链接方法便于站点间访问  
- 支持按需获取信息  
- 通过____标记语言设计页面  
- 支持页面间超链接  

</ul>

>pro：HTTP在传输层所使用的协议（2018）

### WWW核心组成

<ul>

#### 统一资源定位符（URL）

<ul>

- 标识万维网文档  
- 确保文档____  

</ul>

#### 超文本传输协议（HTTP）

<ul>

- 应用层协议  
- 使用____连接  
- 规范客户端与服务器交互  

</ul>

#### 超文本标记语言（HTML）

<ul>

- 文档结构标记语言  
- 描述页面信息（文字、声音、图像、视频等）  
- 定义页面____  

</ul>
</ul>

### URL结构与格式

<ul>

- 一般形式：<协议>://<主机>:<端口>/<路径>  
  - 协议：http、ftp等  
  - 主机：域名或IP地址  
  - 端口和路径可选  
  - 不区分____  

</ul>

### WWW工作模式

<ul>

#### 客户端/服务器架构

<ul>

- 浏览器作为____程序  
- Web服务器运行服务器程序  

</ul>

#### 工作流程

<ul>

1. 建立连接与请求  
   - Web用户通过浏览器指定____  
   - 与Web服务器建立连接  
   - 发送浏览请求  

2. 服务器处理  
   - URL转换为文件路径  
   - 返回信息给浏览器  

3. 连接终止  
   - 通信完成后关闭连接  

</ul>
</ul>

### WWW在因特网中的地位

<ul>

- 构成因特网**____**部分  
- 与其他服务共存  
  - 电子邮件  
  - Usenet  
  - 新闻组  

</ul>
</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

资源</li>
    <li>

URL</li>
    <li>

HTTP</li>
    <li>

超文本</li>
    <li>

唯一性</li>
    <li>

TCP</li>
    <li>

格式</li>
    <li>

大小写</li>
    <li>

客户端</li>
    <li>

URL</li>
    <li>

最主要</li>
  </ul>
</details>
</div>

</ul>

## 超文本传输协议（HTTP）  

<ul>

### 概述

<ul>

- HTTP是一个面向事务的应用层协议，具有以下特点：  
  - 定义了浏览器与服务器之间的交互规则  
    - 规定了浏览器如何向服务器请求____  
    - 规定了服务器如何向浏览器传送____  
  - 作为可靠文件交换的基础  
    - 支持多种类型文件的交换  
      - 文本文件  
      - 声音文件  
      - 图像文件  
      - 其他多媒体文件  

</ul>

### 操作过程

<ul>

#### 基本工作过程

<ul>

- 浏览器访问WWW服务器时:  
  - 首先完成对WWW服务器的域名解析  
  - 获得服务器IP地址后，通过____发送连接建立请求  

- ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/363a6b1080e3e78e9e80684b408b2662a0e895391584428207a067d33fa28931.jpg)  
图6.11万维网的工作过程  

- 具体过程:  
  - 服务器进程监听TCP端口____  
  - 与浏览器建立TCP连接  
  - 浏览器发送HTTP请求  
  - 服务器返回HTTP响应  
  - 浏览器解释显示Web页  
  - TCP连接释放  

</ul>

>pro：访问Web时可能用到的协议（2014、2021）  

#### 访问网站的具体事件流程

<ul>

- 以访问清华大学网站为例:  
  - URL输入  
  - DNS解析  
  - 建立____连接  
  - HTTP请求发送  
  - 服务器响应  
  - TCP连接释放  
  - 浏览器解释显示  

- 涉及协议:  
  - 应用层: DHCP、DNS、HTTP  
    - DHCP（动态主机配置协议）  
      - 用于自动分配IP地址和其他网络配置参数给网络中的设备  
      - 作用: 简化网络管理，减少IP地址冲突，并提高IP地址的使用效率  
  - 传输层: UDP、TCP  
  - 网际层: IP、ARP  
  - 数据链路层: CSMA/CD或PPP  

</ul>
</ul>

### 特点

<ul>

#### 基本特性

<ul>

- 使用____作为传输层协议  
- HTTP本身____  
- HTTP无状态  

</ul>

#### Cookie机制

<ul>

- 工作原理:  
  - 初次访问:  
    - 服务器生成Cookie识别码  
    - 创建数据库项目  
    - 响应报文添加____  
  - 再次访问:  
    - 请求报文包含Cookie  
    - 服务器查询数据库  
    - 执行个性化工作  

</ul>

#### 连接方式

<ul>

##### 非持续连接

<ul>

- 特点:  
  - 每个对象需单独TCP连接  
  - 时间开销: 文档传输时间 + ____  
  - 服务器负担重  

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/08b82f7f1d88b1f3b0c9eb1da958e256c83631e22d81d9985f204e369daec97d.jpg)  
图6.12请求一个万维网文档所需的时间  

##### 持续连接

<ul>

- 特点:  
  - 服务器保持连接  
  - 可继续传送后续请求和响应  

</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d8a1e5c5841bd5690047250af1122856a1bed175683d0f7181aa958511f8ee4e.jpg)  
图6.13使用持续连接（非流水线）  

>pro：HTTP/1.1页面请求时间的分析（2011、2022）

</ul>
</ul>
</ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

文档</li>
    <li>

文档</li>
    <li>

TCP</li>
    <li>

80</li>
    <li>

TCP</li>
    <li>

TCP</li>
    <li>

无连接</li>
    <li>

Set-cookie</li>
    <li>

2RTT</li>
  </ul>
</details>
</div>

</ul>
</ul>

---

以上内容严格按照要求进行了挖空处理，并以折叠块形式列出答案，未改变原有目录结构，所有内容均完整输出。

以下是根据要求处理后的内容，挖空关键词、公式、步骤，并在每个次级标题下用 HTML 折叠块展示答案。

---

###### 持续连接的两种方式

<ul>

- 非流水线方式:
  - ____请求和响应
  - TCP连接____浪费
- 流水线方式:
  - 连续发送____
  - 共计____延迟
  - 受TCP____窗口限制

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

串行</li>
    <li>

空闲</li>
    <li>

请求</li>
    <li>

1个RTT</li>
    <li>

发送</li>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>

### **报文结构**  

<ul>

>pro：  HTTP请求报文中各种方法的意义（2015）  

#### 报文基本概念

<ul>

- HTTP是面向____的（Text-Oriented）
  - 报文中每个字段都是____码串
  - 每个字段长度____
- 两类HTTP报文：
  - **____**报文：从客户向服务器发送的请求报文
  - **____**报文：从服务器到客户的回答

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

文本</li>
    <li>

ASCII</li>
    <li>

不确定</li>
    <li>

请求</li>
    <li>

响应</li>

  </ul>
</details>
</div>

</ul>
</ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/dc22417e8a5262e7d4371c0540322afc2b85b46a41a3f4dc747d385dd38e9c24.jpg)  
图6.14HTTP的报文结构  

#### 报文组成部分

<ul>

- 开始行
  - 请求报文：称为____行
  - 响应报文：称为____行
  - 三个字段间以____分隔
  - 以____和____结束
- 首部行
  - 说明____、服务器或报文主体信息
  - 可____或不使用
  - 每行包含首部____名和值
  - 以____与实体主体分隔
- 实体主体
  - 请求报文一般____
  - 响应报文可能____

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

请求</li>
    <li>

状态</li>
    <li>

空格</li>
    <li>

CR</li>
    <li>

LF</li>
    <li>

浏览器</li>
    <li>

多行</li>
    <li>

字段</li>
    <li>

空行</li>
    <li>

不用</li>
    <li>

没有</li>

  </ul>
</details>
</div>

</ul>
</ul>

#### 请求报文详解

<ul>

##### 请求行组成

<ul>

- 三个内容：
  - ____
  - 请求资源的____
  - HTTP____

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

方法</li>
    <li>

URL</li>
    <li>

版本</li>

  </ul>
</details>
</div>

</ul>
</ul>

##### 常用方法

<ul>

表6.1HTTP请求报文中常用的几个方法  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/92d53ee3242092e4b08f0650c3127b1480828e42ece80aeb9314973ae11db4ab.jpg)  

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>

  </ul>
</details>
</div>

</ul>
</ul>

##### 典型请求报文示例

<ul>

- ____/bbs/index.htm____
- Host:____
- Connection: ____
- User-Agent:____
- Accept-Language: ____

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

GET</li>
    <li>

HTTP/1.1</li>
    <li>

www.cskaoyan.com</li>
    <li>

Keep-Alive</li>
    <li>

Mozilla/5.0</li>
    <li>

cn</li>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>

#### 响应报文详解

<ul>

##### 状态行组成

<ul>

- 三个内容：
  - HTTP____
  - ____码
  - 解释____码的短语
- 常见状态行示例：
  - HTTP/1.1 202 ____
  - HTTP/1.1 400 ____
  - HTTP/1.1 404 ____

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

版本</li>
    <li>

状态</li>
    <li>

状态</li>
    <li>

Accepted</li>
    <li>

Bad Request</li>
    <li>

Not Found</li>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>
</ul>

### 请求报文举例  

<ul>

#### Wireshark捕获分析

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/515e751b14db49afc2fe22d36d3a943c3fb0480756f37eda47cc30973bd9d976.jpg)  
图6.15用Wireshark捕获的一个HTTP请求报文  

##### 数据帧结构分析

<ul>

- 以太网数据帧：
  - 目的MAC地址：____（第1~6字节）
  - 本机MAC地址：____（第7~12字节）
  - 类型字段：____（第13~14字节）
- IP数据报首部：
  - 源IP地址：____
  - 目的IP地址：____
- TCP报文段首部：第____字节
- TCP数据部分：从第____字节开始

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

00-0f-e2-3f-27-3f</li>
    <li>

00-27-13-67-73-8d</li>
    <li>

08-00</li>
    <li>

219.223.210.112</li>
    <li>

113.105.78.10</li>
    <li>

35~54</li>
    <li>

55</li>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>

#### 常见应用层协议

<ul>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6a17e3acc5e24d05afd103b899739bb177a17668a96e0a1d020cb0a76d5289c1.jpg)  
表6.2常见应用层协议小结

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>
</ul>

# 本章小结及疑难点  

<ul>

1.如何理解客户进程端口号与服务器进程端口号？  

<ul>

通常我们所说的熟知端口号是指应用层协议在服务器端的____端口号，而客户端进程的端口号是由客户端进程____指定的（临时的）。  

当客户进程向服务器进程发出建立连接请求时，要寻找连接服务器进程的____端口号，同时还要告诉服务器进程自己的____端口号。接着，服务器进程就用自己的____端口号与客户进程所提供的端口号建立连接。  

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

默认</li>
    <li>

任意</li>
    <li>

熟知</li>
    <li>

临时</li>
    <li>

熟知</li>

  </ul>
</details>
</div>

</ul>
</ul>

2.因特网和万维网的区别是什么？  

<ul>

因特网（Intemet）是指在ARPA网基础上发展而来的世界上最大的全球性互连网络，它采用____协议族作为通信规则。  

万维网（WWW）是无数个网络站点和网页的集合，它们一起构成了因特网最____的部分（因特网也包括电子邮件、Usenet和新闻组）。  

<ul>

<div>
<details>
  <summary>答案</summary>
  <ul>
    <li>

TCP/IP</li>
    <li>

主要</li>

  </ul>
</details>
</div>

</ul>
</ul>
</ul>

--- 

以上内容严格按照要求处理，保留原目录结构，挖空关键词并用 HTML 折叠块展示答案。图片部分因无具体内容未挖空。

