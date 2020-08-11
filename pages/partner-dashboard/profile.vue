<template>
  <div class="profile-sec">
    <div class="profile-cover">
      <img :src="items.cover_picture" alt="Cover image" />
      <!-- <div class="cover-edit">
        <img src="~/assets/edit.png" alt="edit" />
      </div>-->
    </div>

    <v-container>
      <div class="profile-desc">
        <div class="profile-img">
          <!-- <img :src="item.src" alt="Cover image" /> -->
          <img :src="items.store_picture" alt="Cover image" />
          <!-- <div>
            <img src="~/assets/edit.png" alt="edit" class="edit-icon" />
          </div>-->
        </div>
        <div class="profile-desc-sec">
          <div class="profile-title">
            <div>
              <h3>{{ items.store_name }}</h3>
              <p>{{ items.address }}</p>
            </div>
            <div>
              <nuxt-link
                to="/partner-dashboard/update-profile-step1"
                class="edit-btn"
              >
                <img src="~/assets/edit.png" alt="edit" /> Edit Profile
              </nuxt-link>
            </div>
          </div>
          <p>{{ items.store_description }}</p>
        </div>
      </div>
      <div class="profile-listing">
        <v-row>
          <v-col cols="12" xs="12" sm="4" md="4" lg="4">
            <h3>Store Details</h3>
            <div>
              <h5>Business Name</h5>
              <p>{{ items.store_name }}</p>
            </div>
            <div>
              <h5>Address</h5>
              <p>{{ items.address }}</p>
              <p>
                {{ items.city_name }}, {{ items.state_name }},
                {{ items.country_name }}.
              </p>
            </div>
            <div>
              <h5>Currency</h5>
              <p>{{ items.bankcurrencyid }}</p>
            </div>
            <div>
              <h5>Name</h5>
              <p>{{ items.contact_person_name }}</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>{{ items.email }}</p>
            </div>
            <div>
              <h5>Phone</h5>
              <p>{{ items.contact_number }}</p>
              <p>{{ items.alternative_contact_number }}</p>
            </div>
            <div>
              <h5>Website</h5>
              <p>{{ items.website }}</p>
            </div>
            <div>
              <h5>Agent referal ID</h5>
              <p>{{ items.refferral_code }}</p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="4" md="4" lg="4">
            <h3>Banking Details</h3>
            <div>
              <h5>Company Legal Name</h5>
              <p>{{ items.legal_name }}</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>{{ items.email }}</p>
            </div>
            <div>
              <h5>Account Number</h5>
              <p>{{ items.bank_account_number }}</p>
            </div>
            <div>
              <h5>Swift Code</h5>
              <p>{{ items.swift_code }}</p>
            </div>
            <div>
              <h5>Bank Name</h5>
              <p>{{ items.bank_name }}</p>
            </div>
            <div>
              <h5>Payment Cycle</h5>
              <p>{{ items.payment_cycle }}</p>
            </div>
            <div>
              <h5>Invoice Email Id</h5>
              <p>{{ items.invoicing_email }}</p>
            </div>
            <div>
              <h5>VAT (Tax Number)</h5>
              <p>{{ items.tax_number }}</p>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="4" md="4" lg="4">
            <h3>Other Details</h3>
            <div>
              <h5>Chain</h5>
              <p>
                <span v-for="item in items.chain" :key="item.id">{{
                  item.others || item.name
                }}</span>
              </p>
            </div>
            <div>
              <h5>Store Type</h5>
              <p>
                <span v-for="item in items.store_type" :key="item.id">{{
                  item.others || item.name
                }}</span>
              </p>
            </div>
            <div>
              <h5>Parking</h5>
              <p>
                <span v-for="item in items.parking" :key="item.id">{{
                  item.others || item.name
                }}</span>
              </p>
            </div>
            <div>
              <h5>Landmark</h5>
              <p>
                <span v-for="item in items.landmark" :key="item.id">{{
                  item.others || item.name
                }}</span>
              </p>
            </div>
            <div>
              <h5>Accepted Payment Method</h5>
              <!-- <p v-if="items.payment_method">
              {{items.payment_method}}-->
              <p>
                <span
                  v-for="(item, index) in items.payment_method"
                  :key="item.id"
                  >{{ item.name == "Others" ? item.others : item.name
                  }}{{
                    index == items.payment_method.length - 1 ? "." : ", "
                  }}</span
                >
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: "partner-dashboard",
  data: () => ({
    items: {},
    myNae: ""
  }),
  async mounted() {
    try {
      await this.$axios
        .post("/Mobile/partner/GetPartnerDetailsById", {
          PartnerId: this.$store.state.userData.userID,
          Id: this.$store.state.userData.id.toString(),
          AccessToken: this.$store.state.userData.userAccessToken
        })
        .then(response => {
          console.log(response.data.data);
          this.items = response.data.data;
          this.myNae = response.data.data.address;
        });
    } catch (e) {
      console.log(e);
    }
  },
  middleware({ store, redirect }) {
    if (!store.state.userData) {
      return redirect("/account/login?role=2");
    }
  }
};
</script>
<style scoped>
.profile-sec {
  background: #eaedf4;
}
p {
  color: #4a4a4a;
  font-weight: 500;
}
.profile-title h3 {
  font-size: 22px;
  font-weight: 500;
  color: #104388;
}
.profile-cover > img {
  width: 100%;
  object-fit: cover;
  height: 350px;
}
.profile-cover {
  position: relative;
}
.cover-edit {
  position: absolute;
  bottom: 8%;
  right: 15%;
  background: #24b149;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: grid;
}
.cover-edit > img {
  margin: auto;
}
.profile-desc {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 3em;
}
.profile-img > img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  position: relative;
}
.profile-img {
  position: relative;
  margin-top: -25%;
}
.profile-img > div > img {
  margin: auto;
}
.profile-img > div {
  position: absolute;
  bottom: 20px;
  background: #24b149;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: grid;
  right: -10px;
}
.profile-title {
  display: grid;
  grid-template-columns: 1fr max-content;
}
.profile-title > div {
  align-self: center;
}
a.edit-btn {
  background: #24b149;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
}
a.edit-btn > img {
  margin-bottom: -5px;
}
.profile-listing h3 {
  font-weight: 500;
  color: #104388;
  font-size: 22px;
  border-bottom: 1.5px solid #24b149;
}
.profile-listing {
  margin: 2em 0 4em;
}
.profile-listing h5 {
  color: #104388;
  margin-top: 2em;
  font-weight: 500;
}
.profile-listing p {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}
</style>
