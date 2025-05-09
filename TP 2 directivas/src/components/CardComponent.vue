<script setup lang="ts">
import type { Pelicula } from '../resource/movies'
import {ref} from 'vue';

const props =defineProps<{
  movie: Pelicula
}>()
const emit=defineEmits<{
  (event: 'update_likes', value: number): void
}>()

const like=ref(false);
const contadorDeLike= ref(props.movie.likes);


function contadorMegusta(){
  like.value = !like.value
  const nuevoLikes = like.value ? contadorDeLike.value + 1 : contadorDeLike.value - 1
  contadorDeLike.value = nuevoLikes
  emit('update_likes', nuevoLikes)
}



</script>

<template>
  <article class="tarjeta">
    <img :src="movie.portada" :alt="`Imagen de la película ${movie.titulo}`" />
    <h3>{{ movie.titulo }}</h3>
    <p><strong>Genero: </strong>{{ movie.genero }}</p>
    <p><strong>Director:</strong> {{ movie.director }}</p>
    <p><strong>Año:</strong> {{ movie.anio }}</p>
    <div id="boton">
    <button @click="contadorMegusta" id="botondelike">
      <img v-if="like"
      src="https://www.svgrepo.com/show/506603/thumbs-up-fill.svg" alt="pulgar de megusta"
      class="like">
      <img v-else 
      src="https://www.svgrepo.com/show/471982/thumbs-up.svg" alt="pulgar arriba"
      class="like">

    </button>
    <p><strong>Cantidad de me gustas: </strong>{{ contadorDeLike }}</p>
  </div>
  </article>
</template>

<style scoped>
.tarjeta {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 250px;
  text-align: center;
  border-radius: 8px;
  background: #f9f9f9;
}
.tarjeta img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
#botondelike{
  background: none;
  border: none;
  padding: 4px;
  width: 20%;
  height: 10%;
  border: 3px solid rgb(109, 109, 109);
  border-radius: 10px;
  background-color: aqua;
} 
#botondelike:active{
  background-color: darkblue;
  color: white;
}

#boton{
display: flex;
align-items: center;
}

.like {
  width: 20px;
  height: 20px;
}

</style>

