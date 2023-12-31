import productStore from './productStore.js';
import { defineStore } from 'pinia';


export default defineStore('cartStore', {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(productsId, quantity = 1) {
      const currentProduct = this.cart.find(item => item.productsId === productsId);
      if(currentProduct) {
        currentProduct.quantity += quantity;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productsId,
          quantity,
        });
      }
      console.log(this.cart)
    },
    changerQuantity(id, event) {
      const currentCart = this.cart.find(item => item.id === id);
      console.log(currentCart)
      currentCart.quantity = parseInt(event.target.value);
    },
    removeCart(id) {
      const index = this.cart.findIndex(item => item.id === id);
      console.log(index)
      this.cart.splice(index, 1)
    }
  },

  getters: {
    cartList: ({ cart }) => {
      const { products } = productStore(); // 使用解構的方式可以取得 productStore() 裡的 products;

      const carts = cart.map((item) => {
        const product = products.find(
          (product) => product.id === item.productsId
        );
        return {
          ...item,
          product,
          subTotal: product.price * item.quantity,
        };
      });
      const total = carts.reduce((acc, cur) => acc + cur.subTotal, 0);
      return {
        carts,
        total,
      };
    },
  },
});