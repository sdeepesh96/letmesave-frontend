<template>
  <div>
    <InnerBanner />
    <v-container>
      <div class="list-head">
        <p>Add User Details</p>
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
          <v-form ref="form">
            <v-text-field
              label="User Name"
              v-model="UserName"
              :rules="[rules.required]"
              outlined
              name="UserName"
              type="text"
              class="login-form-feild"
            ></v-text-field>
            <v-text-field
              label="Email ID"
              v-model="UserEmail"
              :rules="[rules.required, rules.email]"
              outlined
              name="UserEmail"
              type="email"
              class="login-form-feild"
            ></v-text-field>
            <v-text-field
              label="Mobile Number"
              v-model="MobileNo"
              :rules="[rules.required]"
              outlined
              name="MobileNo"
              type="text"
              class="login-form-feild"
            ></v-text-field>
            <v-text-field
              label="Mobile Number"
              v-model="AltMobileNo"
              :rules="[rules.required]"
              outlined
              name="MobileNo"
              type="text"
              class="login-form-feild"
            ></v-text-field>
            <v-btn
              rounded
              color="#104388"
              x-large
              dark
              class="login-sub"
              @click="submit"
              :loading="loading"
            >Continue</v-btn>
          </v-form>
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
    productCount: 1,
    orderreserve: "ReserveTable",
    order: "",
    UserName: "",
    UserEmail: "",
    MobileNo: "",
    AltMobileNo: "",
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  mounted() {
    this.order = this.$store.state.cart.productData;
  },
  computed: {
    ...mapGetters({
      productData: "productData",
    }),
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

.order-summary {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 2em;
  margin: 2em 0;
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

.order-summary-inner {
  margin-top: 2.5em;
}

.order-summary-right {
  margin: auto 0;
}

@media (min-width: 1200px) {
  .order-summary-left > img {
    width: 80%;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  p {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  p {
    font-size: 14px;
  }
}
</style>