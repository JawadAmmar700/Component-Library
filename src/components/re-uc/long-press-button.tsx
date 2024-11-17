import React, { useRef } from "react";

interface LongPressButtonProps {
  onPress: (
    direction: "left" | "right",
    scrollAmount: number,
    behavior: "smooth" | "instant"
  ) => void;
  className: string;
  children: React.ReactNode;
  direction: "left" | "right";
  timeOutDuration: number;
}

const LongPressButton: React.FC<LongPressButtonProps> = ({
  onPress,
  className,
  children,
  direction,
  timeOutDuration,
}) => {
  const requestAnimationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  const handleLongPressLogic = () => {
    let currentScrollAmount = 0;
    const animation = () => {
      const now = performance.now();

      if (!lastTimeRef.current) {
        lastTimeRef.current = now;
      }

      const deltaTime = now - lastTimeRef.current;

      if (deltaTime > 10) {
        currentScrollAmount += 1;
        onPress(direction, currentScrollAmount, "instant");
        lastTimeRef.current = now;
      }

      requestAnimationFrameRef.current = requestAnimationFrame(animation);
    };

    requestAnimationFrameRef.current = requestAnimationFrame(animation);
  };

  const handleMouseDown = () => {
    onPress(direction, 20, "smooth");
    timeOut.current = setTimeout(() => {
      handleLongPressLogic();
    }, timeOutDuration);
  };

  const handleMouseUp = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
      timeOut.current = null;
    }
    if (requestAnimationFrameRef.current !== null) {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      requestAnimationFrameRef.current = null;
    }
  };
  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className={className}
    >
      {children}
    </button>
  );
};

export default LongPressButton;
