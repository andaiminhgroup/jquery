(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"2R/h":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o}},function(e,t,n){e.exports={url:function(e,t){if(e&&[e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var n=t(e);if(n)return n}return e&&e.url?e.url:""}}},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)}}])},ETb7:function(e,t,n){"use strict";function r(e){return e?e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""):""}n.d(t,"a",(function(){return r}))},WRwT:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var r=n("dhJC"),o=n("cpVT"),i=n("nKUr"),u=n("ZHcB"),a=n.n(u),c=n("2R/h"),l=n.n(c);var s,f,d,p,h,v={Twitter:{property:"twttr",src:"https://platform.twitter.com/widgets.js",id:"twitter-wjs",load:function(){window&&window.twttr&&window.twttr.widgets.load()}},Facebook:{property:"FB",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3",id:"fb-wjs",load:function(e){window&&window.FB&&window.FB.XFBML.parse(e)}},Instagram:{property:"instgrm",src:"https://www.instagram.com/embed.js",id:"insta-wjs",load:function(){window&&window.instgrm&&window.instgrm.Embeds.process()}}},y=n("Cwd9"),b=n("ETb7");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n,r){switch(e){case"heading1":case"heading2":case"heading3":case"heading4":case"heading5":case"heading6":var o=parseInt(e[e.length-1],10),u="h-".concat(Object(b.a)(t.text)),a=o;return"heading1"===e&&(a=f||a),Object(i.jsx)(y.b,g(g({},{id:u,level:a,poster:s,as:h}),{},{children:r}));case"paragraph":return Object(i.jsx)(y.c,g(g({},{level:p,lineHeight:d}),{},{children:r}));case"preformatted":return Object(i.jsx)("pre",{children:Object(i.jsx)("code",{children:r})});default:return null}}function x(e){return e.reduce((function(e,t){return e+Object(b.a)(t[0])}),"")}function w(e,t,n,r,o,i,u){var c=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(t[n])return k(t[n],n,r,o,i,u);var l=a.a.Elements;switch(n){case l.heading1:return _("h1",r,i,u,{id:x(i)});case l.heading2:return _("h2",r,i,u,{id:x(i)});case l.heading3:return _("h3",r,i,u,{id:x(i)});case l.heading4:return _("h4",r,i,u,{id:x(i)});case l.heading5:return _("h5",r,i,u,{id:x(i)});case l.heading6:return _("h6",r,i,u,{id:x(i)});case l.paragraph:return _("p",r,i,u);case l.preformatted:return _("pre",r,i,u);case l.strong:return _("strong",r,i,u);case l.em:return _("em",r,i,u);case l.listItem:case l.oListItem:return _("li",r,i,u);case l.list:return _("ul",r,i,u);case l.oList:return _("ol",r,i,u);case l.image:return E(e,r,u);case l.embed:return S(r,u);case l.hyperlink:return T(e,r,i,u,c);case l.label:return N(r,i,u);case l.span:return P(o);default:return null}}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.assign(e,{key:t})}function k(e,t,n,r,o,u){return Object(i.jsx)(e,g(g(g({},n),"image"===t?{src:n.url,url:void 0}:null),{},{children:o&&o.length?o:void 0}),"element-".concat(t,"-").concat(u+1))}function _(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=t.label?Object.assign(o,{className:t.label}):o;return Object(i.jsx)(e,g(g({},j(u,r)),{},{children:n}))}function T(e,t,n,r){var o=t.data.target?{target:t.data.target}:{},u=t.data.target?{rel:"noopener"}:{},a=l.a.Link.url(t.data,e);if(t.data.url){var c=new URL(t.data.url);c.hostname.indexOf(".")<0&&(a="/".concat(c.hostname).concat(c.pathname+c.search+c.hash))}var s=Object.assign({href:a},o,u);return Object(i.jsx)("a",g(g({},j(s,r)),{},{children:n}))}function N(e,t,n){var r=e.data?Object.assign({},{className:e.data.label}):{};return Object(i.jsx)("span",g(g({},j(r,n)),{},{children:t}))}function P(e){return e?e.split("\n").reduce((function(e,t){if(0===e.length)return[t];var n=(e.length+1)/2-1,r=Object(i.jsx)("br",g({},j({},n)));return e.concat([r,t])}),[]):null}function E(e,t,n){var r=t.linkTo?l.a.Link.url(t.linkTo,e):null,o=t.linkTo&&t.linkTo.target?{target:t.linkTo.target}:{},u=o.target?{rel:"noopener"}:{},a=Object(i.jsx)("img",{loading:"lazy",src:t.url,alt:t.alt||""});return Object(i.jsx)("p",g(g({},j({className:[t.label||"","block-img"].join(" ")},n)),{},{children:r?Object(i.jsx)("a",g(g({},Object.assign({href:r},o,u)),{},{children:a})):a}))}function S(e,t){v[e.oembed.provider_name]&&function(e){var t=e.property,n=e.src,r=e.id;window&&function(e,n){var r,o=document.getElementsByTagName("script")[0],i=window[t]||{};document.getElementById(n)||((r=document.createElement("script")).id=n,r.src=e,o.parentNode.insertBefore(r,o),i._e=[],i.ready=function(e){i._e.push(e)})}(n,r)}(v[e.oembed.provider_name]);var n="embed embed-".concat(e.oembed.provider_name.toLowerCase()),r=Object.assign({"data-oembed":e.oembed.embed_url,"data-oembed-type":e.oembed.type,"data-oembed-provider":e.oembed.provider_name,ref:function(t){v[e.oembed.provider_name]&&v[e.oembed.provider_name].load(t)}},e.label?{className:"".concat(n," ").concat(e.label)}:{className:n}),o=Object(i.jsx)("div",{dangerouslySetInnerHTML:e.oembed.html});return Object(i.jsx)("div",g(g({},j(r,t)),{},{children:o}))}t.a=function(e){var t=e.render,n=e.linkResolver,o=e.htmlSerializerProp,i=void 0===o?O:o,u=e.routerLink,c=e.paragraphLevel,l=e.posterLevel,v=e.poster,y=e.headingAs,b=e.lineHeight;Object(r.a)(e,["render","linkResolver","htmlSerializerProp","routerLink","paragraphLevel","posterLevel","poster","headingAs","lineHeight"]);return p=c>0&&c<7?c:void 0,s=v,d=b,h=y,f=l,a.a.serialize(t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return w.apply(null,[n,{}].concat(t,[u]))}),i)}},ZHcB:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}}},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}}},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),a=d(n(21)),c=d(n(7)),l=n(23),s=n(2),f=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:f.SpanNode.slice(n,t.start,n.end,e),outer:f.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:f.SpanNode.slice(n,n.start,t.end,e),outer:f.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(m(e,r,t.elected.boundaries()))].concat(g(e,o))}function y(e){return function(e,t){return t.reduce((function(t,n){var r=(0,a.default)(t);if(r){if(r.some((function(e){return e.isParentOf(n)})))return(0,u.default)(t).concat([r.concat(n)]);var o=(0,a.default)(r);return o&&e(o,n)?(0,u.default)(t).concat([r.concat(n)]):t.concat([[n]])}return[[n]]}),[])}((function(e,t){return e.end>=t.start}),(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function b(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=h(e.sort((function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=s.PRIORITIES[e.type]-s.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return{elected:t[0],others:t.slice(1)}}function m(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var u=[],a=0===i&&o.start>n.lower,c=i===t.length-1&&n.upper>o.end;if(a){var l=new f.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(l)}else{var s=t[i-1];if(s&&o.start>s.end){var d=e.slice(s.end,o.start),p=new f.TextNode(s.end,o.start,d);u=u.concat(p)}}if(u=u.concat(o),c){var h=new f.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(h)}return r.concat(u)}),[])}(e,g(e,t),n);var r=e.slice(n.lower,n.upper);return[new f.TextNode(n.lower,n.upper,r)]}function g(e,t){var n=y((0,o.default)((function(e){return e.start}),t)).map(b),i=(0,r.default)(n.map((function(t){return v(e,t)})));return(0,o.default)((function(e){return e.start}),i)}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"fromRichText",value:function(e){return{key:(0,c.default)(),children:e.reduce((function(e,t,n){if(l.RichTextBlock.isEmbedBlock(t.type)||l.RichTextBlock.isImageBlock(t.type))return e.concat(new f.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new f.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return m(e.text,t,n)}(t),o=e[e.length-1];if(l.RichTextBlock.isListItem(t.type)&&o&&o instanceof f.ListBlockNode){var i=new f.ListItemBlockNode(t,r),a=o.addChild(i);return(0,u.default)(e).concat(a)}if(l.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof f.OrderedListBlockNode){var c=new f.OrderedListItemBlockNode(t,r),s=o.addChild(c);return(0,u.default)(e).concat(s)}if(l.RichTextBlock.isListItem(t.type)){var d=new f.ListItemBlockNode(t,r),p=new f.ListBlockNode(l.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(l.RichTextBlock.isOrderedListItem(t.type)){var h=new f.OrderedListItemBlockNode(t,r),v=new f.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(),[h]);return e.concat(v)}return e.concat(new f.BlockNode(t.type,t,r))}),[])}}}],(n=null)&&p(t.prototype,n),r&&p(t,r),e}();t.default=O},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function e(t,n,r){p(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=h;var v=function(e){function t(e,n,r,o,i,u){var a;return p(this,t),(a=l(this,s(t).call(this,r,u,i))).start=e,a.end=n,a.text=o,a.children=i,a}return f(t,h),c(t,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=v;var y=function(e){function t(e,n,r){p(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return l(this,s(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return f(t,v),t}();t.TextNode=y;var b=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return p(this,t),l(this,s(t).call(this,e,n,r))}return f(t,h),t}();t.BlockNode=b;var m=function(e){function t(e,n){return p(this,t),l(this,s(t).call(this,i.NODE_TYPES.listItem,e,n))}return f(t,b),t}();t.ListItemBlockNode=m;var g=function(e){function t(e,n){return p(this,t),l(this,s(t).call(this,i.NODE_TYPES.oListItem,e,n))}return f(t,b),t}();t.OrderedListItemBlockNode=g;var O=function(e){function t(e,n){return p(this,t),l(this,s(t).call(this,i.NODE_TYPES.oList,e,n))}return f(t,b),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=O;var x=function(e){function t(e,n){return p(this,t),l(this,s(t).call(this,i.NODE_TYPES.list,e,n))}return f(t,b),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";var r=a(n(11)),o=a(n(4)),i=a(n(24)),u=n(2);function a(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)};t.default=r},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,a=[],c=0,l=n.length;c<l;){if(r(n[c]))for(u=0,i=(o=e?t(n[c]):n[c]).length;u<i;)a[a.length]=o[u],u+=1;else a[a.length]=n[c];c+=1}return a}}},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r((function(e){return!!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=u},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r},function(e,t,n){var r=n(18)(0,-1);e.exports=r},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,a){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(u)?t:i(n)?o((function(t,n){return e(t,u,n)})):i(u)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,u,t)}));default:return i(n)&&i(u)&&i(a)?t:i(n)&&i(u)?o((function(t,n){return e(t,n,a)})):i(n)&&i(a)?o((function(t,n){return e(t,u,n)})):i(u)&&i(a)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,u,a)})):i(u)?r((function(t){return e(n,t,a)})):i(a)?r((function(t){return e(n,u,t)})):e(n,u,a)}}}},function(e,t,n){var r=n(22)(-1);e.exports=r},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r}var t,n,i;return t=e,i=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.RichTextBlock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8),u=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,a=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,a,o)||t(n.type,n.element,u,a,o)}(e,n)}(e,t,r,n)}))};t.default=u}])}}]);
