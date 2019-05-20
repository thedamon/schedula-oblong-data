import Vue from 'vue';
import Vuex from 'vuex';
import coolstory from 'coolstory.js';
import faker from 'faker';
import _ from 'lodash';
import midsomerplots from 'midsomerplots-content';

Vue.use(Vuex);

// Make some events

const events = [];

// events.push({
//   name: 'The Greatest Show on earth',
//   company: 'Clowntemps',
//   city: 'London',
//   province: 'Ontario',
//   credits: {
//     playwright: 'Terence Attwellig',
//     director: 'Torril Muddwater',
//     featuring: 'Archipelago Daniel'
//   },
//   genre: 'Comedy',
//   img: faker.image.image(),
//   summary: faker.lorem.paragraph(),
//   price: 15,
//   venue: 'Spriet',
//   length: 60,
//   social: {
//     facebook: '',
//     twitter: ''
//   },
//   showTimes: [
//     new Date(2019, 5, 30, 21),
//     new Date(2019, 6, 1, 14, 30),
//     new Date(2019, 6, 2, 19, 30),
//     new Date(2019, 6, 4, 17, 30),
//     new Date(2019, 6, 6, 20, 30),
//     new Date(2019, 6, 8, 12, 30)
//   ]
// });

const showTime = () => [
  _.sample([15, 16, 17, 18, 19, 20, 21]),
  _.sample([0, 30])
];

const fakeEvent = () => {
  return {
    img: faker.image.image(),
    name: coolstory.title(),
    company: faker.company.companyName(),
    city: _.sample([faker.address.city(), 'London']),
    province: _.sample([
      'ON',
      'AB',
      'BC',
      'ON',
      'NY',
      'CA',
      'OR',
      'ON',
      'ON',
      'ON'
    ]),
    credits: {
      playwright: faker.name.findName(),
      director: faker.name.findName(),
      featuring: faker.name.findName()
    },
    genre: _.sample([
      'Musical',
      'Clown love story',
      'solo journey',
      'an exploration through movement',
      'a burlesque cabaret',
      'multidisciplinary shakespeare redux',
      'improvisation',
      'shadow puppet epic',
      'childrenʼs theatre',
      'immersive verbatim docudrama',
      'solo',
      'solo comedic dramedy',
      'insane clown posse',
      'mime'
    ]),
    summary: midsomerplots.generate(Math.random() * 100),
    venue: _.sample([
      'Spriet',
      'Procunier',
      'TAP',
      'McManus',
      'Wolf',
      'Palace'
    ]),
    price: 15,
    length: 60,
    showTimes: [
      new Date(2019, 4, 30, 21),
      new Date(2019, 5, 1, ...showTime()),
      new Date(2019, 5, 2, ...showTime()),
      new Date(2019, 5, 4, ...showTime()),
      new Date(2019, 5, 6, ...showTime()),
      new Date(2019, 5, 8, ...showTime())
    ]
  };
};

let i = 0;
while (i < 30) {
  events.push(fakeEvent());
  i++;
}

export default new Vuex.Store({
  state: {
    activeFilters: [],
    events
  },
  mutations: {},
  actions: {}
});
