<template>
  <div id="app">
    <div id="common">
      <!-- heaer com 추가 -->
      <HeaderCom></HeaderCom>
      <!-- 네비게이션 -->
      <NavCom></NavCom>
      <router-view/>
      <!-- footer -->
      <FooterCom></FooterCom>
    </div>
  </div>
</template>

<script>
import HeaderCom from "@/components/common/HeaderCom.vue"
import NavCom from "@/components/common/NavCom.vue"
import FooterCom from "@/components/common/FooterCom.vue"

export default {
  components: {
    HeaderCom,
    NavCom,
    FooterCom
  }
  
}
</script>

<style lang="scss" scoped>

  #app {
    width: 960px; margin: 0 auto;
    background: #E6E6E6;
  }
  #common {
    background: white;
    margin: 50px 0; 
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
  }  
</style>