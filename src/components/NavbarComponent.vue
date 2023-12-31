<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">六角下午茶</span>
      <button type="button" class="btn">
        購物車
        <span class="badge bg-danger rounded-pill">{{ cart.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState } from "pinia";
import cartStore from "../stores/cartStore.js";

export default {
computed: {
  ...mapState(cartStore, ['cart'])
}
};
</script>
