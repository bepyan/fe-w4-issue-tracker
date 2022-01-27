import * as icons from '@assets/svgs/icons';
import {
  Button,
  Logo,
  Taps,
  TextButton,
  Icon,
  IconName,
  Label,
  IssueLabel,
  Dropdown,
  DropdownItem,
  DropdownCheckbox,
  FilterBar,
  TextInput,
  LabelsMilestoneTaps,
} from '@components';
import { styled } from '@styles';
import React from 'react';

export const AboutPage = () => {
  const iconNameList = Object.keys(icons) as IconName[];

  return (
    <Warpper>
      <div>
        <Logo />
        <Logo size="medium" />
      </div>

      <div>
        <Button size="large">standard 버튼</Button>
        <Button size="large" kind="secondary">
          secondary 버튼
        </Button>
        <Button size="large" disabled={true}>
          disabled 버튼
        </Button>
      </div>

      <div>
        <Button size="medium">standard 버튼</Button>
        <Button size="medium" kind="secondary">
          secondary 버튼
        </Button>
        <Button size="medium" disabled={true}>
          medium 버튼
        </Button>
      </div>

      <div>
        <Button>
          <Icon name="plus" /> BUTTON
        </Button>
        <Button size="small" kind="secondary">
          <Icon name="plus" /> BUTTON
        </Button>
        <Button disabled={true}>
          <Icon name="plus" /> BUTTON
        </Button>
        <Button>
          <Icon name="plus" /> BUTTON
        </Button>
      </div>

      <div>
        <TextButton size="medium">
          <Icon name="plus" /> 버튼
        </TextButton>
        <TextButton size="medium" disabled={true}>
          <Icon name="plus" /> 버튼
        </TextButton>
      </div>

      <div>
        <TextButton>
          <Icon name="plus" /> 버튼
        </TextButton>
        <TextButton disabled={true}>
          <Icon name="plus" /> 버튼
        </TextButton>
      </div>

      <IconContainer>
        {iconNameList.map((name, index) => (
          <Icon key={index} name={name} />
        ))}
      </IconContainer>

      <RowContainer>
        <Label>레이블 이름</Label>
        <Label kind="dark">레이블 이름</Label>
        <Label kind="line">작성자</Label>
      </RowContainer>

      <RowContainer>
        <IssueLabel isOpen />
        <IssueLabel isOpen={false} />
      </RowContainer>

      <div>
        <Taps
          tapList={[
            {
              path: '/about',
              children: <span>about</span>,
            },
            {
              path: '/issues',
              children: <span>issue</span>,
            },
          ]}
        />

        <LabelsMilestoneTaps labelCnt={3} milestoneCnt={100} />
      </div>

      <RowContainer>
        <Dropdown label="드롭박스" title="상태 변경">
          <DropdownItem>선택한 이슈 열기</DropdownItem>
          <DropdownItem>선택한 이슈 닫기</DropdownItem>
        </Dropdown>

        <Dropdown label="체크박스" title="이슈필터">
          <DropdownCheckbox>열린 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 작성한 이슈</DropdownCheckbox>
          <DropdownCheckbox>나에게 할당된 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 댓글을 남긴 이슈</DropdownCheckbox>
          <DropdownCheckbox>닫힌 이슈</DropdownCheckbox>
        </Dropdown>

        <Dropdown label="우측정렬" title="상태 변경" position="right">
          <DropdownItem>선택한 이슈 열기</DropdownItem>
          <DropdownItem>선택한 이슈 닫기</DropdownItem>
        </Dropdown>
      </RowContainer>

      <div>
        <FilterBar
          label="필터"
          title="이슈 필터"
          onSubmit={(v) => console.log(v)}
        >
          <DropdownCheckbox>열린 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 작성한 이슈</DropdownCheckbox>
          <DropdownCheckbox>나에게 할당된 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 댓글을 남긴 이슈</DropdownCheckbox>
          <DropdownCheckbox>닫힌 이슈</DropdownCheckbox>
        </FilterBar>
      </div>

      <div>
        <TextInput label="아이디" />
        <TextInput label="아이디" disabled required />
        <TextInput label="아이디" size="medium" />
        <TextInput label="아이디" size="small" />

        <TextInput
          label="아이디"
          status="success"
          statusText="사용 가능한 아이디 입니다!"
        />
        <TextInput
          label="아이디"
          status="error"
          statusText="이미 사용하고 있는 아이디 입니다!"
        />
      </div>
    </Warpper>
  );
};

const Warpper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 720,
  margin: '0px auto',
  paddingBottom: '20%',
  '& > *': {
    marginTop: '3rem',
  },
  '& > div > * + *': {
    marginTop: '0.25rem',
  },
});

const RowContainer = styled('section', {
  display: 'flex',
  '& > * + *': {
    marginLeft: '.5rem',
  },
});

const IconContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  rowGap: 48,
});
