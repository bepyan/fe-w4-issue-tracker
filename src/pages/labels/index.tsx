import {
  Button,
  DeleteButton,
  Icon,
  Label,
  LabelsMilestoneTaps,
  Table,
  TextButton,
} from '@components';
import { styled } from '@styles';
import React from 'react';

export const Labels = () => {
  return (
    <Wrapper>
      <Toolbar>
        <LabelsMilestoneTaps labelCnt={3} milestoneCnt={2} />

        <Button size="small">
          <Icon name="plus" /> 추가
        </Button>
      </Toolbar>

      <Table header={<Header>3개의 레이블</Header>}>
        <TableItem>
          <LabelWrapper>
            <Label>레이블 이름</Label>
          </LabelWrapper>

          <LabelDescText>레이블에 대한 설명</LabelDescText>

          <LabelActionWrapper>
            <TextButton>
              <Icon name="edit" /> 편집
            </TextButton>

            <DeleteButton>삭제</DeleteButton>
          </LabelActionWrapper>
        </TableItem>

        <TableItem>
          <LabelWrapper>
            <Label>레이블 이름</Label>
          </LabelWrapper>

          <LabelDescText>레이블에 대한 설명</LabelDescText>

          <LabelActionWrapper>
            <TextButton>
              <Icon name="edit" /> 편집
            </TextButton>

            <DeleteButton>삭제</DeleteButton>
          </LabelActionWrapper>
        </TableItem>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});

const Toolbar = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > :last-child': {
    marginLeft: 'auto',
  },
});

const Header = styled('div', {
  color: '$label',
  fontWeight: '$bold',
});

const TableItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',
});

const LabelWrapper = styled('div', {
  flex: 1,
});

const LabelDescText = styled('div', {
  color: '$label',
  flex: 3,
});

const LabelActionWrapper = styled('div', {
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
