import { connection } from '../../database/connection'
import uuid from 'uuid'

interface InsertProps {
  table: string;
  columns: string[];
  values: string[];
}

export const create = async ({ table, columns, values }: InsertProps) => {
  const db = await connection()
  const id = uuid.v4()
  const result = db
    .execute(`INSERT INTO ${table} (id, ${columns.join(',')}) VALUES ('${id}', ${values.join(',')})`)
    .then(result => {
      return {
        success: true,
        result: { id: id, response: result },
        error: null
      }
    })
    .catch(error => {
      return {
        success: false,
        result: null,
        error: error
      }
    })

  return result
}
