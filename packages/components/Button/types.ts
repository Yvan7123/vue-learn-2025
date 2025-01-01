import type { Component } from "vue"

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'normal' | 'small'

export interface ButtonProps {
  tag?: string| Component
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  disabled?: boolean
  block?: boolean
  round?: boolean
  circle?: boolean
  plain?: boolean
  text?: boolean
  loading?: boolean
  icon?: string
}