import React from "react";
import {useColorMode} from "@docusaurus/theme-common";

const ImageSwitcher = ({ lightImageSrc, darkImageSrc, alt, loading }) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <>
      <img
        src={colorMode === 'dark' ? darkImageSrc : lightImageSrc}
        alt={alt}
        title={alt}
        loading={loading}
      />
      <noscript>
        <p>This image requires JavaScript to be enabled.</p>
      </noscript>
    </>
  );
};

ImageSwitcher.defaultProps = {
  alt: "",
  loading: "eager",
};

export default ImageSwitcher;
