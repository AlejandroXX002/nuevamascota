// src/lib/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
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
    })

export const makeStore = () => {
    const isServer = typeof window === 'undefined'
    if (isServer) {
        return makeConfiguredStore()
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        const store: any = configureStore({
            reducer: persistedReducer,
        })
        store.__persistor = persistStore(store)
        return store
    }
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
