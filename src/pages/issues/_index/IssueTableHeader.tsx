import { Dropdown, DropdownCheckbox, HeaderLink, Icon } from '@components';
import { issueFilterStore } from '@stores';
import { styled } from '@styles';
import { useRecoilState } from 'recoil';

type Props = {};

export const IssueTableHeader = ({}: Props) => {
  const [issueFilter, setIssueFilter] = useRecoilState(issueFilterStore);

  const filterOpenIssue = () => {
    setIssueFilter((state) => ({ ...state, isclose: false }));
  };
  const filterCloseIssue = () => {
    setIssueFilter((state) => ({ ...state, isclose: true }));
  };

  return (
    <Wrapper>
      <div className="wrapper__left">
        <input type="checkbox" />

        <HeaderLink selected={!issueFilter.isclose} onClick={filterOpenIssue}>
          <Icon name="alert_circle" />
          <span>열린 이슈(2)</span>
        </HeaderLink>
        <HeaderLink selected={issueFilter.isclose} onClick={filterCloseIssue}>
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
