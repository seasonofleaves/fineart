<script setup>
import { Art } from '@/models/Art.js';

defineProps({
  artProp: { type: Art, required: true}
})

</script>


<template>
  <img :src="artProp.imgUrlsSmall" :alt="`${artProp.description}`" class="img-fluid">
</template>


<style lang="scss" scoped>

</style>