<template>
  <div class="hello">


    <!-- 小康用于的 element-ui 的测试-->
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger" @click="fetchdata()">Danger</el-button>
    </el-row>

    <!-- 这是小康用来测试将返回的数据给数据模型赋值-->
    <span> xiaokang {{ message }}</span>


  </div>
</template>


<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    fetchdata() {
      this.$axios.get("/findById?id=1").then(res => {
        alert(res.data.id)
            this.message = res.data.id
      })
    }
  },
  data() {
    return {
      message: "这是初始消息"
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
