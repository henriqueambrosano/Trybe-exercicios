export const PERSONAL_ACTION = 'PERSONAL_ACTION';
export const PROFESSIONAL_ACTION = 'PROFESSIONAL_ACTION';

export const personalAction = (payload) => ({
  type: PERSONAL_ACTION,
  payload,
});

export const professionalAction = (payload) => ({
  type: PROFESSIONAL_ACTION,
  payload,
});
