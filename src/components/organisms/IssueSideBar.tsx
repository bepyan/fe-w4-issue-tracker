import { SideBar, SideBarItem } from '@components';
import React from 'react';

type Props = {};

export const IssueSideBar = (props: Props) => {
  return (
    <SideBar>
      <SideBarItem title="담당자"></SideBarItem>
      <SideBarItem title="레이블"></SideBarItem>
      <SideBarItem title="마일스톤"></SideBarItem>
    </SideBar>
  );
};
