<template>
  <div>
    <InnerBanner />
    <v-container>
      <div class="list-head">
        <p>{{ rest.restaurant }} Restaurants</p>
        <v-spacer></v-spacer>
      </div>
    </v-container>
    <div class="offer-temp">
      <v-container>
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="3"
            xs="6"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card light class="mx-auto item-list">
              <div class="mob-def">
                <v-avatar tile width="100%" height="160">
                  <nuxt-link :to="'listing/' + item.left">
                    <v-img :src="item.src"></v-img>
                  </nuxt-link>
                  <span class="itemid"> {{ item.left }}</span>
                  <p class="left-out-tag">{{ item.left }} left</p>
                </v-avatar>
                <div class="listing-order">
                  <div class="head-list">
                    <div class="listing-head">
                      <v-card-title class="headline"
                        ><p>{{ item.title }}</p></v-card-title
                      >
                      <v-card-text
                        class="listing-type"
                        v-text="item.type"
                      ></v-card-text>
                    </div>
                    <div class="listing-head">
                      <div class="listing-right">
                        <v-card-text class="rating">{{
                          item.rating
                        }}</v-card-text>
                        <v-card-text class="listing-review">{{
                          item.review
                        }}</v-card-text>
                      </div>
                    </div>
                  </div>
                  <div class="listing-inner">
                    <div>
                      <v-card-text class="listing-price"
                        ><span class="nondis-price">{{ item.price }}</span
                        ><span>{{ item.offerprice }}</span></v-card-text
                      >
                      <v-card-text class="listing-time"
                        ><span class="clock-icon"
                          ><v-icon>mdi-clock</v-icon></span
                        ><span>{{ item.time }}</span></v-card-text
                      >
                      <v-card-text class="listing-location"
                        ><span class="find-icon"
                          ><v-icon>mdi-map-marker</v-icon></span
                        ><span>{{ item.location }}</span></v-card-text
                      >
                    </div>
                  </div>
                  <div class="listing-footer">
                    <div class="listfoot-btn">
                      <v-card-text class="listing-left"
                        ><span class="left-icon"
                          ><v-icon>mdi-share</v-icon></span
                        ><span
                          >Only {{ item.left }} left on Letme-save.com</span
                        ></v-card-text
                      >
                      <v-btn
                        class="order-btn"
                        small
                        rounded
                        dark
                        max-width="100"
                        ><span class="order-icon"
                          ><v-icon>mdi-cart-outline </v-icon></span
                        ><span>Order now</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="all-offers-btn text-center">
        <v-btn rounded color="#104388" x-large="" dark>All offers</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import InnerBanner from "~/components/InnerBanner";
export default {
  components: {
    InnerBanner
  },
  data: () => ({
    rest: {
      restaurant: "66"
    },
    items: [
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Sale offer",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      },
      {
        color: "#1F7087",
        src:
          "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg",
        title: "Bare Restaurant",
        rating: "4.5",
        review: "34 Reviews",
        category: "Best deal",
        left: "10",
        time: "Today 19:00 - 20:00",
        type: "Sale offer",
        price: "NOK 65",
        offerprice: "NOK 25",
        location: "2nd floor, OML mall"
      }
    ]
  })
};
</script>

<style scoped>
.banner-search {
  /* background-image: url("../assets/listing-banner.jpg"); */
  background-position: center 15%;
}
.item-list {
  margin: 1.5em 0;
}

.headline p {
  font-size: 20px;
  padding-top: 15px;
  text-transform: capitalize;
  margin-bottom: 5px;
  line-height: 1;
}
.headline {
  padding: 0;
  color: #505050;
}
.listing-type {
  padding: 0;
  font-size: 16px;
  text-transform: capitalize;
  color: #505050;
}
.listing-price span.nondis-price {
  color: #fb6c05;
  text-decoration: line-through;
  margin-right: 5px;
}
.listing-price {
  padding: 0;
  font-size: 18px;
  margin-top: 5px;
  color: #010101;
}
span.clock-icon .v-icon.v-icon {
  font-size: 20px;
  color: #0f0f0f;
  margin-right: 5px;
}
.listing-time {
  padding: 0;
  margin-top: 12px;
  color: #505050;
}
span.find-icon .v-icon.v-icon {
  font-size: 20px;
  color: #fb6c05;
  margin-right: 5px;
}
.listing-location {
  padding: 0;
  color: #505050;
  margin-top: 5px;
}
.rating,
.listing-review {
  padding: 0;
}
.rating {
  background: #0f4387;
  color: #fff;
  border-radius: 3px 3px 0 0;
}
span.rating-icon .v-icon.v-icon {
  font-size: 12px;
  color: #fff;
  margin-right: 2px;
}
.listing-review {
  color: grey;
  font-size: 9px;
  line-height: 1.1;
  padding: 3px;
  border-radius: 0 0 3px 3px;
  background: #f4f4f4;
}
span.review-icon .v-icon.v-icon,
span.left-icon .v-icon.v-icon {
  font-size: 20px;
  color: #0f4387;
  margin-right: 5px;
}
.v-card {
  box-shadow: unset;
}
.all-offers-btn .v-btn--rounded {
  font-weight: 400;
  text-transform: unset;
  width: 35%;
  margin: 3.5em 0;
}
.listing-left {
  padding: 0;
  color: #0f4387;
  margin-top: 15px;
  margin-bottom: 20px;
}
.listfoot-btn {
  border-top: 1px solid #e9e9eb;
  margin-top: 15px;
}
span.order-icon .v-icon.v-icon {
  font-size: 12px;
  color: #fff;
  margin-right: 1px;
}
button.order-btn.v-btn.v-btn--contained.v-btn--rounded.theme--dark.v-size--small {
  font-size: 10px;
  text-transform: capitalize;
  font-weight: 400;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #ff8b4e 0%, #ff8b4e 35%, #ff6660 100%);
}
.list-head {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9eb;
  padding-bottom: 8px;
  margin-top: 2em;
  margin-bottom: -35px;
}
.list-head p {
  margin: 0;
  font-size: 20px;
  color: #0f4387;
}
.offer-temp .row {
  margin: auto;
}
.left-out-tag {
  position: absolute;
  bottom: -5px;
  right: 4%;
  background: #fb6c05;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
}
.head-list {
  display: grid;
  grid-template-columns: 1fr 0.1fr;
}
.listing-right {
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 15px;
  text-align: center;
}
@media (max-width: 767px) {
  .offer-temp .col-3 {
    max-width: 100%;
    margin: auto;
  }
}
@media (min-width: 600px) {
  .order-temp .row {
    margin: auto;
  }
}
</style>
