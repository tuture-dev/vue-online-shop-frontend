<template>
  <div id="login-form"></div>
</template>

<script>
export default {
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  mounted() {
    const appId = "";
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
