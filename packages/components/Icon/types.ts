export interface IconProps {
  size?: number | string;
  color?: string;
  spin?: boolean;
  pulse?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  rotate?: 90 | 180 | 270;
  className?: string;
  style?: Record<string, string>;
}