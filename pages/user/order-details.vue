<template>
  <div>
    <v-container style="max-width: 850px;">
      <div class="list-head">
        <p>Order Details</p>
        <div class="statusaction">
          <v-btn
            class="cancel-order"
            color="red"
            @click="dialog = true"
            v-if="orderHeader.order_status=='Pending'"
          >Cancel Order</v-btn>
          <p v-else>{{orderHeader.order_status}}</p>
        </div>
      </div>
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

      <v-row class="cus-order-details">
        <v-col cols="12" sm="6">
          <div class="list-head" style="margin-bottom: 1em;">
            <p>Customer Details</p>
          </div>
          <div class="mt-3"></div>
          <div>
            <div class="caption text--secondary">Name:</div>
            {{ orderHeader.billing_to_name }}
          </div>
          <div>
            <div class="caption text--secondary">Phone:</div>
            {{ orderHeader.billing_to_phone }}
          </div>
          <div>
            <div class="caption text--secondary">Date:</div>
            {{ orderHeader.offer_time }}
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="list-head" style="margin-bottom: 1em;">
            <p>Order Details</p>
          </div>
          <div class="mt-3"></div>
          <div>
            <div class="caption text--secondary">Order ID:</div>
            {{ orderHeader.order_id }}
          </div>

          <div>
            <div class="caption text--secondary">Date:</div>
            {{ orderHeader.order_time }}
          </div>
          <div>
            <div class="caption text--secondary">Location:</div>
            {{ orderHeader.address }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Cancel the order?</span>
          <div @click="dialog = false">
            <img src="~/assets/close.svg" />
          </div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div class="text-center">
              <img src="~/assets/cancelled.svg" />
            </div>
            <p>Please tell us why?</p>
            <v-form ref="form">
              <v-radio-group column class="mt-0" v-model="reason">
                <v-radio
                  v-for="(reasontype, i) in reasontypes"
                  :key="i"
                  :label="`${reasontype.name}`"
                  :value="i"
                  color="#104388"
                ></v-radio>
              </v-radio-group>
            </v-form>
          </v-container>
          <div class="text-center">
            <v-btn color="#104388" rounded large dark width="65%" @click="cancel">Cancel Order</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  //   layout: "partner-dashboard",

  data: () => ({
    dialog: false,
    reason: "",
    reasontypes: "",
    orderHeader: {},
    orderDetails: [],
    order: {},
    orderDate: [],
  }),
  methods: {
    async getOrderDetails(orderId) {
      try {
        await this.$axios
          .post("Mobile/Partner/GetOrderDetails", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            OrderId: parseInt(orderId),
          })
          .then((response) => {
            console.log(response.data);
            this.orderHeader = response.data.orderHeader[0];
            this.orderDetails = response.data.orderDetails;
            this.orderDate = response.data.orderHeader[0].order_time.split(
              "  "
            );
          });
      } catch (error) {
        console.log(error);
      }
    },
    async cancel() {
      //   this.dialog = true;
      try {
        await this.$axios
          .post("Mobile/User/CancelOrder", {
            Reason: this.reason.toString(),
            Status: "78",
            OrderId: this.orderHeader.id.toString(),
          })
          .then((response) => {
            if (response.data.code == 200) {
              this.dialog = false;
              this.$router.push("/user/my-orders");
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  },

  async mounted() {
    this.getOrderDetails(this.$route.query.orderId);
    try {
      await this.$axios
        .post("GetSearchValue", { ParentId: "108" })
        .then((response) => {
          this.reasontypes = response.data.data;
          //   this.storetypes.pop();
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.theme--light.v-label {
  color: #333;
}
.list-head {
  border-bottom: 1px solid #e9e9eb;
  padding-bottom: 8px;
  margin-top: 2em;
  margin-bottom: 3em;
}

.order-item > p {
  margin: 0;
  text-align: center;
  font-size: 14px;
}

.v-card__title {
  display: flex;
  justify-content: space-between;
}

.v-application .headline {
  font-size: 18px !important;
  line-height: 1.1 !important;
  color: #0f4387;
}

.v-card__title img {
  width: 24px;
  cursor: pointer;
}

label.v-label.theme--light {
  color: #333;
}

.v-card__text > div > p {
  font-size: 16px;
  color: #0f4387;
}

.text-center > img {
  width: 74px;
  margin-bottom: 2em;
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

.list-head {
  display: flex;
  justify-content: space-between;
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

.statusaction p,
button.cancel-order {
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 3px 10px !important;
  background: #24b149;
  border-radius: 5px;
  font-size: 18px;
}
button {
  letter-spacing: 0;
  font-size: 18px !important;
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
.cus-order-details {
  margin-bottom: 3em;
}
</style>
