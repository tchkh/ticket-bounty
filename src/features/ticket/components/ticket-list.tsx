import { getTickets } from '@/features/ticket/queries/get-tickets'
import { TicketItem } from './ticket-item'

type TicketList = {
  userId?: string
}

export const TicketList = async ({ userId }: TicketList) => {
  const tickets = await getTickets(userId)

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
