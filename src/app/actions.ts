"use server"

import { revalidatePath } from 'next/cache';
import { z } from 'zod'

const schema = z.object({
  maleDowry: z.string(),
  femaleDowry: z.string()
})

export async function submit(formData: FormData) {
  const parsed = schema.parse({
    maleDowry: formData.get('maleDowry'),
    femaleDowry: formData.get('femaleDowry')
  })

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/calculate`, {
      method: 'POST',
      body: JSON.stringify({
        maleDowry: parsed.maleDowry,
        femaleDowry: parsed.femaleDowry
      })
    })
    revalidatePath("/")
    return res.json();
  } catch (e) {
    return { message: `There was an error. ${e}` }
  }
}