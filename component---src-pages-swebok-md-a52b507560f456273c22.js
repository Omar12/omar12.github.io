(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return p});var r=t(155),o=t.n(r),a=t(7),i=t.n(a),l=t(0),c=t.n(l),u=t(166),s=t(159),d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=s.b,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(u.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:n},c.a.createElement(u.MDXTag,{name:"h1",components:n},"Software Engineering Body of Knowledge"),c.a.createElement(u.MDXTag,{name:"p",components:n},"The ",c.a.createElement(u.MDXTag,{name:"strong",components:n,parentName:"p"},"Software Engineering Body of Knowledge (SWEBOK)")," is an international standard ISO/IEC TR 19759:2005","[1]"," specifying a guide to the generally accepted Software Engineering Body of Knowledge."),c.a.createElement(u.MDXTag,{name:"p",components:n},"Visit the wiki page to read more about the 15 knowledge areas."),c.a.createElement(u.MDXTag,{name:"p",components:n},c.a.createElement(u.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Software_Engineering_Body_of_Knowledge"}},"https://en.wikipedia.org/wiki/Software_Engineering_Body_of_Knowledge")))},n}(c.a.Component),p={}},151:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var r={WHITE:"#ffffff",BLACK:"#4d4d4d",THEME_COLOR:"#351919",BLUE:"#1a58cc"},o=[{to:"/",label:"Index"},{to:"/page-2",label:"Page 2"},{to:"/mdx-example",label:"Markdown Example"},{href:"/docs/",label:"Storybook"}]},152:function(e,n,t){var r;e.exports=(r=t(156))&&r.default||r},153:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return m});var r=t(0),o=t.n(r),a=t(4),i=t.n(a),l=t(150),c=t.n(l);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var u=t(152),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var p=o.a.createContext({}),m=function(e){return o.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,n,t){"use strict";t.r(n);var r=t(11),o=t.n(r),a=t(0),i=t.n(a),l=t(4),c=t.n(l),u=t(53),s=t(2),d=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(u.a,o()({location:n,pageResources:t},t.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"My Personal Wiki"}}}}},159:function(e,n,t){"use strict";var r=t(158),o=t(0),a=t.n(o),i=t(4),l=t.n(i),c=t(160),u=t.n(c),s=t(153),d=t(154),p=t(157),m=t(151),f=d.b.div.withConfig({displayName:"styled__HeaderWrapper",componentId:"sc-129cjzz-0"})(["background-color:",";border-bottom:0.2rem solid ",";"],m.a.THEME_COLOR,Object(p.a)(.2,m.a.THEME_COLOR)),b=d.b.div.withConfig({displayName:"styled__HeaderContainer",componentId:"sc-129cjzz-1"})(["margin:0 auto;max-width:960px;padding:.75rem;padding-bottom:.5rem;"]),g=d.b.div.withConfig({displayName:"styled__HeaderInner",componentId:"sc-129cjzz-2"})(["display:flex;flex-flow:nowrap row;"]),y=d.b.h1.withConfig({displayName:"styled__SiteTitle",componentId:"sc-129cjzz-3"})(["margin:0;color:",";font-size:1.4rem;"],m.a.WHITE),h=d.b.div.withConfig({displayName:"styled__Navigation",componentId:"sc-129cjzz-4"})(["margin-left:auto;display:flex;flex-flow:nowrap row;align-items:flex-end;& > *{margin-left:1rem;color:",";cursor:pointer;&:focus,&:hover{color:",";}}& > *:first-child{margin-left:0;}"],m.a.WHITE,Object(p.a)(.2,m.a.WHITE)),v=function(e){var n=e.title,t=e.navigation;return a.a.createElement(f,null,a.a.createElement(b,null,a.a.createElement(g,null,a.a.createElement(y,{to:"/"},n),t&&a.a.createElement(h,null,t))))};v.propTypes={title:l.a.string,navigation:l.a.arrayOf(l.a.node)},v.defaultProps={title:null,navigation:null};var w=t(155),E=t.n(w),x=d.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-99vn9v-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(e){return e.isDebug&&"background-color: orange;"}),k=function(e){var n=e.children,t=E()(e,["children"]);return a.a.createElement(x,t,n)};k.defaultProps={isDebug:!1},k.propTypes={isDebug:l.a.bool};var _=t(162),z=t.n(_);function O(){var e=z()(["\n  ","\n\n  * {\n    margin    : 0;\n    padding   : 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size  : 14px;\n    line-height: 1.5;\n    color      : ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    font-size    : 1.2rem;\n    line-height  : 1.4;\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color           : ",";\n    text-decoration : none;\n\n    &:focus,\n    &:hover {\n      color          : ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left : 2rem;\n\n    ul, ol {\n      margin-top   : 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin    : 1rem 0;\n    height    : 0.2rem;\n    background: ",";\n    border    : none;\n  }\n\n  blockquote {\n    margin     : 0 0 1rem 1rem;\n    padding    : 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding         : 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin          : 0;\n    margin-bottom   : 1rem;\n    padding         : 1rem;\n    background-color: ",";\n    font-size       : 0.8rem;\n\n    code {\n      padding         : 0;\n      background-color: transparent;\n    }\n  }\n"]);return O=function(){return e},e}var j="\n  margin       : 0;\n  margin-bottom: 1rem;\n  font-weight  : 500;\n",C=Object(d.a)(O(),"\n  *{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]:               : -moz-focus-inner, [type=reset]  :              : -moz-focus-inner, [type=submit]:: -moz-focus-inner, button:: -moz-focus-inner{border-style:none;padding:0}\n  [type=button]: -moz-focusring, [type=reset]    : -moz-focusring, [type=submit]: -moz-focusring,   button        : -moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]:: -webkit-inner-spin-button, [type=number]:: -webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]: : -webkit-search-decoration{-webkit-appearance:none}\n               : : -webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",m.a.BLACK,m.a.WHITE,j,j,j,j,j,j,m.a.BLUE,Object(p.a)(.2,m.a.BLUE),Object(p.b)(m.a.BLACK,.15),Object(p.b)(m.a.BLACK,.15),Object(p.b)(m.a.BLACK,.075),Object(p.b)(m.a.BLACK,.075)),T=function(e){var n=e.children,t=m.b.map(function(e){var n=e.to,t=e.href,r=e.label;return t?a.a.createElement("a",{key:r,href:t},r):a.a.createElement(s.Link,{key:r,to:n},r)});return a.a.createElement(s.StaticQuery,{query:"2994927498",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(v,{title:e.site.siteMetadata.title,navigation:t}),a.a.createElement(k,null,n))},data:r})};T.propTypes={children:l.a.node.isRequired},t.d(n,"a",function(){return T});n.b=T},163:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=t(0),i=(r=a)&&r.__esModule?r:{default:r};var l=i.default.createContext({}),c=l.Provider,u=l.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["components"]);return i.default.createElement(u,null,function(n){return i.default.createElement(e,o({components:t||n},r))})}};n.default=function(e){var n=e.components,t=e.children;return i.default.createElement(c,{value:n},t)}},166:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(167);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=t(163);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},167:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(0),l=(r=i)&&r.__esModule?r:{default:r},c=t(163);var u={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.Component),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,a=void 0===r?{}:r,i=e.children,c=e.components,s=void 0===c?{}:c,d=e.Layout,p=e.layoutProps,m=s[t+"."+n]||s[n]||u[n]||n;return d?l.default.createElement(d,o({components:s},p),l.default.createElement(m,a,i)):l.default.createElement(m,a,i)}}]),n}();n.default=(0,c.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-swebok-md-a52b507560f456273c22.js.map