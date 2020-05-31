import Vue from "vue";
import axios from "axios";
import VueGridLayout from "vue-grid-layout";
import VueFriendlyIframe from "vue-friendly-iframe";
Vue.use(VueFriendlyIframe);
Vue.use(VueGridLayout);
const axiosInstance = axios.create({
    baseURL: "https://api.ratesapi.io/api/latest?base=GBP"
});
export default ({ Vue }) => {
    Vue.prototype.$axios = axios;
};
export { axiosInstance };