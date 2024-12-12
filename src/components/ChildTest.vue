<template>
  <div>
      {{ modelValue }}

      <el-button @click="change"></el-button>
  </div>
</template>

<script setup>

  import { defineProps } from 'vue'

  const { to }  = defineProps(['to']);

  const emits = defineEmits(['update:to'])
  const change = () => {
    emits('update:to', ["---"])
    console.log(to);
  }


</script>