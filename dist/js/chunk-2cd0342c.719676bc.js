(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd0342c"],{"1d7d":function(e,t,n){"use strict";var a=n("368c"),l=n.n(a);l.a},"368c":function(e,t,n){},a7ce:function(e,t,n){},c16c:function(e,t,n){"use strict";var a=n("a7ce"),l=n.n(a);l.a},cfe1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"运算类型"}},[n("el-select",{model:{value:e.formInline.calType,callback:function(t){e.$set(e.formInline,"calType",t)},expression:"formInline.calType"}},[n("el-option",{attrs:{label:"加法",value:"plus"}}),n("el-option",{attrs:{label:"减法",value:"minus"}}),n("el-option",{attrs:{label:"加减混合",value:"mix"}})],1)],1),n("el-form-item",{attrs:{label:"题目数量"}},[n("el-input-number",{attrs:{min:12,step:4,max:100,"step-strictly":""},model:{value:e.formInline.calCount,callback:function(t){e.$set(e.formInline,"calCount",t)},expression:"formInline.calCount"}})],1),n("el-form-item",{attrs:{label:"最终结果范围"}},[n("el-select",{model:{value:e.formInline.calMax,callback:function(t){e.$set(e.formInline,"calMax",t)},expression:"formInline.calMax"}},[n("el-option",{attrs:{label:"10以内",value:"10"}}),n("el-option",{attrs:{label:"20以内",value:"20"}}),n("el-option",{attrs:{label:"30以内",value:"30"}}),n("el-option",{attrs:{label:"50以内",value:"50"}}),n("el-option",{attrs:{label:"100以内",value:"100"}})],1)],1),n("el-form-item",[n("el-button",{attrs:{icon:"el-icon-refresh",type:"primary",plain:""},on:{click:e.generateItems}},[e._v("生成试题")])],1),n("el-form-item",[n("el-button",{attrs:{icon:"el-icon-printer",type:"success",plain:""},on:{click:e.downloadPdf}},[e._v("下载为PDF")])],1)],1),n("div",{attrs:{id:"full-page"}},[n("standard-number"),n("ul",{staticClass:"items-table",attrs:{id:"items-table"}},e._l(e.items,(function(e,t){return n("li",{key:t,staticClass:"single-item"},[n("single",{attrs:{formula:e}})],1)})),0),e._m(0)],1)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("span",{staticClass:"date"},[e._v("日期：____________")]),n("span",{staticClass:"score"},[e._v("得分：____________")])])}],i=(n("e25e"),n("da84c")),s=n("6825"),r=n("9702"),o={components:{Single:i["a"],StandardNumber:s["a"]},data:function(){return{formInline:{calType:"mix",calCount:100,calMax:"30"},items:[]}},mounted:function(){this.generateItems()},methods:{downloadPdf:function(){Object(r["a"])("两数加减","full-page")},generateItems:function(){this.items=[];var e="plus";"minus"===this.formInline.calType&&(e="minus");for(var t=0;t<this.formInline.calCount;t++){"mix"===this.formInline.calType&&(e=Math.round(10*Math.random())>=5?"plus":"minus");var n=this.getSingle(e);n.id=t,this.items.push(n)}},getSingle:function(e){var t=parseInt(this.formInline.calMax),n=this.randomNumber(0,t);0===n&&(n=this.randomNumber(0,t));var a=0;return a="plus"===e?this.randomNumber(0,t-n):this.randomNumber(0,n),{numbers:[n,a],operations:[e]}},randomNumber:function(e,t){var n=e>t?e:t,a=e>t?t:e;return Math.round(Math.random()*(n-a))}}},c=o,u=(n("1d7d"),n("c16c"),n("2877")),m=Object(u["a"])(c,a,l,!1,null,"841eb97c",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2cd0342c.719676bc.js.map