<template>
  <v-content class="blue-bg">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-radio-group v-model="offerType" mandatory row>
            <v-radio v-for="item in offerTypes" :key="item.id" :label="item.name" :value="item.id"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex align-center justify-end text-right">
          <v-btn color="warning" large class="px-8 black--text">TIPS?</v-btn>
        </v-col>
      </v-row>
      <v-card elevation="0" class="px-5 py-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6">
              <!-- <v-select outlined v-model="PostItem" :items="offerTypes" label="Select Offer"></v-select> -->
              <v-text-field
                v-model="OrderName"
                label="Offer Title (Ex: Special Dinner Deal, Save Food Bag)"
                outlined
              ></v-text-field>
              <v-textarea
                v-model="SummaryContent"
                outlined
                label="Summary (300 words maximum)"
                value
              ></v-textarea>
              <v-file-input
                v-model="OfferImage"
                @change="handleImage"
                outlined
                label="Offer Picture"
                prepend-icon
                append-icon="mdi-attachment"
              ></v-file-input>
              <h3 class="headline blue-text">Offer Price</h3>
              <strong>Note save food posts:</strong>
              <ol>
                <li>You cannot set offer price less than 30% of actual price</li>
                <li>You can set offer price 0 if you want to give free food. for this, you need to contact our team in advance.</li>
              </ol>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details v-model="OriginalPrice" label="Actual Price" outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details v-model="OfferPrice" label="Offer Price" outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details v-model="Quantity" label="Quantity" outlined></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  class="red-text"
                >Min offer price should be greater than or equal to 10.8 NOK(30% of the acutal price).</v-col>
              </v-row>
              <h3 class="headline blue-text">Food Type</h3>
              <v-item-group v-model="FoodType" mandatory>
                <v-row>
                  <v-col v-for="item in foodTypes" :key="item.id" cols="12" md="4">
                    <v-item :value="item.id" v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'success' : '#eaedf4'"
                        :dark="active"
                        class="d-flex align-center select-card px-4 py-3"
                        @click="toggle"
                        flat
                      >{{item.name}}</v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-item-group>
              <h3 class="headline blue-text">Meal Type</h3>
              <v-item-group v-model="MealType" mandatory>
                <v-row>
                  <v-col v-for="item in mealTypes" :key="item.id" cols="12" md="4">
                    <v-item :value="item.id" v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'success' : '#eaedf4'"
                        :dark="active"
                        class="d-flex align-center select-card px-4 py-3"
                        @click="toggle"
                        flat
                      >{{item.name}}</v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-item-group>
              <p>Others: Flowers, Farm Products, etc.,</p>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="headline blue-text">Offer Available Time</h3>
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="fill-height d-flex align-center">Monday - Friday</div>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="PickupStartTime"
                    hide-details
                    label="From"
                    placeholder="18.00"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="PickupEndTime"
                    hide-details
                    label="To"
                    placeholder="20.00"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="fill-height d-flex align-center">Saturday</div>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    hide-details
                    v-model="SatStartTime"
                    label="From"
                    placeholder="18.00"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    hide-details
                    v-model="SatEndTime"
                    label="To"
                    placeholder="20.00"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="fill-height d-flex align-center">Sunday</div>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    hide-details
                    v-model="SunStartTime"
                    label="From"
                    placeholder="18.00"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    hide-details
                    v-model="SunEndTime"
                    label="To"
                    placeholder="20.00"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <h3 class="headline blue-text">Offer Available Dates</h3>
              <v-date-picker
                no-title
                color="primary"
                v-model="dates"
                class="elevation-0 datepicker-outline my-3"
                reactive
                full-width
                range
              ></v-date-picker>
              <v-row>
                <v-col cols="12" sm="12">Available Dates</v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    hide-details
                    label="From"
                    placeholder="May 8 2020"
                    outlined
                    readonly
                    :value="this.dates[0]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    hide-details
                    label="To"
                    placeholder="May 8 2020"
                    outlined
                    readonly
                    :value="this.dates[1]"
                  ></v-text-field>
                </v-col>
              </v-row>

              <p>Not Available Dates (Every Week)</p>
              <v-item-group v-model="notAvailableDates" multiple>
                <div class="day-grid">
                  <div v-for="item in notAvailable" :key="item.id">
                    <v-item :value="item.id" v-slot:default="{ active, toggle }">
                      <v-card
                        :color="active ? 'success' : ''"
                        :dark="active"
                        class="d-flex align-center justify-center select-card px-4 py-3"
                        @click="toggle"
                        outlined
                      >{{item.label}}</v-card>
                    </v-item>
                  </div>
                </div>
              </v-item-group>
              <p
                class="mt-3"
              >Note: If any special dates - offer is not available then please click those dates and uncheck the solid circle from the above calender</p>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
      <v-alert :type="alertType" outlined dismissible class="mt-5" v-model="alert">{{alertMsg}}</v-alert>
      <div class="text-center my-5">
        <!-- <v-btn color="warning" class="px-10" x-large rounded>Preview</v-btn> -->
        <v-dialog
          v-model="previewDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" class="px-10" x-large rounded v-bind="attrs" v-on="on">Preview</v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="#003680">
              <v-toolbar-title>Preview</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="previewDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-img :src="offerImageDataString" height="300" class="grey darken-4"></v-img>
            <v-container>
              <div class="d-flex justify-space-between">
                <div>
                  <h1 class="text-h1 blue-text">{{restuarantData.legal_name}}</h1>
                  <h2 class="font-weight-regular">{{OrderName}}</h2>
                </div>
                <div class="text-right">
                  <v-btn color="success" elevation="0">{{previewOfferType}}</v-btn>
                  <h1 class="text-h1 blue-text">
                    <span
                      style="font-size: .7em; text-decoration: line-through;"
                    >{{restuarantData.currency}} {{OriginalPrice}}</span>
                    {{restuarantData.currency}} {{OfferPrice}}
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
                    {{restuarantData.address}}
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
                    <p>{{SummaryContent}}</p>
                    <h3 class="h3 blue-text font-weight-medium">What save food bag may contain?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vel nemo rem ea explicabo fugiat cumque harum vero, corporis voluptate iste accusantium perferendis hic quibusdam, quis non aperiam amet et?</p>
                    <h3 class="h3 blue-text font-weight-medium">Why "Save Food" bag?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vel nemo rem ea explicabo fugiat cumque harum vero, corporis voluptate iste accusantium perferendis hic quibusdam, quis non aperiam amet et?</p>
                    <v-card flat>
                      <v-card-title class="blue-text">Why "Save Food" Bag?</v-card-title>
                      <v-card-text>
                        <v-row>
                          <v-col class="text-center" cols="12" sm="3">
                            <div class="px-5 py-5 review-badge">4.4</div>
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
                                v-model="qualityRating"
                                background-color="warning"
                                color="warning"
                                readonly
                              ></v-rating>
                              <div class="blue-text font-weight-medium">{{qualityRating}}</div>
                            </div>
                            <div class="d-flex justify-end align-center">
                              <div class="flex-grow-1">Location</div>
                              <v-rating
                                v-model="qualityRating"
                                background-color="warning"
                                color="warning"
                                readonly
                              ></v-rating>
                              <div class="blue-text font-weight-medium">{{qualityRating}}</div>
                            </div>
                            <div class="d-flex justify-end align-center">
                              <div class="flex-grow-1">Price</div>
                              <v-rating
                                v-model="qualityRating"
                                background-color="warning"
                                color="warning"
                                readonly
                              ></v-rating>
                              <div class="blue-text font-weight-medium">{{qualityRating}}</div>
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
                        <div class="mb-5">{{previewFoodType}}</div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Meal Type</div>
                        <div class="mb-5">{{previewMealType}}</div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Chain</div>
                        <div class="mb-5">
                          <span
                            v-for="item in restuarantData.chain"
                            :key="item.id"
                          >{{item.others || item.name}}</span>
                        </div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Store Type</div>
                        <div class="mb-5">
                          <span
                            v-for="item in restuarantData.store_type"
                            :key="item.id"
                          >{{item.others || item.name}}</span>
                        </div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Parking</div>
                        <div class="mb-5">
                          <span
                            v-for="item in restuarantData.parking"
                            :key="item.id"
                          >{{item.others || item.name}}</span>
                        </div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Accepted Payment Method</div>
                        <div class="mb-5">
                          <span
                            v-for="(item, index) in restuarantData.payment_method"
                            :key="item.id"
                          >{{ (item.name=="Others") ? item.others : item.name}}{{ (index == (restuarantData.payment_method.length - 1)) ? "." : ", "}}</span>
                        </div>
                      </div>
                      <div>
                        <div class="subtitle-2 blue-text">Landmark</div>
                        <div class="mb-5">
                          <span
                            v-for="item in restuarantData.landmark"
                            :key="item.id"
                          >{{item.others || item.name}}</span>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card>
        </v-dialog>

        <v-btn
          :loading="loading"
          color="#003680"
          class="px-10 ml-5"
          dark
          x-large
          rounded
          @click="submit"
        >Submit</v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  layout: "partner-dashboard",

  data() {
    return {
      qualityRating: 4.3,
      previewDialog: false,
      loading: false,
      alert: false,
      alertType: null,
      alertMsg: "",
      radios: "2",
      valid: false,
      OriginalPrice: "",
      OfferPrice: "",
      SummaryContent: "",
      FoodType: "",
      MealType: "",
      PostItem: "",
      Quantity: "",
      OrderName: "",
      PickupStartTime: "",
      PickupEndTime: "",
      SatStartTime: "",
      SatEndTime: "",
      SunStartTime: "",
      SunEndTime: "",
      dates: [],
      offerType: "",
      offerTypes: [],
      foodTypes: [],
      mealTypes: [],
      notAvailable: [
        {
          id: 1,
          label: "M",
          value: "Monday"
        },
        {
          id: 2,
          label: "T",
          value: "Tuesday"
        },
        {
          id: 3,
          label: "W",
          value: "Wednesday"
        },
        {
          id: 4,
          label: "T",
          value: "Thursday"
        },
        {
          id: 5,
          label: "F",
          value: "Friday"
        },
        {
          id: 6,
          label: "S",
          value: "Saturday"
        },
        {
          id: 7,
          label: "S",
          value: "Sunday"
        }
      ],
      notAvailableDates: [],
      OfferImage: null,
      offerImageEncoded: null,
      offerImageDataString: "",
      restuarantData: {}
    };
  },
  async mounted() {
    // Get Offer Type - Radio
    try {
      await this.$axios
        .post("GetSearchValue", { ParentId: "72" })
        .then(response => {
          this.offerTypes = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }
    // Get Food Types
    try {
      await this.$axios
        .post("GetSearchValue", { ParentId: "34" })
        .then(response => {
          this.foodTypes = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }
    // Get Meal Types
    try {
      await this.$axios
        .post("GetSearchValue", { ParentId: "38" })
        .then(response => {
          this.mealTypes = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }
    // Get Restuarant Data
    try {
      await this.$axios
        .post("Mobile/Partner/GetPartnerDetailsById", {
          PartnerId: this.$store.state.userData.userID
        })
        .then(response => {
          this.restuarantData = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await this.$axios
          .post("Mobile/Partner/CreatePostOrder", {
            OriginalPrice: this.OriginalPrice,
            OfferImage: this.offerImageEncoded,
            OfferPrice: this.OfferPrice,
            SummaryContent: this.SummaryContent,
            FoodType: this.FoodType.toString(),
            MealType: this.MealType.toString(),
            // PostItem: this.PostItem,
            Quantity: this.Quantity,
            ExcludeTo: "",
            OrderName: this.OrderName,
            PickupStartTime: this.PickupStartTime,
            PickupEndTime: this.PickupEndTime,
            SatStartTime: this.SatStartTime,
            SatEndTime: this.SatEndTime,
            SunStartTime: this.SunStartTime,
            SunEndTime: this.SunEndTime,
            ExcludeFrom: "",
            RepeatDates: "1, 3, 5, 7",
            id: this.$store.state.userData.id.toString(),
            // userID: this.$store.state.userData.userID.toString(),
            Name: this.OrderName,
            OfferType: this.offerType.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            // To Be added
            DealFromDate: this.dates[0],
            DealToDate: this.dates[1],
            ExcludeDates: "-",
            ExcludeDayOrder: "-"
          })
          .then(response => {
            console.log(response.data);
            if (response.data.code == 200) {
              this.alertType = "success";
              this.alert = true;
              this.alertMsg = "Offer Submitted Successfully";
            } else {
              this.alertType = "error";
              this.alert = true;
              this.alertMsg = response.data.message;
            }
          });
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
    handleImage: function() {
      this.createbase64Image(this.OfferImage);
    },
    async createbase64Image(fileObject) {
      const reader = new FileReader();
      const reader2 = new FileReader();
      await reader.readAsBinaryString(fileObject);
      reader.onload = () => {
        this.offerImageEncoded = window.btoa(reader.result);
      };
      await reader2.readAsDataURL(fileObject);
      reader2.onload = () => {
        this.offerImageDataString = reader2.result;
      };
    },
    async copyToClipboard() {
      try {
        // 1) Copy text
        await navigator.clipboard.writeText(this.restuarantData.address);

        // 2) Catch errors
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  },
  computed: {
    previewOfferType() {
      if (this.offerTypes.length > 0 && this.offerType != "") {
        let temp = this.offerTypes.find(obj => obj.id == this.offerType);
        return temp.name;
      } else {
        return "";
      }
    },
    previewFoodType() {
      if (this.foodTypes.length > 0 && this.FoodType != "") {
        let temp = this.foodTypes.find(obj => obj.id == this.FoodType);
        return temp.name;
      } else {
        return "";
      }
    },
    previewMealType() {
      if (this.mealTypes.length > 0 && this.MealType != "") {
        let temp = this.mealTypes.find(obj => obj.id == this.MealType);
        return temp.name;
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
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