<script setup>
import { artService } from "@/services/ArtService.js";
import Pop from "@/utils/Pop.js";
import { onMounted } from 'vue';

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
<h1>Art</h1>
</template>

<style scoped lang="scss"></style>
