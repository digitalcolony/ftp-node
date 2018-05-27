const config = require("./config.json");
const envConfig = config["ftp_settings"];

Object.keys(envConfig).forEach(key => {
  process.env[key] = envConfig[key];
});
