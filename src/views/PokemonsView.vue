<template>
    <h1>Pokemons</h1>
    <p v-if="loading" style="text-align: center;">Cargando datos...</p>
    <p v-if="errorData" style="text-align: center;">{{ errorData }}</p>
    <div v-if="data">
        <ul>
            <li v-for="(pokemon, indice) in data.results"> <RouterLink :to="`/${pokemon.name}`">{{ pokemon.name }}</RouterLink></li>
        </ul>

        <div class="btn__container">
            <button @click="getData(data.previous)" :disabled="!data.previous">Previous</button>
            <button @click="getData(data.next)" :disabled="!data.next">Next</button>
        </div>

    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import {useGetData} from '../composables/getData'

const {data, getData, loading, errorData} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon')

</script>

<style scoped>
h1 {
    text-align: center;
    color: #34495E;
}

ul {
    margin: 0 50%;
    transform: translate(-160%, 0);
}

::marker {
    color: #34495E;
}

li {
    width: 15vw;
}

a {
    color: #41B883;
    text-decoration: none;
}

p {
    margin: 0;
}

.btn__container {
    display: flex;
    justify-content: center;
    column-gap: 8vw;
}

.boton {
    border: 3px solid #41B883;
    border-radius: 10px;
    padding: 1rem 2rem;
    cursor: pointer;
    color: #34495E;
    transition: background-color 0.3s linear;
}

.boton:hover {
    background-color: #41B883;
}

</style>