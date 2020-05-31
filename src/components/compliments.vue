<template>
  <div><h3>{{compliments[counter]}}</h3></div>
</template>

<script>
export default {
  data() {
    return {
      compliments: [
        "I wove you sweetie pie!",
        "Dont forget to give James SNUGGGLEESSS!",
        "Look at that sexy gurrrllll!",
        "lets get shit done!"
      ],
      counter: 0,
      polling:null
    };
  },
  methods:{
    nextCompliment:function(){
      if(this.counter == (this.compliments.length)-1){
        this.counter = 0;
      }else{
        this.counter++
      }
      
    }
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  created() {
    this.nextCompliment();
    this.polling = setInterval(() => {
      this.nextCompliment();
    }, 900000
);
  }
};
</script>

<style scoped>
.compliment {
  color: white;
  background-color: rgb(200, 200, 200);
  font-size: 56px;
}
</style>
