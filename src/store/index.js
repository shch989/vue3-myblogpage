import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 1,
        url:
          "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
        cart: false,
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        price: 2,
        url:
          "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
        cart: false,
        quantity: 1,
      },
      {
        id: 3,
        name: "Product 3",
        price: 3,
        url:
          "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        cart: false,
        quantity: 1,
      },
    ],
    cart:[]
  },
  getters: {
    getProducts: state => {
      return state.products
    },
    getCart: state => {
      return state.cart
    },
    getTotal: state => {
      let total = 0
      state.cart.map((p) => {
        total += p.price*p.quantity
      })
      return total
    },
  },
  mutations: {
    addProduct(state,product){
      state.cart.push(product)
      state.products.map((p)=>{
        if ( p.id == product.id) {
          p.cart= true
        }
      })
    },
    removeProduct(state,id){
      state.cart = state.cart.filter((p)=> p.id != id )
      state.products.map((p)=>{
        if ( p.id == id) {
          p.cart= false
        }
      })
    },
    increase(state,id){
      state.cart.map((p)=>{
        if ( p.id == id) {
          p.quantity += 1
        }
      })

    },
    decrease(state,id){
      state.cart.map((p)=>{
        if ( p.id == id && p.quantity > 1) {
          p.quantity -= 1
        }
      })
    }
  },
  actions: {
    addProduct({commit},product){
      commit('addProduct',product)
    },
    removeProduct({commit},id){
      commit('removeProduct',id)
    },
    increase({commit},id){
      commit('increase',id)
    },
    decrease({commit},id){
      commit('decrease',id)
    }
  },
  modules: {
  }
})
