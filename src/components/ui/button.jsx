import { clsx } from "clsx"

export function Button({ children, className, variant = "default", size = "default", ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
          "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "underline-offset-4 hover:underline text-primary": variant === "link",
          "h-10 py-2 px-4": size === "default",
          "h-9 px-3 rounded-md": size === "sm",
          "h-11 px-8 rounded-md": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

