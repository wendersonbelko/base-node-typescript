import { NextFunction, Response, Request as RequestExpress } from 'express'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { RequestUser } from '../../interfaces/RequestUser'
import { status_response } from '../../services'

interface Request extends RequestExpress {
  user?: RequestUser
}

const secretKey = process.env.SECRET_KEY

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token) {
    return status_response.error.forbidden(res, 'No token privided')
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return status_response.error.unauthorized(res, 'Access token was expired')
      }

      return status_response.error.unauthorized(res)
    }

    req.user = {
      email: String(decoded.email),
      id: String(decoded.id),
      name: String(decoded.name),
      role: String(decoded.role)
    }
    next()
  })
}
