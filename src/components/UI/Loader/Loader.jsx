import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={90}
      viewBox="0 0 200 60"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="57" y="8" rx="8" ry="8" width="141" height="14" />
      <rect x="57" y="26" rx="6" ry="6" width="80" height="9" />
      <circle cx="24" cy="24" r="24" />
    </ContentLoader>
  );
};

export default Loader;
