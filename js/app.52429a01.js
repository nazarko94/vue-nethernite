(function(){"use strict";var t={198:function(t,e,s){var a=s(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrap"},[e("header",{staticClass:"container"},[e("div",{staticClass:"row"},[e("img",{staticClass:"logo",attrs:{src:s(811),alt:"Nethernite"}}),e("div",{staticClass:"col-12"},[e("div",{staticClass:"pt-4"},[e("Search")],1)])])]),e("main",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("PostsList",{attrs:{posts:t.POSTS}})],1)])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",[e("nav",{staticClass:"pt-4"},[e("Paginate",{attrs:{"page-count":t.NBPAGES,"prev-text":"Back","next-text":"Forward","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-item","prev-link-class":"page-link","next-class":"page-item","next-link-class":"page-link","click-handler":t.pageChangeHandler},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])])]),e("footer",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("MyFooter")],1)])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.SELECTED_POST?e("Modal"):t._e()],1)])])])},r=[],i=function(){var t=this,e=t._self._c;return e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"search",attrs:{placeholder:"Search..."},domProps:{value:t.searchVal},on:{input:[function(e){e.target.composing||(t.searchVal=e.target.value)},function(e){return t.search(t.searchVal)}]}})])},o=[],l=s(629),c={name:"Search",computed:{...(0,l.Se)(["SEARCH_VAL"]),searchVal:{get(){return this.SEARCH_VAL},set(t){this.SET_SEARCH_VAL(t)}}},methods:{...(0,l.OI)(["SET_SEARCH_VAL"]),search(t){this.SET_SEARCH_VAL(t)}}},u=c,d=s(1),p=(0,d.Z)(u,i,o,!1,null,"f9649584",null),_=p.exports,v=function(){var t=this,e=t._self._c;return e("div",t._l(t.posts,(function(s,a){return e("ul",{key:a,staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[e("div",[t._v(" Name: "),e("strong",{staticClass:"pointer",attrs:{"data-toggle":"modal","data-target":"#modal"},on:{click:function(e){return t.selectedPost(s)}}},[t._v(" "+t._s(s.name)+" ")])]),e("div",{staticClass:"d-flex"},[e("span",[t._v("description:")]),s.description?e("span",{staticClass:"badge"},[t._v(" "+t._s(s.description)+" ")]):e("span",[t._v(" Dismiss")])])])])})),0)},S=[],f={name:"PostsList",props:{posts:{type:Array,required:!0,default(){return[]}}},methods:{...(0,l.OI)(["SET_SELECTED_POST"]),selectedPost(t){this.SET_SELECTED_POST(t)}}},h=f,C=(0,d.Z)(h,v,S,!1,null,"7b5066f4",null),E=C.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal fade",attrs:{id:"modal"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("div",[t._v("name: "),e("strong",[t._v(t._s(t.SELECTED_POST.name))])]),e("div",[t._v(" description: "),e("strong",[t._v(t._s(t.SELECTED_POST.description))])]),e("div",[t._v(" repository: "),e("strong",[t._v(t._s(t.SELECTED_POST.repository.url))])]),e("div",[t._v(" user: "),e("strong",[t._v(t._s(t.SELECTED_POST.repository.user))])])]),t._m(1)])])])])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" Desription "),e("strong")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"cross",attrs:{"aria-hidden":"true"}},[t._v("X")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],P={name:"Modal",computed:{...(0,l.Se)(["SELECTED_POST"])}},T=P,O=(0,d.Z)(T,g,m,!1,null,null,null),b=O.exports,A=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("url: "),e("a",{attrs:{href:"https://github.com/nazarko94",target:"_blank"}},[t._v("My Github")])])])}],L={name:"MyFooter"},w=L,V=(0,d.Z)(w,A,y,!1,null,null,null),x=V.exports,k={name:"App",data:()=>({page:1}),components:{Search:_,Modal:b,PostsList:E,MyFooter:x},computed:{...(0,l.Se)(["SEARCH_VAL","POSTS","NBPAGES","SELECTED_POST"])},watch:{async SEARCH_VAL(){await this.FETCH_POSTS_FROM_API(),this.POSTS.filter((t=>t.name.includes(this.SEARCH_VAL.toLowerCase())))}},methods:{...(0,l.nv)(["FETCH_POSTS_FROM_API"]),...(0,l.OI)(["SET_SEARCH_VAL"]),pageChangeHandler(t=1){this.FETCH_POSTS_FROM_API(t)}},async mounted(){await this.FETCH_POSTS_FROM_API()}},H=k,F=(0,d.Z)(H,n,r,!1,null,null,null),R=F.exports,M=s(582),D=s.n(M),Z=s(290),I=s.n(Z);a.ZP.use(l.ZP);let N=new l.ZP.Store({state:{posts:[],searchVal:"",selectedPost:null,nbPages:0,hitsPerPage:10},mutations:{SET_POSTS:(t,e)=>{t.posts=e},SET_SEARCH_VAL:(t,e)=>{t.searchVal=e},SET_SELECTED_POST:(t,e)=>{t.selectedPost=e},SET_NBPAGES:(t,e)=>{t.nbPages=e}},actions:{FETCH_POSTS_FROM_API({commit:t,state:e},s=1){const a=I()("OFCNCOG2CU","f54e21fa3a2a0160595bb058179bfb1e",{protocol:"https:"}),n=a.initIndex("npm-search");n.search(e.searchVal,{hitsPerPage:e.hitsPerPage,page:s}).then((({hits:e,nbPages:s})=>{t("SET_POSTS",e),t("SET_NBPAGES",s)}))}},getters:{POSTS(t){return t.posts},SEARCH_VAL(t){return t.searchVal},SELECTED_POST(t){return t.selectedPost},NBPAGES(t){return t.nbPages}}});var j=N;s(666);a.ZP.config.productionTip=!1,a.ZP.component("Paginate",D()),new a.ZP({render:t=>t(R),store:j}).$mount("#app")},811:function(t,e,s){t.exports=s.p+"img/nethernite.b92ab639.png"}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,r<i&&(i=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/vue-nethernite/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],o=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var u=l(s)}for(e&&e(a);c<i.length;c++)r=i[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},a=self["webpackChunkvue_nethernite"]=self["webpackChunkvue_nethernite"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(198)}));a=s.O(a)})();
//# sourceMappingURL=app.52429a01.js.map