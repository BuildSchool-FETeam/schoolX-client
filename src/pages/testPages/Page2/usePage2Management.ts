import { IAuthStore } from 'store-sdk/authStore/interfaces';
import { useInjection } from 'store-sdk/ioc-container/ioc.context';
import { Symbols } from 'store-sdk/ioc-container/symbols';

export const usePage2Management = () => {
  const authStore = useInjection<IAuthStore>(Symbols.IAuthStore);

  return {
    login: authStore.login.bind(authStore)
  };
};
