import { createUser } from '../../lib/models'

export default function handler(req, res) {
  return new Promise(resolve => {
    createUser(req.body)
    .then(result => {
      res.status(201).send(result)
      resolve()
    })
    .catch(err => res.status(400).send(err))
  })
}
