/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Less to Learn',
    content:
      "빌드 도구를 배우거나 설정하지 않아도 됩니다. 순간적인 재로드는 개발에 집중할 수 있도록 도와줍니다. 배포할 때 번들이 자동으로 최적화됩니다.",
  },
  {
    title: '단 하나의 종속성',
    content:
      '앱에는 단 하나의 빌드 종속성이 필요합니다. Create React App을 테스트하여 모든 기본 요소가 복잡한 버전 불일치 없이 원활하게 작동하는지 확인합니다.',
  },
  {
    title: 'No Lock-In',
    content:
      '강력한 앱을 위해 내부적으로 webpack, Babel, ESLint 등 놀라운 프로젝트들을 사용합니다. 고급 구성이 필요한 경우 Create React App에서 "eject"하여 구성 파일을 직접 편집할 수 있습니다.',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'명령 하나로 최신 웹 앱 구성하기'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <h3>by Comnori</h3>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>몇 초만에 시작하기</h2>
              <p>
                React를 사용하든 다른 라이브러리를 사용하든
                Create React App을 사용하면 빌드 도구가 아닌 <strong>코드에 집중</strong>할 수 있습니다.
                <br />
                <br />
                <i>my-app</i> 이라는 프로젝트를 만들기 위해<br />아래 명령어를 실행하세요.
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>손쉬운 유지관리</h2>
              <p>
                빌드 도구 업데이트는 일반적으로 어렵고 시간이 많이 소요되는 작업입니다.
                Create React App의 새 버전이 출시되면 명령어 한줄로 업그레이드할 수 있습니다.
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
