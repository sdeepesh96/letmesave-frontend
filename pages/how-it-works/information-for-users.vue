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
        <h2 class="page-head">Infomation for users</h2>

        <div class="foodpartner-sec">
          <h3>Be Letme-save.com's</h3>
          <h1>User</h1>
          <p>Any food consumers such as locals, local and international, travelers, students, unions, groups and any individuals etc</p>
          <p
            style="text-align: left;color: #1b4469;"
          >Letme-save.com not only provide opportunity to every single individual to save the food, and money and, also offers a self-satisfaction to every single person by increasing their respect i. for food, ii. for the farmers who produce it, iii. for the natural resources that go into producing it and iv. for the people who go without it.</p>
          <h4>100% free to join</h4>
          <h4>If everyone come forward with a small goal 'Letme-SAVE' then small goals will make a big difference. That is the mission of Letme-save.com</h4>
        </div>
        <div class="marketing">
          <img src="~/assets/user-step.jpg" />
        </div>
        <div class="mission-foot">
          <p style="margin-top: 15px;">Users can also become volunteers and travel internationally.</p>
        </div>
      </div>
    </v-container>
    <div class="earn-call">
      <v-container>
        <div class="earn-action">
          <div>
            <p>For more information on volunteers</p>
          </div>
          <div>
            <v-btn
              min-width="100%"
              min-height="47px"
              width="225px"
              color="#104388"
              to="/how-it-works/information-for-volunteers"
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
        text: "Information for food users",
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
  font-size: 20px;
  font-weight: 500;
  width: 650px;
  margin: 20px auto;
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
  font-size: 20px;
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
    width: auto;
  }

  .foodpartner-sec h3 {
    font-size: 22px;
    width: auto;
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