<template>
  <v-footer dark class="let-foot">
    <div class="footer-top">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>How Letme-save.com works</v-subheader>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-food-partners"
                  >Information for food partners</nuxt-link
                >
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-users"
                  >Information for users</nuxt-link
                >
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-marketing-partners"
                  >Information for marketing partners</nuxt-link
                >
              </v-list-item>
              <v-list-item>Green awareness</v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/food-alergies"
                  >Food alergies</nuxt-link
                >
              </v-list-item>
              <v-list-item>Safty</v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/faq">FAQ</nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Our community</v-subheader>

              <v-list-item>Find food</v-list-item>
              <v-list-item>Find offers</v-list-item>
              <v-list-item>Green awareness</v-list-item>
              <v-list-item>Becomes our ambassadors</v-list-item>
              <v-list-item>Becomes our marketing partner</v-list-item>
              <v-list-item>Gallery</v-list-item>
              <v-list-item>
                <nuxt-link to="/our-community/our-mission"
                  >Our mission</nuxt-link
                >
              </v-list-item>
              <v-list-item>Contact Us</v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Login as a</v-subheader>

              <v-list-item>Food partner</v-list-item>
              <v-list-item>User</v-list-item>
              <v-list-item>Marketing partner</v-list-item>
              <v-list-item>Host</v-list-item>
              <v-list-item>Volunteer</v-list-item>

              <v-subheader style="margin-top:20px;">Join now as a</v-subheader>
              <v-list-item>Food partner</v-list-item>
              <v-list-item>User</v-list-item>
              <v-list-item>Marketing partner</v-list-item>
              <v-list-item>Host</v-list-item>
              <v-list-item>Volunteer</v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Legal</v-subheader>
              <v-list-item>Terms and conditions</v-list-item>
              <v-list-item>Data and privacy policy</v-list-item>

              <v-subheader style="margin-top:20px;">Follow us on</v-subheader>
              <v-list-item>
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-twitter</v-icon>
                <v-icon>mdi-instagram</v-icon>
                <v-icon>mdi-youtube</v-icon>
                <v-icon>mdi-linkedin</v-icon>
              </v-list-item>

              <v-subheader></v-subheader>
              <v-list-item>Career</v-list-item>
              <v-list-item>Press</v-list-item>
              <v-list-item>Blog</v-list-item>
              <v-list-item>Resource</v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-divider></v-divider>
    <v-container class="footer-copy">
      <div class="footer-bottom">
        <v-row>
          <v-col cols="12" sm="6">
            <div class="copyy">
              Copyright &copy; {{ new Date().getFullYear() }} Letme-save.com.
              All rights reserved.
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="designn">
              Designed by
              <a href="https://imaginetventures.com" target="_blank"
                >ImagiNET Ventures</a
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import cookies from "vue-cookies";
export default {
  name: "Footer",
  mounted() {
    // if (process.browser) {
    //   let localuserData = cookies.get("userData");
    //   if (localuserData) {
    //     this.$store.commit("SET_USER_DATA", localuserData);
    //   }
    // }
  }
};
</script>

<style scoped>
.theme--dark.v-footer {
  background-color: #282c2f;
}
.footer-top .theme--dark.v-list {
  background: unset;
}
.footer-top .v-list-item {
  min-height: unset;
  font-size: 14px;
}
.footer-top .v-subheader {
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  height: 40px;
}
.footer-top {
  width: 100%;
}
.footer-bottom {
  padding: 10px;
  width: 100%;
  border-top: 1px solid #ffffff38;
}
.designn {
  text-align: right;
}
a {
  text-decoration: none;
  color: unset;
}
.footer-top .v-icon.v-icon {
  margin: 0 10px 0 0;
}
.footer-copy {
  padding: 0 12px;
}
@media (max-width: 767px) {
  .copyy,
  .designn {
    text-align: left;
  }
}
</style>
