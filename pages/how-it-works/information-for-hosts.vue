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
    </v-container>
    <div class="mission-content">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host">
            <img src="~/assets/save-img.jpg" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" class="who-host">
            <h4>Who can be a host?</h4>
            <p>Any food or accomodation business or cultivation farms who is looking for volunteers help and in return be able to provide friendly environment, accomodation and food.</p>
            <p>
              An option that is based on individual hosts and volunteers:
              <br />A host may pay a minimum wage, a permanent or temporary job after or during volunteer training period.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <div class="host-steps">
        <v-container>
          <h2>Three steps to be a Host</h2>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <div class="inner-steps">
                <img src="~/assets/tablet.png" />
                <h4>Join the community as a Host</h4>
                <p>Create a profile, join as a host</p>
                <div class="arrow">
                  <img src="~/assets/arrow.png" />
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <div class="inner-steps">
                <img src="~/assets/volunteer.png" />
                <h4>Connect with Volunteers</h4>
                <p>Connected to numerous volunteers, Discuss about exchange helps and dates</p>
                <div class="arrow">
                  <img src="~/assets/arrow.png" />
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <div class="inner-steps">
                <img src="~/assets/possibility.png" />
                <h4>Create your Opportunities</h4>
                <p>Discover new friends, experiece and potential helps</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="vol-ben">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="4" class="who-host">
              <h4>Host Benifits</h4>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Free to join</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Meet new friends and may be new employees</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Get fresh ideas, helps and perspectives from third head</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <img src="~/assets/host-center.jpg" />
            </v-col>
            <v-col cols="12" sm="12" md="4" class="who-host">
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Be a part of international community</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Hosts does not help in visa and flight tickets</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mission-list">
                    <v-icon color="#104388">mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Host may help in local pick-up and it is upto their availability</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-container>
        <div class="mission-foot">
          <p
            style="margin-top: 15px;"
          >For food partners, it is free to join as a host and post their profile</p>
        </div>
        <div class="marketing">
          <img src="~/assets/exchange-1.jpg" />
        </div>
      </v-container>
    </div>
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
        text: "How it works",
        disabled: true,
        href: "#",
      },
      {
        text: "Information for hosts",
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
.arrow {
  position: absolute;
  top: 0;
  right: -15%;
}
.inner-steps {
  position: relative;
}
img {
  width: 100%;
}
.mission-content {
  margin-top: 2em;
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
.vol-ben h2 {
  margin-top: 0;
}
.vol-ben {
  background: #f4f4f4;
  padding: 2em 0;
}
.mission-content .v-list {
  padding-left: 0;
}
.mission-content .mission-list {
  margin-right: 10px !important;
}
.who-host {
  margin: auto;
  padding: 0 2em;
}
.mission-foot {
  text-align: center;
  margin-bottom: 2em;
  font-size: 16px;
  font-weight: 500;
}
.mission-content .v-list-item__title {
  overflow: unset;
  line-height: 2;
  white-space: normal;
}
.host-steps img {
  width: 75px;
  margin-bottom: 1em;
}
.host-steps {
  text-align: center;
  margin: 2em 0;
}
.marketing img {
  width: 60%;
}
.marketing {
  text-align: center;
  margin: 2em 0;
}
.theme--light.v-list {
  background: unset;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}

@media (max-width: 767px) {
  .mission-content h2 {
    font-size: 24px;
  }
  .marketing img {
    width: 100%;
  }
  .arrow {
    display: none;
  }
}
</style>