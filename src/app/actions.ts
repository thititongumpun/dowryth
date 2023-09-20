"use server"

import { revalidatePath, revalidateTag } from 'next/cache';
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

  // try {
  //   // const res = await fetch(`${process.env.BASE_URL}/api/calculate`, {
  //   //   method: "POST",
  //   //   cache: "no-cache",
  //   //   body: JSON.stringify({
  //   //     maleDowry: parsed.maleDowry,
  //   //     femaleDowry: parsed.femaleDowry
  //   //   }),
  //   //   headers: {
  //   //     "Content-type": "application/json",
  //   //   }
  //   // })
  //   const maleDowry1 = (Number(parsed.maleDowry) +  Number(parsed.maleDowry)) * 5;
  //   const femaleDowry = (Number(parsed.maleDowry) +  Number(parsed.maleDowry)) * 10;
  //   revalidatePath("/")
  //   return { "dowry1": maleDowry1, "dowry2": femaleDowry }
  // } catch (e) {
  //   return { message: `There was an error. ${e}` }
  // }
  const maleDowry1 = (Number(parsed.maleDowry) + Number(parsed.maleDowry)) * 5;
  const femaleDowry = (Number(parsed.maleDowry) + Number(parsed.maleDowry)) * 10;
  revalidatePath("/")
  return { "dowry1": maleDowry1, "dowry2": femaleDowry }
}