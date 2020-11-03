import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";

export type AvatarProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Avatar = ({ className, onLoad, ...props }: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <img
      ref={imgRef}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cx(
        "h-16 w-16 rounded-md inline-block bg-gray-400",
        !loaded && "animate-pulse",
        className
      )}
      alt=""
      loading="lazy"
      {...props}
    />
  );
};

export default Avatar;
