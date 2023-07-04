<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
    <img alt="Pokemon logo" class="logo" src="@/assets/pokemon_logo.png"/>
  </RouterLink>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Pokemons</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/pinia-counter">Pinia Counter</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: space-around;
  background-color: #34495E;
  width: 100%;
}

.logo {
  display: block;
  width: 125px;
  aspect-ratio: 1;
  object-fit: contain;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  color: lightslategray;
  text-decoration: none;
  font-size: 1.8rem;
}

nav > a:not(:last-of-type) {
  margin: 0 3vw 0 0;
}


</style>
