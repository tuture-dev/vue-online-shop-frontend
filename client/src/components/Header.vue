<template>
  <div class="header">
    <el-menu
      class="menu"
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/" tag="div">主页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">后台管理</template>
        <el-menu-item index="2-1">
          <router-link to="/admin" tag="div">查看商品</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/admin/new" tag="div">添加商品</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/admin/manufacturers" tag="div"
            >查看生产商</router-link
          >
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/admin/manufacturers/new" tag="div"
            >添加生产商</router-link
          >
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/cart" tag="div">购物车</router-link>
      </el-menu-item>
    </el-menu>
    <div class="header-right">
      <el-dropdown v-if="isLogged">
        <el-avatar class="el-dropdown-link" :src="avatar"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/user/settings" tag="div">账户设置</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="handleLogout">退出登录</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div v-else class="not-logged">
        <router-link to="/user/login" tag="div">
          <el-button>登录</el-button>
        </router-link>
        <router-link to="/user/login" tag="div">
          <el-button type="primary">注册</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.el-submenu__title {
  margin-left: 40px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(84, 92, 100);
  align-items: center;
}

.header-right {
  margin-right: 40px;
}

.header-right:hover {
  cursor: pointer;
}

.not-logged {
  display: flex;
  flex-direction: row;
}

.not-logged > div {
  margin-right: 16px;
}
</style>

<script>
import Authing from "authing-js-sdk";

export default {
  props: ["activeIndex"],
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  computed: {
    isLogged() {
      let token = this.$store.state.user.token;

      return !!token;
    },
    avatar() {
      let photo = this.$store.state.user.photo;

      return photo;
    }
  },
  methods: {
    async handleLogout() {
      const userPoolId = "";

      const token = JSON.parse(localStorage.getItem("token"));
      const userId = JSON.parse(localStorage.getItem("userInfo"))._id;
      const authing = new Authing({
        userPoolId
      });

      try {
        const res = await authing.checkLoginStatus(token);
        console.log("res", res);

        await authing.logout(userId);

        this.$message({
          message: "成功登出",
          type: "success"
        });
      } catch (err) {
        console.log("err", err);
      }

      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      this.$store.commit("LOGOUT");
    }
  }
};
</script>
