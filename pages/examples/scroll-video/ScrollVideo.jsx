import styles from "./ScrollVideo.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import { useRef, useState } from "react";
import { roundFrame } from "../../../utils";

export default function ScrollVideo() {
  const [loaded, setLoaded] = useState(false);

  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin>
          <div className={styles.first}>Scroll controlled video</div>
        </Scene>

        <Scene pin duration="50%">
          {(progress, event) => {
            let currentVideo = 0;

            if (loaded && videoRef.current) {
              currentVideo = roundFrame(progress * videoRef?.current?.duration);
              videoRef.current.currentTime = currentVideo;
            }

            return (
              <div className={styles.videoWrapper}>
                {event.type} {progress.toFixed(2)}
                <video
                  preload="metadata"
                  ref={videoRef}
                  onCanPlay={() => setLoaded(true)}
                  style={{
                    filter: `contrast(${progress}) sepia(1)`
                  }}
                >
                  <source src="/videos/tucu.webm#t=0.001" type="video/webm" />
                  <source src="/videos/tucu.mp4#t=0.001" type="video/mp4" />
                </video>
              </div>
            );
          }}
        </Scene>
        <Scene pin>
          <div className={styles.last}></div>
        </Scene>
      </Controller>
    </div>
  );
}
