import { LocalStorage } from "quasar";


export function setEditMode({ commit }, value) {
    commit("setEditMode", value);
}

export function setTransformMode({ commit }, value) {
    commit("setTransformMode", value);
}
export function removeWidget({ commit }, value) {
    commit("removeWidget", value);
}
export function addNewWidget({ commit }, value) {
    commit("addNewWidget", value);
}


export function setLocation({ commit, dispatch }, value) {
    commit("setLocation", value);
    dispatch("saveSettings");
}
export function setFahrenheit({ commit, dispatch }, value) {
    commit("setFahrenheit", value);
    dispatch("saveSettings");
}

export function setFeelsLike({ commit, dispatch }, value) {
    commit("setFeelsLike", value);
    dispatch("saveSettings");
}
export function saveSettings({ state }) {
    LocalStorage.set("magnetar-settings", state.settings);
}
export function getSettings({ commit }) {
    let settings = LocalStorage.getItem("magnetar-settings");
    if (settings) {
        commit("setSettings", settings);
    }
}
export function getWidgets({ commit }) {;
    commit("getWidgets", LocalStorage.getItem("magnetar-widgets"));
}