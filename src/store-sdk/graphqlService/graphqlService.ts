import { config } from "config/config.dev";
import { GraphQLClient, RequestDocument } from "graphql-request";
import { GraphQLError } from "graphql-request/dist/types";
import { inject, injectable } from "inversify";
import { IErrorHandlingService } from "store-sdk/errorHandlingService/interfaces";
import { Symbols } from "store-sdk/ioc-container/symbols";
import { IGraphqlService } from "./interfaces";

@injectable()
export class GraphqlService implements IGraphqlService {
  private endpoint = config.gqlEndpoint;
  private readonly client = new GraphQLClient(this.endpoint, { headers: {} });

  @inject(Symbols.IErrorHandlingService)
  private errorService!: IErrorHandlingService;

  async sendRequest<T>(
    gqlString: RequestDocument,
    errorHandler?: (error: any) => void
  ) {
    if (!errorHandler) {
      errorHandler = this.errorService.defaultHandling.bind(this.errorService);
    }
    try {
      return await this.client.request<T>(gqlString);
    } catch (error) {
      errorHandler(error as GraphQLError[]);
    }
  }
}
