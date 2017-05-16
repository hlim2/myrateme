var express=require('express');
var cookieParser=require('cookie-parser');
var bodyParse=require('body-parser');
var validator=require('express-validator');
var ejs=require('ejs');
var engine=require('ejs-mate');
var session=require('express-session');
var mongoose=require('mongoose');
var MongoStore=require('connect-mongo')(session);
var passport=require('passport');
var flash=require('connect-flash');
var _ = require('underscore');
var moment=require('moment');

var app=express();

mongoose.Promise=global.Promise;
//for mongoose connect one DB only, if connect multiple DB, use mongoose create connection
mongoose.connect('mongodb://localhost/myrateme');

require('./config/passport');
require('./secret/secret');

app.use(express.static('public'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.use(validator());

app.use(session({
  secret:'Thisismytestkey',
  resave:false,
  saveUninitialized:false,
  store:new MongoStore({mongooseConnection:mongoose.connection})
}));

<!--Must be added after session-->
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.locals._=_;
app.locals.moment=moment;

<!-- End-->

require('./route/user') (app,passport);
require('./route/company') (app);
require('./route/review') (app);
require('./route/message') (app);

app.listen(3000,function(){
  console.log('App is running on port 3000');
});
