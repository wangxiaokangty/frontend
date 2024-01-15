<template>
  <div>

    <el-container>
      <el-header>
        <!--        <img class="logo" src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png" alt="">-->
        <span>这里应该有个照片</span>
      </el-header>
      <el-main>
        <el-form >
          <el-form-item label="用户名" prop="username">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>

  </div>
</template>
