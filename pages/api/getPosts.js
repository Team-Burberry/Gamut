import { getPosts } from '../../lib/models';

export default function handler(req, res) {
  return new Promise(resolve => {
    getPosts()
    .then(result => {
      res.status(200).send(result)
      resolve()
    })
    .catch(err => res.status(400).send(err))
  })
}
