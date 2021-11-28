import { Router } from 'express'
import { account_controllers } from '../../controllers'

const accountRoutes = Router()

accountRoutes
  .post('/register', account_controllers.register)
  .post('/signin', account_controllers.signin)

export { accountRoutes }
