const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'test',
    email: 'test@tester',
    password: 'Password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
