import jwt from 'jsonwebtoken'
import { RequestUser } from '../../interfaces/RequestUser'

export const token_generator = (user: RequestUser) => {
  const secretKey = process.env.SECRET_KEY

  try {
    const token = jwt.sign(user, secretKey, {
      expiresIn: 60 * 60 * 24, // 24hours
      algorithm: 'HS256'
    })

    return token
  }

  catch(err) {
    return { error: true, message: err }
  }
}
