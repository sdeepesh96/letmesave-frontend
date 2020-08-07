<template>
  <div>
    <div class="profile-sec">
      <v-container>
        <h4>Feedback</h4>
      </v-container>
    </div>
    <v-container>
      <div class="row">
        <v-col cols="12" xs="12" sm="3" md="3" lg="3">
          <UserSidebar />
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9">
          <div class="profile-list">
            <h3>Send Feedback</h3>
            <v-form ref="form">
              <v-radio-group column class="mt-0" v-model="reason">
                <v-radio
                  v-for="(reasontype, i) in reasontypes"
                  :key="i"
                  :label="`${reasontype.name}`"
                  :value="i"
                  color="#104388"
                ></v-radio>
              </v-radio-group>
              <v-textarea outlined label="Enter Comment" v-model="feedback"></v-textarea>
              <div class="text-center">
                <v-btn
                  color="#104388"
                  x-large
                  dark
                  width="100%"
                  class="login-sub"
                  @click="submit"
                  :loading="loading"
                >Send Feedback</v-btn>
                <v-snackbar v-model="snackbar" top color="#0f4387">
                  Feedback Sent Sucessfully
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
      errorMsg: null,
      loading: false,
      valid: false,
      feedback: "",
      reason: "",
      reasontypes: "",
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
            .post("/Mobile/User/Feedback", {
              Id: this.$store.state.userData.id.toString(),
              AccessToken: this.$store.state.userData.userAccessToken,
              description: this.feedback,
              feedback_id: this.reason.toString(),
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.snackbar = true;
                this.feedback = "";
              }
            });
        } catch (e) {
          console.log(e);
        }
        this.loading = false;
      }
    },
  },
  async mounted() {
    try {
      await this.$axios
        .post("GetSearchValue", { ParentId: "103" })
        .then((response) => {
          this.reasontypes = response.data.data;
          //   this.storetypes.pop();
        });
    } catch (e) {
      console.log(e);
    }
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