import { ReactNode, useState } from "react";
import clsx from "clsx";

interface CustomButtonProps {
  id?: string;
  icon?: ReactNode;
  iconSize?: "sm" | "lg" | "xl";
  iconColor?: string;
  label?: string;
  tooltip?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  icon,
  iconSize,
  iconColor,
  label,
  tooltip,
  onClick,
  ...props
}) => {
  const [tooltipHover, setTooltipHover] = useState(false);

  return (
    <div className="relative">
      <button
        id={id}
        className={clsx(
          "flex justify-center items-center text-sm  text-slate-700 rounded-sm",
          ((icon && label) || (!icon && label)) && "p-2 border border-slate-700"
        )}
        type="button"
        onMouseEnter={() => setTooltipHover(true)}
        onMouseLeave={() => setTooltipHover(false)}
        onClick={onClick}
        {...props}
      >
        <>
          {icon && (
            <span
              className={clsx(
                "text-slate-700",
                iconSize === "xl"
                  ? "text-xl"
                  : iconSize === "lg"
                  ? "text-lg"
                  : "text-base",
                icon && label && "pe-2"
              )}
              style={{ color: `${iconColor}` }}
            >
              {icon}
            </span>
          )}
          {label && <span>{label}</span>}
        </>
      </button>

      {tooltip && tooltipHover && (
        <div className="py-1 px-2.5 bg-slate-700 text-white text-center text-sm absolute -bottom-8 z-10">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default CustomButton;
