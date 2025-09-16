//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Radio redirect
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

module.exports = router