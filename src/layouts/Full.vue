<template>
    <v-app class="public-pages">
        <v-main>
            <v-container class="fill-height" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "Full"
    }
</script>

<style scoped lang="scss">
    .public-pages {
        background: var(--v-background-base);
        display: flex;
    }
</style>