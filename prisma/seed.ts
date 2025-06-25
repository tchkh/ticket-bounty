import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const tickets = [
  {
    title: 'Ticket 1',
    content: 'First ticket from DB.',
    status: 'DONE' as const,
  },
  {
    title: 'Ticket 2',
    content: 'Second ticket from DB.',
    status: 'OPEN' as const,
  },
  {
    title: 'Ticket 3',
    content: 'Third ticket from DB.',
    status: 'IN_PROGRESS' as const,
  },
]

const seed = async () => {
  const t0 = performance.now()
  console.log('DB Seed: Started ...')

  await prisma.ticket.deleteMany({})

  await prisma.ticket.createMany({
    data: tickets,
  })

  const t1 = performance.now()
  console.log(`DB Seed: Finished (${t1 - t0})ms`)
}

seed()
