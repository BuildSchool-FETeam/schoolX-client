import { config } from "config/config.dev";
import { GraphQLClient, RequestDocument } from "graphql-request";
import { GraphQLError } from "graphql-request/dist/types";
import { inject, injectable } from "inversify";
import {
  ErrorHandler,
  IErrorHandlingService,
} from "store-sdk/errorHandlingService/interfaces";
import { Symbols } from "store-sdk/ioc-container/symbols";
import { ICachingService, IGraphqlService, VariableType } from "./interfaces";

@injectable()
export class GraphqlService implements IGraphqlService {
  private endpoint = config.gqlEndpoint;
  private readonly client = new GraphQLClient(this.endpoint, { headers: {} });

  @inject(Symbols.IErrorHandlingService)
  private errorService!: IErrorHandlingService;

  @inject(Symbols.ICachingService)
  private cachingService!: ICachingService;

  async sendRequest<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandler?: ErrorHandler
  ) {
    if (!errorHandler) {
      errorHandler = this.errorService.defaultHandling.bind(this.errorService);
    }
    try {
      return await this.client.request<T>(gqlString, variables);
    } catch (error) {
      errorHandler(error as GraphQLError[]);
    }
  }

  async sendRequestWithCache<T, U extends VariableType = undefined>(
    gqlString: RequestDocument,
    variables?: U,
    errorHandler?: ErrorHandler
  ) {
    if (!errorHandler) {
      errorHandler = this.errorService.defaultHandling.bind(this.errorService);
    }
    try {
      let data: T | undefined = undefined;
      let key = gqlString.toString();

      if (variables) {
        key += variables.toString();
      }

      if (this.cachingService.hasStoredData(key)) {
        data = this.cachingService.getData<T>(key);
      } else {
        data = await this.client.request<T>(gqlString, variables);
        this.cachingService.storeRequest(key, data);
      }
      return data;
    } catch (error) {
      errorHandler(error as GraphQLError[]);
    }
  }
}
