<template>
  <figure class="analog-clock">
    <figcaption class="analog-clock__face">
      <span
        v-for="n in 60"
        :key="n"
        class="analog-clock__notch"
        :class="{ '-long': !(n % 5) }"
        :style="{ transform: `rotate(${n * 6}deg)` }"
      >
      </span>
    </figcaption>

    <span class="analog-clock__hand -seconds" :style="seconds"></span>
    <span class="analog-clock__hand -minutes" :style="minutes"></span>
    <span class="analog-clock__hand -hours" :style="hours"></span>
  </figure>
</template>

<script>
export default {
  props: { minute: Number, tick: Number },
  data() {
    return {
      rotation: { hours: 0, minutes: 0, seconds: 0 }
    };
  },
  computed: {
    hours() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.hours}deg)`
      };
    },
    minutes() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.minutes}deg)`
      };
    },
    seconds() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.seconds}deg)`
      };
    }
  },
  watch: {
    tick() {
      this.rotation.seconds += 6;
      this.rotation.minutes += 0.1;
    },
    minute(to, from) {
      if (from === to) return;
      this.rotation.hours += 0.5;
    }
  },
  mounted() {
    let date = new Date();
    let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    this.rotation = {
      hours: h * 30 + m * 0.5,
      minutes: m * 6 + s * 0.1,
      seconds: s * 6
    };
  }
};
</script>

<style scoped></style>
