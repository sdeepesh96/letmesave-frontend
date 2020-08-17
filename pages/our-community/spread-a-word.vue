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
        <h2></h2>
        <h4>Just one click</h4>
        <div class="social-share">
          <ShareNetwork
            network="facebook"
            url="http://13.232.187.41/frontend/"
            title="www.Letme-save.com"
            description="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel."
            quote="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel. 
            Worth to download www.Letme-save.com :D"
          >
            <div class="facebook">
              <v-icon>mdi-facebook</v-icon>
              <p>Share on facebook</p>
            </div>
          </ShareNetwork>
          <ShareNetwork
            network="twitter"
            url="http://13.232.187.41/frontend/"
            title="www.Letme-save.com"
            description="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel."
            quote="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel. 
            Worth to download www.Letme-save.com :D"
            twitterUser="youyuxi"
          >
            <div class="twitter">
              <v-icon>mdi-twitter</v-icon>
              <p>Share on twitter</p>
            </div>
          </ShareNetwork>
          <div class="insta">
            <v-icon>mdi-instagram</v-icon>
            <p>Share on instagram</p>
          </div>
          <ShareNetwork
            network="linkedIn"
            url="http://13.232.187.41/frontend/"
            title="www.Letme-save.com"
            description="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel."
            quote="Excellent initiative! Letme-save.com provides free app and web platforms that connects the surplus foods and best deals with consumers where they live or where they travel. 
            Worth to download www.Letme-save.com :D"
          >
            <div class="linkedin">
              <v-icon>mdi-linkedin</v-icon>
              <p>Share on linkedin</p>
            </div>
          </ShareNetwork>
        </div>
        <div class="info-sec">
          <nuxt-link to="/how-it-works/care-for-earth">
            <div>
              <img src="~/assets/awareness.png" />
              <p>You may be interested in our green awareness program</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/how-it-works/earn-with-us">
            <div>
              <img src="~/assets/partner.png" />
              <p>You may be interested in our marketing partner program</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </v-container>
    <div class="footer-press">
      <nuxt-link to="#">
        <div class="press">
          <v-icon>mdi-newspaper</v-icon>Click here for press
        </div>
      </nuxt-link>

      <nuxt-link to="#">
        <div class="youtube">
          <v-icon>mdi-youtube</v-icon>Click here for our channel
        </div>
      </nuxt-link>

      <nuxt-link to="#">
        <div class="contact">
          <v-icon>mdi-fax</v-icon>Click here for contact us
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import VueSocialSharing from "vue-social-sharing";
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
        text: "Spread a word",
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
  font-weight: 400;
  color: #104388;
  padding-bottom: 1em;
  font-size: 24px;
}
.mission-foot p {
  margin-bottom: 0;
}
.footer-press {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
.mission-content h4 {
  margin-bottom: 0.5em;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #104388;
}
.mission-foot {
  margin: 2em 0;
  font-size: 18px;
  font-weight: 500;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
.info-sec div {
  border: 1px solid #fff;
  padding: 25px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.1);
}
.footer-press .v-icon {
  color: #fff;
  margin-right: 10px;
  font-size: 32px;
}
.info-sec p {
  margin: 10px 0;
  line-height: 1.4;
  color: #24b149;
  font-weight: 500;
}
.info-sec img {
  width: 82px;
}
.footer-press div {
  padding: 1.1em;
  color: #fff;
  margin: 2em 0 1em;
}
.footer-press .press {
  background: #2b78c2;
}
.footer-press .youtube {
  background: #ff0000;
}
.footer-press .contact {
  background: #104388;
}
.info-sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 650px;
  text-align: center;
  grid-gap: 1em;
  margin: 4em auto 2em;
}
.social-share {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  margin-top: 2em;
  text-align: center;
  margin-bottom: 2em;
}
.social-share div {
  border-radius: 5px;

  padding: 3em 0;
}
.social-share div.facebook {
  background: #3b5998;
}
.social-share div.twitter {
  background: #00acee;
}
.social-share div.insta {
  background: #d6249f;
  background: radial-gradient(
    circle at 0% 120%,
    #fdf497 2%,
    #fdf497 5%,
    #fd5949 8%,
    #d6249f 47%,
    #285aeb 90%
  );
}
.social-share div.linkedin {
  background: #0e76a8;
}

.social-share div > p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
}
.social-share div > .v-icon {
  color: #fff;
  font-size: 34px;
  margin-bottom: 15px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .footer-press div {
    padding: 0.5em;
  }
  .social-share div > p {
    font-size: 14px;
  }
  .info-sec div {
    padding: 25px;
  }
}
@media (max-width: 767px) {
  .mission-content h2 {
    font-size: 24px;
  }
  .social-share {
    grid-template-columns: 1fr 1fr;
  }
  .footer-press div {
    padding: 5px;
    margin: 0;
  }
  .footer-press {
    grid-template-columns: 1fr;
  }
  .social-share div > p {
    font-size: 13px;
  }
  .social-share div {
    padding: 2em 0;
  }
}
</style>