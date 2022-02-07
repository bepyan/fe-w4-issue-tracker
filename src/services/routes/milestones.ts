import { _axios } from '@services';
import { MilestoneDTO, MilestoneRequestDTO } from '@types';

const baseRoute = '/milestones';

// POST

export const create_milestone = (data: MilestoneRequestDTO) => {
  return _axios<MilestoneRequestDTO>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

// GET

export const read_all_milestones = () => {
  return _axios<MilestoneDTO[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

export const read_milestone_by_id = (milestoneId: string) => {
  return _axios<MilestoneDTO>({
    url: `${baseRoute}/${milestoneId}`,
    method: 'GET',
  });
};

// PATCH

export const update_milestone = (
  milestone: string,
  data: MilestoneRequestDTO,
) => {
  return _axios<MilestoneDTO>({
    url: `${baseRoute}/${milestone}`,
    method: 'PATCH',
    data,
  });
};

// DELETE

export const delete_milestone = (milestoneId: string) => {
  return _axios<void>({
    url: `${baseRoute}/${milestoneId}`,
    method: 'DELETE',
  });
};
