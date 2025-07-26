import React from "react";

const AboutSlugsPage = ({ params }) => {
  const { slugs } = params;
  console.log("Slugs:", slugs);
  return <div>{slugs.join(", ")}</div>;
};

export default AboutSlugsPage;
