import { RequestDocument } from "graphql-request";

export interface IGraphqlService {
  sendRequest: <T>(
    gqlString: RequestDocument,
    errorHandler?: (error: any) => void
  ) => Promise<T | undefined>;
}
