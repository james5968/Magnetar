<template>
<div>
  <div class="transformBar " v-if="transformMode">
      <q-btn
        class="add-widget "
        @click="$emit('close-check')"
        round
        color="white"
        icon="check"
      />
    </div>
  <transition name="fade">
    
    
    <div class="editBar " v-if="editMode">
      <div>
        <q-btn
          @click.stop="$emit('close-edit')"
          class="clsSave "
          round
          color="white"
          icon="close"
        />
      </div>
      <div>
        <q-btn class="add-widget " round color="white" icon="add" @click="seamless = true" />
      </div>
      <div>
        <q-btn
          class="clsSave "
          round
          color="white"
          icon="save"
          @click.stop="$emit('save-edit')"
        />
      </div>
    </div>
    
  </transition>
  <q-dialog v-model="seamless" seamless position="bottom">
      <q-card dark style="width:80vw; height:25vw; max-width:100vw; background:black; -webkit-box-shadow: -1px -7px 35px 3px rgba(255,255,255,0.5);
-moz-box-shadow: -1px -7px 35px 3px rgba(255,255,255,0.5);
box-shadow: -1px -7px 35px 3px rgba(255,255,255,0.5); ">
        

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">Avaliable Widgets</div>
          </div>
          <q-space />
          <q-btn flat round icon="close" v-close-popup />
        </q-card-section>
        <q-card-section style="overflow-y:hidden;
  overflow-x:scroll;">
          <span   v-for="widget in widgets" :key="widget">
           
          <q-card  v-ripple @click="addWidget(widget)" v-close-popup  dark bordered class="bg-grey-9 my-card q-ma-md relative-position ">
      <q-card-section>
        <div class="text-h6">{{widget}}</div>
        
      </q-card-section>

    </q-card>
    
    </span>

        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default { props: ["editMode", "transformMode"],
data(){
  return{
    seamless: false
  }
},
computed:{
  ...mapState("settings",["widgets"])
},
methods:{
  ...mapActions("settings",["addNewWidget"]),
  addWidget(widget){
    this.addNewWidget(widget)
  }
}

};
</script>

<style  scoped>
.my-card{
  display:inline-block;
  width:43%;
  height:100%;
  max-height:100%;
 
  text-align:center;
}
</style>
