import { getUserInfo } from '../../lib/models';

export default function handler(req, res) {
  // console.log(req.query.email);
  return new Promise(resolve => {
    getUserInfo(req.query.email)
    .then(result => {
      res.status(200).send(result)
      resolve()
    })
    .catch(err => res.status(400).send(err))
  })
}
