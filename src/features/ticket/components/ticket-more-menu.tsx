'use client'

import { Ticket, TicketStatus } from '@prisma/client'
import { LucideTrash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import { useConfirmDialog } from '@/components/confirm-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteTicket } from '../actions/delete-ticket'
import { updateTicketStatus } from '../actions/update-ticket-status'
import { TICKET_STATUS_LABELS } from '../constants'

type TicketMoreMunuProps = {
  ticket: Ticket
  trigger: React.ReactNode
}

export const TicktMoreMunu = ({ ticket, trigger }: TicketMoreMunuProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteTicket.bind(null, ticket.id),
    trigger: (
      <DropdownMenuItem>
        <LucideTrash className="mr-2 h-4 w-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  })

  const handleUpdateTicketStatus = async (value: string) => {
    const promise = updateTicketStatus(ticket.id, value as TicketStatus)

    toast.promise(promise, {
      loading: 'Updating status...',
    })

    const result = await promise

    if (result.status === 'ERROR') {
      toast.error(result.message)
    } else if (result.status === 'SUCCESS') {
      toast.success(result.message)
    }
  }

  const TicketStatusRadioGroupItem = (
    <DropdownMenuRadioGroup
      value={ticket.status}
      onValueChange={handleUpdateTicketStatus}
    >
      {(Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>).map(key => (
        <DropdownMenuRadioItem key={key} value={key}>
          {TICKET_STATUS_LABELS[key]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  )

  return (
    <>
      {deleteDialog}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
          {TicketStatusRadioGroupItem}
          <DropdownMenuSeparator />
          {deleteButton}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
