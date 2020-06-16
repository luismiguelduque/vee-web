<template>
    <v-navigation-drawer dark color="primary" v-model="drawer" app>
        <v-list dense>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title>Menu</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/actividades" link>
                <v-list-item-content>
                    <v-list-item-title>Actividades</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/reservaciones" link>
                <v-list-item-content>
                    <v-list-item-title>Reservaciones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/ventas" link>
                <v-list-item-content>
                    <v-list-item-title>Ventas</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/perfil" link>
                <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/comentarios" link>
                <v-list-item-content>
                    <v-list-item-title>Comentarios</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            drawer: String,
        },
    }
</script>

<style scoped>

</style>