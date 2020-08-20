<template>
  <div class="user-sidebar">
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/profile">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/login.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/my-orders">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/receipts.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My Orders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/activities">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/activitya-svg.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Activities</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/settings">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/settings.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/terms.svg" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Terms of Use</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <div @click="inviteFriend = true">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/invite.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Invite Friends</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <div @click="referStore = true">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/refer.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Refer a Store</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/feedback">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/feedback.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Send Feedback</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <div @click="logoutpop = true">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/logout.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
    <v-dialog v-model="logoutpop" persistent max-width="400px">
      <v-card class="invite-and-refer">
        <v-card-title>
          <span class="headline">Log Out</span>
          <div @click="logoutpop = false">
            <img src="~/assets/close.svg" />
          </div>
        </v-card-title>
        <v-card-text>
          <!-- <v-container> -->
          <p>Are you sure you want to logout</p>
          <!-- </v-container> -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" dark depressed @click="logoutpop = false">No</v-btn>
            <v-btn color="red darken-1" dark depressed @click="logout">Yes</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="inviteFriend" persistent max-width="400px">
      <v-card class="invite-and-refer">
        <v-card-title>
          <span class="headline">Invite Friends</span>
          <div @click="inviteFriend = false">
            <img src="~/assets/close.svg" />
          </div>
        </v-card-title>
        <v-card-text>
          <!-- <v-container> -->
          <v-form ref="form">
            <v-text-field
              label="Email ID"
              v-model="UserEmail"
              :rules="[rules.required]"
              outlined
              name="UserEmail"
              type="email"
              class="login-form-feild"
            ></v-text-field>
          </v-form>
          <!-- </v-container> -->
          <div class="text-center" style="margin-bottom: 1em;">
            <v-btn color="#104388" rounded x-large dark width="65%" @click="friendInvite">Send</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="friendStatus" top color="#0f4387">
      Invite Friend is Successfully
      <template>
        <v-btn text @click="friendStatus = false" color="#fff">Close</v-btn>
      </template>
    </v-snackbar>
    <v-dialog v-model="referStore" persistent max-width="400px">
      <v-card class="invite-and-refer">
        <v-card-title>
          <span class="headline">Refer a Store</span>
          <div @click="referStore = false">
            <img src="~/assets/close.svg" />
          </div>
        </v-card-title>
        <v-card-text>
          <!-- <v-container> -->
          <v-form ref="form">
            <v-text-field
              label="Email ID"
              v-model="UserEmail"
              :rules="[rules.required]"
              outlined
              name="UserEmail"
              type="email"
              class="login-form-feild"
            ></v-text-field>
          </v-form>
          <!-- </v-container> -->
          <div class="text-center" style="margin-bottom: 1em;">
            <v-btn color="#104388" rounded x-large dark width="65%" @click="storeRefer">Send</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="storeStatus" top color="#0f4387">
      Store Referred Successfully
      <template>
        <v-btn text @click="storeStatus = false" color="#fff">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
  data: () => ({
    friendStatus: false,
    storeStatus: false,
    inviteFriend: false,
    logoutpop: false,
    referStore: false,
    error: false,
    errorMsg: null,
    loading: false,
    valid: false,
    UserEmail: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    async storeRefer() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$axios
            .post("/Mobile/User/ReferStoreOrFriend", {
              Id: this.$store.state.userData.id.toString(),
              AccessToken: this.$store.state.userData.userAccessToken,
              ReferMail: this.UserEmail,
              type: "2",
              UserRole: "",
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.referStore = false;
                this.storeStatus = true;
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    async friendInvite() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$axios
            .post("/Mobile/User/ReferStoreOrFriend", {
              Id: this.$store.state.userData.id.toString(),
              AccessToken: this.$store.state.userData.userAccessToken,
              ReferMail: this.UserEmail,
              type: "1",
              UserRole: " ",
            })
            .then((response) => {
              if (response.data.code == 200) {
                this.inviteFriend = false;
                this.friendStatus = true;
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    logout() {
      this.$store.commit("SET_USER_DATA", null);
      // cookies.remove("userData");
      cookies.remove("id");
      cookies.remove("userID");
      cookies.remove("userAccessToken");
      cookies.remove("userName");
      this.$router.push("/");
      this.logoutpop = false;
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 10px;
}
.user-sidebar img {
  width: 24px;
}
.v-list.v-sheet.v-sheet--tile.theme--light.v-list--dense {
  margin: 0;
  padding: 4px 0;
}
.user-sidebar {
  padding: 3em 0;
}
.v-list-item__title {
  font-size: 16px !important;
}
.v-application .headline {
  font-size: 18px !important;
  line-height: 1.1 !important;
  color: #0f4387;
}
.invite-and-refer .v-card__title {
  display: flex;
  justify-content: space-between;
}
.invite-and-refer .v-card__title > div > img {
  width: 24px;
  cursor: pointer;
}
.invite-and-refer .v-card__text {
  padding: 20px 24px !important;
}
a.nuxt-link-exact-active.nuxt-link-active > div {
  background: #eaedf6;
}
.v-card__text p {
  font-size: 18px;
  color: #333;
  font-weight: 400;
}
@media (max-width: 767px) {
  .user-sidebar {
    padding: 0;
  }
}
</style>