
import { FinSynapse } from '../agents/FinSynapse/logic'
import { Echo } from '../agents/Echo/logic'
import { FutureBot } from '../agents/FutureBot/logic'
import { MutationBot } from '../agents/MutationBot/logic'

export default async function handler(req, res) {
  const { agent, message } = req.body
  let reply = ''

  switch (agent) {
    case 'FinSynapse':
      reply = await FinSynapse(message)
      break
    case 'Echo':
      reply = await Echo(message)
      break
    case 'FutureBot':
      reply = await FutureBot(message)
      break
    case 'MutationBot':
      reply = await MutationBot(message)
      break
    default:
      reply = `No handler for agent "${agent}"`
  }

  res.status(200).json({ reply })
}
