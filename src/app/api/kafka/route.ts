import { NextResponse } from 'next/server'
import { CompressionTypes, Kafka, Partitioners } from 'kafkajs'
import { Message } from '@/types/Message'

export async function POST(request: Request) {
  const req: Message = await request.json()
  const kafka = new Kafka({
    brokers: ['168.138.187.218:9092'],
    clientId: 'income-client'
  })

  const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })

  await producer.connect()
  await producer.send({
    topic: 'income',
    compression: CompressionTypes.GZIP,
    messages: [{
      key: req.gender.toString(),
      value: JSON.stringify(req)
    }]
  })


  return NextResponse.json({ "Hello": "World" })
}