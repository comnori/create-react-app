/*! For license information please see 7b4168bb.9d44c4f2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,l=60112;t.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),t.Suspense=p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}function y(){}function O(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var j=O.prototype=new y;j.constructor=O,r(j,m.prototype),j.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:g.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return a=a(l=e),e=""===r?"."+k(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),S(a,t,n,"",(function(e){return e}))):null!=a&&(N(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+k(c=e[u],u);l+=S(c,t,n,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(c=e.next()).done;)l+=S(c=c.value,t,n,s=r+k(c,u++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var o=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)v.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))i.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),o=(n(114),n(113)),a={id:"production-build",title:"Creating a Production Build"},c={unversionedId:"production-build",id:"production-build",isDocsHomePage:!1,title:"Creating a Production Build",description:"npm run build creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents. This hash in the file name enables long term caching techniques.",source:"@site/../docs/production-build.md",slug:"/production-build",permalink:"/docusaurus/docs/production-build",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/production-build.md",version:"current",lastUpdatedBy:"Jacob M-G Evans",lastUpdatedAt:1570074821,sidebar:"docs",previous:{title:"Measuring Performance",permalink:"/docusaurus/docs/measuring-performance"},next:{title:"Running Tests",permalink:"/docusaurus/docs/running-tests"}},l=[{value:"Static File Caching",id:"static-file-caching",children:[]},{value:"Profiling",id:"profiling",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," creates a ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory with a production build of your app. Inside the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," directory will be your JavaScript and CSS files. Each filename inside of ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," will contain a unique hash of the file contents. This hash in the file name enables ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#static-file-caching"}),"long term caching techniques"),"."),Object(o.b)("p",null,"When running a production build of freshly created Create React App application, there are a number of ",Object(o.b)("inlineCode",{parentName:"p"},".js")," files (called ",Object(o.b)("em",{parentName:"p"},"chunks"),") that are generated and placed in the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static/js")," directory:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"main.[hash].chunk.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is your ",Object(o.b)("em",{parentName:"li"},"application")," code. ",Object(o.b)("inlineCode",{parentName:"li"},"App.js"),", etc.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[number].[hash].chunk.js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"These files can either be ",Object(o.b)("em",{parentName:"li"},"vendor")," code, or ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurus/docs/code-splitting"}),"code splitting chunks"),". ",Object(o.b)("em",{parentName:"li"},"Vendor")," code includes modules that you've imported from within ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules"),". One of the potential advantages with splitting your ",Object(o.b)("em",{parentName:"li"},"vendor")," and ",Object(o.b)("em",{parentName:"li"},"application")," code is to enable ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#static-file-caching"}),"long term caching techniques")," to improve application loading performance. Since ",Object(o.b)("em",{parentName:"li"},"vendor")," code tends to change less often than the actual ",Object(o.b)("em",{parentName:"li"},"application")," code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runtime-main.[hash].js")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is a small chunk of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk"}),"webpack runtime")," logic which is used to load and run your application. The contents of this will be embedded in your ",Object(o.b)("inlineCode",{parentName:"li"},"build/index.html")," file by default to save an additional network request. You can opt out of this by specifying ",Object(o.b)("inlineCode",{parentName:"li"},"INLINE_RUNTIME_CHUNK=false")," as documented in our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurus/docs/advanced-configuration"}),"advanced configuration"),", which will load this chunk instead of embedding it in your ",Object(o.b)("inlineCode",{parentName:"li"},"index.html"),".")),Object(o.b)("p",null,"If you're using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurus/docs/code-splitting"}),"code splitting")," to split up your application, this will create additional chunks in the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," folder as well."),Object(o.b)("h2",{id:"static-file-caching"},"Static File Caching"),Object(o.b)("p",null,"Each file inside of the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses"}),"aggressive caching techniques")," to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different."),Object(o.b)("p",null,"To deliver the best performance to your users, it's best practice to specify a ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control")," header for ",Object(o.b)("inlineCode",{parentName:"p"},"index.html"),", as well as the files within ",Object(o.b)("inlineCode",{parentName:"p"},"build/static"),". This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control")," does, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jakearchibald.com/2016/caching-best-practices/"}),"this article")," for a great introduction."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: max-age=31536000")," for your ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," assets, and ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache")," for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file, and will cache all of the ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," files for one year. Note that you can use the one year expiration on ",Object(o.b)("inlineCode",{parentName:"p"},"build/static")," safely because the file contents hash is embedded into the filename."),Object(o.b)("h2",{id:"profiling"},"Profiling"),Object(o.b)("p",null,"ReactDOM automatically supports profiling in development mode for v16.5+, but since profiling adds some small\nadditional overhead it is opt-in for production mode. You can opt-in by using the ",Object(o.b)("inlineCode",{parentName:"p"},"--profile")," flag. Use ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build -- --profile")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn build --profile")," to enable profiling in the production build. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler"}),"React docs")," for details about profiling\nusing the React DevTools."))}s.isMDXComponent=!0}}]);