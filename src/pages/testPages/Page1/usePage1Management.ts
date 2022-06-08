/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IAuthData, IAuthStore } from "store-sdk/authStore/interfaces";
import { IFetchService } from "store-sdk/fetchService/interfaces";
import { useInjection } from "store-sdk/ioc-container/ioc.context";
import { Symbols } from "store-sdk/ioc-container/symbols";

export const usePage1Management = () => {
  const fetchService = useInjection<IFetchService>(Symbols.IFetchService);
  const authStore = useInjection<IAuthStore>(Symbols.IAuthStore);

  const [fetchedData, setFetchData] = useState<any>();
  const [authData, setAuthData] = useState<IAuthData>();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchService.heartBeat();
      setFetchData(data);
    }
    fetchData();

    const subscription = authStore.loginData$.subscribe((authInfo) => {
      setAuthData(authInfo);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    fetchedData,
    authData,
    onLogout: authStore.logout.bind(authStore),
  };
};
