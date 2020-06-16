<template>
    <v-row align="center" justify="center">
        <v-col class="text-center">
            <v-card>
                <v-card-title>Caminata al aire libre</v-card-title>
                <v-tabs v-model="tab" right icon>
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">
                        <v-icon>mdi-file-upload-outline</v-icon>
                    </v-tab>
                    <v-tab href="#tab-2">
                        <v-icon>mdi-sort-variant</v-icon>
                    </v-tab>
                    <v-tab href="#tab-3">
                        <v-icon>mdi-map-search-outline</v-icon>
                    </v-tab>
                    <v-tab href="#tab-4">
                        <v-icon>mdi-pound</v-icon>
                    </v-tab>
                    <v-tab href="#tab-5">
                        <v-icon>mdi-image-multiple-outline</v-icon>
                    </v-tab>
                    <v-tab href="#tab-6">
                        <v-icon>mdi-alert-decagram-outline</v-icon>
                    </v-tab>
                    <v-tab href="#tab-7">
                        <v-icon>mdi-clock-time-nine-outline</v-icon>
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item :value="'tab-1'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba</v-card-text>
                            <documentacion></documentacion>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-2'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 2</v-card-text>
                            <informacion></informacion>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-3'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 3</v-card-text>
                            <ubicacion></ubicacion>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-4'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 3</v-card-text>
                            <hashtags></hashtags>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-5'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 3</v-card-text>
                            <imagenes></imagenes>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-6'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 3</v-card-text>
                            <terminos></terminos>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-7'">
                        <v-card flat>
                            <v-card-text>Esto es una prueba 3</v-card-text>
                            <horarios></horarios>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import Documentacion from "./documentacion/Documentacion";
    import Informacion from "./informacion/Informacion";
    import Ubicacion from "./ubicacion/Ubicacion";
    import Hashtags from "./hashtags/Hashtags";
    import Imagenes from "./imagenes/Imagenes";
    import Terminos from "./terminos/Terminos";
    import Horarios from "./horarios/Horarios";

    export default {
        name: "Actividad",
        data(){
            return {
                tab: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        components:{
            Documentacion,
            Informacion,
            Ubicacion,
            Hashtags,
            Imagenes,
            Terminos,
            Horarios,
        }
    }
</script>

<style scoped>

</style>