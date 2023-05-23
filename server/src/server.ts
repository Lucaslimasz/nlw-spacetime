import 'dotenv/config'

import jwt from '@fastify/jwt'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas as urls de frontend poderão acessar nosso backend
})

app.register(jwt, {
  secret: 'l4kj31h5lk3jh54325kj432h1nnen',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🔥 server running in port 3333')
  })
