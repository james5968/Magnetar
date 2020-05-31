<template>
  <div>
    <Moveable
      class="moveable widgetContainer "
      :style="{
        transform: transformed,
        width: widgetWidth + 'px',
        height: widgetHeight + 'px'
      }"
      v-bind="moveable"
      @drag="handleDrag"
      @resize="handleResize"
      @scale="handleScale"
      @rotate="handleRotate"
      @warp="handleWarp"
      @pinch="handlePinch"
    >
      <moveableContainer
        :transformOn="transformOn"
        :editOn="editMode"
        :widgetHeight="widgetHeight"
        :widgetWidth="widgetWidth"
      >
        <slot name="widget" slot="widget" />
        <slot name="widget-settings" slot="widget-settings" />
      </moveableContainer>
    </Moveable>
  </div>
</template>

<script>
import Moveable from "vue-moveable";

import moveableContainer from "./moveableContainer.vue";

export default {
  components: {
    Moveable,
    moveableContainer
  },
  props: ["editMode", "widgetWidth", "widgetHeight", "transformOn","id"],
  data() {
    return {
      icon: "edit",
      editActive: false,
      moveable: {
        draggable: false,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: true,
        scalable: false,
        throttleScale: 0,
        rotatable: false,
        throttleRotate: 0,
        pinchable: false, // ["rotatable", "scalable"]
        origin: false,
        snappable: true,
        snapVertical: true,
        snapHorizontal: true,
        snapElement: true,
        snapGap: true,
        snapDigit: 5,
        bounds: { left: 0, top: 0, bottom: 1280, right: 800 },
        verticalGuidelines: [],
        horizontalGuidelines: []
      },
      transformed: ""
    };
  },

  methods: {
    handleDrag({ target, transform }) {
      this.transformed = transform;
    },
    handleResize({ target, width, height, delta }) {
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale }) {
      this.transformed = transform;
    },
    handleRotate({ target, dist, transform }) {
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      target.style.transform = transform;
    },
    handlePinch({ target, transform }) {
      target.style.transform = transform;
    },

    persist() {
      localStorage.setItem("transformed-" + this.$props.id, this.transformed);
      console.log("layout saved");
    },
    activateTransform() {
      this.moveable.draggable = !this.moveable.draggable;
    },
    handleBounds() {
      let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      let height = window.innerHeight > 0 ? window.innerHeight : screen.height;
      this.moveable.bounds = { left: 0, top: 0, bottom: height, right: width };
    }
  },
  mounted() {
    if (localStorage.getItem("transformed-" + this.$props.id)) {
      this.transformed = localStorage.getItem("transformed-" + this.$props.id)
    }else{
      let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      let scale = width/1200 
      this.transformed="matrix("+ scale +",0,0,"+ scale +",0,0)"
      
    }
    this.handleBounds();
  },
  watch: {
    editMode: function(val) {
      if (val == false) {
        this.transformOn = false;
        this.moveable.draggable = false;
        this.moveable.scalable = true;
      }
    },
    transformOn: function(val) {
      if (val == true) {
        this.moveable.draggable = true;
        this.moveable.scalable = true;
      }
      if (val == false) {
        this.moveable.draggable = false;
        this.moveable.scalable = false;
        this.persist();
      }
    }
  }
};
</script>

<style>
.centerBtn {
  margin-left: 45vw;
  margin-right: 45vw;
  margin-bottom: 25px;
}
.clockContainer {
  width: 420px;
  height: 420px;
}

.moveable-control {
  background: rgba(0, 0, 0, 0) !important;
  width: 24px !important;
  height: 24px !important;
  margin-top: -12px !important;
  margin-left: -12px !important;
  border: none !important;
  z-index: 200;
}

.moveable-line {
  background: rgba(0, 0, 0, 0) !important;
}
.moveable-direction.moveable-e,
.moveable-direction.moveable-w,
.moveable-direction.moveable-s,
.moveable-direction.moveable-n {
  display: none !important;
}
</style>
