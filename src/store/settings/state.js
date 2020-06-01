export default function() {
    return {
        settings: {
            weather: {
                location: "London",
                feelsLike: true,
                fahrenheit: false,

            },
            digitalClock: {},
            analogClock: {},
            currency: {},
        },
        activeWidgets: [
            "widgetAnalogClock",
            "widgetDigitalClock",
            "widgetWeather",
            "widgetForex"
        ],
        widgets: [],

        editMode: false,
        transformMode: false,

    }
}