(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-design"],{"27a8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{ColorList:this.ColorList,modalName:"",round:!1,size:"",color:"red",shadow:!1,border:!1,bordersize:""}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetRound:function(t){this.round=t.detail.value},SetSize:function(t){this.size=t.detail.value},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetShadow:function(t){this.shadow=t.detail.value},SetBorder:function(t){this.border=t.detail.value,t.detail.value||(this.bordersize=!1)},SetBorderSize:function(t){this.bordersize=t.detail.value}}};e.default=i},8024:function(t,e,a){"use strict";a.r(e);var i=a("27a8"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"8e16":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".box[data-v-206a3aba]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100px}",""])},c322:function(t,e,a){"use strict";a.r(e);var i=a("e33d"),s=a("8024");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("cd8c");var l=a("2877"),o=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,"206a3aba",null);e["default"]=o.exports},cd8c:function(t,e,a){"use strict";var i=a("fc47"),s=a.n(i);s.a},e33d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("按钮 / 设计")])],2),a("v-uni-view",{staticClass:"padding-xl"},[a("v-uni-view",{staticClass:"box bg-white text-center radius"},[a("v-uni-button",{staticClass:"cu-btn",class:[t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color,t.round?"round":"",t.size,t.shadow?"shadow":""]},[t._v("我是一个按钮")])],1),a("v-uni-view",{staticClass:"padding text-center"},[t._v('class="cu-btn'),t.color?a("v-uni-text",[t._v(t._s(" ")+" "+t._s(t.border?t.bordersize?"lines-"+t.color:"line-"+t.color:"bg-"+t.color)+" "+t._s(t.round?"round":"")+" "+t._s(t.size)+" "+t._s(t.shadow?"shadow":""))]):t._e(),t._v('"')],1)],1),a("v-uni-view",{staticClass:"cu-form-group margin-top",attrs:{"data-target":"ColorModal"},on:{click:function(e){e=t.$handleEvent(e),t.showModal(e)}}},[a("v-uni-view",{staticClass:"title"},[t._v("选择颜色")]),a("v-uni-view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("是否圆角")]),a("v-uni-switch",{staticClass:"blue",class:t.round?"checked":"",on:{change:function(e){e=t.$handleEvent(e),t.SetRound(e)}}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("选择尺寸")]),a("v-uni-radio-group",{on:{change:function(e){e=t.$handleEvent(e),t.SetSize(e)}}},[a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue radio",attrs:{value:"sm"}}),a("v-uni-text",{staticClass:"margin-left-sm"},[t._v("小")])],1),a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),a("v-uni-text",{staticClass:"margin-left-sm"},[t._v("中")])],1),a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue radio",attrs:{value:"lg"}}),a("v-uni-text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("是否添加阴影")]),a("v-uni-switch",{class:t.shadow?"checked":"",on:{change:function(e){e=t.$handleEvent(e),t.SetShadow(e)}}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("是否镂空")]),a("v-uni-switch",{class:t.border?"checked":"",on:{change:function(e){e=t.$handleEvent(e),t.SetBorder(e)}}})],1),t.border?a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("边框大小")]),a("v-uni-radio-group",{on:{change:function(e){e=t.$handleEvent(e),t.SetBorderSize(e)}}},[a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue radio",attrs:{value:"",checked:""}}),a("v-uni-text",{staticClass:"margin-left-sm"},[t._v("小")])],1),a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue radio",attrs:{value:"s"}}),a("v-uni-text",{staticClass:"margin-left-sm"},[t._v("大")])],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar justify-end solid-bottom"},[a("v-uni-view",{staticClass:"content"},[t._v("选择颜色")]),a("v-uni-view",{staticClass:"action",on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,function(e,i){return"white"!=e.name?a("v-uni-view",{key:i,staticClass:"padding-xs",attrs:{"data-color":e.name},on:{click:function(e){e=t.$handleEvent(e),t.SetColor(e)}}},[a("v-uni-view",{staticClass:"padding-tb radius",class:"bg-"+e.name},[t._v(t._s(e.title))])],1):t._e()}),1)],1)],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},fc47:function(t,e,a){var i=a("8e16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("8f5e8e88",i,!0,{sourceMap:!1,shadowMode:!1})}}]);