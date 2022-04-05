<template>
  <div class="shop">
    <ShopingCart></ShopingCart>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopingCart from "@/components/ShopingCom.vue"

export default {
  name: 'ShopView',
  components: {
    ShopingCart
  }
}
</script>