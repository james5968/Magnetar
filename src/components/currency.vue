<template>
<div v-if="rate != null">
    <div class="title">
        Exchange rates from Pounds
    </div>
    <div class="currency">Euro: {{(rate.rates.EUR).toFixed(2)}}</div><div class="currency"> Australian Dollar: {{(rate.rates.AUD).toFixed(2)}}</div>
    </div>
</template>

<script>
import Vue from 'vue'

    export default {
    data() {
        return {
        rate: null,
         polling: null
        }
    },
    methods: {
        fetchRates: function(){
            this.$axios.get('https://api.ratesapi.io/api/latest?base=GBP').then((response) => {
            this.rate = response.data
                })
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
}
    

</script>

<style  scoped>
.title{
    text-align:center;
    text-decoration:underline;
    font-size:24px;
}
.currency{
    text-align:center;
    font-size:30px
}
</style>