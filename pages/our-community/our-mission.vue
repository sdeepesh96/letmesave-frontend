<template>
  <div>
    <InnerBanner />
    <v-container>
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
            class="inner-breadcrumbs"
          >{{item.text}}</v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <h2 class="page-head">Our mission</h2>
      <div class="mission-content">
        <div class="foodpartner-sec">
          <h1>Why such a mission?</h1>
          <h3>Look at the bigger picture that United Nations reminds us</h3>
        </div>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host">
            <div class="marketing">
              <img src="~/assets/our-mission.jpg" />
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host">
            <v-list>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Roughly one third of the food produced in the world for human consumption every year — approximately 1.3 billion tonnes — gets lost or wasted.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Food losses and waste amounts to roughly US$ 680 billion in industrialized countries and US$ 310 billion in developing countries.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>In developing countries 40% of food losses occur at post-harvest and processing levels while in industrialized countries more than 40% of losses happen at retail and consumer levels.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Reducing food waste that helps to slow down global warming, lowers the carbon footprint, conserves energy and resources, preventing pollution and transportations.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <div class="mission-foot">
          <p>In some way, these facts could easily be addressed. If there is a platform that can help to balance about how this 'surplus' food can be distributed amongst food needy, travelers and many other local consumers then it would work. Thus, Letme-save.com born.</p>
        </div>
        <div class="mission-table">
          <div>
            <div>
              <h4>As a food consumer</h4>
              <p>By saving surplus food, as an individual, you are not only saving your money but you are doing your small bit to look after the environment.</p>
            </div>
          </div>
          <div>
            <div>
              <h4>As a food seller</h4>
              <p>At the same time, the supermarkets-retailers-farmers-any kind of food business can generate some useful revenue whilst not feeling guilty to waste the food.</p>
            </div>
          </div>
        </div>
        <div class="mission-foot">
          <p>Our apps and web serve the same.</p>
          <p
            style="margin-top: 15px;"
          >If everyone come forward with a small goal “Letme-SAVE” then Small goals will make a big difference. That is the mission of Letme-save.com.</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import InnerBanner from "~/components/InnerBanner";
export default {
  components: {
    InnerBanner,
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Our community",
        disabled: true,
        href: "#",
      },
      {
        text: "Our mission",
        disabled: true,
        href: "#",
      },
    ],
  }),
};
</script>

<style scoped>
.banner-search {
  background-image: url("../../assets/listing-banner.jpg");
  background-position: center 15%;
}
.mission-content h2 {
  margin-top: 1em;
  text-align: center;
  font-weight: 400;
  color: #104388;
  padding-bottom: 1em;
  font-size: 28px;
}
.mission-content h4 {
  margin-bottom: 0.5em;
  font-size: 20px;
  font-weight: 500;
  color: #104388;
}
.foodpartner-sec {
  background: #88b5d7;
  text-align: center;
  padding: 3em 0;
  margin-top: 5px;
  margin-bottom: 2em;
}
.foodpartner-sec h3 {
  color: #2f75b5;
  font-weight: 400;
  font-size: 32px;
}
.marketing img {
  width: 100%;
}
.marketing {
  text-align: center;
  margin: 2em 0;
}
.foodpartner-sec h1 {
  font-size: 65px;
  text-transform: uppercase;
  line-height: 1;
  padding: 15px 0;
}
.mission-content p {
  margin-bottom: 0;
}
.mission-content .v-list {
  padding-left: 0;
}
.mission-content .mission-list {
  margin-right: 10px !important;
}
.mission-content .v-list-item__title {
  overflow: unset;
  line-height: 2;
  white-space: normal;
}
.mission-table p {
  padding: 0;
}
.mission-table > div {
  box-shadow: 0 0 10px rgba(16, 67, 136, 0.30196);
  padding: 40px 30px;
  transition: all 0.35s ease-in-out;
  background: #fff;
  border-radius: 5px;
}
.mission-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 2em 0;
}
.mission-foot {
  text-align: center;
  margin-bottom: 2em;
  font-size: 18px;
  font-weight: 500;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
.who-host.col-sm-6.col-md-6.col-12 {
  margin: auto;
}
@media (max-width: 767px) {
  .mission-table {
    grid-template-columns: 1fr;
  }
  .mission-content h2 {
    font-size: 24px;
  }
}
</style>