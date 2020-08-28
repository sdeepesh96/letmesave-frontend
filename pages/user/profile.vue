<template>
  <div>
    <div class="profile-sec">
      <v-container>
        <h4>My Profile</h4>
      </v-container>
    </div>
    <v-container>
      <div class="row">
        <v-col cols="12" xs="12" sm="3" md="3" lg="3">
          <UserSidebar />
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9">
          <div class="profile-list">
            <h3>Edit Profile</h3>
            <v-form ref="form" v-model="valid">
              <v-row style="margin-bottom:1.5em;">
                <v-col cols="12" sm="6">
                  <v-text-field v-model="firstname" label="First Name" :rules="[rules.required]"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="lastname" label="Last Name" :rules="[rules.required]"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="phoneno" label="Phone Number" :rules="[rules.required]"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="email" label="Email ID" disabled :rules="[rules.required]"></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-autocomplete
                    :items="countryList"
                    item-text="name"
                    :rules="[rules.required]"
                    item-value="name"
                    return-object
                    label="Country"
                    v-model="country"
                    @change="getStates()"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-combobox
                    :items="stateList"
                    item-text="name"
                    :rules="[rules.required]"
                    item-value="name"
                    return-object
                    label="Region"
                    v-model="region"
                    @change="getCity()"
                  ></v-combobox>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-combobox
                    :items="cityList"
                    :rules="[rules.required]"
                    item-text="name"
                    item-value="name"
                    label="City"
                    return-object
                    v-model="city"
                  ></v-combobox>
                </v-col>
              </v-row>
              <div class="text-center">
                <v-btn
                  color="#104388"
                  x-large
                  dark
                  width="100%"
                  class="login-sub"
                  @click="submit"
                  :loading="loading"
                >Update Profile</v-btn>
              </div>
              <v-snackbar v-model="snackbar" top color="#0f4387">
                Profile Updated
                <template>
                  <v-btn text @click="snackbar = false" color="#fff">Close</v-btn>
                </template>
              </v-snackbar>
            </v-form>
          </div>
        </v-col>
      </div>
    </v-container>
  </div>
</template>
<script>
import UserSidebar from "~/components/UserSidebar";
export default {
  components: {
    UserSidebar,
  },
  data() {
    return {
      error: false,
      snackbar: false,
      errorMsg: null,
      valid: false,
      loading: false,
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      country: "",
      region: "",
      city: "",
      countryList: [],
      stateList: [],
      cityList: [],
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        try {
          await this.$axios
            .post("/Mobile/User/UpdateProfile", {
              // OwnerName: this.userData,
              UserFirstName: this.firstname,
              UserLastName: this.lastname,
              UserPhoneNumber: this.phoneno,
              // UserEmail: this.email,
              UserCountry: this.country.name || this.country,
              UserState: this.region.name || this.region,
              UserCity: this.city.name || this.city,
              Id: this.$store.state.userData.id.toString(),
              ProfileImage: "",
              AccessToken: this.$store.state.userData.userAccessToken,
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.snackbar = true;
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
  async mounted() {
    await this.$axios.post("/GetCountry").then((response) => {
      this.countryList = response.data.data;
    });
    try {
      await this.$axios
        .post("/Mobile/User/Profile", {
          Id: this.$store.state.userData.id,
          AccessToken: this.$store.state.userData.userAccessToken,
        })
        .then((response) => {
          this.firstname = response.data.data[0].firstName;
          this.lastname = response.data.data[0].lastName;
          this.phoneno = response.data.data[0].phone;
          this.email = response.data.data[0].email;
          this.country = response.data.data[0].country_name;
          this.region = response.data.data[0].state_name;
          this.city = response.data.data[0].city_name;
        });
    } catch (e) {
      console.log(e);
    }
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/login?role=1");
    }
  },
};
</script>
<style scoped>
.profile-sec h4 {
  font-weight: 400;
  color: #0f4387;
}

.profile-sec {
  text-align: left;
  background: #eaedf6;
  padding: 1.5em 0;
  font-size: 22px;
}
.profile-list h3 {
  font-weight: 400;
  color: #f89400;
  margin-top: 1em;
  border-bottom: 1px solid #eaedf6;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
}
</style>
