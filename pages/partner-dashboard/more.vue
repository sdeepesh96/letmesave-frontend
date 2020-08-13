<template>
  <v-container>
    <v-alert
      :type="alertType"
      outlined
      dismissible
      class="mt-5"
      v-model="alert"
      >{{ alertMsg }}</v-alert
    >
    <v-row class="my-5">
      <v-col cols="12" sm="6">
        <h3 class="mb-5">Invite a Friend</h3>
        <v-text-field
          v-model="inviteEmail"
          outlined=""
          label="E-mail"
          required
        ></v-text-field>
        <v-btn color="#104388" dark @click="submit(1, inviteEmail)">
          Send
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <h3 class="mb-5">Refer a Store</h3>
        <v-text-field
          v-model="referEmail"
          outlined=""
          label="E-mail"
          required
        ></v-text-field>
        <v-btn color="#104388" dark @click="submit(2, referEmail)">
          Send
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "partner-dashboard",

  data() {
    return {
      inviteEmail: "",
      referEmail: "",
      alert: false,
      alertType: null,
      alertMsg: ""
    };
  },
  methods: {
    async submit(type, email) {
      try {
        await this.$axios
          .post("Mobile/partner/ReferStoreOrFriend", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            ReferMail: email,
            Type: type.toString()
          })
          .then(response => {
            if (response.data.code == 200) {
              this.alert = true;
              this.alertType = "success";
              this.alertMsg = "Email sent Successfully";
            } else {
              this.alert = true;
              this.alertType = "error";
              this.alertMsg = "response.data.message";
            }
          });
      } catch (error) {
        console.log(error);
        this.alert = true;
        this.alertType = "error";
        this.alertMsg = error;
      }
    }
  }
};
</script>

<style></style>
