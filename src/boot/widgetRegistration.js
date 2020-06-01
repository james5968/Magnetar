import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { LocalStorage } from "quasar";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    // Look for files in the Widget component directory
    '../components/widgets',
    // Look in subdirectories
    true,
    // Only include "widget-" prefixed .vue files
    /widget-[\w-]+\.vue$/
)
var widgets = [];

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )


    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )
    widgets.push(componentName)
})
LocalStorage.set("magnetar-widgets", widgets);