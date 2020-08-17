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
        <div class="foodpartner-sec">
          <h3>Be Letme-save.com's</h3>
          <h1>Food Partner</h1>
          <p>Food partner: Any food business places such as hotels, restaurants, bakeries, super markets, school/college/university canteens, kiosks, gas station shops, fast food shops, fresh produce farms etc.</p>
          <h4>100% free to join and post ad</h4>
        </div>
        <div class="marketing">
          <img src="~/assets/partner-step.jpg" />
        </div>
        <div class="mission-foot">
          <p
            style="margin-top: 15px;"
          >As an extra benefit to our food partners, they can also become host members for 100% free. For example, if they want free volunteers to work in your place.</p>
        </div>
      </div>
    </v-container>
    <div class="earn-call">
      <v-container>
        <div class="earn-action">
          <div>
            <p>For more information on hosts</p>
          </div>
          <div>
            <v-btn
              min-width="100%"
              min-height="47px"
              width="225px"
              color="#104388"
              to="/how-it-works/information-for-hosts"
              dark
            >Click here</v-btn>
          </div>
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
        text: "Information for food partners",
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
.foodpartner-sec {
  background: #88b5d7;
  text-align: center;
  padding: 3em 0;
  margin-top: 5px;
}
.foodpartner-sec h3 {
  color: #2f75b5;
  font-weight: 400;
  font-size: 39px;
}
.foodpartner-sec p {
  color: #24598a;
  font-size: 18px;
  width: 615px;
  margin: 0 auto 10px;
}
.foodpartner-sec h4 {
  color: #1b4469;
  font-size: 22px;
  font-weight: 500;
}
.foodpartner-sec h1 {
  font-size: 96px;
  text-transform: uppercase;
  line-height: 1;
  padding: 15px 0;
}
.mission-foot {
  text-align: center;
  margin-bottom: 2em;
  font-size: 16px;
  font-weight: 500;
}
.earn-action {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-gap: 1em;
  text-align: center;
}
.earn-action > div {
  margin: auto;
}
.earn-action p {
  margin: 0;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
}
.earn-call {
  background: #fb6c05;
  padding: 1em;
}
.marketing img {
  width: 100%;
}
.marketing {
  text-align: center;
  margin: 2em 0;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
@media (max-width: 767px) {
  .earn-action,
  .earn-content {
    grid-template-columns: 1fr;
  }
  .foodpartner-sec h4 {
    font-size: 20px;
  }

  .foodpartner-sec h3 {
    font-size: 22px;
  }
  .foodpartner-sec h1 {
    font-size: 38px;
  }
  .foodpartner-sec p {
    font-size: 15px;
    width: auto;
  }
}
</style>