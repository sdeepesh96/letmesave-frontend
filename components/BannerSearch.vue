<template>
  <div class="banner-search">
    <v-form style="text-align:center">
      <v-container>
        <v-row>
          <v-col cols="12" sm="1"></v-col>
          <v-col cols="12" sm="10">
            <div class="banner-form">
              <v-radio-group row v-model="ordertype">
                <v-radio
                  v-for="(order, i) in ordertypes"
                  :key="i"
                  :label="`${order.name}`"
                  :value="`${order.id}`"
                  color="#fff"
                  dark
                ></v-radio>
              </v-radio-group>
              <div class="banner-form-in">
                <div>
                  <v-text-field
                    solo
                    hide-details
                    label="Enter Location"
                    height="47px"
                    append-icon="mdi-image-filter-center-focus"
                    class="location"
                    disabled
                    dense
                    outlined
                  ></v-text-field>
                </div>
                <div class="banner-form-inner">
                  <div>
                    <v-select
                      label="Select Meal type"
                      hide-details
                      dense
                      solo
                      height="47px"
                      v-model="MealType"
                      :items="mealTypes"
                      item-text="name"
                      item-value="id"
                      outlined
                    ></v-select>
                  </div>
                  <div>
                    <v-select
                      label="Pick any time this week"
                      hide-details
                      dense
                      solo
                      height="47px"
                      v-model="pickup"
                      :items="items"
                      item-text="name"
                      item-value="id"
                      outlined
                    ></v-select>
                  </div>
                  <div>
                    <nuxt-link
                      :to="'search'+'?'+'ordertype='+this.ordertype +'&'+'MealType='+this.MealType"
                    >Search</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="1"></v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="banner-text">
      <h4>Discover your perfect save food!</h4>
      <p>Discover our 50,000+ surplus food offers</p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    ordertype: "73",
    MealType: "",
    pickup: "",
    ordertypes: [],
    mealTypes: [],
    items: ["Today", "This Week", "This Month"],
  }),
  methods: {
    async ordertypedata() {
      try {
        await this.$axios
          .post("GetSearchValue", { ParentId: "72" })
          .then((response) => {
            this.ordertypes = response.data.data;
            this.ordertype = response.data.data[0].id.toString();
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.ordertypedata();
    // Get Meal Types
    try {
      this.$axios
        .post("GetSearchValue", { ParentId: "38" })
        .then((response) => {
          this.mealTypes = response.data.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.banner-search .col-sm-8,
.banner-search .col-sm-2,
.banner-search .col-sm-4 {
  padding: 0 7px;
}
.v-input--dense > .v-input__control > .v-input__slot {
  min-height: 47px !important;
}
.banner-form-inner {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1em;
  margin-top: 10px;
}
.v-btn.v-size--small {
  text-transform: unset;
  font-size: 16px;
  font-weight: 400;
}
.location .v-text-field__details {
  display: none;
}
.banner-form {
  margin: 10% 0 3%;
}
.banner-form-in {
  padding: 10px;
  background: #ffffff4d;
}
.banner-search {
  background: #ebedf3;
  background-image: url("../assets/Banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner-form .v-input--radio-group.v-input--radio-group--row .v-radio {
  margin-right: 45px;
}

.banner-text h4 {
  text-align: center;
  color: #ffffff;
  font-size: 38px;
  font-weight: 300;
}
.banner-text p {
  text-align: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
}

.banner-form-inner a {
  background-color: #104388;
  border-color: #104388;
  font-size: 18px;
  color: #fff;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 400;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: unset;
  transition-duration: 0.28s;
  vertical-align: middle;
  white-space: nowrap;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  height: 100%;
}

.banner-text {
  padding-bottom: 7%;
}
@media (max-width: 767px) {
  .banner-form .v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 10px;
  }
  .banner-text h4 {
    font-size: 24px;
  }
  .banner-text p {
    font-size: 16px;
  }
  .banner-text {
    padding-bottom: 15%;
  }
}
</style>
