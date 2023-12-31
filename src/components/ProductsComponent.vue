<template>
  <div class="row row-cols-3 g-4">
    <div class="col" v-for="item in sortProduct" :key="item.id">
      <div class="card">
        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">
            {{ item.title }}
            <span class="float-end">$ {{ item.price }}</span>
          </h5>
          <a href="#" class="btn btn-primary w-100" @click.prevent='addToCart(item.id)'>加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import productStore from "../stores/productStore.js";
  import cartStore from "../stores/cartStore.js";
  import { mapState, mapActions } from 'pinia';

  export default {
    computed: {
      ...mapState(productStore, ['sortProduct']),
    },
    methods: {
      ...mapActions(cartStore, ['addToCart'])
    }
  };
</script>

