import { PropsWithChildren } from 'react'
import type { CSSProperties } from 'react'
import styles from './button.module.css'

export interface ButtonProps {
  htmlType: 'button' | 'submit' | 'reset'
  style?: CSSProperties
  children?: any
  onClick?(): void
}

export const Button = ({
  children,
  htmlType = 'button',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button type={htmlType} {...props} className={styles.button}>
      {children as any}
    </button>
  )
}

export default Button
