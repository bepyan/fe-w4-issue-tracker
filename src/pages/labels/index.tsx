import { TableLayout } from '@components';
import { useLabelStore } from '@stores';
import { styled } from '@styles';
import { LabelNewForm } from './LabelNewForm';

import { LabelTableEmptyView } from './LabelTableEmptyView';
import { LabelTableItem } from './LabelTableItem';
import { LabelToolbar } from './LabelToolbar';

export const Labels = () => {
  const { labelList } = useLabelStore();

  return (
    <Wrapper>
      <LabelToolbar />
      <LabelNewForm />
      <TableLayout header={<Header>{labelList.length}개의 레이블</Header>}>
        {labelList.map((item, index) => (
          <LabelTableItem key={index} label={item} />
        ))}
        {!labelList.length && <LabelTableEmptyView />}
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});

const Header = styled('div', {
  color: '$label',
  fontWeight: '$bold',
});
