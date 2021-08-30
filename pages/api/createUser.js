import { createUser } from '../../lib/models'

export default function handler(req, res) {
  createUser(req.body)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(400).send(err))
}
