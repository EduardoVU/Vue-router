import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])
    if (localStorage.getItem('favoritos')) {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const addFavoritos = (poke) => {
        favoritos.value.push(poke)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const eliminarFavorito = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const findPoke = (poke) => {
        return favoritos.value.some((item) => item.name === poke);
    }

    return {
        favoritos,
        addFavoritos,
        eliminarFavorito,
        findPoke
    }
})