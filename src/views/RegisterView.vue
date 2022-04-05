<template>
  <div class="home">
    <RegisterCom></RegisterCom>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterCom from "@/components/RegisterCom.vue"

export default {
  name: 'RegisterView',
  components: {
    RegisterCom
  }
}
</script>
