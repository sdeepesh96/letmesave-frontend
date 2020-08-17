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
          When you order food online in Letme-save.com, you must make sure that all the food ingredients are ok
          for you. If you have allergies of some specific ingredients then it is entirely your responsibility to
          communicate directly with the appropriate food partner and make sure.
        </p>
        <p>
          Letme-save.com only facilitates the listings of different food offers (both surplus food and sale food
          offers). Letme-save.com has no responsibility for the food quality, its ingredients, processing, storing,
          production, marking, packing, handling, distribution and delivery, labelling related information,
          permission and legal status of such. Letme-save.com does not undertake any such responsibility and,
          hence, has no liability for the contents of or availability of information regarding the food products that
          you order through our platform.
        </p>
        <p>
          When you order food online in Letme-save.com, it is your own responsibility to go and pick-up the food
          on the given time window. If you miss the timing and forget to cancel your order 2 hours before then
          Letme-save.com is not responsible for that. In such cases, refund is not possible accordance to our terms
          and conditions. Please refer terms and conditions, privacy policy and safety for more information.
        </p>
        <p>
          Any food products purchased via the Letme-save.com Platform shall be consumed immediately after
          Pick-up and/or as instructed by the Product Label or by the food partner. Letme-save.com will not
          assume any liability for customer’s adverse reactions from food products for any reasons, including if
          consumed inconsistently with the labelling or the information set out in these terms or given directly by
          the food partner.
        </p>
        <p>
          Letme-save.com can ensure you that all your personal information you enter when you create your
          profile, and online payments when you buy online in our platform either product or service which are
          very well secured based on our privacy policy.
        </p>
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
        text: "Food alergies",
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