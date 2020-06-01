<template>
  <q-page  v-touch-hold:1000.mouse="handleHold">
    <editBar
      @close-edit="closeEdit()"
      @save-edit="closeEdit()"
      @close-check="endTransform()"
      :editMode="editMode"
      :transformMode="transformMode"
    />
    <div class="main-container">
    <component v-for="(widget, index) in activeWidgets" :key="index" :arrPos='index' :is="activeWidgets[index]"></component>
    </div>
    <div
      v-if="!editMode && !transformMode"
      class="swipe-box"
      v-touch-swipe.mouse.left="handleSwipeUp"
    ></div>
  </q-page>
</template>

<script>
import editBar from "../components/UI/editBar.vue";

import {mapActions, mapState } from "vuex";


export default {
  components:{
    editBar,
  },
  data() {
    return {
     
      
    };
  },
  computed:{
    ...mapState("settings", ["editMode","transformMode","activeWidgets"]),
   
  },
  methods: {
    ...mapActions("settings", ["setEditMode","setTransformMode"]),
    handleHold() {
      this.setTransformMode(true);
    },
    handleSwipeUp() {
      this.setEditMode(true);
    },
    endTransform() {
      this.setTransformMode(false);
    },
    closeEdit() {
     this.setEditMode(false);
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
.main-container{
  display:fixed !important;
  height:100vh;
  width:100vw;
}

</style>
