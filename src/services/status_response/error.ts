import { Response } from 'express'

export const error = {
  bad_request: (res: Response, message?: string) => {
    res.status(400).json({
      code: 400,
      message: message || 'Bad request'
    })
  },

  unauthorized: (res: Response, message?: string) => {
    res.status(401).json({
      code: 401,
      message: message || 'Unauthorized'
    })
  },

  payment_required: (res: Response, message?: string) => {
    res.status(402).json({
      code: 402,
      message: message || 'Payment required'
    })
  },

  forbidden: (res: Response, message?: string) => {
    res.status(403).json({
      code: 403,
      message: message || 'Forbidden'
    })
  },

  not_found: (res: Response, message?: string) => {
    res.status(404).json({
      code: 404,
      message: message || 'Not found'
    })
  },

  method_not_allowed: (res: Response, message?: string) => {
    res.status(405).json({
      code: 405,
      message: message || 'Method not allowed'
    })
  },

  conflict: (res: Response, message?: string) => {
    res.status(409).json({
      code: 409,
      message: message || 'Conflict'
    })
  },

  locked: (res: Response, message?: string) => {
    res.status(423).json({
      code: 423,
      message: message || 'Locked'
    })
  },

  no_response: (res: Response, message?: string) => {
    res.status(444).json({
      code: 444,
      message: message || 'No response'
    })
  }
}
