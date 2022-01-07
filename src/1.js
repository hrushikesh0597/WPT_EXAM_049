const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "WPTEXAM",
};

const selectAllMassages = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let q = `select * from MASSAGE`;
  const list = await connection.queryAsync(q);
  await connection.endAsync();
  return list;
};

const addMassage = async (text) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let q = `insert into MASSAGE (massage) values (?) `;
  connection.queryAsync(q, [text.massage]);
  console.log("record added");
  await connection.endAsync();
};

const x = { massage: "hello" };
addMassage(x);
module.export = { addMassage, selectAllMassages };
