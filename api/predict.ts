
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export default async function handler(req, res) {
  const { user_id, input } = req.body

  // Simulate prediction logic
  const prediction = {
    confidence: 0.87,
    result: "Market will rise",
    input
  }

  // Log prediction output
  await supabase.from('prediction_outputs').insert({
    user_id,
    input,
    prediction,
    confidence: prediction.confidence
  })

  // Return result
  res.status(200).json({ status: "ok", prediction })
}
