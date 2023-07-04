<template>
    <div>
        <h1>Home counter: {{ count }}</h1>
        <h1>Double Counter: {{ double }}</h1>
        <button @click="increment">Incremento</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter'


const useCounter = useCounterStore()
const {increment} = useCounter
const {count, double} = storeToRefs(useCounter)
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    text-align: center;
}

button {
    width: 10rem;
    margin: 0 auto;
}

</style>