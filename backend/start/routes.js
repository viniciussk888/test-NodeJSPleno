'use strict'

const Route = use('Route')

Route.get('/points','PointController.index')

Route.get('/', () => {
  return { greeting: 'API Online' }
})
