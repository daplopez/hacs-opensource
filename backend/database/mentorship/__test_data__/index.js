require('dotenv').config();
const seedDate = new Date(Date.parse(process.env.SEED_DATE));
module.exports = [
  {
    "id": 1,
    "mentor": 'Berky Vasyagin',
    "mentee": 'Patric Jobb',
    "point_total": 35,
    "createdAt": seedDate
  }, {
    "id": 2,
    "mentor": 'Piper Crasford',
    "mentee": 'Odo Boays',
    "point_total": 18,
    "createdAt": seedDate
  }, {
    "id": 3,
    "mentor": 'Johannah Matis',
    "mentee": 'Andros Myatt',
    "point_total": 51,
    "createdAt": seedDate
  }, {
    "id": 4,
    "mentor": 'Mahalia Anglish',
    "mentee": 'Arvie Haydn',
    "point_total": 7,
  "createdAt": seedDate 
  }, {
    "id": 5,
    "mentor": 'Rayner Grain',
    "mentee": 'Ericha Jiruch',
    "point_total": 12,
    "createdAt": seedDate
  }
];
