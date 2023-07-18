<script setup lang="ts">
import Sortable from '@/components/Sortable.vue'
</script>

<template>
  <Sortable>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Sortable>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
