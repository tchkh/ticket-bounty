import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react'

export const TICKET_ICONS = {
  DONE: <LucideCircleCheck />,
  IN_PROGRESS: <LucidePencil />,
  OPEN: <LucideFileText />,
}

export const TICKET_STATUS_LABELS = {
  OPEN: 'Open',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
}
