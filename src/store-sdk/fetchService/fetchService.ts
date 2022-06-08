import { inject, injectable } from "inversify";
import { Symbols } from "../ioc-container/symbols";
import { IGraphqlService } from "../graphqlService/interfaces";
import { IFetchService } from "./interfaces";
import { heartBeatQuery } from "./test.graphql";
import { IErrorHandlingService } from "store-sdk/errorHandlingService/interfaces";

@injectable()
export class FetchService implements IFetchService {
  @inject(Symbols.IGraphqlService)
  private gqlService!: IGraphqlService;

  @inject(Symbols.IErrorHandlingService)
  private errorService!: IErrorHandlingService;

  async heartBeat() {
    return this.gqlService.sendRequest<boolean>(
      heartBeatQuery,
      undefined,
      this.errorService.skipHandlingError.bind(this.errorService)
    );
  }
}
