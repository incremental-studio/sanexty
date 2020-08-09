require('dotenv').config()

module.exports = {
  env: {
    FABRIC_PROJECT_ID:
      process.env.FABRIC_PROJECT_ID,
  },
  poweredByHeader: false,
}
