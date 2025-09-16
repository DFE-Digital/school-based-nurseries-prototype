module.exports = function(router) {

  /******************************
   * Routes for all versions of the prototype before v3
   * Chris Harding (20/05/25)
  ******************************/

  /*****
   * General prototype pages (not part of the service)
  *****/

  router.get('/:version/pages', function (req, res) {

    var version = req.params.version

    res.render(version + '/pages', {
      'version' : version.substring(1)
		})
  })

}