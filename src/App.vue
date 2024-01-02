<script>
import NavbarComponent from './components/NavbarComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue';
import CartComponent from './components/CartComponent.vue';

export default {
  components: {
    NavbarComponent,
    ProductsComponent,
    CartComponent
  },
  mounted() {
    console.log(import.meta.env.VITE_TEXT);
  }
}
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductsComponent></ProductsComponent>
  </div>
</template>

<style lang="scss">
@import './assets/all.scss';
</style>
