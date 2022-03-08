import request from 'superagent'

const rootUrl = '/api/v1/activities'

export function getActivities (type) {
  return request.get(`${rootUrl}/${type}`)
    .then(res => {
      return res.body
    })
}
