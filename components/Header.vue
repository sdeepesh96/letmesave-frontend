<template>
  <div class="head-shad">
    <v-container class="header-menu">
      <v-toolbar flat height="75px">
        <v-toolbar-title class="head-logo">
          <nuxt-link to="/">
            <img src="~/assets/Logo.png" alt="logo" />
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on">
                  How it works
                  <v-icon right dark>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="menu-style">
                <nuxt-link to="/how-it-works/information-for-food-partners">
                  <v-list-item>Information for food partners</v-list-item>
                </nuxt-link>
                <nuxt-link to="/how-it-works/information-for-users">
                  <v-list-item>Information for users</v-list-item>
                </nuxt-link>

                <nuxt-link to="/how-it-works/information-for-hosts">
                  <v-list-item>Information for host</v-list-item>
                </nuxt-link>
                <nuxt-link to="/how-it-works/information-for-volunteers">
                  <v-list-item>Information for volunteers</v-list-item>
                </nuxt-link>
                <nuxt-link to="/how-it-works/earn-with-us">
                  <v-list-item>Earn with us</v-list-item>
                </nuxt-link>
                <nuxt-link to="/how-it-works/care-for-earth">
                  <v-list-item>Care for earth</v-list-item>
                </nuxt-link>
                <nuxt-link to="/how-it-works/faq">
                  <v-list-item>FAQ</v-list-item>
                </nuxt-link>
              </v-list>
            </v-menu>
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on">
                  Our community
                  <v-icon right dark>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list class="menu-style">
                <nuxt-link to="/our-community/message-from-our-founder">
                  <v-list-item>Message from our founder</v-list-item>
                </nuxt-link>
                <nuxt-link to="/our-community/our-mission">
                  <v-list-item>Our mission</v-list-item>
                </nuxt-link>
                <nuxt-link to="/our-community/since-youre-here">
                  <v-list-item>Since you’re here</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Blog</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Gallery</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Contact us</v-list-item>
                </nuxt-link>
              </v-list>
            </v-menu>
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on">Spread a word</v-btn>
              </template>
            </v-menu>
          </div>
          <div class="menu-item" v-if="!$store.state.userData">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn small color="#104388" class="ma-2 white--text" v-on="on">
                  Login/Register
                  <v-icon right dark>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="menu-style">
                <nuxt-link :to="{ path: '/account/login', query: { role: '1' } }">
                  <v-list-item>Login/Register as user</v-list-item>
                </nuxt-link>
                <nuxt-link :to="{ path: '/account/login', query: { role: '2' } }">
                  <v-list-item>Login/Register as food partner</v-list-item>
                </nuxt-link>
                <nuxt-link :to="{ path: '/account/login', query: { role: '3' } }">
                  <v-list-item>Login/Register as marketing partner</v-list-item>
                </nuxt-link>
                <nuxt-link :to="{ path: '/account/login', query: { role: '4' } }">
                  <v-list-item>Login/Register as a host</v-list-item>
                </nuxt-link>
                <nuxt-link :to="{ path: '/account/login', query: { role: '5' } }">
                  <v-list-item>Login/Register as a volunteer</v-list-item>
                </nuxt-link>
              </v-list>
            </v-menu>
          </div>
          <div v-else class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn small color="#104388" class="ma-2 white--text" v-on="on">
                  My Account
                  <v-icon right dark>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="menu-style">
                <nuxt-link to="/user/profile">
                  <v-list-item>My Profile</v-list-item>
                </nuxt-link>
                <nuxt-link to="/user/my-orders">
                  <v-list-item>My Orders</v-list-item>
                </nuxt-link>
                <nuxt-link to="/user/activities">
                  <v-list-item>Activities</v-list-item>
                </nuxt-link>
                <nuxt-link to="/user/settings">
                  <v-list-item>Settings</v-list-item>
                </nuxt-link>
                <!-- <nuxt-link to="#">
                  <v-list-item>Invite Friends</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Refer a Store</v-list-item>
                </nuxt-link>-->
                <nuxt-link to="/user/feedback">
                  <v-list-item>Send Feedback</v-list-item>
                </nuxt-link>
                <v-btn @click="logout" small color="#104388" class="ma-2 white--text">
                  Logout
                  <v-icon small right dark>mdi-logout</v-icon>
                </v-btn>
              </v-list>
            </v-menu>
            <!-- <v-btn
              @click="logout"
              small
              color="#104388"
              class="ma-2 white--text"
            >
              Logout
              <v-icon small right dark>mdi-logout</v-icon>
            </v-btn>-->
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn small color="#24b149" class="ma-2 white--text" v-on="on">
                  Lists
                  <v-icon right dark>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="menu-style">
                <nuxt-link to="#">
                  <v-list-item>Save food offer</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Sale food offer</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Hosts</v-list-item>
                </nuxt-link>
                <nuxt-link to="#">
                  <v-list-item>Volunteers</v-list-item>
                </nuxt-link>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar-items>
        <v-toolbar @click.stop="drawer = !drawer" class="hidden-md-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar>
      </v-toolbar>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>How it works</v-list-item-title>
          </template>
          <v-list class="menu-style">
            <nuxt-link to="/how-it-works/information-for-food-partners">
              <v-list-item>Information for food partners</v-list-item>
            </nuxt-link>
            <nuxt-link to="/how-it-works/information-for-users">
              <v-list-item>Information for users</v-list-item>
            </nuxt-link>

            <nuxt-link to="/how-it-works/information-for-hosts">
              <v-list-item>Information for host</v-list-item>
            </nuxt-link>
            <nuxt-link to="/how-it-works/information-for-volunteers">
              <v-list-item>Information for volunteers</v-list-item>
            </nuxt-link>
            <nuxt-link to="/how-it-works/earn-with-us">
              <v-list-item>Earn with us</v-list-item>
            </nuxt-link>
            <nuxt-link to="/how-it-works/care-for-earth">
              <v-list-item>Care for earth</v-list-item>
            </nuxt-link>
            <!-- <nuxt-link to="/how-it-works/food-alergies">
              <v-list-item>Food alergies</v-list-item>
            </nuxt-link>-->
            <nuxt-link to="/how-it-works/faq">
              <v-list-item>FAQ</v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Our community</v-list-item-title>
          </template>
          <v-list class="menu-style">
            <nuxt-link to="/our-community/message-from-our-founder">
              <v-list-item>Message from our founder</v-list-item>
            </nuxt-link>
            <nuxt-link to="/our-community/our-mission">
              <v-list-item>Our mission</v-list-item>
            </nuxt-link>
            <nuxt-link to="/our-community/since-youre-here">
              <v-list-item>Since you’re here</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Blog</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Gallery</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Contact us</v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
        <v-list-group class="no-sub-menu">
          <template v-slot:activator>
            <nuxt-link to="#">
              <v-list-item-title>Spread a word</v-list-item-title>
            </nuxt-link>
          </template>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Login/Register</v-list-item-title>
          </template>
          <v-list class="menu-style">
            <nuxt-link to="#">
              <v-list-item>Login/Register as food partner</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Login/Register as user</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Login/Register as marketing partner</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Login/Register as a host</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Login/Register as a volunteer</v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Lists</v-list-item-title>
          </template>
          <v-list class="menu-style">
            <nuxt-link to="#">
              <v-list-item>Save food offer</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Sale food offer</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Hosts</v-list-item>
            </nuxt-link>
            <nuxt-link to="#">
              <v-list-item>Volunteers</v-list-item>
            </nuxt-link>
          </v-list>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import cookies from "vue-cookies";

export default {
  data() {
    return {
      drawer: null,

      test: false,
    };
  },
  methods: {
    logout() {
      this.$store.commit("SET_USER_DATA", null);
      // cookies.remove("userData");
      cookies.remove("id");
      cookies.remove("userID");
      cookies.remove("userAccessToken");
      cookies.remove("userName");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.menu-item {
  margin: auto;
}
.menu-item .v-btn.v-size--small {
  text-transform: unset;
  font-size: 14px;
  font-weight: 600;
}
.menu-item .v-btn > .v-btn__content .v-icon {
  margin: 2px 0px 0 3px;
  font-size: 26px;
}
.menu-style .v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: 40px;
  outline: none;
  padding: 0 10px;
  position: relative;
  text-decoration: none;
  font-size: 14px;
}
a {
  text-decoration: none;
  color: #000000de;
}
.menu-style a {
  text-decoration: none;
  color: #104388;
}
.menu-style a:hover {
  color: #fff;
}
.menu-style .v-list-item:hover {
  background: #104388;
  color: #fff !important;
}
.v-list-group.no-sub-menu > div > div {
  display: none;
}
.header-menu {
  padding: 0 12px;
}
.head-shad {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.head-logo img {
  width: 220px;
}

@media (max-width: 1200px) {
  .menu-item .v-btn.v-size--small {
    padding: 2px;
    margin: 3px !important;
  }
}

@media (max-width: 1023px) {
  .head-logo img {
    width: 180px;
  }
  .hidden-md-and-up {
    box-shadow: unset;
  }
  .hidden-md-and-up .v-icon.v-icon {
    margin-left: auto;
  }
}
</style>
