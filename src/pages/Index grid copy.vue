<template>
  <q-page v-touch-hold:1000.mouse="handleHold">
    <editBar @save-edit="closeEdit()" @close-edit="closeEdit()" :editMode="editMode" />
    <div class="grid-shift">
      <grid-layout
        class="grid-size"
        :col-num="cols"
        :autoSize="false"
        :is-draggable="editMode"
        :is-resizable="false"
        :vertical-compact="verticalCompact"
        :margin="[10, 10]"
        :use-css-transforms="false"
        :layout.sync="layout"
        :rowHeight="100"
        :maxRows="maxRows"
        :preventColision="true"
      >
        <grid-item
          class="analog grid-item animated animate__slower"
          :class="{ editOn: editMode, pulse: editMode }"
          :i="layout[0].i"
          :x="layout[0].x"
          :y="layout[0].y"
          :w="layout[0].w"
          :h="layout[0].h"
          :minW="4"
          :maxW="4"
          :minH="4"
          :maxH="4"
        >
          <widgetContainer name="Analog Clock" :editMode="editMode">
            <clock class="clock-holder"></clock>
          </widgetContainer>
        </grid-item>

        <grid-item
          class="digital grid-item animated"
          :class="{ editOn: editMode, pulse: editMode }"
          :i="layout[1].i"
          :x="layout[1].x"
          :y="layout[1].y"
          :w="layout[1].w"
          :h="layout[1].h"
        >
          <widgetContainer name="Digital Clock" :editMode="editMode">
            <digital-clock :blink="true" class="digital-clock" />
          </widgetContainer>
        </grid-item>
        <grid-item
          class="grid-item animated"
          :class="{ editOn: editMode, pulse: editMode }"
          :i="layout[2].i"
          :x="layout[2].x"
          :y="layout[2].y"
          :w="layout[2].w"
          :h="layout[2].h"
        >
          <widgetContainer name="Weather" :editMode="editMode">
            <weather />
          </widgetContainer>
        </grid-item>
        <grid-item
          class="grid-item animated"
          :class="{ editOn: editMode, pulse: editMode }"
          :i="layout[3].i"
          :x="layout[3].x"
          :y="layout[3].y"
          :w="layout[3].w"
          :h="layout[3].h"
        >
          <widgetContainer name="Currency" :editMode="editMode">
            <currency />
          </widgetContainer>
        </grid-item>
      </grid-layout>
    </div>
  </q-page>
</template>

<script>
import clock from "../components/mainClock.vue";
import weather from "../components/weather.vue";
import compliments from "../components/compliments.vue";
import currency from "../components/currency.vue";
import DigitalClock from "vue-digital-clock";
import widgetContainer from "../components/widget-container.vue";
import editBar from "../components/editBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    clock,
    weather,
    compliments,
    currency,
    DigitalClock,
    widgetContainer,
    editBar
  },
  data() {
    return {
      editMode: false,
      cols: 12,
      maxRows: 500,
      verticalCompact: true
    };
  },
  computed: {
    ...mapState("layout", ["layout"])
  },

  methods: {
    handleHold() {
      if (this.verticalCompact) {
        this.verticalCompact = false;
      }
      this.editMode = !this.editMode;
    },
    closeEdit() {
      this.editMode = false;
    },
    width() {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (width > 1200) {
        this.cols = 12;
      } else if (width > 1000) {
        this.cols = 10;
      } else if (width > 800) {
        this.cols = 8;
      } else if (width > 600) {
        this.cols = 6;
      } else if (width > 400) {
        this.cols = 4;
      } else if (width > 200) {
        this.cols = 2;
      }
    },
    height() {
      var height = window.innerHeight > 0 ? window.innerHeight : screen.height;
      this.maxRows = height / 100;
      console.log(this.maxRows);
    }
  },
  created() {
    this.width();
    this.height();
  }
};
</script>

<style></style>
