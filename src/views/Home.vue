<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" />
    <Conan/>
    <DataSource/>
  </div>
</template>

<script>
// @ is an alias to /src
import Conan from "@/components/Conan.vue";
import DataSource from "@/components/DataSource.vue";

export default {
  name: "home",
  components: {
    Conan,
    DataSource
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
