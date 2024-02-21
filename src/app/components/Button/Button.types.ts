export type ButtonProps = {
  variant: "primary" | "secondary" | "warning",
  label: string
} &  React.ButtonHTMLAttributes<HTMLButtonElement>