import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#1DA1F2", // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.orange // #3F51B5
      }
    }
  }
});
