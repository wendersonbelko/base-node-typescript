import { connection } from '../../database/connection'

interface DeleteWhereProps {
  table: string;
  where: string;
  compare: string;
}

export const delete_where = async ({ table, where, compare }: DeleteWhereProps) => {
  const db = await connection()
  const result = db
    .execute(`DELETE from ${table} WHERE ${where}='${compare}'`)
    .then(result => {
      return {
        success: true,
        result: result,
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
