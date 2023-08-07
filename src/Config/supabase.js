import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcynwddzknerujxrmjva.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjeW53ZGR6a25lcnVqeHJtanZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2OTM1ODcsImV4cCI6MTk5NTI2OTU4N30.LLztvgReOZv2eaMXaYgQVUP91uSPjPMFRZlnoP8zidg"
// const supabaseKey = process.env.SUPABASE_KEY

const supabase = () => {
  return (
    createClient(supabaseUrl, supabaseKey)
  )
}

export default supabase;