var mysql = require("mysql2");

var hostname = "v1k.h.filess.io";
var database = "csfe_grewuseful";
var port = "3307";
var username = "csfe_grewuseful";
var password = "8d23186fde00076490e6432efbde83a5254e802f";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
