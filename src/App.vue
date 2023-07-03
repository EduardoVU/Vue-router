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
  color: #41B883;
  text-decoration: none;
  font-size: 1.8rem;
}

nav > a:first-of-type {
  margin: 0 3vw 0 0;
}


</style>
