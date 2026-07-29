import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const useFadeIn = (start = 0, dur = 18) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const useSlideUp = (start = 0, dur = 20, distance = 24) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + dur], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return { opacity: o, transform: `translateY(${y}px)` };
};

export const useSpringIn = (start = 0, mass = 0.6) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame: frame - start,
    fps,
    config: { mass, damping: 14, stiffness: 120 },
  });
};

export const useEnterExit = (
  enter: number,
  exit: number,
  enterDur = 16,
  exitDur = 14
) => {
  const frame = useCurrentFrame();
  const enterO = interpolate(frame, [enter, enter + enterDur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exitO = interpolate(frame, [exit - exitDur, exit], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.min(enterO, exitO);
};
