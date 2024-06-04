import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import counterReducer from '@/lib/feautures/example/counterSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    counter: counterReducer,
});

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
    });

type ExtendedStore = ReturnType<typeof makeConfiguredStore> & { __persistor?: Persistor };

export const makeStore = (): ExtendedStore => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        // Si estamos en el servidor, devolvemos el store configurado sin persistencia
        return makeConfiguredStore() as ExtendedStore;
    } else {
        // Si estamos en el cliente, configuramos la persistencia
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = configureStore({
            reducer: persistedReducer,
        }) as ExtendedStore;
        store.__persistor = persistStore(store);
        return store;
    }
};

// Tipos para el store, el estado y el dispatch
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
