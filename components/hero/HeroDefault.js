"use client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

const HeroDefault = ({ slice }) => {
  const { description, heading, label, link } = slice?.primary;

  return (
    <div>
      <h1>
        <PrismicRichText field={heading} />
      </h1>
      <PrismicRichText field={description} />
      <Link href={link.url}>
        <PrismicRichText field={label} />
      </Link>
      {slice?.items?.map((item, index) => (
        <div key={index}>
          <PrismicNextImage width={200} field={item?.background_image} />
        </div>
      ))}
    </div>
  );
};

export default HeroDefault;
