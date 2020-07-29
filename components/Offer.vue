<template>
  <div>
    <v-container>
      <div class="offer-temp">
        <h4>Find the best food offers around you</h4>
        <p>Browse through offers in your neighborhood area</p>
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            xs="6"
            sm="6"
            md="3"
            lg="3"
            class="py-0"
          >
            <v-card light class="mx-auto item-list mt-0">
              <div class="mob-def">
                <v-avatar tile width="100%" height="160">
                  <v-img :src="item.storePicture"></v-img>
                  <p class="left-out-tag">{{item.leftQuantity}} left</p>
                </v-avatar>
                <div class="listing-order">
                  <div class="head-list">
                    <div class="listing-head">
                      <v-card-text class="listing-type" v-text="item.type"></v-card-text>
                      <v-card-title class="headline">
                        <p>{{item.hotelName}}</p>
                      </v-card-title>
                      <v-card-title class="deal px-0 py-0">
                        <p>{{item.productName}}</p>
                      </v-card-title>
                      <v-card-text class="listing-price">
                        <span class="nondis-price">NOK {{item.originalPrice}}</span>
                        <span>NOK {{item.offerPrice}}</span>
                      </v-card-text>
                    </div>
                    <div class="listing-head">
                      <div class="listing-right">
                        <v-card-text class="rating">4.5</v-card-text>
                        <v-card-text class="listing-review">35 Reviews</v-card-text>
                      </div>
                    </div>
                  </div>
                  <div class="listing-footer">
                    <div class="listfoot-btn">
                      <v-card-text class="listing-time">
                        <span class="clock-icon">
                          <v-icon>mdi-clock</v-icon>
                        </span>
                        <span>{{item.pickupTime}}</span>
                      </v-card-text>
                      <v-card-text class="listing-location">
                        <span class="find-icon">
                          <v-icon>mdi-map-marker</v-icon>
                        </span>
                        <span>{{item.address}}</span>
                      </v-card-text>
                      <v-btn class="order-btn mx-auto" small rounded dark>
                        <span>Order now</span>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="all-offers-btn text-center">
          <v-btn rounded color="#104388" x-large dark to="/lis">All offers</v-btn>
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
    items: {},
  }),
  async mounted() {
    try {
      await this.$axios
        .post("Mobile/User/GetOffer", {
          OfferType: "73",
          PickupStartTime: "00:00",
          PickupEndTime: "23:59",
          UserId: "0",
        })
        .then((response) => {
          // console.log(response.data.data);
          this.items = response.data.data;
          // this.myNae = response.data.data.address;
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.banner-search {
  background-image: url("../assets/listing-banner.jpg");
  background-position: center 15%;
}
.item-list {
  margin: 1.5em 0;
}
.offer-temp {
  margin: 4em 0 0;
}
.headline p {
  font-size: 20px;
  padding-top: 8px;
  text-transform: capitalize;
  margin-bottom: 0px;
  line-height: 1;
  color: #0f4387;
  font-weight: 500;
  white-space: nowrap;
  max-width: 190px;
  overflow: hidden;
}
.headline {
  padding: 0;
  color: #505050;
}
.listing-type {
  padding: 0;
  font-size: 16px;
  text-transform: capitalize;
  color: #fb6c05;
}
.listing-location {
  white-space: nowrap;
  overflow: hidden;
}
.listing-price span.nondis-price {
  color: #fb6c05;
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 14px;
}
.listing-price {
  padding: 0;
  font-size: 18px;
  margin-top: 5px;
  color: #010101;
}
span.clock-icon .v-icon.v-icon {
  font-size: 20px;
  color: #0f4387;
  margin-right: 5px;
}
.listing-price span {
  color: #0f4387;
  font-weight: 500;
}
.listing-time {
  padding: 0;
  margin-top: 12px;
  color: #505050;
}
span.find-icon .v-icon.v-icon {
  font-size: 20px;
  color: #0f4387;
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
.list-side-bar {
  background: #f4f4f4;
  padding: 1em;
  border-radius: 10px;
}
.rating {
  background: #0f4387;
  color: #fff;
  border-radius: 5px 5px 0 0;
  padding: 8px 0;
}
.deal p {
  margin-bottom: 2px;
  font-size: 17px;
  color: grey;
  font-weight: 400;
}
.list-side-bar h3 {
  font-weight: 500;
  color: #0f4387;
  font-size: 18px;
}
.listing-sec-items h4 {
  font-size: 17px;
  color: #333;
  font-weight: 500;
}
.v-card__text.listing-location {
  margin-bottom: 1em;
}
.v-card__text.listing-time,
.v-card__text.listing-location {
  text-align: left;
}
span.rating-icon .v-icon.v-icon {
  font-size: 12px;
  color: #fff;
  margin-right: 2px;
}
.listing-review {
  color: #333;
  font-size: 12px;
  line-height: 1.1;
  border-radius: 0 0 5px 5px;
  background: #f4f4f4;
  padding: 5px 0;
}
span.review-icon .v-icon.v-icon,
span.left-icon .v-icon.v-icon {
  font-size: 20px;
  color: #0f4387;
  margin-right: 5px;
}
.v-card {
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.1);
}
.listing-order {
  padding: 0.5em 0.5em 1em;
}
.all-offers-btn .v-btn--rounded {
  font-weight: 400;
  text-transform: unset;
  width: 45%;
  margin: 2.5em 0;
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
  text-align: center;
}
span.order-icon .v-icon.v-icon {
  font-size: 12px;
  color: #fff;
  margin-right: 1px;
}
button.order-btn.v-btn.v-btn--contained.v-btn--rounded.theme--dark.v-size--small {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 400;
  background: #fb6c05;
  min-height: 40px;
  min-width: 180px;
}
.list-head {
  border-bottom: 1px solid #e9e9eb;
  padding-bottom: 8px;
  margin-top: 2em;
}
.v-avatar.v-avatar--tile {
  border-radius: 5px 5px 0 0;
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
  left: 4%;
  background: #fb6c05;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
}
.offer-temp > h4 {
  font-size: 42px;
  font-weight: 400;
  color: #104388;
  text-align: center;
}
.offer-temp > p {
  font-size: 20px;
  text-align: center;
  margin-bottom: 2.5em;
}
.head-list {
  display: grid;
  grid-template-columns: 1fr 0.25fr;
}
.listing-right {
  display: grid;
  grid-template-rows: max-content max-content;
  text-align: center;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .all-offers-btn .v-btn--rounded {
    width: 90%;
  }
}
@media (max-width: 767px) {
  .offer-temp .col-3 {
    max-width: 100%;
    margin: auto;
  }
  .offer-temp > p {
    font-size: 14px;
    margin-top: 1em;
  }
  .offer-temp > h4 {
    font-size: 28px;
  }
  .all-offers-btn .v-btn--rounded {
    width: 100%;
  }
}
@media (min-width: 600px) {
  .order-temp .row {
    margin: auto;
  }
}
</style>