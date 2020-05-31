<template>
  <div >
    <p class="q-ma-md">Location: {{location}} <q-btn class="q-ml-sm"label="Change" rounded outline color="primary" @click="prompt = true" /></p>
     
      <q-btn class="fixed-bottom-right q-ma-md"outline rounded color="white" label="APPLY CHANGES" />
      <div>
       <q-toggle
       class="q-ml-md"
        v-model="dense"
        label="Show 'Feels like'"
      />
      </div>
       <q-toggle
       class="q-ml-md"
        v-model="dense"
        label="Convert to Fahrenheit"
      />

      <q-dialog v-model="prompt"  persistent>
      <q-card dark style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Location</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dark dense v-model="location" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Change Location" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location:"Redhill",
      text: '',
      ph: '',
      prompt: false,

      dense: false
    }
  }
}
</script>

<style scoped>
.input{
    width:80%;
}
.dialog{
 
}
</style>
