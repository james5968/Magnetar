<template>
  <transition name="fade">
    <div class="transformBar " v-if="transformMode">
      <q-btn
        class="add-widget "
        @click="$emit('close-check')"
        round
        color="white"
        icon="check"
      />
    </div>
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
        <q-btn class="add-widget " round color="white" icon="add" />
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
</template>

<script>
export default { props: ["editMode", "transformMode"] };
</script>

<style lang="scss" scoped></style>
