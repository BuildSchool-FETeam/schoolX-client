import { gql } from "graphql-request";

export const heartBeatQuery = gql`
  query heartBeat {
    heartBeat
  }
`;
