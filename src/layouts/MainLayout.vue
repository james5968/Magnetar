<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer :width="200" v-model="left" side="left" overlay behavior="mobile">
      <q-list class="fit" padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="widgets" />
          </q-item-section>

          <q-item-section>
            Modules
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            Settings
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section>
            About
          </q-item-section>
        </q-item>
      </q-list>
      <q-img
        class="absolute-bottom q-mb-md"
        src="../assets/logo-circle.png"
        style="height: 150px"
        contain
      >
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  }
};
</script>
