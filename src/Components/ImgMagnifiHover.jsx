import React from "react";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierZoom,
  MagnifierContainer,
  MagnifierPreview,
} from "react-image-magnifiers";

import applegear from "../../public/images/applegear.webp";
import { Height } from "@mui/icons-material";
function ImgMagnifiHover() {
  const img = applegear;
  return (
    <>
      <MagnifierContainer>
        <SideBySideMagnifier
          imageSrc={img}
          imageAlt="Example"
          largeImageSrc={img} // Optional
          // alwaysInPlace="false"
          // fillAvailableSpace="true"
          fillAlignTop={true}
          fillGapLeft={50}
          fillAvailableSpace={false}
          // style={{ gap: "10px" }}
        />
      </MagnifierContainer>
    </>
  );
}

export default ImgMagnifiHover;

{
  /* <GlassMagnifier
  imageSrc="./image.jpg"
  imageAlt="Example"
  largeImageSrc="./large-image.jpg" // Optional
/> */
}
