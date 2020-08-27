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
        <h4>A message from our founder</h4>
        <p>Saving food, avoid throwing food, and reducing carbon footprint are the key concerns of Letme-save.com.</p>
        <p>
          I grew up in a suburban area. My father was a food delivery truck driver. We always had an abundance of food at home and as a child, me and my siblings were always taught to respect food, and not throw or waste any food. Even though my grandfather was a farmer, my father took a different path.
          But I always remember my father does not want to waste even a single grain of rice or a bit of food from the plate.
          Actually, he is my hero and he maintained to be a true environmentalist until his last breath.
        </p>
        <p>
          It was the year 2005 when I began to explore and travel around the world, left my home country for higher studies, received a master's degree and Ph.D. in Engineering, and
          continued to work after Ph.D. But I have always wanted to do something unique and contribute to the society. Different cultures abroad opened my eyes to how other people treat food. Since I was a teenager, I envisioned a community or a platform that can help to avoid wasting food. But I had to put that vision aside at that time due to inadequate support.
        </p>
        <p>
          Fast forward 15 years to 2019, I think back in life about the respect and attitude I have towards food.
          How I was thinking of it before and now, what cultures I came across with and what experiences I learned in the past and continuously learning.
          I also thought about my father and how he persistently fights food waste in his own ways. Personally, I experienced and saw in front of my eyes, how tough it was to have adequate food for the middle class and lower-middle-class families. With ample opportunities, I was fortunate to be able to live, experience and work with different cultures and countries including the USA and Europe.
        </p>
        <p>I traveled to numerous countries. Everywhere I went, there was one common thing I found – food waste + generally waste of good food and things. When I go to grocery stores or when I dine out with family or friends I can see more and more just how “still fresh and still good food” are thrown away. I have also friends who are food business owners and they explained to me that food waste is a problem. Some are “surplus food produced” and some are food “about to expire” yet still good to eat. This really inspired me to do something. It motivated me to MAKE A SOLUTION.</p>
        <p>You know - stores that have 40% or 50% off for food / items that they are supposed to throw away. Sometimes, they just put them in the shop with a special label. The intention of several Food and Grocery businesses is that they want to sell their surplus and about to expire foods at a reduced price before being thrown away. These items are usually marked with a special label. Some business owners are even ready to give it away. The problem is that it is only limited to the people who are going to that store. Even among those limited people, very few of them could be interested or aware of such offers.</p>
        <p>In fact, not many people know about the vast waste amount of food ends up in the trash bin. This also cause a huge economic loss, currently valued at $1.3 trillion, and it is also one of the most harmful contributors to global climate change. It is not only the food item that is wasted, but all the energy and efforts put into producing it.</p>
        <p>According to the Food and Agriculture Organization of the United Nations (FOA), the contribution of food waste emissions to global warming is almost equivalent to all road transport emissions. This is alarming!</p>
        <p>These alarming facts are in line with my personal urge to CREATE and LAUNCH the Letme-save.com platform. Our team aims to inspire and urge policy makers, organizations and various business owners around the world to innovate and design strategies to combat food waste / goods waste as part of their fight to halt the impending climate crisis. This is the real story behind the inspiration of Letme-save.com</p>
        <p>
          Letme-save.com facilitates surplus food and surplus items between consumers and sellers/producers.
          Letme-save.com is not only limited to surplus food, but also surplus farm produce, flowers and various household items.
          Every single individual can contribute to the Letme-save commitment to SAVE and avoid throwing surplus food and items.
          If every single person comes forward to take steps to achieve small goals then combined small goals will make a huge impact.
          That is the mission and vision of Letme-save.com
        </p>
        <p>
          I have shifted my priority in life in the focus of helping the world, to save the next generation and to keep evolving Letme-save.com to its best.
          I want you to know that Letme-save.com will continue to do its part, and we will not stop looking for new opportunities to fight against food waste, reduce carbon footprint and to save our planet earth.
        </p>
        <p>I’m not alone, I believe in your contribution and to the contribution of every single person on planet earth to save and not to waste. Your efforts are helping the environment at the highest levels of appreciation from the mother earth.</p>
        <div class="mission-foot">
          <p>Remember, Letme-Save!</p>
          <p>
            Dr. Palanichamy Manikandan
            <br />Founder
          </p>
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
        text: "Message from our Founder",
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
  margin-top: 0em;
  text-align: center;
  font-weight: 400;
  color: #104388;
  padding-bottom: 1em;
  font-size: 28px;
}
.mission-foot p {
  margin-bottom: 0;
}
.mission-content h4 {
  color: #104388;
  font-size: 32px;
  font-weight: 400;
  padding: 0.8em 0;
  text-align: left;
  text-transform: capitalize;
}
.mission-foot {
  margin: 2em 0;
  font-size: 18px;
  font-weight: 500;
}
ul.v-breadcrumbs.theme--light {
  padding: 10px 0 10px;
}
@media (max-width: 767px) {
  .mission-content h2 {
    font-size: 24px;
  }
}
</style>