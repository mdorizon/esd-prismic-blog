// slices/AboutUs/index.tsx
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs = ({ slice }: AboutUsProps): JSX.Element => {
  const { logo, description } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="rounded-lg overflow-hidden mb-6">
        <PrismicNextImage field={logo} className="w-full" />
      </div>
      <div className="prose lg:prose-xl max-w-none">
        <PrismicRichText field={description} />
      </div>
    </section>
  );
};

export default AboutUs;
