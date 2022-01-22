const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');

const countryRouter = require("./routes/country.routes");
const provinceRouter = require("./routes/province.routes");
const jobFormRouter = require("./routes/jobForm.routes");
const jobFormFileRouter = require("./routes/jobFormFile.routes");
const countries = require("./controllers/country.controller");
const provinces = require("./controllers/province.controller");
const jobForms = require("./controllers/jobForm.controller");
const jobFormFiles = require("./controllers/jobFormFile.controller");

const db = require("./models");
const Country = db.country;


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/countries', countryRouter);
app.use('/api/provinces', provinceRouter);
app.use('/api/jobForm', jobFormRouter);
app.use('/api/jobFormFile', jobFormFileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const setupDatabase = async function() {

  await db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");

  });

  await countries.setupTable();

  // Find the country IDs
  var canada = await countries.findbyName('Canada');
  var usa = await countries.findbyName('USA');

  await provinces.setupProvinces(canada[0].id);
  await provinces.setupStates(usa[0].id);
}

setupDatabase();

module.exports = app;
