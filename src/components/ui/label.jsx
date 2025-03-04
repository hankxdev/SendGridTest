import { clsx } from "clsx"

export function Label({ className, ...props }) {
  return (
    <label
      className={clsx(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  )
}

