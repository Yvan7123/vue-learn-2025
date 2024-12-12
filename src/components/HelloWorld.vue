<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String,
})

console.log(props.msg)
const count = ref(0)
count.value ++ 
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <div>{{ count }}</div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
