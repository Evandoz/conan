<template>
  <div id="plot" class="plot">
    <el-row type="flex" justify="center" class="">
      <el-col :span="16">
        <h3>主线剧情梳理</h3>
        <ul>
          <li v-for="(plot, index) in plots" :key="index">
            <h4>剧集：{{ plot.episode }}</h4>
            <p>事件：{{ plot.case }}</p>
            <p>剧情：{{ plot.content }}</p>
            <p>链接（腾讯视频）：<a :href="plot.link" target="_blank" rel="noopener noreferrer">{{ plot.link }}</a></p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import plots from "@/assets/plots";

export default {
  name: "plots",
  data() {
    return {
      plots: plots
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

h4
  margin 20px 0 0
  text-align left

ul
  list-style-type none
  padding 0

li
  display block
  margin 0

p
  text-align left

a
  color #2c3e50
  text-decoration none
</style>
