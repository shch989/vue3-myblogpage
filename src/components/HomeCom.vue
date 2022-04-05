<template>
  <div id="content">
      <section id="main-section">
          <article class="main-article">
              <div class="article-header">
                  <p class="article-header-font">동의대학교 친구</p>
              </div>
              <div class="article-body">
                  <div>현재시간: <span id="current"></span></div><br>
                  <p>대학교 친구 목록</p>
                  <table>
                    <thead>
                      <tr>
                          <th>순번</th>
                          <th>이름</th>
                          <th>ID</th>
                          <th>전화번호</th>
                          <th>이메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in users" :key="user">
                          <td>{{ user.id }}</td>
                          <td>{{ user.name }}</td>
                          <td>{{ user.nickname }}</td>
                          <td>{{ user.number }}</td>
                          <td>{{ user.email }}</td>
                      </tr>
                    </tbody>  
                  </table>
              </div>
          </article>
          <article class="main-article">
              <div class="article-header">
                  <p class="article-header-font">대학교 친구들의 취미</p>
              </div>
              <div class="article-body">
                  <ul class="userasd" v-for='hobby in hobbies' :key='hobby'>
                    <p><b>{{ hobby.name }}</b></p>
                      <li>{{ hobby.first }}</li>
                      <li>{{ hobby.second }}</li>
                      <li>{{ hobby.thired }}</li>
                  </ul>
              </div>
          </article>
          <article class="main-article">
              <div class="article-header">
                  <p class="article-header-font">나의 홍보물(블로그)</p>
              </div>
              <div class="article-body">
                  <a :href="links.myblog" target="_blank">나의 블로그로 바로가기</a>
              </div>
          </article>
      </section>
      <aside id="main-aside">
          <div class="aside-list">
              <div class="aside-list-item">
                  <ul>
                      <li><a :href="links.naver" target="_blank">네이버</a></li>
                      <li><a :href="links.google" target="_blank">구글</a></li>
                  </ul>
              </div>
          </div>
          <div class="aside-list">
              <div class="aside-list-item">
                  <ul>
                      <li><a :href="links.youtube" target="_blank">유튜브</a></li>
                      <li><a :href="links.instar" target="_blank">인스타</a></li>
                  </ul>
              </div>
          </div>
      </aside>
  </div>  
</template>

<script>
import { setCurTime } from "../util/complain.js"

export default {
  data() {
    return {
      users: [
        { id: 1, name: '문제민', nickname: 'HalfMoon', number: '010-3019-4726', email: 'halfmoon@naver.com' },
        { id: 2, name: '김도완', nickname: 'fdsfds', number: '010-2570-9310', email: 'kdw123@naver.com' },
        { id: 3, name: '박주환', nickname: 'turtle', number: '010-5417-5193', email: 'pjh456@naver.com' },
        { id: 4, name: '양수현', nickname: 'Su', number: '010-5519-6288', email: 'su@naver.com' },
        { id: 5, name: '김민재', nickname: 'MJMJ', number: '010-9902-9430', email: 'mjmj@naver.com' },
      ],
      hobbies: [
        { name: '문제민', first: '카드게임', second: '프라모델 조립', thired: '영화포스터 수집' },
        { name: '김도완', first: '편의점 보기', second: '컴퓨터 게임', thired: '커피 마시기' },
        { name: '박주환', first: '미식축구', second: '프로그래밍', thired: '헬스' },
      ],
      links: {
        myblog: 'https://blog.naver.com/thch989',
        naver: 'http://www.naver.com',
        google: 'http://www.goolge.com',
        youtube: 'https://www.youtube.com',
        instar: 'https://www.instagram.com/'
      } 
    }
  },
  mounted() {
    this.resId = setCurTime();
  },
}
</script>

<style lang="scss" scoped>
 @import "../assets/scss/HomeCom.scss";

</style>