<template>
  <div>
    <div class="profile-sec">
      <v-container>
        <h4>Settings</h4>
      </v-container>
    </div>
    <v-container>
      <div class="row">
        <v-col cols="12" xs="12" sm="3" md="3" lg="3">
          <UserSidebar />
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9">
          <div class="profile-list">
            <h3>Change Password</h3>
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
                <v-btn
                  color="#104388"
                  x-large
                  dark
                  width="100%"
                  class="login-sub"
                  @click="submit"
                  :loading="loading"
                >Update Password</v-btn>
                <v-snackbar v-model="snackbar" top color="#0f4387">
                  Password Updated
                  <template>
                    <v-btn text @click="snackbar = false" color="#fff">Close</v-btn>
                  </template>
                </v-snackbar>
              </div>
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
      snackbar: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      error: false,
      errorMsg: null,
      loading: false,
      valid: false,
      UserPassword: "",
      ConfirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min 8 characters with at least one capital letter and a number"
          );
        },
        repass: (confirmation) =>
          confirmation === this.UserPassword || "Passwords must match",
      },
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$axios
            .post("/ResetPassword", {
              Id: this.$store.state.userData.id.toString(),
              AccessToken: this.$store.state.userData.userAccessToken,
              Password: this.UserPassword,
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.snackbar = true;
                this.$refs.form.reset();
              }
            });
        } catch (e) {
          console.log(e);
        }
        this.loading = false;
      }
    },
  },
  mounted() {
    this.order = this.$store.state.cart.productData;
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/login");
    }
  },
};
</script>
<style scoped >
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
.profile-list form {
  margin: 2em 0;
}
</style>