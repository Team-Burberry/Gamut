import { userCreate } from '../../lib/models'

export default function handler(req, res) {
  userCreate(req.body)
  res.status(201)
}
