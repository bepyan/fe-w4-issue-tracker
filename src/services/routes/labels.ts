import { _axios } from '@services';
import { LabelDTO, LabelRequestDTO } from '@types';

const baseRoute = '/labels';

// POST

export const create_label = (data: LabelRequestDTO) => {
  return _axios<LabelDTO>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

export const read_all_labels = () => {
  return _axios<LabelDTO[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

export const read_label_by_id = (labelId: string) => {
  return _axios<LabelDTO>({
    url: `${baseRoute}/${labelId}`,
    method: 'GET',
  });
};

// PATCH

export const update_label = (labelId: string, data: LabelRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}/${labelId}`,
    method: 'PATCH',
    data,
  });
};

// DELETE

export const delete_label = (labelId: string) => {
  return _axios<void>({
    url: `${baseRoute}/${labelId}`,
    method: 'DELETE',
  });
};
