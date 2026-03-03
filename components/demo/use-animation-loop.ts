"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

const DEFAULT_INTERVAL_MS = 350;
const PAUSE_PHASES = 3;
const RESET_HOLD_MS = 600;

export function useAnimationLoop(
  totalPhases: number,
  intervalMs = DEFAULT_INTERVAL_MS
): number {
  const phaseRef = useRef(0);
  const listenersRef = useRef(new Set<() => void>());
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const subscribe = useCallback((cb: () => void) => {
    listenersRef.current.add(cb);
    return () => {
      listenersRef.current.delete(cb);
    };
  }, []);

  const getSnapshot = useCallback(() => phaseRef.current, []);

  useEffect(() => {
    function emit(value: number) {
      phaseRef.current = value;
      listenersRef.current.forEach((cb) => cb());
    }

    function tick(current: number) {
      const next = current + 1;

      if (current === -1) {
        timerRef.current = setTimeout(() => {
          emit(0);
          tick(0);
        }, RESET_HOLD_MS);
        return;
      }

      if (next > totalPhases + PAUSE_PHASES) {
        emit(-1);
        tick(-1);
        return;
      }

      timerRef.current = setTimeout(() => {
        emit(next);
        tick(next);
      }, intervalMs);
    }

    phaseRef.current = 0;
    tick(0);

    return () => clearTimeout(timerRef.current);
  }, [totalPhases, intervalMs]);

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
