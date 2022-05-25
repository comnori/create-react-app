"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[7429],{876:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8827:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7896),r=n(1461),i=(n(2784),n(876)),o=["components"],l={id:"using-the-public-folder",title:"Using the Public Folder"},s=void 0,p={unversionedId:"using-the-public-folder",id:"using-the-public-folder",title:"Using the Public Folder",description:"Note: this feature is available with react-scripts@0.5.0 and higher.",source:"@site/../docs/using-the-public-folder.md",sourceDirName:".",slug:"/using-the-public-folder",permalink:"/create-react-app/docs/using-the-public-folder",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/using-the-public-folder.md",tags:[],version:"current",lastUpdatedBy:"e-w-h",lastUpdatedAt:1620837025,formattedLastUpdatedAt:"5/13/2021",frontMatter:{id:"using-the-public-folder",title:"Using the Public Folder"},sidebar:"docs",previous:{title:"Loading .graphql Files",permalink:"/create-react-app/docs/loading-graphql-files"},next:{title:"Code Splitting",permalink:"/create-react-app/docs/code-splitting"}},c=[{value:"Changing the HTML",id:"changing-the-html",children:[],level:2},{value:"Adding Assets Outside of the Module System",id:"adding-assets-outside-of-the-module-system",children:[],level:2},{value:"When to Use the <code>public</code> Folder",id:"when-to-use-the-public-folder",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),(0,i.kt)("h2",{id:"changing-the-html"},"Changing the HTML"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder contains the HTML file so you can tweak it, for example, to ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/title-and-meta-tags"},"set the page title"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag with the compiled code will be added to it automatically during the build process."),(0,i.kt)("h2",{id:"adding-assets-outside-of-the-module-system"},"Adding Assets Outside of the Module System"),(0,i.kt)("p",null,"You can also add other assets to the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder."),(0,i.kt)("p",null,"Note that we normally encourage you to ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," assets in JavaScript files instead.\nFor example, see the sections on ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/adding-a-stylesheet"},"adding a stylesheet")," and ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/adding-images-fonts-and-files"},"adding images and fonts"),".\nThis mechanism provides a number of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scripts and stylesheets get minified and bundled together to avoid extra network requests."),(0,i.kt)("li",{parentName:"ul"},"Missing files cause compilation errors instead of 404 errors for your users."),(0,i.kt)("li",{parentName:"ul"},"Result filenames include content hashes so you don\u2019t need to worry about browsers caching their old versions.")),(0,i.kt)("p",null,"However there is an ",(0,i.kt)("strong",{parentName:"p"},"escape hatch")," that you can use to add an asset outside of the module system."),(0,i.kt)("p",null,"If you put a file into the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder, it will ",(0,i.kt)("strong",{parentName:"p"},"not")," be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder, you need to use an environment variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),", you can use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n')),(0,i.kt)("p",null,"Only files inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder will be accessible by ",(0,i.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," prefix. If you need to use a file from ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", you\u2019ll have to copy it there to explicitly specify your intention to make this file a part of the build."),(0,i.kt)("p",null,"When you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"),", Create React App will substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL."),(0,i.kt)("p",null,"In JavaScript code, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL")," for similar purposes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  // Note: this is an escape hatch and should be used sparingly!\n  // Normally we recommend using `import` for getting asset URLs\n  // as described in \u201cAdding Images and Fonts\u201d above this section.\n  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;\n}\n")),(0,i.kt)("p",null,"Keep in mind the downsides of this approach:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None of the files in ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," folder get post-processed or minified."),(0,i.kt)("li",{parentName:"ul"},"Missing files will not be called at compilation time, and will cause 404 errors for your users."),(0,i.kt)("li",{parentName:"ul"},"Result filenames won\u2019t include content hashes so you\u2019ll need to add query arguments or rename them every time they change.")),(0,i.kt)("h2",{id:"when-to-use-the-public-folder"},"When to Use the ",(0,i.kt)("inlineCode",{parentName:"h2"},"public")," Folder"),(0,i.kt)("p",null,"Normally we recommend importing ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/adding-a-stylesheet"},"stylesheets"),", ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/adding-images-fonts-and-files"},"images, and fonts")," from JavaScript.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder is useful as a workaround for a number of less common cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need a file with a specific name in the build output, such as ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},(0,i.kt)("inlineCode",{parentName:"a"},"manifest.webmanifest")),"."),(0,i.kt)("li",{parentName:"ul"},"You have thousands of images and need to dynamically reference their paths."),(0,i.kt)("li",{parentName:"ul"},"You want to include a small script like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CodeByZach/pace"},(0,i.kt)("inlineCode",{parentName:"a"},"pace.js"))," outside of the bundled code."),(0,i.kt)("li",{parentName:"ul"},"Some libraries may be incompatible with webpack and you have no other option but to include it as a ",(0,i.kt)("inlineCode",{parentName:"li"},"<script>")," tag.")),(0,i.kt)("p",null,"Note that if you add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," that declares global variables, you should read the topic ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/using-global-variables"},"Using Global Variables")," in the next section which explains how to reference them."))}u.isMDXComponent=!0}}]);