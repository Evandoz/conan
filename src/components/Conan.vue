<template>
  <div id="conan" class="conan">
    <el-row type="flex" justify="center" class="">
      <el-col :span="16">
        <h3>我...我...我是...滚筒洗衣机</h3>
        <p v-for="(item, index) in conan" :key="index">
          {{ item.para }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import conan from "@/assets/conan";

export default {
  name: "conan",
  data() {
    return {
      conan: conan
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

p
  text-align left
</style>
