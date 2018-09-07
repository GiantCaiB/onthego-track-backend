const expressJwt = require("express-jwt");
const keys = require("../config/keys");
const userService = require("../services/user");

module.exports = jwt;

function jwt() {
  const secret = keys.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      { url: "/api/auth/login", methods: ["POST"] },
      { url: "/api/auth/register", methods: ["POST"] }
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);
  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }
  done();
}
