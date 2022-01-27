import { Dropdown, DropdownCheckbox, HeaderLink, Icon } from '@components';
import { styled } from '@styles';
import React from 'react';

export const IssueTableHeader = () => {
  return (
    <Wrapper>
      <div className="wrapper__left">
        <input type="checkbox" />

        <HeaderLink selected={true}>
          <Icon name="alert_circle" />
          <span>열린 이슈(2)</span>
        </HeaderLink>
        <HeaderLink>
          <Icon name="archive" />
          <span>닫힌 이슈(0)</span>
        </HeaderLink>
      </div>

      <div className="wrapper__right">
        <Dropdown label="담당자" title="담당자 필터" position="right">
          <DropdownCheckbox>담당자가 없는 이슈</DropdownCheckbox>
        </Dropdown>
        <Dropdown label="레이블" title="레이블 필터" position="right">
          <DropdownCheckbox>레이블이 없는 이슈</DropdownCheckbox>
        </Dropdown>
        <Dropdown label="마일스톤" title="마일스톤 필터" position="right">
          <DropdownCheckbox>마일스톤이 없는 이슈</DropdownCheckbox>
          <DropdownCheckbox>마스터즈 코스</DropdownCheckbox>
        </Dropdown>
        <Dropdown label="작성자" title="작성자 필터" position="right">
          <DropdownCheckbox>
            <Icon name="user_image_small" />
            <span>Oni</span>
          </DropdownCheckbox>
        </Dropdown>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flex: 1,

  '.wrapper__left': {
    display: 'flex',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: '1.5rem',
    },
  },
  '.wrapper__right': {
    display: 'flex',
    marginLeft: 'auto',
    '& > * + *': {
      marginLeft: '2rem',
    },
  },
});
