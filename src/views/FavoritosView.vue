<template>
    <h1 v-if="favoritos.length === 0">Sin favoritos</h1>
    <div v-else>
        <h1>Favoritos</h1>
        <ul>
            <li v-for="(pokemon, index) in favoritos">
                <div>
                    <RouterLink :to="`/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
                    <button @click="eliminarFavorito(pokemon.id)">Eliminar de favoritos</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useFavoritosStore } from '../store/favoritos';
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos)
const {eliminarFavorito} = useFavoritos
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

ul > li:not(:last-of-type) {
    margin: 0 0 1vw
}

::marker {
    color: #34495E;
}

li > div {
    display: flex;
    width: 18vw;
    justify-content: space-between;
    align-items: center;
}

li > div > button {
    background-color: transparent;
    border: 3px solid #34495E;
    color: #34495E;
    cursor: pointer;
    height: 2.5rem;
    transition: background-color 0.4s;
}

li > div > button:hover {
    background-color: #41B883;
}

a {
    color: #41B883;
    text-decoration: none;
}
</style>