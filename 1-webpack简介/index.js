// const $ = require('jquery');
// import $ from 'jquery';

// function Hello() {
//   let element = $('<div>hello world</div>');
//   $('body').append(element);
// }

// Hello();

import $ from 'jquery';
// import hello from './utils/hello';
// import { name } from './utils/hello';
// 上面两行代码，完全可以写成一行
import hello, { name } from './utils/hello';
console.log(name);

// document.documentElement.appendChild(hello('我的天'));

// document.documentElement.appendChild(hello('我的地'));

$('body').append(hello('我的天'));
