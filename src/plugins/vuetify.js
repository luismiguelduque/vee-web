import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {

});

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#5130fe",
                secondary: "#927dff",
                error: "#fb244e",
                success: "#00e676",
            },
        },
    },
});
