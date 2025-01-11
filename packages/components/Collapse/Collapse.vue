<script lang="ts">
  import {
    defineProps,
    ref,
    watch,
    provide,
    defineEmits,
    defineOptions,
  } from 'vue'
  import type { CollapseItemName, CollapseProps, CollapseEmits } from './types'
  import { debugWarn } from '@yvan-element/utils/error'
  import { COLLAPSE_CTX_KEY } from './constants'
  const COMPONENT_NAME = 'ErCollapse'

  defineOptions({
    name: COMPONENT_NAME,
  })

  const props = defineProps<CollapseProps>()
  const emits = defineEmits<CollapseEmits>()

  const activeNames = ref<CollapseItemName[]>(props.moduleValue)

  if (props.accordion && props.moduleValue.length > 1) {
    debugWarn(COMPONENT_NAME, 'accordion mode only allow one active item.')
  }

  function handleItemClick(item: CollapseItemName) {
    let _activeNames = [...activeNames.value]

    if (props.accordion) {
      _activeNames = _activeNames[0] === item ? [] : [item]
      updateActiveNames(_activeNames)
      return
    }
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(item)
    }

    updateActiveNames(_activeNames)
  }

  function updateActiveNames(val: CollapseItemName[]) {
    activeNames.value = val
    emits('update:moduleValue', val)
    emits('change', val)
  }

  watch(
    () => props.moduleValue,
    (val) => {
      updateActiveNames(val)
    }
  )

  provide(COLLAPSE_CTX_KEY, {
    activeNames,
    handleItemClick,
  })
</script>

<template>
  <div class="er-collapse">
    <slot />
  </div>
</template>

<style scoped>
  @import './style.css';
</style>
