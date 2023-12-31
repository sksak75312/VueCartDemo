<template>
  <div class="my-3 p-4 bg-light">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <div v-else>
      <table class="table align-middle">
        <tbody>
          <tr v-for="item in cartList.carts" :key="item.id">
            <td>
              <a
                href="#"
                class="text-dark text-decoration-none"
                @click.prevent="removeCart(item.id)"
                >x</a
              >
            </td>
            <td>
              <img :src="item.product.imageUrl" class="table-image" alt="" />
            </td>
            <td>
              {{ item.product.title }}
            </td>
            <td>
              <select
                name=""
                id=""
                class="form-select"
                :value="item.quantity"
                @change="changerQuantity(item.id, $event)"
              >
                <option :value="i" :key="i" v-for="i in 20">{{ i }}</option>
              </select>
            </td>
            <td class="text-end">
              <span>$ {{ item.subTotal }}</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="text-end">
            <td colspan="5">總金額 $ {{ cartList.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import cartStore from '../stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCart', 'changerQuantity'])
  }
}
</script>

<style>
  .table-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
</style>
