module.exports = function (router) {
  const version = 'v5'

  // Show the task page
  router.get('/v5/1-task', function (req, res) {
    res.render('v5/1-task')
  })

  // Handle form submission from the task page
  router.post('/v5/1-task', function (req, res) {
    console.log('✅ POST /v5/1-task triggered')
    console.log('Form data:', req.body)

    const isDone = req.body.breakfastDone === 'yes'
    req.session.data.taskStatuses = req.session.data.taskStatuses || {}
    req.session.data.taskStatuses.breakfast = isDone ? 'complete' : 'incomplete'

    res.redirect('/v5/0-task-list')
  })

  // Show the task list
  router.get('/v5/0-task-list', function (req, res) {
    res.render('v5/0-task-list')
  })
}
