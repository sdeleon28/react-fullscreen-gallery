import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../../../src/js/index';


const app = document.getElementById('app');

/* eslint-disable */
const images = [
  [require('../img/01.jpg'), require('../img/01-thumb.jpg'), 'New York moving'],
  [require('../img/02.jpg'), require('../img/02-thumb.jpg'), 'New York traffic'],
  [require('../img/03.jpg'), require('../img/03-thumb.jpg'), 'Street dancers'],
  [require('../img/04.jpg'), require('../img/04-thumb.jpg'), 'Lights'],
  [require('../img/05.jpg'), require('../img/05-thumb.jpg'), 'NBC Studio'],
  [require('../img/06.jpg'), require('../img/06-thumb.jpg'), 'New York by night'],
  [require('../img/07.jpg'), require('../img/07-thumb.jpg'), 'Empire State Building'],
  [require('../img/08.jpg'), require('../img/08-thumb.jpg'), 'New York Promenade'],
  [require('../img/09.jpg'), require('../img/09-thumb.jpg'), 'Ellis Island Flag'],
  [require('../img/10.jpg'), require('../img/10-thumb.jpg'), 'Central Park'],
  [require('../img/11.jpg'), require('../img/11-thumb.jpg'), 'Statue of Liberty'],
  [require('../img/12.jpg'), require('../img/12-thumb.jpg'), 'Shoes'],
  [require('../img/13.jpg'), require('../img/13-thumb.jpg'), 'Shoes'],
  [require('../img/14.jpg'), require('../img/14-thumb.jpg'), 'Shoes'],
  [require('../img/15.jpg'), require('../img/15-thumb.jpg'), 'Shoes'],
  [require('../img/16.jpg'), require('../img/16-thumb.jpg'), 'Shoes'],
  [require('../img/17.jpg'), require('../img/17-thumb.jpg'), 'Shoes'],
  [require('../img/18.jpg'), require('../img/18-thumb.jpg'), 'Shoes'],
  [require('../img/19.jpg'), require('../img/19-thumb.jpg'), 'Shoes'],
  [require('../img/20.jpg'), require('../img/20-thumb.jpg'), 'Shoes'],
].map(([imageUrl, thumbnailUrl, title]) => ({
  imageUrl,
  thumbnailUrl,
  title,
  alt: title,
}));

ReactDOM.render(<Gallery images={images} />, app);
