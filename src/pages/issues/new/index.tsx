import {
  Button,
  Icon,
  SideBar,
  SideBarItem,
  TextArea,
  TextButton,
  TextInput,
} from '@components';
import { styled } from '@styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IssuesNew = () => {
  const nav = useNavigate();

  const navToIssue = () => nav('/issues');

  return (
    <Wrapper>
      <Header>
        <h5>새로운 이슈 작성</h5>
      </Header>

      <Content>
        <Icon name="user_image_large" />

        <InputWrapper>
          <TextInput label="제목" size="medium" />
          <TextArea label="코멘트를 입력하세요" />
        </InputWrapper>

        <SideBar>
          <SideBarItem title="담당자"></SideBarItem>
          <SideBarItem title="레이블"></SideBarItem>
          <SideBarItem title="마일스톤"></SideBarItem>
        </SideBar>
      </Content>

      <Footer>
        <TextButton onClick={navToIssue}>
          <Icon name="x_square" />
          작성 취소
        </TextButton>

        <Button size="medium" disabled>
          완료
        </Button>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled('div', {});

const Header = styled('div', {
  paddingBottom: '2rem',

  h5: {
    fontSize: '$display',
    fontWeight: '$regular',
  },
});

const Content = styled('div', {
  display: 'flex',
  padding: '2rem 0rem',
  borderTop: '1px solid $line',
  borderBottom: '1px solid $line',
});

const InputWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: '1rem',
  marginRight: '2rem',

  '& > * + * ': {
    marginTop: '1rem',
  },
});

const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: '2rem',

  '& > * + *': {
    marginLeft: '2rem',
  },
});
