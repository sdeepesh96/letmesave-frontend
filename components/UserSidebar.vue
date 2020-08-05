<template>
  <div class="user-sidebar">
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/profile">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/clock.png" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <nuxt-link to="/user/settings">
          <v-list-item>
            <v-list-item-icon>
              <img src="~/assets/clock.png" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Terms of Use</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Invite Friends</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Refer a Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Send Feedback</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <img src="~/assets/clock.png" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
a {
  text-decoration: none;
}
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 10px;
}
.user-sidebar img {
  width: 24px;
}
.v-list.v-sheet.v-sheet--tile.theme--light.v-list--dense {
  margin: 0;
  padding: 4px 0;
}
.user-sidebar {
  padding: 3em 0;
}
.v-list-item__title {
  font-size: 16px !important;
}
@media (max-width: 767px) {
  .user-sidebar {
    padding: 0;
  }
}
</style>