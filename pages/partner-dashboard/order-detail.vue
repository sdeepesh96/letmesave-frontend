<template>
  <div>
    <!-- <InnerBanner /> -->
    <v-container style="max-width: 850px;">
      <div class="list-head">
        <p>Order Details</p>
      </div>
      <!-- <div class="thankyou-sec text-center">
        <img src="~/assets/success.png" />
        <p>Thank you for saving food from being wasted</p>
      </div> -->
      <div class="order-details">
        <div class="order-id">
          <div>
            <p>{{ orderDate[0] }}</p>
            <p>{{ orderDate[1] }}</p>
          </div>
          <div>
            <p>Order ID</p>
            <p>{{ orderHeader.order_id }}</p>
          </div>
        </div>
        <div class="order-qty">
          <div class="order-item" v-for="item in orderDetails" :key="item.id">
            <div>
              <p>{{ item.product_name }}</p>
              <p>Qty: {{ item.quantity }}</p>
            </div>
            <div>
              <p>NOK{{ item.amount }}</p>
            </div>
          </div>
        </div>
        <div class="order-paid">
          <p>Amount Paid</p>
          <p>NOK {{ orderHeader.paid_online }}</p>
        </div>
        <div class="order-pay">
          <p>Pay while pick-up (80%)</p>
          <p>NOK {{ orderHeader.paid_on_store }}</p>
        </div>
        <div class="address text-center">
          <p>Address</p>
          <p>{{ orderHeader.address }}</p>
        </div>
        <div class="pickup text-center">
          <p>Pick Up / Arrival</p>
          <p>{{ orderHeader.offer_time }}</p>
        </div>
      </div>

      <v-row>
        <v-col cols="12" sm="6">
          <div class="list-head">
            <p>Customer Details</p>
          </div>
          <div class="mt-3"></div>
          <p>
            {{ orderHeader.billing_to_name }}
          </p>
          <p>Phone: {{ orderHeader.phone }}</p>
          <p>
            {{ orderHeader.offer_time }}
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="list-head">
            <p>Order Details</p>
          </div>
          <div class="mt-3"></div>
          <div>
            <div class="caption text--secondary">
              Order ID:
            </div>
            {{ orderHeader.order_id }}
          </div>

          <div>
            <div class="caption text--secondary">
              Date:
            </div>
            {{ orderHeader.order_time }}
          </div>
          <div>
            <div class="caption text--secondary">
              Location:
            </div>
            {{ orderHeader.address }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "partner-dashboard",

  data: () => ({
    orderHeader: {},
    orderDetails: [],
    order: {},
    orderDate: []
  }),
  mounted() {
    this.getOrderDetails(this.$route.query.orderId);
  },
  methods: {
    async getOrderDetails(orderId) {
      try {
        await this.$axios
          .post("Mobile/Partner/GetOrderDetails", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            OrderId: parseInt(orderId)
          })
          .then(response => {
            // console.log(response.data);
            this.orderHeader = response.data.orderHeader[0];
            this.orderDetails = response.data.orderDetails;
            this.orderDate = response.data.orderHeader[0].order_time.split(
              "  "
            );
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
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
