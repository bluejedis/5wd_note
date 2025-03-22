
# 图above  

<ul>

## 【考纲内容】  

<ul>

（一）图的____概念  

（二）图的存储及____操作  
邻接矩阵：____表：邻接多重表；十字链表  

（三）图的遍历：____优先搜索：广度优先搜索  

（四）图的____应用  
最小（代价）生成树：____路径；拓扑排序：关键路径  

</ul>

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

基本</li>
    <li>

基本</li>
    <li>

邻接</li>
    <li>

深度</li>
    <li>

基本</li>
    <li>

最短</li>
  </ul>
</details>
</div>

## 【知识框架】  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/1736cc1858562584a3b9c75bce02bd73a9deed0a76bcc241d437fa01e41ebb56.jpg)  

## 【复习提示】  

图算法的难度较大，主要掌握____优先搜索与广度优先搜索。  

掌握图的____概念及____性质、图的存储结构（____矩阵、邻接表、邻接多重表和十字链表）及特性、存储结构之间的转化、基于存储结构上的各种遍历操作和各种应用（____排序、最小生成树、最短路径和关键路径）等。  

图的相关算法较多，通常只需掌握其<u>____思想</u>和<u>____步骤</u>，而实现代码不是重点。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

深度</li>
    <li>

基本</li>
    <li>

基本</li>
    <li>

邻接</li>
    <li>

拓扑</li>
    <li>

基本</li>
    <li>

实现</li>
  </ul>
</details>
</div>

### 基本概念  

<ul>

#### 定义  

- 图 $G$ 由____集 $V$ 和____集 $E$ 组成，记为 $G=(V,\,E)$  
  - $V(G)$ 表示图 $G$ 中____的有限非空集  
  - $E(G)$ 表示图 $G$ 中顶点之间的____（边）集合  
  - 若 $V=\{v_{1},\,v_{2},\cdots,\,v_{n}\}$，则用____表示图 $G$ 中顶点的个数  
  - $E=\{(u,v)\mid u{\in}V,v{\in}V\}$，用____表示图 $G$ 中边的条数  

> attention 

线性表可以是空表，树可以是空树，但图不可以是空图。也就是说，图中不能一个顶点也没有，图的____集 $V$ 一定非空，但____集 $E$ 可以为空，此时图中只有顶点而没有边。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顶点</li>
    <li>

边</li>
    <li>

顶点</li>
    <li>

关系</li>
    <li>

$|V|$</li>
    <li>

$|E|$</li>
    <li>

顶点</li>
    <li>

边</li>
  </ul>
</details>
</div>

#### 图的基本类型  

<ul>

##### 有向图  
- 若 $E$ 是____边（也称弧）的有限集合，则图 $G$ 为____图  
  - 弧是顶点的____对，记为____  
  - $v$ 称为____尾，$w$ 称为____头  
  - ____称为从 $v$ 到 $w$ 的弧，也称 $v$ 邻接到 $w$  

图6.1（a）所示的有向图 $G_{1}$ 可表示为：  
$G_{1}\!=\!(V_{1},E_{1})$  
$E_{1}=\{<\!1,2\!>,<\!2,1\!>,<\!2,3\!>\}$  

##### 无向图  
- 若 $E$ 是____边（简称边）的有限集合，则图 $G$ 为____图  
  - 边是顶点的____对，记为 $(v,\,w)$ 或 $(w,v)$  
  - $w$ 和 $\nu$ 互为____点  
  - 边 $(v,w)$ 依附于 $w$ 和 $v$，或称边 $(v,w)$ 和 $v,w$ ____  

图6.1（b）所示的无向图 $G_{2}$ 可表示为：  
$\begin{array}{c}{G_{2}=\left(V_{2},E_{2}\right)}\\ {V_{2}=\left\{1,2,3,4\right\}}\end{array}$  
$E_{2}=\{(1,2),(1,3),(1,4),(2,3),(2,4),(3,4)\}$  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/5151560dfc0c00af5239183bc6f467e3c9e73df7d8ee3886d9de445058a96358.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

有向</li>
    <li>

有向</li>
    <li>

有序</li>
    <li>

$<v,w>$</li>
    <li>

弧</li>
    <li>

弧</li>
    <li>

$<v,w>$</li>
    <li>

无向</li>
    <li>

无向</li>
    <li>

无序</li>
    <li>

邻接</li>
    <li>

相关联</li>
  </ul>
</details>
</div>

##### 简单图、多重图  
- 简单图的条件：  
  - 不存在____边  
  - 不存在顶点到____的边  
- 多重图的特点：  
  - 某两个顶点之间的____数大于1条  
  - 允许顶点通过一条边和____关联  

##### 完全图  
- 无向完全图：  
  - $|E|$ 的取值范围为0到____  
  - 任意两个顶点之间都存在____  
- 有向完全图：  
  - $|E|$ 的取值范围为0到____  
  - 任意两个顶点之间都存在方向相反的____弧  

##### 子图  
- 设有两个图 $G=(V,E)$ 和 $G^{\prime}=(V^{\prime},E^{\prime})$  
  - 若 $V^{\prime}$ 是 $V$ 的____，且 $E^{\prime}$ 是 $E$ 的____，则称 $G^{\prime}$ 是 $G$ 的____  
  - 若有满足 $V(G^{\prime})=V(G)$ 的子图 $G^{\prime}$，则称其为 $G$ 的____子图  

> attention 

并非 $V$ 和 $E$ 的任何子集都能构成 $G$ 的子图，因为这样的子集可能不是图，即 $E$ 的子集中的某些边关联的顶点可能不在这个 $V$ 的____中。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

重复</li>
    <li>

自身</li>
    <li>

边</li>
    <li>

自身</li>
    <li>

$n(n-1)/2$</li>
    <li>

边</li>
    <li>

$n(n-1)$</li>
    <li>

两条</li>
    <li>

子集</li>
    <li>

子集</li>
    <li>

子图</li>
    <li>

生成</li>
    <li>

子集</li>
  </ul>
</details>
</div>

##### 连通、连通图和连通分量  

>pro：图的连通性与边和顶点的关系(2010、2022)  

- 连通的定义：  
  - 在____图中，若从顶点 $\nu$ 到顶点 $w$ 有____存在，则称 $v$ 和 $w$ 是____的  
- 连通图：  
  - 若图 $G$ 中任意两个顶点都是____的，则称图 $G$ 为____图  
- 连通分量：  
  - 无向图中的____连通子图称为____分量  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8d9d6a37be3c6ce09a5a0aa15355ead14bf7a5a3e352c73cf8d0cb852ebd9b30.jpg)  

##### 强连通图、强连通分量  
- 强连通的定义：  
  - 在____图中，若有一对顶点 $v$ 和 $w$，从 $v$ 到 $w$ 和从 $w$ 到 $v$ 之间都有____  
- 强连通图：  
  - 若图中任意一对顶点都是____的  
- 强连通分量：  
  - 有向图中的____强连通子图  

> attention 

在无向图中讨论____性，在有向图中讨论____连通性。  

##### 生成树、生成森林  
- 生成树的特点：  
  - 连通图的生成树是包含图中____顶点的一个____连通子图  
  - 若图中顶点数为 $n$，则它的生成树含有____条边  
- 生成森林：  
  - 在非连通图中，____分量的生成树构成了非连通图的生成____  

![image](https://bluejedis.github.io/picx-images-hosting/test/image.8l03vtq220.webp)  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/bfa9e01aeec1a2c5a3b7b4d36a675036ff24683fc2cf93f63569eaa97879224d.jpg)  

> attention 

区分____连通子图和____连通子图。极大连通子图要求子图必须连通，而且包含尽可能多的顶点和边；极小连通子图是既要保持子图连通又要使得边数最少的子图。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

无向</li>
    <li>

路径</li>
    <li>

连通</li>
    <li>

连通</li>
    <li>

连通</li>
    <li>

极大</li>
    <li>

连通</li>
    <li>

有向</li>
    <li>

路径</li>
    <li>

强连通</li>
    <li>

极大</li>
    <li>

连通</li>
    <li>

强</li>
    <li>

全部</li>
    <li>

极小</li>
    <li>

$n-1$</li>
    <li>

连通</li>
    <li>

森林</li>
    <li>

极大</li>
    <li>

极小</li>
  </ul>
</details>
</div>

##### 顶点的度、入度和出度  

>pro：无向图中顶点和边的关系（2009、2017）  

- 无向图中的度：  
  - 顶点 $v$ 的度是指依附于顶点 $v$ 的____的条数，记为____  
  - 无向图的全部顶点的____之和等于边数的____倍  
- 有向图中的度：  
  - 入度：以顶点 $v$ 为____的有向边的数目，记为____  
  - 出度：以顶点 $v$ 为____的有向边的数目，记为____  
  - 顶点 $v$ 的度等于其____与____之和：____  

##### 边的权和网  
- 边的____值：每条边都可以标上具有某种含义的数值  
- 网：边上带有____值的图  

##### 稠密图、稀疏图  
- 稀疏图：____数很少的图  
- 稠密图：____数较多的图  
- 判断标准：  
  - 当图 $G$ 满足____时，可以将 $G$ 视为稀疏图  

##### 路径相关概念  
###### 路径、路径长度和回路  
- 路径：顶点序列____  
- 路径长度：路径上的____的数目  
- 回路或环：第一个顶点和最后一个顶点____的路径  

###### 简单路径、简单回路  

>pro：路径、回路、简单路径、简单回路的定义（2011）  

- 简单路径：在路径序列中，顶点____出现的路径  
- 简单回路：除第一个顶点和最后一个顶点外，其余顶点____出现的回路  

###### 距离  
- 定义：从顶点 $u$ 出发到顶点 $v$ 的____路径的长度  
- 特殊情况：若从 $u$ 到 $v$ 根本不存在路径，则记该距离为____  

##### 有向树  
- 定义：一个顶点的____为0、其余顶点的____均为1的有向图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

边</li>
    <li>

$\operatorname{TD}(\nu)$</li>
    <li>

度</li>
    <li>

2</li>
    <li>

终点</li>
    <li>

$\operatorname{ID}(v)$</li>
    <li>

起点</li>
    <li>

$\operatorname{OD}(v)$</li>
    <li>

入度</li>
    <li>

出度</li>
    <li>

$\operatorname{TD}(\nu)=\operatorname{ID}(\nu)+\operatorname{OD}(\nu)$</li>
    <li>

权</li>
    <li>

权</li>
    <li>

边</li>
    <li>

边</li>
    <li>

$|E|<|V|\log|V|$</li>
    <li>

$v_{p},v_{i_{1}},v_{i_{2}},\cdots,v_{i_{m}},v_{q}$</li>
    <li>

边</li>
    <li>

相同</li>
    <li>

不重复</li>
    <li>

不重复</li>
    <li>

最短</li>
    <li>

$\infty$</li>
    <li>

入度</li>
    <li>

入度</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 存储及基本操作  

图的存储必须要完整、准确地反映____集和____集的信息。根据不同图的结构和算法，采用不同的存储方式将对程序的效率产生相当大的影响，因此所选的存储结构应适合于待求解的____。  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顶点</li>
    <li>

边</li>
    <li>

问题</li>
  </ul>
</details>
</div>

<ul>

#### 邻接矩阵法  

<ul>

##### 基本概念  
- 邻接矩阵存储的组成：  
  - 用____数组存储图中顶点的信息  
  - 用____数组存储图中边的信息（即各顶点之间的____关系）  
  - 存储顶点之间____关系的二维数组称为____矩阵  

##### 矩阵表示  
- 顶点数为 $n$ 的图 $G\!=\!(V,E)$ 的邻接矩阵 $A$ 是____的  
- 将 $G$ 的顶点编号为____  

> pro：图的邻接矩阵存储及相互转换（2011、2015、2018）  

##### 权值表示  
- 对带权图：  
  - 若顶点 $v_{i}$ 和 $v_{j}$ 之间有____相连，则存放该边对应的____  
  - 若顶点 $v_{i}$ 和 $v_{j}$ 不相连，则通常用____或____表示  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/452c3b970dbd32b4453acaa0973977edccafa0e6e194da0812a21b6fe6148c9b.jpg)  
图6.5有向图、无向图及网的邻接矩阵  

> pro：（算法题）邻接矩阵的遍历及顶点的度的计算（2021、2023）  

##### 存储结构定义  

```c
#define MaxVertexNum 100
typedef char VertexType;
typedef int EdgeType; // 边对应的数据类型
typedef struct {
    VertexType vex[MaxVertexNum]; // 顶点表
    EdgeType edge[MaxVertexNum][MaxVertexNum]; // ____矩阵，边表
    int vexnum, arcnum; // 图的当前____数和____数
} MGraph;
```

> attention 

##### 注意事项  
- 简单应用可直接用____数组作为邻接矩阵  
- EdgeType可用值为0和1的____类型  
- 无向图的邻接矩阵是____矩阵  
- 空间复杂度为____  

> pro：邻接矩阵的遍历的时间复杂度（2021）  

##### 特点  
- 无向图特性：  
  - 邻接矩阵一定是____矩阵（并且唯一）  
  - 只需存储上（或下）____矩阵元素  

> pro：基于邻接矩阵的顶点的度的计算（2013、2021、2023）  

- 度的计算：  
  - 无向图：第 $i$ 行（或列）____元素个数为顶点 $i$ 的____  
  - 有向图：  
    - 第 $i$ 行____元素个数为____  
    - 第 $i$ 列____元素个数为____  

- 其他特性：  
  - 容易确定任意两顶点间是否____  
  - 确定边数需要遍历____元素  
  - 适合存储____图  

> pro：计算 $A^{2}$ 并说明 $A^{2}[i][j]$ 的含义（2015）  

- 路径计算：  
  - $A^{n}$ 的元素表示长度为____的路径数目  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一维</li>
    <li>

二维</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

$n \times n$</li>
    <li>

$v_{1},v_{2},\cdots,v_{n}$</li>
    <li>

边</li>
    <li>

权值</li>
    <li>

0</li>
    <li>

$\infty$</li>
    <li>

邻接</li>
    <li>

顶点</li>
    <li>

边</li>
    <li>

二维</li>
    <li>

枚举</li>
    <li>

对称</li>
    <li>

$O(n^{2})$</li>
    <li>

对称</li>
    <li>

三角</li>
    <li>

非零</li>
    <li>

度</li>
    <li>

非零</li>
    <li>

出度</li>
    <li>

非零</li>
    <li>

入度</li>
    <li>

有边</li>
    <li>

所有</li>
    <li>

稠密</li>
    <li>

$n$</li>
  </ul>
</details>
</div>

</ul>

#### 邻接表法  

<ul>

##### 基本概念  
- 适用于____图  
- 结合____存储和____存储方法  
- 组成结构：  
  - 对每个顶点建立____链表  
  - 单链表结点表示____于该顶点的边  

##### 存储结构  
- 两种结点类型：  
  - ____表结点  
  - ____表结点  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2ad0c70c97181ad46888d00bf7d1e1937cfcb142dda79077f20ff660fa09fa94.jpg)  
图6.6顶点表和边表结点结构  

###### 结点组成  
- 顶点表结点：  
  - 顶点域（data）：存储____信息  
  - 边表头指针域（firstarc）：指向第一条____  
- 边表结点：  
  - 邻接点域（adjvex）：存储____顶点编号  
  - 指针域（nextarc）：指向下一条____  

> pro：图的邻接表存储的应用（2014）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3503c0ddc86c46b037cc84f917b3f4f690516b2cbec074113c67d50a2be472cf.jpg)  
图6.7无向图邻接表表示法实例  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/99831cb9adda79d80ce0087a8c64203ed478c2696ff7c44eddc97b0e34c61786.jpg)  
图6.8有向图邻接表表示法实例  

##### 代码实现  

```c
#define MaxVertexNum 100 // 图中顶点数目的最大值
typedef struct ArcNode { // 边表结点
    int adjvex; // 该弧所指向的顶点的位置
    struct ArcNode *nextarc; // 指向下一条弧的指针
    // InfoType info; // 网的边权值
} ArcNode;

typedef struct VNode { // 顶点表结点
    VertexType data; // ____信息
    ArcNode *firstarc; // 指向第一条____该顶点的弧的指针
} VNode, AdjList[MaxVertexNum];

typedef struct {
    AdjList vertices; // 邻接表
    int vexnum, arcnum; // 图的顶点数和弧数
} ALGraph; // ALGraph是以____表存储的图类型
```

##### 存储特点  
- 空间复杂度：  
  - 无向图：____  
  - 有向图：____  

> pro：邻接矩阵法和邻接表法的适用性差异（2011）  

- 适用性：  
  - 适合____图  
  - 容易找出顶点的所有____边  
  - 确定两顶点间是否____效率较低  

- 度的计算：  
  - 无向图：计算____表结点个数  
  - 有向图：  
    - 出度：计算____表结点个数  
    - 入度：需遍历全部____表  

- 表示特性：  
  - 不唯一性：取决于____的输入次序  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

稀疏</li>
    <li>

顺序</li>
    <li>

链式</li>
    <li>

单</li>
    <li>

依附</li>
    <li>

顶点</li>
    <li>

边</li>
    <li>

顶点</li>
    <li>

边</li>
    <li>

邻接</li>
    <li>

顶点</li>
    <li>

依附</li>
    <li>

邻接</li>
    <li>

$O(|V|+2|E|)$</li>
    <li>

$O(|V|+|E|)$</li>
    <li>

稀疏</li>
    <li>

邻</li>
    <li>

有边</li>
    <li>

边</li>
    <li>

边</li>
    <li>

邻接</li>
    <li>

边</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 图的存储结构  

<ul>

#### 十字链表  

<ul>

- 定义：十字链表是有向图的一种____存储结构  
- 结点类型：  
  - ____结点：表示每条弧  
  - ____结点：表示每个顶点  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/74266ee7e563c116de5fb9a491b7ab8fe3ff5c963390bb5cd61fc774107b00af.jpg)  

- 弧结点结构：  
  - 五个域组成：  
    - tailvex：____顶点编号  
    - headvex：____顶点编号  
    - hlink：指向____相同的下一个弧结点  
    - tlink：指向____相同的下一个弧结点  
    - info：该弧的____信息  

- 顶点结点结构：  
  - 三个域组成：  
    - data：顶点____信息  
    - firstin：指向以该顶点为____的第一个弧结点  
    - firstout：指向以该顶点为____的第一个弧结点  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/22cd3b3c3edea93d459339c492f17aca8da4b3af583a22feddb788230535e18b.jpg)  
图6.9有向图的十字链表表示（弧结点省略info域）  

- 特点：  
  - 顶点结点间采用____存储  
  - 易于找到以 $v_i$ 为____或____的弧  
  - 便于求顶点的____和____  
  - 表示不唯一，但一个表示唯一确定一个____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

链式</li>
    <li>

弧</li>
    <li>

顶点</li>
    <li>

弧尾</li>
    <li>

弧头</li>
    <li>

弧头</li>
    <li>

弧尾</li>
    <li>

相关</li>
    <li>

数据</li>
    <li>

弧头</li>
    <li>

弧尾</li>
    <li>

顺序</li>
    <li>

尾</li>
    <li>

头</li>
    <li>

出度</li>
    <li>

入度</li>
    <li>

图</li>
  </ul>
</details>
</div>

</ul>

#### 邻接多重表  

<ul>

- 定义：邻接多重表是____图的一种____存储结构  
- 优势：相比邻接表，更易于处理____的操作  

- 边结点结构：  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/ca384d2315602e299aa8d39ceb099e8698afb0d7699ccc8d0753379c1c14fd9d.jpg)  
  - 组成域：  
    - ivex、jvex：____的两个顶点编号  
    - ilink：指向下一条____于ivex的边  
    - jlink：指向下一条____于jvex的边  
    - info：____的相关信息  

- 顶点结点结构：  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/6d2235b1c5b4ab153bc8da98b8ef339ac5118bd7a377aa55aa99addf45c45911.jpg)  
  - 组成域：  
    - data：顶点____信息  
    - firstedge：指向第一条____的边  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/00d0a1988e38e61fac9ff788e80b20481d9c5be4523450b723ae3a32fba6dab2.jpg)  
图6.10无向图的邻接多重表表示（边结点省略info域）  

- 存储特点：  
  - 依附同一顶点的边在同一____中  
  - 每个边结点同时链接在____链表中  
  - 比邻接表更节省____（一个边结点表示一条边）  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

无向</li>
    <li>

链式</li>
    <li>

边</li>
    <li>

依附</li>
    <li>

依附</li>
    <li>

依附</li>
    <li>

边</li>
    <li>

相关</li>
    <li>

依附</li>
    <li>

链表</li>
    <li>

两个</li>
    <li>

空间</li>
  </ul>
</details>
</div>

</ul>

表6.1图的四种存储方式的总结  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/4c4a4bbdb4cf810f3765a867f779a8771cbd4a4349fecb05e02ba697baa3b451.jpg)  

</ul>

### 图的基本操作  

<ul>

- 特点：  
  - 独立于____结构  
  - 不同存储方式____不同  
  - 需考虑存储方式对____效率的影响  

- 主要操作：  
  - Adjacent(G,x,y)：判断____是否存在  
  - Neighbors(G,x)：列出____边  
  - Insert_Vertex(G,x)：插入____  
  - Delete_Vertex(G,x)：删除____  
  - AddEdge(G,x,y)：添加____  
  - RemoveEdge(G,x,y)：删除____  
  - First_Neighbor(G,x)：求第一个____点  
  - Next_Neighbor(G,x,y)：求下一个____点  
  - Get_edge_value(G,x,y)：获取____值  
  - Set_edge_value(G,x,y,v)：设置____值  

- 遍历算法：  
  - 目的：访问每个顶点____  
  - 类型：  
    - ____优先遍历  
    - ____优先遍历  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

存储</li>
    <li>

性能</li>
    <li>

算法</li>
    <li>

边</li>
    <li>

邻接</li>
    <li>

顶点</li>
    <li>

顶点</li>
    <li>

边</li>
    <li>

边</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

边权</li>
    <li>

边权</li>
    <li>

一次</li>
    <li>

深度</li>
    <li>

广度</li>
  </ul>
</details>
</div>

</ul>

</ul>

# 图的遍历  

<ul>

## 基本概念  

<ul>

- 定义：从图中某一顶点出发，按照特定____方法沿边访问所有顶点各____  
- 特点：  
  - 树的遍历是特殊的____遍历  
  - 是解决____性、____排序、关键路径等问题的基础  
  - 比树遍历复杂，需避免____访问  
    - 使用____数组标记已访问顶点  
- 主要方法：  
  - ____优先搜索  
  - ____优先搜索  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

搜索</li>
    <li>

一次</li>
    <li>

图</li>
    <li>

连通</li>
    <li>

拓扑</li>
    <li>

重复</li>
    <li>

visited[]</li>
    <li>

广度</li>
    <li>

深度</li>
  </ul>
</details>
</div>

</ul>

## 广度优先搜索  

<ul>

### 基本原理  

<ul>

- 类似二叉树____遍历  
- 基本思想：  
  - 先访问____顶点 $v$  
  - 依次访问 $v$ 的未访问____点  
  - 再访问这些____点的未访问____点  
  - 重复直至所有顶点访问____  
- 特点：  
  - 由近至远____访问  
  - 需要辅助____记录下一层顶点  
  - ____递归算法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

层序</li>
    <li>

起始</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

完毕</li>
    <li>

分层</li>
    <li>

队列</li>
    <li>

非</li>
  </ul>
</details>
</div>

</ul>

### 算法实现  

<ul>

#### 主框架  

```c
bool visited[MAX_VERTEX_NUM];
void BFSTraverse(Graph G) {
    for (i = 0; i < G.vexnum; ++i)
        visited[i] = ____;
    InitQueue(Q);
    for (i = 0; i < G.vexnum; ++i)
        if (!visited[i])
            BFS(G, i);
}
```

#### 邻接表实现  

```c
void BFS(ALGraph G, int i) {
    visit(i);
    visited[i] = ____;
    EnQueue(Q, i);
    while (!IsEmpty(Q)) {
        DeQueue(Q, v);
        w = p->____;
        if (visited[w] == ____) {
            visit(w);
            visited[w] = ____;
            EnQueue(Q, w);
        }
    }
}
```

#### 邻接矩阵实现  

```c
void BFS(MGraph G, int i) {
    visit(i);
    visited[i] = ____;
    EnQueue(Q, i);
    while (!IsEmpty(Q)) {
        DeQueue(Q, v);
        for (w = 0; w < G.vexnum; w++)
            if (visited[w] == ____ && G.edge[v][w] == ____) {
                visit(w);
                visited[w] = ____;
                EnQueue(Q, w);
            }
    }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

FALSE</li>
    <li>

TRUE</li>
    <li>

adjvex</li>
    <li>

FALSE</li>
    <li>

TRUE</li>
    <li>

TRUE</li>
    <li>

FALSE</li>
    <li>

1</li>
    <li>

TRUE</li>
  </ul>
</details>
</div>

</ul>

### 遍历示例  

<ul>

> pro：广度优先遍历的过程（2013）  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/42543e3cbbf650ee51abdafe55648cf488f5a427608b8a1e32178060c28985aa.jpg)  
图6.11一个无向图G  

- 遍历过程：  
  - 从顶点 $a$ 开始：  
    1. $a$ ____队  
    2. 访问 $a$ 的____点 $b,c$ 并____队  
    3. 访问 $b$ 的____点 $d,e$ 并____队  
    4. 访问 $c$ 的____点 $f,g$ 并____队  
    5. 检查 $d$ 无未访问____点  
    6. 访问 $e$ 的____点 $h$ 并____队  
    7. 检查 $h$，队列为____，结束  
  - 最终遍历序列：____  
- 结论：与二叉树____遍历一致，是其扩展  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

入</li>
    <li>

邻接</li>
    <li>

入</li>
    <li>

邻接</li>
    <li>

入</li>
    <li>

邻接</li>
    <li>

入</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

入</li>
    <li>

空</li>
    <li>

abcdefgh</li>
    <li>

层序</li>
  </ul>
</details>
</div>

</ul>

### BFS算法的性能分析  

<ul>

#### 空间复杂度  
- 无论是邻接表还是邻接矩阵的存储方式：  
  - BFS算法都需要借助一个辅助____ $Q$  
  - $n$ 个顶点均需____一次  
  - 在最坏的情况下，空间复杂度为____  

#### 时间复杂度  
> pro：基于邻接表存储的BFS的效率（2012）  

- 遍历图的过程实质上是对每个顶点查找其____点的过程  
- 耗费的时间取决于所采用的____结构  
  - 采用____表存储时：  
    - 每个顶点均需搜索（或入队）一次，时间复杂度为____  
    - 在搜索每个顶点的____点时，每条边至少访问一次，时间复杂度为____  
    - 总的时间复杂度为____  
  - 采用____矩阵存储时：  
    - 查找每个顶点的____点所需的时间为____  
    - 总时间复杂度为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

队列</li>
    <li>

入队</li>
    <li>

$O(|V|)$</li>
    <li>

邻接</li>
    <li>

存储</li>
    <li>

邻接</li>
    <li>

$O(|V|)$</li>
    <li>

邻接</li>
    <li>

$O(|E|)$</li>
    <li>

$O(|V|+|E|)$</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

$O(|V|)$</li>
    <li>

$O(|V|^{2})$</li>
  </ul>
</details>
</div>

</ul>

### BFS算法求解单源最短路径问题  

<ul>

#### 问题定义  
- 若图 $G=(V,\,E)$ 为非带权图：  
  - 定义从顶点 $u$ 到顶点 $v$ 的最短路径 $d(u,\,v)$ 为从 $u$ 到 $v$ 的任何路径中最少的____数  
  - 若从 $u$ 到 $v$ 没有通路，则 $d(u,v)=____$  

#### 算法原理  
- 使用BFS可以求解非带权图的____源最短路径问题  
- 这是由广度优先搜索总是按照距离由____到____来遍历图中每个顶点的性质决定的  

#### 算法实现  

```c
void BFSMINDistance(Graph G, int u) { // d[i]表示从u到i结点的最短路径
    for (i = 0; i < G.vexnum; ++i)
        d[i] = ____; // 初始化路径长度
    visited[u] = ____;
    d[u] = ____;
    EnQueue(Q, u);
    while (!IsEmpty(Q)) { // BFS算法主过程
        DeQueue(Q, u); // 队头元素u出队
        for (w = FirstNeighbor(G, u); w >= 0; w = NextNeighbor(G, u, w))
            if (!visited[w]) { // w为u的尚未访问的邻接顶点
                visited[w] = ____; // 设已访问标记
                d[w] = ____; // 路径长度加1
                EnQueue(Q, w); // 顶点w入队
            }
    }
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

边</li>
    <li>

$\infty$</li>
    <li>

单</li>
    <li>

近</li>
    <li>

远</li>
    <li>

$\infty$</li>
    <li>

TRUE</li>
    <li>

0</li>
    <li>

TRUE</li>
    <li>

d[u] + 1</li>
  </ul>
</details>
</div>

</ul>

### 广度优先生成树  

<ul>

#### 生成树特点  
- 在广度遍历的过程中，可以得到一棵遍历树，称为广度优先____树  
- 存储方式对生成树的影响：  
  - ____矩阵存储表示是唯一的，所以其广度优先生成树也是____的  
  - ____表存储表示不唯一，所以其广度优先生成树也是____的  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/a558e1e1aab5256ec092199096715091d9fd2bed801b23092ca6ae4ea150bdf2.jpg)  
图6.12图的广度优先生成树  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

生成</li>
    <li>

邻接</li>
    <li>

唯一</li>
    <li>

邻接</li>
    <li>

不唯一</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 深度优先搜索  

<ul>

### 基本概念  

<ul>

- 深度优先搜索（Depth-First-Search，DFS）类似于树的____遍历  
- 搜索策略是尽可能“____”地搜索一个图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

先序</li>
    <li>

深</li>
  </ul>
</details>
</div>

</ul>

### 基本思想  

<ul>

- 搜索过程：  
  - 访问____顶点 $v$  
  - 由 $v$ 出发，访问未访问的____顶点 $w_1$  
  - 访问与 $w_1$ ____且未访问的顶点 $w_2$  
  - 重复上述过程  
- 回溯机制：  
  - 当无法继续向下访问时，退回到最近访问的____  
  - 若存在未访问的____顶点，继续搜索  
  - 直至所有顶点均被____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

起始</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

顶点</li>
    <li>

邻接</li>
    <li>

访问</li>
  </ul>
</details>
</div>

</ul>

### 算法实现  

<ul>

#### 主遍历函数  

```c
bool visited[MAX_VERTEX_NUM]; // 访问标记数组
void DFSTraverse(Graph G) { // 对图G进行深度优先遍历
    for (i = 0; i < G.vexnum; ++i)
        visited[i] = ____; // 初始化已访问标记数组
    for (i = 0; i < G.vexnum; ++i)
        if (!visited[i]) // 对尚未访问的顶点调用DFS
            DFS(G, i);
}
```

#### 邻接表实现  

```c
void DFS(ALGraph G, int i) {
    visit(i); // 访问初始顶点i
    visited[i] = ____; // 对i做已访问标记
    for (p = G.vertices[i].firstarc; p; p = p->nextarc) { // 检测i的所有邻接点
        j = p->____;
        if (visited[j] == ____)
            DFS(G, j); // j为i的尚未访问的邻接点，递归访问
    }
}
```

#### 邻接矩阵实现  

```c
void DFS(MGraph G, int i) {
    visit(i); // 访问初始顶点i
    visited[i] = ____; // 对i做已访问标记
    for (j = 0; j < G.vexnum; j++) // 检测i的所有邻接点
        if (visited[j] == ____ && G.edge[i][j] == ____)
            DFS(G, j); // j为i的尚未访问的邻接点，递归访问
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

FALSE</li>
    <li>

TRUE</li>
    <li>

adjvex</li>
    <li>

FALSE</li>
    <li>

TRUE</li>
    <li>

FALSE</li>
    <li>

1</li>
  </ul>
</details>
</div>

</ul>

### 遍历示例  

<ul>

> pro：深度优先遍历的过程（2015、2016）  

- 以图6.11的无向图为例，遍历过程：  
  - 访问 $a$ 并置____标记  
  - 访问与 $a$ ____的未访问顶点 $b$，置____标记  
  - 访问与 $b$ ____的未访问顶点 $d$，置____标记  
  - $d$ 无未访问____点，返回 $b$  
  - 访问与 $b$ ____的未访问顶点 $e$，置____标记  
  - 继续此过程直至所有顶点被____  
- 最终遍历结果：____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

访问</li>
    <li>

邻接</li>
    <li>

访问</li>
    <li>

邻接</li>
    <li>

访问</li>
    <li>

邻接</li>
    <li>

邻接</li>
    <li>

访问</li>
    <li>

访问</li>
    <li>

abdehcfg</li>
  </ul>
</details>
</div>

</ul>

### 注意事项  

<ul>

> attention 

- 图的表示方式对遍历结果的影响：  
  - ____矩阵表示是唯一的：  
    - DFS序列____  
    - BFS序列____  
  - ____表表示不唯一（取决于边的输入次序）：  
    - DFS序列____  
    - BFS序列____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

邻接</li>
    <li>

唯一</li>
    <li>

唯一</li>
    <li>

邻接</li>
    <li>

不唯一</li>
    <li>

不唯一</li>
  </ul>
</details>
</div>

</ul>

### DFS算法的性能分析  

<ul>

#### 空间复杂度  
- DFS算法是一个____算法  
  - 需要借助一个____工作栈  
  - 空间复杂度为____  

#### 时间复杂度  
- 遍历图的过程实质是通过边查找____点的过程  
- 两种遍历方式的____复杂度相同  
  - 采用____矩阵存储时：____  
  - 采用____表存储时：____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

递归</li>
    <li>

递归</li>
    <li>

$O(|V|)$</li>
    <li>

邻接</li>
    <li>

时间</li>
    <li>

邻接</li>
    <li>

$O(|V|^{2})$</li>
    <li>

邻接</li>
    <li>

$O(|V|+|E|)$</li>
  </ul>
</details>
</div>

</ul>

### 深度优先的生成树和生成森林  

<ul>

#### 生成树的产生条件  
- 对____图调用DFS才能产生深度优先生成树  
- 否则产生深度优先生成____  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/80ef10fc4c40d90faf1f0f3f8503446a41b03c6ef2278ea05623bcbf8a932ea2.jpg)  
图6.13图的深度优先生成森林  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

连通</li>
    <li>

森林</li>
  </ul>
</details>
</div>

</ul>

### 图的遍历与图的连通性  

<ul>

#### 无向图的连通性判断  
- 连通图  
  - 从任意结点出发，一次遍历可访问所有____  
- 非连通图  
  - 一次遍历只能访问该顶点所在____分量的顶点  
  - 其他____分量的顶点无法通过这次遍历访问  

#### 有向图的连通性判断  
- 从初始顶点到每个顶点都有____时  
  - 能够访问所有____  
- 否则不能访问到所有____  

#### 遍历函数的实现  
- BFSTraverse()或DFSTraverse()中添加第二个____循环  
- 再选取初始点继续____  
- 对于无向图  
  - 调用BFS(G,i)或DFS(G,i)的次数等于____分量数  
- 对于有向图  
  - 连通的有向图分为____连通和非____连通  
  - 连通子图分为____连通分量和非____连通分量  
  - 非____连通分量一次调用无法访问所有顶点  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/823fee21850cd372fbc2f6401fff35ce59784df00323e94b4176edf7aeec0711.jpg)  
图6.14有向图的非强连通分量  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顶点</li>
    <li>

连通</li>
    <li>

连通</li>
    <li>

路径</li>
    <li>

顶点</li>
    <li>

顶点</li>
    <li>

for</li>
    <li>

遍历</li>
    <li>

连通</li>
    <li>

强</li>
    <li>

强</li>
    <li>

强</li>
    <li>

强</li>
    <li>

强</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

# 图的应用  

<ul>

本节是历年考查的重点。图的应用主要包括：____生成（代价）树、____路径、____排序和____路径。一般而言，这部分内容直接以算法设计题形式考查的可能性极小，而更多的是结合图的实例来考查算法的具体操作过程，读者必须学会手工模拟给定图的各个算法的____过程。此外，还需掌握对给定模型建立相应的图去解决____的方法。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最小</li>
    <li>

最短</li>
    <li>

拓扑</li>
    <li>

关键</li>
    <li>

执行</li>
    <li>

问题</li>
  </ul>
</details>
</div>

## 最小生成树  

<ul>

### 基本概念  

<ul>

- 生成树的定义  
  - 包含图的所有____  
  - 只含尽可能少的____  
  - 砍去一条边会使其变成____图  
  - 增加一条边会形成____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顶点</li>
    <li>

边</li>
    <li>

非连通</li>
    <li>

回路</li>
  </ul>
</details>
</div>

</ul>

### 最小生成树定义  

<ul>

- 带权连通无向图 $G$ 中  
  - 不同生成树____可能不同  
  - ____之和最小的生成树称为____生成树(MST)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

权值</li>
    <li>

权值</li>
    <li>

最小</li>
  </ul>
</details>
</div>

</ul>

### 最小生成树性质  

<ul>

> pro：最小生成树的性质（2012、2017）  

#### 唯一性  
- 权值相同时可能____(树形不唯一)  
- 权值互不相等时____  
- 边数比顶点数少1时，$G$ 本身就是____生成树  

#### 权值特性  
- ____之和唯一且最小  
- 边数为____减1  

#### 路径特性  
> pro：最小生成树中某顶点到其他顶点是否具有最短路径的分析（2023）  

> attention 

- 不能保证任意两点间路径____  
  - 如下图所示例子  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/02e492777fdd70471f99a72a7ca8d6237b0cbdc152f003539de53616c1664f55.jpg)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

不唯一</li>
    <li>

唯一</li>
    <li>

最小</li>
    <li>

权值</li>
    <li>

顶点数</li>
    <li>

最短</li>
  </ul>
</details>
</div>

</ul>

### 构造算法基础  

<ul>

#### 基本性质  
- $G=(V,E)$ 为带权连通____图  
- $U$ 是 $V$ 的非空____  
- $(u,v)$ 是____权值边，其中 $u \in U$，$v \in V-U$  
- 必存在包含边____的最小生成树  

#### 主要算法  
- 基于____策略  
  - ____算法  
  - ____算法  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

无向</li>
    <li>

子集</li>
    <li>

最小</li>
    <li>

$(u,v)$</li>
    <li>

贪心</li>
    <li>

Prim</li>
    <li>

Kruskal</li>
  </ul>
</details>
</div>

</ul>

### 通用最小生成树算法  

<ul>

```c
GENERICMST(G) {
    T = NULL;
    while (T未形成一棵生成树)
        do 找到一条____代价边(u,v)并且加入T后不会产生____
        T = T ∪ (u,v)
}
```

- 算法特点  
  - 每次加入一条____  
  - 逐渐形成____树  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最小</li>
    <li>

回路</li>
    <li>

边</li>
    <li>

生成</li>
  </ul>
</details>
</div>

</ul>

### Prim算法  

<ul>

#### 算法思想  
- 执行非常类似于寻找图的____路径的____算法（见下一节）  

>pro：Prim算法构造最小生成树的实例（2015、2017、2018）  

#### 构造过程  
- 初始阶段  
  - 从图中任取一顶点（如顶点1）加入树____  
  - 此时树中只含有一个____  
- 生长阶段  
  - 选择一个与当前 $T$ 中顶点集合____最近的顶点  
  - 将该顶点和相应的____加入 $T$  
  - 每次操作后 $T$ 中的顶点数和边数都____  
- 终止条件  
  - 直至图中所有的顶点都并入____  
  - 得到的 $T$ 就是____生成树  
  - $T$ 中必然有____条边  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/413704bf3253c2671855c3395ee5f1027e23761bf8da66bca7df35e4ef0ebc82.jpg)  
图6.15Prim算法构造最小生成树的过程  

#### 算法步骤  
##### 前提条件  
- $G=\{V,E\}$ 是____图  
- 其最小生成树 $T=(U,ET)$  
- $ET$ 是最小生成树中____的集合  

##### 具体步骤  
- 初始化  
  - 向空树 $T=(U,ET)$ 中添加图 $G=(V,E)$ 的任意一个顶点____  
  - 使 $U=\{u_0\}$  
  - $ET=____$  
- 循环（重复下列操作直至 $U=V$）  
  - 从图 $G$ 中选择满足____且具有____权值的边 $(u,v)$  
  - 加入树____  
  - 置 $U=U \cup \{v\}$，$ET=ET \cup \{(u,v)\}$  

#### 代码实现  

```c
void Prim(G, T) {
    T = ∅; // 初始化空树
    U = {w}; // 添加任意一个顶点w
    while ((V - U) != ∅) { // 若树中不含全部顶点
        设(u,v)是使 $u \in U$ 与 $v \in (V-U)$，且____最小的边；
        T = T ∪ {(u,v)}; // 边归入树
        U = U ∪ {v}; // 顶点归入树
    }
}
```

#### 算法复杂度  
- 时间复杂度为____  
- 不依赖于____  
- 适用于求解边____的图的最小生成树  
- 其他改进  
  - 采用其他方法能改进Prim算法的____复杂度  
  - 但增加了实现的____性  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最短</li>
    <li>

Dijkstra</li>
    <li>

T</li>
    <li>

顶点</li>
    <li>

距离</li>
    <li>

边</li>
    <li>

增1</li>
    <li>

T</li>
    <li>

最小</li>
    <li>

$n-1$</li>
    <li>

连通</li>
    <li>

边</li>
    <li>

$u_0$</li>
    <li>

$\emptyset$</li>
    <li>

$\{(u,v) \mid u \in U, v \in V-U\}$</li>
    <li>

最小</li>
    <li>

T</li>
    <li>

权值</li>
    <li>

$O(|V|^{2})$</li>
    <li>

$|E|$</li>
    <li>

稠密</li>
    <li>

时间</li>
    <li>

复杂</li>
  </ul>
</details>
</div>

</ul>

### Kruskal算法  

<ul>

#### 基本概念  
- 与Prim算法不同的特点  
  - Prim从____开始扩展最小生成树  
  - Kruskal按____递增次序选择合适的边来构造  

> pro：Kruskal算法构造最小生成树的实例（2015、2018、2020）  

#### 构造过程  
- 初始状态  
  - 只有 $n$ 个顶点而无边的____图 $T=\{V,\{\}\}$  
  - 每个顶点自成一个____分量  
- 选边过程  
  - 按边的____由小到大顺序选取  
  - 选择当前未被选取且____最小的边  
  - 判断条件  
    - 若边的顶点落在 $T$ 中不同____分量上，则将此边加入 $T$  
    - 否则舍弃此边，选择下一条____最小的边  
- 终止条件  
  - 直至 $T$ 中所有顶点都在一个____分量上  

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/dfb9edf9b314446b65731e53e39a987ef76f3a653992a0d176bd51f77fe01337.jpg)  
图6.16Kruskal算法构造最小生成树的过程  

#### 算法步骤  
##### 前提条件  
- $G=(V,E)$ 是____图  
- 其最小生成树 $T=(U,ET)$  

##### 具体步骤  
- 初始化  
  - $U=V$，$ET=____$  
  - 每个顶点构成独立的____  
  - $T$ 此时是仅含____个顶点的森林  
- 循环（重复直至 $T$ 是一棵树）  
  - 按 $G$ 的边的____递增顺序从 $E-ET$ 中选择边  
  - 若加入 $T$ 后不构成____，则将其加入 $ET$  
  - 否则舍弃  
  - 直到 $ET$ 中含有____条边  

#### 代码实现  
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/2b5891ebe5b470c06be5813e03e210a476a10eb80e5ae811e0df366ecf210561.jpg)  

#### 算法原理  
- 边的连接特性  
  - 若一条边连接两棵不同树中的____  
  - 对这两棵树来说必定是____的  
  - 将边加入森林中完成两棵树的____  
  - 直到整个森林合并成一棵____  

#### 算法复杂度  
- 时间复杂度分析  
  - 最坏情况需要对____条边各扫描一次  
  - 采用堆存放边集合  
    - 选择____权值边需要____时间  
  - 使用并查集判断顶点集合  
    - 所需时间为____  
    - $\alpha(|V|)$ 增长极其缓慢，可视为常数  
- 总时间复杂度  
  - ____  
  - 不依赖于____  
  - 适合于边____而顶点较多的图  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

顶点</li>
    <li>

权值</li>
    <li>

非连通</li>
    <li>

连通</li>
    <li>

权值</li>
    <li>

权值</li>
    <li>

连通</li>
    <li>

权值</li>
    <li>

连通</li>
    <li>

连通</li>
    <li>

$\emptyset$</li>
    <li>

树</li>
    <li>

$|V|$</li>
    <li>

权值</li>
    <li>

回路</li>
    <li>

$n-1$</li>
    <li>

顶点</li>
    <li>

连通</li>
    <li>

合并</li>
    <li>

树</li>
    <li>

$|E|$</li>
    <li>

最小</li>
    <li>

$O(\log_{2}|E|)$</li>
    <li>

$O(\alpha(|V|))$</li>
    <li>

$O(|E|\log_{2}|E|)$</li>
    <li>

$|V|$</li>
    <li>

稀疏</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 最短路径  

<ul>

> pro：最短路径的分析与举例以及相关的算法（2009、2023）  

### 最短路径概述  

<ul>

- 广度优先搜索查找最短路径只适用于____图  
- 带权图中的最短路径定义：  
  - 从顶点 $v_0$ 到 $v_i$ 的路径上边____之和为带权路径长度  
  - 带权路径长度最短的路径称为____路径  
- 最短路径的基本性质：  
  - 两点间最短路径包含了路径上其他顶点间的____路径  
- 带权有向图最短路径问题分类：  
  - ____源最短路径：求某一顶点到其他各顶点的最短路径(____算法)  
  - 每对顶点间最短路径：求任意两顶点间的最短路径(____算法)  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

无权</li>
    <li>

权值</li>
    <li>

最短</li>
    <li>

最短</li>
    <li>

单</li>
    <li>

Dijkstra</li>
    <li>

Floyd</li>
  </ul>
</details>
</div>

</ul>

### Dijkstra算法求单源最短路径问题  

<ul>

#### 算法基本思想  
- 使用集合 $S$ 记录已求得____路径的顶点  
- 初始时将____点 $v_0$ 放入 $S$  
- 每并入新顶点 $v_i$ 都要修改____点到 $V-S$ 中顶点的最短路径____  

#### 辅助数组  
- final[]：标记顶点是否已找到____路径  
- dist[]：记录从____点到各顶点当前____路径长度  
  - 初始值：  
    - 有弧时为弧上____  
    - 无弧时置为____  
- path[]：记录最短路径的____结点  

#### 算法步骤  
1. 初始化  
   - $S$ 初始为____  

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

最短</li>
    <li>

源</li>
    <li>

源</li>
    <li>

长度</li>
    <li>

最短</li>
    <li>

源</li>
    <li>

最短</li>
    <li>

权值</li>
    <li>

$\infty$</li>
    <li>

前驱</li>
    <li>

$\{0\}$</li>
  </ul>
</details>
</div>

</ul>

</ul>

</ul>

</ul>


## Dijkstra算法求单源最短路径问题
<ul>

#### 问题描述
- 已知带权有向图G=(V,E)，边上权值均为____
- 指定源点v₀，求v₀到图G中其余各顶点的最____路径

#### 算法基本思想
- 将顶点分成两组：
  - S：已找到从v₀出发的最短路径的顶点集合
  - V-S：尚未确定最短路径的顶点集合
- 按最短路径长度____的顺序逐步将V-S中的顶点加入到S中
- 每次加入新顶点后，更新v₀到V-S中各顶点的最短路径长度

#### 算法数学描述
1. 初始化
   - S={____}
   - dist[i] = ____`, i=1,2,...,n-1

2. 选择新顶点
   - 从V-S中选出vj，满足dist[j] = ____{dist[i]|vi∈V-S}
   - 将____加入S

3. 更新最短路径
   - 修改v₀到V-S中顶点vk的最短路径长度
   - 若____ + arcs[j][k] < dist[k]
   - 则更新dist[k] = ____ + arcs[j][k]

4. 重复步骤2-3
   - 执行____次
   - 直到所有顶点都在____中

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

非负</li>
    <li>

短</li>
    <li>

递增</li>
    <li>

v₀</li>
    <li>

arcs[0][i]</li>
    <li>

Min</li>
    <li>

vj</li>
    <li>

dist[j]</li>
    <li>

dist[j]</li>
    <li>

n-1</li>
    <li>

S</li>
  </ul>
</details>
</div>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/d8cd3f126d0f9f02af5404cbc8a5301d32f89543ad84684ca594dafd871d7647.jpg)  

> 思考：Dijkstra和Prim算法有何异同之处？

> pro：Dijkstra算法求解最短路径的实例（2012、2014、2016、2021）  

#### 算法实例
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/c7090950bb73763feef7e1ea4c3e3ea318d642815621a4657605a0e98585dbdc.jpg)  
图6.17应用Dijkstra算法图  

表6.2从v₁到各终点的dist值和最短路径的求解过程
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9f8939ca7029cd3a8d7e5c73314b7488664116e02a550898bfbcd99d295b6878.jpg)  

##### 求解过程
- 初始化
  - S = {____}
  - dist[2] = ____
  - dist[3] = ____
  - dist[4] = ____
  - dist[5] = ____

- 第1轮
  - 选择____(dist[5]最小)
  - 更新dist数组：
    - dist[2] = ____ (v₁→v₅→v₂)
    - dist[3] = ____ (v₁→v₅→v₃)
    - dist[4] = ____ (v₁→v₅→v₄)

- 第2轮
  - 选择____(dist[4]最小)
  - 更新dist数组：
    - dist[3] = ____ (v₁→v₅→v₄→v₃)

- 第3轮
  - 选择____(dist[2]最小)
  - 更新dist数组：
    - dist[3] = ____ (v₁→v₅→v₂→v₃)

- 第4轮
  - 选择____(dist[3]最小)
  - 算法____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

v₁</li>
    <li>

10</li>
    <li>

∞</li>
    <li>

∞</li>
    <li>

5</li>
    <li>

v₅</li>
    <li>

8</li>
    <li>

14</li>
    <li>

7</li>
    <li>

v₄</li>
    <li>

13</li>
    <li>

v₂</li>
    <li>

9</li>
    <li>

v₃</li>
    <li>

结束</li>
  </ul>
</details>
</div>

#### 算法特性
- 基于____策略
- 时间复杂度
  - 邻接矩阵表示：____
  - 带权邻接表表示：____
- 局限性
  - 不适用于____权值的图
  - 原因说明：
    - ____边可能导致已确定的最短路径需要更新
    - 算法无法处理这种____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

贪心</li>
    <li>

O(|V|²)</li>
    <li>

O(|V|²)</li>
    <li>

负</li>
    <li>

负</li>
    <li>

更新</li>
  </ul>
</details>
</div>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/354061dd6653c1cf7d28647835680430baf780d8a8c6da4925a50828c972315d.jpg)  
图6.18边上带有负权值的有向带权图  
</ul>

### Floyd算法求各顶点之间最短路径问题  
<ul>

#### 问题描述
- 已知一个各边权值均大于____的带权有向图
- 对任意两个顶点 $v_{i}\not=v_{j}$ ，要求求出 $\nu_{i}$ 与 $v_{j}$ 之间的:
  - ____路径
  - ____路径长度

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

0</li>
    <li>

最短</li>
    <li>

最短</li>
  </ul>
</details>
</div>

#### 算法基本思想
- 递推产生一个 $n$ 阶方阵序列 $A^{(-1)}$  $A^{(0)},\cdots,\,A^{(k)},\cdots,\,____$
  - $A^{(k)}[i][j]$ 表示从顶点 $v_{i}$ 到顶点 $v_{j}$ 的路径____
  - $k$ 表示绕行第 $k$ 个顶点的运算____

##### 初始化过程
- 对任意两个顶点 $v_{j}$ 和 $v_{j}$ :
  - 存在边：以此边上的____作为最短路径长度
  - 不存在边：以____作为最短路径长度

##### 迭代过程
- 逐步尝试在原路径中加入顶点 $k$  $\textit{k}(k=0,\,1,\cdots,____\,)$ 作为中间顶点
- 若新路径更____：则替换原路径

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$A^{(n-1)}$</li>
    <li>

长度</li>
    <li>

步骤</li>
    <li>

权值</li>
    <li>

∞</li>
    <li>

n-1</li>
    <li>

短</li>
  </ul>
</details>
</div>

#### 算法数学描述
- 定义 $n$ 阶方阵序列 $A^{(-1)},A^{(0)},\cdots,____$
- 初始条件：$A^{(-1)}[i][j]=____$
- 递推公式：$\begin{array}{r}{A^{(k)}[i][j]=\operatorname{____}\{A^{(k-1)}[i][j],\quad A^{(k-1)}[i][k]+A^{(k-1)}[k][j]\},\ k=0,1,\cdots,n-1}\end{array}$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$A^{(n-1)}$</li>
    <li>

arcs[i][j]</li>
    <li>

Min</li>
  </ul>
</details>
</div>

#### 算法实例
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/9563eb9adc4d1c1bbd123557953338f0013fcf037d3a58a2bb15403ac38ae2a2.jpg)  

##### 求解过程
- 初始化：方阵 $A^{(-1)}[i][j]=$ ____[][]
- 第1轮：
  - 将 $v_{0}$ 作为____顶点
  - 对所有顶点对 $\{i,j\}$ 进行____
  - $\begin{array}{r}{\boldsymbol{A}^{-1}[2][1]>\boldsymbol{A}^{-1}[2][0]+\boldsymbol{A}^{-1}[0][1]=____}\end{array}$
  - 更新 $A^{-1}[2][1]=____$
- 第2轮：
  - 将 $\nu_{1}$ 作为中间顶点
  - $A^{0}[0][2]>____+A^{0}[1][2]=10$
  - 更新 $A^{0}[0][2]=____$
- 第3轮：
  - 将 $\nu_{2}$ 作为中间顶点
  - $\begin{array}{r}{\boldsymbol{A}^{1}[1][0]>\boldsymbol{A}^{1}[1][2]+\boldsymbol{A}^{1}[2][0]=\boldsymbol{____}}\end{array}$
  - 更新 $A^{1}[1][0]=____$

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

arcs</li>
    <li>

中间</li>
    <li>

更新</li>
    <li>

11</li>
    <li>

11</li>
    <li>

$A^{0}[0][1]</li>
    <li>

10</li>
    <li>

9</li>
    <li>

9</li>
  </ul>
</details>
</div>

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/91b9d670ed390741ce41fa7fada27f7a43fe887b80c64666880ba9353d11e80f.jpg)  

#### 算法特性
- 时间复杂度：____
- 优点：
  - 代码____
  - 不包含复杂____结构
  - 常数系数____
- 适用范围：
  - 允许____权值边
  - 不允许负权值边组成____
  - 适用于带权____图

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

$O(|V|^{3})$</li>
    <li>

紧凑</li>
    <li>

数据</li>
    <li>

小</li>
    <li>

负</li>
    <li>

回路</li>
    <li>

无向</li>
  </ul>
</details>
</div>

#### 算法比较
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7c367d52e0336cc1a989ce844941cf5beff18d63452f540edc3163d0104266fc.jpg)  

</ul>

### 有向无环图描述表达式  
<ul>

#### 基本概念
- 有向无环图(DAG图)：不存在____的有向图

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

环</li>
  </ul>
</details>
</div>

> pro：构建表达式的有向无环图（2019）  

#### 应用实例
- 表达式：$((a+b)^{*}(b^{*}(c+d))+(c+d)^{*}e)^{*}((c+d)^{*}e)$
- 表示方法比较：
  - 二叉树表示：
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/7e1ae982871a34fb5119dda6581088409768da4bd88e8d177af012108a5f7ae4.jpg)  
  - 有向无环图表示：
    ![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/e4c2332ba4acd478e43e4a2865dff8a8e7911989ffb9daa949ca81a074232194.jpg)  

> attention 

在表达式的有向无环图表示中，不可能出现重复的____顶点。

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

操作数</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 拓扑排序
<ul>

### AOV网的基本概念
<ul>

- AOV网定义：
  - 用有向无环图表示一个____
  - 顶点表示____
  - 有向边<Vi,Vj>表示活动Vi必须先于活动____进行

- 活动关系：
  - Vi是Vj的直接____
  - Vj是Vi的直接____
  - 前驱和后继关系具有____性
  - 活动不能以自己作为自己的____或____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

工程</li>
    <li>

活动</li>
    <li>

Vj</li>
    <li>

前驱</li>
    <li>

后继</li>
    <li>

传递</li>
    <li>

前驱</li>
    <li>

后继</li>
  </ul>
</details>
</div>

</ul>

### 拓扑排序的定义
<ul>

#### 基本定义
- 由有向无环图顶点组成的序列，满足：
  - 每个顶点出现且只出现____次
  - 若顶点A在序列中排在顶点B前面，则图中不存在从____到____的路径

#### 替代定义
- 对有向无环图顶点的一种____：
  - 若存在从顶点A到顶点B的路径，则B在排序中出现在____后面
  - 每个AOV网都有一个或多个____序列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

一</li>
    <li>

B</li>
    <li>

A</li>
    <li>

排序</li>
    <li>

A</li>
    <li>

拓扑排序</li>
  </ul>
</details>
</div>

> pro：拓扑排序和回路的关系（2011）

</ul>

### 拓扑排序算法
<ul>

#### 基本步骤
- 从AOV网中选择一个没有____（入度为____）的顶点并输出
- 从网中删除该顶点和所有以它为____的有向边
- 重复上述步骤直到：
  - AOV网为____ 或
  - 不存在无____的顶点（说明存在____）

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前驱</li>
    <li>

0</li>
    <li>

起点</li>
    <li>

空</li>
    <li>

前驱</li>
    <li>

环</li>
  </ul>
</details>
</div>

> pro：拓扑排序的实例（2010、2014、2018、2021）

![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/8810ace9ff20c9670d0e1272ddf371bd248455d387e1a48022dfcfc7f025d42a.jpg)

#### 算法实现

```
TopologicalSort(Graph G){
    InitStack(____);
    int i;
    for(i=0;i<G.vexnum;i++)
        if(____[i]==0)
            Push(S,i);
    int count=0;
    while(!IsEmpty(S)){
        Pop(S,i);
        print[count++]=____;
        for(p=G.vertices[i].____;p;p=p->nextarc){
            v=p->____;
            if(!(--____[v]))
                Push(S,v);
        }
    }
    if(count<G.vexnum)
        return ____;
    else
        return ____;
}
```

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

S</li>
    <li>

indegree</li>
    <li>

i</li>
    <li>

firstarc</li>
    <li>

adjvex</li>
    <li>

indegree</li>
    <li>

false</li>
    <li>

true</li>
  </ul>
</details>
</div>

> pro：不同存储方式下的拓扑排序的效率（2016）

#### 时间复杂度
- 邻接表存储：____
- 邻接矩阵存储：____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

O(|V|+|E|)</li>
    <li>

O(|V|²)</li>
  </ul>
</details>
</div>

> pro：DFS实现拓扑排序的思想（2020）

#### DFS实现方法
- 结点关系分类：
  - u是v的祖先：v的DFS结束时间先于____
  - u是v的子孙：v的结束时间大于____
  - u和v无路径关系：拓扑序列关系____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

u</li>
    <li>

u</li>
    <li>

任意</li>
  </ul>
</details>
</div>

</ul>

### 逆拓扑排序
<ul>

#### 步骤
- 选择没有____（出度为____）的顶点并输出
- 删除该顶点和所有以它为____的有向边
- 重复直到AOV网为____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

后继</li>
    <li>

0</li>
    <li>

终点</li>
    <li>

空</li>
  </ul>
</details>
</div>

</ul>

### 注意事项
<ul>

#### 关键问题
- 入度为零的顶点：
  - 没有____活动
  - 前驱活动都已____
  - 可以____或继续的活动

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

前驱</li>
    <li>

完成</li>
    <li>

开始</li>
  </ul>
</details>
</div>

> pro：分析给定图的拓扑序列的存在性和唯一性（2011）

#### 排序结果特性
- 非唯一性：
  - 顶点有多个直接____时，结果通常不唯一
  - 顶点在线性序列中有唯一前驱后继关系时，结果____

#### 邻接矩阵特性
- 可按拓扑排序结果重新____
- 生成新的邻接存储矩阵（可能是____矩阵）
- 三角矩阵特性：
  - 若邻接矩阵是三角矩阵，则存在____序列
  - 反之不一定____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

后继</li>
    <li>

唯一</li>
    <li>

编号</li>
    <li>

三角</li>
    <li>

拓扑</li>
    <li>

成立</li>
  </ul>
</details>
</div>

</ul>

</ul>

## 关键路径
<ul>

### AOE网定义与特点
<ul>

- 基本概念
  - 带权有向图中以顶点表示____
  - 有向边表示____
  - 边上权值表示完成____的开销
  - 简称____网

- 与AOV网的区别
  - 共同点：都是有向____图
  - 不同点：
    - AOE网边有____
    - AOV网边无权值，仅表示顶点____关系

- 网络特性
  - 顶点特点：
    - 只有一个入度为____的开始顶点（源点）
    - 只有一个出度为____的结束顶点（汇点）
  - 活动规则：
    - 顶点事件发生后才能开始____边的活动
    - 进入顶点的所有边活动结束后才能发生该顶点____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

事件</li>
    <li>

活动</li>
    <li>

活动</li>
    <li>

AOE</li>
    <li>

无环</li>
    <li>

权值</li>
    <li>

前后</li>
    <li>

0</li>
    <li>

0</li>
    <li>

出发</li>
    <li>

事件</li>
  </ul>
</details>
</div>

</ul>

### 关键路径概念
<ul>

- 基本特征
  - 活动可____进行
  - 源点到汇点可能有多条____
  - 路径长度可能____
  - 所有路径活动完成才算工程____

- 关键定义
  - 关键路径：源点到汇点____路径长度的路径
  - 关键活动：关键路径上的____
  - 工程最短完成时间：关键路径____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

并行</li>
    <li>

路径</li>
    <li>

不同</li>
    <li>

结束</li>
    <li>

最大</li>
    <li>

活动</li>
    <li>

长度</li>
  </ul>
</details>
</div>

> pro：关键路径的性质（2020）

</ul>

### 关键参量定义
<ul>

#### 事件最早发生时间ve(k)
- 定义：源点到顶点vk的最____路径长度
- 计算公式：
  - ve(源点) = ____
  - ve(k) = ____{ve(j) + Weight(vj,vk)}

> attention 

- 计算步骤：
  - 初始：ve[1...n] = ____
  - 按____顺序处理
  - 更新后继顶点的最早发生____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

长</li>
    <li>

0</li>
    <li>

Max</li>
    <li>

0</li>
    <li>

拓扑</li>
    <li>

时间</li>
  </ul>
</details>
</div>

#### 事件最迟发生时间vl(k)
- 定义：不推迟工程完成的前提下事件最迟必须发生____
- 计算公式：
  - vl(汇点) = ____(汇点)
  - vl(k) = ____{vl(j) - Weight(vk,vj)}

> attention 

- 计算步骤：
  - 初始：vl[1...n] = ____
  - 按____顺序处理
  - 使用栈记录____序列

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间</li>
    <li>

ve</li>
    <li>

Min</li>
    <li>

ve[n]</li>
    <li>

逆拓扑</li>
    <li>

拓扑</li>
  </ul>
</details>
</div>

#### 活动时间参数
##### 最早开始时间e(i)
- 定义：活动弧起点事件的最早发生____
- 计算：e(i) = ____

##### 最迟开始时间l(i)
- 定义：终点事件最迟发生时间减活动所需____
- 计算：l(i) = ____ - Weight(vk,vj)

##### 时间余量d(i)
- 定义：____ - e(i)
- 特点：
  - 表示活动可____时间
  - d(i) = 0表示____活动

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

时间</li>
    <li>

ve(k)</li>
    <li>

时间</li>
    <li>

vl(j)</li>
    <li>

l(i)</li>
    <li>

拖延</li>
    <li>

关键</li>
  </ul>
</details>
</div>

</ul>

### 求解关键路径
<ul>

> pro：求关键路径的实例（2019、2022）

#### 算法步骤
1. 计算____值
2. 计算____值
3. 计算____值
4. 计算____值
5. 计算____值找出关键活动

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

ve</li>
    <li>

vl</li>
    <li>

e</li>
    <li>

l</li>
    <li>

d</li>
  </ul>
</details>
</div>

#### 实例说明
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/3c83283a75649b4d8c5c2d0548388cadf2a7ab0f11784d1e7fa5d35976e5c5b2.jpg)  
图6.23求解关键路径的过程

</ul>

### 工期优化分析
<ul>

> pro：缩短工期的相关分析（2013）

#### 关键路径注意事项
- 关键活动特点
  - 都在关键____上
  - 可通过加快关键活动缩短____
  - 缩短程度有限____

- 多关键路径情况
  - 关键路径可能不____
  - 需同时加快所有关键路径上的____
  - 仅提高单条路径无法缩短总____

<div>
<details>
  <summary> </summary>
  <ul>
    <li>

路径</li>
    <li>

工期</li>
    <li>

制</li>
    <li>

唯一</li>
    <li>

活动</li>
    <li>

工期</li>
  </ul>
</details>
</div>

</ul>

</ul>

### 算法复杂度对比
<ul>

表6.5采用不同存储结构时各种图算法的时间复杂度
![](https://cdn-mineru.openxlab.org.cn/model-mineru/prod/0cd28f07c2726861bd6847070ff8c2ca1109e478a5a69b4406f36d63f04ed47e.jpg)

</ul>

</ul>



