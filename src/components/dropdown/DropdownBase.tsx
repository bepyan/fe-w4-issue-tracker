import React, { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '@hooks';
import { styled } from '@styles';

export type DropdownBasePosition = 'left' | 'right';

export type DropdownBaseProps = {
  indicator: React.ReactNode;
  panelHeader: string | React.ReactNode;
  position?: DropdownBasePosition;
  children: React.ReactNode;
};

const DROPDOWN_ITEM_CLASSNAME = '__dorpdownItem__';

export const DropdownBase = ({
  indicator,
  panelHeader,
  position = 'left',
  children,
}: DropdownBaseProps) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);

  const openDropdown = () => setHide(false);
  const closeDropdown = () => setOpen(false);

  const onClickIndicator = () => {
    if (!open) openDropdown();
    else closeDropdown();
  };

  const onClickItem = (ev: MouseEvent) => {
    const target = ev.target as HTMLDivElement;
    const isDropdownItem = target.classList.contains(DROPDOWN_ITEM_CLASSNAME);

    if (isDropdownItem) closeDropdown();
  };

  const onTransitionEnd = () => !open && setHide(true);

  // hooks

  useEffect(() => {
    if (hide === false) setOpen(true);
  }, [hide]);

  useEffect(() => {
    panelRef.current?.addEventListener('click', onClickItem);
    return () => panelRef.current?.removeEventListener('click', onClickItem);
  }, [panelRef]);

  useClickOutside(closeDropdown, [panelRef, indicatorRef]);

  // props

  const panelProps = { ref: panelRef, open, hide, position, onTransitionEnd };

  return (
    <Wrapper>
      <Indicator ref={indicatorRef} onClick={onClickIndicator}>
        {indicator}
      </Indicator>

      <Panel {...panelProps}>
        <PanelHeader>{panelHeader}</PanelHeader>
        {children}
      </Panel>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'inline',
  position: 'relative',
});

const Indicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: '$bold',
  lineHeight: '$small',
  color: '$label',
  iconColor: '$label',
  userSelect: 'none',
  transition: 'all 200ms ease-in-out',

  '&:hover': {
    color: '$body',
    iconColor: '$body',
  },
});

const Panel = styled('div', {
  position: 'absolute',
  zIndex: '$max',
  marginTop: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  width: '240px',
  border: '1px solid $line',
  borderRadius: '16px',
  overflow: 'hidden',
  fontWeight: '$regular',
  transition: 'opacity 200ms ease-in-out',

  '& > * + *': {
    borderTop: '1px solid $line',
  },
  variants: {
    open: {
      true: { display: 'flex', opacity: 1 },
      false: { opacity: 0 },
    },
    hide: {
      true: { display: 'none' },
      false: { display: 'flex' },
    },
    position: {
      left: { left: 0 },
      right: { right: 0 },
    },
  },
});

const PanelHeader = styled('div', {
  padding: '8px 16px',
  color: '$title-active',
  fontSize: '$medium',
  lineHeight: '$medium',
  backgroundColor: '$background',
});
