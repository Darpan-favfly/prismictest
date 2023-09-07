import { HeroDefault, HeroV2 } from "./";

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "hero":
          switch (slice.variation) {
            case "default":
              return <HeroDefault slice={slice} key={`slice-${index}`} />;
            case "herov2":
              return <HeroV2 slice={slice} key={`slice-${index}`} />;
            default:
              return null;
          }

        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
