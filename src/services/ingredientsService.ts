import { supabase } from './supabase'

async function findAll() {
  await supabase.from('ingredients').select().order('name')
}
