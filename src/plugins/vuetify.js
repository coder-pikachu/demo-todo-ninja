import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    
  },
  theme: {
    themes: {
      
        primary: '#006064',
        secondary: '#424242',
        accent: '##B2EBF2',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      
      },
    },
  });

