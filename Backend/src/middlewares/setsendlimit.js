const rateLimit = require("express-rate-limit");

const sendLimit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // max 5 requests per IP
  message: "Too many requests from this IP, please try again later",
});

module.exports = sendLimit;
