const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

app.use(cors());
//이거를 해서 fetch나 axios 안되던 cors 문제가 해결됨

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connected to mongodb'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('file has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

// app.use('/minjun', (req, res) => {
//   console.log('this is minjun web');
// });
//이렇게 작성하면, localhost:5001/minjun 들어가면 this is minjun web 이라는 콘솔 작동함

app.listen('5001', () => {
  console.log('backend is running');
});

// npm init 으로 package.json 을 만들고,
// npm i express mongoose dotenv multer 모두 설치
// package.json 에서 main을 index.js 로 바꾸고
// index.js 파일도 이렇게 내용 작성하고,
// npm run start 하면 작동되고,
// 그런데 오류 뜨는 경우 있는데, localhost5001로 바꾸면 해결됨
// npm i nodemon 하면 console.log 내용이 바뀌면 저절로 업뎃되어서 실행됨
