import { Icon, Label, Table, TextButton } from '@components';
import { styled } from '@styles';
import React from 'react';

type Props = {
  status?: 'inital' | 'closed' | 'reopen';
};

export const Comment = (props: Props) => {
  return (
    <Wrapper
      header={
        <Header>
          <UserName>Oni</UserName>
          <TimeStamp>20분 전</TimeStamp>

          <HeaderRightActionWrapper>
            <Label kind="line">작성자</Label>
            <TextButton size="small">
              <Icon name="edit" /> 편집
            </TextButton>

            <TextButton size="small">
              <Icon name="smile" />
            </TextButton>
          </HeaderRightActionWrapper>
        </Header>
      }
    >
      <div>
        처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근
        완성도를 높여보세요.
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Table, {
  padding: '1.5rem 1rem',
});

const Header = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});

const UserName = styled('span', {
  color: '$title-active',
});

const TimeStamp = styled('span', {
  color: '$label',
});

const HeaderRightActionWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
