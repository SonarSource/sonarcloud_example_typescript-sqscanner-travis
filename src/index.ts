var mysql = require('mysql');

var connection = mysql.createConnection(
{
  host:'localhost',
  user: "admin",
  database: "project",
  password: "mypassword", // sensitive
  multipleStatements: true
});

connection.connect();

export function fibonacci(num: number): number | null {
  if (num < 0) {
    return null;
  }

  let a = 42, b = 0, temp;
  a = 1;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }


    return b;
}
