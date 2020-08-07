<template>
  <div class="login-page-inner">
    <v-container>
      <div class="login-left-right">
        <div class="login-left-sec">
          <div class="left-components">
            <!-- <img src="~/assets/logo-light.png" alt="light-logo" /> -->
            <h2 class="mb-10">Select your Role</h2>
            <v-radio-group
              @change="setRoleHeading(userRole)"
              v-model="userRole"
              column
              dark
            >
              <v-radio value="1" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    User
                    <span>(Example: Any food buyers or food customers)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="2" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    Food Partner
                    <span>(Example: Any food sellers or food businesses)</span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="3" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    Marketing Partner
                    <span>
                      (Example: Any individual or student or company who wants
                      to be our franchisee or marketing partner/agent)
                    </span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="4" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    Host
                    <span>
                      (Example: Any food or accommodation businesses who is
                      looking for free manpower to help their business)
                    </span>
                  </h5>
                </template>
              </v-radio>
              <v-radio value="5" color="success">
                <template v-slot:label>
                  <h5 class="radio-des">
                    Volunteers
                    <span>
                      (Example: Any individual who wants to travel and stay
                      free, eat free, and learn new work experience
                      internationally)
                    </span>
                  </h5>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
        <div class="login-right-sec">
          <p>Login to your account or register now.</p>
          <h2>Login {{ userRoleHeading }}</h2>
          <p>
            You can login using your letme-save.com account to access our
            services.
          </p>
          <div class="login-form-sec">
            <v-form ref="form">
              <v-text-field
                label="Email ID"
                v-model="UserEmail"
                type="email"
                name="UserEmail"
                :rules="[rules.required, rules.email]"
                outlined
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
              <p class="forgot-pass">
                <a href="#">Forgot Password?</a>
              </p>
              <div class="text-center">
                <v-alert
                  v-model="error"
                  type="error"
                  dismissible
                  outlined
                  text
                  >{{ errorMsg }}</v-alert
                >
                <v-btn
                  rounded
                  color="#104388"
                  x-large
                  dark
                  class="login-sub"
                  @click="submit"
                  :loading="loading"
                  >Login</v-btn
                >
                <p class="create-acc">
                  Don't have an account?
                  <nuxt-link to="/account/register">Create account</nuxt-link>
                </p>
              </div>
              <div class="social-login" v-if="userRole == 1">
                <p>Login with</p>
                <div class="social-image">
                  <a href="#">
                    <img src="~/assets/google.jpg" alt="light-logo" />
                  </a>
                  <a href="#">
                    <img src="~/assets/facebook.jpg" alt="light-logo" />
                  </a>
                </div>
              </div>
              <div class="login-policy text-center">
                <p>
                  By logging into an account you are agreeing with our
                  <a href="#">Term and Conditions</a> and
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
import cookies from "vue-cookies";

export default {
  name: "login",
  data() {
    return {
      userRole: "1",
      userRoleHeading: "as a User",
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      social: false,
      UserEmail: "deepeshsrs@gmail.com",
      UserPassword: "Ventures4001@",
      error: false,
      errorMsg: null,
      valid: false,
      loading: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  mounted() {
    this.userRole = this.$route.query.role;
    this.setRoleHeading(this.userRole);
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          // Logging in Request
          const { data } = await this.$axios.post("CheckLogin", {
            UserName: this.UserEmail,
            UserPassword: this.UserPassword,
            UserRole: this.userRole
          });
          //   Invalid Credentials
          if (data.code == 400) {
            this.error = true;
            this.errorMsg = data.message;
            this.loading = false;
            return;
          }
          //   Set user data in Cookies
          if (process.browser) {
            const { id, userID, userAccessToken, userName } = data.data;
            const userData = { id, userID, userAccessToken, userName };
            cookies.set("id", id, "1y");
            cookies.set("userID", userID, "1y");
            cookies.set("userAccessToken", userAccessToken, "1y");
            cookies.set("userName", userName, "1y");
            // Set Userdata in Store
            this.$store.commit("SET_USER_DATA", userData);
          }
          // Conditions
          if (this.userRole == 1) {
            this.$router.push("/");
          } else {
            if (data.data.approvedFlag == 1 && data.data.flag == 3) {
              this.$router.push("/partner-dashboard");
            } else if (data.data.approvedFlag == 1 && data.data.flag == 2) {
              const { id, userID, userAccessToken, userName } = data.data;
              this.$store.commit("SET_USER_DATA", {
                id,
                userID,
                userAccessToken,
                userName
              });
              this.$router.push(
                "/partner-dashboard/food-partnet-registration-2"
              );
            } else if (data.data.approvedFlag == 0) {
              this.$router.push("/account/food-partner-confirmation-pending");
            }
          }
        } catch (e) {
          // If login request fails
          this.error = true;
          this.errorMsg = e;
        }
        this.loading = false;
      }
    },
    setRoleHeading(role) {
      switch (role) {
        case "1":
          this.userRoleHeading = "as a User";
          break;

        case "2":
          this.userRoleHeading = "as a Food Partner";
          break;

        case "3":
          this.userRoleHeading = "as a Marketing Partner";
          break;

        case "4":
          this.userRoleHeading = "as a Host";
          break;

        case "5":
          this.userRoleHeading = "as a Volunteer";
          break;

        default:
          this.userRoleHeading = "";
          break;
      }
    }
  },
  middleware({ store, redirect }) {
    if (store.state.userData) {
      return redirect("/");
    }
  }
};
</script>

<style scoped>
p {
  color: #3b3b3b;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0 !important;
}
.login-left-sec h2 {
  font-weight: 400 !important;
  font-size: 26px;
  color: #ffffffd9;
}
p.forgot-pass > a,
.login-policy > p > a {
  color: #104388;
  text-decoration: none;
}
.v-item--active h5.radio-des {
  color: #4caf50;
}
.login-policy > p {
  font-size: 20px;
  font-weight: 500;
  margin: 1.5em 0;
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
}
.login-left-sec {
  padding: 5em 2em;
  text-align: center;
  color: #fff;
}
.login-right-sec {
  padding: 5em 2em;
}
.left-components > h2 {
  font-weight: 500;
}
.login-right-sec > p:first-child {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #104388;
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
.social-login {
  text-align: center;
  margin: 2.5em 0;
  /* display: none; */
}
.social-login > p {
  overflow: hidden;
  text-align: center;
  font-weight: 500;
  color: #104388;
  margin-bottom: 2em;
}
.social-login > p:before,
.social-login > p:after {
  background-color: #acacac;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
.social-login > p:before {
  right: 1.5em;
  margin-left: -50%;
}
.social-login > p:after {
  left: 1.5em;
  margin-right: -50%;
}
.social-image img {
  width: 100%;
}
.social-image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  width: 80%;
  margin: auto;
}
@media (max-width: 1200px) {
  .left-components > h4 {
    width: 100%;
  }
  .left-components > img {
    width: 75%;
  }
  .social-image[data-v-c3562c44] {
    grid-gap: 0.5em;
    width: 100%;
  }
  p.create-acc,
  .login-policy > p,
  p.forgot-pass {
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .login-left-right {
    grid-template-columns: 1fr;
    background: linear-gradient(to top, #fff 50%, #104388 50%);
  }
}
</style>
