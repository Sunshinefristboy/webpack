// 接收如何使用 webpack 对 css 做打包

// 将 css 做为模块的方式来引入
import './styles/index.css';
import './styles/a.sass';

// 将 图片 作为模块的方式来引入
import myImg from './assets/avatar.jpg';
import MyImg2 from './assets/photo.jpeg';
console.log(MyImg2);

document.body.innerHTML = `
  <h1>wo de css asdfasd</h1>
  <img src="${myImg}" alt=""/>
  <img src="${MyImg2}" alt=""/>
`;
