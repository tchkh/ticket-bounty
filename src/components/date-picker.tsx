'use client'

import { format } from 'date-fns'
import { LucideCalendar } from 'lucide-react'
import * as React from 'react'
import { useImperativeHandle } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export type ImperativeHandleFromDatePicker = {
  reset: () => void
}

type DatePickerProps = {
  id: string
  name: string
  defaultValue?: string | undefined
  imperativeHandleRef?: React.RefObject<ImperativeHandleFromDatePicker | null>
}

export const DatePicker = ({
  id,
  name,
  defaultValue,
  imperativeHandleRef,
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  )

  useImperativeHandle(imperativeHandleRef, () => ({
    reset: () => setDate(new Date()),
  }))

  const formattedStringDate = date ? format(date, 'yyyy-MM-dd') : ''

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full" asChild>
          <Button
            variant="outline"
            id={id}
            className="justify-start text-left font-normal"
          >
            <LucideCalendar className="h-4 w-4" />
            {formattedStringDate}
            <input
              type="hidden"
              name={name}
              defaultValue={formattedStringDate}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
