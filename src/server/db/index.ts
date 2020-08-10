import * as mysql from "mysql";
import chirps from './queries/chirps'

//connection pool
const pool = mysql.createPool({
  user: "chirper",
  password: "chirper",
  host: "localhost",
  database: "chirpr",
});

export const Query = <Goofy = any>(query: string, values?: Array<string | number>) => {
  return new Promise<Goofy>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
    chirps
};

// Candid results
// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 13,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
