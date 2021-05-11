/*! For license information please see 5f589533.629ff43e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,s=60112;t.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),c=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),p=l("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}function y(){}function O(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var j=O.prototype=new y;j.constructor=O,n(j,m.prototype),j.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+C(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),P(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+C(c=e[u],u);s+=P(c,t,r,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),u=0;!(c=e.next()).done;)s+=P(c=c.value,t,r,p=n+C(c,u++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function E(){var e=q.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:_,forEach:function(e,t,r){_(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)v.call(t,p)&&!w.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){u=Array(p);for(var l=0;l<p;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return E().useCallback(e,t)},t.useContext=function(e,t){return E().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return E().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return E().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return E().useLayoutEffect(e,t)},t.useMemo=function(e,t){return E().useMemo(e,t)},t.useReducer=function(e,t,r){return E().useReducer(e,t,r)},t.useRef=function(e){return E().useRef(e)},t.useState=function(e){return E().useState(e)},t.version="17.0.2"},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,s=i(e),u=1;u<arguments.length;u++){for(var p in r=Object(arguments[u]))o.call(r,p)&&(s[p]=r[p]);if(n){c=n(r);for(var l=0;l<c.length;l++)a.call(r,c[l])&&(s[c[l]]=r[c[l]])}}return s}},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(114),r(113)),i={id:"proxying-api-requests-in-development",title:"Proxying API Requests in Development",sidebar_label:"Proxying in Development"},c={unversionedId:"proxying-api-requests-in-development",id:"proxying-api-requests-in-development",isDocsHomePage:!1,title:"Proxying API Requests in Development",description:"Note: this feature is available with react-scripts@0.2.3 and higher.",source:"@site/../docs/proxying-api-requests-in-development.md",slug:"/proxying-api-requests-in-development",permalink:"/create-react-app/docusaurus/docs/proxying-api-requests-in-development",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/proxying-api-requests-in-development.md",version:"current",lastUpdatedBy:"Herman J. Radtke III",lastUpdatedAt:1583285031,sidebar_label:"Proxying in Development",sidebar:"docs",previous:{title:"Debugging Tests",permalink:"/create-react-app/docusaurus/docs/debugging-tests"},next:{title:"Fetching Data with AJAX Requests",permalink:"/create-react-app/docusaurus/docs/fetching-data-with-ajax-requests"}},s=[{value:"&quot;Invalid Host Header&quot; Errors After Configuring Proxy",id:"invalid-host-header-errors-after-configuring-proxy",children:[]},{value:"Configuring the Proxy Manually",id:"configuring-the-proxy-manually",children:[]}],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(a.b)("p",null,"People often serve the front-end React app from the same host and port as their backend implementation."),Object(a.b)("p",null,"For example, a production setup might look like this after the app is deployed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"/             - static server returns index.html with React app\n/todos        - static server returns index.html with React app\n/api/todos    - server handles any /api/* requests using the backend implementation\n")),Object(a.b)("p",null,"Such setup is ",Object(a.b)("strong",{parentName:"p"},"not")," required. However, if you ",Object(a.b)("strong",{parentName:"p"},"do")," have a setup like this, it is convenient to write requests like ",Object(a.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," without worrying about redirecting them to another host or port during development."),Object(a.b)("p",null,"To tell the development server to proxy any unknown requests to your API server in development, add a ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," field to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'  "proxy": "http://localhost:4000",\n')),Object(a.b)("p",null,"This way, when you ",Object(a.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," in development, the development server will recognize that it\u2019s not a static asset, and will proxy your request to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:4000/api/todos")," as a fallback. The development server will ",Object(a.b)("strong",{parentName:"p"},"only")," attempt to send requests without ",Object(a.b)("inlineCode",{parentName:"p"},"text/html")," in its ",Object(a.b)("inlineCode",{parentName:"p"},"Accept")," header to the proxy."),Object(a.b)("p",null,"Conveniently, this avoids ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations"}),"CORS issues")," and error messages like this in development:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.\n")),Object(a.b)("p",null,"Keep in mind that ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," only has effect in development (with ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),"), and it is up to you to ensure that URLs like ",Object(a.b)("inlineCode",{parentName:"p"},"/api/todos")," point to the right thing in production. You don\u2019t have to use the ",Object(a.b)("inlineCode",{parentName:"p"},"/api")," prefix. Any unrecognized request without a ",Object(a.b)("inlineCode",{parentName:"p"},"text/html")," accept header will be redirected to the specified ",Object(a.b)("inlineCode",{parentName:"p"},"proxy"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option supports HTTP, HTTPS and WebSocket connections."),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(a.b)("strong",{parentName:"p"},"not")," flexible enough for you, alternatively you can:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#configuring-the-proxy-manually"}),"Configure the proxy yourself")),Object(a.b)("li",{parentName:"ul"},"Enable CORS on your server (",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://enable-cors.org/server_expressjs.html"}),"here\u2019s how to do it for Express"),")."),Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/create-react-app/docusaurus/docs/adding-custom-environment-variables"}),"environment variables")," to inject the right server host and port into your app.")),Object(a.b)("h2",{id:"invalid-host-header-errors-after-configuring-proxy"},'"Invalid Host Header" Errors After Configuring Proxy'),Object(a.b)("p",null,"When you enable the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a"}),"this article")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server/issues/887"}),"this issue"),"."),Object(a.b)("p",null,"This shouldn\u2019t affect you when developing on ",Object(a.b)("inlineCode",{parentName:"p"},"localhost"),", but if you develop remotely like ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2271"}),"described here"),", you will see this error in the browser after enabling the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Invalid Host header")),Object(a.b)("p",null,"To work around it, you can specify your public development host in a file called ",Object(a.b)("inlineCode",{parentName:"p"},".env.development")," in the root of your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"HOST=mypublicdevhost.com\n")),Object(a.b)("p",null,"If you restart the development server now and load the app from the specified host, it should work."),Object(a.b)("p",null,"If you are still having issues or if you\u2019re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to ",Object(a.b)("inlineCode",{parentName:"p"},".env.development.local"),". ",Object(a.b)("strong",{parentName:"p"},"Note that this is dangerous and exposes your machine to remote code execution from malicious websites:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"# NOTE: THIS IS DANGEROUS!\n# It exposes your machine to attacks from the websites you visit.\nDANGEROUSLY_DISABLE_HOST_CHECK=true\n")),Object(a.b)("p",null,"We don\u2019t recommend this approach."),Object(a.b)("h2",{id:"configuring-the-proxy-manually"},"Configuring the Proxy Manually"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(a.b)("strong",{parentName:"p"},"not")," flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware."),Object(a.b)("p",null,"You can use this feature in conjunction with the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," property in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", but it is recommended you consolidate all of your logic into ",Object(a.b)("inlineCode",{parentName:"p"},"src/setupProxy.js"),"."),Object(a.b)("p",null,"First, install ",Object(a.b)("inlineCode",{parentName:"p"},"http-proxy-middleware")," using npm or Yarn:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install http-proxy-middleware --save\n$ # or\n$ yarn add http-proxy-middleware\n")),Object(a.b)("p",null,"Next, create ",Object(a.b)("inlineCode",{parentName:"p"},"src/setupProxy.js")," and place the following contents in it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  // ...\n};\n")),Object(a.b)("p",null,"You can now register proxies as you wish! Here's an example using the above ",Object(a.b)("inlineCode",{parentName:"p"},"http-proxy-middleware"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  app.use(\n    '/api',\n    createProxyMiddleware({\n      target: 'http://localhost:5000',\n      changeOrigin: true,\n    })\n  );\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," You do not need to import this file anywhere. It is automatically registered when you start the development server.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," This file only supports Node's JavaScript syntax. Be sure to only use supported language features (i.e. no support for Flow, ES Modules, etc).")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Passing the path to the proxy function allows you to use globbing and/or pattern matching on the path, which is more flexible than the express route matching.")))}p.isMDXComponent=!0}}]);