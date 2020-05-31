<template>
     <widgetFrame
      widgetWidth="630"
      widgetHeight="230"
      :transformOn="transformMode"
      :editMode="editMode"
      id="weather"
    >
      <weather slot="widget" style="width:600px; height:200px" />
      <weatherSettings slot="widget-settings"  />
    </widgetFrame>
</template>

<script>
import widgetFrame from "src/components/frames/widgetFrame.vue";
import weather from "./widget-components/weather.vue";
import weatherSettings from "./widget-components/weatherSettings.vue";
    export default {
        components: {
    widgetFrame,
    weather,
    weatherSettings
  },
    }
</script>

<style lang="scss" scoped>

</style>