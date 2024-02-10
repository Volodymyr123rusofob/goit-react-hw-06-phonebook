import { combineReducers } from 'redux';
import { contactReducer } from './contactsList/reducer';
import { filterReducer } from './contactsFilters/reducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

// import { combineReducers } from 'redux';
// import { contactReducer } from './contactsList/reducer';
// import { filterReducer } from './contactsFilters/reducer';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

//  const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filters: filterReducer,
// });

//export const persistedReducer = persistReducer(persistConfig, rootReducer);
