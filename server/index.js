const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');

// 환경 변수 파일 설정
if (process.env.NODE_ENV === 'production') {
  dotenv.config();
} else {
  dotenv.config({
    path: './.development.env'
  });
}

// 서버 인스턴스 생성 및 속성 설정
const app = express();
app.set('port', process.env.PORT || 8080);

// 미들웨어 설정
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

// 라우터 임포트
const indexRouter = require('./routes');

// 라우터 설정
app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/', indexRouter);

// 에러 처리(400,500)
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} router does not exits`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log('===============================================');
  console.log(err);
  console.log('===============================================');

  const error = process.env.NODE_ENV !== 'production' ? err.message : 'Internal Server Error';
  return res.status(err.status || 500).json({
    message: error,
  });
});

app.listen(app.get('port'), () => {
  console.log(`Listen to localhost:${app.get('port')}`);
});