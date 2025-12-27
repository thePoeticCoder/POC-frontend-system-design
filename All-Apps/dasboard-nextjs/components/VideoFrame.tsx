import React from "react";

type VideoFramePropsType = {
  src: string;
  title: string;
};

export const VideoFrame = ({ src, title }: VideoFramePropsType) => {
  return (
    <iframe
      width="317"
      height="230"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
