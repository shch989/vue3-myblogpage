<template>
  <div id="content">
    <section id="main-section">
      <article>
        <div class="cart">장바구니개수( {{ cart.length }} )</div>

        <div class="product-display">
          <div class="product-container">
            <div class="product-image">-->
              <img :src="require(`../assets/img/${picture}.jpg`)">
            </div>

            <div class="product-info">
              <h1>{{ item }}</h1>
              <ul>
                <li v-for="detail in details" :key="detail">{{ detail }}</li>
              </ul>
              <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="picture = variant.image"
              class="color-circle"
              :style="{ 'background-color': variant.color }"
              >
                {{ index }} {{ variant.quantity }}  
              </div>
              <button class="button" @click="updateCart">
                Add to Cart
              </button>
              <button class="button" @click="deleteCart">
                Delete to Cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>  
</template>

<script>
export default {
    data() {
        return {
            picture: "socks_green",
            item: "Socks",
            cart: [],
            details: ["50% cotton", "30% wool", "20% polyester"],            
            variants: [
                {   id: 2234, 
                    color: "green",
                    image: "socks_green",
                    quantity: 50 },
                {   id: 2235,
                    color: "blue",
                    image: "socks_blue",
                    quantity: 0
                }
            ]            
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteCart(id) {
            this.cart.pop(id)
        }
    }

}
</script>

<style lang="scss" scoped>
 @import "../assets/scss/ShoppingCom.scss"; 
</style>