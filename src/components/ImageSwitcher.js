import React from "react";
import {useColorMode} from "@docusaurus/theme-common"; 
//docs: https://docusaurus.io/docs/api/themes/configuration#use-color-mode

const ImageSwitcher = ({ lightImageSrc, darkImageSrc }) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <img
      src={isDarkTheme ? darkImageSrc : lightImageSrc}
      alt="This image needs JS enabled to load."
    />
  );
};

export default ImageSwitcher;
