import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { LabelDTO, LabelRequestDTO } from '@types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { API } from '@services';

export const labelStore = atom<LabelDTO[]>({
  key: 'labelStore',
  default: [],
});

export const useLabelStore = () => {
  const [labelList, setLabelList] = useRecoilState(labelStore);

  useQuery('read_all_labels', API.read_all_labels, {
    onSuccess: ({ data }) => setLabelList(data),
  });

  return { labelList, setLabelList };
};

export const useSearchLabel = () => {
  const labelList = useRecoilValue(labelStore);

  return {
    searchLabelByName: (name: string) => labelList.find((v) => v.name === name),
  };
};

export const useLabelQuery = ({
  labelId,
  onSuccessEdit,
  onSuccessDelete,
}: {
  labelId: string;
  onSuccessEdit?: () => void;
  onSuccessDelete?: () => void;
}) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation(
    (data: LabelRequestDTO) => API.update_label(labelId, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_all_labels');
        onSuccessEdit?.();
      },
    },
  );

  const deleteMutaion = useMutation(() => API.delete_label(labelId), {
    onSuccess: () => {
      queryClient.invalidateQueries('read_all_labels');
      onSuccessDelete?.();
    },
  });

  return {
    onEditLabel: updateMutation.mutate,
    onDeleteLabel: () => deleteMutaion.mutate(),
  };
};

export const labelNewVisibleStore = atom<boolean>({
  key: 'labelNewVisibleStore',
  default: false,
});

export const useLabelNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(labelNewVisibleStore);

  return { visible, setVisible };
};
