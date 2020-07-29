<template>
    <div>
        <InnerBanner/>
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                    :href="item.href"
                    :disabled="item.disabled" class="inner-breadcrumbs"
                >
                    {{item.text}}
                </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
            <div class="mission-content">
                <h2>"Help the world while helping yourselves"</h2>
                <h4>Since you're here...</h4>
                <p>… we have a small favour to ask. More people, like you, are reading and supporting the Letme-save.com’s independent and global initiative towards food waste than ever before. Our objective is while retailers and farmers could get some useful revenue, the needy could get fed, and everyone could help each other.</p>
                <p>We made the choice to keep our organization open for all, regardless of where they live or what they can afford to save food loss and waste. Literally thousands of dollars’ worth of perfectly good food just dispensed of, plenty of cooked food, unopened packets of steaks and whole chickens, bags of apples and oranges etc etc..... It is painful.</p>
                <p>At a time when realistic action is a necessity, we believe that each of us, around the world, deserves to contribute fighting against throwing food - with honesty in the heart.</p>
                <p>Every individual should take responsibility and say “Letme-SAVE”.</p>  
                <p>Letme-save.com offers a free platform for both consumers and retailers - that can be you or me or anyone else. Of course, Letme-save.com not only provides opportunity to every single individual to save the food, and money and, also it also offers a self-satisfaction to every single person by increasing their respect i. for food, ii. for the farmers who produce it, iii. for the natural resources that go into producing it and iv. for the people who go without it.</p>              
                <p>We all set our own world and voice our own opinions. We hope you will consider supporting us today. We need your support to keep saving food that’s open for everyone. Every reader contribution, however big or small, is so valuable. </p>
                <div class="mission-foot">
                    <p>Support Letme-save.com’s global initiative from as little as download and use the app. It only takes few minutes. Thank you</p>
                    <p style="margin-top: 15px;">“SAVE WITH US”</p>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import InnerBanner from '~/components/InnerBanner'
export default {
    components:{
        InnerBanner
    },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Our community',
          disabled: true,
          href: '#',
        },
        {
          text: 'Since you’re here',
          disabled: true,
          href: '#',
        },
      ],
    }),
}
</script>

<style scoped>
    .banner-search {
        background-image: url("../../assets/listing-banner.jpg");
        background-position: center 15%;
    }
    .mission-content h2{
        margin-top: 1em;
        text-align: center;
        font-weight: 400;
        color: #104388;
        padding-bottom: 1em;
        font-size: 28px;
    }
    .mission-content h4{
        margin-bottom: .5em;
        font-size: 20px;
        font-weight: 500;
        color: #104388;
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
    @media (max-width:767px){
        .mission-content h2{
            font-size: 24px;
        }
    }

</style>