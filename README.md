# Custom React App 만들기

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React App를 Fork 후 사용자화 후 사용하기 위해 작성되었습니다.

빌드를 위한 구성 없이 Custom React App 을 만듭니다.

- [App 만들기](#creating-an-app) – 새 앱을 만드는 방법.
- [사용자 가이드](https://comnori.github.io/create-react-app/) – Custom Creat React App 부트스트랩으로 개발하는 방법

Create React App은 macOS, Windows 및 Linux에서 작동합니다.<br>
작동에 문제가 있다면 [이슈를 등록해 주세요](https://github.com/comnori/create-react-app/issues).<br>
질문이 있거나 도움이 필요하면 [GitHub Discussions](https://github.com/comnori/create-react-app/discussions) 에 질문하세요.

## 빠른 개요

`my-app` 이름의 폴더를 가진 `create-react-app` 생성

```sh
npx create-react-app my-app --scripts-version comnori-react-scripts
cd my-app
npm start
```

이전에 `npm install -g create-react-app` 명령을 통해서 `create-react-app`을 전역으로 설치한 경우 `npx`가 항상 최신 버전의 `create-react-app` 사용할 수 있도록 `npm uninstall -g create-react-app` 또는 `yarn global remove create-react-app` 명령을 실행하여 제거하는 것을 추천합니다.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 는 `npm` 5.2이상의 버전에서 제공됩니다. [이전 npm 버전에 대한 지침 참조](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

브라우저에서 [http://localhost:3000/](http://localhost:3000/) 접속하여 앱을 확인합니다.<br>
프로덕션 환경에 배포할 준비가 되면 `npm run build`를 수행합니다..

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

### 바로 시작하기

웹팩 또는 바벨과 같은 툴에 대하여 사전에 설정 및 설치되어 있기 때문에 별도의 설정 및 설치 없이 프로젝트를 생성하고 진행하시기만 하면 됩니다.

코드에만 집중하세요.

## App 만들기

**개발 환경에 Node 10.16.0 이상의 버전이 필요합니다.** (서버에는 필요하지 않습니다.)

최신의 LTS 버전을 사용하는 것을 추천합니다.

[nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) 또는 [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)를 사용하면 프로젝트마다 Node 버전을 전환하여 사용할 수 있습니다.

아래에 표시된 방법 중 선택하여 App을 생성할 수 있습니다.

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) 는 `npm` 5.2이상의 버전에서 제공됩니다. [이전 npm 버전에 대한 지침 참조](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` npm 6 버전 이상에서 사용 가능_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) Yarn 0.25 버전 이상에서 사용 가능_

현재 폴더에 `my-app` 폴더가 생성되고 해당 폴더내에 초기 프로젝트 구조 및 종속성이 설치 됩니다.

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

구성이나 복잡한 폴더 구조가 없으며 앱을 빌드하는 데 필요한 파일 만 있습니다.

설치가 완료되면 프로젝트 폴더를 열 수 있습니다.

```sh
cd my-app
```

새로 생성 된 프로젝트 내에서 몇 가지 기본 제공 명령을 실행할 수 있습니다.

### `npm start` or `yarn start`

개발 모드에서 App 실행을 보기 위해서는 [http://localhost:3000](http://localhost:3000)을 브라우저에서 엽니다.

코드를 변경하면 페이지가 자동으로 다시 로드되고 콘솔에 빌드 오류 및 Lint 경고가 표시됩니다.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

대화형 모드에서 테스트 감시자를 실행하면 기본적으로 마지막 커밋 이후 변경된 파일과 관련된 테스트를 실행합니다.

[테스트에 대해서 자세히 알아보기.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

`build` 폴더에 프로덕션을 위한 App 이 빌드됩니다.

프로덕션 모드에서는 React를 올바르게 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

작성된 빌드는 축소되어 있고 파일 이름은 해시로 표시됩니다..

앱을 배포 할 준비가되었습니다.

## 사용자 안내서

Create React App 사용에 대한 자세한 지침과 [설명서](https://facebook.github.io/create-react-app/)에서 많은 팁을 찾을 수 있습니다 .

## 새로운 버전으로 업데이트하는 방법은?

해당 정보는 [업데이트 사용자 안내서](https://facebook.github.io/create-react-app/docs/updating-to-new-releases)를 참조하세요.

## 철학

- **하나의 종속성** : 하나의 빌드 종속성 만 있습니다. 웹팩, Babel, ESLint 및 기타 놀라운 프로젝트를 사용하지만 그 위에 응집력있는 큐레이팅 된 경험을 제공합니다.

- **구성 필요 없음** : 아무것도 구성 할 필요가 없습니다. 개발 및 프로덕션 빌드 모두에 대해 합리적으로 좋은 구성이 처리되므로 코드 작성에 집중할 수 있습니다.

- **잠금 없음** : 언제든지 사용자 지정 설정으로 "꺼낼"수 있습니다. 단일 명령을 실행하면 모든 구성 및 빌드 종속성이 프로젝트로 직접 이동되므로 중단 한 부분부터 바로 시작할 수 있습니다.

## 무엇이 포함되어 있나요?

환경에는 최신 단일 페이지 React 앱을 빌드하는 데 필요한 모든 것이 있습니다.

- React, JSX, ES6, TypeScript 및 Flow 구문 지원.
- 객체 확산 연산자와 같은 ES6 이상의 언어 추가 기능.
- 자동 접두사 CSS이므로 `-webkit-`또는 다른 접두사 가 필요하지 않습니다 .
- 커버리지 보고 기능이 내장 된 빠른 대화 형 단위 테스트 실행기.
- 일반적인 실수에 대해 경고하는 라이브 개발 서버.
- JS, CSS 및 프로덕션 용 이미지를 해시 및 소스 맵과 함께 번들로 묶는 빌드 스크립트입니다.
- 모든 [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) 기준을 충족 하는 오프라인 우선 [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) 및 [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) . ( 참고 : 서비스 워커 사용은 이상 - 에서 옵트 인됩니다. )react-scripts@2.0.0
- 단일 종속성으로 위 도구에 대한 번거로움 없는 업데이트.

이러한 도구가 어떻게 결합되는지에 대한 개요는 [해당 가이드](https://github.com/nitishdayal/cra_closer_look) 를 확인하십시오 .

단점은 **특정 방식으로 작동하도록 미리 구성되어 있다는 것** 입니다. 프로젝트에 더 많은 사용자 설정이 필요한 경우 ["eject"](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) 및 사용자 설정이 가능하지만 이 구성을 유지해야합니다.

## 인기있는 대안

Create React App은 다음에 적합합니다.

- 편안하고 기능이 풍부한 개발 환경에서 **React 를 배우십시오**.
- **새로운 단일 페이지 React 애플리케이션을 시작합니다**.
- 라이브러리 및 구성 요소에 대한 **React로 예제 만들기**.

다음은 다른 작업을 시도 할 수있는 몇 가지 일반적인 경우입니다.

- 수백 개의 종속성없이 **React를 사용** 해보고 싶다면 [단일 HTML 파일이나 온라인 샌드 박스를 사용](https://reactjs.org/docs/try-react.html)하는 것이 좋습니다 .

- Rails, Django 또는 Symfony와 같은 **서버 사이드 템플릿 프레임워크와 React를 통합** 또는 **단일 페이지 앱 구축이 아니라면** 더 유연한 [nwb](https://github.com/insin/nwb), 또는 [Neutrino](https://neutrino.js.org/)를 고려해 보세요.
  특히 Rails의 경우 [Rails Webpacker](https://github.com/rails/webpacker)을 사용할 수 있습니다. Synfony의 경우 [Symfony's webpack Encore](https://symfony.com/doc/current/frontend/encore/reactjs.html)를 사용해 보세요.

- **React component 배포**가 필요하다면 [nwb](https://github.com/insin/nwb)로 [이런 방식으로](https://github.com/insin/nwb#react-components-and-libraries)할 수 있습니다. [Neutrino's react-components preset](https://neutrino.js.org/packages/react-components/) 또한 가능합니다.

- React 및 Node.js로 **서버 렌더링** 을 수행 하려면 [Next.js](https://nextjs.org/) 또는 [Razzle](https://github.com/jaredpalmer/razzle)을 확인하십시오 . Create React App은 백엔드와 무관하며 정적 HTML / JS / CSS 번들 만 생성합니다.

- 웹 사이트가 **대부분 정적** 인 경우 (예 : 포트폴리오 또는 블로그) [Gatsby](https://www.gatsbyjs.org/) 또는 [Next.js](https://nextjs.org/) 사용을 고려 하십시오 . Create React App과 달리 Gatsby는 빌드시 웹 사이트를 HTML로 미리 렌더링합니다. Next.js는 서버 렌더링과 사전 렌더링을 모두 지원합니다.

- 마지막으로 더 많은 사용자 정의가 필요한 경우 [Neutrino](https://neutrino.js.org/) 및 해당 [React 사전 설정](https://neutrino.js.org/packages/react/)을 확인하십시오 .

- 위의 모든 도구는 구성이 거의 또는 전혀없이 작동 할 수 있습니다.

빌드를 직접 구성 하려면 [해당 가이드](https://reactjs.org/docs/add-react-to-an-existing-app.html)를 따르세요 .

## React Native

React Native를 위한 비슷한 무언가를 찾고 계시다면 [Expo CLI](https://github.com/expo/expo-cli)를 확인하세요.

## 기여하기

create-react-app은 당신의 도움의 손길을 원합니다! 우리가 찾고있는 내용과 시작하는 방법에 대한 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하십시오 .

## Create React App 지원하기

Create React App은 커뮤니티에서 유지 관리하는 프로젝트이며 모든 기여자는 자원 봉사자입니다. Create React App의 향후 개발을 지원하고 싶다면 [Open Collective](https://opencollective.com/create-react-app)에 기부 해주십시오 .

## Credits

이 프로젝트에 [기여](CONTRIBUTING.md)해 주신 모든 분들에게 감사드립니다..<br>
<a href="https://github.com/facebook/create-react-app/graphs/contributors"><img src="https://opencollective.com/create-react-app/contributors.svg?width=890&button=false" /></a>

문서를 호스팅 해 주신 [Netlify](https://www.netlify.com/)에 감사드립니다.

## Acknowledgements

아이디어와 협업에 대해 기존 관련 프로젝트의 작성자에게 감사드립니다.

- [@eanplatter](https://github.com/eanplatter)
- [@insin](https://github.com/insin)
- [@mxstbr](https://github.com/mxstbr)

## License

Create React App은 [MIT 라이센스](https://github.com/facebook/create-react-app/blob/master/LICENSE)가 부여 된 오픈 소스 소프트웨어 입니다 . Create React App 로고는 [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/)에 따른 라이선스가 부여됩니다 .
