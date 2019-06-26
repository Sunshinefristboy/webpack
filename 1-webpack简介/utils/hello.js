import $ from 'jquery';

/**
 * 创建 dom 对象，并返回
 * @param {String} str 文本
 * @return DOM对象
 */
export default str => {
  // let divEl = document.createElement('div');
  // divEl.innerHTML = str;
  // return divEl;

  let divEl = $(`<div>${str}</div>`);
  return divEl;
};

// 处理上面的默认暴露，还可以单独暴露
export let name = '张三';
