<template>
  <div>
    <div class="set-password-sec">
      <h3>Set Password</h3>
      <v-form ref="form">
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
          <!-- <v-alert v-model="error" type="error" dismissible outlined text>{{errorMsg}}</v-alert> -->
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
            <a href="#">Term and Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </v-form>
    </div>
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
      error: false,
      errorMsg: null,
      loading: false,
      valid: false,
      UserPassword: "",
      UserData: "",
      ConfirmPassword: "",
      rules: {
        required: value => !!value || "Required.",
        min: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
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
        try {
          await this.$axios
            .post("/mobile/partner/SetPassword", {
              Password: this.UserPassword,
              UserData: this.UserData
            })
            .then(response => {
              this.$router.push("/account/login");
            });
        } catch (e) {
          this.error = true;
          //   this.errorMsg = e.data.message;
        }
        this.loading = false;
      }
    }
  },
  created() {
    this.UserData = this.$route.query.userdata;
  }
};
</script>
<style scoped>
.set-password-sec {
  margin: 5em auto;
  width: 500px;
  border: 1px solid #fff;
  padding: 35px 35px 35px 25px;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.1);
}
.set-password-sec h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 1em 0px 1.5em;
  color: #104388;
}
button.login-sub {
  margin-bottom: 1.5em;
  width: 250px;
  text-transform: capitalize;
  font-size: 24px !important;
  font-weight: 500;
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
.login-policy > p {
  font-size: 20px;
  font-weight: 500;
  margin: 1.5em 0;
}
p.forgot-pass > a,
.login-policy > p > a {
  color: #104388;
  text-decoration: none;
}
</style>