import request from 'superagent'

const rootUrl = '/api/v1/clothes'

export function getClothes (condition) {
  return request.get(`${rootUrl}/${condition}`)
    .then(res => {
      return res.body
    })
}
