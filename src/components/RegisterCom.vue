<template>
  <form id="signup">
    <fieldset>
      <legend>로그인 정보</legend>
      <ul>
        <li>
          <label for="userid">아이디</label>
          <input id="userid" v-model="user.userid" type="text" required autofocus />
        </li>
        <li>
          <label for="pwd1">비밀번호</label>
          <input id="pwd1" v-model="user.pwd1" type="password" required />
        </li>
        <li>
          <label for="pwd2">비밀번호 확인</label>
          <input id="pwd2" v-model="user.pwd2" type="password" required />
        </li>
        <li>
          <label for="infoId">주민등록번호</label>
          <input
            id="infoId"
            v-model="user.infoId"
            type="number"
            min="100000"
            max="9999999"
            required
          />
          -
          <input
            id="infoId2"
            v-model="user.infoId2"
            type="number"
            min="100000"
            max="9999999"
            required
          />
        </li>
        <li>
          <label for="data">날짜</label>
          <input v-model="user.date" type="date" required>
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
            v-model="user.fullname"
            type="text"
            placeholder="5자미만 공백없이"
            required
          />
        </li>
        <li>
          <label for="email">메일 주소</label>
          <input
            id="email"
            v-model="user.email"
            type="email"
            placeholder="abcd@domain.com"
            required
            autocomplete="off"
          />
        </li>
        <li>
          <label for="tel">연락처</label>
          <input id="tel" v-model="user.tel" type="tel" autocomplete="off" />
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <button type="submit" @click="login">제출</button>
    </fieldset>
  </form>
</template>

<script>

export default {
  data() {
    return {
      user: {
        userid: "",
        pwd1: "",
        pwd2: "",
        infoId: "",
        infoId2: "",
        date: "",
        fullname: "",
        email: "",
        tel: ""        
      }
    }
  },
  methods: {
    // 출력확인용
    login: function() {
        console.log(this.user)
    }
  },
};
</script>

<style lang="scss" scoped>
 @import "../assets/scss/RegisterCom.scss"
</style>