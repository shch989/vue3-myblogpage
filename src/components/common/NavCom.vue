<template>
  <nav id="main-navigation">
      <div class="pull-left">
          <ul class="outer-menu">
              <li class="outer-menu-item"
                v-on:mouseover="isShow01= true"
                v-on:mouseleave="isShow01= false">
                  <span class="menu-title">About</span>
                  <ul class="inner-menu" v-if="isShow01">
                      <li class="inner-menu-item"><router-link to="/" >Home</router-link></li>
                      <li class="inner-menu-item"><router-link to="/complain">Complain</router-link></li>
                      <li class="inner-menu-item"><router-link to="/register">회원가입</router-link></li>
                      
                  </ul>
              </li>
              <li class="outer-menu-item"
                v-on:mouseover="isShow02= true"
                v-on:mouseleave="isShow02= false">
                  <span class="menu-title">나의 학교</span>
                  <ul class="inner-menu" v-if="isShow02">
                      <li class="inner-menu-item"><a href="#">남성초등학교</a></li>
                      <li class="inner-menu-item"><a href="#">남천중학교</a></li>
                      <li class="inner-menu-item"><a href="#">경영고등학교</a></li>
                      <li class="inner-menu-item"><a href="#">동의대학교</a></li>
                  </ul>
              </li>
              <li class="outer-menu-item"
                v-on:mouseover="isShow03= true"
                v-on:mouseleave="isShow03= false">
                  <span class="menu-title">쇼핑</span>
                  <ul class="inner-menu" v-if="isShow03">
                      <li class="inner-menu-item"><router-link to="/shopping" >양말</router-link></li>
                  </ul>
              </li>
          </ul>
      </div>
      <div class="pull-right">
          <div class="search-bar">
              <form>
                  <input type="text" class="input-search" />
                  <input type="submit" class="input-search-submit" value="검색" />
              </form>
          </div>
      </div>
  </nav>  
</template>

<script>

export default {
  data() {
    return {
      isShow01: false,
      isShow02: false,
      isShow03: false
    }
  }
}
</script>

<style lang="scss" scoped>
    a { text-decoration: none; }
    li { list-style: none; }

    .pull-left { float: left; }
    .pull-right { float:right; }

    #main-navigation {
        border-top: 1px solid #C8C8C8;
        border-bottom: 1px solid #C8C8C8;
        margin-bottom: 20px;
        height: 40px;
        position: fixed;
        z-index: 999;
        background-color: rgb(255,255,255);
        top:130px;
        width: 710px;   
    }
    .outer-menu {
        margin: 0;
        &-item {
            float: left;
            position: relative;
            &:hover {
                background: black;
                color: white;    
            }    
        }
    }
    .menu-title {
        display: block;
        height: 30px; line-height: 30px;
        text-align: center;
        padding: 5px 20px;
        width: 130px;        
    }
    .inner-menu {
        // display: none;
        position: absolute;
        top: 40px; left: 0;
        width: 100%;

        background: white;
        box-shadow: 0 2px 6px rgba(5, 5, 5, 0.9);
        z-index: 1000;
        padding: 0;

        text-align: center;
        &-item > a {
            display: block;
            padding: 5px 10px;
            color: black;
           &:hover {
                background: black;
                color: white;    
           }     
        }    
    }
    .search-bar {
        height: 26px;
        padding: 7px;        
    }
    .input-search {
        display: block;
        float: left;

        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        border-radius: 15px 0 0 15px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);

        width: 120px; height: 24px;
        padding: 0 0 0 10px;
        font-size: 12px;
        color: #555555;
        &:focus {
            border-color: rgba(82, 168, 236, 0.8);
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);        
        }
        &-submit {
            /* display: block; */
            float: left;

            width: 50px; height: 26px;
            border-radius: 0 15px 15px 0;
            border: 1px solid #CCCCCC;

            margin-left: -1px;

            vertical-align: top;
            /* display: inline-block; */    
        }
    }
</style>