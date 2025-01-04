<script setup lang="ts">
  import { ref } from 'vue'
  import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
  import { throttle } from 'lodash-es'
  defineOptions({
    name: 'ErButton',
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
  })
  console.log(props.type)

  const solts = defineSlots()

  const emits = defineEmits<ButtonEmits>()

  const _ref = ref<HTMLButtonElement>()

  const handleButtonClick = (e: MouseEvent) => {
    emits('click', e)
    console.log(props.useThrottle)
  }
  const handlBtneCLickThrottle = throttle(
    handleButtonClick,
    props.throttleDuration
  )

  defineExpose<ButtonInstance>({
    ref: _ref,
  })
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
    @click="
      (e: MouseEvent) =>
        props.useThrottle ? handlBtneCLickThrottle(e) : handleButtonClick(e)
    "
  >
    <slot></slot>
  </component>
</template>

<style scoped>
  @import './style.css';
</style>
