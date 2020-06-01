<template>
  <div >
    <p class="q-ma-md">Location: {{location}} <q-btn class="q-ml-sm"label="Change" rounded outline color="primary" @click="prompt = true" /></p>
     
      
      <div>
       <q-toggle
       class="q-ml-md"
        v-model="feelsLike"
        label="Show 'Feels like'"
      />
      </div>
       <q-toggle
       class="q-ml-md"
        v-model="fahrenheit"
        label="Convert to Fahrenheit"
      />

      <q-dialog v-model="prompt"  persistent>
      <q-card dark style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Location</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dark dense v-model="tempLocation" autofocus @keydown.enter="changeLocation" @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Change Location" @click="changeLocation" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters } from "vuex";
export default {
  
  data () {
    return {
      tempLocation:"",
      text: '',
      ph: '',
      prompt: false,

      
    }
  },
  computed:{
     ...mapGetters("settings", ["settingsWeather"]),
     location: {
      get() {
        return this.settingsWeather.location;
      },
      set(value) {
        this.setLocation(value);
      }
  },
  feelsLike:{
    get() {
        return this.settingsWeather.feelsLike;
      },
      set(value) {
        this.setFeelsLike(value);
      }
  },
   fahrenheit:{
    get() {
        return this.settingsWeather.fahrenheit;
      },
      set(value) {
        this.setFahrenheit(value);
      }
  }
  
  },methods:{
    ...mapActions("settings",["setLocation","setFeelsLike","setFahrenheit"]),
    changeLocation(){
      this.location = this.tempLocation
    }
  },
  mounted(){
    this.tempLocation = this.location
  }
}
</script>

<style scoped>
.input{
    width:80%;
}
.dialog{
 
}
</style>
