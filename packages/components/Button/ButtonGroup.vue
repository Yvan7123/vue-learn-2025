<script lang="ts">
  import type { ButtonGroupProps } from './types'
  import { BUTTON_GROUP_CTX_KEY } from './constants'
  import { provide, reactive, toRef } from 'vue'

  defineOptions({
    name: 'ButtonGroup',
  })

  const props = defineProps<ButtonGroupProps>()
  provide(
    BUTTON_GROUP_CTX_KEY,
    reactive({
      size: toRef(props, 'size'),
      type: toRef(props, 'type'),
      disabled: toRef(props, 'disabled'),
    })
  )
</script>

<template>
  <div class="button-group">
    <slot />
  </div>
</template>

<style scoped>
  @import './style.css';
</style>
