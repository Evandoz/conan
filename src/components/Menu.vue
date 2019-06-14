<template>
  <div id="menu">
    <router-link to="/">主页</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/plot">剧集</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/role">角色</router-link>
  </div>
</template>

<style lang="stylus" scoped>
#menu a
  font-size 18px
  color #333
  text-decoration none
</style>
