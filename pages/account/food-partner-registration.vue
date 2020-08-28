<template>
  <div class="login-page-inner">
    <v-container>
      <div class="registration-section">
        <h2>
          Register as
          <nuxt-link to="/how-it-works/information-for-food-partners" target="_blank">Food Partner</nuxt-link>
        </h2>
        <v-form ref="form" v-model="valid">
          <div class="inner-register">
            <div>
              <v-text-field
                label="Store Name"
                v-model="storename"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Address"
                v-model="address"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Postal code"
                v-model="postalcode"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-autocomplete
                :items="countryList"
                item-text="name"
                item-value="name"
                return-object
                :rules="[rules.required]"
                label="Country"
                v-model="country"
                outlined
                @change="getStates()"
              ></v-autocomplete>
              <v-autocomplete
                :items="stateList"
                item-text="name"
                item-value="name"
                return-object
                :rules="[rules.required]"
                label="Region"
                outlined
                v-model="region"
                @change="getCity()"
              ></v-autocomplete>
              <v-combobox
                :items="cityList"
                item-text="name"
                item-value="name"
                :rules="[rules.required]"
                label="City"
                outlined
                return-object
                v-model="city"
              ></v-combobox>
              <v-text-field
                label="Referral Code"
                v-model="ReferralCode"
                outlined
                class="login-form-feild"
              ></v-text-field>
            </div>
            <div>
              <h4>Contact person details</h4>
              <v-text-field
                label="Contact person - Full Name"
                v-model="fullname"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-combobox
                v-model="designation"
                :items="designationList"
                item-text="name"
                item-value="id"
                label="Designation"
                outlined
                :rules="[rules.required]"
              ></v-combobox>
              <v-text-field
                v-if="this.designation.id == 95"
                label="If others please specify"
                outlined
                v-model="designationOther"
              ></v-text-field>
              <v-text-field
                label="mailaddress@mail.com"
                v-model="email"
                :rules="[rules.required, rules.email]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Contact Number"
                v-model="number"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Alternative number (Optional)"
                v-model="alternumber"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field label="Website" v-model="Website" outlined class="login-form-feild"></v-text-field>
            </div>
          </div>
          <v-alert v-model="error" type="error" dismissible outlined text>{{errorMsg}}</v-alert>
          <div class="text-center">
            <v-btn
              rounded
              color="#104388"
              x-large
              dark
              class="login-sub"
              @click="submit"
              :loading="loading"
            >Submit</v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import axios from "axios";
export default {
  data() {
    return {
      error: false,
      errorMsg: null,
      valid: false,
      loading: false,
      storename: "",
      address: "",
      postalcode: "",
      Website: "",
      fullname: "",
      email: "",
      number: "",
      ReferralCode: "",
      country: "",
      region: "",
      city: "",
      designation: "",
      designationList: [],
      alternumber: "",
      countryList: [],
      stateList: [],
      cityList: [],
      designationOther: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$axios
            .post("/Mobile/Partner/PartnerStoreDetails", {
              // OwnerName: this.userData,
              UserEmail: this.UserEmail,
              UserPassword: this.UserPassword,
              StoreName: this.storename,
              Address: this.address,
              PostalCode: this.postalcode,
              UserRegion: this.region.id.toString(),
              UserCountry: this.country.id.toString(),
              UserCity: this.city.id.toString() || this.city,
              Designation: this.designation.toString() || this.designationOther,
              ContactPersonName: this.fullname,
              AlternativeEmail: this.email,
              ContactNumber: this.number,
              AlternativeContactNumber: this.alternumber,
              ReferralCode: this.ReferralCode,
              Website: this.Website,
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.$router.push("/account/food-partner-confirmation");
              } else {
                this.error = true;
                this.errorMsg = "Email already exists";
              }
            });
        } catch (e) {
          console.log(e);
        }
        this.loading = false;
      }
    },
    getStates: function () {
      console.log("country");
      this.$axios
        .post("/GetState", {
          CountryId: this.country.id.toString(),
        })
        .then((response) => {
          this.stateList = response.data.data;
        });
    },
    getCity: function () {
      this.$axios
        .post("/GetCity", {
          StateId: this.region.id.toString(),
        })
        .then((response) => {
          this.cityList = response.data.data;
        });
    },
  },
  computed: {
    ...mapGetters({
      // userData: "userData",
      UserEmail: "userEmail",
      UserPassword: "userPassword",
    }),
  },
  async mounted() {
    await this.$axios.post("/GetCountry").then((response) => {
      this.countryList = response.data.data;
    });
    // Get Designation
    await this.$axios
      .post("GetSearchValue", { ParentId: "86" })
      .then((response) => {
        this.designationList = response.data.data;
      });
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/register");
    }
  },
};
</script>
<style scoped>
a {
  color: #104388;
}
p {
  color: #3b3b3b;
}
.inner-register {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
}
.inner-register h4 {
  margin-bottom: 2em;
  color: #3b3b3b;
}
.registration-section > h2 {
  color: #104388;
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 1em;
}
.login-page-inner {
  background: #eaedf4;
}
.registration-section {
  background: #fff;
  padding: 4em 2em 3em;
  border-radius: 10px;
  margin: 1em 0 1.5em;
}
button.login-sub {
  margin-bottom: 1.5em;
  width: 250px;
  text-transform: capitalize;
  font-size: 24px !important;
  font-weight: 500;
  margin-top: 1em;
}
@media (max-width: 767px) {
  .inner-register {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
  .registration-section {
    padding: 4em 1em 3em;
  }
}
</style>