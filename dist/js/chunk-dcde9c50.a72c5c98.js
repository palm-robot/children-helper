(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcde9c50"],{"3fe8":function(e,t,n){},"728e":function(e,t,n){"use strict";var a=n("3fe8"),l=n.n(a);l.a},8027:function(e,t,n){"use strict";var a=n("9de8"),l=n.n(a);l.a},"9de8":function(e,t,n){},b469:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"运算类型"}},[n("el-select",{model:{value:e.formInline.calType,callback:function(t){e.$set(e.formInline,"calType",t)},expression:"formInline.calType"}},[n("el-option",{attrs:{label:"加法",value:"plus"}}),n("el-option",{attrs:{label:"减法",value:"minus"}}),n("el-option",{attrs:{label:"加减混合",value:"mix"}})],1)],1),n("el-form-item",{attrs:{label:"题目数量"}},[n("el-input-number",{attrs:{min:12,step:4,max:100,"step-strictly":""},model:{value:e.formInline.calCount,callback:function(t){e.$set(e.formInline,"calCount",t)},expression:"formInline.calCount"}})],1),n("el-form-item",{attrs:{label:"最终结果范围"}},[n("el-select",{model:{value:e.formInline.calMax,callback:function(t){e.$set(e.formInline,"calMax",t)},expression:"formInline.calMax"}},[n("el-option",{attrs:{label:"10以内",value:"10"}}),n("el-option",{attrs:{label:"20以内",value:"20"}}),n("el-option",{attrs:{label:"30以内",value:"30"}}),n("el-option",{attrs:{label:"50以内",value:"50"}})],1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.generateItems}},[e._v("生成试题")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.downloadPdf}},[e._v("下载试题")])],1)],1),n("div",{attrs:{id:"full-page"}},[n("ul",{staticClass:"items-table",attrs:{id:"items-table"}},e._l(e.items,(function(e,t){return n("li",{key:t,staticClass:"single-item"},[n("single",{attrs:{formula:e}})],1)})),0),e._m(0)])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("span",{staticClass:"date"},[e._v("日期：____________")]),n("span",{staticClass:"score"},[e._v("得分：____________")])])}],i=(n("e25e"),n("da84c")),r=n("9702"),s={components:{Single:i["a"]},data:function(){return{formInline:{calType:"mix",calCount:100,calMax:"30"},items:[]}},mounted:function(){this.generateItems()},methods:{downloadPdf:function(){Object(r["a"])("三数加减","full-page")},generateItems:function(){this.items=[];for(var e=0;e<this.formInline.calCount;e++){var t=this.getSingle();t.id=e,this.items.push(t)}},getSingle:function(){var e=this.getRandomOperation(),t=parseInt(this.formInline.calMax),n=this.randomNumber(0,t);0===n&&(n=this.randomNumber(0,t));var a=this.getRandomNumber(e,n),l=this.getRandomOperation(),i=0;return i="plus"===e?this.getRandomNumber(l,n+a):this.getRandomNumber(l,n-a),{numbers:[n,a,i],operations:[e,l]}},getRandomNumber:function(e,t){var n=parseInt(this.formInline.calMax)-t,a=0;return a="plus"===e?this.randomNumber(0,n):this.randomNumber(0,t),a},getRandomOperation:function(){var e="plus";return"minus"===this.formInline.calType?e="minus":"mix"===this.formInline.calType&&(e=Math.round(10*Math.random())>=5?"plus":"minus"),e},randomNumber:function(e,t){var n=e>t?e:t,a=e>t?t:e;return Math.round(Math.random()*(n-a))}}},o=s,m=(n("728e"),n("8027"),n("2877")),u=Object(m["a"])(o,a,l,!1,null,"0f5c17ee",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-dcde9c50.a72c5c98.js.map