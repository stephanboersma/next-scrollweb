import { useEffect, useState } from "react";
import styles from "./styles/hero.module.scss";
import { IEvent } from "@typing/interfaces/event.interface";
import { formatDate } from "@utils/date.utils";
import dynamic from "next/dynamic";

type Props = {
  nextEvent: IEvent;
};

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Hero = ({ nextEvent }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className={`${styles.hero} container-fluid`}>
      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          loop={true}
          url="./hero-video.mp4"
        />
      )}
      <div className={styles.heroOverlay}>
        <header className="container">
          <hgroup>
            <h1>ScrollBar</h1>
            <h2>Student Bar @ IT University of Copenhagen</h2>
          </hgroup>
          <p>See you at our next event!</p>
          {nextEvent && (
            <p>
              {nextEvent.displayName} @ {formatDate(nextEvent.startDate)}
            </p>
          )}
        </header>
      </div>
    </div>
  );
};
