<template>
    <div class="lower-dashboard-menu">
        <v-container>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard"><v-icon right dark>mdi-view-dashboard</v-icon> Dashboard</nuxt-link></div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/offer-posts"><img src="~/assets/offer.png" alt="offer">Offer Posts</nuxt-link></div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/promotions"><img src="~/assets/promotions.png" alt="promotions">Promotions</nuxt-link></div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/orders"><img src="~/assets/orders.png" alt="orders"> Orders</nuxt-link></div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/inbox"><img src="~/assets/inbox.png" alt="inbox">Inbox</nuxt-link></div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/reviews"><img src="~/assets/review.png" alt="review">Reviews</nuxt-link></div>
            <div class="partner-dashboard-links important" >
                <nuxt-link to="#" >
                    <img src="~/assets/important.png" alt="Importants"> Importants
                </nuxt-link>
                <div class="important-sub">
                    <div class="important-sub-link"> 
                        <nuxt-link to="/partner-dashboard/important/order-summary">Order Summary</nuxt-link>                    
                    </div>
                    <div class="important-sub-link">
                        <nuxt-link to="/partner-dashboard/important/sales-overview">Sales Overview</nuxt-link>                    
                    </div>
                    <div class="important-sub-link">
                        <nuxt-link to="/partner-dashboard/important/traffic">Traffic</nuxt-link>                    
                    </div>
                </div>
            </div>
            <div class="partner-dashboard-links"><nuxt-link to="/partner-dashboard/plans"><img src="~/assets/plans.png" alt="Plans"> Plans</nuxt-link></div>
        </v-container>
    </div> 
</template>
<script>
export default {
}
</script>
<style scoped>
.lower-dashboard-menu {
    background: #104388;
    text-align: right;
    min-height: 65px;
    display: grid;
    align-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.partner-dashboard-links{
    display: inline-block;
    color: #fff;
}
.partner-dashboard-links>a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    padding: 24px 10px;
    
}
.partner-dashboard-links.important {
    cursor: pointer;
}
.partner-dashboard-links>a.nuxt-link-exact-active.nuxt-link-active{
    background: #eaedf4;
    color: #104388;
}
.v-icon {
    font-size: 28px;
    color: #24b149;
    margin: 0 3px 0 0;
}
.partner-dashboard-links.important {
    position: relative;
}
.important-sub {
    position: absolute;
    display: none;
    min-width: 180px;
    text-align: left;
    z-index: 99;
    background: #fff;
    padding: 10px 15px;
    top: 46px;
}
.important-sub-link {
    margin: 10px 0;
    font-size: 16px;
}
.important-sub-link>a {
    text-decoration: none;
    color: #104388;
    font-weight: 500;
    padding: 5px 0;
}
.important-sub-link>a.nuxt-link-exact-active.nuxt-link-active, .important-sub-link>a:hover {
    color: #24b149;
}
.partner-dashboard-links.important:hover .important-sub{
    display: block;
}
.partner-dashboard-links img {
    width: 25px;
    height: 25px;
    line-height: 0;
    margin: 0px 8px -5px 0px;
}
@media (max-width: 1263px){
    .partner-dashboard-links>a{
        font-size: 16px;
        padding: 24px 2px;
    }
    p.hotel-name.left{
        display: none;
    }
}
@media (max-width:959px){
    .lower-dashboard-menu{
        display: none;
    }
}

</style>