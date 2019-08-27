/* src/app.js */

// Styles
import 'styles/_app.scss';

$(document).ready(() => {
  console.log('Ready!');

  require('scripts/demo');
});


// load
// $(document).load(() => {});
// load

// scroll
$(window).scroll(() => {});
// scroll

// mobile sctipts
const screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screen_width <= 767) {}
// mobile sctipts
