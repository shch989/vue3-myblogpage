<template>
  <div id="content">
    <section id="main-section">
      <article>
        <!-- 고객 complain -->
        <div class="article-header">
          <h3 class="article-title">고객 Complain</h3>
          <p class="article-date">
            현재시각:<span id="current" class="display"></span>
          </p>
        </div>
        <div class="article-body">
          <table id="tableComplain">
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>Complain 내용</th>
              <th>대상<br />페이지</th>
              <th>작성자</th>
              <th>
                  <!-- 바닐라 이벤트 => 뷰 이벤트로 수정 -->
                <input type="checkbox" id="chkAll" v-on:click="checkAll()" /> 완료
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>현재시각불량</td>
              <td>
                현재 시각에 시간이<br />
                1초마다 나오지 않아요
              </td>
              <td>Home메뉴</td>
              <td>홍길동</td>
              <td>완료</td>
            </tr>
            <tr>
              <td>2</td>
              <td>이미지불량</td>
              <td>
                작은 사진 이미지를 클릭하면 <br />
                그 이미지로 큰사진 이미지가 <br />
                바뀌지 않아요
              </td>
              <td>컵 소개 메뉴</td>
              <td>홍길동</td>
              <td>완료</td>
            </tr>
            <tr>
              <td>3</td>
              <td>상세설명불량</td>
              <td>
                상세설명을 클릭하면 <br />
                상세설명이 나오지 않아요
              </td>
              <td>컵 소개 메뉴</td>
              <td>홍길동</td>
              <td>완료</td>
            </tr>
            <tr>
              <td>4</td>
              <td>테이블색상미적용</td>
              <td>
                Complain테이블에 backgroud-color를<br />
                홀수면 white<br />
                짝수면 gray색으로 보이게 해주세요
              </td>
              <td>Complain메뉴</td>
              <td>홍길동</td>
              <td>완료</td>
            </tr>
            <tr>
              <td>5</td>
              <td>전체완료기능추가</td>
              <td>
                Complain테이블의 완료여부 컬럼에<br />
                체크박스를 추가하고<br />
                체크박스를 체크하면 모든 미완료를<br />
                완료로 바꾸어서 화면에 <br />
                보이게 해주세요
              </td>
              <td>Complain메뉴</td>
              <td>홍길동</td>
              <td>미완료</td>
            </tr>
            <tr>
              <td>6</td>
              <td>회원가입페이지없음</td>
              <td>
                메뉴에 회원가입페이지가 없어요<br />
                About메뉴에 추기하고<br />
                주민등록번호 유효성체크기능을<br />
                추가해주세요<br />
                (입력박스2개,중간(-):첫입력 6자리만<br />
                두번째입력 7자리만 입력가능<br />
                숫자만 가능)
              </td>
              <td>컵 소개 메뉴</td>
              <td>홍길동</td>
              <td>미완료</td>
            </tr>
            <tr>
              <td>7</td>
              <td>제목 / 메뉴 고정</td>
              <td>스크롤 시 제목 / 메뉴 고정해 주세요</td>
              <td>컵 소개 메뉴</td>
              <td>홍길동</td>
              <td>미완료</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                오른쪽 메뉴에 포털<br />
                링크 추가
              </td>
              <td>오른쪽 메뉴에 구글/네이버/다음 <br />추가해 주세요</td>
              <td>모든 페이지</td>
              <td>홍길동</td>
              <td>미완료</td>
            </tr>
            <tr>
              <td>9</td>
              <td>사이트 개선</td>
              <td>
                as-is : 현재사이트 <br />to-be: Vue : header, nav, content,
                footer컴포넌트 적용
              </td>
              <td>메인 페이지</td>
              <td>홍길동</td>
              <td>미완료</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
    <aside id="main-aside">
      <div class="aside-list">
        <h3 class="article-title">카테고리</h3>
        <ul>
          <li><a href="#">데이터</a></li>
        </ul>
      </div>
      <div class="aside-list">
        <h3 class="article-title">최근 글</h3>
        <ul>
          <li><a href="#">데이터</a></li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import  { setCurTime, checkAll } from "../util/complain.js"

export default {
    data() {
      return {
        resId: 0
      }
    },
    // 화면이 정상적으로 뜰때 실행되는 이벤트 함수
    mounted() {
        this.resId = setCurTime();
    },
    beforeRouteLeave (to, from, next) {
      // 다른 메뉴로 떠나가기전에 setInterval 끄기
      clearInterval(this.resId);
      next();
    },
    methods: {
        checkAll() {
            checkAll();
        },
    },
};
</script>

<style lang="scss" scoped>
 @import "../assets/scss/ComplainView.scss";
</style>