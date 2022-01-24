import * as icons from '@assets/svgs/icons';
import { Button, Logo, Tap, Taps, TextButton, Icon, IconName, Label, IssueLabel } from '@components';
import { globalStyles, styled } from '@styles';
import React from 'react';

const App = () => {
  globalStyles();

  const iconNameList = Object.keys(icons) as IconName[];

  return (
    <Warpper>
      <div>
        <Logo />
        <Logo size="medium" />
      </div>

      <div>
        <Button>standard 버튼</Button>
        <Button kind="secondary">secondary 버튼</Button>
        <Button disabled={true}>disabled 버튼</Button>
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
        <Button size="small">
          <Icon name="plus" /> BUTTON
        </Button>
        <Button size="small" kind="secondary">
          <Icon name="plus" /> BUTTON
        </Button>
        <Button size="small" disabled={true}>
          <Icon name="plus" /> BUTTON
        </Button>
        <Button size="small">
          <Icon name="plus" /> BUTTON
        </Button>
      </div>

      <div>
        <TextButton>
          <Icon name="plus" /> 버튼
        </TextButton>
        <TextButton disabled={true}>
          <Icon name="plus" /> 버튼
        </TextButton>
      </div>

      <div>
        <TextButton size="small">
          <Icon name="plus" /> 버튼
        </TextButton>
        <TextButton size="small" disabled={true}>
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

      <RowContainer>
        <Taps>
          <Tap>
            <Icon name="tag" />
            <span>레이블</span>
            <span>(0)</span>
          </Tap>
          <Tap>
            <Milestone name="milestone" />
            <span>마일스톤</span>
            <span>(0)</span>
          </Tap>
        </Taps>
      </RowContainer>
    </Warpper>
  );
};

export default App;

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
  '& > * + *': {
    marginLeft: '.5rem',
  },
});

const IconContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  rowGap: 48,
});

const Milestone = styled(Icon, {
  replaceIconStrokeToFill: '$label',
});
