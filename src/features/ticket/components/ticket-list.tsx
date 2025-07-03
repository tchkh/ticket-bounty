import { SearchInput } from '@/components/search-input'
import { getTickets } from '@/features/ticket/queries/get-tickets'
import { TicketItem } from './ticket-item'

type TicketList = {
  userId?: string
}

export const TicketList = async ({ userId }: TicketList) => {
  const tickets = await getTickets(userId)

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
      <div className="w-full max-w-[420px]">
        <SearchInput placeholder="Search tickets ..." />
      </div>

      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
