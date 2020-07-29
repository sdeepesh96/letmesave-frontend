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
                <h2>“You can earn with us by becoming our marketing partner.”</h2>
                
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="6">
                        <img src="~/assets/earn-img.jpg">
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="6">
                        <p>You'll be joining a global community of specialists known for excellent service and marketing skill. This opportunity will give an excellent marketing experience for students, job seeking persons who are willing to work on their own time, any individuals or couples or friends. Based on their performance and contributions there is a possibility to become Letme-save.com franchisee and/or full-time staff.</p>
                        <p>As a marketing partner, you promote Letme-save.com to the food business places (restaurants, hotels, gas stations, kiosks, supermarkets, farmers who produce and sell vegetables, fruits etc.) and food consumers (locals, travelers, unions, groups and any individuals through your social media and digital networks) in your area. This will give continuous passive income. You can do this as a part-time, or full-time.</p>    
                    </v-col>
                </v-row>
            
            </div>
            <div class="earn-content">
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="6" >
                        <div class="who-host">
                        <img src="~/assets/visitor.jpg">
                        <p>Attract more potential resturants and businesses to the Letme-save.com platform</p>
                        </div>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="6" >
                        <div class="who-host">
                        <img src="~/assets/goal.jpg">
                        <p>Outreach new goal and new commission everyday</p>   
                        </div> 
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="6">
                        <div class="who-host">
                        <img src="~/assets/money.jpg">
                        <p>Make potential customers ready to buy</p>
                        </div>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="6" >
                        <div class="who-host">
                        <img src="~/assets/business.jpg">
                        <p>Store brand adds crowns to your action</p>   
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" xs="12" sm="3" md="3"> 
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="6">
                        <div class="who-host">
                        <img src="~/assets/arrow.jpg">
                        <p>Count every single marketing action come back as an income</p>
                        </div>
                    </v-col>
                    <v-col cols="12" xs="12" sm="3" md="3"> 
                    </v-col>
                </v-row>
                
            </div>
            <div class="marketing">
                <h2>Letme-save.com marketing partnership co-operation program</h2>
                <img src="~/assets/marketing-partnership.jpg">
            </div>
        </v-container>  
        <div class="earn-call">
            <v-container>
                <div class="earn-action">
                    <div><p>FAQ for marketing partners</p></div>
                    <div>
                        <v-btn min-width="100%" min-height="47px" width="225px" color="#104388" to="#" dark>Click here</v-btn>
                    </div>
                </div>
            </v-container>
        </div> 
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
          text: 'How it works',
          disabled: true,
          href: '#',
        },
        {
          text: 'Information for marketing partners',
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
    .mission-content{
        margin-top: 2em;
    }
    .mission-content img{
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
    .who-host{
        margin: auto;
    }
    .earn-action {
        display: grid;
        grid-template-columns: 1fr .7fr;
        grid-gap: 1em;
        text-align: center;
    }
    .earn-action>div {
        margin: auto;
    }
    .earn-action p{
        margin: 0;
        font-size: 22px;
        color: #fff;
        font-weight: 600;
    }
    .earn-call {
        background: #fb6c05;
        padding: 1em;
    }
    .marketing img{
        width: 60%;
    }
    .marketing{
        text-align: center;
        margin-bottom: 2em;
    }
    .marketing h2, .mission-content h2{
        text-align: center;
        font-weight: 400;
        color: #104388;
        padding-bottom: 1.5em;
        font-size: 28px;
    }
    .earn-action a.v-btn.v-btn--contained.v-btn--router.theme--dark.v-size--default {
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
    @media (max-width:767px){
       .earn-action, .earn-content {
        grid-template-columns: 1fr;
    } 
    .marketing img{
        width: 100%;
    }
    .marketing h2{
        font-size: 22px;
    }
    }

</style>