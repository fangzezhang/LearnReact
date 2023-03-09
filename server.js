const express = require('express');
const app = express();
const router = express.Router();

router.get('/auth', (req, res) => {
  const data = {
    name: '张三',
    job: 'developer',
    age: 18,
    salary: '0, /(ㄒoㄒ)/~~',
  };

  res.status(200).send(data);
});

app.use('/api', router);

app.listen(1234, () => {
  console.info('react-app server start on port 1234');
});
