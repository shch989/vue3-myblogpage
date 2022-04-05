<template>
  <header id="main-header">
      <hgroup>
          <h1 class="master-title"><img src="../../assets/img/deu.png" alt="동의대학교 로고." class="article-img">나를 소개하는 블로그</h1>
          <h2 class="master-description">이름: 조성현</h2>
      </hgroup>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .article-img {
    height: 30px;
    width: 30px;
  }
  #main-header { 
    padding: 40px 50px; 
    position: fixed;
    z-index: 999;
    background-color: rgb(255,255,255);
    top:0;
    width:710px;
  }
  .master {
    &-title {
      font-size: 30px; 
      color: #181818; 
      margin: 0; 
    }
    &-description {
      font-size: 15px; font-weight: 500;
      color: #383838;
    }    
  }
</style>