import React, { SFC, useState, useEffect } from "react";
import { Container, Main, Thumb } from "./style";

interface propsTypes {
  src: string;
  thumb?: string;
  height?: number;
  width?: number;
  fallback?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressImage: SFC<propsTypes> = ({
  src,
  thumb,
  height = 100,
  width = 100,
  className = "",
  style = {},
  fallback = "https://source.unsplash.com/random",
}) => {
  if (!thumb) {
    thumb = thumb = src.replace(/\?.*$/, "") + "?param=20y20";
  }
  let oldsrc = src;
  const [mainSrc, setmainSrc] = useState("");
  const [paddingBottom, setpaddingBottom] = useState(
    (height / width) * 100 || 0
  );
  const [classList, setclassList] = useState(className);
  const [thumbSrc, setthumbSrc] = useState(thumb);
  const [thumbClass, setthumbClass] = useState("");

  useEffect(() => {
    if (oldsrc !== mainSrc && classList.includes("loaded")) {
      oldsrc = mainSrc;
      setclassList(classList.replace("loaded", ""));
    }
  }, [mainSrc]);

  useEffect(() => {
    setmainSrc(src);
  }, [src]);

  const handleError = () => {
    setmainSrc(fallback);
  };

  const handleLoad: React.EventHandler<any> = (e) => {
    setpaddingBottom(0);
    setTimeout(() => {
      setclassList(classList + " loaded");
    }, 50);
  };
  const thumbhandleLoad: React.EventHandler<any> = (e) => {
    setthumbClass("loaded");
  };
  return (
    <Container
      className={classList}
      style={Object.assign({ height, width }, style)}
    >
      <Main
        onError={handleError}
        onLoad={handleLoad}
        src={mainSrc}
        style={{ height, width }}
      />

      <Thumb style={{ paddingBottom }}>
        <img
          className={thumbClass}
          src={thumbSrc}
          style={{ height, width }}
          onLoad={thumbhandleLoad}
        />
      </Thumb>
    </Container>
  );
};

export default ProgressImage;
