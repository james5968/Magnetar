<template>
  <widgetFrame
    widgetWidth="500"
    widgetHeight="240"
    :transformOn="transformMode"
    :editMode="editMode"
    :arrPos="arrPos"
    id="widgetForex"
  >
    <currency slot="widget" style="width:450px; height:100px" />
  </widgetFrame>
</template>

<script>
import widgetFrame from "src/components/frames/widgetFrame.vue";
import currency from "./widget-components/currency.vue";

import { mapState } from "vuex";
export default {
  props: ["arrPos"],
  components: {
    widgetFrame,
    currency
  },
  computed: {
    ...mapState("settings", ["editMode", "transformMode"])
  }
};
</script>

<style lang="scss" scoped>
</style>