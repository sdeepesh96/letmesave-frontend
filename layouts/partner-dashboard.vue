<template>
  <v-app>
    <PartnerHeader />
    <PartnerSubheader />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import PartnerHeader from "@/components/PartnerHeader.vue";
import PartnerSubheader from "@/components/PartnerSubheader.vue";
import Footer from "@/components/Footer.vue";
export default {
  middleware: "partner-authentication",

  components: {
    PartnerHeader,
    Footer,
    PartnerSubheader
  }
};
</script>
