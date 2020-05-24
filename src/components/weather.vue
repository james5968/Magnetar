<template>
  <div>
    <div class="weather-wrap">
      <div class="location-box">
        <div class="location">
          {{ weather.name }}, {{ weather.sys.country }}
        </div>
        <div class="date">{{ dateBuilder() }}</div>
      </div>
      <div class="weather-box">
        <div class="temp">{{ (weather.main.temp - 273.15).toFixed(1) }}°c</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
        <div>{{ weather }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {}
    };
  },
  methods: {
    fetchWeather() {
      setInterval(function() {
        fetch(
          "http://api.openweathermap.org/data/2.5/weather?id=2639545&appid=33d91a10b952ab3cb17eab0e2f388026"
        )
          .then(res => {
            return res.json();
          })
          .then(this.setResults);
      }, 3600000);
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>

<style scoped>
.weather-wrap {
  width: 90vw;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
}
.location-box {
  padding-top: 20px;
}
.location {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
.date {
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  padding: 0;
}
.weather-box {
  text-align: center;
}
.temp {
  display: inline-block;
  padding: 0 25px;
  font-size: 102px;
  font-weight: 700;

  margin: 0;
  text-shadow: 3px 6px rgba(20, 20, 150, 0.5);
}
.weather {
  font-size: 36px;
  padding-bottom: 5px;
}
</style>
