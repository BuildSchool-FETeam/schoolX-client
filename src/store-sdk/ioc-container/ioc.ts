import "reflect-metadata";
import { Container } from "inversify";

import { FetchService } from "../fetchService/fetchService";
import { Symbols } from "./symbols";
import { GraphqlService } from "../graphqlService/graphqlService";
import { AuthStore } from "../authStore/authStore";
import { ErrorHandlingService } from "store-sdk/errorHandlingService/errorHandlingService";
import { NotificationModalStore } from "store-sdk/modalServices/modalNotificationStore";

const container = new Container({});

function registerServiceSingletonPre<IStore>(
  container: Container,
  symbols: Symbols,
  storeImpls: any
) {
  container.bind<IStore>(symbols).to(storeImpls).inSingletonScope();
}
const registerServiceSingleton = registerServiceSingletonPre.bind(
  null,
  container
);

registerServiceSingleton(Symbols.IFetchService, FetchService);
registerServiceSingleton(Symbols.IGraphqlService, GraphqlService);
registerServiceSingleton(Symbols.IAuthStore, AuthStore);
registerServiceSingleton(Symbols.IErrorHandlingService, ErrorHandlingService);
registerServiceSingleton(
  Symbols.INotificationModalStore,
  NotificationModalStore
);

export default container;
