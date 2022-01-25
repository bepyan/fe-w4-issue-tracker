import { styled } from '@styles';
import React from 'react';

type Props = {
  onClick?: () => void;
};

export const IssueTable = (props: Props) => {
  return <Wrapper>열린이슈</Wrapper>;
};

const Wrapper = styled('div', {});
