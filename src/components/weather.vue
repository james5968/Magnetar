<template>
  <div v-if="weather != null">
    <div class="weather-wrap">
      <div class="location-box">
        <div class="location">{{ weather.name }}</div>
        <div class="date">{{ dateBuilder() }}</div>
      </div>
      <div class="weather-box">
        <div>
          <span class="temp">
            <div class="temp-label">Temperature</div>
            {{ (weather.main.temp - 273.15).toFixed(1) }}°c </span
          ><span class="temp"
            ><div class="temp-label">Feels like</div>
            {{ (weather.main.feels_like - 273.15).toFixed(1) }}°c</span
          >
        </div>
        <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
      polling: null,
      request: "Redhill"
    };
  },
  computed: {
    requestURL() {
      let baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
      let apiKey = "&appid=33d91a10b952ab3cb17eab0e2f388026";
      return baseURL + this.request + apiKey;
    }
  },
  methods: {
    fetchWeather() {
      fetch(this.requestURL)
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
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
  beforeDestroy() {
    clearInterval(this.polling);
  },
  created() {
    this.fetchWeather();
    this.polling = setInterval(() => {
      this.fetchWeather();
    }, 1800000);
    console.log(this.requestURL);
  },
  mounted() {
    if (localStorage.magnetarWeather) {
      this.request = localStorage.request;
    }
  }
};
</script>

<style scoped>
.weather-wrap {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
}
.location-box {
  padding-top: 20px;
}
.location {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
.date {
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  padding: 0;
}
.temp-label {
  font-size: 18px;
  font-weight: 300;
  text-align: center;

  padding: 0;
  margin: 5px 0 -15px 0;
}
.weather-box {
  text-align: center;
}
.temp {
  display: inline-block;
  padding: 0 25px;
  font-size: 51px;
  font-weight: 700;

  margin: 0;
  text-shadow: 3px 6px rgba(20, 20, 150, 0.5);
}
.weather {
  font-size: 18px;
  padding-bottom: 5px;
}
</style>
