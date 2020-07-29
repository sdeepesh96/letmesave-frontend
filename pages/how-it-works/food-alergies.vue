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
                <p>Letme-save.com is exclusively arranging the contract between the user (food consumer) and the food partner (food provider) and Letme-save.com has no responsibilities in respect of the Products or fulfilment of the contract between the food partner and the user.</p>
                <p>Letme-save.com does not, in any way, manufacture, sell, purchase, store, prepare, produce, process, mark, pack, deliver or handle the Products. Letme-save.com has no responsibility for the fulfilment of the contractual obligations towards the user regarding the Products, including the manufacturing, sale, purchase, storage, preparation, production, processing, marking, delivery, quality, ingredients, allergens or handling of the Products, and the compliance with applicable legislation, including with respect to the above.</p>
                <p>The user can find information about the Products and a description of the Products on the Platform. This information is only instructive and for the purpose of giving the user the best prerequisites for evaluating selected Products before making the reservation. There may be instances where the Platform is not updated and where the actual product range, stocked items etc. is not as stated on the Platform. In such cases, Letme-save.com is of no liability. It is the food partners who are responsible for providing information about the Products and to ensure that it is factually accurate and up-to-date. Letme-save.com does not undertake any such responsibility and, hence, has no liability for the contents of or availability of information regarding the Products.</p>
                <p>If the user is in doubt about allergy warnings, contents of a dish or any other menu information, the user shall confirm with the food partner directly before ordering. The food partner’s contact information will appear on the Platform. The user may always cancel the Reservation Order, if the cancelation is due to ingredients, allergens or other labelling related information regarding the Product.</p>  
                <p>Upon Pick-up, the food partner shall provide the user with information regarding list of ingredients, allergens and other labelling related information regarding the Product. Any Products purchased via the Letme-save.com Platform shall be consumed immediately after Pick-up and/or as instructed by the Product Label or the food partner. Letme-save.com will not assume any liability for user’s adverse reactions from Products for any reasons, including if consumed inconsistently with the labelling or the information set out in these terms or given directly by the food partner.</p>              
                <p>Letme-save.com is not liable or responsible for any failure to perform or any delay in the performance of any obligations relating to the Products, including with respect to manufacturing, sale, purchase, storage, preparation, production, processing, marking, delivery, quality, ingredients, allergens or handling of the Products.</p>
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
          text: 'How it works',
          disabled: true,
          href: '#',
        },
        {
          text: 'Food alergies',
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
        margin:2em 0;
    }
    ul.v-breadcrumbs.theme--light {
        padding: 10px 0 10px;
    }

</style>