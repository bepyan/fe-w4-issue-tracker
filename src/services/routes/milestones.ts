import { _axios } from '@services';
import { IMilestone, MilestoneRequestDTO } from '@types';

const baseRoute = '/milestones';

// POST

export const create_milestone = (data: MilestoneRequestDTO) => {
  return _axios<void>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

export const read_all_milestones = () => {
  return _axios<IMilestone[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

// PUT

export const update_milestone = (
  labelId: number,
  data: MilestoneRequestDTO,
) => {
  return _axios<void>({
    url: `${baseRoute}/${labelId}`,
    method: 'PUT',
    data,
  });
};

// DELETE

export const delete_milestone = (milestoneId: number) => {
  return _axios<void>({
    url: `${baseRoute}/${milestoneId}`,
    method: 'DELETE',
  });
};
