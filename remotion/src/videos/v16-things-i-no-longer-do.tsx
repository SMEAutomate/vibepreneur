import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const items = [
  "Stare at a blank Notion",
  "Pay for 6 SaaS tools",
  "Wonder what's next",
  "Read 'how to find PMF' threads",
  "Buy the next $1,997 mastermind",
  "Wait for inspiration",
];

const ItemCard: React.FC<{ text: string }> = ({ text }) => {
  const slide = useSlideUp(0, 14);
  return (
    <Stage bg={brand.ink}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 20,
          ...slide,
        }}
      >
        <Eyebrow color={brand.brand400}>Things I no longer do</Eyebrow>
        <Display size="lg" color="white">
          ✗ {text}
        </Display>
      </div>
    </Stage>
  );
};

const Outro = () => {
  const o = useFadeIn(0, 18);
  return (
    <Stage bg={brand.brand700}>
      <div
        style={{
          opacity: o,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 16,
        }}
      >
        <Logo variant="mark" size={72} color="white" />
        <Display size="sm" align="center" color="white">
          Vibepreneur did them for me.
        </Display>
      </div>
    </Stage>
  );
};

export const ThingsINoLongerDo: React.FC = () => {
  const per = 75;
  return (
    <>
      {items.map((t, i) => (
        <Sequence key={i} from={i * per} durationInFrames={per}>
          <ItemCard text={t} />
        </Sequence>
      ))}
      <Sequence from={items.length * per} durationInFrames={150}>
        <Outro />
      </Sequence>
    </>
  );
};
