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
        <p>
          When you use our online platform, it is your own responsibility to make sure all about your own safety.
          Letme-save.com is not liable and never take any responsibility for your communications, sharing your
          personal details to others via any mediums, your actions and decisions. You are completely responsible
          for your own safety. You need to refer our privacy policy and terms and conditions.
        </p>
        <p>
          Letme-save.com can ensure you that all your personal information you enter when you create your
          profile, and online payments when you buy online in our platform either product or service which are
          very well secured based on our privacy policy.
        </p>
        <p>
          When you order food online in Letme-save.com, it is your own responsibility to go and pick-up the food
          on the given time window. If you miss the timing and forget to cancel your order 2 hours before then
          Letme-save.com is not responsible for that. In such cases, refund is not possible accordance to our terms
          and conditions.
        </p>
        <p>
          When you order food online in Letme-save.com, you must make sure that all the food ingredients are ok
          for you. If you have allergies of some specific ingredients then it is entirely your responsibility to
          communicate with the appropriate partner to make sure. If you cannot reach them and / or if they do
          not get proper answer as you expected then you should never order that food and/or cancel
          immediately. Letme-save.com only facilitates the listings of different food offers (both surplus food and
          sale food offers), and not responsible for the food quality, ingredients, storing, production, distribution,
          permission and legal status of such.
        </p>
        <p>
          Letme-save.com have no responsibility over the safety of customers including volunteers, and partners
          including hosts. It is on your own risk. It is entirely your own responsibility to take necessary precautions
          when you post ads and / or profiles, when you order online, when you travel, and when you accept
          strangers as volunteers in your place. Everything works based on trusting each other. As a continuation,
          below are few safety tips which may be interesting for you to consider.
        </p>
        <p>
          If you are going to do volunteering by yourself or as a group regardless of gender, you may have to give
          more consideration to where you are going to travel, and what personal details you may share with
          strangers who you never met before.
        </p>
        <p>
          It is very important to do enough research about your planned destinations beforehand and prepare
          yourself in on any recommended precautionary measures of the place in question like cultural shock,
          racism, and places which are considered to be popular for crimes, rapes, pickpockets etc.
        </p>
        <p>
          It needs to be clearly accepted by both parties what kind of helps are going to be exchanged, what are
          the expectations from each other, any wages offered or not, time schedule, staying period, food
          arrangements, free-time to explore, pets, personal habits like smoking etc, make sure all the terms are
          good and acceptable by both hosts and volunteers.
        </p>
        <p>
          Book your tickets only after double confirmed with hosting partner, and ensure that you have the right
          visa, enough travel and sick insurance on your own. Especially, Letme-save.com and hosting partner are
          not responsible for visa and visa status of volunteers. It is your own responsibility that you have the
          correct and legal visa to travel.
        </p>
        <p>
          If either hosting partner or volunteer are uncomfortable about the conditions, then it is up to you to
          communicate and solve these issues together. It will always be better if volunteers have a secondary
          plan in place in case the exchange does not work out as expected.
        </p>
        <p>
          You can refer our terms and conditions. Letme-save.com only allow both parties to post their profiles,
          show the listings and facilitates initial contact between the hosting partners and Volunteers. Any
          arrangement and agreement you make is entirely between the hosting partner and a volunteer. Letme-
          save.com is not liable and not responsible for anything.
        </p>
        <p>
          It is quite possible that you may meet unwanted, dishonest people and situations. You must be aware of
          common scams. You should never agree to deposit a cheque and / or / wire money, and never sharing
          sensitive information, regardless of how convincing the story can be. You must know that you are doing
          everything on your own risk, and Letme-save.com will never take responsibility for your actions and
          decisions.
        </p>
        <p>
          In case if you have identified someone suspicious on Letme-save.com platform, please contact us
          immediately.
        </p>
        <p></p>
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
        text: "How it works",
        disabled: true,
        href: "#",
      },
      {
        text: "Safety",
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
.mission-content {
  margin: 2em 0;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
</style>