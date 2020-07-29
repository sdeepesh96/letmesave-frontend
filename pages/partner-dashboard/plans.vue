<template>
  <div class="partner-dash">
    <v-container>
      <div class="plans">
        <h3>Find a plan thats right for you</h3>
        <v-alert
          :type="alertType"
          outlined
          dismissible
          class="mt-5"
          v-model="alert"
          >{{ alertMsg }}</v-alert
        >

        <v-row v-if="planList.length > 0">
          <v-col
            v-for="(plan, i) in planList"
            :key="plan.id"
            cols="12"
            xs="12"
            sm="6"
            md="6"
            lg="3"
          >
            <div class="plan stand">
              <h3>{{ plan.planName }}</h3>
              <p class="price">{{ plan.planAmount }}<span>$ / month</span></p>
              <div class="save-sec">
                <p>
                  Sale Offer<span>{{ plan.salesOfferCount }} Types</span>
                </p>
              </div>
              <div class="save-sec">
                <p>
                  Save Food<span>{{ plan.saveFoodCount }} Types</span>
                </p>
              </div>
              <v-btn
                rounded
                :disabled="plan.plan_active == 1"
                color="#24b149"
                x-large
                @click="updatePlan(plan, i)"
                :loading="loading && i == loadingIndex"
              >
                <span v-if="plan.plan_active == 1">
                  Availed
                </span>
                <span v-else>
                  Get it Now
                </span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <p>Please contact us for any queries</p>
        <p>info@letme-save.com</p>
        <p>+11 1234567890</p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "partner-dashboard",
  data() {
    return {
      loadingIndex: -1,
      planList: [],
      loading: false,
      alert: false,
      alertType: null,
      alertMsg: ""
    };
  },
  mounted() {
    this.getPlanList();
  },
  methods: {
    async updatePlan(plan, i) {
      this.loadingIndex = i;
      this.loading = true;
      try {
        await this.$axios
          .post("Mobile/Partner/UpdatePlan", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken,
            PlanId: plan.id.toString()
          })
          .then(response => {
            console.log(response.data);
            if (response.data.status == 200) {
              this.alertType = "success";
              this.alert = true;
              this.alertMsg = response.data.message;
            } else {
              this.alertType = "error";
              this.alert = true;
              this.alertMsg = response.data.message;
            }
          });
      } catch (error) {
        console.log(error);
        this.alertType = "error";
        this.alert = true;
        this.alertMsg = error;
      }
      this.loading = false;
      this.loadingIndex = -1;
      this.getPlanList();
    },
    async getPlanList() {
      try {
        await this.$axios
          .post("Mobile/Partner/PlanList", {
            Id: this.$store.state.userData.id.toString(),
            AccessToken: this.$store.state.userData.userAccessToken
          })
          .then(response => {
            this.planList = response.data.data;
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
p {
  color: #333;
}
.partner-dash {
  background: #eaedf4;
}
.plan {
  padding: 2em 2em 1em;
  text-align: center;
  border-radius: 10px;
}
.plan.free {
  background: #ddd6f0;
  border: 5px solid #c4bbe3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.plan.pre {
  background: #d6f0e2;
  border: 5px solid #a7d6c3;
}
.plan.enter {
  background: #f0f0d6;
  border: 5px solid #e0daa7;
}
.plan.stand {
  background: #d6e5f0;
  border: 5px solid #bad2e5;
}
.plan > h3 {
  color: #fff;
  margin: 0 10px;
  font-weight: 400;
  border-radius: 5px;
  padding: 10px 0;
  text-transform: uppercase;
  font-size: 20px;
}
.plan.pre > h3 {
  background: #36b889;
}
.plan.enter > h3 {
  background: #fba705;
}
.plan.stand > h3 {
  background: #538ab1;
}
.plan.free > h3 {
  background: #7960b9;
}
.plan p.price > span {
  font-size: 26px;
}
.plan p.price {
  font-size: 54px;
  margin-top: 20px;
  font-weight: 500;
}
.plan .save-sec > p > span {
  display: block;
  font-size: 26px;
  font-weight: 500;
}
.plan .save-sec > p {
  display: block;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 400;
  line-height: 1.1;
}
.plan button.v-btn {
  color: #fff !important;
  width: 100%;
  margin-top: 1em;
  font-weight: 400;
  font-size: 20px;
}
.plan
  button.v-btn.v-btn--contained.v-btn--disabled.v-btn--rounded.theme--light.v-size--x-large {
  background: #929292 !important;
}
.plans > p {
  text-align: center;
  color: #1d4d8e;
  margin: 5px;
  font-size: 20px;
  font-weight: 500;
}
.plans {
  margin: 5em 0 8em;
}
.plans > h3 {
  text-align: center;
  margin-bottom: 1em;
  font-size: 26px;
  font-weight: 500;
  color: #333;
}
.plans > p:nth-child(3) {
  margin-top: 3em;
}
</style>
