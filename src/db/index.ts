import sql from 'mssql';

const sqlConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "wa",
  server: process.env.DB_SERVER || "localhost",
  options: {
    trustServerCertificate: true,
  }
}

export const getAccount = async () => {
  const pool = await sql.connect(sqlConfig)
  const result = await pool.request().query(`
    SELECT * FROM accounts
  `)
  return result.recordset
}

export const deleteAccount = async (no_wa: string) => {
  const pool = await sql.connect(sqlConfig)
  const result = await pool.request().query(`
    DELETE FROM accounts WHERE no_wa = '${no_wa}'
  `)
  return result.recordset
}