---
title: "使用 Vue 和 Node 开发一个迷你淘宝(一)"
description: "Vue 是尤雨溪在2014年创建的一个前端框架，目前 Github Star 数高达150K，是 Star 数最高的前端项目，并且 Vue 有着极为活跃的社区生态以及专职团队进行维护以确保项目可以健康长久的发展。
目前中国很多互联网公司前端程序员的招聘要求都要求程序员掌握 Vue，像滴滴、美团、饿了么等大厂也在重度使用 Vue 进行开发，并且有着像 Element 、mpvue、iView 这样优秀的基于 Vue 开源项目存在，所以学习 Vue 是一个不错的投资，当你学会 Vue，就可以快速开发项目，这样不仅可以接外包挣外快，而且当有了一定的项目经验，还可以在一线互联网大厂找到一份不错的工作。
看到这里你心动了嘛？心动不如行动！而最幸运的是，本教程将会一步一步带你以实战的方式实现一个 real-life （真实世界中的运行的）项目，并在实战的过程中，了解 Vue 的全貌，现在就打开电脑，跟随者我的脚步，这一次彻底掌握 Vue 开发！"
tags: ["JavaScript", "Vue", "Node", "MongoDB"]
date: 2019-10-17T00:00:00.509Z
updated: 2019-10-20T08:52:55.509Z
---

## 快速入门

Vue 是[尤雨溪](https://evanyou.me/) 在2014年创建的一个前端框架，目前 [Github](https://github.com/vuejs/vue) Star 数高达150K，是 Star 数最高的前端项目，并且 Vue 有着极为活跃的社区生态以及专职团队进行维护以确保项目可以健康长久的发展。

目前中国很多互联网公司前端程序员的招聘要求都要求程序员掌握 Vue，像滴滴、美团、饿了么等大厂也在重度使用 Vue 进行开发，并且有着像 [Element](https://element.eleme.cn/#/zh-CN) 、[mpvue](http://mpvue.com/)、[iView](http://iview.talkingdata.com/#/) 这样优秀的基于 Vue 开源项目存在，所以学习 Vue 是一个不错的投资，当你学会 Vue，就可以快速开发项目，这样不仅可以接外包挣外快，而且当有了一定的项目经验，还可以在一线互联网大厂找到一份不错的工作。

看到这里你心动了嘛？心动不如行动！而最幸运的是，本教程将会一步一步带你以实战的方式实现一个 real-life （真实世界中的运行的）项目，并在实战的过程中，了解 Vue 的全貌，现在就打开电脑，跟随者我的脚步，这一次彻底掌握 Vue 开发！

### 代码

你可以在 Github 查看完整的源码。1）[前端](https://github.com/pftom/vue-online-shop-frontend) 2）[后端](https://github.com/pftom/vue-online-shop-backend)

### 项目准备

#### 安装依赖

安装 Node.js，你可以去 [Node.js](https://nodejs.org/en/) 官网下载安装包，Node.js 是跨平台的，所以不用担心你的电脑无法使用。

通过 Node.js 安装包安装，会同时安装 Node.js 包管理工具 Npm，用于便捷的管理项目依赖和下载第三方包。

打开终端，输入如下命令测试是否安装成功：

```Bash
node -v # v10.16.0
npm -v # 6.9.0
```

如果在你的终端有如上输出，那么代表你安装成功。

> 提示：通过上面安装包安装，你会安装最新的 Node 稳定版本，这可能和我的机器上的 Node 版本不一致，但是不用担心，本教程使用到的代码语法适用于绝大多数新的或更老的 Node。

安装 vue-cli，在绝大多数场景下，我们使用 vue-cli 来初始化我们的 vue 项目，本教程也不例外，在终端运行如下命令来安装：

```bash
npm install -g vue-cli
```

打开终端，输入如下命令测试是否安装成功：


```Bash
vue --version # 2.9.6
```

> 官方的 cli 工具已经纳入到 @vue/cli 之下，这里我们使用的是相对较老的版本，但是原理基本类似，不影响我们学习 Vue 的开发。

上面两个安装步骤已经足够完成我们的教程的学习，但是我想额外推荐你一款编辑器，VSCode，你可以通过访问 [VSCode](https://code.visualstudio.com/) 官网安装。

在 VSCode 里面找到 Vue 插件，可以获得代码语法高亮以及自动格式化非常便捷的功能，并且 VSCode 天然对 JavaScript 的支持，会大大提高我们的开发效率，本教程所涉及项目的开发都是使用 VSCode 完成的。

#### 初始化项目

打开终端输入如下命令初始化我们的 Vue 项目：

```Bash
vue init webpack vue-online-shop-frontend
```

> 运行上面的命令之后，会出现一系列选项，在初学阶段我们没有必要理会这些选项，你大可以一路回车，快速完成项目的初始化。

当项目初始化成功之后，接下来通过如下命令开启项目：

```Bash
# code vue-online-shop-frontend # 如果你使用了 VSCode 编辑器，可以用这行命令打开项目
cd vue-online-shop-frontend && npm start
```

接着打开浏览器，输入 `http://localhost:8080/` 查看我们初始好的项目效果。

> 注意：如果你使用 VSCode 编辑器打开项目进行开发，在运行 `code project-name` 之前需要安装 `code` 脚本，具体我找了一篇教程：https://www.cnblogs.com/Zhangcsc/p/11362987.html

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/c5019a89d14f9f9118f22b61136c02c3)

### 初探初始化代码

通过 vue-cli 初始化的项目代码中，我们在整个教程中需要了解的就是以下五个文件：

- `src/main.js`
- `index.html`
- `src/App.vue`
- `src/router/index.js`
- `src/components/HelloWorld.vue`

首先我们来看一下 `src/main.js`，这个是 Vue 编译代码的入口，我们通过导入 `Vue` 类，`App` 组件，`router` 路由，再加上 `el` ，将这些参数传给 `Vue` 类，生成 Vue 实例。

```js src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
```

接着我们来看一下 `index.html` 文件，当我们开启项目之后，Vue 使用的编译工具 Webpack 将会根据入口文件 `src/main.js` 里面声明的 `el` 属性，找到 `index.html` 下面 `el = 'app'` 的 DOM 节点，并把编译好的视图模板代码挂载到这个 DOM 节点下面，同时将项目涉及的 JavaScript 和 CSS 代码以 `script` 和 `link` 的方式插入到 `index.html` 中，最后打开  `index.html` ，我们就可以在浏览器中看到基于 Vue 编写好的前端项目。

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>vue-online-shop</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

`src/App.vue` 就是 Vue 为我们提供的组件文件，使得我们可以以一个个组件来组织代码，并通过组件的组合来构建任意规模的项目。

一般比较小的组件会包含三个部分：

- `template`
- `script`
- `style`

其实就是对应了传统 Web 三剑客，`HTML`、`JavaScript`、`CSS`。

这里在 `template` 部分展示了一张 Vue 的 logo 图片，然后显示此刻渲染的路由组件：`<router-view />`。我们将在后面继续讲解路由，所以这里不懂没有关系。

`script` 部分，主要是导出了一个名为 `App` 的组件。

`style` 部分就是我们熟悉的 CSS 代码了。

```vue src/App.vue
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

上面这个是一般比较小的组件的写法，当组件中涉及的代码较多时，我们需要把 `script` 和 `style` 抽成独立的 `.js` 和 `.css` 文件。就像下面这样。

```JavaScript
<!-- ./src/App.vue -->
<template>
  <div id="app">
    <img src="./assets/hello.png">
  </div>
</template>
<script src="./app.js"></script>
<style src="./app.css"></style>
```

Vue 组件和模板语法是 Vue 的核心概念，我们在后面会以实战的形式重点讲解这些内容。

最后是我们的 `src/router/index.js` 文件，这个是 Vue 为我们提供的路由，我们在这个文件里面通过 `routes` 数组定义了所有我们项目需要用到的页面，比如初始化时为我们生成的 `HelloWorld.vue` 就是我们的网站首页 -- 我们打开浏览器访问到的第一个页面，因为它的路径（`path`）定义为 `/` 。此外一个页面定义还需要 `name`，它代表此页面在 `vue-router` 中的标识符，`component` 代表此页面需要渲染的组件页面。

```js src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
```

最后是 `src/components/HelloWorld.vue` 文件。

我们可以看到，其结构大致与 `App.vue` 类似。其中也有一些不同，比如 `script` 里面的 `data` 字段，还有 `template` 中的 `{% raw %}{{ }}{% endraw %}` 语法。这个我们会在下一节进行讲解。

```vue src/components/HelloWorld.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```

当我们打开浏览器时，地址为：`http://localhost:8080/` 此时路径为 `/`，激活 `HelloWorld.vue` 组件，所以最后我们整个项目渲染 `App.vue` 的内容，显示的结构即为：

- 一张 Vue logo 图
- 我们的 `HelloWorld.vue` 组件的内容

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/fd30e4f820c680abbd7d34b554704551)

### 小结

通过一窥 `vue-cli` 为我们初始化的项目代码，我们可以学到如下的知识：

- Vue 通过组件来组织项目，单个组件就是我们传统的 Web 三剑客：HTML、JavaScript、CSS。
- Vue 通过路由来定义多个页面，并且进行页面之间的跳转
- 一个页面是一个组件，一个组件可以由很多组件组成，通过这种组合式的思想，我们可以编写任意复杂的项目。

## 编写你的第一个 Vue 页面

下面我们来编写我们的迷你淘宝的首页。

在 `src/components` 下面创建 `Home.vue` 文件，然后编写如下代码。

```vue src/components/Home.vue
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
  }
</script>
```

在上面，我们创建了一个名为 `Home.vue` 的 Vue 组件，可以看到它和我们之前的 `HelloWorld.vue` 的内容大致相仿，但是也有一些不同的地方。

首先，我们没有加入 `style` 部分，因为本教程致力于讲解如何用 Vue 实现一个迷你淘宝的功能逻辑部分，如果加入了过多无关的元素会让讲解变得复杂，代码也不容易理解。

> 如果有机会，后面我会出一篇新教程，基于此教程专门讲解如何让我们的项目更加美观，敬请期待。

其次，我们在 `script` 中引入了 `data` ，在 `template` 引入了插值语法 `{% raw %}{{var}}{% endraw %}`。

其中 `data` 是声明此组件的初始化数据，而 `{% raw %}{{var}}{% endraw %}` 插值语法是方便将数据渲染到视图模板中。

接着，我们在 `src/router/index.js` 路由中声明 `Home` 组件。

```js src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
[tuture-del]import HelloWorld from '@/components/HelloWorld';
[tuture-add]import Home from '@/components/Home';

Vue.use(Router);

[tuture-omit]
  routes: [
    {
      path: '/',
[tuture-del]      name: 'HelloWorld',
[tuture-del]      component: HelloWorld,
[tuture-add]      name: 'Home',
[tuture-add]      component: Home,
    },
  ],
});
```

现在我们保存代码，打开浏览器，看到的内容应该就和我们在 `Home.vue` 里面编写的内容一样。

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/edd8a53811e78bacd91ace31c3691c70)

## 使用路由进行多页面跳转

一个经典的商城页应该要包括如下部分：

- 商品展示列表 （`Home.vue`）
- 商品详情（`Detail.vue`）
- 购物车（`Cart.vue`）

这里因为我们追求简单，也将商品的后台管理内容 （`Admin.vue`）也放入了我们的项目中。

现在我们先来实现商品展示列表，购物车，和后台管理页的模板内容，因为商品详情页后面将会使用组件进行复用，所以这里我们暂时先不创建。

首先修改 `App.vue` ，加入三个导航链接 `router-link`。`router-link` 和 `a` 标签类似，只不过 Vue 为它添加一些额外的优化逻辑。

添加的三个导航链接用户让用户方便的调整到自己想看的页面。

```vue src/App.vue
<template>
  <div id="app">
[tuture-del]    <img src="./assets/logo.png">
[tuture-add]    <nav>
[tuture-add]      <div class="container">
[tuture-add]        <ul class="nav__left">
[tuture-add]          <li>
[tuture-add]            <router-link to="/">Home</router-link>
[tuture-add]          </li>
[tuture-add]          <li>
[tuture-add]            <router-link to="/admin">Admin</router-link>
[tuture-add]          </li>
[tuture-add]          <li>
[tuture-add]            <router-link to="/cart">Cart</router-link>
[tuture-add]          </li>
[tuture-add]        </ul>
[tuture-add]      </div>
[tuture-add]    </nav>
[tuture-add]
    <router-view/>
  </div>
</template>
```

接着我们编写 `Admin.vue` 组件，但这里稍微有点不同，即我们在 `src/pages` 下创建 `Admin.vue` 组件，因为对于页面级组件，我们倾向于将其放到一个特殊 `pages` 文件夹，这样方便组织项目。

```vue src/pages/Admin.vue
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to the Admin Page'
      }
    }
  }
</script>
```

然后是我们的购物车页面 `Cart.vue` 

```vue src/pages/Cart.vue
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to the Cart Page'
      }
    }
  }
</script>
```

最后是我们的商品详情列表 `Home.vue`，只不过这一次我们需要将它从 `src/components/Home.vue` 移动到 `src/pages/Home.vue` 下。

```vue src/pages/Home.vue

```

完成三个页面，接着就是在我们的 `src/routes/index.js` 中导入并申请上面三个页面。

```js src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
[tuture-del]import Home from '@/components/Home';
[tuture-add]import Home from '@/pages/Home';
[tuture-add]import Admin from '@/pages/Admin';
[tuture-add]import Cart from '@/pages/Cart';

Vue.use(Router);

[tuture-omit]
      name: 'Home',
      component: Home,
    },
[tuture-add]    {
[tuture-add]      path: '/admin',
[tuture-add]      name: 'Admin',
[tuture-add]      component: Admin,
[tuture-add]    },
[tuture-add]    {
[tuture-add]      path: '/cart',
[tuture-add]      name: 'Cart',
[tuture-add]      component: Cart,
[tuture-add]    },
  ],
});
```

保存我们写好的代码，然后打开浏览器，我们可以看到下面的效果：

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/bb0a5726073b43a60328bf2f73a86bef)

你可以点击头部的三个导航链接，下面的标题内容会随着点击的链接变化，恭喜你！你已经拥有了一个多页面的项目了。

## 使用嵌套路由和动态路由合理组织页面

随着页面的增多，如果我们把所有的页面都塞到一个 `routes` 数组里面会显得很乱，你无法确定哪些页面存在关系。还好 `vue-router` 提供给我们嵌套路由的功能，让我们能把相关联的页面组织在一起。

在我们的迷你淘宝项目中，后台管理页 `Admin` 可以涉及到很多操作页面比如：

- `/create` 创建新的商品
- `/edit` 编辑商品信息

让我们通过嵌套路由的方式将它们组织在一起。

```js src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
[tuture-add]
import Home from '@/pages/Home';
[tuture-del]import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';

[tuture-add]// Admin Components
[tuture-add]import Index from '@/pages/admin/Index';
[tuture-add]import New from '@/pages/admin/New';
[tuture-add]import Products from '@/pages/admin/Products';
[tuture-add]import Edit from '@/pages/admin/Edit';
[tuture-add]
Vue.use(Router);

export default new Router({
[tuture-omit]
    {
      path: '/admin',
      name: 'Admin',
[tuture-del]      component: Admin,
[tuture-add]      component: Index,
[tuture-add]      children: [
[tuture-add]        {
[tuture-add]          path: 'new',
[tuture-add]          name: 'New',
[tuture-add]          component: New,
[tuture-add]        },
[tuture-add]        {
[tuture-add]          path: '',
[tuture-add]          name: 'Products',
[tuture-add]          component: Products,
[tuture-add]        },
[tuture-add]        {
[tuture-add]          path: 'edit/:id',
[tuture-add]          name: 'Edit',
[tuture-add]          component: Edit,
[tuture-add]        },
[tuture-add]      ]
    },
    {
      path: '/cart',
```

嵌套路由的用法就是给需要归为一类的页面设置一个入口页面，然后把这一类页面都放到这个路由页面路由定义的 `children` 字段数组中。

通过上面我们可以看到，我们的 `Admin` 类别下有四个组件，`Index` 是我们 `Admin` 类别的入口组件，也是作为 `path = /admin` 的渲染组件，然后其他组件就放到 `path = /admin` 这个路由定义的 `children` 数组里，其定义和其他父级一致。

这样的嵌套写法带来了两个好处：

- 很清晰的组织了一类页面，方便阅读。
- 在定于路由的 `path` 的时候，复用了父级的 `path`，即现在我们的 `New` 这个路由，它在浏览器中访问的路径为：`'/admin' +  'new'`，如果我们统一放到 `routes` 数组的第一级定义，那么后面的 `Products` 和 `Edit` 的 `path` 都要带上诸如 `/admin` 和 `/admin/edit/:id` 这样长长的路径，显得特别复杂。

这里还有一个改变就是，我们发现 `Edit` 这个路由的 `path` 有点不太一样，它有个特殊的标志 `edit/:id`，这种写法被称为动态路由，即 `:id` 会匹配任意字符串，所以用户访问 `/admin/edit/<any-string>` 都会激活 `Edit` 路由，从而渲染 `Edit.vue` 组件。

这里我们接着来创建一下 `Edit.vue` 组件

```vue src/pages/admin/Edit.vue
<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>
```

可以看到，当用户访问 `/admin/edit/:id`，会激活渲染 `Edit.vue` 组件，我们可以通过 `$route.params.id` 的方式获取用户输入的路径 `:id` 部分。比如我们在浏览器中输入 `/admin/edit/52tuture`，那么浏览器将会以 `h1` 的形式打出 `"This is Admin/Edit/52tuture"`。

`$route` 这个变量是 Vue 在运行时为我们自动插入到所有组件属性中的，所有我们不用手动去管理它。

然后创建 `Index.vue` 入口组件，可以看到，它作为嵌套路由的入口级组件，和我们之前在 `App.vue` 里面看到的样子类似，在其中会有 `router-link` 导向更深层级的路由，`router-view` 用于渲染子路由组件。

```vue src/pages/admin/Index.vue
<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">View Products</router-link>
            </li>
            <li>
              <router-link to="/admin/new">New Products</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
```

接着创建 `New.vue` 、`Products.vue` 。

```vue src/pages/admin/New.vue
<template>
  <div>
    <div class="title">
      <h1>This is Admin/New</h1>
    </div>
  </div>
</template>
```

```vue src/pages/admin/Products.vue
<template>
  <div>
    <div class="title">
      <h1>This is Admin</h1>
    </div>
  </div>
</template>
```

保存我们编写的内容，打开浏览器，我们可以看到如下内容：

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/d652313c1dcd035889405c8d238c8a21)

## 了解 Vue 模板语法和双向绑定

当我们完成了迷你淘宝的基本页面框架之后，我们就可以开始考虑具体页面的内容了。首先我们要考虑的就是数据的来源，即添加商品页面，有了添加商品的入口，我们就可以展示商品列表，获取商品详情，甚至是修改商品信息。

我们在 `components` 中创建 `ProductForm.vue` 表单组件，编写如下代码：

```vue src/components/products/ProductForm.vue
<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          name="name"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          name="price" />
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          name="manufacturer">
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          name="image"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
         ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model)
    }
  }
}
</script>
```

这段代码看起来很长，你可能被吓到了，让我们一段一段来拆解它。

首先它由两个部分组成，分别是 `script` 和 `template` ，我们先来看一看 `script` 部分。

### Vue 实例：Methods 和 Props

首先它多可了两个我们之前没看过 `props` 和 `methods` ，`props` 是 Vue 进行组件之间传参的形式，比如这里我们的 `props` 接收来自父组件的三个参数：`model`、`manufacturers`、`isEditing`。

然后是 `methods` ，`methods` 是用来定义在组件中会用到的一些方法，如果说我们前面提到的 `data` ，是从数据从逻辑层（JS）向视图层（Html）流动的话，那么这里的 `methods` 就是视图层触发事件，如 click、submit等，反过来修改逻辑层的数据的方法，`methods` 使得数据可以双向流动。比如这里，我们定义了一个 `saveProduct` 方法，就是当用户填写完商品信息的表单之后，点击提交按钮会触发的方法，在 `saveProduct` 内部，我们调用了父组件的 `save-product` 方法，并把修改后的 `this.mode` 变量内容传给父组件。所以这里我们还可以看到，`methods` 不仅可以使得数据可以双向流动，而且还可以在子组件反向操作父组件的内容，使得数据还可以上下流动。

### 模板语法：v-bind、v-on

接下来我们再来谈一谈 `template` 里面发生的事情。

可以看到 `template` 里面就是一个表单，这个表单定义了一个 `submit` 事件，这个事件触发会调用我们上面提到的 `saveProduct` 方法，但是这里好像多了一些我们之前在 `HTML` 里面没有看到的内容，接着我们定义了好几个 `class` 为 `form-group` 的元素块，每个块代表我们创建商品所需要填写的相关信息，最后的 `form-group` 是我们提交商品信息的按钮，可以看到它它里面也有一些我们之前在 HTML 里面没有看到的信息，不用担心，我们接下来都会一一讲解。

首先我们来看一看 `form` 元素的 `submit` 事件提交部分，它的样子怪怪的，我们需要再进行一下拆解。首先我们先拿掉 `prevent` ，它变成了 `@submit="saveProduct"`，接着我们将 `@` 替换成 `v-on`，它变成了 `v-on:submit="saveProduct"` ，这是 Vue 的模板语法，通过 `v-on` 的方式接管了之前在 HTML 中 `onEvent` 。

比如之前我们在 HTML 中的写法是这样的：

```HTML
<div onclick="alert('I love tuture')">
Hello Tuture
</div>
```

现在在 Vue 的模板语法中我们需要写出这样：

```HTML
<div v-on:click="alert('I love tuture')">
Hello Tuture
</div>
```

类似的 `onEvent` 都要改成 `v-on:Event`。然后这样写显得比较冗余，所以 Vue 支持简化写法，用 `@` 替换 `v-on:` 部分，我们就可以写出这样：

```HTML
<div @click="alert('I love tuture')">
Hello Tuture
</div>
```

调用事件之后我们一般有一些这样的操作，比如禁用浏览器默认行为，然后自己去处理事件，获取后端数据，以前我们会这样写：

```HTML
<div onclick="saveProduct()">
Hello Tuture

<script>
var saveProduct = function (e) {
  e.preventDefault();

  // do something you like
}
</script>
```

但是这样写又显得特别繁琐了，Vue 也觉得这样可以简化，于是我们直接将这些禁止默认行为的调用直接作为绑定事件的属性来进行处理，于是乎在 Vue 中我们可以写出这样：

```JavaScript
<template>
  <div @click.prevent="saveProduct">
  Hello Tuture
  </div>
</template>

<script>
export default {
  methods: {
    saveProduct() {
      // do something you like
    }
  }
}
</script>
```

不知道看了上面的长文，你有没有一点晕，不管你晕不晕，我是得喝口水缓一下。 - v -

### 模板语法：v-model 双向绑定

前面我们提到通过 `{% raw %}{{}}{% endraw %}` 插值语法渲染来自 `data` 的数据实现了逻辑层向视图层的数据流动，通过 `methods` 在视图层操作逻辑层的数据，实现了视图层的数据向逻辑层的数据流动，从而达到了双向绑定，当我们的应用越来越复杂，我们会发现这样的数据双向流动会越来越频繁，而且粒度也会大小不一，有很多单纯修改某个值的方法调用就会显得特别繁杂，因此 Vue 通过提供 `v-mode` 进行了视图层和逻辑层的双向绑定，让我们来看我们项目中的例子, 也就是第一个 `form-group` ：

```HTML
<input
  type="text"
  placeholder="Name"
  v-model="model.name"
  name="name"
  lass="form-control" />
```

这里我们通过申明 `v-mode` 将此 input 的值和我们在 Vue 实例中的 `model` 的 `name` 属性进行了双向绑定，即当 `model.name` 发生变化，input 的值也会跟着变化，当 input 的值发生变化，我们 `model.name` 的值也会被修改，这一切都是自动发生的，不需要我们额外的添加 `methods` 里面的方法调用来手动修改。

### 模板语法：循环

接下来我们看看第三个 `form-group`，就是选择我们商品的 `manufacturer` 的那个，我们可以从这段奇怪的代码里看到一些熟悉的东西，比如我们的 `for in` 循环，还有一些不熟悉的，比如 `v-model`，比如 `:value` 和 `:selected`，`v-model` 我们晚点再讲，先让我们来看一看 `for in` 循环和 `:value`。

我们已经看到在 Vue 模板中我们可以使用如下的功能：

- `{% raw %}{{}}{% endraw %}` 插值语法将 `data` 渲染到 HTML 元素内容中
- `v-on` 或者简化写法 `@` ，等用来取代 HTML 的事件绑定

有了上面的功能，我们可以让 HTML 动起来了，但是还缺点什么，比如我们的 HTML 属性，如 `id`、`class` 等，是不是也能动态的获取变化值，这里的动态值就是通过 `:id="id"` 或者 `:class="class"` 等来操作的，其中 `:id` 是 `v-bind:id` 的简化写法，`:id="id"` 后面的字符串中的 `id` 代表我们在 data 中定义的变量值，它可以动态的变化。

好了，Vue 替我们接管了 HTML 元素属性值、事件处理、元素内容，这些都还只属于原来 HTML 的部分，它更强大的一点就是将 JS 的功能引入了模板语法中，使得我们可以实现类似循环，条件选择操作等功能。

比如我们第三个 `form-group` 中看到的 `v-for="manufacturer in manufacturers"` 。这个语法就牛逼了，它允许我们遍历一个数组并且批量的生成一系列 HTML 元素，瞬间可以完成我们的商品列表的展示有木有，因为商品列表展示就是一系列相同结构，不同内容的元素组成的。这里 `manufacturers` 数组是组件 `data` 中的数据，`manufacturer` 是遍历中的单个数据。

我们来看个例子理解一下：

```HTML
<!--
manufacturers = [
  { _id: 1, name: 'Apple' },
  { _id: 2, name: 'Huawei' }
]

model = { _id: 1, name: 'Apple' }

 -->
<template v-for="manufacturer in manufacturers">
  <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
</template>
```

最后渲染的结果为：

```HTML
<option value="1" selected="true">Apple</option>
<option value="2" selected="false">Huawei</option>
```

### 模板语法：条件选择

上面的讲述了循环是如何在 Vue 中使用的，下面我们来看一看条件语法是如何在 Vue 中使用的，让我们看到最后一个 `form-group`，就是我们最后提交表单的按钮那个部分。可以看到在代码中出现了 `v-if` 和 `v-else` 等内容，当 `isEditing` 为 `true` 的时候，Vue 就会渲染 `Update Product` 按钮，否则就会渲染 `Add Product` 按钮。

当然你可以添加诸如 `v-else-if` 的标签来做多重判断。

### Vue 组件组合

编写完上面的表单之后，我们在 `New.vue` 中引入我们创建的表单组件：

```vue src/pages/admin/New.vue
<template>
[tuture-del]  <div>
[tuture-del]    <div class="title">
[tuture-del]      <h1>This is Admin/New</h1>
[tuture-del]    </div>
[tuture-del]  </div>
[tuture-add]  <product-form
[tuture-add]    @save-product="addProduct"
[tuture-add]    :model="model"
[tuture-add]    :manufacturers="manufacturers"
[tuture-add]  >
[tuture-add]  </product-form>
</template>
[tuture-add]
[tuture-add]<script>
[tuture-add]import ProductForm from '@/components/products/ProductForm.vue';
[tuture-add]export default {
[tuture-add]  data() {
[tuture-add]    return {
[tuture-add]      model: {},
[tuture-add]      manufacturers: [
[tuture-add]        {
[tuture-add]          _id: 'sam',
[tuture-add]          name: 'Samsung',
[tuture-add]        },
[tuture-add]        {
[tuture-add]          _id: 'apple',
[tuture-add]          name: 'Apple',
[tuture-add]        },
[tuture-add]      ],
[tuture-add]    };
[tuture-add]  },
[tuture-add]  methods: {
[tuture-add]    addProduct(model) {
[tuture-add]      console.log('model', model);
[tuture-add]    },
[tuture-add]  },
[tuture-add]  components: {
[tuture-add]    'product-form': ProductForm
[tuture-add]  }
[tuture-add]}
[tuture-add]</script>
```

当一个组件要使用在模板语法中使用另外一个组件时，需要什么此组件，即在组件的 `components` 属性中申明要使用的组件，比如我们上面使用名为 `'product-form'` 的名称来申明使用 `ProductForm` 组件，这样在 `template` 中我们就可以以 `<product-form />` 形式使用导入的表单组件。

同时我们在组件的 `data` 中定义了 `model` 和 `manufacturers` 以及在 `methods` 中定义了 `addProduct` 方法，并将它们以属性绑定 `:model="model"`、`:manufacturers="manufacturers"` 和事件绑定 `@save-product="saveProduct"` 的方式传递给表单组件。

当保存上面编写的代码之后，我们打开浏览器，点击导航链接 `Admin`，然后点击子导航链接 `New Products`，切换到我们的 `New.vue` 添加商品页面，我们可以看到如下的效果：

![](https://raw.githubusercontent.com/pftom/vue-online-shop-frontend/master/./tuture-assets/2a340eeb04a07c1aae2bcd0387931c52)

### 小结

到现在为止，我们已经了解了 Vue 的基础部分，包括：

- 用路由进行多页面的调整和导航
- 用嵌套路由和动态路由合理组织页面
- Vue 组件和 Vue 实例
- Vue 模板语法

有了这些知识我们可以实现绝大多数前端功能了，并且可以完成一些比较小的前端项目，如果要完成大型且数据逻辑复杂的应用，我们目前学到的知识就力不从心了，但是没关系，我们将在后面学习 Vuex 这一前端状态管理工具，有了 Vuex 的加持，我们就能用 Vuex 写出任意复杂的应用了。

但是请先别着急，让我们先做点别的事，比如，干掉我们硬编码的假数据，试试真实的数据，并且还能持久化保存我们的数据，这就需要后端的介入了，在下一节中，我会带你手把手实现一个 Node.js 后端 API 应用，有了它，我们的前端就真正的活起来了，数据也可以持久保存了！