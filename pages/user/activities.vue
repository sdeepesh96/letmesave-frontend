<template>
  <div>
    <div class="profile-sec">
      <v-container>
        <h4>Activities</h4>
      </v-container>
    </div>
    <v-container>
      <div class="row">
        <v-col cols="12" xs="12" sm="3" md="3" lg="3">
          <UserSidebar />
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9">
          <h3 class="order-title">Latest Deals</h3>
          <div class="user-order" v-for="(order, i) in orders" :key="i">
            <div class="order-head">
              <p class="order-status">{{order.status}}</p>
              <p class="order-id">
                Order ID
                <span>{{order.id}}</span>
              </p>
            </div>
            <div class="order-details">
              <div class="order-detail-head">
                <div>
                  <h4>{{order.hotel}}</h4>
                  <p>{{order.type}}</p>
                </div>
                <div>
                  <p class="order-price">{{order.price}}</p>
                </div>
              </div>
              <div class="order-details-foot">
                <p>
                  <img src="~/assets/clock.png" />
                  {{order.address}}
                </p>
                <p>
                  <img src="~/assets/clock.png" />
                  {{order.pickup}}
                </p>
              </div>
            </div>
          </div>
          <h3 class="order-title">Nearby Deals</h3>
          <div class="order-details near" v-for="(near, i) in nears" :key="i">
            <div class="order-detail-head">
              <div>
                <h4>{{near.hotel}}</h4>
                <p>{{near.type}}</p>
              </div>
              <div>
                <p class="order-price">{{near.price}}</p>
              </div>
            </div>
            <div class="order-details-foot">
              <p>
                <img src="~/assets/clock.png" />
                {{near.address}}
              </p>
              <p>
                <img src="~/assets/clock.png" />
                {{near.pickup}}
              </p>
            </div>
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
    orders: [
      {
        status: "Pending for Pick-Up",
        id: "123456",
        hotel: "Oppdal Hotel",
        type: "Excellent deal (1 qty), Excellent deal (2 qty)",
        price: "90 NOK",
        address: "Oppdal Hotel, Oppdal, Norway",
        pickup: "Sunday, May 24, 20.00 - 21.00",
      },
    ],
    nears: [
      {
        hotel: "Oppdal Hotel",
        type: "Excellent deal (1 qty), Excellent deal (2 qty)",
        price: "90 NOK",
        address: "Oppdal Hotel, Oppdal, Norway",
        pickup: "Sunday, May 24, 20.00 - 21.00",
      },
      {
        hotel: "Oppdal Hotel",
        type: "Excellent deal (1 qty), Excellent deal (2 qty)",
        price: "90 NOK",
        address: "Oppdal Hotel, Oppdal, Norway",
        pickup: "Sunday, May 24, 20.00 - 21.00",
      },
      {
        hotel: "Oppdal Hotel",
        type: "Excellent deal (1 qty), Excellent deal (2 qty)",
        price: "90 NOK",
        address: "Oppdal Hotel, Oppdal, Norway",
        pickup: "Sunday, May 24, 20.00 - 21.00",
      },
      {
        hotel: "Oppdal Hotel",
        type: "Excellent deal (1 qty), Excellent deal (2 qty)",
        price: "90 NOK",
        address: "Oppdal Hotel, Oppdal, Norway",
        pickup: "Sunday, May 24, 20.00 - 21.00",
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

h3.order-title,
.order-detail-head h4 {
  font-size: 20px;
  font-weight: 400;
  color: #0f4387;
  margin-bottom: 0.5em;
}
p.order-status {
  color: #f89400;
}
p.order-id > span {
  color: #333;
}
p.order-id {
  color: #aeaeae;
}
.order-detail-head,
.order-details-foot,
.order-head {
  display: flex;
  justify-content: space-between;
}
.order-detail-head h4 {
  margin-bottom: 0px;
}
.user-order {
  border: 1px solid #eaedf6;
  border-radius: 10px;
}
.order-head {
  padding: 1em;
}
.order-head > p {
  margin: 0;
}
.order-details {
  background: #fafaf9;
  padding: 1em;
}
.order-details-foot {
  border-top: 1px solid #eaedf6;
}
.order-details-foot p {
  margin-bottom: 0;
}
.order-details-foot {
  padding-top: 1em;
}
p.order-price {
  font-size: 18px;
  font-weight: 500;
}
.order-details.near {
  margin-bottom: 0.5em;
  border-radius: 10px;
}
h3.order-title {
  margin-top: 1em;
}
.order-details-foot p > img {
  width: 20px;
  margin-bottom: -5px;
  margin-right: 2px;
}

@media (max-width: 767px) {
  p {
    font-size: 14px;
  }
  p.order-price {
    font-size: 14px;
  }
  .order-details-foot {
    flex-direction: column;
  }
  .order-details-foot p {
    margin-bottom: 5px;
  }
}
</style>
