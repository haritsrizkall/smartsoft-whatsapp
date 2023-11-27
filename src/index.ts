import cron from 'node-cron';
import sql from 'mssql';

const sqlConfig: sql.config = {
  user: "sa",
  password: "123456",
  database: "wa",
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const getTables = async () => {
  const pool = await sql.connect(sqlConfig)
  const result = await pool.request().query(`
    SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'
  `)
  return result.recordset
}

// cron.schedule('* * * * * *', () => {
//   getTables().then((tables) => {
//     console.log(tables)
//   }).catch((err) => {
//     console.log(err)
//   })
// });
getTables().then((tables) => {
  console.log(tables)
}).catch((err) => {
  console.log(err)
})
