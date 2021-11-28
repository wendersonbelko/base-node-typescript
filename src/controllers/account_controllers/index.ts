import { Request, Response } from 'express'
import { status_response, token_generator } from '../../services'

const register = (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
    role
  } = req.body

  const emailExist = true

  const arr = [
    { name: 'name', info: name },
    { name: 'email', info: email },
    { name: 'password', info: password },
    { name: 'role', info: role }
  ]

  // eslint-disable-next-line array-callback-return
  arr.map(info => {
    if (!info.info) {
      return status_response.error.payment_required(res, `${info.name} is required`)
    }
  })

  if (emailExist) {
    return status_response.error.conflict(res, 'email already exists')
  }

  return status_response.success.created(res, {
    name: name,
    email: email,
    password: password,
    roles: role
  })
}

const signin = (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = { name: 'wenderson', email: 'goebelko@belko.com', password: '123456', id: '1', role: 'admin' }

  if (!email || !password || email !== user.email || password !== user.password) {
    return status_response.error.unauthorized(res, 'Email or password is invalid')
  }

  const token = token_generator(user)

  return status_response.success.ok(res, {
    token: token
  })
}

export const account_controllers = {
  register,
  signin
}
