<script setup lang="ts">
  import { ref } from 'vue'
  import { ButtonProps, ButtonSize, ButtonType } from './types'
  defineOptions({
    name: 'ErButton',
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
  })

  const solts = defineSlots()

  const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component
    :is="props.tag"
    :type="tag === 'button' ? props.nativeType : void 0"
    class="er-button"
    :class="{
      [`er-button--${props.type}`]: props.type,
      [`er-button--${props.size}`]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-loading': loading,
    }"
    :disabled="props.disabled || loading ? true : void 0"
    :ref="_ref"
  >
    <slot></slot>
  </component>
</template>
