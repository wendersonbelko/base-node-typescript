import { connection } from '../../database/connection'

interface UpdateProps {
  table: string;
  values: {column: string, value: string}[];
  where: string;
  compare: string;
}

export const update = async ({ table, values, where, compare }: UpdateProps) => {
  const db = await connection()

  const valuesFormated = []

  values.map(result => valuesFormated.push(`${result.column} = '${result.value}'`))

  const result = db
    .execute(`UPDATE ${table} SET ${valuesFormated.join(',')} WHERE ${where} = '${compare}'`)
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
