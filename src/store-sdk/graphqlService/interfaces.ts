import { RequestDocument } from "graphql-request";

export interface IGraphqlService {
  sendRequest: <T>(
    gqlString: RequestDocument,
    errorHandler?: (error: any) => void
  ) => Promise<T | undefined>;

  sendRequestWithCache: <T>(
    gqlString: RequestDocument,
    errorHandler?: (error: any) => void
  ) => Promise<T | undefined>;
}

export interface ICachingService {
  storeRequest(key: string, data: unknown): void;
  hasStoreData(key: string): boolean;
  getData<T>(key: string): T;
}
