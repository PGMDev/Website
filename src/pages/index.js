import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/ok-hand.svg",
    description: (
      <>
        Unlike the original release, PGM 1.8 is much easier to use. It has no
        backend, website, or API to make hosting more cost-effective.
      </>
    ),
  },
  {
    title: "Open Source",
    imageUrl: "img/open-hands.svg",
    description: (
      <>
        Not only is PGM easy to use, but contributing requires no dependency
        installation. The plugin is designed with reliability, stability, and
        performance in mind, all made possible thanks to our wonderful
        contributors.
      </>
    ),
  },
  {
    title: "Active Community",
    imageUrl: "img/handshake.svg",
    description: (
      <>
        Be part of a community of over 20 contributors and help keep the project
        alive! Our <a href="https://discord.gg/pEEcwTk">Discord server</a> is
        the best place to discuss bug fixes and implementations in real time.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} loading="lazy" alt="" />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Home`}>
      <header className={classnames("hero", styles.banner)}>
        <div className={classnames(styles.bannerOverlay)} />
        <iframe
          className={styles.bannerVideo}
          src="https://www.youtube-nocookie.com/embed/vxS-0jqCEYo?playlist=vxS-0jqCEYo&controls=0&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&quality=high"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Homepage Banner Video"
        />
        <div className={classnames("container", styles.bannerContainer)}>
          <div className="row">
            <div className="col col--6">
              <h1 className={classnames("hero__title", styles.bannerTitle)}>
                The original, <span className={styles.bannerGradient}>redefined</span>.
              </h1>
              <p className="hero__subtitle" style={{ color: "#FFF" }}>
                {siteConfig.tagline}
              </p>
              <div className={styles.Ctas}>
                <Link
                  className={classnames(
                    "button button--outline button--primary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("downloads")}
                >
                  Get Started
                </Link>
                <span className={styles.githubButtonWrapper}>
                  <iframe
                    className={styles.githubButton}
                    src="https://ghbtns.com/github-btn.html?user=PGMDev&amp;repo=PGM&amp;type=star&amp;count=true&amp;size=large"
                    width={160}
                    height={30}
                    title="GitHub Stars"
                  />
                </span>
              </div>
            </div>
            <div className="col col--6">
              <img
                src="img/shield.png"
                alt="Biege-colored shield with a red outline containing two swords clashing in the middle and a text that reads 'PGM' underneath it."
                title="Biege-colored shield with a red outline containing two swords clashing in the middle and a text that reads 'PGM' underneath it."
                className={classnames(styles.floating)}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="eskere">
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
