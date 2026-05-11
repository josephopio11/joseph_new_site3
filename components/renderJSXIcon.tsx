import { BadgeCheck, icons } from "lucide-react";

export const renderJSXIcon = (
  icon: string | null,
  color?: string,
  size?: number,
) => {
  if (!icon) return null;

  const LucideIcon = icons[icon as keyof typeof icons];
  if (!LucideIcon) {
    return <BadgeCheck />;
  }

  return <LucideIcon color={color} size={size} />;
};
