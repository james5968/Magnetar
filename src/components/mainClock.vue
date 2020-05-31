<template>
  <main v-if="tick">
    <template>
      <analog-clock :minute="time.minutes" :tick="tick"></analog-clock>
    </template>
  </main>
</template>

<script>
import AnalogClock from "./analogClock.vue";

export default {
  components: { AnalogClock},
  data() {
    return {
      tick: 0,
      time: { hours: 0, minutes: 0, seconds: 0 }
    };
  },
  methods: {
    updateTime(time) {
      this.tick++;
      this.time = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      };

      setTimeout(
        () => this.updateTime(new Date()),
        1000 - new Date().getMilliseconds()
      );
    }
  },
  mounted() {
    this.updateTime(new Date());
  }
};
</script>

<style lang="scss">
.analog-clock {
  width: 390px;
  height: 390px;

  margin-left: 26px;
  margin-top: 197px;

  border-radius: 100%;
  position: inline-block;
  background-color: black;
  border: 2px solid white;
  transform: translate3d(-1.5rem, -50%, 0);

  &::after {
    top: 50%;
    left: 50%;
    content: "";
    width: 1.5%;
    height: 1.5%;
    position: absolute;
    border-radius: 100%;
    background-color: white;
    transform: translate3d(-50%, -50%, 0);
  }

  &__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__notch {
    transform-origin: 50% 100%;
    position: absolute;
    width: 0px;
    height: 49%;
    bottom: 50%;
    left: 50%;

    &::after {
      content: "";
      width: 100%;
      height: 2.5%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
    }

    &.-long::after {
      width: 4px;
      height: 2.5%;
    }
  }

  &__hand {
    transform-origin: 50% 100%;
    background-color: white;
    position: absolute;
    width: 5px;
    height: 40%;
    bottom: 50%;
    left: 50%;
    border-radius: 2px;
    transition: transform 1s linear;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 10%;
      background-color: inherit;
      backface-visibility: hidden;
    }

    &.-hours {
      height: calc(100% / 3);
      width: 5px;
      border-radius: 3px;
      transition: transform 60s linear;
    }

    &.-seconds {
      width: 3px;
      height: 45%;
      border-radius: 1px;
      background-color: rgb(200, 200, 200);
      transition: transform 100ms cubic-bezier(0.6, 0.05, 0, 1.6);

      &::after {
        height: 12.5%;
      }
    }
  }
}
</style>
