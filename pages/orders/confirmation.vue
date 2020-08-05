<template>
  <div>
    <InnerBanner />
    <v-container style="max-width: 850px;">
      <div class="list-head">
        <p>Order Confirmation Recipt</p>
      </div>
      <div class="thankyou-sec text-center">
        <img src="~/assets/success.png" />
        <p>Thank you for saving food from being wasted</p>
      </div>
      <div class="order-details">
        <div class="order-id">
          <div>
            <p>{{order.date}}</p>
            <p>{{order.time}}</p>
          </div>
          <div>
            <p>Order ID</p>
            <p>{{order.id}}</p>
          </div>
        </div>
        <div class="order-qty">
          <div class="order-item">
            <div>
              <p>{{order.type}}</p>
              <p>Qty {{order.qty}}</p>
            </div>
            <div>
              <p>NOK{{order.price1}}</p>
            </div>
          </div>
          <div class="order-item">
            <div>
              <p>{{order.type}}</p>
              <p>Qty {{order.qty}}</p>
            </div>
            <div>
              <p>NOK{{order.price2}}</p>
            </div>
          </div>
        </div>
        <div class="order-paid">
          <p>Amount Paid</p>
          <p>NOK {{order.paid}}</p>
        </div>
        <div class="order-pay">
          <p>Pay while pick-up (80%)</p>
          <p>NOK {{order.pay}}</p>
        </div>
        <div class="address text-center">
          <p>Address</p>
          <p>{{order.address}}</p>
        </div>
        <div class="pickup text-center">
          <p>Pick Up / Arrival</p>
          <p>{{order.pickup}}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InnerBanner from "~/components/InnerBanner";
export default {
  components: {
    InnerBanner,
  },
  data: () => ({
    order: {
      restaurant: "Oppdal Hotel",
      date: "Sunday, May 24, 2020",
      time: "21.00",
      id: "123456",
      type: "Special Dinner Deal",
      qty: "1",
      price1: "20",
      price2: "30",
      pay: "20",
      paid: "30",
      pickup: "Sunday, May 24, 20.00 - 21.00",
      address: "Oppdal Hotel, Oppdal, Norway",
    },
  }),
  mounted() {
    this.headerid = this.$store.state.cart.headerData;
  },
};
</script>

<style scoped>
.list-head {
  border-bottom: 1px solid #e9e9eb;
  padding-bottom: 8px;
  margin-top: 2em;
}

.order-item > p {
  margin: 0;
  text-align: center;
  font-size: 14px;
}

.list-head p,
.order-summary-right > h4 {
  margin: 0;
  font-size: 20px;
  color: #0f4387;
  font-weight: 400;
}

.thankyou-sec p {
  color: #0f4387;
}

.thankyou-sec {
  margin: 2em 0;
}

.thankyou-sec img {
  width: 64px;
  margin-bottom: 1em;
}

.order-id,
.order-item,
.order-paid,
.order-pay {
  display: flex;
  justify-content: space-between;
}

.order-details {
  border: 1.5px solid #e9e9eb;
  border-radius: 10px;
  margin-bottom: 2em;
}

.order-details p {
  margin-bottom: 7px;
}

.order-item:first-child {
  margin-bottom: 10px;
}
.order-id {
  padding-top: 1.5em;
}

.pickup p,
.address p {
  margin: 0 !important;
}
.pickup {
  background: #f8f8f8;
  padding: 1.2em 0;
}
.address {
  padding: 1.2em 0;
}
.order-id,
.order-qty,
.order-paid,
.order-pay {
  border-bottom: 1px solid #e9e9eb;
  margin-bottom: 1em;
  padding-bottom: 5px;
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.order-paid,
.order-pay {
  padding-bottom: 10px;
}

.order-pay {
  margin-bottom: 0 !important;
}
.order-id div:last-child > p:last-child {
  font-size: 18px;
  font-weight: 500;
}
.order-id p {
  font-size: 15px;
}
.order-item > div:first-child > p:first-child,
.order-item > div:last-child > p,
.order-paid > p:last-child,
.order-pay > p:last-child {
  font-size: 18px;
  font-weight: 500;
}
.address p:last-child,
.pickup p:last-child {
  font-size: 18px;
}
.address p:first-child,
.pickup p:first-child {
  font-size: 15px;
}
.order-paid > p:first-child,
.order-pay > p:first-child {
  font-size: 15px;
}
.address p,
.pickup p {
  font-weight: 500;
}
</style>