import { Router } from 'express'
import { users_controllers } from '../../controllers'

const usersRoutes = Router()

usersRoutes
  .get('/', users_controllers.users)

export { usersRoutes }
