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
              <p class="order-status">Pending for Pick-Up</p>
              <p class="order-id">
                Order ID
                <span>{{order.order_id}}</span>
              </p>
            </div>
            <div class="order-details">
              <div class="order-detail-head">
                <div>
                  <h4>{{order.store_name}}</h4>
                  <p>{{order.product_name}}</p>
                </div>
                <div>
                  <p class="order-price">{{order.amount}} NOK</p>
                </div>
              </div>
              <div class="order-details-foot">
                <p>
                  <img src="~/assets/location.svg" />
                  {{order.address}}
                </p>
                <p>
                  <img src="~/assets/clock.png" />
                  {{order.purchase_date}}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h3 class="order-title">Nearby Deals</h3>
          <div class="order-details near" v-for="(near, i) in nears" :key="i">
            <nuxt-link :to="'/listing/' +near.typeId +'-' +near.id">
              <div class="order-detail-head">
                <div>
                  <h4>
                    {{near.hotelName}}
                    <span>{{near.type}}</span>
                  </h4>
                  <p>{{near.productName}}</p>
                </div>
                <div>
                  <p class="order-price">
                    <span>{{near.originalPrice}} NOK</span>
                    {{near.offerPrice}} NOK
                  </p>
                </div>
              </div>
              <div class="order-details-foot">
                <p>
                  <img src="~/assets/location.svg" />
                  {{near.address}}
                </p>
                <p>
                  <img src="~/assets/clock.png" />
                  {{near.pickupTime}}
                </p>
              </div>
            </nuxt-link>
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
    orders: [],
    nears: [],
  }),
  methods: {
    async activities() {
      try {
        await this.$axios
          .post("Mobile/User/GetActivity", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
          })
          .then((response) => {
            console.log(response.data);
            this.orders = response.data.pending;
            this.nears = response.data.favouriteList;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.activities();
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/login");
    }
  },
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
p.order-id > span,
a {
  color: #333;
}
p.order-id {
  color: #aeaeae;
}
hr {
  border: 0.5px solid #eaedf6;
  margin: 2em 0;
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
  margin-bottom: 1em;
}
.order-head {
  padding: 1em;
}
.order-head > p {
  margin: 0;
}
.order-details {
  background: #eaedf6;
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
  font-size: 22px;
  font-weight: 500;
  color: #003680;
}
p.order-price > span {
  text-decoration: line-through;
  font-size: 18px;
}
.order-details.near {
  margin-bottom: 0.8em;
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
.order-detail-head h4 > span {
  font-size: 14px;
  font-weight: 400;
  background: #24b149;
  color: #fff;
  padding: 2px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-left: 5px;
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
