<template>
  <div class="partner-dash">
    <v-container>
      <div class="list-head">
        <h3>Active Offers</h3>
        <nuxt-link to="/partner-dashboard/new-post" class="post-offer">
          <v-icon>mdi-plus</v-icon>New Post
        </nuxt-link>
      </div>
    </v-container>
    <div class="offer-temp">
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" xs="6" sm="6" md="4" lg="3">
            <div class="post-list">
              <div @click="getDetails(item)" class="card-img-sec">
                <img :src="item.offerimage" />
              </div>
              <div class="card-body-sec">
                <p class="type">{{ item.type }}</p>
                <h4 @click="getDetails(item)">{{ item.name }}</h4>
                <p class="listing-price">
                  <span class="nondis-price">{{ item.actual_amount }}</span>
                  <span>{{ item.offer_amount }}</span>
                </p>
                <div class="days">
                  <p class="active">M</p>
                  <p class="active">T</p>
                  <p class="active">W</p>
                  <p class="active">T</p>
                  <p class="active">F</p>
                  <p class="inactive">S</p>
                  <p class="inactive">S</p>
                </div>
                <p>
                  <span class="clock-icon">
                    <v-icon>mdi-av-timer</v-icon>
                  </span>
                  <span>{{ item.offer_amount }}</span>
                </p>
                <p>
                  <span class="clock-icon">
                    <v-icon>mdi-av-timer</v-icon>
                  </span>
                  <span>{{ item.from_date }} - {{ item.deal_to_date }}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- PREVIEW DIALOG -->
    <v-dialog v-model="previewDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="warning" class="px-10" x-large rounded v-bind="attrs" v-on="on">Preview</v-btn>
      </template>-->
      <v-card tile>
        <v-toolbar dark color="#003680">
          <v-toolbar-title>Offer Details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="previewDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-img :src="currentPostDataSmall.offerimage" height="300" class="grey darken-4"></v-img>
        <v-container>
          <div class="d-flex justify-space-between">
            <div>
              <h1 class="text-h1 blue-text">{{ restuarantData.legal_name }}</h1>
              <h2 class="font-weight-regular">{{ currentPostData.name }}</h2>
            </div>
            <div class="text-right">
              <v-btn color="success" elevation="0">
                {{
                currentPostDataSmall.type
                }}
              </v-btn>
              <h1 class="text-h1 blue-text">
                <span style="font-size: .7em; text-decoration: line-through;">
                  {{
                  currentPostDataSmall.actual_amount
                  }}
                </span>
                {{ currentPostDataSmall.offer_amount }}
              </h1>
            </div>
          </div>
          <v-divider class="my-5"></v-divider>
          <div class="pb-2">
            <div class="d-flex align-center">
              <v-icon large class="mr-3" color="#003680">mdi-clock-outline</v-icon>
              <strong class="mr-5">Pick Up</strong>
              <div>Sunday, May 24, 20.00 - 21.00</div>
            </div>
          </div>
        </v-container>
        <div class="blue-bg pt-5">
          <v-container>
            <div class="address-bar d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <img class="location-icon mx-2" src="~/assets/Group.png" alt="Group" />
                {{ restuarantData.address }}
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
                <p>{{ currentPostData.summary_content }}</p>
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
                          (restuarantReviews.quality +
                          restuarantReviews.location +
                          restuarantReviews.price) /
                          3
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
                          <div class="blue-text font-weight-medium">{{ restuarantReviews.location }}</div>
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
                    <div class="mb-5">{{ currentFoodType.name }}</div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Meal Type</div>
                    <div class="mb-5">{{ currentMealType.name }}</div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Chain</div>
                    <div class="mb-5">
                      <span
                        v-for="item in restuarantData.chain"
                        :key="item.id"
                      >{{ item.others || item.name }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Store Type</div>
                    <div class="mb-5">
                      <span
                        v-for="item in restuarantData.store_type"
                        :key="item.id"
                      >{{ item.others || item.name }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Parking</div>
                    <div class="mb-5">
                      <span
                        v-for="item in restuarantData.parking"
                        :key="item.id"
                      >{{ item.others || item.name }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Accepted Payment Method</div>
                    <div class="mb-5">
                      <span v-for="(item, index) in restuarantData.payment_method" :key="item.id">
                        {{ item.name == "Others" ? item.others : item.name
                        }}{{
                        index == restuarantData.payment_method.length - 1
                        ? "."
                        : ", "
                        }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div class="subtitle-2 blue-text">Landmark</div>
                    <div class="mb-5">
                      <span
                        v-for="item in restuarantData.landmark"
                        :key="item.id"
                      >{{ item.others || item.name }}</span>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: "partner-dashboard",
  data: () => ({
    items: [],
    restuarantData: {},
    qualityRating: 4.3,
    previewDialog: false,
    loading: false,
    alert: false,
    alertType: null,
    alertMsg: "",
    PostOrderId: "",
    currentPostData: {},
    currentPostDataSmall: {},
    currentFoodType: {},
    currentMealType: {},
    restuarantReviews: {},
  }),
  async mounted() {
    try {
      await this.$axios
        .post("mobile/partner/GetPostOrderList", {
          Id: this.$store.state.userData.id.toString(),
          AccessToken: this.$store.state.userData.userAccessToken,
        })
        .then((response) => {
          this.items = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }

    // Get Restuarant Data
    try {
      await this.$axios
        .post("Mobile/Partner/GetPartnerDetailsById", {
          PartnerId: this.$store.state.userData.userID.toString(),
        })
        .then((response) => {
          this.restuarantData = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }

    // Get Restuarant Reviews
    try {
      await this.$axios
        .post("Mobile/Partner/GetReview", {
          UserId: this.$store.state.userData.userID.toString(),
        })
        .then((response) => {
          console.log(response.data);
          this.restuarantReviews = response.data.totalAverageReview[0];
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async getDetails(PostOrder) {
      this.currentPostDataSmall = PostOrder;
      this.previewDialog = true;
      await this.$axios
        .post("mobile/partner/GetPostOrderDetail", {
          RawData: {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            PostOrderId: PostOrder.id.toString(),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.currentPostData = response.data.data[0];
        })
        .then(async () => {
          let foodTypes = await this.$axios.post("GetSearchValue", {
            ParentId: "34",
          });
          this.currentFoodType = foodTypes.data.data.find(
            (obj) => obj.id == this.currentPostData.food_type
          );
        })
        .then(async () => {
          let mealTypes = await this.$axios.post("GetSearchValue", {
            ParentId: "38",
          });
          this.currentMealType = mealTypes.data.data.find(
            (obj) => obj.id == this.currentPostData.meal_type
          );
        });
    },
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
.blue-bg {
  background: #eaedf4;
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
</style>
