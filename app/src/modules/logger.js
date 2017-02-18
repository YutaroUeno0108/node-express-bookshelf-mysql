
winston = require('winston');
DailyRotateFile = require('winston-daily-rotate-file');

logger = new winston.Logger({
  transports : [
    new winston.transports.Console({
      timestamp: true
    }),
    new DailyRotateFile({
      name:'info-file',
      filename:'logs/info.log',
      level:'info'
    }),
    new DailyRotateFile({
      name:'error-file',
      filename:'logs/error.log',
      level:'error'
    })
  ]
});

module.exports = logger;
