import { GraphQLError } from "graphql-request/dist/types";
import { injectable } from "inversify";
import { IErrorHandlingService } from "./interfaces";

@injectable()
export class ErrorHandlingService implements IErrorHandlingService {
  defaultHandling(error: unknown) {
    console.log("Got Error: ", this.getErrorMessages(error as GraphQLError[]));
  }

  private getErrorMessages(error?: any) {
    return error.message.split(": ")[0];
  }
}
