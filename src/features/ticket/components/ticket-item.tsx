import { Prisma } from '@prisma/client'
import clsx from 'clsx'
import {
  LucideMoreVertical,
  LucidePencil,
  LucideSquareArrowOutUpRight,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getAuth } from '@/features/auth/queries/get-auth'
import { isOwner } from '@/features/auth/utils/is-owner'
import { ticketEditPath, ticketPath } from '@/paths'
import { toCurrencyFromCent } from '@/utils/currency'
import { TICKET_ICONS } from '../constants'
import { TicktMoreMunu } from './ticket-more-menu'

type TicketItemProps = {
  ticket: Prisma.TicketGetPayload<{
    include: {
      user: {
        select: {
          username: true
        }
      }
    }
  }>
  isDetail?: boolean
}

export const TicketItem = async ({ ticket, isDetail }: TicketItemProps) => {
  const { user } = await getAuth()
  const isTicketOwner = isOwner(user, ticket)

  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link prefetch href={ticketPath(ticket.id)} className="text-sm underline">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  )

  const editButton = isTicketOwner ? (
    <Button asChild variant="outline" size="icon">
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  ) : null

  const moreMenu = isTicketOwner ? (
    <TicktMoreMunu
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <LucideMoreVertical />
        </Button>
      }
    />
  ) : null

  return (
    <div
      className={clsx('w-full flex flex-col gap-y-4', {
        ' max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <div className="flex gap-x-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-x-2 text-2xl">
              <span>{TICKET_ICONS[ticket.status]}</span>
              <span className="truncate">{ticket.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span
              className={clsx('whitespace-break-spaces', {
                'line-clamp-3': !isDetail,
              })}
            >
              {ticket.content}
            </span>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              {ticket.deadline} by {ticket.user.username}
            </p>
            <p className="text-sm text-muted-foreground">
              {toCurrencyFromCent(ticket.bounty)}
            </p>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-y-1">
          {isDetail ? (
            <>
              {editButton}
              {moreMenu}
            </>
          ) : (
            <>
              {detailButton}
              {editButton}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
