const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_contents: 'buzzfeed/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_contents: 'nasa/donec.json',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_contents: 'europa/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_contents: 'desdev/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_contents: 'google/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_contents: 'stanford/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_contents: 'edublogs/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_contents: 'ucla/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_contents: 'theguardian/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_contents: 'reverbnation/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_contents: 'china/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_contents: 'networksolutions/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_contents: 'instagram/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_contents: 'lycos/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_contents: 'gmpg/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_contents: 'paginegialle/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_contents: 'wikia/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_contents: 'shareasale/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_contents: 'java/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_contents: 'java/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
