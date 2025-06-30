
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export default async function handler(req, res) {
  const { user_id, action } = req.body
  const rewardAmount = action === 'predict' ? 10 : 5

  const { error } = await supabase.from('infinity_coin_ledger').insert({
    user_id,
    action,
    amount: rewardAmount,
    notes: `Auto-reward for ${action}`
  })

  if (error) {
    res.status(500).json({ status: 'error', error })
  } else {
    res.status(200).json({ status: 'rewarded', amount: rewardAmount })
  }
}
