import React from 'react';
import LogotypeLarge from '@assets/svgs/LogotypeLarge.svg';
import LogotypeMedium from '@assets/svgs/LogotypeMedium.svg';
import { styled } from '@styles';

interface ILogoProps {
  size: 'large' | 'medium';
  onClick?: () => void;
}

export const Logo = ({ size, ...props }: ILogoProps) => {
  return (
    <LogoWrapper {...props}>
      {size === 'large' ? <LogotypeLarge /> : <LogotypeMedium />}
    </LogoWrapper>
  );
};

Logo.defaultProps = {
  size: 'large',
};

const LogoWrapper = styled('div', {
  width: 'fit-content',
  height: 'fit-content',
});
