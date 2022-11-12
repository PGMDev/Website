import React from "react";
import {useColorMode} from "@docusaurus/theme-common";

const ImageSwitcher = ({ lightImageSrc, darkImageSrc }) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <img
      src={colorMode === 'dark' ? darkImageSrc : lightImageSrc}
      alt="This image needs JS enabled to load."
    />
  );
};

export default ImageSwitcher;
