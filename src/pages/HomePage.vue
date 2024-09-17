<script setup>
import { artService } from "@/services/ArtService.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from 'vue';
import { AppState } from "@/AppState.js";

const artworks = computed(()=> AppState.art)

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
</section>
<section class="row">
{{ artworks }}
</section>
</div>
</template>

<style scoped lang="scss"></style>
