<template>
  <div>
    <div class="profile-sec">
      <v-container>
        <h4>My Orders</h4>
      </v-container>
    </div>
    <v-container>
      <div class="row">
        <v-col cols="12" xs="12" sm="3" md="3" lg="3">
          <UserSidebar />
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9">
          <div class="profile-list">
            <h3>Recent Orders</h3>
            <v-row>
              <v-col v-for="(item, i) in values" :key="i" cols="12">
                <div class="order-item">
                  <div class="order-name">
                    <p class="tag">{{item.type}}</p>
                    <h4 class="title">{{item.title}}</h4>
                    <p class="date-id">{{item.date}} | {{item.id}}</p>
                  </div>
                  <div class="order-person">
                    <p>{{item.name}}</p>
                    <p>{{item.order_id}}</p>
                    <p>{{item.order_date}} | {{item.order_time}}</p>
                  </div>
                  <div class="order-amount">
                    <p>
                      Paid
                      <span>{{item.amount_paid}} NOK</span>
                    </p>
                    <p>
                      To be collected
                      <span>{{item.to_collect}} NOK</span>
                    </p>
                  </div>
                  <div class="order-status">
                    <nuxt-link to="#" class="details">View order details</nuxt-link>
                    <nuxt-link to="#" class="status">Pending</nuxt-link>
                  </div>
                </div>
              </v-col>
            </v-row>
            <!-- <nuxt-link to="#" class="bottom-more">View more</nuxt-link> -->
          </div>
        </v-col>
      </div>
    </v-container>
  </div>
</template>

<script>
import UserSidebar from "~/components/UserSidebar";
export default {
  components: {
    UserSidebar,
  },
  data: () => ({
    values: [
      {
        type: "Save Food",
        title: "Special Dinner Deal",
        date: "Nov 23, 2020",
        id: "#1234567890",
        name: "Martin",
        order_id: "1234567890",
        order_date: "Nov 23, 2020",
        order_time: "19.00 - 20.00",
        amount_paid: "20",
        to_collect: "80",
      },
      {
        type: "Save Food",
        title: "Special Dinner Deal",
        date: "Nov 23, 2020",
        id: "#1234567890",
        name: "Martin",
        order_id: "1234567890",
        order_date: "Nov 23, 2020",
        order_time: "19.00 - 20.00",
        amount_paid: "20",
        to_collect: "80",
      },
      {
        type: "Save Food",
        title: "Special Dinner Deal",
        date: "Nov 23, 2020",
        id: "#1234567890",
        name: "Martin",
        order_id: "1234567890",
        order_date: "Nov 23, 2020",
        order_time: "19.00 - 20.00",
        amount_paid: "20",
        to_collect: "80",
      },
      {
        type: "Save Food",
        title: "Special Dinner Deal",
        date: "Nov 23, 2020",
        id: "#1234567890",
        name: "Martin",
        order_id: "1234567890",
        order_date: "Nov 23, 2020",
        order_time: "19.00 - 20.00",
        amount_paid: "20",
        to_collect: "80",
      },
      {
        type: "Save Food",
        title: "Special Dinner Deal",
        date: "Nov 23, 2020",
        id: "#1234567890",
        name: "Martin",
        order_id: "1234567890",
        order_date: "Nov 23, 2020",
        order_time: "19.00 - 20.00",
        amount_paid: "20",
        to_collect: "80",
      },
    ],
  }),
};
</script>
<style scoped>
.profile-sec h4 {
  font-weight: 400;
  color: #0f4387;
}
.profile-sec {
  text-align: left;
  background: #eaedf6;
  padding: 1.5em 0;
  font-size: 22px;
}
.profile-list h3 {
  font-weight: 400;
  color: #f89400;
  margin-top: 1em;
  border-bottom: 1px solid #eaedf6;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
}
.profile-list form {
  margin: 2em 0;
}
.order-status {
  margin: auto;
}
.order-list {
  margin-top: 2em;
  margin-bottom: 2em;
}
.partner-tab > a.nuxt-link-exact-active.nuxt-link-active {
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

.order-item {
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
  grid-gap: 2em;
  width: 100%;
  background: #eaedf6;
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
  margin: auto 0 0;
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
.order-status a.details {
  background: #24b149;
}
.order-status a.details:hover {
  background: #22c34c;
}
.order-status a.status {
  background: #104388;
}
.order-status a.status:hover {
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