import { createApp, watch } from "vue"
import App from "./App.vue"
const app = createApp(App)

// Tailwind
import "./assets/tailwind.css"

// FormKit
import { plugin, defaultConfig, FormKit } from "@formkit/vue"
import { generateClasses } from "@formkit/themes"
import theme from "@/assets/formkitTheme"
app.use(
  plugin,
  defaultConfig({
    plugins: [],
    config: {
      classes: generateClasses(theme),
    },
  })
)
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FormKit: typeof FormKit
  }
}

// CSS
import "./assets/main.css"

// Router
import router from "./router"
app.use(router)

app.mount("#app")
