'use strict';

module.exports = {
  'db': {
    'name': 'db',
    'connector': 'memory',
  },
  'MongoDB': {
    'host': 'ds237832.mlab.com',
    'port': 37832,
    // 'url': process.env.MONGODB_URI,
    'database': process.env.MONGODB_USERNAME,
    'username': process.env.MONGODB_USERNAME,
    'password': process.env.MONGODB_PASSWORD,
    'name': 'MongoDB',
    'connector': 'mongodb',
  },
};
