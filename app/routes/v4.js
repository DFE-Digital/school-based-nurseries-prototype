module.exports = function(router) {

  var version = 'v4';

  /*****
   * General prototype pages (not part of the service)
  *****/

  router.get('/' + version + '/' + 'config', function (req, res) {
    res.render(version + '/config', {
      'version' : version.substring(1)
		})
  })

  router.post('/' + version + '/' + 'config-validation', function (req, res) {

    var userType = req.session.data['userType']
    var entryPoint = req.session.data['entryPoint']

    // For Single Academy Trust (SAT) type users
    if (userType == "Single Academy Trust (SAT)") {
      req.session.data['rb'] = "SAT"
    }
    // For Multi Academy Trust (MAT) type users
    else {
      req.session.data['rb'] = "MAT"
    }

    // Routing - send to the chosen entry point
    if (entryPoint == "Start page on GOV.UK (Estate Management Portal)") {
      res.redirect('/' + version + '/' + 'emp/start')
    }
    else if (entryPoint == "Department for Education Sign-in") {
      res.redirect('/' + version + '/' + 'dfe-sign-in/department-for-education-sign-in')
    }
    else if (entryPoint == "Home (Estate Management Portal)") {
      res.redirect('/' + version + '/' + 'emp/home')
    }
    else {
      res.redirect('/' + version + '/' + 'start')
    }

  })

  /*****
   * Signed in (EOI)
   * Apply
  *****/

  router.post('/' + version + '/' + '0-select-a-setting-validation', function (req, res) {

    var setting = req.body['setting']
    
    // Select a school that sits on 1 site (i.e. skip the site page)
    if (setting == "Ashdown Secondary" || setting == "Beacon Rise Academy") {
      res.redirect('/' + version + '/' + '2-select-a-block')
    }
    // Select a school that sits on 1 site plus has 1 block (i.e. skip the site and block page)
    else if (setting == "Elm Tree Primary" || setting == "Fern Valley Primary") {
      res.redirect('/' + version + '/' + '3-block-capacity')
    }
    // Select a school that sits on more than 1 site (i.e. show the site page)
    else {
      res.redirect('/' + version + '/' + '1-select-a-site')
    }

  })

  router.post('/' + version + '/' + '5-urgent-repairs-needed-validation', function (req, res) {

    var repairsNeeded = req.body['repairsNeeded']
    
    // User skips this section
    if (repairsNeeded == "No") {
      res.redirect('/' + version + '/' + '6-add-another-block')
    }
    // User enters details about a repair needed
    else {
      res.redirect('/' + version + '/' + '5a-tell-us-about-condition-problem-1')
    }

  })

  router.post('/' + version + '/' + '5e-tell-us-about-condition-problem-5-validation', function (req, res) {

    var closures = req.body['closures']
    
    // User skips this section
    if (closures == "No") {
      res.redirect('/' + version + '/' + '5f-tell-us-about-condition-problem-6')
    }
    // User enters details about closures
    else {
      res.redirect('/' + version + '/' + '5ei-closure')
    }

  })

  router.post('/' + version + '/' + '5f-tell-us-about-condition-problem-6-validation', function (req, res) {

    var evidence = req.body['evidence']
    
    // User skips this section
    if (evidence == "No") {
      res.redirect('/' + version + '/' + '6-add-another-block')
    }
    // User enters details about evidence
    else {
      res.redirect('/' + version + '/' + '5fi-what-evidence')
    }

  })

  router.post('/' + version + '/' + '6-add-another-block-validation', function (req, res) {

    var addAnotherBlock = req.body['addAnotherBlock']
    
    // User adds another block
    if (addAnotherBlock == "Yes") {
      res.redirect('/' + version + '/' + '2-select-a-block?rowCount=2')
    }
    // User goes to check your answers
    else {
      res.redirect('/' + version + '/' + '7-check-your-answers')
    }

  })

}