<template>
    <v-app id="inspire">
        <Sidebar :drawer="drawer"></Sidebar>
        <v-app-bar elevation="0"  app color="#fff" >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <v-container class="fill-height" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <!-- <v-footer color="indigo"  app> <span class="white--text">&copy; 2019</span>  </v-footer> -->
    </v-app>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    export default {
        name: "Main",
        data: () => ({
            drawer: null,
        }),
        components:{
            Sidebar
        }
    }
</script>

<style scoped>

</style>