import { notFound } from 'next/navigation'
import { getTicket } from '@/features/queries/get-ticket'
import { TicketItem } from '@/features/ticket/components/ticket-item'

type TicketPageProps = {
  params: Promise<{ ticketId: string }>
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params
  const ticket = await getTicket(ticketId)

  if (!ticket) {
    return notFound()
  }

  return (
    <>
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </>
  )
}

export default TicketPage
