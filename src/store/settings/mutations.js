export function setEditMode(state, value) {
    state.editMode = value;
}

export function setTransformMode(state, value) {
    state.transformMode = value;
}

export function setLocation(state, value) {
    state.settings.weather.location = value;
}
export function setFeelsLike(state, value) {
    state.settings.weather.feelsLike = value;
}
export function setFahrenheit(state, value) {
    state.settings.weather.fahrenheit = value;
}

export function removeWidget(state, value) {

    state.activeWidgets.splice(value, 1);
}
export function addNewWidget(state, value) {

    state.activeWidgets.push(value);
}

export function setSettings(state, settings) {
    Object.assign(state.settings, settings);
}

export function getWidgets(state, widgets) {
    Object.assign(state.widgets, widgets);
}