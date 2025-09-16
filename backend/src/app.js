import express from 'express'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
      "connect-src 'self' http://localhost:3001; " + // 添加允许的连接源
      "script-src 'self'",
  )
  next()
})
app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)
app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
