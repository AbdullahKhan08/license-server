const crypto = require('crypto')
require('dotenv').config()
function signData(licenseKey, organization, deviceFingerprint) {
  const secret = process.env.LICENSE_SECRET
  if (!secret) {
    throw new Error('❌ LICENSE_SECRET is not defined in environment.')
  }
  const payload = `${licenseKey}|${organization}|${deviceFingerprint}`
  return crypto.createHmac('sha256', secret).update(payload).digest('hex')
}

module.exports = { signData }
