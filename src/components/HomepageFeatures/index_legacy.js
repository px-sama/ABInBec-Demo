import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{ padding: 0 }}>



        <div class="row justify-content-sm-center">
          <p>This is the official documentation site for all NAZ data sets that have been
            reviewed, researched and certified by the Beertech Alchemy team for use in official reporting and development efforts.
            Our goal is to educate users and provide greater
            visibility to all available  data assets so that we can leverage the right data in our day-to-day processes.</p>
        </div>

        <div class="row d-flex flex-column h-100" style={{ rowGap: "30px" }}>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/teradata-updates" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Teradata Decommission Updates</h3>
                  <p>Get the latest updates posted bi-weekly </p>
                </div>
              </Link>
            </div>
          </div>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/teradata-updates/decommissioned-tables" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Decommissioned Tables</h3>
                  <p>List and schedule of decommissioned Teradata tables</p>
                </div>
              </Link>
            </div>
          </div>


          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/teradata-updates/FAQ" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Teradata Decommission FAQ</h3>
                  <p>Frequently asked questions about the decommission</p>
                </div>
              </Link>
            </div>
          </div>


          <div class="col col--4">
            <div class="card bg-warning 3rem">
              <Link class="card bg-warning mb-3;" to="/docs/category/us-data" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>US Data Sets</h3>
                  <p>All certified data sets relating to the United States</p>
                </div>
              </Link>
            </div>
          </div>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/category/canada-data" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Canada Data Sets</h3>
                  <p>All certified data sets relating to Canada</p>
                </div>
              </Link>
            </div>
          </div>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/Certify" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Data Certification</h3>
                  <p>Learn about data certification</p>
                </div>
              </Link>
            </div>
          </div>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/Certify/uploadinstructions" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Contribute to Alchemy</h3>
                  <p>Learn how to add your data sets to the website</p>
                </div>
              </Link>
            </div>
          </div>


          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/guides/Website-Editing" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>Website Editing</h3>
                  <p>Instructions for updating the website</p>
                </div>
              </Link>
            </div>
          </div>

          <div class="col col--4">
            <div class="card bg-warning mb-3;">
              <Link class="card bg-warning mb-3;" to="/docs/guides/FAQ" style={{ height: '100%', background: "#f5f6f7", color: "black" }}>
                <div class="card__body">
                  <h3>General FAQ</h3>
                  <p>FAQs about certification, Snowflake and more</p>
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
