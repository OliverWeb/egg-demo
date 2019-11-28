// ==UserScript==
// @name         Vue + Axios + SwaggerAPI
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  try to take over the world!
// @author       Oliver_web@163.com
// @match        http://*/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @include      /^http?:\/\/(\w+\.)?swagger-ui.html/
// ==/UserScript==
// https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js
// console.log(window.location.href.includes('swagger-ui'))
// 版本启动
console.log('Vue + Axios + SwaggerAPI当前插件版本1.0.2')
// if (window.location.href.includes('swagger-ui')) {
//     $('.opblock-tag-section').click(function (e) {
//         let moudleName = $(e.currentTarget).find('.opblock-tag').find('span').text()
//         var title = $(e.currentTarget).find('.opblock-tag').find('span').text()
//         setTimeout(function () {
//             $('.opblock-summary-method').click(function (e) {
//                 e.stopPropagation()
//                 var method = $(e.currentTarget).text()
//                 var api =  $(e.currentTarget).next().find('span').text()
//                 var name = api.match(/{?\w+}?$/)[0].replace(/[{}]/g, '')
//                 /* 赋值文本 */
//                 function copyText (id, attr) {
//                     let target = null;
//
//                     if (attr) {
//                         target = document.createElement('div');
//                         target.id = 'tempTarget';
//                         target.style.opacity = '0';
//                         if (id) {
//                             let curNode = document.querySelector('#' + id);
//                             target.innerText = curNode[attr];
//                         } else {
//                             target.innerText = attr;
//                         }
//                         document.body.appendChild(target);
//                     } else {
//                         target = document.querySelector('#' + id);
//                     }
//
//                     try {
//                         let range = document.createRange();
//                         range.selectNode(target);
//                         window.getSelection().removeAllRanges();
//                         window.getSelection().addRange(range);
//                         document.execCommand('copy');
//                         window.getSelection().removeAllRanges();
//                         console.log('复制成功')
//                     } catch (e) {
//                         console.log('复制失败')
//                     }
//
//                     if (attr) {
//                         // remove temp target
//                         target.parentElement.removeChild(target);
//                     }
//                 }
//                 copyText('',`${moudleName}/${name}-${method.toLowerCase()}`)
//                 console.log('成功了')
//             })
//         }, 1000)
//     })
// }
