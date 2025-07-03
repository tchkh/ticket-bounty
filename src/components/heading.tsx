import React from 'react'
import { Separator } from './ui/separator'

type HeadingProps = {
  title: string
  description?: string
  tab?: React.ReactNode
}

export const Heading = ({ title, description, tab }: HeadingProps) => {
  return (
    <>
      {tab}
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <Separator />
    </>
  )
}
