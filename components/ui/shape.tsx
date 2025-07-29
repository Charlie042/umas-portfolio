import React from "react";

interface ShapeProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Shape: React.FC<ShapeProps> = ({
  color = "#48AACA",
  width = 81,
  height = 288,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 81 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.139 251.776C6.61565 249.43 4.35395 248.258 2.81543 246.428C2.02645 245.49 1.38591 244.436 0.916112 243.304C-2.05026e-06 241.096 -2.16162e-06 238.548 -2.38434e-06 233.453L-1.02045e-05 54.5475C-1.04273e-05 49.4521 -1.05386e-05 46.9045 0.916104 44.6964C1.3859 43.5641 2.02644 42.5104 2.81542 41.5721C4.35394 39.7424 6.61564 38.5697 11.139 36.2242L81 -3.54062e-06L81 288L11.139 251.776Z"
        fill={color}
      />
    </svg>
  );
};

export default Shape;
