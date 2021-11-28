import { config } from 'dotenv'
import express, { Request, Response } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import { swagger } from './configs/swagger'
import { status_response } from './services'
import { accountRoutes, usersRoutes } from './routes'

config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger))
app.use('/users', usersRoutes)
app.use('/account', accountRoutes)

app.all('*', (_req: Request, res: Response) => {
  status_response.error.not_found(res)
})

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`)
})
