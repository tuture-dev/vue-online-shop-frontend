<template>
  <div>
    <div class="container">
      <div class="container">
        <h1 class="user-title">
          <router-link to="/" tag="div">登录/注册</router-link>
        </h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
.user-title:hover {
  cursor: pointer;
}

.container {
  margin-top: 40px;
}
</style>
