<template>
  <div class="login-page-inner">
    <v-container>
      <div class="registration-section">
        <h2>Bank Details</h2>
        <v-form ref="form" v-model="valid">
          <div class="inner-register">
            <div>
              <v-text-field
                label="Company Legal Name"
                v-model="LegalName"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Company Address"
                v-model="CompanyAddress"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Postal Code"
                v-model="BankPostalCode"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-autocomplete
                :items="countryList"
                item-text="name"
                item-value="name"
                return-object
                required
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
                required
                label="Region"
                outlined
                v-model="region"
                @change="getCity()"
              ></v-autocomplete>
              <v-combobox
                :items="cityList"
                item-text="name"
                item-value="name"
                required
                label="City"
                outlined
                return-object
                v-model="city"
              ></v-combobox>
              <v-text-field
                label="Invoicing Email"
                v-model="InvoicingEmail"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                label="Bank Account Number"
                v-model="BankAccountNumber"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Swift Code"
                v-model="SwiftCode"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Bank Name"
                v-model="BankName"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Bank Location"
                v-model="BankLocation"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Currency"
                v-model="BankCurrency"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="Payment Cycle"
                v-model="PaymentCycle"
                outlined
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                label="VAT (TAX Number)"
                v-model="TaxNumber"
                required
                outlined
                class="login-form-feild"
              ></v-text-field>
            </div>
            <div>
              <h2>Others Details</h2>
              <v-combobox
                v-model="Chain"
                :items="chain"
                item-text="name"
                item-value="id"
                label="Chain"
                outlined
                required
              ></v-combobox>
              <v-combobox
                required
                v-model="StoreType"
                :items="storetype"
                item-text="name"
                item-value="id"
                label="Select a store type"
                outlined
              ></v-combobox>
              <v-text-field
                v-if="this.StoreType.id == 23"
                label="Please specify"
                outlined
                v-model="StoreTypeOthers"
              ></v-text-field>
              <v-combobox
                v-model="Parking"
                :items="parking"
                item-text="name"
                item-value="id"
                label="Select parking type"
                outlined
                required
              ></v-combobox>
              <v-text-field
                v-if="this.Parking.id == 33"
                label="Please specify"
                outlined
                v-model="ParkingOthers"
              ></v-text-field>
              <v-combobox
                v-model="Landmark"
                :items="landmark"
                item-text="name"
                item-value="id"
                label="Select a Landmark"
                outlined
                required
              ></v-combobox>
              <v-text-field
                v-if="this.Landmark.id == 29"
                label="(Ex: near which university, school, mall, movie theater, etc.,)"
                outlined
                v-model="LandmarkOther"
              ></v-text-field>
            </div>
            <div>
              <h2 class="hidden-test">test</h2>
              <v-combobox
                v-model="Payment"
                :items="payment"
                item-text="name"
                item-value="id"
                label="Select Accepted payment method"
                outlined
                multiple
                required
              ></v-combobox>
              <v-text-field label="If others please specify" outlined v-model="PaymentOthers"></v-text-field>
              <v-file-input
                accept="image/png, image/jpeg"
                placeholder="(Recomended size: 512 X 512 pixels, Format PNG, JPG/JPEG)"
                prepend-icon="mdi-camera"
                label="Upload Logo/Signboard"
                v-model="Logo"
                @change="handleImage"
              ></v-file-input>
              <v-file-input
                required
                accept="image/png, image/jpeg"
                placeholder="(Recomended size: 820 X 760 pixels, Format PNG, JPG/JPEG)"
                prepend-icon="mdi-camera"
                label="Upload Cover picture"
                v-model="Cover"
                @change="handleCover"
              ></v-file-input>
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
export default {
  data() {
    return {
      error: false,
      errorMsg: null,
      valid: false,
      loading: false,
      LegalName: "",
      CompanyAddress: "",
      BankPostalCode: "",
      PaymentOthers: "",
      ParkingOthers: "",
      StoreTypeOthers: "",
      country: "",
      region: "",
      city: "",
      InvoicingEmail: "",
      BankAccountNumber: "",
      SwiftCode: "",
      BankName: "",
      BankLocation: "",
      BankCurrency: "",
      PaymentCycle: "",
      TaxNumber: "",
      Chain: "",
      StoreType: "",
      Parking: "",
      Payment: "",
      Landmark: "",
      LandmarkOther: "",
      Logo: "",
      logoEncoded: "",
      Cover: "",
      coverEncoded: "",
      chain: [],
      storetype: [],
      parking: [],
      payment: [],
      landmark: [],
      countryList: [],
      stateList: [],
      cityList: []
      // rules: {
      //   required: value => !!value || "Required.",
      //   email: value => {
      //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //     return pattern.test(value) || "Invalid e-mail.";
      //   }
      // }
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          // let chainArr = this.Chain.map(item => item.id.toString());
          // let StoreTypeArr = this.StoreType.map(item => item.id.toString());
          // let ParkingArr = this.Parking.map(item => item.id.toString());
          let PaymentArr = this.Payment.map(item => item.id.toString());
          // let LandmarkArr = this.Landmark.map(item => item.id.toString());
          let chainArr = [];
          let StoreTypeArr = [];
          let ParkingArr = [];
          // let PaymentArr = [];
          let LandmarkArr = [];
          chainArr.push(this.Chain.id);
          StoreTypeArr.push(this.StoreType.id.toString());
          ParkingArr.push(this.Parking.id);
          // PaymentArr.push(this.Payment.id);
          LandmarkArr.push(this.Landmark.id);

          await this.$axios
            .post("/Mobile/Partner/InsertPartnerBank", {
              LegalName: this.LegalName,
              CompanyAddress: this.CompanyAddress,
              BankPostalCode: this.BankPostalCode,
              InvoicingEmail: this.InvoicingEmail,
              BankAccountNumber: this.BankAccountNumber,
              SwiftCode: this.SwiftCode,
              BankState: this.region.id.toString(),
              BankCountry: this.country.id.toString(),
              BankCity: this.city.id.toString() || this.city,
              BankName: this.BankName,
              BankLocation: this.BankLocation,
              BankCurrency: this.BankCurrency,
              PaymentCycle: this.PaymentCycle,
              TaxNumber: this.TaxNumber,
              PaymentOthers: this.PaymentOthers,
              ParkingOthers: this.ParkingOthers,
              StoreTypeOthers: this.StoreTypeOthers,
              Chain: chainArr,
              StoreType: StoreTypeArr,
              Parking: ParkingArr,
              Payment: PaymentArr,
              Landmark: LandmarkArr,
              // AccessToken: this.userData.userAccessToken,
              LandmarkOther: this.LandmarkOther,
              StorePicture: this.logoEncoded,
              CoverPicture: this.coverEncoded,
              UserId: this.userData.userID.toString(),
              StoreDescription: "0"
            })
            .then(response => {
              if (response.data.code == 200) {
                this.$router.push("/partner-dashboard");
              } else {
                this.errorMsg = "Email already exists";
              }
            });
        } catch (e) {
          console.log(e);
        }
        this.loading = false;
      }
    },
    getStates: function() {
      this.$axios
        .post("/GetState", {
          CountryId: this.country.id.toString()
        })
        .then(response => {
          this.stateList = response.data.data;
        });
    },
    getCity: function() {
      this.$axios
        .post("/GetCity", {
          StateId: this.region.id.toString()
        })
        .then(response => {
          this.cityList = response.data.data;
        });
    },
    handleImage: function() {
      this.createbase64Image(this.Logo);
    },
    async createbase64Image(fileObject) {
      const reader = new FileReader();
      reader.readAsBinaryString(fileObject);
      reader.onload = () => {
        // let enc = window.btoa(reader.result);
        // console.log(enc);
        this.logoEncoded = window.btoa(reader.result);
      };
    },
    handleCover: function() {
      this.createbase64Cover(this.Cover);
    },
    async createbase64Cover(fileObject) {
      const reader = new FileReader();
      reader.readAsBinaryString(fileObject);
      reader.onload = () => {
        this.coverEncoded = window.btoa(reader.result);
      };
    }
  },
  async mounted() {
    await this.$axios.post("/GetCountry").then(response => {
      this.countryList = response.data.data;
    });
    // Get Chain Types
    await this.$axios
      .post("GetSearchValue", { ParentId: "10" })
      .then(response => {
        this.chain = response.data.data;
      });
    // Get Store Types
    await this.$axios
      .post("GetSearchValue", { ParentId: "17" })
      .then(response => {
        this.storetype = response.data.data;
      });
    // Get Payment Types
    await this.$axios
      .post("GetSearchValue", { ParentId: "57" })
      .then(response => {
        this.payment = response.data.data;
      });
    // Get Parking Types
    await this.$axios
      .post("GetSearchValue", { ParentId: "30" })
      .then(response => {
        this.parking = response.data.data;
      });
    // Get Landmark Types
    await this.$axios
      .post("GetSearchValue", { ParentId: "24" })
      .then(response => {
        this.landmark = response.data.data;
      });
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/login");
    }
  },
  computed: {
    ...mapGetters({
      userData: "userData"
    })
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
.registration-section h2 {
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
.hidden-test {
  opacity: 0;
}
@media (max-width: 767px) {
  .inner-register {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
  .hidden-test {
    display: none;
  }
  .registration-section {
    padding: 4em 1em 3em;
  }
}
</style>