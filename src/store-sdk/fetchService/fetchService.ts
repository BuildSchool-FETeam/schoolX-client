import { inject, injectable } from "inversify";
import { Symbols } from "../ioc-container/symbols";
import { IGraphqlService } from "../graphqlService/interfaces";
import { IFetchService } from "./interfaces";
import { heartBeatQuery } from "./query.graphql";

@injectable()
export class FetchService implements IFetchService {
  @inject(Symbols.IGraphqlService)
  private gqlService!: IGraphqlService;

  async fakeFetch() {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve("Hello"), 3000);
    });
  }

  async heartBeat() {
    return this.gqlService.sendRequest(heartBeatQuery);
  }
}
