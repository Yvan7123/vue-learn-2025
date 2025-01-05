<script setup lang="ts">
  import { ref, computed, inject } from 'vue'
  import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
  import ErIcon from '../Icon/Icon.vue'
  import { throttle } from 'lodash-es'
  import { BUTTON_GROUP_CTX_KEY } from './constants'
  defineOptions({
    name: 'ErButton',
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    useThrottle: true,
    throttleDuration: 500,
  })

  const solts = defineSlots()

  const emits = defineEmits<ButtonEmits>()

  const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0)

  const size = computed(() => {
    return buttonGroupCtx?.size ?? props?.size ?? ''
  })

  const type = computed(() => {
    return buttonGroupCtx?.type ?? props.type ?? ''
  })

  const disabled = computed(() => {
    return props.disabled || buttonGroupCtx?.disabled || false
  })

  const _ref = ref<HTMLButtonElement>()

  const iconStyle = computed(() => ({
    marginRight: solts.default ? '6px' : '4px',
  }))

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
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading ? true : void 0"
    :ref="_ref"
    @click="
      (e: MouseEvent) =>
        props.useThrottle ? handlBtneCLickThrottle(e) : handleButtonClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <er-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <er-icon
      :icon="icon"
      size="1x"
      :style="iconStyle"
      v-if="icon && !loading"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
  @import './style.css';
</style>
