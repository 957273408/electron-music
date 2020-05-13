import React, { useEffect, useState } from "react";
import "./style.css";

interface propTypes {
  src: string;
  fallback?: string;
  className?: string;
}

const FadeImage: React.SFC<propTypes> = (props) => {
  let {
    src,
    fallback = "https://source.unsplash.com/random",
    className = "",
  }: propTypes = props;
  const [imgClass, setimgClass] = useState("fade fadein " + className);
  const [Imgsrc, setImgsrc] = useState(src);
  let oldsrc = "";
  useEffect(() => {
    if (oldsrc !== Imgsrc && !imgClass.includes("fadein")) {
      oldsrc = Imgsrc;
      setimgClass(imgClass + " fadein");
    }
  }, [Imgsrc]);

  useEffect(() => {
    setImgsrc(props.src);
  }, [props.src]);

  const handleLoad = () => {
    setimgClass(imgClass.replace("fadein", " "));
  };
  const handleError = () => {
    setImgsrc(fallback);
  };

  return (
    <img
      src={Imgsrc}
      className={imgClass}
      {...props}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default FadeImage;
