import { CSSProperties } from "react";
import "./optionButton.sass";

interface OptionButtonProps {
  colorScheme: "blue" | "yellow" | "silver";
  btnText: string;
  onClick?: () => void | undefined;
  controls?: string;
  style?: CSSProperties;
}

function OptionButton({
  colorScheme,
  btnText,
  onClick,
  controls,
  style,
}: OptionButtonProps) {
  return (
    <button
      className={`btn-control btn-${colorScheme}`}
      style={style}
      onClick={onClick}
      aria-controls={controls}>
      {btnText}
    </button>
  );
}

export default OptionButton;
