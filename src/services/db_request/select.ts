import { connection } from '../../database/connection'

interface AllProps {
  table: string;
}

interface AllColumnProps {
  table: string;
  column: string;
}

interface AllInColumnProps {
  table: string;
  column: string;
  inValues: string[];
}

interface AllNotInColumnProps {
  table: string;
  column: string;
  inValues: string[];
}

interface AllInProps {
  table: string;
  where: string;
  inValues: string[];
}

interface AllNotInProps {
  table: string;
  where: string;
  inValues: string[];
}

interface OneProps {
  table: string;
  where: string;
  compare: string;
}

export const select_all = async ({ table }: AllProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT * FROM ${table}`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_all_column = async ({ table, column }: AllColumnProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT ${column} FROM ${table}`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_all_in_column = async ({ table, column, inValues }: AllInColumnProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT ${column} FROM ${table} IN (${inValues.join(',')})`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_all_not_in_column = async ({ table, column, inValues }: AllNotInColumnProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT ${column} FROM ${table} NOT IN (${inValues.join(',')})`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_all_in = async ({ table, where, inValues }: AllInProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT * FROM ${table} WHERE ${where} IN (${inValues.join(',')})`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_all_not_in = async ({ table, where, inValues }: AllNotInProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT * FROM ${table} WHERE ${where} NOT IN (${inValues.join(',')})`)
    .then(result => {
      return {
        success: true,
        result: result[0],
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

export const select_one = async ({ table, where, compare }: OneProps) => {
  const db = await connection()
  const result = db
    .execute(`SELECT * FROM ${table} WHERE ${where} = '${compare}'`)
    .then(result => {
      return {
        success: true,
        result: result[0][0],
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
