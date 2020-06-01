<template>
     <widgetFrame
      widgetWidth="300"
      widgetHeight="100"
      :transformOn="transformMode"
      :editMode="editMode"
      :arrPos="arrPos"
      id="widgetDigitalClock"
    >
      <DigitalClock
        slot="widget"
        style="font-size:100px; line-height:65px"
        :blink="true"
      />
    </widgetFrame>
</template>

<script>
import widgetFrame from "src/components/frames/widgetFrame.vue";
import DigitalClock from "vue-digital-clock";

import { mapState } from "vuex";
    export default {
       props:["arrPos"],
        components: {
    widgetFrame,
    DigitalClock,
    
  },
  computed:{
    ...mapState("settings", ["editMode","transformMode"]),
   
  },
    }
</script>

<style lang="scss" scoped>

</style>