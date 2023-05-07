import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Countdown from '@site/src/components/Countdown';

import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//       </div>
//     </header>
//   );
// }

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary max-w-screen-full', styles.heroBanner, styles.customHeader)}>
      <div className="container">
        <h1 className="hero__title text-8xl">{siteConfig.title}</h1>
        <p className="hero__subtitle text-5xl">{siteConfig.tagline}</p>
        <div className={styles.imageWrapper}>
          <img
            className={styles.heroImage}
            src={require('@site/static/img/ABInBev.png').default}
            alt="Hero Image"
          />
        </div>

        <p className="hero__subtitle text-4xl">Time left for TeraData Decomission </p>
        <Countdown target='15 Sep 2023 00:00:00' />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The official documentation site for all NAZ data sets">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div style={{ textAlign: "center" }}>

      </div>
    </Layout>
  );
}
