"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[540],{876:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2599:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=r(7896),n=r(1461),p=(r(2784),r(876)),i=["components"],o={id:"adding-typescript",title:"Adding TypeScript"},c=void 0,l={unversionedId:"adding-typescript",id:"adding-typescript",title:"Adding TypeScript",description:"Note: this feature is available with react-scripts@2.1.0 and higher.",source:"@site/../docs/adding-typescript.md",sourceDirName:".",slug:"/adding-typescript",permalink:"/create-react-app/docs/adding-typescript",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/adding-typescript.md",tags:[],version:"current",lastUpdatedBy:"Luke Karrys",lastUpdatedAt:1649882318,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"adding-typescript",title:"Adding TypeScript"},sidebar:"docs",previous:{title:"Adding Flow",permalink:"/create-react-app/docs/adding-flow"},next:{title:"Adding Relay",permalink:"/create-react-app/docs/adding-relay"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Getting Started with TypeScript and React",id:"getting-started-with-typescript-and-react",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,p.kt)("inlineCode",{parentName:"p"},"react-scripts@2.1.0")," and higher.")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is a typed superset of JavaScript that compiles to plain JavaScript."),(0,p.kt)("h2",{id:"installation"},"Installation"),(0,p.kt)("p",null,"To start a new Create React App project with ",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template typescript\n")),(0,p.kt)("p",null,"or"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app my-app --template typescript\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"If you've previously installed ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",(0,p.kt)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",(0,p.kt)("inlineCode",{parentName:"p"},"npx")," always uses the latest version."),(0,p.kt)("p",{parentName:"blockquote"},"Global installs of ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," are no longer supported.")),(0,p.kt)("p",null,"To add ",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," to an existing Create React App project, first install it:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n")),(0,p.kt)("p",null,"or"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),(0,p.kt)("p",null,"Next, rename any file to be a TypeScript file (e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"src/index.js")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"src/index.tsx"),") and ",(0,p.kt)("strong",{parentName:"p"},"restart your development server"),"!"),(0,p.kt)("p",null,"Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project. For advanced configuration, ",(0,p.kt)("a",{parentName:"p",href:"/create-react-app/docs/advanced-configuration"},"see here"),"."),(0,p.kt)("h2",{id:"getting-started-with-typescript-and-react"},"Getting Started with TypeScript and React"),(0,p.kt)("p",null,"You are not required to make a ",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},(0,p.kt)("inlineCode",{parentName:"a"},"tsconfig.json")," file"),", one will be made for you. You are allowed to edit the generated TypeScript configuration."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript Handbook")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react"},"TypeScript Example on React")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"},"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),(0,p.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,p.kt)("p",null,"If your project is not created with TypeScript enabled, npx may be using a cached version of ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app"),". Remove previously installed versions with ",(0,p.kt)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," (see ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035"},"#6119"),")."),(0,p.kt)("p",null,"If you are currently using ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/wmonk/create-react-app-typescript/"},"create-react-app-typescript"),", see ",(0,p.kt)("a",{parentName:"p",href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"},"this blog post")," for instructions on how to migrate to Create React App."),(0,p.kt)("p",null,"Constant enums and namespaces are not supported, you can learn about the constraints of ",(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"},"using Babel with TypeScript here"),"."))}d.isMDXComponent=!0}}]);