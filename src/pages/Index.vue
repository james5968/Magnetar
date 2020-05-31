<template>
  <q-page v-touch-hold:1000.mouse="handleHold">
    <editBar
      @close-edit="closeEdit()"
      @save-edit="closeEdit()"
      @close-check="endTransform()"
      :editMode="editMode"
      :transformMode="transformMode"
    />
    <widgetFrame
      
      widgetWidth="420"
      widgetHeight="420"
      :transformOn="transformMode"
      :editMode="editMode"
      id="analogClock"
    >
      <analogClock slot="widget" />
    </widgetFrame>
    <widgetFrame
      widgetWidth="300"
      widgetHeight="100"
      :transformOn="transformMode"
      :editMode="editMode"
      id="digitalClock"
    >
      <DigitalClock
        slot="widget"
        style="font-size:100px; line-height:65px"
        :blink="true"
      />
    </widgetFrame>
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
    <widgetFrame
      widgetWidth="480"
      widgetHeight="150"
      :transformOn="transformMode"
      :editMode="editMode"
      id="currency"
    >
      <currency slot="widget" style="width:450px; height:100px" />
    </widgetFrame>

    <div
      v-if="!editMode"
      class="swipe-box"
      v-touch-swipe.mouse.left="handleSwipeUp"
    ></div>
  </q-page>
</template>

<script>
import widgetFrame from "../components/frames/widgetFrame.vue";
import analogClock from "../components/mainClock.vue";
import DigitalClock from "vue-digital-clock";
import editBar from "../components/UI/editBar.vue";
import weather from "../components/weather.vue";
import currency from "../components/currency.vue";
import weatherSettings from "../components/weatherSettings.vue";
export default {
  components: {
    widgetFrame,
    analogClock,
    DigitalClock,
    editBar,
    weather,
    currency,
    weatherSettings
  },
  data() {
    return {
      editMode: false,
      transformMode: false,
      activeWidgets:{}
    };
  },
  methods: {
    handleHold() {
      this.transformMode = !this.transformMode;
    },
    handleSwipeUp() {
      this.editMode = true;
    },
    endTransform() {
      this.transformMode = false;
    },
    closeEdit() {
      this.editMode = false;
    }
  }
};
</script>

<style>
.swipe-box {
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  height: 100vh;
}
</style>
