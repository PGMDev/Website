import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";

import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBook,
  faCompass,
  faCalendarAlt,
  faDownload,
  faFolderOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import styles from "./styles.module.css";

export default function Downloads() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function getReleases() {
      const response = await fetch(
        "https://api.github.com/repos/PGMDev/PGM/releases"
      );

      return setReleases(await response.json());
    }

    getReleases();
  }, []);

  return (
    <Layout title="Downloads">
      <div className={classnames("container", styles.downloads_container)}>
        <h1 className={styles.downloads_title}>Downloads</h1>
        {releases.length === 0 ? (
          <div className={classnames("hero", styles.spinner_hero)}>
            <div className={styles.lds_ripple}>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div
            className={classnames(
              "hero",
              styles.downloads_hero,
              styles.appearing
            )}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <img src="/img/shield.png" alt="" className={styles.pgm_logo} />
                    <div className={styles.pgm}>
                      <h1>PGM {releases[0].name}</h1>
                      <p>
                        <small>
                          {" "}
                          {format(
                            new Date(releases[0].published_at),
                            "LLLL do, yyyy"
                          )}{" "}
                        </small>
                      </p>
                      <a href={releases[0].html_url}>
                        Changelog <FontAwesomeIcon icon={faAngleRight} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.description}>
                    <p>
                      Minecraft multiplayer game-server suite for managing PvP
                      matches across various gamemodes
                    </p>
                  </div>
                </div>
                <div className={classnames("col col--4", styles.col_border)}>
                  <h2>Download PGM</h2>
                  <p>
                    PvP Game Manager (PGM) is a plugin that manages running and
                    instancing multiple PvP maps across various gamemodes for
                    Minecraft multiplayer.
                  </p>
                  <div className="text--center">
                    <div className={classnames(styles.download_button_wrapper)}>
                      <a
                          className={classnames(
                              "button button--primary",
                              styles.download_button
                          )}
                          href={"https://nightly.link/PGMDev/PGM/workflows/deploy/dev/PGM.jar.zip"}
                          title={"Latest development build directly from GitHub.\nContains all the latest features, may occasionally bring new bugs."}
                      >
                        Latest <FontAwesomeIcon icon={faDownload} />
                      </a>
                      <a
                          className={classnames(
                              "button button--primary",
                              styles.download_button
                          )}
                          href={releases[0].assets[0].browser_download_url}
                          title={`Latest stable release, ${releases[0].name} from ${format(new Date(releases[0].published_at), "LLLL do, yyyy")}.\nLacks the latest features, but has a lower chance of random bugs.`}
                      >
                        Stable {releases[0].name} <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <a
                        className={classnames(
                            "button button--primary",
                            styles.download_button
                        )}
                        href={"/docs/guides/preparing/local-server-setup"}
                    >
                      Install guide <FontAwesomeIcon icon={faBook} />
                    </a>
                  </div>
                </div>
                <div className={classnames("col col--4", styles.col_margin_left)}>
                <h2>Download SportPaper</h2>
                <p>
                  SportPaper is a Minecraft server software based on Paper 1.8, tuned
                  for maximum performance and high-intensity PvP. It is
                  recommended for use with PGM.
                </p>
                <div className="text--center">
                  <div className={classnames(styles.download_button_wrapper)}>
                    <a
                      className={classnames(
                        "button button--primary",
                        styles.download_button
                      )}
                      href={"https://repo.pgm.fyi/snapshots/app/ashcon/sportpaper/1.8.8-R0.1-SNAPSHOT/sportpaper-1.8.8-R0.1-SNAPSHOT.jar"}
                    >
                      Download <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                  <a href="https://github.com/Electroid/SportPaper">
                    GitHub <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.others}>
          <h2 style={{ marginBottom: "-15px" }}>Other Resources</h2>
          <div className="row">
            <div className={classnames("col col--6", styles.column)}>
              <div className={classnames("hero", styles.others_hero)}>
                <div className="col">
                  <div className="row">
                    <div className="col col--6">
                      <div className="row">
                        <h1 className={styles.others_icon}>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </h1>
                        <div className={styles.others_header}>
                          <h2>Events</h2>
                          <a href="https://github.com/PGMDev/Events/">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="col col--6 text--right">
                      <a
                        className={classnames(
                          "button button--primary",
                          styles.others_button
                        )}
                        href={"https://github.com/PGMDev/Events/releases/latest"}
                      >
                        Download <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.others_description}>
                    <p>
                      Events is the official PGM plugin for managing PvP matches
                      in a competitive setting. Upon joining or cycling, all
                      team members are forced onto their respective teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classnames("col col--6", styles.column)}>
              <div className={classnames("hero", styles.others_hero)}>
                <div className="col">
                  <div className="row">
                    <div className="col col--6">
                      <div className="row">
                        <h1 className={styles.others_icon}>
                          <FontAwesomeIcon icon={faUsers} />
                        </h1>
                        <div className={styles.others_header}>
                          <h2>Community</h2>
                          <a href="https://github.com/PGMDev/Community/">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="col col--6 text--right">
                      <a
                        className={classnames(
                          "button button--primary",
                          styles.others_button
                        )}
                        href={"https://nightly.link/PGMDev/Community/workflows/build/dev/Community.jar.zip"}
                      >
                        Download <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.others_description}>
                    <p>
                      Community is a standalone plugin for managing PGM servers.
                      It includes a wide range of useful features such as robust moderation 
                      tools, a friendship system, match mutations, a party system, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "40px", marginBottom: "10px" }} />
          <div className="row">
            <div className={classnames("col col--6", styles.column)}>
              <div className={classnames("hero", styles.others_hero)}>
                <div className="col">
                  <div className="row">
                    <div className="col col--6">
                      <div className="row">
                        <h1 className={styles.others_icon}>
                          <FontAwesomeIcon icon={faFolderOpen} />
                        </h1>
                        <div className={styles.others_header}>
                          <h2>ResourcePile</h2>
                          <a href="https://github.com/MCResourcePile">GitHub</a>
                        </div>
                      </div>
                    </div>
                    <div className="col col--6 text--right">
                      <a
                        className={classnames(
                          "button button--primary",
                          styles.others_button
                        )}
                        href="https://mcresourcepile.github.io"
                        target="_blank"
                      >
                        Visit <FontAwesomeIcon icon={faFolderOpen} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.others_description}>
                    <p>
                      ResourcePile is a community project that aims to archive
                      various collections of resources, such as maps or historical
                      statistics, for users with backgrounds in Overcast and
                      similar networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classnames("col col--6", styles.column)}>
              <div className={classnames("hero", styles.others_hero)}>
                <div className="col">
                  <div className="row">
                    <div className="col col--6">
                      <div className="row">
                        <h1 className={styles.others_icon}>
                          <FontAwesomeIcon icon={faCompass} />
                        </h1>
                        <div className={styles.others_header}>
                          <h2>PGM Tracker</h2>
                          <a href="https://pgm.fyi">Website</a>
                        </div>
                      </div>
                    </div>
                    <div className="col col--6 text--right">
                      <a
                        className={classnames(
                          "button button--primary",
                          styles.others_button
                        )}
                        href="https://pgm.fyi"
                        target="_blank"
                      >
                        Visit <FontAwesomeIcon icon={faCompass} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.others_description}>
                    <p>
                      PGM Tracker is a community tool made by{" "}
                      <a href="https://github.com/applenick">applenick</a> that
                      tracks public PGM servers. Take a look at it, play a
                      variety of Minecraft PvP maps, and get involved with
                      development!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
