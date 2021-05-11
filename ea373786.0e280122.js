/*! For license information please see ea373786.0e280122.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(114),n(113)),u={id:"importing-a-component",title:"Importing a Component"},c={unversionedId:"importing-a-component",id:"importing-a-component",isDocsHomePage:!1,title:"Importing a Component",description:"This project setup supports ES6 modules thanks to webpack.",source:"@site/../docs/importing-a-component.md",slug:"/importing-a-component",permalink:"/create-react-app/docs/importing-a-component",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/importing-a-component.md",version:"current",lastUpdatedBy:"Max Romanyuta",lastUpdatedAt:1618194630,sidebar:"docs",previous:{title:"Installing a Dependency",permalink:"/create-react-app/docs/installing-a-dependency"},next:{title:"Using Global Variables",permalink:"/create-react-app/docs/using-global-variables"}},i=[{value:"<code>Button.js</code>",id:"buttonjs",children:[]},{value:"<code>DangerButton.js</code>",id:"dangerbuttonjs",children:[]},{value:"Absolute Imports",id:"absolute-imports",children:[]}],s={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project setup supports ES6 modules thanks to webpack."),Object(a.b)("p",null,"While you can still use ",Object(a.b)("inlineCode",{parentName:"p"},"require()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"module.exports"),", we encourage you to use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://exploringjs.com/es6/ch_modules.html"}),Object(a.b)("inlineCode",{parentName:"a"},"import")," and ",Object(a.b)("inlineCode",{parentName:"a"},"export"))," instead."),Object(a.b)("p",null,"For example:"),Object(a.b)("h2",{id:"buttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\n\nclass Button extends Component {\n  render() {\n    // ...\n  }\n}\n\nexport default Button; // Don\u2019t forget to use export default!\n")),Object(a.b)("h2",{id:"dangerbuttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"DangerButton.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport Button from './Button'; // Import a component from another file\n\nclass DangerButton extends Component {\n  render() {\n    return <Button color=\"red\" />;\n  }\n}\n\nexport default DangerButton;\n")),Object(a.b)("p",null,"Be aware of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"difference between default and named exports"),". It is a common source of mistakes."),Object(a.b)("p",null,"We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That\u2019s what you get when you use ",Object(a.b)("inlineCode",{parentName:"p"},"export default Button")," and ",Object(a.b)("inlineCode",{parentName:"p"},"import Button from './Button'"),"."),Object(a.b)("p",null,"Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like."),Object(a.b)("p",null,"Learn more about ES6 modules:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"When to use the curly braces?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://exploringjs.com/es6/ch_modules.html"}),"Exploring ES6: Modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules"}),"Understanding ES6: Modules"))),Object(a.b)("h2",{id:"absolute-imports"},"Absolute Imports"),Object(a.b)("p",null,"You can configure your application to support importing modules using absolute paths. This can be done by configuring a ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root of your project. If you're using TypeScript in your project, you will already have a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(a.b)("p",null,"Below is an example ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json")," file for a JavaScript project. You can create the file if it doesn't already exist:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "src"\n  },\n  "include": ["src"]\n}\n')),Object(a.b)("p",null,"If you're using TypeScript, you can configure the ",Object(a.b)("inlineCode",{parentName:"p"},"baseUrl")," setting inside the ",Object(a.b)("inlineCode",{parentName:"p"},"compilerOptions")," of your project's ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(a.b)("p",null,"Now that you've configured your project to support absolute imports, if you want to import a module located at ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/Button.js"),", you can import the module like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Button from 'components/Button';\n")),Object(a.b)("p",null,"For more information on these configuration files, see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/languages/jsconfig"}),"jsconfig.json reference")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"tsconfig.json reference")," documentation."))}l.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(u,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,i=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),u=p("react.provider"),c=p("react.context"),i=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||d}function j(){}function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=y.prototype;var g=h.prototype=new j;g.constructor=h,r(g,y.prototype),g.isPureReactComponent=!0;var O={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,n,r,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return u=u(i=e),e=""===r?"."+x(i,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),k(u,t,n,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(N,"$&/")+"/")+e)),t.push(u)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+x(c=e[s],s);i+=k(c,t,n,l,u)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(c=e.next()).done;)i+=k(c=c.value,t,n,l=r+x(c,s++),u);else if("object"===c)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function E(e,t,n){if(null==e)return e;var r=[],o=0;return k(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function B(){var e=P.current;if(null===e)throw Error(b(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(b(143));return e}},t.Component=y,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(b(267,e));var a=r({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=O.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)v.call(t,l)&&!w.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:u,ref:c,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="17.0.2"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=u(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(i[l]=n[l]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(i[c[p]]=n[c[p]])}}return i}}}]);