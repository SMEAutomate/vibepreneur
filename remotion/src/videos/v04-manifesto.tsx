import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display } from "../components/Type";
import { Logo } from "../components/Logo";
import { useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const lines = [
  ["Your expertise", "is already a business."],
  ["You don't need", "a personal brand."],
  ["You don't need", "another course."],
  ["You need", "an operating system."],
  ["Vibepreneur", "makes it operational."],
];

const Line: React.FC<{
  a: string;
  b: string;
  bg: string;
  fg: string;
  accent?: boolean;
}> = ({ a, b, bg, fg, accent }) => {
  const o = useFadeIn(2, 22);
  return (
    <Stage bg={bg}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          opacity: o,
          gap: 8,
        }}
      >
        <Display size="lg" align="center" color={fg}>
          {a}
        </Display>
        <Display size="lg" align="center" color={accent ? brand.brand400 : fg}>
          {b}
        </Display>
      </div>
    </Stage>
  );
};

const Final = () => {
  const o = useFadeIn(0, 22);
  return (
    <Stage bg={brand.brand700}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          opacity: o,
          gap: 28,
        }}
      >
        <Logo variant="mark" size={120} color="white" />
        <Display size="md" align="center" color="white">
          vbprnr.com
        </Display>
      </div>
    </Stage>
  );
};

export const Manifesto: React.FC = () => {
  const palettes = [
    { bg: brand.paper, fg: brand.ink },
    { bg: brand.ink, fg: "white" },
    { bg: brand.paper, fg: brand.ink },
    { bg: brand.ink, fg: "white" },
    { bg: brand.brand700, fg: "white", accent: true },
  ];
  const per = 140;
  return (
    <>
      {lines.map((l, i) => (
        <Sequence key={i} from={i * per} durationInFrames={per}>
          <Line
            a={l[0]}
            b={l[1]}
            bg={palettes[i].bg}
            fg={palettes[i].fg}
            accent={palettes[i].accent}
          />
        </Sequence>
      ))}
      <Sequence from={lines.length * per} durationInFrames={200}>
        <Final />
      </Sequence>
    </>
  );
};
