<template>
    <widgetFrame
      
      widgetWidth="420"
      widgetHeight="420"
      :transformOn="transformMode"
      :editMode="editMode"
      :arrPos="arrPos"
      id="widgetAnalogClock"
    >
      <analogClock slot="widget" />
    </widgetFrame>
</template>

<script>
import widgetFrame from "src/components/frames/widgetFrame.vue";
import analogClock from "./widget-components/mainClock.vue";

import { mapState } from "vuex";
    export default {
      props:["arrPos"],
        components: {
    widgetFrame,
    analogClock,
    
  },
  computed:{
    ...mapState("settings", ["editMode","transformMode"]),
   
  },
    }
</script>

<style lang="scss" scoped>

</style>