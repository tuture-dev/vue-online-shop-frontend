# 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用

【已完成】这里是《从零到部署：用 Vue 和 Express 实现迷你全栈电商应用》系列教程的源代码仓库。

<a name="F4RB6"></a>
## 项目预览

![Lark20200323-131207.gif](https://user-gold-cdn.xitu.io/2020/3/23/171062716071e852?w=700&h=371&f=gif&s=957764)

<a name="t5Wg4"></a>
## 项目界面说明

<a name="ZKItf"></a>
### 首页

主要有首页头部导航栏以及展示本地商品信息的列表，列表主要展示了本地商品的名称、介绍、价格、生产商以及添加购物车操作。

![](https://user-gold-cdn.xitu.io/2020/3/23/17106271648f976b?w=1366&h=657&f=png&s=29900)



<a name="i3VOg"></a>
### 后台管理页面

主要用于对商品以及生产商的后台管理，包括查看商品（可以进行修改商品信息）、添加商品、查看生产商（可以进行修改生产商信息）以及添加生产商。

<a name="BzD1F"></a>
#### 查看商品页面

主要展示了后台商品的名称、价格、制造商以及修改和删除操作。

![](https://user-gold-cdn.xitu.io/2020/3/23/171062716518d604?w=1366&h=657&f=png&s=21452)



<a name="mh4op"></a>
#### 添加/修改商品页面

展示一个表单页面，主要用于添加一个新商品或者对指定商品信息进行修改。

![](https://user-gold-cdn.xitu.io/2020/3/23/17106271655e25c7?w=1366&h=629&f=png&s=8720)

<a name="Dz97A"></a>
#### 查看制造商页面

主要展示了后台制造商的名称以及修改和删除操作。

![](https://user-gold-cdn.xitu.io/2020/3/23/171062716b1ad386?w=1361&h=614&f=png&s=14257)

<a name="A9Daz"></a>
#### 添加/修改制造商页面

展示一个表单页面，主要用于添加一个新制造商或者对指定制造商信息进行修改。<br />![](https://user-gold-cdn.xitu.io/2020/3/23/171062716d722d88?w=1361&h=613&f=png&s=9246)

<a name="9vO3e"></a>
#### 购物车页面

主要用于展示添加到本地购物车的商品信息列表，列表主要展示了购物车商品的名称、介绍、价格、生产商以及移出购物车操作。<br />![](https://user-gold-cdn.xitu.io/2020/3/23/1710627191776104?w=1362&h=613&f=png&s=26487)

<a name="Su5Ud"></a>
## 体验项目

<a name="nZocL"></a>

### 克隆仓库，开启前端和后端服务服务：

- 克隆仓库然后进入该仓库：
```bash
git clone https://github.com/tuture-dev/vue-online-shop-frontend.git
cd vue-online-shop-frontend
```

### 使用 Docker 一键开启服务

确保安装 Docker，然后执行如下命令：

```bash
docker-compose up
```

### 手动开启服务

#### 数据库

下载安装和启动 MongoDB：[https://www.mongodb.com/](https://www.mongodb.com/)

##### 前端：

在项目目录下：

```bash
cd client
npm install # yarn
npm start # yarn start
```

##### 后端

在项目目录下：

```bash
cd server
npm install # yarn
npm start # yarn start
```

<a name="rLy3Q"></a>
##  教程内容概要

1. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（一）](https://tuture.co/2019/10/17/0b662ce/)<br />
用 Vue 搭建前端项目的骨架，实现基于嵌套、动态路由的多页面跳转。

2. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（二）](https://tuture.co/2019/10/21/cb08dc8/)<br />
我们通过基于 Node.js 平台的 Express 框架实现了后端 API 数据接口，并且将数据存储在 MongoDB 中。这样我们的网站就能够记录用户添加的商品，并且无论以后什么时候打开，都能获取我们之前的记录。

3. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（三）](https://tuture.co/2019/12/18/5e10a46/)<br />
我们讲解了 Vue 实例的 Props 和 Methods，接着我们又讲解了最常见的 Vue 模板语法，并通过实例的方式将这些模板语法都实践了一番，最后我们讲解了 Vue 组件的组合，并完成了我们的发表商品页面。

4. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（四）](https://tuture.co/2020/01/10/ae8a389/)<br />
我们使用了状态管理库 Vuex 并带大家熟悉了 Store、Mutation 和 Action 三大关键概念，然后升级了迷你商城应用的前端代码。

5. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（五）](https://tuture.co/2020/02/11/6f96d15/)<br />
我们带大家抽出了 Vue 组件从而简化页面逻辑，使用 Vuex Getters 复用本地数据获取逻辑。

6. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（六）](https://tuture.co/2020/03/03/-Oixkkq/)<br />
我们带大家一起学习了如何抽出 Getters 、 Mutations 和Actions 逻辑实现store的“减重”以及如何干掉 mutation-types 硬编码。

7. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（七）](https://tuture.co/2020/03/13/tc1c9oD/)<br />
我们基于element-ui组件库重构了项目的前端代码，改善迷你电商应用的界面效果，提高用户的体验感；并且从试错的角度带大家一起踩了代码重构造成的一系列坑。

8. [ 从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（八）](https://tuture.co/2020/03/14/-td0ssr/)<br />
我们首先使用 Docker 来容器化应用，接着教大家配置了 MongoDB 的身份验证机制，给数据库添加一份安全守护，最后我们教大家使用阿里云的容器镜像服务将整个全栈应用部署到了云端，使互联网上的用户可以访问我们的网站。
<a name="7tL2O"></a>
## 反馈

欢迎对此教程的内容进行反馈（无论是疑问还是改进意见），可以在文章下方留言，也可以在此仓库创建 Issue！

<a name="62ZxJ"></a>
### 联系我们

- [微信公众号](https://tuture.co/images/social/wechat.png)：关注公众号，加图雀酱微信拉你进学习交流群
- [掘金](https://juejin.im/user/5b33414351882574b9694d28)
- [知乎专栏](https://zhuanlan.zhihu.com/tuture)
- 知乎圈子：搜索 图雀社区
- 也可以直接扫码下方的二维码关注微信公众号哦：<br />
![](https://user-gold-cdn.xitu.io/2020/3/23/1710627191d422db?w=900&h=500&f=png&s=138401)

<a name="8GU2e"></a>****
## 许可证

MIT。
