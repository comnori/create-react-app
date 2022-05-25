"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[1177],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7896),o=n(1461),a=(n(2784),n(876)),i=["components"],l={id:"adding-flow",title:"Adding Flow"},p=void 0,c={unversionedId:"adding-flow",id:"adding-flow",title:"Adding Flow",description:"Flow is a static type checker that helps you write code with fewer bugs. Check out this introduction to using static types in JavaScript if you are new to this concept.",source:"@site/../docs/adding-flow.md",sourceDirName:".",slug:"/adding-flow",permalink:"/create-react-app/docs/adding-flow",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/adding-flow.md",tags:[],version:"current",lastUpdatedBy:"Federico Zivolo",lastUpdatedAt:1569429502,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"adding-flow",title:"Adding Flow"},sidebar:"docs",previous:{title:"Adding Bootstrap",permalink:"/create-react-app/docs/adding-bootstrap"},next:{title:"Adding TypeScript",permalink:"/create-react-app/docs/adding-typescript"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Flow is a static type checker that helps you write code with fewer bugs. Check out this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb"},"introduction to using static types in JavaScript")," if you are new to this concept."),(0,a.kt)("p",null,"Recent versions of ",(0,a.kt)("a",{parentName:"p",href:"https://flow.org/"},"Flow")," work with Create React App projects out of the box."),(0,a.kt)("p",null,"To add Flow to a Create React App project, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install --save flow-bin")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add flow-bin"),")."),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},'"flow": "flow"')," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts")," section of your ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run flow init")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn flow init"),") to create a ",(0,a.kt)("a",{parentName:"li",href:"https://flow.org/en/docs/config/"},(0,a.kt)("inlineCode",{parentName:"a"},".flowconfig")," file")," in the root directory."),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"// @flow")," to any files you want to type check (for example, to ",(0,a.kt)("inlineCode",{parentName:"li"},"src/App.js"),").")),(0,a.kt)("p",null,"Now you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run flow")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn flow"),") to check the files for type errors.",(0,a.kt)("br",{parentName:"p"}),"\n","You can optionally enable an extension for your IDE, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flowtype/flow-for-vscode"},"Flow Language Support")," for Visual Studio Code, or leverage the Language Server Protocol standard (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow"},"vim LSP"),") to get hints while you type."),(0,a.kt)("p",null,"If you'd like to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/importing-a-component#absolute-imports"},"absolute imports")," with Flow,\nmake sure to add the following line to your ",(0,a.kt)("inlineCode",{parentName:"p"},".flowconfig")," to make Flow aware of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  [options]\n+ module.name_mapper='^\\([^\\.].*\\)$' -> '<PROJECT_ROOT>/src/\\1'\n")),(0,a.kt)("p",null,"To learn more about Flow, check out ",(0,a.kt)("a",{parentName:"p",href:"https://flow.org/"},"its documentation"),"."))}d.isMDXComponent=!0}}]);