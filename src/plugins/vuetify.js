import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#5130fe",
                error: "#fb244e",
                success: "#00e676",
            },
        },
    },
});
