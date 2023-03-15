const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api', router);
app.use('/api/rtk', router);

let postUserInfo = {};

router.get('/auth', (req, res) => {
  const data = {
    name: '张三',
    job: 'developer',
    age: 18,
    salary: '0, /(ㄒoㄒ)/~~',
  };

  res.status(200).send(data);
});

router.get('/auth/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    name: id,
    job: 'developer',
    age: postUserInfo.age,
    salary: '0, /(ㄒoㄒ)/~~',
  };

  res.status(200).send(data);
});

router.post('/postUser', (req, res) => {
  console.info(req.body);
  postUserInfo = req.body;

  res.status(200).end();
});

app.listen(1234, () => {
  console.info('react-app server start on port 1234');
});
