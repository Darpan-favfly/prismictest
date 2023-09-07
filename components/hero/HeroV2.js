"use client";
import { PrismicRichText } from "@prismicio/react";

const HeroV2 = ({ slice }) => {
  const { description, heading } = slice?.primary;

  return (
    <div>
      <PrismicRichText field={heading} />
      <PrismicRichText field={description} />
    </div>
  );
};

export default HeroV2;
