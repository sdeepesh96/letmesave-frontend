<template>
  <div class="partner-dash">
    <v-container>
      <div class="dashboard-sort">
        <h4>Sales Overview</h4>
        <v-select
          :items="items"
          label="Select Date"
          outlined
          background-color="#fff"
          @change="getDateFilteredData"
          return-object=""
        ></v-select>
      </div>
      <v-row>
        <v-col cols="6" xs="6" sm="3" md="3" lg="3"
          ><div class="partner-tab">
            <div
              :class="{ active: isActive == 73 }"
              @click="getFilteredData(73)"
            >
              <h4>{{ orderData.saveFood }}</h4>
              <p>Save food</p>
            </div>
          </div></v-col
        >
        <v-col cols="6" xs="6" sm="3" md="3" lg="3"
          ><div class="partner-tab">
            <div
              :class="{ active: isActive == 74 }"
              @click="getFilteredData(74)"
            >
              <h4>{{ orderData.salesOffer }}</h4>
              <p>Sale Offer</p>
            </div>
          </div></v-col
        >
        <v-col cols="6" xs="6" sm="3" md="3" lg="3"
          ><div class="partner-tab">
            <div
              :class="{ active: isActive == 96 }"
              @click="getFilteredData(96)"
            >
              <h4>{{ orderData.promotion }}</h4>
              <p>Promotions</p>
            </div>
          </div></v-col
        >
        <v-col cols="6" xs="6" sm="3" md="3" lg="3"
          ><div class="partner-tab">
            <div>
              <img src="~/assets/statistics1.png" alt="Statistics" />
              <p>Statistics</p>
            </div>
          </div></v-col
        >
      </v-row>
      <div class="order-list">
        <h3>Latest orders and activities</h3>
        <v-row>
          <v-col v-for="(item, i) in values" :key="i" cols="12">
            <div class="order-item">
              <div class="order-name">
                <p
                  v-for="(type, index) in item.order_deals"
                  :key="index"
                  class="tag"
                >
                  {{ type }}
                </p>
                <h4 class="title">{{ item.order_id }}</h4>
                <!-- <p class="date-id">{{ item.date }} | {{ item.id }}</p> -->
                <p class="date-id">{{ item.purchase_date }}</p>
              </div>
              <div class="order-person">
                <p>{{ item.firstname }}</p>
                <p>{{ item.phone }}</p>
                <p>{{ item.user_email }}</p>
                <!-- <p>{{ item.order_date }} | {{ item.order_time }}</p> -->
              </div>
              <div class="order-amount">
                <p>
                  Paid <span>{{ item.paid_online }} NOK</span>
                </p>
                <p>
                  To be collected <span>{{ item.paid_on_store }} NOK</span>
                </p>
              </div>
              <div class="order-status">
                <div @click="getOrderDetail(item.id)" class="details">
                  View order details
                </div>
                <div class="status">{{ item.status }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <nuxt-link to="#" class="bottom-more">View more</nuxt-link>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "partner-dashboard",
  data: () => ({
    items: ["Today", "Yesterday"],
    values: [],
    orderData: {},
    isActive: null
  }),
  mounted() {
    this.getOrderData();
  },
  methods: {
    async getOrderData() {
      try {
        await this.$axios
          .post("Mobile/Partner/GetOrderList", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken
          })
          .then(response => {
            this.orderData = response.data;

            this.values = response.data.data;
            // console.log(response.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    getOrderDetail(orderId) {
      this.$router.push(
        `/partner-dashboard/order-detail?orderId=${parseInt(orderId)}`
      );
    },
    async getFilteredData(id) {
      this.isActive = id;
      await this.$axios
        .post("Mobile/Partner/GetOrderList", {
          Id: this.$store.state.userData.id.toString(),
          AccessToken: this.$store.state.userData.userAccessToken,
          FromDate: "",
          ToDate: "",
          Type: id.toString()
        })
        .then(response => {
          this.values = response.data.data;
        });
    },
    async getDateFilteredData(item) {
      let date = null;
      if (item == "Today") {
        date = new Date().toISOString().slice(0, 10);
      } else {
        date = new Date();
        date.setDate(date.getDate() - 1);
        date = date.toISOString().slice(0, 10);
      }
      this.isActive = null;
      await this.$axios
        .post("Mobile/Partner/GetOrderList", {
          Id: this.$store.state.userData.id.toString(),
          AccessToken: this.$store.state.userData.userAccessToken,
          FromDate: date,
          ToDate: date,
          Type: ""
        })
        .then(response => {
          this.values = response.data.data;
        });
    }
  }
};
</script>
<style scoped>
.partner-dash {
  background: #eaedf4;
}
.dashboard-sort {
  padding: 1.5em 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: baseline;
  grid-gap: 1.5em;
}
.dashboard-sort h4 {
  font-size: 22px;
  font-weight: 500;
  color: #3a3a3b;
}
.partner-tab > div > p {
  display: block;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: -30px;
}
.partner-tab > div > img {
  width: 64px;
  margin: auto;
}
.partner-tab > div > h4 {
  display: block;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.5;
}
.partner-tab > div {
  cursor: pointer;
  color: #104388;
  background: #fff;
  text-align: center;
  height: 150px;
  display: grid;
  align-items: center;
  text-decoration: none;
  border-radius: 15px;
  grid-template-rows: 2fr 1fr;
}
a.bottom-more {
  text-decoration: none;
  font-size: 18px;
  color: #104388;
  padding-left: 10px;
  font-weight: 500;
}
.order-status {
  margin: auto;
}
.order-list {
  margin-top: 2em;
  margin-bottom: 2em;
}
.partner-tab > div.active {
  border: 5px solid #6585b2;
  transform: scale(1.1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.order-list > h3 {
  font-size: 24px;
  color: #333333;
  font-weight: 500;
  border-bottom: 1.5px solid #cfcfd0;
  padding-bottom: 10px;
  margin-bottom: 1em;
}
.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  width: 180px;
}
.order-item {
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
  grid-gap: 2em;
  width: 100%;
  background: #fff;
  padding: 1em;
  border-radius: 10px;
  margin: 0;
}
.order-item > div {
  padding: 0.5em;
}
.order-name {
  padding-left: 1em;
}
.order-name > p.tag {
  color: #fff;
  background: #3eba5e;
  width: max-content;
  padding: 0 20px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 5px;
}
.order-name > h4.title {
  color: #104388;
  line-height: 1;
}
.order-name > p.date-id {
  color: #4a4a4a;
  margin-bottom: 10px;
  font-weight: 500;
  margin: 0;
}
.order-person p {
  color: #4a4a4a;
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
}
.order-amount {
  text-align: right;
  align-items: end;
  /* margin: auto 0 0; */
}
.order-amount p {
  line-height: 1.5;
  font-weight: 500;
  color: #4a4a4a;
  margin: 0;
  width: 100%;
}
.order-amount p span {
  font-weight: 900;
}
.order-status .details,
.order-status .status {
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  width: 165px;
  margin: 4px auto;
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.order-status .details {
  background: #24b149;
}
.order-status .details:hover {
  background: #22c34c;
}
.order-status .status {
  background: #104388;
}
.order-status .status:hover {
  background: #124c9b;
}
@media (max-width: 1023px) {
  .order-item {
    grid-gap: 0;
  }
  .order-person,
  .order-amount {
    margin: auto;
  }
}
@media (max-width: 767px) {
  .order-item {
    display: block;
  }
  .order-amount {
    text-align: left;
  }
  .partner-tab > a > p {
    font-size: 20px;
  }
}
</style>
