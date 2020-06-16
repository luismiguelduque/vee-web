<template>
    <v-row align="center" justify="center">
        <v-col class="text-left col-10 mx-auto">
            <h2 class="mb-4 text--primary">Mis actividades</h2>
            <v-card class="pa-5" >
                <v-simple-table >
                    <template v-slot:default>
                        <!-- <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Calories</th>
                        </tr>
                        </thead> -->
                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td class="text-left">
                                    <v-btn class="mx-2" fab dark small color="success">
                                        <v-icon dark>mdi-pine-tree</v-icon>
                                    </v-btn>
                                    {{ item.name }}
                                </td>
                                <td class="text-right">
                                    <v-btn small color="error">Pendiente de revisión</v-btn>
                                    <v-btn medium class="ml-5" to="actividad" color="primary">Ver</v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-btn class="mt-4" block  large color="success">Agregar una actividad <v-spacer></v-spacer> <v-icon right large dark>mdi-plus</v-icon></v-btn>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Activities",
        data(){
            return {
                desserts: [
                    {
                        name: 'Volando y puebleando',
                        calories: 159,
                    },
                    {
                        name: 'Volando y puebleando',
                        calories: 237,
                    },
                    {
                        name: 'Volando y puebleando',
                        calories: 262,
                    },
                    {
                        name: 'Volando y puebleando',
                        calories: 305,
                    },
                    {
                        name: 'Volando y puebleando',
                        calories: 356,
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        text-transform:none !important;
    }
</style>