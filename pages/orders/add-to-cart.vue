<template>
  <div>
    <InnerBanner />
    <v-container>
      <div class="list-head">
        <p>Add Deal to Cart</p>
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
          <h4>{{order.restaurant}}</h4>
          <h5>{{order.type}}</h5>
          <p>
            <img src="~/assets/clock.png" /> Pick Up
            <span>{{order.time}}</span>
          </p>
          <div class="order-summary-inner">
            <div class="order-item">
              <p>Quantity</p>
              <div>
                <div>
                  <!-- <v-btn color="#eaedf4">-</v-btn> -->
                  <v-text-field
                    hide-details
                    outlined
                    class="qty-input"
                    v-model="how_many_person"
                    label
                    dense
                    prepend-inner-icon="mdi-minus"
                    append-icon="mdi-plus"
                    value="1"
                    @click:append="increment"
                    @click:prepend-inner="increment"
                  ></v-text-field>
                  <!-- <v-btn color="#eaedf4">+</v-btn> -->
                </div>
                <div>
                  <v-radio-group v-model="row" row color="#104388">
                    <v-radio label="Reserve Table" value="ReserveTable"></v-radio>
                    <v-radio label="Self Pick-up" value="Selfpick-up"></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>
            <div class="order-total">
              <p>Total</p>
              <p>NOK {{order.total}}</p>
            </div>
            <div class="order-paid">
              <p>Pay online (20%)</p>
              <p>NOK {{order.paid}}</p>
            </div>
            <div class="order-pay">
              <p>Pay while pick-up (80%)</p>
              <p>NOK {{order.pay}}</p>
            </div>
            <div class="add-note">
              <p>Add more deals with Oppdal Hotel with same pick-up time</p>
            </div>
            <div class="order-summary-foot text-center">
              <p>
                By purchasing this you agree to Letmesave
                <nuxt-link to="#">Term of Use</nuxt-link>
              </p>
              <p>You will recieve order number and confirmation message in app after payment</p>
              <v-btn to="#" color="#104388" dark width="150px">Order Summary</v-btn>
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
    order: {
      restaurant: "Oppdal Hotel",
      time: "Sunday, May 24, 20.00 - 21.00",
      type: "Special Dinner Deal",
      price1: "20",
      price2: "30",
      total: "50",
      pay: "20",
      paid: "30",
    },
  }),
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

.order-item > div:last-child > div:first-child {
  display: flex;
  margin: auto;
  max-width: 135px;
}

.order-item > div > div > button:last-child {
  margin-left: 10px !important;
}
.order-item > div > div > button:first-child {
  margin-right: 10px !important;
}

.order-item > div > div > button {
  padding: 0 !important;
  min-width: 30px !important;
  margin: 5px 0 !important;
  height: 30px !important;
  font-size: 28px !important;
}
.order-summary-right h5,
.order-item h5 {
  font-weight: 400;
  font-size: 18px;
}

.order-item > div:last-child > div:last-child {
  display: flex;
}

.order-item > div:last-child > div:last-child > div {
  margin: 2em auto 1em;
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

.add-note > p {
  text-align: center;
  width: max-content;
  padding: 0.7em;
  font-size: 15px;
  background: #f89400;
  color: #fff;
  border-radius: 5px;
  margin-top: 1em;
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
  margin-top: 2em;
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
  .add-note > p {
    padding: 0.7em 4em;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .order-item {
    grid-template-columns: 1fr 33%;
  }

  .order-summary-left {
    padding: 1em;
  }
  p {
    font-size: 14px;
  }
  .add-note > p {
    font-size: 13px;
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
}
</style>