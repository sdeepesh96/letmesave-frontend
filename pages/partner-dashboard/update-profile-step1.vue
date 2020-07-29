<template>
  <div class="login-page-inner">
    <v-container>
      <div class="registration-section">
        <h2>Store Details</h2>
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
              <v-text-field
                label="Country"
                v-model="country"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Region"
                v-model="region"
                :rules="[rules.required]"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="City"
                :rules="[rules.required]"
                outlined
                v-model="city"
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Referral Code"
                v-model="ReferralCode"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-textarea
                outlined
                name="input-7-4"
                label="Store Description"
                v-model="Store_Description"
              ></v-textarea>
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
          <div class="text-center">
            <v-btn
              rounded
              color="#104388"
              x-large
              dark
              class="login-sub"
              @click="submit"
              :loading="loading"
            >Continue</v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "partner-dashboard",
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
      Store_Description: "",
      designation: "",
      designationList: [],
      alternumber: "",
      countryList: [],
      stateList: [],
      cityList: [],
      rules: {
        required: value => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  async mounted() {
    // Get Designation
    await this.$axios
      .post("GetSearchValue", { ParentId: "86" })
      .then(response => {
        this.designationList = response.data.data;
      });
    try {
      await this.$axios
        .post("/Mobile/partner/GetPartnerDetailsById", {
          PartnerId: this.$store.state.userData.userID
        })
        .then(response => {
          console.log(response.data.data);
          this.storename = response.data.data.store_name;
          this.address = response.data.data.address;
          this.postalcode = response.data.data.postal_code.toString();
          this.ReferralCode = response.data.data.refferral_code;
          this.fullname = response.data.data.contact_person_name;
          this.email = response.data.data.email;
          this.number = response.data.data.contact_number;
          this.alternumber = response.data.data.alternative_contact_number;
          this.Website = response.data.data.website;
          this.region = response.data.data.state_name;
          this.country = response.data.data.country_name;
          this.city = response.data.data.city_name;
          this.designation = response.data.data.designation;
          this.Store_Description = response.data.data.store_description;
        });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          this.$store.commit("SET_PROFILE_STORE_NAME", this.storename);
          this.$store.commit("SET_PROFILE_ADDRESS", this.address);
          this.$store.commit("SET_PROFILE_POSTAL_CODE", this.postalcode);
          this.$store.commit("SET_PROFILE_REFERRAL_CODE", this.ReferralCode);
          this.$store.commit("SET_PROFILE_FULL_NAME", this.fullname);
          this.$store.commit("SET_PROFILE_EMAIL", this.email);
          this.$store.commit("SET_PROFILE_NUMBER", this.number);
          this.$store.commit("SET_PROFILE_ALTERNUMBER", this.alternumber);
          this.$store.commit("SET_PROFILE_WEBSITE", this.Website);
          this.$store.commit("SET_PROFILE_REGION", this.region);
          this.$store.commit("SET_PROFILE_COUNTRY", this.country);
          this.$store.commit("SET_PROFILE_CITY", this.city);
          this.$store.commit("SET_PROFILE_DESIGNATION", this.designation);
          this.$store.commit("SET_PROFILE_DESCRIPTION", this.Store_Description);
          this.$router.push("/partner-dashboard/update-profile-step2");
        } catch (e) {
          this.error = true;
          this.errorMsg = e.response.data.message;
        }
        this.loading = false;
      }
    }
  }
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