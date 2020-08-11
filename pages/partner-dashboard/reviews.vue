<template>
  <div class="partner-dash">
    <v-container>
      <div class="review-sec">
        <div class="review-top-sec">
          <h3>Guest Reviews</h3>
          <p>
            See what your customer is saying about their experience! Read and
            reply to your customer's review.
          </p>
          <h5>
            Reply should be genuine, unique, respect to the pravacy and
            appropiate to the internation customers.
            <span
              >Below reviews are opinions from rour customers and not
              Letme-save.com's. Letme-Save.com is not liable and responsible for
              any reviews or responses.</span
            >
          </h5>
          <div class="review-rating">
            <div class="left-sec">
              <h3>
                {{
                  (
                    (average.quality + average.location + average.price) /
                    3
                  ).toFixed(1)
                }}
              </h3>
              <p>{{ items.length }}<span>reviews</span></p>
            </div>
            <div class="right-sec">
              <div>
                <h3>Average overview</h3>
              </div>
              <div class="rating-sec">
                <div>
                  <v-rating
                    v-model="average.quality"
                    background-color="indigo lighten-3"
                    color="#fba705"
                    readonly
                    half-increments
                    value="4.5"
                  ></v-rating>
                  <p>Quality</p>
                </div>
                <div>
                  <v-rating
                    v-model="average.location"
                    background-color="indigo lighten-3"
                    color="#fba705"
                    readonly
                    half-increments
                    value="4.5"
                  ></v-rating>
                  <p>Location</p>
                </div>
                <div>
                  <v-rating
                    v-model="average.price"
                    background-color="indigo lighten-3"
                    color="#fba705"
                    readonly
                    half-increments
                    value="4.5"
                  ></v-rating>
                  <p>Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-top-sec">
          <v-row>
            <v-col cols="12" xs="12" md="6" lg="3" xl="3"> </v-col>
            <v-col cols="12" xs="12" md="6" lg="3" xl="3"> </v-col>
            <v-col cols="12" xs="12" md="6" lg="3" xl="3"> </v-col>
            <v-col cols="12" xs="12" md="6" lg="3" xl="3">
              <v-pagination
                v-model="page"
                class="my-4"
                :length="10"
                color="#104388"
              ></v-pagination>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <div class="review-rating bottom">
                <div class="left-sec">
                  <h3>
                    {{
                      (
                        (average.quality + average.location + average.price) /
                        3
                      ).toFixed(1)
                    }}
                  </h3>
                  <!-- <p>65 <span>reviews</span></p> -->
                </div>
                <div class="right-sec">
                  <div class="orderid-sec">
                    <p>{{ item.first_name }}</p>
                    <p>
                      Customer Id - {{ item.userid }}
                      <!-- <span>{{ item.date }}</span> -->
                    </p>
                  </div>
                  <div class="rating-sec">
                    <div>
                      <v-rating
                        v-model="item.quality"
                        background-color="indigo lighten-3"
                        color="#fba705"
                        readonly
                        half-increments
                        value="4.5"
                      ></v-rating>
                      <p>Quality</p>
                    </div>
                    <div>
                      <v-rating
                        v-model="item.location"
                        background-color="indigo lighten-3"
                        color="#fba705"
                        readonly
                        half-increments
                        value="4.5"
                      ></v-rating>
                      <p>Location</p>
                    </div>
                    <div>
                      <v-rating
                        v-model="item.price"
                        background-color="indigo lighten-3"
                        color="#fba705"
                        readonly
                        half-increments
                        value="4.5"
                      ></v-rating>
                      <p>Price</p>
                    </div>
                  </div>
                  <!-- <div class="rating-footer">
                    <v-text-field
                      v-model="item.review"
                      disabled
                      filled
                      outlined
                      background-color="#eaedf4"
                    ></v-text-field>
                    <v-btn x-large color="#104388" rounded dark>Reply</v-btn>
                  </div> -->
                </div>
              </div>
            </v-col></v-row
          >
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "partner-dashboard",
  data: () => ({
    average: {
      quality: 1,
      location: 1,
      price: 1
    },
    page: 1,
    items: []
  }),
  mounted() {
    this.getReviews();
  },
  methods: {
    async getReviews() {
      try {
        await this.$axios
          .post("Mobile/Partner/GetReview", {
            UserId: this.$store.state.userData.userID.toString(),
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken
          })
          .then(response => {
            this.average = response.data.totalAverageReview[0];
            this.items = response.data.reviewList;
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
.review-rating .left-sec > p > span {
  display: block;
}
.review-rating .left-sec > p {
  color: #104388;
  padding: 1em 2em;
  background: #eaedf4;
  border-radius: 0 0 5px 5px;
  line-height: 1.1;
  margin: 0;
}
.review-rating .left-sec > h3 {
  background: #104388;
  padding: 0.5em 1em;
  font-size: 26px;
  color: #fff;
  font-weight: 500;
  border-radius: 5px 5px 0 0;
}
.review-rating .left-sec {
  /* padding: 1em; */
  /* margin: auto; */
  text-align: center;
}
.review-rating {
  background: #fff;
  border-radius: 5px;
  padding: 0.8em;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 2em;
  margin: 2em 0;
}
.review-rating .right-sec {
  display: grid;
  grid-template-rows: max-content max-content;
  margin: auto 0;
}
.review-rating .right-sec .rating-sec {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* margin: auto; */
}
.review-rating .right-sec h3 {
  font-size: 22px;
  color: #104388;
  font-weight: 500;
  margin-bottom: 0.7em;
}
.rating-sec p {
  margin: -5px 0px 0 10px;
  font-size: 18px;
  color: #104388;
}
.review-top-sec {
  border-bottom: 1.5px solid #ccc;
  margin-bottom: 1em;
}
.review-rating.bottom {
  margin: 0 0 1em;
}
.bottom-top-sec > div > div {
  padding: 0 12px;
}
.orderid-sec p {
  margin: 0;
  position: relative;
  color: #104388;
  font-weight: 500;
}
.orderid-sec {
  border-bottom: 1.5px solid #ccc;
  padding-bottom: 10px;
}
.orderid-sec > p > span {
  position: absolute;
  right: 10px;
  color: #333;
  font-weight: 500;
}
.bottom .rating-sec {
  margin: 10px 0;
}
button.v-btn.v-btn--contained.v-btn--rounded.theme--dark.v-size--x-large {
  padding: 0 30px;
}
.rating-footer {
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 1em;
}
.review-rating.bottom {
  padding: 1.3em 1.3em 0;
}
.review-top-sec > h5 > span {
  display: block;
  font-style: italic;
  font-weight: 400;
}
.bottom-top-sec {
  margin-bottom: 6em;
}

.review-top-sec > h5 {
  font-size: 16px;
  color: #104388;
  font-weight: 500;
}
@media (max-width: 1023px) {
  .review-rating {
    grid-gap: 10px;
  }
  .rating-footer {
    grid-template-columns: 0.98fr max-content;
  }
}
@media (max-width: 767px) {
  .review-rating {
    grid-gap: 1em;
  }
  .review-rating .right-sec .rating-sec {
    display: block;
  }
  .rating-footer {
    grid-template-columns: 1fr;
  }
  .orderid-sec > p > span[data-v-7cfc5b9c] {
    position: unset;
    display: block;
  }
  .review-rating.bottom {
    padding: 1.3em 0.8em;
  }
  button.v-btn.v-btn--contained.v-btn--rounded.theme--dark.v-size--x-large {
    margin-top: -15px;
  }
  .review-top-sec > p {
    margin-bottom: 10px;
  }

  .review-top-sec > h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #333;
    margin-top: 2em;
  }
}
</style>
