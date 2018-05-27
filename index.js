const Client = require("ftp");
require("./config/config");

// Code to FTP a single local file to a server

const localFile = "./upload/test.txt";
const serverFile = "/public_html/coffeeclub.app/i/test.txt";

const c = new Client();
c.on("ready", function() {
  c.put(localFile, serverFile, function(err) {
    if (err) throw err;
    c.end();
  });
});

c.connect({
  host: process.env["host"],
  user: process.env["user"],
  password: process.env["password"]
});
