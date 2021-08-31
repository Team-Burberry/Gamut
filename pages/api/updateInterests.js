import { updateInterests } from '../../lib/models'

export default function handler(req, res) {

  return new Promise(resolve => {
    updateInterests(req.body.interests, req.body.email)
    .then(result => {
      res.status(201).send(result)
      resolve()
    })
    .catch(err => res.status(400).send(err))
  })
}
