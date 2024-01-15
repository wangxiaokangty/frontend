<template>
  <div>
    <Header></Header>



  </div>
</template>

<script>


import {defineComponent} from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {Header}
})
</script>

<style scoped>
  .mblog {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    min-height: 700px;
    padding: 20px 15px;
  }

</style>
