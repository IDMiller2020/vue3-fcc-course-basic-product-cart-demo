const app = Vue.createApp({
  data() {
    return {
      isVisible: false,
      selections: {
        carrots: 0,
        pineapples: 0,
        cherries: 0
      },
      cart: {
        carrots: 0,
        pineapples: 0,
        cherries: 0
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isVisible = !this.isVisible
    },
    addToCart(type) {
      this.cart[type] += this.selections[type]
      console.log(this.cart)
    }
  }
})
app.component('side-bar', {
  template: `
  <aside class="cart-container">
  <div class="cart">
    <h1 class="cart-title spread">
      <span>
        Cart
        <i class="icofont-cart-alt icofont-1x"></i>
      </span>
      <button class="cart-close" v-on:click="toggle">&times;</button>
    </h1>

    <div class="cart-body">
      <table class="cart-table">
        <thead>
          <tr>
            <th><span class="sr-only">Product Image</span></th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th><span class="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i class="icofont-carrot icofont-3x"></i></td>
            <td>Carrot</td>
            <td>$4.82</td>
            <td class="center">{{ cart.carrots }}</td>
            <td>\${{ (4.82 * cart.carrots).toFixed(2) }}</td>
            <td class="center">
              <button class="btn btn-light cart-remove">
                &times;
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="center"><em>No items in cart</em></p>
      <div class="spread">
        <span><strong>Total: </strong>\${{ cartTotal }}</span>
        <button class="btn btn-light">Checkout</button>
      </div>
    </div>
  </div>
</aside>
  `,
  props: ['toggle', 'cart', 'total'],
  computed: {
    cartTotal() {
      return (this.cart.carrots * 4.82).toFixed(2)
    }
  }
})
app.mount('#app')