<template>
  <div>
    <BannerSearch />
    <div class="category-body">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2"></v-col>
          <v-col cols="12" sm="8">
            <div class="category-head">
              <h4>Quick Searches</h4>
              <p>Discover resturents by type of meal</p>
            </div>
            <div class="category-search">
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/breakfast.png" />
                  <p>Breakfast</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/lunch.png" />
                  <p>Lunch</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/dinner.png" />
                  <p>Dinner</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/coffee.png" />
                  <p>Cafés</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/bucket.png" />
                  <p>Luxury Dining</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/listing">
                  <img src="../assets/buffet.png" />
                  <p>Buffet Places</p>
                </nuxt-link>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="2"></v-col>
        </v-row>
      </v-container>
    </div>
    <Offer />
    <!-- <BestSale/> -->
    <div class="discover-sec">
      <h4>
        <nuxt-link to="/our-community/since-youre-here">Discover more about Letme-save.com</nuxt-link>
      </h4>
      <p>Why do I need to be part of this community?</p>
    </div>
    <v-container>
      <div class="opp-center-head">
        <h4>Opportunity Center</h4>
        <v-row>
          <v-col cols="6" class="mob-col">
            <nuxt-link to="/how-it-works/earn-with-us">
              <div class="opp-center">
                <div class="opp-center-img">
                  <img src="~/assets/pic-10.jpg" />
                </div>
                <div class="opp-center-con">
                  <p>Earn with us</p>
                  <p class="sub">"Become our marketing ambassador"</p>
                </div>
              </div>
            </nuxt-link>
          </v-col>
          <v-col cols="6" class="mob-col">
            <nuxt-link to="/how-it-works/care-for-earth">
              <div class="opp-center">
                <div class="opp-center-img">
                  <img src="~/assets/pic-11.jpg" />
                </div>
                <div class="opp-center-con">
                  <p>Care for earth</p>
                  <p class="sub">"Become our green ambassador"</p>
                </div>
              </div>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Testimonial />
    <div class="app-store">
      <v-container>
        <v-row>
          <v-col cols="4" class="app-content">
            <div class="app-left">
              <h5>Download the Letme-save app now</h5>
              <h4>Saving food is now in your hands!</h4>
              <p>Download letme-save app and get to know all the information about food saving, restaurants that offer food or become a Volunteer, Food Partner, Host, Marketing Partner or an Ambassador.</p>
              <div class="app-link">
                <nuxt-link to="#">
                  <img src="~/assets/appstore.png" />
                </nuxt-link>
                <nuxt-link to="#">
                  <img src="~/assets/playstore.png" />
                </nuxt-link>
              </div>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="app-screen">
              <img src="~/assets/appscreens.jpg" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import BannerSearch from "~/components/BannerSearch";
import Offer from "~/components/Offer";
import Testimonial from "~/components/Testimonial";
// import BestSale from "~/components/BestSale";

export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),
  components: {
    BannerSearch,
    Offer,
    Testimonial,
    // BestSale,
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.category-search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-top: 40px;
  text-align: center;
}
.category-body {
  background: #ebedf3;
  padding: 25px 0;
}

.category-search img {
  width: 36px;
}
.category-search p {
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
}
.opp-center-con p {
  margin: 0;
  font-size: 24px;
}
.opp-center-con p.sub {
  font-size: 18px;
  margin-top: 5px;
}
.category-head h4 {
  text-align: center;
  font-size: 42px;
  font-weight: 400;
}
.category-head p {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.discover-sec {
  background-image: url("../assets/pic-9.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  margin-top: 2em;
  padding: 3em 0;
}
.discover-sec p {
  font-size: 32px;
  color: #fff;
  font-weight: 300;
  margin-top: 0.5em;
}
.discover-sec h4 {
  font-size: 48px;
  font-weight: 300;
  color: #fff;
}
.opp-center {
  position: relative;
}
.opp-center-con {
  color: #fff;
  bottom: 25%;
  position: absolute;
  padding: 0 30px 0;
  font-size: 28px;
  font-weight: 400;
}
.opp-center-head {
  padding: 4em 0 4em;
}
.opp-center-head h4 {
  font-size: 42px;
  text-align: center;
  font-weight: 400;
  color: #104388;
  padding-bottom: 1em;
}
.opp-center-img img {
  width: 100%;
}
.mobile-app {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.bottom-phone {
  margin-top: -5em;
  margin-bottom: -10px;
}
.app-store .container,
.app-store .col,
.app-store .col-6 {
  padding: 0 12px;
}
.app-content {
  margin: auto;
}
.app-left h4 {
  font-size: 42px;
  font-weight: 500;
  line-height: 1.3;
}
.app-left h5 {
  color: #104388;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.app-left p {
  margin-top: 10px;
  color: #333;
  line-height: 1.8;
}
.app-link {
  display: grid;
  margin-top: 3em;
  grid-template-columns: 1fr 1fr;
}
.app-link img {
  width: 100%;
}
.app-screen > img {
  width: 100%;
}
.app-store {
  padding: 4em 0;
}
a {
  text-decoration: none;
  color: unset;
}

/* @media (min-width: 1200px) {
  .app-left {
    padding: 0 6em;
  }
} */
@media (max-width: 1023px) {
  .mobile-app img {
    width: 100%;
  }
  /* .app-left {
    padding: 2em 0;
  } */
  .app-link {
    margin-top: 1em;
  }
  .app-left h4 {
    font-size: 24px;
  }
}
@media (max-width: 767px) {
  .category-search {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .discover-sec p,
  .category-head p {
    font-size: 18px;
  }
  .discover-sec h4,
  .opp-center-head h4,
  .category-head h4,
  .app-left h4 {
    font-size: 28px;
  }
  .mob-col,
  .app-store .col.col-6 {
    max-width: 100%;
    flex: unset;
  }
}
</style>
