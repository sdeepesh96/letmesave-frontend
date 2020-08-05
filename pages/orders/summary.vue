<template>
  <div>
    <InnerBanner />
    <v-container>
      <div class="list-head">
        <p>Order Summary</p>
      </div>
      <div class="order-summary">
        <div class="order-summary-left">
          <img src="~/assets/cartofferimge.png" />
          <p>
            Food that is depending on the menu and surplus food from the place you
            order. If you have any allergies it is your responsibility to make sure
            about the ingrediants with the store directly where you order and pickup the food
          </p>
        </div>
        <div class="order-summary-right">
          <div class="order-summary-inner">
            <div class="order-item" v-for="(item, i) in items" :key="i">
              <div>
                <h5>{{item.productName}}</h5>
                <p>Nok {{item.amount}}</p>
              </div>
              <div>
                <div>
                  <v-text-field
                    hide-details
                    outlined
                    class="qty-input"
                    :value="item.quantity"
                    label
                    dense
                    prepend-inner-icon="mdi-minus"
                    append-icon="mdi-plus"
                    @click:append="item.quantity++"
                    @click:prepend-inner="(item.quantity<=1) ? '' : item.quantity--"
                  ></v-text-field>
                </div>
                <div>
                  <p>Nok {{item.amount * item.quantity}}</p>
                  <v-btn
                    @click="deleteItem(item, i)"
                    text
                    class="delete-text"
                    color="#0f4387"
                  >Delete</v-btn>
                </div>
              </div>
            </div>

            <div class="order-total">
              <p>Total</p>
              <p>NOK {{cartTotal}}</p>
            </div>
            <div class="order-paid">
              <p>Pay online (20%)</p>
              <p>NOK {{20/100*(cartTotal) }}</p>
            </div>
            <div class="order-pay">
              <p>Pay while pick-up (80%)</p>
              <p>NOK {{80/100*(cartTotal) }}</p>
            </div>
            <div class="order-summary-foot text-center">
              <p>
                By purchasing this you agree to Letmesave
                <nuxt-link to="#">Term of Use</nuxt-link>
              </p>
              <p>You will recieve order number and confirmation message in app after payment</p>
              <v-btn @click="placeorder" color="#104388" dark width="150px">Pay Now</v-btn>
              <v-snackbar v-model="snackbar" top color="#0f4387">
                Order place successfully
                <template>
                  <v-btn text @click="snackbar = false" color="#fff">Close</v-btn>
                </template>
              </v-snackbar>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import InnerBanner from "~/components/InnerBanner";
export default {
  components: {
    InnerBanner,
  },
  data: () => ({
    snackbar: false,
    items: [],
    productCount: "",
    headerId: "",
  }),
  computed: {
    cartTotal() {
      return this.items.reduce(
        (subTotal, item) => item.amount * item.quantity + subTotal,
        0
      );
    },
  },
  methods: {
    async deleteItem(tobeDeleted, i) {
      try {
        this.items = this.items.filter((item, index) => index !== i);
        await this.$axios
          .post("/Mobile/User/UpdateCart", {
            TotalAmount: this.cartTotal.toString(),
            ItemDetail: this.items,
            HeaderId: this.headerId,
          })
          .then((response) => {
            // this.items = response.data.data;
            // this.totalAmount = response.data.totalAmount;
            // console.log(this.productCount);
          });
      } catch (e) {
        console.log(e);
      }
    },
    async placeorder() {
      try {
        await this.$axios
          .post("/Mobile/User/PlaceOrder", {
            ItemDetail: this.items,
            HeaderId: this.headerId,
          })
          .then((response) => {
            if (response.data.code == 200) {
              this.snackbar = true;
              // this.$router.push("/orders/confirmation");
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    async usercart() {
      try {
        await this.$axios
          .post("/Mobile/User/GetAddToCart", {
            UserId: this.$store.state.userData.userID.toString(),
            Phone: "",
          })
          .then((response) => {
            this.items = response.data.data;
            this.totalAmount = response.data.totalAmount;
            this.headerId = response.data.headerId;
          });
      } catch (e) {
        console.log(e);
      }
    },
    async guestcart() {
      let localuserdata = localStorage.getItem("userData");
      let localuserdataobj = JSON.parse(localuserdata);
      try {
        await this.$axios
          .post("/Mobile/User/GetAddToCart", {
            UserId: "0",
            Phone: localuserdataobj.Phoneno,
          })
          .then((response) => {
            this.items = response.data.data;
            this.totalAmount = response.data.totalAmount;
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    if (this.$store.state.userData) {
      this.usercart();
    } else {
      this.guestcart();
    }
  },
};
</script>

<style scoped>
.list-head {
  border-bottom: 1px solid #e9e9eb;
  padding-bottom: 8px;
  margin-top: 2em;
}

.list-head p,
.order-summary-right > h4 {
  margin: 0;
  font-size: 20px;
  color: #0f4387;
  font-weight: 400;
}

.order-summary {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;
}

.order-summary-right img {
  width: 20px;
  margin-bottom: -4px;
}

.order-summary-left > img {
  width: 100%;
}

.order-summary-left {
  border: 1.5px solid #e9e9eb;
  border-radius: 5px;
  padding: 2em;
  text-align: center;
}

.order-summary-left > P {
  font-size: 15px;
  margin-top: 2em;
  margin-bottom: 0;
}

.order-summary-right > p > span {
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
}
.order-summary-right > p {
  margin-top: 5px;
  font-weight: 500;
  color: #333;
  font-size: 16px;
}

.order-summary-inner {
  margin-top: 2.5em;
}

.order-item > div:last-child > div {
  display: flex;
  justify-content: space-between;
}
.order-item {
  display: grid;
  margin: 1em 0;
  grid-template-columns: 1fr 20%;
  justify-content: space-between;
}

.order-item > div > div > button:last-child {
  margin-left: 10px !important;
}
.order-item > div > div > button:first-child {
  margin-right: 10px !important;
}

.order-item h5 {
  font-weight: 400;
  font-size: 18px;
}

.order-item > div > p {
  font-size: 15px;
  margin: 5px 0 0;
}

.order-item > div:last-child > div > p {
  margin-bottom: 0;
}

.order-total {
  padding: 1em 0;
  border: 1px solid #e9e9eb;
  border-right: 0;
  border-left: 0;
  margin-bottom: 1.5em;
}
.order-total > p {
  margin: 0;
}

.order-total,
.order-paid,
.order-pay {
  display: flex;
  justify-content: space-between;
}

.order-pay {
  margin-top: 0.5em;
}

.order-summary-foot {
  margin-top: 3em;
}

button.delete-text {
  font-size: 14px;
  line-height: 0;
  letter-spacing: 0;
  margin-top: 12px;
  float: right;
  text-align: right;
  height: 0 !important;
  min-width: auto !important;
  padding: 0 !important;
}

.order-summary-foot > p > a {
  text-decoration: none;
  color: #104388;
}

.order-summary-foot p {
  max-width: 450px;
  margin: 0 auto 20px;
}

@media (min-width: 1200px) {
  .order-summary-left > img {
    width: 80%;
  }
}

@media (max-width: 1199px) {
  .order-item {
    grid-template-columns: 1fr 27%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .order-item {
    grid-template-columns: 1fr 33%;
  }

  .order-summary-left {
    padding: 1em;
  }
}

@media (max-width: 767px) {
  p {
    font-size: 14px;
  }
  .order-summary {
    grid-template-columns: 1fr;
  }
  .add-note > p {
    font-size: 13px;
  }

  .order-item {
    grid-template-columns: 1fr 35%;
  }
}
</style>