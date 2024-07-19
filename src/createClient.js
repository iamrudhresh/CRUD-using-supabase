import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
  'https://zcwkmjdbfdirqcgrewnj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjd2ttamRiZmRpcnFjZ3Jld25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNzQwMDgsImV4cCI6MjAzNjk1MDAwOH0.hh1XDh2KZxUhfM1Di8MT9hSB12LiP3i7jTc2lnoshsU'
)