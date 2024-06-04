'use client';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef < AppStore > ();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // Si __persistor es undefined, muestra un mensaje de error o retorna null
  if (!storeRef.current.__persistor) {
    console.error("Persistor is undefined");
    return null; // O podrías manejarlo de otra manera, como mostrar un mensaje de error en la UI
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
