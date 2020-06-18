<template>
    <label class="detail-input" for="name">{{label}}</label>
    <input class="input-custom" id="name" type="text"/>
</template>

<script>
    export default {
        name: "CustomTextfield",
        props: {
            label: String,

        }
    }
</script>

<style scoped>

</style>