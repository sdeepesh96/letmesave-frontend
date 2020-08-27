<template>
  <v-footer dark class="let-foot">
    <div class="footer-top">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>How Letme-save.com works</v-subheader>
              <v-list-item>
                <nuxt-link
                  to="/how-it-works/information-for-food-partners"
                >Information for food partners</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-users">Information for users</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-host">Information for host</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/information-for-volunteers">Information for volunteers</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/earn-with-us">Earn with us</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/how-it-works/care-for-earth">Care for earth</nuxt-link>
              </v-list-item>
              <v-list-item color="#24b149 !important">
                <nuxt-link to="/how-it-works/faq">FAQ</nuxt-link>
              </v-list-item>
              <v-list-item color="#24b149 !important">
                <nuxt-link to="/how-it-works/food-alergies">Food alergies</nuxt-link>
              </v-list-item>
              <v-list-item color="#24b149 !important">
                <nuxt-link to="/how-it-works/safety">Safety</nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Our community</v-subheader>

              <v-list-item color="#24b149 !important">
                <nuxt-link to="/listing">Find food</nuxt-link>
              </v-list-item>
              <v-list-item color="#24b149 !important">
                <nuxt-link to="/listing">Find offer</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/our-community/message-from-our-founder">Message from our founder</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/our-community/our-mission">Our mission</nuxt-link>
              </v-list-item>
              <v-list-item>Blog</v-list-item>
              <v-list-item>
                <nuxt-link to="/our-community/since-youre-here">Since you're here</nuxt-link>
              </v-list-item>
              <v-list-item>Gallery</v-list-item>
              <v-list-item>
                <nuxt-link to="/our-community/spread-a-word">Spread a word</nuxt-link>
              </v-list-item>
              <v-list-item>Contact Us</v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Login/Register as a</v-subheader>
              <v-list-item>
                <nuxt-link :to="{ path: '/account/login', query: { role: '2' } }">Food partner</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link :to="{ path: '/account/login', query: { role: '1' } }">User</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link :to="{ path: '/account/login', query: { role: '4' } }">Host</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link :to="{ path: '/account/login', query: { role: '5' } }">Volunteers</nuxt-link>
              </v-list-item>
              <v-list-item color="#24b149 !important">
                <nuxt-link
                  :to="{ path: '/account/login', query: { role: '3' } }"
                >Marketing ambassador</nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <v-list>
              <v-subheader>Legal</v-subheader>
              <v-list-item>
                <nuxt-link to="/legal/terms-and-conditions">Terms and conditions</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/legal/privacy-policy">Data and privacy policy</nuxt-link>
              </v-list-item>

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
              <a href="https://imaginetventures.com" target="_blank">ImagiNET Ventures</a>
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
  },
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
