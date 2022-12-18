/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { IAuthData, IAuthStore } from 'store-sdk/authStore/interfaces';
import { useInjection } from 'store-sdk/ioc-container/ioc.context';
import { Symbols } from 'store-sdk/ioc-container/symbols';

export const usePage1Management = () => {
  const authStore = useInjection<IAuthStore>(Symbols.IAuthStore);

  const [authData, setAuthData] = useState<IAuthData>();

  useEffect(() => {
    const subscription = authStore.loginData$.subscribe((authInfo) => {
      setAuthData(authInfo);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    authData,
    onLogout: authStore.logout.bind(authStore)
  };
};
