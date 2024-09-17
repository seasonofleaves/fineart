<script setup>
import { artService } from "@/services/ArtService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from 'vue';
import { AppState } from "@/AppState.js";
import ArtCard from "@/components/globals/ArtCard.vue";

const artworks = computed(() => AppState.art)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

onMounted(() => {
  getArt()
})

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.error(error)
  }
}


</script>

<template>
  
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Artwork</h1>
      </div>
      <div class="col-12">
        <div class="d-flex gap-3 align-items-center my-3">
          <button class="btn btn-outline-dark">Previous</button>
          <span class="fs-5">Page {{ currentPage }} of {{ totalPages }}</span>
          <button class="btn btn-outline-dark">Next</button>
        </div>
      </div>



    </section>
    <section class="row">
      <div v-for="art in artworks" :key="art.id" class="col-3">
       <ArtCard :art-prop="art" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
