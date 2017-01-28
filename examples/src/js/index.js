import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../../../src/js/index';


const app = document.getElementById('app');

// Include jScrollPane styles (either like this or with a link in your HTML)
require('../../../node_modules/jscrollpane/style/jquery.jscrollpane.css');

/* eslint-disable */
const images = [
  [require('../img/01.jpg'), require('../img/01-thumb.jpg'), 'Microphone-looking Thingy'],
  [require('../img/02.jpg'), require('../img/02-thumb.jpg'), 'Happy Feet'],
  [require('../img/03.jpg'), require('../img/03-thumb.jpg'),
    'People Watching You Don\'t Mess with the Zohan'],
  [require('../img/04.jpg'), require('../img/04-thumb.jpg'), 'Some Sort Of An Awesome Spacecraft'],
  [require('../img/05.jpg'), require('../img/05-thumb.jpg'), null],
  [require('../img/06.jpg'), require('../img/06-thumb.jpg'), 'My Ideas'],
  [require('../img/07.jpg'), require('../img/07-thumb.jpg'), 'Watching Stars On Top Of A Car'],
  [require('../img/08.jpg'), require('../img/08-thumb.jpg'), null],
  [require('../img/09.jpg'), require('../img/09-thumb.jpg'), 'Girl On A Duck'],
  [require('../img/10.jpg'), require('../img/10-thumb.jpg'), 'Ghost'],
  [require('../img/11.jpg'), require('../img/11-thumb.jpg'), 'Ninja Photographer'],
  [require('../img/12.jpg'), require('../img/12-thumb.jpg'), 'Stars And A Mountain'],
  [require('../img/13.jpg'), require('../img/13-thumb.jpg'), 'City'],
  [require('../img/14.jpg'), require('../img/14-thumb.jpg'), 'Motion'],
  [require('../img/15.jpg'), require('../img/15-thumb.jpg'), 'More Motion'],
  [require('../img/16.jpg'), require('../img/16-thumb.jpg'), 'My Bedroom'],
  [require('../img/17.jpg'), require('../img/17-thumb.jpg'), 'Yuge!'],
  [require('../img/18.jpg'), require('../img/18-thumb.jpg'), 'Ding Dong'],
  [require('../img/19.jpg'), require('../img/19-thumb.jpg'), 'Girlier'],
  [require('../img/20.jpg'), require('../img/20-thumb.jpg'), 'Roofs'],
].map(([imageUrl, thumbnailUrl, title]) => ({
  imageUrl,
  thumbnailUrl,
  title,
  alt: title,
}));

ReactDOM.render(<Gallery images={images} />, app);
