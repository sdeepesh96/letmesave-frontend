<template>
  <div class="offer-temp">
    <v-container>
      <div class="offer-heading">
        <h4>Find perfect surplus food offers around you</h4>
        <p> Create and browse lists of the finest nearby</p>
      </div>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="6"
          md="6"
          sm="12"
        >
          <v-card
            
            light
            class="mx-auto"
          >
            <div class="d-flex mob-def">
              <v-avatar
                tile
                width="350"
                height="245"
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
              <div class="listing-order">
                <div class="listing-head">
                <v-card-title
                  class="headline"
                ><p>{{item.title}}</p></v-card-title>
                <v-card-text class="rating"><p>{{item.rating}}</p></v-card-text>
                </div>
              <div class="listing-inner">
                  <div>
                <v-card-text class="category"><p>{{item.category}}</p></v-card-text>
                <v-card-text class="left1"><p>{{item.left}} left</p></v-card-text>
                  </div>
                  <div class="listing-right">
                <v-card-text class="listing-time" v-text="item.time"></v-card-text>
                <v-card-text class="listing-type" v-text="item.type"></v-card-text>
                <v-card-text class="listing-price"><span class="nondis-price">{{item.price}}</span><span>{{item.offerprice}}</span></v-card-text>
                <v-card-text class="listing-left">Only {{item.left}} left on Letme-save.com</v-card-text>
                  </div>
              </div>
              <div class="listing-footer">
                <v-card-text class="listing-location"><span class="find-icon"><v-icon>mdi-map-marker</v-icon></span><span>{{item.location}}</span></v-card-text>
                <div class="listfoot-btn">
                  <v-btn class="ma-2" small tile color="#104388" dark max-width="100">Order now</v-btn>
                </div>
              </div>
            </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="all-offers-btn text-center">
      <v-btn rounded color="#104388" x-large="" dark to="/listing">All offers</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg',
          title: 'Bare Restaurant',
          rating:'4.5',
          category: 'Best deal',
          left: '10',
          time: 'Today 19:00 - 20:00',
          type: 'Save food',
          price: 'NOK 65',
          offerprice: 'NOK 25',
          location: '2nd floor, OML mall'
        },
        {
          color: '#1F7087',
          src: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg',
          title: 'Bare Restaurant',
          rating:'4.5',
          category: 'Best deal',
          left: '10',
          time: 'Today 19:00 - 20:00',
          type: 'Save food',
          price: 'NOK 65',
          offerprice: 'NOK 25',
          location: '2nd floor, OML mall'
        },
        {
          color: '#1F7087',
          src: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg',
          title: 'Bare Restaurant',
          rating:'4.5',
          category: 'Best deal',
          left: '10',
          time: 'Today 19:00 - 20:00',
          type: 'Save food',
          price: 'NOK 65',
          offerprice: 'NOK 25',
          location: '2nd floor, OML mall'
        },
        {
          color: '#1F7087',
          src: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_307230266.jpg',
          title: 'Bare Restaurant',
          rating:'4.5',
          category: 'Best deal',
          left: '10',
          time: 'Today 19:00 - 20:00',
          type: 'Save food',
          price: 'NOK 65',
          offerprice: 'NOK 25',
          location: '2nd floor, OML mall'
        }
      ],
    }),
  }
</script>

<style scoped>
    .listing-order{
        width: 100%;
        padding: 20px 25px;
    }
    .listing-inner{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .listing-footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top:15px;
    }
    .headline p {
    font-size: 24px;
    margin-bottom: 7px;
    line-height: 1;
    }
    .listing-head{
      display: grid;
      grid-template-columns: 4fr .4fr;
    }
    .v-card__text.rating>p {
    text-align: center;
    background: #104388;
    width: fit-content;
    line-height: 1;
    height: fit-content;
    padding: 5px;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
    margin: 0;
    }
    .category p {
    margin-bottom: 5px;
    font-weight: 500;
    text-transform: capitalize;
    }
    .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 0px;
    }
    .listing-right{
    display: grid;
    grid-template-rows: 2fr 1fr;
    text-align: right;
    }
    .left1 p {
    margin-bottom: 0;
    background: #fb6c05;
    color: #fff;
    width: max-content;
    padding: 0 10px;
    border-radius: 2px;
    }
    .listing-time {
    color: #fb6c05;
    font-weight: 300;
    }
    .listing-type {
    font-weight: 500;
    font-size: 15px;
    }
    .listing-price {
    font-size: 17px;
    font-weight: 500;
    }
    .listing-price>span.nondis-price {
    color: #fb6c05;
    margin-right: 10px;
    text-decoration: line-through;
    }
    .listing-footer .v-btn.v-size--small{
      text-transform: unset;
      float: right;
      font-weight: 400;
    }
    .listfoot-btn{
      text-align: right;
    }
    .listing-location{
      margin:auto;
    }
    span.find-icon .v-icon.v-icon {
      font-size: 20px;
      color: #fb6c05;
      margin-right: 5px;
    }
    .offer-temp {
    padding: 3em 0 1.5em;
    }
    .offer-heading {
      padding: 0 0 2.5em;
      text-align: center;
    }
    .offer-heading p {
      font-size: 20px;
    }
    .offer-heading h4 {
      font-size: 42px;
      font-weight: 400;
      color: #104388;
    }
    .all-offers-btn .v-btn--rounded {
      font-weight: 400;
      text-transform: unset;
      width: 35%;
      margin-top: 2em;
    }
    @media(max-width: 767px){
      .offer-temp .col-6 {
        max-width: 100%;
        margin: auto;
      }   
      .offer-temp .mob-def{
        display: block !important;
        overflow: hidden;
      }
      .offer-heading h4 {
        font-size: 26px;
      }
      .offer-heading p {
        font-size: 16px;
      }
    }
    @media (min-width:960px) and  (max-width: 1263px){
      .v-avatar.v-avatar--tile {
      height: 265px !important;
      }
    }
</style>