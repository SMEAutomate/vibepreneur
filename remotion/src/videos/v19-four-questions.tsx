import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { Logo } from "../components/Logo";
import { useSlideUp, useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const questions = [
  "What's the next decision?",
  "What shipped yesterday?",
  "What's blocking the launch?",
  "What does today look like?",
];

const QCard: React.FC<{ q: string; n: number }> = ({ q, n }) => {
  const slide = useSlideUp(0, 16);
  return (
    <Stage bg={n % 2 === 0 ? brand.paper : brand.paper2}>
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
        <Eyebrow>Question {n} of 4</Eyebrow>
        <Display size="md">{q}</Display>
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
        <Logo variant="mark" size={80} color="white" />
        <Display size="sm" align="center" color="white">
          Vibepreneur answers them
          <br />
          before standup.
        </Display>
      </div>
    </Stage>
  );
};

export const FourQuestions: React.FC = () => {
  const per = 150;
  return (
    <>
      {questions.map((q, i) => (
        <Sequence key={i} from={i * per} durationInFrames={per}>
          <QCard q={q} n={i + 1} />
        </Sequence>
      ))}
      <Sequence from={questions.length * per} durationInFrames={150}>
        <Outro />
      </Sequence>
    </>
  );
};
