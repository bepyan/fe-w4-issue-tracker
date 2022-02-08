import {
  DropdownCheckbox,
  DropdownItem,
  Label,
  Prograss,
  SideBar,
  SideBarItem,
} from '@components';
import { useLabelStore, useMilestoneStore, useUserStore } from '@stores';
import { styled } from '@styles';
import { LabelDTO, MilestoneDTO, UserDTO } from '@types';
import { useMemo } from 'react';

interface Props {
  assignees: UserDTO[];
  labels: LabelDTO[];
  milestone?: MilestoneDTO;
  setAssignees: (assignees: UserDTO[]) => void;
  setLabels: (labels: LabelDTO[]) => void;
  setMilestone: (milestone: MilestoneDTO | undefined) => void;
}

export const IssueSideBar = ({
  assignees,
  labels,
  milestone,
  setAssignees,
  setLabels,
  setMilestone,
}: Props) => {
  const { userList } = useUserStore();
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  const milestonePercentage = useMemo(() => {
    if (!milestone || !milestone.issues.length) return 0;

    const closedIssueCnt = milestone.issues.filter(
      (v) => v.status === 'close',
    ).length;

    return Math.floor((closedIssueCnt * 100) / milestone.issues.length);
  }, [milestone]);

  const onChangeAssignees = (selected: boolean, assignee: UserDTO) => {
    if (selected) {
      setAssignees([...assignees, assignee]);
    } else {
      setAssignees(assignees.filter((e) => e.id !== assignee.id));
    }
  };

  const onChangeLabels = (selected: boolean, label: LabelDTO) => {
    if (selected) {
      setLabels([...labels, label]);
    } else {
      setLabels(labels.filter((e) => e.id !== label.id));
    }
  };

  const onChangeMilestone = (target: MilestoneDTO) => {
    if (target.id === milestone?.id) {
      setMilestone(undefined);
    } else {
      setMilestone(target);
    }
  };

  return (
    <SideBar>
      <SideBarItem
        title="담당자"
        panelHeader="담당자 추가"
        dropdownChildren={
          <>
            {userList.map((v, index) => (
              <DropdownCheckbox
                key={index}
                onChange={(selected) => onChangeAssignees(selected, v)}
              >
                {v.id}
              </DropdownCheckbox>
            ))}
          </>
        }
      >
        {assignees.map((v, index) => (
          <div key={index}>{v.name}</div>
        ))}
      </SideBarItem>

      <SideBarItem
        title="레이블"
        panelHeader="레이블 추가"
        dropdownChildren={
          <>
            {labelList.map((v, index) => (
              <DropdownCheckbox
                key={index}
                onChange={(selected) => onChangeLabels(selected, v)}
              >
                {v.name}
              </DropdownCheckbox>
            ))}
          </>
        }
      >
        {labels.map((v, index) => (
          <Label key={index} {...v} />
        ))}
      </SideBarItem>

      <SideBarItem
        title="마일스톤"
        panelHeader="마일스톤 추가"
        dropdownChildren={
          <>
            {milestoneList.map((v, index) => (
              <DropdownItem key={index} onClick={() => onChangeMilestone(v)}>
                {v.title}
              </DropdownItem>
            ))}
          </>
        }
      >
        {milestone && (
          <MilestoneItem>
            <Prograss value={milestonePercentage} max="100" />
            <span>{milestone.title}</span>
          </MilestoneItem>
        )}
      </SideBarItem>
    </SideBar>
  );
};

const MilestoneItem = styled('div', {
  span: {
    display: 'block',
    color: '$label',
    marginTop: '4px',
  },
});
