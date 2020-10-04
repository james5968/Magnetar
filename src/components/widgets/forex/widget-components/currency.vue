<template>
  <div class="background" v-if="rate != null">
    <div class="mainContainer">
      <div class="currency">
        GBP to EUR
        <div class="rate">{{(rate.rates.EUR).toFixed(3)}}</div>
      </div>
      <div class="currency">
        GPB to AUD
        <div class="rate">{{(rate.rates.AUD).toFixed(3)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      rate: null,
      polling: null
    };
  },
  methods: {
    fetchRates: function() {
      this.$axios
        .get("https://api.ratesapi.io/api/latest?base=GBP")
        .catch(error => console.log("a connection error occured"))
        .then(response => {
          this.rate = response.data;
        });
    }
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  created() {
    this.fetchRates();
    this.polling = setInterval(() => {
      this.fetchRates();
    }, 87000000);
  }
};
</script>

<style  scoped>
.title {
  text-align: center;
  text-decoration: underline;
  font-size: 24px;
}

.currency {
  width: 200px;
  height: 150px;
  display: inline-block;
  border: 1px solid white;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  margin: 5px;
  padding-top: 15px;
}

.rate {
  font-size: 50px;
  font-weight: 700;
  text-decoration: none !important;
  margin: 0;
  text-shadow: 3px 6px rgba(20, 20, 150, 0.5);
}
.background {
  height: 100% !important;
  width: 100% !important;
  border-radius: 20px;
  background: rgba(50, 50, 50, 0.5);
  padding: 1em;
}
.mainContainer {
  flex-direction: row;
  display: flex;
  margin: 10px;
  align-items: center;
}
</style>