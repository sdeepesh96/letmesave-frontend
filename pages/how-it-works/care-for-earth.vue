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
      <div class="mission-content">
        <h2>
          “Save the environment with us by becoming our
          green ambassador”
        </h2>
        <p>
          Letme-save.com launched global “green ambassadors program” to promote “ZERO WASTE OF THE
          FOOD” all around the world. In this program, any individual person (student or parent or group of
          friends or family or retired personnel or whatever your current role in the society) can help us and
          become Letme-save.com’s “Green ambassador” in your area.
        </p>
        <p>
          Our selected ambassadors will be invited to our headquarter in Norway for annual green awareness
          conferences to present themselves, to share their contributions and ideas to the rest of the world about
          green awareness.
        </p>

        <v-row style="margin-top: 3em;">
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host">
            <img src="~/assets/care-for-earth.jpeg" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host my-auto">
            <h4>Small contributions will make a big difference</h4>
            <p>Spread the word on social media</p>
            <p>Spread the word in person</p>
            <p>
              Spread the word to whoever the food provider is in your area, and help them to achieve Zero food
              waste
            </p>
            <p>
              To become our green ambassadors and special partners, please
              <nuxt-link to="#">contact us</nuxt-link>. This is part of our social
              responsibility program to achieve ZERO food waste.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="vol-ben">
      <v-container>
        <h2>Letme-save.com Green Awareness Program : Ambassadors and Warriors</h2>
        <h4 class="text-center">Food wastes</h4>
        <v-row>
          <v-col cols="12" sm="12" md="4" class="who-host">
            <p>can come from regular food businesses: like your own school/college/university canteens, company’s canteens, nearby hotels with food services, super markets, restaurants, private caterers, regular buffets etc.</p>
            <v-list>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>As a student, staff, teacher or parent or an individual who cross by every day the above mentioned the places,</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>You can spread a word about Letme-save.com or distribute fliers in their mail box or in person. It means a lot to fight against food waste in your area</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>Automatically, you become our ”Letme-save.com Green awareness ambassodor”.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <img src="~/assets/food-waste.png" />
          </v-col>
          <v-col cols="12" sm="12" md="4" class="who-host">
            <p>may come from seldom food wasting entities: like parties, celebrations, event organizers and their buffets etc.</p>
            <v-list>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>These entities can be our special food partners, post ads with 0 cost. It means you give away your surplus food to the needed users in our platform</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>For special partners, please contact us. This is our social responsibility to achieve ZERO food waste.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mission-list">
                  <v-icon color="#104388">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle>Automatically, you become our “Letme-save.com Green awareness warrior”.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <div class="blue-sec">
        <p>Just submit a summary and achievements you have done through Letme-save.com green awareness program.</p>
        <p>You are helping the environment. Your contribution will be recognized.</p>
        <p>You help yourself by helping others.</p>
      </div>
      <div class="mission-foot">
        <p>Request for resources from Letme-save.com. It can be fliers, posters etc</p>
        <p
          style="margin-top: 15px;"
        >Request to organize Green awareness program in your schools and organizations. We everyone must be aware of food waste. Corona covid-19 already taught us a huge lesson.</p>
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
        text: "Care for Earth",
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
img {
  width: 100%;
}
.v-list-item__subtitle {
  color: #000000de !important;
  font-size: 15px;
  white-space: normal;
  overflow: unset;
}
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 20px;
}
.mission-content h2 {
  margin-top: 1em;
  text-align: center;
  font-weight: 400;
  color: #104388;
  padding-bottom: 1em;
  font-size: 28px;
}
.vol-ben h2 {
  text-align: center;
  color: #24b149;
  font-weight: 400;
}
.mission-foot p {
  color: #24b149;
}
.blue-sec > p {
  color: #24598a;
  font-size: 18px;
  margin: 0;
}
.blue-sec {
  background: #88b5d7;
  text-align: center;
  padding: 3em 0;
  margin-top: 2em;
}
.mission-content h4,
.vol-ben h4 {
  margin-bottom: 0.5em;
  font-size: 20px;
  font-weight: 500;
  color: #104388;
}
.who-host {
  margin: auto;
  padding: 0 2em;
}
.v-list.v-sheet.v-sheet--tile.theme--light {
  background: unset;
}
.mission-foot {
  text-align: center;
  margin: 2em 0;
  font-size: 18px;
  font-weight: 500;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
.vol-ben {
  background: #f4f4f4;
  padding: 2em 0;
  margin-top: 2em;
}
@media (max-width: 767px) {
  .mission-content h2 {
    font-size: 24px;
  }
}
</style>