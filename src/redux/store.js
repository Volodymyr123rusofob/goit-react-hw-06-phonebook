import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// import { persistStore } from 'redux-persist';
// import { persistedReducer } from './rootReducer';

// export const persistor = persistStore(store);
