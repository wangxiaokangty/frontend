<template>
  <div class="m-content">
    <h3>欢迎来到MarkerHub的博客</h3>
    <div>
      <el-avatar :size="50"></el-avatar>
      <div>小丑</div>
    </div>

    <div class="maction">
      <span><el-link href="/Blogs">主页</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span><el-link type="success" href="/blog/add">发表博客</el-link></span>

      <el-divider direction="vertical"></el-divider>
      <span ><el-link type="primary" href="/login">登录</el-link></span>

      <el-divider direction="vertical"></el-divider>
      <span ><el-link type="danger">退出</el-link></span>
    </div>

  </div>
</template>


<style scoped>

  .m-content {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .maction {
    margin: 10px 0;
  }

</style>
<script setup>
</script>
