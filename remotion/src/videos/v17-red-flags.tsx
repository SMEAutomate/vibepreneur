import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const flags = [
  { quote: "Just ship something every day", reply: "Ship what?" },
  { quote: "Build in public, audience first", reply: "Audience for what?" },
  { quote: "Find a problem you have", reply: "What if it's not a market?" },
  { quote: "Talk to 100 customers", reply: "Then what?" },
];

const FlagCard: React.FC<{ q: string; r: string; idx: number }> = ({
  q,
  r,
  idx,
}) => {
  const slide = useSlideUp(2, 18);
  return (
    <Stage bg={idx % 2 === 0 ? brand.paper : brand.paper2}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 24,
          ...slide,
        }}
      >
        <Eyebrow color={brand.danger}>🚩 Founder advice</Eyebrow>
        <Card padding={28} style={{ borderColor: brand.line, opacity: 0.7 }}>
          <Body size={28} color={brand.textMuted}>
            "{q}"
          </Body>
        </Card>
        <Display size="sm">{r}</Display>
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
          gap: 20,
        }}
      >
        <Logo variant="mark" size={72} color="white" />
        <Display size="sm" align="center" color="white">
          A structured path
          <br />
          beats motivational threads.
        </Display>
      </div>
    </Stage>
  );
};

export const RedFlags: React.FC = () => {
  const per = 150;
  return (
    <>
      {flags.map((f, i) => (
        <Sequence key={i} from={i * per} durationInFrames={per}>
          <FlagCard q={f.quote} r={f.reply} idx={i} />
        </Sequence>
      ))}
      <Sequence from={flags.length * per} durationInFrames={150}>
        <Outro />
      </Sequence>
    </>
  );
};
