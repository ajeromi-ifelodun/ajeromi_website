import React, { FC } from "react";
import Image, { ImageProps } from "next/image";
interface CustomImageProps extends ImageProps {
  style?: React.CSSProperties;
}
const CustomImage: FC<CustomImageProps> = ({ style, ...props }) => {
  return (
    <Image
      {...props}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        ...style,
      }}
    />
  );
};

export default CustomImage;
