<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" />
    <Conan/>
    <Plots/>
    <Role/>
    <p>
      数据来源：<a href="https://tieba.baidu.com/p/4955389401" target="_blank" rel="noopener noreferrer">柯南主线集数整理</a>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Conan from "@/components/Conan.vue";
import Plots from "@/components/Plots.vue";
import Role from "@/components/Role.vue";

export default {
  name: "home",
  components: {
    Conan,
    Plots,
    Role
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
img
  height 200px
  width 200px
  margin: 30px 0 0
  box-sizing border-box
  border 0px solid #fff
  border-radius 50%

a
  color #2c3e50
  text-decoration none
  &:hover
    text-decoration none
</style>
