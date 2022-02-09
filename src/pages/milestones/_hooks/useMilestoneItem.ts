import { MilestoneDTO } from '@types';
import { useMemo, useState } from 'react';

export const useMilestoneItem = (milestone: MilestoneDTO) => {
  const [isEdit, setIsEdit] = useState(false);

  const [openCnt, closeCnt] = useMemo(() => {
    return milestone.issues.reduce(
      ([openCnt, closeCnt], issue) => {
        if (issue.status === 'open') return [openCnt + 1, closeCnt];
        return [openCnt, closeCnt + 1];
      },
      [0, 0],
    );
  }, [milestone]);

  const percentage = useMemo(() => {
    if (openCnt + closeCnt === 0) return 0;

    return Math.floor((closeCnt * 100) / (openCnt + closeCnt));
  }, [openCnt, closeCnt]);

  return {
    isEdit,
    openCnt,
    closeCnt,
    percentage,
    openEdit: () => setIsEdit(true),
    closeEdit: () => setIsEdit(false),
  };
};
