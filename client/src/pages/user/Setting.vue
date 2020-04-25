<template>
  <div>
    <app-header></app-header>
    <div class="user-container">
      <div class="user-form">
        <el-upload
          class="avatar-uploader"
          action="https://imgkr.com/api/files/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <el-form
          :model="user"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="昵称" prop="nickName">
            <el-input v-model="user.nickname"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >更新</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.user-form {
  width: 500px;
}

.user-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Authing from "authing-js-sdk";

export default {
  data() {
    return {
      user: {},
      imageUrl: "",
      rules: {
        nickname: [
          { required: true, message: "请输入你的昵称", trigger: "blur" },
          { min: 3, max: 25, message: "长度在 3 到 25 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created: function() {
    const user = this.$store.state.user;
    const userInfo = localStorage.getItem("userInfo");

    if (user && Object.keys(user).length === 0 && userInfo) {
      this.user = JSON.parse(userInfo);
      this.imageUrl = this.user.photo;
    } else {
      this.user = { ...user };
      this.imageUrl = user.photo;
    }
  },
  components: {
    "app-header": Header
  },
  methods: {
    async handleAvatarSuccess(res, file) {
      if (res.code === 200) {
        this.imageUrl = res.data;
      } else {
        this.$message.error("图片上传失败");
      }
    },
    async submitForm(formName) {
      const nickname = this.user.nickname;
      const photo = this.imageUrl;
      const userId = this.user._id;
      const user = this.user;
      const that = this;

      this.$refs[formName].validate(async valid => {
        if (valid) {
          const token = localStorage.getItem("token");
          const userPoolId = "";

          const authing = new Authing({
            userPoolId
          });

          const login = await authing.login({
            email: "",
            password: ""
          });

          console.log("nickName", nickname);
          try {
            await authing.update({
              _id: login._id,
              photo,
              nickname
            });

            const newUser = { ...user, nickname, photo };
            localStorage.setItem("userInfo", JSON.stringify(newUser));
            that.$store.commit("SET_USER", newUser);

            this.$message({
              message: "修改信息成功",
              type: "success"
            });
          } catch (err) {
            console.log("err", err);

            this.$message.error("修改信息失败");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
