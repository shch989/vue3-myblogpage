<template>
  <form id="signup">
    <fieldset>
      <legend>로그인 정보</legend>
      <ul>
        <li>
          <label for="userid">아이디</label>
          <input id="userid" name="userid" type="text" required autofocus />
        </li>
        <li>
          <label for="pwd1">비밀번호</label>
          <input id="pwd1" name="pwd1" type="password" required />
        </li>
        <li>
          <label for="pwd2">비밀번호 확인</label>
          <input id="pwd2" name="pwd2" type="password" required />
        </li>
        <li>
          <label for="infoId">주민등록번호</label>
          <input
            id="infoId"
            name="infoId"
            type="number"
            min="100000"
            max="9999999"
            required
          />
          -
          <input
            id="infoId2"
            name="infoId"
            type="number"
            min="100000"
            max="9999999"
            required
          />
        </li>
        <li>
          <label for="data">날짜</label>
          <input type="date" required>
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>개인 정보</legend>
      <ul>
        <li>
          <label for="fullname">이름</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="5자미만 공백없이"
            required
          />
        </li>
        <li>
          <label for="email">메일 주소</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="abcd@domain.com"
            required
            autocomplete="off"
          />
        </li>
        <li>
          <label for="tel">연락처</label>
          <input id="tel" name="tel" type="tel" autocomplete="off" />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <button type="submit" v-on:click="trans()">제출</button>
    </fieldset>
  </form>
</template>

<script>
import login from "../util/register_member.js"

export default {
  methods: {
    login: function() {
        login();
    }
  },
};
</script>

<style lang="scss" scoped>
#signup {
	background:#fff;
	border:1px solid #222;
	border-radius: 5px;
	padding: 20px;
	width: 500px;	
	margin:200px auto 100px;
  fieldset {
    border: 1px solid #ccc;
    margin-bottom: 30px;
  }
  legend {
    font-size: 16px;
    font-weight: bold;
    padding-left:5px;
    padding-bottom: 10px;	
  }
  ul li {
    line-height: 30px;
    list-style: none;
    padding: 5px 10px;
    margin-bottom: 2px;
  }
  button {	
    border: 1px solid #222;
    border-radius: 20px;
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    margin: auto;
    padding: 7px 25px;
  }
  label {
    float: left;
    font-size: 13px;
    width: 110px;
  }
  input {
    &:not([type=radio]) {
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 13px;
      padding: 5px;
      width: 200px;
    }
    &[required] {
      border:1px red solid;
    }	
  }
  fieldset:last-of-type {
    border:none;
    margin-bottom:0;
  }
  #infoId, #infoId2 {
    padding: 5px;
    width: 85px;
  }
}  
</style>