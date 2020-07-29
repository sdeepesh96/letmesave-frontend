<template>
  <div class="login-page-inner">
    <v-container>
      <div class="login-left-right">
        <div class="login-left-sec">
          <div class="left-components">
            <img src="~/assets/logo-light.png" alt="light-logo" />
            <h4>Please choose your account type to Login or Create Account</h4>
            <v-radio-group v-model="ex8" column dark>
              <v-radio value="user" color="success" disabled>
                <template v-slot:label>
                  <h5 class="radio-des">
                    User
                    <span>(Example: Any food buyers or food customers)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="food-partner" color="success" disabled>
                <template v-slot:label>
                  <h5 class="radio-des">
                    Food Partner
                    <span>(Example: Any food sellers or food businesses)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="marketing-partner" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    Marketing Partner
                    <span>(Example: Any individual or student or company who wants to be our franchisee or marketing partner/agent)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="host" color="success" disabled>
                <template v-slot:label>
                  <h5 class="radio-des">
                    Host
                    <span>(Example: Any food or accommodation businesses who is looking for free manpower to helf their business)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="volunteers" color="success" disabled>
                <template v-slot:label>
                  <h5 class="radio-des">
                    Volunteers
                    <span>(Example: Any individual who wants to travel and stay free, eat free, and learn new work experience internationally)</span>
                  </h5>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
        <div class="login-right-sec">
          <h2>
            Register as
            <nuxt-link to="/how-it-works/information-for-food-partners" target="_blank">Food Partner</nuxt-link>
          </h2>
          <p>Just 3 steps to begin your Save food and Save Money Journey</p>
          <div class="food-partner-instruction">
            <div class="instruction-inner">
              <p class="instuction-content">Store and contact details</p>
              <p class="top-icon">1</p>
            </div>
            <div class="instruction-inner">
              <p class="instuction-content">Bank details</p>
              <p class="top-icon">2</p>
            </div>
            <div class="instruction-inner">
              <p class="instuction-content">Other informations</p>
              <p class="top-icon">3</p>
            </div>
          </div>
          <div class="login-form-sec">
            <v-form ref="form">
              <v-text-field
                label="Email ID"
                v-model="UserEmail"
                :rules="[rules.required, rules.email]"
                outlined
                name="UserEmail"
                type="email"
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                v-model="UserPassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="UserPassword"
                label="Password"
                outlined
                @click:append="show1 = !show1"
                class="login-form-feild"
              ></v-text-field>
              <v-text-field
                v-model="ConfirmPassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.repass]"
                :type="show1 ? 'text' : 'password'"
                name="ConfirmPassword"
                label="Confirm Password"
                outlined
                @click:append="show1 = !show1"
                class="login-form-feild"
              ></v-text-field>
              <div class="text-center">
                <v-alert v-model="error" type="error" dismissible outlined text>{{errorMsg}}</v-alert>
                <v-btn
                  rounded
                  color="#104388"
                  x-large
                  dark
                  class="login-sub"
                  @click="submit"
                  :loading="loading"
                >Continue</v-btn>
                <p class="create-acc">
                  Already have an account?
                  <nuxt-link to="/account/login">Login</nuxt-link>
                </p>
              </div>
              <div class="login-policy text-center">
                <p>
                  By logging into an account you are agreeing with our
                  <a
                    href="#"
                  >Term and Conditions</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      ex8: "marketing-partner",
      error: false,
      errorMsg: null,
      loading: false,
      valid: false,
      StoreName: "test",
      UserEmail: "",
      UserPassword: "",
      ConfirmPassword: "",
      rules: {
        required: value => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
        min: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        repass: confirmation =>
          confirmation === this.UserPassword || "Passwords must match"
      }
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const uniqueEmail = await this.$axios.post(
          "Mobile/Partner/CheckMailUnique",
          { UserEmail: this.UserEmail }
        );
        if (uniqueEmail.data.code == 400) {
          this.error = true;
          this.errorMsg = uniqueEmail.data.message;
          this.loading = false;
          return;
        }
        try {
          this.$store.commit("SET_USER_DATA", this.StoreName);
          this.$store.commit("SET_USER_EMAIL", this.UserEmail);
          this.$store.commit("SET_USER_PASSWORD", this.UserPassword);
          this.$router.push("/account/food-partner-registration");
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
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0 !important;
}
.v-item--active h5.radio-des {
    color: #4caf50;
}
p.forgot-pass > a,
.login-policy > p > a {
  color: #104388;
  text-decoration: none;
}
.login-policy > p {
  font-size: 20px;
  font-weight: 500;
  margin: 3em 0 1.5em;
}
p.forgot-pass {
  text-align: right;
  font-size: 20px;
  font-weight: 500;
  margin-top: -15px;
  margin-bottom: 1.5em;
}
p.create-acc {
  font-size: 20px;
  font-weight: 500;
  color: #104388;
}
p.create-acc > a {
  text-decoration: none;
  color: orange;
}
button.login-sub {
  margin-bottom: 1.5em;
  width: 250px;
  text-transform: capitalize;
  font-size: 24px !important;
  font-weight: 500;
  margin-top: 1em;
}
.login-left-sec {
  padding: 5em 2em;
  text-align: center;
  color: #fff;
}
.login-right-sec {
  padding: 5em 2em;
}
.login-left-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1em 0 1.5em;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(to left, #fff 50%, #104388 50%);
}
.left-components > h4 {
  width: 70%;
  margin: auto;
  font-weight: 400;
  margin-bottom: 3em;
}
.left-components > img {
  width: 45%;
  margin-bottom: 1.5em;
}
.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
  margin-bottom: 2.5em;
}
.v-application--is-ltr .v-input--selection-controls__input {
  align-self: baseline;
}
h5.radio-des {
  color: #ffffffd9;
  font-weight: 400;
  font-size: 16px;
}
h5.radio-des > span {
  font-weight: 300;
  display: block;
}
.login-page-inner {
  background: #eaedf4;
}
.login-right-sec > h2 {
  color: #104388;
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 10px;
}
.login-right-sec > p {
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 2em;
}
.food-partner-instruction {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 3em auto 2em;
  text-align: center;
  grid-gap: 1.5em;
  padding: 0 3em;
}
p.top-icon {
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  background: #fba705;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: auto;
}
.instruction-inner {
  background: #24b149;
  position: relative;
  border-radius: 7px;
  padding: 2.2em 1em 0.5em;
  width: 125px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
}
p.instuction-content {
  color: #fff;
  line-height: 1.3;
}
@media (max-width: 1200px) {
  .left-components > h4 {
    width: 100%;
  }
  .left-components > img {
    width: 75%;
  }
  p.create-acc,
  .login-policy > p,
  p.forgot-pass {
    font-size: 16px;
  }
  .instruction-inner {
    padding: 2.2em 1em 1.5em;
    font-size: 16px;
    width: auto;
  }
  .food-partner-instruction {
    grid-gap: 0.5em;
    padding: 0;
  }
}
@media (max-width: 1023px) {
  .instruction-inner {
    padding: 2.2em 3px 1.5em;
  }
}
@media (max-width: 767px) {
  .login-left-right {
    grid-template-columns: 1fr;
    background: linear-gradient(to top, #fff 50%, #104388 50%);
  }
}
</style>