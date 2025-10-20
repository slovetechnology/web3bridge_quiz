
export interface FormbuttonProps {
  title: string
  disabled?: boolean
  bg?: string
  Icon?: any
  loading?: boolean
  type?: "submit" | "reset" | "button"
  position?: "left" | "right"
  onClick?: (val: any) => void
}
