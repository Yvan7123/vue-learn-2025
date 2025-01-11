import type { Ref } from 'vue'
export type CollapseItemName = string | number
export interface CollapseProps {
  moduleValue: CollapseItemName[]
  accordion?: boolean
}

export interface CollapseItemProps {
  name: CollapseItemName
  title?: string
  disabled?: boolean
}
export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>
  handleItemClick(name: CollapseItemName): void
}

export interface CollapseEmits {
  (e: 'update:moduleValue', val: CollapseItemName[]): void
  (e: 'change', val: CollapseItemName[]): void
}