<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
 mounted() {
    this.getSettings();
    this.getWidgets()
 },
 methods: {
    ...mapActions("settings", ["getSettings","getWidgets"]),
 }
}
</script>
