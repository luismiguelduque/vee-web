<template>
    <v-navigation-drawer class="main-menu" dark v-model="drawer" app>
        <v-list dense class="d-flex text-right flex-column">
            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <img src="../../assets/logo.png" class="logo-main"/>
                        </v-col>
                        <v-col cols="8">

                            <h1>Vee</h1>
                            <span class="sub-title">Proveedor</span>

                        </v-col>
                    </v-row>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Menú</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/actividades" link>
                <v-list-item-content>
                    <v-list-item-title>Actividades</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-menu</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/reservaciones" link>
                <v-list-item-content>
                    <v-list-item-title>Reservaciones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-book-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/ventas" link>
                <v-list-item-content>
                    <v-list-item-title>Ventas</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-cash-usd-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/perfil" link>
                <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-account-circle-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="/comentarios" link>
                <v-list-item-content>
                    <v-list-item-title>Comentarios</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-comment-text-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-list dense class="d-flex text-right flex-column">
            <v-list-item to="" link>
                <v-list-item-content>
                    <v-list-item-title>Manual de uso</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-help-circle-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item to="" link>
                <v-list-item-content>
                    <v-list-item-title>Terminos y<br/> condiciones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-fountain-pen-tip</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Advertencia</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-btn block>Salir de la cuenta
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </template>
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

<style scoped lang="scss">
    .v-navigation-drawer__content {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    .main-menu {
        background: linear-gradient(to bottom, var(--v-primary-base), var(--v-secondary-base));

        div.v-navigation-drawer__content {
            justify-content: space-between;
            display: flex;
            flex-direction: column;
        }

        .logo-main {
            width: 100%;
        }

        h1 {
            font-weight: bold;
            font-size: 1.6rem;
        }

        .sub-title {
            font-size: 0.9rem;
        }

        .v-list-item {
            min-height: auto;
        }
    }
</style>