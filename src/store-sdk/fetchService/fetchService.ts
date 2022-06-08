import { inject, injectable } from "inversify";
import { Symbols } from "../ioc-container/symbols";
import { IGraphqlService } from "../graphqlService/interfaces";
import { IFetchService } from "./interfaces";
import { heartBeatQuery } from "./test.graphql";

@injectable()
export class FetchService implements IFetchService {
  @inject(Symbols.IGraphqlService)
  private gqlService!: IGraphqlService;

  async heartBeat() {
    return this.gqlService.sendRequest<boolean>(heartBeatQuery);
  }
}
