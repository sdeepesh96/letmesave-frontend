<template>
  <div>
    <v-container>
      <v-card tile>
        <v-img :src="items.storePicture" height="300" class="grey darken-4"></v-img>

        <div class="d-flex justify-space-between">
          <div>
            <h1 class="text-h1 blue-text">
              {{ items.hotelName }}
              <span>{{items.type}}</span>
            </h1>
            <h2 class="font-weight-regular">{{ items.productName }}</h2>
          </div>
          <div class="text-right">
            <h1 class="text-h1 blue-text">
              <span style="font-size: .7em; text-decoration: line-through;">{{items.originalPrice}}</span>
              {{ items.offerPrice }}
            </h1>
            <nuxt-link to="#">Buy Now</nuxt-link>
          </div>
        </div>
        <v-divider class="my-5"></v-divider>
        <div class="pb-2">
          <div class="d-flex align-center">
            <v-icon large class="mr-3" color="#003680">mdi-clock-outline</v-icon>
            <strong class="mr-5">Pick Up</strong>
            <div>{{items.pickupTime}}</div>
          </div>
        </div>

        <div class="blue-bg pt-5">
          <div class="address-bar d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <img class="location-icon mx-2" src="~/assets/Group.png" alt="Group" />
              {{ items.address }}
            </div>
            <div class="d-flex align-center">
              <div class="btn">
                <img src="~/assets/direction.png" alt="direction" />
                Direction
              </div>
              <div @click="copyToClipboard" class="btn">
                <img src="~/assets/copy.png" alt="copy Address" />
                Copy Address
              </div>
            </div>
          </div>

          <v-row class="pt-5">
            <v-col class="pr-5" cols="12" sm="6">
              <h3 class="h3 blue-text font-weight-medium">Summary</h3>
              <p>{{ items.summaryContent }}</p>
              <h3 class="h3 blue-text font-weight-medium">What save food bag may contain?</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, vel nemo rem ea explicabo fugiat cumque harum vero,
                corporis voluptate iste accusantium perferendis hic quibusdam,
                quis non aperiam amet et?
              </p>
              <h3 class="h3 blue-text font-weight-medium">Why "Save Food" bag?</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, vel nemo rem ea explicabo fugiat cumque harum vero,
                corporis voluptate iste accusantium perferendis hic quibusdam,
                quis non aperiam amet et?
              </p>
              <v-card flat>
                <v-card-title class="blue-text">Why "Save Food" Bag?</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col class="text-center" cols="12" sm="3">
                      <div class="px-5 py-5 review-badge">
                        {{
                        restuarantReviews.quality
                        }}
                      </div>
                      <div class="py-3 review-count">
                        39
                        <br />Reviews
                      </div>
                    </v-col>
                    <v-col cols="12" sm="2"></v-col>
                    <v-col class cols="12" sm="7">
                      <div class="d-flex justify-end align-center">
                        <div class="flex-grow-1">Quality</div>
                        <v-rating
                          v-model="restuarantReviews.quality"
                          background-color="warning"
                          color="warning"
                          readonly
                        ></v-rating>
                        <div class="blue-text font-weight-medium">{{ restuarantReviews.quality }}</div>
                      </div>
                      <div class="d-flex justify-end align-center">
                        <div class="flex-grow-1">Location</div>
                        <v-rating
                          v-model="restuarantReviews.location"
                          background-color="warning"
                          color="warning"
                          readonly
                        ></v-rating>
                        <div class="blue-text font-weight-medium">{{ restuarantReviews.location}}</div>
                      </div>
                      <div class="d-flex justify-end align-center">
                        <div class="flex-grow-1">Price</div>
                        <v-rating
                          v-model="restuarantReviews.price"
                          background-color="warning"
                          color="warning"
                          readonly
                        ></v-rating>
                        <div class="blue-text font-weight-medium">{{ restuarantReviews.price }}</div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="h3 blue-text font-weight-medium">Other Information</h3>
              <div class="pt-3 d-flex other-info-box">
                <div>
                  <div class="subtitle-2 blue-text">Food Type</div>
                  <div class="mb-5">{{items.foodType}}</div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Meal Type</div>
                  <div class="mb-5">{{ items.mealType }}</div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Chain</div>
                  <div class="mb-5">
                    <span>{{ items.chainName}}</span>
                  </div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Store Type</div>
                  <div class="mb-5">
                    <span>{{ items.storeType}}</span>
                  </div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Parking</div>
                  <div class="mb-5">
                    <span>{{items.parking}}</span>
                  </div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Accepted Payment Method</div>
                  <div class="mb-5">
                    <span>Paypal</span>
                  </div>
                </div>
                <div>
                  <div class="subtitle-2 blue-text">Landmark</div>
                  <div class="mb-5">
                    <span>{{ items.landmark}}</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: {},
    qualityRating: 4.3,
    restuarantReviews: {},
  }),
  async mounted() {
    try {
      await this.$axios
        .post("/Mobile/User/GetOffer", {
          ProductId: this.$route.params.id,
          OfferType: "73",
          PickupStartTime: "00:00",
          PickupEndTime: "23:59",
          UserId: "0",
        })
        .then((response) => {
          console.log(response.data.data);
          this.items = response.data.data[0];
        });
    } catch (e) {
      console.log(e);
    }
    try {
      await this.$axios
        .post("Mobile/user/GetReview", {
          PartnerId: this.$route.params.id,
        })
        .then((response) => {
          console.log(response.data);
          this.restuarantReviews = response.data.data[0];
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async copyToClipboard() {
      try {
        // 1) Copy text
        await navigator.clipboard.writeText(this.restuarantData.address);

        // 2) Catch errors
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },
  },
};
</script>
<style scoped>
.partner-dash {
  background: #eaedf4;
  padding-bottom: 3em;
}
.post-list {
  border-radius: 5px;
  background: #fff;
}
.card-img-sec img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
.card-body-sec {
  padding: 8px 1em 1em;
}

.card-body-sec p.type {
  background: #24b149;
  width: max-content;
  color: #fff;
  padding: 1px 20px;
  border-radius: 5px;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 14px;
}
.card-body-sec > h4 {
  color: #0f4387;
  font-weight: 500;
  font-size: 20px;
}
.card-body-sec p.listing-price {
  font-size: 26px;
  font-weight: 500;
  color: #333;
  padding-bottom: 2px;
  border-bottom: 1.5px solid #cccccc;
}
.card-body-sec span.nondis-price {
  color: #fba705;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
  text-decoration: line-through;
}
.card-body-sec .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  margin-bottom: 15px;
}
.card-body-sec .days > p.active {
  background: #24b149;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  color: #333333;
  margin: 0;
  padding: 3px 0;
}
.card-body-sec .days > p.inactive {
  background: #cccccc;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  color: #333333;
  margin: 0;
  padding: 3px 0;
}
.card-body-sec span.clock-icon .v-icon.v-icon,
.card-body-secspan.left-icon .v-icon.v-icon {
  color: #24b149;
  margin-right: 5px;
}
.card-body-sec p {
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
}
.list-head > a .v-icon.v-icon {
  margin-right: 20px;
  font-size: 48px;
  padding: 0;
  color: #fba705;
  background: #fff;
  border-radius: 50%;
  font-weight: 900;
  margin-top: -2px;
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
  padding-bottom: 15px;
  margin-top: 1.5em;
}
.list-head h3 {
  margin: auto 0 0;
  font-weight: 500;
  font-size: 24px;
  color: #333;
}

@media (max-width: 767px) {
  .list-head a {
    font-size: 16px;
  }
  .list-head > a .v-icon.v-icon {
    margin-right: 20px;
    font-size: 28px;
  }
}

.blue-text {
  color: #003680;
}
.red-text {
  color: red;
}
.select-card {
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.38) !important;
}
.day-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1em;
}
.datepicker-outline {
  border: thin solid rgba(0, 0, 0, 0.12);
}
.address-bar {
  border: thin solid red;
  padding: 0.5em 1em;
  border-radius: 8px;
}
.location-icon {
  height: 1.5em;
  width: 1.5em;
}
.btn {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.5em 1em;
  margin-left: 1em;
  border-radius: 4px;
  cursor: pointer;
}
.btn > img {
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
}
.other-info-box {
  flex-wrap: wrap;
}
.other-info-box > div {
  flex-basis: 50%;
}
.review-badge {
  background: #003680;
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
}
.v-card {
  box-shadow: unset;
}
</style>
