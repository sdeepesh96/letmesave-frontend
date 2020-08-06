<template>
  <div class="partner-dash">
    <v-container>
      <div class="order-list">
        <div class="list-head">
          <h3>Sales Overview</h3>
          <div>
            <p>Filter by</p>
            <v-select
              :items="filterItems"
              item-value="value"
              item-text="label"
              v-model="filterBy"
              @change="getOrdersData"
              outlined
              dense
              width="130px"
            ></v-select>
          </div>
        </div>
        <v-row>
          <v-col v-for="(item, i) in ordersData" :key="i" cols="12">
            <h4 v-if="filterBy == 0" class="head-date">
              {{ item.month_name }}
            </h4>
            <h4 v-else class="head-date">
              {{ item.year }}
            </h4>
            <div class="order-item">
              <div class="order-item-left">
                <div class="order-name">
                  <p class="date-id">{{ item.total_orders }}</p>
                </div>
                <div class="order-type">
                  <h4>{{ item.day_name || item.month_name }}</h4>
                  <!-- <p class="tag">{{ item.type }}</p> -->
                </div>
              </div>
              <div class="order-item-right">
                <div class="order-amount">
                  <p>
                    Payments <span>{{ item.payments }} NOK</span>
                  </p>
                </div>
                <div class="order-amount">
                  <p>
                    Refunds <span>{{ item.refund }} NOK</span>
                  </p>
                </div>
                <div class="order-amount">
                  <p>
                    Total Amount <span>{{ item.total_amount }} NOK</span>
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "partner-dashboard",
  data: () => ({
    filterBy: 0,
    filterItems: [
      {
        value: 0,
        label: "Day"
      },
      {
        value: 1,
        label: "month"
      }
    ],
    ordersData: []
  }),
  mounted() {
    this.getOrdersData();
  },
  methods: {
    async getOrdersData() {
      try {
        await this.$axios
          .post("Mobile/partner/Importants", {
            AccessToken: this.$store.state.userData.userAccessToken,
            Id: this.$store.state.userData.id.toString(),
            type: this.filterBy.toString()
          })
          .then(response => {
            this.ordersData = response.data.data;
          });
      } catch (error) {
        console.log(error);
      }
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
.order-status {
  margin: auto;
}
.order-list {
  margin-top: 2em;
  margin-bottom: 2em;
}
.order-list > h3 {
  font-size: 24px;
  color: #333333;
  font-weight: 500;
  border-bottom: 1.5px solid #cfcfd0;
  padding-bottom: 10px;
  margin-bottom: 1em;
}
.order-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  width: 100%;
  background: #fff;
  padding: 1em 2.5em;
  border-radius: 10px;
  margin: 10px 0 5px;
  align-items: center;
}
.order-type > p.tag {
  color: #fff;
  background: #3eba5e;
  width: max-content;
  padding: 2px 15px;
  border-radius: 5px;
  font-size: 14px;
  margin: auto 0;
}
.order-type > h4 {
  font-size: 18px;
  margin-right: 10px;
  font-weight: 500;
  color: #104388;
}
.head-date {
  font-weight: 500;
  color: #104388;
}
.order-name > p.date-id {
  color: #4a4a4a;
  margin-bottom: 10px;
  font-weight: 500;
  margin: 0;
}
.order-type p {
  color: #4a4a4a;
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
}
.order-amount {
  text-align: right;
  align-items: end;
}
.order-amount p {
  line-height: 1.3;
  font-weight: 400;
  color: #4a4a4a;
  margin: 0;
  font-size: 14px;
  width: 100%;
}
.order-amount p span {
  font-weight: 900;
  display: block;
}
.order-status a.details,
.order-status a.status {
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  width: 165px;
  margin: 4px auto;
  padding: 3px 10px;
  border-radius: 5px;
}
.order-item-left {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 2em;
  align-items: center;
}
.order-type {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.order-item-right {
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
}
.list-head a {
  text-align: right;
  text-decoration: none;
  font-size: 28px;
  color: #fff;
  background: #fba705;
  border-radius: 50px;
  padding: 7px 30px 5px 5px;
  text-transform: uppercase;
  font-weight: 400;
  width: max-content;
  margin: 0 0 0 auto;
}
.list-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1.5px solid #ccc;
}
.list-head h3 {
  margin: auto 0;
  font-weight: 500;
  font-size: 24px;
  color: #333;
}
.list-head > div {
  display: inline-flex;
  align-items: baseline;
  margin: 0 0 -15px auto;
}
.list-head > div > p {
  margin: 0 20px;
}
.v-input.v-input--is-label-active.v-input--is-dirty.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  width: 100px;
}
@media (max-width: 1023px) {
  .order-item {
    grid-gap: 0;
  }
  .order-type,
  .order-amount {
    margin: auto;
  }
}
@media (max-width: 767px) {
  .order-item {
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  .order-amount {
    text-align: left;
  }
  .order-item-left {
    display: block;
  }
  .order-type {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
