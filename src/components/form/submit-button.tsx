'use client'

import { LucideLoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

type SubmitButtonProps = {
  label?: string
  icon?: React.ReactElement
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const SubmitButton = ({
  label,
  icon,
  variant,
  size,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && <LucideLoaderCircle className="h-4 w-4 animate-spin" />}
      {label}
      {pending ? null : icon ? icon : null}
    </Button>
  )
}
