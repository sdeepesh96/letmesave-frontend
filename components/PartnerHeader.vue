<template>
  <div class="head-shad">
    <v-container class="header-menu">
      <v-toolbar flat height="55px">
        <v-toolbar-title class="head-logo">
          <nuxt-link to="/">
            <img src="~/assets/Logo.png" alt="logo" />
          </nuxt-link>
        </v-toolbar-title>
        <p class="left hotel-name" v-for="(item, i) in items" :key="i">
          {{item.title}}:
          <span>{{item.id}}</span>
        </p>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-text-field
                  hide-details
                  append-icon="mdi-search-web"
                  single-line
                  placeholder="Search for reservations"
                ></v-text-field>
              </template>
            </v-menu>
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on" :to=" '/partner-dashboard/profile'">
                  <v-icon right dark>mdi-silverware-variant</v-icon>
                  <p class="hotel-name" v-for="(item, i) in items" :key="i">{{item.title}}</p>
                </v-btn>
              </template>
            </v-menu>
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on">
                  <v-icon right dark>mdi-dots-horizontal</v-icon>
More
                </v-btn>
              </template>
            </v-menu>
          </div>
          <div class="menu-item">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text small color="#104388" v-on="on">
                  <v-icon right dark>mdi-help</v-icon>Help
                </v-btn>
              </template>
            </v-menu>
          </div>
        </v-toolbar-items>

        <v-toolbar @click.stop="drawer = !drawer" class="hidden-md-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar>
      </v-toolbar>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <nuxt-link to="#">
          <v-list-group append-icon="mdi-silverware-variant">
            <template v-slot:activator>
              <p class="hotel-name" v-for="(item, i) in items" :key="i">{{item.title}}</p>
            </template>
          </v-list-group>
        </nuxt-link>
        <nuxt-link to="#">
          <v-list-group append-icon="mdi-dots-horizontal">
            <template v-slot:activator>More</template>
          </v-list-group>
        </nuxt-link>
        <nuxt-link to="#">
          <v-list-group append-icon="mdi-help">
            <template v-slot:activator>Help</template>
          </v-list-group>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  //   data ( ) {
  //       return{
  //         drawer: null
  //       }
  //   }
  data: () => ({
    items: [
      {
        title: "Oppdal Hotel",
        id: "1234567890"
      }
    ],
    drawer: null
  })
};
</script>

<style scoped>
.menu-item {
  margin: auto;
}
.menu-item .v-btn.v-size--small {
  text-transform: unset;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
}
.menu-style .v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  min-height: 40px;
  outline: none;
  padding: 0 10px;
  position: relative;
  text-decoration: none;
  font-size: 14px;
}
.theme--light.v-btn--active::before {
  opacity: 0.12;
  background: #fff;
}
a {
  text-decoration: none;
  color: #000000de;
}
.menu-style a {
  text-decoration: none;
  color: #104388;
}
.menu-style a:hover {
  color: #fff;
}
.menu-style .v-list-item:hover {
  background: #104388;
  color: #fff !important;
}
.v-list-group.no-sub-menu > div > div {
  display: none;
}
.header-menu {
  padding: 0 12px;
}
.head-shad {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.head-logo img {
  width: 220px;
}
p.hotel-name {
  color: #104388;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
}
p.hotel-name.left {
  margin: 0 0 0 2em;
}
.menu-item .v-btn > .v-btn__content .v-icon {
  font-size: 14px;
  color: #fff;
  background: #24b149;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  margin-right: 5px;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: unset !important;
}

@media (min-width: 1024px) and (max-width: 1263px) {
  p.hotel-name.left {
    display: none;
  }
}

@media (max-width: 1200px) {
  .menu-item .v-btn.v-size--small {
    padding: 2px;
    margin: 3px !important;
  }
}

@media (max-width: 1023px) {
  .head-logo img {
    width: 180px;
  }
  .hidden-md-and-up {
    box-shadow: unset;
  }
  .hidden-md-and-up .v-icon.v-icon {
    margin-left: auto;
  }
}
@media (max-width: 550px) {
  p.hotel-name.left {
    display: none;
  }
  aside.v-navigation-drawer.v-navigation-drawer--absolute.v-navigation-drawer--is-mobile.v-navigation-drawer--open.v-navigation-drawer--temporary.theme--light
    i {
    display: none;
  }
}
</style>










