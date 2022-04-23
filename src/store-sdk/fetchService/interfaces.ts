export interface IFetchService {
  fakeFetch: () => Promise<string>;
  heartBeat: () => Promise<any>;
}
