<template>
     <widgetFrame
      widgetWidth="630"
      widgetHeight="230"
      :transformOn="transformMode"
      :editMode="editMode"
      :arrPos="arrPos"
      id="widgetWeather"
    >
      <weather slot="widget" style="width:600px; height:200px" />
      <weatherSettings slot="widget-settings"  />
    </widgetFrame>
</template>

<script>
import widgetFrame from "src/components/frames/widgetFrame.vue";
import weather from "./widget-components/weather.vue";
import weatherSettings from "./widget-components/weatherSettings.vue";
import { mapState } from "vuex";
    export default {
      props:["arrPos"],
        components: {
    widgetFrame,
    weather,
    weatherSettings
  },
  computed:{
    ...mapState("settings", ["editMode","transformMode"]),
   
  },
    }
</script>

<style lang="scss" scoped>

</style>