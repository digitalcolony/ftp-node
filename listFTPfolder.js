const Client = require("ftp");
require("./config/config");

const folderToList = "/public_html/";

const c = new Client();
c.on("ready", function() {
  c.list(folderToList, function(err, list) {
    if (err) throw err;
    console.dir(list);
    c.end();
  });
});

c.connect({
  host: process.env["host"],
  user: process.env["user"],
  password: process.env["password"]
});
