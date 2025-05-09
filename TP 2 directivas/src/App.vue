<script setup lang="ts">
import movies  from './resource/movies'
import CardComponent from './components/CardComponent.vue'; 


console.log('Películas cargadas:', movies)
</script>

<template>
  <header>
    <h1>Trabajo Practico N°2</h1>
  </header>
  <div id="cuerpo">
    <main>
      <div class="cards">
<CardComponent
  v-for="(movie,index) in movies"
  :key="index"
  :movie="movie"
/>
</div>
</main>
<aside>

<h2>Tarea realizada por:</h2>
<div id="dentroaside">
<p class="index">Nombre:</p>
<p class="dato">Jonathan</p>
<p class="index">Apellido:</p>
<p class="dato">Gorostiaga</p>

  </div>

</aside>
</div>
<footer>
  <p>&copy; 2025 Jonathan Gorostiaga. Todos los derechos reservados.</p>
  <p>Trabajo: PWD-TP-2-Directivas-Props-y-Emits</p>
</footer>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


</style>
