"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[9638],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var o=n(7896),r=n(1461),i=(n(2784),n(876)),a=["components"],l={id:"setting-up-your-editor",title:"Setting Up Your Editor",sidebar_label:"Editor Setup"},s=void 0,p={unversionedId:"setting-up-your-editor",id:"setting-up-your-editor",title:"Setting Up Your Editor",description:"Create React App comes with a bunch of tools that improve the editing experience - if configured correctly. Here's a few tips to maximize your productivity:",source:"@site/../docs/setting-up-your-editor.md",sourceDirName:".",slug:"/setting-up-your-editor",permalink:"/create-react-app/docs/setting-up-your-editor",editUrl:"https://github.com/comnori/create-react-app/edit/master/docusaurus/website/../docs/setting-up-your-editor.md",tags:[],version:"current",lastUpdatedBy:"Brody McKee",lastUpdatedAt:1599990742,formattedLastUpdatedAt:"9/13/2020",frontMatter:{id:"setting-up-your-editor",title:"Setting Up Your Editor",sidebar_label:"Editor Setup"},sidebar:"docs",previous:{title:"Updating to New Releases",permalink:"/create-react-app/docs/updating-to-new-releases"},next:{title:"Developing Components in Isolation",permalink:"/create-react-app/docs/developing-components-in-isolation"}},u=[{value:"Syntax highlighting",id:"syntax-highlighting",children:[],level:2},{value:"Displaying Lint Output in the Editor",id:"displaying-lint-output-in-the-editor",children:[{value:"Extending or replacing the default ESLint config",id:"extending-or-replacing-the-default-eslint-config",children:[],level:3}],level:2},{value:"Debugging in the Editor",id:"debugging-in-the-editor",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:3},{value:"WebStorm",id:"webstorm",children:[],level:3}],level:2},{value:"Formatting Code Automatically",id:"formatting-code-automatically",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create React App comes with a bunch of tools that improve the editing experience - if configured correctly. Here's a few tips to maximize your productivity:"),(0,i.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,i.kt)("p",null,"To configure the syntax highlighting in your favorite text editor, head to the ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/editors"},"relevant Babel documentation page")," and follow the instructions. Some of the most popular editors are covered."),(0,i.kt)("h2",{id:"displaying-lint-output-in-the-editor"},"Displaying Lint Output in the Editor"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts@0.2.0")," and higher.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It works out of the box for newly created projects with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.3")," and higher.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It also only works with npm 3 or higher.")),(0,i.kt)("p",null,"Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint."),(0,i.kt)("p",null,"They are not required for linting. You should see the linter output right in your terminal as well as the browser console. If you prefer the lint results to appear right in your editor, please make sure you install an ESLint plugin/extension."),(0,i.kt)("p",null,"Note that even if you customise your ESLint config, these changes will ",(0,i.kt)("strong",{parentName:"p"},"only affect the editor integration"),". They won\u2019t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes."),(0,i.kt)("p",null,"If you want to enforce a coding style for your project, consider using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jlongster/prettier"},"Prettier")," instead of ESLint style rules."),(0,i.kt)("h3",{id:"extending-or-replacing-the-default-eslint-config"},"Extending or replacing the default ESLint config"),(0,i.kt)("p",null,"You can extend our base ESLint config, or replace it completely if you need."),(0,i.kt)("p",null,"There are a few things to remember:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We highly recommend extending the base config, as removing it could introduce hard-to-find issues."),(0,i.kt)("li",{parentName:"ol"},"When working with TypeScript, you'll need to provide an ",(0,i.kt)("inlineCode",{parentName:"li"},"overrides")," object for rules that should ",(0,i.kt)("em",{parentName:"li"},"only")," target TypeScript files."),(0,i.kt)("li",{parentName:"ol"},"It's important to note that any rules that are set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"error"')," will stop the project from building.")),(0,i.kt)("p",null,"In the below example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the base config has been extended by a shared ESLint config,"),(0,i.kt)("li",{parentName:"ul"},"a new rule has been set that applies to all JavaScript and TypeScript files, and"),(0,i.kt)("li",{parentName:"ul"},"a new rule has been set that only targets TypeScript files.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": ["react-app", "shared-config"],\n    "rules": {\n      "additional-rule": "warn"\n    },\n    "overrides": [\n      {\n        "files": ["**/*.ts?(x)"],\n        "rules": {\n          "additional-typescript-only-rule": "warn"\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"debugging-in-the-editor"},"Debugging in the Editor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This feature is currently only supported by ",(0,i.kt)("a",{parentName:"strong",href:"https://code.visualstudio.com"},"Visual Studio Code")," and ",(0,i.kt)("a",{parentName:"strong",href:"https://www.jetbrains.com/webstorm/"},"WebStorm"),".")),(0,i.kt)("p",null,"Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don\u2019t have to switch between tools."),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"You need to have the latest version of ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VS Code")," and VS Code ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"},"Chrome Debugger Extension")," installed."),(0,i.kt)("p",null,"Then add the block below to your ",(0,i.kt)("inlineCode",{parentName:"p"},"launch.json")," file and put it inside the ",(0,i.kt)("inlineCode",{parentName:"p"},".vscode")," folder in your app\u2019s root directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Chrome",\n      "type": "chrome",\n      "request": "launch",\n      "url": "http://localhost:3000",\n      "webRoot": "${workspaceFolder}/src",\n      "sourceMapPathOverrides": {\n        "webpack:///src/*": "${webRoot}/*"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: the URL may be different if you've made adjustments via the ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/advanced-configuration"},"HOST or PORT environment variables"),".")),(0,i.kt)("p",null,"Start your app by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", and start debugging in VS Code by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"F5")," or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code\u2014all from your editor."),(0,i.kt)("p",null,"Having problems with VS Code Debugging? Please see their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting"},"troubleshooting guide"),"."),(0,i.kt)("h3",{id:"webstorm"},"WebStorm"),(0,i.kt)("p",null,"You need to have ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm")," and ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji"},"JetBrains IDE Support")," Chrome extension installed."),(0,i.kt)("p",null,"In the WebStorm menu ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," select ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit Configurations..."),". Then click ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and select ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript Debug"),". Paste ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," into the URL field and save the configuration."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: the URL may be different if you've made adjustments via the ",(0,i.kt)("a",{parentName:"p",href:"/create-react-app/docs/advanced-configuration"},"HOST or PORT environment variables"),".")),(0,i.kt)("p",null,"Start your app by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", then press ",(0,i.kt)("inlineCode",{parentName:"p"},"^D")," on macOS or ",(0,i.kt)("inlineCode",{parentName:"p"},"F9")," on Windows and Linux or click the green debug icon to start debugging in WebStorm."),(0,i.kt)("p",null,"The same way you can debug your application in IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, and RubyMine."),(0,i.kt)("h2",{id:"formatting-code-automatically"},"Formatting Code Automatically"),(0,i.kt)("p",null,"Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the code you write automatically to ensure a code style within your project. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prettier/prettier"},"Prettier's GitHub page")," for more information, and look at this ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/playground/"},"page to see it in action"),"."),(0,i.kt)("p",null,"To format our code whenever we make a commit in git, we need to install the following dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save husky lint-staged prettier\n")),(0,i.kt)("p",null,"Alternatively you may use ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add husky lint-staged prettier\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"husky")," makes it possible to use githooks as if they are npm scripts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lint-staged")," allows us to run scripts on staged files in git. See this ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8"},"blog post about lint-staged to learn more about it"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prettier")," is the JavaScript formatter we will run before commits.")),(0,i.kt)("p",null,"Now we can make sure every file is formatted correctly by adding a few lines to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the project root."),(0,i.kt)("p",null,"Add the following field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+  "husky": {\n+    "hooks": {\n+      "pre-commit": "lint-staged"\n+    }\n+  }\n')),(0,i.kt)("p",null,"Next we add a 'lint-staged' field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'  "dependencies": {\n    // ...\n  },\n+ "lint-staged": {\n+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [\n+     "prettier --write"\n+   ]\n+ },\n  "scripts": {\n')),(0,i.kt)("p",null,"Now, whenever you make a commit, Prettier will format the changed files automatically. You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},'./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"')," to format your entire project for the first time."),(0,i.kt)("p",null,"Next you might want to integrate Prettier in your favorite editor. Read the section on ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/editors.html"},"Editor Integration")," on the Prettier GitHub page."))}c.isMDXComponent=!0}}]);