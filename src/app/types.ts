import type { ReactNode } from "react";

export interface BaseProps {
  className?: string;
}

export interface ChildrenProps extends BaseProps {
  children?: ReactNode;
}
