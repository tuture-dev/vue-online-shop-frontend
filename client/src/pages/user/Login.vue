<template>
  <div>
    <h1 class="user-title">
      <router-link to="/" tag="div">用户界面</router-link>
    </h1>
    <div id="login-form"></div>
  </div>
</template>

<style>
.user-title:hover {
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  mounted() {
    const userPoolId = "";
    const domain = "https://tuture-first.authing.co";

    const form = new Guard(userPoolId, {
      logo: "https://tuture.co/images/avatar.png",
      title: "图雀全栈迷你电商",
      mountId: "login-form",
      hideClose: true
    });

    const that = this;

    form.on("authenticated", userInfo => {
      that.$store.commit("SET_USER", userInfo);
      localStorage.setItem("token", JSON.stringify(userInfo.token));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      that.$router.push("/");
    });
  }
};
</script>
