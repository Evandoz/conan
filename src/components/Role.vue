<template>
  <div id="role" class="role">
    <el-row type="flex" justify="center" class="">
      <el-col :span="16">
        <h3>黑衣组织角色</h3>
        <ul>
          <li v-for="(plot, index) in role" :key="index">
            <h4>人物：{{ plot.name }}</h4>
            <p>身份：{{ plot.role }}</p>
            <p>描述：{{ plot.desc }}</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import role from "@/assets/role";

export default {
  name: "role",
  data() {
    return {
      role: role
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
  color #42b983
</style>
