import { ADD_LOCATAIRE, UPDATE_LOCATAIRE, DELETE_LOCATAIRE, FILTRER_LOCATAIRE, CLEAR_FILTER } from '../actions/locataireActionsTypes';

export const initialState = {
  villes: [
    { id: 1, nom: 'Casablanca' },
    { id: 2, nom: 'Rabat' },
    { id: 3, nom: 'Agadir' },
  ],
  locataires: [
    { id: 1, nom: 'Alami', prenom: 'Moahemd', ville: 2 },
    { id: 2, nom: 'Benani', prenom: 'Sara', ville: 1 },
  ],
  locatairesFilter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATAIRE:
      return { ...state, locataires: [...state.locataires, action.payload] };

    case UPDATE_LOCATAIRE:
      return {
        ...state,
        locataires: state.locataires.map((locataire) => {
          if (locataire.id === action.payload.id) {
            return { ...locataire, ...action.payload };
          }
          return locataire;
        }),
      };

    case DELETE_LOCATAIRE:
      return { ...state, locataires: state.locataires.filter((locataire) => locataire.id !== action.payload) };

    case FILTRER_LOCATAIRE:
      return {
        ...state,
        locatairesFilter: state.locataires.filter((locataire) => locataire.ville === parseInt(action.payload)),
      };

    case CLEAR_FILTER:
      return { ...state, locatairesFilter: [] };

    default:
      return state;
  }
};

export default reducer;
