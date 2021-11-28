import { Request, Response } from 'express'

const users = (req: Request, res: Response) => {
  return res.send('users')
}

export const users_controllers = {
  users
}
