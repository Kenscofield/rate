(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2532:function(t,e,r){"use strict";var n=r("23e7"),c=r("5a34"),s=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(s(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var n=r("861d"),c=r("c6b6"),s=r("b622"),a=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==c(t))}},"498a":function(t,e,r){"use strict";var n=r("23e7"),c=r("58a8").trim,s=r("e070");n({target:"String",proto:!0,forced:s("trim")},{trim:function(){return c(this)}})},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},7431:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add_list"},[r("div",{staticClass:"add_list_search"},[r("el-input",{attrs:{size:"medium",placeholder:"搜索货币"},on:{input:t.searchInput},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[r("template",{slot:"prepend"},[r("span",{staticStyle:{color:"rgb(102, 135, 242)","font-size":"23px","background-color":"rgb(49,63,82)","padding-left":"0px"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"}})],1)])],2)],1),r("div",{staticClass:"add_list_country",staticStyle:{"margin-top":"45px"}},t._l(t.add_list_country_good,(function(e,n){return r("div",{key:n,staticClass:"add_list_country_item",on:{click:function(r){return t.changStatus(e)}}},[r("span",[r("img",{attrs:{src:"assets/flags/4x3/"+e.tcur.slice(0,2).toLowerCase()+".svg",alt:"",width:"45px"}})]),r("span",{staticStyle:{color:"rgb(255,255,240)","font-size":"16px","justify-self":"start"}},[t._v(t._s(e.name))]),r("span",[1===e.select?r("i",{staticClass:"el-icon-check",staticStyle:{"font-size":"22px",color:"rgb(102,135,250)"}}):t._e()])])})),0),r("div",{staticClass:"add_country_button"},[r("el-button",{attrs:{type:"danger",icon:"el-icon-close",circle:""},on:{click:t.go_list}})],1)])},c=[],s=(r("caad"),r("b0c0"),r("b64b"),r("2532"),r("498a"),r("159b"),{data:function(){return{searchKey:"",add_list_country:[],my_rate_zz_countries:[]}},computed:{add_list_country_good:function(){var t=[];return this.add_list_country.forEach((function(e){"ALREADY"===e.status&&t.push(e)})),t}},created:function(){this.resh_go()},methods:{go_list:function(){this.$router.push("/")},searchInput:function(){var t=this.searchKey.trim().toUpperCase();""===t?this.add_list_country.forEach((function(t){t.status="ALREADY"})):this.add_list_country.forEach((function(e){e.name.includes(t)||(e.status="noShow")}))},changStatus:function(t){var e=this,r=[];this.my_rate_zz_countries.includes(t.tcur)?(this.my_rate_zz_countries.forEach((function(e){e===t.tcur||r.push(e)})),this.my_rate_zz_countries=r):this.my_rate_zz_countries.push(t.tcur),chrome.storage.local.set({my_rate_zz_countries:this.my_rate_zz_countries},(function(r){if(""===e.searchKey)e.resh_go();else{var n=[];e.add_list_country.forEach((function(e){e.tcur===t.tcur?(1===e.select?e.select=0:e.select=1,n.push(e)):n.push(e)})),e.add_list_country=n}}))},resh_go:function(){var t=this;chrome.storage.local.get(["my_rate_zz","my_rate_zz_countries"],(function(e){var r=e.my_rate_zz,n=e.my_rate_zz_countries;t.my_rate_zz_countries=n,n.forEach((function(t){r[t].select=1}));var c=[],s=Object.keys(r);s.forEach((function(t){c.push(r[t])})),t.add_list_country=c}))}}}),a=s,i=(r("aaee"),r("2877")),o=Object(i["a"])(a,n,c,!1,null,null,null);e["default"]=o.exports},aaee:function(t,e,r){"use strict";var n=r("c5ea"),c=r.n(n);c.a},ab13:function(t,e,r){var n=r("b622"),c=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[c]=!1,"/./"[t](e)}catch(n){}}return!1}},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),s=r("df75"),a=r("d039"),i=a((function(){s(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return s(c(t))}})},c5ea:function(t,e,r){},caad:function(t,e,r){"use strict";var n=r("23e7"),c=r("4d64").includes,s=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e070:function(t,e,r){var n=r("d039"),c=r("5899"),s="​᠎";t.exports=function(t){return n((function(){return!!c[t]()||s[t]()!=s||c[t].name!==t}))}}}]);
//# sourceMappingURL=about.fdfabbd1.js.map