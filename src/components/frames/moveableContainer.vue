<template>
  <div
    class=" animated animate__slower "
    :class="{ pulse: transformOn, editActive: editOn || transformOn }"
    :style="{
      width: widgetWidth + 'px',
      height: widgetHeight + 'px',
    }"
  >
 
    <q-btn class="closeBtn" @click="deleteConfirm" :disable="settingsVisible" v-if="editOn && !transformOn" icon="delete" />

    <q-btn
      class="settingBtn"
      :disable="deleteConfirmVisible"
      @click="showSettings"
      v-if="editOn && !transformOn"
      icon="settings"
    />
    <div class="deleteConfirm" v-if="deleteConfirmVisible && editOn">
      
        <div>
          <q-btn
      class="cancelBtn"
     label="Cancel"
     @click="deleteConfirm"
    />
    
    <q-btn
      class="confirmBtn"
      @click="removeWidgetMethod"
      label="Confirm"
    />
          </div>
           
      </div>
    <div class="clockContainer2">
      
      <slot name="widget" />
      
      <div class="settingsWindow" v-if="settingsVisible && editOn">
      <slot name="widget-settings"><p class="q-ma-sm  text-center" style="font-size:0.75em">No settings avaliable for this widget!</p></slot>
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  props: ["editOn", "transformOn", "widgetWidth", "widgetHeight","id","arrPos"],
  data() {
    return {
      settingsVisible: false,
      deleteConfirmVisible:false
    };
  },
  methods: {
    ...mapActions("settings",["removeWidget"]),
    removeWidgetMethod(){
      this.removeWidget(this.arrPos)

    },
    showSettings() {
      this.settingsVisible = !this.settingsVisible;
    },
    deleteConfirm(){
      this.deleteConfirmVisible = !this.deleteConfirmVisible
    }
  },
  watch: {
    editOn: function(value) {
      if(value == false){
        this.settingsVisible = false
      }
    }
  }
};
</script>

<style scoped>
.editActive {
  border: 3px dotted rgba(255, 255, 255, 0.5) !important;
  border-radius: 25px;
}
.clockContainer2 {
  position: absolute;
  margin: 12px;
}
.fixed-containter{
  position:fixed !important;
}
</style>
