import React from 'react';
import * as icons from '@assets/svgs/icons';

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGElement> {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  return <SVGIcon {...props} />;
};
