<template>
  <q-page>
    <div class="row justify-center">
      <clock class="clock-holder "></clock>
    </div>
    <div class="row weather-comp justify-center ">
      <weather />
    </div>
  </q-page>
</template>

<script>
import clock from "../components/mainClock.vue";
import weather from "../components/weather.vue";
export default {
  components: {
    clock,
    weather
  }
};
</script>

<style>
.clock-holder {
  max-width: 90vmin !important;
  max-height: 90vmin !important;
  width: 45vw;
  transform: scale(0.7);
}
.weather-comp {
  margin-top: 300px;
  transform: scale(0.5);
}
</style>
