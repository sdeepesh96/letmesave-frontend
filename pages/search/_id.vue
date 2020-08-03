<template>
  <div>
    <InnerBanner />
    <v-container>
      <div class="list-head">
        <p>{{rest}} Restaurants</p>
        <v-spacer></v-spacer>
      </div>
    </v-container>
    <v-container>
      <div class="row">
        <v-col cols="12" sm="3" md="3" lg="3" class="py-0">
          <div class="list-side-bar">
            <div class="listing-sec-items">
              <h3>Sort by</h3>
              <v-radio-group v-model="sort" column class="mt-0">
                <v-radio value="option-1" label="Distance" color="#1F7087"></v-radio>
                <v-radio value="option-2" label="Popularity" color="#1F7087"></v-radio>
                <v-radio value="option-3" label="Price (Low to High)" color="#1F7087"></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h3>Filter</h3>
              <h4>Offer Type</h4>
              <v-radio-group v-model="ordertype" column class="mt-0" @change="getoffertype()">
                <!-- <v-radio value="73" label="Sale Food" color="#1F7087"></v-radio>
                <v-radio value="74" label="Save Offer" color="#1F7087"></v-radio>
                <v-radio value="96" label="Promotions" color="#1F7087"></v-radio>-->
                <v-radio
                  v-for="(order, i) in ordertypes"
                  :key="i"
                  :label="`${order.name}`"
                  :value="`${order.id}`"
                  color="#1F7087"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h4>Food Type</h4>
              <v-radio-group v-model="foodtype" column class="mt-0" @change="getoffertype()">
                <v-radio
                  v-for="(food, i) in foodtypes"
                  :key="i"
                  :label="`${food.name}`"
                  :value="`${food.id}`"
                  color="#1F7087"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h4>Meal Type</h4>
              <v-radio-group v-model="mealtype" column class="mt-0" @change="getoffertype()">
                <v-radio
                  v-for="(meal, i) in mealtypes"
                  :key="i"
                  :label="`${meal.name}`"
                  :value="`${meal.id}`"
                  color="#1F7087"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h4>Pick-Up Time</h4>
              <v-radio-group v-model="pickup" column class="mt-0">
                <v-radio value="option-1" label="Today" color="#1F7087"></v-radio>
                <v-radio value="option-2" label="This Week" color="#1F7087"></v-radio>
                <v-radio value="option-3" label="This Month" color="#1F7087"></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h4>Store Type</h4>
              <v-radio-group v-model="storetype" column class="mt-0" @change="getoffertype()">
                <v-radio
                  v-for="(store, i) in storetypes"
                  :key="i"
                  :label="`${store.name}`"
                  :value="i"
                  color="#1F7087"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="listing-sec-items">
              <h4>Chain</h4>
              <v-radio-group v-model="chain" column class="mt-0" @change="getoffertype()">
                <v-radio
                  v-for="(chain, i) in chaintypes"
                  :key="i"
                  :label="`${chain.name}`"
                  :value="i"
                  color="#1F7087"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="9" lg="9" class="px-0 py-0">
          <div class="offer-temp">
            <v-row>
              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                xs="6"
                sm="6"
                md="4"
                lg="4"
                class="py-0"
              >
                <nuxt-link :to="'listing/' +item.typeId +'-' +item.id">
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
                </nuxt-link>
              </v-col>
            </v-row>
            <!-- <div class="all-offers-btn text-center">
              <v-btn rounded color="#104388" x-large dark>All offers</v-btn>
            </div>-->
          </div>
        </v-col>
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
    rest: {},
    items: {},
    sort: "",
    ordertype: "",
    foodtype: "",
    mealtype: "",
    pickup: "",
    storetype: "",
    chain: "",
    ordertypes: [],
    foodtypes: [],
    mealtypes: [],
    storetypes: [],
    chaintypes: [],
  }),
  methods: {
    async getoffertype() {
      try {
        await this.$axios
          .post("Mobile/User/GetOffer", {
            OfferType: this.ordertype,
            mealType: this.mealtype,
            foodType: this.foodtype,
            storeType: this.storetype.toString(),
            chainName: this.chain.toString(),
            PickupStartTime: "00:00",
            PickupEndTime: "23:59",
            UserId: "0",
          })
          .then((response) => {
            this.items = response.data.data;
            this.rest = response.data.data.length;
          });
      } catch (e) {
        console.log(e);
      }
    },
    search() {
      this.ordertype = this.$route.query.ordertype;
      this.mealtype = this.$route.query.MealType;
    },
    async ordertypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "72" })
          .then((response) => {
            this.ordertypes = response.data.data;
            // this.ordertypes.pop();
            // this.ordertype = response.data.data[0].id.toString();
            // console.log(response.data.data);
          });
      } catch (e) {
        console.log(e);
      }
    },
    async mealtypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "38" })
          .then((response) => {
            this.mealtypes = response.data.data;
          });
      } catch (e) {
        console.log(e);
      }
    },
    async foodtypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "34" })
          .then((response) => {
            this.foodtypes = response.data.data;
          });
      } catch (e) {
        console.log(e);
      }
    },
    async storetypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "17" })
          .then((response) => {
            this.storetypes = response.data.data;
            this.storetypes.pop();
          });
      } catch (e) {
        console.log(e);
      }
    },
    async chaintypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "10" })
          .then((response) => {
            this.chaintypes = response.data.data;
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    // console.log(this.$route.query);
    // var routeparams = this.$route.params.id.split("-");
    this.ordertypedata();
    this.search();
    this.getoffertype();
    this.mealtypedata();
    this.foodtypedata();
    this.storetypedata();
    this.chaintypedata();
  },
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
.listing-location {
  white-space: nowrap;
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
  max-width: 175px;
  white-space: nowrap;
  overflow: hidden;
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
  text-align: center;
}
span.order-icon .v-icon.v-icon {
  font-size: 12px;
  color: #fff;
  margin-right: 1px;
}
button.order-btn.v-btn.v-btn--contained.v-btn--rounded.theme--dark.v-size--small,
a.order-btn {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 400;
  background-color: #fb6c05 !important;
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
.head-list {
  display: grid;
  grid-template-columns: 1fr 0.25fr;
}
.listing-right {
  display: grid;
  grid-template-rows: max-content max-content;
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