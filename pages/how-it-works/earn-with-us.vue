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
      <h2 class="page-head">Earn with us</h2>

      <div class="mission-content">
        <h2>“You can earn with us by becoming our marketing ambassador.”</h2>

        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6">
            <img src="~/assets/earn-img.jpg" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <p>You'll be joining a global community of specialists known for excellent service and marketing skill. This opportunity will give an excellent marketing experience for students, job seeking persons who are willing to work on their own time, any individuals or couples or friends. Based on your performance and contributions there is a possibility to become Letme-save.com franchisee and/or full-time staff.</p>
            <p>As a marketing ambassador, you promote Letme-save.com to the food business places (restaurants, hotels, gas stations, kiosks, supermarkets, farmers who produce and sell vegetables, fruits etc.) and food consumers (locals, travelers, unions, groups and any individuals through your social media and digital networks) in your area. This will give continuous passive income. You can do this as a part-time, or full-time.</p>
          </v-col>
        </v-row>
      </div>
      <div class="earn-content">
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="who-host">
              <img src="~/assets/visitor.jpg" />
              <p>Attract more potential resturants and businesses to the Letme-save.com platform</p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="who-host">
              <img src="~/assets/goal.jpg" />
              <p>Outreach new goal and new commission everyday</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="who-host">
              <img src="~/assets/money.jpg" />
              <p>Make potential customers ready to buy</p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="who-host">
              <img src="~/assets/business.jpg" />
              <p>Store brand adds crowns to your action</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="3" md="3"></v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="who-host">
              <img src="~/assets/arrow.jpg" />
              <p>Count every single marketing action come back as an income</p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="3" md="3"></v-col>
        </v-row>
      </div>
      <div class="marketing">
        <h2>Letme-save.com marketing partnership co-operation program</h2>
        <img src="~/assets/marketing-partnership.jpg" />
      </div>
      <div class="marketing" style="text-align: unset;">
        <h2 style="padding: 1em 0 .5em;">Details of Letme-save’s marketing ambassadors program:</h2>
        <p class="mb-7">
          Either as an individual or as a company, you can be our marketing ambassador in your area (near your
          home or near your school/college/University/work place) in your country. You can involve in part-time or
          full-time. Please read carefully all the details below.
        </p>
        <v-expansion-panels hover focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">Who are we?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Letme-save.com is a Food Marketing & Food Advertising platform (mobiles apps and website) for all kind
                of businesses such as Restaurants, Hotels, Supermarkets, Grocery Stores, Kiosks, Bakeries, Food
                Companies, Beverage Companies, Farming products such as vegetables, fruits etc., Garden products
                such as plants, flowers etc., Kitchen brands, to reach a highly engaged audiences of Food buyers such
                us Local consumers, Grocery Buyers, Students, International travelers and Household Cooks.
              </p>
              <p>
                Letme-save.com was established with the goal of saving food wastes and advertising last minute “save
                food” advertisements. While continuing to fight against food wastes by advertising the surplus foods in our
                platform, we manage to advertise thousands of quality food offers and providing food businesses a
                solution for campaigns reaching abundant customers and sell through our platform.
              </p>
              <p>
                Letme-save.com accepts every type of businesses dealing with food as our “Food partner” where they
                can create their profile for free, and post food offers for free to reach highly engaged consumers, online at
                scale. We also work with many social media channels to reach our food focused audience.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">How to join as a marketing ambassador in Letme-save.com?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Join as a Marketing ambassador in Letme-save.com for free – by register as a Marketing ambassador in
                our website. In the registration form, you may need to mention / share your goals and why do you want to
                join as our Marketing ambassador. We will go through your profile and approve it. Since we receive so
                many applications, we filter and consider only serious individuals who have a positive vision like us. We
                may have a telephone interview when needed.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">What is your task?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                1)
                Find “Food partners” – in person or through online, social media etc.
                <br />Ask “Food partners” to register/join as a food partner in Letme-save.com website or download PARTNER
                APP and start to post their offers. It is free to join as a food partner, post their ads and getting new
                customers.
              </p>
              <p>
                Who are “Food partners”?
                <br />In your area (near your home or school), For example,
                <br />Grocery store chains
                <br />Restaurant chains
                <br />Individual grocery stores
                <br />Individual Restaurants
                <br />School/College/University canteens
                <br />Industries with food service
                <br />Farmers
                <br />Gardeners
                <br />Hotels with food services
                <br />Buffet restaurants
                <br />Bakeries
                <br />Kiosks
                <br />Beverage companies (wholesale price for end consumers)
                <br />Food companies (wholesale price for end consumers)
              </p>
              <p>
                2)
                Find “Food consumers” – in person or through online, social media etc.
                <br />Encourage “Food consumers” to download USER APP and browse/buy food offers through the platform
              </p>
              <p>
                Who are targeted “Food consumers”? For example,
                <br />Students
                <br />Travelers
                <br />10
                <br />Local people
                <br />Household grocery buyers (90%)
                <br />Female aged 21-54 (80%)
                <br />Young families with 1-2 children
                <br />Young couple
                <br />Primary household cook
                <br />Vegetarian
                <br />Group celebrations (birthday, festivals, parties etc)
                <br />Industrial area fulltime employees (90%)
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">What is marketing ambassador’s target?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                <b>First 3 months:</b>
                <br />First 3 months, your task will be only reaching out to as many as possible “Food partners”, and make
                them to join in letme-save.com, and download the PARTNER APP. Every day if you target minimum 5
                food partners, then you can reach minimum 100 food partners (5 partners per day x about 20 working
                days) in one month.
                <br />You can ask the food partners to post ad from 4th month.
              </p>
              <p>
                <b>From 4th month:</b>
                <br />Within 3 months, if you reach 300 food partners in one area then you can start online (social media)
                advertisement, and/or through your network to reach more customers, and let them download the USER
                APP.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">How Letme-save.com works?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                * When food consumers buy online particular offer, they pay only 18% through online. Rest of the
                money will be paid directly to the food partners the food consumers pick-up or dine-in.
              </p>
              <p>
                * So, the food-consumer does not need to worry about paying more. Food partners are secured to
                get the business.
              </p>
              <p>
                * Anyone can refer “terms and conditions” in our web for the cancellation policies for food
                consumers and food partners.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">What you will get in return?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                You will get monthly minimum compensation for the first three months. From 4th month, you will get 5%
                commission of each purchase done with the “Food partners” you introduced. For example, if we consider
                a minimal case scenario in the beginning, let us assume each restaurant sells 10 USD / day through the
                platform then their monthly sales will be 300 USD / restaurant. If there are 300 restaurants, then 300x300
                USD=90,000 USD. Then you can calculate 5% commission as 4500 USD. Of course, this can vary from
                place to place, how attractive food offers posted by restaurants, how many users buy and so on.
              </p>
              <p>
                But if you introduce more restaurants, and more users for the first 1-2 years then there will be a huge
                passive income for you. Of course, the sales can vary. More Food partners and More consumers – You
                will earn more commission.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span
                class="accord-align"
              >As a marketing ambassador, what are your benefits and how your pay is secured?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                * You will be our “Marketing ambassador”. You can create your profile, input your bank account
                number in our platform as a marketing partner/ambassador.
              </p>
              <p>* You will be offered “Marketing partner ID” after successful registration and profile approval.</p>
              <p>
                * When you introduce food partners, they must add your “Marketing partner ID” in their profile.
                So whatever sales they do then your commission will be automatically added to your profile. You can
                login and check how much you earned per day or per week or per month.
              </p>
              <p>* So, this will encourage you to push – finding more partners and more consumers.</p>
              <p>
                * End of every month, your commission will be paid-out. It should be minimum 100 USD or
                more. Otherwise, it will be accumulated in the next month.
              </p>
              <p>* This is purely a result-oriented income. So, more sales will bring more commissions to you</p>
              <p>
                * Regarding the compensation for the first 3 months, you will be paid 100 USD per month. In
                return, you should be ready to invest your time with a 1000% positive attitude and confident on what you
                do.
              </p>
              <p>
                * This compensation will be paid together with your first month commission. This can be the end
                of 4th month. The reason we hold this compensation is that marketing partners may create fake profiles
                for “Food partners” and “Users”. It should not be like that. We will cross check and verify the Food partner
                profiles, their address, business website before we approve them. You are getting compensation and
                commision only for active food partners and consumers you introduce.
              </p>
              <p>
                * You must believe in yourself and take things positively. Then you will be a money magnet, but
                you need to invest your time and brain in the first 3-5 months.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">What support you will receive from us?</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                We will collaborate consistently on three levels meetings on Operational, Tactical and Strategic. You will
                earn a great marketing ideas and work experiences. We will send you soft-copies of fliers, some
                marketing materials, promotion details, and regular posts that you can share with your network.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="accord-align">Join today and earn with us</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Initial dedicated work for a short period will give you long term passive income. Of course, it needs
                consistent involvement in social media and digital marketing and certainly the growth potential is
                exponential.
              </p>
              <p>
                Our selected ambassadors will be invited to our headquarter in Norway for annual green awareness
                conferences to present themselves, to share their contributions and ideas to the rest of the world about
                green awareness, and how you are helping the world by helping yourself.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
    <div class="earn-call">
      <v-container>
        <div class="earn-action">
          <div>
            <p>FAQ for marketing partners</p>
          </div>
          <div>
            <v-btn
              min-width="100%"
              min-height="47px"
              width="225px"
              color="#104388"
              to="/how-it-works/faq"
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
        text: "Earn with us",
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
.mission-content img {
  width: 100%;
}
.earn-content img {
  width: 64px;
  margin-bottom: 10px;
}
.earn-content {
  margin: 3em 0 2em;
  font-size: 18px;
}
.who-host {
  margin: auto;
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
  width: 60%;
}
.marketing {
  text-align: center;
  margin-bottom: 2em;
}
.marketing h2,
.mission-content h2 {
  text-align: center;
  font-weight: 400;
  color: #104388;
  padding-bottom: 1.5em;
  font-size: 28px;
}
.earn-action
  a.v-btn.v-btn--contained.v-btn--router.theme--dark.v-size--default {
  font-size: 20px;
  text-transform: unset;
  letter-spacing: unset;
  font-weight: 600;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
.who-host {
  background: #f9f9f9;
  min-height: 225px;
  padding: 2em;
  font-size: 22px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 0 0 10px #1043884d;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  background-color: #cccccc;
  border-radius: 0;
}
.accord-align .v-icon.v-icon {
  font-size: 18px;
  margin-right: 10px;
}
button.v-expansion-panel-header:hover,
button.v-expansion-panel-header.v-expansion-panel-header--active {
  background: #65bcde;
  color: #fff;
}
button.v-expansion-panel-header.v-expansion-panel-header--active {
  background: #65bcde;
  color: #fff;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .earn-action,
  .earn-content {
    grid-template-columns: 1fr;
  }
  .marketing img {
    width: 100%;
  }
  .marketing h2 {
    font-size: 22px;
  }
}
</style>