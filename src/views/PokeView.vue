<template>
    <div v-if="poke">
        <p v-if="loading">Cargando información...</p>
        <p v-if="errorData" style="text-align: center;">{{ errorData }} <br>
            No existe el Pokemon
        </p>
        
        <div v-if="data">
            <img :src="data.sprites?.front_default" :alt="$route.params.name">
            <h1>Pokemon name: {{ $route.params.name }}</h1>
            <button @click="back">Volver</button>
        </div>
    </div>

    <div v-else>
        <h1>No existe el pokemon</h1>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
import { useGetData } from '../composables/getData';

const route = useRoute()
const router = useRouter()
const poke = ref({})

const { data, getData, loading, errorData } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)


const back = () => {
    router.push('/')
}
</script>

<style scoped>
div {
    display: grid;
    justify-content: center;
}

div img {
    margin: 0 auto;
    min-width: 10rem;
    min-height: 10rem;
}

div button {
    margin: 0 auto;
}

h1 {
    color: #34495E;
}

button {
    width: 10rem;
    background-color: transparent;
    border: 3px solid #34495E;
    color: #34495E;
    cursor: pointer;
    height: 2.5rem;
    transition: background-color 0.4s;
}

button:hover {
    background-color: #41B883;
}
</style>