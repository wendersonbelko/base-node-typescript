import { Response } from "express";

export const success = {
  ok: (res: Response, message?: any) => {
    res.status(200).json(message ? message : {
      code: 200,
      message: 'OK'
    })
  },

  created: (res: Response, message?: any) => {
    res.status(201).json(message ? message : {
      code: 201,
      message: 'Created'
    })
  },

  accepted: (res: Response, message?: any) => {
    res.status(202).json(message ? message : {
      code: 202,
      message: 'Accepted'
    })
  },

  no_content: (res: Response, message?: any) => {
    res.status(204).json(message ? message : {
      code: 204,
      message: 'No content'
    })
  },

  partial_content: (res: Response, message?: any) => {
    res.status(206).json(message ? message : {
      code: 206,
      message: 'Partial content'
    })
  }
}
