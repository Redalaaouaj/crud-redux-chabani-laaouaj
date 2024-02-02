import { ADD_LOCATAIRE, UPDATE_LOCATAIRE, DELETE_LOCATAIRE, FILTRER_LOCATAIRE, CLEAR_FILTER } from './locataireActionsTypes';

export const addLocataireAction = (locataire) => ({
  type: ADD_LOCATAIRE,
  payload: locataire,
});

export const updateLocataireAction = (locataire) => ({
  type: UPDATE_LOCATAIRE,
  payload: locataire,
});

export const deleteLocataireAction = (id) => ({
  type: DELETE_LOCATAIRE,
  payload: id,
});

export const filtrerLocataireAction = (idVille) => ({
  type: FILTRER_LOCATAIRE,
  payload: idVille,
});

export const clearFilterAction = () => ({
  type: CLEAR_FILTER,
});
