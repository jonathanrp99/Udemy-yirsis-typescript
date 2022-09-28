<template>
    <h1>Name: {{ store.name }}</h1>
    <h2>Age: {{ store.age }}</h2>
    <button @click="store.growing">Grow up</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "../Store/store"

const Practice = defineComponent({
    setup() {

    return { store }
    }
})
export default Practice
</script>