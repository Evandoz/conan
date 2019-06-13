<template>
  <div id="plot" class="plot">
    <el-row type="flex" justify="center" class="">
      <el-col :span="16">
        <h3>主线剧情梳理</h3>
        <ul>
          <li v-for="(plot, index) in plots" :key="index">
            <h4>事件：{{ plot.case }}</h4>
            <p>剧情：{{ plot.content }}</p>
            <p>日本TV版剧集：{{ plot.japan_episode }}</p>
            <p>海外版（中国）剧集：{{ plot.oversea_episode }}</p>
            <p>海外版（中国）剧集链接（腾讯视频）：<a :href="plot.tencent_link" target="_blank" rel="noopener noreferrer">{{ plot.tencent_link }}</a></p>
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
