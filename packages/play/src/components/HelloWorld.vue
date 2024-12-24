<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>
<template>
  <er-button>{{ msg }}</er-button>  
  <template></template>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
