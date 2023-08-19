import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "../styles/hero.module.scss";

export const Hero = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className={`${styles.sbHero} container-fluid`}>
      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          loop={true}
          url="https://firebasestorage.googleapis.com/v0/b/scrollweb-cc9b4.appspot.com/o/assets%2FheroVideo.mp4?alt=media&token=594c9f7b-2871-43f8-92a6-914eaf4a3c85"
        />
      )}
      <div className={styles.sbHeroOverlay}>
        <header className="container">
          <hgroup>
            <h1>ScrollBar</h1>
            <h2>Student Bar @ IT University of Copenhagen</h2>
          </hgroup>
          <p>See you at our next event!</p>
        </header>
      </div>
    </div>
  );
};
