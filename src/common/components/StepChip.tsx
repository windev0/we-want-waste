import type { Theme } from "../types/theme.type";

interface StepChipProps {
  index: number;
  theme?: Theme | null;
}

const StepChip = ({ index, theme }: StepChipProps) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 21,
        height: 21,
        borderRadius: "50%",
        background: theme?.primaryColor,
        color: "#fff",
        fontWeight: 700,
        fontSize: "1rem",
        marginRight: 8,
      }}
    >
      {index + 1}
    </span>
  );
};

export default StepChip;
